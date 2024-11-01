from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import subprocess
import os
import time
from datetime import datetime

app = Flask(__name__)
CORS(app)


@app.route('/api/scrape', methods=['POST'])
def scrape_data():
    # Get the parameters from the request
    search_query = request.json.get('query')
    start_date = request.json.get('start_date')
    end_date = request.json.get('end_date')

    # Validate input parameters
    if not search_query or not start_date or not end_date:
        return jsonify({"Error": "Missing 'query', 'start_date', or 'end_date' parameter."}), 400

    # Validate date format
    try:
        start_date = datetime.strptime(start_date, '%Y-%m-%d')
        end_date = datetime.strptime(end_date, '%Y-%m-%d')
        if start_date >= end_date:
            return jsonify({"Error": "'start_date' must be before 'end_date'."}), 400
    except ValueError:
        return jsonify({"Error": "Invalid date format. Use 'YYYY-MM-DD'."}), 400

    # Format the query string
    formatted_query = f"{search_query} since:{start_date.strftime(
        '%Y-%m-%d')} until:{end_date.strftime('%Y-%m-%d')}"

    # Create a filename based on the query
    query_filename = "#" + f"{search_query.replace('#', '').replace(' ', '_')}_since_{
        start_date.strftime('%Y-%m-%d')}_until_{end_date.strftime('%Y-%m-%d')}" + ".json"

    print(query_filename)

    # Create a request_list.json file based on the search query
    request_data = [
        {
            "scraper": "XTwitterScraper",
            "endpoint": "data/twitter/tweets/recent",
            "priority": 3,
            "params": {
                "query": formatted_query,
                "count": 100
            }
        }
    ]

    # Save to request_list.json
    with open('request_list.json', 'w') as f:
        json.dump(request_data, f)

    # Run the Masa CLI command to process the request
    try:

        subprocess.run(['masa-ai-cli', 'process',
                       'request_list.json'], check=True)

        # Construct the path to the expected JSON file
        data_file_path = os.path.join('data', 'xtwitter', query_filename)

        # Wait for the file to be created (fetch only once)
        timeout = 30  # Timeout in seconds
        start_time = time.time()

        # Wait for the file to be created only once
        while not os.path.exists(data_file_path):
            if time.time() - start_time > timeout:
                return jsonify({"Error": "Timeout waiting for data file"}), 504
            time.sleep(1)  # Check every second

        # Load the scraped data from the specific file
        with open(data_file_path, 'r') as f:
            scraped_data = json.load(f)

        return jsonify(scraped_data)

    except subprocess.CalledProcessError as e:
        return jsonify({"Error": str(e)}), 500
    except Exception as e:
        return jsonify({"Error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)

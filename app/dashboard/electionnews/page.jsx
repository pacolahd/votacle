"use client";

import { useEffect, useState } from "react";
import data from "../../../data/#uselections_since_2024-10-27_until_2024-10-31.json"; // Adjust path as necessary
import { FaHeart, FaEye } from "react-icons/fa"; // Importing icons

const DisplayTweets = () => {
    const [sortedResults, setSortedResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const tweetsPerPage = 6; // Adjust as needed

    useEffect(() => {
        const sorted = [...data].sort((a, b) => {
            const aHasPhotos = a.Tweet.Photos && a.Tweet.Photos.length > 0 ? 1 : 0;
            const bHasPhotos = b.Tweet.Photos && b.Tweet.Photos.length > 0 ? 1 : 0;

            if (aHasPhotos !== bHasPhotos) {
                return bHasPhotos - aHasPhotos; // Photos first
            }

            return b.Tweet.Views - a.Tweet.Views; // Then by views
        });

        setSortedResults(sorted);
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
    };

    // Pagination Logic
    const indexOfLastTweet = currentPage * tweetsPerPage;
    const indexOfFirstTweet = indexOfLastTweet - tweetsPerPage;
    const currentTweets = sortedResults.slice(indexOfFirstTweet, indexOfLastTweet);
    const totalPages = Math.ceil(sortedResults.length / tweetsPerPage);

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
                (From Twitter)
            </h1>
            {sortedResults.length === 0 && (
                <p className="text-center text-gray-600">No tweets available.</p>
            )}
            {currentTweets.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
                    {currentTweets.map(
                        (
                            {
                                Tweet: {
                                    Hashtags,
                                    Likes,
                                    PermanentURL,
                                    Photos,
                                    Text,
                                    TimeParsed,
                                    Username,
                                    Views,
                                },
                            },
                            index,
                        ) => {
                            const hasPhotos = Photos && Photos.length > 0;

                            return (
                                <div
                                    key={index}
                                    className={`rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 mb-8 ${hasPhotos ? "bg-white" : "bg-gray-50 border border-gray-300"}`}
                                >
                                    {hasPhotos ? (
                                        <div className="relative">
                                            <img
                                                src={Photos[0]?.URL}
                                                alt="Tweet"
                                                className="w-full h-56 object-cover"
                                            />
                                            <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-gray-900 w-full h-full opacity-75"></div>
                                            <div className="absolute bottom-0 left-0 p-4 z-10">
                                                <h2 className="text-lg font-semibold text-white">
                                                    {Username}
                                                </h2>
                                                <span className="text-sm text-gray-200">
                                                    {formatDate(TimeParsed)}
                                                </span>
                                            </div>
                                            <div className="absolute bottom-0 right-0 p-4 z-10 flex space-x-2 text-white">
                                                <div className="flex items-center">
                                                    <FaHeart className="text-red-500" />{" "}
                                                    <span>{Likes}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <FaEye className="text-gray-200" />{" "}
                                                    <span>{Views}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="p-5">
                                            <h2 className="text-lg font-semibold text-gray-800">
                                                {Username}
                                            </h2>
                                            <span className="text-sm text-gray-500">
                                                {formatDate(TimeParsed)}
                                            </span>
                                        </div>
                                    )}
                                    <div className="p-5">
                                        <p
                                            className={`text-gray-800 ${hasPhotos ? "line-clamp-4" : ""}`}
                                        >
                                            {Text}
                                        </p>
                                        <div className="mt-3 flex flex-wrap">
                                            {Hashtags.slice(0, 3).map((hashtag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-blue-200 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded"
                                                >
                                                    #{hashtag}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={PermanentURL}
                                            className="text-blue-500 hover:underline mt-2 block"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View on Twitter
                                        </a>
                                    </div>
                                </div>
                            );
                        },
                    )}
                </div>
            )}
            <div className="flex justify-center mt-5">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="bg-blue-500 text-white px-4 py-2 rounded-l disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="px-4 py-2 flex items-center">
                    {currentPage} / {totalPages}
                </span>
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DisplayTweets;

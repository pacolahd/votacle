"use client"; // This line makes this component a Client Component

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2"; // Using Bar chart for dynamic visualization
import "chart.js/auto";

const electionsData = [
  {
    id: 1,
    title: "School President Election 2024",
    description: "Cast your vote for the next school president.",
    status: "Ongoing",
    totalVotes: 150,
    eligibility: "All enrolled students can vote.",
    candidates: [
      {
        name: "Alice Johnson",
        votes: 90,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Promising to enhance school spirit through events and improve communication between students and administration.",
      },
      {
        name: "Alice Johnson",
        votes: 90,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Promising to enhance school spirit through events and improve communication between students and administration.",
      },
      {
        name: "Bob Smith",
        votes: 60,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Aiming to introduce new clubs and improve student resources.",
      },
    ],
    startDate: "2024-10-10",
    endDate: "2024-10-20",
  },
  {
    id: 2,
    title: "Local Government Election 2024",
    description:
      "This election allows citizens to elect their local representatives and shape community policies.",
    status: "Upcoming",
    totalVotes: 0,
    eligibility: "Residents aged 18 and above can vote.",
    candidates: [
      {
        name: "Charlie Brown",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Promising to improve public transportation and community safety.",
      },
      {
        name: "Diana Green",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Focusing on environmental sustainability and community engagement.",
      },
    ],
    startDate: "2024-11-01",
    endDate: "2024-11-05",
  },
  {
    id: 3,
    title: "Class Representative Election 2024",
    description:
      "The elected representative will voice student concerns and drive positive change.",
    status: "Completed",
    totalVotes: 200,
    eligibility: "All students in the class can vote.",
    candidates: [
      {
        name: "Eve Jackson",
        votes: 130,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Committed to representing student concerns and organizing study groups.",
      },
      {
        name: "John Doe",
        votes: 70,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Pledging to enhance communication between students and faculty.",
      },
    ],
    startDate: "2024-09-01",
    endDate: "2024-09-05",
  },
  {
    id: 4,
    title: "City Mayor Election 2025",
    description:
      "Vote to elect a leader who will shape the city's future and address key issues.",
    status: "Upcoming",
    totalVotes: 0,
    eligibility: "All city residents aged 18 and above can vote.",
    candidates: [
      {
        name: "Lucy Hill",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Plans to improve city infrastructure and enhance community programs.",
      },
      {
        name: "Henry Gold",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform: "Focused on economic growth and public safety.",
      },
    ],
    startDate: "2025-02-01",
    endDate: "2025-02-10",
  },
  {
    id: 5,
    title: "Senator Election 2024",
    description: "Choose your state senator in this important election.",
    status: "Ongoing",
    totalVotes: 400,
    eligibility: "All state residents aged 18 and above can vote.",
    candidates: [
      {
        name: "Anna Taylor",
        votes: 220,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Advocating for education reform and healthcare accessibility.",
      },
      {
        name: "Mike Rogers",
        votes: 180,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform: "Focused on job creation and infrastructure development.",
      },
    ],
    startDate: "2024-10-15",
    endDate: "2024-10-25",
  },
  {
    id: 6,
    title: "School Treasurer Election 2024",
    description:
      "Elect a treasurer to manage the school's finances effectively.",
    status: "Completed",
    totalVotes: 100,
    eligibility: "All students can vote.",
    candidates: [
      {
        name: "Sarah Connor",
        votes: 70,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Promising to enhance financial transparency and allocate resources effectively.",
      },
      {
        name: "Robert Brown",
        votes: 30,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform: "Aiming to secure additional funding for student activities.",
      },
    ],
    startDate: "2024-08-15",
    endDate: "2024-08-20",
  },
  {
    id: 7,
    title: "Governor Election 2025",
    description: "Make your voice heard in the upcoming election for governor.",
    status: "Upcoming",
    totalVotes: 0,
    eligibility: "All state residents aged 18 and above can vote.",
    candidates: [
      {
        name: "William Black",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Committing to criminal justice reform and education improvement.",
      },
      {
        name: "Emily White",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform: "Focused on healthcare and infrastructure projects.",
      },
    ],
    startDate: "2025-03-01",
    endDate: "2025-03-15",
  },
  {
    id: 8,
    title: "University Senate Election 2024",
    description:
      "Vote for your university senate members who will represent you.",
    status: "Ongoing",
    totalVotes: 300,
    eligibility: "All university students can vote.",
    candidates: [
      {
        name: "David Blue",
        votes: 180,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Aiming to improve student life and advocate for better facilities.",
      },
      {
        name: "Jessica Green",
        votes: 120,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        platform:
          "Committed to fostering diversity and inclusion within the university.",
      },
    ],
    startDate: "2024-10-18",
    endDate: "2024-10-28",
  },
];

const VotePage = ({ params }) => {
  const { id } = params; // Get the dynamic parameter from params

  const [election, setElection] = useState(null);
  const [chartData, setChartData] = useState({});
  const [votedCandidateId, setVotedCandidateId] = useState(null);

  useEffect(() => {
    if (id) {
      const foundElection = electionsData.find(
        (election) => election.id === parseInt(id) // Ensure the id is an integer
      );
      setElection(foundElection);

      if (foundElection) {
        const candidateNames = foundElection.candidates.map(
          (candidate) => candidate.name
        );
        const candidateVotes = foundElection.candidates.map(
          (candidate) => candidate.votes
        );

        setChartData({
          labels: candidateNames,
          datasets: [
            {
              label: "Votes",
              data: candidateVotes,
              backgroundColor: "rgba(138, 43, 226, 0.6)", // Purple background
              borderColor: "rgba(138, 43, 226, 1)", // Darker purple border
              borderWidth: 1,
            },
          ],
        });
      }
    }
  }, [id]);

  const handleVote = (candidateId) => {
    if (
      election &&
      election.status === "Ongoing" &&
      votedCandidateId === null
    ) {
      // Update only the selected candidate's votes
      const updatedCandidates = election.candidates.map((candidate) => {
        if (candidate.id === candidateId) {
          return { ...candidate, votes: candidate.votes + 1 }; // Increase votes for the selected candidate
        }
        return candidate; // Keep other candidates unchanged
      });

      // Update the election state
      setElection((prevElection) => ({
        ...prevElection,
        candidates: updatedCandidates,
        totalVotes: prevElection.totalVotes + 1, // Increment total votes
      }));

      // Set the voted candidate ID
      setVotedCandidateId(candidateId);
    }
  };

  if (!election) return <p>Loading...</p>;

  return (
    <div className="bg-purple-50 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-purple-100 rounded-2xl shadow-lg p-8 max-w-6xl w-full transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-5xl font-extrabold text-center mb-4 text-purple-800 gradient-text">
          {election.title}
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Description:</strong> {election.description}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Status:</strong>{" "}
          <span className="font-semibold text-green-500">
            {election.status}
          </span>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Total Votes:</strong>{" "}
          <span className="font-semibold text-yellow-600">
            {election.totalVotes}
          </span>
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Start Date:</strong> {election.startDate}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>End Date:</strong> {election.endDate}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Eligibility:</strong> {election.eligibility}
        </p>

        {/* Statistics Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-purple-300 p-4 shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-center text-purple-800">
              Vote Distribution
            </h3>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    labels: {
                      color: "black",
                    },
                  },
                  title: {
                    display: true,
                    text: "Votes by Candidate",
                    color: "black",
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      color: "black",
                    },
                  },
                  y: {
                    ticks: {
                      color: "black",
                    },
                  },
                },
              }}
            />
          </div>
          <div className="bg-white rounded-lg border border-purple-300 p-4 shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-center text-purple-800">
              Total Votes Cast
            </h3>
            <p className="text-center text-3xl font-bold text-yellow-600">
              {election.totalVotes}
            </p>
          </div>
        </div>

        {/* Candidate Profiles */}
        <h3 className="text-3xl font-semibold mb-4 text-center text-purple-800">
          Candidates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {election.candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-gray-50 flex flex-col justify-between p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-500"
            >
              <div>
                <img
                  src={candidate.photo}
                  alt={candidate.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold text-center text-purple-800">
                  {candidate.name}
                </h4>
                <p className="text-center text-gray-600 mb-2">
                  {candidate.platform}
                </p>
                <p className="text-center text-gray-500">
                  Votes: {candidate.votes}
                </p>
              </div>
              {election.status === "Ongoing" && (
                <button
                  className="mt-4 bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300"
                  onClick={() => handleVote(candidate.id)}
                  disabled={votedCandidateId !== null} // Disable if already voted
                >
                  {votedCandidateId === candidate.id ? "Voted" : "Vote"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VotePage;
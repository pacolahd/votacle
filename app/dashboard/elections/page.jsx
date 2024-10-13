// app/dashboard/elections/page.js

"use client"; // This line makes this component a Client Component

// export const metadata = {
//   title: "Votacle · Elections",
// };
import Link from "next/link";
import { useState } from "react";

// Sample data
const electionsData = [
  {
    id: 1,
    title: "School President Election 2024",
    description: "Cast your vote for the next school president.",
    status: "Ongoing",
    totalVotes: 150,
    candidates: [
      {
        name: "Alice Johnson",
        votes: 90,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        name: "Bob Smith",
        votes: 60,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
    ],
    startDate: "2024-10-10",
    endDate: "2024-10-20",
  },
  {
    id: 2,
    title: "Local Government Election 2024",
    description:
      "This election allows citizens to elect their local representatives and shape community policies. local representatives and shape community policies.",
    status: "Upcoming",
    totalVotes: 0,
    candidates: [
      {
        name: "Charlie Brown",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        name: "Diana Green",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
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
    candidates: [
      {
        name: "Eve Jackson",
        votes: 130,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        name: "John Doe",
        votes: 70,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
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
    candidates: [
      {
        name: "Lucy Hill",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        name: "Henry Gold",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
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
    candidates: [
      {
        name: "Anna Taylor",
        votes: 220,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        name: "Mike Rogers",
        votes: 180,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
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
    candidates: [
      {
        name: "Sarah Connor",
        votes: 70,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        name: "Robert Brown",
        votes: 30,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
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
    candidates: [
      {
        name: "William Black",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        name: "Emily White",
        votes: 0,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
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
    candidates: [
      {
        name: "David Blue",
        votes: 180,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
      {
        name: "Jessica Green",
        votes: 120,
        photo:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      },
    ],
    startDate: "2024-10-18",
    endDate: "2024-10-28",
  },
];


// Helper function to calculate progress percentage
const getProgressPercentage = (votes, totalVotes) => {
  return totalVotes === 0 ? 0 : Math.round((votes / totalVotes) * 100);
};

// Election card component
const ElectionCard = ({ election }) => {
  return (
    <div
      className={`relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg border-l-4 
      ${
        election.status === "Ongoing"
          ? "border-green-500"
          : election.status === "Upcoming"
          ? "border-yellow-500"
          : "border-gray-500"
      } transition-transform transform hover:scale-105 hover:shadow-2xl`}
    >
      <div className="relative z-10">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-white">{election.title}</h3>
          <div className="flex items-center">
            <span
              className={`px-2 py-1 text-xs font-semibold rounded-lg 
              ${
                election.status === "Ongoing"
                  ? "bg-green-600"
                  : election.status === "Upcoming"
                  ? "bg-yellow-600"
                  : "bg-gray-600"
              } text-white`}
            >
              {election.status}
            </span>
          </div>
        </div>

        {/* Election Period */}
        <p className="text-gray-300 mt-2">
          Period:{" "}
          <span className="font-semibold">
            {election.startDate} - {election.endDate}
          </span>
        </p>

        {/* If Upcoming or Completed, show the description */}
        {(election.status === "Upcoming" ||
          election.status === "Completed") && (
          <p className="text-gray-300 mt-3">{election.description}</p>
        )}

        {/* If Ongoing, show candidate voting progress */}
        {election.status === "Ongoing" && (
          <div className="mt-4">
            {election.candidates.map((candidate) => {
              const percentage = getProgressPercentage(
                candidate.votes,
                election.totalVotes
              );
              return (
                <div key={candidate.name} className="mt-4">
                  <div className="flex items-center">
                    <div className="avatar w-10">
                      <div className="w-10 rounded-full border-2 border-gray-800 shadow-lg transition-transform duration-300 hover:scale-110">
                        <img src={candidate.photo} alt={candidate.name} />
                      </div>
                    </div>
                    <span className="text-gray-300 font-semibold ml-4">
                      {candidate.name}
                    </span>
                    <span className="ml-auto text-gray-400">
                      {candidate.votes} votes
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 mt-1 relative">
                    <div
                      className="absolute top-0 left-0 h-full rounded-full transition-all"
                      style={{
                        width: `${percentage}%`,
                        background: `linear-gradient(90deg, ${
                          percentage < 50
                            ? "#ff5555"
                            : percentage < 75
                            ? "#f1c40f"
                            : "#1abc9c"
                        }, #2ecc71)`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Details link */}
        <Link href={`/dashboard/vote/${election.id}`} passHref>
          <button className="mt-6 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-lg hover:opacity-90 transition">
            View Election Details
          </button>
        </Link>
      </div>
    </div>
  );
};

// Main page component
export default function ElectionList() {
  const [elections] = useState(electionsData);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Election Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {elections.map((election) => (
          <ElectionCard key={election.id} election={election} />
        ))}
      </div>
    </div>
  );
}

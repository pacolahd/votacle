"use client"; // This line makes this component a Client Component

import { useEffect, useState } from "react";

const CommunityDetailsPage = ({ params }) => {
  const { id } = params; // Get the dynamic parameter from params

  const [community, setCommunity] = useState(null);

  // Sample community data
  const communitiesData = [
    {
      id: 1,
      title: "Community A",
      members: 150,
      electionsHeld: 5,
      activityLevel: "High",
      lastElection: "2024-09-15",
      description: "Community A is dedicated to enhancing member engagement.",
      image:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    },
    {
      id: 2,
      title: "Community B",
      members: 90,
      electionsHeld: 3,
      activityLevel: "Medium",
      lastElection: "2024-08-22",
      description: "Community B focuses on collaborative projects.",
      image:
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    },
    {
      id: 3,
      title: "Community C",
      members: 200,
      electionsHeld: 10,
      activityLevel: "Low",
      lastElection: "2024-07-30",
      description: "Community C aims to foster a supportive environment.",
      image:
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    },
  ];

  useEffect(() => {
    if (id) {
      const foundCommunity = communitiesData.find(
        (community) => community.id === parseInt(id) // Ensure the id is an integer
      );
      setCommunity(foundCommunity);
    }
  }, [id]);

  if (!community) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      {/* Sidebar */}
      
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            {community.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <img
              src={community.image}
              alt={community.title}
              className="w-full h-64 object-cover rounded-lg border-4 border-purple-300 shadow-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Description:</strong> {community.description}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Members:</strong> {community.members}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Elections Held:</strong> {community.electionsHeld}
              </p>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Activity Level:</strong>{" "}
                <span
                  className={`font-semibold ${
                    community.activityLevel === "High"
                      ? "text-green-500"
                      : community.activityLevel === "Medium"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {community.activityLevel}
                </span>
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Last Election:</strong> {community.lastElection}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailsPage;

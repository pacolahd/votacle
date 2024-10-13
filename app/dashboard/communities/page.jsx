import React from "react";
import Link from "next/link"; // Import Link from next/link

const communitiesData = [
  {
    id: 1,
    title: "Community A",
    members: 150,
    electionsHeld: 5,
    activityLevel: "High",
    lastElection: "2024-09-15",
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
    image:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  },
];

export default function CommunitiesPage() {
  return (
    <div className="container min-h-screen flex flex-col mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Communities</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {communitiesData.map((community) => (
          <div
            key={community.id}
            className="card bg-base-100 border-4 border-purple-500 shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <figure>
              <img
                src={community.image}
                alt={community.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between items-center">
                {community.title}
                <div className="badge badge-secondary">Active</div>
              </h2>
              <p className="text-sm">Members: {community.members}</p>
              <p className="text-sm">
                Elections Held: {community.electionsHeld}
              </p>
              <p className="text-sm">
                Activity Level: {community.activityLevel}
              </p>
              <p className="text-sm">Last Election: {community.lastElection}</p>
              <div className="card-actions justify-end mt-4">
                {/* Link to the community details page */}
                <Link
                  href={`/dashboard/community/${community.id}`}
                  className="btn btn-primary"
                >
                  View Community
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

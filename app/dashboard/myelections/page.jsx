"use client"; // This line makes this component a Client Component

// app/dashboard/myelections/page.js
import { useState } from "react";
import Modal from "react-modal";

// Sample initial elections
const initialElections = [
  {
    id: 1,
    title: "Community Fundraiser Vote",
    description: "Vote for the community fundraiser project.",
    status: "Completed",
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
    startDate: "2024-06-12",
    endDate: "2024-06-12",
    eligibility: "Students aged 15 and above",
    voterDatabase: ["student1@example.com", "student2@example.com"],
  },
  // Additional elections can be added here...
];

export default function MyElections() {
  const [elections, setElections] = useState(initialElections);
  const [newElection, setNewElection] = useState({
    title: "",
    description: "",
    candidates: [],
    startDate: "",
    endDate: "",
    eligibility: "",
    voterDatabase: "",
  });
  const [newCandidate, setNewCandidate] = useState({ name: "", photo: "" });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewElection((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCandidateChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addCandidate = () => {
    if (newCandidate.name && newCandidate.photo) {
      setNewElection((prev) => ({
        ...prev,
        candidates: [...prev.candidates, newCandidate],
      }));
      setNewCandidate({ name: "", photo: "" }); // Reset candidate input fields
    }
  };

  const addElection = () => {
    const id = elections.length + 1;
    setElections((prev) => [
      ...prev,
      {
        ...newElection,
        id,
        totalVotes: 0,
        voterDatabase: newElection.voterDatabase
          .split(",")
          .map((email) => email.trim()),
      },
    ]);
    setModalIsOpen(false); // Close modal
    setNewElection({
      title: "",
      description: "",
      candidates: [],
      startDate: "",
      endDate: "",
      eligibility: "",
      voterDatabase: "",
    });
  };

  const deleteElection = (id) => {
    setElections((prev) => prev.filter((election) => election.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-4 text-white">My Elections</h1>

      <button
        onClick={() => setModalIsOpen(true)}
        className="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300 mb-4"
      >
        Create New Election
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {elections.map((election) => (
          <div
            key={election.id}
            className="p-4 bg-gray-800 border-4 border-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-bold mb-2 text-white">
              {election.title}
            </h3>
            <p className="mb-2 text-gray-300">{election.description}</p>
            <p className="mb-1 text-gray-200">
              <strong>Status:</strong> {election.status}
            </p>
            <p className="mb-1 text-gray-200">
              <strong>Eligibility:</strong> {election.eligibility}
            </p>
            <p className="mb-1 text-gray-200">
              <strong>Start Date:</strong> {election.startDate}
            </p>
            <p className="mb-1 text-gray-200">
              <strong>End Date:</strong> {election.endDate}
            </p>
            <p className="mb-1 text-gray-200">
              <strong>Voter Database:</strong>{" "}
              {election.voterDatabase.join(", ")}
            </p>
            <h4 className="font-semibold mt-2 text-white">Candidates:</h4>
            <ul>
              {election.candidates.map((candidate, index) => (
                <li key={index} className="flex items-center mb-2">
                  <img
                    src={candidate.photo}
                    alt={candidate.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span className="text-gray-300">{candidate.name}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => deleteElection(election.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
              <button className="text-blue-500 hover:text-blue-700">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Election Creation */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-gray-800 rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 mx-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">
          Create New Election
        </h2>
        <input
          type="text"
          name="title"
          value={newElection.title}
          onChange={handleChange}
          placeholder="Election Title"
          className="border p-2 rounded w-full mb-2 bg-gray-700 text-white"
          required
        />
        <textarea
          name="description"
          value={newElection.description}
          onChange={handleChange}
          placeholder="Election Description"
          className="border p-2 rounded w-full mb-2 bg-gray-700 text-white"
          required
        />
        <input
          type="text"
          name="eligibility"
          value={newElection.eligibility}
          onChange={handleChange}
          placeholder="Eligibility Criteria"
          className="border p-2 rounded w-full mb-2 bg-gray-700 text-white"
          required
        />
        <input
          type="date"
          name="startDate"
          value={newElection.startDate}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2 bg-gray-700 text-white"
          required
        />
        <input
          type="date"
          name="endDate"
          value={newElection.endDate}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2 bg-gray-700 text-white"
          required
        />
        <h3 className="text-lg font-semibold text-white">Add Candidates</h3>
        <input
          type="text"
          name="name"
          value={newCandidate.name}
          onChange={handleCandidateChange}
          placeholder="Candidate Name"
          className="border p-2 rounded w-full mb-2 bg-gray-700 text-white"
        />
        <input
          type="text"
          name="photo"
          value={newCandidate.photo}
          onChange={handleCandidateChange}
          placeholder="Candidate Photo URL"
          className="border p-2 rounded w-full mb-2 bg-gray-700 text-white"
        />
        <button
          onClick={addCandidate}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 mb-4"
        >
          Add Candidate
        </button>
        <h3 className="text-lg font-semibold text-white">
          Voter Database (comma-separated emails)
        </h3>
        <input
          type="text"
          name="voterDatabase"
          value={newElection.voterDatabase}
          onChange={handleChange}
          placeholder="Voter Database"
          className="border p-2 rounded w-full mb-2 bg-gray-700 text-white"
          required
        />
        <button
          onClick={addElection}
          className="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300"
        >
          Create Election
        </button>
        <button
          onClick={() => setModalIsOpen(false)}
          className="text-gray-500 hover:text-gray-700 mt-2"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

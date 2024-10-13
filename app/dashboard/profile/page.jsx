// app/dashboard/profile/page.js
export const metadata = {
  title: "Votacle · Profile",
};

export default function Profile() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-8">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Profile Settings
        </h1>
        <form className="space-y-4">
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              className="input input-bordered w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              className="input input-bordered w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Email"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full py-2 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

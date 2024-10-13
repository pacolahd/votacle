import Image from "next/image";
import Main from "@/components/Main";
import Hero from "@/components/Hero";
import votacleLogoText from "../app/images/votacle_logo_text.png"; // Ensure this path is correct
import votacleLogoImg from "../app/images/votacle_logo_img.png"; // Ensure this path is correct

import Link from "next/link";

export default function Home() {
  return (
    <Main className="">
      {/* Main Banner Section */}

      <div className="relative w-full h-[50vh] flex justify-center ">
        <div className="relative mx-4 sm:mx-10 w-11/12 md:w-11/12 lg:w-11/12 xl:w-10/12 h-full border-4 border-purple-500 rounded-lg shadow-lg overflow-hidden ">
          <Image
            src={votacleLogoImg}
            alt="Votacle Logo"
            layout="fill"
            objectFit="cover"
            className="z-[-1] transition-transform duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center p-6">
            {/* Enhanced Button Styling with Appropriate Icons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <Link href="/dashboard/elections" passHref>
                <button className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold py-4 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl border border-transparent hover:border-white">
                  <span className="mr-2 text-xl">🗳️</span>{" "}
                  {/* Ballot Box Icon */}
                  View Elections
                </button>
              </Link>
              <Link href="/explore" passHref>
                <button className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold py-4 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl border border-transparent hover:border-white">
                  <span className="mr-2 text-xl">➕</span>{" "}
                  {/* Plus Icon for Creating */}
                  Create Election
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1 md:col-span-1 space-y-8">
          {/* Communities Section */}
          <section className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-purple-500 transition-transform duration-300 hover:scale-105">
            <Link href="/dashboard/communities" passHref>
              <h2 className="text-2xl font-bold mb-4 hover:underline cursor-pointer text-purple-600">
                Communities
              </h2>
            </Link>
            <div className="space-y-4 ">
              <Link href="/community/1" passHref>
                <div className="block p-4 my-2 bg-gray-100 rounded-lg hover:bg-gray-300 transition duration-300">
                  <h3 className="text-lg font-semibold">Community 1</h3>
                </div>
              </Link>
              <Link href="/community/2" passHref>
                <div className="block p-4 my-2 bg-gray-100 rounded-lg hover:bg-gray-300 transition duration-300">
                  <h3 className="text-lg font-semibold">Community 2</h3>
                </div>
              </Link>
              <Link href="/community/3" passHref>
                <div className="block p-4 my-2 bg-gray-100 rounded-lg hover:bg-gray-300 transition duration-300">
                  <h3 className="text-lg font-semibold">Community 3</h3>
                </div>
              </Link>
            </div>
          </section>

          {/* My Elections Section */}
          <section className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-purple-500 transition-transform duration-300 hover:scale-105">
            <Link href="/dashboard/myelections" passHref>
              <h2 className="text-2xl font-bold mb-4 hover:underline cursor-pointer text-purple-600">
                My Elections
              </h2>
            </Link>
            <div className="space-y-4">
              <Link href="/election/1" passHref>
                <div className="block p-4 my-2 bg-gray-100 rounded-lg flex justify-between items-center hover:bg-gray-300 transition duration-300">
                  <span>Election 1</span>
                  <span> &gt; </span>
                </div>
              </Link>
              <Link href="/election/2" passHref>
                <div className="block p-4 my-2 bg-gray-100 rounded-lg flex justify-between items-center hover:bg-gray-300 transition duration-300">
                  <span>Election 2</span>
                  <span> &gt; </span>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-1 md:col-span-2">
          {/* Elections Section */}
          <section className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-purple-500 transition-transform duration-300 hover:scale-105">
            <Link href="/dashboard/elections" passHref>
              <h2 className="text-2xl font-bold mb-4 hover:underline cursor-pointer text-purple-600">
                Elections
              </h2>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Individual election cards */}
              <div className="bg-gray-100 shadow-md p-4 rounded-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">
                  Election for School President
                </h3>
                <p>Start Date: 2024-10-15</p>
                <p>End Date: 2024-10-20</p>
                <Link href="/election/1" passHref>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-2 rounded-lg py-1 px-4 hover:bg-gradient-to-l font-bold transition duration-300 ease-in-out shadow-lg">
                    View Details
                  </button>
                </Link>
              </div>

              <div className="bg-gray-100 shadow-md p-4 rounded-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">
                  Local Government Election
                </h3>
                <p>Start Date: 2024-10-22</p>
                <p>End Date: 2024-10-27</p>
                <Link href="/election/2" passHref>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-2 rounded-lg py-1 px-4 hover:bg-gradient-to-l font-bold transition duration-300 ease-in-out shadow-lg">
                    View Details
                  </button>
                </Link>
              </div>

              <div className="bg-gray-100 shadow-md p-4 rounded-lg transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">
                  Student Council Election
                </h3>
                <p>Start Date: 2024-11-01</p>
                <p>End Date: 2024-11-05</p>
                <Link href="/election/3" passHref>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-2 rounded-lg py-1 px-4 hover:bg-gradient-to-l font-bold transition duration-1000 ease-in-out shadow-lg">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Hero />
    </Main>
  );
}

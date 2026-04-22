import React from "react";

function User() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT - USER PROFILE */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col items-center text-center">
            
            {/* Avatar */}
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="user"
              className="w-32 h-32 rounded-full border-4 border-orange-500"
            />

            {/* Name */}
            <h2 className="text-2xl font-bold text-white mt-4">
              Mohammad Anas
            </h2>

            {/* Username */}
            <p className="text-gray-400">@MohammadAnas-07</p>

            {/* Bio */}
            <p className="text-gray-300 mt-3 text-sm">
              Full Stack Developer | React | Node.js | Building modern web apps 🚀
            </p>

            {/* Stats */}
            <div className="flex gap-6 mt-6">
              <div>
                <p className="text-white font-bold text-lg">120</p>
                <p className="text-gray-400 text-sm">Repos</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">450</p>
                <p className="text-gray-400 text-sm">Followers</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg">180</p>
                <p className="text-gray-400 text-sm">Following</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                Follow
              </button>
              <button className="border border-gray-500 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700">
                Message
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT - CONTACT FORM */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            Contact User
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default User;
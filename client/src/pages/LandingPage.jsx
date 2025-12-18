import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Capture Your Ideas.
            <br />
            <span className="text-blue-600">Organize Your Notes.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            A simple and powerful notes app to help you write, organize,
            and access your thoughts anytime, anywhere.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Started Free
            </NavLink>

            <NavLink
              to="/features"
              className="border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              Learn More
            </NavLink>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="h-4 w-1/2 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Everything You Need to Stay Organized
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Designed for speed, clarity, and productivity.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">
                Fast Note Taking
              </h3>
              <p className="mt-2 text-gray-600">
                Create and edit notes instantly with a distraction-free
                experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">
                Secure Storage
              </h3>
              <p className="mt-2 text-gray-600">
                Your notes are safely stored and accessible only by you.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">
                Access Anywhere
              </h3>
              <p className="mt-2 text-gray-600">
                Sync your notes across devices and never lose an idea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Start Writing Better Notes Today
          </h2>

          <p className="mt-4 text-blue-100 max-w-xl mx-auto">
            Join thousands of users who trust our notes app every day.
          </p>

          <NavLink
            to="/signup"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Create Free Account
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

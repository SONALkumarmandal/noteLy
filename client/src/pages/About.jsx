import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900">
          About NoteLY
        </h1>

        <p className="text-gray-600 mt-4 leading-relaxed">
          NoteLY is a simple, secure, and fast note-taking application designed
          to help you organize your thoughts, tasks, and ideas in one place.
          Whether you are a student, developer, or professional, NotesApp keeps
          your notes accessible anytime, anywhere.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold text-gray-900">Secure</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Your notes are protected using JWT-based authentication and secure
              backend APIs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold text-gray-900">Fast</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Built with React and modern backend technologies for lightning-fast
              performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-semibold text-gray-900">Easy to Use</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Minimal UI with everything you need — no clutter, no distractions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

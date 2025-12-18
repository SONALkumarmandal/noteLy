import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Services
        </h1>

        <p className="text-gray-600 mt-4">
          Everything you need to manage your notes efficiently.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Create Notes",
              desc: "Quickly create notes with titles and rich content.",
            },
            {
              title: "Edit Notes",
              desc: "Update your notes anytime without losing data.",
            },
            {
              title: "Delete Notes",
              desc: "Remove notes permanently when they’re no longer needed.",
            },
            {
              title: "Secure Access",
              desc: "JWT authentication ensures only you can access your notes.",
            },
            {
              title: "Cloud Storage",
              desc: "Notes are safely stored in the database.",
            },
            {
              title: "Fast Performance",
              desc: "Optimized APIs for smooth experience.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

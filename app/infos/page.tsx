import React from "react";

const villages = [
  {
    name: "Molyvos (Mithymna)",
    description: "Medieval, picturesque, stone-built, romantic, sunsets",
  },
  {
    name: "Skala Sykamineas",
    description: "Fishing, peaceful, seaside, chapel, poetic",
  },
  {
    name: "Agiasos",
    description: "Mountain, traditional, crafts, cultural, vibrant",
  },
  {
    name: "Petra",
    description: "Coastal, iconic, church, scenic, charming",
  },
  {
    name: "Eresos",
    description: "Bohemian, relaxed, artistic, historic, authentic",
  },
  {
    name: "Mandamados",
    description: "Religious, heritage, ceramics, local, traditional",
  },
  {
    name: "Plomari",
    description: "Coastal, ouzo, lively, maritime, authentic",
  },
  {
    name: "Sigri",
    description: "Remote, wild, unique, geological, peaceful",
  },
  {
    name: "Skala Kallonis",
    description: "Wetlands, birdwatching, seaside, tranquil, authentic",
  },
];

const healthcare = [
  {
    location: "Kalloni",
    type: "Health Center",
  },
  {
    location: "Mytilene",
    type: "Hospital & Medical Services",
  },
  {
    location: "Plomari",
    type: "Regional Clinic",
  },
];

const LesvosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Discover Lesvos
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Traditional settlements, history, and authentic island life
        </p>

        {/* Villages Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Picturesque Villages
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {villages.map((village, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {village.name}
                </h3>
                <p className="text-gray-600">{village.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Healthcare Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Healthcare Facilities
          </h2>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <ul className="space-y-4">
              {healthcare.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between border-b pb-2"
                >
                  <span className="font-medium text-gray-700">
                    {item.location}
                  </span>
                  <span className="text-gray-500">{item.type}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LesvosPage;

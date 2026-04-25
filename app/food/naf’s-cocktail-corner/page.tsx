import React, { useState } from "react";

export default function TravelGuideBar() {
  const [destination, setDestination] = useState("");

  return (
    <section className="w-full px-4 py-10">
      <div className="mx-auto max-w-6xl">
        
        {/* Container */}
        <div className="rounded-full bg-white shadow-2xl ring-1 ring-gray-200 overflow-hidden">
          
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            {/* Destination */}
            <div className="flex-1 px-6 py-4 hover:bg-gray-50 transition">
              <p className="text-xs font-semibold text-gray-500">
                Where
              </p>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Search destinations"
                className="mt-1 w-full bg-transparent text-sm font-semibold text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Dates */}
            <div className="flex-1 px-6 py-4 hover:bg-gray-50 transition cursor-pointer">
              <p className="text-xs font-semibold text-gray-500">
                When
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Add dates
              </p>
            </div>

            {/* Guests */}
            <div className="flex-1 px-6 py-4 hover:bg-gray-50 transition cursor-pointer">
              <p className="text-xs font-semibold text-gray-500">
                Who
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Add guests
              </p>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center px-4 py-3">
              <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-gray-800 active:scale-95">
                🔍 Search
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
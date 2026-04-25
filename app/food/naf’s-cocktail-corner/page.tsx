import React from "react";
import { MapPin, Compass, Star, Menu } from "lucide-react";

export default function TravelGuideBar() {
  return (
    <div className="w-full bg-white shadow-md rounded-2xl p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Compass className="w-6 h-6" />
        <span className="text-lg font-semibold">Travel Guide</span>
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-xl w-1/3">
        <MapPin className="w-4 h-4 mr-2" />
        <input
          type="text"
          placeholder="Search destinations..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <button className="text-sm font-medium hover:text-blue-500">
          Destinations
        </button>
        <button className="text-sm font-medium hover:text-blue-500">
          Experiences
        </button>
        <button className="text-sm font-medium hover:text-blue-500 flex items-center gap-1">
          <Star className="w-4 h-4" /> Top Picks
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu className="w-6 h-6" />
      </div>
    </div>
  );
}

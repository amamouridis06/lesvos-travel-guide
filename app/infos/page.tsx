// import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Phone, Image as ImageIcon, HeartPulse, Search } from "lucide-react";

// --- TYPES ---
type Village = {
  name: string;
  desc: string;
  image: string; // url
};

type Healthcare = {
  name: string;
  location: string;
  phone: string;
  nearestVillage: string;
  distanceKm: number;
};

// --- DATA (EDIT FREELY) ---
// const villages: Village[] = [
//   { name: "Molyvos (Mithymna)", desc: "Medieval charm & sunset views", image: "/images/molyvos.jpg" },
//   { name: "Skala Sykamineas", desc: "Seaside serenity & poetic beauty", image: "/images/sykaminea.jpg" },
//   { name: "Agiasos", desc: "Mountain culture & local crafts", image: "/images/agiasos.jpg" },
//   { name: "Petra", desc: "Iconic rock church & beach life", image: "/images/petra.jpg" },
//   { name: "Eresos", desc: "Bohemian vibe & rich history", image: "/images/eresos.jpg" },
//   { name: "Mandamados", desc: "Religious heritage & ceramics", image: "/images/mandamados.jpg" },
//   { name: "Plomari", desc: "Ouzo capital & coastal energy", image: "/images/plomari.jpg" },
//   { name: "Sigri", desc: "Wild landscapes & unique geology", image: "/images/sigri.jpg" },
//   { name: "Skala Kallonis", desc: "Wetlands & birdwatching", image: "/images/kalloni.jpg" },
// ];

const healthcare: Healthcare[] = [
  {
    name: "Kalloni Health Center",
    location: "Kalloni",
    phone: "+30 22530 22000",
    nearestVillage: "Skala Kallonis",
    distanceKm: 3,
  },
  {
    name: "Mytilene Hospital",
    location: "Mytilene",
    phone: "+30 22513 50000",
    nearestVillage: "Mandamados",
    distanceKm: 37,
  },
  {
    name: "Plomari Clinic",
    location: "Plomari",
    phone: "+30 22520 32000",
    nearestVillage: "Plomari",
    distanceKm: 0,
  },
];

export default function LesvosPage() {
  const [search, setSearch] = useState("");

  const filteredHealthcare = healthcare.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Lesvos Guide</h1>
          <p className="text-gray-600">Villages, healthcare & useful contacts</p>
        </div>

        {/* VILLAGES WITH IMAGES */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
            <MapPin /> Villages
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {villages.map((v, i) => (
              <Card key={i} className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src={v.image}
                  alt={v.name}
                  className="h-40 w-full object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{v.name}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* HEALTHCARE WITH DISTANCES */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
            <HeartPulse /> Healthcare & Distances
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {healthcare.map((h, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg">{h.name}</h3>
                  <p className="text-sm text-gray-600">📍 {h.location}</p>
                  <p className="text-sm text-gray-600">
                    Nearest village: {h.nearestVillage}
                  </p>
                  <p className="text-sm text-gray-600">
                    Distance: {h.distanceKm} km
                  </p>
                  <p className="text-sm mt-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> {h.phone}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PHONE DIRECTORY */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
            <Phone /> Phone Directory
          </h2>

          <div className="mb-4 flex items-center gap-2">
            <Search className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4">
            {filteredHealthcare.map((h, i) => (
              <div key={i} className="flex justify-between border-b py-2">
                <span>{h.name}</span>
                <span>{h.phone}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

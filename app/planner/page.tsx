"use client";

import { useMemo, useState } from "react";

const itineraries = {
  molivos: {
    label: "Molyvos",
    description: "Charming north base with views.",
    highlights: [
      "Molyvos Castle",
      "Petra village",
      "Anaxos beach",
      "Eftalou hot springs (nearby)",
    ],
    hotSprings: [
      { name: "Eftalou Hot Springs", note: "5 min from Molyvos" },
    ],
  },
  plomari: {
    label: "Plomari",
    description: "Ouzo, beaches, and local life.",
    highlights: [
      "Ouzo Museum",
      "Agios Isidoros beach",
      "Melinda beach",
    ],
    hotSprings: [
      { name: "Gera Thermal Baths", note: "40 min drive" },
    ],
  },
  mytilini: {
    label: "Mytilene",
    description: "City vibes and culture.",
    highlights: [
      "Mytilene Castle",
      "Ermou street",
      "Therma hot springs",
    ],
    hotSprings: [
      { name: "Therma Hot Springs", note: "10 min from city" },
    ],
  },
  kalloni: {
    label: "Skala Kallonis",
    description: "Central food hub.",
    highlights: [
      "Salt pans (flamingos)",
      "Sardine taverns",
    ],
    hotSprings: [
      { name: "Polichnitos Hot Springs", note: "20–25 min drive" },
    ],
  },
  sigri: {
    label: "Sigri",
    description: "Wild and remote.",
    highlights: [
      "Petrified Forest",
      "Sigri village",
    ],
    hotSprings: [
      { name: "Polichnitos Hot Springs", note: "1h 15min drive" },
    ],
  },
};

export default function PlannerPage() {
  const [location, setLocation] = useState("");
  const [days, setDays] = useState(3);

  const plan = useMemo(() => {
    if (!location) return [];
    return Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      title: "Explore & Relax",
      desc: "Beach, food, and local exploration.",
    }));
  }, [location, days]);

  return (
      <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold leading-tight">
            Plan your perfect Lesvos trip
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl">
            Build a personalized itinerary in seconds. Choose your base and days.
          </p>
        </section>

        {/* CONTROLS */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10 shadow-xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-white/70">
                  Where will you stay?
                </label>
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-800 border border-white/10"
                >
                  <option value="">Choose location</option>
                  {Object.entries(itineraries).map(([key, val]) => (
                      <option key={key} value={key}>
                        {val.label}
                      </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-white/70">
                  Days: {days}
                </label>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          {location ? (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Your itinerary ({days} days)
                </h2>

                {plan.map((day) => (
                    <div
                        key={day.day}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">Day {day.day}</h3>
                        <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                    {itineraries[location].label}
                  </span>
                      </div>

                      <p className="mt-3 text-white/70">{day.title}</p>
                      <p className="text-sm text-white/50">{day.desc}</p>

                      {/* Highlights */}
                      <div className="mt-4">
                        <p className="text-sm text-white/60 mb-1">Top spots</p>
                        <ul className="text-sm text-white/80 space-y-1">
                          {itineraries[location].highlights.map((h) => (
                              <li key={h}>• {h}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Hot springs */}
                      <div className="mt-4">
                        <p className="text-sm text-amber-400 mb-1">Hot springs nearby</p>
                        <ul className="text-sm text-white/80 space-y-1">
                          {itineraries[location].hotSprings.map((s) => (
                              <li key={s.name}>
                                • {s.name} <span className="text-white/50">({s.note})</span>
                              </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 flex gap-3">
                        <button className="px-4 py-2 rounded-xl bg-amber-500 text-black text-sm font-semibold">
                          View details
                        </button>
                        <button className="px-4 py-2 rounded-xl border border-white/20 text-sm">
                          Open map
                        </button>
                      </div>
                    </div>
                ))}
              </div>
          ) : (
              <div className="text-center text-white/50">
                Select a location to generate your plan.
              </div>
          )}
        </section>
      </main>
  );
}

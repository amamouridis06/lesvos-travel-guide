"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const itineraries = {
  molivos: {
    label: "Molyvos",
    description:
        "Perfect base for exploring the north: traditional villages, scenic beaches, and sunset views.",
    nearby: [
      {
        place: "Molyvos",
        area: "North Lesvos",
        see: ["Molyvos Castle", "Stone alleys", "Harbor sunset"],
        eat: ["Seafood by the port", "Traditional meze tavern"],
        tip: "Best in the evening when the village glows with lights.",
      },
      {
        place: "Petra",
        area: "North Lesvos",
        see: ["Panagia Church (steps view)", "Beach", "Village square"],
        eat: ["Seafront cafés", "Local bakeries"],
        tip: "Climb the church early to avoid heat.",
      },
      {
        place: "Anaxos",
        area: "North Lesvos",
        see: ["Sandy beach", "Relaxed promenade"],
        eat: ["Beach bars", "Casual tavernas"],
        tip: "Ideal for a slow beach day.",
      },
      {
        place: "Eftalou",
        area: "Near Molyvos",
        see: ["Hot springs", "Rocky beach"],
        eat: ["Simple seaside taverna"],
        tip: "Bring water shoes for the stones.",
      },
    ],
    extended: [
      {
        place: "Sigri",
        area: "West Lesvos",
        see: ["Petrified Forest", "Natural History Museum"],
        eat: ["Fresh fish taverns"],
        tip: "Feels like a different island—worth the drive.",
      },
      {
        place: "Agiasos",
        area: "Central Lesvos",
        see: ["Traditional village", "Local crafts", "Panagia Church"],
        eat: ["Mountain tavernas"],
        tip: "Cooler climate—great midday escape.",
      },
      {
        place: "Skala Kallonis",
        area: "Central Lesvos",
        see: ["Wetlands", "Salt pans (birdwatching)"],
        eat: ["Famous sardine taverns"],
        tip: "Best for food lovers.",
      },
    ],
  },

  plomari: {
    label: "Plomari",
    description:
        "Best for ouzo culture, beaches, and authentic seaside life in the south.",
    nearby: [
      {
        place: "Plomari",
        area: "South Lesvos",
        see: ["Ouzo Museum", "Harbor", "Old mansions"],
        eat: ["Ouzeri with meze", "Seafood taverns"],
        tip: "Try multiple small dishes with ouzo.",
      },
      {
        place: "Agios Isidoros",
        area: "South Lesvos",
        see: ["Organized beach", "Clear waters"],
        eat: ["Beach bars", "Fish taverns"],
        tip: "One of the cleanest beaches on the island.",
      },
      {
        place: "Melinda",
        area: "Near Plomari",
        see: ["Quiet beach", "Relaxed vibe"],
        eat: ["Seaside tavern"],
        tip: "Perfect for unplugging.",
      },
    ],
    extended: [
      {
        place: "Vatera",
        area: "South Lesvos",
        see: ["Endless sandy beach"],
        eat: ["Beach tavernas"],
        tip: "Great for a full beach day.",
      },
      {
        place: "Agiasos",
        area: "Central Lesvos",
        see: ["Mountain village", "Local shops"],
        eat: ["Traditional food"],
        tip: "Nice contrast to the coast.",
      },
    ],
  },

  mytilini: {
    label: "Mytilene",
    description:
        "The island’s capital—ideal for culture, nightlife, and easy access everywhere.",
    nearby: [
      {
        place: "Mytilene Town",
        area: "East Lesvos",
        see: ["Castle", "Ermou street", "Museums", "Port"],
        eat: ["Modern restaurants", "Meze spots", "Cafés"],
        tip: "Best explored afternoon into night.",
      },
      {
        place: "Therma",
        area: "Near Mytilene",
        see: ["Hot springs", "Seaside road"],
        eat: ["Simple tavern"],
        tip: "Relaxing short escape from the city.",
      },
      {
        place: "Moria / Panagiouda",
        area: "Near Mytilene",
        see: ["Roman aqueduct", "Village life"],
        eat: ["Local taverns"],
        tip: "Less touristy, more authentic.",
      },
    ],
    extended: [
      {
        place: "Plomari",
        area: "South Lesvos",
        see: ["Ouzo culture", "Harbor"],
        eat: ["Ouzeri"],
        tip: "Perfect day trip.",
      },
      {
        place: "Molyvos",
        area: "North Lesvos",
        see: ["Castle village", "Sunsets"],
        eat: ["Romantic dinners"],
        tip: "Long drive but worth it.",
      },
    ],
  },

  kalloni: {
    label: "Skala Kallonis",
    description:
        "Great central base—perfect for exploring the whole island and amazing food.",
    nearby: [
      {
        place: "Skala Kallonis",
        area: "Central Lesvos",
        see: ["Wetlands", "Beach"],
        eat: ["Sardine taverns"],
        tip: "Famous for the best sardines in Greece.",
      },
      {
        place: "Kalloni Salt Pans",
        area: "Central Lesvos",
        see: ["Flamingos", "Birdwatching"],
        eat: ["Local taverns nearby"],
        tip: "Go early morning.",
      },
    ],
    extended: [
      {
        place: "Sigri",
        area: "West Lesvos",
        see: ["Petrified Forest"],
        eat: ["Fish taverns"],
        tip: "Unique landscape.",
      },
      {
        place: "Plomari",
        area: "South Lesvos",
        see: ["Ouzo culture"],
        eat: ["Ouzeri"],
        tip: "Food-focused day trip.",
      },
    ],
  },

  sigri: {
    label: "Sigri",
    description:
        "Remote, wild, and unique—perfect for nature lovers and quiet travel.",
    nearby: [
      {
        place: "Sigri Village",
        area: "West Lesvos",
        see: ["Castle", "Port", "Sunset"],
        eat: ["Seafood taverns"],
        tip: "Very peaceful compared to the rest of the island.",
      },
      {
        place: "Petrified Forest",
        area: "West Lesvos",
        see: ["Fossilized trees", "Geopark"],
        eat: ["Café at museum"],
        tip: "UNESCO-level natural site.",
      },
    ],
    extended: [
      {
        place: "Eressos",
        area: "West Lesvos",
        see: ["Beach", "Alternative vibe"],
        eat: ["Vegan cafés", "Beach bars"],
        tip: "Very different atmosphere.",
      },
    ],
  },
} as const;

type LocationKey = keyof typeof itineraries;

type DayPlan = {
  day: number;
  place: string;
  area: string;
  see: readonly string[];
  eat: readonly string[];
  tip: string;
};

export default function PlannerPage() {
  const [location, setLocation] = useState<LocationKey | "">("");
  const [days, setDays] = useState<number>(3);

  const selectedLocation = location ? itineraries[location] : null;

  const plan = useMemo<DayPlan[]>(() => {
    if (!location) return [];

    const base = itineraries[location];
    const pool = days <= 3 ? base.nearby : [...base.nearby, ...base.extended];

    return Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      ...pool[i % pool.length],
    }));
  }, [location, days]);

  return (
      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* HEADER */}
        <section className="bg-slate-950 text-white py-20 text-center">
          <h1 className="text-4xl font-bold">Plan your perfect trip to Lesvos</h1>
          <p className="mt-4 text-lg text-white/70">
            Choose your base and duration to generate a smart itinerary.
          </p>
        </section>

        {/* CONTROLS */}
        <section className="max-w-4xl mx-auto p-6">
          <label className="block mb-2 font-semibold">
            Where will you stay?
          </label>
          <select
              value={location}
              onChange={(e) => setLocation(e.target.value as LocationKey)}
              className="w-full p-3 border rounded-xl"
          >
            <option value="">Choose region</option>
            <option value="molivos">Molyvos</option>
            <option value="plomari">Plomari</option>
            <option value="mytilini">Mytilene</option>
            <option value="kalloni">Skala Kallonis</option>
            <option value="sigri">Sigri</option>
          </select>

          <div className="mt-6">
            <label className="block font-semibold">
              How many days will you stay?
            </label>
            <input
                type="range"
                min="1"
                max="10"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full mt-2"
            />
            <p className="mt-2">{days} days</p>
          </div>
        </section>

        {/* RESULTS */}
        {location && (
            <section className="max-w-5xl mx-auto p-6 space-y-6">
              <h2 className="text-2xl font-bold">
                Suggested itinerary for {selectedLocation?.label}
              </h2>

              {plan.map((day) => (
                  <div key={day.day} className="border p-4 rounded-xl bg-white">
                    <h3 className="font-bold text-lg">
                      Day {day.day}: {day.place}
                    </h3>
                    <p className="text-sm text-gray-500">{day.area}</p>

                    <div className="mt-3">
                      <strong>What to see:</strong>
                      <ul>
                        {day.see.map((s) => (
                            <li key={s}>• {s}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3">
                      <strong>Where to eat:</strong>
                      <ul>
                        {day.eat.map((e) => (
                            <li key={e}>• {e}</li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-3 text-amber-700">
                      <strong>Tip:</strong> {day.tip}
                    </p>
                  </div>
              ))}
            </section>
        )}

        {/* FOOTER */}
        <section className="text-center py-12">
          <Link href="/" className="underline">
            Back to homepage
          </Link>
        </section>
      </main>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

const itineraries = {
  molivos: {
    label: "Μόλυβος",
    nearby: [
      {
        place: "Μόλυβος",
        see: ["Κάστρο Μολύβου", "Πέτρινα σοκάκια"],
        eat: ["Ταβέρνα στο λιμάνι", "Ουζερί με θέα"],
        tip: "Ιδανικό για απογευματινή βόλτα.",
      },
      {
        place: "Εφταλού",
        see: ["Παραλία", "Θερμά λουτρά"],
        eat: ["Παραθαλάσσια ταβέρνα"],
        tip: "Συνδύασε μπάνιο και χαλάρωση.",
      },
      {
        place: "Πέτρα",
        see: ["Εκκλησία Παναγίας"],
        eat: ["Ταβέρνες στην πλατεία"],
        tip: "Ωραία θέα από ψηλά.",
      },
      {
        place: "Ανάξος",
        see: ["Παραλία"],
        eat: ["Beach bar"],
        tip: "Χαλαρό και νεανικό.",
      },
    ],
    extended: [
      {
        place: "Σίγρι",
        see: ["Απολιθωμένο Δάσος"],
        eat: ["Ψαροταβέρνες"],
        tip: "Ιδανικό για ημερήσια εκδρομή.",
      },
      {
        place: "Αγιάσος",
        see: ["Παραδοσιακά σοκάκια"],
        eat: ["Ταβέρνες με ντόπια κουζίνα"],
        tip: "Πήγαινε πρωί.",
      },
      {
        place: "Πλωμάρι",
        see: ["Λιμάνι", "Μουσείο Ούζου"],
        eat: ["Ουζερί"],
        tip: "Βόλτα το απόγευμα.",
      },
    ],
  },

  plomari: {
    label: "Πλωμάρι",
    nearby: [
      {
        place: "Πλωμάρι",
        see: ["Λιμάνι", "Παλιά σπίτια"],
        eat: ["Ουζερί & ψαροταβέρνες"],
        tip: "Δοκίμασε τοπικό ούζο.",
      },
      {
        place: "Μελίντα",
        see: ["Παραλία"],
        eat: ["Ταβέρνα δίπλα στο κύμα"],
        tip: "Ιδανικό για μπάνιο.",
      },
      {
        place: "Άγιος Ισίδωρος",
        see: ["Παραλία"],
        eat: ["Ψάρι & θαλασσινά"],
        tip: "Καθαρά νερά.",
      },
    ],
    extended: [
      {
        place: "Βατερά",
        see: ["Μεγάλη αμμουδιά"],
        eat: ["Παραλιακές ταβέρνες"],
        tip: "Πήγαινε νωρίς.",
      },
      {
        place: "Αγιάσος",
        see: ["Παραδοσιακό χωριό"],
        eat: ["Ταβέρνες στο κέντρο"],
        tip: "Συνδύασε με καφέ.",
      },
    ],
  },

  mytilini: {
    label: "Μυτιλήνη",
    nearby: [
      {
        place: "Μυτιλήνη",
        see: ["Κάστρο", "Αγορά"],
        eat: ["Ταβέρνες στο κέντρο"],
        tip: "Βόλτα το απόγευμα.",
      },
      {
        place: "Θερμά",
        see: ["Θερμές πηγές"],
        eat: ["Ταβέρνα παραλίας"],
        tip: "Χαλάρωση.",
      },
      {
        place: "Αεροχώρι",
        see: ["Θέα στο Αιγαίο"],
        eat: ["Καφέ & μεζέδες"],
        tip: "Ωραίο ηλιοβασίλεμα.",
      },
    ],
    extended: [
      {
        place: "Πλωμάρι",
        see: ["Λιμάνι"],
        eat: ["Ουζερί"],
        tip: "Ημερήσια εκδρομή.",
      },
      {
        place: "Βατερά",
        see: ["Παραλία"],
        eat: ["Ταβέρνες"],
        tip: "Χαλαρή μέρα.",
      },
    ],
  },
};

export default function PlannerPage() {
  const [location, setLocation] = useState<keyof typeof itineraries | "">("");
  const [days, setDays] = useState(1);

  const buildPlan = () => {
    if (!location) return [];

    const base = itineraries[location];
    let pool = [];

    if (days <= 3) {
      pool = base.nearby;
    } else {
      pool = [...base.nearby, ...base.extended];
    }

    return Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      ...pool[i % pool.length],
    }));
  };

  const plan = buildPlan();

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="py-24 bg-neutral-900 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Φτιάξε το ταξίδι σου
        </h1>
        <p className="text-gray-300 text-lg">
          Πες μας πού θα μείνεις και πόσες μέρες έχεις
        </p>
      </section>

      {/* CONTROLS */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div>
          <label className="block font-semibold mb-2">Πού θα διαμείνεις;</label>
          <select
            value={location}
            onChange={(e) =>
              setLocation(e.target.value as keyof typeof itineraries)
            }
            className="w-full p-3 rounded-lg border"
          >
            <option value="">Επίλεξε περιοχή</option>
            <option value="molivos">Μόλυβος</option>
            <option value="plomari">Πλωμάρι</option>
            <option value="mytilini">Μυτιλήνη</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Πόσες μέρες θα μείνεις; <span className="text-yellow-600">({days})</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full accent-yellow-600"
          />
        </div>
      </section>

      {/* PLAN */}
      {location && (
        <section className="max-w-4xl mx-auto px-6 pb-24 space-y-6">
          {plan.map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-xl shadow p-6 space-y-3"
            >
              <h3 className="text-xl font-semibold">
                Ημέρα {day.day} — {day.place}
              </h3>

              <p><strong>👀 Τι να δεις:</strong> {day.see.join(", ")}</p>
              <p><strong>🍽 Πού να φας:</strong> {day.eat.join(", ")}</p>
              <p className="text-sm text-gray-600 italic">
                💡 {day.tip}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* BACK */}
      <div className="text-center pb-20">
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition"
        >
          ← Επιστροφή στην αρχική
        </Link>
      </div>

    </main>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const itineraries = {
  molivos: {
    label: "Μόλυβος",
    description:
      "Ιδανική βάση για βόλτες σε παραδοσιακά χωριά, παραλίες και βόρεια διαδρομή.",
    nearby: [
      {
        place: "Μόλυβος",
        area: "Βόρεια Λέσβος",
        see: ["Κάστρο Μολύβου", "Πέτρινα σοκάκια", "Λιμάνι"],
        eat: ["Ταβέρνα στο λιμάνι", "Ουζερί με θέα"],
        tip: "Ιδανικό για απογευματινή βόλτα και δείπνο με θέα.",
      },
      {
        place: "Εφταλού",
        area: "Κοντά στον Μόλυβο",
        see: ["Παραλία", "Θερμά λουτρά"],
        eat: ["Παραθαλάσσια ταβέρνα"],
        tip: "Συνδύασε μπάνιο και χαλάρωση σε πιο ήρεμο ρυθμό.",
      },
      {
        place: "Πέτρα",
        area: "Βόρεια Λέσβος",
        see: ["Εκκλησία Παναγίας", "Παραλία", "Κεντρική αγορά"],
        eat: ["Ταβέρνες στην πλατεία", "Καφέ δίπλα στη θάλασσα"],
        tip: "Ανέβα στην Παναγία για πανοραμική θέα.",
      },
      {
        place: "Ανάξος",
        area: "Βόρεια Λέσβος",
        see: ["Παραλία", "Παραλιακός δρόμος"],
        eat: ["Beach bar", "Παραλιακή ταβέρνα"],
        tip: "Πιο χαλαρό σημείο για μπάνιο και καφέ.",
      },
    ],
    extended: [
      {
        place: "Σίγρι",
        area: "Δυτική Λέσβος",
        see: ["Απολιθωμένο Δάσος", "Μουσείο Φυσικής Ιστορίας"],
        eat: ["Ψαροταβέρνες", "Καφέ στο λιμάνι"],
        tip: "Πολύ καλή επιλογή για ολοήμερη εκδρομή.",
      },
      {
        place: "Αγιάσος",
        area: "Κεντρική Λέσβος",
        see: ["Παραδοσιακά σοκάκια", "Τοπικά μαγαζιά", "Παναγία Αγιάσου"],
        eat: ["Ταβέρνες με ντόπια κουζίνα"],
        tip: "Πήγαινε πρωί ή νωρίς το απόγευμα για πιο όμορφη βόλτα.",
      },
      {
        place: "Πλωμάρι",
        area: "Νότια Λέσβος",
        see: ["Λιμάνι", "Μουσείο Ούζου", "Παραλιακή βόλτα"],
        eat: ["Ουζερί", "Ψαροταβέρνες"],
        tip: "Ιδανικό για συνδυασμό βόλτας και φαγητού δίπλα στη θάλασσα.",
      },
    ],
  },

  plomari: {
    label: "Πλωμάρι",
    description:
      "Εξαιρετική επιλογή για όσους θέλουν θάλασσα, ούζο και νότια διαδρομή στο νησί.",
    nearby: [
      {
        place: "Πλωμάρι",
        area: "Νότια Λέσβος",
        see: ["Λιμάνι", "Παλιά σπίτια", "Μουσείο Ούζου"],
        eat: ["Ουζερί", "Ψαροταβέρνες"],
        tip: "Μην φύγεις χωρίς να δοκιμάσεις τοπικό ούζο και μεζέδες.",
      },
      {
        place: "Μελίντα",
        area: "Κοντά στο Πλωμάρι",
        see: ["Παραλία", "Παραθαλάσσια βόλτα"],
        eat: ["Ταβέρνα δίπλα στο κύμα"],
        tip: "Ωραίο σημείο για πιο χαλαρή μέρα με μπάνιο.",
      },
      {
        place: "Άγιος Ισίδωρος",
        area: "Νότια Λέσβος",
        see: ["Παραλία", "Παραλιακό μέτωπο"],
        eat: ["Ψάρι", "Θαλασσινά", "Καφέ"],
        tip: "Καθαρά νερά και εύκολη πρόσβαση για μπάνιο.",
      },
    ],
    extended: [
      {
        place: "Βατερά",
        area: "Νότια Λέσβος",
        see: ["Μεγάλη αμμουδιά", "Παραλιακή διαδρομή"],
        eat: ["Παραλιακές ταβέρνες"],
        tip: "Πήγαινε νωρίς για να απολαύσεις την παραλία με άνεση.",
      },
      {
        place: "Αγιάσος",
        area: "Κεντρική Λέσβος",
        see: ["Παραδοσιακό χωριό", "Τοπικά προϊόντα"],
        eat: ["Ταβέρνες στο κέντρο", "Καφέ στα σοκάκια"],
        tip: "Ταιριάζει πολύ καλά με απογευματινή εκδρομή.",
      },
    ],
  },

  mytilini: {
    label: "Μυτιλήνη",
    description:
      "Η καλύτερη βάση για πόλη, αξιοθέατα, αγορές και εύκολες ημερήσιες αποδράσεις.",
    nearby: [
      {
        place: "Μυτιλήνη",
        area: "Ανατολική Λέσβος",
        see: ["Κάστρο", "Ερμού", "Λιμάνι", "Μουσεία"],
        eat: ["Ταβέρνες στο κέντρο", "Μεζεδοπωλεία", "Καφέ"],
        tip: "Ιδανική για βόλτα απόγευμα και βράδυ.",
      },
      {
        place: "Θερμά",
        area: "Κοντά στη Μυτιλήνη",
        see: ["Θερμές πηγές", "Παραλιακή διαδρομή"],
        eat: ["Ταβέρνα παραλίας"],
        tip: "Ωραίο σημείο για πιο ήσυχη εξόρμηση κοντά στην πόλη.",
      },
      {
        place: "Αεροχώρι",
        area: "Περιοχή Μυτιλήνης",
        see: ["Θέα στο Αιγαίο", "Ήρεμες διαδρομές"],
        eat: ["Καφέ", "Μεζέδες"],
        tip: "Καλή επιλογή για θέα και χαλαρό καφέ.",
      },
    ],
    extended: [
      {
        place: "Πλωμάρι",
        area: "Νότια Λέσβος",
        see: ["Λιμάνι", "Μουσείο Ούζου"],
        eat: ["Ουζερί", "Ψαροταβέρνες"],
        tip: "Ταιριάζει για γεμάτη ημερήσια εκδρομή.",
      },
      {
        place: "Βατερά",
        area: "Νότια Λέσβος",
        see: ["Παραλία", "Παραλιακή ζώνη"],
        eat: ["Ταβέρνες", "Beach cafés"],
        tip: "Χαλαρή μέρα με έμφαση στη θάλασσα.",
      },
    ],
  },
} as const;

type LocationKey = keyof typeof itineraries;

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function PlannerPage() {
  const [location, setLocation] = useState<LocationKey | "">("");
  const [days, setDays] = useState(3);

  const selectedLocation = location ? itineraries[location] : null;

  const plan = useMemo(() => {
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
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/85 backdrop-blur">
              Lesvos Travel Planner
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Φτιάξε το ταξίδι σου στη Λέσβο με πιο οργανωμένο τρόπο
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
              Επίλεξε πού θα μείνεις και πόσες ημέρες διαθέτεις, και δες ένα προτεινόμενο πλάνο με μέρη να επισκεφθείς, ιδέες για φαγητό και χρήσιμες μικρές συμβουλές.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 max-w-6xl px-6 pb-12 md:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-800">
                Πού θα διαμείνεις;
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value as LocationKey)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
              >
                <option value="">Επίλεξε περιοχή</option>
                <option value="molivos">Μόλυβος</option>
                <option value="plomari">Πλωμάρι</option>
                <option value="mytilini">Μυτιλήνη</option>
              </select>

              {selectedLocation ? (
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-900">{selectedLocation.label}:</span>{" "}
                  {selectedLocation.description}
                </p>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  Διάλεξε την περιοχή διαμονής σου για να χτίσουμε ένα πλάνο προσαρμοσμένο στη βάση σου.
                </p>
              )}
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between gap-4">
                <label className="block text-sm font-semibold text-slate-800">
                  Πόσες μέρες θα μείνεις;
                </label>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                  {days} ημέρες
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>1</span>
                <span>5</span>
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {location ? (
        <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="Suggested itinerary"
              title={`Προτεινόμενο πρόγραμμα για ${selectedLocation?.label}`}
              description="Το πλάνο προσαρμόζεται στις ημέρες που έχεις διαθέσιμες και εστιάζει σε κοντινές ή πιο εκτεταμένες διαδρομές ανάλογα με τη διάρκεια της διαμονής σου."
            />
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
              {days <= 3
                ? "Πρόγραμμα με έμφαση σε κοντινές αποστάσεις"
                : "Πρόγραμμα με κοντινές και ημερήσιες εξορμήσεις"}
            </div>
          </div>

          <div className="grid gap-6">
            {plan.map((day) => (
              <article
                key={`${day.day}-${day.place}`}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-600">
                        Ημέρα {day.day}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                        {day.place}
                      </h3>
                    </div>
                    <span className="inline-flex w-fit items-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white">
                      {day.area}
                    </span>
                  </div>
                </div>

                <div className="grid gap-6 px-6 py-6 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Τι να δεις
                    </p>
                    <ul className="space-y-2">
                      {day.see.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-700">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Πού να φας
                    </p>
                    <ul className="space-y-2">
                      {day.eat.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-700">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="rounded-2xl border border-amber-100 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
                    <span className="font-semibold">Travel tip:</span> {day.tip}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8">
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Επίλεξε περιοχή και ημέρες για να δεις το προτεινόμενο πλάνο
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Ο planner θα σου εμφανίσει οργανωμένες ιδέες για κάθε ημέρα, με προτάσεις για αξιοθέατα, φαγητό και μικρές χρήσιμες συμβουλές.
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8">
        <div className="rounded-[32px] bg-slate-900 px-8 py-10 text-white shadow-xl md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
                Continue exploring
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                Ανακάλυψε περισσότερα μέρη, εμπειρίες και προτάσεις για τη Λέσβο
              </h3>
              <p className="mt-3 text-white/70">
                Συνέχισε την περιήγηση στον ταξιδιωτικό οδηγό και βρες χωριά, παραλίες, φαγητό και προτεινόμενες διαμονές.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Επιστροφή στην αρχική
              </Link>
              <Link
                href="/villages"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Δες τα χωριά
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

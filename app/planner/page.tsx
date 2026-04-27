"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const itineraries = {
  molivos: {
    label: "Μόλυβος",
    description:
      "Ιδανική βάση για βόλτες σε παραδοσιακά χωριά, παραλίες και τη βόρεια πλευρά του νησιού.",
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

type DayPlan = {
  day: number;
  place: string;
  area: string;
  see: readonly string[];
  eat: readonly string[];
  tip: string;
};

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
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600 sm:mb-3 sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function BulletList({
  items,
  dotColor,
}: {
  items: readonly string[];
  dotColor: string;
}) {
  return (
    <ul className="space-y-2.5 sm:space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base"
        >
          <span className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

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
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.14),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-28">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur sm:px-4 sm:text-sm">
                Lesvos Travel Planner
              </div>
              <h1 className="mt-5 text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-6xl md:leading-[1.05]">
                Make your travel with the best planner
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7 md:text-xl md:leading-8">
                Choose where you will stay and how many days you have, and see an organized suggested itinerary with attractions, dining ideas and useful travel tips.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-5">
                <p className="text-xs text-white/60 sm:text-sm">Regions</p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">4</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-5">
                <p className="text-xs text-white/60 sm:text-sm">Days planner</p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">1–10</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:p-5">
                <p className="text-xs text-white/60 sm:text-sm">Style program</p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">Flexible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-6 max-w-6xl px-4 pb-12 sm:-mt-8 sm:px-6 sm:pb-14 md:-mt-10 md:px-8">
        <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-xl sm:rounded-[28px] sm:p-6 md:rounded-[30px] md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-8">
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-800">
                ςhere will you stay?
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value as LocationKey)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100 sm:text-base"
              >
                <option value="">Choose region</option>
                <option value="molivos">Molivos</option>
                <option value="plomari">Plomari</option>
                <option value="mytilini">Mytilini</option>
                <option value="mytilini">Skalla Kallonis</option>
              </select>

              {selectedLocation ? (
                <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3 text-sm leading-6 text-slate-700">
                  <span className="font-semibold text-slate-900">
                    {selectedLocation.label}:
                  </span>{" "}
                  {selectedLocation.description}
                </div>
              ) : (
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Διάλεξε την περιοχή διαμονής σου για να εμφανιστεί ένα πλάνο προσαρμοσμένο στη βάση σου.
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
              <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                {days <= 3
                  ? "Θα δεις πιο κοντινές επιλογές γύρω από τη βάση σου."
                  : "Θα προστεθούν και πιο εκτεταμένες ημερήσιες εξορμήσεις."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {location ? (
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:px-8 md:pb-24">
          <div className="mb-8 flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Suggested itinerary"
              title={`Προτεινόμενο πρόγραμμα για ${selectedLocation?.label}`}
              description="Το πλάνο προσαρμόζεται στη διάρκεια της διαμονής σου και σου δίνει μια πιο καθαρή εικόνα για το πώς να οργανώσεις κάθε ημέρα σου στο νησί."
            />
            <div className="w-fit rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
              {plan.length} προτεινόμενες ημέρες
            </div>
          </div>

          <div className="grid gap-5 sm:gap-6">
            {plan.map((day) => (
              <article
                key={`${day.day}-${day.place}`}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-lg sm:rounded-[28px] md:rounded-[30px]"
              >
                <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-4 py-4 sm:px-6 sm:py-5 md:px-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600 sm:text-sm">
                        Ημέρα {day.day}
                      </p>
                      <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-[28px]">
                        {day.place}
                      </h3>
                    </div>
                    <span className="inline-flex w-fit items-center rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white sm:text-sm">
                      {day.area}
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 px-4 py-4 sm:gap-5 sm:px-6 sm:py-6 md:grid-cols-2 md:px-7">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mb-4 sm:text-sm">
                      Τι να δεις
                    </p>
                    <BulletList items={day.see} dotColor="bg-amber-500" />
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mb-4 sm:text-sm">
                      Πού να φας
                    </p>
                    <BulletList items={day.eat} dotColor="bg-sky-500" />
                  </div>
                </div>

                <div className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-7 md:pb-7">
                  <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4 text-sm leading-6 text-amber-950 sm:px-5">
                    <span className="font-semibold">Travel tip:</span> {day.tip}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:px-8 md:pb-24">
          <div className="rounded-[24px] border border-dashed border-slate-300 bg-white px-4 py-12 text-center shadow-sm sm:rounded-[28px] sm:px-6 sm:py-14 md:rounded-[30px] md:py-16">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
              Επίλεξε περιοχή και διάρκεια διαμονής
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Ο planner θα σου εμφανίσει ένα πιο οργανωμένο πρόγραμμα με αξιοθέατα, σημεία για φαγητό και πρακτικές ιδέες για κάθε ημέρα.
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:px-8 md:pb-24">
        <div className="overflow-hidden rounded-[26px] bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-8 text-white shadow-xl sm:rounded-[30px] sm:px-8 sm:py-10 md:rounded-[34px] md:px-10 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 sm:text-sm">
                Continue exploring
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-[28px] md:text-3xl">
                Ανακάλυψε περισσότερα μέρη, εμπειρίες και προτάσεις για τη Λέσβο
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                Συνέχισε την περιήγηση στον ταξιδιωτικό οδηγό και βρες χωριά, παραλίες, φαγητό και προτεινόμενες διαμονές.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
              >
                Επιστροφή στην αρχική
              </Link>
              <Link
                href="/villages"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
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
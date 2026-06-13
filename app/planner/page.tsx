"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LesvosMap = dynamic(() => import("@/components/LesvosMap"), {
  ssr: false,
  loading: () => (
      <div className="flex min-h-[420px] sm:min-h-[520px] lg:min-h-[620px] items-center justify-center rounded-[22px] sm:rounded-[28px] border border-slate-200 bg-slate-900 text-white shadow-xl">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-amber-400" />
          <p className="mt-4 text-sm text-white/65">Loading Lesvos map...</p>
        </div>
      </div>
  ),
});

const itineraries = {
  molivos: {
    label: "Molivos",
    description:
        "An ideal base for exploring traditional villages, beaches, and the northern side of the island.",
    nearby: [
      {
        place: "Molivos",
        area: "Northern Lesvos",
        see: ["Molivos Castle", "Stone-paved alleys", "Harbour"],
        eat: [
          "Captain's Table (harbourfront taverna)",
          "Ouzeri Melinda (sea-view mezedes)",
        ],
        tip: "Perfect for an evening stroll and a harbourside dinner at sunset.",
      },
      {
        place: "Eftalou",
        area: "Near Molivos",
        see: ["Beach", "Thermal baths"],
        eat: ["Taverna Eftalou (seaside grills & fresh fish)"],
        tip: "Combine a swim with a relaxing soak in the natural hot springs.",
      },
      {
        place: "Petra",
        area: "Northern Lesvos",
        see: ["Church of Panagia Glykofilousa", "Beach", "Central market"],
        eat: [
          "Taverna I Mouria (plateia classics)",
          "Café Aeolis (coffee by the sea)",
        ],
        tip: "Climb up to the Panagia church for a sweeping panoramic view.",
      },
      {
        place: "Anaxos",
        area: "Northern Lesvos",
        see: ["Sandy beach", "Coastal promenade"],
        eat: [
          "Beach Bar Sunset (cocktails & snacks)",
          "Taverna Panorama (seaside grills)",
        ],
        tip: "A laid-back spot — great for a long swim and a lazy coffee.",
      },
    ],
    extended: [
      {
        place: "Sigri",
        area: "Western Lesvos",
        see: ["Petrified Forest", "Museum of Natural History"],
        eat: [
          "Psarotaverna To Kyma (fresh catch)",
          "Café Kastro (harbour-view coffee)",
        ],
        tip: "A great choice for a full-day excursion to the wild west coast.",
      },
      {
        place: "Agiasos",
        area: "Central Lesvos",
        see: [
          "Traditional alleyways",
          "Local craft shops",
          "Church of Panagia Agiasos",
        ],
        eat: ["Taverna O Platanos (local cuisine under a plane tree)"],
        tip: "Visit in the morning or early afternoon for the most pleasant atmosphere.",
      },
      {
        place: "Plomari",
        area: "Southern Lesvos",
        see: ["Harbour", "Ouzo Museum", "Seaside promenade"],
        eat: [
          "Ouzeri Ammoudeli (ouzo & mezedes)",
          "Psarotaverna Gorgona (grilled fish)",
        ],
        tip: "Perfect for combining a harbour walk with a proper ouzo-and-meze lunch.",
      },
    ],
  },
  plomari: {
    label: "Plomari",
    description:
        "An excellent choice for those who want sea, ouzo, and a southern route through the island.",
    nearby: [
      {
        place: "Plomari",
        area: "Southern Lesvos",
        see: ["Harbour", "Old mansions", "Ouzo Museum"],
        eat: [
          "Ouzeri Ammoudeli (classic mezedes & local ouzo)",
          "Psarotaverna Gorgona (grilled fish & seafood)",
        ],
        tip: "Don't leave without trying the local ouzo paired with fried zucchini.",
      },
      {
        place: "Melinda",
        area: "Near Plomari",
        see: ["Pebble beach", "Coastal walk"],
        eat: ["Taverna To Kyma (grills right on the water)"],
        tip: "A lovely spot for a slower day with a morning swim.",
      },
      {
        place: "Agios Isidoros",
        area: "Southern Lesvos",
        see: ["Sandy beach", "Beachfront strip"],
        eat: [
          "Taverna I Akti (fish & seafood)",
          "Café Thalassa (coffee & snacks)",
        ],
        tip: "Clear turquoise water and easy access — one of the best swimming beaches in the south.",
      },
    ],
    extended: [
      {
        place: "Vatera",
        area: "Southern Lesvos",
        see: ["Long sandy shoreline", "Coastal road"],
        eat: [
          "Taverna Dionysos (beachside grills)",
          "Beach Bar Blue Wave (cocktails & light bites)",
        ],
        tip: "Arrive early to claim a good spot on this wide, beautiful beach.",
      },
      {
        place: "Agiasos",
        area: "Central Lesvos",
        see: ["Traditional village", "Local products & crafts"],
        eat: [
          "Taverna O Platanos (home cooking & local wine)",
          "Kafeneion Stou Mitrou (coffee in the alleyways)",
        ],
        tip: "Works perfectly as an afternoon excursion paired with a village dinner.",
      },
    ],
  },
  mytilini: {
    label: "Mytilini",
    description:
        "The best base for city life, sightseeing, shopping, and easy day trips across the island.",
    nearby: [
      {
        place: "Mytilini",
        area: "Eastern Lesvos",
        see: ["Medieval Castle", "Ermou Street","Archaeological Museum"],
        eat: [
          "To Limanaki tou Pafilon ",
          "Mezedopoleio Averof (mezedes since 1841)",
          "Taverna Ermis (traditional harbour fare)",
          "Café Sappho (coffee & breakfast)",
        ],
        tip: "Best explored in the late afternoon and evening when the harbour buzzes with life.",
      },
      {
        place: "S",
        area: "Near Mytilini",
        see: ["Thermal springs", "Coastal path"],
        eat: ["Taverna Akrogiali (beach grills & local fish)"],
        tip: "A quieter escape close to the city — great for lunch after a morning sightseeing.",
      },
      {
        place: "Aerohori",
        area: "Mytilini Area",
        see: ["Aegean panorama", "Peaceful country roads"],
        eat: [
          "Kafeneion To Steki (mezedes & coffee)",
        ],
        tip: "Go for the view and a long coffee — one of the calmest spots near the city.",
      },
    ],
    extended: [
      {
        place: "Plomari",
        area: "Southern Lesvos",
        see: ["Harbour", "Ouzo Museum"],
        eat: [
          "Ouzeri Ammoudeli (ouzo & mezedes)",
          "Psarotaverna Gorgona (fresh fish)",
        ],
        tip: "A satisfying full-day trip — combine the museum visit with a long seafood lunch.",
      },
      {
        place: "Vatera",
        area: "Southern Lesvos",
        see: ["Beach", "Coastal zone"],
        eat: [
          "Taverna Dionysos (beachside classics)",
          "Beach Bar Blue Wave (light meals & drinks)",
        ],
        tip: "A relaxed day with the emphasis firmly on sea and sunshine.",
      },
    ],
  },
  skala_kallonis: {
    label: "Skala Kallonis",
    description:
        "A tranquil fishing village in the heart of the island, famous for its sardines and the Kalloni Gulf birdwatching.",
    nearby: [
      {
        place: "Skala Kallonis",
        area: "Central Lesvos",
        see: ["Kalloni Gulf", "Salt flats (birdwatching)", "Village harbour"],
        eat: [
          "Taverna I Sardella (famous local sardines)",
          "Ouzeri To Limanaki (fresh catch & ouzo)",
        ],
        tip: "The grilled sardines here are legendary — don't miss them with a glass of ouzo.",
      },
      {
        place: "Kalloni",
        area: "Central Lesvos",
        see: ["Central square", "Local market", "Taxiarchis Monastery nearby"],
        eat: [
          "Kafeneion Plateia (traditional coffee & snacks)",
          "Taverna To Steki (home-style cooking)",
        ],
        tip: "A great place to stock up on local olive oil and preserves.",
      },
      {
        place: "Parakila",
        area: "Near Kalloni",
        see: ["Countryside landscape", "Olive groves"],
        eat: ["Taverna Eleonas (grills in a garden setting)"],
        tip: "A calm, authentic village — perfect for a slow lunch off the tourist trail.",
      },
    ],
    extended: [
      {
        place: "Molivos",
        area: "Northern Lesvos",
        see: ["Molivos Castle", "Stone alleys", "Harbour"],
        eat: [
          "Captain's Table (harbourfront classics)",
          "Ouzeri Melinda (sea-view mezedes)",
        ],
        tip: "A spectacular full-day drive up through the pine-covered hills.",
      },
      {
        place: "Sigri",
        area: "Western Lesvos",
        see: ["Petrified Forest", "Museum of Natural History", "Wild coastline"],
        eat: [
          "Psarotaverna To Kyma (fresh fish)",
          "Café Kastro (harbour coffee)",
        ],
        tip: "Head west early — the Petrified Forest deserves a full morning.",
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
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-orange-500">
              {eyebrow}
            </p>
        ) : null}
        <h2 className="text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">
          {title}
        </h2>
        {description ? (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {description}
            </p>
        ) : null}
      </div>
  );
}

function Icon({ name }: { name: "pin" | "calendar" | "spark" | "eye" | "food" | "tip" | "arrow" }) {
  const paths = {
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    spark: <><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></>,
    eye: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></>,
    food: <><path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M16 3v18M16 3c3 2 4 5 4 8h-4"/></>,
    tip: <><path d="M9 18h6M10 22h4"/><path d="M8.2 14.5A7 7 0 1 1 15.8 14.5C14.7 15.5 14 16.5 14 18h-4c0-1.5-.7-2.5-1.8-3.5Z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  };

  return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
  );
}

function BulletList({ items, tone }: { items: readonly string[]; tone: "orange" | "sky" }) {
  return (
      <ul className="space-y-3">
        {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-[15px]">
              <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${tone === "orange" ? "bg-orange-500" : "bg-sky-500"}`} />
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
    return Array.from({ length: days }, (_, index) => ({ day: index + 1, ...pool[index % pool.length] }));
  }, [location, days]);

  return (
      <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-slate-950">
        <section className="relative isolate overflow-hidden bg-[#07110f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,146,60,0.22),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(34,211,238,0.14),transparent_28%),linear-gradient(to_bottom,#07110f,#0c1714)]" />
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full border border-white/10 bg-white/[0.03] blur-sm" />
          <div className="absolute -right-20 bottom-[-90px] h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20 md:pt-24 lg:px-8 lg:pt-28">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-200 backdrop-blur-xl">
                  <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-orange-300 opacity-70"/><span className="relative h-2 w-2 rounded-full bg-orange-300"/></span>
                  Lesvos itinerary builder
                </div>

                <h1 className="mt-7 max-w-4xl text-[2.75rem] font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.3rem]">
                  Your island,
                  <span className="block bg-gradient-to-r from-orange-200 via-amber-300 to-cyan-200 bg-clip-text text-transparent">your perfect route.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
                  Pick your base and trip length. We’ll shape a flexible day-by-day journey with local highlights, food stops and practical travel tips.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:grid-cols-3">
                {[['4','Bases'],['1–10','Days'],['100%','Flexible']].map(([value,label], index) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + index * 0.08 }} className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl sm:rounded-[1.5rem] sm:p-5">
                      <p className="text-2xl font-black sm:text-3xl">{value}</p>
                      <p className="mt-1 text-xs font-medium text-white/45 sm:text-sm">{label}</p>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-20 mx-auto -mt-12 max-w-6xl px-3 sm:-mt-16 sm:px-6 md:-mt-20 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/90 p-4 sm:rounded-[2rem] sm:p-6 md:p-8 shadow-[0_30px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-600"><Icon name="pin" /></span>Choose your base</div>
                <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-4">
                  {(Object.keys(itineraries) as LocationKey[]).map((key) => {
                    const item = itineraries[key];
                    const active = location === key;
                    return (
                        <motion.button key={key} type="button" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} onClick={() => setLocation(key)} className={`rounded-2xl border px-4 py-3.5 text-left sm:py-4 transition ${active ? "border-orange-300 bg-orange-50 shadow-[0_12px_30px_rgba(249,115,22,0.12)]" : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"}`}>
                          <span className={`block text-xs font-black uppercase tracking-[0.16em] ${active ? "text-orange-600" : "text-slate-400"}`}>Base</span>
                          <span className="mt-2 block text-sm font-black text-slate-950 sm:text-base">{item.label}</span>
                        </motion.button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={selectedLocation?.label ?? 'empty'} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-4 min-h-[76px] rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-4 text-sm leading-6 text-slate-700">
                    {selectedLocation ? <><span className="font-black text-slate-950">{selectedLocation.label} — </span>{selectedLocation.description}</> : 'Choose one of the four bases to generate your personalised island itinerary.'}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="rounded-[1.5rem] bg-slate-950 p-4 text-white sm:rounded-[1.75rem] sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-orange-300"><Icon name="calendar" /></span><div><p className="text-xs text-white/45">Trip length</p><p className="font-bold">How many days?</p></div></div>
                  <span className="rounded-full bg-orange-300 px-4 py-2 text-sm font-black text-slate-950">{days} {days === 1 ? 'day' : 'days'}</span>
                </div>

                <input type="range" min="1" max="10" value={days} onChange={(event) => setDays(Number(event.target.value))} className="mt-7 w-full accent-orange-300" />
                <div className="mt-2 flex justify-between text-[11px] text-white/35"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10 days</span></div>
                <p className="mt-5 rounded-2xl bg-white/[0.06] px-4 py-3 text-xs leading-5 text-white/55">{days <= 3 ? 'A focused escape with highlights close to your selected base.' : 'A deeper island journey with longer day trips and more variety.'}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle eyebrow="Interactive map" title={selectedLocation ? `Start from ${selectedLocation.label}` : 'See the island before you plan it'} description={selectedLocation ? 'The map moves automatically to your selected base. Tap any marker to explore more locations around Lesvos.' : 'Browse villages, beaches, food spots and natural landmarks, then choose the perfect base above.'} />
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm"><Icon name="spark" /> Live island map</div>
          </div>
          <LesvosMap selectedPlaceName={selectedLocation?.label} />
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle eyebrow="Your itinerary" title={selectedLocation ? `${days} unforgettable ${days === 1 ? 'day' : 'days'} from ${selectedLocation.label}` : 'Your route will appear here'} description={selectedLocation ? 'Each day balances sightseeing, local food and a practical insider tip so your trip feels organised but never rushed.' : 'Choose a base above and we’ll instantly build your day-by-day route.'} />
            {selectedLocation ? <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm">{plan.length} planned {plan.length === 1 ? 'day' : 'days'}</div> : null}
          </div>

          {location ? (
              <div className="relative">
                <div className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-gradient-to-b from-orange-300 via-slate-200 to-transparent md:block" />
                <div className="space-y-6">
                  {plan.map((day, index) => (
                      <motion.article key={`${day.day}-${day.place}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: Math.min(index * 0.05, 0.25) }} className="relative md:pl-20">
                        <div className="absolute left-0 top-8 hidden h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#f7f4ee] bg-slate-950 text-lg font-black text-white shadow-xl md:flex">{String(day.day).padStart(2,'0')}</div>
                        <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/80 sm:rounded-[2rem] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
                          <div className="flex flex-col gap-4 border-b border-slate-100 bg-gradient-to-r from-slate-950 to-[#15231f] px-4 py-5 text-white sm:flex-row sm:px-6 sm:py-6 sm:items-center sm:justify-between sm:px-7">
                            <div><p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">Day {day.day}</p><h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{day.place}</h3></div>
                            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-bold text-white/70"><Icon name="pin" />{day.area}</span>
                          </div>

                          <div className="grid gap-4 p-4 sm:gap-5 sm:p-6 md:grid-cols-2 lg:p-7">
                            <div className="rounded-[1.25rem] border border-orange-100 bg-orange-50/60 p-4 sm:rounded-[1.5rem] sm:p-5">
                              <div className="mb-5 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white"><Icon name="eye" /></span><div><p className="text-xs font-black uppercase tracking-[0.16em] text-orange-600">Discover</p><h4 className="font-black text-slate-950">What to see</h4></div></div>
                              <BulletList items={day.see} tone="orange" />
                            </div>
                            <div className="rounded-[1.25rem] border border-sky-100 bg-sky-50/60 p-4 sm:rounded-[1.5rem] sm:p-5">
                              <div className="mb-5 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white"><Icon name="food" /></span><div><p className="text-xs font-black uppercase tracking-[0.16em] text-sky-600">Taste</p><h4 className="font-black text-slate-950">Where to eat</h4></div></div>
                              <BulletList items={day.eat} tone="sky" />
                            </div>
                          </div>

                          <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7"><div className="flex gap-3 rounded-[1.35rem] border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-amber-950"><span className="mt-0.5 text-amber-600"><Icon name="tip" /></span><p><span className="font-black">Local tip:</span> {day.tip}</p></div></div>
                        </div>
                      </motion.article>
                  ))}
                </div>
              </div>
          ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative overflow-hidden rounded-[2.2rem] border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.08),transparent_45%)]" />
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-orange-300 shadow-xl"><Icon name="spark" /></div>
                <h3 className="relative mt-6 text-2xl font-black tracking-tight sm:text-3xl">Your personalised route starts here</h3>
                <p className="relative mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">Select where you’ll stay and your trip length. The complete itinerary will appear instantly.</p>
              </motion.div>
          )}
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 px-5 py-10 sm:rounded-[2.5rem] sm:px-8 sm:py-12 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
            <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.24em] text-orange-300">Keep discovering</p><h3 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Turn your itinerary into an unforgettable Lesvos story.</h3><p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">Explore more villages, beaches, experiences and local recommendations across the guide.</p></div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Link href="/" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-orange-200">Back home <Icon name="arrow" /></Link><Link href="/villages" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-4 text-sm font-black text-white transition hover:bg-white/[0.12]">Explore villages <Icon name="arrow" /></Link></div>
            </div>
          </div>
        </section>
      </main>
  );
}

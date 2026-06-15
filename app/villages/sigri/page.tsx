"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Car,
  ChevronRight,
  Clock3,
  MapPin,
  Navigation,
  Sun,
  Waves,
  Star,
  Home,
  Landmark,
} from "lucide-react";

const quickFacts = [
  { value: "Western Lesvos", label: "Location" },
  { value: "About 300 residents", label: "Population" },
  { value: "The Petrified Forest of Lesvos", label: "Famous for" },
  { value: "Part of the UNESCO Global Geopark of Lesvos", label: "UNESCO Status" },
  { value: "Nature, geology, beaches, sunsets, tranquility", label: "Best for" },
  { value: "Known as", label: "One of the best sunset spots on the island" },
];

const highlights = [
  {
    icon: Landmark,
    title: "Petrified Forest of Lesvos",
    text: "The world's most famous attraction in western Lesvos. Around 20 million years ago, volcanic eruptions buried a vast subtropical forest, preserving hundreds of tree trunks in stone.",
  },
  {
    icon: Landmark,
    title: "Natural History Museum",
    text: "One of Greece's most important geological museums, explaining the volcanic history of the Aegean and the formation of the Petrified Forest.",
  },
  {
    icon: Home,
    title: "Traditional Fishing Village",
    text: "Sigri remains an authentic fishing village with a peaceful harbor, traditional tavernas, and a relaxed atmosphere far from mass tourism.",
  },
  {
    icon: Sun,
    title: "Spectacular Sunsets",
    text: "Its western location makes Sigri one of the island's premier sunset destinations.",
  },
];

const practicalInfo = [
  {
    icon: Clock3,
    label: "Best Time to Visit",
    values: [
      "☀️ June–September: Warm weather, beach season and boat trips",
      "🌸 April–May: Ideal for hiking and exploring the Petrified Forest",
      "🍂 October: Pleasant temperatures and fewer visitors",
    ],
  },
  {
    icon: Car,
    label: "Transport",
    values: [
      "🚗 Renting a car is highly recommended",
      "🚌 Public buses are available but less frequent than in eastern Lesvos",
    ],
  },
  {
    icon: Star,
    label: "Local Specialties",
    values: [
      "🐟 Fresh fish and seafood",
      "🥃 Ouzo",
      "🍯 Local honey",
      "🫒 Olive oil",
      "🧀 Ladotyri cheese",
      "🍽️ Traditional Lesvian meze",
    ],
  },
  {
    icon: Star,
    label: "Local Tip",
    values: [
      "🌅 Visit the museum first, then the Petrified Forest, spend the afternoon at Faneromeni Beach and finish the day with seafood and sunset views at the harbor.",
    ],
  },
];

const guideCards = [
  {
    eyebrow: "Stay",
    title: "Beachfront accommodation",
    image: "/hotel-placeholder.jpg",
    description:
        "Wake up close to the sea and enjoy effortless access to the coast from early morning.",
    href: "/stay",
  },
  {
    eyebrow: "Taste",
    title: "Seaside tavernas",
    image: "/restaurant-placeholder.jpg",
    description:
        "Fresh fish, local mezedes and traditional Greek flavours served beside the water.",
    href: "/food",
  },
  {
    eyebrow: "Explore",
    title: "Southern Lesvos",
    image: "/attractions-placeholder.jpg",
    description:
        "Scenic roads, traditional villages and quieter corners are all within easy reach.",
    href: "/explore",
  },
];

const nearbyPlaces = [
  {
    title: "Skala Eressos (20 min)",
    text: "One of Lesvos' best beaches, with cafés, restaurants, and a lively summer atmosphere.",
    href: "/villages/skala-eresos",
    icon: Waves,
  },
  {
    title: "Eressos (15 min)",
    text: "Traditional village and birthplace of the ancient poet Sappho..",
    href: "/villages/anaxos",
    icon: Home,
  },
  {
    title: "Antissa (20 min)",
    text: "A quiet inland village surrounded by olive groves and volcanic landscapes.",
    href: "/attractions/eftalou",
    icon: Home,
  },
  {
    title: "Gavathas Beach (30 min)",
    text: "A peaceful sandy beach ideal for visitors seeking solitude.",
    href: "/attractions/eftalou",
    icon: Waves,
  },
  {
    title: "Molyvos (1 hour)",
    text: "The island's most famous medieval town with a castle, stone houses, and picturesque alleys.",
    href: "/attractions/eftalou",
    icon: Home,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

function SectionHeading({
                          eyebrow,
                          title,
                          description,
                          light = false,
                          centered = false,
                        }: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
      <motion.div
          {...fadeUp}
          className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      >
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-amber-500 sm:text-sm">
          {eyebrow}
        </p>

        <h2
            className={`mt-4 text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl ${
                light ? "text-white" : "text-stone-950"
            }`}
        >
          {title}
        </h2>

        {description ? (
            <p
                className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${
                    light ? "text-white/60" : "text-stone-600"
                }`}
            >
              {description}
            </p>
        ) : null}
      </motion.div>
  );
}

export default function SigriPage() {
  return (
      <main className="overflow-hidden bg-[#f6f1e8] text-stone-950">
        {/* HERO */}
        <section className="relative min-h-[100svh] overflow-hidden bg-stone-950">
          <Image
              src="/sigri/sigri-sunset.jpg"
              alt="Sigri in Lesvos"
              fill
              priority
              sizes="100vw"
              className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,13,8,0.96)_0%,rgba(18,13,8,0.7)_45%,rgba(18,13,8,0.2)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/25" />
          <div className="hidden lg:block absolute left-[12%] top-[28%] h-[420px] w-[420px] rounded-full bg-amber-300/10 blur-[130px]" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-12 pt-24 sm:pb-20 sm:pt-32">
            <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <motion.div
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-4xl text-white"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/85 backdrop-blur-xl sm:text-xs">
                  <MapPin className="h-4 w-4 text-amber-300" />
                  Western Lesvos · Greece
                </div>

                <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[9rem]">
                  Sigri
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8 md:text-xl">
                  Sigri is one of the most unique destinations in Lesvos, known for its
                  dramatic volcanic landscape, the world-famous Petrified Forest, peaceful
                  beaches and unforgettable sunsets. This traditional fishing village offers a
                  quieter side of the island where nature, history and authentic local life
                  come together.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                      href="#discover"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-stone-950 shadow-[0_18px_55px_rgba(251,191,36,0.3)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Discover Sigri
                    <ArrowDown className="h-4 w-4" />
                  </a>

                  <a
                      href="#map"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
                  >
                    View on map
                    <Navigation className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:max-w-2xl sm:grid-cols-3 lg:grid-cols-6">
                  {quickFacts.map((fact) => (
                      <div
                          key={fact.label}
                          className="min-h-[110px] rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4 backdrop-blur-xl"
                      >
                        <p className="text-base font-black text-white sm:text-xl">{fact.value}</p>
                        <p className="mt-1 text-xs text-white/45">{fact.label}</p>
                      </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#f6f1e8] to-transparent" />
        </section>

        {/* EDITORIAL INTRO */}
        <section
            id="discover"
            className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8"
        >
          <div>
            <SectionHeading
                eyebrow="Why visit Sigri"
                title="A village with history, sunset and beautiful sea"
                description="Unlike the green eastern side of Lesvos, Sigri offers a unique volcanic landscape, world-class geological sites, uncrowded beaches, and some of the island's most spectacular sunsets. It is one of the most distinctive destinations in the entire Aegean"
            />

            <motion.div {...fadeUp} className="mt-9 border-l-2 border-amber-400 pl-5">
              <p className="text-xl font-semibold leading-8 text-stone-800">
                “Where every street tells a story.”
              </p>
            </motion.div>
          </div>

          <motion.div
              {...fadeUp}
              className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative h-[380px] sm:min-h-[560px] overflow-hidden rounded-[2.25rem]">
              <Image
                  src="/sigri/sigri-village.jpg"
                  alt="Sigri"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-7 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  Golden coast
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* HIGHLIGHTS */}
        <section id="highlights" className="bg-stone-950 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
                eyebrow="Beach highlights"
                title="Everything you need for a beautiful summer day"
                description="Natural beauty, comfort and calm come together along one spectacular coastline."
                centered
                light
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => (
                  <motion.article
                      key={item.title}
                      {...fadeUp}
                      transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                      className="group rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-stone-950">
                      <item.icon className="h-6 w-6" />
                    </div>

                    <div className="mt-9 flex items-center justify-between">
                  <span className="text-xs font-bold text-white/30">
                    0{index + 1}
                  </span>
                      <span className="h-px w-10 bg-white/10" />
                    </div>

                    <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
                  </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* GUIDE CARDS */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
                eyebrow="Local guide"
                title="Stay, taste and explore"
                description="Turn a beach visit into a fuller experience of southern Lesvos."
                centered
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {guideCards.map((card, index) => (
                  <motion.article
                      key={card.title}
                      {...fadeUp}
                      transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                      className="group overflow-hidden rounded-[2.25rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />

                      <div className="absolute bottom-0 p-6 text-white">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                          {card.eyebrow}
                        </p>
                        <h3 className="mt-2 text-3xl font-black">{card.title}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm leading-7 text-stone-600">
                        {card.description}
                      </p>

                      <Link
                          href={card.href}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-stone-950 transition group-hover:text-amber-600"
                      >
                        Explore
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* MAP */}
        <section id="map" className="border-y border-stone-200 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <motion.div
                  {...fadeUp}
                  className="rounded-[2.25rem] bg-[#17201c] p-6 text-white shadow-[0_30px_80px_rgba(28,25,23,0.18)] sm:p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  Plan your visit
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.045em]">
                  Useful information
                </h2>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {practicalInfo.map((item) => (
                      <div
                          key={item.label}
                          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-300 text-stone-950">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                            {item.label}
                          </p>
                          <div className="mt-2 space-y-1">
                            {item.values.map((value) => (
                                <p
                                    key={value}
                                    className="text-sm leading-6 text-white/90"
                                >
                                  {value}
                                </p>
                            ))}
                          </div>
                        </div>
                      </div>
                  ))}
                </div>

                <a
                    href="https://maps.app.goo.gl/UE2Z6uA29i46KMHT7"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-stone-950 transition hover:bg-amber-300"
                >
                  <Navigation className="h-4 w-4" />
                  Open directions
                </a>
              </motion.div>

              <motion.div
                  {...fadeUp}
                  className="overflow-hidden rounded-[2.25rem] border border-stone-200 bg-white shadow-[0_30px_80px_rgba(28,25,23,0.14)]"
              >
                <div className="flex flex-col gap-3 border-b border-stone-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
                      Location
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-stone-950">
                      Sigri, Lesvos
                    </h3>
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-xs font-semibold text-stone-600">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  Western coast
                </span>
                </div>

                <div className="h-[430px] sm:h-[540px]">
                  <iframe
                      title="Map of Sigri"
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4640.094825095451!2d25.850234775963557!3d39.210818595012505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bac634f0f9ec95%3A0x500bd2ce2baae40!2sSigri!5e1!3m2!1sen!2sgr!4v1781512686288!5m2!1sen!2sgr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NEARBY */}
        <section className="bg-[#17201c] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                  eyebrow="Nearby places"
                  title="Continue exploring northern Lesvos"
                  light
              />

              <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Combine your beach day with local villages, traditional food and
                quieter corners of the island.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {nearbyPlaces.map((item, index) => (
                  <motion.div
                      key={item.title}
                      {...fadeUp}
                      transition={{ ...fadeUp.transition, delay: index * 0.07 }}
                  >
                    <Link
                        href={item.href}
                        className="group block rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.08]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-stone-950">
                        <item.icon className="h-6 w-6" />
                      </div>

                      <h3 className="mt-8 text-2xl font-bold transition group-hover:text-amber-300">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                        Explore
                        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-28 sm:py-36">
          <Image
              src="/sigri/sigri-hero.jpg"
              alt="sigri"
              fill
              sizes="100vw"
              className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/82" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-transparent to-stone-950/35" />

          <motion.div
              {...fadeUp}
              className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
              Discover Lesvos
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Find your next island escape
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Explore beaches, villages, local flavours and memorable experiences
              across the island.
            </p>

            <Link
                href="/beaches"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              View all beaches
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </section>
      </main>
  );
}

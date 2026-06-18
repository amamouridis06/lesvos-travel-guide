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
  Compass,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
  Church,
  Waves,
  Star,
  Home,
  UtensilsCrossed,
  Landmark,
  Camera
} from "lucide-react";


const quickFacts = [
  { label: "Region", value: "Northern Lesvos" },
  { label: "Distance from Mytilene", value: "70 km" },
  { label: "Best Known For", value: "Mount Lepetymnos" },
  { label: "Highest Point", value: "968 m" },
  { label: "Ideal For", value: "Hiking & Nature" },
  { label: "Character", value: "Mountain Village" },
];

const highlights = [
  {
    icon: Landmark,
    title: "Mount Lepetymnos",
    text: "The highest mountain on Lesvos, offering breathtaking views across the Aegean Sea.",
  },
  {
    icon: Sun,
    title: "Panoramic Landscapes",
    text: "Enjoy spectacular vistas of northern Lesvos, the Turkish coast and surrounding islands.",
  },
  {
    icon: Home,
    title: "Traditional Village Life",
    text: "Experience authentic rural life surrounded by olive groves and mountain scenery.",
  },
  {
    icon: TreePine,
    title: "Hiking Trails",
    text: "Discover scenic routes through nature and some of the island's most unspoiled landscapes.",
  },
];

const practicalInfo = [
  {
    icon: Clock3,
    label: "Best Time to Visit",
    values: [
      "🌸 April–May: Ideal hiking weather and wildflowers",
      "☀️ June–September: Clear views and mountain walks",
      "🍂 October: Pleasant temperatures and autumn colours",
    ],
  },
  {
    icon: Car,
    label: "Getting Around",
    values: [
      "🚗 A car is highly recommended",
      "🥾 Many attractions are best explored on foot",
    ],
  },
  {
    icon: Star,
    label: "Known For",
    values: [
      "⛰️ Highest mountain in Lesvos",
      "🥾 Hiking trails",
      "🌄 Panoramic views",
      "🌿 Untouched nature",
    ],
  },
  {
    icon: Star,
    label: "Local Tip",
    values: [
      "Visit early in the morning for cooler temperatures and the clearest views from the mountain slopes.",
    ],
  },
];


const guideCards = [
  {
    eyebrow: "Stay",
    title: "Mountain guesthouses",
    image: "/hotel-placeholder.jpg",
    description:
        "Stay in peaceful traditional accommodation surrounded by nature and panoramic mountain views.",
    href: "/stay",
  },
  {
    eyebrow: "Taste",
    title: "Authentic local flavours",
    image: "/restaurant-placeholder.jpg",
    description:
        "Enjoy homemade Lesvian dishes, local cheeses, olive oil and traditional village hospitality.",
    href: "/food",
  },
  {
    eyebrow: "Explore",
    title: "Hiking & nature trails",
    image: "/attractions-placeholder.jpg",
    description:
        "Discover Mount Lepetymnos, scenic walking routes and some of the most spectacular views in Lesvos.",
    href: "/explore",
  },
];

const nearbyPlaces = [
  {
    title: "Molyvos (15 min)",
    text: "Historic medieval town with a castle and stunning sea views.",
    href: "/villages/molyvos",
    icon: Landmark,
  },
  {
    title: "Petra (20 min)",
    text: "Picturesque coastal village famous for its church on a rock.",
    href: "/villages/petra",
    icon: Home,
  },
  {
    title: "Anaxos (20 min)",
    text: "Family-friendly beach resort with golden sands.",
    href: "/villages/anaxos",
    icon: Waves,
  },
  {
    title: "Mantamados (30 min)",
    text: "Traditional village known for the Taxiarchis Monastery.",
    href: "/villages/mantamados",
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

export default function ParaskeviPage() {
  return (
      <main className="overflow-hidden bg-[#f6f1e8] text-stone-950">
        {/* HERO */}
        <section className="relative min-h-[100svh] overflow-hidden bg-stone-950">
          <Image
              src="/Lepetymnos.jpg"
              alt="Lepetymnos in Lesvos"
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
                  Northern Lesvos· Greece
                </div>

                <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[9rem]">
                  Lepetymnos
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8 md:text-xl">
                  Lepetymnos is a peaceful mountain destination in northern Lesvos, home to the island's highest peak. Surrounded by dramatic landscapes, hiking trails and panoramic Aegean views, it offers a completely different side of Lesvos away from the coast.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                      href="#discover"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-stone-950 shadow-[0_18px_55px_rgba(251,191,36,0.3)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Discover Lepetymnos
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

                <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:max-w-2xl sm:grid-cols-4">
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
                eyebrow="Why visit Lepetymnos"
                title="Discover the highest point of Lesvos"
                description="From panoramic mountain views to peaceful hiking trails and authentic rural landscapes, Lepetymnos is a paradise for nature lovers and outdoor enthusiasts."
            />

            <motion.div {...fadeUp} className="mt-9 border-l-2 border-amber-400 pl-5">
              <p className="text-xl font-semibold leading-8 text-stone-800">
                “The island's highest views and quietest moments.”
              </p>
            </motion.div>
          </div>

          <motion.div
              {...fadeUp}
              className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative h-[380px] sm:min-h-[560px] overflow-hidden rounded-[2.25rem]">
              <Image
                  src="/Lepetymnos.jpg"
                  alt="Lepetymnos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-7 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  Tranditional Village
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
                description="Discover mountain villages, authentic local flavours and breathtaking views from the highest peak in Lesvos."
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
                            {item.title}
                          </p>
                          <p className="mt-1 font-semibold text-white">{item.label}</p>
                        </div>
                      </div>
                  ))}
                </div>

                <a
                    href="https://maps.app.goo.gl/HcqvmeghVfyjmQ796"
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
                      Lepetymnos, Lesvos
                    </h3>
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-xs font-semibold text-stone-600">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  Central Village
                </span>
                </div>

                <div className="h-[430px] sm:h-[540px]">
                  <iframe
                      title="Map of Lepetymnos"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.3178395714594!2d26.27346535!3d39.3653804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba848b992f0367%3A0x9360e57af920a080!2sLepetimnos%20811%2008!5e1!3m2!1sen!2sgr!4v1781774171189!5m2!1sen!2sgr"
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

                      <p className="mt-3 text-sm leading-6 text-white/55">{item.description}</p>

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
              src="/Lepetymnos.jpg"
              alt="Lepetymnos"
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

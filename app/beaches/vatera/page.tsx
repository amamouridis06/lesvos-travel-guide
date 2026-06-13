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
  Coffee,
  Compass,
  MapPin,
  Navigation,
  ParkingCircle,
  ShieldCheck,
  Sparkles,
  Sun,
  Sunset,
  Trees,
  Umbrella,
  Utensils,
  Waves,
} from "lucide-react";

const quickFacts = [
  { value: "8 km", label: "Coastline" },
  { value: "Sandy", label: "Beach type" },
  { value: "Easy", label: "Access by car" },
  { value: "Sunset", label: "Best moment" },
];

const highlights = [
  {
    icon: Waves,
    title: "Crystal-clear sea",
    text: "Calm, transparent water and plenty of room for long, relaxed swims.",
  },
  {
    icon: Sunset,
    title: "Golden evenings",
    text: "Stay until sunset and watch the entire coastline glow in warm light.",
  },
  {
    icon: Umbrella,
    title: "Comfort nearby",
    text: "Organised sections, cafés and tavernas are available along the shore.",
  },
  {
    icon: Trees,
    title: "Space to unwind",
    text: "A wide open beach that still feels peaceful during the summer season.",
  },
];

const practicalInfo = [
  { icon: Waves, label: "Beach type", value: "Long sandy coastline" },
  { icon: Umbrella, label: "Facilities", value: "Sunbeds, cafés and tavernas" },
  { icon: Car, label: "Access", value: "Easy access by car" },
  { icon: ParkingCircle, label: "Parking", value: "Available near the beach" },
  { icon: Clock3, label: "Best time", value: "Morning through sunset" },
  { icon: ShieldCheck, label: "Ideal for", value: "Families, couples and relaxation" },
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
    title: "Plomari",
    text: "A lively seaside town known for ouzo, harbour views and local character.",
    href: "/villages/plomari",
    icon: Compass,
  },
  {
    title: "Local food",
    text: "Discover seafood, grilled dishes and authentic island flavours nearby.",
    href: "/food",
    icon: Utensils,
  },
  {
    title: "More beaches",
    text: "Continue along the southern coast and discover quieter swimming spots.",
    href: "/beaches",
    icon: Waves,
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
            className={`mt-4 text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl ${
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

export default function VateraPage() {
  return (
      <main className="overflow-hidden bg-[#f6f1e8] text-stone-950">
        {/* FLOATING NAV */}
        <div className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/15 bg-stone-950/65 px-4 py-3 text-white shadow-2xl backdrop-blur-2xl sm:px-5">
            <Link href="/" className="text-sm font-black tracking-tight sm:text-base">
              LESVOS<span className="text-amber-300">.</span>
            </Link>

            <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
              <a href="#discover" className="transition hover:text-white">
                Discover
              </a>
              <a href="#highlights" className="transition hover:text-white">
                Highlights
              </a>
              <a href="#map" className="transition hover:text-white">
                Map
              </a>
            </div>

            <Link
                href="/beaches"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-stone-950 transition hover:bg-amber-300 sm:text-sm"
            >
              All beaches
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* HERO */}
        <section className="relative min-h-[100svh] overflow-hidden bg-stone-950">
          <Image
              src="/petra.jpg"
              alt="Vatera Beach in Lesvos"
              fill
              priority
              sizes="100vw"
              className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,13,8,0.96)_0%,rgba(18,13,8,0.7)_45%,rgba(18,13,8,0.2)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/25" />
          <div className="absolute left-[12%] top-[28%] h-[420px] w-[420px] rounded-full bg-amber-300/10 blur-[130px]" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
            <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <motion.div
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-4xl text-white"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white/85 backdrop-blur-xl sm:text-xs">
                  <MapPin className="h-4 w-4 text-amber-300" />
                  Southern Lesvos · Greece
                </div>

                <h1 className="mt-7 text-[4.25rem] font-black leading-[0.82] tracking-[-0.075em] sm:text-8xl lg:text-[9rem]">
                  Vatera
                  <span className="block bg-gradient-to-r from-amber-100 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Beach
                </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8 md:text-xl">
                  A wide golden shoreline, clear Aegean water and the kind of
                  peaceful atmosphere that makes you forget the time.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                      href="#discover"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-stone-950 shadow-[0_18px_55px_rgba(251,191,36,0.3)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Discover Vatera
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

                <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                  {quickFacts.map((fact) => (
                      <div
                          key={fact.label}
                          className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl"
                      >
                        <p className="text-xl font-black text-white">{fact.value}</p>
                        <p className="mt-1 text-xs text-white/45">{fact.label}</p>
                      </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden justify-end lg:flex"
              >
                <div className="relative h-[590px] w-[400px] overflow-hidden rounded-[2.75rem] border border-white/15 bg-white/10 shadow-[0_50px_140px_rgba(0,0,0,0.55)]">
                  <Image
                      src="/vatera1.jpg"
                      alt="Vatera coast at sunset"
                      fill
                      sizes="400px"
                      className="object-cover transition duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                    <Sparkles className="h-4 w-4 text-amber-300" />
                    Local favourite
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                      Summer escape
                    </p>
                    <h2 className="mt-3 text-4xl font-black tracking-[-0.045em]">
                      Sea, space and slow island days
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/65">
                      Swim, walk, eat well and stay until the coastline turns gold.
                    </p>
                  </div>
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
                eyebrow="Why Vatera"
                title="A beach that feels almost endless"
                description="Vatera is one of those places where simplicity becomes the luxury. Swim, walk, eat beside the sea and let the whole day unfold at its own pace."
            />

            <motion.div {...fadeUp} className="mt-9 border-l-2 border-amber-400 pl-5">
              <p className="text-xl font-semibold leading-8 text-stone-800">
                “The perfect place for travellers who want less noise, more sea and
                a genuine sense of island life.”
              </p>
            </motion.div>
          </div>

          <motion.div
              {...fadeUp}
              className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative min-h-[560px] overflow-hidden rounded-[2.25rem]">
              <Image
                  src="/vatera1.jpg"
                  alt="Vatera Beach"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-7 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  Golden coast
                </p>
                <h3 className="mt-3 text-4xl font-black tracking-tight">
                  Room to slow down
                </h3>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative min-h-[270px] overflow-hidden rounded-[2rem]">
                <Image
                    src="/petra.jpg"
                    alt="Aegean sea view"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <p className="text-lg font-bold">Clear Aegean water</p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#1b261f] p-7 text-white">
                <Sun className="h-8 w-8 text-amber-300" />
                <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  Best for
                </p>
                <h3 className="mt-3 text-3xl font-black">
                  Long, effortless beach days
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/55">
                  Ideal for families, couples and travellers searching for space,
                  comfort and a relaxed pace.
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

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                          <p className="mt-1 font-semibold text-white">{item.value}</p>
                        </div>
                      </div>
                  ))}
                </div>

                <a
                    href="https://www.openstreetmap.org/search?query=Vatera%20Lesvos"
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
                      Vatera, Lesvos
                    </h3>
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-xs font-semibold text-stone-600">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  Southern coast
                </span>
                </div>

                <div className="h-[430px] sm:h-[540px]">
                  <iframe
                      title="Map of Vatera Beach"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=26.145%2C38.930%2C26.235%2C38.990&layer=mapnik"
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
                  title="Continue exploring southern Lesvos"
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
              src="/ouzo.jpg"
              alt="Lesvos island experience"
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

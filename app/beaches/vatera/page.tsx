"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Clock3,
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

const highlights = [
  {
    icon: Waves,
    title: "Crystal-clear water",
    text: "Clear, welcoming sea with plenty of space for swimming and relaxing.",
  },
  {
    icon: Sunset,
    title: "Beautiful sunsets",
    text: "Golden-hour views across the coastline make every evening memorable.",
  },
  {
    icon: Umbrella,
    title: "Comfort by the sea",
    text: "Organised sections, sunbeds, cafés and tavernas along the coast.",
  },
  {
    icon: Trees,
    title: "Peaceful atmosphere",
    text: "A vast shoreline where even busy summer days still feel unhurried.",
  },
];

const practicalInfo = [
  {
    icon: Waves,
    label: "Beach type",
    value: "Long sandy coastline",
  },
  {
    icon: Umbrella,
    label: "Facilities",
    value: "Sunbeds, cafés and tavernas",
  },
  {
    icon: Car,
    label: "Access",
    value: "Easy access by car",
  },
  {
    icon: ParkingCircle,
    label: "Parking",
    value: "Available near the beach",
  },
  {
    icon: Clock3,
    label: "Best time",
    value: "Morning to sunset",
  },
  {
    icon: ShieldCheck,
    label: "Ideal for",
    value: "Families, couples and relaxation",
  },
];

const localGuide = [
  {
    eyebrow: "Stay",
    title: "Accommodation",
    image: "/hotel-placeholder.jpg",
    items: [
      {
        title: "Beachfront stays",
        text: "Choose a room close to the shore for easy access and sunset views.",
      },
      {
        title: "Family apartments",
        text: "A practical option for longer stays and relaxed summer holidays.",
      },
    ],
  },
  {
    eyebrow: "Taste",
    title: "Food & drink",
    image: "/restaurant-placeholder.jpg",
    items: [
      {
        title: "Seaside tavernas",
        text: "Fresh fish, local mezedes and classic Greek dishes by the water.",
      },
      {
        title: "Sunset drinks",
        text: "Enjoy coffee, cocktails and light bites as the sun goes down.",
      },
    ],
  },
  {
    eyebrow: "Explore",
    title: "Nearby experiences",
    image: "/attractions-placeholder.jpg",
    items: [
      {
        title: "Traditional villages",
        text: "Discover local architecture, quiet streets and authentic island life.",
      },
      {
        title: "Southern Lesvos",
        text: "Combine Vatera with scenic drives, beaches and cultural stops nearby.",
      },
    ],
  },
];

function SectionHeading({
                          eyebrow,
                          title,
                          description,
                          centered = false,
                        }: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
      <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-600 sm:text-sm">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
            <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              {description}
            </p>
        ) : null}
      </div>
  );
}

export default function VateraPage() {
  return (
      <main className="overflow-hidden bg-[#f8f6f1] text-stone-950">
        {/* HERO */}
        <section className="relative min-h-[92svh] overflow-hidden bg-stone-950">
          <Image
              src="/petra.jpg"
              alt="Vatera Beach in Lesvos"
              fill
              priority
              sizes="100vw"
              className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,8,0.92)_0%,rgba(12,10,8,0.68)_45%,rgba(12,10,8,0.18)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-black/20" />
          <div className="absolute left-[18%] top-[32%] h-80 w-80 rounded-full bg-amber-300/10 blur-[120px]" />

          <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-4xl text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-xl">
                  <MapPin className="h-4 w-4 text-amber-300" />
                  Southern Lesvos · Greece
                </div>

                <h1 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-8xl lg:text-[7.5rem]">
                  Vatera
                  <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
                  Beach
                </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 md:text-xl">
                  A wide golden coastline, clear Aegean water and an easy-going
                  atmosphere made for long summer days.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                      href="#discover"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-stone-950 shadow-[0_16px_50px_rgba(251,191,36,0.28)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Discover Vatera
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <Link
                      href="/beaches"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
                  >
                    Explore all beaches
                  </Link>
                </div>

                <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["8 km", "Coastline"],
                    ["Sandy", "Beach type"],
                    ["Easy", "Car access"],
                    ["Sunset", "Best moment"],
                  ].map(([value, label]) => (
                      <div
                          key={label}
                          className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl"
                      >
                        <p className="text-xl font-black text-white">{value}</p>
                        <p className="mt-1 text-xs text-white/50">{label}</p>
                      </div>
                  ))}
                </div>
              </div>

              <div className="hidden justify-end lg:flex">
                <div className="relative h-[520px] w-[360px] overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
                  <Image
                      src="/vatera1.jpg"
                      alt="Vatera coast"
                      fill
                      sizes="360px"
                      className="object-cover transition duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                    <span className="mr-2 text-amber-300">✦</span>
                    Local favourite
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                      Summer escape
                    </p>
                    <h2 className="mt-3 text-3xl font-black tracking-tight">
                      Space, sea and slow island days
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/65">
                      Swim, relax and enjoy the simplicity of southern Lesvos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8f6f1] to-transparent" />
        </section>

        {/* INTRO */}
        <section
            id="discover"
            className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8"
        >
          <div>
            <SectionHeading
                eyebrow="Why visit Vatera"
                title="A beach that gives you room to breathe"
                description="Vatera combines a long open coastline with relaxed island life. It is the kind of place where the day can begin with a quiet swim and end with fresh seafood and sunset light."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Sun,
                  title: "All-day destination",
                  text: "Easy to enjoy from the first swim of the morning until sunset.",
                },
                {
                  icon: Utensils,
                  title: "Local flavours",
                  text: "Traditional tavernas and cafés are available along the coast.",
                },
                {
                  icon: Compass,
                  title: "Great base",
                  text: "A practical starting point for exploring southern Lesvos.",
                },
                {
                  icon: Sparkles,
                  title: "Relaxed character",
                  text: "Spacious, welcoming and never overly formal.",
                },
              ].map((item) => (
                  <div
                      key={item.title}
                      className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
                  >
                    <item.icon className="h-6 w-6 text-amber-600" />
                    <h3 className="mt-4 font-bold text-stone-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
                  </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-stone-900 shadow-[0_35px_90px_rgba(28,25,23,0.18)] sm:min-h-[540px]">
            <Image
                src="/vatera1.jpg"
                alt="Sunset at Vatera Beach"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 max-w-lg p-6 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                Southern Lesvos
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Golden-hour simplicity
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
                A coastline designed for unhurried walks, clear water and quiet
                moments by the sea.
              </p>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="bg-stone-950 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
                eyebrow="Beach highlights"
                title="Everything you need for an easy summer day"
                description="Natural beauty, comfort and space come together along one of Lesvos’ most impressive coastlines."
                centered
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => (
                  <article
                      key={item.title}
                      className="group rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-stone-950">
                      <item.icon className="h-6 w-6" />
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-bold text-white/30">
                    0{index + 1}
                  </span>
                      <span className="h-px w-10 bg-white/10" />
                    </div>

                    <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* PRACTICAL INFO + MAP */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-[2rem] bg-[#17201c] p-6 text-white shadow-xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                Plan your visit
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
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
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-xl">
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

              <div className="h-[420px] sm:h-[520px]">
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
            </div>
          </div>
        </section>

        {/* LOCAL GUIDE */}
        <section className="border-y border-stone-200 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
                eyebrow="Local guide"
                title="Make more of your stay"
                description="Use Vatera as a base for simple beach days, local food and short journeys around southern Lesvos."
                centered
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {localGuide.map((section) => (
                  <article
                      key={section.title}
                      className="overflow-hidden rounded-[2rem] border border-stone-200 bg-[#faf9f6] shadow-sm"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                          {section.eyebrow}
                        </p>
                        <h3 className="mt-2 text-3xl font-black">{section.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-3 p-5 sm:p-6">
                      {section.items.map((item) => (
                          <div
                              key={item.title}
                              className="rounded-2xl border border-stone-200 bg-white p-5"
                          >
                            <h4 className="font-bold text-stone-950">{item.title}</h4>
                            <p className="mt-2 text-sm leading-6 text-stone-600">
                              {item.text}
                            </p>
                          </div>
                      ))}
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* NEARBY */}
        <section className="bg-[#17201c] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  Nearby places
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                  Continue exploring southern Lesvos
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Combine your beach day with local villages, traditional food and
                quieter corners of the island.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/villages/plomari",
                  icon: Compass,
                  title: "Plomari",
                  text: "A seaside town known for ouzo, harbour views and local character.",
                },
                {
                  href: "/food",
                  icon: Utensils,
                  title: "Seaside tavernas",
                  text: "Fresh seafood, grilled dishes and slow lunches by the water.",
                },
                {
                  href: "/beaches",
                  icon: Waves,
                  title: "More beaches",
                  text: "Discover quieter coves and other swimming spots nearby.",
                },
              ].map((item) => (
                  <Link
                      key={item.title}
                      href={item.href}
                      className="group rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.08]"
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
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <Image
              src="/ouzo.jpg"
              alt="Lesvos island experience"
              fill
              sizes="100vw"
              className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/78" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-transparent to-stone-950/35" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
              Discover Lesvos
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Find your next island escape
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Explore beaches, villages, local flavours and memorable experiences
              across Lesvos.
            </p>

            <Link
                href="/beaches"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-stone-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              View all beaches
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
  );
}

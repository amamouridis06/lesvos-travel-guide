"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bath,
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
  { value: "Easy", label: "Car access" },
  { value: "Sunset", label: "Best moment" },
];

const highlights = [
  {
    icon: Waves,
    title: "Crystal-clear water",
    text: "Calm, welcoming sea with plenty of room for swimming and floating.",
  },
  {
    icon: Sunset,
    title: "Golden sunsets",
    text: "Long evenings painted in amber light across the southern coast.",
  },
  {
    icon: Umbrella,
    title: "Comfort by the sea",
    text: "Sunbeds, cafés and tavernas are available along organised sections.",
  },
  {
    icon: Trees,
    title: "Space to unwind",
    text: "A wide coastline that still feels calm even during the summer season.",
  },
];

const practicalInfo = [
  { icon: Waves, label: "Beach type", value: "Long sandy coastline" },
  { icon: Umbrella, label: "Facilities", value: "Sunbeds, cafés and tavernas" },
  { icon: Car, label: "Access", value: "Easy access by car" },
  { icon: ParkingCircle, label: "Parking", value: "Available nearby" },
  { icon: Clock3, label: "Best time", value: "Morning until sunset" },
  { icon: ShieldCheck, label: "Ideal for", value: "Families, couples and relaxation" },
];

const experiences = [
  {
    icon: Sun,
    title: "Slow beach mornings",
    text: "Start early with calm water, soft light and plenty of space.",
  },
  {
    icon: Utensils,
    title: "Long seaside lunches",
    text: "Fresh fish, local mezedes and unhurried tables by the coast.",
  },
  {
    icon: Coffee,
    title: "Sunset coffee",
    text: "Stay into the evening and watch the shoreline turn golden.",
  },
];

const localGuide = [
  {
    eyebrow: "Stay",
    title: "Where to stay",
    image: "/hotel-placeholder.jpg",
    items: [
      {
        title: "Beachfront rooms",
        text: "Ideal for sunrise walks and effortless access to the sea.",
      },
      {
        title: "Family apartments",
        text: "A comfortable option for longer holidays and relaxed routines.",
      },
    ],
  },
  {
    eyebrow: "Taste",
    title: "Where to eat",
    image: "/restaurant-placeholder.jpg",
    items: [
      {
        title: "Seaside tavernas",
        text: "Fresh seafood, grilled dishes and authentic Greek flavours.",
      },
      {
        title: "Casual cafés",
        text: "Coffee, cold drinks and light bites throughout the day.",
      },
    ],
  },
  {
    eyebrow: "Explore",
    title: "What to discover",
    image: "/attractions-placeholder.jpg",
    items: [
      {
        title: "Traditional villages",
        text: "Quiet streets, local architecture and everyday island life.",
      },
      {
        title: "Southern Lesvos",
        text: "Combine Vatera with scenic roads, beaches and cultural stops.",
      },
    ],
  },
];

function SectionHeading({
                          eyebrow,
                          title,
                          description,
                          centered = false,
                          light = false,
                        }: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
      <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500 sm:text-sm">
          {eyebrow}
        </p>

        <h2
            className={`mt-4 text-3xl font-black tracking-[-0.045em] sm:text-4xl lg:text-6xl ${
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
      </div>
  );
}

export default function VateraPage() {
  return (
      <main className="overflow-hidden bg-[#f7f3ec] text-stone-950">
        {/* HERO */}
        <section className="relative min-h-[96svh] overflow-hidden bg-stone-950">
          <Image
              src="/petra.jpg"
              alt="Vatera Beach in Lesvos"
              fill
              priority
              sizes="100vw"
              className="object-cover scale-[1.02]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,16,10,0.95)_0%,rgba(20,16,10,0.72)_46%,rgba(20,16,10,0.16)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/20" />
          <div className="absolute left-[16%] top-[30%] h-[420px] w-[420px] rounded-full bg-amber-300/10 blur-[130px]" />

          <div className="relative z-10 mx-auto flex min-h-[96svh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div className="max-w-4xl text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 backdrop-blur-xl sm:text-xs">
                  <MapPin className="h-4 w-4 text-amber-300" />
                  Southern Lesvos · Greece
                </div>

                <h1 className="mt-7 text-6xl font-black leading-[0.86] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[8rem]">
                  Vatera
                  <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
                  Beach
                </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 md:text-xl">
                  An endless golden shoreline, clear Aegean water and the kind of
                  peaceful rhythm that turns a beach day into a memory.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                      href="#discover"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-stone-950 shadow-[0_18px_55px_rgba(251,191,36,0.3)] transition hover:-translate-y-0.5 hover:bg-amber-300"
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
              </div>

              <div className="hidden justify-end lg:flex">
                <div className="relative h-[560px] w-[380px] overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 shadow-[0_45px_120px_rgba(0,0,0,0.5)]">
                  <Image
                      src="/vatera1.jpg"
                      alt="Vatera coast at sunset"
                      fill
                      sizes="380px"
                      className="object-cover transition duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                    <Sparkles className="h-4 w-4 text-amber-300" />
                    Local favourite
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                      Summer escape
                    </p>
                    <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                      Space, sea and slow island days
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-white/65">
                      A destination made for swimming, walking, eating well and
                      staying longer than planned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7f3ec] to-transparent" />
        </section>

        {/* INTRO */}
        <section
            id="discover"
            className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8"
        >
          <div>
            <SectionHeading
                eyebrow="Why Vatera"
                title="A beach that feels almost endless"
                description="Vatera is one of those rare places where simplicity becomes the luxury. Swim, walk, eat by the sea and let the whole day unfold at its own pace."
            />

            <div className="mt-8 space-y-4">
              {experiences.map((item) => (
                  <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-stone-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-stone-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] sm:row-span-2">
              <Image
                  src="/vatera1.jpg"
                  alt="Vatera Beach"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                  Golden coast
                </p>
                <h3 className="mt-2 text-3xl font-black">Room to slow down</h3>
              </div>
            </div>

            <div className="relative min-h-[250px] overflow-hidden rounded-[2rem]">
              <Image
                  src="/petra.jpg"
                  alt="Sea view in Lesvos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-sm font-semibold">Clear Aegean water</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#1b261f] p-6 text-white sm:p-8">
              <Bath className="h-8 w-8 text-amber-300" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                Best for
              </p>
              <h3 className="mt-3 text-3xl font-black">Long, effortless beach days</h3>
              <p className="mt-4 text-sm leading-6 text-white/55">
                Perfect for families, couples and travellers looking for space,
                comfort and a relaxed pace.
              </p>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="bg-stone-950 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
                eyebrow="Beach highlights"
                title="Everything you need for a beautiful summer day"
                description="A balance of natural beauty, comfort and calm, all along one spectacular coastline."
                centered
                light
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => (
                  <article
                      key={item.title}
                      className="group rounded-[1.85rem] border border-white/10 bg-white/[0.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.08]"
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

        {/* INFO + MAP */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] bg-[#17201c] p-6 text-white shadow-[0_30px_80px_rgba(28,25,23,0.18)] sm:p-8">
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

            <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_30px_80px_rgba(28,25,23,0.14)]">
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
                title="Stay, taste and explore"
                description="Everything you need to turn a beach visit into a fuller experience of southern Lesvos."
                centered
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {localGuide.map((section) => (
                  <article
                      key={section.title}
                      className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-[#faf8f4] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

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
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h4 className="font-bold text-stone-950">{item.title}</h4>
                                <p className="mt-2 text-sm leading-6 text-stone-600">
                                  {item.text}
                                </p>
                              </div>
                              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-amber-600" />
                            </div>
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
                      className="group rounded-[1.85rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.08]"
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
          <div className="absolute inset-0 bg-stone-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-transparent to-stone-950/35" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
              Discover Lesvos
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
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

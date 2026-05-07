"use client";

import { useState } from "react";
import {
    MapPin,
    Phone,
    Clock,
    Users,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";

const HERO = "/votsalo3.jpg";

const GALLERY = [
    { src: "/votsalo1.jpg" },
    { src: "/votsalo2.jpg" },
    { src: "/votsalo3.jpg" },
    { src: "/votsalo4.jpg" },
    { src: "/votsalo5.jpg" },
    { src: "/votsalo6.jpg" },
    { src: "/votsalo7.jpg" },
    { src: "/votsalo8.jpg" },
];

const SPECIALS = [
    {
        t: "Fresh Seafood",
        d: "Daily fresh fish and seafood dishes by the sea.",
    },
    {
        t: "Greek Meze",
        d: "Traditional flavors made with local ingredients.",
    },
    {
        t: "Homemade Recipes",
        d: "Authentic Greek plates inspired by family cooking.",
    },
    {
        t: "Sunset Dining",
        d: "Relaxed dinners with beautiful coastal views.",
    },
];

const NEARBY = [
    { label: "Eftalou Beach", emoji: "🏖" },
    { label: "Molivos", emoji: "🏘" },
    { label: "Petra", emoji: "🏘" },
];

const INFO = [
    { Icon: MapPin, label: "Location", value: "Eftalou, Lesvos" },
    { Icon: Phone, label: "Phone", value: "+30 xxx xxx xxxx" },
    { Icon: Clock, label: "Hours", value: "Daily · 12:00 - Late" },
    {
        Icon: Users,
        label: "Best for",
        value: "Families, couples, seaside dining",
    },
];

export default function VotsaloPage() {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const next = () => setIndex((p) => (p + 1) % GALLERY.length);

    const prev = () =>
        setIndex((p) => (p - 1 + GALLERY.length) % GALLERY.length);

    return (
        <main
            className="min-h-screen text-stone-900"
            style={{
                backgroundColor: "#fbf8f3",
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        .font-display {
          font-family: 'Fraunces', Georgia, serif;
          letter-spacing: -0.02em;
        }

        .gradient-warm {
          background: linear-gradient(135deg, #b85c3a, #e0a052);
        }

        .gradient-hero {
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(20,15,10,.3) 50%,
            rgba(20,15,10,.85) 100%
          );
        }

        .shadow-soft {
          box-shadow: 0 10px 40px -15px rgba(60,40,30,.25);
        }

        :root {
          --ms-bg: #fbf8f3;
          --ms-border: #e7dfd4;
          --ms-gold: #b85c3a;
          --ms-muted: #7c6f64;
        }

        .ms-display {
          font-family: 'Fraunces', Georgia, serif;
          letter-spacing: -0.03em;
        }

        .ms-eyebrow {
          font-size: 11px;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: var(--ms-gold);
          font-weight: 600;
        }

        .ms-hairline {
          width: 40px;
          height: 1px;
          background: var(--ms-gold);
        }

        .ms-serif-num {
          font-family: Georgia, serif;
        }
      `}</style>

            {/* HERO */}
            <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
                <img
                    src={HERO}
                    alt="Votsalo Restaurant"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 gradient-hero" />

                <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 sm:px-10 sm:pb-20">
                    <div className="mx-auto max-w-6xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "#e0a052" }}
              />
              North Lesvos · Restaurant
            </span>

                        <h1 className="font-display mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                            Votsalo
                        </h1>

                        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
                            Authentic Greek flavors, seaside sunsets, and timeless summer
                            hospitality.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-3 lg:gap-16">
                {/* MAIN */}
                <div className="space-y-16 lg:col-span-2">
                    {/* ABOUT */}
                    <div id="about">
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.25em]"
                            style={{ color: "#b85c3a" }}
                        >
                            The Place
                        </p>

                        <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                            About
                        </h2>

                        <p className="mt-5 text-lg leading-relaxed text-stone-600">
                            Located just steps from the sea and the thermal springs, Votsalo
                            combines authentic Greek flavors, warm hospitality, and the relaxed
                            atmosphere of the Greek summer.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-stone-600">
                            Fresh seafood, traditional recipes, homemade dishes, and local
                            ingredients create a dining experience inspired by family tables
                            beside the water.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-stone-600">
                            Whether for a relaxed lunch after the beach or dinner during sunset,
                            Votsalo offers timeless moments by the sea.
                        </p>
                    </div>

                    {/* SPECIALS */}
                    <div>
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.25em]"
                            style={{ color: "#b85c3a" }}
                        >
                            What to try
                        </p>

                        <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                            Favorites of the house
                        </h2>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {SPECIALS.map((c) => (
                                <div
                                    key={c.t}
                                    className="rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
                                >
                                    <h3 className="font-display text-xl font-semibold">
                                        {c.t}
                                    </h3>

                                    <p className="mt-1 text-sm text-stone-600">{c.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SIDEBAR */}
                <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
                    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
                        <div className="gradient-warm px-6 py-5 text-white">
                            <h3 className="font-display text-2xl font-semibold">
                                Plan your visit
                            </h3>

                            <p className="mt-1 text-sm text-white/85">
                                Reservations recommended on weekends.
                            </p>
                        </div>

                        <ul className="divide-y divide-stone-200">
                            {INFO.map(({ Icon, label, value }) => (
                                <li key={label} className="flex items-start gap-4 px-6 py-4">
                                    <div
                                        className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-stone-100"
                                        style={{ color: "#b85c3a" }}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-stone-500">
                                            {label}
                                        </p>

                                        <p className="text-sm font-medium text-stone-900">
                                            {value}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
                        <iframe
                            title="Map of Votsalo"
                            src="https://www.google.com/maps/embed?pb="
                            className="h-56 w-full border-0"
                            loading="lazy"
                        />
                    </div>

                    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-soft">
                        <h3 className="font-display text-xl font-semibold">Nearby</h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            {NEARBY.map((n) => (
                                <li key={n.label}>
                                    <div className="flex items-center justify-between rounded-xl px-3 py-2 hover:bg-stone-100">
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{n.emoji}</span>
                      <span className="font-medium">{n.label}</span>
                    </span>

                                        <ChevronRight className="h-4 w-4 text-stone-500" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </section>

            {/* GALLERY */}
            <section
                id="gallery"
                className="px-5 py-20 sm:px-8 md:px-12 md:py-28"
                style={{ background: "var(--ms-bg)" }}
            >
                <div className="mx-auto max-w-7xl">
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="ms-hairline" />
                            <p className="ms-eyebrow">From the visit</p>
                        </div>

                        <h2 className="ms-display mt-4 text-4xl leading-tight md:text-6xl">
                            A few moments
                            <br />
                            <span
                                className="italic"
                                style={{ color: "var(--ms-gold)" }}
                            >
                from Votsalo.
              </span>
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-8">
                        {GALLERY.map((g, i) => {
                            const layouts = [
                                "md:col-span-7 md:row-span-2 aspect-[4/5]",
                                "md:col-span-5 aspect-[4/3]",
                                "md:col-span-5 md:col-start-8 aspect-[4/3]",
                            ];

                            return (
                                <figure
                                    key={g.src}
                                    className={`group cursor-pointer ${
                                        layouts[i] ?? "md:col-span-4 aspect-[4/5]"
                                    }`}
                                    onClick={() => {
                                        setIndex(i);
                                        setIsOpen(true);
                                    }}
                                >
                                    <div
                                        className="relative h-full min-h-[260px] overflow-hidden rounded-2xl md:min-h-0"
                                        style={{ background: "var(--ms-border)" }}
                                    >
                                        <img
                                            src={g.src}
                                            alt={`Gallery image ${i + 1}`}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                                    </div>

                                    <figcaption className="mt-4 flex items-baseline gap-3">
                    <span
                        className="ms-serif-num text-sm"
                        style={{ color: "var(--ms-gold)" }}
                    >
                      0{i + 1}
                    </span>

                                        <span
                                            className="ms-display text-lg italic"
                                            style={{ color: "var(--ms-muted)" }}
                                        >
                      Votsalo moments
                    </span>
                                    </figcaption>
                                </figure>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* MODAL */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                        className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <img
                        src={GALLERY[index].src}
                        alt="Gallery fullscreen"
                        className="max-h-[85vh] max-w-[90vw] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            )}
        </main>
    );
}
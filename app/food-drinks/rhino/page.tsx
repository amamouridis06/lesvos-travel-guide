"use client";

import { useEffect, useRef, useState } from "react";
import {
    MapPin,
    Phone,
    Clock,
    Wallet,
    Users,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";


const HERO = "/rhino/rhino-logo.jpg";

const bar = [
    { type: "image", src: "/rhino/rhino1.jpg" },
    { type: "image", src: "/rhino/rhino2.jpg" },
    { type: "image", src: "/rhino/rhino3.jpg" },
    { type: "image", src: "/rhino/rhino4.jpg" },
    { type: "image", src: "/rhino/rhino5.jpg" },
    { type: "image", src: "/rhino/rhino6.jpg" },
];



const NEARBY = [
    { label: "Castle of Mytilene", emoji: "" },
    { label: "Statue of Freedom Mytilene", emoji: "" },
    { label: "Tsamakia Beach", emoji: "" },
];

const INFO = [
    { Icon: MapPin, label: "Location", value: "Aigaiou 5, Mytilene, 81100" },
    { Icon: Phone, label: "Phone", value: "6948766963" },
    { Icon: Clock, label: "Hours", value: "Daily · 8:30 — 3:00" },
    { Icon: Wallet, label: "Price", value: "5-10€" },
    { Icon: Users, label: "Best for", value: "Couples, friends" },
];

export default function RhinoPage() {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // useEffect(() => {
    //     videoRefs.current.forEach((video, i) => {
    //         if (!video) return;
    //
    //         if (i === index && !isOpen) {
    //             video.play().catch(() => {});
    //         } else {
    //             video.pause();
    //             video.currentTime = 0;
    //         }
    //     });
    // }, [index, isOpen]);

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
        .font-display { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.02em; }
        .gradient-warm { background: linear-gradient(135deg, #b85c3a, #e0a052); }
        .gradient-hero { background: linear-gradient(180deg, transparent 0%, rgba(20,15,10,.3) 50%, rgba(20,15,10,.85) 100%); }
        .shadow-soft { box-shadow: 0 10px 40px -15px rgba(60,40,30,.25); }
        .shadow-elevated { box-shadow: 0 20px 60px -20px rgba(60,40,30,.35); }
      `}</style>

            {/* HERO */}
            <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
                <img
                    src={HERO}
                    alt="Bartender pouring a cocktail at a seaside bar in Lesvos at sunset"
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
              East Lesvos · Bar
            </span>

                        <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                            Rhino
                        </h1>

                        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
                            A fantastic place to drink your cocktail in the city of Mytilene
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-3 lg:gap-16">
                {/* MAIN */}
                <div className="space-y-16 lg:col-span-2">
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
                            Rhino Bar in Mytilene is a destination of its own, offering a unique blend of simplicity, quality, and atmosphere. From the very first hours of the day, it welcomes guests with exceptional coffee, crafted from carefully selected blends and prepared with technical precision for the perfect start to your morning.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-stone-600">
                            As the day unfolds, the space transforms into an inviting evening spot, where a curated selection of drinks and creative cocktails takes center stage. The warm hospitality, smiling staff, and relaxed ambiance — especially on its cool balcony — create an experience that feels both effortless and memorable.
                        </p>
                        <p className="mt-5 text-lg leading-relaxed text-stone-600">
                            Whether you are seeking an energizing coffee break or a refreshing night out, Rhino is a place that effortlessly wins you over.
                        </p>
                    </div>

                    {/*/!* Signatures *!/*/}
                    {/*<div>*/}
                    {/*    <p*/}
                    {/*        className="text-xs font-semibold uppercase tracking-[0.25em]"*/}
                    {/*        style={{ color: "#b85c3a" }}*/}
                    {/*    >*/}
                    {/*        What to try*/}
                    {/*    </p>*/}

                    {/*    <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">*/}
                    {/*        Signatures of the house*/}
                    {/*    </h2>*/}

                    {/*    /!*<div className="mt-8 grid gap-4 sm:grid-cols-2">*!/*/}
                    {/*    /!*    {DISHES.map((c) => (*!/*/}
                    {/*    /!*        <div*!/*/}
                    {/*    /!*            key={c.t}*!/*/}
                    {/*    /!*            className="rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"*!/*/}
                    {/*    /!*        >*!/*/}
                    {/*    /!*            <h3 className="font-display text-xl font-semibold">{c.t}</h3>*!/*/}
                    {/*    /!*            /!*<p className="mt-1 text-sm text-stone-600">{c.d}</p>*!/*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*    ))}*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</div>*/}
                    <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                        Some photos from the Rhino bar
                    </h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {bar.map((image, index) => (
                            <div
                                key={image.src}
                                className="overflow-hidden rounded-2xl shadow-sm"
                            >
                                <img
                                    src={image.src}
                                    alt={`bar gallery ${index + 1}`}
                                    className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* SIDEBAR */}
                <aside id="visit" className="space-y-6 lg:sticky lg:top-8 lg:self-start">
                    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
                        <div className="gradient-warm px-6 py-5 text-white">
                            <h3 className="font-display text-2xl font-semibold">
                                Plan your visit
                            </h3>
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
                                        <p className="text-sm font-medium text-stone-900">{value}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
                        <iframe
                            title="Map of Rhino"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.6301743966465!2d26.555110600479995!3d39.10736028207269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba6736b11c0103%3A0xc08bc413d1c56cdd!2sRhino%20Bar!5e1!3m2!1sen!2sgr!4v1780422340808!5m2!1sen!2sgr"
                            className="h-56 w-full border-0"
                            loading="lazy"
                        />
                    </div>

                    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-soft">
                        <h3 className="font-display text-xl font-semibold">Nearby</h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            {NEARBY.map((n) => (
                                <li key={n.label}>
                                    <a
                                        href="#"
                                        className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-stone-100"
                                    >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{n.emoji}</span>
                      <span className="font-medium">{n.label}</span>
                    </span>
                                        <ChevronRight className="h-4 w-4 text-stone-500" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </section>
        </main>
    );
}
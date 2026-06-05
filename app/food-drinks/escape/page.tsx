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


const HERO = "/escape/escape4.jpeg";

const GALLERY = [
    { type: "image", src: "/escape/escape1.jpg" },
    { type: "image", src: "/escape/escape2.jpeg" },
    { type: "image", src: "/escape/escape3.jpeg" },
    { type: "image", src: "/escape/escape5.jpeg" },
    { type: "image", src: "/escape/escape6.jpeg" },
    { type: "image", src: "/escape/escape7.jpeg" },
    { type: "image", src: "/escape/escape9.jpeg" },
    { type: "image", src: "/escape/escape8.jpeg" },
    { type: "image", src: "/escape/escape10.jpeg" },
    { type: "image", src: "/escape/escape11.jpeg" },

];


const NEARBY = [
    { label: "Panagia of Agiasos Holy Pilgrimage", emoji: "" },
    { label: "Polixnitos", emoji: "" },
    { label: "Vatera", emoji: "" },
];

const INFO = [
    { Icon: MapPin, label: "Location", value: "Agiasos 81101" },
    { Icon: Phone, label: "Phone", value: "2252022710 / +30 6970278574" },
    { Icon: Clock, label: "Hours", value: "Daily" },
    { Icon: Wallet, label: "Price", value: "1 - 5 €" },
    { Icon: Users, label: "Instagram", value: "Escape_espresso_bar" },
    { Icon: Users, label: "Facebook", value: "Escape_espresso_bar" },
    { Icon: Users, label: "Best for", value: "Couples, friends, families, sunset drinks" },
];

export default function CocktailBarPage() {
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const next = () => setIndex((p) => (p + 1) % GALLERY.length);
    const prev = () => setIndex((p) => (p - 1 + GALLERY.length) % GALLERY.length);

    // useEffect(() => {
    //   if (isHovered || isOpen) return;
    //
    //   const id = setInterval(next, 4500);
    //   return () => clearInterval(id);
    // }, [isHovered, isOpen]);

    useEffect(() => {
        videoRefs.current.forEach((video, i) => {
            if (!video) return;

            if (i === index && !isOpen) {
                video.play().catch(() => {});
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }, [index, isOpen]);

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
                    alt=""
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
              Southeast Lesvos · Espresso Bar
            </span>

                        <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                            Escape Espresso Bar
                        </h1>

                        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
                            A fantastic place to drink your juica and your coffe with the view the mountain of Agiasos
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
                            About the Place
                        </p>

                        <p className="mt-5 text-lg leading-relaxed text-stone-600">
                            Nestled in the heart of Agiasos, just above Stavri, Escape Espresso Bar is the perfect destination for coffee, relaxation, and great company.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-stone-600">
                            A warm and contemporary venue where premium coffee, refreshing beverages,
                            and expertly crafted cocktails come together to create the perfect experience at any time of day.
                            Start your morning with the rich aroma of freshly brewed espresso, or unwind in the evening with friends,
                            great music, and your favorite drink.
                        </p>
                        <p className="mt-5 text-lg leading-relaxed text-stone-600">
                            With its welcoming atmosphere, friendly service, and beautiful views
                            of the surrounding area, Escape Espresso Bar offers a place to step away
                            from the everyday and enjoy the moment.
                        </p>
                        <p className="mt-5 text-lg leading-relaxed text-stone-600">
                            We look forward to welcoming you and sharing the Escape experience.
                        </p>
                    </div>

                    {/* GALLERY */}
                    <div id="gallery">
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.25em]"
                            style={{ color: "#b85c3a" }}
                        >
                            Atmosphere
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                            A look from there
                        </h2>

                        {/* MAIN SLIDER */}
                        <div
                            className="group relative mt-8 aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-3xl shadow-lg"
                            onClick={() => setIsOpen(true)}
                        >
                            {GALLERY.map((item, i) => (
                                <img
                                    key={item.src}
                                    src={item.src}
                                    alt=""
                                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                                        i === index
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-105"
                                    }`}
                                />
                            ))}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prev();
                                }}
                                aria-label="Previous slide"
                                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 transition-opacity group-hover:opacity-100"
                            >
                                <ChevronLeft />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    next();
                                }}
                                aria-label="Next slide"
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 transition-opacity group-hover:opacity-100"
                            >
                                <ChevronRight />
                            </button>

                            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                                {GALLERY.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIndex(i);
                                        }}
                                        className={`h-2 rounded-full bg-white transition-all ${
                                            i === index ? "w-6" : "w-2 opacity-50"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* THUMBNAILS */}
                        <div className="mt-4 grid grid-cols-4 gap-3">
                            {GALLERY.map((item, i) => (
                                <button
                                    key={item.src}
                                    onClick={() => setIndex(i)}
                                    className={`relative aspect-[4/3] overflow-hidden rounded-xl ${
                                        i === index
                                            ? "ring-2 ring-offset-2"
                                            : "opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    <img
                                        src={item.src}
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SIDEBAR */}
                <aside id="visit" className="space-y-6 lg:sticky lg:top-8 lg:self-start">
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
                                        <p className="text-sm font-medium text-stone-900">{value}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
                        <iframe
                            title="Map of Azul Paraiso"
                            src=""
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
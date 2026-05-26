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

// ---- Replace with your own images ----
const HERO = "/azul/azul-hero.jpeg";

const GALLERY = [
    { type: "video", src: "/azul/azul2.mov", poster: "/azul/azul2.jpg" },
    { type: "image", src: "/azul/azul1.jpeg" },
    { type: "image", src: "/azul/azul3.jpeg" },
    { type: "image", src: "/azul/azul4.jpeg" },
    { type: "image", src: "/azul/azul5.jpeg" },
    { type: "image", src: "/azul/azul6.jpeg" },
    { type: "image", src: "/azul/azul7.jpeg" },
    { type: "image", src: "/azul/azul8.jpeg" },
    { type: "image", src: "/azul/azul9.jpeg" },
    { type: "image", src: "/azul/azul10.jpeg" },

];

const COCKTAILS = [
    { t: "Zombie", d: "rum, passion fruit, pineapple, lime" },
    { t: "Diego", d: "tequila, mango, vanilla, lime, spicy bitters" },
    { t: "Hanky panky", d: "Vodka, fresh ginger, cucumber, lime." },
    { t: "Pink mule", d: "vodka, strawberry, lime, mint, ginger beer" },
];

const NEARBY = [
    { label: "Petra", emoji: "🏖" },
    { label: "Molyvos", emoji: "🏘" },
    { label: "", emoji: "🍶" },
];

const INFO = [
    { Icon: MapPin, label: "Location", value: "Anaxos 81109" },
    { Icon: Phone, label: "Phone", value: "+30 6983957211" },
    { Icon: Clock, label: "Hours", value: "Daily · 9.00AM - 1.00AM" },
    { Icon: Wallet, label: "Price", value: "10 - 15 €" },
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
              North Lesvos · Cocktail Bar
            </span>

                        <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                            Azul Paraiso
                        </h1>

                        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
                            A fantastic place to drink your cocktail by the sea and you can eat the best choice the fantastic pancakes
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
                            Located in the heart of Anaxos Beach on Lesvos, Azul Paraíso is an all-day summer destination where relaxed island aesthetics meet vibrant flavors and unforgettable seaside moments.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-stone-600">
                            From brunch favorites, fluffy pancakes, and refreshing salads to juicy burgers, bao buns, burritos, fresh shrimp dishes, and creative signature flavors, our menu is designed to satisfy every craving throughout the day..
                        </p>
                        <p className="mt-5 text-lg leading-relaxed text-stone-600">
                            With its welcoming atmosphere, boho-inspired summer character, and breathtaking views of the Aegean Sea, Azul Paraíso is the perfect place to enjoy coffee, food, cocktails, and sunset moments by the beach.
                        </p>
                        <p className="mt-5 text-lg leading-relaxed text-stone-600">
                            We look forward to welcoming you to Anaxos for an authentic summer experience in Lesvos.
                        </p>
                    </div>

                    {/* Signatures */}
                    <div>
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.25em]"
                            style={{ color: "#b85c3a" }}
                        >
                            What to try
                        </p>

                        <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                            Signatures of the house
                        </h2>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {COCKTAILS.map((c) => (
                                <div
                                    key={c.t}
                                    className="rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
                                >
                                    <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                                    <p className="mt-1 text-sm text-stone-600">{c.d}</p>
                                </div>
                            ))}
                        </div>
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
                            A look inside
                        </h2>

                        {/* MAIN SLIDER */}
                        <div
                            className="group relative mt-8 aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-3xl shadow-lg"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => setIsOpen(true)}
                        >
                            {GALLERY.map((item, i) =>
                                item.type === "image" ? (
                                    <img
                                        key={item.src}
                                        src={item.src}
                                        alt=""
                                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                                            i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                        }`}
                                    />
                                ) : (
                                    <video
                                        ref={(el) => {
                                            videoRefs.current[i] = el;
                                        }}
                                        key={item.src}
                                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                                            i === index ? "opacity-100" : "opacity-0"
                                        }`}
                                        autoPlay={i === index}
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                )
                            )}

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
                                        aria-label={`Go to slide ${i + 1}`}
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
                                    {item.type === "image" ? (
                                        <img
                                            src={item.src}
                                            alt=""
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <>
                                            <img
                                                src={item.poster}
                                                alt=""
                                                className="h-full w-full object-cover"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-xl">
                                                ▶
                                            </div>
                                        </>
                                    )}
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963.5247238812365!2d26.14773563380499!3d39.320488057589785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba9152a2634441%3A0x6bae6a710312b476!2sAZUL%20Para%C3%ADso!5e1!3m2!1sen!2sgr!4v1779712681168!5m2!1sen!2sgr"
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
                        aria-label="Close"
                        className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        aria-label="Previous"
                        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    {GALLERY[index].type === "image" ? (
                        <img
                            src={GALLERY[index].src}
                            alt="Gallery fullscreen"
                            className="max-h-[85vh] max-w-[90vw] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    ) : (
                        <video
                            key={GALLERY[index].src}
                            controls
                            autoPlay
                            className="max-h-[85vh] max-w-[90vw]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <source src={GALLERY[index].src} type="video/mp4" />
                        </video>
                    )}

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        aria-label="Next"
                        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            )}
        </main>
    );
}
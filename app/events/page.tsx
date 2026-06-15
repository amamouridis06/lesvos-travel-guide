"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type EventItem = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: "Music" | "Food" | "Culture" | "Adventure" | "Festival";
    description: string;
    imageUrl: string;
    link?: string;
    featured?: boolean;
};

const events: EventItem[] = [
    {
        id: 1,
        title: "Golden Hour Music Session",
        date: "2026-07-05",
        time: "20:30",
        location: "Harbor Promenade",
        category: "Music",
        description:
            "Live music by the sea, cocktails, golden sunset views and a relaxed island atmosphere.",
        imageUrl: "/images/events/sunset-music.jpg",
        featured: true,
        link: "#",
    },
    {
        id: 2,
        title: "Local Taste Festival",
        date: "2026-07-12",
        time: "18:00",
        location: "Old Town Square",
        category: "Food",
        description:
            "Traditional dishes, local wines, handmade products and authentic recipes from the region.",
        imageUrl: "/images/events/food-festival.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Moonlight Culture Walk",
        date: "2026-07-18",
        time: "19:00",
        location: "Historic Center",
        category: "Culture",
        description:
            "A guided evening walk through secret corners, stories, landmarks and atmospheric alleys.",
        imageUrl: "/images/events/culture-walk.jpg",
        link: "#",
    },
    {
        id: 4,
        title: "Secret Beach Hike",
        date: "2026-07-22",
        time: "09:00",
        location: "South Coast Trail",
        category: "Adventure",
        description:
            "A scenic coastal hike ending at a hidden beach, perfect for nature lovers and photographers.",
        imageUrl: "/images/events/beach-hike.jpg",
        link: "#",
    },
    {
        id: 5,
        title: "Summer Street Festival",
        date: "2026-08-02",
        time: "21:00",
        location: "Main Village Street",
        category: "Festival",
        description:
            "Street performers, local artists, food corners, music and a vibrant summer night experience.",
        imageUrl: "/images/events/street-festival.jpg",
        link: "#",
    },
];

const categories = ["All", "Music", "Food", "Culture", "Adventure", "Festival"];

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        day: "2-digit",
        month: "short",
    }).format(new Date(date));
}

function getDay(date: string) {
    return new Intl.DateTimeFormat("en", {
        day: "2-digit",
    }).format(new Date(date));
}

function getMonth(date: string) {
    return new Intl.DateTimeFormat("en", {
        month: "short",
    }).format(new Date(date));
}

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredEvents = useMemo(() => {
        if (activeCategory === "All") return events;
        return events.filter((event) => event.category === activeCategory);
    }, [activeCategory]);

    const featuredEvent = events.find((event) => event.featured);

    return (
        <main className="min-h-screen overflow-hidden bg-[#0f0b07] text-white">
            <section className="relative">
                <div className="absolute inset-0">
                    <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-orange-500/30 blur-[120px]" />
                    <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-rose-500/20 blur-[140px]" />
                    <div className="absolute bottom-[-15%] left-[35%] h-[480px] w-[480px] rounded-full bg-amber-400/20 blur-[130px]" />
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%),linear-gradient(to_bottom,rgba(15,11,7,0.20),#0f0b07_90%)]" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.5 }}
                            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-orange-100 shadow-2xl backdrop-blur-xl"
                        >
                            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,1)]" />
                            Curated local events for travelers
                        </motion.div>

                        <h1 className="text-5xl font-black tracking-[-0.06em] md:text-8xl">
                            Discover what’s
                            <span className="block bg-gradient-to-r from-orange-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
                happening next
              </span>
                        </h1>

                        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                            Festivals, hidden experiences, food nights, music sessions and
                            cultural moments — all in one elegant travel guide.
                        </p>
                    </motion.div>

                    {featuredEvent && (
                        <motion.article
                            initial={{ opacity: 0, y: 40, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="group relative mt-16 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
                        >
                            <div className="grid overflow-hidden rounded-[2rem] bg-black/30 lg:grid-cols-[1.1fr_0.9fr]">
                                <div className="relative min-h-[380px] overflow-hidden">
                                    <motion.img
                                        src={featuredEvent.imageUrl}
                                        alt={featuredEvent.title}
                                        className="absolute inset-0 h-full w-full object-cover"
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

                                    <div className="absolute left-6 top-6 rounded-2xl bg-white/90 px-5 py-4 text-center text-stone-950 shadow-xl backdrop-blur">
                                        <p className="text-3xl font-black leading-none">
                                            {getDay(featuredEvent.date)}
                                        </p>
                                        <p className="mt-1 text-xs font-bold uppercase tracking-widest text-orange-700">
                                            {getMonth(featuredEvent.date)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center p-8 md:p-12">
                                    <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-orange-400 px-4 py-2 text-xs font-black uppercase tracking-widest text-stone-950">
                      Featured
                    </span>
                                        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                      {featuredEvent.category}
                    </span>
                                    </div>

                                    <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                                        {featuredEvent.title}
                                    </h2>

                                    <p className="mt-5 text-base leading-8 text-white/65">
                                        {featuredEvent.description}
                                    </p>

                                    <div className="mt-7 space-y-2 text-sm font-semibold text-white/75">
                                        <p>📍 {featuredEvent.location}</p>
                                        <p>
                                            🗓 {formatDate(featuredEvent.date)} · {featuredEvent.time}
                                        </p>
                                    </div>

                                    <a
                                        href={featuredEvent.link || "#"}
                                        className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-black text-stone-950 transition hover:scale-105 hover:bg-orange-300"
                                    >
                                        Explore event
                                        <span className="ml-2">→</span>
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.6 }}
                        className="mt-14 flex flex-wrap justify-center gap-3"
                    >
                        {categories.map((category) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition ${
                                        isActive
                                            ? "text-stone-950"
                                            : "text-white/70 hover:text-white"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeCategory"
                                            className="absolute inset-0 rounded-full bg-orange-300 shadow-[0_0_35px_rgba(251,191,36,0.45)]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10">{category}</span>
                                </button>
                            );
                        })}
                    </motion.div>

                    <motion.div layout className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {filteredEvents.map((event, index) => (
                                <motion.article
                                    layout
                                    key={event.id}
                                    initial={{ opacity: 0, y: 30, scale: 0.94 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.94 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.05,
                                        ease: "easeOut",
                                    }}
                                    whileHover={{ y: -12 }}
                                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] shadow-2xl backdrop-blur-xl"
                                >
                                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
                                        <div className="absolute -inset-20 bg-orange-400/10 blur-3xl" />
                                    </div>

                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                        <div className="absolute left-5 top-5 rounded-2xl bg-white px-4 py-3 text-center text-stone-950 shadow-lg">
                                            <p className="text-2xl font-black leading-none">
                                                {getDay(event.date)}
                                            </p>
                                            <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-orange-700">
                                                {getMonth(event.date)}
                                            </p>
                                        </div>

                                        <span className="absolute right-5 top-5 rounded-full bg-black/40 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                      {event.category}
                    </span>
                                    </div>

                                    <div className="relative p-6">
                                        <h3 className="text-2xl font-black tracking-tight">
                                            {event.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-white/60">
                                            {event.description}
                                        </p>

                                        <div className="mt-5 space-y-1 text-sm font-medium text-white/70">
                                            <p>📍 {event.location}</p>
                                            <p>🕒 {event.time}</p>
                                        </div>

                                        <a
                                            href={event.link || "#"}
                                            className="mt-6 inline-flex items-center text-sm font-black text-orange-300 transition group-hover:text-orange-200"
                                        >
                                            View details
                                            <span className="ml-2 transition group-hover:translate-x-1">
                        →
                      </span>
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
"use client";

import React from "react";
import { motion } from "framer-motion";

type EventItem = {
    id: number;
    title: string;
    date: string;
    time?: string;
    location: string;
    category: string;
    description: string;
    imageUrl: string;
    link?: string;
};

const upcomingEvents: EventItem[] = [
    {
        id: 1,
        title: "Sunset Music Night",
        date: "2026-07-05",
        time: "20:30",
        location: "Harbor Promenade",
        category: "Music",
        description:
            "Enjoy a magical evening by the sea with live local music, drinks, and summer atmosphere.",
        imageUrl: "/images/events/sunset-music.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Traditional Food Festival",
        date: "2026-07-12",
        time: "18:00",
        location: "Old Town Square",
        category: "Food",
        description:
            "Taste authentic local dishes, handmade products, and traditional recipes from regional producers.",
        imageUrl: "/images/events/food-festival.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Cultural Night Walk",
        date: "2026-07-18",
        time: "19:00",
        location: "Historic Center",
        category: "Culture",
        description:
            "A guided walk through hidden alleys, historic landmarks, and beautiful evening viewpoints.",
        imageUrl: "/images/events/cultural-walk.jpg",
        link: "#",
    },
];

const categories = ["All", "Music", "Food", "Culture", "Tours"];

function formatEventDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}

export default function EventsPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f8f3ea] text-stone-900">
            <section className="relative px-6 py-20 md:py-28">
                <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />
                <div className="absolute right-[-120px] top-32 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
                <div className="absolute bottom-[-160px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-rose-200/30 blur-3xl" />

                <div className="relative mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="mx-auto max-w-3xl text-center"
                    >
            <span className="inline-flex rounded-full border border-orange-300/70 bg-white/60 px-5 py-2 text-sm font-semibold text-orange-800 shadow-sm backdrop-blur">
              What’s happening soon
            </span>

                        <h1 className="mt-6 text-5xl font-black tracking-tight text-stone-950 md:text-7xl">
                            Upcoming Events
                            <span className="block bg-gradient-to-r from-orange-700 via-amber-600 to-rose-600 bg-clip-text text-transparent">
                & Local Experiences
              </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                            Discover festivals, music nights, cultural walks, food events and
                            unique local experiences curated for travelers.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.6 }}
                        className="mt-10 flex flex-wrap justify-center gap-3"
                    >
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                whileHover={{ y: -3, scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition ${
                                    index === 0
                                        ? "bg-stone-950 text-white"
                                        : "bg-white/75 text-stone-700 hover:bg-white"
                                }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {upcomingEvents.map((event, index) => (
                            <motion.article
                                key={event.id}
                                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}
                                whileHover={{ y: -10 }}
                                className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(41,31,20,0.10)] ring-1 ring-black/5"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <motion.img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="h-full w-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-stone-800 shadow backdrop-blur">
                                        {event.category}
                                    </div>

                                    <div className="absolute bottom-5 left-5 right-5">
                                        <p className="text-sm font-semibold text-orange-100">
                                            {formatEventDate(event.date)}
                                            {event.time && ` · ${event.time}`}
                                        </p>

                                        <h2 className="mt-2 text-2xl font-black text-white">
                                            {event.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-sm font-medium text-stone-500">
                                        📍 {event.location}
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-stone-600">
                                        {event.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between">
                                        <a
                                            href={event.link || "#"}
                                            className="inline-flex items-center rounded-full bg-stone-950 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-orange-700"
                                        >
                                            Learn more
                                            <span className="ml-2 transition group-hover:translate-x-1">
                        →
                      </span>
                                        </a>

                                        <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                      Event
                    </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
"use client";

import dynamic from "next/dynamic";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { FormEvent, useMemo, useState } from "react";

type Category =
    | "All"
    | "Beachs"
    | "Culture"
    | "Food"
    | "Nature"
    | "Nightlife";

type Destination = {
    id: number;
    title: string;
    location: string;
    category: Exclude<Category, "All">;
    description: string;
    image: string;
    rating: number;
    duration: string;
    tag: string;
    href: string;
};

const LesvosMap = dynamic(() => import("@/components/LesvosMap"), {
    ssr: false,
    loading: () => (
        <div className="flex min-h-[680px] items-center justify-center rounded-[2.5rem] border border-white/10 bg-[#10201d]">
            <div className="text-center">
                <div className="mx-auto h-11 w-11 animate-spin rounded-full border-2 border-white/15 border-t-orange-300" />

                <p className="mt-5 text-sm font-semibold text-white/50">
                    Loading Lesvos map...
                </p>
            </div>
        </div>
    ),
});

const categories: {
    name: Category;
    icon: string;
}[] = [
    { name: "All", icon: "✦" },
    { name: "Beaches", icon: "☀" },
    { name: "Culture", icon: "◈" },
    { name: "Food", icon: "◉" },
    { name: "Nature", icon: "⌁" },
    { name: "Nightlife", icon: "☾" },
];

const destinations: Destination[] = [
    {
        id: 1,
        title: "Molyvos",
        location: "Northern Lesvos",
        category: "Culture",
        description:
            "A traditional stone-built village with narrow streets, sea views and an impressive medieval castle.",
        image: "/images/explore/molyvos.jpg",
        rating: 4.9,
        duration: "Full day",
        tag: "Must visit",
        href: "/places/molyvos",
    },
    {
        id: 2,
        title: "Petra Beach",
        location: "Northern Lesvos",
        category: "Beaches",
        description:
            "A beautiful organized beach beside a lively village with cafés, restaurants and sunset views.",
        image: "/images/explore/petra.jpg",
        rating: 4.8,
        duration: "Full day",
        tag: "Popular",
        href: "/places/petra",
    },
    {
        id: 3,
        title: "Skala Eresou",
        location: "Western Lesvos",
        category: "Beaches",
        description:
            "A long sandy beach with crystal-clear water, relaxed atmosphere and unforgettable sunsets.",
        image: "/images/explore/skala-eresou.jpg",
        rating: 4.9,
        duration: "Full day",
        tag: "Sunset spot",
        href: "/places/skala-eresou",
    },
    {
        id: 4,
        title: "Plomari",
        location: "Southern Lesvos",
        category: "Food",
        description:
            "Discover traditional ouzo distilleries, seafood tavernas and authentic local flavors by the sea.",
        image: "/images/explore/plomari.jpg",
        rating: 4.8,
        duration: "Half day",
        tag: "Local taste",
        href: "/places/plomari",
    },
    {
        id: 5,
        title: "Petrified Forest",
        location: "Western Lesvos",
        category: "Nature",
        description:
            "Explore one of the island’s most remarkable natural monuments in a dramatic volcanic landscape.",
        image: "/images/explore/petrified-forest.jpg",
        rating: 4.9,
        duration: "3–4 hours",
        tag: "Unique nature",
        href: "/places/petrified-forest",
    },
    {
        id: 6,
        title: "Mytilene Nights",
        location: "Mytilene",
        category: "Nightlife",
        description:
            "Waterfront bars, elegant rooftops, live music and vibrant summer evenings in the island’s capital.",
        image: "/images/explore/mytilene-nightlife.jpg",
        rating: 4.7,
        duration: "Evening",
        tag: "Night out",
        href: "/places/mytilene-nightlife",
    },
];

function SearchIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function DestinationCard({
                             destination,
                             index,
                         }: {
    destination: Destination;
    index: number;
}) {
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);

    const smoothX = useSpring(pointerX, {
        stiffness: 170,
        damping: 24,
    });

    const smoothY = useSpring(pointerY, {
        stiffness: 170,
        damping: 24,
    });

    const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 45, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
            }}
            onPointerMove={(event) => {
                const rectangle = event.currentTarget.getBoundingClientRect();

                pointerX.set(
                    (event.clientX - rectangle.left) / rectangle.width - 0.5,
                );

                pointerY.set(
                    (event.clientY - rectangle.top) / rectangle.height - 0.5,
                );
            }}
            onPointerLeave={() => {
                pointerX.set(0);
                pointerY.set(0);
            }}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
        >
            <div className="relative h-[400px] overflow-hidden">
                <motion.img
                    src={destination.image}
                    alt={destination.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07100f] via-[#07100f]/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-cyan-300/10 opacity-0 transition duration-700 group-hover:opacity-100" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs font-bold text-white backdrop-blur-xl">
          {destination.tag}
        </span>

                <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-xs font-bold text-white backdrop-blur-xl">
          ★ {destination.rating}
        </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                        <LocationIcon />
                        {destination.location}
                    </div>

                    <h3 className="text-3xl font-black tracking-[-0.04em] text-white">
                        {destination.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/65">
                        {destination.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
            <span className="text-sm font-semibold text-white/70">
              {destination.duration}
            </span>

                        <a
                            href={destination.href}
                            aria-label={`Explore ${destination.title}`}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-stone-950 transition duration-300 hover:scale-110 hover:bg-orange-300"
                        >
                            <ArrowIcon />
                        </a>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function ExplorePage() {
    const [activeCategory, setActiveCategory] =
        useState<Category>("All");

    const [search, setSearch] = useState("");

    const filteredDestinations = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        return destinations.filter((destination) => {
            const matchesCategory =
                activeCategory === "All" ||
                destination.category === activeCategory;

            const matchesSearch =
                normalizedSearch.length === 0 ||
                destination.title.toLowerCase().includes(normalizedSearch) ||
                destination.location.toLowerCase().includes(normalizedSearch) ||
                destination.category.toLowerCase().includes(normalizedSearch);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        document
            .getElementById("featured-destinations")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    }

    return (
        <main className="min-h-screen overflow-hidden bg-[#07100f] text-white">
            {/* Hero */}
            <section className="relative flex min-h-[92vh] items-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                    }}
                    className="absolute inset-0"
                >
                    <img
                        src="/images/explore/lesvos-hero.jpg"
                        alt="Beautiful coast of Lesvos"
                        className="h-full w-full object-cover"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,11,0.97)_0%,rgba(5,12,11,0.72)_48%,rgba(5,12,11,0.15)_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07100f] via-transparent to-black/20" />

                <motion.div
                    aria-hidden="true"
                    animate={{
                        y: [0, -18, 0],
                        rotate: [0, 4, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[8%] top-[18%] hidden h-28 w-28 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl lg:block"
                />

                <motion.div
                    aria-hidden="true"
                    animate={{
                        y: [0, 24, 0],
                        x: [0, -10, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[20%] right-[18%] hidden h-16 w-16 rounded-3xl border border-orange-200/30 bg-orange-300/20 backdrop-blur-xl lg:block"
                />

                <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white/85 backdrop-blur-xl"
                        >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-orange-300 opacity-70" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-orange-300" />
              </span>

                            Discover Lesvos
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 45 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-[7.2rem]"
                        >
                            Explore the soul
                            <span className="block bg-gradient-to-r from-orange-200 via-amber-300 to-cyan-200 bg-clip-text text-transparent">
                of Lesvos.
              </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.3,
                            }}
                            className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl"
                        >
                            Discover traditional villages, hidden beaches, authentic
                            flavors, natural wonders and unforgettable island experiences.
                        </motion.p>

                        <motion.form
                            onSubmit={handleSearch}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45,
                            }}
                            className="mt-10 flex max-w-2xl flex-col gap-3 rounded-[1.75rem] border border-white/15 bg-white/10 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:flex-row"
                        >
                            <label className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <span className="text-white/50">
                  <SearchIcon />
                </span>

                                <input
                                    type="search"
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Search beaches, villages, food..."
                                    className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/40"
                                />
                            </label>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="rounded-2xl bg-orange-300 px-7 py-4 text-sm font-black text-[#10110e] shadow-[0_10px_30px_rgba(253,186,116,0.25)] transition hover:bg-orange-200"
                            >
                                Start exploring
                            </motion.button>
                        </motion.form>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 md:flex"
                >
                    Scroll to discover

                    <motion.span
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 1.7,
                            repeat: Infinity,
                        }}
                        className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
                    />
                </motion.div>
            </section>

            {/* Categories */}
            <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="flex gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {categories.map((category, index) => {
                        const isActive = activeCategory === category.name;

                        return (
                            <motion.button
                                key={category.name}
                                type="button"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setActiveCategory(category.name)}
                                className={`relative flex min-w-fit items-center gap-3 overflow-hidden rounded-full border px-6 py-3.5 text-sm font-bold transition ${
                                    isActive
                                        ? "border-orange-300 bg-orange-300 text-stone-950"
                                        : "border-white/10 bg-white/[0.06] text-white/65 hover:border-white/25 hover:text-white"
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="active-explore-category"
                                        className="absolute inset-0 bg-orange-300"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                )}

                                <span className="relative z-10 text-lg">
                  {category.icon}
                </span>

                                <span className="relative z-10">
                  {category.name}
                </span>
                            </motion.button>
                        );
                    })}
                </div>
            </section>

            {/* Destinations */}
            <section
                id="featured-destinations"
                className="mx-auto max-w-7xl px-6 pb-28 lg:px-8"
            >
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-300">
                            Handpicked places
                        </p>

                        <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                            Experience the best
                            <span className="text-white/35"> of Lesvos.</span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-7 text-white/50">
                        Explore carefully selected locations combining natural beauty,
                        local culture and authentic island life.
                    </p>
                </div>

                <motion.div
                    layout
                    className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredDestinations.map((destination, index) => (
                            <DestinationCard
                                key={destination.id}
                                destination={destination}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredDestinations.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="rounded-[2rem] border border-dashed border-white/15 px-6 py-20 text-center"
                    >
                        <span className="text-4xl">⌕</span>

                        <h3 className="mt-5 text-2xl font-black">
                            No destinations found
                        </h3>

                        <p className="mt-2 text-white/50">
                            Try another search or category.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setActiveCategory("All");
                            }}
                            className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-950"
                        >
                            Show all places
                        </button>
                    </motion.div>
                )}
            </section>

            {/* Lesvos map */}
            <section className="relative border-y border-white/10 bg-white/[0.025]">
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{ duration: 0.7 }}
                        className="mb-12 text-center"
                    >
                        <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
                            Interactive island map
                        </p>

                        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                            Discover Lesvos
                            <span className="text-white/35"> on the map.</span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/55">
                            Select a location, zoom around the island and discover
                            villages, beaches, food, culture and natural attractions.
                        </p>
                    </motion.div>

                    <LesvosMap />
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-24 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.35,
                    }}
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] border border-white/10 px-7 py-20 text-center sm:px-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/25 via-emerald-300/10 to-cyan-300/20" />

                    <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/20 blur-[100px]" />

                    <div className="relative">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-200">
              Create your journey
            </span>

                        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                            Ready to experience Lesvos?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/60">
                            Save your favorite places and create a personalized travel
                            itinerary for your stay on the island.
                        </p>

                        <motion.a
                            href="/planner"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-stone-950"
                        >
                            Create my itinerary
                            <ArrowIcon />
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
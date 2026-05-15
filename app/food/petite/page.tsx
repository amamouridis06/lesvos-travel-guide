"use client";

import { motion } from "framer-motion";
import { MapPin, Clock3, CakeSlice, Euro, Star } from "lucide-react";

export default function DessertShopGuidePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 via-pink-50 to-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center px-6">
                <motion.img
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.4 }}
                    src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1800&auto=format&fit=crop"
                    alt="Desserts"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-4xl text-center text-white"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20"
                    >
                        <Star className="w-4 h-4 fill-white" />
                        <span className="text-sm font-semibold tracking-wide">
              BEST SWEETS IN ATHENS
            </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 drop-shadow-2xl">
                        Sweet Athens Corner
                    </h1>

                    <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
                        Ανακάλυψε χειροποίητα γλυκά, signature pancakes, premium gelato και
                        αυθεντικές ελληνικές γεύσεις σε ένα από τα πιο Instagrammable spots
                        της Αθήνας.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <button className="px-8 py-4 rounded-2xl bg-white text-neutral-900 font-bold shadow-2xl hover:scale-105 transition-transform duration-300">
                            Explore Menu
                        </button>

                        <button className="px-8 py-4 rounded-2xl border border-white/40 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all duration-300">
                            Get Directions
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Info Cards */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-6"
                >
                    {[
                        {
                            icon: <MapPin className="w-6 h-6" />,
                            title: "Location",
                            value: "Athens Center",
                        },
                        {
                            icon: <Clock3 className="w-6 h-6" />,
                            title: "Opening Hours",
                            value: "09:00 - 00:00",
                        },
                        {
                            icon: <CakeSlice className="w-6 h-6" />,
                            title: "Must Try",
                            value: "Baklava Cheesecake",
                        },
                        {
                            icon: <Euro className="w-6 h-6" />,
                            title: "Average Price",
                            value: "€8 - €15",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 250 }}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-5">
                                {item.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-neutral-500 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-2xl font-bold text-neutral-900">
                                {item.value}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Featured Dessert */}
            <section className="max-w-7xl mx-auto px-6 pb-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1400&auto=format&fit=crop"
                            alt="Dessert"
                            className="rounded-[32px] shadow-2xl object-cover h-[550px] w-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
            <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold mb-6">
              SIGNATURE EXPERIENCE
            </span>

                        <h2 className="text-5xl font-black text-neutral-900 leading-tight mb-6">
                            Taste the Sweet Side of Athens
                        </h2>

                        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                            Από παραδοσιακό μπακλαβά μέχρι premium pancakes και artisan
                            παγωτό, κάθε γλυκό δημιουργείται καθημερινά με φρέσκα υλικά και
                            μοντέρνα αισθητική που τραβάει τα βλέμματα.
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            {[
                                "Handmade Desserts",
                                "Instagram Spot",
                                "Fresh Daily",
                                "Tourist Friendly",
                            ].map((tag, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.08 }}
                                    className="px-5 py-3 rounded-2xl bg-neutral-100 text-neutral-700 font-medium"
                                >
                                    {tag}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Clock3,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

const gallery = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
];

export default function RestaurantLanding() {
  return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,0,0.15),transparent_30%)]" />

        {/* HERO */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full mb-6"
              >
                <Star size={16} fill="currentColor" />
                Premium Dining Experience
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                AROMA
                <span className="block text-orange-400">RESTAURANT</span>
              </h1>

              <p className="text-zinc-400 text-lg mt-6 leading-relaxed max-w-xl">
                Αυθεντικές μεσογειακές γεύσεις, signature cocktails και μια
                premium εμπειρία dining στην καρδιά της πόλης.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="bg-orange-500 hover:bg-orange-600 px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-2xl shadow-orange-500/20"
                >
                  Κράτηση Τώρα
                  <ChevronRight size={18} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="border border-zinc-700 hover:border-zinc-500 bg-zinc-900/40 backdrop-blur px-7 py-4 rounded-2xl"
                >
                  Δες Menu
                </motion.button>
              </div>

              {/* INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                {[
                  {
                    icon: Clock3,
                    title: "Ωράριο",
                    text: "12:00 - 00:00",
                  },
                  {
                    icon: MapPin,
                    title: "Τοποθεσία",
                    text: "Αθήνα",
                  },
                  {
                    icon: Phone,
                    title: "Τηλέφωνο",
                    text: "+30 210 0000000",
                  },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        whileHover={{ y: -5 }}
                        className="bg-zinc-900/60 border border-zinc-800 backdrop-blur rounded-3xl p-5"
                    >
                      <item.icon className="text-orange-400 mb-3" size={22} />
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-zinc-400 text-sm mt-1">{item.text}</p>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT IMAGES */}
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {gallery.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        whileHover={{ scale: 1.03 }}
                        className={`overflow-hidden rounded-[2rem] ${
                            index === 0 ? "col-span-2 h-[320px]" : "h-[220px]"
                        }`}
                    >
                      <img
                          src={`${image}?auto=format&fit=crop&w=1200&q=80`}
                          alt="restaurant"
                          className="w-full h-full object-cover hover:scale-110 transition duration-700"
                      />
                    </motion.div>
                ))}
              </div>

              {/* FLOATING CARD */}
              <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.04 }}
                  className="absolute -bottom-8 -left-8 bg-zinc-900/80 backdrop-blur border border-zinc-800 p-6 rounded-3xl shadow-2xl"
              >
                <div className="flex items-center gap-2 text-orange-400">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>

                <h3 className="text-xl font-bold mt-3">
                  #1 Fine Dining Experience
                </h3>

                <p className="text-zinc-400 mt-2 text-sm">
                  Βραβευμένη γαστρονομική εμπειρία με premium εξυπηρέτηση.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { MapPin, Waves, Sun, Car, Clock, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function BeachGuidePage() {
  return (
      <main className="min-h-screen bg-white overflow-hidden">
        <section className="relative h-[70vh]">
          <motion.img
              src="/images/beaches/navagio.jpg"
              alt="Beach"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
          />

          <div className="absolute inset-0 bg-black/45" />

          <motion.div
              className="relative z-10 flex h-full items-end"
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.15 }}
          >
            <div className="mx-auto max-w-7xl px-6 pb-16 text-white">
              <motion.span
                  variants={fadeUp}
                  className="rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold"
              >
                Beach Guide
              </motion.span>

              <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-5xl font-bold md:text-7xl"
              >
                Navagio Beach
              </motion.h1>

              <motion.div
                  variants={fadeUp}
                  className="mt-4 flex flex-wrap gap-6 text-lg"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={20} /> Zakynthos, Greece
                </div>

                <div className="flex items-center gap-2">
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  4.9/5
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3">
          <motion.div
              className="space-y-10 lg:col-span-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <h2 className="mb-4 text-3xl font-bold">Overview</h2>
              <p className="leading-8 text-gray-600">
                Navagio Beach is one of Greece's most famous beaches, known for
                its crystal-clear turquoise waters, dramatic white cliffs and the
                iconic shipwreck resting on its shore.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="mb-5 text-3xl font-bold">Why Visit?</h2>

              <div className="grid gap-5 md:grid-cols-2">
                {[
                  "Crystal clear water",
                  "Perfect for photography",
                  "Unique shipwreck",
                  "Boat tours available",
                  "Amazing sunset views",
                  "Snorkeling",
                ].map((item, index) => (
                    <motion.div
                        key={item}
                        className="rounded-xl border p-5 shadow-sm"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ delay: index * 0.08, duration: 0.45 }}
                        viewport={{ once: true }}
                    >
                      ✅ {item}
                    </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="mb-4 text-3xl font-bold">Gallery</h2>

              <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <motion.img
                        key={i}
                        src={`/images/beaches/navagio-${i}.jpg`}
                        className="h-56 w-full rounded-xl object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.35 }}
                    />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.aside
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
          >
            <motion.div
                className="rounded-2xl border p-6 shadow"
                whileHover={{ y: -6 }}
            >
              <h3 className="mb-6 text-2xl font-bold">Quick Info</h3>

              <div className="space-y-5">
                {[
                  [Clock, "Best Time", "May - September"],
                  [Sun, "Water Temperature", "24°C - 27°C"],
                  [Car, "Access", "Boat or viewpoint"],
                  [Waves, "Sea", "Crystal Clear"],
                ].map(([Icon, title, text]) => {
                  const TypedIcon = Icon as typeof Clock;

                  return (
                      <div key={title as string} className="flex gap-3">
                        <TypedIcon />
                        <div>
                          <p className="font-semibold">{title as string}</p>
                          <p className="text-gray-500">{text as string}</p>
                        </div>
                      </div>
                  );
                })}
              </div>

              <motion.button
                  className="mt-8 w-full rounded-xl bg-cyan-600 py-3 font-semibold text-white"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
              >
                View on Map
              </motion.button>
            </motion.div>

            <motion.div
                className="rounded-2xl bg-cyan-50 p-6"
                whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold">Travel Tips</h3>

              <ul className="mt-4 space-y-3 text-gray-600">
                <li>🌞 Visit before 10 AM to avoid crowds.</li>
                <li>🛥️ Book boat tours in advance.</li>
                <li>📸 Bring a drone where permitted.</li>
                <li>💧 Carry enough water.</li>
              </ul>
            </motion.div>
          </motion.aside>
        </section>
      </main>
  );
}
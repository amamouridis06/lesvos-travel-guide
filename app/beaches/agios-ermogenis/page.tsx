"use client";

import { motion } from "framer-motion";
import { MapPin, Waves, Sun, Car, Clock, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

const olive = "text-[#4F5D2F]";
const oliveBg = "bg-[#4F5D2F]";
const oliveSoft = "bg-[#F3F4ED]";

export default function BeachGuidePage() {
  return (
      <main className="min-h-screen overflow-hidden bg-[#FAFAF7] text-black">
        <section className="relative h-[72vh]">
          <motion.img
              src="/images/beaches/navagio.jpg"
              alt="Beach"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
          />

          <div className="absolute inset-0 bg-white/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF7] via-white/40 to-transparent" />

          <motion.div
              className="relative z-10 flex h-full items-end"
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.15 }}
          >
            <div className="mx-auto max-w-7xl px-6 pb-16 text-black">
              <motion.span
                  variants={fadeUp}
                  className={`rounded-full ${oliveBg} px-5 py-2 text-sm font-semibold tracking-wide text-white`}
              >
                Beach Guide
              </motion.span>

              <motion.h1
                  variants={fadeUp}
                  className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl"
              >
                Navagio Beach
              </motion.h1>

              <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700"
              >
                A curated beach experience with turquoise waters, dramatic cliffs
                and one of the most iconic coastal views in Greece.
              </motion.p>

              <motion.div
                  variants={fadeUp}
                  className="mt-6 flex flex-wrap gap-5 text-base font-medium text-neutral-800"
              >
                <div className="flex items-center gap-2">
                  <MapPin className={olive} size={20} />
                  Zakynthos, Greece
                </div>

                <div className="flex items-center gap-2">
                  <Star className="fill-[#C8A951] text-[#C8A951]" size={20} />
                  4.9/5 Rating
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
            <motion.div
                variants={fadeUp}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
            >
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${olive}`}>
                Overview
              </p>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-black">
                A signature Ionian escape
              </h2>

              <p className="leading-8 text-neutral-700">
                Navagio Beach is one of Greece&apos;s most famous beaches, known
                for its crystal-clear turquoise waters, dramatic white cliffs and
                the iconic shipwreck resting on its shore.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${olive}`}>
                Highlights
              </p>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-black">
                Why visit this beach?
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {[
                  "Crystal clear water",
                  "Perfect for photography",
                  "Unique shipwreck scenery",
                  "Premium boat tours",
                  "Panoramic cliff views",
                  "Snorkeling experience",
                ].map((item, index) => (
                    <motion.div
                        key={item}
                        className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -6 }}
                        transition={{ delay: index * 0.08, duration: 0.45 }}
                        viewport={{ once: true }}
                    >
                      <div className={`mb-4 h-2 w-10 rounded-full ${oliveBg}`} />
                      <p className="font-semibold text-black">{item}</p>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${olive}`}>
                Gallery
              </p>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-black">
                Coastal views
              </h2>

              <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <motion.img
                        key={i}
                        src={`/images/beaches/navagio-${i}.jpg`}
                        alt={`Navagio Beach ${i}`}
                        className="h-64 w-full rounded-3xl object-cover shadow-sm"
                        whileHover={{ scale: 1.035 }}
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
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5"
                whileHover={{ y: -6 }}
            >
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.25em] ${olive}`}>
                Details
              </p>

              <h3 className="mb-7 text-2xl font-bold text-black">
                Quick Info
              </h3>

              <div className="space-y-6">
                {[
                  [Clock, "Best Time", "May - September"],
                  [Sun, "Water Temperature", "24°C - 27°C"],
                  [Car, "Access", "Boat or viewpoint"],
                  [Waves, "Sea", "Crystal clear"],
                ].map(([Icon, title, text]) => {
                  const TypedIcon = Icon as typeof Clock;

                  return (
                      <div key={title as string} className="flex gap-4">
                        <div className={`${oliveSoft} flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl`}>
                          <TypedIcon className={olive} size={20} />
                        </div>

                        <div>
                          <p className="font-semibold text-black">{title as string}</p>
                          <p className="text-sm text-neutral-600">{text as string}</p>
                        </div>
                      </div>
                  );
                })}
              </div>

              <motion.button
                  className={`mt-8 w-full rounded-2xl ${oliveBg} py-4 font-semibold text-white shadow-sm`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
              >
                View on Map
              </motion.button>
            </motion.div>

            <motion.div
                className={`${oliveSoft} rounded-3xl p-7 ring-1 ring-black/5`}
                whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-black">Travel Tips</h3>

              <ul className="mt-5 space-y-4 text-sm leading-6 text-neutral-700">
                <li>Visit before 10 AM to avoid peak crowds.</li>
                <li>Book your boat tour in advance.</li>
                <li>Bring sunscreen, water and comfortable sandals.</li>
                <li>Check local access rules before visiting.</li>
              </ul>
            </motion.div>
          </motion.aside>
        </section>
      </main>
  );
}
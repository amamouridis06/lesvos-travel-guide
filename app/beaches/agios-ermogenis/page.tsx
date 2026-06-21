"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  Camera,
  Clock,
  Compass,
  MapPin,
  Route,
  ShipWheel,
  Star,
  Sun,
  Waves,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const olive = "#55613A";

export default function BeachGuidePage() {
  const highlights = [
    { icon: Waves, title: "Turquoise waters", text: "Clear Ionian sea ideal for swimming." },
    { icon: Camera, title: "Iconic scenery", text: "White cliffs, shipwreck views and photo spots." },
    { icon: Anchor, title: "Boat access", text: "Reach the beach through organized boat tours." },
  ];

  const quickInfo = [
    { icon: Clock, label: "Best time", value: "May - September" },
    { icon: Sun, label: "Temperature", value: "24°C - 27°C" },
    { icon: Route, label: "Access", value: "Boat / Viewpoint" },
    { icon: Compass, label: "Location", value: "Zakynthos, Greece" },
  ];

  return (
      <main className="min-h-screen overflow-hidden bg-[#F7F6F0] text-black">
        <section className="relative min-h-[92vh] px-4 py-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto h-[calc(92vh-2rem)] max-w-7xl overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
            <motion.img
                src="/images/beaches/navagio.jpg"
                alt="Navagio Beach"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.7, ease: "easeOut" }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            <motion.div
                className="relative z-10 flex h-full items-end lg:items-center"
                initial="hidden"
                animate="show"
                transition={{ staggerChildren: 0.14 }}
            >
              <div className="max-w-3xl px-5 pb-10 sm:px-10 sm:pb-14 lg:pb-0">
                <motion.div
                    variants={fadeUp}
                    className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] shadow-sm backdrop-blur"
                    style={{ color: olive }}
                >
                  <ShipWheel size={16} />
                  Beach Travel Guide
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="text-5xl font-black tracking-[-0.06em] text-black sm:text-6xl md:text-7xl lg:text-8xl"
                >
                  Navagio
                  <span className="block" style={{ color: olive }}>
                  Beach
                </span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="mt-6 max-w-xl text-base leading-8 text-neutral-700 sm:text-lg"
                >
                  A cinematic Ionian escape with limestone cliffs, turquoise
                  waters and one of Greece’s most recognizable coastal views.
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    className="mt-7 flex flex-col gap-3 text-sm font-semibold text-neutral-800 sm:flex-row sm:flex-wrap"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 backdrop-blur">
                    <MapPin size={18} style={{ color: olive }} />
                    Zakynthos, Greece
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 backdrop-blur">
                    <Star className="fill-[#C8A951] text-[#C8A951]" size={18} />
                    4.9 Traveler rating
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
                className="absolute bottom-5 right-5 hidden w-[320px] rounded-3xl bg-white/85 p-5 shadow-xl backdrop-blur lg:block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: olive }}>
                Quick Plan
              </p>

              <div className="mt-4 space-y-4">
                {quickInfo.slice(0, 3).map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EEF0E4]">
                        <Icon size={18} style={{ color: olive }} />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{label}</p>
                        <p className="text-sm text-neutral-600">{value}</p>
                      </div>
                    </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {highlights.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                  key={title}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  viewport={{ once: true }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF0E4]">
                  <Icon size={22} style={{ color: olive }} />
                </div>

                <h3 className="text-xl font-black tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
              </motion.div>
          ))}
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8 lg:py-16">
          <div className="space-y-8">
            <motion.div
                className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 lg:p-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.12 }}
            >
              <motion.p
                  variants={fadeUp}
                  className="text-xs font-black uppercase tracking-[0.28em]"
                  style={{ color: olive }}
              >
                Overview
              </motion.p>

              <motion.h2
                  variants={fadeUp}
                  className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl"
              >
                Designed for travelers who want the best view, not just another beach.
              </motion.h2>

              <motion.p
                  variants={fadeUp}
                  className="mt-5 text-base leading-8 text-neutral-700"
              >
                Navagio Beach combines raw natural drama with a polished travel
                experience. Visit by boat for the shoreline, or head to the
                viewpoint for the most famous panoramic angle.
              </motion.p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Book an early boat tour",
                "Carry water and sunscreen",
                "Check sea conditions",
                "Visit the viewpoint separately",
              ].map((tip, index) => (
                  <motion.div
                      key={tip}
                      className="rounded-3xl bg-[#ECEEDF] p-6 ring-1 ring-black/5"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ delay: index * 0.06 }}
                      viewport={{ once: true }}
                  >
                <span className="text-3xl font-black" style={{ color: olive }}>
                  0{index + 1}
                </span>
                    <p className="mt-3 font-bold text-black">{tip}</p>
                  </motion.div>
              ))}
            </div>

            <motion.div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
            >
              {[1, 2, 3].map((i) => (
                  <motion.img
                      key={i}
                      variants={fadeUp}
                      src={`/images/beaches/navagio-${i}.jpg`}
                      alt={`Navagio Beach ${i}`}
                      className="h-64 w-full rounded-[2rem] object-cover shadow-sm"
                      whileHover={{ scale: 1.035 }}
                      transition={{ duration: 0.35 }}
                  />
              ))}
            </motion.div>
          </div>

          <motion.aside
              className="space-y-6 lg:sticky lg:top-24 lg:self-start"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
          >
            <div className="rounded-[2rem] bg-black p-6 text-white shadow-xl sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C9D3A5]">
                Trip Details
              </p>

              <h3 className="mt-3 text-2xl font-black">Plan your visit</h3>

              <div className="mt-7 space-y-5">
                {quickInfo.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                        <Icon size={20} className="text-[#C9D3A5]" />
                      </div>

                      <div>
                        <p className="font-bold">{label}</p>
                        <p className="text-sm text-white/65">{value}</p>
                      </div>
                    </div>
                ))}
              </div>

              <motion.button
                  className="mt-8 w-full rounded-2xl bg-[#C9D3A5] py-4 font-black text-black"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
              >
                View on Map
              </motion.button>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-7">
              <h3 className="text-xl font-black">Local note</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                For a smoother trip, separate your beach visit from the viewpoint
                visit. They are different experiences and need different timing.
              </p>
            </div>
          </motion.aside>
        </section>
      </main>
  );
}
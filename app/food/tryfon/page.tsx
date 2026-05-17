"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Clock3,
  MapPin,
  Phone,
  ChevronRight,
  Menu,
} from "lucide-react";

const galleryImages = [
  "/tryfon/tryfon3.jpeg",
  "/tryfon/tryfon4.jpeg",
  "/tryfon/tryfon5.jpeg",
  "/tryfon/tryfon1.jpeg",

];

const menuItems = [
  // {
  //   title: "Mediterranean Pasta",
  //   price: "18€",
  //   desc: "Χειροποίητα ζυμαρικά με φρέσκα μυρωδικά και premium sauce.",
  // },
  // {
  //   title: "Olive Signature Salad",
  //   price: "14€",
  //   desc: "Φρέσκα λαχανικά, ελιές, φέτα και olive oil dressing.",
  // },
  {
    title: "Premium Steak",
    price: "28€",
    desc: "Dry aged steak με πατάτες φούρνου και sauce κρασιού.",
    image: "/tryfon/tryfon5.jp5g",
  },
];

export default function OliveRestaurantPage() {
  return (
      <div className="bg-[#f6f3ea] text-[#2f3526] overflow-hidden">
        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(107,142,35,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(181,101,29,0.12),transparent_20%)]" />

        {/* HERO */}
        <section className="min-h-screen flex items-center pt-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#6b8e23]/10 border border-[#6b8e23]/20 px-5 py-2 rounded-full text-[#6b8e23] mb-8">
                <Star size={16} fill="currentColor" />
                Tranditional dishes
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-none">
                TRYFON
                <span className="block text-[#6b8e23]">CAFE - TAVERN</span>
              </h1>

              <p className="text-[#5b614e] text-lg leading-relaxed mt-8 max-w-xl">
                Ένα φωτεινό premium restaurant με μεσογειακή αισθητική,
                olive luxury design, φυσικά χρώματα και μοναδικές γεύσεις.
              </p>


              {/* INFO */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
                {[
                  {
                    icon: Clock3,
                    title: "Ωράριο",
                    text: "7:30 - 23:30",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    text: "Kalloni",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    text: "+30 22530 22619",
                  },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-white/60 border border-[#d8d2bd] backdrop-blur-xl p-5 rounded-3xl shadow-sm"
                    >
                      <item.icon className="text-[#6b8e23] mb-3" />

                      <h3 className="font-semibold">{item.title}</h3>

                      <p className="text-[#6c715f] text-sm mt-1">{item.text}</p>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
            >
              <div className="absolute -inset-5 bg-[#6b8e23]/20 blur-3xl rounded-full" />

              <img
                  src="/tryfon/tryfon3.jpeg"
                  alt="restaurant"
                  className="relative rounded-[3rem] h-[760px] w-full object-cover border border-white/40 shadow-2xl"
              />

              {/* FLOATING CARD */}
              <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-xl border border-[#d8d2bd] rounded-3xl p-6 shadow-xl"
              >
                <div className="flex gap-1 text-[#6b8e23]">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>

                <h3 className="text-xl font-bold mt-3">
                  Michael
                </h3>

                <p className="text-[#6b705f] text-sm mt-2">
                  Authentic Greek cafe /restaurant that offers
                  fantastic food, all at a reasonable price.
                  Recommended by a local taxi driver and on a Thursday
                  night has fantastic ribs which were delicious. Thoroughly recommended
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section
            id="about"
            className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center"
        >
          <motion.img
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="/tryfon/tryfon6.jpg"
              className="rounded-[3rem] h-[650px] object-cover w-full shadow-2xl"
          />

          <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
          >
          <span className="text-[#6b8e23] uppercase tracking-[0.3em] text-sm">
            Our Story
          </span>

            <h2 className="text-5xl font-black mt-4 leading-tight">
              Mediterranean
              <span className="block text-[#6b8e23]">Luxury Experience</span>
            </h2>

            <p className="text-[#5b614e] text-lg mt-8 leading-relaxed">
              Εδώ μπορείς να προσθέσεις μεγάλη περιγραφή για το εστιατόριο,
              την ιστορία του, το concept, τις γεύσεις και την premium εμπειρία.
            </p>
          </motion.div>
        </section>

        {/* MENU */}
        <section id="menu" className="py-32 bg-[#ebe5d3]/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
            <span className="text-[#6b8e23] uppercase tracking-[0.3em] text-sm">
              Signature Menu
            </span>

              <h2 className="text-5xl md:text-6xl font-black mt-4">
                Featured Dishes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
              {menuItems.map((item, index) => (
                  <motion.div
                      key={index}
                      whileHover={{ y: -10 }}
                      className="bg-white border border-[#ddd7c4] rounded-[2rem] overflow-hidden shadow-lg"
                  >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-72 w-full object-cover hover:scale-110 transition duration-700"
                    />

                    <div className="p-8">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">{item.title}</h3>

                        <span className="text-[#6b8e23] font-bold">
                      {item.price}
                    </span>
                      </div>

                      <p className="text-[#6b705f] mt-4">{item.desc}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center">
          <span className="text-[#6b8e23] uppercase tracking-[0.3em] text-sm">
            Gallery
          </span>

            <h2 className="text-5xl md:text-6xl font-black mt-4">
              Restaurant Moments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {galleryImages.map((image, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className={`overflow-hidden rounded-[2rem] shadow-xl ${
                        index === 0 || index === 3
                            ? "md:col-span-2 h-[500px]"
                            : "h-[500px]"
                    }`}
                >
                  <img
                      src={`${image}?auto=format&fit=crop&w=1400&q=80`}
                      className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </motion.div>
            ))}
          </div>
        </section>
      </div>
  );
}
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
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  "https://images.unsplash.com/photo-1544025162-d76694265947",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
];

const menuItems = [
  {
    title: "Mediterranean Pasta",
    price: "18€",
    desc: "Χειροποίητα ζυμαρικά με φρέσκα μυρωδικά και premium sauce.",
  },
  {
    title: "Olive Signature Salad",
    price: "14€",
    desc: "Φρέσκα λαχανικά, ελιές, φέτα και olive oil dressing.",
  },
  {
    title: "Premium Steak",
    price: "28€",
    desc: "Dry aged steak με πατάτες φούρνου και sauce κρασιού.",
  },
];

export default function OliveRestaurantPage() {
  return (
      <div className="bg-[#f6f3ea] text-[#2f3526] overflow-hidden">
        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(107,142,35,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(181,101,29,0.12),transparent_20%)]" />

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#f6f3ea]/70 border-b border-[#d6d0bd]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-black tracking-widest text-[#556b2f]"
            >
              OLIVA
            </motion.h1>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-[#6b8e23] transition">
                About
              </a>

              <a href="#menu" className="hover:text-[#6b8e23] transition">
                Menu
              </a>

              <a href="#gallery" className="hover:text-[#6b8e23] transition">
                Gallery
              </a>

              <a href="#contact" className="hover:text-[#6b8e23] transition">
                Contact
              </a>
            </nav>

            <button className="md:hidden">
              <Menu />
            </button>
          </div>
        </header>

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
                Mediterranean Experience
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-none">
                OLIVA
                <span className="block text-[#6b8e23]">RESTAURANT</span>
              </h1>

              <p className="text-[#5b614e] text-lg leading-relaxed mt-8 max-w-xl">
                Ένα φωτεινό premium restaurant με μεσογειακή αισθητική,
                olive luxury design, φυσικά χρώματα και μοναδικές γεύσεις.
              </p>

              <div className="flex gap-5 mt-10 flex-wrap">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#6b8e23] hover:bg-[#5f7d1f] text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-xl"
                >
                  Κράτηση
                  <ChevronRight size={18} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="border border-[#c7c1aa] bg-white/50 hover:bg-white px-8 py-4 rounded-2xl"
                >
                  Explore Menu
                </motion.button>
              </div>

              {/* INFO */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
                {[
                  {
                    icon: Clock3,
                    title: "Ωράριο",
                    text: "12:00 - 00:00",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    text: "Athens",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    text: "+30 2100000000",
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
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
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
                  Award Winning Experience
                </h3>

                <p className="text-[#6b705f] text-sm mt-2">
                  Luxury mediterranean dining με olive αισθητική.
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
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
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

            <p className="text-[#707763] mt-6 leading-relaxed">
              Το design βασίζεται σε olive luxury χρωματολογία με φυσικές
              αποχρώσεις, warm φωτισμό και elegant αισθητική.
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
                        src={`${galleryImages[index]}?auto=format&fit=crop&w=1200&q=80`}
                        className="h-72 w-full object-cover"
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

        {/* CONTACT */}
        <section
            id="contact"
            className="py-32 bg-[#ebe5d3]/40 border-t border-[#d8d2bd]"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#6b8e23] uppercase tracking-[0.3em] text-sm">
            Reservation
          </span>

            <h2 className="text-5xl md:text-6xl font-black mt-4">
              Book Your Table
            </h2>

            <p className="text-[#6c715f] mt-8 text-lg">
              Κλείσε το τραπέζι σου και απόλαυσε μια μοναδική mediterranean εμπειρία.
            </p>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-[#6b8e23] hover:bg-[#5f7d1f] text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl"
            >
              Make Reservation
            </motion.button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#d8d2bd] bg-[#f6f3ea]">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-black tracking-widest text-[#556b2f]">
              OLIVA
            </h2>

            <p className="text-[#7b806f] text-sm">
              © 2026 Oliva Restaurant — Mediterranean Luxury Experience
            </p>
          </div>
        </footer>
      </div>
  );
}
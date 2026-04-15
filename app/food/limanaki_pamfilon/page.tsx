"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LimanakiPamfilonPage() {

  const images = [
    "/food1lim.jpg",
    "/dessert-limanaki.jpg",
    "/limanaki_pamf1.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // 🔥 autoplay με pause στο hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/limanaki_pamf1.jpg"
          alt="To limanaki ton Pamfilon"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            To limanaki ton Pamfilon
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Traditional tavern by the sea
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-14">

        {/* ===== MAIN ===== */}
        <div className="lg:col-span-2 space-y-14">

          {/* Intro */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why should you go</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To Limanaki ton Pamfilon is a favorite seaside tavern in Skala Pamfilon, offering a truly summery setting right by the water. With tables set almost on the waves, it serves fresh fish, seafood, and authentic local flavors in a relaxed, picturesque atmosphere.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li>🌊 Seaside dining with tables by the water</li>
              <li>🐟 Fresh daily catch</li>
              <li>🍤 Seafood & local delicacies</li>
              <li>☀️ Perfect summer atmosphere</li>
            </ul>
          </div>

          {/* What to try */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">What to try</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>🐟 Fresh daily catch</li>
              <li>🍤 Grilled Kalamari & shrimp</li>
              <li>🍋 Seafood meze paired with ouzo</li>
            </ul>

     {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-2xl font-semibold mb-6">What to try</h2>

        {/* ================= PREMIUM CAROUSEL ================= */}
        <div
          className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
        >

          {/* IMAGE */}
          <Image
            src={images[index]}
            alt=""
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* ARROWS */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            ‹
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            ›
          </button>

          {/* DOTS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-white scale-110" : "bg-white/50"
                }`}
              />
            ))}
          </div>

        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`relative w-24 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
                i === index ? "border-black" : "border-transparent"
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

      </section>

      {/* ================= FULLSCREEN MODAL ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >

          <div className="relative w-full max-w-5xl h-[80vh]">

            <Image
              src={images[index]}
              alt=""
              fill
              className="object-contain"
            />

            {/* CLOSE */}
            <button className="absolute top-4 right-4 text-white text-2xl">
              ✕
            </button>

            {/* ARROWS */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-6 top-1/2 text-white text-3xl"
            >
              ‹
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-6 top-1/2 text-white text-3xl"
            >
              ›
            </button>

          </div>
        </div>
      )}

        {/* ===== SIDEBAR ===== */}
        <aside className="space-y-10">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg">Informations</h3>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Type:</strong> Restaurant</li>
              <li><strong>Kitchen:</strong> Greek</li>
              <li><strong>Prices:</strong> €€</li>
              <li><strong>Suitable for:</strong> Families, couples</li>
            </ul>
          </div>

          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.9619515967324!2d26.526763926143023!3d39.15840182166955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba677e1a3b5845%3A0xd278dcca3b94ec29!2sTo%20limanaki%20ton%20filon!5e1!3m2!1sen!2sgr!4v1776166522249!5m2!1sen!2sgr"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg">Near the restaurant</h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>🏘 Pamfila</li>
              <li>🏖 Beaches of Mytilini</li>
              <li>🍽 Other seaside taverns or shops</li>
            </ul>
          </div>

        </aside>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-neutral-900 text-white py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          See other places to eat in Lesvos
        </h2>
        <Link
          href="/food"
          className="inline-block px-8 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Other places
        </Link>
      </section>    

    </main>
  );
}

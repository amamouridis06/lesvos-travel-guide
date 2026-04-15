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

      {/* HERO */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/limanaki_pamf1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">To limanaki ton Pamfilon</h1>
        </div>
      </section>

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

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-20 text-center">
        <Link
          href="/food"
          className="px-8 py-3 bg-yellow-600 text-black rounded-lg"
        >
          Other places
        </Link>
      </section>

    </main>
  );
}

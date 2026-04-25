"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NafPage() {
  const images = [
    "/tropicana1.jpg",
    "/tropicana2.jpg",
    "/tropicana3.jpg",
    "/tropicana4.jpg",
    "/tropicana5.jpg",
    "/tropicana6.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] sm:h-[65vh] lg:h-[70vh] w-full">
        <Image
          src="/tropicana1.jpg"
          alt="Tropicana Platanos"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-4 sm:px-6 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
            Tropicana - Platanos
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-gray-200">
            A traditional restaurant-cafe based in Molyvos
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

        {/* ===== MAIN ===== */}
        <div className="lg:col-span-2 space-y-12 sm:space-y-14">

          {/* Intro */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              The history of Tropicana - Platanos
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              With the idea of serving locals and visitors fresh juices, some even tropical and scrumptious homemade ice cream, the Tropicana was born in 1985, at the square of Andrea Kyriakou.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-3">
              Customers come, eat, relax, sing, say good night and return again and again. We are always happy to treat you as family.
            </p>
          </div>

          {/* What to try */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">What to try</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-6">
              <li>Grilled meats and traditional homemade dishes</li>
              <li>Daily cooked meals with local ingredients</li>
              <li>Variety of meze perfect to share</li>
              <li>Homemade ice cream</li>
            </ul>

            {/* ===== CAROUSEL ===== */}
            <div
              className="relative h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOpen(true)}
            >
              <Image
                src={images[index]}
                alt="Gallery"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 px-2 sm:px-3 py-1 rounded-full"
              >
                ‹
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 px-2 sm:px-3 py-1 rounded-full"
              >
                ›
              </button>

              {/* dots */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i === index ? "bg-white scale-110" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* thumbnails */}
            <div className="flex gap-2 sm:gap-3 mt-4 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative min-w-[80px] sm:w-24 h-14 sm:h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
                    i === index ? "border-black" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== SIDEBAR ===== */}
        <aside className="space-y-6 lg:space-y-10">

          <div className="grid gap-6">

            {/* Info */}
            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100">
              <h3 className="font-semibold mb-4 text-lg">Informations</h3>
              <ul className="text-sm space-y-3 text-gray-700">
                <li><strong>Type:</strong> Restaurant & cafe</li>
                <li><strong>Kitchen:</strong> Greek</li>
                <li><strong>Prices:</strong> €€</li>
                <li><strong>Suitable for:</strong> Families & couples</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100">
              <h3 className="font-semibold mb-4 text-lg">Location & Contact</h3>
              <ul className="text-sm space-y-3 text-gray-700">
                <li><strong>Address:</strong> Plateia Kiriakou, Mithimna 811 08</li>
                <li><strong>Phone:</strong> 22530 71869</li>
                <li><strong>Hours:</strong> 09:30 – 23:30</li>
              </ul>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1282669522334!2d26.173488099999997!3d39.369439799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba9bad08e0eb0d%3A0x8d3cdff7c431108!2sTropicana%20Platanos!5e1!3m2!1sen!2sgr!4v1776642629570!5m2!1sen!2sgr" 
                loading="lazy"
                className="h-52 sm:h-64 w-full"
              />
            </div>

            {/* Nearby */}
            <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Nearby Sightseeings and Villages
              </h2>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>
                  🏖 <Link href="/sightseeings/molyvos-castle" className="text-blue-600 hover:underline">Molyvos Castle</Link>
                </li>
                <li>
                  🏖 <Link href="/villages/petra" className="text-blue-600 hover:underline">Petra</Link>
                </li>
                <li>
                  🏖 <Link href="/villages/xrousos" className="text-blue-600 hover:underline">Vafeios</Link>
                </li>
              </ul>
            </div>

          </div>
        </aside>
      </section>

      {/* ===== MODAL ===== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[60vh] sm:h-[70vh] lg:h-[80vh]">
            <Image src={images[index]} alt="" fill className="object-contain" />

            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white text-2xl">
              ✕
            </button>

            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 top-1/2 text-white text-3xl">
              ‹
            </button>

            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 top-1/2 text-white text-3xl">
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LimanakiPamfilonPage() {

  const images = [
    "/tryfon7.jpg",
    "/tryfon6.jpg",
    "/tryfon1.jpeg",
    "/tryfon2.jpeg",
    "/tryfon3.jpeg",
    "/tryfon4.jpeg",
    "/tryfon5.jpeg",
  ];

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // autoplay (pause on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/tryfon7.jpg"
          alt="Tryfon cafe - tavern "
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Tryfon cafe - tavern
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Traditional cafe - tavern in Kalloni
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
              Tryfon is a traditional café–tavern, welcoming guests since 1981 and offering an authentic taste of local life. With its relaxed atmosphere and genuine hospitality, it reflects the simplicity and charm of a true island dining experience.

              Known for its homemade dishes and fresh local ingredients, the tavern serves classic recipes passed down through generations—ranging from traditional meze and grilled meats to seasonal specialties, often paired with local ouzo or wine.

              Whether you visit for a morning coffee, a leisurely lunch, or a laid-back evening meal, Tryfon offers a warm, unpretentious setting where visitors can experience the true flavors and spirit of the island.
            </p>
          </div>
    <p className="text-gray-700 mb-4">
  The menu focuses on traditional homemade cuisine, with an emphasis on grilled meats,
  local recipes, and a variety of meze, perfectly paired with ouzo or tsipouro.
</p>
          {/* Highlights */}
           <h2 className="text-2xl font-semibold mb-4">What to try</h2>
         <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
  <li>🍖 Grilled meats and traditional homemade dishes</li>
  <li>🍲 Daily cooked meals prepared with local ingredients</li>
  <li>🥓 A variety of meze, perfect to share</li>
  <li>🧀 Local cheeses and traditional appetizers</li>
  <li>🥗 Fresh seasonal salads</li>
  <li>🍶 Ouzo and tsipouro, ideal for a relaxed meal</li>
  <li>☕ Greek coffee and simple desserts</li>
</ul>
          {/* What to try + CAROUSEL */}
          <div>
           

            
            {/* ===== CAROUSEL ===== */}
            <div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOpen(true)}
            >
              <Image
                src={images[index]}
                alt="Food gallery"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                ‹
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                ›
              </button>

              {/* dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                      i === index ? "bg-white scale-110" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* thumbnails */}
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

          </div>
        </div>

        {/* ===== SIDEBAR ===== */}
        <aside className="space-y-10">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg">Informations</h3>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Type:</strong> Tranditional cafe and grill</li>
              <li><strong>Kitchen:</strong> Greek</li>
              <li><strong>Prices:</strong> €</li>
              <li><strong>Suitable for:</strong> Families, couples</li>
            </ul>
          </div>

          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.1482036703565!2d26.20368545576998!3d39.233087330711065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba921818b1b90f%3A0xd86e90df52ec1d1!2zVHLDvXBoxY1u!5e1!3m2!1sen!2sgr!4v1776336589161!5m2!1sen!2sgr"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          <div>
  <h2 className="text-2xl font-semibold mb-3">Nearby Villages</h2>
  <ul className="space-y-2 text-gray-700">
    <li>
      🏖{" "}
      <Link href="/villages/dafia" className="text-blue-600 hover:underline">
        Dafia
      </Link>
    </li>
    <li>
      🏖{" "}
      <Link href="/villages/skala-kallonis" className="text-blue-600 hover:underline">
        Skala Kaloni
      </Link>
    </li>
    <li>
      🏖{" "}
      <Link href="/villages/agia-paraskevi" className="text-blue-600 hover:underline">
        Agia Paraskevi
      </Link>
    </li>
  </ul>
</div>

        </aside>
      </section>

      {/* ===== FULLSCREEN MODAL ===== */}
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

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>

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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LimanakiPamfilonPage() {
  const images = [
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

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">
      {/* HERO */}
      <section className="relative h-[45vh] sm:h-[55vh] md:h-[70vh] w-full">
        <Image
          src="/tryfon6.jpg"
          alt="Tryfon cafe - tavern"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-4 sm:px-6 w-full max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
            Tryfon cafe - tavern
          </h1>
          <p className="mt-2 md:mt-3 text-sm sm:text-base md:text-lg text-gray-200">
            Traditional cafe - tavern in Kalloni
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-14">
        {/* MAIN */}
        <div className="lg:col-span-2 space-y-8 md:space-y-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
              Why should you go
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              Tryfon is a traditional café–tavern, welcoming guests since 1981
              and offering an authentic taste of local life. With its relaxed
              atmosphere and genuine hospitality, it reflects the simplicity and
              charm of a true island dining experience.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mt-4">
              Known for its homemade dishes and fresh local ingredients, the
              tavern serves classic recipes passed down through generations —
              ranging from traditional meze and grilled meats to seasonal
              specialties, often paired with local ouzo or wine.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mt-4">
              Whether you visit for a morning coffee, a leisurely lunch, or a
              laid-back evening meal, Tryfon offers a warm, unpretentious
              setting where visitors can experience the true flavors and spirit
              of the island.
            </p>
          </div>

          <div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
              The menu focuses on traditional homemade cuisine, with an emphasis
              on grilled meats, local recipes, and a variety of meze, perfectly
              paired with ouzo or tsipouro.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              What to try
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>🍖 Grilled meats and traditional homemade dishes</li>
              <li>🍲 Daily cooked meals prepared with local ingredients</li>
              <li>🥓 A variety of meze, perfect to share</li>
              <li>🧀 Local cheeses and traditional appetizers</li>
              <li>🥗 Fresh seasonal salads</li>
              <li>🍶 Ouzo and tsipouro</li>
              <li>☕ Greek coffee and desserts</li>
            </ul>
          </div>

          {/* CAROUSEL */}
          <div>
            <div
              className="relative h-56 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOpen(true)}
            >
              <Image
                src={images[index]}
                alt="Food gallery"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 bg-white/85 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg shadow"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 bg-white/85 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg shadow"
              >
                ›
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-2 sm:gap-3 mt-3 md:mt-4 overflow-x-auto pb-2 scrollbar-thin">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-20 sm:w-24 md:w-24 h-14 sm:h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                    i === index ? "border-emerald-700" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6 md:space-y-8">
          <div className="bg-white rounded-xl shadow p-4 sm:p-5 md:p-6">
            <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              Information
            </h3>

            <ul className="text-sm space-y-2 md:space-y-3 text-gray-700">
              <li>
                <strong>Type:</strong> Traditional cafe
              </li>
              <li>
                <strong>Kitchen:</strong> Greek
              </li>
              <li>
                <strong>Prices:</strong> €
              </li>
              <li>
                <strong>Suitable for:</strong> Families
              </li>
            </ul>
          </div>

          <div className="w-full h-48 sm:h-56 md:h-48 rounded-lg overflow-hidden shadow bg-white">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1236.720590461647!2d26.20782708002686!3d39.2334754980139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba921818b1b90f%3A0xd86e90df52ec1d1!2zVHLDvXBoxY1u!5e1!3m2!1sen!2sgr!4v1776347556940!5m2!1sen!2sgr"
              loading="lazy"
            />
          </div>

          <div className="bg-white rounded-xl shadow p-4 sm:p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Nearby Villages
            </h2>

            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li>
                <Link
                  href="/villages/skala-kallonis"
                  className="text-emerald-700 hover:underline"
                >
                  Skala Kallonis
                </Link>
              </li>
              <li>
                <Link
                  href="/villages/dafia"
                  className="text-emerald-700 hover:underline"
                >
                  Dafia
                </Link>
              </li>
              <li>
                <Link
                  href="/villages/agia-paraskevi"
                  className="text-emerald-700 hover:underline"
                >
                  Agia Paraskevi
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* FULLSCREEN MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh]">
            <Image
              src={images[index]}
              alt=""
              fill
              className="object-contain"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-2xl"
            >
              ✕
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 text-white text-3xl"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 text-white text-3xl"
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-12 md:py-20 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          See other places to eat in Lesvos
        </h2>

        <Link
          href="/food"
          className="inline-block px-6 md:px-8 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Other places
        </Link>
      </section>
    </main>
  );
}

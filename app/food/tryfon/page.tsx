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

  const next = () => setIndex((p) => (p + 1) % images.length);
  const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/tryfon7.jpg"
          alt="Tryfon cafe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-4 w-full max-w-2xl">
          <h1 className="text-2xl md:text-5xl font-bold">
            Tryfon cafe - tavern
          </h1>
          <p className="mt-2 text-sm md:text-lg text-gray-200">
            Traditional cafe - tavern in Kalloni
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14">

        {/* MAIN */}
        <div className="lg:col-span-2 space-y-10 md:space-y-14">

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              Why should you go
            </h2>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
             Tryfon is a traditional café–tavern, welcoming guests since 1981 and offering an authentic taste of local life. With its relaxed atmosphere and genuine hospitality, it reflects the simplicity and charm of a true island dining experience.

              Known for its homemade dishes and fresh local ingredients, the tavern serves classic recipes passed down through generations—ranging from traditional meze and grilled meats to seasonal specialties, often paired with local ouzo or wine.

              Whether you visit for a morning coffee, a leisurely lunch, or a laid-back evening meal, Tryfon offers a warm, unpretentious setting where visitors can experience the true flavors and spirit of the island.
            </p>
          </div>

          <p className="text-gray-700 text-sm md:text-base">
            The menu focuses on traditional homemade cuisine, with an emphasis on grilled meats,
  local recipes, and a variety of meze, perfectly paired with ouzo or tsipouro.
          </p>

          {/* WHAT TO TRY */}
          <h2 className="text-xl md:text-2xl font-semibold">
            What to try
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
            <li>Grilled meats and traditional dishes</li>
            <li>Daily cooked meals</li>
            <li>Meze variety</li>
            <li>Local cheeses</li>
            <li>Seasonal salads</li>
            <li>Ouzo & tsipouro</li>
            <li>Greek coffee & desserts</li>
          </ul>

          {/* CAROUSEL */}
          <div
            className="relative h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={images[index]}
              alt="Food"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 px-2 md:px-3 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 px-2 md:px-3 rounded-full"
            >
              ›
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-2 md:gap-3 overflow-x-auto">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`relative w-20 md:w-24 h-14 md:h-16 rounded-lg overflow-hidden border-2 cursor-pointer ${
                  i === index ? "border-black" : "border-transparent"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6 md:space-y-10">

          <div className="bg-white rounded-xl shadow p-5 md:p-6">
            <h3 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              Information
            </h3>

            <ul className="text-xs md:text-sm space-y-2 md:space-y-3 text-gray-700">
              <li><strong>Type:</strong> Traditional cafe</li>
              <li><strong>Kitchen:</strong> Greek</li>
              <li><strong>Prices:</strong> €</li>
              <li><strong>Suitable:</strong> Families</li>
            </ul>
          </div>

          {/* MAP */}
          <div className="w-full h-40 md:h-48 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Nearby Villages
            </h2>

            <ul className="space-y-2 text-sm md:text-base text-gray-700">
              <li>
                <Link className="text-blue-600" href="/villages/dafia">
                  Dafia
                </Link>
              </li>
              <li>
                <Link className="text-blue-600" href="/villages/skala-kallonis">
                  Skala Kaloni
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}

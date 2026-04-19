"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LimanakiPamfilonPage() {

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
          src="/tropicana1.jpg"
          alt="Tropicana Platanos "
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Tropicana - Platanos
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            A tranditioan restaurant- cafe based in Molivos
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-14">

        {/* ===== MAIN ===== */}
        <div className="lg:col-span-2 space-y-14">

          {/* Intro */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">The history of Tropicana - Platanos</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              With the idea of serving locals and visitors fresh juices, some even tropical and scrumptious homemade ice cream, the Tropican was born in 1985, at the square of Andrea Kyriakou, in between backyards, tight next to an old stone fountain and under the shase of two mafnificient plane trees.
              So tables were laid under the tree, flowers were plantes around it, the first few guests became regularsand it all went on from there. As time passed by, good friends required good meze.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
               Custumers  come, eat, relax sing, say good night and come again and again. So here you are too. We are always happy to treat you as family. We are waiting to come..
               </p>
          </div>
    <p className="text-gray-700 mb-4">
  The menu focuses on traditional homemade cuisine, with an emphasis on grilled meats,
  local recipes, and a variety of meze, perfectly paired with ouzo or tsipouro.
</p>
          {/* Highlights */}
         <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
  <li>Grilled meats and traditional homemade dishes</li>
  <li>Daily cooked meals prepared with local ingredients</li>
  <li> A variety of meze, perfect to share</li>
  <li> The best ice cream </li>
  <li> Fantastic Aubergine and delicius dolmadakia stuffed Wine Leaves</li>
</ul>
          {/* What to try + CAROUSEL */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">What to try</h2>

            
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
              <li><strong>Type:</strong> Restaurant & cafe</li>
              <li><strong>Kitchen:</strong> Greek</li>
              <li><strong>Prices:</strong> €€</li>
              <li><strong>Suitable for:</strong> Families, couples, kids and for relax</li>
            </ul>
          </div>

          
            <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1282669522334!2d26.173488099999997!3d39.369439799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba9bad08e0eb0d%3A0x8d3cdff7c431108!2sTropicana%20Platanos!5e1!3m2!1sen!2sgr!4v1776641899243!5m2!1sen!2sgr" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full sm:h-72"
              />
            </div>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <p>
                <span className="font-semibold text-gray-900">Address:</span>{" "}
               Plateia Kiriakou, Mithimna 811 08
              </p>
              <p>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                22530 71869
              </p>
              <p>
                <span className="font-semibold text-gray-900">Check-in:</span>{" "}
                Working hours: From 9:30 to 23:30
              </p>
            </div>
          <div>
  <h2 className="text-2xl font-semibold mb-3"> Nearby Sightseeings and Villages</h2>
  <ul className="space-y-2 text-gray-700">
    <li>
      🏖{" "}
      <Link href="/sightseeings/molyvos-castle" className="text-blue-600 hover:underline">
        Molyvos Castle
      </Link>
    </li>
    <li>
      🏖{" "}
      <Link href="/villages/petra" className="text-blue-600 hover:underline">
        Petra
      </Link>
    </li>
    <li>
      🏖{" "}
      <Link href="/villages/xrousos" className="text-blue-600 hover:underline">
        Vafeios
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
      {/* <section className="bg-neutral-900 text-white py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          See other places to eat in Lesvos
        </h2>
        <Link
          href="/food"
          className="inline-block px-8 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Other places
        </Link>
      </section> */}

    </main>
  );
}

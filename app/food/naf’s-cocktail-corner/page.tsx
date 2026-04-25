"use client";

import React, { useState } from "react";

const barPhotos = [
  "/bar1.jpg",
  "/bar2.jpg",
  "/bar3.jpg",
  "/bar4.jpg",
];

export default function CocktailBarSection() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5">
      {/* IMAGE AREA */}
      <div className="grid gap-2 p-2 lg:grid-cols-[1.5fr_1fr]">
        <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] bg-neutral-200">
          <img
            src={barPhotos[activePhoto]}
            alt="Cocktail bar"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-5 left-5 text-white">
            <p className="mb-2 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
              Cocktail Bar · Plomari
            </p>
            <h2 className="text-3xl font-bold">Sunset Cocktail Bar</h2>
            <p className="mt-1 text-sm text-white/85">
              Signature cocktails, sea breeze & relaxed evening atmosphere.
            </p>
          </div>

          <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-bold text-neutral-900 shadow">
            ⭐ 4.8
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {barPhotos.map((photo, index) => (
            <button
              key={photo}
              onClick={() => setActivePhoto(index)}
              className={`relative h-[176px] overflow-hidden rounded-[1.25rem] ring-2 transition ${
                activePhoto === index
                  ? "ring-black"
                  : "ring-transparent hover:ring-black/20"
              }`}
            >
              <img
                src={photo}
                alt={`Bar photo ${index + 1}`}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid gap-8 p-6 lg:grid-cols-[1fr_300px] lg:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
            Recommended Nightlife
          </p>

          <h3 className="mt-2 text-2xl font-bold text-neutral-950">
            A polished cocktail experience in Plomari
          </h3>

          <p className="mt-4 max-w-3xl leading-7 text-neutral-600">
            A stylish cocktail bar for sunset drinks, premium signatures,
            relaxed music and warm summer nights. Ideal for couples, friends,
            and travelers looking for a refined but easy-going evening spot in
            Lesvos.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Location
              </p>
              <p className="mt-1 font-semibold text-neutral-900">
                Plomari, Lesvos
              </p>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Hours
              </p>
              <p className="mt-1 font-semibold text-neutral-900">
                18:00 – 02:00
              </p>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Best for
              </p>
              <p className="mt-1 font-semibold text-neutral-900">
                Cocktails & sunset
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-3xl bg-neutral-950 p-5 text-white">
          <h4 className="text-lg font-bold">Highlights</h4>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>🍸 Signature cocktails</li>
            <li>🌅 Sunset atmosphere</li>
            <li>🎵 Lounge music</li>
            <li>🥂 Great for couples & friends</li>
          </ul>

          <div className="mt-6 space-y-3">
            <a
              href="#"
              className="block rounded-2xl bg-white px-5 py-3 text-center text-sm font-bold text-neutral-950 transition hover:bg-neutral-200"
            >
              View on Map
            </a>

            <a
              href="#"
              className="block rounded-2xl border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              More Information
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

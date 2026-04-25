"use client";

import React, { useState } from "react";

const photos = ["/bar1.jpg", "/bar2.jpg", "/bar3.jpg", "/bar4.jpg"];

export default function CocktailBarSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="rounded-[32px] bg-[#111] p-3 text-white shadow-2xl">
      <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative h-[520px] overflow-hidden rounded-[26px]">
          <img
            src={photos[active]}
            alt="Cocktail bar"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

          <div className="absolute left-6 top-6 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
            Cocktail Experience
          </div>

          <div className="absolute bottom-7 left-7 max-w-xl">
            <p className="mb-3 text-sm text-white/75">Plomari, Lesvos</p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Sunset drinks with a refined island atmosphere
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/75">
              A stylish cocktail spot for golden-hour drinks, signature recipes,
              relaxed music and warm summer nights by the sea.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-[26px] bg-white p-6 text-neutral-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                  Featured Bar
                </p>
                <h3 className="mt-2 text-3xl font-semibold">
                  Aegean Cocktail Bar
                </h3>
              </div>

              <span className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-bold text-white">
                4.8
              </span>
            </div>

            <p className="mt-5 leading-7 text-neutral-600">
              Perfect for couples, friends and travelers who want something more
              premium than a casual drink, without losing the relaxed island
              feeling.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Info title="Hours" text="18:00 – 02:00" />
              <Info title="Style" text="Cocktails" />
              <Info title="Mood" text="Elegant & relaxed" />
              <Info title="Best time" text="Sunset" />
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex-1 rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-bold text-white"
              >
                View map
              </a>
              <a
                href="#"
                className="flex-1 rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-bold"
              >
                Details
              </a>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-4 gap-3">
            {photos.map((photo, index) => (
              <button
                key={photo}
                onClick={() => setActive(index)}
                className={`overflow-hidden rounded-2xl ${
                  active === index ? "ring-2 ring-white" : "opacity-70"
                }`}
              >
                <img
                  src={photo}
                  alt=""
                  className="h-28 w-full object-cover transition hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-neutral-100 p-4">
      <p className="text-xs font-bold uppercase text-neutral-500">{title}</p>
      <p className="mt-1 text-sm font-semibold text-neutral-950">{text}</p>
    </div>
  );
}

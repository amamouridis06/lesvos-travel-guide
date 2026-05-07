"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Wallet,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// ---- Replace with your own images ----
const HERO = "/votsalo3.jpg";

const votsalo = [
  // { type: "video", src: "/naf-ep.mp4", poster: "/naf-ep-thumb.jpg" },
  { type: "image", src: "/votsalo1.jpg" },
  { type: "image", src: "/votsalo2.jpg" },
  { type: "image", src: "/votsalo3.jpg" },
  { type: "image", src: "/votsalo4.jpg" },
  { type: "image", src: "/votsalo5.jpg" },
  { type: "image", src: "/votsalo6.jpg" },
  { type: "image", src: "/votsalo7.jpg" },
  { type: "image", src: "/votsalo8.jpg" },
  // { type: "video", src: "/naf-dj.mp4", poster: "/naf-dj-thumb.jpg" },
  // { type: "video", src: "/naf-party.mp4", poster: "/naf-party-thumb.jpg" },
];

const COCKTAILS = [
  { t: "Zombie", d: "rum, passion fruit, pineapple, lime" },
  { t: "Diego", d: "tequila, mango, vanilla, lime, spicy bitters" },
  { t: "Hanky panky", d: "Vodka, fresh ginger, cucumber, lime." },
  { t: "Pink mule", d: "vodka, strawberry, lime, mint, ginger beer" },
];

const NEARBY = [
  { label: "Eftalou Beach", emoji: "🏖" },
  { label: "Molivos", emoji: "🏘" },
  { label: "Petra ", emoji: "🏘" },
];

const INFO = [
  { Icon: MapPin, label: "Location", value: "Eftalou 81108" },
  { Icon: Phone, label: "Phone", value: "2252031374" },
  { Icon: Clock, label: "Hours", value: "Daily · 12:00 - 21:30" },
  { Icon: Users, label: "Best for", value: "Couples, friends, sunset drinks" },
];

export default function CocktailBarPage() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setIndex((p) => (p + 1) % GALLERY.length);
  const prev = () => setIndex((p) => (p - 1 + GALLERY.length) % GALLERY.length);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index && !isOpen) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [index, isOpen]);

  return (
      <main
          className="min-h-screen text-stone-900"
          style={{
            backgroundColor: "#fbf8f3",
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
          }}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.02em; }
        .gradient-warm { background: linear-gradient(135deg, #b85c3a, #e0a052); }
        .gradient-hero { background: linear-gradient(180deg, transparent 0%, rgba(20,15,10,.3) 50%, rgba(20,15,10,.85) 100%); }
        .shadow-soft { box-shadow: 0 10px 40px -15px rgba(60,40,30,.25); }
        .shadow-elevated { box-shadow: 0 20px 60px -20px rgba(60,40,30,.35); }
      `}</style>

        {/* HERO */}
        <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
          <img
              src={HERO}
              alt="Bartender pouring a cocktail at a seaside bar in Lesvos at sunset"
              className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />

          {/*<div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 sm:px-10">*/}
          {/*  /!*<span className="font-display text-lg font-semibold text-white">*!/*/}
          {/*  /!*  Lesvos<span style={{ color: "#e0a052" }}>.</span>Guide*!/*/}
          {/*  /!*</span>*!/*/}
          {/*  /!*<nav className="hidden gap-8 text-sm text-white/85 sm:flex">*!/*/}
          {/*  /!*  <a href="#about" className="hover:text-white">About</a>*!/*/}
          {/*  /!*  <a href="#gallery" className="hover:text-white">Gallery</a>*!/*/}
          {/*  /!*  <a href="#visit" className="hover:text-white">Visit</a>*!/*/}
          {/*  /!*</nav>*!/*/}
          {/*</div>*/}

          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 sm:px-10 sm:pb-20">
            <div className="mx-auto max-w-6xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "#e0a052" }}
              />
              North Lesvos · Restaurant
            </span>

              <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Taverna To Votsalo
              </h1>

              <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
                A fantastic place to eat nearby the sea This place is ideal for afternoon and night
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-3 lg:gap-16">
          {/* MAIN */}
          <div className="space-y-16 lg:col-span-2">
            <div id="about">
              <p
                  className="text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "#b85c3a" }}
              >
                The Place
              </p>

              <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                About
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-stone-600">
                In the heart of Eftalou, just steps from the sea and the renowned thermal springs,
                “Votsalo” brings together authentic flavors, traditional hospitality, and the
                laid-back spirit of the Greek summer in Taverna to Votsalo. Rooted in local culinary traditions and
                committed to fresh, high-quality ingredients, it offers dishes that evoke the warmth
                of a family table by the water.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                Fresh fish, seafood meze, homemade cooked dishes, and beloved Greek
                specialties are served in a setting defined by simplicity, authenticity,
                and coastal charm. Whether you are stopping by for a relaxed lunch after
                a swim or enjoying dinner with views of the sunset, “Votsalo” is a welcoming
                gathering place for those seeking delicious food, beautiful scenery, and the timeless
                feeling of a classic Greek summer.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-600">
                Come for the sunset, stay for the second round — the playlist gets
                better after midnight.
              </p>
            </div>

            {/* Signatures */}
            <div>
              <p
                  className="text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "#b85c3a" }}
              >
                What to try
              </p>

              <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
                Signatures of the house
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {COCKTAILS.map((c) => (
                    <div
                        key={c.t}
                        className="rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      <h3 className="font-display text-xl font-semibold">{c.t}</h3>
                      <p className="mt-1 text-sm text-stone-600">{c.d}</p>
                    </div>
                ))}
              </div>
            </div>


            <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-8">
              {votsalo.gallery.map((g, i) => {
                const layouts = [
                  "md:col-span-7 md:row-span-2 aspect-[4/5]",
                  "md:col-span-5 aspect-[4/3]",
                  "md:col-span-5 md:col-start-8 aspect-[4/3]",
                ];
                return (
                    <figure key={g.src} className={`group ${layouts[i] ?? "md:col-span-4 aspect-[4/5]"}`}>
                      <div className="relative h-full min-h-[260px] overflow-hidden md:min-h-0" style={{ background: "var(--ms-border)" }}>
                        <img
                            src={g.src}
                            alt={g.alt}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                      </div>
                      <figcaption className="mt-4 flex items-baseline gap-3">
                        <span className="ms-serif-num text-sm" style={{ color: "var(--ms-gold)" }}>0{i + 1}</span>
                        <span className="ms-display text-lg italic" style={{ color: "var(--ms-muted)" }}>{g.caption}</span>
                      </figcaption>
                    </figure>
                );
              })}
            </div>
          </div>
        </section>


          {/* SIDEBAR */}
          <aside id="visit" className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
              <div className="gradient-warm px-6 py-5 text-white">
                <h3 className="font-display text-2xl font-semibold">
                  Plan your visit
                </h3>
                <p className="mt-1 text-sm text-white/85">
                  Reservations recommended on weekends.
                </p>
              </div>

              <ul className="divide-y divide-stone-200">
                {INFO.map(({ Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-4 px-6 py-4">
                      <div
                          className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-stone-100"
                          style={{ color: "#b85c3a" }}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-stone-500">
                          {label}
                        </p>
                        <p className="text-sm font-medium text-stone-900">{value}</p>
                      </div>
                    </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
              <iframe
                  title="Map of Taverna to votsalo"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1454.4014408392081!2d26.212242236387354!3d39.3779559155215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba858a49ac0e27%3A0x487fac2fd8d63957!2sTaverna%20To%20Votsalo!5e1!3m2!1sen!2sgr!4v1778182112095!5m2!1sen!2sgr"
                  className="h-56 w-full border-0"
                  loading="lazy"
              />
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-soft">
              <h3 className="font-display text-xl font-semibold">Nearby</h3>

              <ul className="mt-4 space-y-3 text-sm">
                {NEARBY.map((n) => (
                    <li key={n.label}>
                      <a
                          href="#"
                          className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-stone-100"
                      >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{n.emoji}</span>
                      <span className="font-medium">{n.label}</span>
                    </span>
                        <ChevronRight className="h-4 w-4 text-stone-500" />
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          </aside>


        {/* MODAL */}
        {isOpen && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            >
              <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  aria-label="Close"
                  className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous"
                  className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {GALLERY[index].type === "image" ? (
                  <img
                      src={GALLERY[index].src}
                      alt="Gallery fullscreen"
                      className="max-h-[85vh] max-w-[90vw] object-contain"
                      onClick={(e) => e.stopPropagation()}
                  />
              ) : (
                  <video
                      key={GALLERY[index].src}
                      controls
                      autoPlay
                      className="max-h-[85vh] max-w-[90vw]"
                      onClick={(e) => e.stopPropagation()}
                  >
                    <source src={GALLERY[index].src} type="video/mp4" />
                  </video>
              )}

              <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Next"
                  className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
        )}
      </main>
  );
}
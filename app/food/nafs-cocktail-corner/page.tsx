"use client";

import { useEffect, useState } from "react";
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

const HERO = "/naf-chairs.jpeg";

const GALLERY = [
  { src: "/naf-ep.mp4", type: "video" },
  { src: "/naf1.jpg", type: "image" },
  { src: "/naf2.jpg", type: "image" },
  { src: "/naf-dj.mp4", type: "video" },
  { src: "/naf3.jpg", type: "image" },
  { src: "/naf4.jpg", type: "image" },
  { src: "/naf-party.mp4", type: "video" },
  { src: "/naf5.jpg", type: "image" },
];

const COCKTAILS = [
  { t: "Zombie", d: "rum, passion fruit, pineapple, lime, falernum." },
  { t: "Diego", d: "tequila, mango, vanilla, lime, spicy bitters" },
  { t: "Hanky panky", d: "Vodka, fresh ginger, cucumber, lime." },
  { t: "Pink mule", d: "vodka, strawberry, lime, mint, ginger beer" },
];

const INFO = [
  { Icon: MapPin, label: "Address", value: "Epar.Od. Mitilinis-Skopelou, Plomari 812 00" },
  { Icon: Phone, label: "Phone", value: "+30 22520 31374" },
  { Icon: Clock, label: "Hours", value: "20:00 – 04:00" },
  { Icon: Wallet, label: "Drinks", value: "5 – 10 €" },
  { Icon: Users, label: "Best for", value: "Couples & friends" },
];

const NEARBY = [
  { label: "Agios Isidoros Beach", emoji: "🏖" },
  { label: "Melinta Village", emoji: "🏘" },
  { label: "Plomari", emoji: "🍶" },
];

export default function CocktailBarPage() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => setIndex((p) => (p + 1) % GALLERY.length);
  const prev = () => setIndex((p) => (p - 1 + GALLERY.length) % GALLERY.length);

  useEffect(() => {
    if (isHovered || isOpen) return;

    const current = GALLERY[index];
    if (current.type === "video") return;

    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [isHovered, isOpen, index]);

  return (
      <main className="min-h-screen text-stone-900" style={{ backgroundColor: "#fbf8f3" }}>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        .font-display { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.02em; }
        .gradient-warm { background: linear-gradient(135deg, #b85c3a, #e0a052); }
        .gradient-hero { background: linear-gradient(180deg, transparent 0%, rgba(20,15,10,.3) 50%, rgba(20,15,10,.85) 100%); }
        .shadow-soft { box-shadow: 0 10px 40px -15px rgba(60,40,30,.25); }
        .shadow-elevated { box-shadow: 0 20px 60px -20px rgba(60,40,30,.35); }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
      `}</style>

        {/* HERO */}
        <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
          <img src={HERO} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />

          <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16">
            <h1 className="font-display text-5xl text-white">Naf's Cocktail Corner</h1>
          </div>
        </section>

        {/* GALLERY */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div
              className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-elevated"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOpen(true)}
          >
            {GALLERY.map((item, i) => (
                <div
                    key={item.src}
                    className={`absolute inset-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        i === index
                            ? "opacity-100 z-10 animate-[slowZoom_6s_linear_forwards]"
                            : "opacity-0 scale-110 z-0"
                    }`}
                >
                  {item.type === "image" ? (
                      <img src={item.src} className="h-full w-full object-cover" />
                  ) : (
                      <video
                          src={item.src}
                          className="h-full w-full object-cover"
                          autoPlay={i === index}
                          muted
                          loop
                          playsInline
                      />
                  )}
                </div>
            ))}

            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2">
              <ChevronLeft />
            </button>

            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2">
              <ChevronRight />
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {GALLERY.map((img, i) => (
                <button key={img.src} onClick={() => setIndex(i)}>
                  {img.type === "image" ? (
                      <img src={img.src} className="h-full w-full object-cover" />
                  ) : (
                      <video src={img.src} className="h-full w-full object-cover" muted />
                  )}
                </button>
            ))}
          </div>
        </section>

        {/* MODAL */}
        {isOpen && (
            <div className="fixed inset-0 bg-black/95 flex items-center justify-center">
              <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white">
                <X />
              </button>

              <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6">
                <ChevronLeft className="text-white" />
              </button>

              {GALLERY[index].type === "image" ? (
                  <img src={GALLERY[index].src} className="max-h-[85vh]" />
              ) : (
                  <video src={GALLERY[index].src} className="max-h-[85vh]" controls autoPlay />
              )}

              <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6">
                <ChevronRight className="text-white" />
              </button>
            </div>
        )}
      </main>
  );
}
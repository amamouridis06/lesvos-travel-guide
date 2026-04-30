"use client";

import { useEffect, useState, useRef } from "react";
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
const HERO = "/naf-chairs.jpeg";

const GALLERY = [
  { type: "video", src: "/naf-ep.mp4" },
  { type: "image", src: "/naf1.jpg" },
  { type: "image", src: "/naf2.jpg" },
  { type: "video", src: "/naf-party.mp4" },
  { type: "image", src: "/naf3.jpg" },
  { type: "image", src: "/naf4.jpg" },
  { type: "image", src: "/naf5.jpg" },
  { type: "video", src: "/naf-dj.mp4" },
];

const COCKTAILS = [
  { t: "Zombie", d: "rum, passion fruit, pineapple, lime, falernum." },
  { t: "Diego", d: "tequila, mango, vanilla, lime, spicy bitters" },
  { t: "Hanky panky", d: "Vodka, fresh ginger, cucumber, lime." },
  { t: "Pink mule", d: "vodka, strawberry, lime, mint, ginger beer" },
];

const INFO = [
  { Icon: MapPin, label: "Address", value: "" },
  { Icon: Phone, label: "Phone", value: "+30 " },
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

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setIndex((p) => (p + 1) % GALLERY.length);
  const prev = () => setIndex((p) => (p - 1 + GALLERY.length) % GALLERY.length);

  useEffect(() => {
    if (isHovered || isOpen) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [isHovered, isOpen, index]);

  // ✅ video control
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

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
      </section>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-3 lg:gap-16">
        {/* MAIN */}
        <div className="space-y-16 lg:col-span-2">

          {/* GALLERY */}
          <div id="gallery">
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A look inside
            </h2>

            {/* MAIN SLIDER */}
            <div
              className="group relative mt-8 aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-3xl shadow-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOpen(true)}
            >
              {GALLERY.map((item, i) =>
                item.type === "image" ? (
                  <img
                    key={item.src}
                    src={item.src}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
}`}
                  />
                ) : (
                  <video
                    key={item.src}
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
}`}
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )
              )}

              {/* arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          {INFO.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-4 w-4" />
              <div>
                <p>{label}</p>
                <p>{value}</p>
              </div>
            </div>
          ))}
        </aside>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setIsOpen(false)}
        >
          {GALLERY[index].type === "image" ? (
            <img
              src={GALLERY[index].src}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              controls
              autoPlay
              className="max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={GALLERY[index].src} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </main>
  );
}

/**
 * CocktailBarPage — single-file travel guide page.
 *
 * Drop this file into any React project (Next.js, Vite, TanStack Start, etc.).
 * Requirements:
 *   - React 18+
 *   - Tailwind CSS
 *   - lucide-react  (npm i lucide-react)
 *
 * Replace the image URLs below with your own (or local imports).
 */

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

// ---- Replace with your own images ----
const HERO =
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80";
const GALLERY = [
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1280&q=80",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1280&q=80",
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=1280&q=80",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1280&q=80",
];

const COCKTAILS = [
  { t: "Aegean Spritz", d: "Local citrus, mastiha liqueur, prosecco." },
  { t: "Smoked Old Fashioned", d: "Greek whiskey, thyme honey, orange peel." },
  { t: "Mediterranean Mule", d: "Vodka, fresh ginger, cucumber, lime." },
  { t: "Sunset Negroni", d: "Gin, Campari, vermouth, rosemary smoke." },
];

const INFO = [
  { Icon: MapPin, label: "Address", value: "Skala Plomariou, Lesvos" },
  { Icon: Phone, label: "Phone", value: "+30 22520 00000" },
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
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [isHovered, isOpen]);

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

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 sm:px-10">
          <span className="font-display text-lg font-semibold text-white">
            Lesvos<span style={{ color: "#e0a052" }}>.</span>Guide
          </span>
          <nav className="hidden gap-8 text-sm text-white/85 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#visit" className="hover:text-white">Visit</a>
          </nav>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 sm:px-10 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#e0a052" }} />
              South Lesvos · Cocktail Bar
            </span>
            <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Cocktail Corner
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
              A fantastic corner for a sunset cocktail by the Aegean — slow nights,
              warm lights, and the sea just steps away.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-3 lg:gap-16">
        {/* MAIN */}
        <div className="space-y-16 lg:col-span-2">
          <div id="about">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#b85c3a" }}>
              The Place
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              Where the island unwinds
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Tucked into a quiet stretch of coastline in southern Lesvos, Cocktail
              Corner is the kind of place locals tell you about quietly. Driftwood
              tables, candlelight, and a bar that takes its craft seriously without
              taking itself too seriously.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Come for the sunset, stay for the second round — the playlist gets
              better after midnight.
            </p>
          </div>

          {/* Signatures */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#b85c3a" }}>
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

          {/* GALLERY */}
          <div id="gallery">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#b85c3a" }}>
              Atmosphere
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
              A look inside
            </h2>

            <div
              className="group relative mt-8 aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-3xl shadow-elevated"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOpen(true)}
            >
              {GALLERY.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-stone-900 opacity-0 shadow-md backdrop-blur transition-opacity hover:bg-white group-hover:opacity-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-stone-900 opacity-0 shadow-md backdrop-blur transition-opacity hover:bg-white group-hover:opacity-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
                {GALLERY.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full bg-white transition-all ${
                      i === index ? "w-8 opacity-100" : "w-1.5 opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {GALLERY.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setIndex(i)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl transition-all ${
                    i === index
                      ? "ring-2 ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  style={i === index ? { boxShadow: "0 0 0 2px #b85c3a" } : undefined}
                >
                  <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside id="visit" className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
            <div className="gradient-warm px-6 py-5 text-white">
              <h3 className="font-display text-2xl font-semibold">Plan your visit</h3>
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
                    <p className="text-xs uppercase tracking-wider text-stone-500">{label}</p>
                    <p className="text-sm font-medium text-stone-900">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
            <iframe
              title="Map of Cocktail Corner"
              src="https://www.google.com/maps?q=Plomari,+Lesvos&output=embed"
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
      </section>

      <footer className="border-t border-stone-200 py-10 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Lesvos Guide · Crafted with care
      </footer>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={GALLERY[index]}
            alt="Gallery fullscreen"
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
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


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function NafPage() {
//   const images = ["/naf1.jpg", "/naf2.jpg", "/naf3.jpg", "/naf4jpg", "/naf5.jpg"];

//   const [index, setIndex] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const hasImages = images.length > 0;

//   const next = () => {
//     if (!hasImages) return;
//     setIndex((prev) => (prev + 1) % images.length);
//   };

//   const prev = () => {
//     if (!hasImages) return;
//     setIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     if (!hasImages || isHovered) return;

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [isHovered, hasImages]);

//   return (
//     <main className="bg-neutral-100 text-neutral-900 min-h-screen overflow-x-hidden">

//       {/* ================= HERO ================= */}
//       <section className="relative h-[55vh] sm:h-[65vh] lg:h-[70vh] w-full">
//         <Image
//           src="/naf3.jpg"
//           alt="Naf’s Cocktail Corner"
//           fill
//           className="object-cover"
//           priority
//         />

//         <div className="absolute inset-0 bg-black/50" />

//         <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-4 sm:px-6 max-w-3xl">
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
//             Naf’s Cocktail Corner
//           </h1>
//           <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-gray-200">
//             A fantastic corner for a cocktail in south Lesvos
//           </p>
//         </div>
//       </section>

//       {/* ================= CONTENT ================= */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

//         {/* ===== MAIN ===== */}
//         <div className="lg:col-span-2 space-y-12 sm:space-y-14">

//           {/* Intro */}
//           <div>
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               About
//             </h2>

//             <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
//               {/* μπορείς να βάλεις description εδώ */}
//               A cozy cocktail bar in South Lesvos with a relaxed atmosphere,
//               music, and great drinks by the sea.
//             </p>

//             <p className="text-gray-700 leading-relaxed text-base sm:text-lg mt-3">
              
//             </p>
//           </div>

//           {/* What to try */}
//           <div>
//             <h2 className="text-xl sm:text-2xl font-semibold mb-4">
//               What to try
//             </h2>

//             <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700 mb-6">
//               <li>Grilled meats and traditional homemade dishes</li>
//               <li>Daily cooked meals with local ingredients</li>
//               <li>Variety of meze perfect to share</li>
//               <li>Homemade ice cream</li>
//             </ul>

//             {/* ===== CAROUSEL ===== */}
//             {hasImages && (
//               <div
//                 className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//                 onClick={() => setIsOpen(true)}
//               >
//                 <Image
//                   src={images[index]}
//                   alt="Gallery"
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

//                 {/* arrows */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     prev();
//                   }}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-8 h-8 rounded-full flex items-center justify-center"
//                 >
//                   ‹
//                 </button>

//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     next();
//                   }}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-8 h-8 rounded-full flex items-center justify-center"
//                 >
//                   ›
//                 </button>

//                 {/* dots */}
//                 <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//                   {images.map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setIndex(i);
//                       }}
//                       className={`w-2.5 h-2.5 rounded-full transition-all ${
//                         i === index ? "bg-white scale-125" : "bg-white/50"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* thumbnails */}
//             <div className="flex gap-2 sm:gap-3 mt-4 overflow-x-auto pb-1">
//               {images.map((img, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setIndex(i)}
//                   className={`relative min-w-[80px] sm:w-24 h-14 sm:h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
//                     i === index ? "border-black" : "border-transparent"
//                   }`}
//                 >
//                   <Image src={img} alt="" fill className="object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ===== SIDEBAR ===== */}
//         <aside className="space-y-6 lg:space-y-10">

//           {/* Info */}
//           <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100">
//             <h3 className="font-semibold mb-4 text-lg">Informations</h3>
//             <ul className="text-sm space-y-3 text-gray-700">
//               <li><strong>Type:</strong> Cocktail Bar</li>
//               <li><strong>Prices:</strong> 5–10 €</li>
//               <li><strong>Suitable for:</strong> Families & couples</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100">
//             <h3 className="font-semibold mb-4 text-lg">Location & Contact</h3>
//             <ul className="text-sm space-y-3 text-gray-700">
//               <li><strong>Address:</strong>Mytilene-Skopelos Regional Road, Plomari 812 00</li>
//               <li><strong>Phone:</strong>+30 22520 31374</li>
//               <li><strong>Hours:</strong> 20:00 – 4:00</li>
//             </ul>
//           </div>

//           {/* Map */}
//           <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.5997857334933!2d26.39019272923644!3d38.96809704727767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14baf7f481beb643%3A0x2ff539f18c93758c!2sNaf&#39;s%20Cocktail%20Corner!5e1!3m2!1sel!2sgr!4v1777117331660!5m2!1sel!2sgr"
//               className="h-52 sm:h-64 w-full"
//             />
//           </div>

//           {/* Nearby */}
//           <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100">
//             <h2 className="text-lg sm:text-xl font-semibold mb-4">
//               Nearby Beaches and Villages
//             </h2>

//             <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
//               <li>
//                 🏖{" "}
//                 <Link href="/beaches/agios-isidoros" className="text-blue-600 hover:underline">
//                   Agios Isidoros Beach
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/villages/melinta" className="text-blue-600 hover:underline">
//                   Melinta
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/villages/plomari" className="text-blue-600 hover:underline">
//                   Plomari
//                 </Link>
//               </li>
//             </ul>
//           </div>

//         </aside>
//       </section>

//       {/* ===== MODAL ===== */}
//       {isOpen && hasImages && (
//         <div
//           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
//           onClick={() => setIsOpen(false)}
//         >
//           <div className="relative w-full max-w-5xl h-[60vh] sm:h-[70vh] lg:h-[80vh]">
//             <Image
//               src={images[index]}
//               alt="Gallery fullscreen"
//               fill
//               className="object-contain"
//             />

//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-white text-2xl"
//             >
//               ✕
//             </button>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 prev();
//               }}
//               className="absolute left-6 top-1/2 text-white text-3xl"
//             >
//               ‹
//             </button>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 next();
//               }}
//               className="absolute right-6 top-1/2 text-white text-3xl"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

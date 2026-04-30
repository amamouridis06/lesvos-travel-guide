
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

// ---- Assets ----
const HERO = "/naf-chairs.jpeg";

const GALLERY = [
  { type: "video", src: "/naf-ep.mp4", poster: "/naf-ep.jpg" },
  { type: "image", src: "/naf1.jpg" },
  { type: "image", src: "/naf2.jpg" },
  { type: "video", src: "/naf-party.mp4", poster: "/naf-party.jpg" },
  { type: "image", src: "/naf3.jpg" },
  { type: "image", src: "/naf4.jpg" },
  { type: "image", src: "/naf5.jpg" },
  { type: "video", src: "/naf-dj.mp4", poster: "/naf-dj.jpg" },
];

export default function CocktailBarPage() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => setIndex((p) => (p + 1) % GALLERY.length);
  const prev = () => setIndex((p) => (p - 1 + GALLERY.length) % GALLERY.length);



  // autoplay
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        video.play?.().catch(() => {});
      } else {
        video.pause?.();
      }
    });
  }, [index]);

  // control videos
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [index]);

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-900">
      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">
        <img src={HERO} className="absolute inset-0 w-full h-full object-cover" />
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold">Gallery</h2>

        {/* MAIN SLIDER */}
        <div
          className="group relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-lg cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
        >
          {GALLERY.map((item, i) =>
            item.type === "image" ? (
              <img
                key={item.src}
                src={item.src}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
}`}
              />
            ) : (
              <video
                key={item.src}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
}`}
                muted
                loop
                playsInline
                preload={i === index ? "auto" : "metadata"}
                poster={item.poster}
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100"
          >
            <ChevronRight />
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="mt-4 grid grid-cols-4 gap-3">
          {GALLERY.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setIndex(i)}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden ${
  i === index ? "ring-2 ring-offset-2" : "opacity-70"
}`}
            >
              {item.type === "image" ? (
                <img src={item.src} className="w-full h-full object-cover" />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={item.poster}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
                    ▶
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-6 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          {GALLERY[index].type === "image" ? (
            <img
              src={GALLERY[index].src}
              className="h-full w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              controls
              autoPlay
              playsInline
              className="h-full w-full object-contain"
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
            className="absolute right-6 text-white"
          >
            <ChevronRight size={40} />
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={30} />
          </button>
        </div>
      )}
    </main>
  );
}


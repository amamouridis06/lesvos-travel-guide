"use client";
import React, { useState } from "react";

type Amenity = {
  label: string;
};

const amenities: Amenity[] = [
  { label: "2 bedrooms" },
  { label: "2 bathrooms" },
  { label: "Kitchen" },
  { label: "Living room" },
  { label: "Balcony" },
];

const images = [
  "/thanosliv.jpeg",
  "/thanosbath.jpeg",
  "/thanosk.jpeg",
];

export default function ApartmentPage() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section
        className="min-h-[70vh] sm:min-h-[80vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/thanosbackround.jpeg')",
        }}
      >
        <div className="bg-black/55 w-full min-h-[70vh] sm:min-h-[80vh] flex items-center">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Thanos Cozy Apartments
              </h1>

              <p className="text-base sm:text-lg md:text-xl mb-4 text-white/90">
                Modern apartment near Skala Kallonis square
              </p>

              <div className="mb-6 text-sm sm:text-base text-white/90">
                📍 Skala Kallonis, Lesvos
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 transition px-5 sm:px-6 py-3 rounded-xl text-sm sm:text-base font-medium w-full sm:w-auto">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
          Facilities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {amenities.map((item, i) => (
            <div
              key={i}
              className="text-center bg-gray-100 rounded-xl p-4 sm:p-5 shadow-sm"
            >
              <p className="text-sm sm:text-base font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY / CAROUSEL */}
      <section className="bg-gray-100 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Gallery
          </h2>

          <div className="relative max-w-3xl mx-auto">
            <img
              src={images[index]}
              className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover rounded-2xl shadow-md"
              alt={`Apartment image ${index + 1}`}
            />

            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow flex items-center justify-center"
            >
              ◀
            </button>

            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow flex items-center justify-center"
            >
              ▶
            </button>
          </div>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === i ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-900 text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
            Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/5 rounded-2xl p-5">
              <div className="mb-2 text-lg">⭐⭐⭐⭐⭐</div>
              <p className="text-sm sm:text-base text-white/90">
                Τέλειο μέρος, πολύ καθαρό!
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
              <div className="mb-2 text-lg">⭐⭐⭐⭐⭐</div>
              <p className="text-sm sm:text-base text-white/90">
                Ιδανικό για διακοπές!
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5">
              <div className="mb-2 text-lg">⭐⭐⭐⭐⭐</div>
              <p className="text-sm sm:text-base text-white/90">
                Θα ξαναέρθουμε!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact</h2>

          <div className="space-y-3 text-sm sm:text-base">
            <p>📞 +30 6974603592 </p>
            <p>✉️ tcanancy@gmail.com</p>
            <p>🕒 Check-in 15:00</p>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";

type Amenity = {
  label: string;
};

const amenities: Amenity[] = [
  { label: "2 Bedrooms" },
  { label: "2 Bathrooms" },
  { label: "Fully Equipped Kitchen" },
  { label: "Spacious Living Room" },
  { label: "Private Balcony" },
];

const images = [
  "/thanoshouse.jpg",
  "/thanosliv.jpg",
  "/thanosbath.jpg",
  "/thanostable.jpg",
  "/thanosk.jpg",
  "/thanosbed2.jpg",
  "/thanosb.jpg",
];

export default function ApartmentPage() {
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        className="relative min-h-[65vh] bg-cover bg-center sm:min-h-[72vh] lg:min-h-[78vh]"
        style={{
          backgroundImage: "url('/thanosbackround.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />

        <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-center px-4 py-12 sm:min-h-[72vh] sm:px-6 lg:min-h-[78vh] lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-orange-300 sm:text-sm">
              Cozy Stay in Lesvos
            </p>

            <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Thanos Cozy Apartments
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-lg sm:leading-7">
              A modern and comfortable apartment in the heart of Skala Kallonis,
              ideal for relaxing holidays, family stays, and easy access to the
              local square, restaurants, and nearby beaches.
            </p>

            <div className="mt-4 text-sm text-white/90 sm:mt-5 sm:text-base">
              📍 Skala Kallonis, Lesvos
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href="https://www.booking.com/hotel/gr/thanos-cozy-apartments.en-gb.html?aid=397594&label=gog235jc-10CAEoggI46AdIM1gDaFyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Asejj88GwAIB0gIkOWM2NDNmYTctNGU2ZC00Y2JlLTllMDktM2VkMmViZGY5NTM32AIB4AIB&sid=68f00793dd2d449b60f30b808935e305&checkin=2026-05-11&checkout=2026-05-14&dest_id=14571543&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&soh=1&sr_order=popularity&srepoch=1776538142&srpvid=ec81844de1470058&type=total&ucfs=1&#no_availability_msg"
                className="inline-block w-full rounded-xl bg-orange-500 px-6 py-3 text-center font-medium text-white transition hover:bg-orange-600 sm:w-auto"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + SIDEBAR */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              About the Apartment
            </h2>

            <ul className="mt-5 space-y-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              <li>
                <strong>Comfortable Accommodation</strong>: Thanos Cozy Apartments
                in Skala Kallonis offers a sun terrace and free WiFi. Each apartment
                features air-conditioning, a terrace, and a balcony with sea views.
              </li>

              <li>
                <strong>Modern Amenities</strong>: Guests enjoy a kitchenette,
                private bathroom, washing machine, and a work desk. Additional
                facilities include a paid shuttle service, 24-hour front desk,
                daily housekeeping, and luggage storage.
              </li>

              <li>
                <strong>Prime Location</strong>: Skala Kallonis Beach is a 4-minute
                walk away. Nearby attractions include Agia Paraskevi and Olive
                Museum, each 10 km from the property. Mytilene International
                Airport is 46 km distant.
              </li>
            </ul>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              It is ideal for couples, families, or small groups looking for a quiet
              place close to the village center, with easy access to local shops,
              tavernas, and the coastal area.
            </p>

            {/* FACILITIES */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                Facilities
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {amenities.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
              <a
                href="https://www.booking.com/hotel/gr/thanos-cozy-apartments.en-gb.html?aid=397594&label=gog235jc-10CAEoggI46AdIM1gDaFyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Asejj88GwAIB0gIkOWM2NDNmYTctNGU2ZC00Y2JlLTllMDktM2VkMmViZGY5NTM32AIB4AIB&sid=68f00793dd2d449b60f30b808935e305&dest_id=14571543&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1776593098&srpvid=ed2146e33956013a&type=total&ucfs=1&#tab-main"
                  target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-orange-600 hover:text-orange-700"
>
  See all facilities on Booking
</a>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="order-1 h-fit rounded-3xl border border-gray-200 bg-white p-4 shadow-lg sm:p-5 lg:order-2">
            <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
              Location & Info
            </h3>

            <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
              <iframe
                title="Map of Skala Kallonis"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2071.5071451047647!2d26.208322117000183!3d39.20674076014447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba93ec07a5c773%3A0x4dca5510e8276b2e!2sThanos%20Cozy%20Apartments!5e1!3m2!1sen!2sgr!4v1776536090791!5m2!1sen!2sgr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full sm:h-72"
              />
            </div>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <p>
                <span className="font-semibold text-gray-900">Address:</span>{" "}
                Skala Kallonis, Lesvos
              </p>
              <p>
                <span className="font-semibold text-gray-900">Phone:</span> +30 6974603592
              </p>
              <p>
                <span className="font-semibold text-gray-900">Email:</span> tcanancy@gmail.com
              </p>
              <p>
                <span className="font-semibold text-gray-900">Check-in:</span>{" "}
                15:00
              </p>
              <p>
                <span className="font-semibold text-gray-900">Check-out:</span>{" "}
                11:00
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* GALLERY / CAROUSEL */}
      <section className="bg-gray-100 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Gallery
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base">
              A quick look at the apartment interiors and comfort.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <img
              src={images[index]}
              className="h-[240px] w-full cursor-pointer rounded-3xl object-cover shadow-lg sm:h-[360px] md:h-[500px]"
              alt={`Apartment image ${index + 1}`}
              onClick={() => setSelectedImage(images[index])}
            />

            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-sm text-gray-800 shadow transition hover:bg-white sm:left-3 sm:h-11 sm:w-11"
            >
              ◀
            </button>

            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-sm text-gray-800 shadow transition hover:bg-white sm:right-3 sm:h-11 sm:w-11"
            >
              ▶
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
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

          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  setSelectedImage(image);
                }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={image}
                  alt={`Thumbnail ${i + 1}`}
                  className="h-24 w-full object-cover transition hover:scale-105 sm:h-28"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-gray-900 py-10 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Guest Reviews</h2>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-white/5 p-5 sm:p-6">
              <div className="mb-3 text-base sm:text-lg">⭐⭐⭐⭐⭐ - Fadime</div>
              <p className="text-sm leading-7 text-white/90 sm:text-base">
                The house was extremely clean and had been cleaned and arranged
                after we went out. The items in the kitchen were so beautiful that
                I would want to use them in my own home. The personal care products
                she put in the bathroom were very good and of good quality. I even
                found the shower gel at the supermarket and bought it when I left.
                The landlady was sweet, very helpful and made us feel very
                comfortable. The house was like a junction point of many places, so
                it could definitely be preferred as a location.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 p-5 sm:p-6">
              <div className="mb-3 text-base sm:text-lg">⭐⭐⭐⭐⭐ - Spyridoula</div>
              <p className="text-sm leading-7 text-white/90 sm:text-base">
                Everything was wonderful, the accommodation was spotlessly clean,
                beautiful and the bed very comfortable!
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 p-5 sm:p-6">
              <div className="mb-3 text-base sm:text-lg">⭐⭐⭐⭐⭐ - Hüseyin</div>
              <p className="text-sm leading-7 text-white/90 sm:text-base">
                Our hostess, Nancy, was a very sweet and helpful lady. His own house
                was also very close to the place so it was easy to reach in any
                situation. The rooms were very clean and tidy and everything was
                almost brand new. The cookies he left as a snack with his coffee
                were a very thoughtful move. It was also one of the most affordable
                facilities in terms of price. Considering its location in the middle
                of the island, it was easy to reach other areas.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://www.booking.com/hotel/gr/thanos-cozy-apartments.en-gb.html?aid=397594&label=gog235jc-10CAEoggI46AdIM1gDaFyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Av2Ij88GwAIB0gIkNjI4OTI5MGEtOGEzNy00ZTg5LWIwZTgtOWQxMTcwZTRlZjc42AIB4AIB&sid=68f00793dd2d449b60f30b808935e305&checkin=2026-05-04&checkout=2026-05-08&dest_id=14571543&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&soh=1&sr_order=popularity&srepoch=1776534673&srpvid=d3497d8676dc01f8&type=total&ucfs=1&#tab-reviews"
              className="block w-full rounded-xl bg-orange-500 px-5 py-3 text-center font-medium text-white transition hover:bg-orange-600 sm:w-auto sm:inline-block"
            >
              See Guest Reviews
            </a>
          </div>
        </div>
         <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Contact</h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            For bookings, availability, and more information, get in touch with us.
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-700 sm:text-base">
            <p>📞 +30 6974603592</p>
            <p>✉️ tcanancy@gmail.com</p>
            <p>🕒 Check-in: 15:00 | Check-out: 11:00</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      {/* <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Contact</h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            For bookings, availability, and more information, get in touch with us.
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-700 sm:text-base">
            <p>📞 +30 Χ</p>
            <p>✉️ Χ</p>
            <p>🕒 Check-in: 15:00 | Check-out: 11:00</p>
          </div>
        </div>
      </section> */}

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 z-10 rounded-full bg-white px-3 py-1 text-black shadow"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Full view"
              className="max-h-[85vh] w-full rounded-2xl bg-white object-contain sm:max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

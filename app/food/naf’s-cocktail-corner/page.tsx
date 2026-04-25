"use client";

const barPhotos = [
  "/bar1.jpg",
  "/bar2.jpg",
  "/bar3.jpg",
  "/bar4.jpg",
];

function CocktailBarSection() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* PHOTO CAROUSEL STYLE */}
      <div className="flex gap-2 overflow-x-auto p-2">
        {barPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Cocktail bar photo ${index + 1}`}
            className="h-64 min-w-[85%] rounded-xl object-cover sm:min-w-[48%] lg:min-w-[32%]"
          />
        ))}
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-purple-600">
              Cocktail Bar
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900">
              Sunset Cocktail Bar
            </h2>
          </div>

          <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
            ⭐ 4.8
          </span>
        </div>

        <p className="leading-relaxed text-gray-700">
          A stylish cocktail bar in Plomari, perfect for evening drinks,
          signature cocktails, relaxed music and a beautiful summer atmosphere.
          It is ideal for couples, friends and visitors who want to enjoy the
          nightlife of Lesvos in a more elegant and relaxed way.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-neutral-100 p-4">
            <p className="text-sm font-semibold text-neutral-900">
              Location
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Plomari, Lesvos
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-100 p-4">
            <p className="text-sm font-semibold text-neutral-900">
              Opening Hours
            </p>
            <p className="mt-1 text-sm text-gray-600">
              18:00 - 02:00
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-100 p-4">
            <p className="text-sm font-semibold text-neutral-900">
              Best For
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Cocktails & sunset
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-black p-5 text-white">
          <h3 className="mb-2 text-lg font-semibold">
            Why visit this bar?
          </h3>

          <ul className="space-y-2 text-sm text-gray-200">
            <li>🍸 Signature cocktails with local flavors</li>
            <li>🌅 Great atmosphere for sunset drinks</li>
            <li>🎵 Relaxed evening music</li>
            <li>👥 Perfect for couples and small groups</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className="flex-1 rounded-2xl bg-purple-600 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            View on Map
          </a>

          <a
            href="#"
            className="flex-1 rounded-2xl border border-neutral-300 px-5 py-4 text-center text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";

export default function RestaurantTravelGuideListing() {
  const restaurant = {
    name: "Taverna To Votsalo",
    category: "Traditional Greek Taverm",
    location: "Eftalou, Lesvos",
    rating: 5.0,
    reviews: 18,
    description: [
      <p>In the heart of Eftalou, just steps from the sea and the renowned thermal springs, The Taverna To Votsalo blends authentic flavors, traditional hospitality, and the relaxed spirit of summer in Eftalou. Rooted in local culinary tradition and focused on fresh, high-quality ingredients, it offers dishes that evoke the warmth of a family table by the water.</p>,
      <p>      </p>,
      <p>Fresh fish, seafood meze, homemade specialties, and beloved Greek classics are served in a setting defined by simplicity, authenticity, and seaside charm.   Whether you’re enjoying a leisurely lunch after a swim or a sunset dinner overlooking the sea, “Votsalo” is a welcoming destination for those seeking delicious food, beautiful views, and the timeless feeling of a Greek summer.</p>,
    ],
      heroImage:
        "/votsalo1.jpg",
    gallery: [
      "/votsalo1.jpg",
      "/votsalo2.jpg",
      "/votsalo7.jpg",
      "/votsalo4.jpg",
      "/votsalo5.jpg",
      "/votsalo6.jpg",
      "/votsalo8.jpg",
    ],
    highlights: [
      "Fresh seafood",
      "Local products",
      "Romantic atmosphere",
      "Family friendly",
    ],
    facilities: [
      "Free Wi-Fi",
      "Nearby parking",
      "Vegetarian options",
      "Local favourites",
    ],
    openingHours: "Daily: 12:00 – 21:30",
    phone: "+30 2253 072680",
    instagram: "@tovotsalo_eftalou",
  };

  return (
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <section className="relative h-[72vh] min-h-[520px] overflow-hidden">
          <img
              src={restaurant.heroImage}
              alt={`${restaurant.name} restaurant`}
              className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

          <div className="relative z-10 flex h-full items-end">
            <div className="mx-auto w-full max-w-6xl px-5 pb-12">
              <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-800 shadow-sm">
                {restaurant.category}
              </div>

              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
                {restaurant.name}
              </h1>

              <div className="mt-5 flex flex-wrap gap-4 text-white/95">
                <span>📍 {restaurant.location}</span>
                <span>
                ⭐ {restaurant.rating} · {restaurant.reviews} reviews
              </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold">ABOUT</h2>
              <p className="text-lg leading-8 text-stone-700">
                {restaurant.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {restaurant.highlights.map((item) => (
                    <span
                        key={item}
                        className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900"
                    >
                  {item}
                </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {restaurant.gallery.map((image, index) => (
                  <div key={image} className="overflow-hidden rounded-2xl shadow-sm">
                    <img
                        src={image}
                        alt={`Restaurant gallery ${index + 1}`}
                        className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
              ))}
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold">Why visit?</h2>
              <p className="mt-4 leading-7 text-stone-700">
                Perfect for travellers who want to discover local flavours in a
                beautiful setting. This restaurant is ideal for sunset dinners,
                relaxed lunches, family meals, and anyone looking for an authentic
                island dining experience.
              </p>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl bg-white p-7 shadow-md">
              <h2 className="text-2xl font-semibold">Plan your visit</h2>

              <div className="mt-5 space-y-4 text-stone-700">
                <div>
                  <p className="font-medium text-stone-900">🕒 Opening hours</p>
                  <p>{restaurant.openingHours}</p>
                </div>

                <div>
                  <p className="font-medium text-stone-900">☎️ Contact</p>
                  <p>{restaurant.phone}</p>
                </div>

                <div>
                  <p className="font-medium text-stone-900">📸 Instagram</p>
                  <p>{restaurant.instagram}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {/*<button className="rounded-xl bg-stone-900 px-5 py-4 text-base font-medium text-white transition hover:bg-stone-700">*/}
                  {/*  Book a table*/}
                  {/*</button></>*/}
                <Link
                    href="https://maps.app.goo.gl/8YfmkHVaHJr539hn8"
                    target="_blank"
                    className="inline-block rounded-xl border border-stone-300 bg-white px-5 py-4 text-base font-medium text-stone-900 transition hover:bg-stone-100"
                >
                  View location ↗
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">Facilities</h3>

              <div className="mt-5 grid gap-3">
                {restaurant.facilities.map((facility) => (
                    <div
                        key={facility}
                        className="rounded-xl bg-stone-100 px-4 py-3 text-stone-700"
                    >
                      ✓ {facility}
                    </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
  );
}

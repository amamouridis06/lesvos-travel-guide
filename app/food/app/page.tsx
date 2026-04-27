"use client";

import Link from "next/link";

const categories = [
  {
    title: "Beaches",
    desc: "Crystal-clear waters and the best seaside spots on the island.",
    img: "/beach.jpg",
    href: "/beaches",
  },
  {
    title: "Villages",
    desc: "Traditional settlements full of charm, history, and views.",
    img: "/village.jpg",
    href: "/villages",
  },
  {
    title: "Food",
    desc: "Taverns, local flavors, and authentic gastronomic experiences.",
    img: "/food.jpg",
    href: "/food",
  },
  {
    title: "Nature",
    desc: "Scenic landscapes, walking trails, and natural wonders.",
    img: "/nature.jpg",
    href: "/nature",
  },
];

const destinations = [
  {
    title: "Molyvos",
    subtitle: "A medieval village with timeless beauty",
    img: "/molivos.jpg",
    href: "/villages/molivos",
  },
  {
    title: "Skala Kallonis",
    subtitle: "Where tranquility meets the Aegean",
    img: "/skala-kallonis.jpeg",
    href: "/villages/skala-kallonis",
  },
  {
    title: "Plomari",
    subtitle: "Ouzo, sea, and local tradition",
    img: "/plomari2.jpg",
    href: "/villages/plomari",
  },
];

const hotels = [
  {
    name: "Thanos Cozy Appartment",
    area: "Molyvos",
    desc: "A beautiful apartment near the Skalla Kallonis Beach",
    img: "/thanosbed2.jpg",
    href: "/hotels/thanos-cozy-appartments",
  },
  // {
  //   name: "Recommended Hotel 2",
  //   area: "Mytilene",
  //   desc: "Comfortable accommodation in a great location for exploring Lesvos.",
  //   img: "/hotel2.jpg",
  //   href: "/hotels/hotel-2",
  // },
  // {
  //   name: "Recommended Hotel 3",
  //   area: "Petra",
  //   desc: "A relaxing place near the sea, ideal for peaceful holidays.",
  //   img: "/hotel3.jpg",
  //   href: "/hotels/hotel-3",
  // },
];

const restaurants = [
  {
    name: "To Limanaki ton Pamfilon",
    area: "Skala Pamfilon",
    desc: "Fresh seafood and local flavors.",
    img: "/limanaki_pamf1.jpg",
    href: "/food/limanaki-pamfilon",
  },
  {
    name: "Tropicana - Platanos",
    area: "Molivos",
    desc: "A traditional restaurant-cafe based in Molyvos",
    img: "/tropicana1.jpg",
    href: "/food/tropicana-platanos",
  },
  {
    name: "Tryfon",
    area: "Kalloni",
    desc: "A welcoming place for authentic dishes and local wine.",
    img: "/tryfon7.jpg",
    href: "/food/tryfon",
  },
];

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-2xl md:mb-10">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-700">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 text-base leading-relaxed text-neutral-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-900">
      <section className="relative isolate min-h-[90vh] bg-[url('/plomari2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
              Lesvos Travel Guide
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Discover Lesvos through places, flavors, and authentic experiences
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Explore villages, beaches, local gastronomy, and handpicked stays
              with a travel guide designed to help you experience the island in
              a more meaningful way.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div>
                <Link
                  href="/planner"
                  className="inline-flex items-center rounded-xl bg-yellow-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-700"
                >
                  Start planning
                </Link>
              </div>

              <div>
                <Link
                  href="/villages"
                  className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Explore destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <SectionHeader
          eyebrow="Explore by category"
          title="Find the side of Lesvos that fits your trip"
          description="Browse the island through curated categories and discover what to see, where to go, and what not to miss."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Trip planner"
              title="Build a realistic itinerary for your stay"
              description="Tell us where you are staying and how many days you have, and discover a travel plan that matches your pace, area, and interests."
            />

            <div>
              <Link
                href="/planner"
                className="inline-flex items-center rounded-xl bg-neutral-900 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Start planning your trip
              </Link>
            </div>
          </div>

          <div className="relative h-72 overflow-hidden rounded-[28px] shadow-2xl transition hover:-translate-y-1 md:h-[420px]">
            <img
              src="/map-lesvos.jpg"
              alt="Map of Lesvos"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <SectionHeader
          eyebrow="Top destinations"
          title="Places you should definitely have on your list"
          description="From iconic villages to peaceful coastal areas, these destinations are among the most loved places on the island."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place) => (
            <div key={place.title}>
              <Link
                href={place.href}
                className="group relative block overflow-hidden rounded-[24px]"
              >
                <img
                  src={place.img}
                  alt={place.title}
                  className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-2xl font-semibold">{place.title}</h3>
                  <p className="mt-1 text-sm text-white/85">{place.subtitle}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Recommended stays"
            title="Handpicked hotels for a comfortable stay"
            description="Selected places to stay that combine location, style, and atmosphere for travelers visiting Lesvos."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {hotels.map((hotel) => (
              <div key={hotel.name}>
                <Link
                  href={hotel.href}
                  className="group block overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-sm font-medium text-yellow-700">
                      {hotel.area}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                      {hotel.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {hotel.desc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Recommended dining"
            title="Restaurants worth adding to your trip"
            description="A curated selection of places where local flavors, fresh ingredients, and island hospitality come together."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name}>
                <Link
                  href={restaurant.href}
                  className="group block overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={restaurant.img}
                      alt={restaurant.name}
                      className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-sm font-medium text-yellow-700">
                      {restaurant.area}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                      {restaurant.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {restaurant.desc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

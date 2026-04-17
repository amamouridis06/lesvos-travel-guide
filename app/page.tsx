"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    name: "Recommended Hotel 1",
    area: "Molyvos",
    desc: "A beautiful stay with sea views and authentic island atmosphere.",
    img: "/hotel1.jpg",
    href: "/hotels/hotel-1",
  },
  {
    name: "Recommended Hotel 2",
    area: "Mytilene",
    desc: "Comfortable accommodation in a great location for exploring Lesvos.",
    img: "/hotel2.jpg",
    href: "/hotels/hotel-2",
  },
  {
    name: "Recommended Hotel 3",
    area: "Petra",
    desc: "A relaxing place near the sea, ideal for peaceful holidays.",
    img: "/hotel3.jpg",
    href: "/hotels/hotel-3",
  },
];

const restaurants = [
  {
    name: "To Limanaki ton Pamfilon",
    area: "Skala Pamfilon",
    desc: "Fresh seafood and local flavors in a beautiful seaside setting.",
    img: "/limanaki_pamf1.jpg",
    href: "/food/limanaki_pamfilon",
  },
  {
    name: "Pallas Cafe - Grill",
    area: "Mesotopos",
    desc: "Traditional recipes with quality ingredients and warm hospitality.",
    img: "/pallas.jpg",
    href: "/food/pallas-cafe-grill",
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
    <motion.div
      className="mb-8 md:mb-10 max-w-2xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-700">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 text-base leading-relaxed text-neutral-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-900">
      <section className="relative isolate min-h-[90vh] bg-[url('/plomari2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Lesvos Travel Guide
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover Lesvos through places, flavors, and authentic experiences
            </motion.h1>

            <motion.p
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore villages, beaches, local gastronomy, and handpicked stays
              with a travel guide designed to help you experience the island in
              a more meaningful way.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/planner"
                  className="inline-flex items-center rounded-xl bg-yellow-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-yellow-700"
                >
                  Start planning
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/villages"
                  className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Explore destinations
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <SectionHeader
          eyebrow="Explore by category"
          title="Find the side of Lesvos that fits your trip"
          description="Browse the island through curated categories and discover what to see, where to go, and what not to miss."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={item.href}
                className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="h-52 w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4 }}
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
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Trip planner"
              title="Build a realistic itinerary for your stay"
              description="Tell us where you are staying and how many days you have, and discover a travel plan that matches your pace, area, and interests."
            />

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/planner"
                className="inline-flex items-center rounded-xl bg-neutral-900 px-7 py-3.5 font-semibold text-white transition hover:bg-neutral-800"
              >
                Start planning your trip
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-72 overflow-hidden rounded-[28px] shadow-2xl md:h-[420px]"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
          >
            <img
              src="/map-lesvos.jpg"
              alt="Map of Lesvos"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <SectionHeader
          eyebrow="Top destinations"
          title="Places you should definitely have on your list"
          description="From iconic villages to peaceful coastal areas, these destinations are among the most loved places on the island."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place, index) => (
            <motion.div
              key={place.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={place.href}
                className="group relative block overflow-hidden rounded-[24px]"
              >
                <motion.img
                  src={place.img}
                  alt={place.title}
                  className="h-72 w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-2xl font-semibold">{place.title}</h3>
                  <p className="mt-1 text-sm text-white/85">{place.subtitle}</p>
                </div>
              </Link>
            </motion.div>
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
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={hotel.href}
                  className="group block overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={hotel.img}
                      alt={hotel.name}
                      className="h-56 w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
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
              </motion.div>
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
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={restaurant.href}
                  className="group block overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={restaurant.img}
                      alt={restaurant.name}
                      className="h-56 w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

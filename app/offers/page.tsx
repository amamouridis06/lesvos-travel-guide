"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  Utensils,
  BedDouble,
  Waves,
  HeartPulse,
} from "lucide-react";

const categories = [
  "All",
  "Stay",
  "Eat & Drink",
  "Experiences",
  "Wellness",
];

const offers = [
  {
    id: 1,
    category: "Stay",
    title: "Stay 4 nights, pay for 3",
    business: "Aegean Blue Suites",
    location: "Oia, Santorini",
    image: "/images/offers/hotel.jpg",
    badge: "Exclusive",
    validUntil: "30 Sep 2026",
    description:
      "Enjoy an extra night on us when you book a four-night stay.",
    icon: BedDouble,
  },
  {
    id: 2,
    category: "Eat & Drink",
    title: "Complimentary dessert",
    business: "Thalassa Restaurant",
    location: "Fira, Santorini",
    image: "/images/offers/restaurant.jpg",
    badge: "Special Offer",
    validUntil: "15 Oct 2026",
    description:
      "Receive a complimentary dessert with every dinner reservation.",
    icon: Utensils,
  },
  {
    id: 3,
    category: "Experiences",
    title: "10% off sunset cruise",
    business: "Caldera Sailing",
    location: "Vlychada Marina",
    image: "/images/offers/cruise.jpg",
    badge: "Limited Time",
    validUntil: "20 Sep 2026",
    description:
      "Discover the caldera at sunset with a special booking benefit.",
    icon: Waves,
  },
  {
    id: 4,
    category: "Wellness",
    title: "Spa ritual for two",
    business: "Aura Wellness",
    location: "Imerovigli",
    image: "/images/offers/spa.jpg",
    badge: "Exclusive",
    validUntil: "10 Oct 2026",
    description:
      "Book a couples treatment and enjoy a complimentary welcome ritual.",
    icon: HeartPulse,
  },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[520px]">
          <img
            src="/images/offers/hero.jpg"
            alt="Special travel offers"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* only subtle bottom gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

          <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-16 md:px-10 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-white"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Curated for your trip
              </div>

              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Special Offers
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                Discover selected offers from stays, restaurants,
                experiences and local businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        {/* FILTERS */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                index === 0
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FEATURED OFFER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[380px]">
              <img
                src="/images/offers/featured.jpg"
                alt="Featured offer"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950">
                Featured
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/50">
                Exclusive stay
              </p>

              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Stay longer. Experience more.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-white/60">
                Book four nights and enjoy your fourth night complimentary,
                including breakfast and a welcome drink on arrival.
              </p>

              <div className="mt-7 flex flex-wrap gap-5 text-sm text-white/65">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Santorini
                </span>

                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Valid until 30 Sep 2026
                </span>
              </div>

              <button className="mt-9 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">
                View offer
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* TITLE */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
              Discover
            </p>

            <h2 className="text-3xl font-semibold tracking-tight">
              Current offers
            </h2>
          </div>

          <button className="hidden items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 md:flex">
            View all
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* OFFER GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <motion.article
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.business}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
                    {offer.badge}
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    {offer.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {offer.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {offer.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="font-medium text-slate-900">
                      {offer.business}
                    </p>

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                      <MapPin className="h-4 w-4" />
                      {offer.location}
                    </div>

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                      <CalendarDays className="h-4 w-4" />
                      Valid until {offer.validUntil}
                    </div>
                  </div>

                  <button className="mt-6 flex w-full items-center justify-between rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                    View offer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
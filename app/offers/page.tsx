"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
  Tag,
} from "lucide-react";

type OfferCategory =
    | "Stay"
    | "Eat & Drink"
    | "Experiences"
    | "Wellness";

type Offer = {
  id: number;
  category: OfferCategory;
  title: string;
  business: string;
  location: string;
  image: string;
  badge?: string;
  validUntil: string;
  description: string;
  featured?: boolean;
  icon: React.ElementType;
};

const categories = [
  "All",
  "Stay",
  "Eat & Drink",
  "Experiences",
  "Wellness",
] as const;

const offers: Offer[] = [
  {
    id: 1,
    category: "Stay",
    title: "Stay 4 nights, pay for 3",
    business: "Aegean Blue Suites",
    location: "Oia, Santorini",
    image: "/images/offers/hotel.jpg",
    badge: "Exclusive",
    validUntil: "2026-09-30",
    description:
        "Stay a little longer and enjoy your fourth night complimentary.",
    featured: true,
    icon: BedDouble,
  },
  {
    id: 2,
    category: "Eat & Drink",
    title: "Dinner with a complimentary dessert",
    business: "Thalassa Restaurant",
    location: "Fira, Santorini",
    image: "/images/offers/restaurant.jpg",
    badge: "Special Offer",
    validUntil: "2026-10-15",
    description:
        "Reserve your dinner and enjoy a complimentary signature dessert.",
    icon: Utensils,
  },
  {
    id: 3,
    category: "Experiences",
    title: "10% off sunset sailing",
    business: "Caldera Sailing",
    location: "Vlychada Marina",
    image: "/images/offers/cruise.jpg",
    badge: "Limited Time",
    validUntil: "2026-09-20",
    description:
        "Experience the caldera at sunset with an exclusive booking benefit.",
    icon: Waves,
  },
  {
    id: 4,
    category: "Wellness",
    title: "Couples spa ritual",
    business: "Aura Wellness",
    location: "Imerovigli, Santorini",
    image: "/images/offers/spa.jpg",
    badge: "Exclusive",
    validUntil: "2026-10-10",
    description:
        "Book a couples treatment and receive a complimentary welcome ritual.",
    icon: HeartPulse,
  },
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function isOfferActive(validUntil: string) {
  const endDate = new Date(`${validUntil}T23:59:59`);
  return endDate >= new Date();
}

export default function OffersPage() {
  const [activeCategory, setActiveCategory] =
      useState<(typeof categories)[number]>("All");

  const activeOffers = useMemo(() => {
    return offers.filter((offer) => isOfferActive(offer.validUntil));
  }, []);

  const featuredOffer = activeOffers.find((offer) => offer.featured);

  const filteredOffers = useMemo(() => {
    return activeOffers.filter((offer) => {
      if (offer.featured) return false;

      if (activeCategory === "All") {
        return true;
      }

      return offer.category === activeCategory;
    });
  }, [activeCategory, activeOffers]);

  return (
      <main className="min-h-screen bg-[#f7f6f2] text-[#111827]">
        {/* HERO */}
        <section className="relative h-[560px] overflow-hidden">
          <Image
              src="/images/offers/hero.jpg"
              alt="Selected travel offers"
              fill
              priority
              className="object-cover"
          />

          {/* subtle overlay only for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/5" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 md:px-10 lg:px-12 lg:pb-20">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl text-white"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Selected offers
              </div>

              <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                More from your
                <span className="block font-light italic">journey.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
                Discover curated benefits from selected stays, restaurants,
                experiences and local businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12 lg:py-20">
          {/* INTRO + FILTERS */}
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Explore
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Offers worth discovering
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
                Special benefits selected from businesses across your
                destination.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                    <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all ${
                            active
                                ? "bg-[#111827] text-white shadow-sm"
                                : "border border-black/10 bg-white text-slate-600 hover:border-black/20 hover:text-slate-950"
                        }`}
                    >
                      {category}
                    </button>
                );
              })}
            </div>
          </div>

          {/* FEATURED */}
          {featuredOffer && activeCategory === "All" && (
              <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-20 overflow-hidden rounded-[30px] bg-[#111827] text-white shadow-[0_25px_70px_rgba(15,23,42,0.16)]"
              >
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative min-h-[390px] overflow-hidden lg:min-h-[500px]">
                    <Image
                        src={featuredOffer.image}
                        alt={featuredOffer.business}
                        fill
                        className="object-cover transition duration-700 hover:scale-[1.02]"
                    />

                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      Featured offer
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                      {featuredOffer.category}
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] md:text-4xl lg:text-5xl">
                      {featuredOffer.title}
                    </h3>

                    <p className="mt-5 max-w-lg text-base leading-7 text-white/60">
                      {featuredOffer.description}
                    </p>

                    <div className="mt-8 space-y-3 border-t border-white/10 pt-7">
                      <p className="text-base font-medium">
                        {featuredOffer.business}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <MapPin className="h-4 w-4" />
                        {featuredOffer.location}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <CalendarDays className="h-4 w-4" />
                        Valid until {formatDate(featuredOffer.validUntil)}
                      </div>
                    </div>

                    <button
                        type="button"
                        className="group mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
                    >
                      View offer

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
          )}

          {/* CURRENT OFFERS */}
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {activeCategory === "All" ? "Current offers" : activeCategory}
              </p>

              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {activeCategory === "All"
                    ? "Discover more"
                    : `${activeCategory} offers`}
              </h2>
            </div>

            <p className="text-sm text-slate-400">
              {filteredOffers.length}{" "}
              {filteredOffers.length === 1 ? "offer" : "offers"}
            </p>
          </div>

          {/* GRID */}
          {filteredOffers.length > 0 ? (
              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {filteredOffers.map((offer, index) => {
                  const Icon = offer.icon;

                  return (
                      <motion.article
                          key={offer.id}
                          initial={{ opacity: 0, y: 25 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.06,
                          }}
                          className="group overflow-hidden rounded-[26px] border border-black/[0.06] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                      >
                        {/* IMAGE */}
                        <div className="relative h-[270px] overflow-hidden">
                          <Image
                              src={offer.image}
                              alt={offer.business}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          />

                          {offer.badge && (
                              <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
                                {offer.badge}
                              </div>
                          )}

                          <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 shadow-md">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                            <Tag className="h-3.5 w-3.5" />
                            {offer.category}
                          </div>

                          <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-slate-950">
                            {offer.title}
                          </h3>

                          <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                            {offer.description}
                          </p>

                          <div className="mt-6 border-t border-slate-100 pt-5">
                            <p className="font-medium text-slate-900">
                              {offer.business}
                            </p>

                            <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                              <MapPin className="h-4 w-4 shrink-0" />
                              {offer.location}
                            </div>

                            <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                              <CalendarDays className="h-4 w-4 shrink-0" />
                              Valid until {formatDate(offer.validUntil)}
                            </div>
                          </div>

                          <button
                              type="button"
                              className="group/button mt-6 flex w-full items-center justify-between rounded-xl bg-[#111827] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                          >
                            View offer

                            <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                          </button>
                        </div>
                      </motion.article>
                  );
                })}
              </div>
          ) : (
              <div className="rounded-[28px] border border-dashed border-slate-200 bg-white px-6 py-20 text-center">
                <Sparkles className="mx-auto h-7 w-7 text-slate-300" />

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  No offers available
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  There are currently no active offers in this category.
                </p>
              </div>
          )}
        </section>
      </main>
  );
}
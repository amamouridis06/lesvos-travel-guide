"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  Binoculars,
  Camera,
  Car,
  Check,
  ChevronDown,
  Clock,
  Compass,
  Heart,
  Hotel,
  Info,
  MapPin,
  Martini,
  Mountain,
  Navigation,
  Route,
  Sailboat,
  ShieldCheck,
  ShipWheel,
  Sparkles,
  Star,
  Sun,
  Umbrella,
  Waves,
  Wind,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

type IconType = LucideIcon;

type FeatureCard = {
  icon: IconType;
  title: string;
  description: string;
};

type QuickInfoItem = {
  icon: IconType;
  label: string;
  value: string;
  detail: string;
};

type ItineraryStep = {
  time: string;
  title: string;
  description: string;
};

type GalleryItem = {
  src: string;
  alt: string;
  className: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

const OLIVE = "#55613A";
const OLIVE_DARK = "#343B24";
const OLIVE_LIGHT = "#EEF0E4";
const SAND = "#F7F6F0";
const CREAM = "#FBFAF6";
const GOLD = "#C8A951";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const heroBadges = [
  "Ionian Coast",
  "Boat Access",
  "Viewpoint",
  "Crystal Waters",
];

const quickInfo: QuickInfoItem[] = [
  {
    icon: Clock,
    label: "Best time",
    value: "May - September",
    detail: "Early morning for fewer crowds",
  },
  {
    icon: Sun,
    label: "Water temp",
    value: "24°C - 27°C",
    detail: "Warmest from July to September",
  },
  {
    icon: Route,
    label: "Access",
    value: "Boat / Viewpoint",
    detail: "Beach and viewpoint are separate",
  },
  {
    icon: Navigation,
    label: "Region",
    value: "Zakynthos",
    detail: "Ionian Islands, Greece",
  },
];

const features: FeatureCard[] = [
  {
    icon: Waves,
    title: "Turquoise waters",
    description:
        "Bright Ionian blue water with a dramatic contrast against white limestone cliffs.",
  },
  {
    icon: Camera,
    title: "Iconic scenery",
    description:
        "One of the most recognizable coastal scenes in Greece, perfect for editorial travel photography.",
  },
  {
    icon: Sailboat,
    title: "Boat experience",
    description:
        "The beach shoreline is reached by sea, making the arrival feel like part of the destination.",
  },
  {
    icon: Mountain,
    title: "Cliff viewpoint",
    description:
        "A separate panoramic viewpoint gives you the famous top-down angle of the cove.",
  },
  {
    icon: Umbrella,
    title: "Beach essentials",
    description:
        "Bring water, sunscreen and comfortable sandals because facilities are limited near the cove.",
  },
  {
    icon: ShieldCheck,
    title: "Plan safely",
    description:
        "Check local sea conditions and access rules before visiting, especially during windy days.",
  },
];

const itinerary: ItineraryStep[] = [
  {
    time: "08:00",
    title: "Start early",
    description:
        "Leave before the main rush and aim for calmer morning light and sea conditions.",
  },
  {
    time: "09:30",
    title: "Boat approach",
    description:
        "Arrive by boat and enjoy the coastline before stepping into the cove.",
  },
  {
    time: "11:00",
    title: "Swim & photos",
    description:
        "Use the quieter part of the morning for swimming and photography before peak traffic.",
  },
  {
    time: "17:30",
    title: "Viewpoint moment",
    description:
        "Visit the viewpoint separately for the cinematic panorama and softer late-day colors.",
  },
];

const gallery: GalleryItem[] = [
  {
    src: "/images/beaches/navagio-1.jpg",
    alt: "Navagio Beach aerial view",
    className: "lg:col-span-2 lg:row-span-2 h-[320px] lg:h-[620px]",
  },
  {
    src: "/images/beaches/navagio-2.jpg",
    alt: "Navagio Beach cliffs",
    className: "h-[300px]",
  },
  {
    src: "/images/beaches/navagio-3.jpg",
    alt: "Navagio Beach sea",
    className: "h-[300px]",
  },
  {
    src: "/images/beaches/navagio-4.jpg",
    alt: "Navagio Beach boat",
    className: "h-[300px]",
  },
  {
    src: "/images/beaches/navagio-5.jpg",
    alt: "Navagio Beach detail",
    className: "h-[300px]",
  },
];

const experiences = [
  {
    title: "Private boat tour",
    description: "A polished way to explore the coast, caves and hidden swimming spots.",
    meta: "Best for couples",
    icon: Sailboat,
  },
  {
    title: "Viewpoint drive",
    description: "A scenic route for the classic panorama above the limestone cliffs.",
    meta: "Best near sunset",
    icon: Car,
  },
  {
    title: "Coastal photography",
    description: "Strong contrast, clean color palette and dramatic natural textures.",
    meta: "Best in morning light",
    icon: Camera,
  },
];

const nearby = [
  {
    title: "Cliff Viewpoint",
    category: "View",
    distance: "Separate access",
  },
  {
    title: "Blue Caves",
    category: "Boat stop",
    distance: "Nearby coast",
  },
  {
    title: "Agios Nikolaos Port",
    category: "Departure point",
    distance: "Popular option",
  },
];

const reviews = [
  {
    name: "Elena",
    country: "Athens",
    rating: "5.0",
    text: "The color of the water is unreal. Go early and keep the viewpoint as a separate stop.",
  },
  {
    name: "Marco",
    country: "Milan",
    rating: "4.9",
    text: "The boat approach makes the whole visit feel cinematic. The cliffs are incredible.",
  },
  {
    name: "Nadia",
    country: "Paris",
    rating: "4.8",
    text: "Beautiful place, but planning matters. Early morning was the right choice.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Can I drive directly to the beach?",
    answer:
        "No. The shoreline is generally reached by boat. The famous viewpoint is a separate visit by road.",
  },
  {
    question: "When is the best time to visit?",
    answer:
        "May to September is the classic beach season. For a calmer experience, aim for early morning.",
  },
  {
    question: "Is it good for families?",
    answer:
        "It can be, but boat access and limited facilities mean you should plan carefully with children.",
  },
  {
    question: "Do I need to book a boat tour?",
    answer:
        "Booking ahead is recommended in high season, especially if you want a better time slot.",
  },
];

function SectionLabel({
                        eyebrow,
                        title,
                        description,
                      }: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
      <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
      >
        <motion.p
            variants={fadeUp}
            className="text-xs font-black uppercase tracking-[0.32em]"
            style={{ color: OLIVE }}
        >
          {eyebrow}
        </motion.p>

        <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-black tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h2>

        {description ? (
            <motion.p
                variants={fadeUp}
                className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg"
            >
              {description}
            </motion.p>
        ) : null}
      </motion.div>
  );
}

function IconBubble({
                      icon: Icon,
                      dark = false,
                    }: {
  icon: IconType;
  dark?: boolean;
}) {
  return (
      <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
              dark ? "bg-white/10" : "bg-[#EEF0E4]"
          }`}
      >
        <Icon
            size={22}
            className={dark ? "text-[#C9D3A5]" : ""}
            style={dark ? undefined : { color: OLIVE }}
        />
      </div>
  );
}

function HeroSection() {
  return (
      <section className="relative min-h-[88vh] px-4 py-4 sm:px-6 sm:py-5 lg:px-10 lg:py-6 xl:px-14">
        <div className="relative mx-auto h-[calc(88vh-2rem)] max-w-[1540px] overflow-hidden rounded-[2rem] shadow-sm sm:rounded-[2.5rem] lg:h-[calc(88vh-3rem)]">
          <motion.img
              src="/images/beaches/navagio.jpg"
              alt="Navagio Beach"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.14 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/72 to-white/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.65),transparent_35%)]" />

          <motion.div
              className="relative z-10 flex h-full items-end lg:items-center"
              initial="hidden"
              animate="show"
              variants={container}
          >
            <div className="max-w-5xl px-5 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-0 xl:px-20">
              <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.26em] shadow-sm backdrop-blur sm:text-xs"
                  style={{ color: OLIVE }}
              >
                <ShipWheel size={16} />
                Luxury Beach Guide
              </motion.div>

              <motion.h1
                  variants={fadeUp}
                  className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.07em] text-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              >
                Navagio
                <span className="block" style={{ color: OLIVE }}>
                Beach
              </span>
              </motion.h1>

              <motion.p
                  variants={fadeUp}
                  className="mt-7 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg lg:text-xl lg:leading-9"
              >
                A cinematic Ionian escape with limestone cliffs, turquoise waters
                and one of Greece&apos;s most recognizable coastal views.
              </motion.p>

              <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <a
                    href="#plan"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-black text-white transition hover:scale-[1.02]"
                >
                  Plan your visit
                  <ArrowRight size={18} />
                </a>

                <a
                    href="#gallery"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-6 py-4 text-sm font-black text-black shadow-sm backdrop-blur transition hover:scale-[1.02]"
                >
                  View gallery
                </a>
              </motion.div>

              <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-wrap gap-3"
              >
                {heroBadges.map((badge) => (
                    <span
                        key={badge}
                        className="rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-neutral-800 backdrop-blur"
                    >
                  {badge}
                </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
              className="absolute bottom-6 right-6 z-20 hidden w-[360px] rounded-[2rem] bg-white/88 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/60 lg:block xl:w-[390px]"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.75 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                    className="text-xs font-black uppercase tracking-[0.26em]"
                    style={{ color: OLIVE }}
                >
                  At a glance
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">
                  Trip essentials
                </h3>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-[#F5F0D8] px-3 py-2 text-sm font-black">
                <Star size={16} className="fill-[#C8A951] text-[#C8A951]" />
                4.9
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {quickInfo.slice(0, 3).map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <IconBubble icon={icon} />
                    <div>
                      <p className="text-sm font-black text-black">{label}</p>
                      <p className="text-sm text-neutral-600">{value}</p>
                    </div>
                  </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
}

function StatsStrip() {
  return (
      <section className="mx-auto max-w-[1540px] px-4 py-6 sm:px-6 lg:px-10 xl:px-14">
        <motion.div
            className="grid gap-3 rounded-[2rem] bg-black p-4 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
        >
          {[
            ["01", "Island", "Zakynthos"],
            ["02", "Experience", "Boat & viewpoint"],
            ["03", "Season", "May to September"],
            ["04", "Mood", "Cinematic coast"],
          ].map(([number, label, value]) => (
              <motion.div
                  variants={fadeUp}
                  key={label}
                  className="rounded-[1.5rem] bg-white/7 p-5 ring-1 ring-white/10"
              >
                <p className="text-sm font-black text-[#C9D3A5]">{number}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                  {label}
                </p>
                <p className="mt-1 text-lg font-black">{value}</p>
              </motion.div>
          ))}
        </motion.div>
      </section>
  );
}

function FeatureSection() {
  return (
      <section className="mx-auto max-w-[1540px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-14">
        <div className="mb-8 flex flex-col justify-between gap-6 lg:mb-10 lg:flex-row lg:items-end">
          <SectionLabel
              eyebrow="Highlights"
              title="A beach guide designed for better planning."
              description="Everything is structured around what travelers actually need: access, timing, views, comfort and safety."
          />

          <motion.div
              className="hidden rounded-full bg-[#EEF0E4] px-5 py-3 text-sm font-black lg:block"
              style={{ color: OLIVE_DARK }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
          >
            Olive luxury theme
          </motion.div>
        </div>

        <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
        >
          {features.map(({ icon, title, description }) => (
              <motion.article
                  key={title}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className="group rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 transition lg:p-8"
              >
                <IconBubble icon={icon} />

                <h3 className="mt-6 text-xl font-black tracking-tight text-black lg:text-2xl">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-600 lg:text-base">
                  {description}
                </p>

                <div
                    className="mt-7 h-1.5 w-12 rounded-full transition-all group-hover:w-20"
                    style={{ backgroundColor: OLIVE }}
                />
              </motion.article>
          ))}
        </motion.div>
      </section>
  );
}

function OverviewSection() {
  return (
      <section
          id="plan"
          className="mx-auto grid max-w-[1540px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_430px] lg:px-10 lg:py-16 xl:gap-14 xl:px-14"
      >
        <div className="space-y-8">
          <motion.div
              className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 lg:rounded-[2.5rem] lg:p-10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
          >
            <motion.p
                variants={fadeUp}
                className="text-xs font-black uppercase tracking-[0.32em]"
                style={{ color: OLIVE }}
            >
              Overview
            </motion.p>

            <motion.h2
                variants={fadeUp}
                className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.045em] text-black sm:text-4xl lg:text-5xl"
            >
              Built for travelers who want the best view, not just another beach.
            </motion.h2>

            <motion.p
                variants={fadeUp}
                className="mt-6 text-base leading-8 text-neutral-700 lg:text-lg lg:leading-9"
            >
              Navagio Beach combines raw natural drama with a polished travel
              experience. Visit by boat for the shoreline, then plan a separate
              viewpoint stop for the famous top-down panorama. The best visit is
              not rushed: split the day, move early and keep your plans flexible.
            </motion.p>

            <motion.div
                variants={fadeUp}
                className="mt-8 grid gap-4 sm:grid-cols-3"
            >
              {[
                ["Best for", "Photography & views"],
                ["Travel style", "Boat day trip"],
                ["Planning level", "Medium"],
              ].map(([label, value]) => (
                  <div
                      key={label}
                      className="rounded-[1.5rem] bg-[#F7F6F0] p-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                      {label}
                    </p>
                    <p className="mt-2 font-black text-black">{value}</p>
                  </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
              className="grid gap-5 sm:grid-cols-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
          >
            {itinerary.map((step) => (
                <motion.div
                    key={step.time}
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-[2rem] bg-[#ECEEDF] p-6 ring-1 ring-black/5 lg:p-7"
                >
              <span
                  className="text-3xl font-black tracking-tight"
                  style={{ color: OLIVE }}
              >
                {step.time}
              </span>

                  <h3 className="mt-4 text-xl font-black text-black">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-700">
                    {step.description}
                  </p>
                </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.aside
            className="space-y-6 lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
        >
          <div className="rounded-[2rem] bg-black p-6 text-white shadow-xl sm:p-8 lg:rounded-[2.5rem]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C9D3A5]">
              Trip Details
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-tight lg:text-3xl">
              Plan your visit
            </h3>

            <div className="mt-7 space-y-5">
              {quickInfo.map(({ icon, label, value, detail }) => (
                  <div key={label} className="flex gap-4">
                    <IconBubble icon={icon} dark />

                    <div>
                      <p className="font-black">{label}</p>
                      <p className="text-sm text-white/70">{value}</p>
                      <p className="mt-1 text-xs text-white/40">{detail}</p>
                    </div>
                  </div>
              ))}
            </div>

            <motion.button
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C9D3A5] py-4 font-black text-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
            >
              View on Map
              <ArrowRight size={18} />
            </motion.button>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-7">
            <div className="flex items-center gap-3">
              <IconBubble icon={Info} />
              <h3 className="text-xl font-black">Local note</h3>
            </div>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              For a smoother trip, separate your beach visit from the viewpoint.
              They are different experiences and need different timing.
            </p>
          </div>
        </motion.aside>
      </section>
  );
}

function GallerySection() {
  return (
      <section
          id="gallery"
          className="mx-auto max-w-[1540px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-14"
      >
        <div className="mb-8 flex flex-col justify-between gap-6 lg:mb-10 lg:flex-row lg:items-end">
          <SectionLabel
              eyebrow="Gallery"
              title="A coastline made for editorial travel photography."
              description="Use a mix of aerial-style images, close water details and boat approach shots to make the page feel premium."
          />

          <a
              href="#experiences"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-black text-white"
          >
            Explore experiences
            <ArrowRight size={17} />
          </a>
        </div>

        <motion.div
            className="grid auto-rows-auto gap-5 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={container}
        >
          {gallery.map((item) => (
              <motion.figure
                  key={item.src}
                  variants={scaleIn}
                  whileHover={{ scale: 1.015 }}
                  className={`${item.className} overflow-hidden rounded-[2rem] bg-neutral-200 shadow-sm ring-1 ring-black/5 lg:rounded-[2.5rem]`}
              >
                <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </motion.figure>
          ))}
        </motion.div>
      </section>
  );
}

function ExperiencesSection() {
  return (
      <section
          id="experiences"
          className="mx-auto max-w-[1540px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-14"
      >
        <div className="rounded-[2rem] bg-[#202416] p-6 text-white sm:p-8 lg:rounded-[2.75rem] lg:p-10 xl:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionLabel
                eyebrow="Experiences"
                title="Turn the beach visit into a complete coastal day."
                description="The strongest itinerary combines the boat approach, the viewpoint and a slower stop somewhere nearby."
            />

            <motion.div
                className="grid gap-4 sm:grid-cols-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
            >
              {experiences.map(({ icon: Icon, title, description, meta }) => (
                  <motion.article
                      key={title}
                      variants={fadeUp}
                      className="rounded-[1.7rem] bg-white/8 p-5 ring-1 ring-white/10 backdrop-blur"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9D3A5]">
                      <Icon size={20} className="text-black" />
                    </div>

                    <h3 className="mt-5 font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {description}
                    </p>
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#C9D3A5]">
                      {meta}
                    </p>
                  </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
  );
}

function NearbySection() {
  return (
      <section className="mx-auto max-w-[1540px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-14">
        <div className="grid gap-8 lg:grid-cols-[430px_1fr] lg:items-start">
          <SectionLabel
              eyebrow="Nearby"
              title="Useful stops around the coast."
              description="Add these as cards or connect them later to your real database."
          />

          <motion.div
              className="grid gap-5 md:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
          >
            {nearby.map((item) => (
                <motion.article
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <IconBubble icon={MapPin} />
                    <span className="rounded-full bg-[#EEF0E4] px-3 py-1 text-xs font-black text-[#343B24]">
                  {item.category}
                </span>
                  </div>

                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm text-neutral-600">{item.distance}</p>
                </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
  );
}

function MapSection() {
  return (
      <section className="mx-auto max-w-[1540px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-14">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5 lg:rounded-[2.75rem]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
              <p
                  className="text-xs font-black uppercase tracking-[0.32em]"
                  style={{ color: OLIVE }}
              >
                Location
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Beach and viewpoint are not the same stop.
              </h2>

              <p className="mt-5 text-base leading-8 text-neutral-600">
                The page design should make this clear. Show the boat-access beach
                and the road-access viewpoint as two separate planning points.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  ["Beach access", "By boat, depending on sea conditions."],
                  ["Viewpoint access", "By road, separate from the shoreline."],
                  ["Best planning", "Do both, but do not rush them together."],
                ].map(([title, text]) => (
                    <div key={title} className="flex gap-3">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF0E4]">
                        <Check size={14} style={{ color: OLIVE }} />
                      </div>
                      <div>
                        <p className="font-black">{title}</p>
                        <p className="text-sm text-neutral-600">{text}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] bg-[#E6E7DA]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(85,97,58,0.16)_25%,transparent_25%),linear-gradient(225deg,rgba(85,97,58,0.16)_25%,transparent_25%),linear-gradient(45deg,rgba(85,97,58,0.16)_25%,transparent_25%),linear-gradient(315deg,rgba(85,97,58,0.16)_25%,#E6E7DA_25%)] bg-[length:42px_42px] bg-[position:21px_0,21px_0,0_0,0_0]" />

              <motion.div
                  className="absolute left-[18%] top-[28%] rounded-2xl bg-white p-4 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-neutral-500">
                  Point A
                </p>
                <p className="mt-1 font-black">Boat access</p>
              </motion.div>

              <motion.div
                  className="absolute bottom-[22%] right-[16%] rounded-2xl bg-black p-4 text-white shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                  Point B
                </p>
                <p className="mt-1 font-black">Viewpoint</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
}

function ReviewsSection() {
  return (
      <section className="mx-auto max-w-[1540px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-14">
        <div className="mb-8">
          <SectionLabel
              eyebrow="Traveler notes"
              title="Small details that make the day smoother."
          />
        </div>

        <motion.div
            className="grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
        >
          {reviews.map((review) => (
              <motion.article
                  key={review.name}
                  variants={fadeUp}
                  className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black">{review.name}</h3>
                    <p className="text-sm text-neutral-500">{review.country}</p>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-[#F5F0D8] px-3 py-2 text-sm font-black">
                    <Star size={15} className="fill-[#C8A951] text-[#C8A951]" />
                    {review.rating}
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-neutral-600">
                  “{review.text}”
                </p>
              </motion.article>
          ))}
        </motion.div>
      </section>
  );
}

function FAQSection() {
  return (
      <section className="mx-auto max-w-[1540px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 xl:px-14">
        <div className="grid gap-8 lg:grid-cols-[430px_1fr]">
          <SectionLabel
              eyebrow="FAQ"
              title="Answers before you go."
              description="Keep this section practical. It helps the page feel reliable and reduces repeated questions."
          />

          <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
          >
            {faqs.map((faq) => (
                <motion.details
                    key={faq.question}
                    variants={fadeUp}
                    className="group rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5 open:bg-[#FCFBF7]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                    {faq.question}
                    <ChevronDown className="shrink-0 transition group-open:rotate-180" />
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                </motion.details>
            ))}
          </motion.div>
        </div>
      </section>
  );
}

function CTASection() {
  return (
      <section className="mx-auto max-w-[1540px] px-4 pb-16 pt-12 sm:px-6 lg:px-10 lg:pb-24 xl:px-14">
        <motion.div
            className="relative overflow-hidden rounded-[2rem] bg-black p-8 text-white sm:p-10 lg:rounded-[2.75rem] lg:p-14"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#C9D3A5]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#C9D3A5]">
                Ready to explore
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-6xl">
                Make this beach page feel like a premium travel product.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Connect the buttons to your booking flow, map route, saved places
                or destination detail pages.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                  href="#plan"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9D3A5] px-6 py-4 text-sm font-black text-black"
              >
                Start planning
                <ArrowRight size={18} />
              </a>

              <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm font-black text-white ring-1 ring-white/15"
              >
                See photos
              </a>
            </div>
          </div>
        </motion.div>
      </section>
  );
}

export default function BeachGuidePage() {
  return (
      <main
          className="min-h-screen overflow-hidden text-black"
          style={{ backgroundColor: SAND }}
      >
        <HeroSection />
        <StatsStrip />
        <FeatureSection />
        <OverviewSection />
        <GallerySection />
        <ExperiencesSection />
        <NearbySection />
        <MapSection />
        <ReviewsSection />
        <FAQSection />
        <CTASection />
      </main>
  );
}

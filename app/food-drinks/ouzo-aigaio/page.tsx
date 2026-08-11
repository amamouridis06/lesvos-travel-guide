"use client";

import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

function Icon({
                  children,
                  ...props
              }: IconProps & { children: React.ReactNode }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {children}
        </svg>
    );
}

const ArrowRight = (props: IconProps) => (
    <Icon {...props}>
        <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
);

const Sparkles = (props: IconProps) => (
    <Icon {...props}>
        <path d="m12 3 1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3Z" />
        <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
    </Icon>
);

const Droplets = (props: IconProps) => (
    <Icon {...props}>
        <path d="M12 3s-5 5.2-5 9a5 5 0 0 0 10 0c0-3.8-5-9-5-9Z" />
    </Icon>
);

const MapPin = (props: IconProps) => (
    <Icon {...props}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
    </Icon>
);

const Star = (props: IconProps) => (
    <Icon {...props}>
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </Icon>
);

const Compass = (props: IconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="m15 9-2 5-5 2 2-5 5-2Z" />
    </Icon>
);

const Utensils = (props: IconProps) => (
    <Icon {...props}>
        <path d="M4 3v8M7 3v8M4 7h3M6 11v10" />
        <path d="M17 3v18M17 3c2 1.5 3 3.5 3 6s-1 4.5-3 6" />
    </Icon>
);

const Glass = (props: IconProps) => (
    <Icon {...props}>
        <path d="M6 3h12l-1.5 8a4.6 4.6 0 0 1-9 0L6 3Z" />
        <path d="M12 15v6M8.5 21h7" />
    </Icon>
);

const Clock = (props: IconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
    </Icon>
);

const Store = (props: IconProps) => (
    <Icon {...props}>
        <path d="M4 10v10h16V10" />
        <path d="M3 10 5 4h14l2 6" />
        <path d="M8 20v-6h8v6" />
    </Icon>
);

const Package = (props: IconProps) => (
    <Icon {...props}>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </Icon>
);

const Info = (props: IconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
    </Icon>
);

const Accessibility = (props: IconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="4.5" r="1.5" />
        <path d="M7 8.5h10M12 7v6M9 21l3-8 3 8M7 13l5-2 5 2" />
    </Icon>
);

/*
 * ============================================================
 * ΠΡΟΪΟΝΤΑ
 * ============================================================
 *
 * Για να αλλάξει η φωτογραφία ενός προϊόντος,
 * αλλάζει μόνο το "image".
 *
 * Οι φωτογραφίες μπορούν π.χ. να τοποθετηθούν:
 *
 * public/images/ouzo-aigaio.jpg
 * public/images/aigaio-dry.jpg
 */

const products = [
    {
        id: "aigaio",
        name: "Ούζο Αιγαίο",
        colorName: "Μπλε",
        image: "/images/ouzo-aigaio.jpg",
        alt: "Ούζο Αιγαίο",
        description:
            "Το Ούζο Αιγαίο διατίθεται σε τέσσερις διαφορετικές συσκευασίες.",
        sizes: ["50 ml", "200 ml", "500 ml", "700 ml"],
        accent: "blue",
    },
    {
        id: "aigaio-dry",
        name: "Αιγαίο Dry",
        colorName: "Κόκκινο",
        image: "/images/aigaio-dry.jpg",
        alt: "Ούζο Αιγαίο Dry",
        description:
            "Το Αιγαίο Dry διατίθεται σε δύο διαφορετικές συσκευασίες.",
        sizes: ["200 ml", "700 ml"],
        accent: "red",
    },
];

export default function OuzoAigaioPage() {
    return (
        <>
            <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSoft {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-12px) rotate(1.5deg);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .animate-float-soft {
          animation: floatSoft 5.5s ease-in-out infinite;
        }

        .delay-2 {
          animation-delay: 0.24s;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

            <main className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-[#0f172a] selection:bg-[#2563eb] selection:text-white">

                {/* HERO */}
                <section
                    id="ouzo-aigaio"
                    className="relative overflow-hidden bg-[#f8fafc] px-5 py-8 sm:px-8 lg:py-12"
                >
                    <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#bfdbfe]/70 blur-3xl" />
                    <div className="absolute -right-40 bottom-12 h-[480px] w-[480px] rounded-full bg-[#dbeafe] blur-3xl" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid min-h-[720px] items-center gap-12 rounded-[2.75rem] border border-[#0f172a]/10 bg-white/70 p-5 shadow-2xl shadow-[#0f172a]/5 backdrop-blur-xl sm:p-8 lg:grid-cols-[1.05fr_.95fr] lg:p-12">
                            <div className="max-w-2xl animate-fade-up">
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#2563eb]/15 bg-[#eff6ff] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#2563eb]">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    Παραγωγή στον Παππάδο Γέρας, Λέσβος
                                </div>

                                <h1 className="font-serif text-5xl leading-[1] tracking-[-0.045em] sm:text-7xl lg:text-[82px]">
                                    Ούζα
                                    <span className="mt-2 block italic text-[#2563eb]">
                    Αιγαίο.
                  </span>
                                </h1>

                                <p className="mt-8 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
                                    Τα ούζα Αιγαίο παράγονται στην ποτοποιία στον Παππάδο
                                    Γέρας της Λέσβου και συνδέονται με το Αιγαίο, το ελληνικό
                                    τραπέζι και την παράδοση του ούζου στο νησί.
                                </p>

                                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                                    {[
                                        ["01", "Παράγονται στη Λέσβο"],
                                        ["02", "Συνοδεύουν μεζέδες"],
                                        ["03", "Διατίθενται σε πολλά μεγέθη"],
                                    ].map(([number, label]) => (
                                        <div
                                            key={label}
                                            className="rounded-2xl border border-[#0f172a]/10 bg-white p-5"
                                        >
                                            <p className="text-xs font-semibold text-[#2563eb]">
                                                {number}
                                            </p>

                                            <p className="mt-3 font-serif text-xl">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#products"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2563eb]"
                                    >
                                        Παρουσιάζονται τα προϊόντα
                                        <ArrowRight className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="#availability"
                                        className="inline-flex items-center justify-center rounded-full border border-[#0f172a]/15 bg-white px-7 py-4 font-medium transition hover:bg-[#eff6ff]"
                                    >
                                        Πού διατίθενται
                                    </a>
                                </div>
                            </div>

                            <div className="relative mx-auto w-full max-w-xl animate-fade-up delay-2 lg:max-w-none">
                                <div className="absolute -right-6 -top-6 z-10 rounded-2xl bg-[#0f172a] px-5 py-4 text-white shadow-xl">
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                                        Ούζα Αιγαίο
                                    </p>

                                    <p className="mt-1 font-serif text-2xl">
                                        Από τη Λέσβο
                                    </p>
                                </div>

                                <div className="relative overflow-hidden rounded-[2.25rem] shadow-2xl shadow-[#0f172a]/15">
                                    <img
                                        src="/images/ouzo-aigaio.jpg"
                                        alt="Ούζα Αιγαίο"
                                        className="h-[520px] w-full object-cover sm:h-[640px]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                                        <p className="text-xs uppercase tracking-[0.25em] text-[#bfdbfe]">
                                            Από τον Παππάδο Γέρας
                                        </p>

                                        <p className="mt-2 max-w-sm font-serif text-3xl text-white">
                                            Παράγονται στη Λέσβο και συνοδεύουν το ελληνικό τραπέζι.
                                        </p>
                                    </div>
                                </div>

                                <div className="animate-float-soft absolute -bottom-7 -left-4 rounded-2xl border border-white/70 bg-white/85 p-5 shadow-xl backdrop-blur-xl sm:-left-8">
                                    <div className="flex items-center gap-3">
                                        <div className="grid h-11 w-11 place-items-center rounded-full bg-[#dbeafe] text-[#2563eb]">
                                            <Star className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold">
                                                Ούζα Αιγαίο
                                            </p>

                                            <p className="text-xs text-[#64748b]">
                                                Παράγονται στον Παππάδο Γέρας
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section
                    id="experience"
                    className="bg-[#0f172a] py-24 text-white sm:py-32"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#93c5fd]">
                                    Η εμπειρία
                                </p>

                                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-6xl">
                                    Τα ούζα Αιγαίο βρίσκουν τη θέση τους στο ελληνικό τραπέζι.
                                </h2>

                                <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                                    Συνδέονται με τη Λέσβο, τη θάλασσα, τις παρέες και τα
                                    τραπέζια που γεμίζουν με μικρούς ελληνικούς μεζέδες.
                                </p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                {[
                                    {
                                        icon: Utensils,
                                        title: "Συνοδεύονται με μεζέδες",
                                        body: "Μπορούν να συνοδευτούν από θαλασσινά, χταπόδι, ελιές, τυριά και άλλους ελληνικούς μεζέδες.",
                                    },
                                    {
                                        icon: Droplets,
                                        title: "Σερβίρονται με νερό",
                                        body: "Μπορούν να σερβιριστούν με δροσερό νερό, ανάλογα με την προτίμηση των καταναλωτών.",
                                    },
                                    {
                                        icon: Glass,
                                        title: "Σερβίρονται με πάγο",
                                        body: "Μπορούν επίσης να απολαμβάνονται δροσερά με την προσθήκη πάγου.",
                                    },
                                    {
                                        icon: MapPin,
                                        title: "Παράγονται στη Λέσβο",
                                        body: "Η παραγωγή τους πραγματοποιείται στην ποτοποιία στον Παππάδο Γέρας.",
                                    },
                                ].map(({ icon: ExperienceIcon, title, body }) => (
                                    <div
                                        key={title}
                                        className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
                                    >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#3b82f6]/15 text-[#93c5fd]">
                      <ExperienceIcon className="h-5 w-5" />
                    </span>

                                        <h3 className="mt-6 font-serif text-2xl">{title}</h3>

                                        <p className="mt-3 text-sm leading-6 text-white/55">
                                            {body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRODUCTS */}
                <section id="products" className="bg-[#f1f5f9] py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                Τα προϊόντα
                            </p>

                            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
                                Διατίθενται σε διαφορετικές εκδοχές και συσκευασίες.
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#64748b]">
                                Κάθε προϊόν παρουσιάζεται ξεχωριστά, μαζί με τη φωτογραφία
                                και τις διαθέσιμες συσκευασίες του.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-8 lg:grid-cols-2">
                            {products.map((product) => {
                                const isRed = product.accent === "red";

                                return (
                                    <article
                                        key={product.id}
                                        className="group overflow-hidden rounded-[2.25rem] border border-[#0f172a]/10 bg-white shadow-lg shadow-[#0f172a]/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        {/* ΦΩΤΟΓΡΑΦΙΑ ΠΡΟΪΟΝΤΟΣ */}
                                        <div className="relative overflow-hidden bg-white">
                                            <img
                                                src={product.image}
                                                alt={product.alt}
                                                className="h-[440px] w-full object-contain p-6 transition duration-700 group-hover:scale-[1.03] sm:h-[520px]"
                                            />

                                            <span
                                                className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                                                    isRed
                                                        ? "bg-red-50 text-red-600"
                                                        : "bg-[#eff6ff] text-[#2563eb]"
                                                }`}
                                            >
                        {product.colorName}
                      </span>
                                        </div>

                                        <div className="border-t border-[#0f172a]/10 p-8 sm:p-10">
                                            <div className="flex items-start gap-4">
                        <span
                            className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${
                                isRed
                                    ? "bg-red-50 text-red-600"
                                    : "bg-[#dbeafe] text-[#2563eb]"
                            }`}
                        >
                          <Package className="h-5 w-5" />
                        </span>

                                                <div>
                                                    <h3 className="font-serif text-3xl sm:text-4xl">
                                                        {product.name}
                                                    </h3>

                                                    <p className="mt-3 leading-7 text-[#64748b]">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
                                                    Διαθέσιμες συσκευασίες
                                                </p>

                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {product.sizes.map((size) => (
                                                        <span
                                                            key={size}
                                                            className={`rounded-full border px-5 py-2.5 text-sm font-semibold ${
                                                                isRed
                                                                    ? "border-red-200 bg-red-50 text-red-600"
                                                                    : "border-[#2563eb]/15 bg-[#eff6ff] text-[#2563eb]"
                                                            }`}
                                                        >
                              {size}
                            </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* AVAILABILITY */}
                <section id="availability" className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="max-w-3xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                Πληροφορίες διάθεσης
                            </p>

                            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
                                Παράγονται στον Παππάδο Γέρας.
                                <span className="block italic text-[#2563eb]">
                  Διατίθενται και λιανικώς κάθε Σάββατο.
                </span>
                            </h2>
                        </div>

                        <div className="mt-14 grid gap-6 lg:grid-cols-2">
                            <div className="rounded-[2rem] bg-[#0f172a] p-8 text-white sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-[#93c5fd]">
                  <MapPin className="h-5 w-5" />
                </span>

                                <p className="mt-7 text-xs uppercase tracking-[0.22em] text-[#93c5fd]">
                                    Οι εγκαταστάσεις
                                </p>

                                <h3 className="mt-3 font-serif text-3xl">
                                    Βρίσκονται στον Παππάδο Γέρας, Λέσβος
                                </h3>

                                <p className="mt-5 leading-7 text-white/60">
                                    Στις εγκαταστάσεις της ποτοποιίας πραγματοποιείται η
                                    παραγωγή των προϊόντων.
                                </p>

                                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <div className="flex gap-4">
                                        <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#93c5fd]" />

                                        <div>
                                            <p className="font-semibold">
                                                Οι εγκαταστάσεις παραγωγής δεν είναι επισκέψιμες.
                                            </p>

                                            <p className="mt-2 text-sm leading-6 text-white/55">
                                                Δεν πραγματοποιούνται επισκέψεις ή ξεναγήσεις
                                                στους χώρους παραγωγής.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[2rem] border border-[#0f172a]/10 bg-[#eff6ff] p-8 sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#2563eb]">
                  <Clock className="h-5 w-5" />
                </span>

                                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
                                    Λιανική πώληση
                                </p>

                                <h3 className="mt-3 font-serif text-3xl">
                                    Εξυπηρετούνται κάθε Σάββατο
                                </h3>

                                <p className="mt-3 font-serif text-5xl text-[#2563eb]">
                                    09:00–14:00
                                </p>

                                <p className="mt-5 leading-7 text-[#475569]">
                                    Οι καταναλωτές μπορούν να προμηθεύονται προϊόντα
                                    απευθείας από την ποτοποιία κατά το παραπάνω ωράριο.
                                </p>
                            </div>

                            <div className="rounded-[2rem] border border-[#0f172a]/10 bg-[#f8fafc] p-8 sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#dbeafe] text-[#2563eb]">
                  <Accessibility className="h-5 w-5" />
                </span>

                                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
                                    Πρόσβαση & εξυπηρέτηση
                                </p>

                                <h3 className="mt-3 font-serif text-3xl">
                                    Μπορούν να εξυπηρετηθούν κατόπιν επικοινωνίας
                                </h3>

                                <p className="mt-5 leading-7 text-[#64748b]">
                                    Καθώς οι εγκαταστάσεις παραγωγής δεν είναι επισκέψιμες,
                                    δεν υπάρχει οργανωμένος χώρος επίσκεψης ή ξενάγησης.
                                    Για ανάγκες σχετικές με την παραλαβή προϊόντων, καθώς
                                    και για άτομα με κινητικές δυσκολίες, μπορούν να
                                    εξυπηρετηθούν κατόπιν προηγούμενης επικοινωνίας.
                                </p>
                            </div>

                            <div className="rounded-[2rem] border border-[#0f172a]/10 bg-[#f8fafc] p-8 sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#dbeafe] text-[#2563eb]">
                  <Store className="h-5 w-5" />
                </span>

                                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
                                    Σημεία πώλησης
                                </p>

                                <h3 className="mt-3 font-serif text-3xl">
                                    Μπορούν να τα προμηθευτούν σε όλη τη Λέσβο
                                </h3>

                                <p className="mt-5 leading-7 text-[#64748b]">
                                    Τα προϊόντα διατίθενται σε κάβες, καταστήματα τοπικών
                                    προϊόντων, τουριστικά καταστήματα, supermarkets και
                                    συνεργαζόμενους χώρους εστίασης στη Λέσβο.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="bg-[#f1f5f9] py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="grid overflow-hidden rounded-[2.5rem] bg-[#0f172a] shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="p-8 text-white sm:p-12 lg:p-16">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#93c5fd]">
                                    Επικοινωνία
                                </p>

                                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-6xl">
                                    Μπορούν να επικοινωνήσουν με την ποτοποιία.
                                </h2>

                                <p className="mt-6 max-w-lg text-base leading-8 text-white/60">
                                    Για πληροφορίες σχετικά με τα προϊόντα, τα σημεία
                                    πώλησης, τη λιανική παραλαβή ή ειδικές ανάγκες
                                    εξυπηρέτησης, μπορούν να επικοινωνήσουν απευθείας
                                    με την ποτοποιία.
                                </p>

                                <div className="mt-10 space-y-4">
                                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#3b82f6]/15 text-[#93c5fd]">
                      <MapPin className="h-5 w-5" />
                    </span>

                                        <div>
                                            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                                                Τοποθεσία
                                            </p>

                                            <p className="mt-1 font-medium">
                                                Παππάδος Γέρας, Λέσβος
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#3b82f6]/15 text-[#93c5fd]">
                      <Clock className="h-5 w-5" />
                    </span>

                                        <div>
                                            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                                                Λιανική πώληση
                                            </p>

                                            <p className="mt-1 font-medium">
                                                Κάθε Σάββατο, 09:00–14:00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 sm:p-12 lg:p-16">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                    Χρήσιμες πληροφορίες
                                </p>

                                <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
                                    Τι χρειάζεται να γνωρίζουν
                                </h3>

                                <div className="mt-9 space-y-4">
                                    {[
                                        {
                                            icon: Info,
                                            title: "Δεν πραγματοποιούνται ξεναγήσεις",
                                            body: "Οι εγκαταστάσεις παραγωγής δεν είναι επισκέψιμες.",
                                        },
                                        {
                                            icon: Store,
                                            title: "Μπορούν να αγοράσουν λιανικώς",
                                            body: "Μπορούν να προμηθεύονται προϊόντα από την ποτοποιία κάθε Σάββατο από τις 09:00 έως τις 14:00.",
                                        },
                                        {
                                            icon: Accessibility,
                                            title: "Μπορούν να ζητήσουν ειδική εξυπηρέτηση",
                                            body: "Για παραλαβές ή ανάγκες ατόμων με κινητικές δυσκολίες μπορούν να εξυπηρετούνται κατόπιν επικοινωνίας.",
                                        },
                                    ].map(({ icon: ContactIcon, title, body }) => (
                                        <div
                                            key={title}
                                            className="flex gap-4 rounded-2xl border border-[#0f172a]/10 bg-[#f8fafc] p-5"
                                        >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eff6ff] text-[#2563eb]">
                        <ContactIcon className="h-5 w-5" />
                      </span>

                                            <div>
                                                <p className="font-semibold">{title}</p>

                                                <p className="mt-1 text-sm leading-6 text-[#64748b]">
                                                    {body}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL */}
                <section className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#eff6ff] p-8 sm:p-12 lg:p-16">
                            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#bfdbfe] blur-3xl" />

                            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                        Ούζα Αιγαίο
                                    </p>

                                    <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
                                        Παράγονται στον Παππάδο Γέρας.
                                        <span className="block italic text-[#2563eb]">
                      Διατίθενται σε όλη τη Λέσβο.
                    </span>
                                    </h2>

                                    <p className="mt-6 max-w-xl leading-7 text-[#475569]">
                                        Τα προϊόντα μπορούν να προμηθεύονται από την ποτοποιία
                                        κάθε Σάββατο, καθώς και από επιλεγμένα σημεία πώλησης
                                        στη Λέσβο.
                                    </p>

                                    <a
                                        href="#contact"
                                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                                    >
                                        Πληροφορίες επικοινωνίας
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>

                                <div className="grid gap-4">
                                    {[
                                        {
                                            icon: MapPin,
                                            title: "Παράγονται στον Παππάδο Γέρας",
                                            text: "Εκεί πραγματοποιείται η παραγωγή των προϊόντων.",
                                        },
                                        {
                                            icon: Clock,
                                            title: "Πωλούνται λιανικώς κάθε Σάββατο",
                                            text: "Η λιανική πώληση πραγματοποιείται από τις 09:00 έως τις 14:00.",
                                        },
                                        {
                                            icon: Store,
                                            title: "Διατίθενται στη Λέσβο",
                                            text: "Βρίσκονται σε κάβες, καταστήματα, supermarkets και συνεργαζόμενους χώρους εστίασης.",
                                        },
                                    ].map(({ icon: InfoIcon, title, text }) => (
                                        <div
                                            key={title}
                                            className="flex gap-5 rounded-3xl border border-[#0f172a]/10 bg-white/80 p-6 backdrop-blur"
                                        >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#dbeafe] text-[#2563eb]">
                        <InfoIcon className="h-5 w-5" />
                      </span>

                                            <div>
                                                <p className="font-serif text-xl">{title}</p>

                                                <p className="mt-2 text-sm leading-6 text-[#64748b]">
                                                    {text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#64748b]">
                            Απολαμβάνουν υπεύθυνα. Η κατανάλωση αλκοόλ επιτρέπεται μόνο
                            σε άτομα άνω των 18 ετών.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
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
        <path d="M5 16c-1.2 1.4-2 2.7-2 3.8a2.5 2.5 0 0 0 5 0" />
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

const Mail = (props: IconProps) => (
    <Icon {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
    </Icon>
);

const Phone = (props: IconProps) => (
    <Icon {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
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
        <path d="M3 10c0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0 0 2 3 2 3 0" />
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

const guideLinks = [
    { label: "Ούζο Αιγαίο", href: "#ouzo-aigaio" },
    { label: "Η εμπειρία", href: "#experience" },
    { label: "Σερβίρισμα", href: "#serving" },
    { label: "Πού θα το βρεις", href: "#availability" },
    { label: "Επικοινωνία", href: "#contact" },
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
                        {/* NAV */}
                        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-[#0f172a]/10 bg-white/75 px-4 py-4 shadow-xl shadow-[#0f172a]/5 backdrop-blur-xl sm:justify-between sm:px-6">
                            <a href="#ouzo-aigaio" className="group flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0f172a] text-white transition group-hover:scale-105">
                  <Compass className="h-5 w-5" />
                </span>

                                <span>
                  <span className="block font-serif text-xl leading-none">
                    Ούζο Αιγαίο
                  </span>

                  <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-[#64748b]">
                    Από τον Παππάδο Γέρας
                  </span>
                </span>
                            </a>

                            <nav className="hidden flex-wrap items-center justify-center gap-1 xl:flex">
                                {guideLinks.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-full px-3 py-2 text-sm font-medium text-[#475569] transition hover:bg-[#eff6ff] hover:text-[#0f172a]"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>

                            <a
                                href="#contact"
                                className="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                            >
                                Επικοινωνία
                            </a>
                        </div>

                        {/* HERO CONTENT */}
                        <div className="grid min-h-[720px] items-center gap-12 rounded-[2.75rem] border border-[#0f172a]/10 bg-white/70 p-5 shadow-2xl shadow-[#0f172a]/5 backdrop-blur-xl sm:p-8 lg:grid-cols-[1.05fr_.95fr] lg:p-12">
                            <div className="max-w-2xl animate-fade-up">
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#2563eb]/15 bg-[#eff6ff] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#2563eb]">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    Παραγωγή στον Παππάδο Γέρας, Λέσβος
                                </div>

                                <h1 className="font-serif text-5xl leading-[1] tracking-[-0.045em] text-[#0f172a] sm:text-7xl lg:text-[82px]">
                                    Ούζο
                                    <span className="mt-2 block italic text-[#2563eb]">
                    Αιγαίο.
                  </span>
                                </h1>

                                <p className="mt-8 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
                                    Το Ούζο Αιγαίο παράγεται στην ποτοποιία μας στον Παππάδο
                                    Γέρας της Λέσβου και φέρνει στο ποτήρι εικόνες από το Αιγαίο,
                                    το ελληνικό τραπέζι και τη λεσβιακή παράδοση του ούζου.
                                </p>

                                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                                    {[
                                        ["01", "Παππάδος Γέρας"],
                                        ["02", "Παραγωγή στη Λέσβο"],
                                        ["03", "Γεύση Αιγαίου"],
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
                                        href="#experience"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2563eb]"
                                    >
                                        Γνώρισε το Ούζο Αιγαίο
                                        <ArrowRight className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="#availability"
                                        className="inline-flex items-center justify-center rounded-full border border-[#0f172a]/15 bg-white px-7 py-4 font-medium transition hover:bg-[#eff6ff]"
                                    >
                                        Πού θα το βρεις
                                    </a>
                                </div>
                            </div>

                            {/* IMAGE */}
                            <div className="relative mx-auto w-full max-w-xl animate-fade-up delay-2 lg:max-w-none">
                                <div className="absolute -right-6 -top-6 z-10 rounded-2xl bg-[#0f172a] px-5 py-4 text-white shadow-xl">
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                                        Ούζο Αιγαίο
                                    </p>
                                    <p className="mt-1 font-serif text-2xl">
                                        Από τη Λέσβο
                                    </p>
                                </div>

                                <div className="relative overflow-hidden rounded-[2.25rem] shadow-2xl shadow-[#0f172a]/15">
                                    <img
                                        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=90"
                                        alt="Ούζο Αιγαίο"
                                        className="h-[520px] w-full object-cover sm:h-[640px]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                                        <p className="text-xs uppercase tracking-[0.25em] text-[#bfdbfe]">
                                            Το ελληνικό ritual
                                        </p>

                                        <p className="mt-2 max-w-sm font-serif text-3xl text-white">
                                            Νερό, πάγος, καλή παρέα και ένα τραπέζι γεμάτο μεζέδες.
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
                                                Ούζο Αιγαίο
                                            </p>
                                            <p className="text-xs text-[#64748b]">
                                                Παραγωγή στον Παππάδο Γέρας
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
                                    Το Ούζο Αιγαίο στο ελληνικό τραπέζι.
                                </h2>

                                <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                                    Μια γεύση που συνδέεται με τη Λέσβο, τη θάλασσα, την παρέα
                                    και τα τραπέζια με μικρούς ελληνικούς μεζέδες.
                                </p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                {[
                                    {
                                        icon: Utensils,
                                        title: "Με τι ταιριάζει",
                                        body: "Θαλασσινά, χταπόδι, ελιές, τυριά, ντολμαδάκια και ελληνικοί μεζέδες.",
                                    },
                                    {
                                        icon: Droplets,
                                        title: "Με λίγο νερό",
                                        body: "Πρόσθεσε λίγο δροσερό νερό ώστε να αναδειχθούν τα χαρακτηριστικά του ούζου.",
                                    },
                                    {
                                        icon: Glass,
                                        title: "Με πάγο",
                                        body: "Μπορεί να σερβιριστεί δροσερό, μαζί με νερό και πάγο.",
                                    },
                                    {
                                        icon: MapPin,
                                        title: "Από τη Λέσβο",
                                        body: "Η παραγωγή πραγματοποιείται στην ποτοποιία μας στον Παππάδο Γέρας.",
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

                {/* SERVING */}
                <section id="serving" className="bg-[#f1f5f9] py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                Πώς απολαμβάνεται
                            </p>

                            <h2 className="mt-4 font-serif text-4xl sm:text-6xl">
                                Απλά. Αργά. Ελληνικά.
                            </h2>
                        </div>

                        <div className="mt-14 grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: "01",
                                    title: "Σέρβιρε το ούζο",
                                    body: "Βάλε το Ούζο Αιγαίο στο ποτήρι και άφησέ το να γίνει μέρος του τραπεζιού.",
                                },
                                {
                                    number: "02",
                                    title: "Νερό & πάγος",
                                    body: "Πρόσθεσε δροσερό νερό και, αν επιθυμείς, λίγα παγάκια.",
                                },
                                {
                                    number: "03",
                                    title: "Συνόδευσέ το",
                                    body: "Ταίριαξέ το με θαλασσινά, ελιές, τυριά και αγαπημένους ελληνικούς μεζέδες.",
                                },
                            ].map(({ number, title, body }) => (
                                <article
                                    key={number}
                                    className="rounded-[2rem] border border-[#0f172a]/10 bg-white p-8 transition hover:-translate-y-2 hover:shadow-2xl"
                                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#2563eb]">
                    {number}
                  </span>

                                    <h3 className="mt-7 font-serif text-3xl">{title}</h3>
                                    <p className="mt-4 text-sm leading-7 text-[#64748b]">
                                        {body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AVAILABILITY / VISIT */}
                <section id="availability" className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="max-w-3xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                Πού θα μας βρεις
                            </p>

                            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
                                Παραγωγή στον Παππάδο Γέρας.
                                <span className="block italic text-[#2563eb]">
                  Λιανική κάθε Σάββατο.
                </span>
                            </h2>
                        </div>

                        <div className="mt-14 grid gap-6 lg:grid-cols-2">
                            <div className="rounded-[2rem] bg-[#0f172a] p-8 text-white sm:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-[#93c5fd]">
                  <MapPin className="h-5 w-5" />
                </span>

                                <p className="mt-7 text-xs uppercase tracking-[0.22em] text-[#93c5fd]">
                                    Η ποτοποιία
                                </p>

                                <h3 className="mt-3 font-serif text-3xl">
                                    Παππάδος Γέρας, Λέσβος
                                </h3>

                                <p className="mt-5 leading-7 text-white/60">
                                    Στην ποτοποιία μας στον Παππάδο Γέρας πραγματοποιείται
                                    η παραγωγή των προϊόντων μας.
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
                                    Κάθε Σάββατο
                                </h3>

                                <p className="mt-3 font-serif text-5xl text-[#2563eb]">
                                    09:00–14:00
                                </p>

                                <p className="mt-5 leading-7 text-[#475569]">
                                    Υπάρχει δυνατότητα λιανικής αγοράς προϊόντων απευθείας
                                    από την ποτοποιία μας κατά το παραπάνω ωράριο.
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
                                    Παραλαβή κατόπιν επικοινωνίας
                                </h3>

                                <p className="mt-5 leading-7 text-[#64748b]">
                                    Καθώς οι εγκαταστάσεις παραγωγής δεν είναι επισκέψιμες,
                                    δεν υπάρχει οργανωμένος χώρος επίσκεψης ή ξενάγησης.
                                    Για οποιαδήποτε ανάγκη σχετικά με την παραλαβή προϊόντων,
                                    ιδιαίτερα για άτομα με κινητικές δυσκολίες, μπορούμε να
                                    εξυπηρετήσουμε κατόπιν επικοινωνίας.
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
                                    Σε επιλεγμένα σημεία στη Λέσβο
                                </h3>

                                <p className="mt-5 leading-7 text-[#64748b]">
                                    Τα προϊόντα μας διατίθενται σε κάβες, καταστήματα τοπικών
                                    προϊόντων, τουριστικά καταστήματα, supermarkets και σε
                                    συνεργαζόμενους χώρους εστίασης στη Λέσβο.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PACKAGING */}
                <section className="bg-[#f1f5f9] py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                    Διαθέσιμες συσκευασίες
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
                                    Διάλεξε το μέγεθος που σου ταιριάζει.
                                </h2>

                                <p className="mt-6 max-w-lg leading-7 text-[#64748b]">
                                    Το Ούζο Αιγαίο δεν διατίθεται μόνο στη συσκευασία των
                                    200 ml. Υπάρχουν διαφορετικά μεγέθη ανάλογα με το προϊόν.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <article className="relative overflow-hidden rounded-[2rem] border border-[#2563eb]/15 bg-white p-8 shadow-xl shadow-[#0f172a]/5">
                                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#dbeafe] blur-3xl" />

                                    <div className="relative">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#dbeafe] text-[#2563eb]">
                      <Package className="h-5 w-5" />
                    </span>

                                        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
                                            Μπλε
                                        </p>

                                        <h3 className="mt-2 font-serif text-3xl">
                                            Ούζο Αιγαίο
                                        </h3>

                                        <div className="mt-7 flex flex-wrap gap-2">
                                            {["50 ml", "200 ml", "500 ml", "700 ml"].map((size) => (
                                                <span
                                                    key={size}
                                                    className="rounded-full border border-[#2563eb]/15 bg-[#eff6ff] px-4 py-2 text-sm font-semibold text-[#2563eb]"
                                                >
                          {size}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>

                                <article className="relative overflow-hidden rounded-[2rem] border border-red-200 bg-white p-8 shadow-xl shadow-[#0f172a]/5">
                                    <div className="relative">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-red-50 text-red-600">
                      <Package className="h-5 w-5" />
                    </span>

                                        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-red-600">
                                            Κόκκινο
                                        </p>

                                        <h3 className="mt-2 font-serif text-3xl">
                                            Αιγαίο Dry
                                        </h3>

                                        <div className="mt-7 flex flex-wrap gap-2">
                                            {["200 ml", "700 ml"].map((size) => (
                                                <span
                                                    key={size}
                                                    className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600"
                                                >
                          {size}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="grid overflow-hidden rounded-[2.5rem] border border-[#0f172a]/10 bg-[#0f172a] shadow-2xl shadow-[#0f172a]/10 lg:grid-cols-[0.9fr_1.1fr]">

                            <div className="p-8 text-white sm:p-12 lg:p-16">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#93c5fd]">
                                    Επικοινωνία
                                </p>

                                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-6xl">
                                    Επικοινώνησε με την ποτοποιία μας.
                                </h2>

                                <p className="mt-6 max-w-lg text-base leading-8 text-white/60">
                                    Για πληροφορίες σχετικά με τα προϊόντα, σημεία πώλησης,
                                    λιανική παραλαβή ή ειδικές ανάγκες εξυπηρέτησης, μπορείς
                                    να επικοινωνήσεις μαζί μας.
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
                                                Σάββατο 09:00–14:00
                                            </p>
                                        </div>
                                    </div>

                                    {/*
                    Βάλε εδώ το πραγματικό email και τηλέφωνο όταν τα έχεις:

                    <a href="mailto:your@email.gr">...</a>
                    <a href="tel:+30...">...</a>
                  */}
                                </div>
                            </div>

                            <div className="bg-[#f8fafc] p-8 sm:p-12 lg:p-16">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                    Χρήσιμες πληροφορίες
                                </p>

                                <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
                                    Πριν έρθεις στην ποτοποιία
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
                                            title: "Λιανική αγορά",
                                            body: "Μπορείς να προμηθευτείς προϊόντα από την ποτοποιία κάθε Σάββατο, 09:00–14:00.",
                                        },
                                        {
                                            icon: Accessibility,
                                            title: "Ειδική εξυπηρέτηση",
                                            body: "Για ανάγκες παραλαβής ή εξυπηρέτησης ατόμων με κινητικές δυσκολίες, επικοινώνησε μαζί μας εκ των προτέρων.",
                                        },
                                    ].map(({ icon: ContactIcon, title, body }) => (
                                        <div
                                            key={title}
                                            className="flex gap-4 rounded-2xl border border-[#0f172a]/10 bg-white p-5"
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

                                <a
                                    href="#availability"
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                                >
                                    Δες πληροφορίες επίσκεψης
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-[#f8fafc] py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#eff6ff] p-8 sm:p-12 lg:p-16">
                            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#bfdbfe] blur-3xl" />

                            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                        Ούζο Αιγαίο
                                    </p>

                                    <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
                                        Από τον Παππάδο Γέρας,
                                        <span className="block italic text-[#2563eb]">
                      μια γεύση από τη Λέσβο.
                    </span>
                                    </h2>

                                    <p className="mt-6 max-w-xl leading-7 text-[#475569]">
                                        Βρες τα προϊόντα μας στην ποτοποιία κάθε Σάββατο ή
                                        σε επιλεγμένα σημεία πώλησης σε ολόκληρη τη Λέσβο.
                                    </p>

                                    <a
                                        href="#contact"
                                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                                    >
                                        Επικοινωνία
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>

                                <div className="grid gap-4">
                                    {[
                                        {
                                            icon: MapPin,
                                            title: "Παππάδος Γέρας",
                                            text: "Εδώ πραγματοποιείται η παραγωγή των προϊόντων μας.",
                                        },
                                        {
                                            icon: Clock,
                                            title: "Σάββατο 09:00–14:00",
                                            text: "Λιανική πώληση απευθείας από την ποτοποιία.",
                                        },
                                        {
                                            icon: Store,
                                            title: "Σε όλη τη Λέσβο",
                                            text: "Κάβες, τοπικά και τουριστικά καταστήματα, supermarkets και συνεργαζόμενοι χώροι εστίασης.",
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
                            Απολαύστε υπεύθυνα. Η κατανάλωση αλκοόλ επιτρέπεται μόνο σε
                            άτομα άνω των 18 ετών.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
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

const guideLinks = [
    { label: "Ούζο Αιγαίο", href: "#ouzo-aigaio" },
    { label: "Η εμπειρία", href: "#experience" },
    { label: "Σερβίρισμα", href: "#serving" },
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

                @keyframes drift {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0);
                    }
                    50% {
                        transform: translate3d(22px, -16px, 0);
                    }
                }

                .animate-fade-up {
                    animation: fadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
                }

                .animate-float-soft {
                    animation: floatSoft 5.5s ease-in-out infinite;
                }

                .animate-drift {
                    animation: drift 9s ease-in-out infinite;
                }

                .delay-1 {
                    animation-delay: 0.12s;
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
                    Γεύση ελληνικού καλοκαιριού
                  </span>
                </span>
                            </a>

                            <nav className="flex flex-wrap items-center justify-center gap-2">
                                {guideLinks.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-full px-4 py-2 text-sm font-medium text-[#475569] transition hover:bg-[#eff6ff] hover:text-[#0f172a]"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>

                            <a
                                href="#serving"
                                className="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                            >
                                Ανακάλυψέ το
                            </a>
                        </div>

                        {/* HERO CONTENT */}
                        <div className="grid min-h-[720px] items-center gap-12 rounded-[2.75rem] border border-[#0f172a]/10 bg-white/70 p-5 shadow-2xl shadow-[#0f172a]/5 backdrop-blur-xl sm:p-8 lg:grid-cols-[1.05fr_.95fr] lg:p-12">
                            <div className="max-w-2xl animate-fade-up">
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#2563eb]/15 bg-[#eff6ff] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#2563eb]">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    Αυθεντική ελληνική απόλαυση
                                </div>

                                <h1 className="font-serif text-5xl leading-[1] tracking-[-0.045em] text-[#0f172a] sm:text-7xl lg:text-[82px]">
                                    Ούζο
                                    <span className="mt-2 block italic text-[#2563eb]">
                    Αιγαίο.
                  </span>
                                </h1>

                                <p className="mt-8 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
                                    Ένα ούζο που φέρνει στο ποτήρι σου εικόνες από το Αιγαίο,
                                    ελληνικά τραπέζια, θαλασσινούς μεζέδες και εκείνες τις
                                    καλοκαιρινές στιγμές που θέλεις να κρατήσουν λίγο περισσότερο.
                                </p>

                                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                                    {[
                                        ["01", "Αυθεντικό ούζο"],
                                        ["02", "Με ελληνικούς μεζέδες"],
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
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f172a] px-7 py-4 font-semibold text-white shadow-xl shadow-[#0f172a]/10 transition hover:-translate-y-0.5 hover:bg-[#2563eb]"
                                    >
                                        Γνώρισε το Ούζο Αιγαίο
                                        <ArrowRight className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="#serving"
                                        className="inline-flex items-center justify-center rounded-full border border-[#0f172a]/15 bg-white px-7 py-4 font-medium text-[#0f172a] transition hover:bg-[#eff6ff]"
                                    >
                                        Πώς σερβίρεται
                                    </a>
                                </div>
                            </div>

                            {/* PRODUCT IMAGE */}
                            <div className="relative mx-auto w-full max-w-xl animate-fade-up delay-2 lg:max-w-none">
                                <div className="absolute -right-6 -top-6 z-10 rounded-2xl bg-[#0f172a] px-5 py-4 text-white shadow-xl">
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                                        Ούζο Αιγαίο
                                    </p>
                                    <p className="mt-1 font-serif text-2xl">
                                        Ελληνικό καλοκαίρι
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
                                            <p className="text-sm font-semibold text-[#0f172a]">
                                                Ούζο Αιγαίο
                                            </p>

                                            <p className="text-xs text-[#64748b]">
                                                Μια γεύση από Ελλάδα
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
                            <div className="animate-fade-up">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#93c5fd]">
                                    Η εμπειρία
                                </p>

                                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">
                                    Το Ούζο Αιγαίο δεν είναι απλώς ένα ποτό.
                                </h2>

                                <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                                    Είναι η στιγμή που το τραπέζι γεμίζει με μικρά πιάτα, η παρέα
                                    μεγαλώνει και ο χρόνος κυλά λίγο πιο αργά. Μια αυθεντικά
                                    ελληνική συνήθεια που συνδέεται με τη θάλασσα, τη φιλοξενία
                                    και το καλοκαίρι.
                                </p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                {[
                                    {
                                        icon: Utensils,
                                        title: "Με τι ταιριάζει",
                                        body: "Θαλασσινά, χταπόδι, ελιές, τυριά, ντολμαδάκια και αγαπημένοι ελληνικοί μεζέδες.",
                                    },
                                    {
                                        icon: Droplets,
                                        title: "Με λίγο νερό",
                                        body: "Πρόσθεσε λίγο δροσερό νερό ώστε το ούζο να αποκτήσει τον χαρακτηριστικό γαλακτώδη τόνο του.",
                                    },
                                    {
                                        icon: Glass,
                                        title: "Με πάγο",
                                        body: "Λίγα παγάκια ολοκληρώνουν το σερβίρισμα και το κρατούν δροσερό τις ζεστές καλοκαιρινές ημέρες.",
                                    },
                                    {
                                        icon: Compass,
                                        title: "Σαν να είσαι στο Αιγαίο",
                                        body: "Ιδανικό για ένα χαλαρό μεσημέρι, ένα τραπέζι δίπλα στη θάλασσα ή ένα όμορφο καλοκαιρινό βράδυ.",
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

                            <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] sm:text-6xl">
                                Απλά. Αργά. Ελληνικά.
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#64748b]">
                                Το Ούζο Αιγαίο θέλει χρόνο, παρέα και ένα τραπέζι γεμάτο μικρές
                                γεύσεις. Δεν χρειάζονται πολλά για να δημιουργηθεί η σωστή
                                στιγμή.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    number: "01",
                                    title: "Σέρβιρε το ούζο",
                                    body: "Βάλε το Ούζο Αιγαίο σε ένα ψηλό ή παραδοσιακό ποτήρι.",
                                },
                                {
                                    number: "02",
                                    title: "Πρόσθεσε νερό & πάγο",
                                    body: "Πρόσθεσε δροσερό νερό και στη συνέχεια λίγα παγάκια.",
                                },
                                {
                                    number: "03",
                                    title: "Βάλε τους μεζέδες",
                                    body: "Συνόδευσέ το με θαλασσινά, τυριά, ελιές και αγαπημένες ελληνικές γεύσεις.",
                                },
                            ].map(({ number, title, body }) => (
                                <article
                                    key={number}
                                    className="group rounded-[2rem] border border-[#0f172a]/10 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0f172a]/10"
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

                {/* FINAL CTA */}
                <section className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#eff6ff] p-8 sm:p-12 lg:p-16">
                            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#bfdbfe] blur-3xl" />

                            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                        Ούζο Αιγαίο
                                    </p>

                                    <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
                                        Μια μικρή γουλιά από το ελληνικό καλοκαίρι.
                                    </h2>

                                    <p className="mt-6 max-w-xl leading-7 text-[#475569]">
                                        Από ένα μεσημεριανό τραπέζι δίπλα στη θάλασσα μέχρι μια
                                        βραδιά με φίλους, το Ούζο Αιγαίο είναι φτιαγμένο για τις
                                        στιγμές που αξίζει να μοιράζεσαι.
                                    </p>

                                    <a
                                        href="mailto:hello@aegeanouzo.gr"
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
                                            title: "Ελληνική ταυτότητα",
                                            text: "Ένα προϊόν συνδεδεμένο με το ελληνικό τραπέζι και το Αιγαίο.",
                                        },
                                        {
                                            icon: Utensils,
                                            title: "Ιδανικό με μεζέδες",
                                            text: "Απολαμβάνεται καλύτερα με φαγητό, παρέα και χαλαρό ρυθμό.",
                                        },
                                        {
                                            icon: Sparkles,
                                            title: "Καλοκαιρινή εμπειρία",
                                            text: "Για στιγμές που μυρίζουν θάλασσα και Ελλάδα.",
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
                            Απολαύστε υπεύθυνα. Η κατανάλωση αλκοόλ επιτρέπεται μόνο σε άτομα
                            άνω των 18 ετών.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
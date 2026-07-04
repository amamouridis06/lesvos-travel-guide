"use client";

import React, { useMemo, useState } from "react";

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

const Search = (props: IconProps) => (
    <Icon {...props}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
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

const Clock3 = (props: IconProps) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l-3 2" />
    </Icon>
);

const Instagram = (props: IconProps) => (
    <Icon {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
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

const productCategories = ["Όλα", "Κλασικό", "Premium", "Limited", "Mini"] as const;

type ProductCategory = (typeof productCategories)[number];

type LocalProduct = {
    id: string;
    name: string;
    category: Exclude<ProductCategory, "Όλα">;
    description: string;
    alcohol: string;
    size: string;
    note: string;
    image: string;
    featured?: boolean;
};

const products: LocalProduct[] = [
    {
        id: "1",
        name: "Aegean Classic",
        category: "Κλασικό",
        description:
            "Η πιο καθαρή και γνώριμη εκδοχή του ούζου. Ιδανικό για όσους θέλουν να ξεκινήσουν από την αυθεντική γεύση.",
        alcohol: "40% vol.",
        size: "700 ml",
        note: "Για πρώτο tasting",
        featured: true,
        image:
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=90",
    },
    {
        id: "2",
        name: "Aegean Reserve",
        category: "Premium",
        description:
            "Πιο αρωματικό και γεμάτο. Ταιριάζει σε αργό δείπνο δίπλα στη θάλασσα ή σε μια πιο ιδιαίτερη γαστρονομική στάση.",
        alcohol: "42% vol.",
        size: "700 ml",
        note: "Για food pairing",
        image:
            "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1400&q=90",
    },
    {
        id: "3",
        name: "Aegean No. 7",
        category: "Limited",
        description:
            "Μικρή παραγωγή, πιο συλλεκτικός χαρακτήρας και προσεγμένη φιάλη. Ωραία επιλογή ως αναμνηστικό από το ταξίδι.",
        alcohol: "45% vol.",
        size: "500 ml",
        note: "Για δώρο",
        image:
            "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=1400&q=90",
    },
    {
        id: "4",
        name: "Aegean Mini",
        category: "Mini",
        description:
            "Μικρή συσκευασία για ταξιδιώτες που θέλουν να πάρουν μαζί τους μια γεύση Αιγαίου χωρίς να γεμίσουν τη βαλίτσα.",
        alcohol: "40% vol.",
        size: "200 ml",
        note: "Για τη βαλίτσα",
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90",
    },
];

const guideLinks = [
    { label: "Τοπικό προϊόν", href: "#local-product" },
    { label: "Πώς να το δοκιμάσεις", href: "#experience" },
    { label: "Επιλογές", href: "#products" },
];

function getCategoryBadge(category: LocalProduct["category"]) {
    switch (category) {
        case "Premium":
            return "Food pairing";
        case "Limited":
            return "Souvenir pick";
        case "Mini":
            return "Travel size";
        default:
            return "Local classic";
    }
}

export default function LocalOuzoGuideSection() {
    const [activeCategory, setActiveCategory] = useState<ProductCategory>("Όλα");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        const query = searchTerm.trim().toLocaleLowerCase("el");

        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "Όλα" || product.category === activeCategory;

            const matchesSearch =
                !query ||
                product.name.toLocaleLowerCase("el").includes(query) ||
                product.description.toLocaleLowerCase("el").includes(query) ||
                product.category.toLocaleLowerCase("el").includes(query) ||
                product.note.toLocaleLowerCase("el").includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    const resetFilters = () => {
        setActiveCategory("Όλα");
        setSearchTerm("");
    };

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

                .editorial-card {
                    background-image:
                            linear-gradient(rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.78)),
                            radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 36%),
                            radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.12), transparent 34%);
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
                <section
                    id="local-product"
                    className="relative overflow-hidden bg-[#f8fafc] px-5 py-8 sm:px-8 lg:py-12"
                >
                    <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#bfdbfe]/70 blur-3xl" />
                    <div className="absolute -right-40 bottom-12 h-[480px] w-[480px] rounded-full bg-[#dbeafe] blur-3xl" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-[#0f172a]/10 bg-white/75 px-4 py-4 shadow-xl shadow-[#0f172a]/5 backdrop-blur-xl sm:justify-between sm:px-6">
                            <a href="#local-product" className="group flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0f172a] text-white transition group-hover:scale-105">
                  <Compass className="h-5 w-5" />
                </span>

                                <span>
                  <span className="block font-serif text-xl leading-none">
                    Local Taste Guide
                  </span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-[#64748b]">
                    Greek spirits & places
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
                                href="#products"
                                className="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                            >
                                Δες επιλογές
                            </a>
                        </div>

                        <div className="grid min-h-[720px] items-center gap-12 rounded-[2.75rem] border border-[#0f172a]/10 bg-white/70 p-5 shadow-2xl shadow-[#0f172a]/5 backdrop-blur-xl sm:p-8 lg:grid-cols-[1.05fr_.95fr] lg:p-12">
                            <div className="max-w-2xl animate-fade-up">
                                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#2563eb]/15 bg-[#eff6ff] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#2563eb]">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    Πρόταση ταξιδιωτικού οδηγού
                                </div>

                                <h1 className="font-serif text-5xl leading-[1] tracking-[-0.045em] text-[#0f172a] sm:text-7xl lg:text-[82px]">
                                    Μια γεύση Αιγαίου,
                                    <span className="mt-2 block italic text-[#2563eb]">
                    πριν φύγεις.
                  </span>
                                </h1>

                                <p className="mt-8 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
                                    Αν θέλεις να γνωρίσεις έναν τόπο, ξεκίνα από αυτά που
                                    σερβίρονται στο τραπέζι του. Το Aegean Ouzo είναι μια
                                    τοπική πρόταση που συνδέει άρωμα, φιλοξενία και ελληνικό
                                    καλοκαίρι σε μία εμπειρία.
                                </p>

                                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                                    {[
                                        ["01", "Τοπικό προϊόν"],
                                        ["02", "Ιδανικό με μεζέδες"],
                                        ["03", "Ωραίο souvenir"],
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
                                        Πώς να το δοκιμάσεις
                                        <ArrowRight className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="#products"
                                        className="inline-flex items-center justify-center rounded-full border border-[#0f172a]/15 bg-white px-7 py-4 font-medium text-[#0f172a] transition hover:bg-[#eff6ff]"
                                    >
                                        Δες τη συλλογή
                                    </a>
                                </div>
                            </div>

                            <div className="relative mx-auto w-full max-w-xl animate-fade-up delay-2 lg:max-w-none">
                                <div className="absolute -right-6 -top-6 z-10 rounded-2xl bg-[#0f172a] px-5 py-4 text-white shadow-xl">
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                                        Guide note
                                    </p>
                                    <p className="mt-1 font-serif text-2xl">Try it slowly</p>
                                </div>

                                <div className="relative overflow-hidden rounded-[2.25rem] shadow-2xl shadow-[#0f172a]/15">
                                    <img
                                        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=90"
                                        alt="Τοπικό ούζο ως εμπειρία ταξιδιού"
                                        className="h-[520px] w-full object-cover sm:h-[640px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                                        <p className="text-xs uppercase tracking-[0.25em] text-[#bfdbfe]">
                                            Local ritual
                                        </p>
                                        <p className="mt-2 max-w-sm font-serif text-3xl text-white">
                                            Σερβίρεται με νερό, πάγο και μικρούς ελληνικούς μεζέδες.
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
                                                Travel pick
                                            </p>
                                            <p className="text-xs text-[#64748b]">
                                                Για αυθεντική τοπική γεύση
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="experience" className="bg-[#0f172a] py-24 text-white sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                            <div className="animate-fade-up">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#93c5fd]">
                                    Η εμπειρία
                                </p>

                                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">
                                    Δεν είναι απλώς ποτό. Είναι στάση στο ταξίδι.
                                </h2>

                                <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                                    Στον οδηγό σου μπορεί να παρουσιαστεί ως μικρή τοπική
                                    εμπειρία: κάτι που ο επισκέπτης δοκιμάζει σε ένα ταβερνάκι,
                                    παίρνει ως δώρο ή συνδέει με μια βραδιά δίπλα στη θάλασσα.
                                </p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                {[
                                    {
                                        icon: Utensils,
                                        title: "Με τι ταιριάζει",
                                        body: "Με θαλασσινά, ελιές, τυριά, ντολμαδάκια και απλούς ελληνικούς μεζέδες.",
                                    },
                                    {
                                        icon: Droplets,
                                        title: "Πώς σερβίρεται",
                                        body: "Συνήθως με λίγο νερό και πάγο, ώστε να ανοίξουν τα αρώματα του γλυκάνισου.",
                                    },
                                    {
                                        icon: MapPin,
                                        title: "Γιατί να το ψάξεις",
                                        body: "Γιατί είναι από τις γεύσεις που συνδέονται άμεσα με ελληνική φιλοξενία και καλοκαίρι.",
                                    },
                                    {
                                        icon: Compass,
                                        title: "Tip οδηγού",
                                        body: "Πρότεινέ το ως after-dinner εμπειρία ή ως τοπικό προϊόν που αξίζει να μπει στη βαλίτσα.",
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

                <section id="products" className="bg-[#f1f5f9] py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                    Επιλογές για τον ταξιδιώτη
                                </p>

                                <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-[-0.03em] sm:text-6xl">
                                    Ποια εκδοχή ταιριάζει στην εμπειρία σου;
                                </h2>
                            </div>

                            <label className="relative block w-full lg:w-[340px]">
                                <span className="sr-only">Αναζήτηση προϊόντος</span>
                                <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
                                <input
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    placeholder="Αναζήτηση επιλογής..."
                                    className="h-14 w-full rounded-full border border-[#0f172a]/10 bg-white pl-12 pr-5 text-sm outline-none transition placeholder:text-[#64748b]/70 focus:border-[#2563eb]"
                                />
                            </label>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-2">
                            {productCategories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${
                                        activeCategory === category
                                            ? "bg-[#0f172a] text-white shadow-lg shadow-[#0f172a]/15"
                                            : "border border-[#0f172a]/10 bg-white text-[#475569] hover:bg-[#eff6ff]"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <article
                                    key={product.id}
                                    style={{ animationDelay: `${Number(product.id) * 90}ms` }}
                                    className={`group animate-fade-up overflow-hidden rounded-[1.75rem] border border-[#0f172a]/10 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0f172a]/10 ${
                                        product.featured ? "md:col-span-2 xl:col-span-1" : ""
                                    }`}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f172a] backdrop-blur">
                        {getCategoryBadge(product.category)}
                      </span>

                                            <span className="rounded-full bg-[#0f172a]/75 px-3 py-1.5 text-xs text-white backdrop-blur">
                        {product.size}
                      </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                                            {product.note}
                                        </p>

                                        <h3 className="mt-3 font-serif text-3xl">
                                            {product.name}
                                        </h3>

                                        <p className="mt-4 min-h-[96px] text-sm leading-6 text-[#64748b]">
                                            {product.description}
                                        </p>

                                        <div className="mt-6 flex items-center justify-between border-t border-[#0f172a]/10 pt-5">
                      <span className="text-sm font-semibold">
                        {product.alcohol}
                      </span>

                                            <button
                                                type="button"
                                                aria-label={`Περισσότερα για ${product.name}`}
                                                className="grid h-10 w-10 place-items-center rounded-full bg-[#0f172a] text-white transition duration-300 hover:scale-110 group-hover:rotate-[-8deg] group-hover:bg-[#2563eb]"
                                            >
                                                <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="mt-12 rounded-3xl border border-dashed border-[#0f172a]/20 bg-white px-6 py-16 text-center">
                                <Search className="mx-auto h-8 w-8 text-[#64748b]" />
                                <h3 className="mt-4 font-serif text-2xl">
                                    Δεν βρέθηκε επιλογή
                                </h3>
                                <p className="mt-2 text-sm text-[#64748b]">
                                    Δοκίμασε διαφορετικό όρο ή κατηγορία.
                                </p>

                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="mt-6 rounded-full bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2563eb]"
                                >
                                    Καθαρισμός φίλτρων
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                <section className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="overflow-hidden rounded-[2rem] border border-[#0f172a]/10 bg-[#eff6ff]">
                            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                                <div className="p-8 sm:p-12 lg:p-16">
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                                        Σημείωση οδηγού
                                    </p>

                                    <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-6xl">
                                        Πρόσθεσέ το ως τοπική πρόταση, όχι ως απλή διαφήμιση.
                                    </h2>

                                    <p className="mt-6 max-w-xl leading-7 text-[#475569]">
                                        Μπορείς να το παρουσιάσεις δίπλα σε προτάσεις για φαγητό,
                                        παραθαλάσσιες βόλτες ή αγορές τοπικών προϊόντων. Έτσι
                                        μοιάζει οργανικό μέσα στον ταξιδιωτικό οδηγό σου.
                                    </p>

                                    <a
                                        href="mailto:hello@aegeanouzo.gr"
                                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                                    >
                                        Επικοινωνία με παραγωγό
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>

                                <div className="grid border-t border-[#0f172a]/10 lg:border-l lg:border-t-0">
                                    {[
                                        { icon: MapPin, title: "Περιοχή", text: "Αθήνα, Ελλάδα" },
                                        {
                                            icon: Clock3,
                                            title: "Πότε να το προτείνεις",
                                            text: "Μεσημεριανό, δείπνο ή sunset stop",
                                        },
                                        {
                                            icon: Instagram,
                                            title: "Για τον ταξιδιώτη",
                                            text: "Τοπική γεύση, δώρο ή εμπειρία",
                                        },
                                    ].map(({ icon: InfoIcon, title, text }, index) => (
                                        <div
                                            key={title}
                                            className={`flex gap-5 p-8 sm:p-10 ${
                                                index > 0 ? "border-t border-[#0f172a]/10" : ""
                                            }`}
                                        >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#2563eb]/20 bg-white text-[#2563eb]">
                        <InfoIcon className="h-5 w-5" />
                      </span>

                                            <div>
                                                <p className="font-serif text-xl">{title}</p>
                                                <p className="mt-2 text-sm text-[#64748b]">{text}</p>
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
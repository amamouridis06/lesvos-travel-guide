"use client";

import React, { useMemo, useState } from "react";
type IconProps = React.SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps & { children: React.ReactNode }) {
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

const ArrowRight = (props: IconProps) => <Icon {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
const ChevronRight = (props: IconProps) => <Icon {...props}><path d="m9 18 6-6-6-6" /></Icon>;
const Menu = (props: IconProps) => <Icon {...props}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
const X = (props: IconProps) => <Icon {...props}><path d="M6 6l12 12M18 6 6 18" /></Icon>;
const Search = (props: IconProps) => <Icon {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>;
const Sparkles = (props: IconProps) => <Icon {...props}><path d="m12 3 1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3Z" /><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" /></Icon>;
const Wine = (props: IconProps) => <Icon {...props}><path d="M8 3h8l-1 6a5 5 0 0 1-10 0L8 3Z" /><path d="M12 14v7M8 21h8" /></Icon>;
const Award = (props: IconProps) => <Icon {...props}><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-3 4.5 3-1-9" /></Icon>;
const Droplets = (props: IconProps) => <Icon {...props}><path d="M12 3s-5 5.2-5 9a5 5 0 0 0 10 0c0-3.8-5-9-5-9Z" /><path d="M5 16c-1.2 1.4-2 2.7-2 3.8a2.5 2.5 0 0 0 5 0" /></Icon>;
const Mail = (props: IconProps) => <Icon {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>;
const MapPin = (props: IconProps) => <Icon {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>;
const Clock3 = (props: IconProps) => <Icon {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l-3 2" /></Icon>;
const Instagram = (props: IconProps) => <Icon {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></Icon>;

const productCategories = ["Όλα", "Κλασικό", "Premium", "Limited", "Mini"] as const;
type ProductCategory = (typeof productCategories)[number];

type OuzoProduct = {
    id: string;
    name: string;
    category: Exclude<ProductCategory, "Όλα">;
    description: string;
    alcohol: string;
    size: string;
    eyebrow: string;
    image: string;
    featured?: boolean;
};

const products: OuzoProduct[] = [
    {
        id: "1",
        name: "Aegean Classic",
        category: "Κλασικό",
        description:
            "Ισορροπημένος χαρακτήρας, καθαρό άρωμα γλυκάνισου και απαλή, δροσερή επίγευση.",
        alcohol: "40% vol.",
        size: "700 ml",
        eyebrow: "The original",
        featured: true,
        image:
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=90",
    },
    {
        id: "2",
        name: "Aegean Reserve",
        category: "Premium",
        description:
            "Επιλεγμένα αρωματικά, αργή απόσταξη και γεμάτο σώμα για μια εκλεπτυσμένη εμπειρία.",
        alcohol: "42% vol.",
        size: "700 ml",
        eyebrow: "Small batch",
        image:
            "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1400&q=90",
    },
    {
        id: "3",
        name: "Aegean No. 7",
        category: "Limited",
        description:
            "Περιορισμένη παραγωγή με σύνθετο αρωματικό προφίλ και αριθμημένη φιάλη.",
        alcohol: "45% vol.",
        size: "500 ml",
        eyebrow: "Limited edition",
        image:
            "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=1400&q=90",
    },
    {
        id: "4",
        name: "Aegean Mini",
        category: "Mini",
        description:
            "Η αυθεντική γεύση του Αιγαίου σε premium mini συσκευασία για δώρα και horeca.",
        alcohol: "40% vol.",
        size: "200 ml",
        eyebrow: "Travel size",
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90",
    },
];

const navItems = [
    { label: "Η ιστορία μας", href: "#about" },
    { label: "Συλλογή", href: "#products" },
    { label: "Επικοινωνία", href: "#contact" },
];

export default function OuzoCompanyPagePremium() {
    const [activeCategory, setActiveCategory] = useState<ProductCategory>("Όλα");
    const [searchTerm, setSearchTerm] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const filteredProducts = useMemo(() => {
        const query = searchTerm.trim().toLocaleLowerCase("el");

        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "Όλα" || product.category === activeCategory;
            const matchesSearch =
                !query ||
                product.name.toLocaleLowerCase("el").includes(query) ||
                product.description.toLocaleLowerCase("el").includes(query) ||
                product.category.toLocaleLowerCase("el").includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <>
            <style jsx global>{`
                html { scroll-behavior: smooth; }
                @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes floatSoft { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-16px) rotate(2deg); } }
                @keyframes drift { 0%,100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(24px,-18px,0); } }
                @keyframes pulseGlow { 0%,100% { opacity: .45; transform: scale(1); } 50% { opacity: .8; transform: scale(1.08); } }
                @keyframes shimmer { 0% { transform: translateX(-140%); } 100% { transform: translateX(240%); } }
                @keyframes popIn { 0% { opacity: 0; transform: scale(.75) rotate(-8deg); } 70% { transform: scale(1.08) rotate(2deg); } 100% { opacity: 1; transform: scale(1) rotate(0); } }
                .animate-fade-up { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) both; }
                .animate-float-soft { animation: floatSoft 5.5s ease-in-out infinite; }
                .animate-drift { animation: drift 9s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulseGlow 5s ease-in-out infinite; }
                .animate-pop-in { animation: popIn .75s cubic-bezier(.22,1,.36,1) both; }
                .delay-1 { animation-delay: .12s; } .delay-2 { animation-delay: .24s; } .delay-3 { animation-delay: .36s; }
                .shine { position: relative; overflow: hidden; }
                .shine::after { content: ""; position: absolute; inset: 0; width: 35%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.28), transparent); transform: translateX(-140%); }
                .shine:hover::after { animation: shimmer .9s ease; }
                @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; } }
            `}</style>
            <main className="min-h-screen overflow-x-hidden bg-[#eff6ff] text-[#0f172a] selection:bg-[#3b82f6] selection:text-white">
                <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1f3a]/85 text-white backdrop-blur-xl">
                    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
                        <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#60a5fa]/40 bg-white/5 transition group-hover:rotate-6 group-hover:bg-white/10">
              <Wine className="h-5 w-5 text-[#93c5fd]" />
            </span>
                            <span>
              <span className="block font-serif text-lg tracking-wide">Aegean Ouzo</span>
              <span className="block text-[10px] uppercase tracking-[0.32em] text-white/55">
                Est. 1924 · Greece
              </span>
            </span>
                        </a>

                        <nav className="hidden items-center gap-8 lg:flex">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-white/70 transition hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <div className="hidden items-center gap-3 sm:flex">
                            <a
                                href="#products"
                                className="inline-flex items-center gap-2 rounded-full border border-[#60a5fa]/50 px-5 py-2.5 text-sm font-medium text-[#bfdbfe] transition hover:bg-[#60a5fa] hover:text-[#0f172a]"
                            >
                                Ανακάλυψε τη συλλογή
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>

                        <button
                            type="button"
                            aria-label={mobileMenuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
                            className="rounded-full border border-white/15 p-2.5 sm:hidden"
                            onClick={() => setMobileMenuOpen((value) => !value)}
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="border-t border-white/10 bg-[#0b1f3a] px-5 py-5 sm:hidden">
                            <nav className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-between rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                                    >
                                        {item.label}
                                        <ChevronRight className="h-4 w-4" />
                                    </a>
                                ))}
                            </nav>
                        </div>
                    )}
                </header>

                <section id="top" className="relative min-h-[880px] bg-[#0b1f3a] pt-20 text-white">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="animate-drift absolute -left-48 top-32 h-96 w-96 rounded-full bg-[#1d4ed8]/35 blur-3xl" />
                        <div className="animate-pulse-glow absolute -right-24 bottom-0 h-[520px] w-[520px] rounded-full bg-[#3b82f6]/15 blur-3xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
                    </div>

                    <div className="relative mx-auto grid min-h-[800px] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
                        <div className="max-w-2xl animate-fade-up">
                            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#93c5fd] backdrop-blur">
                                <Sparkles className="h-3.5 w-3.5" />
                                ✨ Απόσταξη με ψυχή Αιγαίου
                            </div>

                            <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[88px]">
                                Η Ελλάδα,
                                <span className="mt-2 block italic text-[#60a5fa] animate-fade-up delay-1">σε μία σταγόνα.</span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                                Premium ελληνικό ούζο από εκλεκτό γλυκάνισο, κρυστάλλινο νερό και
                                μια συνταγή που ταξιδεύει από γενιά σε γενιά.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#products"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3b82f6] px-7 py-4 font-semibold text-[#0f172a] transition hover:-translate-y-0.5 hover:bg-[#60a5fa]"
                                >
                                    🍸 Γνώρισε τα προϊόντα
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                                <a
                                    href="#about"
                                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-medium text-white/85 transition hover:bg-white/10"
                                >
                                    📜 Η ιστορία μας
                                </a>
                            </div>

                            <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/10 pt-8">
                                {[
                                    ["100+", "Χρόνια τέχνης"],
                                    ["7", "Βότανα & αρώματα"],
                                    ["12", "Χώρες εξαγωγής"],
                                ].map(([value, label]) => (
                                    <div key={label}>
                                        <p className="font-serif text-2xl text-[#93c5fd] sm:text-3xl">{value}</p>
                                        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/45">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-xl animate-fade-up delay-2 lg:max-w-none">
                            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/10" />
                            <div className="shine relative overflow-hidden rounded-[2.25rem] bg-[#12345b] shadow-2xl shadow-black/30 transition duration-700 hover:-translate-y-2 hover:rotate-[.5deg]">
                                <img
                                    src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=90"
                                    alt="Premium ελληνικό ούζο"
                                    className="h-[540px] w-full object-cover sm:h-[650px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#93c5fd]">Signature serve</p>
                                    <p className="mt-2 max-w-sm font-serif text-3xl">Πάγος, νερό και καλή παρέα.</p>
                                </div>
                            </div>
                            <div className="animate-float-soft absolute -bottom-7 -left-5 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:-left-10 sm:p-5">
                                <div className="flex items-center gap-3">
                                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[#3b82f6] text-[#0f172a]">
                                        <Award className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">🏆 Gold Selection</p>
                                        <p className="text-xs text-white/50">Mediterranean Spirits 2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="relative py-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
                        <div className="relative">
                            <div className="animate-fade-up overflow-hidden rounded-[2rem] transition duration-700 hover:-translate-y-2 hover:rotate-[-.5deg]">
                                <img
                                    src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=1200&q=90"
                                    alt="Παραδοσιακή απόσταξη"
                                    className="h-[540px] w-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 right-3 max-w-[250px] rounded-2xl bg-[#3b82f6] p-6 text-[#0f172a] shadow-xl sm:-right-8">
                                <Droplets className="h-6 w-6" />
                                <p className="mt-4 font-serif text-2xl leading-tight">Αργή απόσταξη. Καθαρός χαρακτήρας.</p>
                            </div>
                        </div>

                        <div className="animate-fade-up delay-1 lg:pl-12">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">🌿 Η φιλοσοφία μας</p>
                            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">
                                Παράδοση που δεν μένει ποτέ στάσιμη.
                            </h2>
                            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#475569]">
                                Από το 1924, επιλέγουμε τις πρώτες ύλες μας με την ίδια φροντίδα.
                                Συνδυάζουμε την ελληνική τεχνογνωσία με σύγχρονη αισθητική, δημιουργώντας
                                ένα ούζο αυθεντικό, καθαρό και ξεχωριστό.
                            </p>

                            <div className="mt-10 grid gap-5 sm:grid-cols-2">
                                {[
                                    ["01", "🌿 Επιλεγμένος γλυκάνισος", "Αρωματικός και ισορροπημένος, από ελληνικές καλλιέργειες."],
                                    ["02", "⚗️ Μικρές παρτίδες", "Κάθε απόσταξη ελέγχεται προσεκτικά για σταθερή ποιότητα."],
                                ].map(([number, title, body]) => (
                                    <div key={number} className="rounded-2xl border border-[#0f172a]/10 bg-white/55 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                                        <span className="text-xs font-semibold text-[#2563eb]">{number}</span>
                                        <h3 className="mt-4 font-serif text-2xl">{title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-[#64748b]">{body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="products" className="bg-[#dbeafe] py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">🍾 Η συλλογή</p>
                                <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] sm:text-6xl">Βρες το δικό σου Αιγαίο.</h2>
                            </div>

                            <label className="relative block w-full lg:w-[340px]">
                                <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
                                <input
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    placeholder="Αναζήτηση προϊόντος..."
                                    className="h-14 w-full rounded-full border border-[#0f172a]/10 bg-white/70 pl-12 pr-5 text-sm outline-none transition placeholder:text-[#64748b]/70 focus:border-[#2563eb] focus:bg-white"
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
                                            : "border border-[#0f172a]/10 bg-white/55 text-[#475569] hover:bg-white"
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
                                    className={`group animate-fade-up overflow-hidden rounded-[1.75rem] border border-black/5 bg-[#eff6ff] transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0f172a]/10 ${
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
                    <span className="rounded-full bg-[#eff6ff]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f172a] backdrop-blur">
                      {product.category === "Premium" ? "✨ Premium" : product.category === "Limited" ? "💎 Limited" : product.category === "Mini" ? "🎁 Mini" : "🌊 Κλασικό"}
                    </span>
                                            <span className="rounded-full bg-[#0f172a]/70 px-3 py-1.5 text-xs text-white backdrop-blur">
                      {product.size}
                    </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2563eb]">{product.eyebrow}</p>
                                        <h3 className="mt-3 font-serif text-3xl">{product.name}</h3>
                                        <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#64748b]">{product.description}</p>
                                        <div className="mt-6 flex items-center justify-between border-t border-[#0f172a]/10 pt-5">
                                            <span className="text-sm font-semibold">{product.alcohol}</span>
                                            <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-[#0f172a] transition duration-300 hover:scale-110 text-white transition group-hover:rotate-[-8deg] group-hover:bg-[#2563eb]">
                                                <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="mt-12 rounded-3xl border border-dashed border-[#0f172a]/20 bg-white/40 px-6 py-16 text-center">
                                <Search className="mx-auto h-8 w-8 text-[#64748b]" />
                                <h3 className="mt-4 font-serif text-2xl">Δεν βρέθηκε προϊόν</h3>
                                <p className="mt-2 text-sm text-[#64748b]">Δοκίμασε διαφορετικό όρο ή κατηγορία.</p>
                            </div>
                        )}
                    </div>
                </section>

                <section id="contact" className="bg-[#0f172a] py-24 text-white sm:py-32">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8">
                        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#132a4a]">
                            <div className="grid lg:grid-cols-[1.1fr_.9fr]">
                                <div className="p-8 sm:p-12 lg:p-16">
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3b82f6]">Συνεργασίες & διανομή</p>
                                    <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-6xl">🌊 Ας φέρουμε το Αιγαίο πιο κοντά.</h2>
                                    <p className="mt-6 max-w-xl leading-7 text-white/60">
                                        Για horeca, retail, εταιρικά δώρα και διεθνείς συνεργασίες,
                                        η ομάδα μας είναι έτοιμη να σχεδιάσει την κατάλληλη πρόταση.
                                    </p>
                                    <a
                                        href="mailto:hello@aegeanouzo.gr"
                                        className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-7 py-4 font-semibold text-[#0f172a] transition hover:bg-[#93c5fd]"
                                    >
                                        💌 Μίλησε με την ομάδα μας
                                        <Mail className="h-4 w-4" />
                                    </a>
                                </div>

                                <div className="grid border-t border-white/10 lg:border-l lg:border-t-0">
                                    {[
                                        { icon: MapPin, title: "Showroom", text: "Αθήνα, Ελλάδα" },
                                        { icon: Clock3, title: "Ώρες λειτουργίας", text: "Δευτέρα – Παρασκευή · 09:00–17:00" },
                                        { icon: Instagram, title: "Social", text: "@aegeanouzo" },
                                    ].map(({ icon: Icon, title, text }, index) => (
                                        <div key={title} className={`flex gap-5 p-8 sm:p-10 ${index > 0 ? "border-t border-white/10" : ""}`}>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#93c5fd]">
                      <Icon className="h-5 w-5" />
                    </span>
                                            <div>
                                                <p className="font-serif text-xl">{title}</p>
                                                <p className="mt-2 text-sm text-white/55">{text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}

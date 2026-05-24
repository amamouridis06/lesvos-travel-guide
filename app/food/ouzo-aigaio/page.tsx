"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    Award,
    ChevronRight,
    Clock,
    Droplets,
    Grape,
    Leaf,
    MapPin,
    Menu,
    Search,
    ShieldCheck,
    Sparkles,
    Star,
    Waves,
    Wine,
    X,
} from "lucide-react";

const productCategories = ["Όλα", "Κλασικό", "Premium", "Limited", "Mini"] as const;

type ProductCategory = (typeof productCategories)[number];

type OuzoProduct = {
    id: string;
    name: string;
    category: ProductCategory;
    description: string;
    alcohol: string;
    size: string;
    tags: string[];
    image: string;
    featured?: boolean;
};

const products: OuzoProduct[] = [
    {
        id: "classic-ouzo",
        name: "Aegean Classic Ouzo",
        category: "Κλασικό",
        description: "Παραδοσιακό ούζο με καθαρό άρωμα γλυκάνισου, ισορροπημένο σώμα και απαλό τελείωμα.",
        alcohol: "40% vol",
        size: "700ml",
        tags: ["Γλυκάνισος", "Best seller", "Παραδοσιακό"],
        featured: true,
        image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "premium-reserve",
        name: "Blue Reserve",
        category: "Premium",
        description: "Premium απόσταξη με πιο σύνθετο αρωματικό προφίλ, νότες βοτάνων και κομψή επίγευση.",
        alcohol: "42% vol",
        size: "700ml",
        tags: ["Premium", "Slow distilled", "Elegant"],
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "island-limited",
        name: "Island Limited Edition",
        category: "Limited",
        description: "Ειδική έκδοση εμπνευσμένη από το Αιγαίο, ιδανική για δώρο, συλλογή και premium παρουσίαση.",
        alcohol: "41% vol",
        size: "500ml",
        tags: ["Limited", "Gift", "Aegean"],
        image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "mini-collection",
        name: "Mini Ouzo Collection",
        category: "Mini",
        description: "Μικρή φιάλη για τουριστικά σημεία πώλησης, γευσιγνωσία, εταιρικά δώρα και welcome packs.",
        alcohol: "40% vol",
        size: "200ml",
        tags: ["Mini bottle", "Gift", "Travel retail"],
        image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1200&q=80",
    },
];

const values = [
    {
        title: "Παράδοση",
        description: "Σεβασμός στην ελληνική τέχνη της απόσταξης και στις γεύσεις που συνοδεύουν το μεσογειακό τραπέζι.",
        icon: Grape,
    },
    {
        title: "Ποιότητα",
        description: "Σταθερός έλεγχος σε κάθε παρτίδα για άρωμα, καθαρότητα, ισορροπία και διαύγεια.",
        icon: ShieldCheck,
    },
    {
        title: "Ταυτότητα",
        description: "Brand εμπνευσμένο από το Αιγαίο, το ελληνικό φως και την αυθεντική φιλοξενία.",
        icon: Waves,
    },
];

const processSteps = [
    {
        title: "Επιλογή αρωματικών",
        description: "Γλυκάνισος, μάραθος και επιλεγμένα βότανα συνδυάζονται για σταθερό αρωματικό χαρακτήρα.",
        icon: Leaf,
    },
    {
        title: "Αργή απόσταξη",
        description: "Η διαδικασία γίνεται με προσοχή, ώστε να διατηρηθούν τα καθαρά αρώματα και η απαλή υφή.",
        icon: Droplets,
    },
    {
        title: "Ισορροπία blend",
        description: "Κάθε blend δοκιμάζεται για ένταση, διαύγεια και συνέπεια πριν περάσει στην εμφιάλωση.",
        icon: Wine,
    },
    {
        title: "Εμφιάλωση",
        description: "Η φιάλη ολοκληρώνεται με premium παρουσίαση, έτοιμη για retail, horeca και εξαγωγές.",
        icon: Sparkles,
    },
];

function Button({
                    children,
                    onClick,
                    className = "",
                }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}) {
    return (
        <button onClick={onClick} className={className} type="button">
            {children}
        </button>
    );
}

function ProductTag({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-sky-100 bg-white/90 px-3 py-1 text-xs font-bold text-sky-950 shadow-sm backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-sky-600" />
            {label}
    </span>
    );
}

export default function OuzoCompanyPage() {
    const [activeCategory, setActiveCategory] = useState<ProductCategory>("Όλα");
    const [searchTerm, setSearchTerm] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const featuredProduct = products.find((product) => product.featured) ?? products[0];

    const filteredProducts = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return products.filter((product) => {
            const matchesCategory = activeCategory === "Όλα" || product.category === activeCategory;
            const matchesSearch =
                normalizedSearch.length === 0 ||
                product.name.toLowerCase().includes(normalizedSearch) ||
                product.description.toLowerCase().includes(normalizedSearch) ||
                product.category.toLowerCase().includes(normalizedSearch) ||
                product.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <main className="min-h-screen bg-[#f7fbff] text-slate-950">
            <section className="relative min-h-screen overflow-hidden bg-[#06182f] px-5 py-5 text-white sm:px-8 lg:px-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.28),transparent_36%),linear-gradient(135deg,#06182f,#08284d_45%,#03101f)]" />
                <div className="absolute left-1/2 top-24 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f7fbff] to-transparent" />

                <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">
                    <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-sky-950 shadow-lg shadow-cyan-500/20">
                            <Waves className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-black leading-none">Aegean Ouzo Co.</p>
                            <p className="mt-1 text-xs text-sky-100/80">Greek Distillery</p>
                        </div>
                    </div>

                    <div className="hidden items-center gap-7 text-sm font-semibold text-sky-100/80 md:flex">
                        <a href="#about" className="transition hover:text-white">Εταιρεία</a>
                        <a href="#products" className="transition hover:text-white">Προϊόντα</a>
                        <a href="#process" className="transition hover:text-white">Απόσταξη</a>
                        <a href="#contact" className="transition hover:text-white">Επικοινωνία</a>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen((value) => !value)}
                        className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white md:hidden"
                        type="button"
                        aria-label="Άνοιγμα μενού"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </nav>

                {mobileMenuOpen && (
                    <div className="relative z-20 mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl md:hidden">
                        <div className="grid gap-2 text-sm font-bold text-white">
                            <a href="#about" className="rounded-2xl px-4 py-3 hover:bg-white/10">Εταιρεία</a>
                            <a href="#products" className="rounded-2xl px-4 py-3 hover:bg-white/10">Προϊόντα</a>
                            <a href="#process" className="rounded-2xl px-4 py-3 hover:bg-white/10">Απόσταξη</a>
                            <a href="#contact" className="rounded-2xl px-4 py-3 hover:bg-white/10">Επικοινωνία</a>
                        </div>
                    </div>
                )}

                <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
                    <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-sm font-bold text-cyan-100 shadow-lg shadow-sky-950/20 backdrop-blur">
                            <Award className="h-4 w-4" /> Premium Greek Ouzo · Since 1968
                        </div>

                        <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            Αυθεντικό ελληνικό ούζο με χαρακτήρα Αιγαίου.
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-sky-100/80 sm:text-xl">
                            Μια εταιρική παρουσίαση για αποστακτήριο ούζου: παράδοση, ποιότητα, προϊόντα και premium ελληνική ταυτότητα σε μία καθαρή landing page.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#products"
                                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-black text-sky-950 shadow-xl shadow-cyan-950/20 transition hover:bg-cyan-50"
                            >
                                Δες τα προϊόντα <ChevronRight className="ml-2 h-4 w-4" />
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                            >
                                Γνώρισε την εταιρεία
                            </a>
                        </div>

                        <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-3xl font-black">56+</p>
                                <p className="mt-1 text-sm text-sky-100/70">χρόνια εμπειρίας</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-3xl font-black">4</p>
                                <p className="mt-1 text-sm text-sky-100/70">σειρές ούζου</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-3xl font-black">100%</p>
                                <p className="mt-1 text-sm text-sky-100/70">ελληνικό brand</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-5 rounded-[2.8rem] bg-gradient-to-br from-cyan-300/30 via-sky-500/20 to-transparent blur-2xl" />
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
                            <div className="relative h-[540px] overflow-hidden">
                                <img src={featuredProduct.image} alt={featuredProduct.name} className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#03101f] via-[#03101f]/35 to-transparent" />
                                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-black text-sky-950 shadow-lg">
                                    Featured product
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">{featuredProduct.category}</p>
                                    <h2 className="mt-3 text-4xl font-black text-white">{featuredProduct.name}</h2>
                                    <p className="mt-3 max-w-xl leading-7 text-sky-100/80">{featuredProduct.description}</p>
                                    <div className="mt-5 flex flex-wrap items-center gap-2">
                                        <span className="rounded-full bg-cyan-200 px-3 py-1 text-xs font-black text-sky-950">{featuredProduct.alcohol}</span>
                                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black text-white backdrop-blur">{featuredProduct.size}</span>
                                        {featuredProduct.tags.map((tag) => (
                                            <ProductTag key={tag} label={tag} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="about" className="relative bg-[#f7fbff] px-5 py-20 sm:px-8 lg:px-14">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-700">Η εταιρεία</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
                            Ένα αποστακτήριο με ελληνική ψυχή και σύγχρονη παρουσία.
                        </h2>
                    </div>
                    <div className="space-y-5 text-lg leading-8 text-slate-600">
                        <p>
                            Η Aegean Ouzo Co. παρουσιάζει μια premium εκδοχή του ελληνικού ούζου, βασισμένη στην παράδοση της απόσταξης, την καθαρότητα των αρωμάτων και την αισθητική του Αιγαίου.
                        </p>
                        <p>
                            Η σελίδα αυτή λειτουργεί σαν εταιρική παρουσίαση: δείχνει την ταυτότητα του brand, τις σειρές προϊόντων, τη διαδικασία παραγωγής και τη δυνατότητα συνεργασιών με horeca, retail και διανομείς.
                        </p>
                    </div>
                </div>

                <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200"
                            >
                                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-700">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-6 text-xl font-black">{value.title}</h3>
                                <p className="mt-3 leading-7 text-slate-600">{value.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section id="products" className="bg-white px-5 py-20 sm:px-8 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-700">Προϊόντα</p>
                            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Οι σειρές ούζου</h2>
                        </div>

                        <label className="relative block w-full lg:max-w-md">
                            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder="Αναζήτηση προϊόντος..."
                                className="w-full rounded-full border border-slate-200 bg-white px-11 py-3.5 text-sm shadow-sm outline-none ring-cyan-200 transition placeholder:text-slate-400 focus:ring-4"
                            />
                        </label>
                    </div>

                    <div className="mt-7 flex gap-2 overflow-x-auto pb-1">
                        {productCategories.map((category) => (
                            <Button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-black transition ${
                                    activeCategory === category
                                        ? "bg-sky-950 text-white shadow-lg shadow-sky-200/70"
                                        : "border border-slate-200 bg-white text-slate-700 hover:bg-sky-50"
                                }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    <motion.div layout className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {filteredProducts.map((product, index) => (
                            <motion.article
                                layout
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: index * 0.04 }}
                            >
                                <div className="group h-full overflow-hidden rounded-[2rem] bg-[#f8fbff] shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-100">
                                    <div className="relative h-72 overflow-hidden bg-sky-950">
                                        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/85 via-sky-950/20 to-transparent" />
                                        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-sky-950 backdrop-blur">
                                            {product.category}
                                        </div>
                                        {product.featured && (
                                            <div className="absolute right-4 top-4 rounded-full bg-cyan-200 px-3 py-1.5 text-xs font-black text-sky-950">
                                                Featured
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">{product.size}</p>
                                                <p className="mt-1 text-xl font-black">{product.alcohol}</p>
                                            </div>
                                            <Star className="h-5 w-5 fill-cyan-200 text-cyan-200" />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-black leading-tight text-slate-950">{product.name}</h3>
                                        <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {product.tags.map((tag) => (
                                                <ProductTag key={tag} label={tag} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section id="process" className="bg-[#06182f] px-5 py-20 text-white sm:px-8 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Παραγωγή</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Η διαδικασία απόσταξης</h2>
                        <p className="mt-5 text-lg leading-8 text-sky-100/75">
                            Από την επιλογή των αρωματικών μέχρι την εμφιάλωση, κάθε στάδιο υποστηρίζει την ποιότητα και την ταυτότητα του brand.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur"
                                >
                                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-200 text-sky-950">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-6 text-xl font-black">{step.title}</h3>
                                    <p className="mt-3 leading-7 text-sky-100/70">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#f7fbff] px-5 py-20 sm:px-8 lg:px-14">
                <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-sky-100 ring-1 ring-slate-200 lg:grid-cols-[1fr_0.9fr]">
                    <div className="p-8 sm:p-12">
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-700">Συνεργασίες</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                            Για horeca, retail, διανομή και εταιρικά δώρα.
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                            Η εταιρεία μπορεί να παρουσιαστεί σε επαγγελματικούς συνεργάτες, πελάτες και σημεία πώλησης με καθαρό, premium και αξιόπιστο τρόπο.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl bg-sky-50 p-5">
                                <MapPin className="h-5 w-5 text-sky-700" />
                                <p className="mt-3 font-black">Αθήνα, Ελλάδα</p>
                                <p className="mt-1 text-sm text-slate-600">Κεντρικά γραφεία & showroom</p>
                            </div>
                            <div className="rounded-3xl bg-sky-50 p-5">
                                <Clock className="h-5 w-5 text-sky-700" />
                                <p className="mt-3 font-black">Δευτέρα - Παρασκευή</p>
                                <p className="mt-1 text-sm text-slate-600">09:00 - 17:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[420px] bg-sky-950">
                        <img
                            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
                            alt="Ouzo bottles"
                            className="h-full w-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/25 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <Wine className="h-9 w-9 text-cyan-200" />
                            <p className="mt-4 text-2xl font-black">Drink responsibly.</p>
                            <p className="mt-2 text-sm leading-6 text-sky-100/75">
                                Περιεχόμενο για ενήλικες. Η κατανάλωση αλκοόλ πρέπει να γίνεται υπεύθυνα.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

"use client";

import React, { useMemo, useState } from "react";
import {
    Search,
    Menu,
    X,
    Wine,
    MapPin,
    Clock,
} from "lucide-react";

const productCategories = [
    "Όλα",
    "Κλασικό",
    "Premium",
    "Limited",
    "Mini",
] as const;

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
};

const products: OuzoProduct[] = [
    {
        id: "1",
        name: "Aegean Classic",
        category: "Κλασικό",
        description: "Παραδοσιακό ελληνικό ούζο με απαλό άρωμα γλυκάνισου.",
        alcohol: "40%",
        size: "700ml",
        tags: ["Smooth", "Greek"],
        image:
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "2",
        name: "Aegean Premium",
        category: "Premium",
        description: "Premium σειρά με πιο έντονο χαρακτήρα και καθαρή επίγευση.",
        alcohol: "42%",
        size: "700ml",
        tags: ["Premium", "Rich"],
        image:
            "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "3",
        name: "Aegean Mini",
        category: "Mini",
        description: "Μικρή premium συσκευασία ιδανική για δώρα και horeca.",
        alcohol: "40%",
        size: "200ml",
        tags: ["Mini", "Gift"],
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
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

export default function OuzoCompanyPage() {
    const [activeCategory, setActiveCategory] =
        useState<ProductCategory>("Όλα");

    const [searchTerm, setSearchTerm] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const filteredProducts = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "Όλα" ||
                product.category === activeCategory;

            const matchesSearch =
                normalizedSearch.length === 0 ||
                product.name.toLowerCase().includes(normalizedSearch) ||
                product.description
                    .toLowerCase()
                    .includes(normalizedSearch);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* NAVBAR */}
            <header className="border-b">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Wine className="h-6 w-6 text-sky-700" />
                        <div>
                            <h1 className="font-bold text-lg">
                                Aegean Ouzo Co.
                            </h1>
                            <p className="text-sm text-gray-500">
                                Greek Distillery
                            </p>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#about">Εταιρεία</a>
                        <a href="#products">Προϊόντα</a>
                        <a href="#contact">Επικοινωνία</a>
                    </nav>

                    <button
                        className="md:hidden"
                        onClick={() =>
                            setMobileMenuOpen((value) => !value)
                        }
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4">
                        <a href="#about">Εταιρεία</a>
                        <a href="#products">Προϊόντα</a>
                        <a href="#contact">Επικοινωνία</a>
                    </div>
                )}
            </header>

            {/* HERO */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <p className="text-sky-700 font-semibold uppercase text-sm tracking-widest">
                            Premium Greek Ouzo
                        </p>

                        <h2 className="mt-4 text-5xl font-bold leading-tight">
                            Αυθεντικό ελληνικό ούζο.
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
                            Premium ελληνικό ούζο με παράδοση,
                            καθαρότητα και σύγχρονη εταιρική
                            παρουσία.
                        </p>

                        <a
                            href="#products"
                            className="inline-block mt-8 bg-sky-700 text-white px-6 py-3 rounded-lg"
                        >
                            Δες τα προϊόντα
                        </a>
                    </div>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
                            alt="Ouzo"
                            className="rounded-2xl w-full h-[500px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section
                id="about"
                className="py-24 bg-slate-50"
            >
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-sky-700 font-semibold uppercase text-sm tracking-widest">
                        Η εταιρεία
                    </p>

                    <h2 className="mt-4 text-4xl font-bold">
                        Ελληνική παράδοση με σύγχρονη αισθητική.
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8 text-lg">
                        Η Aegean Ouzo Co. δημιουργεί premium
                        ελληνικό ούζο με έμφαση στην ποιότητα,
                        την καθαρότητα και την αυθεντική εμπειρία
                        του Αιγαίου.
                    </p>
                </div>
            </section>

            {/* PRODUCTS */}
            <section
                id="products"
                className="py-24"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <p className="text-sky-700 font-semibold uppercase text-sm tracking-widest">
                                Προϊόντα
                            </p>

                            <h2 className="mt-4 text-4xl font-bold">
                                Οι σειρές ούζου
                            </h2>
                        </div>

                        <div className="relative w-full lg:w-[320px]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

                            <input
                                value={searchTerm}
                                onChange={(e) =>
                                    setSearchTerm(e.target.value)
                                }
                                placeholder="Αναζήτηση προϊόντος..."
                                className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 mt-8 flex-wrap">
                        {productCategories.map((category) => (
                            <Button
                                key={category}
                                onClick={() =>
                                    setActiveCategory(category)
                                }
                                className={`px-5 py-2 rounded-lg text-sm border ${
                                    activeCategory === category
                                        ? "bg-sky-700 text-white border-sky-700"
                                        : "bg-white"
                                }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="border rounded-2xl overflow-hidden bg-white"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-72 w-full object-cover"
                                />

                                <div className="p-6">
                                    <p className="text-sm text-sky-700 font-medium">
                                        {product.category}
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold">
                                        {product.name}
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-7">
                                        {product.description}
                                    </p>

                                    <div className="flex gap-2 mt-5 flex-wrap">
                    <span className="bg-slate-100 px-3 py-1 rounded-md text-sm">
                      {product.alcohol}
                    </span>

                                        <span className="bg-slate-100 px-3 py-1 rounded-md text-sm">
                      {product.size}
                    </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section
                id="contact"
                className="py-24 bg-slate-50"
            >
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-sky-700 font-semibold uppercase text-sm tracking-widest">
                        Επικοινωνία
                    </p>

                    <h2 className="mt-4 text-4xl font-bold">
                        Συνεργασίες & διανομή
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 leading-8">
                        Για horeca, retail και επαγγελματικές
                        συνεργασίες επικοινωνήστε μαζί μας.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                        <div className="border rounded-2xl p-6 bg-white">
                            <MapPin className="h-5 w-5 text-sky-700" />

                            <h3 className="mt-4 font-bold">
                                Αθήνα, Ελλάδα
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Κεντρικά γραφεία & showroom
                            </p>
                        </div>

                        <div className="border rounded-2xl p-6 bg-white">
                            <Clock className="h-5 w-5 text-sky-700" />

                            <h3 className="mt-4 font-bold">
                                Δευτέρα - Παρασκευή
                            </h3>

                            <p className="mt-2 text-gray-600">
                                09:00 - 17:00
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
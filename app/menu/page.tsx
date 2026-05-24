"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    Award,
    Clock,
    Flame,
    Leaf,
    MapPin,
    Search,
    Sparkles,
    Star,
    UtensilsCrossed,
} from "lucide-react";

const categories = ["Όλα", "Signature", "Ορεκτικά", "Σαλάτες", "Κυρίως", "Ζυμαρικά", "Γλυκά", "Ποτά"] as const;

type Category = (typeof categories)[number];

type MenuItem = {
    id: string;
    name: string;
    category: Category;
    description: string;
    price: number;
    tags: string[];
    image: string;
    featured?: boolean;
};

const menuItems: MenuItem[] = [
    {
        id: "signature-sea-bass",
        name: "Λαβράκι με beurre blanc",
        category: "Signature",
        description: "Φιλέτο λαβράκι, κρέμα λεμονιού, μυρωδικά, baby λαχανικά και αρωματικό ελαιόλαδο.",
        price: 22.5,
        tags: ["chef", "fresh"],
        featured: true,
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "bruschetta",
        name: "Μπρουσκέτα με ντομάτα",
        category: "Ορεκτικά",
        description: "Προζυμένιο ψωμί, φρέσκια ντομάτα, βασιλικός και παρθένο ελαιόλαδο.",
        price: 6.5,
        tags: ["vegan", "popular"],
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "cheese-croquettes",
        name: "Τυροκροκέτες με dip ντομάτας",
        category: "Ορεκτικά",
        description: "Τραγανές κροκέτες τριών τυριών με σπιτική γλυκόξινη μαρμελάδα ντομάτας.",
        price: 7.8,
        tags: ["popular"],
        image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "greek-salad",
        name: "Χωριάτικη σαλάτα",
        category: "Σαλάτες",
        description: "Ντομάτα, αγγούρι, πιπεριά, ελιές Καλαμών, φέτα, κάπαρη και ρίγανη.",
        price: 8.9,
        tags: ["vegetarian"],
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "quinoa-salad",
        name: "Κινόα με αβοκάντο",
        category: "Σαλάτες",
        description: "Κινόα, αβοκάντο, ρόκα, ρόδι, καρύδια και dressing λεμονιού.",
        price: 10.5,
        tags: ["vegan", "fresh"],
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "tagliata",
        name: "Μοσχαρίσια ταλιάτα",
        category: "Κυρίως",
        description: "Μοσχάρι σχάρας, baby πατάτες, ρόκα, flakes παρμεζάνας και sauce ψημένου σκόρδου.",
        price: 19.9,
        tags: ["chef"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "salmon",
        name: "Σολομός σχάρας",
        category: "Κυρίως",
        description: "Φιλέτο σολομού με πουρέ σελινόριζας, λαχανικά εποχής και sauce λευκού κρασιού.",
        price: 18.5,
        tags: ["chef", "fresh"],
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "shrimp-linguine",
        name: "Λιγκουίνι με γαρίδες",
        category: "Ζυμαρικά",
        description: "Γαρίδες, ντοματίνια, σκόρδο, λευκό κρασί, μπούκοβο και φρέσκος μαϊντανός.",
        price: 16.8,
        tags: ["spicy", "popular", "chef"],
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "pesto-rigatoni",
        name: "Ριγκατόνι με πέστο",
        category: "Ζυμαρικά",
        description: "Σπιτικό πέστο βασιλικού, κουκουνάρι, παρμεζάνα και έξτρα παρθένο ελαιόλαδο.",
        price: 12.4,
        tags: ["vegetarian"],
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "lemon-cheesecake",
        name: "Cheesecake λεμόνι",
        category: "Γλυκά",
        description: "Κρέμα τυριού, βάση μπισκότου και δροσερή κρέμα λεμονιού με ξύσμα lime.",
        price: 6.9,
        tags: ["popular"],
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "chocolate-souffle",
        name: "Σουφλέ σοκολάτας",
        category: "Γλυκά",
        description: "Ζεστό σουφλέ με υγρή σοκολάτα, crumble κακάο και παγωτό βανίλια.",
        price: 7.5,
        tags: ["chef"],
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "lemonade",
        name: "Σπιτική λεμονάδα",
        category: "Ποτά",
        description: "Φρέσκο λεμόνι, δυόσμος, ανθρακούχο νερό και ελαφρύ σιρόπι αγαύης.",
        price: 4.2,
        tags: ["vegan", "fresh"],
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "signature-cocktail",
        name: "Aroma signature cocktail",
        category: "Ποτά",
        description: "Gin, elderflower, lime, αγγούρι και αρωματικός βασιλικός.",
        price: 9.8,
        tags: ["chef"],
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80",
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

function formatPrice(price: number) {
    return new Intl.NumberFormat("el-GR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(price);
}

function TagBadge({ tag }: { tag: string }) {
    const labelMap: Record<string, string> = {
        vegan: "Vegan",
        vegetarian: "Vegetarian",
        spicy: "Πικάντικο",
        popular: "Δημοφιλές",
        chef: "Chef's choice",
        fresh: "Φρέσκο",
    };

    const iconMap: Record<string, React.ReactNode> = {
        vegan: <Leaf className="h-3.5 w-3.5" />,
        vegetarian: <Leaf className="h-3.5 w-3.5" />,
        spicy: <Flame className="h-3.5 w-3.5" />,
        popular: <Star className="h-3.5 w-3.5" />,
        chef: <UtensilsCrossed className="h-3.5 w-3.5" />,
        fresh: <Sparkles className="h-3.5 w-3.5" />,
    };

    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/90 px-2.5 py-1 text-xs font-bold text-stone-700 shadow-sm backdrop-blur">
      {iconMap[tag]}
            {labelMap[tag] ?? tag}
    </span>
    );
}

export default function RestaurantMenuPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("Όλα");
    const [searchTerm, setSearchTerm] = useState("");

    const featuredItem = menuItems.find((item) => item.featured) ?? menuItems[0];

    const filteredItems = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return menuItems.filter((item) => {
            const matchesCategory = activeCategory === "Όλα" || item.category === activeCategory;
            const matchesSearch =
                normalizedSearch.length === 0 ||
                item.name.toLowerCase().includes(normalizedSearch) ||
                item.description.toLowerCase().includes(normalizedSearch) ||
                item.category.toLowerCase().includes(normalizedSearch) ||
                item.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <main className="min-h-screen bg-[#0f0b07] text-stone-950">
            <section className="relative overflow-hidden px-5 py-6 text-white sm:px-8 lg:px-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(194,65,12,0.28),transparent_34%),linear-gradient(135deg,#160d08,#0f0b07_45%,#22150c)]" />
                <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />

                <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">
                    <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-amber-400 text-stone-950 shadow-lg shadow-amber-500/30">
                            <UtensilsCrossed className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-black leading-none">Aroma Bistro</p>
                            <p className="mt-1 text-xs text-stone-300">Modern Mediterranean</p>
                        </div>
                    </div>

                    <div className="hidden items-center gap-6 text-sm font-medium text-stone-300 md:flex">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-300" /> 12:00 - 00:30
            </span>
                        <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-300" /> Athens Riviera
            </span>
                    </div>
                </nav>

                <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
                    <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200 shadow-lg shadow-amber-950/20 backdrop-blur">
                            <Award className="h-4 w-4" /> Signature menu · Fresh daily
                        </div>

                        <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            Μενού που ανοίγει την όρεξη.
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                            Μια πιο premium παρουσίαση με μεγάλες εικόνες, καθαρές τιμές, φίλτρα κατηγοριών και elegant αισθητική εστιατορίου.
                        </p>

                        <div className="mt-9 grid max-w-2xl grid-cols-3 gap-3">
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-3xl font-black">13</p>
                                <p className="mt-1 text-sm text-stone-300">επιλογές</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-3xl font-black">4.9</p>
                                <p className="mt-1 text-sm text-stone-300">rating</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-3xl font-black">7</p>
                                <p className="mt-1 text-sm text-stone-300">κατηγορίες</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-5 rounded-[2.8rem] bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-transparent blur-2xl" />
                        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
                            <div className="relative h-[460px] overflow-hidden">
                                <img src={featuredItem.image} alt={featuredItem.name} className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                                <div className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-stone-950 shadow-lg">
                                    Chef recommendation
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">{featuredItem.category}</p>
                                    <div className="mt-3 flex items-end justify-between gap-5">
                                        <div>
                                            <h2 className="text-4xl font-black text-white">{featuredItem.name}</h2>
                                            <p className="mt-3 max-w-xl leading-7 text-stone-300">{featuredItem.description}</p>
                                        </div>
                                        <span className="shrink-0 rounded-2xl bg-white px-4 py-2 text-2xl font-black text-stone-950">
                      {formatPrice(featuredItem.price)}
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative rounded-t-[3rem] bg-[#fbf7f0] px-5 py-10 sm:px-8 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <div className="sticky top-0 z-20 -mx-5 border-b border-stone-200/80 bg-[#fbf7f0]/90 px-5 py-5 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-14 lg:px-14">
                        <div className="mx-auto flex max-w-7xl flex-col gap-4">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                                <div>
                                    <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-700">Menu</p>
                                    <h2 className="mt-1 text-3xl font-black tracking-tight sm:text-5xl">Οι επιλογές μας</h2>
                                </div>

                                <label className="relative block w-full lg:max-w-md">
                                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                                    <input
                                        value={searchTerm}
                                        onChange={(event) => setSearchTerm(event.target.value)}
                                        placeholder="Αναζήτηση πιάτου, tag ή κατηγορίας..."
                                        className="w-full rounded-full border border-stone-200 bg-white px-11 py-3.5 text-sm shadow-sm outline-none ring-amber-300 transition placeholder:text-stone-400 focus:ring-4"
                                    />
                                </label>
                            </div>

                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-black transition ${
                                            activeCategory === category
                                                ? "bg-stone-950 text-white shadow-lg shadow-stone-300/60"
                                                : "border border-stone-300 bg-white/80 text-stone-700 hover:bg-white"
                                        }`}
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 flex items-center justify-between rounded-[1.5rem] border border-stone-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                        <p className="text-sm font-semibold text-stone-600">
                            Βρέθηκαν <span className="font-black text-stone-950">{filteredItems.length}</span> επιλογές
                        </p>
                        <button
                            onClick={() => {
                                setActiveCategory("Όλα");
                                setSearchTerm("");
                            }}
                            className="text-sm font-black text-amber-700 hover:text-amber-900"
                            type="button"
                        >
                            Καθαρισμός
                        </button>
                    </div>

                    <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filteredItems.map((item, index) => (
                            <motion.article
                                layout
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: index * 0.035 }}
                            >
                                <div className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200/70 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-stone-300/50">
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-stone-950 backdrop-blur">
                                            {item.category}
                                        </div>
                                        {item.featured && (
                                            <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-black text-stone-950">
                                                Signature
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 right-4 rounded-2xl bg-amber-400 px-4 py-2 text-lg font-black text-stone-950 shadow-lg">
                                            {formatPrice(item.price)}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-black leading-tight text-stone-950">{item.name}</h3>
                                        <p className="mt-3 leading-7 text-stone-600">{item.description}</p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <TagBadge key={tag} tag={tag} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <div className="mt-12 rounded-[2rem] border border-dashed border-stone-300 bg-white p-12 text-center shadow-sm">
                            <h3 className="text-2xl font-black">Δεν βρέθηκαν πιάτα</h3>
                            <p className="mt-2 text-stone-600">Δοκίμασε άλλη κατηγορία ή διαφορετική αναζήτηση.</p>
                            <Button
                                onClick={() => {
                                    setActiveCategory("Όλα");
                                    setSearchTerm("");
                                }}
                                className="mt-6 rounded-full bg-stone-950 px-6 py-2.5 font-bold text-white hover:bg-stone-800"
                            >
                                Καθαρισμός
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Flame, Leaf, MapPin, Search, Sparkles, Star, UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = ["Όλα", "Ορεκτικά", "Σαλάτες", "Κυρίως", "Ζυμαρικά", "Γλυκά", "Ποτά"] as const;

type Category = (typeof categories)[number];

type MenuItem = {
    id: string;
    name: string;
    category: Category;
    description: string;
    price: number;
    tags: string[];
    image: string;
};

const menuItems: MenuItem[] = [
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
        name: "Τυροκροκέτες",
        category: "Ορεκτικά",
        description: "Τραγανές κροκέτες τριών τυριών με σπιτική μαρμελάδα ντομάτας.",
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
        name: "Σαλάτα κινόα & αβοκάντο",
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
        description: "Μοσχάρι σχάρας, baby πατάτες, ρόκα και flakes παρμεζάνας.",
        price: 19.9,
        tags: ["chef"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "salmon",
        name: "Σολομός σχάρας",
        category: "Κυρίως",
        description: "Φιλέτο σολομού με πουρέ σελινόριζας και λαχανικά εποχής.",
        price: 18.5,
        tags: ["chef", "fresh"],
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "shrimp-linguine",
        name: "Λιγκουίνι με γαρίδες",
        category: "Ζυμαρικά",
        description: "Γαρίδες, ντοματίνια, σκόρδο, λευκό κρασί και φρέσκος μαϊντανός.",
        price: 16.8,
        tags: ["spicy", "popular", "chef"],
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "pesto-rigatoni",
        name: "Ριγκατόνι με πέστο",
        category: "Ζυμαρικά",
        description: "Σπιτικό πέστο βασιλικού, κουκουνάρι και παρμεζάνα.",
        price: 12.4,
        tags: ["vegetarian"],
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "lemon-cheesecake",
        name: "Cheesecake λεμόνι",
        category: "Γλυκά",
        description: "Κρέμα τυριού, βάση μπισκότου και δροσερή κρέμα λεμονιού.",
        price: 6.9,
        tags: ["popular"],
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "chocolate-souffle",
        name: "Σουφλέ σοκολάτας",
        category: "Γλυκά",
        description: "Ζεστό σουφλέ με υγρή σοκολάτα και παγωτό βανίλια.",
        price: 7.5,
        tags: ["chef"],
        image: "https://images.unsplash.com/photo-1611329695518-1763319f3551?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "lemonade",
        name: "Σπιτική λεμονάδα",
        category: "Ποτά",
        description: "Φρέσκο λεμόνι, δυόσμος και ανθρακούχο νερό.",
        price: 4.2,
        tags: ["vegan", "fresh"],
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "signature-cocktail",
        name: "Signature cocktail",
        category: "Ποτά",
        description: "Gin, elderflower, lime, αγγούρι και αρωματικός βασιλικός.",
        price: 9.8,
        tags: ["chef"],
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80",
    },
];

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
        <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-700">
      {iconMap[tag]}
            {labelMap[tag] ?? tag}
    </span>
    );
}

export default function RestaurantMenuPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("Όλα");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return menuItems.filter((item) => {
            const matchesCategory = activeCategory === "Όλα" || item.category === activeCategory;
            const matchesSearch =
                normalizedSearch.length === 0 ||
                item.name.toLowerCase().includes(normalizedSearch) ||
                item.description.toLowerCase().includes(normalizedSearch) ||
                item.category.toLowerCase().includes(normalizedSearch);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <main className="min-h-screen bg-[#fbf7f0] text-stone-950">
            <section className="relative overflow-hidden bg-[#17110c] px-5 py-8 text-white sm:px-10 lg:px-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.22),transparent_34%)]" />

                <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-amber-400 text-stone-950">
                            <UtensilsCrossed className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-none">Aroma Bistro</p>
                            <p className="mt-1 text-xs text-stone-300">Mediterranean Kitchen</p>
                        </div>
                    </div>

                    <div className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> 12:00 - 00:30
            </span>
                        <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Athens Riviera
            </span>
                    </div>
                </nav>

                <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
                            Fresh daily menu
                        </p>
                        <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-7xl">
                            Απλό, καθαρό μενού εστιατορίου.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                            Δες τις κατηγορίες, διάλεξε πιάτο και βρες γρήγορα ό,τι ψάχνεις χωρίς περιττά βήματα.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-[2rem] shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
                            alt="Restaurant table"
                            className="h-80 w-full object-cover sm:h-96"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-sm font-semibold text-amber-300">Today's mood</p>
                            <h2 className="mt-1 text-3xl font-black">Μεσογειακές γεύσεις</h2>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-10 sm:px-10 lg:px-16">
                <div className="sticky top-0 z-20 -mx-5 border-b border-stone-200 bg-[#fbf7f0]/90 px-5 py-5 backdrop-blur sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
                    <div className="mx-auto flex max-w-6xl flex-col gap-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">Menu</p>
                                <h2 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">Οι επιλογές μας</h2>
                            </div>

                            <label className="relative block w-full md:max-w-sm">
                                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                                <input
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    placeholder="Αναζήτηση πιάτου..."
                                    className="w-full rounded-full border border-stone-200 bg-white px-11 py-3.5 text-sm shadow-sm outline-none ring-amber-300 transition placeholder:text-stone-400 focus:ring-4"
                                />
                            </label>
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-1">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    variant={activeCategory === category ? "default" : "outline"}
                                    className={`shrink-0 rounded-full px-5 ${
                                        activeCategory === category
                                            ? "bg-stone-950 text-white hover:bg-stone-800"
                                            : "border-stone-300 bg-white/80 text-stone-700 hover:bg-white"
                                    }`}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-7 rounded-[1.5rem] border border-stone-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-stone-600">
                        Βρέθηκαν <span className="font-black text-stone-950">{filteredItems.length}</span> επιλογές
                    </p>
                </div>

                <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item, index) => (
                        <motion.article
                            layout
                            key={item.id}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.03 }}
                        >
                            <Card className="group h-full overflow-hidden rounded-[2rem] border-none bg-white shadow-sm ring-1 ring-stone-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent" />
                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-stone-950 backdrop-blur">
                                        {item.category}
                                    </div>
                                    <div className="absolute bottom-4 right-4 rounded-2xl bg-amber-400 px-4 py-2 text-lg font-black text-stone-950 shadow-lg">
                                        {formatPrice(item.price)}
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-black leading-tight text-stone-950">{item.name}</h3>
                                    <p className="mt-3 leading-7 text-stone-600">{item.description}</p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <TagBadge key={tag} tag={tag} />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
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
                            className="mt-6 rounded-full bg-stone-950 px-6 text-white hover:bg-stone-800"
                        >
                            Καθαρισμός
                        </Button>
                    </div>
                )}
            </section>
        </main>
    );
}

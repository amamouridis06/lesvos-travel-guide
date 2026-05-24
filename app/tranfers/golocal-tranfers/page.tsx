"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    Award,
    CalendarCheck,
    Car,
    ChevronRight,
    Clock,
    Compass,
    Luggage,
    MapPin,
    Menu,
    Plane,
    Search,
    ShieldCheck,
    Sparkles,
    Star,
    Users,
    X,
} from "lucide-react";

const serviceCategories = ["Όλα", "Transfers", "Tours", "VIP", "Family", "Airport"] as const;

type ServiceCategory = (typeof serviceCategories)[number];

type Service = {
    id: string;
    title: string;
    category: ServiceCategory;
    description: string;
    duration: string;
    capacity: string;
    tags: string[];
    image: string;
    featured?: boolean;
};

const services: Service[] = [
    {
        id: "airport-transfer",
        title: "Airport Private Transfer",
        category: "Airport",
        description: "Ιδιωτική μεταφορά από/προς αεροδρόμιο με επαγγελματία οδηγό, άνετο όχημα και παρακολούθηση πτήσης.",
        duration: "24/7",
        capacity: "1-7 άτομα",
        tags: ["Meet & greet", "Flight tracking", "Fixed price"],
        featured: true,
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "city-transfer",
        title: "City to City Transfer",
        category: "Transfers",
        description: "Άνετες μετακινήσεις μεταξύ πόλεων, ξενοδοχείων, λιμανιών και σημείων ενδιαφέροντος.",
        duration: "Flexible",
        capacity: "1-8 άτομα",
        tags: ["Door to door", "Comfort", "Private ride"],
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "athens-tour",
        title: "Athens Highlights Tour",
        category: "Tours",
        description: "Ιδιωτική ξενάγηση στα σημαντικότερα σημεία της Αθήνας με στάσεις για φωτογραφίες και local tips.",
        duration: "4 ώρες",
        capacity: "1-6 άτομα",
        tags: ["Acropolis view", "Photo stops", "Local guide"],
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "sunset-tour",
        title: "Sunset Coastal Tour",
        category: "Tours",
        description: "Διαδρομή στην Αθηναϊκή Ριβιέρα με στάσεις στη θάλασσα, καφέ και ηλιοβασίλεμα.",
        duration: "5 ώρες",
        capacity: "1-6 άτομα",
        tags: ["Sunset", "Coastline", "Relaxed"],
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "vip-chauffeur",
        title: "VIP Chauffeur Service",
        category: "VIP",
        description: "Premium υπηρεσία οδηγού για επαγγελματικά ταξίδια, events, meetings και απαιτητικούς πελάτες.",
        duration: "Hourly / Daily",
        capacity: "1-3 άτομα",
        tags: ["Executive", "Discreet", "Luxury"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "family-transfer",
        title: "Family Transfer",
        category: "Family",
        description: "Ιδανική λύση για οικογένειες με χώρο για αποσκευές, παιδικά καθίσματα κατόπιν αιτήματος και ασφαλή μετακίνηση.",
        duration: "Flexible",
        capacity: "1-7 άτομα",
        tags: ["Child seats", "Luggage space", "Safe"],
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80",
    },
];

const benefits = [
    {
        title: "Επαγγελματίες οδηγοί",
        description: "Ευγενικοί, έμπειροι οδηγοί με γνώση της περιοχής και έμφαση στην ασφάλεια.",
        icon: ShieldCheck,
    },
    {
        title: "Σταθερές τιμές",
        description: "Ξεκάθαρη χρέωση χωρίς κρυφές επιβαρύνσεις και χωρίς άγχος για τον πελάτη.",
        icon: Sparkles,
    },
    {
        title: "24/7 εξυπηρέτηση",
        description: "Μεταφορές και επικοινωνία όλη την ημέρα, ιδανικά για πτήσεις και late arrivals.",
        icon: Clock,
    },
];

const fleet = [
    {
        title: "Premium Sedan",
        passengers: "1-3 επιβάτες",
        luggage: "2 βαλίτσες",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Luxury SUV",
        passengers: "1-4 επιβάτες",
        luggage: "4 βαλίτσες",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Private Minivan",
        passengers: "1-8 επιβάτες",
        luggage: "8 βαλίτσες",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
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

function Tag({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            {label}
    </span>
    );
}

export default function PrivateTransfersToursPage() {
    const [activeCategory, setActiveCategory] = useState<ServiceCategory>("Όλα");
    const [searchTerm, setSearchTerm] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const featuredService = services.find((service) => service.featured) ?? services[0];

    const filteredServices = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return services.filter((service) => {
            const matchesCategory = activeCategory === "Όλα" || service.category === activeCategory;
            const matchesSearch =
                normalizedSearch.length === 0 ||
                service.title.toLowerCase().includes(normalizedSearch) ||
                service.description.toLowerCase().includes(normalizedSearch) ||
                service.category.toLowerCase().includes(normalizedSearch) ||
                service.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch));

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <main className="min-h-screen bg-[#f8fafc] text-slate-950">
            <section className="relative min-h-screen overflow-hidden bg-[#07111f] px-5 py-5 text-white sm:px-8 lg:px-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,116,144,0.32),transparent_36%),linear-gradient(135deg,#07111f,#0f172a_48%,#111827)]" />
                <div className="absolute left-1/2 top-24 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f8fafc] to-transparent" />

                <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">
                    <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20">
                            <Car className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-black leading-none">Elite Transfers & Tours</p>
                            <p className="mt-1 text-xs text-slate-300">Private Travel Services</p>
                        </div>
                    </div>

                    <div className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
                        <a href="#services" className="transition hover:text-white">Υπηρεσίες</a>
                        <a href="#fleet" className="transition hover:text-white">Στόλος</a>
                        <a href="#why" className="transition hover:text-white">Γιατί εμάς</a>
                        <a href="#contact" className="transition hover:text-white">Κράτηση</a>
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
                            <a href="#services" className="rounded-2xl px-4 py-3 hover:bg-white/10">Υπηρεσίες</a>
                            <a href="#fleet" className="rounded-2xl px-4 py-3 hover:bg-white/10">Στόλος</a>
                            <a href="#why" className="rounded-2xl px-4 py-3 hover:bg-white/10">Γιατί εμάς</a>
                            <a href="#contact" className="rounded-2xl px-4 py-3 hover:bg-white/10">Κράτηση</a>
                        </div>
                    </div>
                )}

                <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
                    <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-100 shadow-lg shadow-slate-950/20 backdrop-blur">
                            <Award className="h-4 w-4" /> Private transfers · Tailor-made tours · 24/7
                        </div>

                        <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            Ιδιωτικές μεταφορές και εμπειρίες με απόλυτη άνεση.
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                            Premium εταιρική παρουσίαση για υπηρεσίες private transfers και tours: αεροδρόμιο, πόλη, VIP οδηγός, οικογενειακές μετακινήσεις και εξατομικευμένες διαδρομές.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3.5 text-sm font-black text-slate-950 shadow-xl shadow-amber-950/20 transition hover:bg-amber-300"
                            >
                                Δες υπηρεσίες <ChevronRight className="ml-2 h-4 w-4" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                            >
                                Ζήτησε προσφορά
                            </a>
                        </div>

                        <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-3xl font-black">24/7</p>
                                <p className="mt-1 text-sm text-slate-300">διαθεσιμότητα</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-3xl font-black">4.9</p>
                                <p className="mt-1 text-sm text-slate-300">rating</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-3xl font-black">100%</p>
                                <p className="mt-1 text-sm text-slate-300">private</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-5 rounded-[2.8rem] bg-gradient-to-br from-amber-400/25 via-cyan-500/20 to-transparent blur-2xl" />
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
                            <div className="relative h-[540px] overflow-hidden">
                                <img src={featuredService.image} alt={featuredService.title} className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/35 to-transparent" />
                                <div className="absolute left-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-slate-950 shadow-lg">
                                    Featured service
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">{featuredService.category}</p>
                                    <h2 className="mt-3 text-4xl font-black text-white">{featuredService.title}</h2>
                                    <p className="mt-3 max-w-xl leading-7 text-slate-300">{featuredService.description}</p>
                                    <div className="mt-5 flex flex-wrap items-center gap-2">
                                        <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-slate-950">{featuredService.duration}</span>
                                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black text-white backdrop-blur">{featuredService.capacity}</span>
                                        {featuredService.tags.map((tag) => (
                                            <Tag key={tag} label={tag} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="services" className="bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-600">Υπηρεσίες</p>
                            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Transfers & Tours</h2>
                        </div>

                        <label className="relative block w-full lg:max-w-md">
                            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder="Αναζήτηση υπηρεσίας..."
                                className="w-full rounded-full border border-slate-200 bg-white px-11 py-3.5 text-sm shadow-sm outline-none ring-amber-200 transition placeholder:text-slate-400 focus:ring-4"
                            />
                        </label>
                    </div>

                    <div className="mt-7 flex gap-2 overflow-x-auto pb-1">
                        {serviceCategories.map((category) => (
                            <Button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-black transition ${
                                    activeCategory === category
                                        ? "bg-slate-950 text-white shadow-lg shadow-slate-200/70"
                                        : "border border-slate-200 bg-white text-slate-700 hover:bg-amber-50"
                                }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    <motion.div layout className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filteredServices.map((service, index) => (
                            <motion.article
                                layout
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: index * 0.04 }}
                            >
                                <div className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200">
                                    <div className="relative h-72 overflow-hidden bg-slate-950">
                                        <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                                        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-slate-950 backdrop-blur">
                                            {service.category}
                                        </div>
                                        {service.featured && (
                                            <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-black text-slate-950">
                                                Featured
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">{service.duration}</p>
                                                <p className="mt-1 text-xl font-black">{service.capacity}</p>
                                            </div>
                                            <Star className="h-5 w-5 fill-amber-300 text-amber-300" />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-black leading-tight text-slate-950">{service.title}</h3>
                                        <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <Tag key={tag} label={tag} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section id="fleet" className="bg-white px-5 py-20 sm:px-8 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-600">Στόλος</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">Άνετα οχήματα για κάθε διαδρομή</h2>
                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Από executive μεταφορές μέχρι οικογενειακές διαδρομές και μικρά groups.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {fleet.map((vehicle, index) => (
                            <motion.div
                                key={vehicle.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="overflow-hidden rounded-[2rem] bg-[#f8fafc] shadow-sm ring-1 ring-slate-200"
                            >
                                <img src={vehicle.image} alt={vehicle.title} className="h-56 w-full object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-black">{vehicle.title}</h3>
                                    <div className="mt-5 grid gap-3 text-sm font-bold text-slate-600">
                                        <p className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-amber-500" /> {vehicle.passengers}</p>
                                        <p className="inline-flex items-center gap-2"><Luggage className="h-4 w-4 text-amber-500" /> {vehicle.luggage}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="why" className="bg-[#07111f] px-5 py-20 text-white sm:px-8 lg:px-14">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-300">Γιατί εμάς</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">Αξιόπιστη μετακίνηση από την αρχή μέχρι το τέλος</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur"
                                >
                                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-400 text-slate-950">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-6 text-xl font-black">{benefit.title}</h3>
                                    <p className="mt-3 leading-7 text-slate-300">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-14">
                <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200 ring-1 ring-slate-200 lg:grid-cols-[1fr_0.9fr]">
                    <div className="p-8 sm:p-12">
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-amber-600">Κράτηση</p>
                        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                            Ζητήστε προσφορά για transfer ή private tour.
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                            Συμπληρώστε τις λεπτομέρειες της διαδρομής ή της εμπειρίας και η ομάδα θα προτείνει την κατάλληλη λύση.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl bg-amber-50 p-5">
                                <Plane className="h-5 w-5 text-amber-600" />
                                <p className="mt-3 font-black">Airport transfers</p>
                                <p className="mt-1 text-sm text-slate-600">Άφιξη, αναχώρηση, λιμάνι, ξενοδοχείο</p>
                            </div>
                            <div className="rounded-3xl bg-amber-50 p-5">
                                <CalendarCheck className="h-5 w-5 text-amber-600" />
                                <p className="mt-3 font-black">Custom tours</p>
                                <p className="mt-1 text-sm text-slate-600">Ημερήσιες εκδρομές και tailor-made εμπειρίες</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative min-h-[460px] bg-slate-950">
                        <img
                            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1200&q=80"
                            alt="Private transfer car"
                            className="h-full w-full object-cover opacity-75"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <Compass className="h-9 w-9 text-amber-300" />
                            <p className="mt-4 text-2xl font-black">Travel privately. Arrive relaxed.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Clock3, CakeSlice, Euro, Star } from "lucide-react";

export default function DessertShopGuidePage() {
    return (
        <main className="bg-gradient-to-b from-white via-sky-50 to-cyan-100 text-slate-800 overflow-hidden scroll-smooth relative">
            {/* Animated Background Blobs */}
            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/30 blur-3xl rounded-full"
            />

            <motion.div
                animate={{
                    x: [0, -50, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 blur-3xl rounded-full"
            />
            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center px-6">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        src="/petite/petite10.jpg"
                        alt="Luxury Desserts"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-sky-300/40 via-cyan-200/30 to-white/95" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-6xl text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
                    >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="uppercase tracking-[0.25em] text-sm font-semibold text-slate-800">
              Luxury Dessert Experience
            </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-6xl md:text-8xl font-black leading-none mb-8"
                    >

                        <span className="block bg-gradient-to-r from-cyan-500 via-sky-400 to-orange-300 bg-clip-text text-transparent">
              Petite
            </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-700 leading-relaxed mb-12"
                    >
                        Ένας premium dessert προορισμός στην καρδιά της Αθήνας με artisan
                        γλυκά, viral pancakes, luxury brunch και cinematic ατμόσφαιρα για
                        ταξιδιώτες που ψάχνουν κάτι πραγματικά μοναδικό.
                    </motion.p>

                    {/*<motion.div*/}
                    {/*    initial={{ opacity: 0, y: 20 }}*/}
                    {/*    animate={{ opacity: 1, y: 0 }}*/}
                    {/*    transition={{ delay: 1, duration: 0.8 }}*/}
                    {/*    className="flex flex-wrap justify-center gap-5"*/}
                    {/*>*/}
                    {/*    <button className="px-10 py-5 rounded-3xl bg-white text-black font-bold text-lg shadow-[0_20px_60px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300">*/}
                    {/*        Explore Menu*/}
                    {/*    </button>*/}

                    {/*    <button className="px-10 py-5 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl text-slate-800 font-semibold text-lg hover:bg-white/20 transition-all duration-300">*/}
                    {/*        Book a Table*/}
                    {/*    </button>*/}
                    {/*</motion.div>*/}
                </motion.div>

                {/*<motion.div*/}
                {/*    animate={{ y: [0, 15, 0] }}*/}
                {/*    transition={{ repeat: Infinity, duration: 2.5 }}*/}
                {/*    className="absolute bottom-10 text-cyan-600 text-sm tracking-[0.3em] uppercase font-semibold"*/}
                {/*>*/}
                {/*    Scroll*/}
                {/*</motion.div>*/}
            </section>

            {/* GLASS INFO CARDS */}
            <section className="relative z-20 -mt-24 px-6 pb-28">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <MapPin className="w-7 h-7" />,
                            title: "Location",
                            value: "📍Molyvos",
                        },
                        {
                            icon: <Clock3 className="w-7 h-7" />,
                            title: "Open Daily",
                            value: "17:00 — 23:00",
                        },
                        {
                            icon: <CakeSlice className="w-7 h-7" />,
                            title: "Signature",
                            value: "Pancakes, Wafles",
                        },
                        {
                            icon: <Euro className="w-7 h-7" />,
                            title: "Average",
                            value: "€10 — €20",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.7 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -12, scale: 1.03 }}
                            className="backdrop-blur-2xl bg-white/10 border border-cyan-100 rounded-[32px] p-8 shadow-2xl"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-orange-300 text-black flex items-center justify-center mb-6 shadow-xl">
                                {item.icon}
                            </div>

                            <p className="text-slate-600 text-sm uppercase tracking-widest mb-2">
                                {item.title}
                            </p>

                            <h3 className="text-2xl font-bold text-slate-800">
                                {item.value}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="max-w-6xl mx-auto px-6 py-32">
                <motion.div
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
          <span className="text-cyan-500 uppercase tracking-[0.3em] text-sm font-bold">
            About The Place
          </span>

                    <h2 className="text-5xl md:text-7xl font-black mt-6 mb-8">
                        A Dessert Experience
                        <span className="block text-slate-500">Beyond Taste</span>
                    </h2>

                    <p className="max-w-4xl mx-auto text-xl text-slate-700 leading-relaxed">
                        Petite in the port of Molyvos is the new must-visit destination for take-away pleasure,
                        having closed just a month of operation. the experience starts from our characteristic window:
                        order at the entrance, you receive in the hand and enjoy the create.  We are famous for our fluffy pancakes,
                        our waffle bites and our sweet crepes, but the real game starts with the infinite combinations you can create.
                        With a huge variety of rich beaches, fine chocolates and any kind of toppings, every order is unique.
                        For those looking for something even cooler, our proposals are complemented by our enjoyable ice cream, which accompanies
                        perfectly each In Petite, quality meets creativity, offering the sweetest attitude in the heart of Molyvos!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        "/petite/petite1.jpg",
                    ].map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.7 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, rotate: 1 }}
                            className="overflow-hidden rounded-[32px]"
                        >
                            <img
                                src={img}
                                alt="Dessert Gallery"
                                className="h-[420px] w-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FEATURE SECTION */}
            <section className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="/petite/petite6.jpg"
                            alt="Dessert"
                            className="rounded-[40px] h-[700px] w-full object-cover shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
                        />

                        <div className="absolute -bottom-10 -right-10 bg-gradient-to-r from-cyan-400 to-orange-300 rounded-[30px] p-8 shadow-2xl max-w-xs">
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-700 font-semibold mb-2">
                                Most Popular
                            </p>

                            <h3 className="text-3xl font-black text-black mb-2">
                                Dubai Chocolate Waffles
                            </h3>

                            <p className="text-slate-700">
                                Viral dessert experience loved by tourists.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                    >
            <span className="text-cyan-500 uppercase tracking-[0.3em] text-sm font-bold">
              Premium Experience
            </span>

                        <h2 className="text-5xl md:text-7xl font-black leading-tight mt-5 mb-8">
                            Dessert Meets
                            <span className="block text-slate-500">Luxury.</span>
                        </h2>

                        <p className="text-slate-700 text-xl leading-relaxed mb-10">
                            Συνδυάζοντας luxury αισθητική, premium υλικά και cinematic design,
                            το Sweet Athens είναι το απόλυτο σημείο για dessert lovers,
                            creators και ταξιδιώτες που θέλουν unforgettable εμπειρία.
                        </p>

                        <div className="grid grid-cols-2 gap-5">
                            {[
                                "Instagram Worthy",
                                "Luxury Brunch",
                                "Artisan Desserts",
                                "Tourist Favorite",
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-2xl border border-cyan-100 bg-white/80 backdrop-blur-xl px-6 py-5 text-lg font-medium text-slate-800"
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FULL GALLERY */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
                        <div>
              <span className="text-cyan-500 uppercase tracking-[0.3em] text-sm font-bold">
                Photo Gallery
              </span>

                            <h2 className="text-5xl font-black mt-4">
                                More Photos
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[250px]">
                        {[
                            "/petite/petite2.jpg",
                            "/petite/petite3.jpg",
                            "/petite/petite4.jpg",
                            "/petite/petite12.jpg",
                            "/petite/petite6.jpg",
                            "/petite/petite7.jpg",
                            "/petite/petite8.jpg",
                            "/petite/petite9.jpg",
                            "/petite/petite10.jpg",
                            "/petite/petite11.jpg",
                            "/petite/petite5.jpg",

                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.04, y: -8 }}
                                className={`overflow-hidden rounded-[28px] group relative ${
                                    i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                            >
                                <img
                                    src={img}
                                    alt="Gallery"
                                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

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
                className="absolute top-10 sm:top-20 left-0 sm:left-10 w-52 h-52 sm:w-72 sm:h-72 bg-cyan-300/30 blur-3xl rounded-full"
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
                className="absolute bottom-10 sm:bottom-20 right-0 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-orange-200/30 blur-3xl rounded-full"
            />
            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-0">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        src="/petite/petite9.jpg"
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
                    className="relative z-10 max-w-6xl text-center px-2 sm:px-0"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-6 sm:mb-8 px-2"
                    >
                        Petite
                        <span className="block bg-gradient-to-r from-cyan-500 via-sky-400 to-orange-300 bg-clip-text text-transparent">

            </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-slate-900 leading-relaxed mb-10 sm:mb-12 px-2"
                    >
                        A premium dessert destination in the port of Molyvos with pancakes, waffles and crepes for
                        travelers looking for something really unique.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 w-full sm:w-auto px-4"
                    >
                    </motion.div>
                </motion.div>
            </section>

            {/* GLASS INFO CARDS */}
            <section className="relative z-20 -mt-10 sm:-mt-24 px-4 sm:px-6 pb-20 sm:pb-28">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        {
                            icon: <MapPin className="w-7 h-7" />,
                            title: "Location",
                            value: "In port of Molyvos",
                        },
                        {
                            icon: <Clock3 className="w-7 h-7" />,
                            title: "Open Daily",
                            value: "17:00 — 23:00",
                        },
                        {
                            icon: <CakeSlice className="w-7 h-7" />,
                            title: "Signature",
                            value: "Pancakes & Wafles",
                        },
                        {
                            icon: <Euro className="w-7 h-7" />,
                            title: "Average",
                            value: "€5 — €10",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.7 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -12, scale: 1.03 }}
                            className="backdrop-blur-2xl bg-white/70 border border-cyan-100 rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 shadow-2xl"
                        >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-orange-300 text-black flex items-center justify-center mb-4 sm:mb-6 shadow-xl">
                                {item.icon}
                            </div>

                            <p className="text-slate-600 text-sm uppercase tracking-widest mb-2">
                                {item.title}
                            </p>

                            <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                                {item.value}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        backgroundPosition: {
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        opacity: {
                            duration: 0.8,
                        },
                        y: {
                            duration: 0.8,
                        },
                    }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
          <span className="text-cyan-500 uppercase tracking-[0.3em] text-sm font-bold">
            About The Place
          </span>

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mt-6 mb-6 sm:mb-8 leading-tight">
                        A Dessert Experience
                        <span className="block text-slate-500">Beyond Taste</span>
                    </h2>

                    <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-900 font-medium leading-relaxed px-2">
                        <p>Petite in the port of Molyvos is the new must-visit destination for take-away pleasure, having closed just a month
                        of operation. </p>
                        <p>The experience starts from our characteristic window: order at the entrance, you receive in the hand and
                        enjoy the create. We are famous for our fluffy pancakes, our waffle bites and our sweet crepes, but the real game starts
                        with the infinite combinations you can create. </p>
                        <p>With a huge variety of rich beaches, fine chocolates and any kind of toppings,
                        every order is unique. For those looking for something even cooler, our proposals are complemented by our enjoyable ice cream,
                            which accompanies perfectly each In Petite, quality meets creativity, offering the sweetest attitude in the heart of Molyvos!</p>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
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
                                className="h-[320px] sm:h-[420px] w-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FEATURE SECTION */}
            <section className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="/petite/petite7.jpg"
                            alt="Dessert"
                            className="rounded-[32px] sm:rounded-[40px] h-[420px] sm:h-[700px] w-full object-cover shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
                        />

                        <div className="absolute bottom-4 right-4 sm:-bottom-10 sm:-right-10 bg-gradient-to-r from-cyan-400 to-orange-300 rounded-[24px] sm:rounded-[30px] p-5 sm:p-8 shadow-2xl max-w-[220px] sm:max-w-xs">
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-800 font-semibold mb-2">
                                Waffle bites
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

                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mt-5 mb-6 sm:mb-8">
                            Dessert Meets
                            <span className="block text-slate-500">Luxury.</span>
                        </h2>

                        <p className="text-slate-900 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10">
                            In the picturesque village of Molyvos, Lesvos, Petite offers a unique tasting experience with fluffy pancakes, delicious waffles, and handmade desserts by the sea. Featuring island-inspired aesthetics, premium ingredients, and a cozy atmosphere, it is the perfect spot for brunch, sweets, and photos that capture the feeling of summer in the Aegean.

                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            {[
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
            <section className="px-4 sm:px-6 pb-20 sm:pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-5 sm:gap-6">
                        <div>
              <span className="text-cyan-500 uppercase tracking-[0.3em] text-sm font-bold">
                Photo Gallery
              </span>

                            <h2 className="text-3xl sm:text-5xl font-black mt-3 sm:mt-4 leading-tight">
                                More Photos
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 auto-rows-[220px] sm:auto-rows-[250px]">
                        {[
                            "/petite/petite2.jpg",
                            "/petite/petite3.jpg",
                            "/petite/petite4.jpg",
                            "/petite/petite12.jpg",
                            "/petite/petite5.jpg",
                            "/petite/petite6.jpg",
                            "/petite/petite7.jpg",
                            "/petite/petite8.jpg",
                            "/petite/petite9.jpg",
                            "/petite/petite10.jpg",

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

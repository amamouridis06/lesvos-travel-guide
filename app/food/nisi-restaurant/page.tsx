// import React from "react";
// import Link from "next/link";
//
// export default function NisiPage() {
//     const restaurant = {
//         name: "Nisi Restaurant",
//         category: " Restaurant",
//         location: "Molyvos, Lesvos",
//         rating: 4.8,
//         reviews: 323,
//         description: [
//             <p>The Nisi Restaurant was founded by two brothers whose journey took them across borders, through different kitchens, and into the heart of new flavors, cultures, and experiences.</p>,
//             <p>Inspired by the places we visited, the people we met, and the hospitality that shaped us, we created a warm, relaxed, and authentic space where good food, fine wine, and great company come together.</p>,
//             <p>The Nisi Restaurant is more than just a place to eat. It is part of our story — a place where every dish is prepared with care, every table is welcomed with warmth, and every shared moment truly matters.</p>
//         ],
//         heroImage:
//             "/nisi/nisi_hero.jpg",
//         gallery: [
//             "/nisi/nisi1.jpg",
//             "/nisi/nisi2.jpg",
//             "/nisi/nisi3.jpg",
//             "/nisi/nisi4.jpg",
//             "/nisi/nisi5.jpg",
//             "/nisi/nisi6.jpeg",
//             "/nisi/nisi7.jpeg",
//             "/nisi/nisi8.jpeg",
//             "/nisi/nisi9.jpeg",
//         ],
//         highlights: [
//             "Fresh seafood",
//             "Local products",
//             "Romantic atmosphere",
//             "Family friendly",
//         ],
//         facilities: [
//             "Free Wi-Fi",
//             "Vegetarian options"
//         ],
//         important: [
//             "Τhere is no accessibility for people with disabilities"
//         ],
//         openingHours: "10:00 - 00:00",
//         phone: "+30 22530 72172",
//         instagram: "@restaurant_nisi",
//     };
//
//     return (
//         <main className="min-h-screen bg-stone-50 text-stone-900">
//             <section className="relative h-[72vh] min-h-[520px] overflow-hidden">
//                 <img
//                     src={restaurant.heroImage}
//                     alt={`${restaurant.name} restaurant`}
//                     className="absolute inset-0 h-full w-full object-cover"
//                 />
//
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
//
//                 <div className="relative z-10 flex h-full items-end">
//                     <div className="mx-auto w-full max-w-6xl px-5 pb-12">
//                         <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-800 shadow-sm">
//                             {restaurant.category}
//                         </div>
//
//                         <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
//                             {restaurant.name}
//                         </h1>
//
//                         <div className="mt-5 flex flex-wrap gap-4 text-white/95">
//                             <span>📍 {restaurant.location}</span>
//                             <span>
//                 ⭐ {restaurant.rating} · {restaurant.reviews} reviews
//               </span>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.4fr_0.8fr]">
//                 <div className="space-y-8">
//                     <div className="rounded-2xl bg-white p-7 shadow-sm">
//                         <h2 className="text-2xl font-semibold">Our Story</h2>
//                         <p className="text-lg leading-8 text-stone-700">
//                             {restaurant.description}
//                         </p>
//
//                         <div className="mt-6 flex flex-wrap gap-3">
//                             {restaurant.highlights.map((item) => (
//                                 <span
//                                     key={item}
//                                     className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900"
//                                 >
//                   {item}
//                 </span>
//                             ))}
//                         </div>
//                     </div>
//
//                     <div className="grid gap-4 md:grid-cols-3">
//                         {restaurant.gallery.map((image, index) => (
//                             <div key={image} className="overflow-hidden rounded-2xl shadow-sm">
//                                 <img
//                                     src={image}
//                                     alt={`Restaurant gallery ${index + 1}`}
//                                     className="h-64 w-full object-cover transition duration-500 hover:scale-105"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//
//                     <div className="rounded-2xl bg-white p-7 shadow-sm">
//                         <h2 className="text-2xl font-semibold">Why visit?</h2>
//                         <p className="mt-4 leading-7 text-stone-700">
//                             Perfect for travellers who want to discover local flavours in a
//                             beautiful setting. This restaurant is ideal for sunset dinners,
//                             relaxed lunches, family meals, and anyone looking for an authentic
//                             island dining experience.
//                         </p>
//                     </div>
//                 </div>
//
//                 <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
//                     <div className="rounded-2xl bg-white p-7 shadow-md">
//                         <h2 className="text-2xl font-semibold">Plan your visit</h2>
//
//                         <div className="mt-5 space-y-4 text-stone-700">
//                             <div>
//                                 <p className="font-medium text-stone-900">🕒 Opening hours</p>
//                                 <p>{restaurant.openingHours}</p>
//                             </div>
//
//                             <div>
//                                 <p className="font-medium text-stone-900">☎️ Contact</p>
//                                 <p>{restaurant.phone}</p>
//                             </div>
//
//                             <div>
//                                 <p className="font-medium text-stone-900">📸 Instagram</p>
//                                 <p>{restaurant.instagram}</p>
//                             </div>
//                         </div>
//
//                         <div className="mt-6 grid gap-3">
//                             {/*<button className="rounded-xl bg-stone-900 px-5 py-4 text-base font-medium text-white transition hover:bg-stone-700">*/}
//                             {/*  Book a table*/}
//                             {/*</button></>*/}
//                             <Link
//                                 href="https://maps.app.goo.gl/8YfmkHVaHJr539hn8"
//                                 target="_blank"
//                                 className="inline-block rounded-xl border border-stone-300 bg-white px-5 py-4 text-base font-medium text-stone-900 transition hover:bg-stone-100"
//                             >
//                                 View location ↗
//                             </Link>
//                         </div>
//                     </div>
//
//                     <div className="rounded-2xl bg-white p-7 shadow-sm">
//                         <h3 className="text-xl font-semibold">Facilities</h3>
//
//                         <div className="mt-5 grid gap-3">
//                             {restaurant.facilities.map((facility) => (
//                                 <div
//                                     key={facility}
//                                     className="rounded-xl bg-stone-100 px-4 py-3 text-stone-700"
//                                 >
//                                     ✓ {facility}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="rounded-2xl bg-white p-7 shadow-sm">
//                         <h3 className="text-xl font-semibold">Important Informations</h3>
//
//                         <div className="mt-5 grid gap-3">
//                             {restaurant.important.map((important) => (
//                                 <div
//                                     key={important}
//                                     className="rounded-xl bg-stone-100 px-4 py-3 text-stone-700"
//                                 >
//                                     ❌ {important}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </aside>
//             </section>
//         </main>
//     );
// }


"use client";

import { motion } from "framer-motion";
import { MapPin, Clock3, CakeSlice, Euro, Star, Phone } from "lucide-react";

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
                        src="/nisi/nisi10.jpg"
                        alt="Chef"
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
                        Nisi Restaurant
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
                            value: "Molyvos, Lesvos",
                        },
                        {
                            icon: <Clock3 className="w-7 h-7" />,
                            title: "Open Daily",
                            value: "10:00 - 00:00",
                        },
                        {
                            icon: <Euro className="w-7 h-7" />,
                            title: "Average",
                            value: "€10 — €20",
                        },
                        // {
                        //     title: "Instagram",
                        //     value: "restaurant_nisi",
                        // },
                        {
                            icon: <Phone className="w-7 h-7" />,
                            title: "Average",
                            value: "+30 22530 72172",
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
                        A Fantastic Taste
                        <span className="block text-slate-500">Beyond Taste</span>
                    </h2>

                    <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-900 font-medium leading-relaxed px-2">
                        <p>The Nisi Restaurant was founded by two brothers whose journey took them across borders, through different kitchens, and into the heart of new flavors, cultures, and experiences.</p>
                        <p>Inspired by the places we visited, the people we met, and the hospitality that shaped us, we created a warm, relaxed, and authentic space where good food, fine wine, and great company come together.</p>
                        <p>The Nisi Restaurant is more than just a place to eat. It is part of our story — a place where every dish is prepared with care, every table is welcomed with warmth, and every shared moment truly matters.</p>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
                    {[
                        "/nisi/nisi_hero.jpg",
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
                            src="/nisi/nisi6.jpeg"
                            alt="Dessert"
                            className="rounded-[32px] sm:rounded-[40px] h-[420px] sm:h-[700px] w-full object-cover shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
                        />

                        {/*<div className="absolute bottom-4 right-4 sm:-bottom-10 sm:-right-10 bg-gradient-to-r from-cyan-400 to-orange-300 rounded-[24px] sm:rounded-[30px] p-5 sm:p-8 shadow-2xl max-w-[220px] sm:max-w-xs">*/}
                        {/*    <p className="text-sm uppercase tracking-[0.2em] text-slate-800 font-semibold mb-2">*/}
                        {/*        Waffle bites*/}
                        {/*    </p>*/}
                        {/*</div>*/}
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
                            Dishes Meets
                            <span className="block text-slate-500">Luxury.</span>
                        </h2>

                        <p className="text-slate-900 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10">
                            Located in the picturesque village of Molyvos, Lesvos, Nisi Restaurant offers a relaxed dining
                            experience by the sea, combining Mediterranean flavors, fresh local ingredients, and an elegant
                            island atmosphere. With beautiful views, carefully crafted dishes, and a warm summer ambiance,
                            it is the perfect spot for lunch, dinner, and unforgettable evenings in the Aegean.

                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            {[
                                "Artisan Dishes",
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
            <section className="px-3 sm:px-6 pb-16 sm:pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
                        <div>
        <span className="text-cyan-500 uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">
          Photo Gallery
        </span>

                            <h2 className="text-2xl sm:text-5xl font-black mt-2 sm:mt-4 leading-tight">
                                More Photos
                            </h2>
                        </div>
                    </div>

                    {/* MOBILE = 2 COLS / TABLET+ = 4 COLS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 auto-rows-[150px] sm:auto-rows-[220px] md:auto-rows-[250px]">
                        {[
                            "/nisi/nisi5.jpg",
                            "/nisi/nisi8.jpeg",
                            "/nisi/nisi2.jpg",
                            "/nisi/nisi6.jpeg",
                            "/nisi/nisi3.jpg",
                            "/nisi/nisi4.jpg",
                            "/nisi/nisi7.jpeg",
                            "/nisi/nisi9.jpeg",
                            "/nisi/nisi1.jpg",
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: window.innerWidth > 768 ? 1.04 : 1,
                                    y: window.innerWidth > 768 ? -8 : 0,
                                }}
                                className={`overflow-hidden rounded-2xl sm:rounded-[28px] group relative
            
                                ${
                                    i === 0 || i === 3
                                        ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
                                        : ""
                                }
                               `}
                            >
                                <img
                                    src={img}
                                    alt="Galle"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110"
                                />

                                {/* DARK OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

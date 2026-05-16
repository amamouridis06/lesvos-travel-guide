"use client";
import { motion } from "framer-motion";

export default function JoinCommunityPage() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-100 text-neutral-900 min-h-screen"
        >

            {/* HERO */}
            <section
                className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/lesvos-community.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="relative z-10 text-center px-6 max-w-4xl"
                >
                    <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
                        Explore • Discover • Experience
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Join the Lesvos Community 🌿
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                        Discover hidden beaches, traditional taverns, sunset spots,
                        local tips and authentic island experiences.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#join"
                            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-white font-medium shadow-lg"
                        >
                            Join Now
                        </a>

                        <a
                            href="/"
                            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition px-8 py-4 rounded-2xl text-white font-medium"
                        >
                            Explore Lesvos
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* WHY JOIN */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Why Join?
                    </h2>

                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        Become part of a growing travel community and receive curated
                        recommendations, local insights and exclusive travel inspiration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

                    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition">
                        <div className="text-4xl mb-5">🍽</div>

                        <h3 className="text-xl font-semibold">
                            Local Food & Taverns
                        </h3>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Discover authentic taverns, seaside restaurants and hidden
                            cafés loved by locals.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition">
                        <div className="text-4xl mb-5">🏖</div>

                        <h3 className="text-xl font-semibold">
                            Hidden Beaches
                        </h3>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Explore secret beaches, crystal-clear waters and peaceful
                            island escapes.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition">
                        <div className="text-4xl mb-5">🌅</div>

                        <h3 className="text-xl font-semibold">
                            Travel Tips & Experiences
                        </h3>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Get insider travel tips, local recommendations and curated
                            island experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* COMMUNITY STATS */}
            <section className="bg-neutral-900 text-white py-24">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                    <div>
                        <h3 className="text-5xl font-bold">150+</h3>
                        <p className="mt-3 text-gray-400">Travel Spots</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold">50+</h3>
                        <p className="mt-3 text-gray-400">Local Recommendations</p>
                    </div>

                    <div>
                        <h3 className="text-5xl font-bold">1000+</h3>
                        <p className="mt-3 text-gray-400">Travel Enthusiasts</p>
                    </div>
                </div>
            </section>

            {/* JOIN FORM */}
            <section
                id="join"
                className="max-w-5xl mx-auto px-6 py-24"
            >
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                    {/* LEFT */}
                    <div className="p-10 md:p-14 flex flex-col justify-center">
                        <p className="text-blue-600 font-medium uppercase tracking-widest text-sm">
                            Join Today
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
                            Start Exploring Lesvos Like a Local
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Subscribe to receive travel inspiration, hidden gems,
                            food recommendations and updates about the island.
                        </p>

                        <ul className="mt-8 space-y-4 text-gray-700">
                            <li>✓ Hidden beaches & villages</li>
                            <li>✓ Best taverns & bars</li>
                            <li>✓ Travel tips & guides</li>
                            <li>✓ Curated island experiences</li>
                        </ul>
                    </div>

                    {/* RIGHT */}
                    <div className="bg-neutral-50 p-10 md:p-14 flex items-center">
                        <form className="w-full space-y-5">

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Travel Interests
                                </label>

                                <select className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Food & Drinks</option>
                                    <option>Luxury Hotels</option>
                                    <option>Hidden Beaches</option>
                                    <option>Nightlife</option>
                                    <option>Traditional Villages</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-medium shadow-lg"
                            >
                                Become a Member
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                No spam. Only authentic Lesvos experiences.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] p-10 md:p-16 text-center text-white shadow-2xl">

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Your Lesvos Journey Starts Here ✨
                    </h2>

                    <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Join our travel community and discover the island through
                        authentic local experiences.
                    </p>

                    <a
                        href="#join"
                        className="inline-block mt-10 bg-white text-blue-600 hover:bg-neutral-100 transition px-8 py-4 rounded-2xl font-semibold shadow-lg"
                    >
                        Join the Community
                    </a>
                </div>
            </section>
        </motion.main>
    );
}

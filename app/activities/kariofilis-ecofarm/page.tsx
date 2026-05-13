export default function FarmRestaurantGuidePage() {
    return (
        <div className="min-h-screen bg-stone-50 text-stone-800">
            {/* Hero Section */}
            <section
                className="relative h-[70vh] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/kariofyllis/kariofyllis3.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                    <div className="max-w-3xl text-white">
                        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                            Kariofyllis Eco Farm
                        </h1>

                        <p className="mx-auto max-w-2xl text-lg text-stone-200 md:text-xl">
                            An authentic pharm-to-table experience where nature,
                            local gastronomy and hospitality unite.
                        </p>

                        <button className="mt-8 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-stone-900 shadow-xl transition hover:scale-105">
                            Discover the experience
                        </button>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            About the place
                        </p>

                        <h2 className="mb-6 text-4xl font-bold">
                            Where the farm meets gastronomy
                        </h2>

                        <p className="mb-5 text-lg leading-8 text-stone-600">
                            The Kariofyllis Eco Farm is located in the mountainous village of Lepetymnos in Lesvos.
                            The owner and visionary behind this entire idea is George Kariofyllis .
                            After completing his studies in University of the Aegean in Rhodes, he decided to return to
                            his ancestral land and pursue what had been his dream since childhood:
                            creating a farm with various kinds of animals, such as deer, mouflons (wild sheep),
                            pygmy goats, peacocks, pheasants, and more.
                        </p>

                        <p className="text-lg leading-8 text-stone-600">
                            His vision began in 2013, when the first facilities were built,
                            the first animals were purchased, and the cultivation of aronia berries also started.
                            Aronia is considered one of the most nutritious plants, known as a “superfood,” and holds
                            the top position on the international scale of medicinal plants.
                        </p>
                        <p className="text-lg leading-8 text-stone-600">
                            The aronia fruit is processed on the farm and is available in the form of jam, dried berries,
                            fresh or frozen fruit (depending on the season), and tea. For now, at least, since every year
                            the farm expands its range with an additional product made from aronia berries.
                        </p>
                    </div>

                    <div>
                        <img
                            src="/kariofyllis/kariofyllis1.png"
                            alt="Farm"
                            className="h-[500px] w-full rounded-3xl object-cover shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Experience Cards */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Experience
                        </p>

                        <h2 className="text-4xl font-bold">
                            What to discover
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="rounded-3xl bg-stone-50 p-8 shadow-lg">
                            <div className="mb-5 overflow-hidden rounded-2xl">
                                <img
                                    src="/kariofyllis/kariofyllis2.png"
                                    alt="Farm"
                                    className="h-56 w-full object-cover"
                                />
                            </div>

                            <h3 className="mb-4 text-2xl font-semibold">
                                The Farm
                            </h3>

                            <p className="leading-7 text-stone-600">
                                Tour in the gardens, meet the crops and
                                discover the original rural life.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-stone-50 p-8 shadow-lg">
                            <div className="mb-5 overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                                    alt="Restaurant"
                                    className="h-56 w-full object-cover"
                                />
                            </div>

                            <h3 className="mb-4 text-2xl font-semibold">
                                The Restaurant
                            </h3>

                            <p className="leading-7 text-stone-600">
                                Enjoy dishes inspired by the Mediterranean cuisine,
                                based on local and fresh products.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-stone-50 p-8 shadow-lg">
                            <div className="mb-5 overflow-hidden rounded-2xl">
                                <img
                                    src="/kariofyllis/kariofyllis3.png"
                                    alt="Activities"
                                    className="h-56 w-full object-cover"
                                />
                            </div>

                            <h3 className="mb-4 text-2xl font-semibold">
                                Activities
                            </h3>

                            <p className="leading-7 text-stone-600">
                                Cooking classes, tastings, tours and unique
                                experiences in nature.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production & Certifications */}
            <section className="bg-stone-100 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-14 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Farm Details
                        </p>

                        <h2 className="text-4xl font-bold">
                            Production, Certifications & Experiences
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="rounded-3xl bg-white p-8 shadow-lg">
                            <h3 className="mb-5 text-2xl font-semibold">
                                Production
                            </h3>

                            <ul className="space-y-4 text-stone-600 leading-7">
                                <li>• Olive groves</li>
                                <li>• Marmelades - Sweets</li>
                                <li>• Honey</li>
                                <li>• Beekeeping</li>
                                <li>• Pharmaceuticals & Aromatic plants</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-lg">
                            <h3 className="mb-5 text-2xl font-semibold">
                                Certifications
                            </h3>

                            <ul className="space-y-4 text-stone-600 leading-7">
                                <li>• Biological Agriculture</li>
                                <li>• Ecotechnia</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-lg">
                            <h3 className="mb-5 text-2xl font-semibold">
                                Activities
                            </h3>

                            <ul className="space-y-4 text-stone-600 leading-7">
                                <li> • Activities for children </li>
                                <li> • Activities with animals </li>
                                <li> • School visits </li>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white p-8 shadow-lg">
                        <h3 className="mb-5 text-2xl font-semibold">
                            Services
                        </h3>

                        <ul className="space-y-4 text-stone-600 leading-7">
                            <li> • Seasonal events </li>
                            <li> • Guided tour </li>
                            <li> • Table with products </li>
                            <li> • Farm with animals </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>

            {/* Why Visit */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <img
                            src="/kariofyllis/kariofyllis5.jpeg"
                            alt="Food"
                            className="h-[500px] w-full rounded-3xl object-cover shadow-2xl"
                        />
                    </div>

                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            Why Visit
                        </p>

                        <h2 className="mb-8 text-4xl font-bold">
                            Because it's worth visiting
                        </h2>

                        <div className="space-y-5 text-lg text-stone-600">
                            <div className="flex items-start gap-4">
                                <span className="mt-1 text-emerald-700">✓</span>
                                <p>Authentic drug-to-table experience</p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="mt-1 text-emerald-700">✓</span>
                                <p>Local Mediterranean gastronomy</p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="mt-1 text-emerald-700">✓</span>
                                <p>Ideal for families and food travelers</p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="mt-1 text-emerald-700">✓</span>
                                <p>Activities in nature</p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="mt-1 text-emerald-700">✓</span>
                                <p>Relaxing and authentic atmosphere</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold">Gallery</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <img
                            src="/kariofyllis/kariofyllis5.jpeg"
                            className="h-80 w-full rounded-3xl object-cover"
                        />
                        <img
                            src="/kariofyllis/kariofyllis2.png"
                            className="h-80 w-full rounded-3xl object-cover"
                        />
                        <img
                            src="/kariofyllis/kariofyllis4.jpeg"
                            className="h-80 w-full rounded-3xl object-cover"
                        />
                        <img
                            src="/kariofyllis/kariofyllis6.jpeg"
                            className="h-80 w-full rounded-3xl object-cover"
                        />

                        <img
                            src="/kariofyllis/kariofyllis7.jpeg"
                            className="h-80 w-full rounded-3xl object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="mx-auto max-w-4xl px-6 py-24 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Information
                </p>

                <h2 className="mb-8 text-5xl font-bold">
                    Schedule your visit
                </h2>

                <div className="space-y-4 text-lg text-stone-600">
                    <p>📍 Lepetymnos, Lesvos</p>
                    <p>📞 +30 6979 458991</p>
                    <p>🌐 www.example.com</p>
                    <p>📩 giwrgos.kariofyllis@gmail.com</p>
                    <p>🕒  He accepts visits, following an agreement</p>
                </div>

                <a
                    href="+30 6979 458991"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-block rounded-2xl bg-emerald-700 px-10 py-4 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
                >
                   Book your visit
                </a>
            </section>
        </div>
    );
}

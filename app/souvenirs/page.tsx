export default function SouvenirGiftShopPage() {
    const products = [
        {
            title: "Κούπα Αθήνα",
            price: "€12",
            image:
                "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Μαγνητάκι Ακρόπολη",
            price: "€6",
            image:
                "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Παραδοσιακό Γούρι",
            price: "€18",
            image:
                "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "T-Shirt Ελλάδα",
            price: "€22",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/white-wall-3.png')]" />

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
                            Αυθεντικά Αναμνηστικά Δώρα
                        </p>

                        <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
                            Ανακαλύψτε μοναδικά δώρα από την Ελλάδα
                        </h1>

                        <p className="mt-6 text-lg text-white/90">
                            Χειροποίητα αναμνηστικά, παραδοσιακά προϊόντα και ιδιαίτερα
                            δώρα για κάθε περίσταση.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition hover:scale-105">
                                Δείτε τα προϊόντα
                            </button>

                            <button className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                                Επικοινωνία
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                            alt="Souvenir"
                            className="h-[420px] w-[340px] rounded-3xl object-cover shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold">Κατηγορίες</h2>
                    <p className="mt-3 text-stone-600">
                        Επιλέξτε ανάμεσα σε δημοφιλείς συλλογές.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        "Χειροποίητα",
                        "Παραδοσιακά",
                        "Τουριστικά Αναμνηστικά",
                    ].map((category) => (
                        <div
                            key={category}
                            className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-4 h-12 w-12 rounded-2xl bg-blue-100" />
                            <h3 className="text-xl font-semibold">{category}</h3>
                            <p className="mt-2 text-stone-600">
                                Μοναδικά προϊόντα υψηλής ποιότητας.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Δημοφιλή Προϊόντα</h2>
                            <p className="mt-2 text-stone-600">
                                Τα αγαπημένα των επισκεπτών μας.
                            </p>
                        </div>

                        <button className="rounded-2xl border border-stone-300 px-5 py-2 font-medium transition hover:bg-stone-100">
                            Όλα τα προϊόντα
                        </button>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <div
                                key={product.title}
                                className="group overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 transition hover:shadow-2xl"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-5">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold">
                                            {product.title}
                                        </h3>
                                        <span className="font-bold text-blue-600">
                      {product.price}
                    </span>
                                    </div>

                                    <button className="mt-5 w-full rounded-2xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                                        Προσθήκη στο καλάθι
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <img
                        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1200&auto=format&fit=crop"
                        alt="Gift Shop"
                        className="rounded-3xl shadow-xl"
                    />

                    <div>
                        <h2 className="text-4xl font-bold leading-tight">
                            Δώρα με ελληνική παράδοση και χαρακτήρα
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-stone-600">
                            Το κατάστημά μας προσφέρει αυθεντικά αναμνηστικά και ιδιαίτερα
                            προϊόντα εμπνευσμένα από τον ελληνικό πολιτισμό και την
                            παράδοση.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-white p-5 shadow-sm">
                                <p className="text-3xl font-bold text-blue-600">500+</p>
                                <p className="mt-1 text-stone-600">Προϊόντα</p>
                            </div>

                            <div className="rounded-2xl bg-white p-5 shadow-sm">
                                <p className="text-3xl font-bold text-blue-600">10k+</p>
                                <p className="mt-1 text-stone-600">Ευχαριστημένοι πελάτες</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-900 py-10 text-stone-300">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
                    <div>
                        <h3 className="text-xl font-bold text-white">Greek Gifts</h3>
                        <p className="mt-2 text-sm text-stone-400">
                            © 2026 Όλα τα δικαιώματα διατηρούνται.
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <a href="#" className="transition hover:text-white">
                            Instagram
                        </a>
                        <a href="#" className="transition hover:text-white">
                            Facebook
                        </a>
                        <a href="#" className="transition hover:text-white">
                            TikTok
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

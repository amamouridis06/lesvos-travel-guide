export default function LesvosSouvenirStore() {
    const products = [
        {
            id: 1,
            name: "Lesvos Sunset Tee",
            image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Mytilene Vibes",
            price: "22€",
            image:
                "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Aegean Island Ste",
            price: "20€",
            image:
                "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <div className="min-h-screen bg-[#f7f4ee] text-slate-800">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
                    alt="Lesvos"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#003049]/70 via-[#005f73]/50 to-[#e9d8a6]/40" />

                <div className="relative z-10 text-center px-6 max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                        Αναμνηστικά Μπλουζάκια από τη Λέσβο
                    </h1>

                    <p className="mt-6 text-lg md:text-2xl text-[#fdf6e3]">
                        Μοναδικά σχέδια εμπνευσμένα από τη Μυτιλήνη, το Αιγαίο και την
                        αυθεντική ομορφιά της Λέσβου.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[#ee9b00] hover:bg-[#ca8500] transition text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl">
                            Δες τα Μπλουζάκια
                        </button>

                        <button className="bg-[#94d2bd]/20 backdrop-blur border border-[#e9d8a6]/40 hover:bg-[#94d2bd]/30 transition text-white px-8 py-4 rounded-2xl text-lg font-semibold">
                            Επικοινωνία
                        </button>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Η Ιστορία του Brand</h2>

                    <p className="text-lg text-[#4f6d7a] leading-relaxed mb-4">
                        Δημιουργούμε ποιοτικά αναμνηστικά μπλουζάκια που αποτυπώνουν την
                        ατμόσφαιρα και την κουλτούρα της Λέσβου.
                    </p>

                    <p className="text-lg text-[#4f6d7a] leading-relaxed">
                        Ιδανικά για τουρίστες αλλά και για όσους αγαπούν το νησί και θέλουν
                        να κρατήσουν μαζί τους ένα κομμάτι από το Αιγαίο.
                    </p>
                </div>

                <div>
                    <img
                        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
                        alt="Tshirt"
                        className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                    />
                </div>
            </section>

            {/* Products */}
            <section className="bg-gradient-to-b from-[#e9d8a6] to-[#f7f4ee] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold">Τα Μπλουζάκια μας</h2>
                        <p className="text-[#4f6d7a] mt-4 text-lg">
                            Ανακάλυψε τα πιο δημοφιλή σχέδια.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-[#fdfcf8] rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-[#e9d8a6]"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-80 object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                                    <p className="text-[#ca6702] text-xl font-bold mt-2">
                                        {product.price}
                                    </p>

                                    <button className="mt-6 w-full bg-[#005f73] text-white py-3 rounded-2xl hover:bg-[#0a9396] transition font-semibold">
                                        Παραγγελία
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-[#fffaf0] border border-[#e9d8a6] rounded-3xl p-8 shadow-md hover:shadow-xl transition">
                        <h3 className="text-2xl font-bold mb-4">Premium Ποιότητα</h3>
                        <p className="text-[#4f6d7a]">
                            Άνετα υφάσματα και ανθεκτικές εκτυπώσεις για καθημερινή χρήση.
                        </p>
                    </div>

                    <div className="bg-[#fffaf0] border border-[#e9d8a6] rounded-3xl p-8 shadow-md hover:shadow-xl transition">
                        <h3 className="text-2xl font-bold mb-4">Τοπικά Σχέδια</h3>
                        <p className="text-[#4f6d7a]">
                            Έμπνευση από τη Λέσβο, τη θάλασσα και τα ελληνικά καλοκαίρια.
                        </p>
                    </div>

                    <div className="bg-[#fffaf0] border border-[#e9d8a6] rounded-3xl p-8 shadow-md hover:shadow-xl transition">
                        <h3 className="text-2xl font-bold mb-4">Αποστολές Παντού</h3>
                        <p className="text-[#4f6d7a]">
                            Γρήγορη αποστολή σε όλη την Ελλάδα και το εξωτερικό.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

import Link from "next/link";

export const metadata = {
    title: "Hotels & Appartments| Lesvos Travel Guide",
    description:
        "Hotels, Appartments & Studios",
};

const hotels = [
    {
        name: "Theofilos Paradise Boutique Hotel",
        description: "Luxury hotel in the heart of the city centre",
        location: "📍Mytilene, Lesvos, 81100",
        image: "/theofilos/theo-entry.jpg",
        href: "/hotels/theofilos-paradise",
        stars: 4
    },
    {
        name: "Thanos Cozy Appartments",
        description: "Traditional, peaceful, local",
        location: "📍Skalla Kallonis, Lesvos, 81107",
        image: "/thanos/thanosbed.jpg",
        href: "/hotels/thanos-cozy-appartments",
        stars: 4
    },
    {
        name: "PP Urban Studio",
        description: "A renovated studio in the heart of the city centre",
        location: "📍Mytilene, Lesvos, 81100",
        image: "/pp/pp.beds.jpg",
        href: "/hotels/pp-urban-studio",
        stars: 4
    },
    {
        name: "Eressian Hotel & Hammam Spa",
        description: "Luxury, Hammam, Serenity, Cocktails, Dreams, Aegean",
        location: "📍Eresos, Lesvos",
        image: "/eressian/er_pool1.jpg",
        href: "/hotels/eressian",
        stars: 3
    },
    {
        name: "Hotel Petrino ",
        description: "A hotel with view the castle",
        location: "📍Molyvos, Lesvos",
        image: "/petrino/petrino4.png",
        href: "/hotels/petrino",
        stars:2
    },

];

export default function HotelsPage() {
    // 1. Ομαδοποίηση
    const groupedHotels = hotels.reduce((acc, hotel) => {
        const stars = hotel.stars; // π.χ. 5, 4, 3
        if (!acc[stars]) acc[stars] = [];
        acc[stars].push(hotel);
        return acc;
    }, {});

    // 2. Ταξινόμηση αστεριών (5 → 1)
    const sortedStars = Object.keys(groupedHotels)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <main className="bg-neutral-100 text-neutral-900 min-h-screen">

            {/* HERO */}
            <section className="relative h-[60vh] bg-[url('/hotels-logo.png')] bg-cover bg-center bg-fixed">
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 h-full flex items-end">
                    <div className="max-w-6xl mx-auto px-6 pb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Hotels in Lesvos
                        </h1>
                        <p className="text-gray-200 mt-2 max-w-xl">
                            Choose Your Perfect Hotel
                        </p>
                    </div>
                </div>
            </section>

            {/* LIST BY STARS */}
            <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">

                {sortedStars.map((stars) => (
                    <div key={stars}>
                        <h2 className="text-2xl font-bold mb-6">
                            {stars} Star Hotels
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {groupedHotels[stars].map((hotel) => (
                                <Link
                                    key={hotel.name}
                                    href={hotel.href}
                                    className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition block"
                                >
                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
                                    />

                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold">
                                            {hotel.name}
                                        </h3>

                                        <p className="text-sm text-gray-600 mt-1">
                                            {hotel.description}
                                        </p>

                                        <p className="text-sm text-gray-600 mt-1">
                                            {hotel.location}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

            </section>
        </main>
    );
}
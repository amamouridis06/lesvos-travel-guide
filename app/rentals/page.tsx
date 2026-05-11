import Link from "next/link";

export const metadata = {
    title: "Car Rentals| Lesvos Travel Guide",
    description:
        "Car Rentals",
};

const rentals = [
    {
        name: "5 United Car Rental",
        description: "One choice to rent a car",
        location: "📍Skala Kallonis, Lesvos, 81100",
        image: "/5.united/5.united.jpg",
        href: "/rentals/5.united",
    },
];

export default function RentalsPage() {
    return (
        <main className="bg-neutral-100 text-neutral-900 min-h-screen">

            {/* ================= HERO ================= */}
            <section className="relative h-[60vh] bg-[url('/5.united/5hero.jpg')] bg-cover bg-center bg-fixed">
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 h-full flex items-end">
                    <div className="max-w-6xl mx-auto px-6 pb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Car Rentals in Lesvos
                        </h1>
                        <p className="text-gray-200 mt-2 max-w-xl">
                            Choose Your Perfect Car
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= LIST ================= */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rentals.map((rentals) => (
                        <Link
                            key={rentals.name}
                            href={rentals.href}
                            className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition block"
                        >
                            <img
                                src={rentals.image}
                                alt={rentals.name}
                                className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
                            />

                            <div className="p-5">
                                <h3 className="text-lg font-semibold">{rentals.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {rentals.description}

                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    {rentals.location}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}

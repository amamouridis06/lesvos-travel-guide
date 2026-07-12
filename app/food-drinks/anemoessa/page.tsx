import React from "react";
import Link from "next/link";

export default function AnamoesaPage() {
    const restaurant = {
        name: "Anemoessa Restaurant",
        category: " Restaurant",
        location: "Skala Sykamnias, Lesvos",
        description: [
            <p> At Anemoessa, in Skala Sikamineas, Lesvos, you’ll enjoy the freshest fish and unique seafood recipes. Take in the charm of the picturesque harbor with views of the Panagia Gorgona (Virgin Mary the Mermaid) and the endless blue, in a relaxed atmosphere that reflects professionalism and genuine hospitality.An ideal choice for a romantic dinner, family moments, a relaxed “ouzo” with friends, or your most special occasions. Sunset hour is truly magical at our place. Don’t miss our signature dishes: seafood stuffed cabbage rolls, cuttlefish ink orzo, and our standout lobster pasta – all distinguished by their flavor, quality, and creativity. To finish, we offer a unique Armenovil, crafted by the finest pastry chef (zaharoplastis) in our town. </p>
        ],
        heroImage:
            "/anemoessa/anemoessa_hero.png",
        gallery: [
            "/misirlou/misirlou1.jpg",
            "/misirlou/misirlou3.jpg",
            "/misirlou/misirlou4.jpg",
            "/misirlou/misirlou5.jpg",
            "/misirlou/misirlou7.jpg",
            "/misirlou/misirlou8.jpg",
            "/misirlou/misirlou9.jpg",
            "/misirlou/misirlou10.jpg",
            "/misirlou/misirlou11.jpg",
            "/misirlou/misirlou12.jpg",
            "/misirlou/misirlou13.jpg",
            "/misirlou/misirlou14.jpg",
            "/misirlou/misirlou15.jpg",
            "/misirlou/misirlou16.jpg",
            "/misirlou/misirlou18.jpg",
            "/misirlou/misirlou19.jpg",

        ],
        highlights: [
            "Local products",
            "Romantic atmosphere",
            "Family friendly",
        ],
        facilities: [
            "Free Wi-Fi",
            "Vegetarian options"
        ],
        important: [
            "Τhere is accessibility for people with disabilities"
        ],
        openingHours: "11:00 - 21:30",
        phone: "+30 22530 55360",
        instagram: "anemoessa_restaurant",
        facebook: "Anemoessa Restaurant "
    };

    return (
        <main className="min-h-screen bg-stone-50 text-stone-900">
            <section className="relative h-[72vh] min-h-[520px] overflow-hidden">
                <img
                    src={restaurant.heroImage}
                    alt={`${restaurant.name} restaurant`}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                <div className="relative z-10 flex h-full items-end">
                    <div className="mx-auto w-full max-w-6xl px-5 pb-12">
                        <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-800 shadow-sm">
                            {restaurant.category}
                        </div>

                        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
                            {restaurant.name}
                        </h1>

                        <div className="mt-5 flex flex-wrap gap-4 text-white/95">
                            <span>📍 {restaurant.location}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-8">
                    <div className="rounded-2xl bg-white p-7 shadow-sm">
                        <h2 className="text-2xl font-semibold">Our Story</h2>
                        <p className="mb-4 text-lg leading-8 text-stone-700">
                            {restaurant.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {restaurant.highlights.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900"
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {restaurant.gallery.map((image, index) => (
                            <div key={image} className="overflow-hidden rounded-2xl shadow-sm">
                                <img
                                    src={image}
                                    alt={`Restaurant gallery ${index + 1}`}
                                    className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl bg-white p-7 shadow-sm">
                        <h2 className="text-2xl font-semibold">Why visit?</h2>
                        <p className="mt-4 leading-7 text-stone-700">
                            Perfect for travellers who want to discover local flavours in a
                            beautiful setting. This restaurant is ideal for sunset dinners,
                            relaxed lunches, family meals, and anyone looking for an authentic
                            island dining experience.
                        </p>
                    </div>
                </div>

                <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
                    <div className="rounded-2xl bg-white p-7 shadow-md">
                        <h2 className="text-2xl font-semibold">Plan your visit</h2>

                        <div className="mt-5 space-y-4 text-stone-700">
                            <div>
                                <p className="font-medium text-stone-900">🕒 Opening hours</p>
                                <p>{restaurant.openingHours}</p>
                            </div>

                            <div>
                                <p className="font-medium text-stone-900">☎️ Contact</p>
                                <p>{restaurant.phone}</p>
                            </div>

                            <div>
                                <p className="font-medium text-stone-900">📸 Instagram</p>
                                <p>{restaurant.instagram}</p>
                            </div>
                            <div>
                                <p className="font-medium text-stone-900">📸 Facebook</p>
                                <p>{restaurant.facebook}</p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3">
                            <Link
                                href="https://maps.app.goo.gl/FxcAkqajbyM9jKdz9"
                                target="_blank"
                                className="inline-block rounded-xl border border-stone-300 bg-white px-5 py-4 text-base font-medium text-stone-900 transition hover:bg-stone-100"
                            >
                                View location ↗
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-7 shadow-sm">
                        <h3 className="text-xl font-semibold">Facilities</h3>

                        <div className="mt-5 grid gap-3">
                            {restaurant.facilities.map((facility) => (
                                <div
                                    key={facility}
                                    className="rounded-xl bg-stone-100 px-4 py-3 text-stone-700"
                                >
                                    ✓ {facility}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white p-7 shadow-sm">
                        <h3 className="text-xl font-semibold">Important Informations</h3>

                        <div className="mt-5 grid gap-3">
                            {restaurant.important.map((important) => (
                                <div
                                    key={important}
                                    className="rounded-xl bg-stone-100 px-4 py-3 text-stone-700"
                                >
                                    {important}
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>
        </main>
    );
}

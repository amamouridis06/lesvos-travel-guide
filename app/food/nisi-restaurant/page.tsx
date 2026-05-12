import React from "react";
import Link from "next/link";

export default function NisiPage() {
    const restaurant = {
        name: "Nisi Restaurant",
        category: " Restaurant",
        location: "Molyvos, Lesvos",
        rating: 4.8,
        reviews: 323,
        description: [
            <p>The Nisi Restaurant was created by two brothers who traveled abroad, worked in different kitchens, and discovered new flavors, cultures, and experiences along the way. Inspired by everything we encountered on our journey, we created a warm, relaxed, and authentic space where good food, fine wine, and great company come together to create memorable experiences.</p>,
            <p>Through the images, tastes, and hospitality that shaped us, The Nisi Restaurant became more than just a restaurant — it became part of our story. For us, every dish served and every table shared truly matters.</p>,
        ],
        heroImage:
            "/nisi/nisi_hero.jpg",
        gallery: [
            "/nisi/nisi1.jpg",
            "/nisi/nisi2.jpg",
            "/nisi/nisi3.jpg",
            "/nisi/nisi4.jpg",
            "/nisi/nisi5.jpg",
            "/nisi/nisi6.jpeg",
            "/nisi/nisi7.jpeg",
            "/nisi/nisi8.jpeg",
            "/nisi/nisi9.jpeg",
        ],
        highlights: [
            "Fresh seafood",
            "Local products",
            "Romantic atmosphere",
            "Family friendly",
        ],
        facilities: [
            "Free Wi-Fi",
            "Vegetarian options"
        ],
        facilities: [
            "Τhere is no accessibility for people with disabilities"
        ],
        openingHours: "10:00 - 00:00",
        phone: "+30 22530 72172",
        instagram: "@restaurant_nisi",
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
                            <span>
                ⭐ {restaurant.rating} · {restaurant.reviews} reviews
              </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-8">
                    <div className="rounded-2xl bg-white p-7 shadow-sm">
                        <h2 className="text-2xl font-semibold">About</h2>
                        <p className="text-lg leading-8 text-stone-700">
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
                        </div>

                        <div className="mt-6 grid gap-3">
                            {/*<button className="rounded-xl bg-stone-900 px-5 py-4 text-base font-medium text-white transition hover:bg-stone-700">*/}
                            {/*  Book a table*/}
                            {/*</button></>*/}
                            <Link
                                href="https://maps.app.goo.gl/8YfmkHVaHJr539hn8"
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
                                    ✓ {important}
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>
        </main>
    );
}

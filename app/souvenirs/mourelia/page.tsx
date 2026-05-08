import React from "react";
import { MapPin, Clock, Phone, Star, Utensils, Wifi, Car, Heart, Instagram, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RestaurantTravelGuideListing() {
    const restaurant = {
        name: "Aegean Table",
        category: "Traditional Greek Restaurant",
        location: "Mytilene, Lesvos",
        rating: 4.8,
        reviews: 126,
        description:
            "A warm, authentic restaurant experience inspired by the flavours of Lesvos. Enjoy fresh seafood, local products, traditional recipes, and a relaxed island atmosphere just a few steps from the sea.",
        heroImage:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
        ],
        highlights: ["Fresh seafood", "Local products", "Romantic atmosphere", "Family friendly"],
        facilities: [
            { icon: <Wifi className="h-4 w-4" />, label: "Free Wi‑Fi" },
            { icon: <Car className="h-4 w-4" />, label: "Nearby parking" },
            { icon: <Utensils className="h-4 w-4" />, label: "Vegetarian options" },
            { icon: <Heart className="h-4 w-4" />, label: "Local favourites" },
        ],
        openingHours: "Daily: 12:00 – 00:00",
        phone: "+30 22510 00000",
        instagram: "@aegeantable",
    };

    return (
        <main className="min-h-screen bg-stone-50 text-stone-900">
            <section className="relative h-[72vh] min-h-[520px] overflow-hidden">
                <img
                    src={restaurant.heroImage}
                    alt={`${restaurant.name} restaurant`}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                <div className="relative z-10 flex h-full items-end">
                    <div className="mx-auto w-full max-w-6xl px-5 pb-12">
                        <div className="mb-4 inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-800 shadow-sm backdrop-blur">
                            {restaurant.category}
                        </div>

                        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
                            {restaurant.name}
                        </h1>

                        <div className="mt-5 flex flex-wrap items-center gap-4 text-white/95">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                <span>{restaurant.location}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 fill-current" />
                                <span>
                  {restaurant.rating} · {restaurant.reviews} reviews
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-8">
                    <Card className="rounded-2xl border-none shadow-sm">
                        <CardContent className="p-7">
                            <p className="text-lg leading-8 text-stone-700">{restaurant.description}</p>

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
                        </CardContent>
                    </Card>

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

                    <Card className="rounded-2xl border-none shadow-sm">
                        <CardContent className="p-7">
                            <h2 className="text-2xl font-semibold">Why visit?</h2>
                            <p className="mt-4 leading-7 text-stone-700">
                                Perfect for travellers who want to discover local flavours in a beautiful setting. This restaurant is ideal for sunset dinners, relaxed lunches, family meals, and anyone looking for an authentic island dining experience.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
                    <Card className="rounded-2xl border-none shadow-md">
                        <CardContent className="space-y-5 p-7">
                            <h2 className="text-2xl font-semibold">Plan your visit</h2>

                            <div className="flex items-start gap-3 text-stone-700">
                                <Clock className="mt-1 h-5 w-5" />
                                <div>
                                    <p className="font-medium text-stone-900">Opening hours</p>
                                    <p>{restaurant.openingHours}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-stone-700">
                                <Phone className="mt-1 h-5 w-5" />
                                <div>
                                    <p className="font-medium text-stone-900">Contact</p>
                                    <p>{restaurant.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-stone-700">
                                <Instagram className="mt-1 h-5 w-5" />
                                <div>
                                    <p className="font-medium text-stone-900">Instagram</p>
                                    <p>{restaurant.instagram}</p>
                                </div>
                            </div>

                            <div className="grid gap-3 pt-2">
                                <Button className="rounded-xl py-6 text-base">Book a table</Button>
                                <Button variant="outline" className="rounded-xl py-6 text-base">
                                    View location
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-none shadow-sm">
                        <CardContent className="p-7">
                            <h3 className="text-xl font-semibold">Facilities</h3>
                            <div className="mt-5 grid gap-4">
                                {restaurant.facilities.map((facility) => (
                                    <div key={facility.label} className="flex items-center gap-3 text-stone-700">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-800">
                      {facility.icon}
                    </span>
                                        <span>{facility.label}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </aside>
            </section>
        </main>
    );
}

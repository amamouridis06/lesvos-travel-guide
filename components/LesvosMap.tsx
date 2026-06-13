"use client";

import { useEffect, useMemo, useState } from "react";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    Tooltip,
    useMap,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";

type PlaceCategory =
    | "Town"
    | "Village"
    | "Beach"
    | "Food"
    | "Nature"
    | "Culture"
    | "Accomodation"
    | "Bar";
type LesvosPlace = {
    id: number;
    name: string;
    location: string;
    category: PlaceCategory;
    description: string;
    coordinates: LatLngExpression;
    image: string;
    href: string;
};

const lesvosPlaces: LesvosPlace[] = [
    {
        id: 1,
        name: "Skala Kallonis",
        location: "Central Lesvos",
        category: "Village",
        description:
            "A tranquil fishing village on the Gulf of Kalloni, known for sardines and birdwatching.",
        coordinates: [39.208, 26.208],
        image: "/images/explore/skala-kallonis.jpg",
        href: "/places/skala-kallonis",
    },
    {
        id: 2,
        name: "Diamanti Studios",
        location: "Kalloni Lesvos",
        category: "Accomodation",
        description:
            "Studios in a fanastic village in Central Lesvos",
        coordinates: [39.206767,26.207183],
        image: "/diamanti/house.jpg",
        href: "/hotels/diamanti-studios",
    },
    {
        id: 3,
        name: "Hotel Petrino",
        location: "Molyvos Lesvos",
        category: "Accomodation",
        description:
            "A hotel in a fanastic village in North Lesvos",
        coordinates: [39.3665856,26.1800643],
        image: "/petrino/petrino1.jpg",
        href: "/hotels/petrino",
    },
    {
        id: 4,
        name: "Mytilene",
        location: "Southeastern Lesvos",
        category: "Town",
        description:
            "The island’s lively capital, with its harbor, castle, museums and waterfront cafés.",
        coordinates: [39.107, 26.555],
        image: "/images/explore/mytilene.jpg",
        href: "/places/mytilene",
    },
    {
        id: 5,
        name: "Tryfon",
        location: "Central Lesvos",
        category: "Food & Drink",
        description:
            "A traditional tavern in centre of Lesvos",
        coordinates: [39.2332881,26.2081099],
        image: "/tryfon/tryfon6.jpg",
        href: "/food-drinks/tryfon",
    },
    {
        id: 6,
        name: "Tropicana Platanos",
        location: "Northern Lesvos",
        category: "Food & Drink",
        description:
            "A traditional rastaurant in Molyvos",
        coordinates: [39.3694398,26.173488],
        image: "/tropicana/tropicana1.jpg",
        href: "/food-drinks/tropicana",
    },
    {
        id: 7,
        name: "Petra",
        location: "Northern Lesvos",
        category: "Beach",
        description:
            "A seaside village with a long beach and the iconic church built on a rock.",
        coordinates: [39.327, 26.177],
        image: "/images/explore/petra.jpg",
        href: "/places/petra",
    },
    {
        id: 8,
        name: "Skala Eresou",
        location: "Western Lesvos",
        category: "Beach",
        description:
            "A relaxed coastal destination known for its long beach and sunset atmosphere.",
        coordinates: [39.134, 25.93],
        image: "/images/explore/skala-eresou.jpg",
        href: "/places/skala-eresou",
    },
    {
        id: 9,
        name: "Plomari",
        location: "Southern Lesvos",
        category: "Village",
        description:
            "A charming coastal town associated with the island’s famous ouzo tradition.",
        coordinates: [38.976, 26.37],
        image: "/images/explore/plomari.jpg",
        href: "/places/plomari",
    },
    {
        id: 10,
        name: "Sigri",
        location: "Western Lesvos",
        category: "Nature",
        description:
            "A peaceful village near the Petrified Forest and dramatic volcanic landscape.",
        coordinates: [39.211, 25.855],
        image: "/images/explore/sigri.jpg",
        href: "/places/sigri",
    },
    {
        id: 11,
        name: "Agiasos",
        location: "Central Lesvos",
        category: "Culture",
        description:
            "A mountain village known for its traditional architecture, crafts and local culture.",
        coordinates: [39.082, 26.37],
        image: "/images/explore/agiasos.jpg",
        href: "/places/agiasos",
    },
    {
        id: 12,
        name: "Presidential Beach Villa",
        location: "Pyrgi Lesvos",
        category: "Accomodation",
        description:
            "A luxury villa in a fanastic village in East Lesvoss",
        coordinates: [39.0891364,26.5202991],
        image: "/villa/outdoor2.jpg",
        href: "/hotels/presidential-beach-villa",
    },
    {
        id: 13,
        name: "PP Urban Studio",
        location: "Xarilaou Trikoupi 9 Mytilene, Lesvos",
        category: "Accomodation",
        description:
            "Where modern living meets the city’s heartbeat.",
        coordinates: [39.1048645,26.5530956],
        image: "/pp/pp.beds.jpg",
        href: "/hotels/pp-urban-studio",
    },
    {
        id: 13,
        name: "Pierres Blanches Residences",
        location: " Mytilene, Lesvos",
        category: "Accomodation",
        description:
            "Residences in East Lesvos",
        coordinates: [39.0936071,26.5401768],
        image: "/pierres/hero.jpeg",
        href: "/hotels/pierres-blances",
    },
    {
        id: 14,
        name: "Eressian Hotel & Hammam Spa",
        location: "Eresos, Lesvos",
        category: "Accomodation",
        description:
            "Where modern living meets the village life.",
        coordinates: [39.1700789,25.9349545],
        image: "/eressian/er_pool1.jpg",
        href: "/hotels/eressian",
    },
    {
        id: 15,
        name: "Thanos Cozy Apartments",
        location: "Skala Kallonis, Lesvos",
        category: "Accomodation",
        description:
            "Where the sea meets stillness.",
        coordinates: [39.207121,26.2080755],
        image: "/thanos/thanosbed.jpg",
        href: "/hotels/thanos-cozy-appartments",
    },
    {
        id: 16,
        name: "Azul Paraiso",
        location: "Anaxos, Lesvos",
        category: "Bar",
        description:
            "A fantastic place to drink your cocktail by the sea and you can eat the best choice the fantastic pancakes",
        coordinates: [39.3202104,26.1492031],
        image: "/azul/azul-hero.jpeg",
        href: "/food-drinks/azul-paraiso",
    },
    {
        id: 17,
        name: "Molyvos",
        location: "Northern Lesvos",
        category: "Village",
        description:
            "A fantastic to eat, drink and to walk",
        coordinates: [39.3692702,26.1685807],
        image: "/villages/molivos1.jpeg",
        href: "/villages/molyvos",
    },
    {
        id: 18,
        name: "Pallas Cafe - Grill",
        location: " Mesotopos, Lesvos",
        category: "Food & Drink",
        description:
            "Fresh meat, local dishes in a beautiful village",
        coordinates: [39.1315723,26.0036708],
        image: "/pallas/palas.jpg",
        href: "/food-drinks/pallas",
    },
    {
        id: 19,
        name: "Taverna Mpampis",
        location: "Molyvos, Lesvos",
        category: "Food & Drink",
        description:
            "Fresh meat, local dishes in a beautiful village",
        coordinates: [39.3673861,26.1753635],
        image: "/mpampis/mpampis13.jpg",
        href: "/food-drinks/tavernaompampis",
    },
    {
        id: 19,
        name: "Taverna Mpampis",
        location: "Molyvos, Lesvos",
        category: "Food & Drink",
        description:
            "Fresh meat, local dishes in a beautiful village",
        coordinates: [39.3673861,26.1753635],
        image: "/mpampis/mpampis13.jpg",
        href: "/food-drinks/tavernaompampis",
    },
    {
        id: 20,
        name: "Nisi Restaurant",
        location: "Plateia Kiriakou,811 08 Molyvos, Lesvos",
        category: "Food",
        description:
            "Authentic Greek flavors, and fantastic hospitality.",
        coordinates: [39.3693073,26.1733986],
        image: "/nisi/nisi10.jpg",
        href: "/food-drinks/nisi-restaurant",
    },
    {
        id: 21,
        name: "To Limanaki Ton Pamfilon",
        location: "Skala Pamfilon, Lesvos",
        category: "Food & Drink",
        description:
            "Fresh fish, local dishes, and a relaxing seaside atmosphere.",
        coordinates: [39.1600419,26.530802],
        image: "/limanaki/limanaki_pamf1.jpg",
        href: "/food-drinks/limanaki_pamfilon",
    },
    {
        id: 22,
        name: "Petite",
        location: "Molyvos Harbour, Lesvos",
        category: "Food & Drink",
        description:
            "Delicius pancakes and wafles",
        coordinates: [39.3692427,26.1685039],
        image: "/petite/petite7.jpg",
        href: "/food-drinks/petite",
    },
    {
        id: 22,
        name: "Misirlou",
        location: "Molyvos Harbour, Lesvos",
        category: "Food & Drink",
        description:
            "Greek flavors, cocktails, seaside relaxation, escape.",
        coordinates: [39.3690915,26.1694041],
        image: "/misirlou/misirlou6.jpg",
        href: "/food-drinks/misirlou",
    },
];

const categoryLabels: Record<PlaceCategory, string> = {
    Town: "Town",
    Village: "Village",
    Beach: "Beach",
    Food: "Food & Drink",
    Nature: "Nature",
    Culture: "Culture",
    Accomodation:"Accomodation",
    Bar: "Bar",
};

function createMarkerIcon(image: string, selected: boolean) {
    return L.divIcon({
        className: "",
        html: `
      <div class="photo-map-marker ${
            selected ? "photo-map-marker--selected" : ""
        }">
        <img
          src="${image}"
          alt=""
        />
      </div>
    `,
        iconSize: selected ? [66, 66] : [54, 54],
        iconAnchor: selected ? [33, 33] : [27, 27],
        popupAnchor: [0, -34],
    });
}

function FlyToPlace({
                        place,
                    }: {
    place: LesvosPlace;
}) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(place.coordinates, 12, {
            duration: 1.4,
        });
    }, [map, place]);

    return null;
}

type LesvosMapProps = {
    selectedPlaceName?: string;
};

export default function LesvosMap({
                                      selectedPlaceName,
                                  }: LesvosMapProps) {
    const [selectedPlace, setSelectedPlace] = useState(lesvosPlaces[0]);
    const [activeCategory, setActiveCategory] = useState<
        PlaceCategory | "All"
    >("All");

    useEffect(() => {
        if (!selectedPlaceName) return;

        const normalizedSelected = selectedPlaceName
            .toLowerCase()
            .replace("mytilini", "mytilene")
            .replace("molivos", "molyvos");

        const matchingPlace = lesvosPlaces.find((place) =>
            place.name.toLowerCase() === normalizedSelected,
        );

        if (matchingPlace) {
            setSelectedPlace(matchingPlace);
            setActiveCategory("All");
        }
    }, [selectedPlaceName]);

    const visiblePlaces = useMemo(() => {
        if (activeCategory === "All") {
            return lesvosPlaces;
        }

        return lesvosPlaces.filter(
            (place) => place.category === activeCategory,
        );
    }, [activeCategory]);
    return (
        <section
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07100f] shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:rounded-[2rem] xl:rounded-[2.5rem]">
            <div className="grid xl:grid-cols-[360px_minmax(0,1fr)] 2xl:grid-cols-[390px_minmax(0,1fr)]">
                {/* Sidebar */}
                <aside
                    className="relative z-[500] border-b border-white/10 bg-[#091311] p-4 sm:p-6 xl:border-b-0 xl:border-r xl:p-7">
                    <div className="max-w-2xl xl:max-w-none">
                        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-300 sm:text-xs">
                            Explore Lesvos
                        </p>

                        <h2 className="mt-3 text-2xl font-black tracking-[-0.05em] text-white sm:mt-4 sm:text-4xl">
                            Discover the
                            <span className="block text-white/35">whole island.</span>
                        </h2>

                        <p className="mt-3 max-w-xl text-xs leading-6 text-white/55 sm:mt-4 sm:text-sm sm:leading-7">
                            Select a destination and discover beaches, villages, food,
                            accommodation and cultural locations.
                        </p>
                    </div>

                    {/* Category filters */}
                    <div className="-mx-4 mt-5 overflow-hidden px-4 sm:-mx-6 sm:px-6 xl:mx-0 xl:px-0">
                        <div
                            className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:flex-wrap xl:overflow-visible">
                            {[
                                "All",
                                "Beach",
                                "Village",
                                "Town",
                                "Food",
                                "Nature",
                                "Culture",
                                "Accommodation",
                                "Bar",
                            ].map((category) => {
                                const isActive = activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category as PlaceCategory | "All")
                                        }
                                        className={`shrink-0 rounded-full border px-3.5 py-2 text-[11px] font-bold transition sm:px-4 sm:text-xs ${
                                            isActive
                                                ? "border-orange-300 bg-orange-300 text-stone-950 shadow-[0_8px_24px_rgba(253,186,116,0.25)]"
                                                : "border-white/10 bg-white/[0.05] text-white/60 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                                        }`}
                                    >
                                        {category === "All"
                                            ? "All"
                                            : categoryLabels[category as PlaceCategory]}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Places list */}
                    <div className="-mx-4 mt-3 overflow-hidden px-4 sm:-mx-6 sm:px-6 xl:mx-0 xl:mt-6 xl:px-0">
                        <div
                            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:block xl:max-h-[520px] xl:space-y-3 xl:overflow-y-auto xl:overflow-x-hidden xl:pb-0 xl:pr-2">
                            {visiblePlaces.map((place) => {
                                const isSelected = selectedPlace.id === place.id;

                                return (
                                    <button
                                        key={place.id}
                                        type="button"
                                        onClick={() => setSelectedPlace(place)}
                                        className={`flex min-w-[245px] snap-start items-center gap-3 rounded-2xl border p-3 text-left transition sm:min-w-[280px] xl:w-full xl:min-w-0 ${
                                            isSelected
                                                ? "border-orange-300/60 bg-orange-300/10 shadow-[0_10px_35px_rgba(0,0,0,0.18)]"
                                                : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.08]"
                                        }`}
                                    >
                                        <img
                                            src={place.image}
                                            alt={place.name}
                                            className="h-14 w-14 shrink-0 rounded-xl object-cover sm:h-16 sm:w-16"
                                        />

                                        <span className="min-w-0 flex-1">
                    <span
                        className="block text-[9px] font-black uppercase tracking-[0.14em] text-orange-300 sm:text-[10px]">
                      {categoryLabels[place.category]}
                    </span>

                    <span className="mt-1 block truncate text-sm font-black text-white sm:text-base">
                      {place.name}
                    </span>

                    <span className="mt-1 block truncate text-[11px] text-white/45 sm:text-xs">
                      {place.location}
                    </span>
                  </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </aside>

                {/* Map */}
                <div className="relative min-w-0">
                    <MapContainer
                        center={[39.19, 26.22]}
                        zoom={9}
                        minZoom={8}
                        maxZoom={18}
                        scrollWheelZoom
                        className="
            h-[440px] w-full
            sm:h-[560px]
            md:h-[640px]
            lg:h-[720px]
            xl:h-[780px]
            2xl:h-[840px]
          "
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <FlyToPlace place={selectedPlace}/>

                        {visiblePlaces.map((place) => {
                            const isSelected = selectedPlace.id === place.id;

                            return (
                                <Marker
                                    key={place.id}
                                    position={place.coordinates}
                                    icon={createMarkerIcon(place.image, isSelected)}
                                    eventHandlers={{
                                        click: () => setSelectedPlace(place),
                                    }}
                                >
                                    <Tooltip direction="top" offset={[0, -22]}>
                                        {place.name}
                                    </Tooltip>

                                    <Popup>
                                        <div className="w-[210px] overflow-hidden sm:w-[240px]">
                                            <img
                                                src={place.image}
                                                alt={place.name}
                                                className="h-28 w-full rounded-xl object-cover sm:h-32"
                                            />

                                            <p className="mb-0 mt-3 text-[10px] font-bold uppercase tracking-wider text-orange-700 sm:text-xs">
                                                {categoryLabels[place.category]}
                                            </p>

                                            <h3 className="mb-0 mt-1 text-base font-black text-stone-950 sm:text-lg">
                                                {place.name}
                                            </h3>

                                            <p className="mt-2 text-xs leading-5 text-stone-600 sm:text-sm">
                                                {place.description}
                                            </p>

                                            <a
                                                href={place.href}
                                                className="mt-3 inline-flex rounded-full bg-stone-950 px-4 py-2 text-xs font-bold text-white"
                                            >
                                                View destination →
                                            </a>
                                        </div>
                                    </Popup>
                                </Marker>
                            );
                        })}
                    </MapContainer>

                    {/* Selected place card */}
                    <div
                        className="pointer-events-none absolute inset-x-3 bottom-3 z-[400] sm:inset-x-auto sm:bottom-5 sm:left-1/2 sm:w-[calc(100%-3rem)] sm:max-w-md sm:-translate-x-1/2 lg:bottom-6">
                        <div
                            className="rounded-2xl border border-white/15 bg-[#07100f]/92 p-2.5 shadow-2xl backdrop-blur-xl sm:p-3">
                            <div className="flex items-center gap-3">
                                <img
                                    src={selectedPlace.image}
                                    alt={selectedPlace.name}
                                    className="h-14 w-14 shrink-0 rounded-xl object-cover sm:h-16 sm:w-16"
                                />

                                <div className="min-w-0 flex-1">
                                    <p className="text-[9px] font-black uppercase tracking-[0.14em] text-orange-300 sm:text-[10px]">
                                        {categoryLabels[selectedPlace.category]}
                                    </p>

                                    <h3 className="mt-0.5 truncate text-base font-black text-white sm:text-lg">
                                        {selectedPlace.name}
                                    </h3>

                                    <p className="mt-0.5 truncate text-[11px] text-white/50 sm:text-xs">
                                        {selectedPlace.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

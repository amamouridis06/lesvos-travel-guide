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
    | "Culture";

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
        id: 2,
        name: "Molyvos",
        location: "Northern Lesvos",
        category: "Village",
        description:
            "A traditional stone-built village crowned by its medieval castle.",
        coordinates: [39.367, 26.174],
        image: "/images/explore/molyvos.jpg",
        href: "/places/molyvos",
    },
    {
        id: 8,
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
        id: 3,
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
        id: 4,
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
        id: 5,
        name: "Plomari",
        location: "Southern Lesvos",
        category: "Food",
        description:
            "A charming coastal town associated with the island’s famous ouzo tradition.",
        coordinates: [38.976, 26.37],
        image: "/images/explore/plomari.jpg",
        href: "/places/plomari",
    },
    {
        id: 6,
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
        id: 7,
        name: "Agiasos",
        location: "Central Lesvos",
        category: "Culture",
        description:
            "A mountain village known for its traditional architecture, crafts and local culture.",
        coordinates: [39.082, 26.37],
        image: "/images/explore/agiasos.jpg",
        href: "/places/agiasos",
    },
];

const categoryLabels: Record<PlaceCategory, string> = {
    Town: "Town",
    Village: "Village",
    Beach: "Beach",
    Food: "Food & Drink",
    Nature: "Nature",
    Culture: "Culture",
};

function createMarkerIcon(category: PlaceCategory, selected: boolean) {
    const icons: Record<PlaceCategory, string> = {
        Town: "✦",
        Village: "⌂",
        Beach: "☀",
        Food: "●",
        Nature: "⌁",
        Culture: "◆",
    };

    return L.divIcon({
        className: "",
        html: `
      <div class="lesvos-map-marker ${
            selected ? "lesvos-map-marker--selected" : ""
        }">
        <span>${icons[category]}</span>
      </div>
    `,
        iconSize: selected ? [54, 54] : [46, 46],
        iconAnchor: selected ? [27, 27] : [23, 23],
        popupAnchor: [0, -28],
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
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#07100f] shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
            <div className="grid lg:grid-cols-[360px_1fr]">
                <aside className="relative z-[500] border-b border-white/10 bg-[#091311] p-6 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
                        Explore Lesvos
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">
                        Discover the
                        <span className="block text-white/35">whole island.</span>
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-white/55">
                        Select a destination to move around the map and discover beaches,
                        villages, food and cultural locations.
                    </p>

                    <div className="mt-7 flex gap-2 overflow-x-auto pb-2 lg:flex-wrap">
                        {[
                            "All",
                            "Beach",
                            "Village",
                            "Town",
                            "Food",
                            "Nature",
                            "Culture",
                        ].map((category) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(
                                            category as PlaceCategory | "All",
                                        )
                                    }
                                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${
                                        isActive
                                            ? "border-orange-300 bg-orange-300 text-stone-950"
                                            : "border-white/10 bg-white/[0.05] text-white/60 hover:border-white/25 hover:text-white"
                                    }`}
                                >
                                    {category === "All"
                                        ? "All"
                                        : categoryLabels[category as PlaceCategory]}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-7 space-y-3 lg:max-h-[390px] lg:overflow-y-auto lg:pr-2">
                        {visiblePlaces.map((place) => {
                            const isSelected = selectedPlace.id === place.id;

                            return (
                                <button
                                    key={place.id}
                                    type="button"
                                    onClick={() => setSelectedPlace(place)}
                                    className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                                        isSelected
                                            ? "border-orange-300/60 bg-orange-300/10"
                                            : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                                    }`}
                                >
                                    <img
                                        src={place.image}
                                        alt=""
                                        className="h-16 w-16 shrink-0 rounded-xl object-cover"
                                    />

                                    <span className="min-w-0">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-orange-300">
                      {categoryLabels[place.category]}
                    </span>

                    <span className="mt-1 block truncate text-base font-black text-white">
                      {place.name}
                    </span>

                    <span className="mt-1 block truncate text-xs text-white/45">
                      {place.location}
                    </span>
                  </span>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                <div className="relative min-h-[570px]">
                    <MapContainer
                        center={[39.19, 26.22]}
                        zoom={9}
                        minZoom={8}
                        maxZoom={18}
                        scrollWheelZoom
                        className="h-[570px] w-full lg:h-[680px]"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <FlyToPlace place={selectedPlace} />

                        {visiblePlaces.map((place) => {
                            const isSelected = selectedPlace.id === place.id;

                            return (
                                <Marker
                                    key={place.id}
                                    position={place.coordinates}
                                    icon={createMarkerIcon(
                                        place.category,
                                        isSelected,
                                    )}
                                    eventHandlers={{
                                        click: () => setSelectedPlace(place),
                                    }}
                                >
                                    <Tooltip direction="top" offset={[0, -20]}>
                                        {place.name}
                                    </Tooltip>

                                    <Popup>
                                        <div className="w-[220px] overflow-hidden">
                                            <img
                                                src={place.image}
                                                alt={place.name}
                                                className="h-28 w-full rounded-xl object-cover"
                                            />

                                            <p className="mb-0 mt-3 text-xs font-bold uppercase tracking-wider text-orange-700">
                                                {categoryLabels[place.category]}
                                            </p>

                                            <h3 className="mb-0 mt-1 text-lg font-black text-stone-950">
                                                {place.name}
                                            </h3>

                                            <p className="mt-2 text-sm leading-5 text-stone-600">
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

                    <div className="pointer-events-none absolute bottom-6 left-1/2 z-[400] w-[calc(100%-3rem)] max-w-md -translate-x-1/2 rounded-2xl border border-white/15 bg-[#07100f]/90 p-3 shadow-2xl backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                            <img
                                src={selectedPlace.image}
                                alt=""
                                className="h-16 w-16 rounded-xl object-cover"
                            />

                            <div className="min-w-0">
                                <p className="text-[10px] font-black uppercase tracking-wider text-orange-300">
                                    {categoryLabels[selectedPlace.category]}
                                </p>

                                <h3 className="truncate text-lg font-black text-white">
                                    {selectedPlace.name}
                                </h3>

                                <p className="truncate text-xs text-white/50">
                                    {selectedPlace.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";

import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function BeachesMap({ beaches }) {
  return (
    <MapContainer
      center={[39.1, 26.3]}
      zoom={10}
      className="h-[500px] w-full rounded-xl z-0"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {beaches
        .filter((b) => b.lat && b.lng)
        .map((b) => (
          <Marker key={b.slug} position={[b.lat, b.lng]}>
            <Popup>
              <strong>{b.name}</strong>
              <br />
              {b.desc}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default function BeachesPage() {
  const beaches = [
    {
      slug: "agios-ermogenis",
      name: "Agios Ermogenis",
      img: "/x",
      desc: "Small bay surrounded by rocks.",
      lat: 39.1392,
      lng: 26.5075,
    },
    {
      slug: "agios-isidoros",
      name: "Agios Isidoros",
      img: "/agios-isidoros.jpg",
      desc: "Famous beach with blue flag.",
      lat: 38.9612,
      lng: 26.3648,
    },
    {
      slug: "ampelia",
      name: "Ampelia",
      img: "/x",
      desc: "Small and peaceful bay.",
      lat: 39.05,
      lng: 26.25,
    },
    {
      slug: "anaxos",
      name: "Anaxos",
      img: "/x",
      desc: "Long sandy beach ideal for relaxation.",
      lat: 39.319,
      lng: 26.184,
    },
    {
      slug: "chalikas",
      name: "Chalikas",
      img: "/x",
      desc: "Organized beach close to the city.",
      lat: 39.1,
      lng: 26.55,
    },
    {
      slug: "eftalou",
      name: "Eftalou",
      img: "/x",
      desc: "Rocky beach with hot springs nearby.",
      lat: 39.379,
      lng: 26.201,
    },
    {
      slug: "faneromeni",
      name: "Faneromeni",
      img: "/x",
      desc: "Remote sandy beach with wild landscape.",
      lat: 39.2,
      lng: 26.1,
    },
    {
      slug: "gavathas",
      name: "Gavathas",
      img: "/x",
      desc: "Calm and family-friendly sandy beach.",
      lat: 39.333,
      lng: 26.136,
    },
    {
      slug: "kagia",
      name: "Kagia",
      img: "/x",
      desc: "Hidden beach with crystal clear waters.",
      lat: 39.36,
      lng: 26.22,
    },
    {
      slug: "kratigos",
      name: "Kratigos",
      img: "/x",
      desc: "Small coastal spot near Mytilini.",
      lat: 39.1,
      lng: 26.6,
    },
    {
      slug: "melinda",
      name: "Melinda",
      img: "/x",
      desc: "Quiet pebble beach near Plomari.",
      lat: 38.94,
      lng: 26.37,
    },
    {
      slug: "molyvos",
      name: "Molyvos",
      img: "/x",
      desc: "Pebble beach with scenic castle views.",
      lat: 39.37,
      lng: 26.175,
    },
    {
      slug: "niselia",
      name: "Niselia",
      img: "/x",
      desc: "Hidden coves ideal for isolation.",
      lat: 39.15,
      lng: 26.2,
    },
    {
      slug: "petra",
      name: "Petra",
      img: "/x",
      desc: "Organized beach below the famous rock.",
      lat: 39.33,
      lng: 26.18,
    },
    {
      slug: "skala-eresou",
      name: "Skala Eressou",
      img: "/x",
      desc: "Popular sandy beach with sunset views.",
      lat: 39.15,
      lng: 25.93,
    },
    {
      slug: "skala-kallonis",
      name: "Skala Kallonis",
      img: "/x",
      desc: "Shallow waters, great for families.",
      lat: 39.21,
      lng: 26.22,
    },
    {
      slug: "skala-sikamineas",
      name: "Skala Sikamineas",
      img: "/x",
      desc: "Picturesque small harbor beach.",
      lat: 39.4,
      lng: 26.3,
    },
    {
      slug: "sigri",
      name: "Sigri",
      img: "/x",
      desc: "Quiet beach with shallow waters.",
      lat: 39.2,
      lng: 25.85,
    },
    {
      slug: "tarti",
      name: "Tarti",
      img: "/x",
      desc: "Secluded beach with clear waters.",
      lat: 38.95,
      lng: 26.3,
    },
    {
      slug: "vatera",
      name: "Vatera",
      img: "/vatera.jpg",
      desc: "Sandy beach 8 km long.",
      lat: 39.04,
      lng: 26.25,
    },
    {
      slug: "xampelia",
      name: "Xampelia",
      img: "/x",
      desc: "Quiet beach with clear waters.",
      lat: 39.12,
      lng: 26.15,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-16 bg-[url('/beach.jpg')] bg-cover bg-center bg-fixed relative">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Παραλίες Λέσβου
        </h1>

        {/* MAP */}
        <div className="mb-10">
          <BeachesMap beaches={beaches} />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beaches.map((b) => (
            <Link href={`/beaches/${b.slug}`} key={b.slug}>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform cursor-pointer">
                <img
                  src={b.img}
                  alt={b.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2">{b.name}</h2>
                  <p className="text-gray-300 text-sm">{b.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

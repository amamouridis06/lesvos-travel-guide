import Link from "next/link";

export const metadata = {
  title: "Villages of Lesvos | Lesvos Travel Guide",
  description:
    "Explore the most charming and authentic villages of Lesvos—places where tradition, history, and timeless atmosphere come together. From stone-built settlements and seaside hamlets to mountain villages rich in culture, Lesvos offers a unique glimpse into genuine Greek island life",
};

const villages = [
  {
    name: "Molyvos (Mithymna)",
    description: "Medieval, picturesque, stone-built, romantic, sunsets",
    image: "/molivos.jpg",
    href: "/villages/molivos",
  },
  {
    name: "Plomari",
    description: "Coastal, ouzo, lively, maritime, authentic",
    image: "/plomari2.jpg",
    href: "/villages/plomari",
  },
  {
    name: "Agiasos",
    description: "Mountain, traditional, crafts, cultural, vibrant",
    image: "/agiasos.jpg",
    href: "/villages/agiasos",
  },
  {
    name: "Mantamados",
    description: "Religious, heritage, ceramics, local, traditional",
    image: "/mantamados.jpg",
    href: "/villages/mantamados",
  },
    {
    name: "Skala kalonis",
    description: "Wetlands, birdwatching, seaside, tranquil, authentic",
    image: "/skala-kallonis.jpeg",
    href: "/villages/skala-kallonis",
  },
   {
    name: "Eresos",
    description: "Bohemian, relaxed, artistic, historic, authentic",
    image: "/eressosx.jpeg",
    href: "/villages/eresos",
  },
  {
    name: "Skala Eresou",
    description: "",
    image: "/eressos.jpeg",
    href: "/villages/skala-eresou",
  },
 {
    name: "Mestotopos",
    description: "",
    image: "/pallas.jpg",
    href: "/villages/mesotopos",
  },
  {
    name: "Melinta",
    description: "",
    image: "/plomari1.jpg",
    href: "/villages/melinta",
  },
   {
    name: "Sigri",
    description: "",
    image: "/ouzo.jpg",
    href: "/villages/sigri",
  },
  {
    name: "Thermi",
    description: "",
    image: "/thermi.jpeg",
    href: "/villages/thermi",
  },
   {
    name: "Skaloxori",
    description: "",
    image: "/skaloxori.jpeg",
    href: "/villages/skaloxori",
  },
   {
    name: "Filia",
    description: "",
    image: "/filia.jpeg",
    href: "/villages/filia",
  },
  
];

export default function VillagesPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] bg-[url('/map-lesvos.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Villages of Lesvos
            </h1>
            <p className="text-gray-200 mt-2 max-w-xl">
              Traditional settlements, history, and authentic island life
            </p>
          </div>
        </div>
      </section>

      {/* ================= LIST ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[5px]">
          {villages.map((village) => (
            <Link
              key={village.name}
              href={village.href}
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition block"
            >
              <img
                src={village.image}
                alt={village.name}
                className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold">{village.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {village.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* /* {/* ================= BACK ================= */}
      {/* <div className="text-center pb-20">
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"
        >
          ← Επιστροφή στην αρχική
        </Link>
      </div>  */}

    </main>
  );
}

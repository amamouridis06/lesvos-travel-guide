import Link from "next/link";

export const metadata = {
  title: "Villages of Lesvos | Lesvos Travel Guide",
  description:
    "Explore the most charming and authentic villages of Lesvos—places where tradition, history, and timeless atmosphere come together. From stone-built settlements and seaside hamlets to mountain villages rich in culture, Lesvos offers a unique glimpse into genuine Greek island life",
};

const villages = [
  {
    name: "Mytilini",
    description: "Capital, vibrant, cultural, historic",
    image: "/placeholder.jpg",
    href: "/villages/mytilini",
  },
  {
    name: "Moria",
    description: "Historic, traditional, local life",
    image: "/placeholder.jpg",
    href: "/villages/moria",
  },
  {
    name: "Panagiouda",
    description: "Seaside, peaceful, authentic",
    image: "/placeholder.jpg",
    href: "/villages/panagiouda",
  },
  {
    name: "Pamfila",
    description: "Quiet, traditional, local charm",
    image: "/placeholder.jpg",
    href: "/villages/pamfila",
  },
  {
    name: "Loutra",
    description: "Thermal springs, relaxing, historic",
    image: "/placeholder.jpg",
    href: "/villages/loutra",
  },
  {
    name: "Neapoli",
    description: "Residential, calm, local",
    image: "/placeholder.jpg",
    href: "/villages/neapoli",
  },
  {
    name: "Agia Marina",
    description: "Coastal, relaxed, local life",
    image: "/placeholder.jpg",
    href: "/villages/agia-marina",
  },
  {
    name: "Kalloni",
    description: "Central, wetlands, authentic",
    image: "/placeholder.jpg",
    href: "/villages/kalloni",
  },
  {
    name: "Arisvi",
    description: "Traditional, quiet, rural",
    image: "/placeholder.jpg",
    href: "/villages/arisvi",
  },
  {
    name: "Parakila",
    description: "Peaceful, seaside, authentic",
    image: "/placeholder.jpg",
    href: "/villages/parakila",
  },
  {
    name: "Skalochori",
    description: "Mountain, traditional, scenic",
    image: "/placeholder.jpg",
    href: "/villages/skalochori",
  },
  {
    name: "Anemotia",
    description: "Volcanic landscape, unique, quiet",
    image: "/placeholder.jpg",
    href: "/villages/anemotia",
  },
  {
    name: "Vatousa",
    description: "Stone-built, historic, authentic",
    image: "/placeholder.jpg",
    href: "/villages/vatousa",
  },
  {
    name: "Antissa",
    description: "Historic, traditional, rural",
    image: "/placeholder.jpg",
    href: "/villages/antissa",
  },
  {
    name: "Agra",
    description: "Traditional, peaceful, local",
    image: "/placeholder.jpg",
    href: "/villages/agra",
  },
  {
    name: "Palaiochori",
    description: "Quiet, rural, authentic",
    image: "/placeholder.jpg",
    href: "/villages/palaiochori",
  },
  {
    name: "Plagia",
    description: "Seaside, calm, traditional",
    image: "/placeholder.jpg",
    href: "/villages/plagia",
  },
  {
    name: "Megalochori",
    description: "Local, peaceful, traditional",
    image: "/placeholder.jpg",
    href: "/villages/megalochori",
  },
  {
    name: "Gera",
    description: "Olive groves, bay views, authentic",
    image: "/placeholder.jpg",
    href: "/villages/gera",
  },
  {
    name: "Perama",
    description: "Seaside, relaxed, local",
    image: "/placeholder.jpg",
    href: "/villages/perama",
  },
  {
    name: "Papados",
    description: "Historic mansions, cultural, vibrant",
    image: "/placeholder.jpg",
    href: "/villages/papados",
  },
  {
    name: "Skopelos",
    description: "Quiet, traditional, rural",
    image: "/placeholder.jpg",
    href: "/villages/skopelos",
  },
  {
    name: "Messagros",
    description: "Pottery, traditional, cultural",
    image: "/placeholder.jpg",
    href: "/villages/messagros",
  },
  {
    name: "Asomatos",
    description: "Small, peaceful, authentic",
    image: "/placeholder.jpg",
    href: "/villages/asomatos",
  },
  {
    name: "Pigi",
    description: "Green, traditional, calm",
    image: "/placeholder.jpg",
    href: "/villages/pigi",
  },
  {
    name: "Kato Tritos",
    description: "Historic, quiet, local",
    image: "/placeholder.jpg",
    href: "/villages/kato-tritos",
  },
  {
    name: "Mytilinioi",
    description: "Traditional, central, authentic",
    image: "/placeholder.jpg",
    href: "/villages/mytilinioi",
  },
  {
    name: "Agioi Anargyroi",
    description: "Small, quiet, local",
    image: "/placeholder.jpg",
    href: "/villages/agioi-anargyroi",
  },
  {
    name: "Kapi",
    description: "Traditional, rural, authentic",
    image: "/placeholder.jpg",
    href: "/villages/kapi",
  },
  {
    name: "Kleidonas",
    description: "Small, peaceful, local",
    image: "/placeholder.jpg",
    href: "/villages/kleidonas",
  },
  {
    name: "Sykamia",
    description: "Historic, scenic, authentic",
    image: "/placeholder.jpg",
    href: "/villages/sykamia",
  },
  {
    name: "Skala Sykamias",
    description: "Seaside, picturesque, peaceful",
    image: "/placeholder.jpg",
    href: "/villages/skala-sykamias",
  },
  {
    name: "Anaxos",
    description: "Beach, relaxed, tourist-friendly",
    image: "/placeholder.jpg",
    href: "/villages/anaxos",
  },
  {
    name: "Vafios",
    description: "Hillside, quiet, scenic",
    image: "/placeholder.jpg",
    href: "/villages/vafios",
  },
  {
    name: "Lafionas",
    description: "Panoramic views, traditional, peaceful",
    image: "/placeholder.jpg",
    href: "/villages/lafionas",
  },
  {
    name: "Eftalou",
    description: "Hot springs, seaside, relaxing",
    image: "/placeholder.jpg",
    href: "/villages/eftalou",
  },
];


export default function VillagesPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[60vh] bg-[url('/map-lesvos.jpg')] bg-cover bg-center md:bg-fixed">
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 pb-8 sm:pb-10 md:pb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Villages of Lesvos
            </h1>
            <p className="text-gray-200 mt-2 max-w-xl text-sm sm:text-base">
              Traditional settlements, history, and authentic island life
            </p>
          </div>
        </div>
      </section>

      {/* ================= LIST ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {villages.map((village) => (
            <Link
              key={village.name}
              href={village.href}
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition block"
            >
              <img
                src={village.image}
                alt={village.name}
                className="h-48 sm:h-52 md:h-56 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold">
                  {village.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {village.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

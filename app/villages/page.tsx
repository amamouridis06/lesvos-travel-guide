import Link from "next/link";

export const metadata = {
  title: "Χωριά της Λέσβου | Lesvos Travel Guide",
  description:
    "Ανακαλύψτε τα πιο όμορφα και γραφικά χωριά της Λέσβου, με παράδοση, ιστορία και αυθεντική ατμόσφαιρα.",
};

const villages = [
  {
    name: "Agioi Anargyroi",
    description: "Small, quiet, local",
    image: "/placeholder.jpg",
    href: "/villages/agioi-anargyroi",
  },
  {
    name: "Agra",
    description: "Traditional, peaceful, local",
    image: "/placeholder.jpg",
    href: "/villages/agra",
  },
  {
    name: "Anaxos",
    description: "Beach, relaxed, tourist-friendly",
    image: "/placeholder.jpg",
    href: "/villages/anaxos",
  },
  {
    name: "Antissa",
    description: "Historic, traditional, rural",
    image: "/placeholder.jpg",
    href: "/villages/antissa",
  },
  {
    name: "Molyvos",
    description: "Where every street tells a story.",
    image: "/villages/molivos1.jpg",
    href: "/villages/molyvos",
  },
  {
    name: "Asomatos",
    description: "Small, peaceful, authentic",
    image: "/placeholder.jpg",
    href: "/villages/asomatos",
  },
  {
    name: "Eftalou",
    description: "Hot springs, seaside, relaxing",
    image: "/placeholder.jpg",
    href: "/villages/eftalou",
  },
  {
    name: "Gera",
    description: "Olive groves, bay views, authentic",
    image: "/placeholder.jpg",
    href: "/villages/gera",
  },
  {
    name: "Kapi",
    description: "Traditional, rural, authentic",
    image: "/placeholder.jpg",
    href: "/villages/kapi",
  },
  {
    name: "Kato Tritos",
    description: "Historic, quiet, local",
    image: "/placeholder.jpg",
    href: "/villages/kato-tritos",
  },
  {
    name: "Kleidonas",
    description: "Small, peaceful, local",
    image: "/placeholder.jpg",
    href: "/villages/kleidonas",
  },
  {
    name: "Lafionas",
    description: "Panoramic views, traditional, peaceful",
    image: "/placeholder.jpg",
    href: "/villages/lafionas",
  },
  {
    name: "Megalochori",
    description: "Local, peaceful, traditional",
    image: "/placeholder.jpg",
    href: "/villages/megalochori",
  },
  {
    name: "Messagros",
    description: "Pottery, traditional, cultural",
    image: "/placeholder.jpg",
    href: "/villages/messagros",
  },
  {
    name: "Mytilinioi",
    description: "Traditional, central, authentic",
    image: "/placeholder.jpg",
    href: "/villages/mytilinioi",
  },
  {
    name: "Palaiochori",
    description: "Quiet, rural, authentic",
    image: "/placeholder.jpg",
    href: "/villages/palaiochori",
  },
  {
    name: "Papados",
    description: "Historic mansions, cultural, vibrant",
    image: "/placeholder.jpg",
    href: "/villages/papados",
  },
  {
    name: "Perama",
    description: "Seaside, relaxed, local",
    image: "/placeholder.jpg",
    href: "/villages/perama",
  },
  {
    name: "Pigi",
    description: "Green, traditional, calm",
    image: "/placeholder.jpg",
    href: "/villages/pigi",
  },
  {
    name: "Plagia",
    description: "Seaside, calm, traditional",
    image: "/placeholder.jpg",
    href: "/villages/plagia",
  },
  {
    name: "Skala Sykamias",
    description: "Seaside, picturesque, peaceful",
    image: "/placeholder.jpg",
    href: "/villages/skala-sykamias",
  },
  {
    name: "Skopelos",
    description: "Quiet, traditional, rural",
    image: "/placeholder.jpg",
    href: "/villages/skopelos",
  },
  {
    name: "Sykamia",
    description: "Historic, scenic, authentic",
    image: "/placeholder.jpg",
    href: "/villages/sykamia",
  },
  {
    name: "Vafios",
    description: "Hillside, quiet, scenic",
    image: "/placeholder.jpg",
    href: "/villages/vafios",
  },
];

export default function VillagesPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] bg-[url('/agiasos.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Χωριά της Λέσβου
            </h1>
            <p className="text-gray-200 mt-2 max-w-xl">
              Παραδοσιακοί οικισμοί, ιστορία και αυθεντική νησιωτική ζωή
            </p>
          </div>
        </div>
      </section>

      {/* ================= LIST ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </main>
  );
}

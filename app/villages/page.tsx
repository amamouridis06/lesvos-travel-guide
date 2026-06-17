import Link from "next/link";

export const metadata = {
  title: "Χωριά της Λέσβου | Lesvos Travel Guide",
  description:
    "Ανακαλύψτε τα πιο όμορφα και γραφικά χωριά της Λέσβου, με παράδοση, ιστορία και αυθεντική ατμόσφαιρα.",
};

const villages = [
  {
    name: "Anaxos",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/anaxos",
  },
  {
    name: "Antissa",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/antissa",
  },
  {
    name: "Gavathas",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/gavathas",
  },
  {
    name: "Molyvos",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/molyvos",
  },
  {
    name: "Plomari",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/ploamari",
  },
  {
    name: "Eresos",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/eresos",
  },
  {
    name: "Eresos",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/eresos",
  },
  {
    name: "Agiasos",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/agiasos",
  },
  {
    name: "Petra",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/petra",
  },
  {
    name: "Sigri",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/sigri",
  },
  {
    name: "Mantamados",
    description: "",
    image: "/placeholder.jpg",
    href: "/villages/mantamados",
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

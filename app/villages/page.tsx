import Link from "next/link";

export const metadata = {
  title: "Χωριά της Λέσβου | Lesvos Travel Guide",
  description:
    "Ανακαλύψτε τα πιο όμορφα και γραφικά χωριά της Λέσβου, με παράδοση, ιστορία και αυθεντική ατμόσφαιρα.",
};

const villages = [
  {
    name: "Μόλυβος",
    description: "Μεσαιωνικό γραφικό χωριό με κάστρο",
    image: "/molivos.jpg",
    href: "/villages/molivos",
  },
  {
    name: "Πλωμάρι",
    description: "Ούζο, θάλασσα & παράδοση",
    image: "/plomari2.jpg",
    href: "/villages/plomari",
  },
  {
    name: "Αγιάσος",
    description: "Παραδοσιακό χωριό στο βουνό",
    image: "/agiasos.jpg",
    href: "/villages/agiasos",
  },
  {
    name: "Μανταμάδος",
    description: "Προστάτης της Λέσβου και παραδοσιακή ζωή",
    image: "/mantamados.jpg",
    href: "/villages/mantamados",
  },
];

export default function VillagesPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] bg-[url('/villages.jpg')] bg-cover bg-center bg-fixed">
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

      {/* ================= BACK ================= */}
      <div className="text-center pb-20">
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"
        >
          ← Επιστροφή στην αρχική
        </Link>
      </div>

    </main>
  );
}

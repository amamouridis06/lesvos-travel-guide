import Link from "next/link";

export default function BeachesPage() {
  const beaches = [
    {
      slug: "vatera",
      name: "Βατερά",
      img: "/vatera.jpg",
      desc: "Αμμώδης παραλία μήκους 8 km."
    },
    {
      slug: "agios-isidoros",
      name: "Άγιος Ισίδωρος",
      img: "/agios-isidoros.jpg",
      desc: "Διάσημη παραλία με γαλάζια σημαία."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-16 bg-[url('/beach.jpg')] bg-cover bg-center bg-fixed relative">

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-10">Παραλίες Λέσβου</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beaches.map((b, i) => (
            <Link href={`/beaches/${b.slug}`} key={i}>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform cursor-pointer">
                
                <img src={b.img} alt={b.name} className="h-48 w-full object-cover" />

                <div className="p-5">
                  <h2 className="text-2xl font-semibold mb-2">{b.name}</h2>
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

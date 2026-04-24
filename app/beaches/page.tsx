"use client";

import Link from "next/link";

export default function BeachesPage() {
  const beaches = [
    { slug: "agios-ermogenis", name: "Agios Ermogenis", img: "/x", desc: "Small bay surrounded by rocks." },
    { slug: "agios-isidoros", name: "Agios Isidoros", img: "/agios-isidoros.jpg", desc: "Famous beach with blue flag." },
    { slug: "ampelia", name: "Ampelia", img: "/x", desc: "Small and peaceful bay." },
    { slug: "anaxos", name: "Anaxos", img: "/x", desc: "Long sandy beach ideal for relaxation." },
    { slug: "chalikas", name: "Chalikas", img: "/x", desc: "Organized beach close to the city." },
    { slug: "eftalou", name: "Eftalou", img: "/x", desc: "Rocky beach with hot springs nearby." },
    { slug: "faneromeni", name: "Faneromeni", img: "/x", desc: "Remote sandy beach with wild landscape." },
    { slug: "gavathas", name: "Gavathas", img: "/x", desc: "Calm and family-friendly sandy beach." },
    { slug: "kagia", name: "Kagia", img: "/x", desc: "Hidden beach with crystal clear waters." },
    { slug: "kratigos", name: "Kratigos", img: "/x", desc: "Small coastal spot near Mytilini." },
    { slug: "melinda", name: "Melinda", img: "/x", desc: "Quiet pebble beach near Plomari." },
    { slug: "molyvos", name: "Molyvos", img: "/x", desc: "Pebble beach with scenic castle views." },
    { slug: "niselia", name: "Niselia", img: "/x", desc: "Hidden coves ideal for isolation." },
    { slug: "petra", name: "Petra", img: "/x", desc: "Organized beach below the famous rock." },
    { slug: "skala-eresou", name: "Skala Eressou", img: "/x", desc: "Popular sandy beach with sunset views." },
    { slug: "skala-kallonis", name: "Skala Kallonis", img: "/x", desc: "Shallow waters, great for families." },
    { slug: "skala-sikamineas", name: "Skala Sikamineas", img: "/x", desc: "Picturesque small harbor beach." },
    { slug: "sigri", name: "Sigri", img: "/x", desc: "Quiet beach with shallow waters." },
    { slug: "tarti", name: "Tarti", img: "/x", desc: "Secluded beach with clear waters." },
    { slug: "vatera", name: "Vatera", img: "/vatera.jpg", desc: "Sandy beach 8 km long." },
    { slug: "xampelia", name: "Xampelia", img: "/x", desc: "Quiet beach with clear waters." }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-16 bg-[url('/beach.jpg')] bg-cover bg-center bg-fixed relative">
      
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Παραλίες Λέσβου
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {beaches.map((b) => (
            <Link href={`/beaches/${b.slug}`} key={b.slug}>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform cursor-pointer">
                
                <img
                  src={b.img}
                  alt={b.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h2 className="text-2xl font-semibold mb-2">
                    {b.name}
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {b.desc}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}

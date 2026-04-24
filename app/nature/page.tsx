import Link from "next/link";

export default function NaturePage() {
  const nature = [
    {
      slug: "forests",
      name: "Forests",
      img: "/flamingo.jpeg",
      // desc: "A paradise of biodiversity."
    },
    {
      slug: "geology",
      name: "Geology",
      img: "/x",
      // desc: "The highest peak of the island (~968m), offering hiking trails, rich biodiversity, and panoramic views."
    },
     {
      slug: "mountains",
      name: "Mountains",
      img: "/x",
      // desc: "A rugged mountain above Molyvos with wild scenery and stunning Aegean views."
    },
  {
      slug: "thermal",
      name: "Thermal",
      img: "/x",
      // desc: "A dramatic volcanic landscape with a raw, almost lunar atmosphere—ideal for photography and sunsets.."
    },
      {
      slug: "water",
      name: "Waterfalls",
      img: "/x",
      // desc: "Green pine-covered areas surrounding the Gulf of Gera."
    },
    {
      slug: "wetlands",
      name: "Wetlands",
      img: "/x",
      // desc: "Green pine-covered areas surrounding the Gulf of Gera."
    },
    
  ];

return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-16 bg-[url('/nature-lesvos.jpg')] bg-cover bg-center bg-fixed relative">

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-10">The Nature🌿</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {nature.map((b, i) => (
            <Link href={`/nature/${b.slug}`} key={i}>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform cursor-pointer">
                
                <img src={b.img} alt={b.name} className="h-48 w-full object-cover" />

                <div className="p-5">
                  <h2 className="text-2xl font-semibold mb-2">{b.name}</h2>
                  {/* <p className="text-gray-300 text-sm">{b.desc}</p> */}
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}

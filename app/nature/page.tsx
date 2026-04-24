import Link from "next/link";

export default function NaturePage() {
  const nature = [
    {
      slug: "kolpos-kallonis",
      name: "Kalloni Bay",
      img: "/flamingo.jpeg",
      desc: "A paradise of biodiversity."
    },
    {
      slug: "olympos",
      name: "Mount Olympus (Lesvos)",
      img: "/x",
      desc: "The highest peak of the island (~968m), offering hiking trails, rich biodiversity, and panoramic views."
    },
     {
      slug: "lepetypnos",
      name: "Lepetymnos Mountain",
      img: "/x",
      desc: "A rugged mountain above Molyvos with wild scenery and stunning Aegean views."
    },
  {
      slug: "ipsilou",
      name: "Ipsilou Monastery Area",
      img: "/x",
      desc: "A dramatic volcanic landscape with a raw, almost lunar atmosphere—ideal for photography and sunsets.."
    },
      {
      slug: "pine-forest",
      name: "Pine Forests of Gera",
      img: "/x",
      desc: "Green pine-covered areas surrounding the Gulf of Gera."
    },
    {
      slug: "chestnut-forest",
      name: "Chestnut Forest of Agiasos",
      img: "/x",
      desc: "Green pine-covered areas surrounding the Gulf of Gera."
    },
    {
      slug: "potamia",
      name: "Potamia Valley",
      img: "/x",
      desc: "A lush valley with flowing water, plane trees, and peaceful walking paths."
    },
    {
      slug: "evergetoulas",
      name: "Evergetoulas Valley",
      img: "/x",
      desc: "The island’s largest fertile valley, with a river and rich natural life.."
    },
    {
      slug: "salt-pans",
      name: "Kalloni Salt Pans",
      img: "/x",
      desc: "One of Europe’s most important wetlands, home to flamingos and migratory birds."
    },
    {
      slug: "achladeri-wetlands",
      name: "Achladeri Wetlands",
      img: "/x",
      desc: "A quieter but ecologically rich habitat for birdlife and wildlife."
    },
    {
      slug: "napi-vallet",
      name: "Napi Valley",
      img: "/x",
      desc: "Known for wildflowers, butterflies, and untouched natural beauty."
    },
    {
      slug: "petrified-forest",
      name: "Petrified Forest of Lesvos",
      img: "/x",
      desc: "One of Europe’s most important wetlands, home to flamingos and migratory birds."
    },
     {
      slug: "geopark",
      name: "Lesvos UNESCO Global Geopark",
      img: "/x",
      desc: "A UNESCO-recognized geopark combining geology, volcanic history, and rare landscapes."
    },
     {
      slug: "eft-hot-springs",
      name: "Eftalou Hot Springs",
      img: "/x",
      desc: "Natural hot springs set in a wild coastal environment."
    },
     {
      slug: "pol-hot-springs",
      name: "Polichnitos Hot Springs",
      img: "/x",
      desc: "Among the hottest thermal springs in Europe."
    },
     {
      slug: "loutra-therma",
      name: "Loutra Thermis Springs",
      img: "/x",
      desc: "Historic thermal baths in a peaceful natural setting."
    },
    {
      slug: "loutra-therma",
      name: "Loutra Thermis Springs",
      img: "/x",
      desc: "Historic thermal baths in a peaceful natural setting."
    },
    {
      slug: "man-katsa",
      name: "Man' Katsa Waterfall",
      img: "/x",
      desc: "A small seasonal waterfall (best in spring), considered a hidden gem."
    },
    {
      slug: "potamia-streams",
      name: "Potamia Streams",
      img: "/x",
      desc: "Flowing streams that create small cascades during winter and spring."
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

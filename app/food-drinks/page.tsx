import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Food in Lesvos",
  description:
      "The best places to eat in Lesvos: taverns, restaurants, cafés, bars, and local products.",
};

type FoodItem = {
  title: string;
  image: string;
  alt: string;
  category: string;
  location: string
  description: string;
  href: string;
};

type Category = {
  id: string;
  title: string;
  data: FoodItem[];
};

/* ================= DATA ================= */

const cafeTaverns: FoodItem[] = [
  {
    title: "Tryfon",
    category: "Tavern",
    description: "Fresh meat, local dishes.",
    location: "Kalloni, Lesvos",
    image: "/tryfon/tryfon6.jpg",
    alt: "Tryfon",
    href: "/food-drinks/tryfon",
  },
  {
    title: "Pallas Cafe - Grill",
    category: "Tavern",
    description: "Fresh meat, local dishes in a beautiful village",
    location: "Mesotopos, Lesvos",
    image: "/pallas/pallas.jpg",
    alt: "Pallas",
    href: "/under-construction",
  },
  {
    title: "Taverna Mpampis",
    category: "Tavern",
    description: "Fresh meat, and tranditional dishes in north Lesvos",
    location: "Molyvos, Lesvos",
    image: "/mpampis/mpampis-logo.jpg",
    alt: "Mpampis",
    href: "/food-drinks/tavernaompampis",
  },
];

const Restaurants: FoodItem[] = [
  {
    title: "To Limanaki ton Pamfilon",
    category: "Restaurants",
    description: "Fresh fish, local dishes, and a relaxing seaside atmosphere.",
    location: "Pamfila, Lesvos",
    image: "/limanaki/limanaki_pamf.jpg",
    alt: "To Limanaki ton Pamfilon",
    href: "/food-drinks/limanaki_pamfilon",
  },
  {
    title: "Taverna To Votsalo",
    category: "Restaurant",
    description: "Authentic Greek flavors, seaside sunsets, fresh seafood, and  hospitality.",
    location: "Eftalou, Lesvos",
    image: "/votsalo/votsalo-logo.jpg",
    alt: "Taverna To Votsalo",
    href: "/food/taverna-to-votsalo",
  },
  {
    title: "Tropicana - Platanos",
    category: "Restaurant",
    description: "Authentic Greek flavors, and fantastic hospitality.",
    location: "Molyvos, Lesvos",
    image: "/tropicana/tropicana1.jpg",
    alt: "Tropicana",
    href: "/food-drinks/tropicana-platanos",
  },
  {
    title: "Nisi Restaurant",
    category: "Restaurant",
    description: "Authentic Greek flavors, and fantastic hospitality.",
    location: "Molyvos, Lesvos",
    image: "/nisi/nisi_logo.png",
    alt: "Nisi ",
    href: "/food-drinks/nisi-restaurant",
  },
  {
    title: "Petite",
    category: "Restaurant",
    description: "Delicius pancakes and wafles",
    location: "Molyvos, Lesvos",
    image: "/petite/petite7.jpg",
    alt: "Petite",
    href: "/food-drinks/petite",
  },
  {
    title: "Misirlou",
    category: "Restaurant",
    description: "Greek flavors, cocktails, seaside relaxation, escape.",
    location: "Molyvos, Lesvos",
    image: "/misirlou/misirlou2.jpg",
    alt: "Misirlou",
    href: "/food-drinks/misirlou",
  },
];

const Bars: FoodItem[] = [
  {
    title: "Naf's Cocktail Corner",
    category: "Bars",
    description: "Enjoy cocktails, music, and vibrant nightlife near the beach.",
    location: "Agios Isidoros, Lesvos",
    image: "/naf/naf-logo.jpg",
    alt: "Naf",
    href: "/food-drinks/nafs-cocktail-corner",
  },
  {
    title: "Rhino",
    category: "Bars",
    description: "Enjoy cocktails, music, and nightlife in the city",
    location: "Mytilene, Lesvos",
    image: "/rhino/rhino-logo.jpg",
    alt: "Rhino",
    href: "/food-drinks/rhino",
  },
  {
    title: "Azul Paraíso",
    category: "Bars",
    description: "Brunch, burgers, bao, shrimp, cocktails, all-day cravings",
    location: "Anaxos, Lesvos",
    image: "/azul/azul-logo.jpg",
    alt: "Azul",
    href: "/food-drinks/azul-paraiso",
  },
];

const locProd: FoodItem[] = [
  {
    title: "Selachas O.E",
    category: "Supermarket",
    description: "Fresh Meat. Local Heart.",
    location: "Kalloni, Lesvos",
    image: "/selaxas/sel-logo.jpg",
    alt: "Sel",
    href: "/food/selachas",
  },
];

/* ================= CATEGORIES ================= */

const categories: Category[] = [
  {
    id: "cafeTaverns",
    title: "Taverns",
    data: cafeTaverns
  },
  {
    id: "restaurants",
    title: "Restaurants",
    data: Restaurants
  },
  {
    id: "bars",
    title: "Bars",
    data: Bars
  },
  {
    id: "locProd",
    title: "Local Products",
    data: locProd
  }
];

/* ================= CARD ================= */

function FoodCard({ item }: { item: FoodItem }) {
  return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">
        <div className="relative w-full h-56">
          <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-6">
          <p className="text-sm text-blue-600 font-medium mb-2">
            {item.category}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            📍 {item.location}
          </p>
          <h3 className="text-xl font-semibold">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm mt-3">
            {item.description}
          </p>

          <Link
              href={item.href}
              className="inline-block mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View details
          </Link>
        </div>
      </div>
  );
}

/* ================= PAGE ================= */

export default function FoodPage() {
  return (
      <main className="bg-neutral-100 text-neutral-900 min-h-screen">

        {/* HERO */}
        <section
            className="relative w-full h-[65vh] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/food1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
              Taste Lesvos: Food, Drinks & Local Spots
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
              Discover taverns, restaurants, cafés, bars and local products across Lesvos.
            </p>
          </div>
        </section>

        {/* CATEGORY NAV */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10">
            Explore Categories
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
                <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center font-semibold text-lg"
                >
                  {cat.title}
                </a>
            ))}
          </div>
        </section>

        {/* CATEGORY SECTIONS */}
        <section className="max-w-6xl mx-auto px-6 pb-24 space-y-24">

          {categories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold">
                    {cat.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.data.map((item) => (
                      <FoodCard
                          key={item.title}
                          item={item}
                      />
                  ))}
                </div>
              </div>
          ))}

        </section>
      </main>
  );
}
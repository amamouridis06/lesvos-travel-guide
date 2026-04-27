import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Food in Lesvos",
  description:
    "The best places to eat: Taverns, restaurants, cafe and local products.",
};

const taverns = [
  {
    name: "To limanaki ton Pamfilon",
    description: "Traditional kitchen • by the sea",
    location: "Skalla Pamfilon",
    image: "/limanaki_pamf.jpg",
    href: "/food/limanaki_pamfilon",
  },
];

const traditionalCafes = [
  {
    name: "Pallas cafe - grill",
    description: "Traditional kitchen • peaceful atmosphere",
    location: "Mesotopos",
    image: "/pallas.jpg",
    href: "/food/pallas-cafe-grill",
  },
  {
    name: "Tryfon",
    description: "Homemade dishes • meze • ouzo & tsipouro",
    location: "Kalloni",
    image: "/tryfon6.jpg",
    href: "/food/tryfon",
  },
];

const restaurants = [
  {
    name: "Tropicana Platanos",
    description: "Delicious disces • ideal place for realax ",
    location: "Molivos",
    image: "/tropicana1.jpg",
    href: "/food/tropicana-platanos",
  },
  
];

const bar = [
  {
    name: "Naf's Cocktail Corner",
    description: "A ideal place for the best coctail",
    location: "Agios Isidoros",
    image: "/naf3.jpg",
    href: "/food/nafs-cocktail-corner",
  },
  
];

function FoodCard({
  name,
  description,
  location,
  image,
  href,
}: {
  name: string;
  description: string;
  location: string;
  image: string;
  href: string;
}) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-xl shadow p-4 sm:p-5 flex gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer h-full">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <h3 className="font-semibold text-base sm:text-lg">{name}</h3>

          <p className="text-sm text-gray-600 mt-1">{description}</p>

          <p className="text-sm mt-2 text-gray-700">📍 {location}</p>
        </div>
      </div>
    </Link>
  );
}

export default function FoodPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">
      {/* HERO */}
      <section
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/food1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Food in Lesvos
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            Taverns, restaurants and local flavors,  selected parts worth it.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16">
        <h2 className="text-2xl font-semibold mb-8">Categories</h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {[
            { title: "Taverns", href: "#taverns" },
            { title: "Restaurants", href: "#restaurants" },
            { title: "Bar", href: "#bar" },
            { title: "Traditional Cafes - Taverns", href: "#t-cafes" },
            { title: "Local Products", href: "#local" },
          ].map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 sm:p-6 text-center font-medium text-sm sm:text-base"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </section>

      {/* LIST SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 space-y-14 sm:space-y-20">
        {/* TAVERNAS */}
        <div id="taverns">
          <h2 className="text-2xl font-semibold mb-6">Taverns</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {taverns.map((item) => (
              <FoodCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        {/* TRADITIONAL CAFES */}
        <div id="t-cafes">
          <h2 className="text-2xl font-semibold mb-6">Traditional Cafes - Taverns</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {traditionalCafes.map((item) => (
              <FoodCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        {/* RESTAURANTS */}
        <div id="restaurants">
          <h2 className="text-2xl font-semibold mb-6">Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {restaurants.map((item) => (
              <FoodCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        {/* BARS */}
        <div id="bar">
          <h2 className="text-2xl font-semibold mb-6">Bar</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {bar.map((item) => (
              <FoodCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        {/* LOCAL PRODUCTS */}
        <div id="local">
          <h2 className="text-2xl font-semibold mb-6">Local Products</h2>
          <p className="text-gray-600">
            soon
          </p>
        </div>
      </section>
    </main>
  );
}

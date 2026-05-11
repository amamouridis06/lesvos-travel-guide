import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Food in Lesvos",
  description:
      "The best places to eat in Lesvos: taverns, restaurants, cafés, bars, and local products.",
};

const cafeTaverns = [
  {
    title: "Tryfon",
    category: "Traditional Greek cuisine",
    description: "Fresh meat, local dishes.",
    location: "📍Kalloni, Lesvos",
    image: "/tryfon/tryfon6.jpg",
    alt: "Tryfon",
    href: "/under-construction",
  },
  {
    title: "Pallas Cafe - Grill",
    category: "Traditional Greek cuisine",
    description: "Fresh meat, local dishes in a beautiful village",
    location: "📍Mesotopos, Lesvos",
    image: "/pallas/pallas.jpg",
    alt: "Pallas",
    href: "/under-construction",
  },
];

const Restaurants = [
  {
    title: "To Limanaki ton Pamfilon",
    category: "Traditional Greek cuisine by the sea",
    description: "Fresh fish, local dishes, and a relaxing seaside atmosphere.",
    location: "📍Pamfila, Lesvos",
    image: "/limanaki/limanaki_pamf.jpg",
    alt: "To Limanaki ton Pamfilon",
    href: "/under-construction",
  },
  {
    title: "Taverna To Votsalo",
    category: "Where Sea, Flavor & Tradition Meet",
    description: "Authentic Greek flavors, seaside sunsets, fresh seafood, and  hospitality.",
    location: "📍Eftalou, Lesvos",
    image: "/votsalo/votsalo-logo.jpg",
    alt: "Taverna To Votsalo",
    href: "/food/taverna-to-votsalo",
  },
  {
    title: "Tropicana - Platanos",
    category: "Beautiful place",
    description: "Authentic Greek flavors, and fantastic hospitality.",
    location: "📍Molyvos, Lesvos",
    image: "/tropicana/tropicana1.jpg",
    alt: "Tropicana ",
    href: "/food/tropicana-platanos",
  },
  {
    title: "Nisi Restaurant",
    category: "Authentic Restaurant",
    description: "Authentic Greek flavors, and fantastic hospitality.",
    location: "📍Molyvos, Lesvos",
    image: "/nisi/nisi_logo.png",
    alt: "Nisi ",
    href: "/food/nisi-restaurant",
  },
];

const Bars = [
  {
    title: "Naf's Cocktail Corner",
    category: "Cocktails & nightlife",
    description: "Enjoy cocktails, music, and vibrant nightlife near the beach.",
    location: "📍Agios Isidoros, Lesvos",
    image: "/naf/naf-logo.jpg",
    alt: "Naf",
    href: "/food/nafs-cocktail-corner",
  },
];
const locProdSup = [
  {
    title: "Selachas O.E",
    category: "Supermarket",
    description: "Fresh Meat. Local Heart.",
    location: "📍Kalloni, Lesvos",
    image: "/selaxas/sel-logo.jpg",
    alt: "Sel",
    href: "/food/selachas",
  },
  // {
  //   title: "Olive Oil & Cheese",
  //   description: "High-quality olive oil, feta, and traditional local products.",
  // },
];

export default function FoodPage() {
  return (
      <main className="bg-neutral-100 text-neutral-900">
        {/* HERO */}
        <section
            className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/food1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Taste Lesvos: Food, Drinks & Local Spots
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Taverns, restaurants, cafés & bars — handpicked places worth visiting.
            </p>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8">Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Taverns", href: "#cafeTaverns" },
              { title: "Restaurants", href: "#restaurants" },
              { title: "Bars", href: "#bars" },
              { title: "Local Products & Supermarket", href: "#locProd" },
            ].map((cat) => (
                <a
                    key={cat.title}
                    href={cat.href}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center font-medium"
                >
                  {cat.title}
                </a>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-24 space-y-20">
          {/* Taverns */}
          <div id="cafeTaverns">
            <h2 className="text-2xl font-semibold mb-6">Taverns</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cafeTaverns.map((item) => (
                  <div
                      key={item.title}
                      className="bg-white rounded-xl shadow p-6 flex gap-4"
                  >
                    <div className="w-24 h-24 relative shrink-0">
                      <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover rounded-lg"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>

                      <p className="text-sm text-gray-600">{item.category}</p>

                      <p className="text-sm mt-2">{item.description}</p>

                      <Link
                          href={item.href}
                          className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>

            {/* Restaurants */}
            <div id="restaurants">
              <h2 className="text-2xl font-semibold mb-6">Restaurants</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Restaurants.map((item) => (
                    <div
                        key={item.title}
                        className="bg-white rounded-xl shadow p-6 flex gap-4"
                    >
                      <div className="w-24 h-24 relative shrink-0">
                        <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            className="object-cover rounded-lg"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>

                        <p className="text-sm text-gray-600">{item.category}</p>

                        <p className="text-sm mt-2">{item.description}</p>

                        <Link
                            href={item.href}
                            className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                ))}
              </div>
            </div>

          {/* Bars */}
          <div id="bars">
            <h2 className="text-2xl font-semibold mb-6">Bars</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Bars.map((item) => (
                  <div
                      key={item.title}
                      className="bg-white rounded-xl shadow p-6 flex gap-4"
                  >
                    <div className="w-24 h-24 relative shrink-0">
                      <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover rounded-lg"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>

                      <p className="text-sm text-gray-600">{item.category}</p>

                      <p className="text-sm mt-2">{item.description}</p>

                      <Link
                          href={item.href}
                          className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Local Products */}
          <div id="locProd">
            <h2 className="text-2xl font-semibold mb-6">Local Products & Supermarket</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locProdSup.map((item) => (
                  <div
                      key={item.title}
                      className="bg-white rounded-xl shadow p-6 flex gap-4"
                  >
                    <div className="w-24 h-24 relative shrink-0">
                      <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover rounded-lg"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>

                      <p className="text-sm text-gray-600">{item.category}</p>

                      <p className="text-sm mt-2">{item.description}</p>

                      <Link
                          href={item.href}
                          className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
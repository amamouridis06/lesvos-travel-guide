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
    image: "/trfon6.jpg",
    alt: "Tryfon",
    href: "/food/tryfon",
  },
  {
    title: "Pallas Cafe - Grill",
    category: "Traditional Greek cuisine",
    description: "Fresh meat, local dishes in a beautiful village",
    image: "/pallas.jpg",
    alt: "Pallas",
    href: "/food/pallas-cafe-grill",
  },

];

const restaurants = [
  {
    title: "To Limanaki ton Pamfilon",
    category: "Traditional Greek cuisine by the sea",
    description: "Fresh fish, local dishes, and a relaxing seaside atmosphere.",
    image: "/limanaki_pamf1.jpg",
    alt: "To Limanaki ton Pamfilon",
    href: "/food/limanaki_pamfilon",
  },
];

const Bars = [
  {
    title: "Naf's Coctail Corner",
    category: "Cocktails & nightlife",
    description: "Enjoy cocktails, music, and vibrant nightlife near the beach.",
  },
  // {
  //   title: "Island Bar",
  //   category: "Cocktails & nightlife",
  //   description: "Enjoy cocktails, music, and vibrant nightlife near the beach.",
  // },
];

const locProdSup = [
  {
    title: "Ouzo",
    description: "Lesvos is famous for its ouzo, one of Greece’s most iconic drinks.",
  },
  {
    title: "Olive Oil & Cheese",
    description: "High-quality olive oil, feta, and traditional local products.",
  },
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
              Food in Lesvos
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
              { title: "Cafés & Bars", href: "#bars" },
              { title: "Local Products", href: "#locProdSup" },
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
              {restaurants.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl shadow p-6">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* Cafés & Bars */}
          <div id="bars">
            <h2 className="text-2xl font-semibold mb-6">Cafés & Bars</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Bars.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl shadow p-6">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* Local Products */}
          <div id="locProdSup">
            <h2 className="text-2xl font-semibold mb-6">Local Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locProdSup.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl shadow p-6">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
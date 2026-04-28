import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Food in Lesvos",
  description:
      "The best places to eat in Lesvos: taverns, restaurants, cafés, bars, and local products.",
};

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
              { title: "Taverns", href: "#taverns" },
              { title: "Restaurants", href: "#restaurants" },
              { title: "Cafés & Bars", href: "#cafes" },
              { title: "Local Products", href: "#local" },
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

        {/* LIST SECTION */}
        <section className="max-w-6xl mx-auto px-6 pb-24 space-y-20">

          {/* Taverns */}
          <div id="taverns">
            <h2 className="text-2xl font-semibold mb-6">Taverns</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Tavern Card */}
              <div className="bg-white rounded-xl shadow p-6 flex gap-4">
                <div className="w-24 h-24 relative">
                  <Image
                      src="/limanaki_pamf1.jpg"
                      alt="To Limanaki ton Pamfilon"
                      fill
                      className="object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    To Limanaki ton Pamfilon
                  </h3>

                  <p className="text-sm text-gray-600">
                    Traditional Greek cuisine by the sea
                  </p>

                  <p className="text-sm mt-2">
                    Fresh fish, local dishes, and a relaxing seaside atmosphere.
                  </p>

                  <button
                  onClick={() => router.push("/food/limanaki_pamfilon")}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                  >
                </button>
                </div>
              </div>

              {/* Add more taverns easily here */}

            </div>
          </div>

          {/* Restaurants */}
          <div id="restaurants">
            <h2 className="text-2xl font-semibold mb-6">Restaurants</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg">Fine Dining Example</h3>
                <p className="text-sm text-gray-600">
                  Modern Mediterranean cuisine
                </p>
                <p className="text-sm mt-2">
                  A more refined experience with creative dishes and local ingredients.
                </p>
              </div>

            </div>
          </div>

          {/* Cafés & Bars */}
          <div id="cafes">
            <h2 className="text-2xl font-semibold mb-6">Cafés & Bars</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Cafe */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg">Seaside Café</h3>
                <p className="text-sm text-gray-600">
                  Coffee & brunch
                </p>
                <p className="text-sm mt-2">
                  Perfect spot for morning coffee, brunch, and sunset views.
                </p>
              </div>

              {/* Bar */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg">Island Bar</h3>
                <p className="text-sm text-gray-600">
                  Cocktails & nightlife
                </p>
                <p className="text-sm mt-2">
                  Enjoy cocktails, music, and vibrant nightlife near the beach.
                </p>
              </div>

            </div>
          </div>

          {/* Local Products */}
          <div id="local">
            <h2 className="text-2xl font-semibold mb-6">Local Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg">Ouzo</h3>
                <p className="text-sm mt-2">
                  Lesvos is famous for its ouzo, one of Greece’s most iconic drinks.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg">Olive Oil & Cheese</h3>
                <p className="text-sm mt-2">
                  High-quality olive oil, feta, and traditional local products.
                </p>
              </div>

            </div>
          </div>

        </section>

      </main>
  );
}
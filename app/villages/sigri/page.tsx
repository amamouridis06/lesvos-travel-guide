import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sigri",
  description:
    "Sigri: Where nature tells a story millions of years old.",
};

export default function PlomariPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/sigri.jpg"
          alt="Sigri Lesvos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Sigri
          </h1>
          <p className="mt-2 text-lg text-gray-200">
           Where nature tells a story millions of years old.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* MAIN */}
        <div className="md:col-span-2 space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Γιατί να επισκεφθείτε το Πλωμάρι</h2>
            <p className="text-gray-700 leading-relaxed">
              Sigri is a charming fishing village on the westernmost edge of Lesvos, known for its peaceful atmosphere, stunning sunsets, and unique natural landscape. It is home to the nearby Petrified Forest of Lesvos, one of Europe’s most remarkable geological sites. Sigri is an ideal destination for travelers seeking tranquility, authenticity, and a deep connection with nature.
            </p>
          </div>

          {/* What to see */}
          <div>
  <h2 className="text-2xl font-semibold mb-3">What to See</h2>
  <ul className="list-disc pl-5 space-y-2 text-gray-700">
    <li>
      <a href="/petrified-forest" className="hover:underline">
        The Petrified Forest of Lesvos
      </a>
    </li>
    <li>
      <a href="/natural-history-museum" className="hover:underline">
        The Natural History Museum of the Petrified Forest
      </a>
    </li>
    <li>
      <a href="/sigri-castle" className="hover:underline">
        The Ottoman Castle of Sigri
      </a>
    </li>
    <li>
      <a href="/sigri-harbor" className="hover:underline">
        Sigri’s picturesque harbor
      </a>
    </li>
    <li>
      <a href="/nisiopi-island" className="hover:underline">
        Nisiopi Island and its unique landscape
      </a>
    </li>
  </ul>
</div>

          {/* What to do */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Τι να κάνετε</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Enjoy an evening stroll along the harbor/li>
              <li>Taste local ouzo and traditional meze</li>
              <li>Explore nearby beaches and hidden coves</li>
            </ul>
          </div>

         {/* Beaches */}
<div>
  <h2 className="text-2xl font-semibold mb-3">Nearby Beaches</h2>
  <ul className="space-y-2 text-gray-700">
    <li>
      🏖{" "}
      <Link href="/beaches/sigri-beach" className="text-blue-600 hover:underline">
        Sigri Beach
      </Link>
    </li>
    <li>
      🏖{" "}
      <Link href="/beaches/faneromeni" className="text-blue-600 hover:underline">
        Faneromeni Beach
      </Link>
    </li>
    <li>
      🏖{" "}
      <Link href="/beaches/skalohori" className="text-blue-600 hover:underline">
        Skala Skalochori Beach
      </Link>
    </li>
  </ul>
</div>

          {/* Food */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Where to eat</h2>
            <p className="text-gray-700">
              In Sigri, you’ll find traditional seaside tavernas serving fresh fish,
    local meze, and authentic ouzo. Enjoy simple, honest flavors right by the sea.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.5034902979964!2d25.852532749999998!3d39.21125145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bac634f0f9ec95%3A0x500bd2ce2baae40!2sSigri!5e1!3m2!1sen!2sgr!4v1776286150915!5m2!1sen!2sgr" 
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

         {/* Tips */}
<div className="bg-white rounded-xl shadow p-4">
  <h3 className="font-semibold mb-3">Tips</h3>
  <ul className="text-sm space-y-2 text-gray-700">
    <li>🚗 Easy access by car, with scenic coastal routes</li>
    <li>☀️ Best enjoyed in the late afternoon for cooler weather and sunset views</li>
    <li>🍽 Don’t miss fresh meze paired with local ouzo</li>
  </ul>
</div>
        </aside>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
         Explore other villages in Lesvos
        </h2>
        <Link
          href="/villages"
          className="inline-block px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Other villages
        </Link>
      </section>

    </main>
  );
}

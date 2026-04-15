import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mesotopos",
  description:
    "Mesotopos Lesvos: One village, one authentic story.",
};

export default function PlomariPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/pallas.jpg"
          alt="Mesotopos Lesvos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Mesotopos
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            Peace and Tranditional Food
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* MAIN */}
        <div className="md:col-span-2 space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Why Visit Mesotopos?</h2>
            <p className="text-gray-700 leading-relaxed">
              Mesotopos is a traditional village on the western side of Lesvos, known for its authentic atmosphere, local traditions, and the sense of tranquility it offers to visitors.
            </p>
          </div>

         {/* What to see */}
<div>
  <h2 className="text-2xl font-semibold mb-3">What to see</h2>
  <ul className="list-disc pl-5 space-y-2 text-gray-700">
    <li>The village’s main church, a central landmark and meeting point</li>
    <li>Small traditional chapels scattered around the surrounding area</li>
    <li>The unique landscape featuring volcanic elements and low vegetation</li>
    <li>The distinctive “wild” natural beauty of the western Lesvos scenery</li>
  </ul>
</div>

          {/* What to do */}
<div>
  <h2 className="text-2xl font-semibold mb-3">What to do</h2>
  <ul className="list-disc pl-5 space-y-2 text-gray-700">
    <li>Stroll through the quiet village streets and traditional alleys</li>
    <li>Experience local life at traditional cafés</li>
    <li>Enjoy authentic local cuisine in nearby tavernas</li>
    <li>Explore the surrounding natural landscape and hiking paths</li>
    <li>Visit the nearby seaside village of Tavari for swimming and relaxation</li>
  </ul>
</div>

<div>
  <h2 className="text-2xl font-semibold mb-3">Where to eat</h2>

  {/* List */}
  <ul className="space-y-2 text-gray-700 mb-4">
    <li>
      🏖{" "}
      <Link href="/beaches/tavari" className="text-blue-600 hover:underline">
        Tavari
      </Link>
    </li>

    <li>🏖 Podara</li>
    <li>🏖 Skala Eresos</li>
  </ul>

 
    
    <h3 className="text-xl font-semibold mb-2">Where to eat</h3>

    <p className="text-gray-700 mb-2">
      In Mesotopos, you can visit the traditional tavern{" "}
      <Link href="/food/pallas-cafe-grill" className="text-blue-600 hover:underline">
        Pallas cafe-grill
      </Link>
      , where you can enjoy local flavors in an authentic setting. In the nearby seaside village of Tavari, you will also find traditional tavernas serving fresh fish, local dishes, and authentic flavors of Lesvos in a relaxed and welcoming atmosphere.
    </p>

   

   
  </div>
</div>
       

        {/* SIDEBAR */}
<aside className="space-y-8">

  {/* Map */}
  <div className="bg-white rounded-xl shadow p-4">
    <h3 className="font-semibold mb-3">Τοποθεσία</h3>

    <div className="w-full h-48 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6544.391119793698!2d25.998184695876198!3d39.13186033669969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bac187a0d4a45f%3A0xbadf38c24202ceb5!2sMesotopos%20811%2005!5e1!3m2!1sen!2sgr!4v1776259666781!5m2!1sen!2sgr" 
        width="100%"
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
      <li>🚗 Best explored by car due to its remote location</li>
      <li>🌿 Ideal for a peaceful and authentic village experience</li>
      <li>🍽 Try local dishes and traditional meze with ouzo</li>
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

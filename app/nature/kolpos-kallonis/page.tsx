import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: " The Gulf of Kalloni",
  description:
    "Agios Isidoros beach in Lesvos is one of the most famous and beautiful beaches of the island, especially near Plomari.",
};

export default function VateraPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/kolpos-kallonis.jpeg"
          alt=" The Gulf of Kalloni"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
             The Gulf of Kalloni
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            Clean waters, clear moments.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* MAIN CONTENT */}
        <div className="md:col-span-2 space-y-10">

          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Why you should go</h2>
            <p className="text-gray-700 leading-relaxed">
              The Gulf of Kalloni is one of the most important wetlands of the Mediterranean and one of the most special attractions of course Lesvat. Its only ecological value attracts visitors from all over the world, especially those interested in nature and bird observation.
            </p>
          </div>
           {/* */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">🌿 What makes him special</h2>
            <p className="text-gray-700 leading-relaxed">
              The area hosts over 250 species of birds, with more well-known flamingos, erotic and many migratory species. The shallow waters and extensive wetlands create an ideal environment for wild life, offering unique images all years of time.
            </p>
          </div>
         

          {/* Practical info */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Activities</h2>
            <ul className="text-gray-700 space-y-2">
              <li> Bird observation </li>
              <li> Nature photo </li>
              <li> Hiking on natural paths </li>
              <li> Relaxing in a quiet environment</li>
            </ul>
          </div>
          </div>
        
         {/* Prosvasi */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Access</h2>
            <ul className="text-gray-700 space-y-2">
              <p>The bay is located in the main part of the island and is easily accessible: </p>
              <li> about 40 – 50 minutes from Mytilene</li>
              <li> near villages such as Kalloni and Skalochori</li>
              <li> with bicycle, on foot, by car or local means of transport </li>
            </ul>
          </div>
       
 {/* apaeuthinetai*/}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Ideal for</h2>
            <ul className="text-gray-700 space-y-2">
              <li> Love of nature and wildlife </li>
              <li> Photographers </li>
              <li>  Couples and travelers looking for peace </li>
              <li>  Visitors who want an authentic experience beyond the beaches </li>
            </ul>
          </div>
       
        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5848.771269722645!2d26.39389675!3d38.96713955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14baf78b3ca36ae3%3A0x11ec44cd23d9097!2sAgios%20Isidoros%20812%2000!5e1!3m2!1sen!2sgr!4v1776163983586!5m2!1sen!2sgr" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>


          {/* Nearby */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Nearby Kalloni and Skala Kallonis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                🏘{" "}
                <Link href="/villages/plomari" className="text-blue-600 hover:underline">
                  Kalloni, Skalla Kallonis, Agia Paraskeui
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          See other places in Lesvos
        </h2>
        <Link
          href="/beaches"
          className="inline-block px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
         All places
        </Link>
      </section>

    </main>
  );
}

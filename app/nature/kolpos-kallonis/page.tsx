import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:"The Gulf of Kalloni | Lesvos Travel Guide",
  description:"Agios Isidoros beach in Lesvos is one of the most famous and beautiful beaches of the island, especially near Plomari."
};

export default function VateraPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/flamingo.jpeg"
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
            <h2 className="text-2xl font-semibold mb-3">Why you should visit the Gulf of Kalloni</h2>
            <p className="text-gray-700 leading-relaxed">
             The Gulf of Kalloni is one of the most significant wetlands in the Mediterranean and a truly unique natural attraction of Lesvos. Its exceptional ecological importance draws visitors from around the world, particularly nature enthusiasts and birdwatchers who come to experience its rich biodiversity.
            </p>
          </div>
           {/* */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">🌿 What makes the Gulf of Kalloni special</h2>
            <p className="text-gray-700 leading-relaxed">
              The area hosts over 250 species of birds, including well-known flamingos, herons, and many migratory species. The shallow waters and extensive wetlands create an ideal environment for wildlife, offering unique and captivating landscapes throughout the year.
            </p>
          </div>
         

          {/* Practical info */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Activities</h2>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
             <li>Birdwatching in a unique wetland habitat</li>
    <li>Capturing stunning nature photography</li>
<li>Hiking along scenic natural trails</li>
<li>Relaxing in a peaceful and unspoiled environment</li>
</ul>
          </div>
          
        
         {/* Prosvasi */}
          <div>
  <p className="text-gray-700 mb-2">
    The bay is located in the central part of the island and is easily accessible:
  </p>
  <ul className="text-gray-700 space-y-2 list-disc pl-5">
    <li>About 40–50 minutes from Mytilene</li>
    <li>Close to villages such as Kalloni and Skalochori</li>
    <li>Accessible by bicycle, on foot, by car, or public transport</li>
  </ul>
</div>
       
 {/* apaeuthinetai*/}
<div>
  <h2 className="text-2xl font-semibold mb-3">Ideal for</h2>
  <ul className="text-gray-700 space-y-2 list-disc pl-5">
    <li>Nature and wildlife lovers</li>
    <li>Photographers</li>
    <li>Couples and travelers seeking peace and relaxation</li>
    <li>Visitors looking for an authentic experience beyond the beaches</li>
  </ul>
</div>
</div>
        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104686.49581410048!2d26.109380664101998!3d39.147838689548536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14baed19213dba9d%3A0xfabf74bc86841952!2zS8OzbHBvcyBLYWxsb27DrXM!5e1!3m2!1sen!2sgr!4v1776180544862!5m2!1sen!2sgr" 
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Nearby */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Nearby</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/villages/kalloni" className="text-blue-600 hover:underline">
                 <p>Kalloni</p> 
                </Link>
                <Link href="/villages/skalla-kallonis" className="text-blue-600 hover:underline">
                 <p> Skalla Kallonis</p> 
                </Link>
                <Link href="/villages/agia-paraskeui" className="text-blue-600 hover:underline">
                 <p> Agia Paraskeui</p> 
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
          href="/planner"
          className="inline-block px-6 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
         Other places
        </Link>
      </section>

    </main>
  );
}

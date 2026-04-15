import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "To limanaki ton Pamfilon | Lesvos Travel Guide",
  description:
    "To limanaki ton Pamfilon: traditional tavern by the sea, known for fish, seafood and authentic flavors in Lesvos.",
};

export default function LimanakiPamfilonPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/limanaki_pamf1.jpg"
          alt="To limanaki ton Pamfilon"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            To limanaki ton Pamfilon
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Traditional tavern by the sea
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-14">

        {/* ===== MAIN ===== */}
        <div className="lg:col-span-2 space-y-14">

          {/* Intro */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why should you go</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To Limanaki ton Pamfilon is a favorite seaside tavern in Skala Pamfilon, offering a truly summery setting right by the water. With tables set almost on the waves, it serves fresh fish, seafood, and authentic local flavors in a relaxed, picturesque atmosphere.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li>🌊 Seaside dining with tables by the water</li>
              <li>🐟 Fresh daily catch</li>
              <li>🍤 Seafood & local delicacies</li>
              <li>☀️ Perfect summer atmosphere</li>
            </ul>
          </div>

          {/* What to try */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">What to try</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>🐟 Fresh daily catch</li>
              <li>🍤 Grilled Kalamari & shrimp</li>
              <li>🍋 Seafood meze paired with ouzo</li>
            </ul>

            <div className="relative h-72 rounded-xl overflow-hidden shadow">
                             <Image
          src="/food1lim.jpg"
          alt="To limanaki ton Pamfilon"
          fill
          className="object-cover"
          priority
        />
         <Image
          src="/dessert-limanaki.jpg"
          alt="To limanaki ton Pamfilon"
          fill
          className="object-cover"
          priority
        />
            </div>
          </div>
        </div>

        {/* ===== SIDEBAR ===== */}
        <aside className="space-y-10">

          {/* Info */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg">Informations</h3>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Type:</strong> Restaurant</li>
              <li><strong>Kitchen:</strong> Greek</li>
              <li><strong>Prices:</strong> €€</li>
              <li><strong>Suitable for:</strong> Families, couples</li>
            </ul>
          </div>

         {/* Map */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.9619515967324!2d26.526763926143023!3d39.15840182166955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba677e1a3b5845%3A0xd278dcca3b94ec29!2sTo%20limanaki%20ton%20filon!5e1!3m2!1sen!2sgr!4v1776166522249!5m2!1sen!2sgr"  
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
          
          {/* Nearby */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg">Near the restaurant</h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>🏘 Pamfila</li>
              <li>🏖 Beaches of Mytilini</li>
              <li>🍽 Other seaside taverns or shops</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-neutral-900 text-white py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          See other places to eat in Lesvos
        </h2>
        <Link
          href="/food"
          className="inline-block px-8 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Other places
        </Link>
      </section>

    </main>
  );
}

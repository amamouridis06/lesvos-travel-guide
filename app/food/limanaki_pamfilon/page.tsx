import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Το Λιμανάκι των Παμφίλων | Lesvos Travel Guide",
  description:
    "Το Λιμανάκι των Παμφίλων: παραδοσιακή ταβέρνα δίπλα στη θάλασσα, γνωστή για ψάρι, θαλασσινά και αυθεντικές γεύσεις στη Λέσβο.",
};

export default function LimanakiPamfilonPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/limanaki_pamf.jpg"
          alt="Το Λιμανάκι των Παμφίλων"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Το Λιμανάκι των Παμφίλων
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Παραδοσιακή ταβέρνα δίπλα στη θάλασσα
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-14">

        {/* ===== MAIN ===== */}
        <div className="lg:col-span-2 space-y-14">

          {/* Intro */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Γιατί να πάτε</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Το Λιμανάκι των Παμφίλων είναι μια αγαπημένη παραθαλάσσια ταβέρνα
              στη Σκάλα Παμφίλων. Με τραπέζια σχεδόν πάνω στο κύμα, προσφέρει
              φρέσκο ψάρι, θαλασσινά και αυθεντικές γεύσεις σε ένα απόλυτα
              καλοκαιρινό σκηνικό.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li>🌊 Τραπέζια δίπλα στη θάλασσα</li>
              <li>🐟 Φρέσκο ψάρι ημέρας</li>
              <li>🍤 Θαλασσινά & μεζέδες</li>
              <li>☀️ Ιδανικό για καλοκαίρι</li>
            </ul>
          </div>

          {/* What to try */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Τι να δοκιμάσετε</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Φρέσκο ψάρι ημέρας</li>
              <li>Καλαμαράκια & γαρίδες</li>
              <li>Θαλασσινούς μεζέδες με ούζο</li>
            </ul>

            <div className="relative h-72 rounded-xl overflow-hidden shadow">
              <Image
                src="/food.jpg"
                alt="Θαλασσινά στο Λιμανάκι των Παμφίλων"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== SIDEBAR ===== */}
        <aside className="space-y-10">

          {/* Info */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg">Πληροφορίες</h3>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Τύπος:</strong> Παραδοσιακή ταβέρνα</li>
              <li><strong>Κουζίνα:</strong> Ελληνική / Θαλασσινά</li>
              <li><strong>Τιμές:</strong> €€</li>
              <li><strong>Κατάλληλο για:</strong> Οικογένειες, ζευγάρια</li>
            </ul>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg">Τοποθεσία</h3>
            <div className="w-full h-52 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25794.80770969093!2d26.5863!3d39.1116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba8b1d8b0e6b0f%3A0x9b6f52c7e2a9d2f3!2sSkala%20Pamfilon!5e0!3m2!1sel!2sgr!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/Skala+Pamfilon"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-sm text-blue-600 hover:underline"
            >
              Άνοιγμα στο Google Maps →
            </a>
          </div>

          {/* Nearby */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4 text-lg">Κοντά στο μαγαζί</h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>🏘 Παμφίλα</li>
              <li>🏖 Παραλίες Μυτιλήνης</li>
              <li>🍽 Άλλα παραθαλάσσια μαγαζιά</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-neutral-900 text-white py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Δείτε κι άλλα μέρη για φαγητό στη Λέσβο
        </h2>
        <Link
          href="/food"
          className="inline-block px-8 py-3 bg-yellow-600 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Όλα τα μαγαζιά
        </Link>
      </section>

    </main>
  );
}

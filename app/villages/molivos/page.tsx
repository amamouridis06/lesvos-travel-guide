export const metadata = {
  title: "Μόλυβος | Lesvos Travel Guide",
  description:
    "Ανακαλύψτε τον Μόλυβο, το μεσαιωνικό στολίδι της Λέσβου με κάστρο, παραλίες και γραφικά σοκάκια.",
};

export default function MolyvosPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[70vh] bg-[url('/molivos.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Μόλυβος
            </h1>
            <p className="text-gray-200 mt-2">
              Μεσαιωνικό γραφικό χωριό της Λέσβου
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4">Γιατί να επισκεφθείτε τον Μόλυβο</h2>
          <p className="text-gray-700 leading-relaxed">
            Ο Μόλυβος (ή Μήθυμνα) είναι ένα από τα πιο όμορφα και καλοδιατηρημένα
            χωριά της Λέσβου. Τα πέτρινα σπίτια, τα στενά καλντερίμια και το
            εντυπωσιακό μεσαιωνικό κάστρο δημιουργούν μια μοναδική ατμόσφαιρα.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Τι να δείτε</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Το Κάστρο του Μολύβου</li>
            <li>Τα γραφικά σοκάκια του χωριού</li>
            <li>Το λιμάνι και τα καφέ δίπλα στη θάλασσα</li>
            <li>Η παραλία Μολύβου & Εφταλού</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Ιδανικός για</h2>
          <p className="text-gray-700">
            Ζευγάρια, ρομαντικές αποδράσεις, χαλαρές διακοπές και όσους αγαπούν
            την ιστορία και την αυθεντική αρχιτεκτονική.
          </p>
        </div>

        {/* BACK BUTTON */}
        <div>
          <a
            href="/"
            className="inline-block mt-8 px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"
          >
            ← Επιστροφή στην αρχική
          </a>
        </div>

      </section>
    </main>
  );
}

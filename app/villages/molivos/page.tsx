export const metadata = {
  title: "Molivos | Lesvos Travel Guide",
  description:
    "Explore Molivos: castle, beaches , restarurants and cafes",
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
             Molivos
            </h1>
            <p className="text-gray-200 mt-2">
              Medieval picturesque village of Lesvos
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4">Γιατί να επισκεφθείτε τον Μόλυβο</h2>
          <p className="text-gray-700 leading-relaxed">
           A magical, old village that feels like it belongs to another era, with picturesque alleyways inviting you to wander through them. The locals are exceptionally warm and welcoming, and the small shops offer authentic tastes of traditional Greek cuisine.

          Don’t forget to visit the castle, ideally in the afternoon, so you can enjoy the stunning sunset. There, you can relax with a coffee or a drink at the charming spot located on-site.

          And if you’re not ready to end your stroll, continue exploring the village, where you’ll find wonderful restaurants serving fresh seafood and fish caught daily. Of course, no visit is complete without tasting a glass of fine Greek ouzo.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Τι να δείτε</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The Castle of Molivos</li>
            <li>The picturesque alleys of the village</li>
            <li>The port and coffee next to the port</li>
            <li>The beach of Molivos & Eftalou</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Ideal for</h2>
          <p className="text-gray-700">
            Couples, romantic escapes, relaxed holidays and those who love
            history and authentic architecture.
          </p>
        </div>

        {/* BACK BUTTON */}
        {/* <div>
          <a
            href="/"
            className="inline-block mt-8 px-6 py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition"
          >
            ← Επιστροφή στην αρχική
          </a>
        </div> */}

      </section>
    </main>
  );
}

export const metadata = {
  title: "Molivos | Lesvos Travel Guide",
  description:
    "Explore Molivos: castle, beaches , restarurants and cafes",
};

export default function MolyvosPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[70vh] bg-[url('/molivos1.jpg')] bg-cover bg-center">
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
          <h2 className="text-2xl font-semibold mb-4">Why visit Molivos?</h2>
          <p className="text-gray-700 leading-relaxed">
           A magical, old village that feels like it belongs to another era, with picturesque alleyways inviting you to wander through them. The locals are exceptionally warm and welcoming, and the small shops offer authentic tastes of traditional Greek cuisine.

          Don’t forget to visit the castle, ideally in the afternoon, so you can enjoy the stunning sunset. There, you can relax with a coffee or a drink at the charming spot located on-site.

          And if you’re not ready to end your stroll, continue exploring the village, where you’ll find wonderful restaurants serving fresh seafood and fish caught daily. Of course, no visit is complete without tasting a glass of fine Greek ouzo.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Activities</h2>
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


        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6522.369986093671!2d26.1698681803955!3d39.36822513650014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba84d0ca43c0c7%3A0x400bd2ce2b9b550!2sMithymna!5e1!3m2!1sen!2sgr!4v1776508666514!5m2!1sen!2sgr" 
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
              <li>🚗 Easy access by car</li>
              <li>☀️ Ideal for afternoon walks</li>
              <li>🍽 Try mezes with ouzo </li>
            </ul>
          </div>
           {/*Nearby */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-3">Nearby Villages</h3>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>Vafeios</li>
              <li>Petra</li>
              <li>Petri</li>
            </ul>
          </div>
        </aside>
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

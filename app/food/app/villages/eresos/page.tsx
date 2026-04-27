export const metadata = {
  title: "Eresos | Lesvos Travel Guide",
  description:
    "Eresos is a traditional village built a few kilometers away from the sea.",
};

export default function MolyvosPage() {
  return (
    <main className="bg-neutral-100 text-neutral-900">

      {/* HERO */}
      <section className="relative h-[70vh] bg-[url('/eressosx.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Eresos
            </h1>
            <p className="text-gray-200 mt-2">
              A traditional village
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10">

        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Visit Eresos?</h2>
          <p className="text-gray-700 leading-relaxed">
            Eresos stands out as one of the most unique destinations on Lesvos, blending rich tradition and history with a laid-back summer atmosphere.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Τι να δείτε</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The heart of the village, with its cafés and plane trees, is the perfect place to experience local daily life and enjoy a coffee in an authentic atmosphere.</li>
            <li>Stone-built houses</li>
            <li>Quiet, peaceful neighborhoods</li>
            <li>An authentic island atmosphere</li>
          </ul>
        </div>

<div>
  <h2 className="text-2xl font-semibold mb-4">Local churches</h2>
  <p className="text-gray-700">
    <a 
      href="https://maps.app.goo.gl/Ciph4GWbgn5XJERWA" 
      className="text-blue-600 hover:underline"
    >
      Holy Church of Saint Irene
    </a>
  </p>
</div>
  {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Map */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7333.073555117193!2d25.927862351416827!3d39.16919723123768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bac6b9c8777dfb%3A0x352d5bb55977c0b4!2sEresos%20811%2005!5e1!3m2!1sen!2sgr!4v1776247277625!5m2!1sen!2sgr" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
        </div>  */}

      </section>
    </main>
  );
}

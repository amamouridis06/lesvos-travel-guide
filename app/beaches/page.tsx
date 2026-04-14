import Link from "next/link";

export default function BeachesPage() {
  const beaches = [
    {
      slug: "vatera",
      name: "Vatera",
      img: "/vatera.jpg",
      desc: "Sandy beach 8 km long."
    },
    {
      slug: "agios-isidoros",
      name: "Agios Isidoros",
      img: "/agios-isidoros.jpg",
      desc: "Famous beach with blue flag."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-16 bg-[url('/beach.jpg')] bg-cover bg-center bg-fixed relative">

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-10">Lesvos beaches</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beaches.map((b, i) => (
            <Link href={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52442.62385052624!2d26.179372848547395!3d39.014022754774174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14baeff2a84e3b1f%3A0x12a7105ca3e69a0a!2sVatera%20Beach!5e1!3m2!1sen!2sgr!4v1776159533075!5m2!1sen!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`} key={i}>
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden hover:scale-[1.03] transition-transform cursor-pointer">
                
                <img src={b.img} alt={b.name} className="h-48 w-full object-cover" />

                <div className="p-5">
                  <h2 className="text-2xl font-semibold mb-2">{b.name}</h2>
                  <p className="text-gray-300 text-sm">{b.desc}</p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}

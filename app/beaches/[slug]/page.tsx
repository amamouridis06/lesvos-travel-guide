import Link from "next/link";

export default function BeachDetails({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const beaches: Record<string, any> = {
    vatera: {
      name: "Βατερά",
      author: "Angelos",
      img: "/vatera.jpg",
      desc: [
        "Τα Βατερά είναι περιοχή στα νότια της Λέσβου με αμμώδη παραλία μήκους 8 km.",
        "Βρίσκονται κοντά στο χωριό Βρίσα όπου υπάρχει Μουσείο Φυσικής Ιστορίας.",
        "Δημοφιλής τουριστικός προορισμός."
      ],
      extraImages: ["/vatera.jpg", "/vatera1.jpg", "/vatera2.jpg"]
    },

    "agios-isidoros": {
      name: "Άγιος Ισίδωρος",
      author: "Angelos",
      img: "/agios-isidoros.jpg",
      desc: [
        "Μία από τις πιο διάσημες παραλίες της Λέσβου.",
        "Γαλάζια σημαία και πεντακάθαρα νερά."
      ],
      extraImages: ["/agios-isidoros.jpg"]
    }
  };

  const beach = beaches[slug];

  if (!beach) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl">Beach not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-white text-black pb-20">

      <nav className="text-sm text-gray-500 px-6 pt-6 max-w-4xl mx-auto">
        <Link href="/" className="hover:underline">Αρχική</Link> ›{" "}
        <Link href="/beaches" className="hover:underline">Παραλίες</Link> ›{" "}
        <span className="text-gray-800">{beach.name}</span>
      </nav>

      <header className="max-w-4xl mx-auto px-6 mt-4">
        <h1 className="text-4xl font-bold">{beach.name}</h1>
        <p className="text-gray-600 mt-2 text-sm">by <b>{beach.author}</b></p>
      </header>

      <div className="max-w-4xl mx-auto mt-8 px-6">
        <img src={beach.img} alt={beach.name} className="w-full rounded-lg shadow-md" />
      </div>

      <article className="max-w-4xl mx-auto px-6 mt-8 text-lg leading-relaxed">
        {beach.desc.map((p: string, index: number) => (
          <p key={index} className="mb-6">{p}</p>
        ))}
      </article>

      <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 gap-6 mt-10">
        {beach.extraImages.map((img: string, index: number) => (
          <img key={index} src={img} className="w-full rounded-lg shadow" />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-10">
        <Link href="/beaches">
          <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700">
            ← Επιστροφή στις παραλίες
          </button>
        </Link>
      </div>

    </main>
  );
}

import Link from "next/link";


export default function BeachesPage() {
  const beaches = [
    {
      slug: "vatera",
      name: "Βατερά",
      img: "/villages/vatera.jpg",
      desc: "Αμμώδης παραλία μήκους 8 km."
    },
    {
      slug: "agios-isidoros",
      name: "Άγιος Ισίδωρος",
      img: "/villages/agios-isidoros.jpg",
      desc: "Διάσημη παραλία με γαλάζια σημαία."
    },
    {
      slug: "skala-eresou",
      name: "Σκάλα Ερεσού",
      img: "/skala-eresou.jpg",
      desc: "Μεγάλη αμμώδης παραλία με χαλαρό vibe."
    },
    {
      slug: "petra",
      name: "Πέτρα",
      img: "/petra.jpg",
      desc: "Οργανωμένη παραλία κάτω από τον βράχο της Πέτρας."
    },
    {
      slug: "anaxos",
      name: "Ανάξος",
      img: "/anaxos.jpg",
      desc: "Ήρεμη παραλία ιδανική για οικογένειες."
    },
    {
      slug: "molyvos",
      name: "Μόλυβος",
      img: "/villages/molyvos1.jpg",
      desc: "Παραλία με θέα το γραφικό κάστρο του Μολύβου."
    },
    {
      slug: "tsamakia",
      name: "Τσαμάκια",
      img: "/tsamakia.jpg",
      desc: "Η πιο κοντινή οργανωμένη παραλία στη Μυτιλήνη."
    },
    {
      slug: "eftalou",
      name: "Εφταλού",
      img: "/eftalou.jpg",
      desc: "Παραλία με βότσαλο και φυσικές θερμές πηγές."
    },
    {
      slug: "sigri",
      name: "Σίγρι",
      img: "/sigri.jpg",
      desc: "Ήσυχη παραλία με εξωτικό τοπίο."
    },
    {
      slug: "gavathas",
      name: "Γαβαθάς",
      img: "/gavathas.jpg",
      desc: "Ρηχή αμμώδης παραλία για χαλάρωση."
    },
    {
      slug: "tarti",
      name: "Ταρτί",
      img: "/tarti.jpg",
      desc: "Κρυφή φυσική παραλία με καταγάλανα νερά."
    },
    {
      slug: "melinda",
      name: "Μελίντα",
      img: "/melinda.jpg",
      desc: "Ήσυχη παραθαλάσσια περιοχή με όμορφα νερά."
    },
    {
      slug: "drota",
      name: "Δρώτα",
      img: "/drota.jpg",
      desc: "Απομονωμένη παραλία για απόλυτη ηρεμία."
    },
    {
      slug: "kalloni-skala",
      name: "Σκάλα Καλλονής",
      img: "/skala-kallonis.jpg",
      desc: "Μεγάλη παραλία κοντά στον κόλπο της Καλλονής."
    },
    {
      slug: "charamida",
      name: "Χαραμίδα",
      img: "/charamida.jpg",
      desc: "Μικρή παραλία κοντά στη Μυτιλήνη με beach bars."
    },
    {
      slug: "niselia",
      name: "Νησέλια",
      img: "/niselia.jpg",
      desc: "Μικρός κρυμμένος παράδεισος με καθαρά νερά."
    },
    {
      slug: "agios-ermogenis",
      name: "Άγιος Ερμογένης",
      img: "/agios-ermogenis.jpg",
      desc: "Γραφική παραλία μέσα σε καταπράσινο τοπίο."
    },
    {
      slug: "kanoni",
      name: "Κανόνι",
      img: "/kanoni.jpg",
      desc: "Εξωτική παραλία με μοναδικό φυσικό τοπίο."
    },
    {
      slug: "kampoudi",
      name: "Καμπούδι",
      img: "/kampoudi.jpg",
      desc: "Μικρή ήρεμη παραλία ιδανική για χαλάρωση."
    },
    {
      slug: "faneromeni",
      name: "Φανερωμένη",
      img: "/faneromeni.jpg",
      desc: "Άγρια φυσική ομορφιά και γαλαζοπράσινα νερά."
    },
    {
      slug: "kagia",
      name: "Κάγια",
      img: "/kagia.jpg",
      desc: "Μικρός κρυφός κόλπος με εντυπωσιακά νερά."
    },
    {
      slug: "ampelia",
      name: "Αμπέλια",
      img: "/ampelia.jpg",
      desc: "Ήσυχη βοτσαλωτή παραλία κοντά στον Μόλυβο."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-16 bg-[url('/beach.jpg')] bg-cover bg-center bg-fixed relative">

      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-10">Παραλίες Λέσβου</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beaches.map((b, i) => (
            <Link href={`/beaches/${b.slug}`} key={i}>
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

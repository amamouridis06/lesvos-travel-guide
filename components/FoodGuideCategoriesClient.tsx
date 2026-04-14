"use client";

export default function FoodGuideCategoriesClient() {
  const categories = [
    {
      id: "taverns",
      icon: "🍽️",
      title: "Ταβέρνες",
      description: "Παραδοσιακές γεύσεις και αυθεντικά τοπικά πιάτα",
      items: [
        {
          name: "Το Λιμανάκι των Παμφίλων",
          subtitle: "Παραδοσιακή κουζίνα · Παραθαλάσσια",
          location: "📍 Σκάλα Παμφίλων, Μυτιλήνη",
        },
        {
          name: "Ο Μύλος",
          subtitle: "Θαλασσινά · Οικογενειακή ατμόσφαιρα",
          location: "📍 Μόλυβος, Λέσβος",
        },
      ],
    },
    {
      id: "restaurants",
      icon: "🍴",
      title: "Εστιατόρια",
      description: "Πιο σύγχρονες επιλογές για lunch ή dinner",
      items: [
        {
          name: "Mare Vista",
          subtitle: "Mediterranean · Fine casual",
          location: "📍 Πέτρα, Λέσβος",
        },
      ],
    },
    {
      id: "cafes",
      icon: "☕",
      title: "Καφέ & Bar",
      description: "Για πρωινό καφέ, απογευματινό aperitivo ή βραδινό ποτό",
      items: [
        {
          name: "Seaside Brew",
          subtitle: "Brunch · Cocktails · Θέα",
          location: "📍 Μυτιλήνη",
        },
      ],
    },
    {
      id: "products",
      icon: "🧺",
      title: "Τοπικά Προϊόντα",
      description: "Μικρά σημεία για γεύσεις, δώρα και αυθεντικά προϊόντα",
      items: [
        {
          name: "Τοπικό Παντοπωλείο Αιγαίου",
          subtitle: "Λάδι · Ούζο · Γλυκά κουταλιού",
          location: "📍 Αγιάσος, Λέσβος",
        },
      ],
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -110;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-stone-100 text-slate-900">
      <section className="relative overflow-hidden border-b border-black/5 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_35%),radial-gradient(circle_at_top_right,rgba(0,0,0,0.04),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur">
              Food Guide · Λέσβος
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Ένας όμορφος οδηγός για φαγητό, καφέ και τοπικές γεύσεις
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                Καθαρές κατηγορίες, smooth navigation και διακριτικά animations που
                κάνουν την εμπειρία πιο premium χωρίς να κουράζουν.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollToSection("categories")}
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5"
              >
                Δες κατηγορίες
              </button>

              <button
                onClick={() => scrollToSection("taverns")}
                className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                Πήγαινε στις ταβέρνες
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="sticky top-0 z-30 border-b border-black/5 bg-stone-100/85 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 py-5 md:px-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Κατηγορίες</h2>
            <span className="hidden text-sm text-slate-500 md:block">
              Επίλεξε ενότητα για γρήγορη μετάβαση
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className="group min-w-[240px] rounded-3xl border border-black/5 bg-white px-5 py-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 md:min-w-[260px]"
                style={{ animation: `fadeUp 0.55s ease-out ${index * 0.08}s both` }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-100 text-xl transition duration-300 group-hover:scale-110">
                    {category.icon}
                  </span>
                  <span className="text-lg font-semibold">{category.title}</span>
                </div>
                <p className="text-sm leading-6 text-slate-500">
                  {category.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        {categories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            className="mb-14 scroll-mt-32"
            style={{ animation: `fadeIn 0.4s ease-out ${index * 0.05}s both` }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white text-2xl shadow-sm">
                {category.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight">{category.title}</h3>
                <p className="mt-1 text-slate-500">{category.description}</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <article
                  key={item.name}
                  className="group rounded-[28px] border border-black/5 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/5"
                  style={{ animation: `fadeUp 0.55s ease-out ${itemIndex * 0.08}s both` }}
                >
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-stone-100 text-2xl transition duration-300 group-hover:scale-105">
                      {category.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xl font-semibold tracking-tight">{item.name}</h4>
                      <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                    </div>
                  </div>

                  <p className="mb-5 text-sm font-medium text-slate-700">{item.location}</p>

                  <div className="flex items-center justify-between gap-3">
                    <button className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:opacity-90">
                      Δείτε λεπτομέρειες
                    </button>
                    <button className="text-sm font-medium text-slate-500 transition duration-300 hover:text-slate-900">
                      Άνοιγμα στον χάρτη →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

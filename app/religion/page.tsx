"use client";

import React from "react";

type Church = {
  name: string;
  location: string;
  description: string;
};

const churches: Church[] = [
  {
    name: "Παναγία Αγιάσου",
    location: "Αγιάσος",
    description:
      "Μεγάλο προσκύνημα με ιστορία αιώνων, ιδιαίτερα δημοφιλές τον Δεκαπενταύγουστο.",
  },
  {
    name: "Παναγία Γλυκοφιλούσα",
    location: "Πέτρα",
    description:
      "Χτισμένη πάνω σε βράχο με 114 σκαλιά και πανοραμική θέα.",
  },
  {
    name: "Άγιος Θεράπων",
    location: "Μυτιλήνη",
    description:
      "Εντυπωσιακός ναός με μεγάλο τρούλο στο κέντρο της πόλης.",
  },
  {
    name: "Άγιος Ισίδωρος",
    location: "Πλωμάρι",
    description:
      "Γραφικό εκκλησάκι μέσα στη θάλασσα, συνδεδεμένο με μονοπάτι.",
  },
  {
    name: "Παναγία Γοργόνα",
    location: "Σκάλα Συκαμνιάς",
    description:
      "Μικρή εκκλησία με μοναδική εικόνα της Παναγίας ως γοργόνα.",
  },
  {
    name: "Άγιος Συμεών",
    location: "Μυτιλήνη",
    description:
      "Ιστορικός ναός με σημαντική θρησκευτική παρουσία.",
  },
];

export default function LesvosChurches() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-16 bg-[url('/church.jpg')] bg-cover bg-center bg-fixed relative">
      
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Εκκλησίες στη Λέσβο
        </h1>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {churches.map((church, i) => (
            <div
              key={i}
              className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">
                {church.name}
              </h2>

              <p className="text-sm text-gray-400 mb-3">
                📍 {church.location}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {church.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

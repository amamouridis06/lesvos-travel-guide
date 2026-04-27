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
    description: "Μεγάλο προσκύνημα με ιστορία αιώνων, ιδιαίτερα δημοφιλές τον Δεκαπενταύγουστο.",
  },
  {
    name: "Παναγία Γλυκοφιλούσα",
    location: "Πέτρα",
    description: "Χτισμένη πάνω σε βράχο με 114 σκαλιά και πανοραμική θέα.",
  },
  {
    name: "Άγιος Θεράπων",
    location: "Μυτιλήνη",
    description: "Εντυπωσιακός ναός με μεγάλο τρούλο στο κέντρο της πόλης.",
  },
  {
    name: "Άγιος Ισίδωρος",
    location: "Πλωμάρι",
    description: "Γραφικό εκκλησάκι μέσα στη θάλασσα, συνδεδεμένο με μονοπάτι.",
  },
  {
    name: "Παναγία Γοργόνα",
    location: "Σκάλα Συκαμνιάς",
    description: "Μικρή εκκλησία με μοναδική εικόνα της Παναγίας ως γοργόνα.",
  },
  {
    name: "Άγιος Συμεών",
    location: "Μυτιλήνη",
    description: "Ιστορικός ναός με σημαντική θρησκευτική παρουσία.",
  },
];

const LesvosChurches: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Εκκλησίες στη Λέσβο</h1>
      <ul>
        {churches.map((church, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <h2>{church.name}</h2>
            <p><strong>Τοποθεσία:</strong> {church.location}</p>
            <p>{church.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LesvosChurches;
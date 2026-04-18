import React from "react";

type Amenity = {
  label: string;
};

const amenities: Amenity[] = [
  { label: "Free Wi-Fi" },
  { label: "Kitchen" },
  { label: "Nearby Beach" },
  { label: "Parking" },
  { label: "Coffee Machine" },
];

export default function ApartmentPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section
        className="h-[80vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center">
          <div className="max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold mb-4">Azure Bay Apartment</h1>
            <p className="text-lg mb-4">
              Μοντέρνο apartment δίπλα στη θάλασσα για άνετη διαμονή.
            </p>

            <div className="mb-6">
              📍 Πάρος, Ελλάδα
            </div>

            <button className="bg-orange-500 px-6 py-3 rounded-xl">
              Κάνε Κράτηση
            </button>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Παροχές</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {amenities.map((item, i) => (
            <div key={i} className="text-center">
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROOMS */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Χώροι</h2>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                alt="Living room"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Living Room</h3>
                <p>Άνετο καθιστικό με καναπέ και θέα.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                alt="Bedroom"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Bedroom</h3>
                <p>Ήσυχο δωμάτιο για ξεκούραση.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
                alt="Kitchen"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Kitchen</h3>
                <p>Πλήρως εξοπλισμένη κουζίνα.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Κριτικές</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              ⭐⭐⭐⭐⭐
              <p>Τέλειο μέρος, πολύ καθαρό!</p>
            </div>

            <div>
              ⭐⭐⭐⭐⭐
              <p>Ιδανικό για διακοπές!</p>
            </div>

            <div>
              ⭐⭐⭐⭐⭐
              <p>Θα ξαναέρθουμε!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Επικοινωνία</h2>

        <div className="space-y-2">
          <p>📞 +30 210 1234567</p>
          <p>✉️ stay@email.com</p>
          <p>🕒 Check-in 15:00</p>
        </div>
      </section>

    </div>
  );
}

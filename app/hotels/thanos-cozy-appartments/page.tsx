import React from "react";
import { MapPin, Star, Wifi, Car, Utensils, Waves, Coffee, Phone, Mail, CalendarDays } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Utensils, label: "Kitchen" },
  { icon: Waves, label: "Nearby Beach" },
  { icon: Car, label: "Parking" },
  { icon: Coffee, label: "Coffee Machine" },
];

export default function ApartmentPage() {
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
              Μοντέρνο apartment δίπλα στη θάλασσα για άνετη και χαλαρωτική διαμονή.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <MapPin /> Πάρος, Ελλάδα
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
          {amenities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="text-center">
                <Icon className="mx-auto mb-2" />
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ROOMS */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Χώροι</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow">
              <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" />
              <div className="p-4">
                <h3 className="font-semibold">Living Room</h3>
                <p>Άνετο καθιστικό με καναπέ και θέα.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" />
              <div className="p-4">
                <h3 className="font-semibold">Bedroom</h3>
                <p>Ήσυχο δωμάτιο για ξεκούραση.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow">
              <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a" />
              <div className="p-4">
                <h3 className="font-semibold">Kitchen</h3>
                <p>Πλήρως εξοπλισμένη κουζίνα.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" className="rounded-xl" />
          <img src="https://images.unsplash.com/photo-1501117716987-c8e1ecb210e3" className="rounded-xl" />
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" className="rounded-xl" />
          <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c" className="rounded-xl" />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Κριτικές</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p>Τέλειο μέρος, πολύ καθαρό και όμορφο!</p>
            </div>

            <div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p>Ιδανικό για διακοπές κοντά στη θάλασσα.</p>
            </div>

            <div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p>Άνετο και μοντέρνο, θα ξαναέρθουμε!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Επικοινωνία</h2>

        <div className="space-y-2">
          <p className="flex justify-center gap-2"><Phone /> +30 210 1234567</p>
          <p className="flex justify-center gap-2"><Mail /> stay@email.com</p>
          <p className="flex justify-center gap-2"><CalendarDays /> Check-in 15:00</p>
        </div>
      </section>

    </div>
  );
}
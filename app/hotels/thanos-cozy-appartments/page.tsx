import React from "react";

type Amenity = {
  label: string;
};

const amenities: Amenity[] = [
  { label: "2 bedrooms" },
  { label: "2 bathrooms" },
  { label: "Kitchen" },
  { label: "Living room" },
  { label: "Balcon" },
];

const images = [
  "/thanosliv.jpeg",
  "/thanosbath.jpeg",
  "/thanosk.jpeg",
];

export default function RoomsCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };


export default function ApartmentPage(){
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section
        className="h-[80vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/thanosbackround.jpeg')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center">
          <div className="max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold mb-4">Thanos Cozy Appartments</h1>
            <p className="text-lg mb-4">
              Montern appartment near the Skalla Kallonis square
            </p>

            <div className="mb-6">
              📍 Skalla Kallonis, Lesvos
            </div>

            <button className="bg-orange-500 px-6 py-3 rounded-xl">
              Book
            </button>
          </div>
        </div>
      </section>

      {/*Facilities */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Facilities</h2>

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
        <div className="relative max-w-xl mx-auto">

      <img
        src={images[index]}
        className="w-full h-64 object-cover rounded-xl"
        alt="Room"
      />

      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded"
      >
        ▶
      </button>

    </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Reviews</h2>

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
        <h2 className="text-3xl font-bold mb-4">Contact/h2>

        <div className="space-y-2">
          <p>📞 +30 6974603592</p>
          <p>✉️ tcanancy@gmail.com</p>
          <p>🕒 Check-in 15:00</p>
        </div>
      </section>

    </div>
  );
}

import React from "react";

type NewsItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Top Προορισμοί για το Καλοκαίρι 2026",
    description: "Ανακάλυψε τους πιο hot προορισμούς για φέτος το καλοκαίρι.",
    image: "https://source.unsplash.com/600x400/?beach",
    date: "10 Απρ 2026",
  },
  {
    id: 2,
    title: "Travel Tips για Φθηνά Αεροπορικά",
    description: "Μάθε πώς να βρίσκεις τα πιο οικονομικά εισιτήρια.",
    image: "https://source.unsplash.com/600x400/?airplane",
    date: "5 Απρ 2026",
  },
  {
    id: 3,
    title: "Weekend στην Ευρώπη",
    description: "Ιδέες για σύντομα city breaks σε δημοφιλείς πόλεις.",
    image: "https://source.unsplash.com/600x400/?city",
    date: "1 Απρ 2026",
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <p className="text-sm text-orange-500 mb-2">{item.date}</p>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

                <button className="text-orange-500 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
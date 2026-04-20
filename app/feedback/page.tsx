"use client";

import { useEffect, useState } from "react";

type Feedback = {
  id: number;
  name: string;
  rating: string;
  comment: string;
  date: string;
};

export default function Page() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then(setFeedbacks);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ name, rating, comment }),
    });

    const newFeedback = await res.json();

    setFeedbacks((prev) => [newFeedback, ...prev]);

    setName("");
    setRating("");
    setComment("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Αξιολογήσεις Πελατών
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Όνομα (προαιρετικό)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Βαθμολογία</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>

          <textarea
            placeholder="Γράψε τη γνώμη σου..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />

          <button className="w-full bg-black text-white p-2 rounded hover:opacity-90">
            Αποστολή
          </button>
        </form>
      </div>

      {/* LIST */}
      <div className="w-full max-w-xl mt-6 space-y-4">
        {feedbacks.map((f) => (
          <div
            key={f.id}
            className="bg-white p-4 rounded-xl shadow-sm border"
          >
            <div className="flex justify-between items-center mb-1">
              <h2 className="font-semibold">{f.name}</h2>
              <span className="text-sm text-gray-400">{f.date}</span>
            </div>

            <div className="text-yellow-500 mb-2">
              {"⭐".repeat(Number(f.rating))}
            </div>

            <p className="text-gray-700">{f.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

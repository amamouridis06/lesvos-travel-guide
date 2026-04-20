"use client";

import { useState } from "react";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // εδώ μπορείς να στείλεις τα δεδομένα σε API / database
    console.log({ name, rating, comment });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-xl font-semibold">
          Ευχαριστώ πολύ για το feedback! 🙏
        </h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-2xl shadow-lg p-6"
      >
        <h1 className="text-2xl font-bold text-center">
          Πείτε μας τη γνώμη σας
        </h1>

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
          placeholder="Το σχόλιό σας..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full border p-2 rounded"
          rows={4}
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:opacity-90"
        >
          Αποστολή
        </button>
      </form>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xgorzdkv", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-neutral-100">
        <div className="bg-white p-10 rounded-2xl shadow text-center">
          <h1 className="text-2xl font-bold mb-4">Message sent ✅</h1>
          <p className="text-gray-600">Thanks! I’ll get back to you soon.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <input
            type="hidden"
            name="_subject"
            value="New message from website"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-700 text-white py-3 rounded-xl font-semibold hover:bg-emerald-800 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </main>
  );
}

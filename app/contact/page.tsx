"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simple validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    console.log(form); // εδώ θα μπει backend αργότερα
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 px-4 sm:px-6 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          Contact
        </h1>

        <p className="text-center text-gray-600 mb-10">
          If you have suggestions, questions or want to collaborate, feel free
          to contact me.
        </p>

        {/* Success message */}
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-emerald-700 text-white py-3 rounded-xl font-semibold hover:bg-emerald-800 transition"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
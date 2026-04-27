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
      <main className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
        <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-lg">
          <h1 className="mb-4 text-3xl font-bold text-neutral-900">
            Message sent ✅
          </h1>
          <p className="text-neutral-600">
            Thanks for reaching out. I’ll get back to you as soon as possible.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Contact
          </h1>
          <p className="mt-3 text-neutral-600">
            Tell me a bit about your project, idea, or question.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium text-neutral-800">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ang M"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium text-neutral-800">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@email.com"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium text-neutral-800">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+30 69xxxxxxxx"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium text-neutral-800">
                Name of Company 
              </label>
              <input
                type="text"
                name="company"
                placeholder="Your company name"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block font-medium text-neutral-800">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="What is this about?"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium text-neutral-800">
                Inquiry Type <span className="text-red-500">*</span>
              </label>
              <select
                name="inquiryType"
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="collaboration">Collaboration</option>
                <option value="question">Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block font-medium text-neutral-800">
                Preferred Contact Method <span className="text-red-500">*</span>
              </label>
              <select
                name="contactMethod"
                defaultValue="email"
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium text-neutral-800">
                Budget Range
              </label>
              <select
                name="budget"
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              >
                <option value="" disabled>
                  Select budget
                </option>
                <option value="under-500">Under €50</option>
                <option value="500-1000">€50 - €100</option>
                <option value="1000-3000">€100 - €300</option>
                <option value="3000-plus">€300+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block font-medium text-neutral-800">
                Timeline
              </label>
              <select
                name="timeline"
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              >
                <option value="" disabled>
                  Select timeline
                </option>
                <option value="1-2-weeks">1–2 weeks</option>
                <option value="this-month">This month</option>
                <option value="1-3-months">1–3 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block font-medium text-neutral-800">
              Details
            </label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Share a few details about what you need..."
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          {/* <div>
            <label className="mb-1 block font-medium text-neutral-800">
              Website / Reference Link
            </label>
            <input
              type="url"
              name="website"
              placeholder="https://example.com"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div> */}

          <input
            type="hidden"
            name="_subject"
            value="New message from website"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-emerald-700 py-3 font-semibold text-white transition hover:bg-emerald-800 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </main>
  );
}

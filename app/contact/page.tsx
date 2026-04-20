"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || ""
  );

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (state.succeeded) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#d1fae5,_#f8fafc_35%,_#ffffff_70%)] px-4 py-16 text-neutral-900 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[28px] border border-white/60 bg-white/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur xl:p-12">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                ✓
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Message sent
              </h1>
              <p className="mb-8 text-base leading-7 text-neutral-600 sm:text-lg">
                Thank you for reaching out. I received your message and I’ll get
                back to you as soon as possible.
              </p>

              <button
                onClick={() => {
                  setValues({ name: "", email: "", message: "" });
                  window.location.reload();
                }}
                className="rounded-2xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#d1fae5,_#f8fafc_35%,_#ffffff_70%)] px-4 py-16 text-neutral-900 sm:px-6">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-[-80px] top-16 h-72 w-72 rounded-full bg-emerald-200 blur-3xl" />
        <div className="absolute bottom-0 right-[-60px] h-80 w-80 rounded-full bg-teal-100 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <section className="max-w-xl">
          <span className="inline-flex rounded-full border border-emerald-200 bg-white/70 px-4 py-1 text-sm font-medium text-emerald-800 backdrop-blur">
            Contact
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Let’s build something meaningful together.
          </h1>

          <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
            Have a question, an idea, or a collaboration in mind? Send me a
            message and I’ll get back to you soon.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-neutral-900">Fast reply</p>
              <p className="mt-1 text-sm text-neutral-600">
                Clear communication and quick follow-up.
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-neutral-900">
                Open to collaborations
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Freelance, products, content, and partnerships.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-800"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-sm text-red-600"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={onChange}
                required
                placeholder="Tell me a bit about your idea..."
                className="w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-2 text-sm text-red-600"
              />
            </div>

            {state.errors && state.errors.length > 0 && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                Something went wrong. Please check the fields and try again.
              </div>
            )}

            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state.submitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

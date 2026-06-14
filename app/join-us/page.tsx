"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const TEAM_EMAIL = "";

const opportunities = [
  {
    title: "Local Contributors",
    description:
      "Share local knowledge, hidden places, traditions and authentic experiences from Lesvos.",
  },
  {
    title: "Writers & Photographers",
    description:
      "Help us create inspiring travel stories, guides, articles and visual content.",
  },
  {
    title: "Local Businesses",
    description:
      "Hotels, restaurants, rental companies and activity providers can collaborate with our guide.",
  },
  {
    title: "Travel Enthusiasts",
    description:
      "Join us if you love Lesvos and want to help visitors discover the island responsibly.",
  },
];

export default function JoinOurTeamPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const role = String(form.get("role") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(
      `Join the Lesvos Travel Guide team — ${name}`
    );

    const body = encodeURIComponent(
      `Hello Lesvos Travel Guide team,

    I would like to join your team.

    Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Area of interest: ${role}

Message:
    ${message}

Kind regards,
    ${name}`
    );

    setSubmitted(true);

    window.location.href = `mailto:${TEAM_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-emerald-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            Become part of our community
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Join Our Team
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-emerald-50 sm:text-lg">
            Help us present the beauty, culture and authentic experiences of
            Lesvos to travellers from around the world.
          </p>

          <a
            href="#application"
            className="mt-8 inline-flex rounded-xl bg-yellow-300 px-7 py-3 font-semibold text-emerald-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-yellow-200"
          >
            Apply to Join
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Work with us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s promote Lesvos together
            </h2>

            <p className="mt-5 leading-8 text-stone-600">
              We are building a useful and authentic travel guide created with
              the help of people who know and love the island. Whether you are a
              local resident, creator, professional or business owner, we would
              be happy to hear from you.
            </p>
          </div>

          {/* Opportunities */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {opportunities.map((opportunity, index) => (
              <article
                key={opportunity.title}
                className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-800">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold">
                  {opportunity.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600">
                  {opportunity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-emerald-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
              Why join us?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Be part of something local and meaningful
            </h2>

            <p className="mt-6 leading-8 text-emerald-100">
              Our goal is not only to help visitors find places, but also to
              support local communities, promote responsible tourism and
              highlight the people behind every experience.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Promote the authentic character of Lesvos",
              "Share your knowledge and creative ideas",
              "Connect with local professionals and businesses",
              "Support responsible and sustainable tourism",
              "Reach travellers interested in real local experiences",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-sm font-bold text-emerald-950">
                  ✓
                </span>

                <p className="text-emerald-50">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section
        id="application"
        className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-stone-100 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Contact us
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Tell us about yourself
            </h2>

            <p className="mt-5 leading-7 text-stone-600">
              Complete the form and let us know how you would like to contribute
              to the Lesvos Travel Guide.
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div>
                <p className="font-semibold text-stone-900">
                  Response time
                </p>
                <p className="mt-1 text-stone-600">
                  We will contact you as soon as possible.
                </p>
              </div>

              <div>
                <p className="font-semibold text-stone-900">
                  Who can apply?
                </p>
                <p className="mt-1 text-stone-600">
                  Individuals, creators, professionals and local businesses.
                </p>
              </div>
            </div>

            <Link
              href="/"
              className="mt-10 inline-flex font-semibold text-emerald-800 transition hover:text-emerald-600"
            >
              ← Back to home
            </Link>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Full name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+30 000 000 0000"
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-semibold"
                >
                  Area of interest *
                </label>

                <select
                  id="role"
                  name="role"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Local contributor">
                    Local contributor
                  </option>
                  <option value="Writer">Writer</option>
                  <option value="Photographer">Photographer</option>
                  <option value="Content creator">
                    Content creator
                  </option>
                  <option value="Local business">
                    Local business
                  </option>
                  <option value="Travel professional">
                    Travel professional
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold"
              >
                Tell us how you would like to contribute *
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us a little about yourself, your experience and your ideas..."
                className="w-full resize-none rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition placeholder:text-stone-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <label className="flex items-start gap-3 text-sm leading-6 text-stone-600">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-stone-300 accent-emerald-700"
              />

              <span>
                I agree that my details may be used to contact me regarding my
                application.
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-800 px-6 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Send Application
            </button>

            {submitted && (
              <p
                role="status"
                className="rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-800"
              >
                Your email application is ready to be sent.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}


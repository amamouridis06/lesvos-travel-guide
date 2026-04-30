"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Send,
  CheckCircle2,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function CustomerReviewPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    comment: "",
    permission: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const activeRating = hoverRating || rating;

  const ratingText = useMemo(() => {
    const labels: Record<number, string> = {
      1: "Χρειάζεται βελτίωση",
      2: "Μέτρια εμπειρία",
      3: "Καλή εμπειρία",
      4: "Πολύ καλή εμπειρία",
      5: "Εξαιρετική εμπειρία",
    };

    return activeRating ? labels[activeRating] : "Επιλέξτε βαθμολογία";
  }, [activeRating]);

  const handleChange = (
      event: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
  ) => {
    const { name, value, type } = event.target;

    const checked =
        type === "checkbox"
            ? (event.target as HTMLInputElement).checked
            : undefined;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!rating || !form.name.trim() || !form.comment.trim()) return;

    console.log({ rating, ...form });
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-10 text-slate-900">
          <motion.div
              aria-hidden="true"
              className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-100 blur-3xl"
              animate={{ scale: [1, 1.15, 1], x: [0, 24, 0], y: [0, -18, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
              aria-hidden="true"
              className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-sky-100 blur-3xl"
              animate={{ scale: [1.1, 1, 1.1], x: [0, -24, 0], y: [0, 18, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <section className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full"
            >
              <div className="bg-white p-6 rounded-2xl shadow">
                  <CheckCircle2 className="mx-auto mb-5 h-16 w-16 text-emerald-500" />

                  <h1 className="text-3xl font-bold tracking-tight">
                    Ευχαριστούμε για την αξιολόγηση!
                  </h1>

                  <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
                    Η γνώμη σας μας βοηθά να βελτιώνουμε συνεχώς τις υπηρεσίες
                    μας.
                  </p>

                <button className="bg-black text-white px-4 py-2 rounded"
                      onClick={() => setSubmitted(false)}
                  >
                    Υποβολή νέας αξιολόγησης
                  </button>
              </div>
            </motion.div>
          </section>
        </main>
    );
  }

  return (
      <main className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-10 text-slate-900">
        <motion.div
            aria-hidden="true"
            className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-100 blur-3xl"
            animate={{ scale: [1, 1.15, 1], x: [0, 24, 0], y: [0, -18, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
            aria-hidden="true"
            className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-sky-100 blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], x: [0, -24, 0], y: [0, 18, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <section className="relative z-10 mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
          >
            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.04 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm"
            >
              <MessageSquareText className="h-4 w-4" />
              Αξιολόγηση πελατών

              <motion.span
                  animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                  }}
              >
                <Sparkles className="h-4 w-4 text-amber-400" />
              </motion.span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Πείτε μας πώς ήταν η εμπειρία σας
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Η αξιολόγησή σας είναι πολύτιμη. Συμπληρώστε τη φόρμα και
                βοηθήστε μας να γίνουμε καλύτεροι.
              </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                className="grid gap-4 sm:grid-cols-3"
            >
              {[
                "Γρήγορη εξυπηρέτηση",
                "Ποιότητα υπηρεσιών",
                "Υποστήριξη πελατών",
              ].map((item) => (
                  <motion.div
                      key={item}
                      variants={itemVariants}
                      whileHover={{ y: -6, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-2xl bg-white p-4 text-sm font-medium shadow-sm"
                  >
                    {item}
                  </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -4 }}
          >
            <div className="bg-white p-6 rounded-2xl shadow">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold">
                      Η βαθμολογία σας *
                    </label>

                    <div className="mt-3 flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                          <button
                              key={star}
                              type="button"
                              aria-label={`Βαθμολογία ${star}`}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              onClick={() => setRating(star)}
                              className="rounded-xl p-1 transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-400"
                          >
                            <motion.span
                                animate={
                                  star <= activeRating
                                      ? {
                                        scale: [1, 1.25, 1],
                                        rotate: [0, -8, 8, 0],
                                      }
                                      : { scale: 1 }
                                }
                                transition={{ duration: 0.28 }}
                                className="block"
                            >
                              <Star
                                  className={`h-9 w-9 ${
                                      star <= activeRating
                                          ? "fill-amber-400 text-amber-400"
                                          : "text-slate-300"
                                  }`}
                              />
                            </motion.span>
                          </button>
                      ))}

                      <span className="ml-2 text-sm font-medium text-slate-600">
                      {ratingText}
                    </span>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-semibold">
                        Ονοματεπώνυμο *
                      </label>

                      <input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="π.χ. Μαρία Παπαδοπούλου"
                          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                          required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-semibold">
                        Email
                      </label>

                      <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="text-sm font-semibold">
                      Υπηρεσία που αξιολογείτε
                    </label>

                    <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    >
                      <option value="">Επιλέξτε υπηρεσία</option>
                      <option value="support">Υποστήριξη πελατών</option>
                      <option value="delivery">Παράδοση / εξυπηρέτηση</option>
                      <option value="product">Προϊόν / υπηρεσία</option>
                      <option value="general">Γενική εμπειρία</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="comment" className="text-sm font-semibold">
                      Σχόλιο *
                    </label>

                    <textarea
                        id="comment"
                        name="comment"
                        value={form.comment}
                        onChange={handleChange}
                        placeholder="Γράψτε εδώ την εμπειρία σας..."
                        rows={5}
                        className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                        required
                    />
                  </div>

                  <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                    <input
                        name="permission"
                        type="checkbox"
                        checked={form.permission}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-slate-300"
                    />
                    Επιτρέπω τη δημοσίευση της αξιολόγησής μου με το μικρό μου
                    όνομα.
                  </label>

                  <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!rating || !form.name.trim() || !form.comment.trim()}
                      className="bg-black text-white px-4 py-2 rounded w-full disabled:opacity-50"
                  >
                    <Send className="mr-2 h-5 w-5 inline" />
                    Υποβολή αξιολόγησης
                  </motion.button>
                </form>
            </div>
          </motion.div>
        </section>
      </main>
  );
}
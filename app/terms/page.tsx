"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ShieldCheck } from "lucide-react";

type OfferTermsProps = {
    terms?: string[];
    title?: string;
};

const defaultTerms = [
    "Valid until 30 September 2026.",
    "Advance reservation is required.",
    "Subject to availability.",
    "Cannot be combined with other offers.",
    "Minimum stay of 4 nights applies.",
    "The offer applies only to selected room types.",
];

export default function OfferTerms({
                                       terms = defaultTerms,
                                       title = "Terms & Conditions",
                                   }: OfferTermsProps) {
    const [open, setOpen] = useState(false);
    const contentId = useId();

    return (
        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-controls={contentId}
                className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
            >
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <ShieldCheck className="h-4 w-4" />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-slate-900">
                            {title}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                            Important information about this offer
                        </p>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition group-hover:bg-white group-hover:text-slate-700"
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id={contentId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="border-t border-slate-100 px-5 py-5">
                            <ul className="space-y-3">
                                {terms.map((term, index) => (
                                    <li
                                        key={`${term}-${index}`}
                                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                    >
                                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />

                                        <span>{term}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-400">
                                Offers may be subject to availability and specific conditions
                                set by the participating business.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function OfferTerms() {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-8 border-t border-slate-200 pt-6">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between text-left"
            >
        <span className="text-sm font-semibold text-slate-900">
          Terms & Conditions
        </span>

                <ChevronDown
                    className={`h-4 w-4 text-slate-500 transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {open && (
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-500">
                    <p>• Valid until 30 September 2026.</p>
                    <p>• Advance reservation is required.</p>
                    <p>• Subject to availability.</p>
                    <p>• Cannot be combined with other offers.</p>
                    <p>• Minimum stay of 4 nights applies.</p>
                    <p>• The offer applies only to selected room types.</p>
                </div>
            )}
        </div>
    );
}
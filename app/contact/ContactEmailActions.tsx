"use client";

import { useState } from "react";

const EMAIL = "support@beltstack.com";

const btnPrimary =
  "inline-flex items-center justify-center rounded-lg bg-[#10B981] px-6 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const btnSecondary =
  "inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white px-6 py-3 text-base font-semibold text-[#1A2D48] shadow-sm transition-all hover:border-[#1A2D48]/30 hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

export function ContactEmailActions() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href={`mailto:${EMAIL}`} className={btnPrimary}>
        Open in email app
      </a>
      <button type="button" onClick={copy} className={btnSecondary}>
        {copied ? "Copied to clipboard" : "Copy email address"}
      </button>
    </div>
  );
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { ContactEmailActions } from "./ContactEmailActions";

export const metadata: Metadata = {
  title: "Contact BeltStack",
  description:
    "Reach the BeltStack team for questions, feedback, or partnership inquiries. Email us at support@beltstack.com.",
};

const EMAIL = "support@beltstack.com";

const mailto = (subject: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

const topicLinks = [
  {
    label: "Question about a review",
    subject: "Question about a BeltStack review",
    blurb: "Corrections, clarifications, or product updates.",
  },
  {
    label: "Partnership or vendor inquiry",
    subject: "Partnership inquiry – BeltStack",
    blurb: "Press, data partnerships, or product teams.",
  },
  {
    label: "Something else",
    subject: "Message to BeltStack",
    blurb: "General feedback—we read everything.",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero + decorative background */}
        <section className="relative overflow-hidden border-b border-stone-200/80 bg-stone-50">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#10B981]/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#1A2D48]/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/3 h-px w-[min(80vw,48rem)] -translate-x-1/2 rotate-[-8deg] bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent"
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors hover:text-[#1A2D48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-medium text-[#1A2D48]" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/25 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#10B981] shadow-sm backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" aria-hidden />
                We&apos;re here to help
              </p>
              <h1 className="mt-4 text-[#1A2D48] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Get in{" "}
                <span className="relative">
                  touch
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-2 bg-[#10B981]/25 sm:h-2.5"
                    aria-hidden
                  />
                </span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#57534E] sm:text-xl">
                Questions about our guides, a product we covered, or how BeltStack works? Send us a note—we read every message.
              </p>
            </div>
          </div>
        </section>

        {/* Primary contact card */}
        <section className="relative -mt-8 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <div className="relative mx-auto max-w-3xl">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xl shadow-stone-900/5 ring-1 ring-stone-900/5 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-[#1A2D48] text-xl font-bold sm:text-2xl">Email us directly</h2>
                  <p className="mt-1 text-sm text-[#57534E]">Fastest way to reach our team.</p>
                </div>
                <div className="shrink-0 rounded-lg bg-stone-50 px-3 py-1.5 text-xs font-medium text-[#57534E] ring-1 ring-stone-200/80">
                  Typical reply: 1–2 business days
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-[#10B981]/35 bg-[#10B981]/5 px-4 py-5 sm:px-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#10B981]">Support</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 block break-all text-2xl font-bold tracking-tight text-[#1A2D48] transition-colors hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-sm sm:text-3xl"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="mt-8">
                <ContactEmailActions />
              </div>
            </div>
          </div>
        </section>

        {/* Topic shortcuts */}
        <section className="border-t border-stone-200/80 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-[#1A2D48] text-2xl font-bold sm:text-3xl">Start with a subject line</h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-[#57534E] sm:text-base">
              Pick what fits—we&apos;ll route it to the right person faster.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {topicLinks.map((t) => (
                <li key={t.label}>
                  <a
                    href={mailto(t.subject)}
                    className="group flex h-full flex-col rounded-xl border border-stone-200 bg-stone-50/50 p-5 transition-all hover:-translate-y-0.5 hover:border-[#10B981]/40 hover:bg-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <span className="text-[#1A2D48] text-base font-bold group-hover:text-[#10B981]">{t.label}</span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-[#57534E]">{t.blurb}</span>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#10B981]">
                      Compose email
                      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer strip */}
        <section className="border-t border-stone-200/80 bg-[#1A2D48] py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold sm:text-3xl">Prefer to explore first?</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                  Learn how we score software and handle affiliate links before you write in.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/methodology"
                  className="inline-flex items-center justify-center rounded-lg bg-[#10B981] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A2D48]"
                >
                  How we review
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A2D48]"
                >
                  About BeltStack
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

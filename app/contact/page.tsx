import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";
import { SocialLinks } from "@/components/SocialLinks";
import { sectionRuleAccent } from "@/lib/design-tokens";
import { ContactEmailActions } from "./ContactEmailActions";

export const metadata: Metadata = siteMetadata({
  path: "/contact",
  title: "Contact BeltStack | Questions & Partnerships",
  description:
    "Contact BeltStack for review questions, corrections, or partnership inquiries.",
});

const EMAIL = "support@beltstack.com";

const mailto = (subject: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

const topicLinks = [
  {
    label: "Question about a review",
    subject: "Question about a BeltStack review",
    blurb: "Corrections, clarifications, or product updates.",
    icon: "review",
  },
  {
    label: "Partnership or vendor inquiry",
    subject: "Partnership inquiry – BeltStack",
    blurb: "Press, data partnerships, or product teams.",
    icon: "partnership",
  },
  {
    label: "Something else",
    subject: "Message to BeltStack",
    blurb: "General feedback—we read everything.",
    icon: "other",
  },
] as const;

function TopicIcon({ icon }: { icon: (typeof topicLinks)[number]["icon"] }) {
  const className = "h-4 w-4";
  if (icon === "review") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3.5h7.5L19 8v12.5H7z" />
        <path d="M14 3.5V8h5" />
        <path d="M9.5 12.5h5.5M9.5 16h4" />
      </svg>
    );
  }
  if (icon === "partnership") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 13.5 10.5 16l1.2 1.2a1.2 1.2 0 0 0 1.7 0" />
        <path d="m13.5 12.5 2 2a1.2 1.2 0 0 0 1.7 0L19 13" />
        <path d="M7.5 12.5 10.5 9.5l1.4 1.4" />
        <path d="M4 8.5h3.5M3.5 8.5 3 13l3.8 3.8a1.2 1.2 0 0 0 1.7 0" />
        <path d="M16.5 8.2 18 6.8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const linkClass =
  "font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-medium text-brand" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>

            <div className="mt-6 max-w-2xl">
              <h1 className="text-brand text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Get in touch
              </h1>
              <div className={sectionRuleAccent} aria-hidden />
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Questions about our guides, a product we covered, or how BeltStack works? Send us a note—we read every message.
              </p>
            </div>

            <div className="mt-8 grid items-start gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-8">
              <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
                <h2 className="text-brand text-xl font-bold">Email us directly</h2>
                <p className="mt-1 text-sm text-muted-foreground">Fastest way to reach BeltStack.</p>

                <div className="mt-5 rounded-lg border border-sage bg-sage/40 px-4 py-4 sm:px-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo">Support</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block break-all text-xl font-bold tracking-tight text-brand transition-colors hover:text-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded-sm sm:text-2xl"
                  >
                    {EMAIL}
                  </a>
                </div>

                <div className="mt-5">
                  <ContactEmailActions />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  To submit a factual correction, pricing change, or product update, email{" "}
                  <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Correction for BeltStack")}`} className={linkClass}>
                    {EMAIL}
                  </a>
                  . Include a supporting source when you can. BeltStack reviews submissions against reliable sources, preferring official vendor documentation, and updates pages when a correction is warranted. See{" "}
                  <Link href="/methodology#corrections" className={linkClass}>
                    methodology
                  </Link>
                  .
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-stone-200 pt-5">
                  <p className="text-sm text-muted-foreground">Follow along</p>
                  <SocialLinks />
                </div>
              </div>

              <div>
                <h2 className="text-brand text-xl font-bold">Start with a subject line</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pick a subject so we know what your message is about.
                </p>
                <ul className="mt-4 grid gap-3">
                  {topicLinks.map((t) => (
                    <li key={t.label}>
                      <a
                        href={mailto(t.subject)}
                        className="group flex h-full gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-colors hover:border-sage hover:bg-sage-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sage/70 text-brand">
                          <TopicIcon icon={t.icon} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-brand text-sm font-bold sm:text-base">{t.label}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{t.blurb}</span>
                          <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-indigo">
                            Compose email
                            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                              →
                            </span>
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-xl border border-stone-200 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <h2 className="text-brand text-lg font-bold">Prefer to explore first?</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Learn how we score software and handle affiliate links before you write in.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <Link href="/methodology" className={linkClass}>
                  How we review
                </Link>
                <Link href="/about" className={linkClass}>
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

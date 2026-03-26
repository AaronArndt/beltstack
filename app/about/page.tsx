import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BeltStack",
  description:
    "BeltStack helps trade businesses and contractors compare software for payroll, field service, CRM, and more—independently and clearly.",
};

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-medium text-gray-700" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              About BeltStack
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
              BeltStack exists to help trade businesses, contractors, and local service operators choose software with confidence. We publish
              independent reviews, roundups, guides, and side-by-side comparisons—focused on what actually matters when you run jobs, crews,
              and back-office work.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why we built this.">What we do</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E]">
              We research and explain payroll, accounting, field service, CRM, scheduling, POS, and related tools so you can shortlist faster and
              compare on pricing, features, and fit—not marketing fluff. Our hubs group reviews, comparisons, and guides so you can go deep on a
              category or jump straight to a decision.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Honest coverage.">Independence and affiliates</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E]">
              We may earn a commission when you sign up or purchase through links on the site. That does not determine our picks or scores. For
              more on how we review and how we handle affiliate relationships, see our{" "}
              <Link
                href="/methodology"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                methodology
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Start here.">Explore BeltStack</SectionTitle>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-[#57534E] sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              <li>
                <Link href="/" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Software categories
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  How we review software
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

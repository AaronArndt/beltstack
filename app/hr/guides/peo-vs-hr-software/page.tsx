import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedHrResources } from "@/components/guides/RelatedHrResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getHrReviewUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  {
    q: "What is a PEO?",
    a: "A professional employer organization (PEO) becomes a co-employer of your team. You keep day-to-day control, but the PEO handles payroll, benefits, and many HR compliance tasks under its own tax IDs. You pay a per-employee fee for this bundle of services.",
  },
  {
    q: "How is HR software different from a PEO?",
    a: "HR software gives you tools to run payroll, benefits, and people operations yourself; you remain the sole employer of record. A PEO bundles software with services and takes on more compliance responsibility, usually at higher ongoing cost per employee.",
  },
  {
    q: "When does a PEO make sense?",
    a: "PEOs like Justworks and TriNet can be attractive when you are small, have limited HR headcount, and want to offload as much compliance and benefits administration as possible—even if it costs more than software alone.",
  },
  {
    q: "Can we move off a PEO later?",
    a: "Yes. Many companies start with a PEO and later transition to owning HR software and payroll directly as they grow. The transition takes planning but is common; our HR software reviews and best HR software guide can help you pick a destination stack.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Justworks",
    logoSrc: "/Logos/justworks.jpeg",
    rating: 4.4,
    bestFor: "PEO for small teams",
    reviewHref: getHrReviewUrl("justworks"),
  },
  {
    name: "TriNet",
    logoSrc: "/Logos/trinet.jpeg",
    rating: 4.3,
    bestFor: "PEO for growing orgs",
    reviewHref: getHrReviewUrl("trinet"),
  },
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "SMB HR software",
    reviewHref: getHrReviewUrl("gusto"),
  },
  {
    name: "Rippling",
    logoSrc: "/Logos/rippling.jpeg",
    rating: 4.7,
    bestFor: "HR software + IT",
    reviewHref: getHrReviewUrl("rippling"),
  },
];

const RELATED_ITEMS = [
  { label: "HR Software Hub", href: "/hr" },
  { label: "Best HR Software (2026)", href: "/hr/best-hr-software" },
  { label: "HR Guides", href: "/hr/guides" },
  { label: "Gusto Review", href: getHrReviewUrl("gusto") },
  { label: "Rippling Review", href: getHrReviewUrl("rippling") },
  { label: "Justworks Review", href: getHrReviewUrl("justworks") },
  { label: "TriNet Review", href: getHrReviewUrl("trinet") },
];

export default function PeoVsHrSoftwareGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/hr"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        HR
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/hr/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      PEO vs HR Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    PEO vs HR Software
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Should you outsource HR to a PEO or run HR in-house with software? This guide explains how each
                    model works, what it costs, and which fits different company stages.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Getting HR right is mandatory; deciding how to do it is optional. Many small businesses and
                      startups wrestle with whether to use a professional employer organization (PEO) like{" "}
                      <Link href={getHrReviewUrl("justworks")} className={linkGreen}>
                        Justworks
                      </Link>{" "}
                      or{" "}
                      <Link href={getHrReviewUrl("trinet")} className={linkGreen}>
                        TriNet
                      </Link>{" "}
                      or to build their own stack around HR software such as{" "}
                      <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                        Gusto
                      </Link>{" "}
                      or{" "}
                      <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                        Rippling
                      </Link>
                      .
                    </p>
                    <p>
                      This guide breaks down how PEOs and HR software stacks differ, how pricing works, and how to
                      choose an approach that fits your risk tolerance, HR capacity, and growth plans. Use it together
                      with our{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      roundup and full reviews when you are evaluating specific vendors.
                    </p>
                  </div>
                </section>

                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick summary of the trade-offs.">
                    Key Takeaways: PEO vs HR Software
                  </SectionTitle>
                  <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>PEOs bundle software with services and extra compliance support; you pay more per employee.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>HR software keeps you as employer of record and is usually cheaper but requires more internal ownership.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Many companies start on a PEO, then move to HR software once they have more scale and HR capacity.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="how-peos-work"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="What changes when you join a PEO.">How PEOs Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      In a PEO model, your employees are co-employed by your company and the PEO. The PEO runs payroll,
                      sponsors benefits, and handles many filings under its own IDs. You still manage day-to-day work,
                      but much of the HR paperwork happens through the PEO&apos;s systems.
                    </p>
                    <p>
                      PEOs like{" "}
                      <Link href={getHrReviewUrl("justworks")} className={linkGreen}>
                        Justworks
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrReviewUrl("trinet")} className={linkGreen}>
                        TriNet
                      </Link>{" "}
                      can unlock better benefits pricing and lighten compliance burden—especially useful for small
                      teams without HR staff.
                    </p>
                  </div>
                </section>

                <section
                  id="how-hr-software-works"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Building your own HR stack.">How HR Software Stacks Work</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      With HR software, you stay the sole employer of record. Platforms such as{" "}
                      <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                        Gusto
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                        Rippling
                      </Link>{" "}
                      provide systems for payroll, benefits, onboarding, and people data, but your company signs the
                      filings and owns compliance.
                    </p>
                    <p>
                      This model is typically cheaper at scale and gives you more flexibility to swap tools over time,
                      but requires internal ownership—often from a founder, finance lead, or early HR hire.
                    </p>
                  </div>
                </section>

                <section
                  id="decision-guide"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Which model fits your stage?">Decision Guide: PEO vs HR Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Use this high-level framework:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Very small teams without HR headcount often benefit from a PEO for a few years, then transition to{" "}
                          <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                            Gusto
                          </Link>{" "}
                          or{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          later.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Teams with some HR capacity and cost sensitivity usually prefer HR software from the start.
                        </span>
                      </li>
                    </ul>
                    <p>
                      For next steps, shortlist options from our{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      page and read full{" "}
                      <Link href={getHrReviewUrl("justworks")} className={linkGreen}>
                        Justworks
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrReviewUrl("trinet")} className={linkGreen}>
                        TriNet
                      </Link>{" "}
                      reviews if you are considering a PEO path.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers about PEOs and HR software.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="PEOs and HR software" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
          <RelatedHrResources items={RELATED_ITEMS} excludeHref="/hr/guides/peo-vs-hr-software" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "PEO vs HR Software | BeltStack Guide",
    description:
      "Understand the differences between PEOs and HR software, including costs, responsibilities, and when each approach fits.",
  };
}


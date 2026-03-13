import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedHrResources } from "@/components/guides/RelatedHrResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getHrReviewUrl, getHrCompareUrl } from "@/lib/routes";

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
    q: "What should I look for when choosing HR software?",
    a: "Start with company size, locations, and payroll complexity. Then focus on employee experience, how well the tool handles onboarding and time off, integrations with payroll and accounting, and whether it can support your plans for remote or global hiring.",
  },
  {
    q: "How many HR tools should a small business use?",
    a: "Most small businesses are better off with one primary HR platform rather than stitching together many point solutions. As you grow, you can add focused tools for things like performance or engagement—but start with a solid core first.",
  },
  {
    q: "Should we use a PEO or HR software?",
    a: "PEOs like Justworks and TriNet bundle HR, payroll, and benefits under co-employment, which can simplify compliance at higher per-employee cost. HR software keeps you as the employer of record while giving you tools to manage people operations. Our PEO vs HR software guide explains when each path makes sense.",
  },
  {
    q: "How do I compare HR platforms side by side?",
    a: "Shortlist 2–4 tools based on your needs and budget. Use our best HR software roundup, full reviews, and comparison pages like Gusto vs BambooHR, Rippling vs Gusto, and ADP vs Paychex. Then run structured trials with real data and a small group of employees before deciding.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "SMB all-in-one",
    reviewHref: getHrReviewUrl("gusto"),
  },
  {
    name: "BambooHR",
    logoSrc: "/Logos/bamboohr.png",
    rating: 4.6,
    bestFor: "HRIS & people data",
    reviewHref: getHrReviewUrl("bamboohr"),
  },
  {
    name: "Rippling",
    logoSrc: "/Logos/rippling.jpeg",
    rating: 4.7,
    bestFor: "HR + IT platform",
    reviewHref: getHrReviewUrl("rippling"),
  },
  {
    name: "Deel",
    logoSrc: "/Logos/deel.jpeg",
    rating: 4.6,
    bestFor: "Global teams & EOR",
    reviewHref: getHrReviewUrl("deel"),
  },
];

const RELATED_ITEMS = [
  { label: "HR Software Hub", href: "/hr" },
  { label: "Best HR Software (2026)", href: "/hr/best-hr-software" },
  { label: "Compare HR Software", href: "/hr/compare" },
  { label: "HR Guides", href: "/hr/guides" },
  { label: "Gusto Review", href: getHrReviewUrl("gusto") },
  { label: "BambooHR Review", href: getHrReviewUrl("bamboohr") },
  { label: "Rippling Review", href: getHrReviewUrl("rippling") },
  { label: "Deel Review", href: getHrReviewUrl("deel") },
  { label: "Justworks Review", href: getHrReviewUrl("justworks") },
  { label: "TriNet Review", href: getHrReviewUrl("trinet") },
  { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  { label: "ADP vs Paychex", href: getHrCompareUrl("adp-vs-paychex") },
  { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
];

export default function HowToChooseHrSoftwareGuidePage() {
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
                      How to Choose HR Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Choose HR Software
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Key factors when comparing HR platforms: company size, payroll integration, hiring and onboarding
                    features, compliance support, and automation.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choosing HR software can feel overwhelming: every vendor promises to simplify people ops, automate
                      payroll, and keep you compliant. The right fit depends less on feature checklists and more on your
                      company&apos;s size, hiring footprint, and appetite for configuration. This guide walks through
                      the major decision points so you can shortlist tools with confidence.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/hr/compare" className={linkGreen}>
                        comparison hub
                      </Link>{" "}
                      to see how{" "}
                      <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                        Gusto
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                        BambooHR
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                        Rippling
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                        Deel
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("adp-workforce-now")} className={linkGreen}>
                        ADP Workforce Now
                      </Link>
                      , and{" "}
                      <Link href={getHrReviewUrl("paychex")} className={linkGreen}>
                        Paychex
                      </Link>{" "}
                      stack up in practice.
                    </p>
                  </div>
                </section>

                <section id="key-factors" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to evaluate first.">Key Factors When Choosing HR Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>These factors apply to most organizations. Weight them by your size and complexity.</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Company size and structure.</strong> Solo founder with a
                          few employees vs a 100-person team with managers and multiple locations require different
                          levels of sophistication.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Payroll and benefits.</strong> Decide whether HR should
                          include payroll (as in{" "}
                          <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                            Gusto
                          </Link>
                          ) or connect cleanly to an external provider like{" "}
                          <Link href={getHrReviewUrl("adp-workforce-now")} className={linkGreen}>
                            ADP
                          </Link>{" "}
                          or{" "}
                          <Link href={getHrReviewUrl("paychex")} className={linkGreen}>
                            Paychex
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Hiring footprint.</strong> Local-only teams can use
                          simpler tools; multi-state or global teams should evaluate platforms like{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          or{" "}
                          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                            Deel
                          </Link>{" "}
                          that handle complexity.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Employee experience.</strong> Self-service portals, mobile
                          apps, and clear pay history reduce HR tickets and improve trust.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="company-size"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Matching the tool to your stage.">Company Size and Complexity</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Map your size and growth plans to the right tier of HR software:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Under ~25 employees.</strong> All-in-one HR and payroll
                          platforms like{" "}
                          <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                            Gusto
                          </Link>{" "}
                          often provide everything you need without extra complexity.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">25–250 employees.</strong> HRIS-forward tools like{" "}
                          <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                            BambooHR
                          </Link>{" "}
                          or more modular platforms like{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          start to make sense as you add managers and more complex org structures.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Larger or highly regulated organizations.</strong> You may
                          need enterprise-grade HR suites or PEO support like{" "}
                          <Link href={getHrReviewUrl("trinet")} className={linkGreen}>
                            TriNet
                          </Link>{" "}
                          or{" "}
                          <Link href={getHrReviewUrl("justworks")} className={linkGreen}>
                            Justworks
                          </Link>
                          .
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="payroll-integration"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Picking the right payroll setup.">Payroll Integration and Benefits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Decide early whether HR and payroll should live in the same platform or be tightly integrated but
                      separate. There is no single right answer; it depends on your stack and comfort with vendor lock-in.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/hr/guides/peo-vs-hr-software" className={linkGreen}>
                        PEO vs HR software
                      </Link>{" "}
                      guide can also help if you are weighing PEOs like{" "}
                      <Link href={getHrReviewUrl("justworks")} className={linkGreen}>
                        Justworks
                      </Link>{" "}
                      or{" "}
                      <Link href={getHrReviewUrl("trinet")} className={linkGreen}>
                        TriNet
                      </Link>{" "}
                      against owning your own HR stack.
                    </p>
                  </div>
                </section>

                <section
                  id="how-to-compare"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="A practical evaluation process.">How to Compare HR Options</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Use a structured process instead of relying on demos alone:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Shortlist 2–4 tools using our{" "}
                          <Link href="/hr/best-hr-software" className={linkGreen}>
                            best HR software
                          </Link>{" "}
                          page and comparison hub, including{" "}
                          <Link href={getHrCompareUrl("gusto-vs-bamboohr")} className={linkGreen}>
                            Gusto vs BambooHR
                          </Link>
                          ,{" "}
                          <Link href={getHrCompareUrl("rippling-vs-gusto")} className={linkGreen}>
                            Rippling vs Gusto
                          </Link>
                          , and{" "}
                          <Link href={getHrCompareUrl("adp-vs-paychex")} className={linkGreen}>
                            ADP vs Paychex
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Run a small pilot with real employees for one or two pay cycles to test onboarding, time off,
                          and basic HR workflows.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Model total cost over 12–24 months, including base fees, per-employee charges, and add-ons
                          like benefits administration or advanced modules.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common HR selection questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="HR software to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
          <RelatedHrResources items={RELATED_ITEMS} excludeHref="/hr/guides/how-to-choose-hr-software" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Choose HR Software | BeltStack Guide",
    description:
      "Key factors when comparing HR platforms, plus a practical process for shortlisting and testing HR software.",
  };
}


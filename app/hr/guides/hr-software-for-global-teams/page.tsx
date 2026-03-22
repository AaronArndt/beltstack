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
    q: "What do global teams need from HR software?",
    a: "Global teams need HR tools that can handle multiple countries, currencies, and employment types. Compliance, payroll, and benefits differ by country, so you need platforms that support local regulations and make it simple to pay people accurately.",
  },
  {
    q: "Do we need an EOR provider or just global payroll?",
    a: "If you hire in countries where you do not have entities and want to avoid setting them up, you likely need an EOR provider like Deel. If you already have entities and payroll providers in place, global payroll features inside HR software may be enough.",
  },
  {
    q: "Which HR platforms are strongest for global teams?",
    a: "Vendors like Deel and Rippling focus heavily on global coverage and EOR; others, such as ADP or Paychex, also have global offerings. The best choice depends on where you hire, how many people you have in each country, and how much you value a unified platform.",
  },
  {
    q: "How should we compare global HR solutions?",
    a: "Shortlist providers that support your target countries, then compare how they handle onboarding, contracts, benefits, and payroll. Use our reviews and comparisons such as Deel vs Rippling and ADP vs Paychex, then run pilots with a small set of countries and employees.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Deel",
    logoSrc: "/Logos/deel.jpeg",
    rating: 4.6,
    bestFor: "Global teams & EOR",
    reviewHref: getHrReviewUrl("deel"),
  },
  {
    name: "Rippling",
    logoSrc: "/Logos/rippling.jpeg",
    rating: 4.7,
    bestFor: "Global HR + IT",
    reviewHref: getHrReviewUrl("rippling"),
  },
  {
    name: "ADP Workforce Now",
    logoSrc: "/Logos/adp.jpeg",
    rating: 4.3,
    bestFor: "Larger global orgs",
    reviewHref: getHrReviewUrl("adp-workforce-now"),
  },
  {
    name: "Paychex",
    logoSrc: "/Logos/paychex.jpeg",
    rating: 4.2,
    bestFor: "Payroll-focused global support",
    reviewHref: getHrReviewUrl("paychex"),
  },
];

const RELATED_ITEMS = [
  { label: "HR Software Hub", href: "/hr" },
  { label: "Best HR Software (2026)", href: "/hr/best-hr-software" },
  { label: "Compare HR Software", href: "/hr/compare" },
  { label: "HR Guides", href: "/hr/guides" },
  { label: "Deel Review", href: getHrReviewUrl("deel") },
  { label: "Rippling Review", href: getHrReviewUrl("rippling") },
  { label: "ADP Workforce Now Review", href: getHrReviewUrl("adp-workforce-now") },
  { label: "Paychex Review", href: getHrReviewUrl("paychex") },
  { label: "ADP vs Paychex", href: getHrCompareUrl("adp-vs-paychex") },
  { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
];

export default function HrSoftwareForGlobalTeamsGuidePage() {
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
                      HR Software for Global Teams
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    HR Software for Global Teams
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    How global teams handle payroll, benefits, and compliance across countries using HR software and EOR
                    providers.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      As soon as you hire in multiple countries, HR stops being a single-jurisdiction problem. Every
                      country has its own rules for contracts, time off, benefits, and payroll taxes. The right HR
                      software and partners let you support people fairly and compliantly in each location without
                      building everything from scratch.
                    </p>
                    <p>
                      This guide covers how HR software, global payroll, and employer-of-record (EOR) providers fit
                      together. We reference platforms like{" "}
                      <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                        Deel
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                        Rippling
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("adp-workforce-now")} className={linkGreen}>
                        ADP Workforce Now
                      </Link>
                      , and{" "}
                      <Link href={getHrReviewUrl("paychex")} className={linkGreen}>
                        Paychex
                      </Link>
                      . Use this guide with our{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      page and{" "}
                      <Link href="/hr/compare" className={linkGreen}>
                        comparison hub
                      </Link>{" "}
                      to evaluate your next step.
                    </p>
                  </div>
                </section>

                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The big ideas to keep in mind.">
                    Key Takeaways for Global Teams Choosing HR Software
                  </SectionTitle>
                  <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Start with where you hire today and where you expect to hire in the next 12–24 months—your
                          country mix drives which vendors make sense.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Decide whether you want to use an EOR like{" "}
                          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                            Deel
                          </Link>{" "}
                          or build your own entities and payroll relationships.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Use{" "}
                          <Link href="/hr/compare" className={linkGreen}>
                            comparison pages
                          </Link>{" "}
                          like{" "}
                          <Link href={getHrCompareUrl("deel-vs-rippling")} className={linkGreen}>
                            Deel vs Rippling
                          </Link>{" "}
                          and{" "}
                          <Link href={getHrCompareUrl("adp-vs-paychex")} className={linkGreen}>
                            ADP vs Paychex
                          </Link>{" "}
                          to understand trade-offs in coverage and approach.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="global-options"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="HR software, global payroll, and EOR.">
                    The Main Options for Global HR
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Most global teams end up using one of three patterns:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          A domestic HR platform plus an EOR like{" "}
                          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                            Deel
                          </Link>{" "}
                          for a handful of countries.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          A global HR and payroll platform such as{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          that connects entities and local providers under one umbrella.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          An enterprise provider like{" "}
                          <Link href={getHrReviewUrl("adp-workforce-now")} className={linkGreen}>
                            ADP Workforce Now
                          </Link>{" "}
                          or{" "}
                          <Link href={getHrReviewUrl("paychex")} className={linkGreen}>
                            Paychex
                          </Link>{" "}
                          with global add-ons.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="decision-guide"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="How to choose the right pattern.">
                    Decision Guide: Picking a Global HR Approach
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Use your country mix and growth expectations as the main inputs:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If you have a few people spread across many countries, an EOR-heavy model with{" "}
                          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                            Deel
                          </Link>{" "}
                          is often easiest.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If you have larger hubs in a smaller set of countries, building entities and using{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          or{" "}
                          <Link href={getHrReviewUrl("adp-workforce-now")} className={linkGreen}>
                            ADP
                          </Link>{" "}
                          may be more cost-effective long term.
                        </span>
                      </li>
                    </ul>
                    <p>
                      For a broader selection framework, see our{" "}
                      <Link href="/hr/guides/how-to-choose-hr-software" className={linkGreen}>
                        how to choose HR software
                      </Link>{" "}
                      guide and use our{" "}
                      <Link href="/hr/compare" className={linkGreen}>
                        comparison hub
                      </Link>{" "}
                      to evaluate candidates such as{" "}
                      <Link href={getHrCompareUrl("deel-vs-rippling")} className={linkGreen}>
                        Deel vs Rippling
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrCompareUrl("adp-vs-paychex")} className={linkGreen}>
                        ADP vs Paychex
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers about global HR tooling.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="HR for global teams" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
          <RelatedHrResources items={RELATED_ITEMS} excludeHref="/hr/guides/hr-software-for-global-teams" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "HR Software for Global Teams | BeltStack Guide",
    description:
      "How global teams choose HR software, payroll, and EOR providers, plus patterns and tools to evaluate.",
  };
}


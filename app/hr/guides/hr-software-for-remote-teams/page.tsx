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
    q: "What do remote teams need from HR software?",
    a: "Remote teams need HR tools that support distributed onboarding, clear time off and working hours, and compliance across locations. Employee self-service, good communication of policies, and integrations with collaboration tools matter more than in a single-office setup.",
  },
  {
    q: "Is any HR system fine for remote work?",
    a: "Most modern HR platforms can technically support remote workers, but not all make it easy. Look for strong onboarding workflows, clear PTO and holiday calendars, support for multiple locations, and good employee portals that people will actually use.",
  },
  {
    q: "Do remote teams need global HR software?",
    a: "If your remote team is spread across countries, you likely need global HR and payroll tools or an EOR provider. If everyone is remote but in the same country, a strong domestic HR and payroll platform is usually enough.",
  },
  {
    q: "Which HR platforms are good for remote teams?",
    a: "Tools like Gusto, BambooHR, Rippling, and Deel all support remote work well; the right choice depends on whether you are primarily domestic or global and how much structure you want around IT and devices.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Rippling",
    logoSrc: "/Logos/rippling.jpeg",
    rating: 4.7,
    bestFor: "Remote & hybrid teams",
    reviewHref: getHrReviewUrl("rippling"),
  },
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "US-based remote teams",
    reviewHref: getHrReviewUrl("gusto"),
  },
  {
    name: "Deel",
    logoSrc: "/Logos/deel.jpeg",
    rating: 4.6,
    bestFor: "Global remote teams",
    reviewHref: getHrReviewUrl("deel"),
  },
  {
    name: "BambooHR",
    logoSrc: "/Logos/bamboohr.png",
    rating: 4.6,
    bestFor: "HRIS & time off",
    reviewHref: getHrReviewUrl("bamboohr"),
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
  { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
];

export default function HrSoftwareForRemoteTeamsGuidePage() {
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
                      HR Software for Remote Teams
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    HR Software for Remote Teams
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    How remote and distributed teams use HR software to onboard people, manage time off, and stay
                    compliant across locations.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Remote teams rely on HR software as a central source of truth for who works where, how they are
                      paid, and what policies apply. When your team rarely sees each other in person, clear onboarding,
                      accessible self-service, and transparent PTO and holiday calendars are critical to avoid confusion
                      and burnout.
                    </p>
                    <p>
                      This guide focuses on what remote teams should look for in HR tools, with examples from{" "}
                      <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                        Rippling
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                        Gusto
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                        Deel
                      </Link>
                      , and{" "}
                      <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                        BambooHR
                      </Link>
                      . Use it alongside our{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/hr/compare" className={linkGreen}>
                        comparison pages
                      </Link>{" "}
                      like{" "}
                      <Link href={getHrCompareUrl("deel-vs-rippling")} className={linkGreen}>
                        Deel vs Rippling
                      </Link>{" "}
                      when you are ready to evaluate vendors.
                    </p>
                  </div>
                </section>

                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What matters most for distributed teams.">
                    Key Takeaways for Remote Teams Choosing HR Software
                  </SectionTitle>
                  <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Prioritize remote-friendly onboarding, self-service, and clear PTO and holiday management
                          over niche HR modules you may not use.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If your remote team is global, prioritize tools like{" "}
                          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                            Deel
                          </Link>{" "}
                          or{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          that handle multi-country payroll and compliance.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Use our{" "}
                          <Link href="/hr" className={linkGreen}>
                            HR hub
                          </Link>{" "}
                          and{" "}
                          <Link href="/hr/best-hr-software" className={linkGreen}>
                            best HR software
                          </Link>{" "}
                          guide to shortlist tools before running remote-friendly trials.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="why-remote-teams-need-hr"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Core jobs HR software should handle for distributed teams.">
                    Why Remote Teams Need the Right HR Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Remote teams use HR software to keep people aligned and supported without an office.</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Onboarding and offboarding checklists that work asynchronously across time zones.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Clear PTO, holiday, and working hours policies that integrate with calendars and payroll.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Central access to documents, policies, and compensation information.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="recommended-tools"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Good options for remote-heavy teams.">
                    HR Platforms to Consider for Remote Teams
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For US-heavy but remote teams,{" "}
                      <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                        Gusto
                      </Link>{" "}
                      plus a simple HRIS can be sufficient. For more complex setups,{" "}
                      <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                        Rippling
                      </Link>{" "}
                      provides deeper automation and IT modules.
                    </p>
                    <p>
                      For global remote teams,{" "}
                      <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                        Deel
                      </Link>{" "}
                      and similar platforms combine HR with global payroll and EOR.{" "}
                      <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                        BambooHR
                      </Link>{" "}
                      can be layered on as a people data hub if you prefer.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/hr/compare" className={linkGreen}>
                        comparison hub
                      </Link>{" "}
                      and pages like{" "}
                      <Link href={getHrCompareUrl("deel-vs-rippling")} className={linkGreen}>
                        Deel vs Rippling
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrCompareUrl("gusto-vs-bamboohr")} className={linkGreen}>
                        Gusto vs BambooHR
                      </Link>{" "}
                      to compare options for your specific mix of locations.
                    </p>
                  </div>
                </section>

                <section
                  id="decision-guide"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="A simple way to decide what to use.">
                    Decision Guide: Picking HR Software for Remote Teams
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Use your hiring footprint as your primary decision axis:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Remote but all in one country → shortlist Gusto, BambooHR, and similar tools.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Remote across several countries → shortlist Rippling, Deel, and similar global tools.</span>
                      </li>
                    </ul>
                    <p>
                      For broader selection criteria, see our{" "}
                      <Link href="/hr/guides/how-to-choose-hr-software" className={linkGreen}>
                        how to choose HR software
                      </Link>{" "}
                      guide.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers about remote HR tooling.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="HR for remote teams" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
          <RelatedHrResources items={RELATED_ITEMS} excludeHref="/hr/guides/hr-software-for-remote-teams" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "HR Software for Remote Teams | BeltStack Guide",
    description:
      "What remote and distributed teams should look for in HR software, plus recommended tools and comparison guidance.",
  };
}


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
    q: "Who should look for a BambooHR alternative?",
    a: "BambooHR is a strong HRIS for many small and midsize businesses, but you may want an alternative if you need deeper payroll, global coverage, or more modular IT and finance tools. Companies that outgrow BambooHR often evaluate Rippling, Gusto, or platforms like Deel for global teams.",
  },
  {
    q: "Is BambooHR or Gusto better?",
    a: "BambooHR leads with HRIS—employee records, PTO, performance—with payroll as an add-on. Gusto leads with payroll and benefits and adds HR features. If you already have payroll and want a clean HRIS, BambooHR can be better. If you want all-in-one HR and payroll from the start, Gusto often wins. See our Gusto vs BambooHR comparison for details.",
  },
  {
    q: "How does BambooHR compare to Rippling?",
    a: "Rippling is more modular and extends beyond HR into IT and finance. It can be more powerful for complex organizations, but also more to configure. BambooHR is narrower and simpler. Our BambooHR vs Rippling comparison covers strengths and trade-offs.",
  },
  {
    q: "How should we evaluate BambooHR alternatives?",
    a: "List your current pain points with BambooHR—payroll, integrations, reporting, global coverage—and shortlist alternatives that solve those. Use our best HR software roundup, reviews, and comparisons like Gusto vs BambooHR and BambooHR vs Rippling, then run a trial with real data before switching.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "BambooHR",
    logoSrc: "/Logos/bamboohr.png",
    rating: 4.6,
    bestFor: "HRIS & people data",
    reviewHref: getHrReviewUrl("bamboohr"),
  },
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "All-in-one HR & payroll",
    reviewHref: getHrReviewUrl("gusto"),
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
    bestFor: "Global & EOR",
    reviewHref: getHrReviewUrl("deel"),
  },
];

const RELATED_ITEMS = [
  { label: "HR Software Hub", href: "/hr" },
  { label: "Best HR Software (2026)", href: "/hr/best-hr-software" },
  { label: "Compare HR Software", href: "/hr/compare" },
  { label: "HR Guides", href: "/hr/guides" },
  { label: "BambooHR Review", href: getHrReviewUrl("bamboohr") },
  { label: "Gusto Review", href: getHrReviewUrl("gusto") },
  { label: "Rippling Review", href: getHrReviewUrl("rippling") },
  { label: "Deel Review", href: getHrReviewUrl("deel") },
  { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
  { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
];

export default function BamboohrAlternativesGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
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
                      BambooHR Alternatives
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    BambooHR Alternatives
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    BambooHR is a popular HRIS for small and midsize businesses, but it is not the only option. This
                    guide covers when BambooHR is a great fit, where it can feel limiting, and the best alternatives to
                    consider.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many teams choose{" "}
                      <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                        BambooHR
                      </Link>{" "}
                      because of its clean interface and focus on employee records, PTO, and performance. It is often
                      adopted alongside a separate payroll provider. Over time, you might find that you want deeper
                      payroll integration, more automation, or global coverage that BambooHR does not natively offer.
                    </p>
                    <p>
                      We will walk through common reasons to switch and where tools like{" "}
                      <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                        Gusto
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                        Rippling
                      </Link>
                      , and{" "}
                      <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                        Deel
                      </Link>{" "}
                      fit better. Use this guide alongside our{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      roundup and comparisons such as{" "}
                      <Link href={getHrCompareUrl("gusto-vs-bamboohr")} className={linkGreen}>
                        Gusto vs BambooHR
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrCompareUrl("bamboohr-vs-rippling")} className={linkGreen}>
                        BambooHR vs Rippling
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where BambooHR works well and where it does not.">
                    Key Takeaways on BambooHR Alternatives
                  </SectionTitle>
                  <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          BambooHR is excellent as a people data and PTO hub for small to midsize companies that are
                          comfortable pairing it with separate payroll.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If you want integrated payroll and HR in one system,{" "}
                          <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                            Gusto
                          </Link>{" "}
                          or{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          may be a better fit.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          For global-first teams or heavy contractor use,{" "}
                          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                            Deel
                          </Link>{" "}
                          is often a more natural home than BambooHR.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="when-bamboohr-fits"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Scenarios where BambooHR is still a good fit.">
                    When BambooHR Is a Great Fit
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BambooHR tends to shine when you want a straightforward HRIS with clear employee records and
                      performance tools, without an overly complex implementation.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Company size in roughly the 20–300 employee range, primarily in a few countries.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          You value clean HR workflows and people data more than deeply integrated payroll or IT
                          modules.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Your HR team wants something approachable that they can own without heavy vendor lift.</span>
                      </li>
                    </ul>
                    <p>
                      Our{" "}
                      <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                        BambooHR review
                      </Link>{" "}
                      covers these strengths plus limitations and pricing details.
                    </p>
                  </div>
                </section>

                <section
                  id="top-alternatives"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Leading alternatives to evaluate.">
                    Top BambooHR Alternatives
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>When BambooHR is not the right fit, these are common alternatives:</p>
                    <p>
                      <strong className="text-[#1A2D48]">Gusto</strong> — Better if you want payroll, benefits, and HR
                      together in one tool with a modern small-business focus.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Rippling</strong> — A more extensible platform if you want to
                      bring HR, IT, and even spend or device management together.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Deel</strong> — Stronger if your main challenge is global
                      hiring, EOR, and contractor management.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/hr/compare" className={linkGreen}>
                        HR comparisons
                      </Link>{" "}
                      and pages like{" "}
                      <Link href={getHrCompareUrl("gusto-vs-bamboohr")} className={linkGreen}>
                        Gusto vs BambooHR
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrCompareUrl("bamboohr-vs-rippling")} className={linkGreen}>
                        BambooHR vs Rippling
                      </Link>{" "}
                      to see side-by-side differences.
                    </p>
                  </div>
                </section>

                <section
                  id="decision-guide"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="How to decide whether to switch.">
                    Decision Guide: Stay with BambooHR or Move On?
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Use this simple framework:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If your issues are mostly fixable workflow problems, work with your vendor and HR team before
                          switching platforms.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If your needs fundamentally changed (e.g. global hiring, IT integration), shortlist{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          and{" "}
                          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                            Deel
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Run a structured trial with 1–2 alternatives and compare admin time, employee experience, and
                          total cost over 12–24 months.
                        </span>
                      </li>
                    </ul>
                    <p>
                      For more general selection advice, see our{" "}
                      <Link href="/hr/guides/how-to-choose-hr-software" className={linkGreen}>
                        how to choose HR software
                      </Link>{" "}
                      guide.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers on moving beyond BambooHR.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="BambooHR and alternatives" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
          <RelatedHrResources items={RELATED_ITEMS} excludeHref="/hr/guides/bamboohr-alternatives" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "BambooHR Alternatives | BeltStack Guide",
    description:
      "When BambooHR is the right HRIS, where it falls short, and the best BambooHR alternatives to evaluate.",
  };
}


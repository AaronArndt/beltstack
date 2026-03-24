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
    q: "Who should look for a Gusto alternative?",
    a: "Gusto is excellent for many small businesses, but you may want an alternative if you need deeper HRIS features, global payroll and EOR support, or a different pricing model. Companies outgrowing Gusto often evaluate BambooHR, Rippling, Deel, or PEOs like Justworks and TriNet.",
  },
  {
    q: "Is Gusto or Rippling better?",
    a: "Gusto is simpler and focused on payroll, benefits, and HR for small businesses. Rippling adds IT and device management plus more modular HR. Rippling can be a better fit for high-growth or more complex organizations, but it may be more than small teams need. See our Rippling vs Gusto comparison for a detailed breakdown.",
  },
  {
    q: "Should I switch from Gusto to a PEO?",
    a: "If you want to offload more compliance and benefits administration, a PEO like Justworks or TriNet can make sense. However, PEOs usually cost more per employee and involve a co-employment model. Evaluate them alongside software-only options using our PEO vs HR software guide.",
  },
  {
    q: "How do I compare Gusto alternatives?",
    a: "List where Gusto falls short—global coverage, HR depth, or IT—and shortlist tools that solve those gaps. Use our best HR software roundup, full reviews, and comparisons like Gusto vs BambooHR and Rippling vs Gusto to see side-by-side differences before running a trial.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "All-in-one HR & payroll",
    reviewHref: getHrReviewUrl("gusto"),
  },
  {
    name: "BambooHR",
    logoSrc: "/Logos/bamboohr.png",
    rating: 4.6,
    bestFor: "HRIS focus",
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
    bestFor: "Global & EOR",
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
  { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  { label: "Gusto vs Rippling", href: getHrCompareUrl("gusto-vs-rippling") },
  { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
];

export default function GustoAlternativesGuidePage() {
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
                      Gusto Alternatives
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Gusto Alternatives
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Gusto is one of the most popular HR and payroll platforms for small businesses—but it is not the
                    right fit for every team. This guide walks through where Gusto excels, where it falls short, and the
                    best alternatives to consider.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you are already using{" "}
                      <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                        Gusto
                      </Link>{" "}
                      or shortlisting it, you are likely drawn to its clean design, all-in-one approach, and clear
                      pricing. For many small businesses, it remains our top recommendation. But some companies outgrow
                      Gusto or need capabilities that it does not prioritize, such as advanced HRIS features, global
                      payroll, or IT management.
                    </p>
                    <p>
                      Use this guide alongside our{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      roundup, full{" "}
                      <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                        BambooHR
                      </Link>
                      ,{" "}
                      <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                        Rippling
                      </Link>
                      , and{" "}
                      <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                        Deel
                      </Link>{" "}
                      reviews, and comparison pages like{" "}
                      <Link href={getHrCompareUrl("gusto-vs-bamboohr")} className={linkGreen}>
                        Gusto vs BambooHR
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrCompareUrl("rippling-vs-gusto")} className={linkGreen}>
                        Rippling vs Gusto
                      </Link>{" "}
                      to decide whether you should stick with Gusto or switch.
                    </p>
                  </div>
                </section>

                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where Gusto shines and where alternatives make sense.">
                    Key Takeaways on Gusto Alternatives
                  </SectionTitle>
                  <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Gusto is ideal for many US-based small businesses that want simple, integrated payroll,
                          benefits, and HR—but it is less focused on advanced HRIS or global employment.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Alternatives like{" "}
                          <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                            BambooHR
                          </Link>{" "}
                          and{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          make sense when you want deeper HRIS features, IT modules, or more configurability.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If global hiring or EOR is the priority,{" "}
                          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                            Deel
                          </Link>{" "}
                          is often a better starting point than Gusto.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="when-gusto-fits"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Scenarios where Gusto is still the right answer.">
                    When Gusto Is a Great Fit
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Before looking elsewhere, confirm whether Gusto already meets your needs. For many employers with
                      5–150 employees, it still hits the sweet spot between power and simplicity.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Primarily US-based employees, with straightforward payroll and benefits.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Need for clear pay stubs, tax filings, and simple employee self-service, more than custom HR
                          workflows.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Limited internal HR headcount; you want minimal configuration work.</span>
                      </li>
                    </ul>
                    <p>
                      Our{" "}
                      <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                        Gusto review
                      </Link>{" "}
                      and{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      guide cover these strengths in more detail.
                    </p>
                  </div>
                </section>

                <section
                  id="top-alternatives"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Who to look at instead of or alongside Gusto.">
                    Top Gusto Alternatives
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you have outgrown Gusto or need a different shape of platform, start with these alternatives:
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">BambooHR</strong> — A cleaner HRIS with stronger people data,
                      PTO, and performance modules. Pairs well with separate payroll if you want HR at the center.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Rippling</strong> — An HR and IT platform that adds device and
                      app management plus more modular HR features. A strong pick for scaling and more complex org
                      structures.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Deel</strong> — Built for global payroll, EOR, and contractor
                      management. Often a better fit than Gusto if you already have a distributed team across
                      countries.
                    </p>
                    <p>
                      Compare these in our{" "}
                      <Link href="/hr/compare" className={linkGreen}>
                        HR comparison hub
                      </Link>{" "}
                      and pages like{" "}
                      <Link href={getHrCompareUrl("gusto-vs-bamboohr")} className={linkGreen}>
                        Gusto vs BambooHR
                      </Link>
                      ,{" "}
                      <Link href={getHrCompareUrl("bamboohr-vs-rippling")} className={linkGreen}>
                        BambooHR vs Rippling
                      </Link>
                      , and{" "}
                      <Link href={getHrCompareUrl("deel-vs-rippling")} className={linkGreen}>
                        Deel vs Rippling
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section
                  id="decision-guide"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="How to choose between Gusto and its alternatives.">
                    Decision Guide: Stay with Gusto or Switch?
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Use these prompts to decide what to do next:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If your main pain is global hiring, shortlist{" "}
                          <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                            Deel
                          </Link>{" "}
                          and{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          before anything else.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If you want deeper HRIS and performance but like your payroll, consider{" "}
                          <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                            BambooHR
                          </Link>{" "}
                          plus your existing payroll provider.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If Gusto fits 80% of your needs and you are under 100 employees, it may still be the most
                          efficient choice—optimize workflows before switching.
                        </span>
                      </li>
                    </ul>
                    <p>
                      For broader context, our{" "}
                      <Link href="/hr/guides/how-to-choose-hr-software" className={linkGreen}>
                        how to choose HR software
                      </Link>{" "}
                      guide walks through a full evaluation process.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers on switching from Gusto.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Gusto and alternatives" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
          <RelatedHrResources items={RELATED_ITEMS} excludeHref="/hr/guides/gusto-alternatives" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Gusto Alternatives | BeltStack Guide",
    description:
      "When to stay with Gusto vs switch, plus the best Gusto alternatives for deeper HR, IT, or global capabilities.",
  };
}


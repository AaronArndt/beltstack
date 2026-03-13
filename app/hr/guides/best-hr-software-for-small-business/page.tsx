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
    q: "What is the best HR software for small businesses?",
    a: "It depends on your size and needs, but Gusto, BambooHR, and Rippling are strong defaults for many small businesses. Gusto is great if you want payroll, benefits, and HR in one place. BambooHR fits teams that want a clean HRIS with strong people data and performance. Rippling is best when you want HR plus IT and device management on the same platform.",
  },
  {
    q: "Do small businesses need HR software or just payroll?",
    a: "If you only cut paychecks for a handful of employees, payroll-only tools can be enough. Once you’re tracking PTO, onboarding, documents, and performance, dedicated HR software makes more sense. Many small businesses start with payroll and add HR features as headcount grows past 10–20 people.",
  },
  {
    q: "How much does HR software cost for small business?",
    a: "Most small-business HR platforms start around $30–$60 per month plus a per-employee fee. Costs increase as you add headcount, benefits administration, and more advanced modules like performance or learning. Model pricing at your expected size 12–18 months from now, not just today.",
  },
  {
    q: "Can small businesses use PEOs instead of HR software?",
    a: "Yes. PEOs like Justworks and TriNet bundle HR, payroll, and benefits under a co-employment model. They can be a fit if you want to offload more risk and administration, but they are usually more expensive per employee and less flexible than owning your own HR stack.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: 4.8,
    bestFor: "Best overall for SMBs",
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
  { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
];

export default function BestHrSoftwareForSmallBusinessGuidePage() {
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
                      Best HR Software for Small Business
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Best HR Software for Small Business
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    How small businesses choose HR software that covers payroll, benefits, onboarding, and people ops
                    without overpaying for enterprise features they will never use.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most small businesses adopt HR software when spreadsheets and ad-hoc processes start to break:
                      onboarding takes too long, people information lives in too many places, and payroll or compliance
                      tasks feel fragile. The right platform gives you a single system for employee records, payroll,
                      benefits, and time off—without forcing you into a complex enterprise stack.
                    </p>
                    <p>
                      This guide focuses on HR platforms that fit small businesses with roughly 5–150 employees. Use it
                      alongside our{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      roundup, the{" "}
                      <Link href="/hr" className={linkGreen}>
                        HR software hub
                      </Link>
                      , and{" "}
                      <Link href="/hr/compare" className={linkGreen}>
                        head-to-head HR comparisons
                      </Link>{" "}
                      like{" "}
                      <Link href={getHrCompareUrl("gusto-vs-bamboohr")} className={linkGreen}>
                        Gusto vs BambooHR
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrCompareUrl("rippling-vs-gusto")} className={linkGreen}>
                        Rippling vs Gusto
                      </Link>{" "}
                      to shortlist the best options for your team.
                    </p>
                  </div>
                </section>

                <section
                  id="key-takeaways"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Quick guidance before you dive deeper.">Key Takeaways</SectionTitle>
                  <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Match HR software to stage.</strong> Very small teams may
                          only need payroll; once you manage PTO, onboarding, and documents, all-in-one HR software
                          becomes worth it.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Prioritize usability and payroll fit.</strong> If your
                          team cannot navigate the HR portal or payroll feels clunky, adoption will suffer. Test
                          employee self-service and pay runs early.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Watch per-employee pricing.</strong> Most vendors charge a
                          base fee plus a per-employee price. Model cost at your expected headcount in 12–24 months,
                          not just today.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Use reviews and comparisons.</strong> Our{" "}
                          <Link href="/hr/best-hr-software" className={linkGreen}>
                            best HR software
                          </Link>{" "}
                          guide and full reviews for{" "}
                          <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                            Gusto
                          </Link>
                          ,{" "}
                          <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                            BambooHR
                          </Link>
                          , and{" "}
                          <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                            Rippling
                          </Link>{" "}
                          show trade-offs in more detail.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="what-small-businesses-need"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Core jobs HR software should handle.">
                    What Small Businesses Need from HR Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      At a minimum, HR software for small business should centralize employee records, support basic
                      onboarding, track time off, and connect cleanly to payroll. As you grow, performance reviews,
                      org charts, and benefits administration become more important—but don’t overbuy modules you
                      won’t use for years.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Central employee records.</strong> A single profile per
                          employee that stores contact details, job information, documents, and comp history. Tools like{" "}
                          <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                            BambooHR
                          </Link>{" "}
                          excel here.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Onboarding and offboarding.</strong> Checklists, e-sign
                          documents, and tasks to get new hires productive quickly—and to remove access cleanly when
                          people leave.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Time off and attendance.</strong> PTO requests, approvals,
                          and balances in one place, ideally syncing to calendars and payroll.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Payroll integration.</strong> Either native payroll (as in{" "}
                          <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                            Gusto
                          </Link>
                          ) or a reliable integration to your payroll provider so data flows without double entry.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="recommended-tools"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Good starting points by scenario.">
                    Recommended HR Platforms for Small Businesses
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For many small businesses, a short list of HR platforms covers most needs. Use this as a starting
                      point, then read full reviews and run short trials.
                    </p>
                    <p>
                      <Link href={getHrReviewUrl("gusto")} className={linkGreen}>
                        Gusto
                      </Link>{" "}
                      is our default recommendation when you want payroll, benefits, and HR in one place. It is designed
                      for small businesses, with straightforward pricing and a modern employee experience.
                    </p>
                    <p>
                      <Link href={getHrReviewUrl("bamboohr")} className={linkGreen}>
                        BambooHR
                      </Link>{" "}
                      makes sense if you already have payroll elsewhere or want a strong HRIS first. Its people data,
                      PTO tracking, and performance modules are approachable for small teams.
                    </p>
                    <p>
                      Choose{" "}
                      <Link href={getHrReviewUrl("rippling")} className={linkGreen}>
                        Rippling
                      </Link>{" "}
                      if you expect to grow quickly or want HR and IT together—managing devices and apps in the same
                      system as HR data.{" "}
                      <Link href={getHrReviewUrl("deel")} className={linkGreen}>
                        Deel
                      </Link>{" "}
                      is stronger if you’re already hiring globally and need EOR support.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/hr/best-hr-software" className={linkGreen}>
                        best HR software
                      </Link>{" "}
                      roundup and comparison pages such as{" "}
                      <Link href={getHrCompareUrl("gusto-vs-bamboohr")} className={linkGreen}>
                        Gusto vs BambooHR
                      </Link>{" "}
                      and{" "}
                      <Link href={getHrCompareUrl("bamboohr-vs-rippling")} className={linkGreen}>
                        BambooHR vs Rippling
                      </Link>{" "}
                      walk through these trade-offs in more detail.
                    </p>
                  </div>
                </section>

                <section
                  id="how-to-decide"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="A simple evaluation process.">
                    How to Decide on HR Software as a Small Business
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Use a simple, repeatable process instead of chasing features.</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          List 3–5 non-negotiables: e.g. integrated payroll, employee self-service, and basic
                          performance reviews.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Shortlist 2–4 tools using our{" "}
                          <Link href="/hr/best-hr-software" className={linkGreen}>
                            best HR software
                          </Link>{" "}
                          guide and{" "}
                          <Link href="/hr/compare" className={linkGreen}>
                            comparison hub
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Run a trial with real data for one or two pay periods. Have at least one manager and one
                          employee test the experience.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Compare total 12–24 month cost, including base fees, per-employee pricing, and any add-ons.
                        </span>
                      </li>
                    </ul>
                    <p>
                      For a more general framework, see our{" "}
                      <Link href="/hr/guides/how-to-choose-hr-software" className={linkGreen}>
                        how to choose HR software
                      </Link>{" "}
                      guide.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers for small business owners.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="HR software to compare"
                items={SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
          <RelatedHrResources
            items={RELATED_ITEMS}
            excludeHref="/hr/guides/best-hr-software-for-small-business"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best HR Software for Small Business | BeltStack Guide",
    description:
      "How small businesses choose HR software for payroll, benefits, onboarding, and compliance, with practical recommendations and comparison guidance.",
  };
}


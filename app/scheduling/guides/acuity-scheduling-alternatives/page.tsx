import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "Is SimplyBook.me a good Acuity alternative?",
    a: "Yes. SimplyBook.me offers custom forms, industry templates, and multi-staff support at a lower price than Acuity. Setup can take longer; Acuity is more polished out of the box.",
  },
  {
    q: "Can I get Acuity-like features for less?",
    a: "SimplyBook.me and Setmore offer overlapping features at lower cost. Setmore has a free tier but less customization; SimplyBook.me has more customization and often undercuts Acuity on price.",
  },
  {
    q: "When should I stick with Acuity instead of switching?",
    a: "If you’re already on Acuity and rely heavily on its intake forms, packages, and support, switching may not be worth the migration effort. If you’re evaluating from scratch or need to cut cost, compare alternatives first.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Customization & value", reviewHref: getSchedulingReviewUrl("simplybookme") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Simpler setup", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Free tier & service biz", reviewHref: getSchedulingReviewUrl("setmore") },
];

export default function AcuitySchedulingAlternativesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Scheduling</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Acuity Scheduling Alternatives</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Acuity Scheduling Alternatives
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Alternatives to Acuity Scheduling when you want different pricing, simpler setup, or similar intake forms and packages from another provider.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link> is a strong choice for consultants and coaches who need intake forms, packages, and payment at booking. If you want lower cost, simpler setup, or a different feature mix, alternatives like <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>, <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>, and <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> are worth comparing. This guide outlines when each alternative makes sense.
                    </p>
                    <p>
                      See our{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link> roundup and{" "}
                      <Link href="/scheduling/compare/calendly-vs-acuity-scheduling" className={linkGreen}>Calendly vs Acuity</Link> and{" "}
                      <Link href="/scheduling/compare/acuity-scheduling-vs-setmore" className={linkGreen}>Acuity vs Setmore</Link> comparisons. Browse all{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>scheduling guides</Link> and the{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare hub</Link>.
                    </p>
                  </div>
                </section>
                <section id="alternatives-by-priority" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choose based on what you need.">Alternatives by Priority</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Similar features, lower price:</strong> <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> offers custom forms, industry templates, and multi-staff support at a lower price than Acuity. You give up some polish and may spend more time on setup. Compare <Link href="/scheduling/compare/simplybookme-vs-setmore" className={linkGreen}>SimplyBook.me vs Setmore</Link> if you’re also considering Setmore.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Simpler setup, fewer features:</strong> <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> is easier to set up and widely recognized. It doesn’t offer Acuity-level intake forms or packages—choose Calendly when you don’t need those and want minimal configuration.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Free tier or minimal cost:</strong> <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> has a free plan and lower-cost paid tiers. It’s a good Acuity alternative when you need basic booking and payments without heavy forms or packages. See our <Link href="/scheduling/compare/acuity-scheduling-vs-setmore" className={linkGreen}>Acuity vs Setmore</Link> comparison for a head-to-head.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Scheduling tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Acuity Scheduling Alternatives | BeltStack Guide",
    description: "Alternatives to Acuity Scheduling: SimplyBook.me, Calendly, Setmore for different pricing and feature needs.",
  };
}

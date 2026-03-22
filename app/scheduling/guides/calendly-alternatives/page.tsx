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
    q: "What is the best Calendly alternative for teams?",
    a: "YouCanBook.me offers strong round-robin and team scheduling at competitive pricing. Calendly’s team features are on paid tiers; YouCanBook.me often costs less for multi-person booking.",
  },
  {
    q: "What is the best Calendly alternative for consultants with intake forms?",
    a: "Acuity Scheduling and SimplyBook.me offer intake forms, packages, and payment at booking. Acuity is more polished; SimplyBook.me is often cheaper for similar customization.",
  },
  {
    q: "Is there a free Calendly alternative?",
    a: "Setmore has a free tier for solo use. Calendly also has a free plan. If you want a different UX or more features on the free tier (e.g. recurring appointments), Setmore is a solid alternative.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Teams & round-robin", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Free tier & value", reviewHref: getSchedulingReviewUrl("setmore") },
];

export default function CalendlyAlternativesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Calendly Alternatives</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Calendly Alternatives
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Alternatives to Calendly for different needs: more customization, lower cost, better team scheduling, or stronger intake forms and packages.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> is the default choice for many professionals, but it’s not the only option. Depending on your needs—lower cost, more customization, intake forms, packages, or team scheduling—alternatives like <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link>, <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link>, and <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> may fit better. This guide helps you choose.
                    </p>
                    <p>
                      Compare options in our{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link> roundup and head-to-head{" "}
                      <Link href="/scheduling/compare/calendly-vs-acuity-scheduling" className={linkGreen}>Calendly vs Acuity</Link> and{" "}
                      <Link href="/scheduling/compare/calendly-vs-youcanbookme" className={linkGreen}>Calendly vs YouCanBook.me</Link> comparisons. See our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare hub</Link> for more.
                    </p>
                  </div>
                </section>
                <section id="by-use-case" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Match the tool to your priority.">Alternatives by Use Case</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">More customization and intake forms:</strong> <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link> offers custom forms, packages, and group classes. <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> delivers similar flexibility at a lower price. Both are strong Calendly alternatives when you need more than a simple booking link.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Team scheduling and round-robin:</strong> <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> is built for teams, with round-robin and collective availability often at a lower cost than Calendly’s team tiers. See our <Link href="/scheduling/compare/calendly-vs-youcanbookme" className={linkGreen}>Calendly vs YouCanBook.me</Link> comparison.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Free or low-cost start:</strong> <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> has a free tier for solo use and paid plans that stay competitive. Good for service businesses and anyone who wants to minimize cost while still getting reminders and payments.
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
    title: "Calendly Alternatives | BeltStack Guide",
    description: "Alternatives to Calendly: Acuity, YouCanBook.me, Setmore, and SimplyBook.me for customization, teams, and value.",
  };
}

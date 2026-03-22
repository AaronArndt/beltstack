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
    q: "What is round-robin scheduling?",
    a: "Round-robin lets clients book with “any available team member” so appointments are distributed evenly. YouCanBook.me and Calendly (on team plans) support round-robin; useful for support, sales, or consulting teams.",
  },
  {
    q: "Which scheduling software is best for teams?",
    a: "YouCanBook.me is strong for team scheduling and round-robin at competitive pricing. Calendly’s team features are on paid tiers and are widely recognized. Compare Calendly vs YouCanBook.me for a head-to-head.",
  },
  {
    q: "Do teams need buffer time between appointments?",
    a: "Buffer time prevents back-to-back bookings so staff have time to prepare or wrap up. YouCanBook.me, Calendly, and most team-capable tools support buffer time between appointments.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Teams & round-robin", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Team plans", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Multi-staff", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

export default function SchedulingSoftwareForTeamsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Scheduling Software for Teams</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Scheduling Software for Teams
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    What to look for when multiple people take bookings: round-robin, collective availability, buffer time, and team-friendly pricing.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When more than one person takes bookings, you need scheduling software that supports team availability, round-robin (clients book with any available member), or both. Tools like <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> and <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> handle this; the right choice depends on budget, brand recognition, and how much you rely on round-robin vs per-person booking. This guide walks through what to look for and how the options compare.
                    </p>
                    <p>
                      See our{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link> roundup and{" "}
                      <Link href="/scheduling/compare/calendly-vs-youcanbookme" className={linkGreen}>Calendly vs YouCanBook.me</Link> comparison. Browse the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>compare hub</Link> for more matchups.
                    </p>
                  </div>
                </section>
                <section id="round-robin-and-availability" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How team scheduling works.">Round-Robin and Collective Availability</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Round-robin</strong> lets clients book with “any available team member” so work is distributed evenly. <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> makes this a core feature; <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> offers it on team plans. Useful for support, sales, and consulting teams where the client doesn’t need to choose a specific person.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Per-person booking</strong> lets clients pick a specific team member. Most tools support both: one booking type for “anyone” and another for “choose a person.” Buffer time between appointments is important so staff aren’t stacked back-to-back; YouCanBook.me and Calendly both support buffer time.
                    </p>
                    <p>
                      Compare <Link href="/scheduling/compare/calendly-vs-youcanbookme" className={linkGreen}>Calendly vs YouCanBook.me</Link> for team use: YouCanBook.me often costs less for comparable team features; Calendly has stronger brand recognition and a simpler solo experience. <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link> supports multiple staff and locations if you also need intake forms and packages.
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
    title: "Scheduling Software for Teams | BeltStack Guide",
    description: "What to look for when multiple people take bookings: round-robin, collective availability, buffer time, and team-friendly pricing.",
  };
}

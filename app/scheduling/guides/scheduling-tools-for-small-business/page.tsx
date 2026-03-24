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
    q: "What is the best free scheduling software for small business?",
    a: "Calendly and Setmore offer free tiers that work for one user or one event type. Setmore is popular with service businesses (salons, clinics); Calendly is widely recognized and easy to set up.",
  },
  {
    q: "When should a small business upgrade from free scheduling software?",
    a: "Upgrade when you need multiple staff, more meeting types, removal of vendor branding, or features like intake forms and packages. Compare paid plans in our best scheduling software roundup.",
  },
  {
    q: "Do small businesses need team scheduling?",
    a: "If more than one person takes bookings, look for round-robin or collective availability so clients can book with any available team member. YouCanBook.me and Calendly (paid) support this.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Simple booking & teams", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Free tier & service biz", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Customization & value", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

export default function SchedulingToolsForSmallBusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Scheduling</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Scheduling Tools for Small Business</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Scheduling Tools for Small Business
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How small businesses evaluate scheduling software for one or a few staff, including free tiers, team features, and when to upgrade.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses often start with one person handling appointments and grow to two or more. Scheduling software should support that progression: a free or low-cost tier for solo use, and clear upgrade paths when you add staff or need more meeting types, reminders, or payments. This guide walks through what to look for and how tools like <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>, <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>, and <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> fit different small-business needs.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link> roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link> to compare options side by side.
                    </p>
                  </div>
                </section>
                <section id="free-tiers-and-upgrades" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Starting small, scaling when needed.">Free Tiers and When to Upgrade</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> both offer free plans: Calendly for one event type, Setmore for one user. That’s enough for many solo operators. When you add a second person or need multiple event types (e.g. 30-minute vs 60-minute sessions), you’ll typically move to a paid plan. Compare <Link href="/scheduling/compare/simplybookme-vs-setmore" className={linkGreen}>SimplyBook.me vs Setmore</Link> if you want more customization at a similar price point.
                    </p>
                    <p>
                      Paid plans usually add team scheduling, removal of vendor branding, more integrations, and sometimes intake forms or payments. Model cost at your current size and at the size you expect in 12–18 months so you don’t outgrow the tool too quickly or overpay for features you won’t use yet.
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
    title: "Scheduling Tools for Small Business | BeltStack Guide",
    description: "How small businesses choose scheduling software: free tiers, team features, and when to upgrade. Compare Calendly, Setmore, SimplyBook.me.",
  };
}

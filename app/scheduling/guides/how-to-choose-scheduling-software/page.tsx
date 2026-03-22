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
    q: "What should I look for when choosing scheduling software?",
    a: "Focus on calendar sync with the tools you use, a simple booking link or embed, automated reminders, and—if you have multiple staff—team or round-robin scheduling. Add intake forms and payments if you’re a consultant or service business.",
  },
  {
    q: "Do I need a free tier or paid scheduling software?",
    a: "Many solo users can start with a free tier (Calendly or Setmore). Upgrade when you need multiple event types, multiple staff, removal of branding, or features like intake forms and packages.",
  },
  {
    q: "How important are integrations with CRM and calendar?",
    a: "Calendar sync is essential so you don’t double-book. CRM and video integrations matter if you want bookings to create pipeline records or auto-join video calls. Check that the tool integrates with your existing stack.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Best overall for most", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Consultants & forms", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Teams", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service businesses", reviewHref: getSchedulingReviewUrl("setmore") },
];

export default function HowToChooseSchedulingSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How to Choose Scheduling Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Choose Scheduling Software
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Key factors when comparing scheduling tools: calendar integrations, booking automation, reminders, team scheduling, pricing, and integrations.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choosing scheduling software starts with how you book today: one person or a team, simple meetings or intake forms and packages, and whether you need payment at booking. This guide walks through the main factors so you can shortlist and compare tools with confidence.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link> roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link> to see how{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>, and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> stack up.
                    </p>
                  </div>
                </section>
                <section id="key-factors" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to evaluate first.">Key Factors When Choosing Scheduling Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Weight these by whether you’re solo or a team, and whether you need simple booking or forms and packages.</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Calendar integrations</strong> — Sync with Google, Outlook, or Apple so availability stays accurate and you avoid double-booking. Two-way sync is standard.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Booking automation</strong> — A shareable link or embed, buffer time between appointments, and different meeting types so clients pick a time without email back-and-forth.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Customer notifications</strong> — Automated reminders (email and optionally SMS) reduce no-shows. Confirmations and reschedule/cancel flows keep everyone aligned.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Team scheduling</strong> — If multiple people take bookings, you need round-robin or collective availability. Compare <Link href="/scheduling/compare/calendly-vs-youcanbookme" className={linkGreen}>Calendly vs YouCanBook.me</Link> for team use.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Pricing and integrations</strong> — Free tiers, paid plans by event type or staff, and integrations with CRM, payment processors, and video tools. Model cost at your expected volume.</span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="how-to-compare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical comparison steps.">How to Compare Scheduling Options</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Shortlist two to four tools based on your use case (solo vs team, simple vs forms/packages). Read our <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link> roundup and full reviews for <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>, <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity</Link>, <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link>, <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>, and <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>. Use our <Link href="/scheduling/compare" className={linkGreen}>comparison pages</Link> for head-to-head matchups. Run a free trial with real availability and at least one or two meeting types before you commit.
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
    title: "How to Choose Scheduling Software | BeltStack Guide",
    description: "Key factors when comparing scheduling tools: calendar sync, booking automation, reminders, team scheduling, pricing, and integrations.",
  };
}

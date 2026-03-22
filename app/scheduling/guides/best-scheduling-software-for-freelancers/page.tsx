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
    q: "Do freelancers need paid scheduling software?",
    a: "Many freelancers can start with a free tier (e.g. Calendly or Setmore) for one event type and one calendar. Upgrade when you need multiple meeting types, removal of branding, or team features.",
  },
  {
    q: "What is the best free scheduling app for freelancers?",
    a: "Calendly and Setmore both offer free plans that work for solo use. Calendly is more widely recognized by clients; Setmore adds recurring appointments and is popular with service-based freelancers.",
  },
  {
    q: "How do I choose scheduling software as a freelancer?",
    a: "Prioritize calendar sync with the calendar you use, a simple booking link or embed, automated reminders, and cost. If you only need one meeting type, a free tier is often enough.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Best overall for freelancers", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Free tier & service freelancers", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Consultants & intake forms", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

export default function BestSchedulingSoftwareForFreelancersPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Best Scheduling Software for Freelancers</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Best Scheduling Software for Freelancers
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    How freelancers and solo professionals can choose scheduling software that fits one-person booking, calendar sync, and client reminders without overpaying.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Freelancers and solo professionals often spend more time than they’d like on “when are you free?” emails. Scheduling software automates that: you share a link, clients pick a time, and the tool syncs with your calendar and sends reminders. The right choice depends on how many meeting types you need, whether you want a free tier, and how much customization matters.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link> roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link> to see how tools like{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>, and{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link> stack up for solo use.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick reference.">Key Takeaways</SectionTitle>
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Free tiers</strong> — Calendly and Setmore offer free plans for one event type or one user; often enough for freelancers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Calendar sync</strong> — Ensure the tool syncs with Google Calendar, Outlook, or whatever you use so you avoid double-booking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Reminders</strong> — Automated email (and optionally SMS) reminders cut no-shows and reduce back-and-forth.</span>
                    </li>
                  </ul>
                </section>
                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What matters for solo use.">What to Look For</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For most freelancers, the must-haves are a booking link or embed, two-way calendar sync, and reminders. A free tier that supports one meeting type is often sufficient. If you offer multiple session lengths or need intake forms (e.g. for consultants or coaches), consider <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link> or a tool with built-in forms—though that usually means a paid plan.
                    </p>
                    <p>
                      Compare <Link href="/scheduling/compare/calendly-vs-acuity-scheduling" className={linkGreen}>Calendly vs Acuity Scheduling</Link> if you’re deciding between simplicity and customization. For a free or low-cost start, <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> is a solid option for service-oriented freelancers.
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
    title: "Best Scheduling Software for Freelancers | BeltStack Guide",
    description: "How freelancers choose scheduling software: free tiers, calendar sync, reminders, and tools like Calendly, Setmore, and Acuity.",
  };
}

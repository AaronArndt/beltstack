import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getCrmCompareUrl, getCrmReviewUrl, getSchedulingCompareUrl, getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "Is scheduling software part of a CRM?",
    a: "Sometimes. HubSpot, Salesforce, and Zoho bundle meeting links or booking modules with CRM, but dedicated schedulers like Calendly usually offer deeper availability rules, buffers, and public booking UX. Treat bundled scheduling as a convenience add-on until you test your real booking workflow.",
  },
  {
    q: "Which do I buy first, CRM or scheduling software?",
    a: "If pipeline visibility and follow-up are the bottleneck, start with CRM. If double-bookings and no-shows on discovery calls or client sessions are burning the team, start with scheduling. Many B2B teams add CRM first and layer Calendly-style booking when sales meetings multiply.",
  },
  {
    q: "Can CRM replace Calendly?",
    a: "For basic meeting links tied to contacts, often yes. For branded intake forms, round-robin across reps, payment at booking, or complex buffers, dedicated scheduling tools usually win. Compare CRM-native booking against Calendly on your must-have rules before consolidating.",
  },
  {
    q: "Do I need both CRM and scheduling software?",
    a: "Not always. Solo consultants may live in one tool; growing sales teams often want CRM for pipeline and a scheduler for fair meeting distribution. Integration matters more than vendor count—confirm booked meetings attach to the right contact or deal record.",
  },
  {
    q: "Where can I compare specific CRM and scheduling vendors?",
    a: "Use our CRM comparisons and scheduling comparisons, then read individual reviews. This guide stays category-level so it stays accurate as vendors bundle and unbundle modules.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: "4.6", bestFor: "CRM + meeting tools", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Dedicated booking", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Zoho Bookings", logoSrc: "/Logos/zoho.png", rating: "4.3", bestFor: "CRM-triggered booking", reviewHref: getSchedulingReviewUrl("zoho-bookings") },
];

const PAGE_HREF = "/scheduling/guides/crm-vs-scheduling-software";

export default function CrmVsSchedulingSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-8">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pb-4 pt-8">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Scheduling</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">CRM vs scheduling software</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    CRM vs Scheduling Software
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How customer relationship management and appointment scheduling differ, where vendors overlap, and
                    when you need one tool or a connected stack.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buyers comparing CRM and scheduling software are usually untangling demos that both claim to
                      &ldquo;know the customer&rdquo; and &ldquo;book meetings.&rdquo; The distinction is workflow: CRM
                      systems center revenue activities—leads, opportunities, activities, quotes, and account history.
                      Scheduling software centers the moment someone picks a time slot—availability rules, buffers,
                      reminders, and public booking pages.
                    </p>
                    <p>
                      Overlap grows as CRM vendors add meeting links and schedulers add CRM sync. Functionally, though,
                      CRM optimizes pipeline velocity and account context; scheduling optimizes calendar placement and
                      no-show reduction. You can buy both from one suite or run best-of-breed with integration—either
                      works if booked meetings land on the right contact record.
                    </p>
                    <p>
                      For how booking rules execute without manual email, read{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>
                      . When your calendar question is customer appointments versus internal shifts—not CRM pipeline—see{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        appointment scheduling vs employee scheduling
                      </Link>
                      .
                    </p>
                    <p>
                      Compare vendors on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>, and{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup. For CRM shortlists, start on the{" "}
                      <Link href="/crm" className={linkGreen}>CRM hub</Link> and{" "}
                      <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link>, then read reviews such as{" "}
                      <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> when you
                      need depth on each category.
                    </p>
                  </div>
                </section>
                <section id="crm" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Pipeline, contacts, and revenue context.">What CRM Software Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM is the system of record for who you are selling to and where each deal stands. It tracks leads,
                      stages, activities, quotes, and often marketing automation or service tickets. Sales and success
                      teams live here for forecasting, handoffs, and account history—not for enforcing booking buffers
                      or sending SMS reminders before a haircut.
                    </p>
                    <p>
                      Explore the{" "}
                      <Link href="/crm" className={linkGreen}>CRM hub</Link>,{" "}
                      <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>, and{" "}
                      <Link href={getCrmCompareUrl("hubspot-vs-pipedrive")} className={linkGreen}>
                        HubSpot vs Pipedrive
                      </Link>{" "}
                      when pipeline visibility is the primary pain. Tools like{" "}
                      <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> and{" "}
                      <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> compete on
                      ease of use versus enterprise depth—not on salon-style self-serve booking UX.
                    </p>
                  </div>
                </section>
                <section id="scheduling" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Slots, rules, and customer-facing booking.">What Scheduling Software Owns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling software puts customers or colleagues into confirmed time blocks without back-and-forth
                      email. It enforces availability windows, minimum notice, buffers between meetings, round-robin
                      across reps, intake forms, and automated confirmations. That job-to-be-done is narrower than CRM
                      but deeper on calendar mechanics.
                    </p>
                    <p>
                      Compare{" "}
                      <Link href={getSchedulingCompareUrl("calendly-vs-acuity-scheduling")} className={linkGreen}>
                        Calendly vs Acuity Scheduling
                      </Link>{" "}
                      and read{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> or{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      reviews when branding, payments at booking, or team routing matter. For a category definition,
                      start with{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="overlap" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Meeting links, sync, and duplicate data.">Where CRM and Scheduling Overlap</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many CRMs embed scheduling: HubSpot meetings, Salesforce Scheduler, Zoho Bookings. Dedicated
                      schedulers reverse-sync booked events into CRM contacts and deals. The risk is assuming overlap
                      equals equivalence—native CRM booking may lack advanced round-robin, collective availability, or
                      service-business templates that Calendly-class tools ship by default.
                    </p>
                    <p>
                      Hybrid stacks are common and valid: CRM owns pipeline; Calendly owns public booking; Zapier or
                      native integration writes meetings back to contacts. Document which system wins when a rep&apos;s
                      personal calendar conflicts with team routing rules.{" "}
                      <Link href={getSchedulingReviewUrl("zoho-bookings")} className={linkGreen}>Zoho Bookings</Link> is
                      a useful reference when CRM-triggered booking is the evaluation criteria—see also{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>{" "}
                      for trigger and reminder depth.
                    </p>
                  </div>
                </section>
                <section id="choose" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="One sentence routes the shortlist.">How to Choose for Your Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Ask which failure hurts most: deals stalling because follow-up is invisible, or revenue leaking
                      because prospects cannot book or no-show. CRM-first versus scheduling-first is a legitimate split.
                      Service businesses booking client time may need scheduling before CRM; B2B sales teams often invert
                      that order.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for booking checklists, then compare head-to-head on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> and{" "}
                      <Link href="/crm/compare" className={linkGreen}>CRM compare</Link>. Browse all{" "}
                      <Link href="/scheduling/guides" className={linkGreen}>scheduling guides</Link> and{" "}
                      <Link href="/crm/guides" className={linkGreen}>CRM guides</Link> when you need category-specific
                      depth beyond this overview.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:col-span-4 lg:block lg:pt-8">
              <GuideSidebar title="Tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedSchedulingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "CRM vs Scheduling Software | BeltStack Guide",
    description:
      "Learn how CRM and scheduling software differ, where they overlap with meeting links and booking sync, and when to buy one tool or an integrated stack.",
    keywords: [
      "CRM vs scheduling software",
      "CRM meeting scheduling",
      "Calendly vs CRM",
      "appointment scheduling CRM integration",
      "sales scheduling software",
      "HubSpot scheduling vs Calendly",
    ],
  };
}

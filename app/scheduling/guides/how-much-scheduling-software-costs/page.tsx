import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
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
    q: "How much does scheduling software cost per month?",
    a: "Many vendors offer free tiers for one user. Paid plans for small teams often land roughly between $8 and $30 per user per month depending on branding, routing, forms, and payments—verify current pricing on vendor sites and our best scheduling software roundup.",
  },
  {
    q: "Is scheduling software priced per user or per location?",
    a: "Most appointment booking tools price per seat (each bookable staff member). Some service-business platforms bundle locations or resources differently. List how many calendars need public booking before you compare quotes.",
  },
  {
    q: "Are there free scheduling tools for small business?",
    a: "Yes. Calendly and Setmore are common free starting points for solos. Free tiers cap users, event types, or branding—see free vs paid scheduling software for upgrade triggers.",
  },
  {
    q: "What hidden costs should we budget for?",
    a: "SMS reminder fees, payment processing rates, premium integrations, implementation time, and annual billing prepay discounts all affect true cost. A low headline price with paid SMS per appointment can exceed a slightly higher all-in plan.",
  },
  {
    q: "When does paid scheduling software pay for itself?",
    a: "Paid tiers often pay back when they cut no-shows, remove admin hours, or capture payment at booking. Compare one month of subscription to one recovered appointment or one hour of staff time saved weekly.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Free; from ~$10/mo", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "From ~$16/mo", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "From ~$8/mo", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/how-much-scheduling-software-costs";

export default function HowMuchSchedulingSoftwareCostsPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">How Much Scheduling Software Costs</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Much Scheduling Software Costs
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Typical price ranges, per-seat drivers, and hidden fees for scheduling software—practical budgeting
                    guidance for small business buyers comparing appointment booking tools.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Scheduling software pricing is usually simpler than enterprise ERP—but easy to misread if you only
                      look at the lowest advertised tier. Most vendors publish free or low-cost entry plans for one user,
                      then scale by seats, branding removal, team routing, and add-ons like SMS or payments.
                    </p>
                    <p>
                      For small businesses, the useful question is not &quot;what is the cheapest plan?&quot; but &quot;what will we pay
                      when everyone who takes appointments is on the system?&quot; Multiply per-seat monthly fees by bookable
                      staff, then add reminder and payment costs you will actually use.
                    </p>
                    <p>
                      Free tiers are real but bounded. Read{" "}
                      <Link href="/scheduling/guides/free-vs-paid-scheduling-software" className={linkGreen}>
                        free vs paid scheduling software
                      </Link>{" "}
                      for limits and upgrade signals. Cloud vs self-hosted rarely changes sticker price for SMB buyers—see{" "}
                      <Link href="/scheduling/guides/cloud-vs-on-premise-scheduling-software" className={linkGreen}>
                        cloud vs on-premise scheduling software
                      </Link>{" "}
                      for hosting tradeoffs that affect IT time instead.
                    </p>
                    <p>
                      Compare live tiers on our{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> pages. Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>{" "}
                      so you do not pay for seats or modules you will not use.
                    </p>
                  </div>
                </section>
                <section id="typical-price-ranges" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Ballpark monthly costs for common SMB tiers.">Typical Price Ranges</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Pricing changes by vendor and promotion—the ranges below are planning anchors for 2026 buyer
                      research, not quotes. Confirm on each vendor&apos;s plan page before you budget.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Free ($0)</strong> — one user or limited event types; good
                          for testing{" "}
                          <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> or{" "}
                          <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Solo paid (~$8–$20/mo)</strong> — branding, more event
                          types, buffers;{" "}
                          <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link>{" "}
                          and{" "}
                          <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>{" "}
                          often sit here.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Team &amp; service business (~$16–$50+/mo)</strong> — forms,
                          packages, payments;{" "}
                          <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                            Acuity Scheduling
                          </Link>{" "}
                          is a common reference point.
                        </span>
                      </li>
                    </ul>
                    <p>
                      If you are new to the category, read{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>{" "}
                      before mapping features to price tiers.
                    </p>
                  </div>
                </section>
                <section id="what-drives-cost" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Line items that move your annual total.">What Drives Cost</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Per-seat pricing is the default driver: each stylist, clinician, or consultant with a public calendar
                      usually needs a paid seat. Team routing, round-robin, and collective availability sit on higher tiers
                      or per-user add-ons.
                    </p>
                    <p>
                      Feature gates matter too—custom branding, workflow automations, CRM sync, HIPAA or SSO requirements,
                      and payment collection at booking often require upgraded plans. List must-haves using our feature
                      guide, then filter{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> shortlists and{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> pages by industry.
                    </p>
                    <p>
                      Annual billing can discount monthly rates 10–20% but locks you in; weigh that against how fast your
                      team size changes year to year.
                    </p>
                  </div>
                </section>
                <section id="hidden-costs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Fees that do not always appear in the headline price.">Hidden and Add-On Costs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SMS reminders may be included up to a cap, then billed per message. Payment processing uses standard
                      card rates on top of software fees. Premium integrations—Salesforce, HubSpot, Zapier tiers—can
                      require higher plans or separate subscriptions.
                    </p>
                    <p>
                      Implementation is usually light for cloud booking (connect Google or Outlook, embed a link), but
                      staff training and migrating existing client links still cost time. Budget a half-day for setup and
                      one busy week of parallel booking before you retire the old process.
                    </p>
                    <p>
                      SMB buyers comparing value should read{" "}
                      <Link href="/scheduling/guides/scheduling-tools-for-small-business" className={linkGreen}>
                        scheduling tools for small business
                      </Link>{" "}
                      alongside per-vendor reviews on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link>.
                    </p>
                  </div>
                </section>
                <section id="how-to-budget" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Build a one-year number you can defend.">How to Budget</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Step one: count bookable staff six months from now, not just today. Step two: list paid-only features
                      you will use in month one (SMS, payments, team routing). Step three: multiply monthly software by 12
                      and add estimated SMS and processing. Compare that total to one no-show or one hour of admin time per
                      week—many teams break even quickly.
                    </p>
                    <p>
                      Run trials on two finalists from{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      during peak booking volume. For rollout habits that keep spend aligned with usage, see{" "}
                      <Link href="/scheduling/guides/how-small-businesses-use-scheduling-software" className={linkGreen}>
                        how small businesses use scheduling software
                      </Link>
                      .
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
              <GuideSidebar title="Scheduling tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Much Scheduling Software Costs | BeltStack Guide",
    description:
      "Learn typical scheduling software price ranges, per-seat drivers, hidden fees, and how small businesses budget for appointment booking tools in 2026.",
    keywords: [
      "scheduling software cost",
      "scheduling software pricing",
      "appointment booking software price",
      "how much is Calendly",
      "scheduling tools for small business",
      "online booking software cost",
      "scheduling software per user",
    ],
  };
}

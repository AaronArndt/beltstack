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
    q: "Is free scheduling software good enough for a small business?",
    a: "Often yes for one person with modest booking volume. Free tiers from Calendly, Setmore, and similar vendors cover basic links, calendar sync, and reminders. Limits appear quickly when you add staff, remove branding, or need intake forms and payments at booking.",
  },
  {
    q: "What are common limits on free scheduling plans?",
    a: "Typical caps include one user or one event type, vendor branding on booking pages, limited SMS reminders, no team round-robin, and restricted integrations with CRM or payment tools. Always confirm current plan pages before migrating client booking links.",
  },
  {
    q: "What does paid scheduling software usually add?",
    a: "Paid plans add multiple staff, collective availability, custom branding, advanced routing, intake forms, packages, payment collection, and admin reporting. Those features reduce double-bookings and no-shows as volume grows.",
  },
  {
    q: "When should a small business upgrade from free to paid?",
    a: "Upgrade when manual coordination costs more than the subscription—usually when a second bookable staff member joins, branding matters for client trust, or you need payments and forms before the appointment. See how much scheduling software costs for typical price bands.",
  },
  {
    q: "How should we compare free and paid options?",
    a: "Compare total operating impact: hours saved on email scheduling, no-show rate, and revenue from smoother checkout—not monthly price alone. Trial paid tiers during your busiest week and measure against your free baseline on our scheduling compare pages.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Free tier & teams", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service businesses", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Value on a budget", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/free-vs-paid-scheduling-software";

export default function FreeVsPaidSchedulingSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Free vs Paid Scheduling Software</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Free vs Paid Scheduling Software
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Compare free and paid scheduling software for small businesses: plan limits, true total cost,
                    upgrade triggers, and when paid booking features beat calendar-only workarounds.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Free scheduling tools can carry solo consultants, coaches, and one-chair service businesses
                      through early growth. &quot;Free&quot; rarely means zero cost forever: caps on users, event types, and
                      branding—and the hours you still spend coordinating by email—affect margin and client experience.
                      The decision is whether free fits today&apos;s booking volume and team size.
                    </p>
                    <p>
                      Paid plans earn their fee when they replace manual work: second staff on the calendar, intake
                      forms before appointments, packages, payment at booking, and integrations with CRM or accounting.
                      For a clear definition of the category, start with{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>
                      .
                    </p>
                    <p>
                      Hosting is a separate decision. Most SMB buyers choose cloud SaaS; see{" "}
                      <Link href="/scheduling/guides/cloud-vs-on-premise-scheduling-software" className={linkGreen}>
                        cloud vs on-premise scheduling software
                      </Link>{" "}
                      if IT policy requires on-site systems. For dollar ranges by vendor tier, read{" "}
                      <Link href="/scheduling/guides/how-much-scheduling-software-costs" className={linkGreen}>
                        how much scheduling software costs
                      </Link>
                      .
                    </p>
                    <p>
                      Shortlist on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>{" "}
                      before you commit.
                    </p>
                  </div>
                </section>
                <section id="free-tier-limits" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What free plans typically include—and where they stop.">Free Tier Limits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Free scheduling usually covers one bookable user, basic calendar sync, email reminders, and a
                      shareable booking link—enough to stop playing calendar ping-pong with clients. Vendors use free tiers
                      to onboard solos who may later add seats or advanced workflows.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">User and event caps</strong> — one active event type or one
                          staff calendar is common.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Vendor branding</strong> — booking pages may show the
                          platform logo unless you upgrade.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Limited automation</strong> — SMS reminders, workflows, and
                          CRM sync often sit behind paid walls.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Popular free starting points include{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>. For SMB-focused
                      picks, see{" "}
                      <Link href="/scheduling/guides/scheduling-tools-for-small-business" className={linkGreen}>
                        scheduling tools for small business
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="what-paid-adds" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Features that justify a subscription as volume grows.">What Paid Plans Add</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Paid scheduling software scales with staff, services, and brand expectations. You are buying
                      reliable multi-calendar routing, client-facing polish, and revenue capture at the moment someone
                      books—not just a prettier link.
                    </p>
                    <p>
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      is known for intake forms, packages, and payments at booking.{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link>{" "}
                      adds team buffers and round-robin on paid tiers.{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>{" "}
                      bundles customization and service templates at competitive monthly rates—useful when free caps
                      bite but enterprise pricing does not fit.
                    </p>
                    <p>
                      Industry-specific shortlists live under{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> pages when you
                      need a vertical lens beyond generic free-vs-paid tradeoffs.
                    </p>
                  </div>
                </section>
                <section id="when-to-upgrade" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Signals that free is costing more than it saves.">When to Upgrade</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Upgrade when coordination friction shows up in client experience: double-bookings, missed
                      reminders, or staff sharing one login because free seats ran out. Another trigger is brand—a
                      salon or clinic may need white-label booking before a paid tier feels optional.
                    </p>
                    <p>
                      If you are adding a second bookable person, compare team routing on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> before patching
                      with separate free accounts. Fragmented calendars recreate the problem scheduling software was
                      meant to solve.
                    </p>
                    <p>
                      Read{" "}
                      <Link href="/scheduling/guides/how-small-businesses-use-scheduling-software" className={linkGreen}>
                        how small businesses use scheduling software
                      </Link>{" "}
                      for realistic rollout paths from solo free tiers to paid team plans.
                    </p>
                  </div>
                </section>
                <section id="how-to-compare" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Run a one-week trial against your real calendar load.">How to Compare Free and Paid</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List must-haves before price: staff count, payment at booking, SMS reminders, CRM sync, and
                      branding. A $12/month plan that prevents one no-show per month often pays for itself; a free tool
                      that caps event types may cost more in admin time.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup for current tiers, then validate on vendor sites during trial. Pair this guide with{" "}
                      <Link href="/scheduling/guides/how-much-scheduling-software-costs" className={linkGreen}>
                        how much scheduling software costs
                      </Link>{" "}
                      so per-seat math matches your headcount for the year.
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
    title: "Free vs Paid Scheduling Software | BeltStack Guide",
    description:
      "Compare free and paid scheduling software for small businesses: plan limits, upgrade triggers, and when paid booking features beat manual calendar work.",
    keywords: [
      "free scheduling software",
      "paid scheduling software",
      "scheduling software pricing",
      "appointment booking free tier",
      "small business scheduling",
      "Calendly free vs paid",
      "online booking software cost",
    ],
  };
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getSchedulingCompareUrl, getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "What does it mean to automate scheduling as a business?",
    a: "You define availability and routing rules once, then let customers or systems book without manual email. Confirmations, calendar updates, and reminders run on their own—coordinators focus on exceptions, not every slot.",
  },
  {
    q: "Where should businesses start automating scheduling?",
    a: "Start with the highest-volume, lowest-variance workflow: discovery calls, standard salon services, or recurring maintenance visits. Automate reminders next, then integrations from forms or CRM once self-serve booking is stable.",
  },
  {
    q: "Can automation replace a human scheduler?",
    a: "For repeatable inbound booking, often yes. Emergencies, skill-based dispatch, and complex job routing still need humans or field service dispatch boards—automation handles the routine 80%, not every edge case.",
  },
  {
    q: "How is this different from how automated scheduling works technically?",
    a: "This guide covers business process—who owns rules, rollout order, and change management. For triggers, buffers, and integration mechanics, read how automated scheduling works as the complementary technical deep dive.",
  },
  {
    q: "What tools do SMBs use to automate scheduling?",
    a: "Calendly and YouCanBook.me for team routing; Acuity and Setmore for service businesses with forms and payments; Zoho Bookings when CRM workflows create appointments. Compare on scheduling compare before standardizing.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Workflow automation", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Round-robin teams", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { name: "Zoho Bookings", logoSrc: "/Logos/zoho.png", rating: "4.3", bestFor: "CRM-triggered booking", reviewHref: getSchedulingReviewUrl("zoho-bookings") },
];

const PAGE_HREF = "/scheduling/guides/how-businesses-automate-scheduling";

export default function HowBusinessesAutomateSchedulingPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Automate scheduling (business)</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Automate Scheduling
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    A practical rollout playbook: which workflows to automate first, how teams adopt self-serve booking,
                    and where humans still own exceptions.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automating scheduling is less about flipping a software switch and more about deciding which
                      appointments should never require a coordinator again. Mature teams start with high-volume,
                      repeatable bookings—then layer reminders, payments, and CRM triggers once the basics stay accurate
                      for a month.
                    </p>
                    <p>
                      The business goal is predictable capacity: customers book real slots, staff calendars stay current,
                      and front desk time shifts from “what time works?” to handling exceptions. Spreadsheets and email
                      chains rarely survive that shift; see{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems businesses face
                      </Link>{" "}
                      for symptoms teams fix with automation.
                    </p>
                    <p>
                      This guide focuses on process—ownership, rollout order, and change management. For how rules, buffers,
                      and integrations execute inside products, read{" "}
                      <Link href="/scheduling/guides/how-automated-scheduling-works" className={linkGreen}>
                        how automated scheduling works
                      </Link>{" "}
                      as the complementary technical guide. Baseline platform behavior is in{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>
                      .
                    </p>
                    <p>
                      Shortlist tools on the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href={getSchedulingCompareUrl()} className={linkGreen}>scheduling comparisons</Link>. If you
                      are still on Excel or shared files, pair this with{" "}
                      <Link href="/scheduling/guides/spreadsheet-vs-scheduling-software" className={linkGreen}>
                        spreadsheet vs scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="audit-workflows" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Map volume before buying features.">Audit Which Appointments to Automate First</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List appointment types by weekly volume and variance. Discovery calls and standard service visits
                      automate well; custom quotes, emergency dispatch, and multi-day projects usually stay manual longer.
                      Rank by coordinator hours saved, not by which workflow is easiest to configure in a demo.
                    </p>
                    <p>
                      Declare a system of record: customer-facing bookings live in scheduling software, not a side
                      spreadsheet. Teams that mix Calendly links with an Excel shift grid without sync recreate double
                      booking—one of the top failures in{" "}
                      <Link href="/scheduling/guides/common-scheduling-problems-businesses-face" className={linkGreen}>
                        common scheduling problems
                      </Link>
                      .
                    </p>
                    <p>
                      Separate customer appointments from internal shift planning if both exist.{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-vs-employee-scheduling" className={linkGreen}>
                        Appointment scheduling vs employee scheduling
                      </Link>{" "}
                      explains why one tool rarely owns both problems equally well.
                    </p>
                  </div>
                </section>
                <section id="rollout-stages" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Staged adoption beats big-bang launches.">Typical Rollout Stages</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Stage 1 — Self-serve booking</strong> — publish links,
                          connect calendars, set buffers and minimum notice.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Stage 2 — Reminders and intake</strong> — automated
                          confirmations, SMS where no-shows hurt, forms collected before the visit.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Stage 3 — Team routing</strong> — round-robin or
                          staff-specific rules for multi-person shops.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Stage 4 — System triggers</strong> — CRM, web forms, or
                          payments that create or confirm slots without manual entry.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Each stage should run stable for a few weeks before the next. Skipping straight to integrations
                      while calendars still drift causes automation that books wrong slots faster—not better.
                    </p>
                  </div>
                </section>
                <section id="people-and-policy" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Software plus clear ownership.">People, Policy, and Exceptions</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Assign an owner for availability rules—who updates holidays, who approves overrides, and how
                      cancellations propagate. Automation fails when five admins each tweak buffers differently.
                    </p>
                    <p>
                      Train staff on what is automated versus what still needs a human: same-day emergencies, VIP
                      routing, or jobs requiring skills the booking page cannot see. Field-heavy teams may automate intake
                      and reminders while dispatch stays manual—see{" "}
                      <Link href="/scheduling/guides/scheduling-software-vs-field-service-software" className={linkGreen}>
                        scheduling software vs field service software
                      </Link>
                      .
                    </p>
                    <p>
                      Measure adoption with simple metrics: percent of appointments self-booked, no-show rate, and
                      coordinator hours per week. Productivity impact is expanded in{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-improves-productivity" className={linkGreen}>
                        how scheduling software improves productivity
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="tool-selection" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Match automation depth to your stage.">Choosing Tools for Automation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Solo and sales-led teams often standardize on{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> or{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> for
                      routing. Service businesses with forms and deposits lean{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      or{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>{" "}
                      against your stage plan—not a feature checklist from a generic demo. Compare head-to-head on{" "}
                      <Link href={getSchedulingCompareUrl()} className={linkGreen}>scheduling compare</Link> before you
                      retrain the whole team.
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
    title: "How Businesses Automate Scheduling | BeltStack Guide",
    description:
      "How small businesses roll out scheduling automation: audit workflows, staged adoption, policies for exceptions, and tools that match each maturity stage.",
    keywords: [
      "automate scheduling",
      "scheduling automation for business",
      "automated appointment booking",
      "scheduling workflow automation",
      "self-serve booking rollout",
      "reduce manual scheduling",
    ],
  };
}

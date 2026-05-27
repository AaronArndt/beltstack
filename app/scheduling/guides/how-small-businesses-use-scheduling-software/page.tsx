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
    q: "How do small businesses use scheduling software day to day?",
    a: "They publish booking links on websites and email signatures, sync staff calendars to prevent double-bookings, send automated reminders, and optionally collect intake forms or payments before appointments. Office staff spend less time on phone tag.",
  },
  {
    q: "What is the best scheduling software for a small business with one employee?",
    a: "Free tiers from Calendly or Setmore work for many solos. Choose based on branding needs, calendar sync, and whether you will add staff within a year—see scheduling tools for small business for a focused shortlist.",
  },
  {
    q: "When should a small business add team scheduling?",
    a: "Add team features when more than one person takes client appointments and clients should book whoever is available. Round-robin and collective calendars avoid maintaining separate free accounts per staff member.",
  },
  {
    q: "Do small businesses need paid scheduling software?",
    a: "Not always at first. Upgrade when free limits block branding, second staff, SMS reminders, or payments at booking. Compare free vs paid scheduling software and how much scheduling software costs before committing annually.",
  },
  {
    q: "How long does it take for a small business to roll out scheduling software?",
    a: "Many solos go live in an afternoon: connect calendars, set availability, share a link. Adding staff, services, and website embeds may take a few days. Run one busy week in parallel before retiring manual booking.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Simple booking & teams", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Free tier & service biz", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
];

const PAGE_HREF = "/scheduling/guides/how-small-businesses-use-scheduling-software";

export default function HowSmallBusinessesUseSchedulingSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">How Small Businesses Use Scheduling Software</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Small Businesses Use Scheduling Software
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Practical workflows for solos and small teams: launching booking links, syncing calendars, cutting
                    no-shows, and scaling from free tiers to paid team scheduling.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses adopt scheduling software to replace email and phone coordination with a link clients
                      can use anytime. The owner sets services and availability once; the system enforces buffers, time zones,
                      and conflicts with connected calendars—then sends confirmations and reminders automatically.
                    </p>
                    <p>
                      Usage usually starts simple: one bookable person, one booking page on the website and email
                      signature. Growth adds staff calendars, intake questions, deposits, and integrations with CRM or
                      payment tools. The same product family scales if you pick a vendor with clear upgrade paths.
                    </p>
                    <p>
                      This is appointment booking for client-facing time—not shift scheduling for hourly employees. If your
                      bottleneck is crew dispatch and job billing, evaluate field service software separately. For inbound
                      booking definitions, see{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>
                      .
                    </p>
                    <p>
                      Explore tools on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. For a
                      SMB-focused shortlist, read{" "}
                      <Link href="/scheduling/guides/scheduling-tools-for-small-business" className={linkGreen}>
                        scheduling tools for small business
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="common-workflows" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="What day-to-day usage looks like after go-live.">Common Workflows</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most small businesses follow the same pattern: define services and duration, connect Google or
                      Outlook calendars, publish a booking link, and let reminders handle follow-up. Front desk or the owner
                      handles exceptions—reschedules, waitlists, and same-day gaps—inside the same tool.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Self-serve booking</strong> — clients pick a service and time
                          without back-and-forth email.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Calendar sync</strong> — personal and work calendars block
                          double-bookings automatically.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Reminders</strong> — email or SMS before appointments to reduce
                          no-shows.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Intake and payment</strong> — forms or deposits at booking on
                          paid tiers from vendors like{" "}
                          <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                            Acuity Scheduling
                          </Link>
                          .
                        </span>
                      </li>
                    </ul>
                    <p>
                      Match features to your checklist in{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="starting-solo" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Launch fast with free or low-cost tiers.">Starting Solo</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Owner-operators and freelancers typically start with a free tier: connect one calendar, create one or
                      two meeting types, and add the link to email and social profiles. Tools like{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> are common first
                      choices because setup is fast and clients recognize the flow.
                    </p>
                    <p>
                      Stay on free while volume is low and branding caps are acceptable. When limits bite, compare{" "}
                      <Link href="/scheduling/guides/free-vs-paid-scheduling-software" className={linkGreen}>
                        free vs paid scheduling software
                      </Link>{" "}
                      and expected spend in{" "}
                      <Link href="/scheduling/guides/how-much-scheduling-software-costs" className={linkGreen}>
                        how much scheduling software costs
                      </Link>{" "}
                      before annual billing.
                    </p>
                    <p>
                      Cloud hosting is the norm for solos—see{" "}
                      <Link href="/scheduling/guides/cloud-vs-on-premise-scheduling-software" className={linkGreen}>
                        cloud vs on-premise scheduling software
                      </Link>{" "}
                      only if compliance requires self-hosted systems.
                    </p>
                  </div>
                </section>
                <section id="growing-to-team" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Add staff without fragmenting calendars.">Growing to a Team</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When a second stylist, clinician, or consultant takes bookings, move to one account with multiple
                      calendars—not separate free logins. Collective availability and round-robin let clients book the next
                      open person; admins see all appointments in one place.
                    </p>
                    <p>
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> and
                      paid <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> tiers
                      support team routing. Service businesses needing templates and customization often evaluate{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>.
                      Compare head-to-head on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> before migrating
                      client-facing links.
                    </p>
                    <p>
                      Vertical recommendations live under{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> when your industry
                      has specific intake or payment needs.
                    </p>
                  </div>
                </section>
                <section id="tools-and-next-steps" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Shortlist, trial, and roll out with less friction.">Tools and Next Steps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Write three sentences: who books, how many staff need public calendars, and whether payment or forms
                      happen at booking. That brief routes you to the right tier on{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      without overbuying enterprise features.
                    </p>
                    <p>
                      Trial two finalists for one busy week. Train whoever answers the phone on reschedules and
                      cancellations. Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for a structured evaluation checklist before you switch client-facing URLs everywhere.
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
    title: "How Small Businesses Use Scheduling Software | BeltStack Guide",
    description:
      "Learn how small businesses use scheduling software: solo launch, team growth, common workflows, and when to upgrade from free to paid booking tools.",
    keywords: [
      "small business scheduling software",
      "how to use scheduling software",
      "appointment booking for small business",
      "scheduling tools for teams",
      "online booking workflow",
      "Calendly for small business",
      "scheduling software rollout",
    ],
  };
}

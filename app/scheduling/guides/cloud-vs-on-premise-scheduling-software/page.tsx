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
    q: "Is cloud scheduling software better for most small businesses?",
    a: "For most SMBs, cloud tools are faster to deploy, easier to update, and simpler for staff and clients to access from any device. Success still depends on workflow fit, calendar sync quality, and reliable internet—not hosting alone.",
  },
  {
    q: "When does on-premise scheduling software still make sense?",
    a: "On-premise can fit organizations with strict data residency rules, legacy IT mandates, or environments where approved cloud vendors cannot be used. Those cases trade SaaS convenience for infrastructure your team must operate and secure.",
  },
  {
    q: "How does mobile access differ between cloud and on-premise?",
    a: "Cloud platforms usually offer browser and app access over standard HTTPS. On-premise setups may need VPNs or custom portals so staff and clients reach the server—adding friction that shows up as missed bookings and support tickets.",
  },
  {
    q: "Which is more secure: cloud or on-premise scheduling?",
    a: "Neither is automatically safer. Reputable cloud vendors invest in patching, monitoring, and redundancy; on-premise security depends on your patch discipline, backups, and access controls. Document requirements instead of assuming one model wins.",
  },
  {
    q: "What should we compare beyond hosting model?",
    a: "Compare booking workflow fit, team routing, reminders, integrations, implementation time, total cost of ownership, and data controls. Hosting matters, but daily usability for staff and clients usually determines whether the platform sticks.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Cloud SaaS default", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & payments", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "YouCanBook.me", logoSrc: "/Logos/youcanbookme.jpeg", rating: "4.5", bestFor: "Team booking", reviewHref: getSchedulingReviewUrl("youcanbookme") },
];

const PAGE_HREF = "/scheduling/guides/cloud-vs-on-premise-scheduling-software";

export default function CloudVsOnPremiseSchedulingSoftwarePage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Cloud vs On-Premise Scheduling Software</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Cloud vs On-Premise Scheduling Software
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Compare cloud and on-premise scheduling software on deployment speed, mobile access, IT ownership,
                    and total cost—so hosting supports booking instead of blocking it.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Hosting decisions affect how fast you launch online booking, who maintains uptime, and whether staff
                      can manage calendars from home or the road without VPN friction. For most consultants, agencies,
                      salons, and clinics, cloud scheduling SaaS is the practical default—not because on-premise is always
                      wrong, but because clients expect a link that works everywhere.
                    </p>
                    <p>
                      On-premise still appears in regulated industries, enterprises with existing data centers, and
                      organizations where procurement requires servers inside the firewall. The trade is control and
                      custom infrastructure against your team owning patches, backups, scaling, and remote access paths.
                    </p>
                    <p>
                      The best choice is the model that supports reliable self-serve booking with the least operational
                      drag. If you are already juggling email scheduling, adding heavy infrastructure responsibility
                      rarely fixes the root problem—workflow and reminders do.
                    </p>
                    <p>
                      Start with{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>
                      . Shortlist on{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      and compare plans on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> pages. For budget
                      tiers, see{" "}
                      <Link href="/scheduling/guides/free-vs-paid-scheduling-software" className={linkGreen}>
                        free vs paid scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="cloud-advantages" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Why cloud-first scheduling fits most SMB buyers.">Cloud Advantages</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cloud platforms typically offer faster signup, automatic updates, and straightforward access for
                      clients booking from phones. Vendors handle redundancy, security patching, and embeddable widgets
                      so you focus on services and availability—not servers.
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Faster go-live</strong> — connect calendars, publish a
                          link, and test reminders in days.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Always-current features</strong> — routing, payments, and
                          integrations improve without upgrade projects.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>•</span>
                        <span>
                          <strong className="text-[#1A2D48]">Low IT overhead</strong> — no database admin for a booking
                          page most solos need.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Leading cloud options include{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>
                      , and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>. Match features
                      to your checklist in{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="on-premise-when" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Scenarios where self-hosted still appears.">When On-Premise Makes Sense</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      On-premise scheduling can fit when contracts require data to stay in a specific facility, when
                      cloud vendors cannot pass security review, or when scheduling is bundled into a broader on-site
                      suite you already run. Expect longer implementation and ongoing ownership of uptime, backups, and
                      certificate management.
                    </p>
                    <p>
                      Small businesses rarely start here unless IT or compliance mandates it. If policy is flexible,
                      cloud tools on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> usually deliver booking pages
                      and calendar sync sooner—with predictable subscription cost detailed in{" "}
                      <Link href="/scheduling/guides/how-much-scheduling-software-costs" className={linkGreen}>
                        how much scheduling software costs
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="mobile-and-access" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="How clients and staff reach the system day to day.">Mobile and Remote Access</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Clients book from phones; staff confirm and reschedule between appointments. Cloud products are
                      built for that pattern—responsive booking pages, calendar apps, and notification delivery without
                      corporate VPNs.
                    </p>
                    <p>
                      On-premise access often depends on network paths you maintain. A clinic front desk or mobile stylist
                      may hit friction that cloud users never see. Before choosing on-premise, walk through one real week:
                      new client books online, staff reschedules, reminder fires, payment (if any) completes.
                    </p>
                    <p>
                      For SMB rollout patterns, see{" "}
                      <Link href="/scheduling/guides/how-small-businesses-use-scheduling-software" className={linkGreen}>
                        how small businesses use scheduling software
                      </Link>{" "}
                      and vertical picks on{" "}
                      <Link href="/scheduling/best-for" className={linkGreen}>scheduling best-for</Link> pages.
                    </p>
                  </div>
                </section>
                <section id="how-to-decide" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Weight hosting against workflow and total cost.">How to Decide</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Document non-negotiables: data residency, SSO, audit logs, and integration targets. If cloud
                      vendors meet them, favor SaaS unless internal IT strongly prefers owned infrastructure. Compare
                      three-year total cost—subscription plus admin time—not license price alone.
                    </p>
                    <p>
                      Trial cloud finalists from{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> during a busy
                      booking week. Read reviews such as{" "}
                      <Link href={getSchedulingReviewUrl("youcanbookme")} className={linkGreen}>YouCanBook.me</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> when
                      customization or value pricing matters alongside hosting simplicity.
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
    title: "Cloud vs On-Premise Scheduling Software | BeltStack Guide",
    description:
      "Compare cloud and on-premise scheduling software for small businesses: deployment, mobile access, security, and how to choose the right hosting model.",
    keywords: [
      "cloud scheduling software",
      "on-premise scheduling software",
      "SaaS appointment booking",
      "scheduling software hosting",
      "online booking deployment",
      "small business scheduling tools",
      "scheduling software security",
    ],
  };
}

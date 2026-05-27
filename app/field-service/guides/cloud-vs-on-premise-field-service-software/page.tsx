import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "Is cloud field service software better for most teams?",
    a: "For most SMB and mid-market service teams, cloud tools are easier to deploy, update, and support. They reduce internal IT overhead and give technicians reliable mobile access without VPN complexity. Success still depends on workflow fit and field connectivity—not hosting alone.",
  },
  {
    q: "When does on-premise field service software still make sense?",
    a: "On-premise can fit organizations with strict hosting rules, legacy IT mandates, air-gapped environments, or contractual data residency requirements that approved cloud vendors cannot meet. Those cases trade faster SaaS iteration for infrastructure control your team must operate.",
  },
  {
    q: "How does mobile access differ between cloud and on-premise?",
    a: "Cloud platforms usually offer native mobile apps with straightforward sync over standard internet connections. On-premise setups often need VPNs, reverse proxies, or extra infrastructure so technicians can reach the server from job sites—adding failure points dispatchers feel immediately.",
  },
  {
    q: "Which is more secure: cloud or on-premise FSM?",
    a: "Neither is automatically safer. Reputable cloud vendors invest in patching, monitoring, and redundancy; on-premise security depends on your team&apos;s patch discipline, backups, and access controls. Risk rises when security is assumed rather than documented for either model.",
  },
  {
    q: "What should we compare beyond hosting model?",
    a: "Compare workflow fit, dispatch and mobile depth, integrations, implementation timeline, total cost of ownership, and data controls. Hosting is important, but operational usability—especially under same-day volume—usually determines whether the platform sticks.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: "4.6", bestFor: "Contractors and home services", reviewHref: getFieldServiceReviewUrl("jobber") },
  { name: "Housecall Pro", logoSrc: "/Logos/housecallpro.jpeg", rating: "4.5", bestFor: "Home service pros", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
  { name: "ServiceTitan", logoSrc: "/Logos/servicetitan.png", rating: "4.5", bestFor: "Growing service companies", reviewHref: getFieldServiceReviewUrl("servicetitan") },
];

const PAGE_HREF = "/field-service/guides/cloud-vs-on-premise-field-service-software";

export default function CloudVsOnPremiseFieldServiceSoftwarePage() {
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
                    <li><Link href="/field-service" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Field Service</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/field-service/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Cloud vs On-Premise Field Service Software</li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Cloud vs On-Premise Field Service Software</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare cloud and on-premise field service software on deployment speed, mobile access, IT ownership, and total cost—so hosting supports dispatch instead of blocking it.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Hosting model decisions affect how fast you go live, who maintains uptime, and whether technicians can update jobs from the field without VPN friction. For most HVAC, plumbing, electrical, and home service teams, cloud SaaS has become the default—not because on-premise is always wrong, but because dispatch and mobile sync are the product.
                    </p>
                    <p>
                      On-premise still appears in enterprises, regulated environments, and organizations with existing data centers. The trade is control and custom infrastructure against your team owning patches, backups, scaling, and remote access paths technicians rely on daily.
                    </p>
                    <p>
                      The best choice is the model that supports reliable scheduling, dispatch, and billing with the least operational drag. If you are already struggling with spreadsheet dispatch, adding heavy infrastructure responsibility rarely fixes the root problem.
                    </p>
                    <p>
                      Start with{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>what field service software is</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>how to choose field service software</Link>.{" "}
                      Shortlist products on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>best field service software</Link>{" "}
                      and compare plans on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>field service compare pages</Link>.{" "}
                      For budget tiers, see{" "}
                      <Link href="/field-service/guides/free-vs-paid-field-service-software" className={linkGreen}>free vs paid field service software</Link>.
                    </p>
                  </div>
                </section>

                <section id="cloud-benefits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why cloud-first FSM has become the default for many teams.">Cloud Advantages</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cloud platforms typically offer faster deployment, automatic updates, and easier remote access for dispatchers and technicians. Vendors operate redundancy, security patching, and mobile app distribution so you focus on jobs—not servers.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Faster go-live</strong> — sign up, import customers, train dispatch in days not quarters.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Native mobile apps</strong> — built for offline job sites and app store updates.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Subscription predictability</strong> — opex instead of capital hardware cycles.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Ecosystem integrations</strong> — accounting, payments, and CRM connectors maintained by vendors.</span>
                      </li>
                    </ul>
                    <p>
                      Mobile sync and multi-location support are usually stronger out of the box. See{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>how mobile field service apps work</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>how dispatching software works</Link>{" "}
                      for operational capabilities cloud tools optimize for.
                    </p>
                  </div>
                </section>

                <section id="on-premise-considerations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where on-premise still fits specific IT and compliance realities.">On-Premise Considerations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      On-premise deployments can provide deeper infrastructure control, but they shift upgrade, backup, uptime, and remote access responsibility to your internal team. Field service is particularly sensitive: if mobile sync fails on a Friday afternoon, dispatch feels it immediately.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Data residency mandates</strong> — contractual or regulatory requirements to keep data in-house.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Legacy IT standards</strong> — existing VMware or SQL operations teams prefer to own the stack.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Customization depth</strong> — heavy bespoke workflows sometimes pair with self-managed hosting.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span><strong className="text-[#1A2D48]">Long procurement cycles</strong> — capital budgets versus monthly SaaS subscriptions.</span>
                      </li>
                    </ul>
                    <p>
                      If dispatch and coordination are already painful, extra infrastructure complexity can delay operational improvements. Review{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>common problems field service software solves</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/when-businesses-outgrow-spreadsheets-for-field-service" className={linkGreen}>when businesses outgrow spreadsheets</Link>{" "}
                      before choosing a heavier deployment path.
                    </p>
                  </div>
                </section>

                <section id="mobile-and-access" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why field teams feel hosting differences before IT does.">Mobile Access and Field Connectivity</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technicians judge software by whether the job updates when they tap complete—not by where the server sits. Cloud FSM vendors design mobile apps around intermittent cell service, photo uploads, and signature capture with sync queues.
                    </p>
                    <p>
                      On-premise often requires VPN tunnels, certificate management, or custom portals so phones reach your network. Each hop is another support ticket when a tech cannot close a job and the office cannot invoice. Test mobile on real job sites—basements, rural routes, and congested urban blocks—not only office Wi‑Fi.
                    </p>
                    <p>
                      Pair mobile evaluation with{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>mobile field service apps for technicians</Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-businesses-track-field-employees" className={linkGreen}>how businesses track field employees</Link>.{" "}
                      For operational fit beyond hosting, use{" "}
                      <Link href="/field-service/guides/what-features-to-look-for-in-field-service-software" className={linkGreen}>what features to look for in field service software</Link>.
                    </p>
                  </div>
                </section>

                <section id="decision-framework" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Questions to pressure-test the right model for your team.">How to Decide</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Compare both models across implementation timeline, IT staffing, field connectivity, data residency, maintenance cost, and integration ecosystem—not hosting alone.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">List non-negotiables</strong> — residency, audit requirements, approved vendor lists.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Model total cost</strong> — subscription or licenses plus servers, backups, and admin hours.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Trial mobile on live jobs</strong> — offline, photos, and status sync from the field.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Validate integrations</strong> — accounting, payments, and CRM handoffs your finance team needs.
                      </li>
                    </ol>
                    <p>
                      For CRM boundaries and customer data ownership, see{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>field service vs CRM</Link>,{" "}
                      <Link href="/field-service/guides/is-field-service-part-of-crm" className={linkGreen}>is field service part of CRM</Link>, and the{" "}
                      <Link href="/crm" className={linkGreen}>CRM category</Link>.{" "}
                      Compare vendors on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>field service compare</Link>{" "}
                      with same-day dispatch volume during trials.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Cloud and on-premise FSM FAQs.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Field Service Tools to Compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedFieldServiceResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Cloud vs On-Premise Field Service Software | BeltStack Guide",
    description:
      "Compare cloud vs on-premise field service software: SaaS deployment, mobile and VPN access, IT ownership, security, total cost, and a decision framework for dispatch-heavy service teams.",
    keywords: [
      "cloud field service software",
      "on-premise FSM",
      "SaaS field service",
      "field service hosting",
      "mobile field service",
      "FSM deployment",
      "2026",
    ],
  };
}

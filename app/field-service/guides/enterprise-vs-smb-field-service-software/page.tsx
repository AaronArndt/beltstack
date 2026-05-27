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
    q: "What is the biggest difference between enterprise and SMB field service software?",
    a: "Enterprise FSM emphasizes platform integration, role-based licensing, complex SLAs, and IT-led governance with long implementations. SMB FSM prioritizes per-tech pricing, fast setup, dispatch board UX, and quote-to-cash flows technicians adopt without a dedicated admin team.",
  },
  {
    q: "Can SMB contractors use Salesforce, Dynamics, or ServiceNow?",
    a: "Technically yes, but total cost and change management rarely justify it for small crews. Per-user enterprise licensing plus partner implementation often exceeds annual revenue gains until headcount and process complexity reach mid-market scale.",
  },
  {
    q: "When should a growing trade company move from Jobber to ServiceTitan or enterprise FSM?",
    a: "Consider ServiceTitan when marketing, memberships, pricebooks, and multi-location dispatch become core revenue levers—typically past roughly twenty technicians with dedicated office staff. Jump to enterprise FSM only when parent IT mandates CRM or ITSM platform consolidation.",
  },
  {
    q: "Do enterprise and SMB FSM tools share the same core features?",
    a: "Both schedule work orders and mobile execution, but enterprise tools add asset entitlements, multi-entity billing, advanced security, and optimization at the cost of simplicity. SMB tools trade depth for speed—fewer configuration options, faster invoices, lighter reporting.",
  },
  {
    q: "How does implementation time differ by segment?",
    a: "SMB SaaS FSM often goes live in days to weeks with import templates and onboarding calls. Enterprise deployments commonly run months to a year with data migration, ERP integration, UAT, and phased rollouts by region or business unit.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Contractors and home services",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service pros",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Growing service companies",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/enterprise-vs-smb-field-service-software";

export default function EnterpriseVsSmbFieldServiceSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/field-service" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/field-service/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Enterprise vs SMB Field Service Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Enterprise vs SMB Field Service Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How enterprise and SMB field service software differ on pricing, implementation, features, and
                    adoption—and why the wrong tier wastes money or caps growth.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service management vendors market to everyone with trucks, but products cluster into two
                      realities. SMB tools like Jobber and Housecall Pro sell per-technician subscriptions with
                      dispatch boards ready in days. Enterprise platforms like Salesforce Field Service, Dynamics 365
                      Field Service, and ServiceNow FSM sell per-user licensing inside broader IT and CRM programs
                      measured in quarters.
                    </p>
                    <p>
                      The gap is not just price—it is who owns the project, how billing integrates with ERP, and what
                      success looks like. A ten-person plumbing company needs invoices out the same day. A utility with
                      five hundred field agents needs SLA compliance dashboards for regulators.
                    </p>
                    <p>
                      SMB buyers should start with{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>
                        field service software for small business
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/free-vs-paid-field-service-software" className={linkGreen}>
                        free vs paid field service software
                      </Link>
                      . Enterprise buyers should read{" "}
                      <Link href="/field-service/guides/microsoft-dynamics-field-service-review" className={linkGreen}>
                        Microsoft Dynamics Field Service review
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/salesforce-field-service-review" className={linkGreen}>
                        Salesforce Field Service review
                      </Link>{" "}
                      alongside this guide.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      for evaluation criteria that apply across tiers, and{" "}
                      <Link href="/field-service/guides/cloud-vs-on-premise-field-service-software" className={linkGreen}>
                        cloud vs on-premise field service software
                      </Link>{" "}
                      when IT constraints differ by company size.
                    </p>
                  </div>
                </section>

                <section id="pricing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Per-tech subscriptions vs platform licensing.">Pricing Models and Total Cost</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SMB FSM typically charges per active technician or per user tier with published monthly rates.
                      Add-ons cover SMS, marketing, or advanced reporting. Total cost scales linearly with headcount and
                      stays predictable for owner-operators.
                    </p>
                    <p>
                      Enterprise FSM bundles into CRM, ERP, or ITSM license stacks with role-based SKUs, volume
                      discounts, and partner implementation SOWs. Year-one spend often includes services equal to or
                      greater than subscription fees. See{" "}
                      <Link href="/field-service/guides/microsoft-field-service-pricing-explained" className={linkGreen}>
                        Microsoft Field Service pricing explained
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/field-service-software-pricing-guide" className={linkGreen}>
                        field service software pricing guide
                      </Link>{" "}
                      for framework details.
                    </p>
                    <p>
                      Mid-market trades sometimes land in the middle: ServiceTitan and similar vertical suites carry
                      higher per-tech cost than Jobber but avoid full enterprise platform tax until IT mandates
                      consolidation.
                    </p>
                  </div>
                </section>

                <section id="implementation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Days to live vs quarters to stabilize.">Implementation and IT Ownership</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SMB rollouts import customers, configure tax rates, and train technicians in live jobs within
                      one to four weeks. Support comes from vendor onboarding teams; internal IT involvement is minimal
                      beyond SSO if requested.
                    </p>
                    <p>
                      Enterprise deployments require discovery workshops, data migration from legacy systems, integration
                      with ERP and identity providers, sandbox UAT, and phased regional go-lives. Internal project
                      managers and partner consultants coordinate change management for dispatchers and field crews
                      simultaneously.
                    </p>
                    <p>
                      Buying enterprise FSM without staffing the implementation is a common failure mode. Buying SMB
                      tools and customizing them into pseudo-enterprise workflows creates shadow IT. Match tool tier
                      to operational maturity, not aspirational headcount.
                    </p>
                  </div>
                </section>

                <section id="features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Depth vs speed on the dispatch board.">Feature Depth and Workflow Focus</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SMB FSM optimizes quote-to-cash: estimates, approvals, invoices, payments, and QuickBooks sync.
                      Marketing automations, review requests, and consumer booking pages ship native in many vertical
                      products.
                    </p>
                    <p>
                      Enterprise FSM optimizes case-to-resolution: entitlements, assets, SLA timers, multi-entity
                      security, and analytics tied to CRM or CMDB records. Billing may hand off to ERP; marketing lives
                      elsewhere. Compare platform peers in{" "}
                      <Link href="/field-service/guides/salesforce-competitors-for-field-service" className={linkGreen}>
                        Salesforce competitors for field service
                      </Link>
                      .
                    </p>
                    <p>
                      Feature parity slides mislead buyers. An enterprise optimization engine matters little if you
                      need same-day residential dispatch; SMB review requests matter little if regulators audit SLA
                      compliance reports.
                    </p>
                  </div>
                </section>

                <section id="adoption" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Technician UX and change management reality.">Adoption and Operational Fit</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SMB success hinges on technician mobile UX—offline jobs, simple forms, card payments on site.
                      Owners can enforce adoption because the tool is the schedule and the invoice; there is no parallel
                      spreadsheet culture to unwind.
                    </p>
                    <p>
                      Enterprise success hinges on governance: role-based forms, mandatory checklists, integration
                      discipline, and executive sponsorship across regions. Technicians may juggle multiple systems
                      during transition; hypercare periods extend months.
                    </p>
                    <p>
                      Right-size the purchase. A franchise with three locations may need ServiceTitan, not Dynamics. A
                      global OEM with entitlements in Salesforce should not force Jobber at subsidiaries without
                      integration strategy. When in doubt, pilot at one branch before enterprise-wide commit.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Cost, features, and growth-stage fit.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Field service tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Enterprise vs SMB Field Service Software | BeltStack Guide",
    description:
      "Compare enterprise and SMB field service software: pricing models, implementation timelines, feature depth, adoption patterns, and how to match FSM tier to company size.",
    keywords: [
      "enterprise field service software",
      "smb field service software",
      "enterprise vs smb fsm",
      "field service software for small business vs enterprise",
      "servicetitan vs salesforce field service",
      "field service implementation cost",
    ],
  };
}

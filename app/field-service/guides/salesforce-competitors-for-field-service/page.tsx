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
    q: "What is the closest Salesforce Field Service alternative for enterprise CRM shops?",
    a: "Microsoft Dynamics 365 Field Service is the most direct platform peer when you want CRM-native dispatch, asset tracking, and ERP integration inside an existing enterprise stack. ServiceNow Field Service Management fits when ServiceNow—not Salesforce—is already the workflow backbone.",
  },
  {
    q: "Which Salesforce Field Service alternative works for growing HVAC and plumbing companies?",
    a: "ServiceTitan leads for multi-truck trade contractors needing dispatch, pricebooks, memberships, and marketing in one vertical suite. Jobber and Housecall Pro serve smaller crews with faster setup and lower per-tech cost when Salesforce-scale platform investment is unnecessary.",
  },
  {
    q: "Can you use Jobber or Housecall Pro if you already have Salesforce Sales Cloud?",
    a: "Yes, many SMB and mid-market contractors run Salesforce for B2B sales while operations live in vertical FSM. Integrate customer and opportunity IDs rather than forcing field crews into CRM objects designed for desk agents.",
  },
  {
    q: "When does ServiceNow beat Salesforce Field Service?",
    a: "When field tasks are extensions of ITSM, CMDB assets, and internal service catalogs—not customer cases in Sales Cloud. Telco, utility, and large facilities programs with complex SLAs on the Now Platform often standardize on ServiceNow FSM instead of adding another CRM module.",
  },
  {
    q: "How should buyers compare alternatives without feature checklist bias?",
    a: "Model total cost at your headcount, run dispatch and mobile trials with real jobs, and score adoption by role—dispatcher, technician, and billing. Segment by company size using enterprise vs SMB criteria before assuming one competitor replaces Salesforce across every tier.",
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

const PAGE_HREF = "/field-service/guides/salesforce-competitors-for-field-service";

export default function SalesforceCompetitorsForFieldServicePage() {
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
                      Salesforce Competitors for Field Service
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Salesforce Competitors for Field Service
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare Salesforce Field Service alternatives by segment: enterprise platform peers like Dynamics
                    and ServiceNow, trade-focused suites like ServiceTitan, and SMB tools like Jobber.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Salesforce Field Service is not the only answer when field operations need better dispatch,
                      mobile execution, or SLA management. Alternatives split into three bands: CRM-native enterprise
                      platforms, ITSM and workflow platforms, and vertical FSM built for contractors who live on the
                      dispatch board.
                    </p>
                    <p>
                      The right competitor depends on whether you are expanding an existing Salesforce estate,
                      consolidating on Microsoft or ServiceNow, or running a trade business where quote-to-cash speed
                      matters more than CRM object unification.
                    </p>
                    <p>
                      Start with our{" "}
                      <Link href="/field-service/guides/salesforce-field-service-review" className={linkGreen}>
                        Salesforce Field Service review
                      </Link>{" "}
                      to understand what you are replacing. Browse the full market on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and run head-to-head tests on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      .
                    </p>
                    <p>
                      Segment expectations using{" "}
                      <Link href="/field-service/guides/enterprise-vs-smb-field-service-software" className={linkGreen}>
                        enterprise vs SMB field service software
                      </Link>{" "}
                      before assuming one Salesforce alternative fits every technician on payroll. Enterprise platform
                      swaps differ radically from adopting Jobber for a ten-person crew.
                    </p>
                  </div>
                </section>

                <section id="enterprise-peers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM- and platform-native replacements.">Enterprise Platform Alternatives</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong>Microsoft Dynamics 365 Field Service</strong> competes directly when buyers want CRM-native
                      dispatch inside a Microsoft stack. Strengths include Dynamics Finance integration, Azure IoT
                      scenarios, and unified identity. Read our{" "}
                      <Link href="/field-service/guides/microsoft-dynamics-field-service-review" className={linkGreen}>
                        Dynamics Field Service review
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/microsoft-field-service-pricing-explained" className={linkGreen}>
                        Microsoft Field Service pricing guide
                      </Link>{" "}
                      for TCO framing.
                    </p>
                    <p>
                      <strong>ServiceNow Field Service Management</strong> fits when ServiceNow already orchestrates
                      ITSM, HR, and security workflows and field tasks should share CMDB assets and SLA engines. See{" "}
                      <Link href="/field-service/guides/servicenow-field-service-review" className={linkGreen}>
                        ServiceNow Field Service review
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/is-servicenow-a-crm-or-erp" className={linkGreen}>
                        is ServiceNow a CRM or ERP
                      </Link>{" "}
                      for category clarity.
                    </p>
                    <p>
                      Both platform peers target multi-year implementations and internal IT ownership—not quick wins
                      for owner-operator trades.
                    </p>
                  </div>
                </section>

                <section id="trade-vertical" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Dispatch-first tools for contractor revenue.">Trade and Mid-Market Vertical FSM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong>ServiceTitan</strong> is the common Salesforce alternative for growing HVAC, plumbing,
                      electrical, and related trades that need marketing, memberships, pricebooks, and dispatch in one
                      opinionated suite. Implementation is heavier than Jobber but shallower than Salesforce Field
                      Service for typical contractor workflows.
                    </p>
                    <p>
                      <strong>Jobber</strong> and <strong>Housecall Pro</strong> serve SMB contractors who prioritize
                      fast setup, per-tech pricing, and mobile UX over CRM platform consolidation. They integrate with
                      QuickBooks and lightweight CRM tools rather than replacing Salesforce wholesale.
                    </p>
                    <p>
                      Choose vertical FSM when dispatcher throughput, technician adoption, and invoice speed outperform
                      CRM object unification on your scorecard. Pair with Salesforce for B2B sales when needed via
                      integration, not forced module expansion.
                    </p>
                  </div>
                </section>

                <section id="by-segment" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Matching alternatives to company size and stack.">How Alternatives Map by Segment</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong>Enterprise (500+ field roles, existing CRM/ITSM):</strong> Dynamics Field Service,
                      ServiceNow FSM, or staying on Salesforce if case-driven scheduling already works. Compare TCO and
                      integration depth—not mobile demo polish alone.
                    </p>
                    <p>
                      <strong>Mid-market trades (20–200 technicians, revenue-focused):</strong> ServiceTitan or similar
                      vertical suites unless a parent company mandates CRM-native FSM. Salesforce rarely wins here on
                      time-to-value.
                    </p>
                    <p>
                      <strong>SMB contractors (under 20 technicians):</strong> Jobber, Housecall Pro, or comparable
                      per-tech tools. Salesforce Field Service is economically and operationally mismatched for this
                      tier; see{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>
                        field service software for small business
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="choose" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Evaluation steps that prevent category mistakes.">How to Shortlist Salesforce Alternatives</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Document whether field work is case-driven (favor CRM or ServiceNow paths) or revenue-driven
                      (favor vertical FSM). List systems that must stay—ERP, marketing automation, phone—and score
                      integration cost per finalist.
                    </p>
                    <p>
                      Run parallel pilots with real urgent jobs, offline mobile completion, and billing handoff.
                      Involve dispatchers and technicians in scoring; IT-only selections often pick platforms crews
                      resist. Use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      criteria across every finalist.
                    </p>
                    <p>
                      Avoid dual FSM deployments. If Salesforce remains for sales, pick an operations system of record
                      for work orders and invoices and integrate once—not twice.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Enterprise peers, vertical FSM, and SMB tools.">FAQs</SectionTitle>
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
    title: "Salesforce Competitors for Field Service | BeltStack Guide",
    description:
      "Compare Salesforce Field Service alternatives: Dynamics, ServiceNow, ServiceTitan, Jobber, and Housecall Pro—mapped by enterprise, mid-market, and SMB segments.",
    keywords: [
      "salesforce field service competitors",
      "salesforce field service alternatives",
      "dynamics vs salesforce field service",
      "servicenow vs salesforce field service",
      "servicetitan vs salesforce",
      "best field service software enterprise",
    ],
  };
}

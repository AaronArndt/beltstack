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
    q: "Is Salesforce Field Service the same as Field Service Lightning?",
    a: "Field Service Lightning was the original branding for Salesforce's field module; the product is now commonly called Salesforce Field Service. It still runs on the Salesforce platform with the same core objects—work orders, service appointments, and mobile technician experiences tied to CRM records.",
  },
  {
    q: "Do you need Sales Cloud to use Salesforce Field Service?",
    a: "You need a Service Cloud foundation and Field Service licenses; Sales Cloud is not strictly required if your workflow starts in service cases rather than sales opportunities. Most enterprises already license multiple clouds, and Field Service pricing assumes CRM-native operations.",
  },
  {
    q: "How does Salesforce Field Service handle dispatch and scheduling?",
    a: "The dispatch console supports drag-and-drop scheduling, skills matching, and optimization add-ons for complex routing. Effectiveness depends on data hygiene—territories, service territories, and resource skills must be maintained. Many teams pair Salesforce scheduling with third-party optimization for dense urban routes.",
  },
  {
    q: "Can Salesforce Field Service replace dedicated FSM for HVAC contractors?",
    a: "Rarely for SMB trade contractors. Salesforce excels when service is an extension of enterprise CRM and case management. Dedicated FSM tools ship faster time-to-value for dispatch boards, flat-rate pricing, and technician UX tuned to home services workflows.",
  },
  {
    q: "What should CRM-heavy organizations verify before buying?",
    a: "Confirm mobile offline behavior, parts and inventory integration, billing handoff to ERP, and whether dispatchers can run day-one without Apex customization. Read field service vs CRM boundaries in our CRM guide and test whether Field Service owns operations or only extends cases.",
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

const PAGE_HREF = "/field-service/guides/salesforce-field-service-review";

export default function SalesforceFieldServiceReviewPage() {
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
                      Salesforce Field Service Review
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Salesforce Field Service Review
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    An educational review of Salesforce Field Service (Field Service Lightning): CRM-native dispatch,
                    enterprise strengths, gaps for trade contractors, and when to look elsewhere.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Salesforce Field Service extends the Salesforce platform with work orders, service appointments,
                      technician mobile flows, and a dispatch console tied to accounts and cases already in CRM. It is
                      built for organizations that treat field operations as the execution layer of customer
                      service—not a standalone dispatch product bought off a pricing page.
                    </p>
                    <p>
                      The product shines when service leaders already live in Service Cloud, when entitlements and
                      SLAs drive scheduling rules, and when IT wants one security model across sales, service, and
                      field. It struggles to compete on speed and simplicity with vertical FSM tools aimed at
                      residential trades.
                    </p>
                    <p>
                      Compare alternatives in{" "}
                      <Link href="/field-service/guides/salesforce-competitors-for-field-service" className={linkGreen}>
                        Salesforce competitors for field service
                      </Link>
                      . Clarify CRM vs operations boundaries in{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/can-crm-software-replace-fsm-software" className={linkGreen}>
                        can CRM software replace FSM software
                      </Link>
                      . For broader CRM context, see our{" "}
                      <Link href="/crm" className={linkGreen}>
                        CRM software hub
                      </Link>
                      .
                    </p>
                    <p>
                      Enterprise buyers weighing platform bets should also read{" "}
                      <Link href="/field-service/guides/microsoft-dynamics-field-service-review" className={linkGreen}>
                        Microsoft Dynamics Field Service review
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/enterprise-vs-smb-field-service-software" className={linkGreen}>
                        enterprise vs SMB field service software
                      </Link>{" "}
                      before committing to a CRM-native field module.
                    </p>
                  </div>
                </section>

                <section id="platform-fit" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM-native architecture and data model.">Platform Fit and Architecture</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Work orders, service appointments, and assigned resources are standard Salesforce objects.
                      Flows, Apex, and AppExchange packages extend them like any other cloud module. That flexibility
                      is powerful for enterprises with Salesforce centers of excellence; it is overhead for teams
                      without admins.
                    </p>
                    <p>
                      Customer context—cases, assets, entitlements, and knowledge articles—sits one click from the
                      dispatch console. When a technician arrives, mobile Field Service shows the same account history
                      agents saw on the phone. That continuity is the product&apos;s core value proposition versus bolt-on
                      FSM integrations.
                    </p>
                    <p>
                      Licensing stacks Service Cloud, Field Service, and often Sales or Experience Cloud seats.
                      Budget as a platform expansion, not a single app subscription. Map every role to a SKU before
                      comparing per-technician costs to ServiceTitan or Jobber.
                    </p>
                  </div>
                </section>

                <section id="strengths" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where Salesforce Field Service wins evaluations.">Strengths for Enterprise Service Teams</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Entitlement-driven scheduling, SLA timers, and case-to-work-order automation fit B2B service
                      models with contracted response times. Telecommunications, medical devices, and industrial
                      equipment companies often standardize here because field visits are case outcomes, not standalone
                      jobs.
                    </p>
                    <p>
                      Einstein and analytics layers can join field KPIs to broader CRM pipelines when data governance
                      is mature. Partner ecosystems deliver vertical accelerators—though quality varies and
                      implementation cost adds up.
                    </p>
                    <p>
                      Multi-cloud identity, compliance certifications, and global rollout playbooks match enterprises
                      already paying Salesforce enterprise agreements. Field Service inherits those investments rather
                      than starting a new vendor relationship.
                    </p>
                  </div>
                </section>

                <section id="gaps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where dedicated FSM still leads.">Gaps and Common Buyer Regrets</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Trade-specific workflows—membership billing, flat-rate pricebooks tuned to HVAC tasks, marketing
                      automation for local service areas—are not native. Teams either customize heavily or run parallel
                      systems, defeating consolidation goals.
                    </p>
                    <p>
                      Dispatchers from vertical FSM backgrounds often find the console configurable but not
                      opinionated. Route density, same-day capacity, and estimate-to-invoice speed require deliberate
                      configuration and sometimes third-party optimization apps.
                    </p>
                    <p>
                      Mobile technician UX improves release over release but still reflects enterprise CRM design
                      patterns. Test offline sync on actual devices in basements and industrial sites—not office Wi-Fi
                      demos alone.
                    </p>
                  </div>
                </section>

                <section id="evaluate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Decision criteria for CRM-centric buyers.">How to Decide If Salesforce Field Service Is Enough</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choose Salesforce Field Service when field visits are downstream of CRM cases, when you already
                      license Service Cloud at scale, and when integration tax matters more than best-in-class dispatch
                      UX. Choose dedicated FSM when dispatch throughput and technician adoption are the primary KPIs.
                    </p>
                    <p>
                      Run a side-by-side pilot: one week in Salesforce Field Service, one week in a vertical FSM
                      finalist from{" "}
                      <Link href="/field-service/guides/salesforce-competitors-for-field-service" className={linkGreen}>
                        Salesforce field service alternatives
                      </Link>
                      . Measure dispatcher clicks to assign urgent jobs, mobile time-to-complete, and billing lag.
                    </p>
                    <p>
                      Document which system owns the customer record, work order, invoice, and asset history. Ambiguity
                      drives the duplicate-entry problems outlined in{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        FSM vs CRM
                      </Link>{" "}
                      regardless of vendor.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Field Service Lightning, CRM, and trade fit.">FAQs</SectionTitle>
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
    title: "Salesforce Field Service Review | BeltStack Guide",
    description:
      "Educational review of Salesforce Field Service (Field Service Lightning): CRM-native dispatch, enterprise strengths, trade contractor gaps, and evaluation guidance.",
    keywords: [
      "salesforce field service review",
      "field service lightning",
      "salesforce fsm",
      "salesforce field service scheduling",
      "salesforce vs field service software",
      "enterprise field service crm",
    ],
  };
}

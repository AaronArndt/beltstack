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
    q: "Is ServiceNow a CRM?",
    a: "ServiceNow includes CRM-style sales and service capabilities through Customer Service Management and related apps, but the platform is broader than traditional CRM. It targets enterprise service workflows, IT operations, and employee experiences on one configurable data model--not only sales pipeline tracking.",
  },
  {
    q: "Is ServiceNow an ERP?",
    a: "No. ServiceNow is not a general ledger or full ERP replacement. It orchestrates workflows, cases, assets, and service delivery. Financial posting, tax, and core accounting still typically live in ERP systems like SAP or Oracle Financials, integrated with ServiceNow where needed.",
  },
  {
    q: "What category best describes ServiceNow?",
    a: "Analysts often classify ServiceNow as a digital workflow and enterprise service management platform. For field and customer service buyers, the relevant comparison is often ServiceNow CSM/FSM modules versus purpose-built field service software--not CRM vs ERP labels alone.",
  },
  {
    q: "How does ServiceNow compare to Jobber or ServiceTitan?",
    a: "Mid-market field service tools optimize dispatch boards, technician mobile UX, and trade-specific billing out of the box. ServiceNow excels when large enterprises need cross-department workflows, ITSM integration, and heavy customization--usually with longer implementation cycles and different pricing models.",
  },
  {
    q: "When should a service business evaluate ServiceNow?",
    a: "When IT and operations already standardize on ServiceNow for internal service, and customer-facing field service must share the same case, asset, and entitlement model at enterprise scale. Smaller contractors rarely need that footprint; they benefit faster from dedicated FSM products.",
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

const PAGE_HREF = "/field-service/guides/is-servicenow-a-crm-or-erp";

export default function IsServicenowACrmOrErpPage() {
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
                      Is ServiceNow a CRM or ERP?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Is ServiceNow a CRM or ERP?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    ServiceNow is neither a traditional CRM nor an ERP--it is an enterprise workflow platform with
                    customer service, field service, and IT modules that overlap parts of both categories.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buyers ask whether ServiceNow belongs in a CRM RFP or an ERP replacement project because the
                      platform touches customers, assets, cases, and billing-adjacent workflows. The accurate answer:
                      ServiceNow is a configurable workflow and data platform that can implement CRM-like and
                      service-management-like applications without being either category in the traditional sense.
                    </p>
                    <p>
                      ERP systems own the general ledger and enterprise financial consolidation. CRM systems own pipeline
                      and marketing automation for revenue teams. ServiceNow often sits between and around them--
                      orchestrating incidents, requests, entitlements, field tasks, and employee workflows on shared
                      records--integrated to ERP and CRM rather than replacing both.
                    </p>
                    <p>
                      For category boundaries read{" "}
                      <Link href="/field-service/guides/difference-between-erp-crm-and-fsm" className={linkGreen}>
                        difference between ERP, CRM, and FSM
                      </Link>
                      , plus{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs field service management software
                      </Link>
                      . For mid-market FSM alternatives see{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>
                      .
                    </p>
                    <p>
                      CRM-specific comparisons live on{" "}
                      <Link href="/crm" className={linkGreen}>
                        CRM
                      </Link>
                      ; operational depth for dispatched trades is in{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        what is field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="platform" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Workflow engine with app store modules.">What ServiceNow Actually Is</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ServiceNow began as IT service management (ITSM) software and expanded into HR, security,
                      customer service, field service management, and industry workflows. All apps share a common data
                      model, automation studio, and integration hub--enterprises buy the platform once and enable modules
                      as needed.
                    </p>
                    <p>
                      That architecture differs from standalone CRM or FSM products built for a single buyer persona.
                      Customization power trades off against out-of-the-box dispatch UX tuned for a ten-truck HVAC shop.
                    </p>
                    <p>
                      Large organizations already running ServiceNow for IT often extend the same case and asset records
                      to customer-facing field teams--one entitlement view from help desk to onsite technician.
                    </p>
                  </div>
                </section>

                <section id="crm-overlap" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Customer Service Management and sales workflows.">Where ServiceNow Overlaps CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Customer Service Management (CSM) handles cases, omnichannel engagement, knowledge bases, and
                      service-level commitments. Sales and Order Management apps add quote and order flows. These
                      capabilities compete with portions of Salesforce Service Cloud or HubSpot Service Hub--especially
                      when service is the product, not only a support cost center.
                    </p>
                    <p>
                      Traditional CRM marketing automation and SDR pipeline tooling remain stronger in dedicated CRM
                      suites for many B2B sales teams. Service businesses selling installs and maintenance often pair a
                      marketing CRM with specialized FSM--see{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>
                      .
                    </p>
                    <p>
                      ServiceNow wins when customer service, IT, HR, and field operations must share one case history
                      and escalation path.
                    </p>
                  </div>
                </section>

                <section id="erp-overlap" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Financial system of record stays elsewhere.">Where ServiceNow Differs From ERP</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ERP provides chart of accounts, accounts payable and receivable, inventory valuation, manufacturing
                      cost accounting, and statutory reporting. ServiceNow may trigger billing events or sync orders to
                      ERP, but finance teams still close books in SAP, Oracle, NetSuite, or similar systems.
                    </p>
                    <p>
                      Treat ServiceNow as operational orchestration feeding ERP transactions--similar to how{" "}
                      <Link href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software" className={linkGreen}>
                        FSM invoicing
                      </Link>{" "}
                      hands off to accounting. Warehouse execution may additionally require WMS modules discussed in{" "}
                      <Link href="/field-service/guides/sap-vs-oracle-wms" className={linkGreen}>
                        SAP vs Oracle WMS
                      </Link>
                      .
                    </p>
                    <p>
                      Confusing ServiceNow with ERP leads to gaping holes in tax, consolidation, and procurement controls.
                    </p>
                  </div>
                </section>

                <section id="field-service" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Enterprise FSM vs trade-focused tools.">ServiceNow for Field Service Buyers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ServiceNow Field Service Management targets complex entitlements, multi-skill routing, and
                      integration with CSM and IT asset data. Utilities, telecom, medical device service, and global
                      manufacturers appear frequently in reference accounts--environments where truck rolls tie to
                      contracted SLAs and serialized assets.
                    </p>
                    <p>
                      Residential contractors and local trades usually adopt platforms like Jobber, Housecall Pro, or
                      ServiceTitan faster because pricing, mobile apps, and dispatch boards fit out of the box. Evaluate
                      ServiceNow when enterprise architecture mandates one platform and dedicated FSM cannot integrate
                      deeply enough with existing ServiceNow investments.
                    </p>
                    <p>
                      Trial scenarios should mirror your worst dispatch day--not demo scripts--using guidance from{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/common-field-service-management-mistakes" className={linkGreen}>
                        common field service management mistakes
                      </Link>{" "}
                      to score outcomes.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Platform classification for buyers.">FAQs</SectionTitle>
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
    title: "Is ServiceNow a CRM or ERP? | BeltStack Guide",
    description:
      "ServiceNow is not traditional CRM or ERP--learn what the platform actually does, where it overlaps each category, and when field service buyers should consider it.",
    keywords: [
      "is servicenow a crm",
      "is servicenow an erp",
      "servicenow field service",
      "enterprise service management",
      "servicenow vs fsm",
      "customer service management",
    ],
  };
}

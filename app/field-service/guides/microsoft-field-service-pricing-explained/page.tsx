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
    q: "Does Dynamics 365 Field Service require a separate license from Sales or Customer Service?",
    a: "Yes. Microsoft sells Field Service as its own Dynamics 365 app license. Dispatchers, planners, and technicians who use the mobile app typically need Field Service licenses. Users who only work in Sales or Customer Service need those app licenses instead. Bundles exist, but Field Service is not automatically included in every Dynamics subscription.",
  },
  {
    q: "How does Microsoft price Field Service for technicians in the field?",
    a: "Technicians running the Field Service mobile app generally need a Field Service license tier that includes mobile execution—not just a read-only portal seat. Microsoft distinguishes full users from lighter roles; count every person who creates or completes work orders on a device when you model per-user cost.",
  },
  {
    q: "What add-ons commonly increase Dynamics Field Service total cost?",
    a: "IoT and Connected Field Service connectors, advanced scheduling optimization, additional storage, Power Platform automations, and third-party mapping or parts integrations often carry separate fees. Partner middleware for ERP or legacy systems is another recurring line item enterprise buyers underestimate.",
  },
  {
    q: "Why is implementation often a larger expense than licenses for Dynamics Field Service?",
    a: "Enterprise deployments require data migration, role-based security, workflow design, ERP integration, and technician change management. Microsoft partners typically quote implementation in the tens to hundreds of thousands of dollars depending on site count, customizations, and integration depth—often exceeding year-one license spend.",
  },
  {
    q: "Is Dynamics 365 Field Service priced for small contractors?",
    a: "Per-user Dynamics licensing plus implementation overhead targets mid-market and enterprise service organizations already on Microsoft 365 or Dynamics. Smaller HVAC and plumbing shops usually find dedicated FSM tools with simpler per-tech pricing a better fit unless they are subsidiaries of a larger Dynamics estate.",
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

const PAGE_HREF = "/field-service/guides/microsoft-field-service-pricing-explained";

export default function MicrosoftFieldServicePricingExplainedPage() {
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
                      Microsoft Field Service Pricing Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Microsoft Field Service Pricing Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How Microsoft Dynamics 365 Field Service licensing works: per-user tiers, common add-ons,
                    implementation ranges, and what enterprise buyers should budget beyond the sticker price.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Microsoft Dynamics 365 Field Service is sold as part of the broader Dynamics 365 suite, not as a
                      standalone per-truck subscription like many SMB field service tools. Pricing is per named user,
                      organized into application licenses that map to roles—dispatchers, technicians, and back-office
                      staff rarely share the same SKU.
                    </p>
                    <p>
                      That model rewards organizations already standardized on Microsoft 365, Azure, and Dynamics CRM or
                      ERP modules. It penalizes buyers who treat Field Service as a single app purchase without counting
                      integration, partner services, and the Power Platform automations teams expect in production.
                    </p>
                    <p>
                      For general FSM pricing concepts—per tech vs per user, add-on creep, and headcount math—start with{" "}
                      <Link href="/field-service/guides/field-service-software-pricing-guide" className={linkGreen}>
                        field service software pricing explained
                      </Link>
                      . Compare deployment models in{" "}
                      <Link href="/field-service/guides/cloud-vs-on-premise-field-service-software" className={linkGreen}>
                        cloud vs on-premise field service software
                      </Link>{" "}
                      and how Field Service sits relative to finance systems in{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs field service management software
                      </Link>
                      .
                    </p>
                    <p>
                      Enterprise buyers should also read{" "}
                      <Link href="/field-service/guides/enterprise-vs-smb-field-service-software" className={linkGreen}>
                        enterprise vs SMB field service software
                      </Link>{" "}
                      before modeling costs. Shortlist alternatives on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and run scenarios on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      using your actual dispatcher and technician counts.
                    </p>
                  </div>
                </section>

                <section id="licensing-model" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Per-user apps and role-based SKUs.">How Dynamics 365 Field Service Licensing Works</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Microsoft licenses Field Service as a Dynamics 365 application. Each person who schedules work,
                      manages agreements, or executes jobs on the mobile app needs an appropriate license tier. Full
                      users—dispatchers, service managers, and technicians updating work orders—typically require the
                      Field Service app license rather than a lightweight Team member seat.
                    </p>
                    <p>
                      Dynamics bundles and enterprise agreements can blend Field Service with Sales, Customer Service,
                      or Finance modules. The effective per-user rate depends on which apps each role touches. A
                      dispatcher who also manages customer cases may need multiple entitlements or a higher bundle tier.
                    </p>
                    <p>
                      Microsoft publishes list prices that change periodically; treat public rate cards as a starting
                      frame, not a quote. Volume discounts, nonprofit pricing, and existing Enterprise Agreement credits
                      materially shift the number. Request a formal proposal that lists every role and SKU—generic
                      per-seat averages hide the real mix.
                    </p>
                  </div>
                </section>

                <section id="add-ons" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Capabilities that inflate the subscription stack.">Common Add-Ons and Capacity Costs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Connected Field Service and IoT scenarios add connector and data ingestion costs when equipment
                      telemetry drives proactive work orders. Advanced scheduling optimization—multi-resource routing
                      across territories—may require premium capacity or third-party extensions beyond base dispatch
                      boards.
                    </p>
                    <p>
                      Power Automate flows, custom Power Apps for checklists, and Copilot features consume Power Platform
                      credits or premium connectors. Document storage, API call volumes, and sandbox environments for
                      UAT also accrue on Azure-backed tenants at scale.
                    </p>
                    <p>
                      Mapping, parts catalogs, warranty lookups, and ERP inventory sync often come through ISV
                      solutions billed separately. Budget these as recurring subscription lines, not one-time setup
                      fees, when you model three-year total cost of ownership.
                    </p>
                  </div>
                </section>

                <section id="implementation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Partner services, migration, and go-live risk.">Implementation and Integration Ranges</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Microsoft partners typically scope Field Service implementations in phases: discovery, data
                      migration, configuration, integration, UAT, and hypercare. Small mid-market rollouts with
                      limited customization often land in the low six figures; multi-country enterprises with ERP
                      integration and custom mobile workflows frequently reach mid six figures or higher.
                    </p>
                    <p>
                      Integration with Dynamics 365 Finance, SAP, or legacy billing systems drives much of that variance.
                      Real-time inventory availability, intercompany invoicing, and tax rules rarely work out of the
                      box. Plan integration sprints before you promise go-live dates to field crews.
                    </p>
                    <p>
                      Change management—technician training, dispatcher playbook rewrites, and retiring parallel
                      spreadsheets—adds internal labor cost Microsoft invoices do not capture. For a full product
                      perspective beyond pricing, see our{" "}
                      <Link href="/field-service/guides/microsoft-dynamics-field-service-review" className={linkGreen}>
                        Microsoft Dynamics Field Service review
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="budget-framework" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A practical TCO worksheet for buyers.">How to Build a Realistic Budget</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List every role that will touch Field Service in year one: dispatch, planning, technicians,
                      billing clerks, and executives who need dashboards. Assign a license tier to each headcount and
                      multiply by list price, then apply your expected discount—not the best-case EA renewal rate.
                    </p>
                    <p>
                      Add implementation (often 1–3× year-one license spend for net-new Dynamics customers), annual
                      partner support retainers, add-on subscriptions, and internal project staff. Compare that total
                      to simpler FSM tools priced per technician when you are a standalone service contractor without
                      an existing Dynamics footprint.
                    </p>
                    <p>
                      Run a pilot with one territory and ten technicians before enterprise-wide commit. Measure time to
                      first invoice, mobile adoption, and dispatcher board throughput. The right financial decision
                      matches platform cost to integration value—not brochure feature parity with Salesforce or
                      ServiceNow alternatives.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Licensing, add-ons, and enterprise TCO.">FAQs</SectionTitle>
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
    title: "Microsoft Field Service Pricing Explained | BeltStack Guide",
    description:
      "Understand Microsoft Dynamics 365 Field Service pricing: per-user licensing, add-ons, implementation ranges, and how enterprise buyers should estimate total cost.",
    keywords: [
      "microsoft dynamics 365 field service pricing",
      "dynamics field service licensing",
      "microsoft field service cost",
      "dynamics 365 per user pricing",
      "field service implementation cost",
      "enterprise field service software pricing",
    ],
  };
}

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
    q: "Who is Dynamics 365 Field Service best suited for?",
    a: "Organizations already on Microsoft Dynamics or Microsoft 365 that run multi-site field operations with complex service agreements, asset tracking, and ERP-backed billing. Utilities, industrial equipment service, and large facilities contractors with dedicated IT staff fit better than owner-operator trades shops.",
  },
  {
    q: "How strong is the Dynamics Field Service mobile app for technicians?",
    a: "The mobile experience supports offline work orders, signatures, photos, and parts consumption when configured well. Adoption depends heavily on implementation quality—out-of-the-box layouts may feel enterprise-heavy compared to Jobber or ServiceTitan until you tune forms and offline sync policies.",
  },
  {
    q: "Does Dynamics Field Service replace a separate CRM?",
    a: "It extends Dynamics Customer Service and Sales data models rather than replacing them. Customer history, cases, and agreements live in the same platform when those apps are licensed. Teams without Dynamics CRM still need Customer Service or Sales modules for full quote-to-case continuity.",
  },
  {
    q: "What are the main limitations buyers report?",
    a: "Implementation complexity, partner dependency, and licensing opacity top the list. Dispatchers accustomed to trade-specific boards may find optimization and UX less polished than vertical FSM suites until customized. Real-time ERP inventory sync often requires additional integration investment.",
  },
  {
    q: "How does Dynamics Field Service compare to Salesforce Field Service?",
    a: "Both target enterprise buyers with CRM-native field modules. Dynamics wins when Finance, Azure, and Microsoft identity are already standard. Salesforce wins when Sales Cloud and Field Service Lightning are entrenched. Compare operational fit and integration cost—not feature checklist parity alone.",
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

const PAGE_HREF = "/field-service/guides/microsoft-dynamics-field-service-review";

export default function MicrosoftDynamicsFieldServiceReviewPage() {
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
                      Microsoft Dynamics Field Service Review
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Microsoft Dynamics Field Service Review
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    An educational look at Dynamics 365 Field Service: enterprise strengths, common limitations,
                    Microsoft ecosystem fit, and when it beats or loses to trade-focused FSM platforms.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Microsoft Dynamics 365 Field Service is the field operations module inside Microsoft&apos;s CRM and
                      ERP ecosystem. It connects work orders, resource scheduling, agreements, and technician mobile
                      apps to customer records already living in Dynamics Sales or Customer Service—not a greenfield
                      dispatch tool for a ten-truck HVAC shop.
                    </p>
                    <p>
                      Buyers evaluating Dynamics Field Service are usually mid-market or enterprise service
                      organizations with existing Microsoft contracts, multi-country operations, or asset-centric
                      service models tied to installed equipment. The product rewards platform consolidation; it
                      punishes teams looking for fast self-serve setup.
                    </p>
                    <p>
                      Understand cost structure in{" "}
                      <Link href="/field-service/guides/microsoft-field-service-pricing-explained" className={linkGreen}>
                        Microsoft Field Service pricing explained
                      </Link>
                      . Position it against finance systems in{" "}
                      <Link href="/field-service/guides/erp-vs-field-service-management-software" className={linkGreen}>
                        ERP vs field service management software
                      </Link>{" "}
                      and use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      for evaluation criteria that still apply at enterprise scale.
                    </p>
                    <p>
                      Compare Dynamics against other platforms on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      with scenarios from your dispatch board, not demo scripts alone.
                    </p>
                  </div>
                </section>

                <section id="strengths" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where Dynamics Field Service earns its place.">Core Strengths</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Unified customer and asset data is the headline advantage. When agreements, cases, and work orders
                      share one Dynamics data model, dispatchers see service history without swivel-chair integrations.
                      Connected Field Service can ingest IoT alerts to generate proactive work orders for industrial
                      equipment scenarios.
                    </p>
                    <p>
                      Scheduling supports skills, territories, and resource pools at scale. Integration with Dynamics
                      365 Finance, Power BI, and Azure services gives CIOs a coherent security and compliance story.
                      Microsoft identity and role-based access align with enterprises that already govern M365 tenants.
                    </p>
                    <p>
                      For organizations standardizing on Microsoft, Field Service avoids the middleware tax of bolting a
                      vertical FSM tool onto Dynamics CRM. Customization through Power Platform lets teams extend
                      checklists and approvals without waiting for vendor roadmaps—when they invest in proper
                      governance.
                    </p>
                  </div>
                </section>

                <section id="limitations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Friction points enterprise buyers should expect.">Limitations and Tradeoffs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Implementation is rarely turnkey. Partners configure entities, mobile offline profiles, and
                      workflows; go-live timelines stretch when ERP inventory or billing rules enter scope. Buyers
                      without internal Dynamics admins should assume ongoing partner reliance.
                    </p>
                    <p>
                      Dispatch UX and route optimization may feel less opinionated than trade-specific platforms until
                      customized. Residential service contractors accustomed to ServiceTitan-style marketing and
                      membership workflows will not find those patterns native—they must be built or integrated.
                    </p>
                    <p>
                      Licensing complexity makes true per-technician cost opaque. See{" "}
                      <Link href="/field-service/guides/enterprise-vs-smb-field-service-software" className={linkGreen}>
                        enterprise vs SMB field service software
                      </Link>{" "}
                      for why the same feature list carries different adoption risk at different company sizes.
                    </p>
                  </div>
                </section>

                <section id="fit" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Profiles that match—and mismatch—the platform.">Who It Fits Best</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Strong fit: multi-site B2B service organizations, utilities, medical device field teams, and
                      industrial OEMs with entitlement-driven maintenance already on Dynamics. IT-led selections where
                      Azure, Entra ID, and Finance integration are non-negotiable.
                    </p>
                    <p>
                      Weak fit: owner-operated home services, franchises wanting out-of-box marketing automation, and
                      teams that need go-live in weeks without partner budgets. Those buyers should prioritize vertical
                      FSM with transparent per-tech pricing on our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      hub.
                    </p>
                    <p>
                      Hybrid fit: enterprise subsidiaries running local trade crews sometimes deploy lighter FSM at the
                      edge while headquarters standardizes Dynamics for national accounts. Document integration
                      boundaries before assuming one platform serves both models.
                    </p>
                  </div>
                </section>

                <section id="evaluate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Proof points beyond the sales demo.">How to Evaluate Before You Commit</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run a paid proof of concept with your data: real customer sites, actual technician devices, and
                      one ERP integration path. Test urgent job insertion on the dispatch board, offline mobile
                      completion, and invoice handoff to Finance—not canned Contoso samples.
                    </p>
                    <p>
                      Interview reference customers in your industry segment with similar headcount. Ask about
                      hypercare duration, mobile adoption rates after ninety days, and whether dispatchers still export
                      to spreadsheets. Compare findings against{" "}
                      <Link href="/field-service/guides/salesforce-competitors-for-field-service" className={linkGreen}>
                        Salesforce Field Service alternatives
                      </Link>{" "}
                      if your organization is platform-neutral.
                    </p>
                    <p>
                      Build a three-year TCO model that includes licenses, implementation, partner retainers, and
                      internal project staff. The right enterprise FSM decision optimizes total platform coherence—not
                      the shiniest mobile demo in week one.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Enterprise fit, mobile, and ecosystem questions.">FAQs</SectionTitle>
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
    title: "Microsoft Dynamics Field Service Review | BeltStack Guide",
    description:
      "Educational review of Microsoft Dynamics 365 Field Service: enterprise strengths, limitations, Microsoft ecosystem fit, and evaluation guidance for service organizations.",
    keywords: [
      "microsoft dynamics field service review",
      "dynamics 365 field service",
      "microsoft field service software",
      "enterprise field service management",
      "dynamics field service mobile",
      "microsoft fsm vs servicetitan",
    ],
  };
}

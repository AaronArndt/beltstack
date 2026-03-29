import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmCompareUrl, getHelpdeskReviewUrl, getHelpdeskCompareUrl } from "@/lib/routes";

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
    q: "Is a helpdesk part of a CRM?",
    a: "Sometimes. Some vendors bundle light ticketing with CRM; others sell service hub add-ons. Functionally, CRM optimizes presale pipeline and account revenue; helpdesk optimizes post-sale cases, SLAs, and support history. You can buy both from one suite or run best-of-breed with integration—either is valid if data stays consistent.",
  },
  {
    q: "Which do I buy first, CRM or helpdesk?",
    a: "If revenue is limited by follow-up, pipeline visibility, or quoting, start with CRM. If churn or support load is burning the team—missed tickets, no SLA visibility, angry customers in DMs—start with helpdesk. Many B2B teams add CRM first; product-led SaaS and ecommerce often add helpdesk earlier because support volume arrives before a formal sales motion.",
  },
  {
    q: "Can one team use the CRM and another the helpdesk without integration?",
    a: "They can, but agents and reps lose context: sales may not see open tickets; support may not see deal stage or contract terms. Minimum viable alignment is shared customer identity (email or account ID) and sync of key fields. Deeper integrations attach tickets to deals or show subscription status in the CRM sidebar.",
  },
  {
    q: "Does Intercom count as CRM or helpdesk?",
    a: "Intercom spans messaging, automation, and support inbox features—positioning varies by plan. For buyer decisions, ask whether your primary pain is pipeline management (CRM-first) or ticket throughput and macros (helpdesk-first); compare Intercom in that light alongside tools like Zendesk and HubSpot on our review pages.",
  },
  {
    q: "Where can I compare specific CRM and helpdesk vendors?",
    a: "Use our CRM comparisons (for example HubSpot vs Salesforce) and helpdesk comparisons (for example Zendesk vs Freshdesk), then read individual reviews. This guide stays category-level so it stays accurate as vendors bundle and unbundle modules.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "CRM + service add-ons", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zendesk", logoSrc: "/Logos/zendesk.jpeg", rating: 4.5, bestFor: "Helpdesk depth", reviewHref: getHelpdeskReviewUrl("zendesk") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline-first CRM", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "Helpdesk Guides", href: "/helpdesk/guides" },
  { label: "What is CRM Software", href: "/crm/guides/what-is-crm-software" },
  { label: "How to Choose Helpdesk Software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
  { label: "Shared Inbox vs Helpdesk", href: "/helpdesk/guides/shared-inbox-vs-helpdesk-software" },
  { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
  { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
];

export default function CrmVsHelpdeskSoftwarePage() {
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
                      <Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        CRM
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/crm/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      CRM vs Helpdesk Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    CRM vs Helpdesk Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Understand how CRM and helpdesk tools differ, when you need one or both, and how to connect sales and
                    support data without duplicate work—whether you buy a suite or integrate separate products.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buyers comparing CRM and helpdesk are usually deciding where to spend the next software dollar—or
                      untangling overlapping demos that both claim to “know the customer.” The distinction is workflow: CRM
                      systems center revenue activities (leads, opportunities, activities, quotes); helpdesk systems center
                      post-sale work (tickets, SLAs, macros, knowledge base, satisfaction surveys). Overlap grows as vendors
                      bundle modules, but the jobs-to-be-done stay different.
                    </p>
                    <p>
                      This page sits in our <Link href="/crm/guides" className={linkGreen}>CRM guides</Link> hub and is also
                      listed from <Link href="/helpdesk/guides" className={linkGreen}>helpdesk guides</Link> so you can reach
                      it from either research path. For deep dives, open{" "}
                      <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link> and{" "}
                      <Link href="/helpdesk/guides/how-to-choose-helpdesk-software" className={linkGreen}>
                        how to choose helpdesk software
                      </Link>
                      ; for products, start at <Link href="/crm" className={linkGreen}>CRM software</Link> and{" "}
                      <Link href="/helpdesk" className={linkGreen}>helpdesk software</Link>.
                    </p>
                  </div>
                </section>
                <section id="definitions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Plain-language scope for each category.">What CRM and Helpdesk Each Do</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">CRM (customer relationship management)</strong> helps teams track
                      people and companies through a buying journey: pipeline stages, owner assignment, activities, and
                      forecasting. Tools like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>,{" "}
                      <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, and{" "}
                      <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> compete on ease of
                      use, automation, and enterprise depth—see{" "}
                      <Link href={getCrmCompareUrl("hubspot-vs-salesforce")} className={linkGreen}>HubSpot vs Salesforce</Link>{" "}
                      for a head-to-head example.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Helpdesk (customer support software)</strong> turns conversations into
                      trackable tickets with queues, routing rules, and reporting on backlog and response time. Products such
                      as <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk</Link>,{" "}
                      <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk</Link>, and{" "}
                      <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout</Link> focus on agent
                      efficiency and customer-visible quality; compare approaches in{" "}
                      <Link href={getHelpdeskCompareUrl("zendesk-vs-freshdesk")} className={linkGreen}>
                        Zendesk vs Freshdesk
                      </Link>{" "}
                      and{" "}
                      <Link href="/helpdesk/guides/shared-inbox-vs-helpdesk-software" className={linkGreen}>
                        shared inbox vs helpdesk
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="when-each" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Map software to the bottleneck.">When You Need CRM, Helpdesk, or Both</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">CRM-first signals</strong> — Leads slip through cracks, pipeline
                          is managed in spreadsheets, or leadership cannot forecast from live data.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Helpdesk-first signals</strong> — Response times are inconsistent,
                          agents lack shared history, or ecommerce and SaaS support scale faster than informal inboxes allow.
                          Our{" "}
                          <Link href="/helpdesk/guides/helpdesk-software-for-ecommerce" className={linkGreen}>
                            ecommerce helpdesk workflows
                          </Link>{" "}
                          and{" "}
                          <Link href="/helpdesk/guides/helpdesk-software-for-saas-companies" className={linkGreen}>
                            SaaS support
                          </Link>{" "}
                          guides spell out those patterns.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Both</strong> — You run recurring revenue and renewal risk depends
                          on both selling well and serving well. Integration (or a suite with honest service SKUs) keeps churn
                          reasons visible to sales and success.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="integration" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Avoid two silos called “customer 360.”">Connecting CRM and Helpdesk Data</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The trustworthy approach is to define a single customer key (account ID, domain, or contract ID) and
                      sync enough context that reps see open severity‑1 tickets and agents see entitlement or plan tier—not to
                      dump every field both ways. Native bundles (for example CRM plus service from the same vendor) can
                      reduce integration tax; best-of-breed stacks can win on depth if you have light IT resource for
                      middleware or supported connectors.
                    </p>
                    <p>
                      For evaluation discipline on the support side, pair this article with{" "}
                      <Link href="/helpdesk/guides/helpdesk-software-pricing-guide" className={linkGreen}>
                        helpdesk pricing explained
                      </Link>{" "}
                      and <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM</Link>{" "}
                      so total cost and adoption risk stay in view.
                    </p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How we think about reliable software advice.">Experience and Transparency</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack separates educational guides from product reviews so you can verify claims on vendor sites and
                      in trials. Category comparisons age quickly when vendors rebundle features; this guide stays anchored to
                      workflows—pipeline vs ticket queue—so it stays useful even as product names change. When you are ready
                      to shortlist, use hub pages and comparisons linked above rather than relying on generic “all-in-one”
                      marketing copy alone.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM vs helpdesk" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-vs-helpdesk-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "CRM vs Helpdesk Software: What’s the Difference? | BeltStack",
    description:
      "Learn how CRM and customer support helpdesk software differ, when to implement each or both, and how to connect sales and support for a consistent customer record.",
  };
}

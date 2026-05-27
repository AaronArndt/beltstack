import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedInvoicingResources } from "@/components/guides/RelatedInvoicingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getInvoicingReviewUrl } from "@/lib/routes";

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
    q: "What is self-hosted invoicing software?",
    a: "Self-hosted invoicing software runs on infrastructure you control—your own server, VPS, or private cloud—instead of a vendor-managed SaaS environment. You own backups, updates, and uptime responsibilities.",
  },
  {
    q: "What is cloud invoicing software?",
    a: "Cloud invoicing software is hosted and maintained by the vendor. Users access it through the web without managing servers or updates directly. Examples include FreshBooks, QuickBooks Online invoicing, and Zoho Invoice cloud tiers.",
  },
  {
    q: "Is self-hosted invoicing more secure?",
    a: "It can be, if your team has strong security operations—patching, backups, access control, and monitoring. Otherwise, reputable cloud vendors often provide better default security maintenance for small teams without dedicated IT staff.",
  },
  {
    q: "Who should choose self-hosted invoicing?",
    a: "Businesses with strict data residency requirements, technical staff for maintenance, or a preference for open-source control often consider self-hosted options. Cost-sensitive teams with DevOps skills may also self-host to avoid per-seat SaaS fees at scale.",
  },
  {
    q: "What is a common self-hosted invoicing option?",
    a: "Invoice Ninja is a widely evaluated open-source option with both cloud and self-hosted deployment models. Teams compare it against managed SaaS when they want exportable data and deployment flexibility.",
  },
  {
    q: "Does self-hosted invoicing cost less long term?",
    a: "Sometimes. Subscription fees may drop, but you still pay for hosting, backups, SSL, monitoring, and staff time for maintenance. Total cost of ownership is not automatically lower than cloud SaaS.",
  },
  {
    q: "Can I switch from self-hosted to cloud later?",
    a: "Yes, with migration planning. Export customers, invoices, and settings; validate recurring schedules; and test payment processor cutover before decommissioning your server. Treat it like any invoicing platform switch.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Invoice Ninja", logoSrc: "/Logos/invoiceninja.jpeg", rating: 4.3, bestFor: "Self-hosted and open source", reviewHref: getInvoicingReviewUrl("invoice-ninja") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Managed cloud deployment", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Fully managed SaaS", reviewHref: getInvoicingReviewUrl("freshbooks") },
];

export default function SelfHostedVsCloudInvoicingSoftwarePage() {
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
                    <li><Link href="/invoicing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Self-Hosted vs Cloud Invoicing Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Self-Hosted vs Cloud Invoicing Software</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare self-hosted and cloud invoicing software: data control, security, maintenance burden, total cost, and which deployment model fits your team.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Deployment model matters as much as feature lists. Self-hosted invoicing gives more control over data location and customization, while cloud invoicing reduces infrastructure burden and speeds implementation. The wrong model creates hidden ops work that billing software is supposed to eliminate.
                    </p>
                    <p>
                      Most small businesses should default to cloud SaaS unless they have a specific compliance, residency, or ownership requirement. Self-hosted shines when technical staff already run servers and want open-source extensibility—not when a founder is learning invoicing basics.
                    </p>
                    <p>
                      Hybrid thinking helps: some products offer both models. Invoice Ninja is a common example—teams can start cloud and self-host later, or the reverse, if migration paths are planned deliberately.
                    </p>
                    <p>
                      For open-source options, see{" "}
                      <Link href="/invoicing/guides/best-free-invoicing-software" className={linkGreen}>best free invoicing software</Link>{" "}
                      and our{" "}
                      <Link href={getInvoicingReviewUrl("invoice-ninja")} className={linkGreen}>Invoice Ninja review</Link>.
                    </p>
                  </div>
                </section>
                <section id="self-hosted" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Control and ownership trade-offs.">Self-Hosted Invoicing: Pros and Cons</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Self-hosted deployments appeal when customer and invoice data must stay in a specific region or environment. You can tune infrastructure, integrate with internal systems, and avoid vendor lock-in on hosting terms—at the cost of operational ownership.
                    </p>
                    <p><strong className="text-[#1A2D48]">Pros:</strong> data residency control, deeper customization, potential long-term cost flexibility at scale, and open-source auditability.</p>
                    <p><strong className="text-[#1A2D48]">Cons:</strong> you own backups, updates, security patching, SSL renewal, and uptime monitoring. Billing downtime during server issues directly delays cash collection.</p>
                    <p>
                      Budget ongoing maintenance time, not just setup. A self-hosted invoice server that nobody patches becomes a liability faster than a neglected SaaS account because you alone are responsible for fixes.
                    </p>
                  </div>
                </section>
                <section id="cloud" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why most small teams choose SaaS.">Cloud Invoicing: Pros and Cons</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cloud invoicing is the default for good reason: you can send a professional invoice the same day you sign up. Vendors handle uptime, security patches, and payment processor integrations that would take weeks to replicate self-hosted.
                    </p>
                    <p><strong className="text-[#1A2D48]">Pros:</strong> faster setup, automatic updates, managed security baseline, lower IT overhead, and mobile access without VPN complexity.</p>
                    <p><strong className="text-[#1A2D48]">Cons:</strong> less infrastructure control, ongoing subscription costs, and dependency on vendor uptime and pricing changes.</p>
                    <p>
                      Compare managed SaaS options on{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/free-vs-paid-invoicing-software" className={linkGreen}>free vs paid invoicing software</Link>{" "}
                      if budget is the primary constraint.
                    </p>
                  </div>
                </section>
                <section id="decision-framework" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to choose the right deployment model.">Decision Framework</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choose cloud invoicing if you want the fastest path to reliable billing with minimal IT burden. Choose self-hosted when compliance, customization, or ownership requirements outweigh operational complexity—and you have someone accountable for server health.
                    </p>
                    <p>
                      Score five factors: data residency needs, in-house technical capacity, integration requirements, budget horizon (monthly SaaS vs infrastructure time), and recovery expectations if billing is down for a day. Weak answers on capacity push most teams to cloud.
                    </p>
                    <p>
                      Also evaluate payment and accounting integrations in{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/invoicing-software-vs-accounting-software" className={linkGreen}>invoicing software vs accounting software</Link>.{" "}
                      Deployment model does not remove the need for clean sync to books.
                    </p>
                  </div>
                </section>
                <section id="operations-checklist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to document before you commit.">Operations Checklist</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Self-hosted teams</strong> should document backup frequency, restore tests, patch cadence, and who gets paged when invoicing is unreachable.</p>
                    <p><strong className="text-[#1A2D48]">Cloud teams</strong> should document export procedures, admin access controls, and vendor exit steps if you switch platforms later.</p>
                    <p>
                      Either model should define how paid invoices reconcile to accounting. See{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>how businesses reconcile invoices and payments</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Deployment model questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Self-Hosted and Cloud Invoicing Tools" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/self-hosted-vs-cloud-invoicing-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Self-Hosted vs Cloud Invoicing Software (2026) | BeltStack Guide",
    description:
      "Compare self-hosted and cloud invoicing software: Invoice Ninja vs SaaS tools, security, maintenance, total cost of ownership, and a decision framework for small businesses.",
    keywords: [
      "self-hosted invoicing software",
      "cloud invoicing software",
      "Invoice Ninja self-hosted",
      "open source invoicing",
      "SaaS invoicing",
      "2026",
    ],
  };
}

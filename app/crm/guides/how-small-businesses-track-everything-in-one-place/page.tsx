import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/crm/guides/how-small-businesses-track-everything-in-one-place";

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
    q: "Can one software track everything for a small business?",
    a: "Rarely at the start. CRM can centralize customers and deals; accounting owns money; payroll owns wages. Integrations create a single operational picture without one mega-app.",
  },
  {
    q: "Is CRM enough to track everything?",
    a: "CRM excels at leads, contacts, and pipeline—not bank reconciliation, inventory, or payroll tax. Add accounting and vertical tools as needed.",
  },
  {
    q: "What is the best way to connect business tools?",
    a: "Use native integrations (QuickBooks + HubSpot), Zapier-style middleware, or manual exports—pick one source of truth per data type to avoid duplicate records.",
  },
  {
    q: "When should a small business get an all-in-one suite?",
    a: "When transaction volume and team size justify implementation cost. Many SMBs prefer best-of-breed until they outgrow integration overhead.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "CRM hub", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Scale + apps", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "Zoho suite", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "What Is Business Software", href: "/accounting/guides/what-is-business-software" },
  { label: "Accounting Software Hub", href: "/accounting" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function HowSmallBusinessesTrackEverythingInOnePlacePage() {
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
                    <li><Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">CRM</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Track in One Place</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Small Businesses Track Everything in One Place
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    When a CRM hub works, when accounting stays separate, and how integrations create one view without one bloated tool.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Owners ask this when spreadsheets, sticky notes, and inbox folders stop scaling—often right after a lost lead or a tax scramble. You want a <strong className="text-[#1A2D48]">single operational picture</strong> without adopting an expensive ERP or re-entering every field in three systems.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">&quot;One place&quot; usually means one customer hub plus connected finance and ops tools—not literally one login for everything.</strong> <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and similar CRMs become the narrative center for sales; <Link href="/accounting" className={linkGreen}>accounting</Link> remains the financial source of truth.
                    </p>
                    <p>
                      Stack planning: <Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>what programs small businesses need</Link> and <Link href="/accounting/guides/what-is-business-software" className={linkGreen}>what is business software</Link> for how categories fit together.
                    </p>
                  </div>
                </section>
                <section id="hub" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM as the customer system of record.">CRM as the Hub</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Track leads, deals, emails, and tasks in CRM. Sync won deals to invoicing and accounting. Read <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>how CRM integrations work</Link> and <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link>.</p>
                  </div>
                </section>
                <section id="connected" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Money and operations stay specialized.">Connected Stack (Not One App)</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Accounting (<Link href="/accounting/guides/how-small-businesses-maintain-their-accounts" className={linkGreen}>maintain accounts</Link>), <Link href="/payroll" className={linkGreen}>payroll</Link>, <Link href="/scheduling" className={linkGreen}>scheduling</Link>, and <Link href="/helpdesk" className={linkGreen}>helpdesk</Link> each own a domain. Choose tools that integrate with your CRM to reduce double entry.</p>
                  </div>
                </section>
                <section id="build-stack" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Connected beats monolithic.">Building a Connected Stack (Step by Step)</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">1.</strong> Pick a CRM as the customer system of record—contacts, deals, tasks, email history.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">2.</strong> Connect accounting and <Link href="/invoicing" className={linkGreen}>invoicing</Link> so won deals become billable without retyping amounts.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">3.</strong> Add <Link href="/payroll" className={linkGreen}>payroll</Link>, <Link href="/scheduling" className={linkGreen}>scheduling</Link>, or <Link href="/field-service" className={linkGreen}>field service</Link> when those pains are daily—not during CRM setup week.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">4.</strong> Document which system owns each data type so the team does not log support tickets in CRM and sales notes in <Link href="/helpdesk" className={linkGreen}>helpdesk</Link> without rules.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Clarity beats tool count.">Why &quot;One Place&quot; Is Misunderstood</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Vendors promise unified platforms; most SMBs still run four to eight subscriptions successfully because each category has depth requirements—payroll compliance, GL detail, ticket SLAs. The goal is <strong className="text-[#1A2D48]">one view through integration</strong>, not one database for every function on day one.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Integration failures we see.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Expecting CRM to reconcile the bank.</strong> Money still lives in accounting.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Duplicate contacts</strong> when integrations are one-way or manual.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Buying an all-in-one suite</strong> before volume justifies implementation cost—see <Link href="/accounting/guides/different-types-of-business-software-explained" className={linkGreen}>types of business software</Link>.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates CRM and business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack reviews CRM tools on pipeline usability, integration depth with accounting and email, and honest limits—not as pretend ERPs. We test native syncs and common middleware paths, and we rank products for small business workflows without paid placement. Accounting and payroll picks live in their own hubs so CRM scores stay comparable.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM hub, integrations, finance.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/best-crm-software" className={linkGreen}>Best CRM software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>How CRM integrations work</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-technology-most-small-businesses-use" className={linkGreen}>Technology most SMBs use</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/project-management" className={linkGreen}>Project management hub</Link></span></li>
                    </ul>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM hubs" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Small Businesses Track Everything in One Place | BeltStack Guide",
    description:
      "How SMBs track customers, money, and ops in one view—CRM as hub, accounting as financial truth, and integrations that connect them.",
  };
}

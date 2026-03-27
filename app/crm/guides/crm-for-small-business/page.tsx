import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmCompareUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const linkGreen = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  { q: "Do small businesses need CRM?", a: "Small businesses that have more than a handful of leads or customers benefit from CRM. It keeps contacts and deals in one place and scales as you grow. Free tiers from HubSpot or Zoho CRM make it easy to start without a big commitment." },
  { q: "What is the best CRM for small business?", a: "HubSpot, Zoho CRM, and Pipedrive are strong options: each offers a clear pipeline and reasonable pricing or a free tier. HubSpot fits teams that want marketing and sales together; Zoho CRM offers the best value; Pipedrive fits sales-focused teams. See our best CRM software roundup and HubSpot vs Zoho CRM comparison for details." },
  { q: "How much does CRM cost for a small business?", a: "Many CRMs offer a free tier (HubSpot, Zoho CRM). Paid plans often start around $15–30 per user per month. Total cost depends on users, features, and add-ons like marketing automation. Compare tiers on our comparison pages and read individual reviews for current pricing." },
  { q: "When should a small business upgrade from free CRM?", a: "Upgrade when you need more users than the free tier allows, when you want email sequences or workflow automation, or when you need marketing tools (email campaigns, landing pages) in the same platform. Many small businesses run on free or starter tiers for a year or more." },
  { q: "Can a small business use CRM without a dedicated sales team?", a: "Yes. Owner-led and small teams use CRM to track leads, follow up on time, and see pipeline value. Tools like HubSpot and Pipedrive are designed for small teams; you don't need a large sales org to benefit from a single place for contacts and deals." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Best overall for SMBs", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Best value", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Best for sales pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "HubSpot Review", href: getCrmReviewUrl("hubspot") },
  { label: "Zoho CRM Review", href: getCrmReviewUrl("zoho-crm") },
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
  { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "CRM vs Spreadsheets", href: "/crm/guides/crm-vs-spreadsheets" },
];

export default function CrmForSmallBusinessPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">CRM for Small Business</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">CRM for Small Business</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Choosing and using CRM when you're a small team: features that matter, pricing, and how to get started without enterprise complexity.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses often need CRM that is simple, affordable, and reliable. When contacts and deals live in email, spreadsheets, or sticky notes, it's easy to lose track of who to follow up with and what stage each opportunity is in. CRM software gives small teams a single place to store contacts, track pipeline, log activities, and see what to do next—without the cost or complexity of enterprise tools.
                    </p>
                    <p>
                      The right CRM depends on team size, whether you need marketing automation (email campaigns, lead nurturing) or just sales pipeline, and budget. Many small teams start with a free tier—<Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> offer solid free CRM—then upgrade as they add users or need more automation. Explore our <Link href="/crm" className={linkGreen}>CRM hub</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>, and <Link href="/crm/compare" className={linkGreen}>comparisons</Link> such as <Link href={getCrmCompareUrl("hubspot-vs-zoho-crm")} className={linkGreen}>HubSpot vs Zoho CRM</Link> and <Link href={getCrmCompareUrl("zoho-crm-vs-pipedrive")} className={linkGreen}>Zoho CRM vs Pipedrive</Link> to compare fit and pricing.
                    </p>
                  </div>
                </section>
                <section id="why-small-businesses-use-crm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common reasons to adopt CRM.">Why Small Businesses Use CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Small businesses adopt CRM to replace scattered contact lists and deal tracking with one system the whole team can use. Benefits include:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Single source of truth</strong> — Contacts and deal status in one place instead of spreadsheets, email, or personal notes. Everyone sees the same pipeline and next steps.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pipeline visibility</strong> — See what's in each stage, total value, and what to do next. Owners and reps can prioritize follow-up without asking around.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation</strong> — Reminders, email sequences, and workflow rules reduce manual follow-up so deals don't slip when everyone is busy.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Pipeline value and conversion reports without building and maintaining spreadsheets. Useful for planning and spotting bottlenecks.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="pain-points-without-crm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What goes wrong without a central system.">Common Pain Points Without CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Without a dedicated CRM, small businesses often run into:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Lost or forgotten follow-ups</strong> — Leads sit in inboxes or spreadsheets; no shared view of who was contacted when or what's next.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Duplicate or conflicting data</strong> — Multiple people update different spreadsheets or notes; pipeline value and stage are unclear.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">No clear pipeline view</strong> — Hard to see how many deals are in each stage, total pipeline value, or which deals need attention.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Time spent on manual updates</strong> — Copying data between tools, updating spreadsheets, and chasing status updates instead of selling.</span></li>
                    </ul>
                    <p>A CRM addresses these by centralizing contacts, deals, and activities so the team has one place to log and view progress. Our <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link> guide goes deeper on when to make the switch.</p>
                  </div>
                </section>
                <section id="key-features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to look for.">Key CRM Features for Small Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Small teams should prioritize features that match how they actually sell and that they'll use every day. Avoid overbuying: start with core contact and deal management; add marketing automation or advanced reporting only when you need them.</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ease of use</strong> — Clear pipeline view, simple data entry, and a short learning curve. If it's cumbersome, reps won't keep it updated.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pipeline and stages</strong> — Deal stages that match your sales process. Customizable pipelines and activity tracking so you see next steps at a glance.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Published pricing or free tier</strong> — Transparent costs so you can budget. Free tiers from HubSpot or Zoho CRM let you start without a credit card.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Email and calendar integration</strong> — Log emails and meetings from Gmail or Outlook so activities stay in the CRM without double entry.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Basic reporting</strong> — Pipeline value, deals by stage, and activity reports. You don't need enterprise dashboards to get value.</span></li>
                    </ul>
                    <p>Our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide covers selection criteria in more detail.</p>
                  </div>
                </section>
                <section id="simple-vs-upgrade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When basic CRM is enough vs when to upgrade.">When Simple CRM Is Enough vs When to Upgrade</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Simple CRM is often enough</strong> when you have a small team (e.g. one to five people), a straightforward sales process, and mainly need contact and deal tracking with reminders and basic reporting. Free or low-cost tiers from <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, or <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> can cover this for a long time.</p>
                    <p><strong className="text-[#1A2D48]">Consider upgrading</strong> when you need more users than the free tier allows, when you want email sequences or workflow automation to move deals and send reminders automatically, or when you need marketing tools (email campaigns, landing pages, lead nurturing) in the same platform. At that point, paid hubs (e.g. HubSpot Sales or Marketing Hub) or higher tiers (Zoho CRM Professional, Pipedrive Advanced) add the capacity and features you need. Compare options in our <Link href={getCrmCompareUrl("hubspot-vs-zoho-crm")} className={linkGreen}>HubSpot vs Zoho CRM</Link> and <Link href={getCrmCompareUrl("hubspot-vs-pipedrive")} className={linkGreen}>HubSpot vs Pipedrive</Link> guides.</p>
                  </div>
                </section>
                <section id="recommendations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Curated picks and in-depth reviews.">CRM Software Recommendations for Small Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>For a curated list of top picks and who each tool is best for, see our <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup. <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> is a top choice for many SMBs: free CRM core, strong marketing and sales tools, and a clear upgrade path. <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> fits value-conscious teams with a free tier and affordable paid plans; <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> fits sales-focused teams that want a clean pipeline without marketing hub complexity. Compare head-to-head in <Link href={getCrmCompareUrl("hubspot-vs-pipedrive")} className={linkGreen}>HubSpot vs Pipedrive</Link> and <Link href={getCrmCompareUrl("hubspot-vs-zoho-crm")} className={linkGreen}>HubSpot vs Zoho CRM</Link>.</p>
                  </div>
                </section>
                <section id="pricing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What small teams care about when it comes to cost.">How CRM Pricing Affects Small Businesses</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Small teams often care about <strong className="text-[#1A2D48]">free vs paid</strong>—HubSpot and Zoho CRM offer free tiers with limited users or records, which is enough for many to start. <strong className="text-[#1A2D48]">Per-user pricing</strong> on paid plans can add up as you grow; watch for base fees plus per-seat cost. <strong className="text-[#1A2D48]">Add-ons</strong> (marketing automation, extra storage, advanced reporting) can increase the bill—only add what you need. Finally, consider <strong className="text-[#1A2D48]">total cost at your expected team size</strong> in 12–18 months so you don't outgrow a tier too quickly. Our comparison pages and individual <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, and <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> reviews break down pricing in detail.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for Small Businesses" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-for-small-business" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "CRM for Small Business | BeltStack Guide",
    description: "Learn how small businesses use CRM, which features matter most, when to upgrade, and how to choose a platform that fits your size and budget.",
  };
}

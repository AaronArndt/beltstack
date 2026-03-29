import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getLeadGenerationReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedLeadGenerationResources } from "@/components/guides/RelatedLeadGenerationResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const href = "/lead-generation/guides/landing-pages-for-paid-lead-campaigns";

const FAQ = [
  { q: "Should paid traffic go to my homepage?", a: "Usually no—homepages dilute message match. Dedicated landers with a single CTA and proof aligned to the ad outperform for PPC, LSA companion pages, and some social campaigns." },
  { q: "How long should a local service landing page be?", a: "Long enough to answer anxiety (licensing, service area, timeline) without hiding the CTA; mobile users should see the call button without endless scroll." },
  { q: "Do I need different pages per channel?", a: "When promises differ—LSA badge language vs Meta promo vs search generic—you should vary headlines and trust blocks while keeping core service scope consistent." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "Google LSA", logoSrc: "/Logos/google.jpeg", rating: 4.5, bestFor: "Trust-heavy search", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads") },
  { name: "Yelp Ads", logoSrc: "/Logos/yelp.png", rating: 4.0, bestFor: "Directory paid", reviewHref: getLeadGenerationReviewUrl("yelp-ads") },
  { name: "HomeAdvisor", logoSrc: "/Logos/homeadvisor.jpeg", rating: 4.1, bestFor: "Marketplace", reviewHref: getLeadGenerationReviewUrl("homeadvisor") },
];

export default function LandingPagesForPaidLeadCampaignsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/">Home</Link></li><li aria-hidden>/</li>
                    <li><Link href="/lead-generation">Lead Generation</Link></li><li aria-hidden>/</li>
                    <li><Link href="/lead-generation/guides">Guides</Link></li><li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">Landing Pages for Paid Leads</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Landing Pages for Paid Lead Campaigns</h1>
                  <p className="mt-3 text-[#57534E]">
                    Message match, proof, single CTA, and mobile speed—why dedicated pages beat generic homepages for PPC, LSA support pages, and paid social.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
                  <p>
                    Connect landers to build on <Link href="/website-builders/best-for/small-business" className={link}>website builders</Link> or lightweight CMS sections, then reinforce organic relevance with{" "}
                    <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>on-page local SEO</Link>.
                  </p>
                  <p>
                    Operational follow-through: <Link href="/lead-generation/guides/speed-to-lead-for-inbound-inquiries" className={link}>speed-to-lead SLAs</Link>,{" "}
                    <Link href="/call-tracking/guides/how-call-tracking-works" className={link}>call tracking QA</Link>, and <Link href="/crm/guides/how-to-choose-crm-software" className={link}>CRM selection</Link>.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Above the fold on a phone in 10 seconds.">Landing page essentials</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Headline echoes ad promise and geography</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Primary CTA visible without hunting</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Trust: reviews, badges, insurance, timeline</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Fast LCP; defer nonessential widgets</span></li>
                  </ul>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Paid lead sources" items={SIDEBAR} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedLeadGenerationResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Landing Pages for Paid Lead Campaigns (PPC, LSA, social) | BeltStack",
    description:
      "Build paid landing pages with message match, proof, and one CTA—plus mobile speed checks—before scaling lead spend.",
  };
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getLeadGenerationReviewUrl } from "@/lib/routes";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
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

const FAQ_ITEMS = [
  { q: "Are paid leads better than organic leads for contractors?", a: "Paid leads are better for immediate volume; organic is better for long-term margin and control. Most teams need both, weighted by season and staffing." },
  { q: "How should I split budget between paid and organic?", a: "Early-stage operators often bias paid for speed, then shift spend toward organic as service and location pages mature. Review monthly using booked-job margin." },
  { q: "What metric should compare paid vs organic channels?", a: "Use cost per booked job and gross margin by channel, not lead count. Include refunds, no-shows, and response-time costs." },
  { q: "What should I read next after this guide?", a: "Read how to choose a lead generation platform, then compare Thumbtack vs Angi and Google LSA vs Yelp Ads before locking budget." },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: 4.4, bestFor: "Marketplace lead volume", reviewHref: getLeadGenerationReviewUrl("thumbtack") },
  { name: "Google Local Services Ads", logoSrc: "/Logos/google.jpeg", rating: 4.5, bestFor: "High-intent search callers", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads") },
  { name: "Angi", logoSrc: "/Logos/angi.jpeg", rating: 4.3, bestFor: "Directory + bundled programs", reviewHref: getLeadGenerationReviewUrl("angi") },
];

export default function PaidVsOrganicLeadsPage() {
  const href = "/lead-generation/guides/paid-vs-organic-leads";
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
                <li className="font-medium text-gray-700" aria-current="page">Paid vs Organic Leads</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Paid vs Organic Leads</h1>
              <p className="mt-3 text-[#57534E]">
                When to rent demand—and when to invest in inbound assets. Pair this with our{" "}
                <Link href="/lead-generation/best-lead-generation-tools" className="font-semibold text-[#10B981] hover:underline">
                  best lead generation tools roundup
                </Link>{" "}
                for paid-channel shortlists.
              </p>
              <GuideLastUpdated date="March 25, 2026" />
            </section>
            <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
              <p>Paid leads fill this week; organic builds equity over months. Use paid while you strengthen site, reviews, and CRM—but never skip measurement on either side.</p>
              <p>
                <Link href="/website-builders/best-website-builders" className="font-semibold text-[#10B981] hover:underline">
                  Best website builders
                </Link>{" "}
                support organic capture; marketplaces and search ads solve immediate pipeline gaps—see{" "}
                <Link href={getLeadGenerationReviewUrl("thumbtack")} className="font-semibold text-[#10B981] hover:underline">
                  Thumbtack
                </Link>{" "}
                and{" "}
                <Link href={getLeadGenerationReviewUrl("angi")} className="font-semibold text-[#10B981] hover:underline">
                  Angi
                </Link>{" "}
                reviews. For trade context, read{" "}
                <Link href="/lead-generation/best-for/home-services" className="font-semibold text-[#10B981] hover:underline">
                  best lead generation for home services
                </Link>
                .
              </p>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Use this when deciding where the next dollar goes.">Decision framework</SectionTitle>
              <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Use paid channels to cover immediate pipeline gaps.</li>
                <li>• Build organic channels (SEO, reviews, service pages) for compounding margin.</li>
                <li>• Keep one unified CRM scorecard so channels are judged by booked jobs, not raw leads.</li>
                <li>• Rebalance budget monthly by close rate and gross margin.</li>
              </ul>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="How local operators usually sequence channels.">Common channel mix playbook</SectionTitle>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                Most teams start with one marketplace or search-intent paid channel (like{" "}
                <Link href={getLeadGenerationReviewUrl("google-local-services-ads")} className="font-semibold text-[#10B981] hover:underline">Google Local Services Ads</Link>{" "}
                or{" "}
                <Link href={getLeadGenerationReviewUrl("thumbtack")} className="font-semibold text-[#10B981] hover:underline">Thumbtack</Link>
                ), then use organic channels to reduce dependence over time. Organic content works best when paired with call tracking and fast follow-up workflows in CRM.
              </p>
            </section>
            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers for budget planning.">FAQs</SectionTitle>
              <GuideFaqSection faqs={FAQ_ITEMS} />
            </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Lead Generation Reviews" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
  return { title: "Paid vs Organic Leads | BeltStack Guide", description: "Trade-offs between marketplace and ad leads versus inbound marketing for local businesses." };
}

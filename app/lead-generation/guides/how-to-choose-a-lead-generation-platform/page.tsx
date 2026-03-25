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

const FAQ_ITEMS = [
  { q: "How do I choose a lead generation platform for contractors?", a: "Choose by intent quality, response capacity, dispute rules, and booked-job margin. Platform fit is operational, not just feature-based." },
  { q: "Which platforms should I test first?", a: "Most teams test one search-intent option (e.g., LSA) and one marketplace option (e.g., Thumbtack/Angi), then keep the winner by margin." },
  { q: "What is the biggest platform selection mistake?", a: "Scaling spend before confirming response SLA and close rate discipline in CRM." },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HomeAdvisor", logoSrc: "/Logos/homeadvisor.jpeg", rating: 4.1, bestFor: "Residential marketplace scale", reviewHref: getLeadGenerationReviewUrl("homeadvisor") },
  { name: "Google Local Services Ads", logoSrc: "/Logos/google.jpeg", rating: 4.5, bestFor: "High-intent search leads", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads") },
  { name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: 4.4, bestFor: "Flexible marketplace buying", reviewHref: getLeadGenerationReviewUrl("thumbtack") },
];

export default function HowToChooseLeadGenPlatformPage() {
  const href = "/lead-generation/guides/how-to-choose-a-lead-generation-platform";
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
                <li className="font-medium text-gray-700" aria-current="page">Choose a Lead Platform</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">How to Choose a Lead Generation Platform</h1>
              <p className="mt-3 text-[#57534E]">
                A decision checklist: intent, ops, disputes, and CPA—not feature laundry lists. Anchor picks using our{" "}
                <Link href="/lead-generation/best-lead-generation-tools" className="font-semibold text-[#10B981] hover:underline">
                  best lead generation tools (2026) roundup
                </Link>
                .
              </p>
              <GuideLastUpdated date="March 25, 2026" />
            </section>
            <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
              <p>1) Map how customers find you today. 2) Verify you can staff inbound. 3) Pilot modest weekly caps. 4) Compare booked-job CPA after refunds—not lead volume.</p>
              <p>
                Use the{" "}
                <Link href="/lead-generation/compare" className="font-semibold text-[#10B981] hover:underline">
                  lead generation comparison hub
                </Link>
                , then read{" "}
                <Link href={getLeadGenerationReviewUrl("homeadvisor")} className="font-semibold text-[#10B981] hover:underline">
                  HomeAdvisor
                </Link>{" "}
                and{" "}
                <Link href={getLeadGenerationReviewUrl("google-local-services-ads")} className="font-semibold text-[#10B981] hover:underline">
                  Google Local Services Ads
                </Link>{" "}
                reviews for the vendors you’re considering. Scenario picks:{" "}
                <Link href="/lead-generation/best-for/contractors" className="font-semibold text-[#10B981] hover:underline">
                  contractors
                </Link>
                .
              </p>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Criteria that map to real local-service economics.">Platform evaluation criteria</SectionTitle>
              <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Intent quality by category and zip code</li>
                <li>• Refund/dispute policy clarity and speed</li>
                <li>• Your team’s response SLA and staffing reality</li>
                <li>• CRM integration and disposition tracking reliability</li>
              </ul>
            </section>
            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="What to do after narrowing to two vendors.">Shortlist and pilot process</SectionTitle>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                Run a 30-60 day pilot with identical scripts and qualification flow, then compare by booked-job margin. Use{" "}
                <Link href="/lead-generation/compare/thumbtack-vs-angi" className="font-semibold text-[#10B981] hover:underline">Thumbtack vs Angi</Link>{" "}
                and{" "}
                <Link href="/lead-generation/compare/google-local-services-ads-vs-yelp-ads" className="font-semibold text-[#10B981] hover:underline">Google LSA vs Yelp Ads</Link>{" "}
                for common channel decisions.
              </p>
            </section>
            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
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
  return { title: "How to Choose a Lead Generation Platform | BeltStack", description: "Evaluate lead vendors using economics and operations—not marketing hype." };
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";

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
  { q: "What matters most for service businesses?", a: "Lead conversion, local SEO controls, mobile performance, and easy ongoing edits are the top priorities." },
  { q: "Should I prioritize design or conversion?", a: "Both matter, but conversion structure should come first: clear service pages, trust signals, and low-friction contact paths." },
];

export default function HowToChooseWebsiteBuilderGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="pt-8 pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li>
                <li><Link href="/website-builders" className="text-gray-500 hover:text-gray-900">Website Builders</Link></li><li aria-hidden>/</li>
                <li><Link href="/website-builders/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">How to Choose a Website Builder</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Choose a Website Builder</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A practical framework for contractors and service businesses choosing between Wix, Squarespace, Shopify, Webflow, and other platforms.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>

            <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>Start with your primary goal: lead generation, ecommerce, or brand presentation. Most local service businesses should optimize for quote requests and calls first.</p>
              <p>Then evaluate editing workflow ownership. If owners or office staff update content, favor simpler builders. If you have design and marketing support, advanced options can be worthwhile.</p>
              <p>
                Use our{" "}
                <Link href="/website-builders/best-website-builders" className="font-semibold text-[#10B981] hover:underline">
                  best website builders roundup
                </Link>
                , the{" "}
                <Link href="/website-builders/compare" className="font-semibold text-[#10B981] hover:underline">
                  website builder comparison hub
                </Link>
                , and full reviews such as{" "}
                <Link href="/website-builders/review/wix" className="font-semibold text-[#10B981] hover:underline">
                  Wix
                </Link>{" "}
                and{" "}
                <Link href="/website-builders/review/squarespace" className="font-semibold text-[#10B981] hover:underline">
                  Squarespace
                </Link>{" "}
                to shortlist realistically. For{" "}
                <Link href="/website-builders/best-for/contractors" className="font-semibold text-[#10B981] hover:underline">
                  contractor website builder picks
                </Link>
                , pair the site with{" "}
                <Link href="/lead-generation/best-for/contractors" className="font-semibold text-[#10B981] hover:underline">
                  lead generation tools for contractors
                </Link>{" "}
                once you’re ready to buy demand.
              </p>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="The non-negotiables for local operators.">Selection checklist</SectionTitle>
              <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Local SEO controls (metadata, URL control, service/location pages)</li>
                <li>• Conversion paths (forms, click-to-call, clear CTAs)</li>
                <li>• Trust content (reviews, before/after, licenses, guarantees)</li>
                <li>• Ongoing edit simplicity and maintainability</li>
              </ul>
            </section>

            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
              <GuideFaqSection faqs={FAQ_ITEMS} />
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Choose a Website Builder | BeltStack Guide",
    description: "How contractors and service businesses should evaluate website builders for leads, local SEO, and long-term maintainability.",
  };
}

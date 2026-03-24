import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedLeadGenerationResources } from "@/components/guides/RelatedLeadGenerationResources";

export default function LeadGenerationStrategiesPage() {
  const href = "/lead-generation/guides/lead-generation-strategies-for-local-business";
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="pt-8 pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/">Home</Link></li><li aria-hidden>/</li>
                <li><Link href="/lead-generation">Lead Generation</Link></li><li aria-hidden>/</li>
                <li><Link href="/lead-generation/guides">Guides</Link></li><li aria-hidden>/</li>
                <li className="font-medium text-gray-700" aria-current="page">Lead Generation Strategies</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Lead Generation Strategies for Local Business</h1>
              <p className="mt-3 text-[#57534E]">Blend paid and owned channels so you are not 100% dependent on one vendor.</p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>
            <section className="py-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Local businesses should pair short-term paid leads with SEO, reviews, and referral loops. Start with one paid channel you can measure honestly—then add a second only after CPA stabilizes.
              </p>
              <p>
                <Link href="/lead-generation/best-lead-generation-tools" className="font-semibold text-[#10B981] hover:underline">Best lead generation tools</Link> ·{" "}
                <Link href="/lead-generation/guides/paid-vs-organic-leads" className="font-semibold text-[#10B981] hover:underline">Paid vs organic</Link>
              </p>
            </section>
          </article>
        </div>
        <RelatedLeadGenerationResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return { title: "Lead Generation Strategies for Local Business | BeltStack", description: "How local operators should balance paid leads with owned marketing." };
}

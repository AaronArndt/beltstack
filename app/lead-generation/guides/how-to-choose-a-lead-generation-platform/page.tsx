import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getLeadGenerationReviewUrl } from "@/lib/routes";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedLeadGenerationResources } from "@/components/guides/RelatedLeadGenerationResources";

export default function HowToChooseLeadGenPlatformPage() {
  const href = "/lead-generation/guides/how-to-choose-a-lead-generation-platform";
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
              <GuideLastUpdated date="March 24, 2026" />
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
          </article>
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

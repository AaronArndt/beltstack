import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedLeadGenerationResources } from "@/components/guides/RelatedLeadGenerationResources";

export default function HowGoogleLsaWorkPage() {
  const href = "/lead-generation/guides/how-google-local-services-ads-work";
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
                <li className="font-medium text-gray-700" aria-current="page">How Google LSA Works</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">How Google Local Services Ads Work</h1>
              <p className="mt-3 text-[#57534E]">Screening, budgets, disputes, and lead billing basics.</p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>
            <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
              <p>LSA shows a Google Screened listing for eligible categories. You set a weekly budget, receive calls/messages as leads, and can dispute misfires per policy.</p>
              <p>
                <Link href="/lead-generation/best-lead-generation-tools" className="font-semibold text-[#10B981] hover:underline">
                  Best lead generation tools roundup
                </Link>{" "}
                ·{" "}
                <Link href="/lead-generation/review/google-local-services-ads" className="font-semibold text-[#10B981] hover:underline">
                  Full Google LSA review
                </Link>{" "}
                ·{" "}
                <Link href="/lead-generation/compare/google-local-services-ads-vs-yelp-ads" className="font-semibold text-[#10B981] hover:underline">
                  Google LSA vs Yelp Ads comparison
                </Link>
              </p>
              <p>
                Marketplace contrast:{" "}
                <Link href="/lead-generation/review/thumbtack" className="font-semibold text-[#10B981] hover:underline">
                  Thumbtack review
                </Link>
                . Trade scenario:{" "}
                <Link href="/lead-generation/best-for/plumbing" className="font-semibold text-[#10B981] hover:underline">
                  best lead generation for plumbers
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
  return { title: "How Google Local Services Ads Work | BeltStack Guide", description: "Overview of Google LSA for local service businesses: verification, bidding, and lead quality." };
}

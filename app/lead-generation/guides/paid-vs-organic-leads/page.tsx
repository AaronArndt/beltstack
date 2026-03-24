import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedLeadGenerationResources } from "@/components/guides/RelatedLeadGenerationResources";

export default function PaidVsOrganicLeadsPage() {
  const href = "/lead-generation/guides/paid-vs-organic-leads";
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
                <li className="font-medium text-gray-700" aria-current="page">Paid vs Organic Leads</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Paid vs Organic Leads</h1>
              <p className="mt-3 text-[#57534E]">When to rent demand—and when to invest in inbound assets.</p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>
            <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
              <p>Paid leads fill this week; organic builds equity over months. Use paid while you strengthen site, reviews, and CRM—but never skip measurement on either side.</p>
              <p><Link href="/website-builders" className="font-semibold text-[#10B981] hover:underline">Website builders</Link> support organic capture; marketplaces solve immediate pipeline gaps.</p>
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
  return { title: "Paid vs Organic Leads | BeltStack Guide", description: "Trade-offs between marketplace and ad leads versus inbound marketing for local businesses." };
}

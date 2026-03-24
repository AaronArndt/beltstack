import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";

export default function ContractorWebsiteFeaturesGuidePage() {
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
                <li className="text-gray-700 font-medium" aria-current="page">Contractor Website Features</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Contractor Website Features</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">The must-have features contractors need to turn local traffic into calls and booked jobs.</p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>
            <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>Contractor websites should be built around conversion and trust, not generic homepage aesthetics. Visitors need immediate clarity: what you do, where you operate, and how to request service.</p>
              <p>Core features include service-specific landing pages, service-area pages, testimonials, before/after galleries, and quote request forms that are easy to complete on mobile.</p>
              <p>Pair this with clear phone CTA placement and fast-loading pages. Then connect forms to your CRM or scheduling system so leads do not disappear. See our <Link href="/website-builders/best-website-builders" className="font-semibold text-[#10B981] hover:underline">best website builders</Link> roundup for platform picks.</p>
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
    title: "Contractor Website Features | BeltStack Guide",
    description: "Must-have website features for contractors: trust signals, lead forms, service pages, and mobile-first conversion design.",
  };
}

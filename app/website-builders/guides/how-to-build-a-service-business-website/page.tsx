import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";

export default function HowToBuildServiceBusinessWebsiteGuidePage() {
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
                <li className="text-gray-700 font-medium" aria-current="page">How to Build a Service Business Website</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Build a Service Business Website</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">A step-by-step website blueprint for contractors, home services, and local operators.</p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>
            <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>Start with conversion architecture: homepage promise, service pages, location pages, and a clear quote/contact path visible on every key screen.</p>
              <p>Then add trust proof: reviews, before/after galleries, credentials, warranty messaging, and response-time expectations. For most service businesses, this does more for close rates than advanced design tricks.</p>
              <p>Finally, build an update rhythm. Add new project proof monthly, improve one service page per cycle, and track lead source quality. Use <Link href="/website-builders/best-website-builders" className="font-semibold text-[#10B981] hover:underline">best website builders</Link> to choose your platform first.</p>
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
    title: "How to Build a Service Business Website | BeltStack Guide",
    description:
      "A practical blueprint for building service-business websites that rank locally and convert traffic into calls and quote requests.",
  };
}

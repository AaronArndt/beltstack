import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { WEBSITE_BUILDERS_GUIDES } from "@/lib/data/websiteBuildersGuides";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function GuideCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link href={href} className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm hover:border-stone-300">
      <h3 className="text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
      <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Read guide →</span>
    </Link>
  );
}

export default function WebsiteBuildersGuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/website-builders" className="text-gray-500 hover:text-gray-900">Website Builders</Link></li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">Guides</li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Website Builder Guides
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Educational guides for contractors and service businesses choosing website platforms for lead generation and local visibility.
            </p>
            <GuideLastUpdated date="March 24, 2026" />
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Informational pages that support website-platform buying decisions.">Website builder guides</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WEBSITE_BUILDERS_GUIDES.map((guide) => (
                <GuideCard key={guide.href} title={guide.title} href={guide.href} description={guide.description} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Website Builder Guides | BeltStack",
    description:
      "Learn how service businesses should evaluate website builders, local SEO fit, and conversion-focused website strategy.",
  };
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { REPUTATION_MANAGEMENT_GUIDES } from "@/lib/data/reputationManagementGuides";
import { RelatedReputationManagementResources } from "@/components/guides/RelatedReputationManagementResources";
import { getReputationManagementReviewUrl } from "@/lib/routes";

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
    <Link href={href} className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2">
      <h3 className="text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
      <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Read guide →</span>
    </Link>
  );
}

export default function ReputationManagementGuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/reputation-management" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Reputation Management</Link></li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">Guides</li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Reputation Management Guides</h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Educational guides on review growth, response quality, and local trust operations for service businesses.
            </p>
            <GuideLastUpdated date="March 25, 2026" />
            <p className="mt-5 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Start with <Link href={getReputationManagementReviewUrl("podium")} className="font-semibold text-[#10B981] hover:underline">Podium</Link>,{" "}
              <Link href={getReputationManagementReviewUrl("birdeye")} className="font-semibold text-[#10B981] hover:underline">Birdeye</Link>, and{" "}
              <Link href={getReputationManagementReviewUrl("nicejob")} className="font-semibold text-[#10B981] hover:underline">NiceJob</Link> reviews, then compare workflows in the{" "}
              <Link href="/reputation-management/compare" className="font-semibold text-[#10B981] hover:underline">comparison hub</Link>.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Operational guidance for local teams.">Guides</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {REPUTATION_MANAGEMENT_GUIDES.map((guide) => (
                <GuideCard key={guide.href} title={guide.title} href={guide.href} description={guide.description} />
              ))}
            </div>
          </div>
        </section>

        <RelatedReputationManagementResources />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Reputation Management Guides | BeltStack",
    description: "Guides on review growth, negative review responses, and local reputation systems for service businesses.",
  };
}

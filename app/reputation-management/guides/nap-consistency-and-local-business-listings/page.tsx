import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getReputationManagementReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedReputationManagementResources } from "@/components/guides/RelatedReputationManagementResources";
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

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const href = "/reputation-management/guides/nap-consistency-and-local-business-listings";

const FAQ = [
  { q: "What is NAP?", a: "Name, address, and phone—core business identity data. Inconsistent NAP across directories confuses search engines and customers." },
  { q: "Do suite numbers matter?", a: "Yes—pick one canonical format (Ste vs #) and use it everywhere. Mismatch can split reviews and dampen trust signals." },
  { q: "How does this interact with call tracking?", a: "If you publish tracking numbers on listings, ensure GBP primary phone policies and fallback paths are correct—see call tracking guides to avoid orphan metrics." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "Birdeye", logoSrc: "/Logos/birdeye.svg", rating: 4.5, bestFor: "Listings sync", reviewHref: getReputationManagementReviewUrl("birdeye") },
  { name: "Podium", logoSrc: "/Logos/podium.jpeg", rating: 4.4, bestFor: "Local comms", reviewHref: getReputationManagementReviewUrl("podium") },
  { name: "NiceJob", logoSrc: "/Logos/nicejob.jpeg", rating: 4.3, bestFor: "SMB workflows", reviewHref: getReputationManagementReviewUrl("nicejob") },
];

export default function NapConsistencyAndLocalBusinessListingsPage() {
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
                    <li><Link href="/reputation-management">Reputation Management</Link></li><li aria-hidden>/</li>
                    <li><Link href="/reputation-management/guides">Guides</Link></li><li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">NAP &amp; Listings</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">NAP Consistency &amp; Local Business Listings</h1>
                  <p className="mt-3 text-[#57534E]">
                    Canonical name, address, and phone across directories—how accurate listings support Maps, reviews, and call attribution.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
                  <p>
                    Operational hub: choose a source of truth (often <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>Google Business Profile</Link>) and reconcile annually after moves or acquisitions.
                  </p>
                  <p>
                    SEO depth: <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>local SEO for service businesses</Link>,{" "}
                    <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>how to rank in Google Maps</Link>. Measurement:{" "}
                    <Link href="/call-tracking/guides/what-is-call-tracking" className={link}>what is call tracking</Link>.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Publish once, audit quarterly.">Checklist</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Decide legal vs DBA display rules</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Document phone hierarchy: customer vs tracking lines</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Align hours and holiday closures everywhere</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Close duplicate listings instead of ignoring them</span></li>
                  </ul>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Reputation tools" items={SIDEBAR} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedReputationManagementResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "NAP Consistency & Local Business Listings | BeltStack",
    description:
      "Keep name, address, and phone aligned across directories and GBP—supporting local SEO, reviews, and clean call tracking data.",
  };
}

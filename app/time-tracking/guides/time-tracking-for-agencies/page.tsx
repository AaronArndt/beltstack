import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedTimeTrackingResources } from "@/components/guides/RelatedTimeTrackingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getTimeTrackingReviewUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  { q: "What do agencies need from time tracking?", a: "Agencies need to see hours by client and project, track budgets, and understand utilization. Tools like Harvest, Everhour, and Toggl Track support project-based tracking and reporting that ties to billing." },
  { q: "Should agencies use time tracking with built-in invoicing?", a: "It depends. Harvest combines time and invoicing in one place. If you already use separate invoicing or accounting software, a tracker that exports or integrates (e.g. Toggl, Everhour) may be enough." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Harvest", logoSrc: "/Logos/harvest.png", rating: 4.4, bestFor: "Agencies", reviewHref: getTimeTrackingReviewUrl("harvest") },
  { name: "Everhour", logoSrc: "/Logos/everhour.png", rating: 4.3, bestFor: "Project tools", reviewHref: getTimeTrackingReviewUrl("everhour") },
  { name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: 4.6, bestFor: "Reporting", reviewHref: getTimeTrackingReviewUrl("toggl") },
];

export default function TimeTrackingForAgenciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/time-tracking" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Time Tracking</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/time-tracking/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Time Tracking for Agencies</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Time Tracking for Agencies</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">Learn how agencies track time across clients and projects, manage utilization, and keep budgets on track.</p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Agencies need visibility into where time goes: by client, project, and team member. Good time tracking supports project budgets, billable vs non-billable reporting, and integrations with your existing <Link href="/invoicing" className={linkGreen}>invoicing</Link> and <Link href="/accounting" className={linkGreen}>accounting</Link> stack.</p>
                    <p>See our <Link href="/time-tracking/best-for/agencies" className={linkGreen}>best time tracking for agencies</Link> and <Link href="/time-tracking/compare" className={linkGreen}>time tracking comparisons</Link> for detailed picks.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Recommended Time Tracking Software" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedTimeTrackingResources excludeHref="/time-tracking/guides/time-tracking-for-agencies" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Time Tracking for Agencies | BeltStack Guide",
    description: "How agencies track time across clients and projects, manage utilization, and keep budgets on track.",
  };
}

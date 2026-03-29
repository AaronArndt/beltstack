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
const href = "/reputation-management/guides/review-response-playbooks-for-multi-location";

const FAQ = [
  { q: "Should every location use identical copy?", a: "Tone and policies should align; specifics should reference the local team and resolution path. Robotic duplicates erode trust." },
  { q: "Who approves negative review responses?", a: "Define franchisee vs corporate authority before a crisis. Legal and PR should pre-clear sensitive categories (health, safety, billing disputes)." },
  { q: "How fast must multi-location brands respond?", a: "Publish a target SLA (e.g. 24–48 business hours) you can meet everywhere—missing SLAs hurt more than slower but honest timelines." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "Birdeye", logoSrc: "/Logos/birdeye.svg", rating: 4.5, bestFor: "Multi-site", reviewHref: getReputationManagementReviewUrl("birdeye") },
  { name: "Podium", logoSrc: "/Logos/podium.jpeg", rating: 4.4, bestFor: "Messaging", reviewHref: getReputationManagementReviewUrl("podium") },
  { name: "Broadly", logoSrc: "/Logos/broadly.png", rating: 4.2, bestFor: "Local bundles", reviewHref: getReputationManagementReviewUrl("broadly") },
];

export default function ReviewResponsePlaybooksMultiLocationPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Multi-Location Playbooks</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Review Response Playbooks for Multi-Location Brands</h1>
                  <p className="mt-3 text-[#57534E]">
                    Templates, approvals, and brand voice at scale—without sounding canned or ignoring legitimate complaints.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
                  <p>
                    Start from single-location fundamentals: <Link href="/reputation-management/guides/how-to-respond-to-negative-reviews" className={link}>how to respond to negative reviews</Link> and{" "}
                    <Link href="/reputation-management/guides/how-to-improve-online-reputation" className={link}>improve online reputation</Link>.
                  </p>
                  <p>
                    Align CRM and <Link href="/email-marketing" className={link}>email</Link> nurture so owners see patterns before they become review bombs.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Governance beats paragraph-perfect prose.">Playbook sections</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Brand promise + non-negotiable tone rules</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Escalation matrix (GM → regional → legal)</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Snippet library: thank-you, service recovery, neutral clarification</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>QA sampling weekly on random locations</span></li>
                  </ul>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Reputation platforms" items={SIDEBAR} stickyTop={88} />
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
    title: "Review Response Playbooks for Multi-Location Brands | BeltStack",
    description:
      "Scale Google and directory review responses across locations: approvals, templates, SLAs, and QA—without robotic copy-paste.",
  };
}

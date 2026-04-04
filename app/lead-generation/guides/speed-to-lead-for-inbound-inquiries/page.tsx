import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getLeadGenerationReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedLeadGenerationResources } from "@/components/guides/RelatedLeadGenerationResources";
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
const href = "/lead-generation/guides/speed-to-lead-for-inbound-inquiries";

const FAQ = [
  { q: "What is a realistic speed-to-lead target?", a: "Many high-intent service businesses aim for first human touch within minutes on business hours—but only if CRM routing is accurate. Publish an internal SLA your team can keep." },
  { q: "What breaks speed-to-lead most often?", a: "Unowned inboxes, missing mobile notifications, and leads landing in spam. Fix routing before blaming channel quality." },
  { q: "How does this relate to call tracking?", a: "Tagged numbers and CRM dispositions prove which sources produce answered calls vs abandoned rings—see call tracking guides for QA." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "Google LSA", logoSrc: "/Logos/google.jpeg", rating: 4.5, bestFor: "Call-heavy", reviewHref: getLeadGenerationReviewUrl("google-local-services-ads") },
  { name: "Thumbtack", logoSrc: "/Logos/thumbtack.jpeg", rating: 4.4, bestFor: "Message + call", reviewHref: getLeadGenerationReviewUrl("thumbtack") },
  { name: "HomeAdvisor", logoSrc: "/Logos/homeadvisor.jpeg", rating: 4.1, bestFor: "High volume", reviewHref: getLeadGenerationReviewUrl("homeadvisor") },
];

export default function SpeedToLeadForInboundInquiriesPage() {
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
                    <li><Link href="/lead-generation">Lead Generation</Link></li><li aria-hidden>/</li>
                    <li><Link href="/lead-generation/guides">Guides</Link></li><li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">Speed-to-Lead</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold sm:text-4xl">Speed-to-Lead for Inbound Inquiries</h1>
                  <p className="mt-3 text-[#57534E]">
                    SLAs, after-hours coverage, CRM routing, and honest handoffs—response discipline beats channel choice for calls, chats, and forms.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="py-8 space-y-4 text-[15px] text-neutral-700 leading-relaxed">
                  <p>
                    Pair operations with <Link href="/crm/guides/crm-for-small-business" className={link}>CRM for small business</Link>,{" "}
                    <Link href="/scheduling" className={link}>scheduling software</Link> for capacity, and measurement via{" "}
                    <Link href="/call-tracking/guides/how-to-track-phone-call-conversions" className={link}>phone conversion tracking</Link>.
                  </p>
                  <p>
                    Channel fundamentals: <Link href="/lead-generation/guides/how-to-choose-a-lead-generation-platform" className={link}>choose a lead platform</Link>,{" "}
                    <Link href="/lead-generation/guides/lead-generation-strategies-for-local-business" className={link}>local lead strategies</Link>.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Write these down before buying more leads.">Operating standards</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Owner for each inbox and escalation path</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Scripts for qualification vs immediate dispatch</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Night/weekend coverage or honest turnaround messaging</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>CRM stages that match how you actually close</span></li>
                  </ul>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Based on dispatch reality, not conference slides.">Authoritative ops guidance</SectionTitle>
                  <p className="text-[15px] leading-relaxed text-neutral-700">
                    Credible operations content comes from documented playbooks you will run—hold yourself to dispositions logged in CRM, not anecdotal win stories.
                  </p>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Lead sources" items={SIDEBAR} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedLeadGenerationResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Speed-to-Lead for Inbound Inquiries | BeltStack",
    description:
      "Set response SLAs, CRM routing, and after-hours coverage for calls, forms, and chats—so paid and organic leads stop dying in the inbox.",
  };
}

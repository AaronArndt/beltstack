import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedHelpdeskResources } from "@/components/guides/RelatedHelpdeskResources";
import { getHelpdeskReviewUrl, getHelpdeskCompareUrl } from "@/lib/routes";
import { HELPDESK_LOGOS } from "@/lib/data/helpdeskHubData";

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

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "Best value for small teams", reviewHref: getHelpdeskReviewUrl("freshdesk") },
  { name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "Email-first, simple inbox", reviewHref: getHelpdeskReviewUrl("help-scout") },
  { name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, rating: "4.4", bestFor: "Low cost, Zoho ecosystem", reviewHref: getHelpdeskReviewUrl("zoho-desk") },
];

const FAQ_ITEMS = [
  {
    q: "When should a small business move from email to helpdesk software?",
    a: "When you have more than one person handling support, need to track which conversations are open or closed, or want basic automation (e.g. auto-assign or canned replies). A helpdesk also helps when volume grows and you need reporting on response time or volume.",
  },
  {
    q: "What is the best helpdesk for a very small team?",
    a: "Freshdesk and Zoho Desk offer free or low-cost tiers that work well for small teams. Help Scout is a strong choice if you mainly use email and want a simple shared inbox with minimal complexity. See our best helpdesk software roundup for full comparisons.",
  },
  {
    q: "Do small businesses need to pay per agent?",
    a: "Many helpdesks charge per agent (or per seat). Freshdesk and Zoho Desk have free tiers with limited agents; paid plans are often $15–20/agent/month. Help Scout charges per user. Compare total cost for your team size—free tiers can be enough for 1–3 people.",
  },
  {
    q: "Can helpdesk software integrate with our existing tools?",
    a: "Yes. Most helpdesks integrate with email, CRM (e.g. Salesforce, HubSpot), and collaboration tools like Slack. Check each platform's integration list for your stack. Freshdesk, Zendesk, and Zoho Desk have broad app marketplaces.",
  },
];

const RELATED_ITEMS = [
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "Helpdesk Guides", href: "/helpdesk/guides" },
  { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
  { label: "Freshdesk vs Zoho Desk", href: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
  { label: "How to Choose Helpdesk Software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
];

export default function BestHelpdeskForSmallBusinessPage() {
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
                    <li><Link href="/helpdesk" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Helpdesk</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/helpdesk/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Best Helpdesk Software for Small Business</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Best Helpdesk Software for Small Business
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Why small businesses move beyond email inboxes and basic contact forms, and which helpdesk tools offer the best ease of use, pricing, and team collaboration.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many small businesses start with a shared email inbox or a simple contact form. That works until multiple people need to reply, you lose track of who answered what, or customers expect faster responses. Helpdesk software centralizes conversations, adds light automation, and gives you visibility into volume and response times—without enterprise complexity or cost.
                    </p>
                    <p>
                      The right helpdesk for a small business balances ease of use, transparent pricing, and enough features to support growth. Tools like <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk</Link>, <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout</Link>, and <Link href={getHelpdeskReviewUrl("zoho-desk")} className={linkGreen}>Zoho Desk</Link> are often recommended because they’re approachable for small teams and scale as you add agents or channels. See our <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>best helpdesk software</Link> roundup and <Link href={getHelpdeskCompareUrl("zendesk-vs-freshdesk")} className={linkGreen}>Zendesk vs Freshdesk</Link> for head-to-head comparisons.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What matters most when choosing a helpdesk as a small business.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ease of use</strong> — Your team should be able to triage and reply without lengthy training. Prefer simple shared-inbox or ticket workflows over heavy configuration.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pricing</strong> — Look for free tiers or low per-agent cost. Freshdesk and Zoho Desk offer free plans; Help Scout and others have clear per-user pricing so you can budget.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Simple automation</strong> — Assignment rules, canned responses, and basic SLA reminders reduce manual work without requiring complex setup.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Team collaboration</strong> — Internal notes, @mentions, and a single view of each customer conversation help small teams stay aligned.</span></li>
                  </ul>
                </section>
                <section id="why-move-beyond-email" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When a shared inbox or form isn't enough.">Why move beyond email and contact forms</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>A single inbox or contact form breaks down when more than one person handles support. Without a helpdesk, you risk duplicate replies, lost threads, and no way to see who’s responsible for which conversation. Helpdesk software turns each conversation into a ticket (or thread) with status, assignment, and history—so nothing falls through the cracks.</p>
                    <p>Even light automation helps: auto-assign by keyword or round-robin, canned responses for common questions, and reminders when a ticket has been open too long. Reporting on volume and response time lets you spot bottlenecks and plan capacity. For small businesses that expect to grow support volume or team size, investing in a helpdesk early avoids a painful migration later.</p>
                  </div>
                </section>
                <section id="recommended-tools" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Top picks for small business helpdesk.">Recommended helpdesk tools for small business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Freshdesk</strong> — Free tier and low per-agent cost; full ticketing, multi-channel, and automation. Good fit when you want real helpdesk features without paying Zendesk-level prices. Read our <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk review</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Help Scout</strong> — Email-first shared inbox with minimal complexity. Strong for teams that don’t need many channels and want quick adoption. See our <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout review</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Zoho Desk</strong> — Affordable per-agent pricing and free tier; fits especially well if you already use Zoho. Solid ticketing and automation. <Link href={getHelpdeskReviewUrl("zoho-desk")} className={linkGreen}>Zoho Desk review</Link>.</p>
                    <p>For more options, see our <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>best helpdesk software</Link> roundup and <Link href="/helpdesk/compare" className={linkGreen}>helpdesk comparisons</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Helpdesk to Compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedHelpdeskResources items={RELATED_ITEMS} excludeHref="/helpdesk/guides/best-helpdesk-software-for-small-business" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Helpdesk Software for Small Business | BeltStack Guide",
    description: "Why small businesses move beyond email to helpdesk software. Top picks for ease of use, pricing, and team collaboration: Freshdesk, Help Scout, Zoho Desk.",
  };
}

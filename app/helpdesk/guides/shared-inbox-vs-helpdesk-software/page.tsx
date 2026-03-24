import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedHelpdeskResources } from "@/components/guides/RelatedHelpdeskResources";
import { getHelpdeskReviewUrl, getHelpdeskCompareUrl } from "@/lib/routes";

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
  { q: "When is a shared inbox enough?", a: "When you have a small team, mainly use email, and don't need heavy automation, SLA tracking, or multi-channel routing. Tools like Help Scout and Front offer shared inbox with collaboration; they're enough until volume or complexity grows." },
  { q: "When do I need full helpdesk software?", a: "When you have multiple agents, need to assign and track tickets, want automation (routing, canned responses, escalation), or need reporting on volume and response time. Helpdesks add workflow and accountability on top of a shared view of conversations." },
  { q: "Can I start with a shared inbox and move to a helpdesk later?", a: "Yes. Many teams start with Help Scout, Front, or even a shared email folder and migrate to a full helpdesk (e.g. Zendesk, Freshdesk) when they add agents or channels. Choose a shared-inbox tool that can export data if you expect to outgrow it." },
];

const RELATED_ITEMS = [
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
  { label: "How to Choose Helpdesk Software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
];

export default function SharedInboxVsHelpdeskPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="pt-8 pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/helpdesk" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Helpdesk</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/helpdesk/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">Shared Inbox vs Helpdesk Software</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Shared Inbox vs Helpdesk Software
              </h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                When a shared inbox is enough versus when you need full helpdesk workflows, automation, and reporting.
              </p>
              <GuideLastUpdated date="March 13, 2026" />
            </section>
            <section className="pt-8 pb-8">
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p>A shared inbox lets a team see and reply to the same email (or chat) conversations in one place—with assignment, internal notes, and customer history. Helpdesk software adds formal ticketing (status, priority, SLA), automation (routing, canned responses, escalation), and reporting. Deciding between them depends on team size, volume, and how much structure you need.</p>
                <p>Tools like <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout</Link> and <Link href={getHelpdeskReviewUrl("front")} className={linkGreen}>Front</Link> sit in the shared-inbox camp with light workflow; <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk</Link> and <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk</Link> are full helpdesks. See our <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>best helpdesk software</Link> and <Link href={getHelpdeskCompareUrl("help-scout-vs-zendesk")} className={linkGreen}>Help Scout vs Zendesk</Link> for how they compare.</p>
              </div>
            </section>
            <section id="shared-inbox" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Collaboration without full ticketing.">What a shared inbox gives you</SectionTitle>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p>A shared inbox centralizes conversations so the whole team can see and reply. You get assignment (who's handling what), internal notes or comments, and often customer history. What you typically don't get is full ticket lifecycle (e.g. New → Open → Pending → Resolved), SLA tracking, or heavy automation. That's enough when volume is low, the team is small, and you don't need to report on response time or escalation.</p>
                <p>Help Scout and Front are examples: both offer shared inbox and collaboration (comments, @mentions) with a simpler mental model than a traditional helpdesk. They're a good fit for small teams that want to move beyond a single email account without adopting full ticketing workflows.</p>
              </div>
            </section>
            <section id="helpdesk" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="When you need workflow and reporting.">When you need full helpdesk software</SectionTitle>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p>Helpdesk software turns conversations into tickets with status, priority, and assignment. You can automate routing (e.g. by keyword or round-robin), set SLAs (e.g. first response within 4 hours), and run reports on volume, response time, and resolution time. That structure becomes important when you have multiple agents, need to ensure nothing is dropped, or want to measure and improve performance.</p>
                <p>Scaling support—adding agents, channels (chat, social), and automation—is easier when the foundation is a helpdesk rather than a minimal shared inbox. If you expect to grow or already feel that conversations are slipping through the cracks, moving to a helpdesk like Zendesk or Freshdesk is the next step.</p>
              </div>
            </section>
            <section id="comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Side by side.">Collaboration, automation, reporting, scaling</SectionTitle>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p><strong className="text-[#1A2D48]">Collaboration</strong> — Both shared inbox and helpdesk support team collaboration (assignment, notes). Helpdesks add more formal ownership and status.</p>
                <p><strong className="text-[#1A2D48]">Automation</strong> — Shared inbox tools often have light rules (e.g. assign by round-robin). Helpdesks add richer automation: routing by keyword, canned responses, escalation, and SLA-based triggers.</p>
                <p><strong className="text-[#1A2D48]">Reporting</strong> — Shared inbox may offer basic volume or activity views. Helpdesks provide response time, resolution time, volume by channel, and CSAT—needed for SLA and team management.</p>
                <p><strong className="text-[#1A2D48]">Scaling</strong> — As you add agents and channels, a helpdesk's structure (tickets, queues, automation) keeps support manageable. A shared inbox can become chaotic at higher volume.</p>
              </div>
            </section>
            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
              <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
            </section>
          </article>
        </div>
        <RelatedHelpdeskResources items={RELATED_ITEMS} excludeHref="/helpdesk/guides/shared-inbox-vs-helpdesk-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Shared Inbox vs Helpdesk Software | BeltStack Guide",
    description: "When a shared inbox is enough versus when you need full helpdesk workflows, automation, reporting, and scaling support.",
  };
}

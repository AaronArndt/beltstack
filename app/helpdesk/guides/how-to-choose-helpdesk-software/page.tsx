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
  { name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "Full helpdesk", reviewHref: getHelpdeskReviewUrl("zendesk") },
  { name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "Value", reviewHref: getHelpdeskReviewUrl("freshdesk") },
  { name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "Simplicity", reviewHref: getHelpdeskReviewUrl("help-scout") },
];

const FAQ_ITEMS = [
  { q: "What should I look for when choosing a helpdesk?", a: "Focus on company size and support volume, channels (email, chat, social), automation and routing needs, reporting, integrations with your CRM or ecommerce platform, and budget (per agent vs per user, free tiers). See the Key factors section above for a full checklist." },
  { q: "How do I compare helpdesk software?", a: "Use our helpdesk comparisons hub and head-to-head pages like Zendesk vs Freshdesk and Help Scout vs Zendesk. Read full reviews for each tool, run free trials with real conversations, and match features to your team size and workflow." },
  { q: "Is a free helpdesk enough to start?", a: "Freshdesk and Zoho Desk offer free tiers that are enough for many small teams. You get limited agents but full ticketing and multi-channel. Upgrade when you need more agents, advanced automation, or deeper reporting." },
  { q: "What's the difference between helpdesk and live chat?", a: "Helpdesk software manages the full support workflow—tickets, history, routing, reporting across channels. Live chat is one channel, often real-time only. Many helpdesks include live chat; see our helpdesk software vs live chat guide for details." },
];

const RELATED_ITEMS = [
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "Helpdesk Guides", href: "/helpdesk/guides" },
  { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
  { label: "Helpdesk Pricing Guide", href: "/helpdesk/guides/helpdesk-software-pricing-guide" },
];

export default function HowToChooseHelpdeskSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How to Choose Helpdesk Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Choose Helpdesk Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Key factors when comparing helpdesk platforms: company size, support volume, channels, automation, reporting, integrations, and budget.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Choosing a helpdesk starts with your support workflow: how many people handle tickets, which channels you use (email, chat, social), and whether you need automation, reporting, and integrations with CRM or ecommerce. A tool that's right for a five-person support team may be overkill for a founder handling support alone; a platform that's great for email may fall short if you add live chat and social. This guide walks through the main factors to evaluate so you can shortlist and compare with confidence.</p>
                    <p>Use our <Link href="/helpdesk/compare" className={linkGreen}>helpdesk comparisons</Link> and <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>best helpdesk software</Link> roundup to shortlist tools; read <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk</Link>, <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk</Link>, <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout</Link>, and <Link href={getHelpdeskReviewUrl("intercom")} className={linkGreen}>Intercom</Link> reviews for depth.</p>
                  </div>
                </section>
                <section id="key-factors" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to evaluate first.">Key factors when choosing a helpdesk</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>These factors apply to most teams. Weight them by your size, channels, and goals.</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Company size and support volume</strong> — How many agents? How many conversations per month? Free or low-cost tiers (Freshdesk, Zoho Desk) suit small teams; higher volume may need more automation and reporting.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Channels</strong> — Email only, or email + chat + social + phone? Help Scout is email-first; Zendesk and Freshdesk offer full multi-channel. Match the tool to the channels you use today and plan to add.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation and routing</strong> — Rules for assignment, prioritization, and canned responses. More volume usually means more need for automation. Compare what's included at each tier.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Response time, resolution time, volume by channel, CSAT. Ensure you can get the views you need for SLAs and team performance.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Integrations</strong> — CRM (Salesforce, HubSpot), ecommerce (Shopify, Magento), and collaboration (Slack). Check that your stack is supported so context flows into the ticket.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Budget</strong> — Per-agent vs per-user pricing; free tiers; add-ons for channels or advanced features. Model total cost at your current and likely future team size.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="decision-guidance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Narrowing your choice.">Decision guidance</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Email-only, small team</strong> — <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout</Link> or a simple shared inbox may be enough. You get customer context and collaboration without multi-channel complexity.</p>
                    <p><strong className="text-[#1A2D48]">Multi-channel, growing team</strong> — <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk</Link> or <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk</Link> offer full ticketing, chat, social, and automation. Freshdesk often costs less; Zendesk has the larger ecosystem.</p>
                    <p><strong className="text-[#1A2D48]">Ecommerce-first</strong> — <Link href={getHelpdeskReviewUrl("gorgias")} className={linkGreen}>Gorgias</Link> is built for Shopify and Magento with order context in the ticket. Zendesk and Freshdesk integrate with stores but are general-purpose.</p>
                    <p><strong className="text-[#1A2D48]">Product-led / SaaS</strong> — <Link href={getHelpdeskReviewUrl("intercom")} className={linkGreen}>Intercom</Link> is messaging-first with in-app support; Zendesk and Help Scout also fit. Choose by whether you want conversational UX (Intercom) or ticket-centric (Zendesk).</p>
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
        <RelatedHelpdeskResources items={RELATED_ITEMS} excludeHref="/helpdesk/guides/how-to-choose-helpdesk-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Choose Helpdesk Software | BeltStack Guide",
    description: "Key factors when comparing helpdesk platforms: company size, support volume, channels, automation, reporting, integrations, and budget.",
  };
}

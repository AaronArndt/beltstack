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
  { q: "What is the difference between helpdesk software and live chat?", a: "Helpdesk software manages the full support workflow: tickets, history, routing, and reporting across multiple channels (email, chat, social). Live chat software focuses on real-time chat only. Many helpdesks include live chat; some businesses use standalone chat for a single channel." },
  { q: "Do I need both helpdesk and live chat?", a: "Not necessarily. If you only need chat and don't need ticketing, reporting, or multi-channel, a standalone chat tool can suffice. If you need to track conversations, assign them, and report on volume and response time, a helpdesk (which usually includes chat) is the better fit." },
  { q: "Which helpdesks have the best live chat?", a: "Zendesk, Intercom, Freshdesk, and LiveAgent all offer strong chat. Intercom is built around messaging and chat; Zendesk and Freshdesk offer chat as part of a full helpdesk. See our helpdesk reviews and comparisons for details." },
];

const RELATED_ITEMS = [
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrl("intercom-vs-zendesk") },
  { label: "How to Choose Helpdesk Software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
];

export default function HelpdeskVsLiveChatPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="pt-8 pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/helpdesk" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Helpdesk</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/helpdesk/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">Helpdesk Software vs Live Chat</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Helpdesk Software vs Live Chat
              </h1>
              <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                When you need ticketing and workflows versus real-time messaging—and when you need both.
              </p>
              <GuideLastUpdated date="March 13, 2026" />
            </section>
            <section className="pt-8 pb-8">
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p>Helpdesk software and live chat tools both support customer conversations, but they solve different problems. A helpdesk manages the full support workflow: turning conversations into tickets, routing them, tracking history, and reporting on volume and response time across email, chat, social, and sometimes phone. Live chat software focuses on real-time chat only—often a widget on your site and a simple inbox for agents. Deciding which you need (or whether you need both) depends on your channels, volume, and how much you need to track and report.</p>
                <p>Many helpdesks—including <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk</Link>, <Link href={getHelpdeskReviewUrl("intercom")} className={linkGreen}>Intercom</Link>, and <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk</Link>—include live chat as one channel. So you can get chat inside a helpdesk. The reverse isn't true: standalone live chat usually doesn't give you full ticketing, multi-channel routing, or robust reporting. See our <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>best helpdesk software</Link> and <Link href={getHelpdeskCompareUrl("intercom-vs-zendesk")} className={linkGreen}>Intercom vs Zendesk</Link> for how messaging-first and helpdesk-first tools compare.</p>
              </div>
            </section>
            <section id="helpdesk-vs-chat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Ticketing and workflows vs real-time messaging.">Helpdesk: ticketing and workflows</SectionTitle>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p>Helpdesk software is built around tickets (or conversation threads) that have status, assignment, and history. Each customer conversation becomes a trackable unit. You can route by keyword, assign to agents or teams, set SLAs, and run reports on response time, resolution time, and volume. Support typically happens across multiple channels—email, chat, social—in one unified inbox, so the same ticket might start as email and continue in chat.</p>
                <p>That workflow is valuable when you have more than one person handling support, need to ensure nothing is dropped, or want to measure and improve performance. Helpdesks also usually include automation: canned responses, assignment rules, and escalation. If your goal is to run support as a process with accountability and reporting, a helpdesk is the right foundation.</p>
              </div>
            </section>
            <section id="live-chat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Real-time chat as a channel.">Live chat: real-time messaging</SectionTitle>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p>Live chat software provides a chat widget on your site and an inbox (or dashboard) for agents to reply in real time. It's optimized for instant back-and-forth. Standalone chat tools often don't offer full ticketing—conversations may not become assignable tickets with status and history in the same way. They're a good fit when you only need one channel (chat), have low volume, and don't need heavy reporting or routing.</p>
                <p>If you need chat plus email, social, and reporting, you're better off with a helpdesk that includes chat. Platforms like Intercom are built around messaging and chat but still offer ticketing, bots, and help center—so you get both conversational UX and support workflow. <Link href={getHelpdeskReviewUrl("intercom")} className={linkGreen}>Intercom</Link> and <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk</Link> both offer strong chat as part of a broader product.</p>
              </div>
            </section>
            <section id="when-to-use" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Choosing the right tool.">When to use one, the other, or both</SectionTitle>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p><strong className="text-[#1A2D48]">Use a helpdesk</strong> when you have (or plan to have) multiple agents, need to track and assign conversations, want reporting on volume and response time, or support customers via email and chat (and possibly social). A helpdesk that includes chat gives you one place for all channels.</p>
                <p><strong className="text-[#1A2D48]">Use standalone live chat</strong> only when you strictly need a single channel (chat), have very low volume, and don't need ticketing or reporting. Many businesses outgrow this quickly and move to a helpdesk.</p>
                <p><strong className="text-[#1A2D48]">You don't need both</strong> in the sense of separate tools—a helpdesk that includes chat covers chat. Choose a helpdesk with strong chat (e.g. Zendesk, Intercom, Freshdesk) if you want real-time messaging and full support workflow in one platform.</p>
              </div>
            </section>
            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
              <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
            </section>
          </article>
        </div>
        <RelatedHelpdeskResources items={RELATED_ITEMS} excludeHref="/helpdesk/guides/helpdesk-software-vs-live-chat" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Helpdesk Software vs Live Chat | BeltStack Guide",
    description: "When you need ticketing and workflows versus real-time messaging. How helpdesk and live chat differ, and when you need one, the other, or both.",
  };
}

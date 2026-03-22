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
  { q: "How much does helpdesk software cost per month?", a: "Many platforms charge per agent (or per seat), often $15–25/agent/month for entry tiers. Freshdesk and Zoho Desk have free tiers; Zendesk typically starts around $19/agent. Some tools (e.g. Intercom) also factor in contact or conversation volume. See our helpdesk reviews for current pricing." },
  { q: "Are there hidden costs with helpdesk software?", a: "Watch for add-ons: extra channels (e.g. phone), advanced automation, additional agents beyond base tier, and usage-based fees (e.g. contacts or conversations). Model total cost including the channels and features you need." },
  { q: "When is it worth paying for a more advanced helpdesk?", a: "When you have multiple agents, need robust automation and reporting, or rely on many channels (email, chat, social, phone). Advanced platforms justify cost with better routing, SLA tools, and integrations. Small teams can often start on free or low-cost tiers." },
];

const RELATED_ITEMS = [
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
  { label: "Freshdesk vs Zoho Desk", href: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
];

export default function HelpdeskPricingGuidePage() {
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
                <li className="text-gray-700 font-medium" aria-current="page">Helpdesk Software Pricing Guide</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Helpdesk Software Pricing Guide
              </h1>
              <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                Pricing tiers, per-agent costs, automation and add-ons, hidden costs, and when advanced platforms make sense.
              </p>
              <GuideLastUpdated date="March 13, 2026" />
            </section>
            <section className="pt-8 pb-8">
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p>Helpdesk pricing varies by model: per agent, per user, or (for some tools) by contact or conversation volume. Understanding how each vendor charges helps you compare total cost and avoid surprises. This guide covers common pricing structures, what to watch for, and when it makes sense to pay for a more advanced platform.</p>
                <p>Tools like <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk</Link> and <Link href={getHelpdeskReviewUrl("zoho-desk")} className={linkGreen}>Zoho Desk</Link> offer free or low-cost entry; <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk</Link> and <Link href={getHelpdeskReviewUrl("intercom")} className={linkGreen}>Intercom</Link> typically cost more but add breadth. See our <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>best helpdesk software</Link> and <Link href={getHelpdeskCompareUrl("zendesk-vs-freshdesk")} className={linkGreen}>Zendesk vs Freshdesk</Link> for side-by-side pricing.</p>
              </div>
            </section>
            <section id="pricing-models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="How helpdesks charge.">Pricing models</SectionTitle>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p><strong className="text-[#1A2D48]">Per agent (or per seat)</strong> — Most common. You pay for each person who uses the helpdesk to reply to customers. Entry tiers are often $15–25/agent/month. Adding agents scales cost linearly. Compare per-agent price and what's included (channels, automation, reporting) at each tier.</p>
                <p><strong className="text-[#1A2D48]">Per user</strong> — Some tools (e.g. Help Scout, Front) charge per user rather than per agent. Similar idea: more seats, higher cost. Check whether "user" includes agents only or also teammates who need read-only or occasional access.</p>
                <p><strong className="text-[#1A2D48]">Usage-based</strong> — Intercom and some others factor in contacts or conversations. Cost can scale with volume even if agent count stays the same. Useful for modeling when support volume is high.</p>
              </div>
            </section>
            <section id="tiers-and-addons" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Tiers and add-ons.">Tiers and add-on costs</SectionTitle>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p>Entry tiers usually include email and sometimes chat; higher tiers add more channels (social, phone), advanced automation, and better reporting. Add-ons might include extra agents beyond plan limits, additional channels, or premium support. When comparing, list the features you need and see which tier (and add-ons) each vendor requires—then compare total cost.</p>
                <p>Hidden or easy-to-miss costs: per-conversation or per-contact fees, fees for extra storage or long-term history, and professional services or implementation. Free trials help you test; always confirm pricing for your expected agent count and feature set before committing.</p>
              </div>
            </section>
            <section id="when-advanced-makes-sense" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="When to pay for more.">When advanced platforms make sense</SectionTitle>
              <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                <p>Advanced helpdesks (e.g. Zendesk, Intercom at higher tiers) cost more but offer deeper automation, more channels, better reporting, and larger app ecosystems. They make sense when you have multiple agents, need SLA management and advanced routing, or rely on many integrations. For small teams with modest volume, free or low-cost tiers from Freshdesk, Zoho Desk, or Help Scout often suffice—upgrade when you outgrow them.</p>
              </div>
            </section>
            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
              <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
            </section>
          </article>
        </div>
        <RelatedHelpdeskResources items={RELATED_ITEMS} excludeHref="/helpdesk/guides/helpdesk-software-pricing-guide" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Helpdesk Software Pricing Guide | BeltStack Guide",
    description: "Helpdesk pricing tiers, per-agent costs, automation and add-ons, hidden costs, and when advanced platforms make sense.",
  };
}

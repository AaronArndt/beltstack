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
  { name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "Low cost, scalability", reviewHref: getHelpdeskReviewUrl("freshdesk") },
  { name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "Simple setup", reviewHref: getHelpdeskReviewUrl("help-scout") },
  { name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom, rating: "4.4", bestFor: "Product-led support", reviewHref: getHelpdeskReviewUrl("intercom") },
];

const FAQ_ITEMS = [
  { q: "What helpdesk is best for startups?", a: "Freshdesk and Help Scout are often recommended: both offer free or low-cost entry, simple setup, and scale as you add agents. Intercom fits product-led or SaaS startups that want in-app messaging and chat." },
  { q: "How much does helpdesk software cost for a startup?", a: "Many platforms have free tiers (e.g. Freshdesk, Zoho Desk) or start around $15–25/agent or user per month. Start with a free or low-tier plan and upgrade as support volume and team size grow." },
  { q: "Can we switch helpdesk later as we grow?", a: "Yes. Most helpdesks support data export and migration. Choosing a tool with a clear upgrade path (more agents, channels, automation) reduces the need to switch. Read our how to choose helpdesk software guide for scalability factors." },
];

const RELATED_ITEMS = [
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "Helpdesk Guides", href: "/helpdesk/guides" },
  { label: "Helpdesk for SaaS Companies", href: "/helpdesk/guides/helpdesk-software-for-saas-companies" },
  { label: "How to Choose Helpdesk Software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
];

export default function HelpdeskForStartupsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/helpdesk" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Helpdesk</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/helpdesk/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Helpdesk Software for Startups</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Helpdesk Software for Startups
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    How startups choose helpdesk tools: flexibility, low cost, scalability, and ease of setup.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Startups need support software that can grow with them—without locking them into enterprise pricing or complex implementation. The right helpdesk for a startup offers a low barrier to entry (free or affordable tiers), simple setup, and a clear path to add agents, channels, and automation as volume and team size increase.</p>
                    <p>Tools like <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk</Link>, <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout</Link>, and <Link href={getHelpdeskReviewUrl("intercom")} className={linkGreen}>Intercom</Link> are often a good fit: each has a low-cost or free entry point and scales with your needs. See our <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>best helpdesk software</Link> roundup and <Link href={getHelpdeskCompareUrl("help-scout-vs-zendesk")} className={linkGreen}>Help Scout vs Zendesk</Link> for comparisons.</p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What startups should prioritize.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Flexibility</strong> — Choose a platform that can start simple (e.g. email-only) and add chat, automation, and reporting as you grow. Avoid overbuying on day one.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Low cost</strong> — Free tiers (Freshdesk, Zoho Desk) or transparent per-seat pricing help you preserve runway. Model cost at 12–18 months of growth.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ease of setup</strong> — Startups rarely have dedicated support admins. Prefer tools that go live in days, not weeks, with minimal configuration.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Scalability</strong> — Ensure the helpdesk can add agents, channels, and automation without a full migration. Check upgrade paths and limits on free or entry tiers.</span></li>
                  </ul>
                </section>
                <section id="recommended-tools" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Helpdesk tools that fit startups.">Recommended helpdesk tools for startups</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Freshdesk</strong> — Free tier and low per-agent pricing; full ticketing and multi-channel. Scales with you. <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk review</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Help Scout</strong> — Simple shared inbox and quick setup; good for email-first support. <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout review</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Intercom</strong> — Strong for product-led and SaaS startups; in-app messaging and chat. <Link href={getHelpdeskReviewUrl("intercom")} className={linkGreen}>Intercom review</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Helpdesk to Compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedHelpdeskResources items={RELATED_ITEMS} excludeHref="/helpdesk/guides/helpdesk-software-for-startups" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Helpdesk Software for Startups | BeltStack Guide",
    description: "How startups choose helpdesk software: flexibility, low cost, scalability, and ease of setup. Top picks: Freshdesk, Help Scout, Intercom.",
  };
}

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
  { name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "Full helpdesk, scale", reviewHref: getHelpdeskReviewUrl("zendesk") },
  { name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom, rating: "4.4", bestFor: "Product-led, in-app", reviewHref: getHelpdeskReviewUrl("intercom") },
  { name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "Simplicity", reviewHref: getHelpdeskReviewUrl("help-scout") },
];

const FAQ_ITEMS = [
  { q: "What helpdesk is best for SaaS?", a: "Zendesk, Intercom, and Help Scout are often recommended. Zendesk offers full helpdesk and scale; Intercom is built for product-led and in-app support; Help Scout is simple and email-friendly. Choose by whether you prioritize in-app messaging (Intercom), full ticketing (Zendesk), or simplicity (Help Scout)." },
  { q: "Why do SaaS companies need helpdesk software?", a: "SaaS support involves product questions, billing, and onboarding—often across email, chat, and in-app. A helpdesk keeps conversations in one place, adds customer lifecycle context, and scales as you add agents and channels. Self-serve (help center, bots) plus human support is common." },
];

const RELATED_ITEMS = [
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrl("intercom-vs-zendesk") },
  { label: "Helpdesk for Startups", href: "/helpdesk/guides/helpdesk-software-for-startups" },
];

export default function HelpdeskForSaaSPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Helpdesk Software for SaaS Companies</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Helpdesk Software for SaaS Companies
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Ticketing, customer lifecycle context, integrations, self-serve support, and scaling support operations for product-led businesses.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>SaaS companies handle support that's tied to the product: onboarding, feature questions, billing, and technical issues. Support often happens in-app (chat, messaging) as well as over email, and customers expect fast, informed answers. The right helpdesk for a SaaS company combines ticketing and workflow with customer lifecycle context, integrations to your product and CRM, and room for self-serve (help center, bots) as you scale.</p>
                    <p>Platforms like <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk</Link>, <Link href={getHelpdeskReviewUrl("intercom")} className={linkGreen}>Intercom</Link>, and <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout</Link> are frequently used by SaaS teams. Zendesk offers full helpdesk depth; Intercom is built for product-led and in-app support; Help Scout keeps things simple. See our <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>best helpdesk software</Link> and <Link href={getHelpdeskCompareUrl("intercom-vs-zendesk")} className={linkGreen}>Intercom vs Zendesk</Link> for comparisons.</p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What SaaS support teams need.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ticketing and workflow</strong> — Track conversations, assign them, and maintain SLAs as volume grows. Integrate with product and billing so agents have context.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Customer lifecycle context</strong> — See plan, usage, and history so support can give accurate, personalized answers without asking the customer to repeat themselves.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Integrations</strong> — Connect to your product, CRM, and billing. Many SaaS teams use Intercom, Zendesk, or Help Scout with Segment, Stripe, or their app's API.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Self-serve and scale</strong> — Help center and bots deflect common questions; human support handles the rest. Plan for both as you grow.</span></li>
                  </ul>
                </section>
                <section id="recommended-tools" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Top helpdesk tools for SaaS.">Recommended helpdesk tools for SaaS</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Zendesk</strong> — Full helpdesk with strong reporting and ecosystem. Fits SaaS teams that need multi-channel and scale. <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk review</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Intercom</strong> — Built for product-led support; in-app messaging, chat, and bots. Strong for SaaS that wants conversational support in the product. <Link href={getHelpdeskReviewUrl("intercom")} className={linkGreen}>Intercom review</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Help Scout</strong> — Simpler shared inbox and docs; good when you want ease of use and email-first workflow. <Link href={getHelpdeskReviewUrl("help-scout")} className={linkGreen}>Help Scout review</Link>.</p>
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
        <RelatedHelpdeskResources items={RELATED_ITEMS} excludeHref="/helpdesk/guides/helpdesk-software-for-saas-companies" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Helpdesk Software for SaaS Companies | BeltStack Guide",
    description: "Ticketing, customer lifecycle context, integrations, self-serve support, and scaling support for SaaS. Top picks: Zendesk, Intercom, Help Scout.",
  };
}

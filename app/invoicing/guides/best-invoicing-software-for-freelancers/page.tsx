import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedInvoicingResources } from "@/components/guides/RelatedInvoicingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getInvoicingReviewUrl } from "@/lib/routes";

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
  {
    q: "What is the best invoicing software for freelancers?",
    a: "FreshBooks is our top pick for most freelancers: it combines invoicing, time tracking, and client billing in one easy-to-use package. Wave is the best free option; Bonsai is strong if you also need contracts and proposals.",
  },
  {
    q: "Do freelancers need invoicing software?",
    a: "Yes. Invoicing software helps you send professional invoices, track what’s paid, set up recurring billing for retainers, and accept online payments. It saves time and keeps records in one place.",
  },
  {
    q: "Is there free invoicing software for freelancers?",
    a: "Wave offers free core invoicing and receipt scanning. Zoho Invoice has a free tier with limits. Both work for solo freelancers; paid tools like FreshBooks add more features and client capacity.",
  },
  {
    q: "Can I use invoicing software for time tracking?",
    a: "Many tools, including FreshBooks and Bonsai, include time tracking so you can log hours by project and add them to invoices. That’s especially useful for freelancers who bill by the hour.",
  },
  {
    q: "How do I choose between FreshBooks and Wave?",
    a: "FreshBooks is paid and offers more features—time tracking, better client portal, and stronger support. Wave is free for core invoicing and suits very small or cost-conscious freelancers. See our FreshBooks vs Wave comparison for a head-to-head.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Freelancers", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Bonsai", logoSrc: "/Logos/bonsai.jpeg", rating: 4.3, bestFor: "Contracts & proposals", reviewHref: getInvoicingReviewUrl("bonsai") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free invoicing", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function BestInvoicingSoftwareForFreelancersPage() {
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
                    <li><Link href="/invoicing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Best Invoicing Software for Freelancers</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Best Invoicing Software for Freelancers
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Compare invoicing tools that work well for solo businesses: simple invoicing, payment collection, recurring billing, and easy expense tracking.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Freelancers need invoicing software that is simple to use, lets clients pay online, and supports recurring billing for retainers. You don’t want to overpay for features you won’t use, but you do want professional invoices and clear visibility into what’s paid and what’s outstanding.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      roundup highlights FreshBooks, Wave, and Bonsai among the top options for freelancers. Read our{" "}
                      <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>,{" "}
                      <Link href={getInvoicingReviewUrl("wave")} className={linkGreen}>Wave</Link>, and{" "}
                      <Link href={getInvoicingReviewUrl("bonsai")} className={linkGreen}>Bonsai</Link> reviews for details.
                    </p>
                  </div>
                </section>
                <section id="what-freelancers-need" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Features that matter most for solo pros.">What Freelancers Need</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Simple invoicing</strong> — Create and send professional invoices without complexity.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payment collection</strong> — Online payment links so clients can pay by card or ACH.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Recurring billing</strong> — Automate monthly or project-based retainer invoices.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Expense tracking</strong> — Optional receipt scan and categorization for tax time.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Best Invoicing Tools for Freelancers" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/best-invoicing-software-for-freelancers" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software for Freelancers | BeltStack Guide",
    description:
      "Compare the best invoicing software for freelancers: simple invoicing, payment collection, recurring billing, and tools that work for solo businesses.",
  };
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

// ——— Design (match payroll guide pages) ———
function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const FAQ_ITEMS = [
  {
    q: "Why do businesses look for QuickBooks alternatives?",
    a: "Common reasons include price increases, feeling that the interface is too complex for their current size, wanting better support, or preferring a tool that fits more naturally with their existing ecosystem, such as Zoho or an accountant-preferred platform.",
  },
  {
    q: "Is Xero a good alternative to QuickBooks?",
    a: "Yes. Many accountants and small businesses view Xero as a strong QuickBooks alternative with a clean interface, robust reporting, and a large ecosystem of integrations. The better fit depends on your region, industry, and whether your advisor already works in one system.",
  },
  {
    q: "Can I migrate data from QuickBooks to another accounting tool?",
    a: "Most major accounting platforms offer import tools for customers, vendors, chart of accounts, and sometimes historical transactions. The process is easier if your books are up to date before migrating and you coordinate with your accountant.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Xero",
    logoSrc: "/Logos/xero.png",
    rating: 4.6,
    bestFor: "QuickBooks alternative for many SMBs",
    reviewHref: getAccountingReviewUrl("xero"),
  },
  {
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    rating: 4.5,
    bestFor: "Freelancers and service businesses",
    reviewHref: getAccountingReviewUrl("freshbooks"),
  },
  {
    name: "Zoho Books",
    logoSrc: "/Logos/zoho.jpeg",
    rating: 4.4,
    bestFor: "Businesses on the Zoho stack",
    reviewHref: getAccountingReviewUrl("zoho-books"),
  },
];

export default function QuickBooksAlternativesGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            {/* ——— Article content ——— */}
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                {/* ——— Breadcrumb ——— */}
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/accounting"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Accounting
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/accounting/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      QuickBooks Alternatives
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    QuickBooks Alternatives
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn when QuickBooks Online is a strong fit, when it is not, and which accounting platforms make the
                    most compelling alternatives.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      QuickBooks Online is the default choice for many small businesses—especially in North America. It has
                      broad feature coverage, deep accountant support, and integrations with hundreds of tools. But it is
                      not the only option, and it is not always the best fit.
                    </p>
                    <p>
                      Some teams find QuickBooks more complex than they need. Others want a cleaner UI, tighter integration
                      with their CRM, or a lower price point. In those cases, tools like{" "}
                      <Link
                        href={getAccountingReviewUrl("xero")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Xero
                      </Link>
                      ,{" "}
                      <Link
                        href={getAccountingReviewUrl("freshbooks")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        FreshBooks
                      </Link>
                      ,{" "}
                      <Link
                        href={getAccountingReviewUrl("zoho-books")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Zoho Books
                      </Link>
                      ,{" "}
                      <Link
                        href={getAccountingReviewUrl("wave")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Wave
                      </Link>
                      , and{" "}
                      <Link
                        href={getAccountingReviewUrl("sage-accounting")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Sage Accounting
                      </Link>{" "}
                      are worth a close look.
                    </p>
                  </div>
                </section>

                {/* ——— When QuickBooks Online Works Well ——— */}
                <section
                  id="when-quickbooks-works"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Scenarios where sticking with QuickBooks makes sense.">
                    When QuickBooks Online Is a Strong Fit
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>QuickBooks Online is often a good choice when:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Your accountant or bookkeeper already works in QuickBooks and prefers to stay there.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          You want broad feature coverage across invoicing, basic inventory, job costing, and reporting in
                          one place.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          You rely on apps that integrate first or best with QuickBooks in their marketplace.
                        </span>
                      </li>
                    </ul>
                    <p>
                      If this sounds like you, switching may not buy much—especially if your current setup works and your
                      team is already trained on QuickBooks.
                    </p>
                  </div>
                </section>

                {/* ——— When to Consider Alternatives ——— */}
                <section
                  id="when-to-consider-alternatives"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Signs another platform might be a better fit.">
                    When to Consider a QuickBooks Alternative
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>You might explore alternatives if:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          The interface feels overwhelming for your current size and you want something simpler to run
                          day to day.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Your subscription costs have climbed as you added users or extra modules.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          You rely heavily on a different ecosystem (such as Zoho) and want accounting that feels more
                          integrated.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Standout QuickBooks Alternatives ——— */}
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Top platforms to evaluate instead of or alongside QuickBooks.">
                    Standout QuickBooks Alternatives
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-5 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Xero</strong> is the most common QuickBooks alternative for many
                      small businesses. It offers a modern interface, strong reporting, and a growing ecosystem. See our{" "}
                      <Link
                        href={getAccountingReviewUrl("xero")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Xero review
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/accounting/compare/quickbooks-online-vs-xero"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online vs Xero comparison
                      </Link>{" "}
                      for details.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">FreshBooks</strong> appeals to freelancers and agencies that care
                      more about invoicing and time tracking than inventory or complex reporting. Our{" "}
                      <Link
                        href={getAccountingReviewUrl("freshbooks")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        FreshBooks review
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/accounting/compare/quickbooks-online-vs-freshbooks"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online vs FreshBooks comparison
                      </Link>{" "}
                      explain when to pick one over the other.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Zoho Books</strong> is a strong fit for companies that already
                      use Zoho CRM or other Zoho tools. It offers solid automation and portal features with attractive
                      pricing; read our{" "}
                      <Link
                        href={getAccountingReviewUrl("zoho-books")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Zoho Books review
                      </Link>{" "}
                      for more.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Wave</strong> and{" "}
                      <strong className="text-[#1A2D48]">Sage Accounting</strong> are also common QuickBooks
                      considerations—Wave for free core accounting if you are very cost-sensitive, Sage for businesses that
                      prefer its ecosystem or have history with its desktop tools.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers about moving off QuickBooks.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar: QuickBooks alternatives (desktop only) ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="QuickBooks Alternatives" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>

        <RelatedAccountingResources excludeHref="/accounting/guides/quickbooks-alternatives" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "QuickBooks Alternatives | BeltStack Guide",
    description:
      "See when QuickBooks Online is a good fit, when it is not, and which accounting software alternatives like Xero, FreshBooks, and Zoho Books are worth considering.",
  };
}


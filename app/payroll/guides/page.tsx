import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPayrollResources } from "@/components/guides/RelatedPayrollResources";

// ——— Design (match compare hub / payroll hub) ———
function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

type GuideCardProps = { title: string; href: string; description: string };

function GuideCard({ title, href, description }: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
    >
      <h3 className="text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
      <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
        Read guide →
      </span>
    </Link>
  );
}

const PAYROLL_GUIDES: GuideCardProps[] = [
  {
    title: "How Payroll Software Works",
    href: "/payroll/guides/how-payroll-software-works",
    description:
      "Learn how payroll software automates payroll calculations, tax filings, and employee payments.",
  },
  {
    title: "Payroll Software Pricing Guide",
    href: "/payroll/guides/payroll-software-pricing",
    description:
      "Understand how payroll providers price their services and what small businesses should expect to pay.",
  },
  {
    title: "Payroll for Small Business",
    href: "/payroll/guides/payroll-for-small-business",
    description:
      "Learn how small businesses run payroll and choose payroll software that fits their size and budget.",
  },
  {
    title: "Payroll for Contractors",
    href: "/payroll/guides/payroll-for-contractors",
    description:
      "Learn how payroll software helps contractors and trade businesses manage payroll and tax filings.",
  },
  {
    title: "Payroll for Construction Companies",
    href: "/payroll/guides/payroll-for-construction-companies",
    description:
      "Learn how construction companies manage payroll for crews, subcontractors, and job-based labor.",
  },
  {
    title: "Payroll for Landscaping Businesses",
    href: "/payroll/guides/payroll-for-landscaping-businesses",
    description:
      "Learn how landscaping businesses manage payroll for crews, seasonal workers, and subcontractors.",
  },
  {
    title: "Payroll for Electricians",
    href: "/payroll/guides/payroll-for-electricians",
    description:
      "Learn how electrician businesses manage payroll for crews, apprentices, and subcontractors.",
  },
  {
    title: "Cheapest Payroll Software",
    href: "/payroll/guides/cheapest-payroll-software",
    description:
      "Find the most affordable payroll software for small businesses and compare low-cost options.",
  },
  {
    title: "Payroll Software for 1099 Contractors",
    href: "/payroll/guides/payroll-software-for-1099-contractors",
    description:
      "Learn how payroll software handles 1099 contractor payments, tax forms, and compliance.",
  },
  {
    title: "Payroll for Hourly Workers",
    href: "/payroll/guides/payroll-for-hourly-workers",
    description:
      "Learn how payroll software handles hourly pay, overtime, and time tracking.",
  },
  {
    title: "Payroll for Seasonal Businesses",
    href: "/payroll/guides/payroll-for-seasonal-businesses",
    description:
      "Learn how seasonal businesses run payroll when headcount goes up and down.",
  },
  {
    title: "How to Switch Payroll Providers",
    href: "/payroll/guides/how-to-switch-payroll-providers",
    description: "A step-by-step guide to moving from one payroll provider to another.",
  },
  {
    title: "Payroll Tax Filing Explained",
    href: "/payroll/guides/payroll-taxes-explained",
    description:
      "Understand payroll tax filing requirements and how payroll software automates compliance.",
  },
];

export default function PayrollGuidesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        {/* ——— Hero ——— */}
        <section className="bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/payroll"
                    className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Payroll
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">
                  Guides
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Payroll Software Guides
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Learn how payroll software works, how much it costs, and how to choose the right payroll
              solution for your business.
            </p>
            <GuideLastUpdated date="March 4, 2026" />
            <p className="mt-5 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              These guides help business owners understand payroll software, pricing, taxes, and how to
              choose the right provider. You can also explore our{" "}
              <Link
                href="/payroll"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                payroll software reviews
              </Link>
              ,{" "}
              <Link
                href="/payroll/compare"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                payroll comparisons
              </Link>
              , and{" "}
              <Link
                href="/payroll/best-payroll-software"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                best payroll software
              </Link>{" "}
              roundups to compare options and find the best fit.
            </p>
          </div>
        </section>

        {/* ——— Payroll Guides ——— */}
        <section id="payroll-guides" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Educational guides on how payroll works, pricing, and choosing a provider.">
              Payroll Guides
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PAYROLL_GUIDES.map((guide) => (
                <GuideCard
                  key={guide.href}
                  title={guide.title}
                  href={guide.href}
                  description={guide.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ——— Related Payroll Resources ——— */}
        <RelatedPayrollResources />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payroll Software Guides | BeltStack",
    description:
      "Learn how payroll software works, how much payroll software costs, and how to choose the right payroll provider for your business.",
  };
}

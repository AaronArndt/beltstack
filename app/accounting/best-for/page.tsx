import Link from "next/link";
import { getAccountingBestForUrl } from "@/lib/routes";

const SCENARIOS: { slug: string; label: string }[] = [
  { slug: "freelancers", label: "Best for freelancers" },
  { slug: "contractors", label: "Best for contractors" },
  { slug: "small-business", label: "Best for small business" },
  { slug: "ecommerce", label: "Best for ecommerce" },
  { slug: "agencies", label: "Best for agencies" },
];

export default function AccountingBestForPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
            <li>
              <Link href="/" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/accounting" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Accounting
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#1A2D48] font-medium" aria-current="page">
              Best for
            </li>
          </ol>
        </nav>
        <h1 className="text-[#1A2D48] text-2xl font-semibold mb-4 sm:text-3xl">
          Best Accounting Software By Use Case
        </h1>
        <p className="text-[#6E6E6E] mb-8 text-base leading-relaxed">
          Browse accounting software recommendations by use case: freelancers, contractors, small business, ecommerce, or agencies. Find the best fit for your business.
        </p>

        <section className="mb-10">
          <h2 className="text-[#1A2D48] text-lg font-medium mb-3">Best accounting by use case</h2>
          <ul className="space-y-2">
            {SCENARIOS.map(({ slug, label }) => (
              <li key={slug}>
                <Link
                  href={getAccountingBestForUrl(slug)}
                  className="text-[#1A2D48] font-medium hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-[#1A2D48] text-lg font-medium mb-3">Related links</h2>
          <ul className="list-disc list-inside space-y-1 text-[#6E6E6E]">
            <li><Link href="/accounting" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Accounting hub</Link></li>
            <li><Link href="/accounting/compare" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Compare accounting software</Link></li>
            <li><Link href="/accounting/guides" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Accounting guides</Link></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Accounting Software by Use Case | BeltStack",
    description:
      "Find the best accounting software for freelancers, contractors, small business, ecommerce, and agencies. Compare top picks by use case.",
  };
}

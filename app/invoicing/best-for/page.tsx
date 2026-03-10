import Link from "next/link";
import { getInvoicingBestForUrl } from "@/lib/routes";

const SCENARIOS: { slug: string; label: string }[] = [
  { slug: "freelancers", label: "Best for freelancers" },
  { slug: "small-business", label: "Best for small business" },
  { slug: "agencies", label: "Best for agencies" },
  { slug: "contractors", label: "Best for contractors" },
  { slug: "consultants", label: "Best for consultants" },
];

export default function InvoicingBestForPage() {
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
              <Link href="/invoicing" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Invoicing
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#1A2D48] font-medium" aria-current="page">
              Best for
            </li>
          </ol>
        </nav>
        <h1 className="text-[#1A2D48] text-2xl font-semibold mb-4 sm:text-3xl">
          Best Invoicing Software By Use Case
        </h1>
        <p className="text-[#6E6E6E] mb-8 text-base leading-relaxed">
          Browse invoicing software recommendations by use case: freelancers, small business, agencies, contractors, or consultants. Find the best fit for your business.
        </p>

        <section className="mb-10">
          <h2 className="text-[#1A2D48] text-lg font-medium mb-3">Best invoicing by use case</h2>
          <ul className="space-y-2">
            {SCENARIOS.map(({ slug, label }) => (
              <li key={slug}>
                <Link
                  href={getInvoicingBestForUrl(slug)}
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
            <li><Link href="/invoicing" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing hub</Link></li>
            <li><Link href="/invoicing/compare" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Compare invoicing software</Link></li>
            <li><Link href="/invoicing/guides" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing guides</Link></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software by Use Case | BeltStack",
    description:
      "Find the best invoicing software for freelancers, small business, agencies, contractors, and consultants. Compare top picks by use case.",
  };
}

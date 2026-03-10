import Link from "next/link";

export default function BestForPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Best Payroll For...</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Browse payroll recommendations by scenario: trade, company size, budget, or use case. Find the best fit for your blue-collar business.
      </p>

      <section className="mb-10">
        <h2 className="text-lg font-medium mb-2">Related links</h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
          <li><Link href="/payroll" className="hover:underline">Payroll hub</Link></li>
          <li><Link href="/payroll/best-payroll-software" className="hover:underline">Best payroll software (roundup)</Link></li>
          <li><Link href="/payroll/compare" className="hover:underline">Payroll software comparisons</Link></li>
          <li><Link href="/payroll/guides" className="hover:underline">Payroll software guides</Link></li>
          <li><Link href="/payroll/best-for" className="hover:underline">Best payroll by scenario</Link></li>
          <li><Link href="/payroll/best-for/landscaping" className="hover:underline">Best for landscaping</Link></li>
          <li><Link href="/payroll/best-for/plumbing" className="hover:underline">Best for plumbing</Link></li>
          <li><Link href="/payroll/best-for/hvac" className="hover:underline">Best for HVAC</Link></li>
          <li><Link href="/payroll/best-for/cleaning-business" className="hover:underline">Best for cleaning</Link></li>
          <li><Link href="/payroll/best-for/painters" className="hover:underline">Best for painters</Link></li>
          <li><Link href="/payroll/best-for/pest-control" className="hover:underline">Best for pest control</Link></li>
          <li><Link href="/payroll/best-for/lawn-care" className="hover:underline">Best for lawn care</Link></li>
          <li><Link href="/payroll/best-for/tree-service" className="hover:underline">Best for tree service</Link></li>
          <li><Link href="/payroll/best-for/remodeling-contractors" className="hover:underline">Best for remodeling contractors</Link></li>
          <li><Link href="/payroll/best-for/general-contractors" className="hover:underline">Best for general contractors</Link></li>
          <li><Link href="/payroll/best-for/handyman-business" className="hover:underline">Best for handyman business</Link></li>
          <li><Link href="/payroll/best-for/pool-service" className="hover:underline">Best for pool service</Link></li>
          <li><Link href="/payroll/best-for/home-services" className="hover:underline">Best for home services</Link></li>
          <li><Link href="/payroll/best-for/property-management" className="hover:underline">Best for property management</Link></li>
          <li><Link href="/payroll/best-for/maintenance-companies" className="hover:underline">Best for maintenance companies</Link></li>
          <li><Link href="/payroll/best-for/auto-repair" className="hover:underline">Best for auto repair</Link></li>
          <li><Link href="/payroll/best-for/restaurants" className="hover:underline">Best for restaurants</Link></li>
          <li><Link href="/payroll/best-for/retail" className="hover:underline">Best for retail</Link></li>
          <li><Link href="/payroll/best-for/agriculture" className="hover:underline">Best for agriculture</Link></li>
          <li><Link href="/payroll/best-for/nonprofits" className="hover:underline">Best for nonprofits</Link></li>
          <li><Link href="/payroll/review/gusto" className="hover:underline">Gusto review</Link></li>
          <li><Link href="/payroll/compare/gusto-vs-paychex" className="hover:underline">Gusto vs Paychex</Link></li>
        </ul>
      </section>
    </main>
  );
}

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
          <li><Link href="/payroll/trades" className="hover:underline">Payroll by trade</Link></li>
          <li><Link href="/payroll/trades/landscaping" className="hover:underline">Best for landscaping</Link></li>
          <li><Link href="/payroll/providers/gusto" className="hover:underline">Gusto review</Link></li>
          <li><Link href="/payroll/compare/gusto-vs-paychex" className="hover:underline">Gusto vs Paychex</Link></li>
        </ul>
      </section>
    </main>
  );
}

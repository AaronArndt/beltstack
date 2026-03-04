import Link from "next/link";

type Props = { params: Promise<{ scenario: string }> };

export default async function BestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const displayName = scenario.replace(/-/g, " ");
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4 capitalize">Best Payroll for {displayName}</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Curated payroll provider recommendations for this scenario. Includes top picks, why they fit, and quick comparison.
      </p>

      <section className="mb-10">
        <h2 className="text-lg font-medium mb-2">Related links</h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
          <li><Link href="/payroll/best-for" className="hover:underline">Best payroll for...</Link></li>
          <li><Link href="/payroll" className="hover:underline">Payroll hub</Link></li>
          <li><Link href="/payroll/trades" className="hover:underline">Payroll by trade</Link></li>
          <li><Link href="/payroll/providers/gusto" className="hover:underline">Gusto review</Link></li>
        </ul>
      </section>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { providers, trades, tradeRankings, type PayrollProvider } from "@/lib/data/mockPayroll";
import Disclaimer from "../../components/disclaimer";

type Props = { params: Promise<{ trade: string }> };

export default async function TradePage({ params }: Props) {
  const { trade: tradeSlug } = await params;
  const trade = trades.find((t) => t.slug === tradeSlug);
  if (!trade) {
    notFound();
  }

  const ranking = tradeRankings[trade.slug];
  if (!ranking) {
    notFound();
  }

  const topPicks = ranking.topPicks
    .map((slug) => {
      const provider = providers.find((p) => p.slug === slug);
      const entry = ranking.providers.find((r) => r.providerSlug === slug);
      return provider && entry ? { provider, rank: entry.rank, score: entry.score } : null;
    })
    .filter(Boolean) as { provider: PayrollProvider; rank: number; score: number }[];

  const tableRows = ranking.providers.slice(0, 5).map((r) => ({
    ...r,
    provider: providers.find((p) => p.slug === r.providerSlug),
  })).filter((r) => r.provider) as { providerSlug: string; rank: number; score: number; provider: PayrollProvider }[];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-2xl font-semibold mb-4">
          Best Payroll for {trade.name} Companies
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          {trade.description} We compared top payroll providers on pricing, contractor support, and ease of use for {trade.name.toLowerCase()} businesses.
        </p>
      </section>

      {/* Top Picks */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Top Picks</h2>
        <ul className="space-y-4">
          {topPicks.map(({ rank, score, provider }) => (
            <li
              key={provider.slug}
              className="flex items-center gap-4 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700"
            >
              <span className="text-lg font-medium text-zinc-500">#{rank}</span>
              <div className="flex-1">
                <Link
                  href={`/payroll/providers/${provider.slug}`}
                  className="font-medium text-foreground hover:underline"
                >
                  {provider.name}
                </Link>
                <p className="text-sm text-zinc-500">Score: {score}</p>
              </div>
              <span className="text-sm text-zinc-600">{provider.starting_price}</span>
              <a
                href={provider.cta_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Visit
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Comparison table */}
      <section className="mb-12 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Provider Comparison</h2>
        <table className="w-full border-collapse border border-zinc-200 dark:border-zinc-700">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800">
              <th className="border border-zinc-200 dark:border-zinc-700 p-2 text-left">Rank</th>
              <th className="border border-zinc-200 dark:border-zinc-700 p-2 text-left">Provider</th>
              <th className="border border-zinc-200 dark:border-zinc-700 p-2 text-left">Starting price</th>
              <th className="border border-zinc-200 dark:border-zinc-700 p-2 text-left">Key features</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map(({ rank, provider }) => (
              <tr key={provider.slug}>
                <td className="border border-zinc-200 dark:border-zinc-700 p-2">{rank}</td>
                <td className="border border-zinc-200 dark:border-zinc-700 p-2">
                  <Link href={`/payroll/providers/${provider.slug}`} className="text-foreground hover:underline">
                    {provider.name}
                  </Link>
                </td>
                <td className="border border-zinc-200 dark:border-zinc-700 p-2">{provider.starting_price}</td>
                <td className="border border-zinc-200 dark:border-zinc-700 p-2 text-sm">
                  {provider.key_features.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <Disclaimer />

      {/* Related links */}
      <section className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-700">
        <h2 className="text-lg font-medium mb-2">Related links</h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
          <li><Link href="/payroll/trades" className="hover:underline">Payroll by trade</Link></li>
          <li><Link href="/payroll" className="hover:underline">Payroll hub</Link></li>
          <li><Link href="/payroll/providers/gusto" className="hover:underline">Gusto review</Link></li>
          <li><Link href="/payroll/compare/gusto-vs-paychex" className="hover:underline">Gusto vs Paychex</Link></li>
          <li><Link href="/payroll/best-for" className="hover:underline">Best payroll for...</Link></li>
        </ul>
      </section>
    </main>
  );
}

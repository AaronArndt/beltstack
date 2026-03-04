import Link from "next/link";

export default function TradeNotFound() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Trade not found</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        We don&apos;t have a payroll guide for this trade yet. Check our list of trades or return to the payroll hub.
      </p>
      <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
        <li><Link href="/payroll/trades" className="hover:underline">Payroll by trade</Link></li>
        <li><Link href="/payroll" className="hover:underline">Payroll hub</Link></li>
      </ul>
    </main>
  );
}

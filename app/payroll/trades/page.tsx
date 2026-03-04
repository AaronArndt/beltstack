import Link from "next/link";

export default function TradesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Payroll by Trade</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Payroll software recommendations tailored to blue-collar trades. Compare top providers for your industry—seasonal crews, field techs, and contractor payroll.
      </p>

      <section className="mb-10">
        <h2 className="text-lg font-medium mb-2">Related links</h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
          <li><Link href="/payroll" className="hover:underline">Payroll hub</Link></li>
          <li><Link href="/payroll/trades/landscaping" className="hover:underline">Best payroll for landscaping</Link></li>
          <li><Link href="/payroll/trades/hvac" className="hover:underline">Best payroll for HVAC</Link></li>
          <li><Link href="/payroll/providers/gusto" className="hover:underline">Gusto review</Link></li>
          <li><Link href="/payroll/best-for" className="hover:underline">Best payroll for...</Link></li>
        </ul>
      </section>
    </main>
  );
}

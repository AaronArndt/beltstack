import Link from "next/link";
import { getPayrollReviewUrl } from "@/lib/routes";
import { getPayrollCompareUrl } from "@/lib/data/payrollComparisons";

type Props = { params: Promise<{ scenario: string }> };

/** Map scenario slug to related guide href (if any) */
const SCENARIO_GUIDE: Record<string, string> = {
  contractors: "/payroll/guides/payroll-for-contractors",
  "1099-contractors": "/payroll/guides/payroll-software-for-1099-contractors",
  "small-business": "/payroll/guides/payroll-for-small-business",
  "hourly-employees": "/payroll/guides/payroll-for-hourly-workers",
  "growing-businesses": "/payroll/guides/payroll-for-small-business",
  construction: "/payroll/guides/payroll-for-construction-companies",
  electricians: "/payroll/guides/payroll-for-electricians",
  landscaping: "/payroll/guides/payroll-for-landscaping-businesses",
  plumbing: "/payroll/guides/payroll-for-plumbing",
  hvac: "/payroll/guides/payroll-for-hvac",
  "cleaning-business": "/payroll/guides/payroll-for-contractors",
  roofing: "/payroll/guides/payroll-for-construction-companies",
  "junk-removal": "/payroll/guides/payroll-for-contractors",
  moving: "/payroll/guides/payroll-for-contractors",
};

export default async function BestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const displayName = scenario.replace(/-/g, " ");
  const guideHref = SCENARIO_GUIDE[scenario];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4 capitalize">Best Payroll for {displayName}</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Curated payroll provider recommendations for this scenario. Includes top picks, why they fit, and quick comparison.
      </p>

      <section className="mb-10">
        <h2 className="text-lg font-medium mb-2">Related links</h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
          <li><Link href="/payroll" className="hover:underline">Payroll hub</Link></li>
          <li><Link href="/payroll/best-payroll-software" className="hover:underline">Best payroll software (roundup)</Link></li>
          <li><Link href="/payroll/compare" className="hover:underline">Compare payroll software</Link></li>
          <li><Link href="/payroll/guides" className="hover:underline">Payroll guides</Link></li>
          {guideHref && (
            <li><Link href={guideHref} className="hover:underline">Guide: Payroll for {displayName}</Link></li>
          )}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-medium mb-2">Payroll reviews</h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
          <li><Link href={getPayrollReviewUrl("gusto")} className="hover:underline">Gusto review</Link></li>
          <li><Link href={getPayrollReviewUrl("quickbooks-payroll")} className="hover:underline">QuickBooks Payroll review</Link></li>
          <li><Link href={getPayrollReviewUrl("onpay")} className="hover:underline">OnPay review</Link></li>
          <li><Link href={getPayrollReviewUrl("rippling")} className="hover:underline">Rippling review</Link></li>
          <li><Link href={getPayrollReviewUrl("deel")} className="hover:underline">Deel review</Link></li>
          <li><Link href={getPayrollReviewUrl("patriot-payroll")} className="hover:underline">Patriot Payroll review</Link></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-medium mb-2">Payroll comparisons</h2>
        <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
          <li><Link href={getPayrollCompareUrl("gusto-vs-quickbooks-payroll")} className="hover:underline">Gusto vs QuickBooks Payroll</Link></li>
          <li><Link href={getPayrollCompareUrl("gusto-vs-onpay")} className="hover:underline">Gusto vs OnPay</Link></li>
          <li><Link href={getPayrollCompareUrl("deel-vs-gusto")} className="hover:underline">Deel vs Gusto</Link></li>
        </ul>
      </section>
    </main>
  );
}

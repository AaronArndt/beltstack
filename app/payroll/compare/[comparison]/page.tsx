import { notFound } from "next/navigation";
import { getPayrollComparisonBySlug, getPayrollComparisonSlugs } from "@/lib/data/payrollComparisons";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";

type Props = { params: Promise<{ comparison: string }> };

export default async function ComparePage({ params }: Props) {
  const { comparison } = await params;
  const data = getPayrollComparisonBySlug(comparison);

  if (data == null) {
    notFound();
  }

  return <ComparisonTemplate {...data} />;
}

export function generateStaticParams() {
  return getPayrollComparisonSlugs().map((comparison) => ({ comparison }));
}

export async function generateMetadata({ params }: Props) {
  const { comparison } = await params;
  const data = getPayrollComparisonBySlug(comparison);
  if (data == null) return { title: "Compare Payroll" };
  const year = new Date().getFullYear();
  const title = `${data.productA.name} vs ${data.productB.name} (${year}): Features, Pricing & Which Is Better`;
  const description =
    `Compare ${data.productA.name} vs ${data.productB.name}. See pricing, features, pros & cons, and which payroll software is best for contractors and small businesses.`;
  return { title, description };
}

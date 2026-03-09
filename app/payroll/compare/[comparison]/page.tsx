import { notFound } from "next/navigation";
import {
  getPayrollComparisonBySlug,
  getPayrollComparisonSlugs,
  getPayrollCompareUrl,
} from "@/lib/data/payrollComparisons";
import { getPayrollReviewUrl } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";

type Props = { params: Promise<{ comparison: string }> };

function comparisonItemListSchema(comparisonSlug: string, data: NonNullable<ReturnType<typeof getPayrollComparisonBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.productA.name} vs ${data.productB.name}`,
    description: data.summaryParagraph?.slice(0, 200) ?? undefined,
    url: `${SITE_URL}${getPayrollCompareUrl(comparisonSlug)}`,
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: data.productA.name,
          applicationCategory: "BusinessApplication",
          url: `${SITE_URL}${getPayrollReviewUrl(data.productA.slug)}`,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: data.productB.name,
          applicationCategory: "BusinessApplication",
          url: `${SITE_URL}${getPayrollReviewUrl(data.productB.slug)}`,
        },
      },
    ],
  };
}

export default async function ComparePage({ params }: Props) {
  const { comparison } = await params;
  const data = getPayrollComparisonBySlug(comparison);

  if (data == null) {
    notFound();
  }

  return (
    <>
      <StructuredData data={comparisonItemListSchema(comparison, data)} />
      <ComparisonTemplate {...data} />
    </>
  );
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

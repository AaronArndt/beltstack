import { notFound } from "next/navigation";
import {
  getPayrollComparisonBySlug,
  getPayrollComparisonSlugs,
  getPayrollCompareUrl,
} from "@/lib/data/payrollComparisons";
import { getPayrollReviewUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
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
  if (data == null) return { title: "Payroll Software Comparisons | BeltStack" };
  const a = data.productA.name;
  const b = data.productB.name;
  return siteMetadata({
    path: getPayrollCompareUrl(comparison),
    title: `${a} vs ${b} (${SEO_YEAR}): Which Is Better? | BeltStack`,
    description: `Compare ${a} vs ${b} on pricing, features, ease of use, pros and cons, and ideal business fit for small businesses and contractors.`,
  });
}

import { notFound } from "next/navigation";
import {
  getHrComparisonBySlug,
  getHrComparisonSlugs,
  getHrCompareUrlFromSlug,
} from "@/lib/data/hrComparisons";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import type { Metadata } from "next";

type Props = { params: Promise<{ comparison: string }> };

function comparisonItemListSchema(
  comparisonSlug: string,
  data: NonNullable<ReturnType<typeof getHrComparisonBySlug>>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.productA.name} vs ${data.productB.name}`,
    description: data.summaryParagraph?.slice(0, 200) ?? undefined,
    url: `${SITE_URL}${getHrCompareUrlFromSlug(comparisonSlug)}`,
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: data.productA.name,
          applicationCategory: "BusinessApplication",
          url: `${SITE_URL}${data.productA.reviewHref}`,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: data.productB.name,
          applicationCategory: "BusinessApplication",
          url: `${SITE_URL}${data.productB.reviewHref}`,
        },
      },
    ],
  };
}

export default async function HrComparisonPage({ params }: Props) {
  const { comparison } = await params;
  const data = getHrComparisonBySlug(comparison);
  if (!data) notFound();
  return (
    <>
      <StructuredData data={comparisonItemListSchema(comparison, data)} />
      <ComparisonTemplate {...data} />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { comparison } = await params;
  const data = getHrComparisonBySlug(comparison);
  if (!data) {
    return { title: "HR Software Comparisons | BeltStack" };
  }
  const productA = data.productA.name;
  const productB = data.productB.name;
  return siteMetadata({
    path: getHrCompareUrlFromSlug(comparison),
    title: `${productA} vs ${productB} (${SEO_YEAR}): Which Is Better? | BeltStack`,
    description: `Compare ${productA} vs ${productB} on pricing, features, ease of use, pros and cons, and ideal business fit for small businesses.`,
  });
}

export function generateStaticParams() {
  return getHrComparisonSlugs().map((comparison) => ({ comparison }));
}

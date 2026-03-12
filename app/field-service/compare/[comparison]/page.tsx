import { notFound } from "next/navigation";
import {
  getFieldServiceComparisonBySlug,
  getFieldServiceComparisonSlugs,
  getFieldServiceCompareUrlFromSlug,
} from "@/lib/data/fieldServiceComparisons";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import type { Metadata } from "next";

type Props = { params: Promise<{ comparison: string }> };

function comparisonItemListSchema(
  comparisonSlug: string,
  data: NonNullable<ReturnType<typeof getFieldServiceComparisonBySlug>>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.productA.name} vs ${data.productB.name}`,
    description: data.summaryParagraph?.slice(0, 200) ?? undefined,
    url: `${SITE_URL}${getFieldServiceCompareUrlFromSlug(comparisonSlug)}`,
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: data.productA.name,
          applicationCategory: "FieldServiceManagementApplication",
          url: `${SITE_URL}${data.productA.reviewHref}`,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: data.productB.name,
          applicationCategory: "FieldServiceManagementApplication",
          url: `${SITE_URL}${data.productB.reviewHref}`,
        },
      },
    ],
  };
}

export default async function FieldServiceComparisonPage({ params }: Props) {
  const { comparison } = await params;
  const data = getFieldServiceComparisonBySlug(comparison);
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
  const data = getFieldServiceComparisonBySlug(comparison);
  if (!data) {
    return {
      title: "Field Service Management Software Comparison",
      description: "Compare field service management tools side by side.",
    };
  }
  const productA = data.productA.name;
  const productB = data.productB.name;
  const year = new Date().getFullYear();
  return {
    title: `${productA} vs ${productB} (${year}) | BeltStack Comparison`,
    description: `Compare ${productA} vs ${productB} for field service management: features, pricing, use cases, and our verdict on who each tool fits best.`,
  };
}

export function generateStaticParams() {
  return getFieldServiceComparisonSlugs().map((comparison) => ({ comparison }));
}


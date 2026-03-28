import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import {
  getSeoToolsComparisonBySlug,
  getSeoToolsComparisonSlugs,
  getSeoToolsCompareUrlFromSlug,
} from "@/lib/data/seoToolsComparisons";

type Props = { params: Promise<{ comparison: string }> };

function comparisonItemListSchema(
  comparisonSlug: string,
  data: NonNullable<ReturnType<typeof getSeoToolsComparisonBySlug>>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.productA.name} vs ${data.productB.name}`,
    description: data.summaryParagraph?.slice(0, 200) ?? undefined,
    url: `${SITE_URL}${getSeoToolsCompareUrlFromSlug(comparisonSlug)}`,
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: { "@type": "SoftwareApplication", name: data.productA.name, applicationCategory: "BusinessApplication", url: `${SITE_URL}${data.productA.reviewHref}` },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: { "@type": "SoftwareApplication", name: data.productB.name, applicationCategory: "BusinessApplication", url: `${SITE_URL}${data.productB.reviewHref}` },
      },
    ],
  };
}

export default async function SeoToolsComparePage({ params }: Props) {
  const { comparison } = await params;
  const data = getSeoToolsComparisonBySlug(comparison);
  if (!data) notFound();
  return (
    <>
      <StructuredData data={comparisonItemListSchema(comparison, data)} />
      <ComparisonTemplate {...data} />
    </>
  );
}

export function generateStaticParams() {
  return getSeoToolsComparisonSlugs().map((comparison) => ({ comparison }));
}

export async function generateMetadata({ params }: Props) {
  const { comparison } = await params;
  const data = getSeoToolsComparisonBySlug(comparison);
  if (!data) return { title: "Compare SEO Tools" };
  const year = new Date().getFullYear();
  return {
    title: `${data.productA.name} vs ${data.productB.name} (${year}) | BeltStack Comparison`,
    description: `Editorial ${data.productA.name} vs ${data.productB.name} comparison for ${year}: local SEO and contractor stacks, honest limits, pricing signals—verify plans in Search Console and on each vendor’s site.`,
  };
}

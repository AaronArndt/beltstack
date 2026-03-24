import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import {
  getWebsiteBuildersComparisonBySlug,
  getWebsiteBuildersComparisonSlugs,
  getWebsiteBuildersCompareUrlFromSlug,
} from "@/lib/data/websiteBuildersComparisons";

type Props = { params: Promise<{ comparison: string }> };

function comparisonItemListSchema(
  comparisonSlug: string,
  data: NonNullable<ReturnType<typeof getWebsiteBuildersComparisonBySlug>>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.productA.name} vs ${data.productB.name}`,
    description: data.summaryParagraph?.slice(0, 200) ?? undefined,
    url: `${SITE_URL}${getWebsiteBuildersCompareUrlFromSlug(comparisonSlug)}`,
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

export default async function WebsiteBuildersComparePage({ params }: Props) {
  const { comparison } = await params;
  const data = getWebsiteBuildersComparisonBySlug(comparison);
  if (!data) notFound();

  return (
    <>
      <StructuredData data={comparisonItemListSchema(comparison, data)} />
      <ComparisonTemplate {...data} />
    </>
  );
}

export function generateStaticParams() {
  return getWebsiteBuildersComparisonSlugs().map((comparison) => ({ comparison }));
}

export async function generateMetadata({ params }: Props) {
  const { comparison } = await params;
  const data = getWebsiteBuildersComparisonBySlug(comparison);
  if (!data) return { title: "Compare Website Builders" };
  const year = new Date().getFullYear();
  return {
    title: `${data.productA.name} vs ${data.productB.name} (${year}) | BeltStack Comparison`,
    description: `Compare ${data.productA.name} vs ${data.productB.name} for service businesses. See pricing, features, and which builder fits your local lead-generation workflow.`,
  };
}

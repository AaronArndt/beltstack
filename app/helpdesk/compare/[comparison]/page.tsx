import { notFound } from "next/navigation";
import {
  getHelpdeskComparison,
  getHelpdeskComparisonSlugs,
  getHelpdeskCompareUrlFromSlug,
} from "@/lib/data/helpdeskComparisons";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import type { Metadata } from "next";

type Props = { params: Promise<{ comparison: string }> };

function comparisonItemListSchema(comparisonSlug: string, data: NonNullable<ReturnType<typeof getHelpdeskComparison>>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.productA.name} vs ${data.productB.name}`,
    description: data.summaryParagraph?.slice(0, 200) ?? undefined,
    url: `${SITE_URL}${getHelpdeskCompareUrlFromSlug(comparisonSlug)}`,
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

export default async function HelpdeskComparePage({ params }: Props) {
  const { comparison } = await params;
  const data = getHelpdeskComparison(comparison);

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
  return getHelpdeskComparisonSlugs().map((comparison) => ({ comparison }));
}

const COMPARISON_DESCRIPTIONS: Record<string, string> = {
  "zendesk-vs-freshdesk":
    "Compare Zendesk vs Freshdesk: full helpdesk ecosystem vs lower cost and free tier. Features and pricing side by side for support teams.",
  "help-scout-vs-zendesk":
    "Compare Help Scout vs Zendesk: email-first simplicity vs multi-channel helpdesk. Which fits your support workflow?",
  "intercom-vs-zendesk":
    "Compare Intercom vs Zendesk: messaging-first support vs traditional helpdesk. Best for product-led vs ticket-centric teams.",
  "freshdesk-vs-zoho-desk":
    "Compare Freshdesk vs Zoho Desk: broad ecosystem vs Zoho suite and lowest cost. Value and integrations compared.",
  "gorgias-vs-zendesk":
    "Compare Gorgias vs Zendesk: ecommerce-native helpdesk vs general-purpose. Best for store support vs multi-channel.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { comparison } = await params;
  const data = getHelpdeskComparison(comparison);
  if (data == null) return { title: "Helpdesk Software Comparisons | BeltStack" };
  const a = data.productA.name;
  const b = data.productB.name;
  const description =
    COMPARISON_DESCRIPTIONS[comparison] ??
    `Compare ${a} vs ${b} on pricing, features, ease of use, pros and cons, and ideal business fit for support teams.`;
  return siteMetadata({
    path: getHelpdeskCompareUrlFromSlug(comparison),
    title: `${a} vs ${b} (${SEO_YEAR}): Which Is Better? | BeltStack`,
    description,
  });
}

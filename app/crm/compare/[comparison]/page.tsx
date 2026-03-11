import { notFound } from "next/navigation";
import {
  getCrmComparisonBySlug,
  getCrmComparisonSlugs,
  getCrmCompareUrlFromSlug,
} from "@/lib/data/crmComparisons";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";

type Props = { params: Promise<{ comparison: string }> };

function comparisonItemListSchema(comparisonSlug: string, data: NonNullable<ReturnType<typeof getCrmComparisonBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.productA.name} vs ${data.productB.name}`,
    description: data.summaryParagraph?.slice(0, 200) ?? undefined,
    url: `${SITE_URL}${getCrmCompareUrlFromSlug(comparisonSlug)}`,
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

export default async function CrmComparePage({ params }: Props) {
  const { comparison } = await params;
  const data = getCrmComparisonBySlug(comparison);

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
  return getCrmComparisonSlugs().map((comparison) => ({ comparison }));
}

const COMPARISON_DESCRIPTIONS: Record<string, string> = {
  "hubspot-vs-salesforce":
    "Compare HubSpot vs Salesforce: ease of use and free CRM vs enterprise scale and customization. See which CRM fits your business.",
  "hubspot-vs-zoho-crm":
    "Compare HubSpot vs Zoho CRM: marketing-sales alignment vs value and Zoho ecosystem. Features and pricing side by side.",
  "zoho-crm-vs-pipedrive":
    "Compare Zoho CRM vs Pipedrive: full CRM at lower cost vs pipeline-focused sales tool. Which fits your sales process?",
  "monday-crm-vs-hubspot":
    "Compare Monday CRM vs HubSpot: customizable boards and workflows vs full marketing and sales CRM.",
  "freshsales-vs-pipedrive":
    "Compare Freshsales vs Pipedrive: AI and built-in communication vs pipeline simplicity. Pricing and features compared.",
  "hubspot-vs-pipedrive":
    "Compare HubSpot vs Pipedrive: all-in-one marketing and sales vs pipeline-first CRM. See who each is best for.",
  "salesforce-vs-zoho-crm":
    "Compare Salesforce vs Zoho CRM: enterprise scale and ecosystem vs value and SMB focus. Features and pricing.",
  "close-vs-pipedrive":
    "Compare Close vs Pipedrive: inside sales with built-in calling vs pipeline-focused CRM. For call-heavy or pipeline-only teams.",
  "copper-vs-hubspot":
    "Compare Copper vs HubSpot: Google Workspace–native CRM vs all-in-one marketing and sales. Best for Gmail users vs broad platform.",
  "keap-vs-hubspot":
    "Compare Keap vs HubSpot: small business marketing automation and CRM vs free CRM and scalable hubs. Which fits your size?",
};

export async function generateMetadata({ params }: Props) {
  const { comparison } = await params;
  const data = getCrmComparisonBySlug(comparison);
  if (data == null) return { title: "Compare CRM Software" };
  const year = new Date().getFullYear();
  const title = `${data.productA.name} vs ${data.productB.name} (${year}) | BeltStack Comparison`;
  const description =
    COMPARISON_DESCRIPTIONS[comparison] ??
    `Compare ${data.productA.name} vs ${data.productB.name}. See pricing, features, pros and cons, and which CRM is best for your business.`;
  return { title, description };
}

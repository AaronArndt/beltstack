import { notFound } from "next/navigation";
import {
  getInvoicingComparisonBySlug,
  getInvoicingComparisonSlugs,
  getInvoicingCompareUrlFromSlug,
} from "@/lib/data/invoicingComparisons";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";

type Props = { params: Promise<{ comparison: string }> };

function comparisonItemListSchema(comparisonSlug: string, data: NonNullable<ReturnType<typeof getInvoicingComparisonBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.productA.name} vs ${data.productB.name}`,
    description: data.summaryParagraph?.slice(0, 200) ?? undefined,
    url: `${SITE_URL}${getInvoicingCompareUrlFromSlug(comparisonSlug)}`,
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

export default async function InvoicingComparePage({ params }: Props) {
  const { comparison } = await params;
  const data = getInvoicingComparisonBySlug(comparison);

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
  return getInvoicingComparisonSlugs().map((comparison) => ({ comparison }));
}

const COMPARISON_DESCRIPTIONS: Record<string, string> = {
  "freshbooks-vs-quickbooks":
    "Compare FreshBooks vs QuickBooks for invoicing, pricing, features, and integrations to see which tool is best for your business.",
  "freshbooks-vs-wave":
    "Compare FreshBooks vs Wave: paid freelancer-focused invoicing vs free invoicing. See pricing, features, and who each fits.",
  "quickbooks-vs-wave":
    "Compare QuickBooks vs Wave: full accounting plus invoicing vs free invoicing. See when to choose each.",
  "zoho-invoice-vs-freshbooks":
    "Compare Zoho Invoice vs FreshBooks: value and automation vs freelancer-focused invoicing and time tracking.",
  "xero-vs-quickbooks":
    "Compare Xero vs QuickBooks for invoicing and accounting. See pricing, features, and which fits your business.",
  "wave-vs-zoho-invoice":
    "Compare Wave vs Zoho Invoice: free invoicing vs value-focused paid options. Features and pricing side by side.",
  "freshbooks-vs-xero":
    "Compare FreshBooks vs Xero: invoicing-focused for freelancers vs full accounting plus invoicing.",
  "invoice-ninja-vs-freshbooks":
    "Compare Invoice Ninja vs FreshBooks: open-source and customization vs mainstream freelancer invoicing.",
  "honeybook-vs-bonsai":
    "Compare HoneyBook vs Bonsai: client workflow and proposals for creative businesses vs freelancer-focused contracts and invoicing.",
};

export async function generateMetadata({ params }: Props) {
  const { comparison } = await params;
  const data = getInvoicingComparisonBySlug(comparison);
  if (data == null) return { title: "Compare Invoicing Software" };
  const year = new Date().getFullYear();
  const title = `${data.productA.name} vs ${data.productB.name} (${year})`;
  const description =
    COMPARISON_DESCRIPTIONS[comparison] ??
    `Compare ${data.productA.name} vs ${data.productB.name} for invoicing, pricing, features, and integrations to see which tool is best for your business.`;
  return { title: `${title} | BeltStack Comparison`, description };
}

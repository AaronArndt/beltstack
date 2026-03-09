import { notFound } from "next/navigation";
import {
  getAccountingComparisonBySlug,
  getAccountingComparisonSlugs,
  getAccountingCompareUrlFromSlug,
} from "@/lib/data/accountingComparisons";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";

type Props = { params: Promise<{ comparison: string }> };

function comparisonItemListSchema(comparisonSlug: string, data: NonNullable<ReturnType<typeof getAccountingComparisonBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${data.productA.name} vs ${data.productB.name}`,
    description: data.summaryParagraph?.slice(0, 200) ?? undefined,
    url: `${SITE_URL}${getAccountingCompareUrlFromSlug(comparisonSlug)}`,
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

export default async function AccountingComparePage({ params }: Props) {
  const { comparison } = await params;
  const data = getAccountingComparisonBySlug(comparison);

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
  return getAccountingComparisonSlugs().map((comparison) => ({ comparison }));
}

const COMPARISON_DESCRIPTIONS: Record<string, string> = {
  "quickbooks-online-vs-xero":
    "Compare QuickBooks Online vs Xero: features, pricing, ease of use, and which accounting software is best for your small business.",
  "quickbooks-online-vs-freshbooks":
    "Compare QuickBooks Online vs FreshBooks: full accounting vs freelancer-focused tools. See pricing, features, and who each fits.",
  "quickbooks-online-vs-zoho-books":
    "Compare QuickBooks Online vs Zoho Books: ecosystem breadth vs value and Zoho integration. Features and pricing compared.",
  "quickbooks-online-vs-wave":
    "Compare QuickBooks Online vs Wave: paid full-featured accounting vs free accounting. See when to choose each.",
  "xero-vs-freshbooks":
    "Compare Xero vs FreshBooks: full cloud accounting vs freelancer-focused invoicing and time tracking.",
  "xero-vs-zoho-books":
    "Compare Xero vs Zoho Books: integrations and ecosystem vs value and Zoho suite fit.",
  "wave-vs-freshbooks":
    "Compare Wave vs FreshBooks: free accounting vs paid freelancer tools. Pricing and features side by side.",
  "wave-vs-quickbooks-online":
    "Compare Wave vs QuickBooks Online: free accounting vs market-leading paid software. Which fits your business?",
  "zoho-books-vs-freshbooks":
    "Compare Zoho Books vs FreshBooks: value and automation vs freelancer-focused invoicing and time tracking.",
  "sage-accounting-vs-quickbooks-online":
    "Compare Sage Accounting vs QuickBooks Online: core SMB accounting vs the largest US accounting ecosystem.",
  "odoo-accounting-vs-quickbooks-online":
    "Compare Odoo Accounting vs QuickBooks Online: ERP-integrated accounting vs standalone best-of-breed.",
  "kashoo-vs-wave":
    "Compare Kashoo vs Wave: simple paid bookkeeping vs free accounting. Features and pricing compared.",
  "sage-accounting-vs-xero":
    "Compare Sage Accounting vs Xero: traditional SMB accounting vs modern cloud platform.",
  "odoo-accounting-vs-xero":
    "Compare Odoo Accounting vs Xero: Odoo ERP module vs standalone cloud accounting.",
  "kashoo-vs-freshbooks":
    "Compare Kashoo vs FreshBooks: simple bookkeeping vs freelancer-focused invoicing and time tracking.",
  "zoho-books-vs-wave":
    "Compare Zoho Books vs Wave: paid value-focused accounting vs free core accounting.",
  "sage-accounting-vs-freshbooks":
    "Compare Sage Accounting vs FreshBooks: core accounting and compliance vs freelancer-focused tools.",
};

export async function generateMetadata({ params }: Props) {
  const { comparison } = await params;
  const data = getAccountingComparisonBySlug(comparison);
  if (data == null) return { title: "Compare Accounting Software" };
  const year = new Date().getFullYear();
  const title = `${data.productA.name} vs ${data.productB.name} (${year})`;
  const description =
    COMPARISON_DESCRIPTIONS[comparison] ??
    `Compare ${data.productA.name} vs ${data.productB.name}. See pricing, features, pros and cons, and which accounting software is best for your business.`;
  return { title, description };
}

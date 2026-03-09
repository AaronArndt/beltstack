import { notFound } from "next/navigation";
import { getAccountingReviewBySlug, getAccountingReviewSlugs } from "@/lib/data/accountingReviews";
import { getAccountingReviewUrl } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ReviewPageClient } from "./ReviewPageClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getAccountingReviewBySlug>>) {
  const url = `${SITE_URL}${getAccountingReviewUrl(slug)}`;
  const ratingNum = parseFloat(data.rating);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.toolName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url,
    ...(Number.isFinite(ratingNum) && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: ratingNum,
        bestRating: 5,
        reviewCount: 1,
      },
    }),
    ...(data.bestFor && { description: data.bestFor }),
  };
}

export default async function AccountingReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getAccountingReviewBySlug(slug);
  if (!data) notFound();
  return (
    <>
      <StructuredData data={softwareApplicationSchema(slug, data)} />
      <ReviewPageClient {...data} />
    </>
  );
}

const REVIEW_DESCRIPTIONS: Record<string, string> = {
  "quickbooks-online":
    "Our in-depth QuickBooks Online review covers pricing, features, reporting, integrations, and how it compares to Xero, FreshBooks, and other accounting software.",
  xero:
    "Our Xero review covers pricing, features, ease of use, and integrations. See how it stacks up as a QuickBooks alternative for small business accounting.",
  freshbooks:
    "Our FreshBooks review covers pricing, invoicing, time tracking, and ease of use for freelancers and service businesses. Compare to QuickBooks and Wave.",
  "zoho-books":
    "Our Zoho Books review covers pricing, automation, client portal, and Zoho ecosystem fit. See if it's the right value-focused accounting software for your business.",
  wave:
    "Our Wave review covers its free accounting and invoicing features, limitations, and when to choose Wave vs paid options like QuickBooks or Xero.",
  "sage-accounting":
    "Our Sage Accounting review covers core features, pricing, and how it compares to QuickBooks and Xero for small business accounting.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getAccountingReviewBySlug(slug);
  if (!data) return { title: "Accounting Review" };
  const year = new Date().getFullYear();
  const name = data.toolName;
  const description = REVIEW_DESCRIPTIONS[slug] ?? `Our ${name} accounting review covers pricing, features, pros and cons, and how it compares to other accounting software.`;
  return {
    title: `${name} Review (${year}) – Pricing, Features & Pros/Cons`,
    description,
  };
}

export function generateStaticParams() {
  return getAccountingReviewSlugs().map((slug) => ({ slug }));
}

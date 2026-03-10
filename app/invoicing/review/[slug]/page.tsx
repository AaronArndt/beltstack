import { notFound } from "next/navigation";
import { getInvoicingReviewBySlug, getInvoicingReviewSlugs } from "@/lib/data/invoicingReviews";
import { getInvoicingReviewUrl } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ReviewPageClient } from "./ReviewPageClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getInvoicingReviewBySlug>>) {
  const url = `${SITE_URL}${getInvoicingReviewUrl(slug)}`;
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

export default async function InvoicingReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getInvoicingReviewBySlug(slug);
  if (!data) notFound();
  return (
    <>
      <StructuredData data={softwareApplicationSchema(slug, data)} />
      <ReviewPageClient {...data} />
    </>
  );
}

const REVIEW_DESCRIPTIONS: Record<string, string> = {
  freshbooks:
    "Our FreshBooks invoicing review covers pricing, features, time tracking, and ease of use for freelancers and service businesses. Compare to QuickBooks and Wave.",
  quickbooks:
    "Our QuickBooks invoicing review covers pricing, features, and how it fits businesses already on QuickBooks. Compare to Xero, FreshBooks, and Wave.",
  wave:
    "Our Wave review covers free invoicing and receipt scanning, limitations, and when to choose Wave vs paid options like FreshBooks or QuickBooks.",
  "zoho-invoice":
    "Our Zoho Invoice review covers pricing, automation, client portal, and Zoho ecosystem fit. See if it's the right value-focused invoicing software for your business.",
  xero:
    "Our Xero invoicing review covers pricing, features, and how it combines invoicing with full accounting. Compare to QuickBooks and FreshBooks.",
  "invoice-ninja":
    "Our Invoice Ninja review covers open-source and cloud options, customization, and when it makes sense for businesses that want flexibility and self-hosting.",
  honeybook:
    "Our HoneyBook review covers proposals, contracts, invoicing, and client workflows for creative and service businesses. Compare to Bonsai and FreshBooks.",
  bonsai:
    "Our Bonsai review covers proposals, contracts, invoicing, and workflow for freelancers. Compare to HoneyBook, FreshBooks, and Wave.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getInvoicingReviewBySlug(slug);
  if (!data) return { title: "Invoicing Review" };
  const year = new Date().getFullYear();
  const name = data.toolName;
  const description =
    REVIEW_DESCRIPTIONS[slug] ??
    `Our ${name} invoicing review covers pricing, features, pros and cons, and how it compares to other invoicing software.`;
  return {
    title: `${name} Review (${year}): Pricing, Features, Pros & Cons`,
    description,
  };
}

export function generateStaticParams() {
  return getInvoicingReviewSlugs().map((slug) => ({ slug }));
}

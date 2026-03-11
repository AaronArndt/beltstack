import { notFound } from "next/navigation";
import { getCrmReviewBySlug, getCrmReviewSlugs } from "@/lib/data/crmReviews";
import { getCrmReviewUrl } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ReviewPageClient } from "./ReviewPageClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getCrmReviewBySlug>>) {
  const url = `${SITE_URL}${getCrmReviewUrl(slug)}`;
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

export default async function CrmReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getCrmReviewBySlug(slug);
  if (!data) notFound();
  return (
    <>
      <StructuredData data={softwareApplicationSchema(slug, data)} />
      <ReviewPageClient {...data} />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getCrmReviewBySlug(slug);
  if (!data) return { title: "CRM Review" };
  const year = new Date().getFullYear();
  const name = data.toolName;
  return {
    title: `${name} CRM Review (${year}) – Pricing, Features & Pros/Cons`,
    description: `Our in-depth ${name} CRM review covers pricing, features, pros and cons, integrations, and how it compares to other CRM software.`,
  };
}

export function generateStaticParams() {
  return getCrmReviewSlugs().map((slug) => ({ slug }));
}

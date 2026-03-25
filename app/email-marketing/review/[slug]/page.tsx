import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { getEmailMarketingReviewBySlug, getEmailMarketingReviewSlugs } from "@/lib/data/emailMarketingReviews";
import { getEmailMarketingAlternativesPage } from "@/lib/data/emailMarketingAlternatives";
import { getEmailMarketingAlternativeUrl, getEmailMarketingReviewUrl } from "@/lib/routes";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getEmailMarketingReviewBySlug>>) {
  const url = `${SITE_URL}${getEmailMarketingReviewUrl(slug)}`;
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

export default async function EmailMarketingReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getEmailMarketingReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getEmailMarketingAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getEmailMarketingAlternativeUrl(slug),
      alternativesPageLabel: `Best ${data.toolName} alternatives`,
    }),
  };
  return (
    <>
      <StructuredData data={softwareApplicationSchema(slug, data)} />
      <ReviewPageClient {...reviewProps} />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getEmailMarketingReviewBySlug(slug);
  if (!data) return { title: "Email Marketing Review" };
  const year = new Date().getFullYear();
  return {
    title: `${data.toolName} Review (${year}) – Pricing, Features & Pros/Cons`,
    description: `Our in-depth ${data.toolName} review covers pricing, campaigns, automation, pros and cons, and fit for local service businesses.`,
  };
}

export function generateStaticParams() {
  return getEmailMarketingReviewSlugs().map((slug) => ({ slug }));
}

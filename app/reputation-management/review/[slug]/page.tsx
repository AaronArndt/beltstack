import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import {
  getReputationManagementReviewBySlug,
  getReputationManagementReviewSlugs,
} from "@/lib/data/reputationManagementReviews";
import { getReputationManagementAlternativesPage } from "@/lib/data/reputationManagementAlternatives";
import { getReputationManagementAlternativeUrl, getReputationManagementReviewUrl } from "@/lib/routes";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(
  slug: string,
  data: NonNullable<ReturnType<typeof getReputationManagementReviewBySlug>>
) {
  const url = `${SITE_URL}${getReputationManagementReviewUrl(slug)}`;
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

export default async function ReputationManagementReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getReputationManagementReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getReputationManagementAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getReputationManagementAlternativeUrl(slug),
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
  const data = getReputationManagementReviewBySlug(slug);
  if (!data) return { title: "Reputation Management Review" };
  const year = new Date().getFullYear();
  return {
    title: `${data.toolName} Review (${year}) – Pricing, Features & Pros/Cons`,
    description: `Our in-depth ${data.toolName} review covers pricing, workflows, pros and cons, and fit for local service businesses.`,
  };
}

export function generateStaticParams() {
  return getReputationManagementReviewSlugs().map((slug) => ({ slug }));
}

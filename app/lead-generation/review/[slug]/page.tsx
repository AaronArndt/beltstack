import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { getLeadGenerationReviewBySlug, getLeadGenerationReviewSlugs } from "@/lib/data/leadGenerationReviews";
import { getLeadGenerationAlternativesPage } from "@/lib/data/leadGenerationAlternatives";
import { getLeadGenerationAlternativeUrl, getLeadGenerationReviewUrl } from "@/lib/routes";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getLeadGenerationReviewBySlug>>) {
  const url = `${SITE_URL}${getLeadGenerationReviewUrl(slug)}`;
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

export default async function LeadGenerationReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getLeadGenerationReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getLeadGenerationAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getLeadGenerationAlternativeUrl(slug),
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
  const data = getLeadGenerationReviewBySlug(slug);
  if (!data) return { title: "Lead Generation Review" };
  const year = new Date().getFullYear();
  return {
    title: `${data.toolName} Review (${year}) – Pricing, Features & Pros/Cons`,
    description: `Our in-depth ${data.toolName} review covers pricing, lead quality signals, pros and cons, and how it compares for local service businesses.`,
  };
}

export function generateStaticParams() {
  return getLeadGenerationReviewSlugs().map((slug) => ({ slug }));
}

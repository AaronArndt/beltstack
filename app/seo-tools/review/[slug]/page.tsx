import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { getSeoToolsReviewBySlug, getSeoToolsReviewSlugs } from "@/lib/data/seoToolsReviews";
import { getSeoToolsAlternativesPage } from "@/lib/data/seoToolsAlternatives";
import { getSeoToolsAlternativeUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getSeoToolsReviewBySlug>>) {
  const url = `${SITE_URL}${getSeoToolsReviewUrl(slug)}`;
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

export default async function SeoToolsReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getSeoToolsReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getSeoToolsAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getSeoToolsAlternativeUrl(slug),
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
  const data = getSeoToolsReviewBySlug(slug);
  if (!data) return { title: "SEO Tools Review" };
  const year = new Date().getFullYear();
  return {
    title: `${data.toolName} Review (${year}) – Pricing, Features & Pros/Cons`,
    description: `Our in-depth ${data.toolName} review covers pricing, SEO workflows, pros and cons, and how it compares for local service businesses and Map Pack operators.`,
  };
}

export function generateStaticParams() {
  return getSeoToolsReviewSlugs().map((slug) => ({ slug }));
}

import { notFound } from "next/navigation";
import { getTimeTrackingReviewBySlug, getTimeTrackingReviewSlugs } from "@/lib/data/timeTrackingReviews";
import { getTimeTrackingAlternativesPage } from "@/lib/data/timeTrackingAlternatives";
import { getTimeTrackingReviewUrl, getTimeTrackingAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ReviewPageClient } from "./ReviewPageClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getTimeTrackingReviewBySlug>>) {
  const url = `${SITE_URL}${getTimeTrackingReviewUrl(slug)}`;
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

export default async function TimeTrackingReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getTimeTrackingReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getTimeTrackingAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getTimeTrackingAlternativeUrl(slug),
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
  const data = getTimeTrackingReviewBySlug(slug);
  if (!data) {
    return { title: "Time Tracking Software Reviews | BeltStack" };
  }
  const name = data.toolName;
  return siteMetadata({
    path: getTimeTrackingReviewUrl(slug),
    title: `${name} Review (${SEO_YEAR}): Pricing, Features, Pros & Cons | BeltStack`,
    description: `Read our ${name} review covering pricing, features, pros and cons, best use cases, and whether it’s worth it for small businesses.`,
  });
}

export function generateStaticParams() {
  return getTimeTrackingReviewSlugs().map((slug) => ({ slug }));
}


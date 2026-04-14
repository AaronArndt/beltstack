import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPosReviewBySlug, getPosReviewSlugs } from "@/lib/data/posReviews";
import { getPosAlternativesPage } from "@/lib/data/posAlternatives";
import { getPosReviewUrl, getPosAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(
  slug: string,
  data: NonNullable<ReturnType<typeof getPosReviewBySlug>>
) {
  const url = `${SITE_URL}${getPosReviewUrl(slug)}`;
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

export default async function PosReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getPosReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getPosAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getPosAlternativeUrl(slug),
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
  const data = getPosReviewBySlug(slug);
  if (!data) return { title: "POS Software Reviews | BeltStack" };
  const name = data.toolName;
  return siteMetadata({
    path: getPosReviewUrl(slug),
    title: `${name} Review (${SEO_YEAR}): Pricing, Features, Pros & Cons | BeltStack`,
    description: `Read our ${name} review covering pricing, features, pros and cons, best use cases, and whether it’s worth it for small businesses.`,
  });
}

export function generateStaticParams() {
  return getPosReviewSlugs().map((slug) => ({ slug }));
}

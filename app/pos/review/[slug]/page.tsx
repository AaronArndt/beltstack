import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPosReviewBySlug, getPosReviewSlugs } from "@/lib/data/posReviews";
import { getPosReviewUrl } from "@/lib/routes";
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
  return (
    <>
      <StructuredData data={softwareApplicationSchema(slug, data)} />
      <ReviewPageClient {...data} />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getPosReviewBySlug(slug);
  if (!data) return { title: "POS Software Review" };
  const year = new Date().getFullYear();
  const name = data.toolName;
  return {
    title: `${name} Review (${year}) | BeltStack`,
    description: `Our in-depth ${name} POS software review covers pricing, features, pros and cons, best-fit use cases, and how it compares to other POS systems.`,
  };
}

export function generateStaticParams() {
  return getPosReviewSlugs().map((slug) => ({ slug }));
}

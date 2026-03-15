import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getInventoryReviewBySlug, getInventoryReviewSlugs } from "@/lib/data/inventoryReviews";
import { getInventoryAlternativesPage } from "@/lib/data/inventoryAlternatives";
import { getInventoryReviewUrl, getInventoryAlternativeUrl } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(
  slug: string,
  data: NonNullable<ReturnType<typeof getInventoryReviewBySlug>>
) {
  const url = `${SITE_URL}${getInventoryReviewUrl(slug)}`;
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

export default async function InventoryReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getInventoryReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getInventoryAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getInventoryAlternativeUrl(slug),
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
  const data = getInventoryReviewBySlug(slug);
  if (!data) return { title: "Inventory Management Software Review" };
  const year = new Date().getFullYear();
  const name = data.toolName;
  return {
    title: `${name} Review (${year}) | BeltStack`,
    description: `Our in-depth ${name} inventory management software review covers pricing, features, pros and cons, best-fit use cases, and how it compares to other inventory tools.`,
  };
}

export function generateStaticParams() {
  return getInventoryReviewSlugs().map((slug) => ({ slug }));
}


import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { getPaymentProcessingReviewBySlug, getPaymentProcessingReviewSlugs } from "@/lib/data/paymentProcessingReviews";
import { getPaymentProcessingAlternativesPage } from "@/lib/data/paymentProcessingAlternatives";
import { getPaymentProcessingAlternativeUrl, getPaymentProcessingReviewUrl } from "@/lib/routes";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getPaymentProcessingReviewBySlug>>) {
  const url = `${SITE_URL}${getPaymentProcessingReviewUrl(slug)}`;
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

export default async function PaymentProcessingReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getPaymentProcessingReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getPaymentProcessingAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getPaymentProcessingAlternativeUrl(slug),
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
  const data = getPaymentProcessingReviewBySlug(slug);
  if (!data) return { title: "Payment Processing Reviews | BeltStack" };
  const name = data.toolName;
  return siteMetadata({
    path: getPaymentProcessingReviewUrl(slug),
    title: `${name} Review (${SEO_YEAR}): Pricing, Features, Pros & Cons | BeltStack`,
    description: `Read our ${name} review covering pricing, features, pros and cons, best use cases, and whether it’s worth it for small businesses.`,
  });
}

export function generateStaticParams() {
  return getPaymentProcessingReviewSlugs().map((slug) => ({ slug }));
}

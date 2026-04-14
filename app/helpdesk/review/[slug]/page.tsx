import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getHelpdeskReviewBySlug, getHelpdeskReviewSlugs } from "@/lib/data/helpdeskReviews";
import { getHelpdeskAlternativesPage } from "@/lib/data/helpdeskAlternatives";
import { getHelpdeskReviewUrl, getHelpdeskAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(
  slug: string,
  data: NonNullable<ReturnType<typeof getHelpdeskReviewBySlug>>
) {
  const url = `${SITE_URL}${getHelpdeskReviewUrl(slug)}`;
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

export default async function HelpdeskReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getHelpdeskReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getHelpdeskAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getHelpdeskAlternativeUrl(slug),
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
  const data = getHelpdeskReviewBySlug(slug);
  if (!data) return { title: "Helpdesk Software Reviews | BeltStack" };
  const name = data.toolName;
  return siteMetadata({
    path: getHelpdeskReviewUrl(slug),
    title: `${name} Review (${SEO_YEAR}): Pricing, Features, Pros & Cons | BeltStack`,
    description: `Read our ${name} review covering pricing, features, pros and cons, best use cases, and whether it’s worth it for small businesses.`,
  });
}

export function generateStaticParams() {
  return getHelpdeskReviewSlugs().map((slug) => ({ slug }));
}

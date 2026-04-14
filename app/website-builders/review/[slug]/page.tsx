import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { getWebsiteBuildersReviewBySlug, getWebsiteBuildersReviewSlugs } from "@/lib/data/websiteBuildersReviews";
import { getWebsiteBuildersAlternativesPage } from "@/lib/data/websiteBuildersAlternatives";
import { getWebsiteBuildersAlternativeUrl, getWebsiteBuildersReviewUrl } from "@/lib/routes";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(
  slug: string,
  data: NonNullable<ReturnType<typeof getWebsiteBuildersReviewBySlug>>
) {
  const url = `${SITE_URL}${getWebsiteBuildersReviewUrl(slug)}`;
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

export default async function WebsiteBuildersReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getWebsiteBuildersReviewBySlug(slug);
  if (!data) notFound();

  const alternativesPage = getWebsiteBuildersAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getWebsiteBuildersAlternativeUrl(slug),
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
  const data = getWebsiteBuildersReviewBySlug(slug);
  if (!data) return { title: "Website Builder Reviews | BeltStack" };
  const name = data.toolName;
  return siteMetadata({
    path: getWebsiteBuildersReviewUrl(slug),
    title: `${name} Review (${SEO_YEAR}): Pricing, Features, Pros & Cons | BeltStack`,
    description: `Read our ${name} review covering pricing, features, pros and cons, best use cases, and whether it’s worth it for small businesses.`,
  });
}

export function generateStaticParams() {
  return getWebsiteBuildersReviewSlugs().map((slug) => ({ slug }));
}

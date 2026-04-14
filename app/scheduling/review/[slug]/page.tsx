import { notFound } from "next/navigation";
import { ReviewTemplate } from "@/components/reviews/ReviewTemplate";
import {
  getSchedulingReviewBySlug,
  getSchedulingReviewSlugs,
} from "@/lib/data/schedulingReviews";
import { getSchedulingAlternativesPage } from "@/lib/data/schedulingAlternatives";
import type { Metadata } from "next";
import { getSchedulingReviewUrl, getSchedulingAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";

function softwareApplicationSchema(
  slug: string,
  data: NonNullable<ReturnType<typeof getSchedulingReviewBySlug>>
) {
  const url = `${SITE_URL}${getSchedulingReviewUrl(slug)}`;
  const ratingNum = parseFloat(data.rating);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.toolName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingNum,
      ratingCount: 1,
    },
    offers: {
      "@type": "Offer",
      price: data.startingPrice,
      priceCurrency: "USD",
      url,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getSchedulingReviewSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function SchedulingReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getSchedulingReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getSchedulingAlternativesPage(slug);
  const reviewProps = {
    ...data,
    quickVerdict: data.quickVerdict,
    ...(alternativesPage && {
      alternativesPageHref: getSchedulingAlternativeUrl(slug),
      alternativesPageLabel: `Best ${data.toolName} alternatives`,
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema(slug, data)),
        }}
      />
      <ReviewTemplate {...reviewProps} />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getSchedulingReviewBySlug(slug);
  if (!data) {
    return { title: "Scheduling Software Reviews | BeltStack" };
  }
  const name = data.toolName;
  return siteMetadata({
    path: getSchedulingReviewUrl(slug),
    title: `${name} Review (${SEO_YEAR}): Pricing, Features, Pros & Cons | BeltStack`,
    description: `Read our ${name} review covering pricing, features, pros and cons, best use cases, and whether it’s worth it for small businesses.`,
  });
}

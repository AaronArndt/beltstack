import { notFound } from "next/navigation";
import { ReviewTemplate } from "@/components/reviews/ReviewTemplate";
import {
  getSchedulingReviewBySlug,
  getSchedulingReviewSlugs,
} from "@/lib/data/schedulingReviews";
import { getSchedulingReviewUrl } from "@/lib/routes";
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

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema(slug, data)),
        }}
      />
      <ReviewTemplate {...data} quickVerdict={data.quickVerdict} />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getSchedulingReviewBySlug(slug);
  if (!data) {
    return { title: "Scheduling software review" };
  }
  const year = new Date().getFullYear();
  return {
    title: `${data.toolName} Review (${year}) | BeltStack`,
    description: `${data.toolName} scheduling software review: rating, pricing, features, pros and cons, and best-fit use cases.`,
  };
}

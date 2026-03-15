import { notFound } from "next/navigation";
import { ReviewTemplate } from "@/components/reviews/ReviewTemplate";
import {
  getFieldServiceReviewBySlug,
  getFieldServiceReviewSlugs,
} from "@/lib/data/fieldServiceReviews";
import { getFieldServiceAlternativesPage } from "@/lib/data/fieldServiceAlternatives";
import { getFieldServiceReviewUrl, getFieldServiceAlternativeUrl } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";

function softwareApplicationSchema(
  slug: string,
  data: NonNullable<ReturnType<typeof getFieldServiceReviewBySlug>>
) {
  const url = `${SITE_URL}${getFieldServiceReviewUrl(slug)}`;
  const ratingNum = parseFloat(data.rating);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.toolName,
    applicationCategory: "FieldServiceManagementApplication",
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
  const slugs = getFieldServiceReviewSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function FieldServiceReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getFieldServiceReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getFieldServiceAlternativesPage(slug);
  const reviewProps = {
    ...data,
    quickVerdict: data.quickVerdict,
    ...(alternativesPage && {
      alternativesPageHref: getFieldServiceAlternativeUrl(slug),
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getFieldServiceReviewBySlug(slug);
  if (!data) {
    return { title: "Field service management software review" };
  }
  const year = new Date().getFullYear();
  return {
    title: `${data.toolName} Review (${year}) | BeltStack`,
    description: `${data.toolName} field service management software review: rating, pricing, features, pros and cons, and best-fit use cases.`,
  };
}


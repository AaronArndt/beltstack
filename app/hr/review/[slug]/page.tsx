import { notFound } from "next/navigation";
import { ReviewTemplate } from "@/components/reviews/ReviewTemplate";
import { getHrReviewBySlug, getHrReviewSlugs } from "@/lib/data/hrReviews";
import { getHrAlternativesPage } from "@/lib/data/hrAlternatives";
import { getHrReviewUrl, getHrAlternativeUrl } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";

function softwareApplicationSchema(
  slug: string,
  data: NonNullable<ReturnType<typeof getHrReviewBySlug>>
) {
  const url = `${SITE_URL}${getHrReviewUrl(slug)}`;
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
  const slugs = getHrReviewSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function HrReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getHrReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getHrAlternativesPage(slug);
  const reviewProps = {
    ...data,
    quickVerdict: data.quickVerdict,
    ...(alternativesPage && {
      alternativesPageHref: getHrAlternativeUrl(slug),
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
  const data = getHrReviewBySlug(slug);
  if (!data) {
    return { title: "HR software review" };
  }
  const year = new Date().getFullYear();
  return {
    title: `${data.toolName} Review (${year}) | BeltStack`,
    description: `${data.toolName} HR software review: rating, pricing, features, pros and cons, and best-fit use cases for small business.`,
  };
}

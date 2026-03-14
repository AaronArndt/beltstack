import { notFound } from "next/navigation";
import { ReviewTemplate } from "@/components/reviews/ReviewTemplate";
import {
  getProjectManagementReviewBySlug,
  getProjectManagementReviewSlugs,
} from "@/lib/data/projectManagementReviews";
import { getProjectManagementAlternativesPage } from "@/lib/data/projectManagementAlternatives";
import { getProjectManagementReviewUrl, getProjectManagementAlternativeUrl } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";

function softwareApplicationSchema(
  slug: string,
  data: NonNullable<ReturnType<typeof getProjectManagementReviewBySlug>>
) {
  const url = `${SITE_URL}${getProjectManagementReviewUrl(slug)}`;
  const ratingNum = parseFloat(data.rating);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.toolName,
    applicationCategory: "ProjectManagementApplication",
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
  const slugs = getProjectManagementReviewSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectManagementReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getProjectManagementReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getProjectManagementAlternativesPage(slug);
  const reviewProps = {
    ...data,
    quickVerdict: data.quickVerdict,
    ...(alternativesPage && {
      alternativesPageHref: getProjectManagementAlternativeUrl(slug),
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
  const data = getProjectManagementReviewBySlug(slug);
  if (!data) {
    return { title: "Project Management Software Review" };
  }
  const year = new Date().getFullYear();
  return {
    title: `${data.toolName} Review (${year}) | BeltStack`,
    description: `${data.toolName} project management software review: rating, pricing, features, pros and cons, and best-fit use cases.`,
  };
}


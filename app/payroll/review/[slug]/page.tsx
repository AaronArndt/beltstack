import { notFound } from "next/navigation";
import { getPayrollReviewBySlug, getPayrollReviewSlugs } from "@/lib/data/payrollReviews";
import { getPayrollAlternativesPage } from "@/lib/data/payrollAlternatives";
import { getPayrollReviewUrl, getPayrollAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { ReviewPageClient } from "./ReviewPageClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getPayrollReviewBySlug>>) {
  const url = `${SITE_URL}${getPayrollReviewUrl(slug)}`;
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

export default async function PayrollReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getPayrollReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getPayrollAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getPayrollAlternativeUrl(slug),
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
  const data = getPayrollReviewBySlug(slug);
  if (!data) return { title: "Payroll Software Reviews | BeltStack" };
  const name = data.toolName;
  return siteMetadata({
    path: getPayrollReviewUrl(slug),
    title: `${name} Review (${SEO_YEAR}): Pricing, Features, Pros & Cons | BeltStack`,
    description: `Read our ${name} review covering pricing, features, pros and cons, best use cases, and whether it’s worth it for small businesses.`,
  });
}

export function generateStaticParams() {
  return getPayrollReviewSlugs().map((slug) => ({ slug }));
}

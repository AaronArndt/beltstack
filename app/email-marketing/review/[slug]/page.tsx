import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { getEmailMarketingReviewBySlug, getEmailMarketingReviewSlugs } from "@/lib/data/emailMarketingReviews";
import { getEmailMarketingAlternativesPage } from "@/lib/data/emailMarketingAlternatives";
import { getEmailMarketingAlternativeUrl, getEmailMarketingReviewUrl } from "@/lib/routes";
import { ReviewPageClient } from "./ReviewPageClient";

type Props = { params: Promise<{ slug: string }> };

function softwareApplicationSchema(slug: string, data: NonNullable<ReturnType<typeof getEmailMarketingReviewBySlug>>) {
  const url = `${SITE_URL}${getEmailMarketingReviewUrl(slug)}`;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: data.toolName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url,
    ...(data.bestFor && { description: data.bestFor }),
  };
}

export default async function EmailMarketingReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getEmailMarketingReviewBySlug(slug);
  if (!data) notFound();
  const alternativesPage = getEmailMarketingAlternativesPage(slug);
  const reviewProps = {
    ...data,
    ...(alternativesPage && {
      alternativesPageHref: getEmailMarketingAlternativeUrl(slug),
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
  const data = getEmailMarketingReviewBySlug(slug);
  if (!data) return { title: "Email Marketing Software Reviews | BeltStack" };
  const name = data.toolName;
  return siteMetadata({
    path: getEmailMarketingReviewUrl(slug),
    title: `${name} Review (${SEO_YEAR}): Pricing, Features, Pros & Cons | BeltStack`,
    description: `Read our ${name} review covering pricing, features, pros and cons, best use cases, and whether it’s worth it for small businesses.`,
  });
}

export function generateStaticParams() {
  return getEmailMarketingReviewSlugs().map((slug) => ({ slug }));
}

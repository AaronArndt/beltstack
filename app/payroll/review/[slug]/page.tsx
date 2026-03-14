import { notFound } from "next/navigation";
import { getPayrollReviewBySlug, getPayrollReviewSlugs } from "@/lib/data/payrollReviews";
import { getPayrollAlternativesPage } from "@/lib/data/payrollAlternatives";
import { getPayrollReviewUrl, getPayrollAlternativeUrl } from "@/lib/routes";
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
  if (!data) return { title: "Payroll Review" };
  const year = new Date().getFullYear();
  const name = data.toolName;
  return {
    title: `${name} Payroll Review (${year}) – Pricing, Features & Pros/Cons`,
    description: `Our in-depth ${name} payroll review covers pricing, features, contractor support, pros and cons, and how it compares to other payroll software.`,
  };
}

export function generateStaticParams() {
  return getPayrollReviewSlugs().map((slug) => ({ slug }));
}

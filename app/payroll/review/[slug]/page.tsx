import { notFound } from "next/navigation";
import { getPayrollReviewBySlug, getPayrollReviewSlugs } from "@/lib/data/payrollReviews";
import { ReviewPageClient } from "./ReviewPageClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function PayrollReviewPage({ params }: Props) {
  const { slug } = await params;
  const data = getPayrollReviewBySlug(slug);
  if (!data) notFound();
  return <ReviewPageClient {...data} />;
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

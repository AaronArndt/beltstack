import { notFound } from "next/navigation";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import {
  getProjectManagementComparison,
  getProjectManagementComparisonSlugs,
  getProjectManagementCompareUrlFromSlug,
} from "@/lib/data/projectManagementComparisons";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = getProjectManagementComparisonSlugs();
  return slugs.map((slug) => ({ comparison: slug }));
}

export default async function ProjectManagementComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const data = getProjectManagementComparison(comparison);
  if (!data) {
    notFound();
  }
  return <ComparisonTemplate {...data} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comparison: string }>;
}): Promise<Metadata> {
  const { comparison } = await params;
  const data = getProjectManagementComparison(comparison);
  if (!data) {
    return { title: "Project Management Software Comparisons | BeltStack" };
  }
  const a = data.productA.name;
  const b = data.productB.name;
  return siteMetadata({
    path: getProjectManagementCompareUrlFromSlug(comparison),
    title: `${a} vs ${b} (${SEO_YEAR}): Which Is Better? | BeltStack`,
    description: `Compare ${a} vs ${b} on pricing, features, ease of use, pros and cons, and ideal business fit for small businesses and teams.`,
  });
}


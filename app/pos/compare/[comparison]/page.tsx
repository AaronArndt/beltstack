import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import {
  getPosComparison,
  getPosComparisonSlugs,
  getPosCompareUrlFromSlug,
} from "@/lib/data/posComparisons";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";

export async function generateStaticParams() {
  const slugs = getPosComparisonSlugs();
  return slugs.map((comparison) => ({ comparison }));
}

export default async function PosComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const data = getPosComparison(comparison);
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
  const data = getPosComparison(comparison);
  if (!data) {
    return { title: "POS Software Comparisons | BeltStack" };
  }
  const a = data.productA.name;
  const b = data.productB.name;
  return siteMetadata({
    path: getPosCompareUrlFromSlug(comparison),
    title: `${a} vs ${b} (${SEO_YEAR}): Which Is Better? | BeltStack`,
    description: `Compare ${a} vs ${b} on pricing, features, ease of use, pros and cons, and ideal business fit for retail and restaurant teams.`,
  });
}

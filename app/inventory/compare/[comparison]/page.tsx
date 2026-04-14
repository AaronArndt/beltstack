import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import {
  getInventoryComparison,
  getInventoryComparisonSlugs,
  getInventoryCompareUrlFromSlug,
} from "@/lib/data/inventoryComparisons";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";

export async function generateStaticParams() {
  const slugs = getInventoryComparisonSlugs();
  return slugs.map((slug) => ({ comparison: slug }));
}

export default async function InventoryComparisonPage({
  params,
}: {
  params: Promise<{ comparison: string }>;
}) {
  const { comparison } = await params;
  const data = getInventoryComparison(comparison);
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
  const data = getInventoryComparison(comparison);
  if (!data) {
    return { title: "Inventory Software Comparisons | BeltStack" };
  }
  const a = data.productA.name;
  const b = data.productB.name;
  return siteMetadata({
    path: getInventoryCompareUrlFromSlug(comparison),
    title: `${a} vs ${b} (${SEO_YEAR}): Which Is Better? | BeltStack`,
    description: `Compare ${a} vs ${b} on pricing, features, ease of use, pros and cons, and ideal business fit for inventory and operations teams.`,
  });
}


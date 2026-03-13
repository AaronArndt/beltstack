import { notFound } from "next/navigation";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import {
  getInventoryComparison,
  getInventoryComparisonSlugs,
} from "@/lib/data/inventoryComparisons";

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

export async function generateMetadata({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison } = await params;
  const data = getInventoryComparison(comparison);
  if (!data) {
    return {
      title: "Inventory Software Comparison | BeltStack",
    };
  }
  const year = new Date().getFullYear();
  const title = `${data.productA.name} vs ${data.productB.name} (${year}) | BeltStack`;
  return {
    title,
    description: `Compare ${data.productA.name} vs ${data.productB.name} for inventory management. Features, pricing, and recommendations for small businesses and operations teams.`,
  };
}


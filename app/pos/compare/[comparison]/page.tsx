import { notFound } from "next/navigation";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import {
  getPosComparison,
  getPosComparisonSlugs,
} from "@/lib/data/posComparisons";

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

export async function generateMetadata({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison } = await params;
  const data = getPosComparison(comparison);
  if (!data) {
    return {
      title: "POS Software Comparison | BeltStack",
    };
  }
  const year = new Date().getFullYear();
  const title = `${data.productA.name} vs ${data.productB.name} (${year}) | BeltStack Comparison`;
  const description = `Compare ${data.productA.name} vs ${data.productB.name} for POS software. Features, pricing, and recommendations for retail, restaurants, and small businesses.`;
  return {
    title,
    description,
  };
}

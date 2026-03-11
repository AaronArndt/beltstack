import { notFound } from "next/navigation";
import { ComparisonTemplate } from "@/components/comparisons/ComparisonTemplate";
import {
  getProjectManagementComparison,
  getProjectManagementComparisonSlugs,
} from "@/lib/data/projectManagementComparisons";

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

export async function generateMetadata({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison } = await params;
  const data = getProjectManagementComparison(comparison);
  if (!data) {
    return {
      title: "Project Management Software Comparison | BeltStack",
    };
  }
  const year = new Date().getFullYear();
  const title = `${data.productA.name} vs ${data.productB.name} (${year}) | BeltStack`;
  return {
    title,
    description: `Compare ${data.productA.name} vs ${data.productB.name} for project management. Features, pricing, and recommendations for small businesses and teams.`,
  };
}


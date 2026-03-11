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

export default function ProjectManagementComparisonPage({
  params,
}: {
  params: { comparison: string };
}) {
  const data = getProjectManagementComparison(params.comparison);
  if (!data) {
    notFound();
  }
  return <ComparisonTemplate {...data} />;
}

export function generateMetadata({ params }: { params: { comparison: string } }) {
  const data = getProjectManagementComparison(params.comparison);
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


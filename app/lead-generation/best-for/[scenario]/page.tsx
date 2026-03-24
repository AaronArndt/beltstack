import { notFound } from "next/navigation";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
  LEAD_GENERATION_BEST_FOR_BY_SLUG,
  getLeadGenerationBestForPageProps,
} from "@/lib/data/leadGenerationBestForPages";

type Props = { params: Promise<{ scenario: string }> };

export default async function LeadGenerationBestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const props = getLeadGenerationBestForPageProps(scenario);
  if (!props) notFound();
  return <BestForPageWithStructuredData {...props} />;
}

export function generateStaticParams() {
  return Object.keys(LEAD_GENERATION_BEST_FOR_BY_SLUG).map((scenario) => ({ scenario }));
}

export async function generateMetadata({ params }: Props) {
  const { scenario } = await params;
  const props = getLeadGenerationBestForPageProps(scenario);
  if (!props) return { title: "Best Lead Generation Tools" };
  return { title: `${props.title} | BeltStack`, description: props.subtitle };
}

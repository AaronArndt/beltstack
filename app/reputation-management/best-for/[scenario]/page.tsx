import { notFound } from "next/navigation";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
  REPUTATION_MANAGEMENT_BEST_FOR_METADATA_BY_SLUG,
  getReputationManagementBestForPageProps,
  getReputationManagementBestForSlugs,
} from "@/lib/data/reputationManagementBestForPages";

type Props = { params: Promise<{ scenario: string }> };

export default async function ReputationManagementBestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const props = getReputationManagementBestForPageProps(scenario);
  if (!props) notFound();
  return <BestForPageWithStructuredData {...props} />;
}

export function generateStaticParams() {
  return getReputationManagementBestForSlugs().map((scenario) => ({ scenario }));
}

export async function generateMetadata({ params }: Props) {
  const { scenario } = await params;
  const props = getReputationManagementBestForPageProps(scenario);
  const meta = REPUTATION_MANAGEMENT_BEST_FOR_METADATA_BY_SLUG[scenario];
  if (!props) return { title: "Best Reputation Management Software" };
  return {
    title: meta?.title ?? `${props.title} | BeltStack`,
    description: meta?.description ?? props.subtitle,
    keywords: meta?.keywords,
  };
}

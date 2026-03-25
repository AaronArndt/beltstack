import { notFound } from "next/navigation";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
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
  if (!props) return { title: "Best Reputation Management Software" };
  return { title: `${props.title} | BeltStack`, description: props.subtitle };
}

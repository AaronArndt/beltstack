import { notFound } from "next/navigation";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { getCallTrackingBestForPageProps, getCallTrackingBestForSlugs } from "@/lib/data/callTrackingBestForPages";

type Props = { params: Promise<{ scenario: string }> };

export default async function CallTrackingBestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const props = getCallTrackingBestForPageProps(scenario);
  if (!props) notFound();
  return <BestForPageWithStructuredData {...props} />;
}

export function generateStaticParams() {
  return getCallTrackingBestForSlugs().map((scenario) => ({ scenario }));
}

export async function generateMetadata({ params }: Props) {
  const { scenario } = await params;
  const props = getCallTrackingBestForPageProps(scenario);
  if (!props) return { title: "Best Call Tracking" };
  return { title: `${props.title} | BeltStack`, description: props.subtitle };
}

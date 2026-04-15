import { notFound } from "next/navigation";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
  CALL_TRACKING_BEST_FOR_METADATA_BY_SLUG,
  getCallTrackingBestForPageProps,
  getCallTrackingBestForSlugs,
} from "@/lib/data/callTrackingBestForPages";

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
  const meta = CALL_TRACKING_BEST_FOR_METADATA_BY_SLUG[scenario];
  if (!props) return { title: "Best Call Tracking" };
  return {
    title: meta?.title ?? `${props.title} | BeltStack`,
    description: meta?.description ?? props.subtitle,
    keywords: meta?.keywords,
  };
}

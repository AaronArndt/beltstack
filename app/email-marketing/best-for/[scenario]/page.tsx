import { notFound } from "next/navigation";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { getEmailMarketingBestForPageProps, getEmailMarketingBestForSlugs } from "@/lib/data/emailMarketingBestForPages";

type Props = { params: Promise<{ scenario: string }> };

export default async function EmailMarketingBestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const props = getEmailMarketingBestForPageProps(scenario);
  if (!props) notFound();
  return <BestForPageWithStructuredData {...props} />;
}

export function generateStaticParams() {
  return getEmailMarketingBestForSlugs().map((scenario) => ({ scenario }));
}

export async function generateMetadata({ params }: Props) {
  const { scenario } = await params;
  const props = getEmailMarketingBestForPageProps(scenario);
  if (!props) return { title: "Best Email Marketing" };
  return { title: `${props.title} | BeltStack`, description: props.subtitle };
}

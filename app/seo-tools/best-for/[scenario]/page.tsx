import { notFound } from "next/navigation";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { getSeoToolsBestForPageProps, getSeoToolsBestForSlugs } from "@/lib/data/seoToolsBestForPages";

type Props = { params: Promise<{ scenario: string }> };

export default async function SeoToolsBestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const props = getSeoToolsBestForPageProps(scenario);
  if (!props) notFound();
  return <BestForPageWithStructuredData {...props} />;
}

export function generateStaticParams() {
  return getSeoToolsBestForSlugs().map((scenario) => ({ scenario }));
}

export async function generateMetadata({ params }: Props) {
  const { scenario } = await params;
  const props = getSeoToolsBestForPageProps(scenario);
  if (!props) return { title: "Best SEO Tools" };
  const description =
    props.subtitle.length > 165 ? `${props.subtitle.slice(0, 162).trim()}…` : props.subtitle;
  return { title: `${props.title} | BeltStack`, description };
}

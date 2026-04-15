import { notFound } from "next/navigation";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
  getPaymentProcessingBestForPageProps,
  getPaymentProcessingBestForSeoMeta,
  getPaymentProcessingBestForSlugs,
} from "@/lib/data/paymentProcessingBestForPages";

type Props = { params: Promise<{ scenario: string }> };

export default async function PaymentProcessingBestForScenarioPage({ params }: Props) {
  const { scenario } = await params;
  const props = getPaymentProcessingBestForPageProps(scenario);
  if (!props) notFound();
  return <BestForPageWithStructuredData {...props} />;
}

export function generateStaticParams() {
  return getPaymentProcessingBestForSlugs().map((scenario) => ({ scenario }));
}

export async function generateMetadata({ params }: Props) {
  const { scenario } = await params;
  const props = getPaymentProcessingBestForPageProps(scenario);
  if (!props) return { title: "Best Payment Processing" };
  const seo = getPaymentProcessingBestForSeoMeta(scenario);
  return {
    title: `${props.title} | BeltStack`,
    description: seo?.description ?? props.subtitle,
    ...(seo?.keywords?.length ? { keywords: seo.keywords } : {}),
  };
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import {
  getReputationManagementAlternativesPage,
  getReputationManagementAlternativesSlugs,
} from "@/lib/data/reputationManagementAlternatives";
import { getReputationManagementAlternativeUrl } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export default async function ReputationManagementAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getReputationManagementAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} showPayrollTypesColumn={false} softwarePickCategory="reputation-management" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getReputationManagementAlternativesPage(slug);
  if (!pageProps) return { title: "Reputation Management Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives in ${year}. Compare features, pricing, and local-service fit.`;
  const url = `${SITE_URL}${getReputationManagementAlternativeUrl(slug)}`;
  return { title, description, openGraph: { title, description, url } };
}

export function generateStaticParams() {
  return getReputationManagementAlternativesSlugs().map((slug) => ({ slug }));
}

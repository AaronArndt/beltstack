import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
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
  if (!pageProps) return { title: "Reputation Management Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top reputation tools on pricing, review features, use cases, and overall value for local businesses.`;
  return siteMetadata({
    path: getReputationManagementAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getReputationManagementAlternativesSlugs().map((slug) => ({ slug }));
}

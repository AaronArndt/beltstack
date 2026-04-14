import { notFound } from "next/navigation";
import { getLeadGenerationAlternativesPage, getLeadGenerationAlternativesSlugs } from "@/lib/data/leadGenerationAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getLeadGenerationAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function LeadGenerationAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getLeadGenerationAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} showPayrollTypesColumn={false} softwarePickCategory="lead-generation" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getLeadGenerationAlternativesPage(slug);
  if (!pageProps) return { title: "Lead Generation Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top lead gen tools on pricing, features, use cases, and overall value for service businesses.`;
  return siteMetadata({
    path: getLeadGenerationAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getLeadGenerationAlternativesSlugs().map((slug) => ({ slug }));
}

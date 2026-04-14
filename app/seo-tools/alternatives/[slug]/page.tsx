import { notFound } from "next/navigation";
import { getSeoToolsAlternativesPage, getSeoToolsAlternativesSlugs } from "@/lib/data/seoToolsAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getSeoToolsAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function SeoToolsAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getSeoToolsAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} showPayrollTypesColumn={false} softwarePickCategory="seo-tools" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getSeoToolsAlternativesPage(slug);
  if (!pageProps) return { title: "SEO Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top SEO tools on pricing, local and technical features, reviews, and overall value—verify limits on each vendor’s site.`;
  return siteMetadata({
    path: getSeoToolsAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getSeoToolsAlternativesSlugs().map((slug) => ({ slug }));
}

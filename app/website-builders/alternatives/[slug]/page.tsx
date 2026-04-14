import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import {
  getWebsiteBuildersAlternativesPage,
  getWebsiteBuildersAlternativesSlugs,
} from "@/lib/data/websiteBuildersAlternatives";
import { getWebsiteBuildersAlternativeUrl } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export default async function WebsiteBuildersAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getWebsiteBuildersAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="website-builders" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getWebsiteBuildersAlternativesPage(slug);
  if (!pageProps) return { title: "Website Builder Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top website builders on pricing, SEO features, templates, and overall value for service businesses.`;
  return siteMetadata({
    path: getWebsiteBuildersAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getWebsiteBuildersAlternativesSlugs().map((slug) => ({ slug }));
}

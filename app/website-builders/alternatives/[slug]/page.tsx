import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
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
  if (!pageProps) return { title: "Website Builder Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives for service-business websites in ${year}. Compare pricing, SEO fit, and lead-generation workflows.`;
  const url = `${SITE_URL}${getWebsiteBuildersAlternativeUrl(slug)}`;
  return { title, description, openGraph: { title, description, url } };
}

export function generateStaticParams() {
  return getWebsiteBuildersAlternativesSlugs().map((slug) => ({ slug }));
}

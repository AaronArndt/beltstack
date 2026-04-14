import { notFound } from "next/navigation";
import { getCrmAlternativesPage, getCrmAlternativesSlugs } from "@/lib/data/crmAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getCrmAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function CrmAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getCrmAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="crm" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getCrmAlternativesPage(slug);
  if (!pageProps) return { title: "CRM Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top CRM competitors on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getCrmAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getCrmAlternativesSlugs().map((slug) => ({ slug }));
}

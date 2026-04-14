import { notFound } from "next/navigation";
import { getInventoryAlternativesPage, getInventoryAlternativesSlugs } from "@/lib/data/inventoryAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getInventoryAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function InventoryAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getInventoryAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="inventory" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getInventoryAlternativesPage(slug);
  if (!pageProps) return { title: "Inventory Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top inventory tools on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getInventoryAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getInventoryAlternativesSlugs().map((slug) => ({ slug }));
}

import { notFound } from "next/navigation";
import { getInventoryAlternativesPage, getInventoryAlternativesSlugs } from "@/lib/data/inventoryAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import { getInventoryAlternativeUrl } from "@/lib/routes";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function InventoryAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getInventoryAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getInventoryAlternativesPage(slug);
  if (!pageProps) return { title: "Inventory Management Software Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives for inventory management in ${year}. Compare features, pricing, and who each option suits—with links to full reviews and comparisons.`;
  const url = `${SITE_URL}${getInventoryAlternativeUrl(slug)}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
  };
}

export function generateStaticParams() {
  return getInventoryAlternativesSlugs().map((slug) => ({ slug }));
}

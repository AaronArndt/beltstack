import { notFound } from "next/navigation";
import { getInvoicingAlternativesPage, getInvoicingAlternativesSlugs } from "@/lib/data/invoicingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import { getInvoicingAlternativeUrl } from "@/lib/routes";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function InvoicingAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getInvoicingAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="invoicing" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getInvoicingAlternativesPage(slug);
  if (!pageProps) return { title: "Invoicing Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives for invoicing in ${year}. Compare features, pricing, and who each option suits—with links to full reviews and comparisons.`;
  const url = `${SITE_URL}${getInvoicingAlternativeUrl(slug)}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
  };
}

export function generateStaticParams() {
  return getInvoicingAlternativesSlugs().map((slug) => ({ slug }));
}

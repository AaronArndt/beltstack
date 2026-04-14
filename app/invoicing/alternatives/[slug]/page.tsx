import { notFound } from "next/navigation";
import { getInvoicingAlternativesPage, getInvoicingAlternativesSlugs } from "@/lib/data/invoicingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getInvoicingAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
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
  if (!pageProps) return { title: "Invoicing Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top invoicing tools on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getInvoicingAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getInvoicingAlternativesSlugs().map((slug) => ({ slug }));
}

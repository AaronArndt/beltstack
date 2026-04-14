import { notFound } from "next/navigation";
import { getAccountingAlternativesPage, getAccountingAlternativesSlugs } from "@/lib/data/accountingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getAccountingAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function AccountingAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getAccountingAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="accounting" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getAccountingAlternativesPage(slug);
  if (!pageProps) return { title: "Accounting Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top accounting tools on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getAccountingAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getAccountingAlternativesSlugs().map((slug) => ({ slug }));
}

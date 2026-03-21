import { notFound } from "next/navigation";
import { getAccountingAlternativesPage, getAccountingAlternativesSlugs } from "@/lib/data/accountingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import { getAccountingAlternativeUrl } from "@/lib/routes";
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
  if (!pageProps) return { title: "Accounting Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives for accounting in ${year}. Compare features, pricing, and who each option suits—with links to full reviews and comparisons.`;
  const url = `${SITE_URL}${getAccountingAlternativeUrl(slug)}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
  };
}

export function generateStaticParams() {
  return getAccountingAlternativesSlugs().map((slug) => ({ slug }));
}

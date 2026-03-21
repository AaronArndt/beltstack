import { notFound } from "next/navigation";
import { getHrAlternativesPage, getHrAlternativesSlugs } from "@/lib/data/hrAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import { getHrAlternativeUrl } from "@/lib/routes";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function HrAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getHrAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="hr" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getHrAlternativesPage(slug);
  if (!pageProps) return { title: "HR Software Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives for HR software in ${year}. Compare features, pricing, and who each option suits—with links to full reviews and comparisons.`;
  const url = `${SITE_URL}${getHrAlternativeUrl(slug)}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
  };
}

export function generateStaticParams() {
  return getHrAlternativesSlugs().map((slug) => ({ slug }));
}

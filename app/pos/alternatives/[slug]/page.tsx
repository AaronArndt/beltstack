import { notFound } from "next/navigation";
import { getPosAlternativesPage, getPosAlternativesSlugs } from "@/lib/data/posAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getPosAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function PosAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getPosAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="pos" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getPosAlternativesPage(slug);
  if (!pageProps) return { title: "POS Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top POS systems on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getPosAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getPosAlternativesSlugs().map((slug) => ({ slug }));
}

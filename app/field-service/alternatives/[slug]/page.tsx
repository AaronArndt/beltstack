import { notFound } from "next/navigation";
import { getFieldServiceAlternativesPage, getFieldServiceAlternativesSlugs } from "@/lib/data/fieldServiceAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getFieldServiceAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function FieldServiceAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getFieldServiceAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="field-service" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getFieldServiceAlternativesPage(slug);
  if (!pageProps) return { title: "Field Service Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top field service platforms on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getFieldServiceAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getFieldServiceAlternativesSlugs().map((slug) => ({ slug }));
}

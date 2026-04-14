import { notFound } from "next/navigation";
import { getHelpdeskAlternativesPage, getHelpdeskAlternativesSlugs } from "@/lib/data/helpdeskAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getHelpdeskAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function HelpdeskAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getHelpdeskAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="helpdesk" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getHelpdeskAlternativesPage(slug);
  if (!pageProps) return { title: "Helpdesk Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top helpdesk tools on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getHelpdeskAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getHelpdeskAlternativesSlugs().map((slug) => ({ slug }));
}

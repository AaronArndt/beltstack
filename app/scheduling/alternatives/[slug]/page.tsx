import { notFound } from "next/navigation";
import { getSchedulingAlternativesPage, getSchedulingAlternativesSlugs } from "@/lib/data/schedulingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getSchedulingAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function SchedulingAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getSchedulingAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="scheduling" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getSchedulingAlternativesPage(slug);
  if (!pageProps) return { title: "Scheduling Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top scheduling tools on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getSchedulingAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getSchedulingAlternativesSlugs().map((slug) => ({ slug }));
}

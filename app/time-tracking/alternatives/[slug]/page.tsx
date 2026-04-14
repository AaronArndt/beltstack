import { notFound } from "next/navigation";
import { getTimeTrackingAlternativesPage, getTimeTrackingAlternativesSlugs } from "@/lib/data/timeTrackingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getTimeTrackingAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function TimeTrackingAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getTimeTrackingAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="time-tracking" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getTimeTrackingAlternativesPage(slug);
  if (!pageProps) return { title: "Time Tracking Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top time tracking apps on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getTimeTrackingAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getTimeTrackingAlternativesSlugs().map((slug) => ({ slug }));
}

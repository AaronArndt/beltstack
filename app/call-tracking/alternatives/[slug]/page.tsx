import { notFound } from "next/navigation";
import { getCallTrackingAlternativesPage, getCallTrackingAlternativesSlugs } from "@/lib/data/callTrackingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getCallTrackingAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function CallTrackingAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getCallTrackingAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} showPayrollTypesColumn={false} softwarePickCategory="call-tracking" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getCallTrackingAlternativesPage(slug);
  if (!pageProps) return { title: "Call Tracking Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top call tracking tools on pricing, features, use cases, and overall value for local service businesses.`;
  return siteMetadata({
    path: getCallTrackingAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getCallTrackingAlternativesSlugs().map((slug) => ({ slug }));
}

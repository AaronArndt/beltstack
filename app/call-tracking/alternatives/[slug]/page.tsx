import { notFound } from "next/navigation";
import { getCallTrackingAlternativesPage, getCallTrackingAlternativesSlugs } from "@/lib/data/callTrackingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import { getCallTrackingAlternativeUrl } from "@/lib/routes";
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
  if (!pageProps) return { title: "Call Tracking Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives for local call attribution in ${year}. Compare features, pricing, and fit—with links to reviews and comparisons.`;
  const url = `${SITE_URL}${getCallTrackingAlternativeUrl(slug)}`;
  return { title, description, openGraph: { title, description, url } };
}

export function generateStaticParams() {
  return getCallTrackingAlternativesSlugs().map((slug) => ({ slug }));
}

import { notFound } from "next/navigation";
import { getEmailMarketingAlternativesPage, getEmailMarketingAlternativesSlugs } from "@/lib/data/emailMarketingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getEmailMarketingAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function EmailMarketingAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getEmailMarketingAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} showPayrollTypesColumn={false} softwarePickCategory="email-marketing" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getEmailMarketingAlternativesPage(slug);
  if (!pageProps) return { title: "Email Marketing Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top email platforms on pricing, automation features, reviews, and fit for contractors and local businesses.`;
  return siteMetadata({
    path: getEmailMarketingAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getEmailMarketingAlternativesSlugs().map((slug) => ({ slug }));
}

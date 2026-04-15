import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
  WEBSITE_BUILDERS_BEST_FOR_METADATA_BY_SLUG,
  getWebsiteBuildersBestForBySlug,
  getWebsiteBuildersBestForSlugs,
} from "@/lib/data/websiteBuildersBestFor";

type Props = { params: Promise<{ scenario: string }> };

export default async function WebsiteBuildersBestForPage({ params }: Props) {
  const { scenario } = await params;
  const pageProps = getWebsiteBuildersBestForBySlug(scenario);
  if (!pageProps) notFound();
  return <BestForPageWithStructuredData {...pageProps} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scenario } = await params;
  const pageProps = getWebsiteBuildersBestForBySlug(scenario);
  const meta = WEBSITE_BUILDERS_BEST_FOR_METADATA_BY_SLUG[scenario];
  if (!pageProps) {
    return {
      title: "Best Website Builders by Use Case | BeltStack",
      description:
        "Browse best website builder recommendations by service-business use case, including contractors, HVAC, plumbing, electricians, and other local operators.",
    };
  }
  return {
    title: meta?.title ?? `${pageProps.title} | BeltStack`,
    description: meta?.description ?? pageProps.subtitle,
    keywords: meta?.keywords,
  };
}

export function generateStaticParams() {
  return getWebsiteBuildersBestForSlugs().map((scenario) => ({ scenario }));
}

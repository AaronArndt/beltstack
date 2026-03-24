import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import {
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
  if (!pageProps) {
    return {
      title: "Best Website Builders by Use Case | BeltStack",
      description:
        "Browse best website builder recommendations by service-business use case, including contractors, HVAC, plumbing, electricians, and other local operators.",
    };
  }
  return { title: `${pageProps.title} | BeltStack`, description: pageProps.subtitle };
}

export function generateStaticParams() {
  return getWebsiteBuildersBestForSlugs().map((scenario) => ({ scenario }));
}

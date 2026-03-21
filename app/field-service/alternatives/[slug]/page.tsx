import { notFound } from "next/navigation";
import { getFieldServiceAlternativesPage, getFieldServiceAlternativesSlugs } from "@/lib/data/fieldServiceAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import { getFieldServiceAlternativeUrl } from "@/lib/routes";
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
  if (!pageProps) return { title: "Field Service Software Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives for field service management in ${year}. Compare features, pricing, and who each option suits—with links to full reviews and comparisons.`;
  const url = `${SITE_URL}${getFieldServiceAlternativeUrl(slug)}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
  };
}

export function generateStaticParams() {
  return getFieldServiceAlternativesSlugs().map((slug) => ({ slug }));
}

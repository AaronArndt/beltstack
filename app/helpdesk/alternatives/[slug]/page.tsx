import { notFound } from "next/navigation";
import { getHelpdeskAlternativesPage, getHelpdeskAlternativesSlugs } from "@/lib/data/helpdeskAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import { getHelpdeskAlternativeUrl } from "@/lib/routes";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function HelpdeskAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getHelpdeskAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getHelpdeskAlternativesPage(slug);
  if (!pageProps) return { title: "Helpdesk Software Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives for helpdesk software in ${year}. Compare features, pricing, and who each option suits—with links to full reviews and comparisons.`;
  const url = `${SITE_URL}${getHelpdeskAlternativeUrl(slug)}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
  };
}

export function generateStaticParams() {
  return getHelpdeskAlternativesSlugs().map((slug) => ({ slug }));
}

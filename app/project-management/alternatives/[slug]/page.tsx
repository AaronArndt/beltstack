import { notFound } from "next/navigation";
import { getProjectManagementAlternativesPage, getProjectManagementAlternativesSlugs } from "@/lib/data/projectManagementAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import { getProjectManagementAlternativeUrl } from "@/lib/routes";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectManagementAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getProjectManagementAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} softwarePickCategory="project-management" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getProjectManagementAlternativesPage(slug);
  if (!pageProps) return { title: "Project Management Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Explore the best ${pageProps.productName} alternatives for project management in ${year}. Compare features, pricing, and who each option suits—with links to full reviews and comparisons.`;
  const url = `${SITE_URL}${getProjectManagementAlternativeUrl(slug)}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
  };
}

export function generateStaticParams() {
  return getProjectManagementAlternativesSlugs().map((slug) => ({ slug }));
}

import { notFound } from "next/navigation";
import { getPayrollAlternativesPage, getPayrollAlternativesSlugs } from "@/lib/data/payrollAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { getPayrollAlternativeUrl } from "@/lib/routes";
import { SEO_YEAR, siteMetadata } from "@/lib/seo/siteMetadata";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function PayrollAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getPayrollAlternativesPage(slug);
  if (!pageProps) notFound();
  return (
    <AlternativesTemplate {...pageProps} showPayrollTypesColumn softwarePickCategory="payroll" />
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getPayrollAlternativesPage(slug);
  if (!pageProps) return { title: "Payroll Software Alternatives | BeltStack" };
  const title = `Best ${pageProps.productName} Alternatives & Competitors (${SEO_YEAR}) | BeltStack`;
  const description = `Looking for ${pageProps.productName} alternatives? Compare top competitors on pricing, features, use cases, and overall value for small businesses.`;
  return siteMetadata({
    path: getPayrollAlternativeUrl(slug),
    title,
    description,
  });
}

export function generateStaticParams() {
  return getPayrollAlternativesSlugs().map((slug) => ({ slug }));
}

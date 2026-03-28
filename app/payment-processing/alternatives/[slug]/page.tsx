import { notFound } from "next/navigation";
import { getPaymentProcessingAlternativesPage, getPaymentProcessingAlternativesSlugs } from "@/lib/data/paymentProcessingAlternatives";
import { AlternativesTemplate } from "@/components/alternatives/AlternativesTemplate";
import { SITE_URL } from "@/lib/site";
import { getPaymentProcessingAlternativeUrl } from "@/lib/routes";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export default async function PaymentProcessingAlternativesPage({ params }: Props) {
  const { slug } = await params;
  const pageProps = getPaymentProcessingAlternativesPage(slug);
  if (!pageProps) notFound();
  return <AlternativesTemplate {...pageProps} showPayrollTypesColumn={false} softwarePickCategory="payment-processing" />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageProps = getPaymentProcessingAlternativesPage(slug);
  if (!pageProps) return { title: "Payment Processing Alternatives" };
  const year = new Date().getFullYear();
  const title = `Best ${pageProps.productName} Alternatives (${year}) | BeltStack`;
  const description = `Editorial ${pageProps.productName} alternatives for ${year}: contractor and SMB channel fit, effective-rate honesty, independence—verify fees on your statements and with each vendor.`;
  const url = `${SITE_URL}${getPaymentProcessingAlternativeUrl(slug)}`;
  return { title, description, openGraph: { title, description, url } };
}

export function generateStaticParams() {
  return getPaymentProcessingAlternativesSlugs().map((slug) => ({ slug }));
}

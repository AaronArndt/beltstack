import { siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { TOP_PICKS, MORE_INVOICING_OPTIONS } from "@/lib/data/invoicingBestInvoicingSoftware";
import { getInvoicingReviewUrl } from "@/lib/routes";
import type { Metadata } from "next";

function bestInvoicingSoftwareItemListSchema() {
  const items = [
    ...TOP_PICKS.map((p, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      item: {
        "@type": "SoftwareApplication" as const,
        name: p.name,
        applicationCategory: "BusinessApplication" as const,
        url: `${SITE_URL}${getInvoicingReviewUrl(p.slug)}`,
      },
    })),
    ...MORE_INVOICING_OPTIONS.map((p, i) => ({
      "@type": "ListItem" as const,
      position: TOP_PICKS.length + i + 1,
      item: {
        "@type": "SoftwareApplication" as const,
        name: p.name,
        applicationCategory: "BusinessApplication" as const,
        url: `${SITE_URL}${getInvoicingReviewUrl(p.slug)}`,
      },
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Invoicing Software (2026)",
    description:
      "2026 best invoicing software for freelancers, agencies, and small business—payments, recurring billing, reviews, and comparisons.",
    url: `${SITE_URL}/invoicing/best-invoicing-software`,
    numberOfItems: items.length,
    itemListElement: items,
  };
}

export const metadata: Metadata = siteMetadata({
  path: "/invoicing/best-invoicing-software",
  title: "Best Invoicing Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best invoicing software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function BestInvoicingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={bestInvoicingSoftwareItemListSchema()} />
      {children}
    </>
  );
}

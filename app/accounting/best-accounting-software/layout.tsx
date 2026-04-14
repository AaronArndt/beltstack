import { siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { TOP_PICKS, MORE_ACCOUNTING_OPTIONS } from "@/lib/data/accountingBestAccountingSoftware";
import { getAccountingReviewUrl } from "@/lib/routes";
import type { Metadata } from "next";

function bestAccountingSoftwareItemListSchema() {
  const items = [
    ...TOP_PICKS.map((p, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      item: {
        "@type": "SoftwareApplication" as const,
        name: p.name,
        applicationCategory: "BusinessApplication" as const,
        url: `${SITE_URL}${getAccountingReviewUrl(p.slug)}`,
      },
    })),
    ...MORE_ACCOUNTING_OPTIONS.map((p, i) => ({
      "@type": "ListItem" as const,
      position: TOP_PICKS.length + i + 1,
      item: {
        "@type": "SoftwareApplication" as const,
        name: p.name,
        applicationCategory: "BusinessApplication" as const,
        url: `${SITE_URL}${getAccountingReviewUrl(p.slug)}`,
      },
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Accounting Software (2026)",
    description:
      "2026 best accounting software for small business, freelancers, and contractors—bookkeeping, invoicing, tax readiness, reviews, and comparisons.",
    url: `${SITE_URL}/accounting/best-accounting-software`,
    numberOfItems: items.length,
    itemListElement: items,
  };
}

export const metadata: Metadata = siteMetadata({
  path: "/accounting/best-accounting-software",
  title: "Best Accounting Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best accounting software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function BestAccountingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={bestAccountingSoftwareItemListSchema()} />
      {children}
    </>
  );
}

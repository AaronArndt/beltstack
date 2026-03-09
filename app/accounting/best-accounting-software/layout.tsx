import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { TOP_PICKS, MORE_ACCOUNTING_OPTIONS } from "@/lib/data/accountingBestAccountingSoftware";
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
        url: `${SITE_URL}${p.reviewHref}`,
      },
    })),
    ...MORE_ACCOUNTING_OPTIONS.map((p, i) => ({
      "@type": "ListItem" as const,
      position: TOP_PICKS.length + i + 1,
      item: {
        "@type": "SoftwareApplication" as const,
        name: p.name,
        applicationCategory: "BusinessApplication" as const,
        url: `${SITE_URL}${p.reviewHref}`,
      },
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Accounting Software (2026)",
    description: "Compare the best accounting software for small businesses, freelancers, contractors, and growing teams.",
    url: `${SITE_URL}/accounting/best-accounting-software`,
    numberOfItems: items.length,
    itemListElement: items,
  };
}

export const metadata: Metadata = {
  title: "Best Accounting Software (2026) | BeltStack",
  description:
    "Compare the best accounting software for small businesses, freelancers, contractors, and ecommerce businesses. See top picks, reviews, and comparisons.",
};

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

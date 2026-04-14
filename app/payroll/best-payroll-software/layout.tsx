import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { TOP_PICKS, MORE_PAYROLL_OPTIONS } from "@/lib/data/payrollBestPayrollSoftware";
import { getPayrollReviewUrl } from "@/lib/routes";

export const metadata: Metadata = siteMetadata({
  path: "/payroll/best-payroll-software",
  title: "Best Payroll Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best payroll software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

function bestPayrollSoftwareItemListSchema() {
  const items = [
    ...TOP_PICKS.map((p, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      item: {
        "@type": "SoftwareApplication" as const,
        name: p.name,
        applicationCategory: "BusinessApplication" as const,
        url: `${SITE_URL}${getPayrollReviewUrl(p.slug)}`,
      },
    })),
    ...MORE_PAYROLL_OPTIONS.map((p, i) => ({
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
    name: "Best Payroll Software (2026)",
    description:
      "2026 best payroll software for small businesses, contractors, and growing teams—reviews and side-by-side comparisons.",
    url: `${SITE_URL}/payroll/best-payroll-software`,
    numberOfItems: items.length,
    itemListElement: items,
  };
}

export default function BestPayrollSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData data={bestPayrollSoftwareItemListSchema()} />
      {children}
    </>
  );
}

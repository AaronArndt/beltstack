import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { TOP_PICKS, MORE_PAYROLL_OPTIONS } from "@/lib/data/payrollBestPayrollSoftware";
import { getPayrollReviewUrl } from "@/lib/routes";

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
    description: "Compare the best payroll software for small businesses, contractors, and growing teams.",
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

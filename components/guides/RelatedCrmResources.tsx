import Link from "next/link";
import { getCrmReviewUrl, getCrmCompareUrl } from "@/lib/routes";

export type RelatedCrmResourceItem = { label: string; href: string };

const DEFAULT_RELATED_CRM_RESOURCES: RelatedCrmResourceItem[] = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Payroll Software Hub", href: "/payroll" },
  { label: "Accounting Software Hub", href: "/accounting" },
  { label: "Invoicing Software Hub", href: "/invoicing" },
  { label: "Time Tracking Software Hub", href: "/time-tracking" },
  { label: "Best CRM Software (2026)", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "HubSpot Review", href: getCrmReviewUrl("hubspot") },
  { label: "Salesforce Review", href: getCrmReviewUrl("salesforce") },
  { label: "Zoho CRM Review", href: getCrmReviewUrl("zoho-crm") },
  { label: "Pipedrive Review", href: getCrmReviewUrl("pipedrive") },
  { label: "Monday CRM Review", href: getCrmReviewUrl("monday-crm") },
  { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
  { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
  { label: "CRM for Small Business guide", href: "/crm/guides/crm-for-small-business" },
  { label: "How to Choose CRM Software guide", href: "/crm/guides/how-to-choose-crm-software" },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

type RelatedCrmResourcesProps = {
  items?: RelatedCrmResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedCrmResources({
  items = DEFAULT_RELATED_CRM_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedCrmResourcesProps) {
  const filtered = excludeHref ? items.filter((item) => item.href !== excludeHref) : items;

  if (compact) {
    return (
      <ul className="space-y-2">
        {filtered.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section
      id="related-resources"
      className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle sub="More ways to explore CRM software.">
          Related CRM Resources
        </SectionTitle>
        <ul className="mt-4 space-y-3">
          {filtered.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                {label}
                <span className="text-[#10B981]" aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

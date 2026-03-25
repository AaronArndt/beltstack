import Link from "next/link";
import { getPayrollReviewUrl } from "@/lib/routes";

export type RelatedResourceItem = { label: string; href: string };

const DEFAULT_RELATED_RESOURCES: RelatedResourceItem[] = [
  { label: "Payroll Software Hub", href: "/payroll" },
  { label: "Accounting Software Hub", href: "/accounting" },
  { label: "Invoicing Software Hub", href: "/invoicing" },
  { label: "Time Tracking Software Hub", href: "/time-tracking" },
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Best Payroll Software by Use Case", href: "/payroll/best-for" },
  { label: "Payroll Software Comparisons", href: "/payroll/compare" },
  { label: "Payroll Guides", href: "/payroll/guides" },
  { label: "Payroll software by trade", href: "/payroll/trades" },
  { label: "Gusto Review", href: getPayrollReviewUrl("gusto") },
  { label: "QuickBooks Payroll Review", href: getPayrollReviewUrl("quickbooks-payroll") },
  { label: "Rippling Review", href: getPayrollReviewUrl("rippling") },
  { label: "Justworks Review", href: getPayrollReviewUrl("justworks") },
  { label: "Deel Review", href: getPayrollReviewUrl("deel") },
  { label: "Wave Review", href: getPayrollReviewUrl("wave") },
  { label: "Payroll for Contractors guide", href: "/payroll/guides/payroll-for-contractors" },
  { label: "Payroll Software Pricing guide", href: "/payroll/guides/payroll-software-pricing" },
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

type RelatedPayrollResourcesProps = {
  /** Optional: links to show instead of default set */
  items?: RelatedResourceItem[];
  /** Optional: href to exclude (e.g. current page) */
  excludeHref?: string;
  /** Optional: use compact layout (e.g. for sidebar) */
  compact?: boolean;
};

export function RelatedPayrollResources({
  items = DEFAULT_RELATED_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedPayrollResourcesProps) {
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
        <SectionTitle sub="More ways to explore payroll software.">
          Related Payroll Resources
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

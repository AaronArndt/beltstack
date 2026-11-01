import Link from "next/link";
import { getInvoicingReviewUrl } from "@/lib/routes";

export type RelatedInvoicingResourceItem = { label: string; href: string };

const DEFAULT_RELATED_INVOICING_RESOURCES: RelatedInvoicingResourceItem[] = [
  { label: "Invoicing Software Hub", href: "/invoicing" },
  { label: "Payroll Software Hub", href: "/payroll" },
  { label: "Accounting Software Hub", href: "/accounting" },
  { label: "Time Tracking Software Hub", href: "/time-tracking" },
  { label: "Best Invoicing Software (2026)", href: "/invoicing/best-invoicing-software" },
  { label: "Best Invoicing Software by Use Case", href: "/invoicing/best-for" },
  { label: "Compare Invoicing Software", href: "/invoicing/compare" },
  { label: "Invoicing Guides", href: "/invoicing/guides" },
  { label: "Invoices, Payments & Accounting Close (workflow guide)", href: "/accounting/guides/invoices-payments-and-accounting-close" },
  { label: "FreshBooks Review", href: getInvoicingReviewUrl("freshbooks") },
  { label: "QuickBooks Review", href: getInvoicingReviewUrl("quickbooks") },
  { label: "Wave Review", href: getInvoicingReviewUrl("wave") },
  { label: "Zoho Invoice Review", href: getInvoicingReviewUrl("zoho-invoice") },
  { label: "Xero Review", href: getInvoicingReviewUrl("xero") },
  { label: "Invoice Ninja Review", href: getInvoicingReviewUrl("invoice-ninja") },
  { label: "HoneyBook Review", href: getInvoicingReviewUrl("honeybook") },
  { label: "Bonsai Review", href: getInvoicingReviewUrl("bonsai") },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-brand text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-terracotta" aria-hidden />
      {sub && <p className="mt-1 text-muted-foreground text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

type RelatedInvoicingResourcesProps = {
  items?: RelatedInvoicingResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedInvoicingResources({
  items = DEFAULT_RELATED_INVOICING_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedInvoicingResourcesProps) {
  const filtered = excludeHref ? items.filter((item) => item.href !== excludeHref) : items;

  if (compact) {
    return (
      <ul className="space-y-2">
        {filtered.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded"
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
        <SectionTitle sub="More ways to explore invoicing software.">
          Related Invoicing Resources
        </SectionTitle>
        <ul className="mt-4 space-y-3">
          {filtered.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-brand font-semibold hover:text-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded"
              >
                {label}
                <span className="text-indigo" aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

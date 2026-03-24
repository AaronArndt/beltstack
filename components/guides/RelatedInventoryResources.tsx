import Link from "next/link";
import { getInventoryReviewUrl, getInventoryCompareUrl } from "@/lib/routes";

export type RelatedInventoryResourceItem = { label: string; href: string };

const DEFAULT_RELATED_INVENTORY_RESOURCES: RelatedInventoryResourceItem[] = [
  { label: "Inventory Management Software Hub", href: "/inventory" },
  { label: "Best Inventory Management Software (2026)", href: "/inventory/best-inventory-software" },
  { label: "Compare Inventory Software", href: "/inventory/compare" },
  { label: "Inventory Management Guides", href: "/inventory/guides" },
  { label: "Zoho Inventory Review", href: getInventoryReviewUrl("zoho-inventory") },
  { label: "Cin7 Review", href: getInventoryReviewUrl("cin7") },
  { label: "inFlow Inventory Review", href: getInventoryReviewUrl("inflow-inventory") },
  { label: "Katana Review", href: getInventoryReviewUrl("katana") },
  { label: "Fishbowl Review", href: getInventoryReviewUrl("fishbowl") },
  { label: "Sortly Review", href: getInventoryReviewUrl("sortly") },
  { label: "QuickBooks Commerce Review", href: getInventoryReviewUrl("quickbooks-commerce") },
  { label: "Unleashed Review", href: getInventoryReviewUrl("unleashed") },
  { label: "Finale Inventory Review", href: getInventoryReviewUrl("finale-inventory") },
  { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
  { label: "Cin7 vs Katana", href: getInventoryCompareUrl("cin7-vs-katana") },
  { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
  { label: "Sortly vs inFlow Inventory", href: getInventoryCompareUrl("sortly-vs-inflow-inventory") },
  { label: "Fishbowl vs Katana", href: getInventoryCompareUrl("fishbowl-vs-katana") },
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

type RelatedInventoryResourcesProps = {
  items?: readonly RelatedInventoryResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedInventoryResources({
  items = DEFAULT_RELATED_INVENTORY_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedInventoryResourcesProps) {
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
        <SectionTitle sub="More ways to explore inventory software.">
          Related Inventory Resources
        </SectionTitle>
        <ul className="mt-4 space-y-3">
          {filtered.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                {label}
                <span className="text-[#10B981]" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


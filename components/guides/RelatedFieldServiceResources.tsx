import Link from "next/link";
import { getFieldServiceReviewUrl } from "@/lib/routes";

export type RelatedFieldServiceResourceItem = { label: string; href: string };

const DEFAULT_RELATED_FIELD_SERVICE_RESOURCES: RelatedFieldServiceResourceItem[] = [
  { label: "Field Service Software Hub", href: "/field-service" },
  { label: "Best Field Service Management Software (2026)", href: "/field-service/best-field-service-software" },
  { label: "Compare Field Service Software", href: "/field-service/compare" },
  { label: "Field Service Guides", href: "/field-service/guides" },
  { label: "Jobber Review", href: getFieldServiceReviewUrl("jobber") },
  { label: "Housecall Pro Review", href: getFieldServiceReviewUrl("housecall-pro") },
  { label: "ServiceTitan Review", href: getFieldServiceReviewUrl("servicetitan") },
  { label: "Service Fusion Review", href: getFieldServiceReviewUrl("service-fusion") },
  { label: "Workiz Review", href: getFieldServiceReviewUrl("workiz") },
  { label: "Kickserv Review", href: getFieldServiceReviewUrl("kickserv") },
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

type RelatedFieldServiceResourcesProps = {
  items?: RelatedFieldServiceResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedFieldServiceResources({
  items = DEFAULT_RELATED_FIELD_SERVICE_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedFieldServiceResourcesProps) {
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
        <SectionTitle sub="More ways to explore field service software.">
          Related Field Service Resources
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


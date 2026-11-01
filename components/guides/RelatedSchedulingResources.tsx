import Link from "next/link";
import { getSchedulingReviewUrl } from "@/lib/routes";

export type RelatedSchedulingResourceItem = { label: string; href: string };

const DEFAULT_RELATED_SCHEDULING_RESOURCES: RelatedSchedulingResourceItem[] = [
  { label: "Scheduling Software Hub", href: "/scheduling" },
  { label: "Best Scheduling Software (2026)", href: "/scheduling/best-scheduling-software" },
  { label: "Compare Scheduling Software", href: "/scheduling/compare" },
  { label: "Scheduling Guides", href: "/scheduling/guides" },
  { label: "Route optimization for service businesses (guide)", href: "/scheduling/guides/route-optimization-for-service-businesses" },
  { label: "Scheduling vs field service software (guide)", href: "/scheduling/guides/scheduling-software-vs-field-service-software" },
  { label: "Emergency & same-day scheduling (guide)", href: "/scheduling/guides/emergency-and-same-day-appointment-scheduling" },
  { label: "Best Scheduling Software by Use Case", href: "/scheduling/best-for" },
  { label: "Calendly Review", href: getSchedulingReviewUrl("calendly") },
  { label: "Acuity Scheduling Review", href: getSchedulingReviewUrl("acuity-scheduling") },
  { label: "YouCanBook.me Review", href: getSchedulingReviewUrl("youcanbookme") },
  { label: "Setmore Review", href: getSchedulingReviewUrl("setmore") },
  { label: "SimplyBook.me Review", href: getSchedulingReviewUrl("simplybookme") },
  { label: "Square Appointments Review", href: getSchedulingReviewUrl("square-appointments") },
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

type RelatedSchedulingResourcesProps = {
  items?: RelatedSchedulingResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedSchedulingResources({
  items = DEFAULT_RELATED_SCHEDULING_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedSchedulingResourcesProps) {
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
        <SectionTitle sub="More ways to explore scheduling software.">
          Related Scheduling Resources
        </SectionTitle>
        <ul className="mt-4 space-y-3">
          {filtered.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-brand font-semibold hover:text-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded"
              >
                {label}
                <span className="text-indigo" aria-hidden>
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

import Link from "next/link";
import { getSchedulingReviewUrl } from "@/lib/routes";

export type RelatedSchedulingResourceItem = { label: string; href: string };

const DEFAULT_RELATED_SCHEDULING_RESOURCES: RelatedSchedulingResourceItem[] = [
  { label: "Scheduling Software Hub", href: "/scheduling" },
  { label: "Best Scheduling Software (2026)", href: "/scheduling/best-scheduling-software" },
  { label: "Compare Scheduling Software", href: "/scheduling/compare" },
  { label: "Scheduling Guides", href: "/scheduling/guides" },
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
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
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
      className="scroll-mt-section border-t border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11"
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

import Link from "next/link";
import { getTimeTrackingReviewUrl } from "@/lib/routes";

export type RelatedTimeTrackingResourceItem = { label: string; href: string };

const DEFAULT_RELATED_TIME_TRACKING_RESOURCES: RelatedTimeTrackingResourceItem[] = [
  { label: "Time Tracking Software Hub", href: "/time-tracking" },
  { label: "Payroll Software Hub", href: "/payroll" },
  { label: "Accounting Software Hub", href: "/accounting" },
  { label: "Invoicing Software Hub", href: "/invoicing" },
  { label: "Best Time Tracking Software (2026)", href: "/time-tracking/best-time-tracking-software" },
  { label: "Best Time Tracking Software by Use Case", href: "/time-tracking/best-for" },
  { label: "Compare Time Tracking Software", href: "/time-tracking/compare" },
  { label: "Time Tracking Guides", href: "/time-tracking/guides" },
  { label: "Toggl Track Review", href: getTimeTrackingReviewUrl("toggl") },
  { label: "Harvest Review", href: getTimeTrackingReviewUrl("harvest") },
  { label: "Clockify Review", href: getTimeTrackingReviewUrl("clockify") },
  { label: "Hubstaff Review", href: getTimeTrackingReviewUrl("hubstaff") },
  { label: "Time Doctor Review", href: getTimeTrackingReviewUrl("time-doctor") },
  { label: "Everhour Review", href: getTimeTrackingReviewUrl("everhour") },
  { label: "Timely Review", href: getTimeTrackingReviewUrl("timely") },
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

type RelatedTimeTrackingResourcesProps = {
  items?: RelatedTimeTrackingResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedTimeTrackingResources({
  items = DEFAULT_RELATED_TIME_TRACKING_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedTimeTrackingResourcesProps) {
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
        <SectionTitle sub="More ways to explore time tracking software.">
          Related Time Tracking Resources
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

import Link from "next/link";
import { getHrReviewUrl, getHrCompareUrl } from "@/lib/routes";

export type RelatedHrResourceItem = { label: string; href: string };

const DEFAULT_RELATED_HR_RESOURCES: RelatedHrResourceItem[] = [
  { label: "HR Software Hub", href: "/hr" },
  { label: "Best HR Software (2026)", href: "/hr/best-hr-software" },
  { label: "Compare HR Software", href: "/hr/compare" },
  { label: "HR Software Guides", href: "/hr/guides" },
  { label: "Best HR Software by Use Case", href: "/hr/best-for" },
  { label: "Payroll Software Hub", href: "/payroll" },
  { label: "Time Tracking Software Hub", href: "/time-tracking" },
  { label: "Scheduling Software Hub", href: "/scheduling" },
  { label: "Gusto Review", href: getHrReviewUrl("gusto") },
  { label: "BambooHR Review", href: getHrReviewUrl("bamboohr") },
  { label: "Rippling Review", href: getHrReviewUrl("rippling") },
  { label: "Deel Review", href: getHrReviewUrl("deel") },
  { label: "ADP Workforce Now Review", href: getHrReviewUrl("adp-workforce-now") },
  { label: "Paychex Review", href: getHrReviewUrl("paychex") },
  { label: "TriNet Review", href: getHrReviewUrl("trinet") },
  { label: "Justworks Review", href: getHrReviewUrl("justworks") },
  { label: "Zenefits Review", href: getHrReviewUrl("zenefits") },
  { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  { label: "Gusto vs Rippling", href: getHrCompareUrl("gusto-vs-rippling") },
  { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
  { label: "ADP vs Paychex", href: getHrCompareUrl("adp-vs-paychex") },
  { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
  { label: "Justworks vs TriNet", href: getHrCompareUrl("justworks-vs-trinet") },
  { label: "Payroll vs HR Software guide", href: "/payroll/guides/payroll-software-vs-hr-software" },
  { label: "How to Choose HR Software guide", href: "/hr/guides/how-to-choose-hr-software" },
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

type RelatedHrResourcesProps = {
  items?: RelatedHrResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedHrResources({
  items = DEFAULT_RELATED_HR_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedHrResourcesProps) {
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
        <SectionTitle sub="More ways to explore HR software.">
          Related HR Resources
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


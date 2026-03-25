import Link from "next/link";
import { getProjectManagementReviewUrl, getProjectManagementCompareUrl } from "@/lib/routes";

export type RelatedProjectManagementResourceItem = { label: string; href: string };

const DEFAULT_RELATED_PROJECT_MANAGEMENT_RESOURCES: RelatedProjectManagementResourceItem[] = [
  { label: "Project Management Software Hub", href: "/project-management" },
  { label: "Best project management software by use case", href: "/project-management/best-for" },
  { label: "Best Project Management Software (2026)", href: "/project-management/best-project-management-software" },
  { label: "Compare Project Management Software", href: "/project-management/compare" },
  { label: "Project Management Guides", href: "/project-management/guides" },
  { label: "Time Tracking Software Hub", href: "/time-tracking" },
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Invoicing Software Hub", href: "/invoicing" },
  { label: "Accounting Software Hub", href: "/accounting" },
  { label: "Payroll Software Hub", href: "/payroll" },
  { label: "Asana Review", href: getProjectManagementReviewUrl("asana") },
  { label: "ClickUp Review", href: getProjectManagementReviewUrl("clickup") },
  { label: "Monday Review", href: getProjectManagementReviewUrl("monday") },
  { label: "Trello Review", href: getProjectManagementReviewUrl("trello") },
  { label: "Notion Review", href: getProjectManagementReviewUrl("notion") },
  { label: "Wrike Review", href: getProjectManagementReviewUrl("wrike") },
  { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
  { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
  { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
  { label: "Notion vs Trello", href: getProjectManagementCompareUrl("notion-vs-trello") },
  { label: "Monday vs Wrike", href: getProjectManagementCompareUrl("monday-vs-wrike") },
  { label: "How to Choose Project Management Software guide", href: "/project-management/guides/how-to-choose-project-management-software" },
  { label: "Project Management for Small Business guide", href: "/project-management/guides/project-management-for-small-business" },
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

type RelatedProjectManagementResourcesProps = {
  items?: RelatedProjectManagementResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedProjectManagementResources({
  items = DEFAULT_RELATED_PROJECT_MANAGEMENT_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedProjectManagementResourcesProps) {
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
        <SectionTitle sub="More ways to explore project management software.">
          Related Project Management Resources
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

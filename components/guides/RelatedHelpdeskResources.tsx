import Link from "next/link";
import { getHelpdeskReviewUrl, getHelpdeskCompareUrl } from "@/lib/routes";

export type RelatedHelpdeskResourceItem = { label: string; href: string };

const DEFAULT_RELATED_HELPDESK_RESOURCES: RelatedHelpdeskResourceItem[] = [
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best Helpdesk Software (2026)", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "Helpdesk Guides", href: "/helpdesk/guides" },
  { label: "Zendesk Review", href: getHelpdeskReviewUrl("zendesk") },
  { label: "Freshdesk Review", href: getHelpdeskReviewUrl("freshdesk") },
  { label: "Help Scout Review", href: getHelpdeskReviewUrl("help-scout") },
  { label: "Intercom Review", href: getHelpdeskReviewUrl("intercom") },
  { label: "Zoho Desk Review", href: getHelpdeskReviewUrl("zoho-desk") },
  { label: "Gorgias Review", href: getHelpdeskReviewUrl("gorgias") },
  { label: "LiveAgent Review", href: getHelpdeskReviewUrl("liveagent") },
  { label: "Kayako Review", href: getHelpdeskReviewUrl("kayako") },
  { label: "Front Review", href: getHelpdeskReviewUrl("front") },
  { label: "Best Helpdesk by Use Case", href: "/helpdesk/best-for" },
  { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
  { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
  { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrl("intercom-vs-zendesk") },
  { label: "Freshdesk vs Zoho Desk", href: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
  { label: "Gorgias vs Zendesk", href: getHelpdeskCompareUrl("gorgias-vs-zendesk") },
  { label: "Best Helpdesk for Small Business guide", href: "/helpdesk/guides/best-helpdesk-software-for-small-business" },
  { label: "How to Choose Helpdesk Software guide", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
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

type RelatedHelpdeskResourcesProps = {
  items?: RelatedHelpdeskResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedHelpdeskResources({
  items = DEFAULT_RELATED_HELPDESK_RESOURCES,
  excludeHref,
  compact = false,
}: RelatedHelpdeskResourcesProps) {
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
        <SectionTitle sub="More ways to explore helpdesk software.">
          Related Helpdesk Resources
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

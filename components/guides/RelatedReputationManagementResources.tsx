import Link from "next/link";
import { getReputationManagementReviewUrl } from "@/lib/routes";

type Item = { label: string; href: string };

const DEFAULT_ITEMS: Item[] = [
  { label: "Reputation management hub", href: "/reputation-management" },
  { label: "Best reputation management software", href: "/reputation-management/best-reputation-management-software" },
  { label: "Compare reputation management software", href: "/reputation-management/compare" },
  { label: "Reputation management guides", href: "/reputation-management/guides" },
  { label: "Best reputation management by use case", href: "/reputation-management/best-for" },
  { label: "Podium review", href: getReputationManagementReviewUrl("podium") },
  { label: "Birdeye review", href: getReputationManagementReviewUrl("birdeye") },
  { label: "NiceJob review", href: getReputationManagementReviewUrl("nicejob") },
  { label: "How to get more Google reviews", href: "/reputation-management/guides/how-to-get-more-google-reviews" },
  { label: "How to respond to negative reviews", href: "/reputation-management/guides/how-to-respond-to-negative-reviews" },
  { label: "SEO tools hub", href: "/seo-tools" },
  { label: "Lead generation hub", href: "/lead-generation" },
  { label: "Website builders hub", href: "/website-builders" },
  { label: "CRM software hub", href: "/crm" },
  { label: "Call tracking hub", href: "/call-tracking" },
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

export function RelatedReputationManagementResources({ excludeHref }: { excludeHref?: string }) {
  const items = excludeHref ? DEFAULT_ITEMS.filter((i) => i.href !== excludeHref) : DEFAULT_ITEMS;
  return (
    <section id="related-resources" className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle sub="More ways to evaluate reputation software.">Related Reputation Management Resources</SectionTitle>
        <ul className="mt-4 space-y-3">
          {items.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
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

import Link from "next/link";
import { getEmailMarketingReviewUrl } from "@/lib/routes";

type Item = { label: string; href: string };

const DEFAULT_ITEMS: Item[] = [
  { label: "Email marketing hub", href: "/email-marketing" },
  { label: "Best email marketing software", href: "/email-marketing/best-email-marketing-software" },
  { label: "Compare email marketing software", href: "/email-marketing/compare" },
  { label: "Email marketing guides", href: "/email-marketing/guides" },
  { label: "Best email marketing by use case", href: "/email-marketing/best-for" },
  { label: "Mailchimp review", href: getEmailMarketingReviewUrl("mailchimp") },
  { label: "ActiveCampaign review", href: getEmailMarketingReviewUrl("activecampaign") },
  { label: "Klaviyo review", href: getEmailMarketingReviewUrl("klaviyo") },
  { label: "How to build an email list", href: "/email-marketing/guides/how-to-build-an-email-list" },
  { label: "Email marketing for local business", href: "/email-marketing/guides/email-marketing-for-local-business" },
  { label: "CRM software hub", href: "/crm" },
  { label: "Lead generation hub", href: "/lead-generation" },
  { label: "Website builders hub", href: "/website-builders" },
  { label: "SEO tools hub", href: "/seo-tools" },
  { label: "Reputation management hub", href: "/reputation-management" },
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

export function RelatedEmailMarketingResources({ excludeHref }: { excludeHref?: string }) {
  const items = excludeHref ? DEFAULT_ITEMS.filter((i) => i.href !== excludeHref) : DEFAULT_ITEMS;
  return (
    <section id="related-resources" className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle sub="More ways to evaluate email marketing software.">Related Email Marketing Resources</SectionTitle>
        <ul className="mt-4 space-y-3">
          {items.map(({ label, href }) => (
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

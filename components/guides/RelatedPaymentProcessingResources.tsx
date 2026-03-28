import Link from "next/link";
import { getPaymentProcessingReviewUrl } from "@/lib/routes";

export type RelatedPaymentProcessingResourceItem = { label: string; href: string };

const DEFAULT_ITEMS: RelatedPaymentProcessingResourceItem[] = [
  { label: "Payment processing hub", href: "/payment-processing" },
  { label: "Best payment processing software", href: "/payment-processing/best-payment-processing-software" },
  { label: "Compare payment processing", href: "/payment-processing/compare" },
  { label: "Payment processing guides", href: "/payment-processing/guides" },
  { label: "Best payment processing by use case", href: "/payment-processing/best-for" },
  { label: "Best for contractors", href: "/payment-processing/best-for/contractors" },
  { label: "Best for small business", href: "/payment-processing/best-for/small-business" },
  { label: "How payment processing works", href: "/payment-processing/guides/how-payment-processing-works" },
  { label: "How to choose a payment processor", href: "/payment-processing/guides/how-to-choose-a-payment-processor" },
  { label: "Stripe review", href: getPaymentProcessingReviewUrl("stripe") },
  { label: "Square review", href: getPaymentProcessingReviewUrl("square") },
  { label: "PayPal Business review", href: getPaymentProcessingReviewUrl("paypal-business") },
  { label: "Invoicing software hub", href: "/invoicing" },
  { label: "POS software hub", href: "/pos" },
  { label: "CRM software hub", href: "/crm" },
  { label: "Website builders hub", href: "/website-builders" },
  { label: "Email marketing hub", href: "/email-marketing" },
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

type Props = {
  items?: RelatedPaymentProcessingResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedPaymentProcessingResources({ items = DEFAULT_ITEMS, excludeHref, compact = false }: Props) {
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
    <section id="related-resources" className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle sub="More ways to explore payment processing for service businesses.">Related Payment Processing Resources</SectionTitle>
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

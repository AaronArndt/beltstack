import Link from "next/link";

function FooterLogo({ className }: { className?: string }) {
  return (
    <img
      src="/Logos/BS_Logo_W.svg"
      alt=""
      className={className}
      width={120}
      height={105}
      aria-hidden
    />
  );
}

const linkClass =
  "text-sm text-white/60 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A2D48] rounded";

const FOOTER_SOFTWARE_LINKS = [
  { label: "All categories", href: "/software" },
  { label: "Payroll", href: "/payroll" },
  { label: "Accounting", href: "/accounting" },
  { label: "Invoicing", href: "/invoicing" },
  { label: "CRM", href: "/crm" },
  { label: "Field service", href: "/field-service" },
  { label: "Project management", href: "/project-management" },
  { label: "HR & people", href: "/hr" },
  { label: "POS", href: "/pos" },
  { label: "Helpdesk", href: "/helpdesk" },
  { label: "Lead generation", href: "/lead-generation" },
  { label: "Email marketing", href: "/email-marketing" },
  { label: "Website builders", href: "/website-builders" },
  { label: "Payment processing", href: "/payment-processing" },
] as const;

const FOOTER_COMPARE_LINKS = [
  { label: "Payroll comparisons", href: "/payroll/compare" },
  { label: "CRM comparisons", href: "/crm/compare" },
  { label: "Field service comparisons", href: "/field-service/compare" },
  { label: "Accounting comparisons", href: "/accounting/compare" },
  { label: "POS comparisons", href: "/pos/compare" },
  { label: "Best payroll software", href: "/payroll/best-payroll-software" },
  { label: "Best CRM software", href: "/crm/best-crm-software" },
  { label: "Best field service software", href: "/field-service/best-field-service-software" },
] as const;

const FOOTER_COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Methodology", href: "/methodology" },
  { label: "Browse by trade", href: "/software#browse-by-trade" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#1A2D48] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
            >
              <FooterLogo className="h-12 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-white/70 text-sm leading-relaxed">
              Independent reviews, pricing notes, and side-by-side comparisons for payroll, operations, and growth
              tools—written for trades and small businesses.
            </p>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Software</h4>
            <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-1">
              {FOOTER_SOFTWARE_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Compare</h4>
            <ul className="mt-3 space-y-2">
              {FOOTER_COMPARE_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Company</h4>
            <ul className="mt-3 space-y-2">
              {FOOTER_COMPANY_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-8">
          <p className="text-white/50 text-xs leading-relaxed">
            We may earn commissions when you click vendor links or sign up through our site. That does not change how
            we research, score, or rank products.
          </p>
          <p className="mt-2 text-white/50 text-xs leading-relaxed">
            BeltStack publishes editorial software reviews and comparisons. Verify pricing and terms on each vendor’s site
            before you buy—offers change frequently.
          </p>
          <p className="mt-4 text-white/40 text-xs">© {new Date().getFullYear()} BeltStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

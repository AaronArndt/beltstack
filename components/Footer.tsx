"use client";

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

export function Footer() {
  return (
    <footer className="bg-[#1A2D48] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
              <FooterLogo className="h-12 w-auto" />
            </Link>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">BeltStack helps trade businesses compare and choose the right software.</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Product</h4>
            <ul className="mt-2 space-y-1.5">
              <li>
                <Link href="/software" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Software</Link>
              </li>
              <li>
                <Link href="/comparisons" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Comparisons</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Company</h4>
            <ul className="mt-2 space-y-1.5">
              <li><Link href="/about" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">About</Link></li>
              <li><Link href="/contact" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Contact</Link></li>
              <li><Link href="/methodology" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Methodology</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Categories</h4>
            <ul className="mt-2 space-y-1.5">
              <li><Link href="/payroll" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link></li>
              <li><Link href="/accounting" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Accounting</Link></li>
              <li><Link href="/trades" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">By Trade</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/15 pt-6">
          <p className="text-white/50 text-xs leading-relaxed">
            We may earn commissions from links on this page. This does not influence our evaluations.
          </p>
          <p className="mt-1 text-white/50 text-xs leading-relaxed">
            BeltStack provides independent software reviews and comparisons. Methodology link above explains how we review. Prices and offers are subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
}

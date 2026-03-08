"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  useFloating,
  useHover,
  safePolygon,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useClick,
  FloatingPortal,
  offset,
  size,
} from "@floating-ui/react";
import { useMeasure } from "@/hooks/useMeasure";

// ——— Data ———
type SoftwareItem = { title: string; description: string; href: string };

const SOFTWARE_COLUMNS: {
  id: string;
  label: string;
  items: SoftwareItem[];
  tradeLinks?: { label: string; href: string }[];
}[] = [
  {
    id: "operations",
    label: "Operations",
    items: [
      { title: "Field Service", description: "Scheduling, dispatch, estimates", href: "/field-service" },
      { title: "CRM", description: "Leads, pipelines, follow-up", href: "/crm" },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    items: [
      { title: "Payroll", description: "Pay teams, contractors, filings", href: "/payroll" },
      { title: "Accounting", description: "Bookkeeping, invoicing, expenses", href: "/accounting" },
      { title: "Banking", description: "Business accounts, cash flow", href: "/banking" },
      { title: "Credit Cards", description: "Cashback and financing", href: "/credit-cards" },
    ],
  },
  {
    id: "more",
    label: "More",
    items: [],
    tradeLinks: [
      { label: "HVAC", href: "/hvac" },
      { label: "Plumbing", href: "/plumbing" },
      { label: "Electrical", href: "/electrical" },
      { label: "Landscaping", href: "/landscaping" },
    ],
  },
];

const POPULAR_COMPARISONS = [
  { label: "Gusto vs QuickBooks Payroll", href: "/comparisons/gusto-vs-quickbooks-payroll" },
  { label: "ServiceTitan vs Jobber", href: "/comparisons/servicetitan-vs-jobber" },
  { label: "QuickBooks vs Xero", href: "/comparisons/quickbooks-vs-xero" },
];

const COMPARISON_TYPES = [
  { title: "Best-of lists", description: "Top tools by category", href: "/comparisons#best-of" },
  { title: "Vs comparisons", description: "Side-by-side matchups", href: "/comparisons#vs" },
  { title: "Pricing comparisons", description: "Plans, add-ons, hidden costs", href: "/comparisons#pricing" },
  { title: "Setup guides", description: "Migration and implementation", href: "/comparisons#setup" },
];

const TOP_PICKS_MINI = [
  { tool: "Gusto", rating: "4.8" },
  { tool: "QuickBooks Online", rating: "4.6" },
  { tool: "ServiceTitan", rating: "4.7" },
];

const SIMPLE_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// For mobile we still need flat list
const SOFTWARE_CATEGORIES: SoftwareItem[] = SOFTWARE_COLUMNS.flatMap((col) => col.items);

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const navItemClass =
  "text-[14px] font-medium text-[#1A2D48] hover:text-[#0f2440] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function LogoIcon({ className }: { className?: string }) {
  return (
    <img
      src="/Logos/BS_Logo_B.svg"
      alt=""
      className={className}
      width={45}
      height={38}
      aria-hidden
    />
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className={`ml-1 h-3.5 w-3.5 shrink-0 text-[#6E6E6E] transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ——— Software panel: columns, no icons, emerald links, column header underline ———
function SoftwarePanelContent({
  activeColumn,
  onColumnHover,
}: {
  activeColumn: string;
  onColumnHover: (id: string) => void;
}) {
  return (
    <div className="w-full min-w-0 shrink-0">
      <div className="grid grid-cols-3 gap-8">
        {SOFTWARE_COLUMNS.map((col) => (
          <div key={col.id} onPointerEnter={() => onColumnHover(col.id)}>
            <div className="inline-block">
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#6E6E6E]">
                {col.label}
              </p>
              <div
                className={`mt-2 h-0.5 w-full bg-[#10B981] transition-all duration-200 origin-left ${
                  activeColumn === col.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </div>
            <div className="mt-3 space-y-1">
              {col.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="block rounded-lg py-2 pr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1"
                >
                  <span className="text-sm font-medium text-[#10B981] hover:underline hover:text-[#0d9668]">
                    {item.title}
                  </span>
                  <p className="mt-0.5 text-[13px] leading-snug text-[#6E6E6E]">{item.description}</p>
                </Link>
              ))}
              {col.tradeLinks && (
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {col.tradeLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        role="menuitem"
                        href={link.href}
                        className="text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-neutral-200/70 pt-4">
        <Link href="/software" className="text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
          View all software categories →
        </Link>
      </div>
    </div>
  );
}

// ——— Comparisons panel: 2 columns + featured, no icons, emerald links ———
function ComparisonsPanelContent() {
  return (
    <div className="w-full min-w-0 shrink-0">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-[#6E6E6E]">Types</p>
          <ul className="mt-3 space-y-2">
            {COMPARISON_TYPES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className="block rounded-lg py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1"
              >
                <span className="text-sm font-medium text-[#10B981] hover:underline hover:text-[#0d9668]">
                  {item.title}
                </span>
                <p className="mt-0.5 text-[13px] leading-snug text-[#6E6E6E]">{item.description}</p>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-[#6E6E6E]">Featured</p>
          <ul className="mt-3 space-y-2">
            {TOP_PICKS_MINI.map((item) => (
              <li key={item.tool} className="flex items-center justify-between gap-2">
                <Link
                  role="menuitem"
                  href="/comparisons"
                  className="text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  {item.tool}
                </Link>
                <span className="text-sm text-[#6E6E6E] tabular-nums">{item.rating}</span>
              </li>
            ))}
          </ul>
          <Link href="/methodology" className="mt-3 inline-block text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
            How we review
          </Link>
        </div>
      </div>
      <div className="mt-4 border-t border-neutral-200/70 pt-4">
        <Link href="/comparisons" className="text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
          See all comparisons →
        </Link>
      </div>
    </div>
  );
}

const SLIDE_DURATION_MS = 250;

// ——— Single viewport: slide + height transition ———
function MegaMenuViewport({
  activeMenu,
  activeSoftwareColumn,
  onColumnHover,
}: {
  activeMenu: "software" | "comparisons";
  activeSoftwareColumn: string;
  onColumnHover: (id: string) => void;
}) {
  const [softwareRef, softwareSize] = useMeasure<HTMLDivElement>();
  const [comparisonsRef, comparisonsSize] = useMeasure<HTMLDivElement>();
  const [height, setHeight] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevMenuRef = useRef<"software" | "comparisons">(activeMenu);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const nextHeight =
      activeMenu === "software" ? softwareSize.height : comparisonsSize.height;
    if (nextHeight <= 0) return;

    const menuChanged = prevMenuRef.current !== activeMenu;
    prevMenuRef.current = activeMenu;

    if (menuChanged) {
      setHeight((prev) => Math.max(prev, nextHeight));
      setIsTransitioning(true);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = setTimeout(() => {
        setHeight(nextHeight);
        setIsTransitioning(false);
        transitionTimerRef.current = null;
      }, SLIDE_DURATION_MS);
    } else if (!isTransitioning) {
      setHeight(nextHeight);
    }
  }, [activeMenu, softwareSize.height, comparisonsSize.height, isTransitioning]);

  return (
    <div
      style={{ height: height > 0 ? height : 0 }}
      className="w-full overflow-hidden rounded-none border border-neutral-200/70 border-b border-neutral-300/70 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-[height] duration-200 ease-out"
    >
      <div className="size-full overflow-hidden" aria-hidden>
        <div
          className="flex w-[200%] transition-transform duration-200 ease-out"
          style={{
            transform:
              activeMenu === "software" ? "translateX(0%)" : "translateX(-50%)",
          }}
        >
          <div className="w-1/2 shrink-0 bg-transparent">
            <div ref={softwareRef} className="p-5">
              <SoftwarePanelContent
                activeColumn={activeSoftwareColumn}
                onColumnHover={onColumnHover}
              />
            </div>
          </div>
          <div className="w-1/2 shrink-0 bg-transparent">
            <div ref={comparisonsRef} className="p-5">
              <ComparisonsPanelContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"software" | "comparisons">("software");
  const [activeSoftwareColumn, setActiveSoftwareColumn] = useState("operations");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSoftwareOpen, setMobileSoftwareOpen] = useState(false);
  const [mobileComparisonsOpen, setMobileComparisonsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerRect, setContainerRect] = useState<{
    left: number;
    bottom: number;
    width: number;
  } | null>(null);

  const { refs, context, floatingStyles } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom",
    strategy: "fixed",
    middleware: [
      offset(0),
      size({
        padding: 16,
        apply({ availableHeight, elements }) {
          Object.assign(elements.floating.style, { maxHeight: `${availableHeight}px` });
        },
      }),
    ],
  });

  const hover = useHover(context, {
    handleClose: safePolygon({ buffer: 8 }),
    restMs: 40,
    delay: { open: 50, close: 120 },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context, { escapeKey: true, outsidePress: true });
  const role = useRole(context, { role: "menu" });
  const click = useClick(context, { ignoreMouse: true });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role, click]);

  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const updateRect = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setContainerRect({
        left: rect.left,
        bottom: rect.bottom,
        width: rect.width,
      });
    };

    updateRect();
    window.addEventListener("resize", updateRect);
    return () => {
      window.removeEventListener("resize", updateRect);
    };
  }, [open]);

  const openMenu = useCallback((menu: "software" | "comparisons") => {
    setActiveMenu(menu);
    setOpen(true);
    if (menu === "software") setActiveSoftwareColumn("operations");
  }, []);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-neutral-200 bg-white sm:h-[72px]">
      <div
        ref={containerRef}
        className="relative mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded">
          <LogoIcon className="h-9 w-auto shrink-0" />
          <span className="text-[#1A2D48] text-base font-bold">BeltStack</span>
        </Link>

        <div className="flex items-center">
          <nav className="hidden items-center gap-3 md:flex" aria-label="Main">
            <div
              ref={refs.setReference}
              className="flex items-center"
              {...getReferenceProps()}
            >
              <button
                type="button"
                onPointerEnter={() => setActiveMenu("software")}
                onClick={() => openMenu("software")}
                className={`relative inline-flex items-center px-3 py-2 ${navItemClass} ${open && activeMenu === "software" ? "text-[#0f2440]" : ""}`}
                aria-expanded={open && activeMenu === "software"}
                aria-haspopup="true"
              >
                <span className="relative inline-block">
                  Software
                  <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#10B981] transition-transform duration-200 origin-left ${open && activeMenu === "software" ? "scale-x-100" : "scale-x-0"}`} />
                </span>
                <Chevron open={open && activeMenu === "software"} />
              </button>
              <button
                type="button"
                onPointerEnter={() => setActiveMenu("comparisons")}
                onClick={() => openMenu("comparisons")}
                className={`relative inline-flex items-center px-3 py-2 ${navItemClass} ${open && activeMenu === "comparisons" ? "text-[#0f2440]" : ""}`}
                aria-expanded={open && activeMenu === "comparisons"}
                aria-haspopup="true"
              >
                <span className="relative inline-block">
                  Comparisons
                  <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-[#10B981] transition-transform duration-200 origin-left ${open && activeMenu === "comparisons" ? "scale-x-100" : "scale-x-0"}`} />
                </span>
                <Chevron open={open && activeMenu === "comparisons"} />
              </button>
            </div>
            {SIMPLE_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className={`group relative inline-flex items-center px-3 py-2 ${navItemClass}`}>
                <span className="relative inline-block">
                  {label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-[#10B981] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {open && (() => {
          const floatingProps = getFloatingProps();
          const mergedStyle = {
            ...(floatingProps.style && typeof floatingProps.style === "object" ? floatingProps.style : {}),
            position: "fixed" as const,
            transform: "none",
            left: containerRect != null ? containerRect.left : undefined,
            top: containerRect != null ? containerRect.bottom : undefined,
            width: containerRect != null ? containerRect.width : undefined,
            maxHeight: floatingStyles.maxHeight,
          };
          return (
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              {...floatingProps}
              style={mergedStyle}
              className="z-50"
            >
              <MegaMenuViewport
                activeMenu={activeMenu}
                activeSoftwareColumn={activeSoftwareColumn}
                onColumnHover={setActiveSoftwareColumn}
              />
            </div>
          </FloatingPortal>
          );
        })()}

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-[#1A2D48] focus-within:border-neutral-300 focus-within:ring-1 focus-within:ring-neutral-200">
            <svg className="h-4 w-4 shrink-0 text-[#6E6E6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-32 border-0 bg-transparent pl-2 text-sm outline-none placeholder:text-[#6E6E6E] md:w-40"
              aria-label="Search"
            />
          </div>
          <Link href="/software" className={`hidden shrink-0 ${btnPrimary} sm:inline-block`}>
            Explore
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#1A2D48] hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <div>
              <button
                type="button"
                onClick={() => setMobileSoftwareOpen(!mobileSoftwareOpen)}
                className="flex w-full items-center justify-between py-2 text-left text-[15px] font-semibold text-[#1A2D48] hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                aria-expanded={mobileSoftwareOpen}
              >
                Software
                <Chevron open={mobileSoftwareOpen} />
              </button>
              {mobileSoftwareOpen && (
                <div className="ml-3 space-y-1 border-l-2 border-neutral-100 pl-3 pb-2">
                  {SOFTWARE_CATEGORIES.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-[#1A2D48] hover:text-[#10B981]">
                      {item.title}
                    </Link>
                  ))}
                  <Link href="/software" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm font-semibold text-[#10B981]">
                    View all software →
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                type="button"
                onClick={() => setMobileComparisonsOpen(!mobileComparisonsOpen)}
                className="flex w-full items-center justify-between py-2 text-left text-[15px] font-semibold text-[#1A2D48] hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                aria-expanded={mobileComparisonsOpen}
              >
                Comparisons
                <Chevron open={mobileComparisonsOpen} />
              </button>
              {mobileComparisonsOpen && (
                <div className="ml-3 space-y-1 border-l-2 border-neutral-100 pl-3 pb-2">
                  {COMPARISON_TYPES.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-[#1A2D48] hover:text-[#10B981]">
                      {item.title}
                    </Link>
                  ))}
                  <Link href="/comparisons" onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm font-semibold text-[#10B981]">
                    See all comparisons →
                  </Link>
                </div>
              )}
            </div>
            {SIMPLE_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)} className="py-2 text-[15px] font-semibold text-[#1A2D48] hover:text-[#10B981]">
                {label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2">
              <svg className="h-4 w-4 text-[#6E6E6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input type="search" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 border-0 bg-transparent py-1 text-sm outline-none" />
            </div>
            <Link href="/software" onClick={() => setMobileOpen(false)} className={`mt-2 inline-block text-center ${btnPrimary}`}>
              Explore
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

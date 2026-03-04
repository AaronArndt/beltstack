"use client";

import Link from "next/link";
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
    <svg className={className} width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M1.03403 29.6414V23.2948C1.03403 23.0024 1.32902 22.8024 1.60061 22.9105L20.8294 30.5646C21.7975 30.95 22.8754 30.9558 23.8476 30.5808L43.4878 23.0053C43.7587 22.9008 44.0502 23.1008 44.0502 23.3912V29.7416C44.0502 29.9132 43.9442 30.067 43.7838 30.1281L23.8314 37.729C22.8688 38.0958 21.804 38.0901 20.8454 37.7131L1.29629 30.0264C1.13806 29.9641 1.03403 29.8114 1.03403 29.6414Z" fill="#1A2D48"/>
      <path d="M33.6064 27.6737V33.5284C33.6064 33.7859 33.4474 34.0166 33.2068 34.1082L29.019 35.7036C28.6129 35.8583 28.1777 35.5584 28.1777 35.1238V29.289C28.1777 29.0325 28.3355 28.8025 28.5748 28.7101L32.7627 27.0948C33.1692 26.938 33.6064 27.238 33.6064 27.6737Z" fill="#1A2D48"/>
      <path d="M23.9473 29.3439L42.4577 22.2074C42.7243 22.1046 42.7219 21.7265 42.454 21.6271L23.8973 14.7445C22.9607 14.3971 21.9301 14.4004 20.9958 14.7538L2.82047 21.6278C2.55502 21.7282 2.55259 22.1028 2.81671 22.2067L20.9461 29.334C21.91 29.7129 22.981 29.7165 23.9473 29.3439Z" fill="white"/>
      <path d="M23.8111 28.9498L43.269 21.5837C43.538 21.4819 43.5356 21.1005 43.2653 21.0021L23.7616 13.8991C22.839 13.563 21.8268 13.5662 20.9063 13.9081L1.80201 21.0028C1.53423 21.1022 1.5318 21.4801 1.79829 21.583L20.8572 28.9402C21.8071 29.3068 22.8589 29.3103 23.8111 28.9498Z" fill="#10B981"/>
      <path d="M23.9473 23.7601L42.4577 16.6236C42.7243 16.5208 42.7219 16.1427 42.454 16.0433L23.8973 9.16068C22.9607 8.8133 21.9301 8.81661 20.9958 9.16998L2.82047 16.044C2.55502 16.1444 2.55259 16.519 2.81671 16.6229L20.9461 23.7502C21.91 24.1291 22.981 24.1327 23.9473 23.7601Z" fill="white"/>
      <path d="M23.8111 22.1251L43.269 14.759C43.538 14.6572 43.5356 14.2758 43.2653 14.1774L23.7616 7.07439C22.839 6.73836 21.8268 6.74156 20.9063 7.08342L1.80201 14.1781C1.53423 14.2775 1.5318 14.6554 1.79829 14.7583L20.8572 22.1155C21.8071 22.4822 22.8589 22.4856 23.8111 22.1251Z" fill="#10B981"/>
      <path d="M23.9473 16.9354L42.4577 9.79895C42.7243 9.69615 42.7219 9.31803 42.454 9.21865L23.8973 2.336C22.9607 1.98863 21.9301 1.99193 20.9958 2.3453L2.82047 9.21934C2.55502 9.31973 2.55259 9.69436 2.81671 9.79819L20.9461 16.9255C21.91 17.3045 22.981 17.308 23.9473 16.9354Z" fill="white"/>
      <path d="M23.8111 15.3004L43.269 7.93435C43.538 7.83252 43.5356 7.45116 43.2653 7.35274L23.7616 0.249714C22.839 -0.0863148 21.8268 -0.0831149 20.9063 0.25874L1.80201 7.35341C1.53423 7.45285 1.5318 7.83074 1.79829 7.93361L20.8572 15.2908C21.8071 15.6575 22.8589 15.6609 23.8111 15.3004Z" fill="#1A2D48"/>
    </svg>
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
          <span className="text-[#1A2D48] text-base font-bold">StackToolBelt</span>
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
              <Link key={href} href={href} className={`px-3 py-2 ${navItemClass}`}>
                {label}
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

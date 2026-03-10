"use client";

import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

const LINK_CLASS =
  "text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const CURRENT_CLASS = "text-gray-700 font-medium";

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

/**
 * Sitewide breadcrumb: gray parent links, gray-700 current page.
 * Use for all breadcrumb navs (hubs, reviews, compare, guides, best-for).
 */
export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-x-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href != null && item.href !== "" ? (
              <Link href={item.href} className={LINK_CLASS}>
                {item.label}
              </Link>
            ) : (
              <span className={CURRENT_CLASS} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

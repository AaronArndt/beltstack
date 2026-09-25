import Link from "next/link";
import { tableBodyRow, tableHeadRow, tableShell } from "@/lib/design-tokens";
import type { PublicTableRow } from "@/lib/research/pricing/publication";

const linkClass =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

export function CategoryDataTable({
  caption,
  smallerHeader,
  largerHeader,
  rows,
}: {
  caption: string;
  smallerHeader: string;
  largerHeader?: string;
  rows: PublicTableRow[];
}) {
  const hasLarger = Boolean(largerHeader) && rows.some((row) => row.largerDisplay != null);
  return (
    <div className={tableShell}>
      <table className="min-w-[640px] w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className={tableHeadRow}>
            <th scope="col" className="sticky left-0 z-10 bg-slate-50 px-3 py-2.5 font-semibold text-[#1A2D48]">
              Product
            </th>
            <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">
              Advertised entry
            </th>
            <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">
              Usable plan
            </th>
            <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">
              {smallerHeader}
            </th>
            {hasLarger ? (
              <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">
                {largerHeader}
              </th>
            ) : null}
            <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">
              Pricing visibility
            </th>
            <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">
              Verified
            </th>
            <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">
              Source
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.productSlug} className={tableBodyRow}>
              <th
                scope="row"
                className="sticky left-0 z-10 bg-white px-3 py-2.5 font-medium text-[#1A2D48]"
              >
                <Link href={row.reviewHref} className={linkClass}>
                  {row.productName}
                </Link>
              </th>
              <td className="px-3 py-2.5 text-[#57534E]">{row.advertisedEntry}</td>
              <td className="px-3 py-2.5 text-[#57534E]">{row.usablePlan}</td>
              <td className="px-3 py-2.5 tabular-nums text-[#1A2D48]">{row.smallerDisplay}</td>
              {hasLarger ? (
                <td className="px-3 py-2.5 tabular-nums text-[#1A2D48]">{row.largerDisplay}</td>
              ) : null}
              <td className="px-3 py-2.5 text-[#57534E]">{row.visibility}</td>
              <td className="px-3 py-2.5 text-[#57534E]">{row.verified}</td>
              <td className="px-3 py-2.5">
                <a
                  href={row.sourceUrl}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official source
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

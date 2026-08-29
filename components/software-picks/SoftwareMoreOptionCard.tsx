import Link from "next/link";

export type SoftwareMoreOptionCardProps = {
  logoSrc?: string;
  name: string;
  description: string;
  reviewHref: string;
};

/** Tertiary “also worth considering” mention for roundup MORE_OPTIONS sections. */
export function SoftwareMoreOptionCard({
  logoSrc,
  name,
  description,
  reviewHref,
}: SoftwareMoreOptionCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm">
      <div className="flex items-center gap-2">
        {logoSrc ? (
          <img src={logoSrc} alt="" className="h-10 w-auto max-w-[100px] object-contain" />
        ) : null}
        <h3 className="text-[#1A2D48] text-lg font-bold">
          <Link
            href={reviewHref}
            className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
          >
            {name}
          </Link>
        </h3>
      </div>
      <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{description}</p>
      <div className="mt-4 border-t border-stone-200 pt-4">
        <Link
          href={reviewHref}
          className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
        >
          Read review →
        </Link>
      </div>
    </article>
  );
}

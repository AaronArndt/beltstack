import Link from "next/link";

type QuickPick = {
  slug: string;
  name: string;
  badge: string;
  reviewHref?: string;
  description?: string;
};

export function RoundupQuickPicksSection({
  categoryLabel,
  picks,
  categoryPath,
}: {
  categoryLabel: string;
  picks: QuickPick[];
  categoryPath?: string;
}) {
  const shortlist = picks.slice(0, 6);

  return (
    <section id="quick-picks" className="scroll-mt-section border-b border-stone-200/80 bg-white py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
          <p className="text-xs text-[#57534E]">Top picks at a glance before the full reviews.</p>
          <h2 className="text-[#1A2D48] text-sm font-bold uppercase tracking-wide">Key takeaways</h2>
          <ul className="mt-3 space-y-2">
            {shortlist.map((pick, idx) => {
              const resolvedHref = pick.reviewHref ?? (categoryPath ? `${categoryPath}/review/${pick.slug}` : null);
              const label = idx === 0 ? "Best overall" : pick.badge;

              return (
                <li key={pick.slug} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" aria-hidden />
                  <span className="text-sm leading-relaxed text-[#57534E]">
                    <span className="font-semibold text-[#1A2D48]">{label}:</span>{" "}
                    {resolvedHref ? (
                      <Link href={resolvedHref} className="font-medium text-[#1A2D48] hover:text-[#10B981] hover:underline">
                        {pick.name}
                      </Link>
                    ) : (
                      <span className="font-medium text-[#1A2D48]">{pick.name}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-xs text-[#57534E]">Quick shortlist for teams comparing {categoryLabel}.</p>
        </div>
      </div>
    </section>
  );
}


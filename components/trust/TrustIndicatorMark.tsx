/**
 * Emerald dot for trust / validation rows (hero meta on home, hubs, best-of roundups).
 * Default size matches key takeaway list density (see Hub key takeaways: slightly smaller list bullets use h-1.5 inline).
 *
 * Do not use for long-form article `<ul>` content — keep those on prose / muted styles.
 */
export function TrustIndicatorMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-2 w-2 shrink-0 rounded-full bg-[#10B981] ${className}`}
      aria-hidden
    />
  );
}

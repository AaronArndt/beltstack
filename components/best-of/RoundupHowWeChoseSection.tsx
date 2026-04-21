import Link from "next/link";

export function RoundupHowWeChoseSection({
  categoryLabel,
  compareHref,
  guidesHref,
}: {
  categoryLabel: string;
  compareHref: string;
  guidesHref: string;
}) {
  return (
    <section id="how-we-chose" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 sm:mb-5">
          <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">How we chose these tools</h2>
          <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
          <p className="mt-1 text-[#57534E] text-sm sm:text-base">
            Editorial methodology focused on small service businesses, trade operators, and practical day-to-day workflows.
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#57534E]">
          <li>We evaluated usability, setup effort, and team adoption speed for non-enterprise operators.</li>
          <li>We compared pricing transparency, scaling behavior, and real upgrade pressure as teams grow.</li>
          <li>We prioritized workflow depth in core {categoryLabel} use cases, plus reporting and integration fit.</li>
          <li>We weighted operational relevance for service businesses, including trade-specific handoff and follow-up needs.</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-[#57534E]">
          Use our{" "}
          <Link href={compareHref} className="font-semibold text-[#10B981] hover:underline">
            comparison pages
          </Link>{" "}
          for head-to-head analysis and{" "}
          <Link href={guidesHref} className="font-semibold text-[#10B981] hover:underline">
            category guides
          </Link>{" "}
          for deeper implementation context.
        </p>
      </div>
    </section>
  );
}


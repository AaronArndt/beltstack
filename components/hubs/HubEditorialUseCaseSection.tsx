import Link from "next/link";
import type { ReactNode } from "react";
import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { sectionRuleAccent } from "@/lib/design-tokens";

const defaultLinkClass =
  "text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function HubSectionTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className={sectionRuleAccent} aria-hidden />
      {sub != null && sub.length > 0 && (
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>
      )}
    </div>
  );
}

export type HubEditorialUseCaseSectionProps = {
  sectionTitle: string;
  sectionSub: string;
  /** Short intro clarifying scenario vs identity vs guides */
  intro: ReactNode;
  blocks: readonly HubUseCaseEditorialBlock[];
  linkClassName?: string;
};

/**
 * Shared editorial “best [category] by use case” layout for hub pages (matches field-service pattern).
 */
export function HubEditorialUseCaseSection({
  sectionTitle,
  sectionSub,
  intro,
  blocks,
  linkClassName = defaultLinkClass,
}: HubEditorialUseCaseSectionProps) {
  return (
    <>
      <HubSectionTitle sub={sectionSub}>{sectionTitle}</HubSectionTitle>
      <div className="mt-1 max-w-3xl text-sm leading-relaxed text-[#57534E]">{intro}</div>
      <div className="mt-8 max-w-3xl space-y-10">
        {blocks.map((block) => (
          <div key={block.title}>
            <h3 className="text-lg font-bold text-[#1A2D48] sm:text-xl">{block.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#57534E] sm:text-base">{block.body}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {block.links.map((l) => (
                <Link key={`${l.href}-${l.label}`} href={l.href} className={linkClassName}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

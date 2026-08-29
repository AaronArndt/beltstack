import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { sectionRuleAccent } from "@/lib/design-tokens";

export type BestForHubDirectoryCard = {
  label: string;
  href: string;
  description: string;
};

export type BestForHubRoundupLink = {
  label: string;
  href: string;
};

export type BestForHubTemplateProps = {
  categoryLabel: string;
  categoryHref: string;
  breadcrumbCurrent: string;
  title: string;
  intro: string;
  roundupLink?: BestForHubRoundupLink;
  generalCards?: readonly BestForHubDirectoryCard[];
  tradeCards?: readonly BestForHubDirectoryCard[];
  ungroupedCards?: readonly BestForHubDirectoryCard[];
  ungroupedTitle?: string;
  ungroupedSub?: string;
  cardCta: string;
  directoryFooter?: ReactNode;
  afterDirectory?: ReactNode;
};

function DirectorySectionTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className={sectionRuleAccent} aria-hidden />
      {sub != null && sub.length > 0 ? <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p> : null}
    </div>
  );
}

function DirectoryGrid({
  cards,
  cardCta,
}: {
  cards: readonly BestForHubDirectoryCard[];
  cardCta: string;
}) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex min-h-[44px] flex-col rounded-lg border border-stone-200 bg-white px-4 py-3.5 hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
        >
          <h3 className="text-sm font-bold leading-snug text-[#1A2D48] group-hover:text-[#10B981] sm:text-base">
            {item.label}
          </h3>
          <p className="mt-1 flex-1 text-sm leading-relaxed text-[#57534E]">{item.description}</p>
          <span className="mt-2.5 text-sm font-semibold text-[#10B981] group-hover:underline">{cardCta}</span>
        </Link>
      ))}
    </div>
  );
}

/**
 * Shared presentation for category-level `/{category}/best-for` directories.
 * Pages adapt existing arrays into these props; this is not a canonical data model.
 */

export function BestForHubRelatedLinks({
  title,
  sub,
  links,
}: {
  title: string;
  sub: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DirectorySectionTitle sub={sub}>{title}</DirectorySectionTitle>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function BestForHubTemplate({
  categoryLabel,
  categoryHref,
  breadcrumbCurrent,
  title,
  intro,
  roundupLink,
  generalCards,
  tradeCards,
  ungroupedCards,
  ungroupedTitle = "Browse by use case",
  ungroupedSub,
  cardCta,
  directoryFooter,
  afterDirectory,
}: BestForHubTemplateProps) {
  const general = generalCards ?? [];
  const trade = tradeCards ?? [];
  const ungrouped = ungroupedCards ?? [];
  const hasGeneral = general.length > 0;
  const hasTrade = trade.length > 0;
  const grouped = hasGeneral || hasTrade;

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <Breadcrumb
              className="mb-4"
              items={[
                { label: "Home", href: "/" },
                { label: categoryLabel, href: categoryHref },
                { label: breadcrumbCurrent },
              ]}
            />
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">{intro}</p>
            {roundupLink != null ? (
              <p className="mt-5 max-w-3xl rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-[#57534E]">
                Looking for the overall ranking?{" "}
                <Link
                  href={roundupLink.href}
                  className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  {roundupLink.label} →
                </Link>
              </p>
            ) : null}
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {grouped ? (
              <div className="space-y-10">
                {hasGeneral ? (
                  <div>
                    <DirectorySectionTitle>General use cases</DirectorySectionTitle>
                    <DirectoryGrid cards={general} cardCta={cardCta} />
                  </div>
                ) : null}
                {hasTrade ? (
                  <div>
                    <DirectorySectionTitle>By trade or business type</DirectorySectionTitle>
                    <DirectoryGrid cards={trade} cardCta={cardCta} />
                  </div>
                ) : null}
              </div>
            ) : (
              <>
                <DirectorySectionTitle sub={ungroupedSub}>{ungroupedTitle}</DirectorySectionTitle>
                <DirectoryGrid cards={ungrouped} cardCta={cardCta} />
              </>
            )}
            {directoryFooter != null ? <div className="mt-6">{directoryFooter}</div> : null}
          </div>
        </section>

        {afterDirectory}
      </main>
      <Footer />
    </div>
  );
}

import type { SoftwarePickCategory } from "@/lib/data/softwarePickCards";

/** FAQ item (matches hub FaqItem shape). */
export type TradeHubFaqItem = { q: string; a: string };

/**
 * One row in the “core software stack” — category is flexible per trade.
 * Products resolve from the canonical SoftwarePick registry via `softwareCategory` + `productSlugs`.
 */
export type TradeHubCategoryStackItem = {
  /** Stable id for anchors / jump links */
  id: string;
  softwareCategory: SoftwarePickCategory;
  /** Section heading (e.g. “Field service management”) */
  heading: string;
  /** Why this category matters for this trade */
  body: string;
  /** 1–3 slugs from the canonical pick list for that category */
  productSlugs: readonly string[];
  /** Optional: override default category hub URL from `softwareCategory` */
  categoryHubHrefOverride?: string;
  /** Optional: override link label for the category hub CTA */
  categoryHubLinkLabel?: string;
};

/** Editorial “best for this trade” scenario block */
export type TradeHubUseCaseBlock = {
  title: string;
  body: string;
  links: readonly { label: string; href: string }[];
};

/** Subsection under “How to choose” */
export type TradeHubHowToSubsection = {
  title: string;
  body: string;
};

/** Identity / operating-model segment (optional per trade) */
export type TradeHubIdentitySegment = {
  title: string;
  body: string;
  links: readonly { label: string; href: string }[];
};

/** Grouped internal links for “next steps” */
export type TradeHubNextStepsGroup = {
  groupTitle: string;
  links: readonly { label: string; href: string; description?: string }[];
};

/** Full trade / industry hub — data-driven; no fixed category list. */
export type TradeHubDefinition = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  /** H1 */
  title: string;
  /** Hero lead paragraph */
  intro: string;
  /** Optional: extra hero line naming categories (plain text) */
  heroCategoryLine?: string;
  breadcrumbLabel: string;
  keyTakeaways: readonly { label: string; anchor: string }[];

  categoryStackSectionTitle: string;
  categoryStackSectionSub?: string;
  categoryStackIntro?: string;
  categoryStack: readonly TradeHubCategoryStackItem[];

  useCaseSectionTitle: string;
  useCaseSectionSub?: string;
  useCases: readonly TradeHubUseCaseBlock[];

  howToChooseTitle: string;
  howToChooseSub?: string;
  howToChooseSubsections: readonly TradeHubHowToSubsection[];

  identitySectionTitle?: string;
  identitySectionSub?: string;
  identitySegments?: readonly TradeHubIdentitySegment[];

  nextStepsTitle: string;
  nextStepsSub?: string;
  nextStepsGroups: readonly TradeHubNextStepsGroup[];

  faqTitle?: string;
  faqSub?: string;
  faqs?: readonly TradeHubFaqItem[];

  methodologyTitle?: string;
  methodologySub?: string;
  methodologyBullets?: readonly string[];
};

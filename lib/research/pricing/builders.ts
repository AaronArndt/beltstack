import { deriveTransparency } from "./formulas";
import {
  PRICING_DATASET_EDITION,
  PRICING_METHODOLOGY_VERSION,
  type AmountStatus,
  type PricingCategory,
  type PricingResearchRow,
  type ScenarioId,
} from "./types";

export const RESEARCH_DATE = "2026-09-25";

export type Draft = Omit<PricingResearchRow, "transparencyClass">;

export function finish(draft: Draft): PricingResearchRow {
  const withPlaceholder: PricingResearchRow = {
    ...draft,
    transparencyClass: "PARTIAL",
  };
  return {
    ...draft,
    transparencyClass: deriveTransparency(withPlaceholder),
  };
}

export function pair(
  shared: Omit<Draft, "scenarioId">,
  scenarioIds: readonly ScenarioId[],
): PricingResearchRow[] {
  return scenarioIds.map((scenarioId) => finish({ ...shared, scenarioId }));
}

export const naAmount = {
  extraSeatAmount: null as number | null,
  extraSeatAmountStatus: "NOT_APPLICABLE" as AmountStatus,
  requiredAddonAmount: null as number | null,
  requiredAddonAmountStatus: "NOT_APPLICABLE" as AmountStatus,
  onboardingAmount: null as number | null,
  onboardingAmountStatus: "NOT_APPLICABLE" as AmountStatus,
  minimumSeats: null as number | null,
};

export function identity(params: {
  category: PricingCategory;
  slug: string;
  productName: string;
  primarySourceUrl: string;
  evidenceIds: string[];
}): Pick<
  Draft,
  | "category"
  | "slug"
  | "productName"
  | "methodologyVersion"
  | "datasetEdition"
  | "primarySourceUrl"
  | "verifiedDate"
  | "evidenceIds"
> {
  return {
    ...params,
    methodologyVersion: PRICING_METHODOLOGY_VERSION,
    datasetEdition: PRICING_DATASET_EDITION,
    verifiedDate: RESEARCH_DATE,
  };
}

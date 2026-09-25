/**
 * BeltStack Scoring Methodology v1.0.
 *
 * Existing product ratings on the site were not produced by this formula
 * unless a product has a publishable StandardizedEditorialScore.
 * Do not backfill or auto-rescore. Do not sort recommendations by score.
 */

export const EDITORIAL_SCORE_METHODOLOGY_VERSION = "1.0" as const;

export const EDITORIAL_SCORE_DIMENSIONS = [
  "pricingValue",
  "features",
  "easeOfAdoptionAdmin",
  "support",
  "integrations",
  "workflowFit",
] as const;

export type EditorialScoreDimension = (typeof EDITORIAL_SCORE_DIMENSIONS)[number];

export const EDITORIAL_SCORE_DIMENSION_LABELS: Record<EditorialScoreDimension, string> = {
  pricingValue: "Pricing & Value",
  features: "Features & Capabilities",
  easeOfAdoptionAdmin: "Ease of Adoption & Administration",
  support: "Support & Documentation",
  integrations: "Integrations & Ecosystem",
  workflowFit: "Business / Workflow Fit",
};

/** Allowed dimension values: half-point steps from 1.0 to 5.0. */
export const EDITORIAL_DIMENSION_SCORE_STEPS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] as const;
export type EditorialDimensionScoreValue = (typeof EDITORIAL_DIMENSION_SCORE_STEPS)[number];

export const EDITORIAL_SCORE_CONFIDENCE_LEVELS = ["high", "medium", "low", "insufficient"] as const;
export type EditorialScoreConfidence = (typeof EDITORIAL_SCORE_CONFIDENCE_LEVELS)[number];

export type EditorialPublicationStatus = "publishable" | "incomplete";

export type EditorialScoreEvidenceNote = {
  sourceUrl: string;
  /** YYYY-MM or YYYY-MM-DD. Do not fabricate a day. */
  verified: string;
  fact: string;
};

export type EditorialDimensionEntry = {
  score: EditorialDimensionScoreValue;
  confidence: EditorialScoreConfidence;
  notes: EditorialScoreEvidenceNote[];
};

/** Numeric six-dimension breakdown. Overall is always derived from this. */
export type EditorialScoreBreakdown = {
  pricingValue: number;
  features: number;
  easeOfAdoptionAdmin: number;
  support: number;
  integrations: number;
  workflowFit: number;
};

/**
 * Stored standardized score. `overall` is never stored — call
 * `publishableOverallScore()` / `overallEditorialScore()`.
 * `publicationStatus` is never stored — call `editorialPublicationStatus()`.
 */
export type StandardizedEditorialScore = {
  methodologyVersion: typeof EDITORIAL_SCORE_METHODOLOGY_VERSION;
  /** YYYY-MM or YYYY-MM-DD of the scoring review. */
  lastReviewed?: string;
  dimensions: Record<EditorialScoreDimension, EditorialDimensionEntry>;
};

export function isEditorialDimensionScoreValue(value: number): value is EditorialDimensionScoreValue {
  return (EDITORIAL_DIMENSION_SCORE_STEPS as readonly number[]).includes(value);
}

export function editorialScoreBreakdown(score: StandardizedEditorialScore): EditorialScoreBreakdown {
  return {
    pricingValue: score.dimensions.pricingValue.score,
    features: score.dimensions.features.score,
    easeOfAdoptionAdmin: score.dimensions.easeOfAdoptionAdmin.score,
    support: score.dimensions.support.score,
    integrations: score.dimensions.integrations.score,
    workflowFit: score.dimensions.workflowFit.score,
  };
}

/** Equal-weight mean of six dimensions, rounded to one decimal. */
export function overallEditorialScore(breakdown: EditorialScoreBreakdown): number {
  const sum = EDITORIAL_SCORE_DIMENSIONS.reduce((acc, key) => acc + breakdown[key], 0);
  return Math.round((sum / EDITORIAL_SCORE_DIMENSIONS.length) * 10) / 10;
}

export function formatEditorialRating(score: number): string {
  return score.toFixed(1);
}

export function isPublishableEditorialScore(score: StandardizedEditorialScore): boolean {
  if (score.methodologyVersion !== EDITORIAL_SCORE_METHODOLOGY_VERSION) return false;
  const confidences: EditorialScoreConfidence[] = [];
  for (const key of EDITORIAL_SCORE_DIMENSIONS) {
    const entry = score.dimensions[key];
    if (!entry) return false;
    if (!isEditorialDimensionScoreValue(entry.score)) return false;
    if (entry.confidence === "insufficient" || entry.confidence === "low") return false;
    confidences.push(entry.confidence);
  }
  const highCount = confidences.filter((c) => c === "high").length;
  return highCount >= 4;
}

export function editorialPublicationStatus(score: StandardizedEditorialScore): EditorialPublicationStatus {
  return isPublishableEditorialScore(score) ? "publishable" : "incomplete";
}

/** Derived overall for a publishable score; otherwise null. Never accept a hand-typed overall. */
export function publishableOverallScore(score: StandardizedEditorialScore): number | null {
  if (!isPublishableEditorialScore(score)) return null;
  return overallEditorialScore(editorialScoreBreakdown(score));
}

export type RatingBreakdownDisplayItem = {
  category: string;
  score: string;
  explanation: string;
};

export function standardizedRatingBreakdown(score: StandardizedEditorialScore): RatingBreakdownDisplayItem[] {
  return EDITORIAL_SCORE_DIMENSIONS.map((key) => {
    const entry = score.dimensions[key];
    return {
      category: EDITORIAL_SCORE_DIMENSION_LABELS[key],
      score: formatEditorialRating(entry.score),
      explanation: entry.notes.map((n) => n.fact).join(" "),
    };
  });
}

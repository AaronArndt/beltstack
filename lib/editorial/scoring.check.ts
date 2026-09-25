/**
 * Lightweight Scoring Methodology v1.0 checks.
 * Run: npx --yes tsx lib/editorial/scoring.check.ts
 */

import { getCrmCanonicalRating } from "@/lib/data/crmCanonicalRating";
import { getCrmReviewBySlug } from "@/lib/data/crmReviews";
import { TOP_PICKS } from "@/lib/data/crmBestSoftware";
import { getCrmStandardizedScore, getCrmStandardizedSlugs } from "@/lib/data/crmStandardizedScores";
import {
  type EditorialScoreBreakdown,
  type EditorialScoreConfidence,
  type StandardizedEditorialScore,
  editorialPublicationStatus,
  isPublishableEditorialScore,
  overallEditorialScore,
  publishableOverallScore,
} from "@/lib/editorial/scoring";

const failures: string[] = [];

function assert(condition: boolean, message: string) {
  if (!condition) failures.push(message);
}

function cloneScore(overrides?: {
  confidences?: Partial<Record<keyof StandardizedEditorialScore["dimensions"], EditorialScoreConfidence>>;
}): StandardizedEditorialScore {
  const base = getCrmStandardizedScore("hubspot");
  if (!base) throw new Error("HubSpot standardized score missing");
  return {
    ...base,
    dimensions: {
      pricingValue: {
        ...base.dimensions.pricingValue,
        confidence: overrides?.confidences?.pricingValue ?? base.dimensions.pricingValue.confidence,
      },
      features: {
        ...base.dimensions.features,
        confidence: overrides?.confidences?.features ?? base.dimensions.features.confidence,
      },
      easeOfAdoptionAdmin: {
        ...base.dimensions.easeOfAdoptionAdmin,
        confidence: overrides?.confidences?.easeOfAdoptionAdmin ?? base.dimensions.easeOfAdoptionAdmin.confidence,
      },
      support: {
        ...base.dimensions.support,
        confidence: overrides?.confidences?.support ?? base.dimensions.support.confidence,
      },
      integrations: {
        ...base.dimensions.integrations,
        confidence: overrides?.confidences?.integrations ?? base.dimensions.integrations.confidence,
      },
      workflowFit: {
        ...base.dimensions.workflowFit,
        confidence: overrides?.confidences?.workflowFit ?? base.dimensions.workflowFit.confidence,
      },
    },
  };
}

const roundingCases: { breakdown: EditorialScoreBreakdown; expected: number; label: string }[] = [
  {
    label: "HubSpot 24.5/6 → 4.1",
    expected: 4.1,
    breakdown: {
      pricingValue: 4.0,
      features: 4.5,
      easeOfAdoptionAdmin: 3.5,
      support: 4.0,
      integrations: 4.5,
      workflowFit: 4.0,
    },
  },
  {
    label: "Salesforce 20.5/6 → 3.4",
    expected: 3.4,
    breakdown: {
      pricingValue: 2.5,
      features: 5.0,
      easeOfAdoptionAdmin: 2.0,
      support: 3.5,
      integrations: 5.0,
      workflowFit: 2.5,
    },
  },
  {
    label: "Zoho 24.0/6 → 4.0",
    expected: 4.0,
    breakdown: {
      pricingValue: 4.5,
      features: 4.5,
      easeOfAdoptionAdmin: 3.0,
      support: 4.0,
      integrations: 4.0,
      workflowFit: 4.0,
    },
  },
  {
    label: "Pipedrive 23.5/6 → 3.9",
    expected: 3.9,
    breakdown: {
      pricingValue: 4.0,
      features: 4.0,
      easeOfAdoptionAdmin: 4.0,
      support: 3.5,
      integrations: 4.0,
      workflowFit: 4.0,
    },
  },
  {
    label: "Close 21.0/6 → 3.5",
    expected: 3.5,
    breakdown: {
      pricingValue: 3.0,
      features: 4.0,
      easeOfAdoptionAdmin: 4.0,
      support: 3.5,
      integrations: 3.5,
      workflowFit: 3.0,
    },
  },
];

for (const test of roundingCases) {
  assert(overallEditorialScore(test.breakdown) === test.expected, `overall/rounding: ${test.label}`);
}

assert(isPublishableEditorialScore(cloneScore()) === true, "gate: 4 HIGH + 2 MEDIUM passes");
assert(editorialPublicationStatus(cloneScore()) === "publishable", "gate: status publishable");

const lowBlocked = cloneScore({ confidences: { support: "low" } });
assert(isPublishableEditorialScore(lowBlocked) === false, "gate: LOW blocks publication");
assert(publishableOverallScore(lowBlocked) === null, "gate: LOW yields no overall");

const insufficientBlocked = cloneScore({ confidences: { support: "insufficient" } });
assert(isPublishableEditorialScore(insufficientBlocked) === false, "gate: INSUFFICIENT blocks publication");

const threeHigh = cloneScore({
  confidences: {
    pricingValue: "high",
    features: "high",
    integrations: "high",
    easeOfAdoptionAdmin: "medium",
    support: "medium",
    workflowFit: "medium",
  },
});
assert(isPublishableEditorialScore(threeHigh) === false, "gate: only 3 HIGH blocks publication");

const expectedOverall: Record<string, string> = {
  hubspot: "4.1",
  salesforce: "3.4",
  "zoho-crm": "4.0",
  pipedrive: "3.9",
  close: "3.5",
};

assert(getCrmStandardizedSlugs().sort().join(",") === ["close", "hubspot", "pipedrive", "salesforce", "zoho-crm"].join(","), "only five CRM slugs migrated");

for (const [slug, expected] of Object.entries(expectedOverall)) {
  const review = getCrmReviewBySlug(slug);
  assert(review?.rating === expected, `migrated review ${slug} should be ${expected}, got ${review?.rating}`);
  assert(review?.ratingBreakdown?.length === 6, `migrated review ${slug} should show six dimensions`);
  assert(getCrmCanonicalRating(slug, "9.9") === expected, `resolver ${slug} should ignore fallback`);
}

const freshsales = getCrmReviewBySlug("freshsales");
assert(freshsales?.rating === "4.3", `Freshsales should remain 4.3, got ${freshsales?.rating}`);
assert(getCrmStandardizedScore("freshsales") === undefined, "Freshsales must not have a standardized object");
assert(freshsales?.ratingBreakdown?.length === 5, "Freshsales keeps the old five-dimension breakdown");
assert(freshsales?.lastReviewed == null, "Freshsales must not receive a fake lastReviewed date");
assert(getCrmCanonicalRating("freshsales", "4.3") === "4.3", "non-migrated resolver keeps fallback");

assert(
  TOP_PICKS.map((p) => p.slug).join(",") === "hubspot,salesforce,zoho-crm,pipedrive,monday-crm",
  `TOP_PICKS order must not be sorted by rating: ${TOP_PICKS.map((p) => p.slug).join(",")}`
);
assert(TOP_PICKS[0]?.badge === "Best overall CRM", "HubSpot remains Best overall");
assert(TOP_PICKS[1]?.badge === "Best for enterprise teams", "Salesforce remains Best for enterprise");
assert(TOP_PICKS[2]?.badge === "Best value CRM", "Zoho remains Best value");
assert(TOP_PICKS[3]?.badge === "Best for sales pipelines", "Pipedrive remains Best for sales pipelines");
assert(Number(TOP_PICKS[0]?.rating) < Number(TOP_PICKS[0] ? 4.6 : 0), "HubSpot rating changed without reordering");

if (failures.length) {
  console.error(`FAILED ${failures.length} check(s):`);
  for (const failure of failures) console.error(` - ${failure}`);
  process.exit(1);
}

console.log("editorial scoring checks passed");

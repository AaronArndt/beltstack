import {
  PRICING_DATASET_EDITION,
  PRICING_METHODOLOGY_VERSION,
} from "./types";

/**
 * Full v1 collection window. Start and end are actual verification dates.
 * Do not backdate. Window must remain <=45 days.
 */
export const pricingResearchMetadata = {
  methodologyVersion: PRICING_METHODOLOGY_VERSION,
  datasetEdition: PRICING_DATASET_EDITION,
  collectionMode: "COMPLETE" as const,
  verificationWindow: {
    start: "2026-09-25",
    end: "2026-09-25",
  },
} as const;

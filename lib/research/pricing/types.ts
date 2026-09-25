/**
 * Advertised vs Usable pricing research — Methodology v1.0 types.
 * Internal editorial dataset. Not a public page, CSV, or review overlay.
 */

export const PRICING_METHODOLOGY_VERSION = "1.0" as const;
export const PRICING_DATASET_EDITION = "2026" as const;

export type PricingCategory =
  | "crm"
  | "field-service"
  | "payroll"
  | "invoicing"
  | "scheduling"
  | "time-tracking";

export type ScenarioId =
  | "crm-5"
  | "crm-10"
  | "fsm-1-4"
  | "fsm-2-8"
  | "payroll-5"
  | "payroll-10"
  | "inv-5"
  | "sched-5"
  | "tt-5"
  | "tt-10";

/** Why a numeric field is null. Never encode these as null alone. */
export type AmountStatus =
  | "PUBLIC"
  | "UNKNOWN"
  | "NOT_DISCLOSED"
  | "QUOTE_REQUIRED"
  | "NOT_APPLICABLE"
  | "SOURCE_CONFLICT";

/** Billing cadence. Not the pricing unit. */
export type Cadence = "FREE" | "MONTHLY" | "ANNUAL" | "ANNUAL_BILLED_MONTHLY";

export type PricingUnit =
  | "USER"
  | "COMPANY"
  | "EMPLOYEE"
  | "WORKER"
  | "STAFF_CALENDAR"
  | "INCLUDED_CAP"
  | "BASE_PLUS_UNIT"
  | "QUOTE"
  | "FREE"
  | "NOT_APPLICABLE";

export type TransparencyClass = "HIGH" | "PARTIAL" | "QUOTE_REQUIRED";

export type ContractTerm = "MONTHLY" | "ANNUAL" | "MULTI_YEAR" | "QUOTE" | "NOT_DISCLOSED";

export type PayrollServiceClass = "FULL_SERVICE" | "SELF_SERVICE" | "PEO" | "EOR" | "NOT_APPLICABLE";

export type ChecklistResult = "PASS" | "FAIL" | "INDETERMINATE";

export type SourceRank = 1 | 2 | 3 | 4 | 5;

export type EvidenceField = {
  field: string;
  rawValue: string;
};

export type PricingEvidence = {
  evidenceId: string;
  sourceUrl: string;
  sourceRank: SourceRank;
  verifiedDate: string;
  fields: EvidenceField[];
  note: string;
};

export type ChecklistTick = {
  requirement: string;
  result: ChecklistResult;
  evidenceId: string;
};

/**
 * One product × one scenario.
 * Derived scenario costs are not stored here — compute via formulas.ts.
 */
export type PricingResearchRow = {
  category: PricingCategory;
  slug: string;
  productName: string;
  scenarioId: ScenarioId;
  methodologyVersion: typeof PRICING_METHODOLOGY_VERSION;
  datasetEdition: typeof PRICING_DATASET_EDITION;
  primarySourceUrl: string;
  verifiedDate: string;
  advertisedPlanName: string | null;
  advertisedAmount: number | null;
  advertisedCadence: Cadence | null;
  advertisedUnit: PricingUnit;
  advertisedStatus: AmountStatus;
  usablePlanName: string | null;
  usableBaseAmount: number | null;
  usableCadence: Cadence | null;
  usableUnit: PricingUnit;
  usableStatus: AmountStatus;
  includedSeats: number | null;
  extraSeatAmount: number | null;
  extraSeatAmountStatus: AmountStatus;
  requiredAddonAmount: number | null;
  requiredAddonAmountStatus: AmountStatus;
  onboardingAmount: number | null;
  onboardingAmountStatus: AmountStatus;
  /** Vendor-enforced floor on billable seats. Null means none disclosed. */
  minimumSeats: number | null;
  /**
   * Month-to-month list when the stored usable/advertised headline is annual-billed.
   * Optional dual-cadence fact; not a derived field.
   */
  monthToMonthAmount: number | null;
  monthToMonthAmountStatus: AmountStatus;
  transparencyClass: TransparencyClass;
  contractTerm: ContractTerm;
  payrollServiceClass: PayrollServiceClass;
  evidenceIds: string[];
};

export const CATEGORY_SCENARIOS: Record<PricingCategory, readonly ScenarioId[]> = {
  crm: ["crm-5", "crm-10"],
  "field-service": ["fsm-1-4", "fsm-2-8"],
  payroll: ["payroll-5", "payroll-10"],
  invoicing: ["inv-5"],
  scheduling: ["sched-5"],
  "time-tracking": ["tt-5", "tt-10"],
};

export const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

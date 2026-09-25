/**
 * Public-facing derivation for the 2026 advertised vs usable pricing study.
 * All headline numbers, chart series, tables, and CSV rows come from the frozen
 * canonical dataset. Do not store a second copy of research facts here.
 */

import { formatEditorialDate } from "@/lib/editorial/dates";
import type { SoftwarePickCategory } from "@/lib/data/softwarePickCards";
import { getSoftwarePickCategoryRoutes } from "@/lib/data/softwarePickCards";
import { getPricingEvidence } from "./evidence";
import {
  annualCashCommitment,
  annualMonthlyEquivalent,
  median,
  scenarioCostAme,
  type DerivedAmount,
} from "./formulas";
import { pricingResearchRows } from "./rows";
import {
  CATEGORY_SCENARIOS,
  type AmountStatus,
  type Cadence,
  type PricingCategory,
  type PricingResearchRow,
  type PricingUnit,
  type ScenarioId,
  type TransparencyClass,
} from "./types";
import {
  PRICING_STUDY_CSV_FILENAME,
  PRICING_STUDY_HUB_HREFS,
  PRICING_STUDY_ROUNDUP_HREFS,
} from "./publicationPaths";

export {
  PRICING_STUDY_CSV_FILENAME,
  PRICING_STUDY_CSV_PATH,
  PRICING_STUDY_DATASET_NAME,
  PRICING_STUDY_H1,
  PRICING_STUDY_HUB_CATEGORIES,
  PRICING_STUDY_HUB_HREFS,
  PRICING_STUDY_META_DESCRIPTION,
  PRICING_STUDY_PATH,
  PRICING_STUDY_ROUNDUP_HREFS,
  PRICING_STUDY_SEO_TITLE,
} from "./publicationPaths";

export const SMALLER_SCENARIO: Record<PricingCategory, ScenarioId> = {
  crm: "crm-5",
  "field-service": "fsm-1-4",
  payroll: "payroll-5",
  invoicing: "inv-5",
  scheduling: "sched-5",
  "time-tracking": "tt-5",
};

export const LARGER_SCENARIO: Partial<Record<PricingCategory, ScenarioId>> = {
  crm: "crm-10",
  "field-service": "fsm-2-8",
  payroll: "payroll-10",
  "time-tracking": "tt-10",
};

export const CATEGORY_LABELS: Record<PricingCategory, string> = {
  crm: "CRM",
  "field-service": "Field service",
  payroll: "Payroll",
  invoicing: "Invoicing",
  scheduling: "Scheduling",
  "time-tracking": "Time tracking",
};

export const SCENARIO_LABELS: Record<ScenarioId, string> = {
  "crm-5": "5 seats",
  "crm-10": "10 seats",
  "fsm-1-4": "1 office + 4 field",
  "fsm-2-8": "2 office + 8 field",
  "payroll-5": "5 employees",
  "payroll-10": "10 employees",
  "inv-5": "Invoicing workspace",
  "sched-5": "5 staff calendars",
  "tt-5": "5 users",
  "tt-10": "10 users",
};

export const CATEGORY_ORDER: PricingCategory[] = [
  "crm",
  "field-service",
  "payroll",
  "invoicing",
  "scheduling",
  "time-tracking",
];

export type PublicAmountStatus =
  | "Public"
  | "Quote required"
  | "Price unavailable"
  | "Not publicly disclosed"
  | "Doesn't meet this workflow"
  | "Official sources conflict"
  | "Not applicable";

export type PublicTransparency = "Public pricing" | "Partial pricing" | "Quote required";

export type ChartMoneyPoint = {
  slug: string;
  productName: string;
  advertised: DerivedAmount;
  usable: DerivedAmount;
  advertisedPlan: string | null;
  usablePlan: string | null;
  usableUsdUnavailable?: boolean;
};

export type DualScenarioPoint = {
  slug: string;
  productName: string;
  smaller: DerivedAmount;
  larger: DerivedAmount;
  usablePlan: string | null;
  largerUsablePlan: string | null;
  annotation?: string;
};

export type FsmVisibilityBucket = "public" | "quote" | "unavailable" | "doesnt-meet";

export type FsmVisibilityMember = {
  slug: string;
  productName: string;
  bucket: FsmVisibilityBucket;
};

export type PublicTableRow = {
  productName: string;
  productSlug: string;
  reviewHref: string;
  advertisedEntry: string;
  usablePlan: string;
  smallerDisplay: string;
  largerDisplay: string | null;
  visibility: PublicTransparency;
  verified: string;
  sourceUrl: string;
};

export type CsvStudyRow = {
  datasetEdition: string;
  verifiedDate: string;
  category: PricingCategory;
  productName: string;
  productSlug: string;
  scenario: ScenarioId;
  advertisedPlan: string;
  advertisedAmount: number | null;
  advertisedCadence: string;
  advertisedUnit: string;
  advertisedStatus: PublicAmountStatus | "Public";
  usablePlan: string;
  usableStatus: PublicAmountStatus;
  usableCadence: string;
  usableUnit: string;
  usableScenarioCostMonthlyEquivalent: number | null;
  annualCashCommitment: number | null;
  transparencyClass: PublicTransparency;
  contractTerm: string;
  payrollServiceClass: string;
  sourceUrl: string;
};

function identityKey(row: PricingResearchRow): string {
  return `${row.category}::${row.slug}`;
}

export function uniqueProductIdentities(rows: readonly PricingResearchRow[] = pricingResearchRows): number {
  return new Set(rows.map(identityKey)).size;
}

export function smallerScenarioRows(
  category?: PricingCategory,
  rows: readonly PricingResearchRow[] = pricingResearchRows,
): PricingResearchRow[] {
  return rows.filter((row) => {
    if (category && row.category !== category) return false;
    return row.scenarioId === SMALLER_SCENARIO[row.category];
  });
}

export function rowsForScenario(
  category: PricingCategory,
  scenarioId: ScenarioId,
  rows: readonly PricingResearchRow[] = pricingResearchRows,
): PricingResearchRow[] {
  return rows.filter((row) => row.category === category && row.scenarioId === scenarioId);
}

export function advertisedEntryAme(row: PricingResearchRow): DerivedAmount {
  if (row.advertisedStatus !== "PUBLIC") {
    return { amount: null, status: row.advertisedStatus };
  }
  if (row.advertisedCadence === "FREE") {
    return { amount: 0, status: "PUBLIC" };
  }
  if (row.advertisedAmount === null || row.advertisedCadence === null) {
    return { amount: null, status: row.advertisedStatus };
  }
  return {
    amount: annualMonthlyEquivalent(row.advertisedAmount, row.advertisedCadence),
    status: "PUBLIC",
  };
}

export function isNumericPublic(derived: DerivedAmount): derived is { amount: number; status: "PUBLIC" } {
  return derived.status === "PUBLIC" && derived.amount !== null;
}

export function isComparableProduct(row: PricingResearchRow): boolean {
  return isNumericPublic(advertisedEntryAme(row)) && isNumericPublic(scenarioCostAme(row));
}

export function namedPlanChanged(row: PricingResearchRow): boolean {
  if (!isComparableProduct(row)) return false;
  const advertised = (row.advertisedPlanName ?? "").trim();
  const usable = (row.usablePlanName ?? "").trim();
  return advertised !== usable;
}

export function publicAmountStatus(status: AmountStatus, context: "advertised" | "usable"): PublicAmountStatus {
  switch (status) {
    case "PUBLIC":
      return "Public";
    case "QUOTE_REQUIRED":
      return "Quote required";
    case "UNKNOWN":
      return "Price unavailable";
    case "NOT_DISCLOSED":
      return "Not publicly disclosed";
    case "SOURCE_CONFLICT":
      return "Official sources conflict";
    case "NOT_APPLICABLE":
      return context === "usable" ? "Doesn't meet this workflow" : "Not applicable";
  }
}

export function publicTransparency(value: TransparencyClass): PublicTransparency {
  switch (value) {
    case "HIGH":
      return "Public pricing";
    case "PARTIAL":
      return "Partial pricing";
    case "QUOTE_REQUIRED":
      return "Quote required";
  }
}

export function officialSourceUrl(row: PricingResearchRow): string {
  const firstId = row.evidenceIds[0];
  if (firstId) {
    return getPricingEvidence(firstId).sourceUrl;
  }
  return row.primarySourceUrl;
}

export function reviewHref(category: PricingCategory, slug: string): string {
  return getSoftwarePickCategoryRoutes(category as SoftwarePickCategory).getReviewUrl(slug);
}

export function roundMoney(amount: number): number {
  return Math.round(Number((amount * 100).toFixed(8))) / 100;
}

export function formatUsd(amount: number): string {
  if (amount === 0) return "$0";
  const rounded = roundMoney(amount);
  if (Number.isInteger(rounded)) return `$${rounded}`;
  return `$${rounded.toFixed(2)}`;
}

export function formatDerivedMoney(derived: DerivedAmount, context: "advertised" | "usable"): string {
  if (isNumericPublic(derived)) return formatUsd(derived.amount);
  return publicAmountStatus(derived.status, context);
}

function unitSuffix(unit: PricingUnit): string {
  switch (unit) {
    case "USER":
      return "/user";
    case "STAFF_CALENDAR":
      return "/calendar";
    case "EMPLOYEE":
    case "WORKER":
      return "/person";
    default:
      return "";
  }
}

function cadenceSuffix(cadence: Cadence | null): string {
  if (cadence === "ANNUAL_BILLED_MONTHLY") return "/mo billed annually";
  if (cadence === "ANNUAL") return "/year";
  if (cadence === "MONTHLY") return "/mo";
  return "";
}

export function formatAdvertisedEntry(row: PricingResearchRow): string {
  if (row.advertisedStatus !== "PUBLIC") {
    return publicAmountStatus(row.advertisedStatus, "advertised");
  }
  if (row.advertisedCadence === "FREE") return "Free";
  if (row.advertisedAmount === null) {
    return publicAmountStatus(row.advertisedStatus, "advertised");
  }
  if (row.advertisedUnit === "BASE_PLUS_UNIT" && row.extraSeatAmountStatus === "PUBLIC" && row.extraSeatAmount !== null) {
    return `${formatUsd(row.advertisedAmount)} + ${formatUsd(row.extraSeatAmount)}/person${cadenceSuffix(row.advertisedCadence)}`;
  }
  return `${formatUsd(row.advertisedAmount)}${unitSuffix(row.advertisedUnit)}${cadenceSuffix(row.advertisedCadence)}`;
}

export function formatUsablePlan(row: PricingResearchRow): string {
  if (row.usableStatus === "NOT_APPLICABLE") return publicAmountStatus(row.usableStatus, "usable");
  if (row.usablePlanName && row.usablePlanName.trim()) return row.usablePlanName;
  return publicAmountStatus(row.usableStatus, "usable");
}

export function scenarioMedian(
  category: PricingCategory,
  scenarioId: ScenarioId,
  options?: { payrollFullServiceOnly?: boolean },
): { median: number | null; numericN: number; n: number } {
  let rows = rowsForScenario(category, scenarioId);
  if (options?.payrollFullServiceOnly) {
    rows = rows.filter((row) => row.payrollServiceClass === "FULL_SERVICE");
  }
  const numeric = rows.map((row) => scenarioCostAme(row)).filter(isNumericPublic).map((d) => d.amount);
  return {
    median: numeric.length >= 5 ? median(numeric) : null,
    numericN: numeric.length,
    n: rows.length,
  };
}

function sortByUsableThenName(a: ChartMoneyPoint, b: ChartMoneyPoint): number {
  const aUsable = a.usable;
  const bUsable = b.usable;
  if (isNumericPublic(aUsable) && isNumericPublic(bUsable) && aUsable.amount !== bUsable.amount) {
    return aUsable.amount - bUsable.amount;
  }
  if (isNumericPublic(aUsable) && !isNumericPublic(bUsable)) return -1;
  if (!isNumericPublic(aUsable) && isNumericPublic(bUsable)) return 1;
  return a.productName.localeCompare(b.productName);
}

function sortDualBySmaller(a: DualScenarioPoint, b: DualScenarioPoint): number {
  const aSmaller = a.smaller;
  const bSmaller = b.smaller;
  if (isNumericPublic(aSmaller) && isNumericPublic(bSmaller) && aSmaller.amount !== bSmaller.amount) {
    return aSmaller.amount - bSmaller.amount;
  }
  if (isNumericPublic(aSmaller) && !isNumericPublic(bSmaller)) return -1;
  if (!isNumericPublic(aSmaller) && isNumericPublic(bSmaller)) return 1;
  return a.productName.localeCompare(b.productName);
}

export function schedulingChartSeries(): ChartMoneyPoint[] {
  return smallerScenarioRows("scheduling")
    .map((row) => {
      const usable = scenarioCostAme(row);
      return {
        slug: row.slug,
        productName: row.productName,
        advertised: advertisedEntryAme(row),
        usable,
        advertisedPlan: row.advertisedPlanName,
        usablePlan: row.usablePlanName,
        usableUsdUnavailable: usable.status === "NOT_DISCLOSED" || usable.status === "UNKNOWN",
      };
    })
    .sort(sortByUsableThenName);
}

export function fsmVisibilityBucket(row: PricingResearchRow): FsmVisibilityBucket {
  if (row.usableStatus === "NOT_APPLICABLE") return "doesnt-meet";
  if (row.usableStatus === "QUOTE_REQUIRED") return "quote";
  const cost = scenarioCostAme(row);
  if (isNumericPublic(cost)) return "public";
  return "unavailable";
}

export function fsmVisibilityMembers(): FsmVisibilityMember[] {
  return smallerScenarioRows("field-service")
    .map((row) => ({
      slug: row.slug,
      productName: row.productName,
      bucket: fsmVisibilityBucket(row),
    }))
    .sort((a, b) => a.productName.localeCompare(b.productName));
}

export function crmSeatChartSeries(): DualScenarioPoint[] {
  const smaller = smallerScenarioRows("crm");
  const points: DualScenarioPoint[] = [];
  for (const row of smaller) {
    const smallCost = scenarioCostAme(row);
    if (!isNumericPublic(smallCost)) continue;
    const larger = pricingResearchRows.find((r) => r.category === "crm" && r.slug === row.slug && r.scenarioId === "crm-10");
    if (!larger) continue;
    const largeCost = scenarioCostAme(larger);
    if (!isNumericPublic(largeCost)) continue;
    points.push({
      slug: row.slug,
      productName: row.productName,
      smaller: smallCost,
      larger: largeCost,
      usablePlan: row.usablePlanName,
      largerUsablePlan: larger.usablePlanName,
    });
  }
  return points.sort(sortDualBySmaller);
}

export function payrollFullServiceChartSeries(): DualScenarioPoint[] {
  const smaller = smallerScenarioRows("payroll").filter((row) => row.payrollServiceClass === "FULL_SERVICE");
  const points: DualScenarioPoint[] = [];
  for (const row of smaller) {
    const smallCost = scenarioCostAme(row);
    if (!isNumericPublic(smallCost)) continue;
    const larger = pricingResearchRows.find(
      (r) => r.category === "payroll" && r.slug === row.slug && r.scenarioId === "payroll-10",
    );
    if (!larger) continue;
    const largeCost = scenarioCostAme(larger);
    if (!isNumericPublic(largeCost)) continue;
    points.push({
      slug: row.slug,
      productName: row.productName,
      smaller: smallCost,
      larger: largeCost,
      usablePlan: row.usablePlanName,
      largerUsablePlan: larger.usablePlanName,
    });
  }
  return points.sort(sortDualBySmaller);
}

export function timeTrackingChartSeries(): DualScenarioPoint[] {
  const smaller = smallerScenarioRows("time-tracking");
  const points: DualScenarioPoint[] = [];
  for (const row of smaller) {
    const smallCost = scenarioCostAme(row);
    const larger = pricingResearchRows.find(
      (r) => r.category === "time-tracking" && r.slug === row.slug && r.scenarioId === "tt-10",
    );
    if (!larger) continue;
    points.push({
      slug: row.slug,
      productName: row.productName,
      smaller: smallCost,
      larger: scenarioCostAme(larger),
      usablePlan: row.usablePlanName,
      largerUsablePlan: larger.usablePlanName,
      annotation:
        row.slug === "clockify"
          ? "Free → Basic"
          : row.slug === "everhour"
            ? "Free → Team"
            : row.slug === "timely"
              ? "Starter → Premium"
              : undefined,
    });
  }
  return points.sort(sortDualBySmaller);
}

function categoryTableRows(category: PricingCategory): PublicTableRow[] {
  const smaller = smallerScenarioRows(category);
  const largerId = LARGER_SCENARIO[category];
  return smaller
    .map((row) => {
      const larger = largerId
        ? pricingResearchRows.find((r) => r.category === category && r.slug === row.slug && r.scenarioId === largerId)
        : undefined;
      return {
        productName: row.productName,
        productSlug: row.slug,
        reviewHref: reviewHref(category, row.slug),
        advertisedEntry: formatAdvertisedEntry(row),
        usablePlan: formatUsablePlan(row),
        smallerDisplay: formatDerivedMoney(scenarioCostAme(row), "usable"),
        largerDisplay: larger ? formatDerivedMoney(scenarioCostAme(larger), "usable") : null,
        visibility: publicTransparency(row.transparencyClass),
        verified: formatEditorialDate(row.verifiedDate),
        sourceUrl: officialSourceUrl(row),
      };
    })
    .sort((a, b) => a.productName.localeCompare(b.productName));
}

function csvNumber(value: number | null): string {
  if (value === null) return "";
  if (Object.is(value, -0)) return "0";
  if (Number.isInteger(value)) return String(value);
  return String(roundMoney(value));
}

function csvEscape(value: string): string {
  if (/[",\n\r]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

export const CSV_COLUMNS = [
  "datasetEdition",
  "verifiedDate",
  "category",
  "productName",
  "productSlug",
  "scenario",
  "advertisedPlan",
  "advertisedAmount",
  "advertisedCadence",
  "advertisedUnit",
  "advertisedStatus",
  "usablePlan",
  "usableStatus",
  "usableCadence",
  "usableUnit",
  "usableScenarioCostMonthlyEquivalent",
  "annualCashCommitment",
  "transparencyClass",
  "contractTerm",
  "payrollServiceClass",
  "sourceUrl",
] as const;

export function buildCsvStudyRows(rows: readonly PricingResearchRow[] = pricingResearchRows): CsvStudyRow[] {
  return [...rows]
    .sort((a, b) => {
      const cat = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
      if (cat !== 0) return cat;
      const name = a.productName.localeCompare(b.productName);
      if (name !== 0) return name;
      return a.scenarioId.localeCompare(b.scenarioId);
    })
    .map((row) => {
      const usable = scenarioCostAme(row);
      const advertisedNumeric = row.advertisedStatus === "PUBLIC" && row.advertisedAmount !== null;
      return {
        datasetEdition: row.datasetEdition,
        verifiedDate: row.verifiedDate,
        category: row.category,
        productName: row.productName,
        productSlug: row.slug,
        scenario: row.scenarioId,
        advertisedPlan: row.advertisedPlanName ?? "",
        advertisedAmount: advertisedNumeric ? row.advertisedAmount : null,
        advertisedCadence: row.advertisedCadence ?? "",
        advertisedUnit: row.advertisedUnit,
        advertisedStatus: publicAmountStatus(row.advertisedStatus, "advertised"),
        usablePlan: row.usablePlanName ?? "",
        usableStatus: publicAmountStatus(row.usableStatus, "usable"),
        usableCadence: row.usableCadence ?? "",
        usableUnit: row.usableUnit,
        usableScenarioCostMonthlyEquivalent: isNumericPublic(usable) ? usable.amount : null,
        annualCashCommitment: isNumericPublic(usable) ? annualCashCommitment(usable.amount) : null,
        transparencyClass: publicTransparency(row.transparencyClass),
        contractTerm: row.contractTerm,
        payrollServiceClass: row.payrollServiceClass,
        sourceUrl: officialSourceUrl(row),
      };
    });
}

export function serializePricingStudyCsv(rows: readonly PricingResearchRow[] = pricingResearchRows): string {
  const data = buildCsvStudyRows(rows);
  const lines = [CSV_COLUMNS.join(",")];
  for (const row of data) {
    lines.push(
      [
        csvEscape(row.datasetEdition),
        csvEscape(row.verifiedDate),
        csvEscape(row.category),
        csvEscape(row.productName),
        csvEscape(row.productSlug),
        csvEscape(row.scenario),
        csvEscape(row.advertisedPlan),
        csvNumber(row.advertisedAmount),
        csvEscape(row.advertisedCadence),
        csvEscape(row.advertisedUnit),
        csvEscape(row.advertisedStatus),
        csvEscape(row.usablePlan),
        csvEscape(row.usableStatus),
        csvEscape(row.usableCadence),
        csvEscape(row.usableUnit),
        csvNumber(row.usableScenarioCostMonthlyEquivalent),
        csvNumber(row.annualCashCommitment),
        csvEscape(row.transparencyClass),
        csvEscape(row.contractTerm),
        csvEscape(row.payrollServiceClass),
        csvEscape(row.sourceUrl),
      ].join(","),
    );
  }
  return `${lines.join("\n")}\n`;
}

export type PricingStudyPublication = ReturnType<typeof getPricingStudyPublication>;

export function getPricingStudyPublication() {
  const identities = smallerScenarioRows();
  const comparable = identities.filter(isComparableProduct);
  const planChanges = comparable.filter(namedPlanChanged);
  const fsmRows = smallerScenarioRows("field-service");
  const fsmMembers = fsmVisibilityMembers();
  const schedulingRows = smallerScenarioRows("scheduling");
  const schedulingFree = schedulingRows.filter(
    (row) => row.advertisedStatus === "PUBLIC" && row.advertisedCadence === "FREE",
  );
  const schedulingFreeSurvivors = schedulingFree.filter((row) => {
    const cost = scenarioCostAme(row);
    return isNumericPublic(cost) && cost.amount === 0;
  });
  const schedulingFreePaidPublic = schedulingFree.filter((row) => {
    const cost = scenarioCostAme(row);
    return isNumericPublic(cost) && cost.amount > 0;
  });
  const schedulingFreeUsdUnavailable = schedulingFree.filter((row) => {
    const cost = scenarioCostAme(row);
    return cost.status === "NOT_DISCLOSED" || cost.status === "UNKNOWN";
  });

  const visibilityCounts = {
    public: identities.filter((row) => row.transparencyClass === "HIGH").length,
    partial: identities.filter((row) => row.transparencyClass === "PARTIAL").length,
    quote: identities.filter((row) => row.transparencyClass === "QUOTE_REQUIRED").length,
  };

  const crmRows = smallerScenarioRows("crm");
  const crmFreeAdvertised = crmRows.filter(
    (row) => row.advertisedStatus === "PUBLIC" && row.advertisedCadence === "FREE",
  );
  const crmFreeSurvivors = crmFreeAdvertised.filter((row) => {
    const cost = scenarioCostAme(row);
    return isNumericPublic(cost) && cost.amount === 0;
  });
  const crmNumeric = crmSeatChartSeries();
  const crmSamePlanAtTen = crmNumeric.filter((point) => point.usablePlan === point.largerUsablePlan);

  const invoicingRows = smallerScenarioRows("invoicing");
  const invoicingComparable = invoicingRows.filter(isComparableProduct);
  const invoicingSamePlan = invoicingComparable.filter((row) => !namedPlanChanged(row));
  const invoicingFreeUsable = invoicingRows.filter((row) => {
    const cost = scenarioCostAme(row);
    return isNumericPublic(cost) && cost.amount === 0;
  });

  const payrollRows = smallerScenarioRows("payroll");
  const payrollFullService = payrollRows.filter((row) => row.payrollServiceClass === "FULL_SERVICE");
  const payrollFullServiceNumeric = payrollFullService.filter((row) => isNumericPublic(scenarioCostAme(row)));
  const payrollFullServiceQuote = payrollFullService.filter((row) => row.usableStatus === "QUOTE_REQUIRED");
  const payrollPeo = payrollRows.filter((row) => row.payrollServiceClass === "PEO" || row.payrollServiceClass === "EOR");

  const ttRows = smallerScenarioRows("time-tracking");
  const ttFreeAdvertised = ttRows.filter(
    (row) => row.advertisedStatus === "PUBLIC" && row.advertisedCadence === "FREE",
  );
  const ttFreeAtFive = ttFreeAdvertised.filter((row) => {
    const cost = scenarioCostAme(row);
    return isNumericPublic(cost) && cost.amount === 0;
  });
  const ttFreeAtTen = ttFreeAdvertised.filter((row) => {
    const ten = pricingResearchRows.find((r) => r.category === "time-tracking" && r.slug === row.slug && r.scenarioId === "tt-10");
    if (!ten) return false;
    const cost = scenarioCostAme(ten);
    return isNumericPublic(cost) && cost.amount === 0;
  });
  const ttPaidAtFive = ttFreeAdvertised.filter((row) => {
    const cost = scenarioCostAme(row);
    return isNumericPublic(cost) && cost.amount > 0;
  });

  const csvRows = buildCsvStudyRows();
  const verifiedDate = identities[0]?.verifiedDate ?? "2026-09-25";

  return {
    products: uniqueProductIdentities(),
    rows: pricingResearchRows.length,
    categories: CATEGORY_ORDER.length,
    verifiedDate,
    verifiedDisplay: formatEditorialDate(verifiedDate),
    comparable: { numerator: planChanges.length, denominator: comparable.length },
    fsmQuote: {
      numerator: fsmMembers.filter((m) => m.bucket === "quote").length,
      denominator: fsmRows.length,
    },
    fsmVisibility: {
      public: fsmMembers.filter((m) => m.bucket === "public").length,
      quote: fsmMembers.filter((m) => m.bucket === "quote").length,
      unavailable: fsmMembers.filter((m) => m.bucket === "unavailable").length,
      doesntMeet: fsmMembers.filter((m) => m.bucket === "doesnt-meet").length,
      members: fsmMembers,
      publicSlugs: fsmMembers.filter((m) => m.bucket === "public").map((m) => m.slug).sort(),
      quoteSlugs: fsmMembers.filter((m) => m.bucket === "quote").map((m) => m.slug).sort(),
      unavailableSlugs: fsmMembers.filter((m) => m.bucket === "unavailable").map((m) => m.slug).sort(),
      doesntMeetSlugs: fsmMembers.filter((m) => m.bucket === "doesnt-meet").map((m) => m.slug).sort(),
    },
    schedulingFree: {
      advertised: schedulingFree.length,
      survivors: schedulingFreeSurvivors.map((row) => row.productName),
      survivorSlugs: schedulingFreeSurvivors.map((row) => row.slug),
      paidPublic: schedulingFreePaidPublic.map((row) => row.productName),
      paidPublicSlugs: schedulingFreePaidPublic.map((row) => row.slug),
      usdUnavailable: schedulingFreeUsdUnavailable.map((row) => row.productName),
      usdUnavailableSlugs: schedulingFreeUsdUnavailable.map((row) => row.slug),
    },
    visibilityCounts,
    crm: {
      productN: crmRows.length,
      freeAdvertised: crmFreeAdvertised.length,
      freeSurvivorsAtFive: crmFreeSurvivors.length,
      numericN: crmNumeric.length,
      samePlanAtTen: crmSamePlanAtTen.length,
      five: scenarioMedian("crm", "crm-5"),
      ten: scenarioMedian("crm", "crm-10"),
    },
    payroll: {
      fullServiceN: payrollFullService.length,
      numericN: payrollFullServiceNumeric.length,
      quoteN: payrollFullServiceQuote.length,
      peoNames: payrollPeo.map((row) => row.productName),
      five: scenarioMedian("payroll", "payroll-5", { payrollFullServiceOnly: true }),
      ten: scenarioMedian("payroll", "payroll-10", { payrollFullServiceOnly: true }),
    },
    invoicing: {
      productN: invoicingRows.length,
      numericN: invoicingRows.filter((row) => isNumericPublic(scenarioCostAme(row))).length,
      sameNamedPlan: invoicingSamePlan.length,
      comparableN: invoicingComparable.length,
      freeUsable: invoicingFreeUsable.length,
      median: scenarioMedian("invoicing", "inv-5"),
    },
    scheduling: {
      productN: schedulingRows.length,
      median: scenarioMedian("scheduling", "sched-5"),
    },
    timeTracking: {
      productN: ttRows.length,
      freeAdvertised: ttFreeAdvertised.length,
      freeAtFive: ttFreeAtFive.map((row) => row.productName),
      paidAtFive: ttPaidAtFive.map((row) => row.productName),
      freeAtTen: ttFreeAtTen.map((row) => row.productName),
      five: scenarioMedian("time-tracking", "tt-5"),
      ten: scenarioMedian("time-tracking", "tt-10"),
    },
    fsmMedians: {
      smaller: scenarioMedian("field-service", "fsm-1-4"),
      larger: scenarioMedian("field-service", "fsm-2-8"),
    },
    charts: {
      scheduling: schedulingChartSeries(),
      crm: crmNumeric,
      payroll: payrollFullServiceChartSeries(),
      timeTracking: timeTrackingChartSeries(),
    },
    tables: Object.fromEntries(CATEGORY_ORDER.map((category) => [category, categoryTableRows(category)])) as Record<
      PricingCategory,
      PublicTableRow[]
    >,
    csv: {
      filename: PRICING_STUDY_CSV_FILENAME,
      rowCount: csvRows.length,
    },
    roundupHrefs: PRICING_STUDY_ROUNDUP_HREFS,
    hubHrefs: PRICING_STUDY_HUB_HREFS,
  };
}

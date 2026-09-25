import { pricingChecklists } from "./checklists";
import { pricingEvidence } from "./evidence";
import {
  costDelta,
  deriveTransparency,
  median,
  scenarioCostAme,
} from "./formulas";
import { pricingResearchMetadata } from "./metadata";
import { PILOT_PRODUCTS, pricingPilotRows, pricingResearchRows } from "./rows";
import {
  CATEGORY_SCENARIOS,
  ISO_DATE,
  type PricingCategory,
  type ScenarioId,
} from "./types";

const failures: string[] = [];

function assert(condition: boolean, message: string) {
  if (!condition) failures.push(message);
}

function expectedPatriot(employees: 5 | 10): number {
  return 37 + 5 * employees;
}

function expectedGusto(employees: 5 | 10): number {
  return 49 + 6 * employees;
}

function checklistPlanKey(row: (typeof pricingResearchRows)[number]): string {
  if (row.usablePlanName) return row.usablePlanName;
  if (row.usableStatus === "NOT_APPLICABLE") return "None";
  if (row.usableStatus === "NOT_DISCLOSED") return "Undisclosed";
  return "Quote";
}

const EXPECTED_PRODUCTS = 62;
const EXPECTED_ROWS = 108;

for (const row of pricingResearchRows) {
  assert(Boolean(row.slug), "row missing slug");
  assert(Boolean(row.productName), `${row.slug} missing productName`);
  assert(Boolean(row.scenarioId), `${row.slug} missing scenarioId`);
  assert(ISO_DATE.test(row.verifiedDate), `${row.slug} ${row.scenarioId} verifiedDate must be YYYY-MM-DD`);
  assert(
    (CATEGORY_SCENARIOS[row.category] as readonly ScenarioId[]).includes(row.scenarioId),
    `${row.slug} scenario ${row.scenarioId} does not belong to ${row.category}`,
  );
  assert(row.methodologyVersion === "1.0", `${row.slug} methodologyVersion`);
  assert(row.datasetEdition === "2026", `${row.slug} datasetEdition`);

  if (row.advertisedAmount !== null) {
    assert(row.advertisedCadence !== null, `${row.slug} numeric advertised amount needs cadence`);
    assert(row.advertisedStatus === "PUBLIC", `${row.slug} numeric advertised amount must be PUBLIC`);
  }
  if (row.advertisedStatus === "PUBLIC" && row.advertisedCadence === "FREE") {
    assert(row.advertisedAmount === 0, `${row.slug} FREE advertised must be $0 not missing`);
  }
  if (row.usableStatus === "PUBLIC" && row.usableCadence === "FREE") {
    assert(row.usableBaseAmount === 0, `${row.slug} FREE usable must be $0 not missing`);
  }
  if (row.usableBaseAmount !== null) {
    assert(row.usableCadence !== null, `${row.slug} numeric usable amount needs cadence`);
    assert(row.usableStatus === "PUBLIC", `${row.slug} numeric usable amount must be PUBLIC`);
  }
  if (row.usableCadence === "ANNUAL_BILLED_MONTHLY" && row.usableStatus === "PUBLIC") {
    const cash = scenarioCostAme(row);
    assert(cash.amount !== null, `${row.slug} annual-billed monthly must derive AME`);
  }

  if (row.usableStatus === "QUOTE_REQUIRED") {
    const cost = scenarioCostAme(row);
    assert(cost.amount === null, `${row.slug} quote-only must not have numeric scenario cost`);
    assert(cost.status === "QUOTE_REQUIRED", `${row.slug} quote-only scenario status`);
  }

  if (row.requiredAddonAmount !== null) {
    assert(row.evidenceIds.length > 0, `${row.slug} required add-on needs evidence`);
  }

  if (row.category === "payroll") {
    assert(row.payrollServiceClass !== "NOT_APPLICABLE", `${row.slug} payroll needs payrollServiceClass`);
  } else {
    assert(row.payrollServiceClass === "NOT_APPLICABLE", `${row.slug} non-payroll must not set a payroll class`);
  }

  if (row.usablePlanName && row.usableStatus === "QUOTE_REQUIRED") {
    assert(false, `${row.slug} usable named plan contradicts QUOTE_REQUIRED`);
  }

  assert(deriveTransparency(row) === row.transparencyClass, `${row.slug} ${row.scenarioId} transparency must be derived`);

  for (const evidenceId of row.evidenceIds) {
    assert(Boolean(pricingEvidence[evidenceId]), `${row.slug} missing evidence ${evidenceId}`);
    const evidence = pricingEvidence[evidenceId];
    if (evidence) {
      assert(ISO_DATE.test(evidence.verifiedDate), `evidence ${evidenceId} date`);
      assert(!evidence.sourceUrl.includes("beltstack"), `${evidenceId} must not use BeltStack reviews as price source`);
    }
  }

  const usableChecklist = pricingChecklists.find(
    (c) => c.slug === row.slug && c.scenarioId === row.scenarioId && c.planName === checklistPlanKey(row),
  );
  if (row.category === "crm" || row.category === "field-service" || row.category === "payroll") {
    assert(Boolean(usableChecklist), `${row.slug} ${row.scenarioId} missing usable-plan checklist (${checklistPlanKey(row)})`);
  }
}

const patriot5 = pricingResearchRows.find((r) => r.slug === "patriot-payroll" && r.scenarioId === "payroll-5");
const patriot10 = pricingResearchRows.find((r) => r.slug === "patriot-payroll" && r.scenarioId === "payroll-10");
assert(patriot5 !== undefined && scenarioCostAme(patriot5).amount === expectedPatriot(5), "Patriot payroll-5 must derive 37+(5×5)=62");
assert(patriot10 !== undefined && scenarioCostAme(patriot10).amount === expectedPatriot(10), "Patriot payroll-10 must derive 37+(5×10)=87");

const gusto5 = pricingResearchRows.find((r) => r.slug === "gusto" && r.scenarioId === "payroll-5");
const gusto10 = pricingResearchRows.find((r) => r.slug === "gusto" && r.scenarioId === "payroll-10");
assert(gusto5 !== undefined && scenarioCostAme(gusto5).amount === expectedGusto(5), "Gusto payroll-5 must derive 49+(6×5)=79");
assert(gusto10 !== undefined && scenarioCostAme(gusto10).amount === expectedGusto(10), "Gusto payroll-10 must derive 49+(6×10)=109");

const hubspot5 = pricingResearchRows.find((r) => r.slug === "hubspot" && r.scenarioId === "crm-5");
const hubspot10 = pricingResearchRows.find((r) => r.slug === "hubspot" && r.scenarioId === "crm-10");
assert(hubspot5 !== undefined && scenarioCostAme(hubspot5).amount === 100, "HubSpot crm-5 = 20×5");
assert(hubspot10 !== undefined && scenarioCostAme(hubspot10).amount === 200, "HubSpot crm-10 = 20×10");

const titan = pricingResearchRows.filter((r) => r.slug === "servicetitan");
assert(titan.length === 2, "ServiceTitan has two scenario rows");
for (const row of titan) {
  assert(scenarioCostAme(row).amount === null, "ServiceTitan must not invent a number");
}

assert(!("scenarioCost" in (pricingPilotRows[0] ?? {})), "rows must not store scenarioCost");
assert(pricingPilotRows.length === 20, `expected 20 pilot rows, got ${pricingPilotRows.length}`);
assert(PILOT_PRODUCTS.length === 12, "12 pilot products");

assert(pricingResearchRows.length === EXPECTED_ROWS, `expected ${EXPECTED_ROWS} research rows, got ${pricingResearchRows.length}`);

const identities = pricingResearchRows.map((r) => `${r.category}::${r.slug}`);
const uniqueIdentities = new Set(identities);
assert(uniqueIdentities.size === EXPECTED_PRODUCTS, `expected ${EXPECTED_PRODUCTS} unique category+slug products, got ${uniqueIdentities.size}`);

const waveIdentities = [...uniqueIdentities].filter((id) => id.endsWith("::wave"));
assert(waveIdentities.includes("invoicing::wave"), "Wave invoicing identity missing");
assert(waveIdentities.includes("payroll::wave"), "Wave payroll identity missing");
assert(waveIdentities.length === 2, "Wave may only appear as invoicing + payroll");

assert(
  pricingResearchRows.every((r) => (CATEGORY_SCENARIOS as Record<string, readonly ScenarioId[]>)[r.category] !== undefined),
  "only frozen v1 categories may appear",
);

for (const identity of uniqueIdentities) {
  const [category, slug] = identity.split("::") as [PricingCategory, string];
  const scenarios = CATEGORY_SCENARIOS[category];
  for (const scenarioId of scenarios) {
    assert(
      pricingResearchRows.some((r) => r.category === category && r.slug === slug && r.scenarioId === scenarioId),
      `${identity} missing required scenario ${scenarioId}`,
    );
  }
}

assert(pricingResearchMetadata.verificationWindow.start === "2026-09-25", "collection window start");
assert(pricingResearchMetadata.verificationWindow.end === "2026-09-25", "close the window only after full collection");
const start = Date.parse(pricingResearchMetadata.verificationWindow.start);
const end = Date.parse(pricingResearchMetadata.verificationWindow.end);
assert(end - start <= 45 * 24 * 60 * 60 * 1000, "collection window must be <=45 days");
assert(end >= start, "window end before start");

const categories: PricingCategory[] = [
  "crm",
  "field-service",
  "payroll",
  "invoicing",
  "scheduling",
  "time-tracking",
];
assert(
  categories.every((category) => pricingResearchRows.some((r) => r.category === category)),
  "all six core categories must appear",
);

if (hubspot5 && hubspot10) {
  const delta = costDelta(hubspot5, hubspot10);
  assert(delta.amount === 100, "HubSpot 5→10 delta is 100");
}

const housecall28 = pricingResearchRows.find((r) => r.slug === "housecall-pro" && r.scenarioId === "fsm-2-8");
assert(housecall28 !== undefined && scenarioCostAme(housecall28).amount === 369, "Housecall Pro fsm-2-8 must derive 299+(35×2)=369");

const sure5 = pricingResearchRows.find((r) => r.slug === "surepayroll" && r.scenarioId === "payroll-5");
assert(
  sure5 !== undefined && scenarioCostAme(sure5).amount === 39 + 7 * 5 + (50 + 5 * 5) / 12,
  "SurePayroll payroll-5 must include W-2 add-on monthly equivalent",
);

type StatLine = {
  category: PricingCategory;
  scenarioId: ScenarioId;
  n: number;
  numericN: number;
  quoteN: number;
  unknownN: number;
  median: number | null;
  label: "MEDIAN" | "DESCRIPTIVE ONLY";
};

const stats: StatLine[] = [];
for (const category of categories) {
  for (const scenarioId of CATEGORY_SCENARIOS[category]) {
    const rows = pricingResearchRows.filter((r) => r.category === category && r.scenarioId === scenarioId);
    if (rows.length === 0) continue;
    const numeric = rows
      .map((r) => scenarioCostAme(r))
      .filter((d) => d.status === "PUBLIC" && d.amount !== null)
      .map((d) => d.amount as number);
    const quoteN = rows.filter((r) => r.usableStatus === "QUOTE_REQUIRED").length;
    const unknownN = rows.filter(
      (r) =>
        r.usableStatus === "UNKNOWN" ||
        r.usableStatus === "SOURCE_CONFLICT" ||
        r.usableStatus === "NOT_DISCLOSED" ||
        r.advertisedStatus === "SOURCE_CONFLICT",
    ).length;
    stats.push({
      category,
      scenarioId,
      n: rows.length,
      numericN: numeric.length,
      quoteN,
      unknownN,
      median: numeric.length >= 5 ? median(numeric) : null,
      label: numeric.length >= 5 ? "MEDIAN" : "DESCRIPTIVE ONLY",
    });
  }
}

if (failures.length) {
  console.error(`FAILED ${failures.length} pricing research check(s):`);
  for (const failure of failures) console.error(` - ${failure}`);
  process.exit(1);
}

console.log("pricing research checks passed");
console.log(`rows=${pricingResearchRows.length} products=${uniqueIdentities.size} pilotRows=${pricingPilotRows.length}`);
for (const line of stats) {
  console.log(
    `${line.category} ${line.scenarioId}: N=${line.n} numeric=${line.numericN} quote=${line.quoteN} unknown=${line.unknownN} ${line.label}${line.median !== null ? ` median=${line.median}` : ""}`,
  );
}

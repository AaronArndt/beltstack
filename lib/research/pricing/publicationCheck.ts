/**
 * Publication assertions for the 2026 advertised vs usable study.
 * Fails the process if headline denominators, chart series, or CSV drift
 * from the frozen dataset / approved publication blueprint.
 */

import {
  advertisedEntryAme,
  buildCsvStudyRows,
  formatUsd,
  fsmVisibilityMembers,
  getPricingStudyPublication,
  isNumericPublic,
  serializePricingStudyCsv,
} from "./publication";
import { scenarioCostAme } from "./formulas";
import { pricingResearchRows } from "./rows";

const failures: string[] = [];

function assert(condition: boolean, message: string) {
  if (!condition) failures.push(message);
}

function near(actual: number | null, expected: number, message: string) {
  if (actual === null) {
    failures.push(`${message}: got null, expected ${expected}`);
    return;
  }
  if (Math.abs(actual - expected) > 0.011) {
    failures.push(`${message}: got ${actual}, expected ${expected}`);
  }
}

const study = getPricingStudyPublication();

assert(study.products === 62, `product identities === 62, got ${study.products}`);
assert(study.rows === 108, `scenario rows === 108, got ${study.rows}`);
assert(study.csv.rowCount === 108, `CSV row count === 108, got ${study.csv.rowCount}`);
assert(pricingResearchRows.length === 108, `canonical rows === 108, got ${pricingResearchRows.length}`);

assert(study.comparable.numerator === 18, `plan-change numerator === 18, got ${study.comparable.numerator}`);
assert(study.comparable.denominator === 44, `comparable denominator === 44, got ${study.comparable.denominator}`);

assert(study.fsmQuote.numerator === 8, `FSM quote numerator === 8, got ${study.fsmQuote.numerator}`);
assert(study.fsmQuote.denominator === 17, `FSM quote denominator === 17, got ${study.fsmQuote.denominator}`);
assert(study.fsmVisibility.public === 5, `FSM public usable === 5, got ${study.fsmVisibility.public}`);
assert(study.fsmVisibility.quote === 8, `FSM quote === 8, got ${study.fsmVisibility.quote}`);
assert(study.fsmVisibility.unavailable === 3, `FSM unavailable === 3, got ${study.fsmVisibility.unavailable}`);
assert(study.fsmVisibility.doesntMeet === 1, `FSM doesn't-meet === 1, got ${study.fsmVisibility.doesntMeet}`);

assert(
  study.fsmVisibility.publicSlugs.join(",") === "housecall-pro,kickserv,mhelpdesk,service-fusion,servicem8",
  `FSM public slugs: ${study.fsmVisibility.publicSlugs.join(",")}`,
);
assert(
  study.fsmVisibility.quoteSlugs.join(",") ===
    "buildops,fieldedge,fieldpulse,servicetitan,servicetrade,simpro,workiz,zuper",
  `FSM quote slugs: ${study.fsmVisibility.quoteSlugs.join(",")}`,
);
assert(
  study.fsmVisibility.unavailableSlugs.join(",") === "jobber,oracle-field-service,workwave-service",
  `FSM unavailable slugs: ${study.fsmVisibility.unavailableSlugs.join(",")}`,
);
assert(
  study.fsmVisibility.doesntMeetSlugs.join(",") === "connecteam",
  `FSM doesn't-meet slugs: ${study.fsmVisibility.doesntMeetSlugs.join(",")}`,
);

assert(study.schedulingFree.advertised === 7, `scheduling advertised free === 7, got ${study.schedulingFree.advertised}`);
assert(
  study.schedulingFree.survivorSlugs.join(",") === "square-appointments",
  `scheduling free survivor: ${study.schedulingFree.survivorSlugs.join(",")}`,
);
assert(
  [...study.schedulingFree.paidPublicSlugs].sort().join(",") ===
    "appointy,calendly,setmore,youcanbookme,zoho-bookings",
  `scheduling paid-public free-advertised: ${study.schedulingFree.paidPublicSlugs.join(",")}`,
);
assert(
  study.schedulingFree.usdUnavailableSlugs.join(",") === "simplybookme",
  `scheduling USD unavailable: ${study.schedulingFree.usdUnavailableSlugs.join(",")}`,
);

assert(study.visibilityCounts.public === 44, `visibility public === 44, got ${study.visibilityCounts.public}`);
assert(study.visibilityCounts.partial === 7, `visibility partial === 7, got ${study.visibilityCounts.partial}`);
assert(study.visibilityCounts.quote === 11, `visibility quote === 11, got ${study.visibilityCounts.quote}`);

near(study.crm.five.median, 85, "CRM 5-seat median");
near(study.crm.ten.median, 170, "CRM 10-seat median");
assert(study.crm.numericN === 8, `CRM numeric N === 8, got ${study.crm.numericN}`);
assert(study.crm.samePlanAtTen === 8, `CRM same usable plan 5→10 === 8, got ${study.crm.samePlanAtTen}`);
assert(study.crm.freeAdvertised === 2, `CRM free advertised === 2, got ${study.crm.freeAdvertised}`);
assert(study.crm.freeSurvivorsAtFive === 0, `CRM free survivors at 5 === 0, got ${study.crm.freeSurvivorsAtFive}`);
assert(!study.charts.crm.some((p) => p.slug === "keap"), "CRM chart must exclude Keap");

near(study.payroll.five.median, 79, "full-service payroll 5-employee median");
near(study.payroll.ten.median, 109, "full-service payroll 10-employee median");
assert(study.payroll.fullServiceN === 10, `full-service payroll N === 10, got ${study.payroll.fullServiceN}`);
assert(study.payroll.numericN === 7, `full-service numeric N === 7, got ${study.payroll.numericN}`);
assert(study.payroll.quoteN === 3, `full-service quote N === 3, got ${study.payroll.quoteN}`);
assert(
  !study.charts.payroll.some((p) => ["adp", "paychex", "rippling", "justworks", "deel"].includes(p.slug)),
  "payroll chart must exclude quotes and PEO",
);

near(study.invoicing.median.median, 19.5, "invoicing median");
assert(study.invoicing.numericN === 8, `invoicing numeric === 8, got ${study.invoicing.numericN}`);
assert(study.invoicing.sameNamedPlan === 7, `invoicing same named plan === 7, got ${study.invoicing.sameNamedPlan}`);
assert(study.invoicing.freeUsable === 3, `invoicing free usable === 3, got ${study.invoicing.freeUsable}`);

near(study.scheduling.median.median, 30, "scheduling median");
assert(study.scheduling.median.numericN === 7, `scheduling numeric N === 7, got ${study.scheduling.median.numericN}`);

near(study.timeTracking.five.median, 39.175, "time-tracking 5-user median");
near(study.timeTracking.ten.median, 87.5, "time-tracking 10-user median");
assert(formatUsd(39.175) === "$39.18", `display round 39.175 → $39.18, got ${formatUsd(39.175)}`);
assert(study.timeTracking.five.numericN === 8, `TT 5 numeric N === 8, got ${study.timeTracking.five.numericN}`);
assert(study.timeTracking.freeAdvertised === 4, `TT advertised free === 4, got ${study.timeTracking.freeAdvertised}`);

near(study.fsmMedians.smaller.median, 149, "FSM 1+4 median");
near(study.fsmMedians.larger.median, 208, "FSM 2+8 median");
assert(study.fsmMedians.smaller.numericN === 5, `FSM 1+4 numeric N === 5, got ${study.fsmMedians.smaller.numericN}`);
assert(study.fsmMedians.smaller.n === 17, `FSM 1+4 N === 17, got ${study.fsmMedians.smaller.n}`);

const expectedScheduling: Record<string, { advertised: number; usable: number | "ND" }> = {
  "square-appointments": { advertised: 0, usable: 0 },
  setmore: { advertised: 0, usable: 25 },
  "acuity-scheduling": { advertised: 16, usable: 27 },
  "zoho-bookings": { advertised: 0, usable: 30 },
  appointy: { advertised: 0, usable: 39.99 },
  calendly: { advertised: 0, usable: 50 },
  youcanbookme: { advertised: 0, usable: 81 },
  simplybookme: { advertised: 0, usable: "ND" },
};

for (const point of study.charts.scheduling) {
  const expected = expectedScheduling[point.slug];
  assert(Boolean(expected), `unexpected scheduling chart product ${point.slug}`);
  if (!expected) continue;
  assert(isNumericPublic(point.advertised), `${point.slug} advertised must be numeric`);
  if (isNumericPublic(point.advertised)) {
    near(point.advertised.amount, expected.advertised, `${point.slug} advertised`);
  }
  if (expected.usable === "ND") {
    assert(!isNumericPublic(point.usable), `${point.slug} usable must not plot as a number`);
    assert(point.usable.amount === null, `${point.slug} usable amount must be null, not $0`);
  } else {
    assert(isNumericPublic(point.usable), `${point.slug} usable must be numeric`);
    if (isNumericPublic(point.usable)) near(point.usable.amount, expected.usable, `${point.slug} usable`);
  }
}

assert(study.charts.scheduling.length === 8, `scheduling chart series length === 8, got ${study.charts.scheduling.length}`);

const expectedCrm: Record<string, { five: number; ten: number }> = {
  freshsales: { five: 45, ten: 90 },
  "monday-crm": { five: 60, ten: 120 },
  "zoho-crm": { five: 70, ten: 140 },
  pipedrive: { five: 70, ten: 140 },
  hubspot: { five: 100, ten: 200 },
  copper: { five: 115, ten: 230 },
  salesforce: { five: 125, ten: 250 },
  close: { five: 245, ten: 490 },
};

for (const point of study.charts.crm) {
  const expected = expectedCrm[point.slug];
  assert(Boolean(expected), `unexpected CRM chart product ${point.slug}`);
  if (!expected) continue;
  if (isNumericPublic(point.smaller)) near(point.smaller.amount, expected.five, `${point.slug} CRM 5`);
  if (isNumericPublic(point.larger)) near(point.larger.amount, expected.ten, `${point.slug} CRM 10`);
}

const expectedPayroll: Record<string, { five: number; ten: number }> = {
  "patriot-payroll": { five: 62, ten: 87 },
  "square-payroll": { five: 65, ten: 95 },
  wave: { five: 70, ten: 100 },
  gusto: { five: 79, ten: 109 },
  onpay: { five: 79, ten: 109 },
  surepayroll: { five: 80.25, ten: 117.33 },
  "quickbooks-payroll": { five: 85, ten: 120 },
};

assert(study.charts.payroll.length === 7, `payroll chart length === 7, got ${study.charts.payroll.length}`);
for (const point of study.charts.payroll) {
  const expected = expectedPayroll[point.slug];
  assert(Boolean(expected), `unexpected payroll chart product ${point.slug}`);
  if (!expected) continue;
  if (isNumericPublic(point.smaller)) near(point.smaller.amount, expected.five, `${point.slug} payroll 5`);
  if (isNumericPublic(point.larger)) near(point.larger.amount, expected.ten, `${point.slug} payroll 10`);
}

const expectedTt: Record<string, { five: number; ten: number }> = {
  clockify: { five: 0, ten: 39.9 },
  everhour: { five: 0, ten: 85 },
  hubstaff: { five: 24.95, ten: 49.9 },
  "time-doctor": { five: 33.35, ten: 66.7 },
  toggl: { five: 45, ten: 90 },
  harvest: { five: 45, ten: 90 },
  timely: { five: 45, ten: 160 },
  rescuetime: { five: 80, ten: 160 },
};

assert(study.charts.timeTracking.length === 8, `TT chart length === 8, got ${study.charts.timeTracking.length}`);
for (const point of study.charts.timeTracking) {
  const expected = expectedTt[point.slug];
  assert(Boolean(expected), `unexpected TT chart product ${point.slug}`);
  if (!expected) continue;
  if (isNumericPublic(point.smaller)) near(point.smaller.amount, expected.five, `${point.slug} TT 5`);
  if (isNumericPublic(point.larger)) near(point.larger.amount, expected.ten, `${point.slug} TT 10`);
}

const salesforce = pricingResearchRows.find((row) => row.slug === "salesforce" && row.scenarioId === "crm-5");
assert(salesforce !== undefined && salesforce.advertisedStatus === "SOURCE_CONFLICT", "Salesforce advertised remains SOURCE_CONFLICT");
assert(advertisedEntryAme(salesforce!).amount === null, "Salesforce advertised must not resolve to a number");

for (const row of pricingResearchRows) {
  const usable = scenarioCostAme(row);
  if (usable.status === "QUOTE_REQUIRED" || usable.status === "UNKNOWN" || usable.status === "NOT_DISCLOSED" || usable.status === "SOURCE_CONFLICT" || usable.status === "NOT_APPLICABLE") {
    assert(usable.amount === null, `${row.slug} ${row.scenarioId} non-numeric usable must not be $0`);
  }
}

const csvRows = buildCsvStudyRows();
assert(csvRows.length === 108, `CSV objects === 108, got ${csvRows.length}`);
for (const row of csvRows) {
  if (row.usableStatus !== "Public") {
    assert(row.usableScenarioCostMonthlyEquivalent === null, `${row.productSlug} ${row.scenario} CSV usable cost must be blank when status is ${row.usableStatus}`);
    assert(row.annualCashCommitment === null, `${row.productSlug} ${row.scenario} CSV annual cash must be blank when usable is non-numeric`);
  }
  if (row.advertisedStatus !== "Public") {
    assert(row.advertisedAmount === null, `${row.productSlug} ${row.scenario} CSV advertised amount must be blank when status is ${row.advertisedStatus}`);
  }
}

const csv = serializePricingStudyCsv();
const csvLines = csv.trimEnd().split("\n");
assert(csvLines.length === 109, `CSV lines === 109 (header + 108), got ${csvLines.length}`);
assert(csvLines[0].startsWith("datasetEdition,verifiedDate,category"), "CSV header starts with expected columns");
assert(!csv.includes("evidenceId"), "CSV must not include evidence IDs");
assert(!csv.includes("checklist"), "CSV must not include checklist");

for (const member of fsmVisibilityMembers()) {
  if (member.bucket !== "public") {
    const row = pricingResearchRows.find((r) => r.slug === member.slug && r.scenarioId === "fsm-1-4");
    if (!row) continue;
    const cost = scenarioCostAme(row);
    assert(cost.amount === null, `${member.slug} non-public FSM usable must not be numeric`);
  }
}

if (failures.length) {
  console.error(`FAILED ${failures.length} pricing publication check(s):`);
  for (const failure of failures) console.error(` - ${failure}`);
  process.exit(1);
}

console.log("pricing publication checks passed");
console.log(
  `products=${study.products} rows=${study.rows} comparable=${study.comparable.numerator}/${study.comparable.denominator} fsmQuote=${study.fsmQuote.numerator}/${study.fsmQuote.denominator} csv=${study.csv.rowCount}`,
);

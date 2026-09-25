import type { ProductChecklist } from "./checklists";
import type { ChecklistTick } from "./types";

function ticks(
  items: Array<[string, ChecklistTick["result"], string]>,
): ChecklistTick[] {
  return items.map(([requirement, result, evidenceId]) => ({
    requirement,
    result,
    evidenceId,
  }));
}

function crmBoth(slug: string, plan: string, evidenceId: string): ProductChecklist[] {
  return (["crm-5", "crm-10"] as const).map((scenarioId) => ({
    slug,
    scenarioId,
    planName: plan,
    ticks: ticks([
      ["contact-records", "PASS", evidenceId],
      ["deal-pipeline", "PASS", evidenceId],
      ["activities-tasks", "PASS", evidenceId],
      ["record-history", "PASS", evidenceId],
      ["scenario-seat-count", "PASS", evidenceId],
    ]),
  }));
}

function fsmBoth(
  slug: string,
  plan: string,
  evidenceId: string,
  extras?: Partial<Record<string, ChecklistTick["result"]>>,
): ProductChecklist[] {
  const result = (key: string, fallback: ChecklistTick["result"] = "PASS"): ChecklistTick["result"] =>
    extras?.[key] ?? fallback;
  return (["fsm-1-4", "fsm-2-8"] as const).map((scenarioId) => ({
    slug,
    scenarioId,
    planName: plan,
    ticks: ticks([
      ["customer-records", result("customer-records"), evidenceId],
      ["job-work-orders", result("job-work-orders"), evidenceId],
      ["job-scheduling", result("job-scheduling"), evidenceId],
      ["assignment-dispatch", result("assignment-dispatch"), evidenceId],
      ["field-mobile-access", result("field-mobile-access"), evidenceId],
      ["invoices", result("invoices"), evidenceId],
      ["payment-workflow", result("payment-workflow"), evidenceId],
      ["scenario-headcount", result("scenario-headcount"), evidenceId],
    ]),
  }));
}

function payrollBoth(slug: string, plan: string, evidenceId: string): ProductChecklist[] {
  return (["payroll-5", "payroll-10"] as const).map((scenarioId) => ({
    slug,
    scenarioId,
    planName: plan,
    ticks: ticks([
      ["payroll-calculation", "PASS", evidenceId],
      ["direct-deposit", "PASS", evidenceId],
      ["federal-tax-calculation", "PASS", evidenceId],
      ["federal-tax-filing", "PASS", evidenceId],
      ["state-tax-support", "PASS", evidenceId],
      ["w2-filing", "PASS", evidenceId],
      ["pay-stubs", "PASS", evidenceId],
      ["scenario-employee-count", "PASS", evidenceId],
    ]),
  }));
}

function quoteFsm(slug: string, evidenceId: string): ProductChecklist[] {
  return fsmBoth(slug, "Quote", evidenceId, {
    "customer-records": "INDETERMINATE",
    "job-work-orders": "INDETERMINATE",
    "job-scheduling": "INDETERMINATE",
    "assignment-dispatch": "INDETERMINATE",
    "field-mobile-access": "INDETERMINATE",
    invoices: "INDETERMINATE",
    "payment-workflow": "INDETERMINATE",
    "scenario-headcount": "INDETERMINATE",
  });
}

export const remainingPricingChecklists: ProductChecklist[] = [
  ...crmBoth("zoho-crm", "Standard", "zoho-crm-pricing"),
  ...crmBoth("pipedrive", "Lite", "pipedrive-pricing"),
  ...crmBoth("monday-crm", "Basic", "monday-crm-pricing"),
  ...crmBoth("freshsales", "Growth", "freshsales-pricing"),
  ...crmBoth("copper", "Basic", "copper-pricing"),
  ...crmBoth("close", "Essentials", "close-pricing"),
  ...(["crm-5", "crm-10"] as const).map((scenarioId) => ({
    slug: "keap",
    scenarioId,
    planName: "Undisclosed",
    ticks: ticks([
      ["contact-records", "INDETERMINATE", "keap-pricing"],
      ["deal-pipeline", "INDETERMINATE", "keap-pricing"],
      ["activities-tasks", "INDETERMINATE", "keap-pricing"],
      ["record-history", "INDETERMINATE", "keap-pricing"],
      ["scenario-seat-count", "INDETERMINATE", "keap-pricing"],
    ]),
  })),
  ...fsmBoth("housecall-pro", "Essentials", "housecall-pro-pricing").filter((c) => c.scenarioId === "fsm-1-4"),
  ...fsmBoth("housecall-pro", "Max", "housecall-pro-pricing").filter((c) => c.scenarioId === "fsm-2-8"),
  ...fsmBoth("service-fusion", "Starter", "service-fusion-pricing"),
  ...quoteFsm("workiz", "workiz-pricing"),
  ...fsmBoth("kickserv", "Start", "kickserv-home").filter((c) => c.scenarioId === "fsm-1-4"),
  ...fsmBoth("kickserv", "Run", "kickserv-home").filter((c) => c.scenarioId === "fsm-2-8"),
  ...fsmBoth("servicem8", "Starter", "servicem8-pricing"),
  ...quoteFsm("fieldedge", "fieldedge-pricing"),
  ...fsmBoth("mhelpdesk", "Growth", "mhelpdesk-help-pricing").filter((c) => c.scenarioId === "fsm-1-4"),
  ...fsmBoth("mhelpdesk", "Success", "mhelpdesk-help-pricing").filter((c) => c.scenarioId === "fsm-2-8"),
  ...quoteFsm("fieldpulse", "fieldpulse-pricing"),
  ...quoteFsm("servicetrade", "servicetrade-pricing"),
  ...fsmBoth("workwave-service", "Undisclosed", "workwave-service-pricing", {
    "customer-records": "INDETERMINATE",
    "job-work-orders": "INDETERMINATE",
    "job-scheduling": "INDETERMINATE",
    "assignment-dispatch": "INDETERMINATE",
    "field-mobile-access": "INDETERMINATE",
    invoices: "INDETERMINATE",
    "payment-workflow": "INDETERMINATE",
    "scenario-headcount": "INDETERMINATE",
  }),
  ...quoteFsm("buildops", "buildops-pricing"),
  ...fsmBoth("connecteam", "None", "connecteam-pricing", {
    "customer-records": "INDETERMINATE",
    "job-work-orders": "FAIL",
    "job-scheduling": "PASS",
    "assignment-dispatch": "FAIL",
    "field-mobile-access": "PASS",
    invoices: "FAIL",
    "payment-workflow": "FAIL",
    "scenario-headcount": "PASS",
  }),
  ...fsmBoth("oracle-field-service", "Oracle Fusion Field Service Cloud Service", "oracle-field-service-catalog", {
    invoices: "INDETERMINATE",
    "payment-workflow": "INDETERMINATE",
    "scenario-headcount": "FAIL",
  }),
  ...quoteFsm("simpro", "simpro-pricing"),
  ...quoteFsm("zuper", "zuper-pricing"),
  ...payrollBoth("quickbooks-payroll", "Workforce Payroll", "quickbooks-payroll-pricing"),
  ...payrollBoth("onpay", "Payroll", "onpay-pricing"),
  ...payrollBoth("adp", "Quote", "adp-pricing"),
  ...payrollBoth("paychex", "Quote", "paychex-pricing"),
  ...payrollBoth("rippling", "Quote", "rippling-pricing"),
  ...payrollBoth("square-payroll", "Full-service payroll", "square-payroll-pricing"),
  ...payrollBoth("justworks", "PEO Basic", "justworks-pricing"),
  ...payrollBoth("deel", "US PEO", "deel-pricing"),
  ...payrollBoth("surepayroll", "Full Service", "surepayroll-pricing"),
  ...payrollBoth("wave", "Payroll", "wave-payroll-pricing"),
];

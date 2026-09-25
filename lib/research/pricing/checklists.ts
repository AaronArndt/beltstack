import { remainingPricingChecklists } from "./checklistsRemaining";
import type { ChecklistTick, ScenarioId } from "./types";

export type ProductChecklist = {
  slug: string;
  scenarioId: ScenarioId;
  planName: string;
  ticks: ChecklistTick[];
};

function ticks(
  items: Array<[string, ChecklistTick["result"], string]>,
): ChecklistTick[] {
  return items.map(([requirement, result, evidenceId]) => ({
    requirement,
    result,
    evidenceId,
  }));
}

export const pricingPilotChecklists: ProductChecklist[] = [
  {
    slug: "hubspot",
    scenarioId: "crm-5",
    planName: "Free Tools",
    ticks: ticks([
      ["contact-records", "PASS", "hubspot-crm-product"],
      ["deal-pipeline", "PASS", "hubspot-catalog"],
      ["activities-tasks", "PASS", "hubspot-crm-product"],
      ["record-history", "PASS", "hubspot-crm-product"],
      ["scenario-seat-count", "FAIL", "hubspot-catalog"],
    ]),
  },
  {
    slug: "hubspot",
    scenarioId: "crm-5",
    planName: "Sales Hub Starter",
    ticks: ticks([
      ["contact-records", "PASS", "hubspot-crm-product"],
      ["deal-pipeline", "PASS", "hubspot-catalog"],
      ["activities-tasks", "PASS", "hubspot-crm-product"],
      ["record-history", "PASS", "hubspot-crm-product"],
      ["scenario-seat-count", "PASS", "hubspot-catalog"],
    ]),
  },
  {
    slug: "hubspot",
    scenarioId: "crm-10",
    planName: "Sales Hub Starter",
    ticks: ticks([
      ["contact-records", "PASS", "hubspot-crm-product"],
      ["deal-pipeline", "PASS", "hubspot-catalog"],
      ["activities-tasks", "PASS", "hubspot-crm-product"],
      ["record-history", "PASS", "hubspot-crm-product"],
      ["scenario-seat-count", "PASS", "hubspot-catalog"],
    ]),
  },
  {
    slug: "salesforce",
    scenarioId: "crm-5",
    planName: "Starter Suite",
    ticks: ticks([
      ["contact-records", "PASS", "salesforce-editions-pricing"],
      ["deal-pipeline", "PASS", "salesforce-editions-pricing"],
      ["activities-tasks", "PASS", "salesforce-editions-pricing"],
      ["record-history", "PASS", "salesforce-editions-pricing"],
      ["scenario-seat-count", "PASS", "salesforce-editions-pricing"],
    ]),
  },
  {
    slug: "salesforce",
    scenarioId: "crm-10",
    planName: "Starter Suite",
    ticks: ticks([
      ["contact-records", "PASS", "salesforce-editions-pricing"],
      ["deal-pipeline", "PASS", "salesforce-editions-pricing"],
      ["activities-tasks", "PASS", "salesforce-editions-pricing"],
      ["record-history", "PASS", "salesforce-editions-pricing"],
      ["scenario-seat-count", "PASS", "salesforce-editions-pricing"],
    ]),
  },
  {
    slug: "jobber",
    scenarioId: "fsm-1-4",
    planName: "Connect",
    ticks: ticks([
      ["customer-records", "PASS", "jobber-pricing"],
      ["job-work-orders", "PASS", "jobber-pricing"],
      ["job-scheduling", "PASS", "jobber-pricing"],
      ["assignment-dispatch", "PASS", "jobber-pricing"],
      ["field-mobile-access", "PASS", "jobber-pricing"],
      ["invoices", "PASS", "jobber-pricing"],
      ["payment-workflow", "PASS", "jobber-pricing"],
      ["scenario-headcount", "PASS", "jobber-connect-help"],
    ]),
  },
  {
    slug: "jobber",
    scenarioId: "fsm-2-8",
    planName: "Grow",
    ticks: ticks([
      ["customer-records", "PASS", "jobber-pricing"],
      ["job-work-orders", "PASS", "jobber-pricing"],
      ["job-scheduling", "PASS", "jobber-pricing"],
      ["assignment-dispatch", "PASS", "jobber-pricing"],
      ["field-mobile-access", "PASS", "jobber-pricing"],
      ["invoices", "PASS", "jobber-pricing"],
      ["payment-workflow", "PASS", "jobber-pricing"],
      ["scenario-headcount", "PASS", "jobber-grow-help"],
    ]),
  },
  {
    slug: "servicetitan",
    scenarioId: "fsm-1-4",
    planName: "Quote",
    ticks: ticks([
      ["customer-records", "INDETERMINATE", "servicetitan-pricing"],
      ["job-work-orders", "INDETERMINATE", "servicetitan-pricing"],
      ["job-scheduling", "INDETERMINATE", "servicetitan-pricing"],
      ["assignment-dispatch", "INDETERMINATE", "servicetitan-pricing"],
      ["field-mobile-access", "INDETERMINATE", "servicetitan-pricing"],
      ["invoices", "INDETERMINATE", "servicetitan-pricing"],
      ["payment-workflow", "INDETERMINATE", "servicetitan-pricing"],
      ["scenario-headcount", "INDETERMINATE", "servicetitan-pricing"],
    ]),
  },
  {
    slug: "servicetitan",
    scenarioId: "fsm-2-8",
    planName: "Quote",
    ticks: ticks([
      ["customer-records", "INDETERMINATE", "servicetitan-pricing"],
      ["job-work-orders", "INDETERMINATE", "servicetitan-pricing"],
      ["job-scheduling", "INDETERMINATE", "servicetitan-pricing"],
      ["assignment-dispatch", "INDETERMINATE", "servicetitan-pricing"],
      ["field-mobile-access", "INDETERMINATE", "servicetitan-pricing"],
      ["invoices", "INDETERMINATE", "servicetitan-pricing"],
      ["payment-workflow", "INDETERMINATE", "servicetitan-pricing"],
      ["scenario-headcount", "INDETERMINATE", "servicetitan-pricing"],
    ]),
  },
  {
    slug: "gusto",
    scenarioId: "payroll-5",
    planName: "Simple",
    ticks: ticks([
      ["payroll-calculation", "PASS", "gusto-pricing"],
      ["direct-deposit", "PASS", "gusto-pricing"],
      ["federal-tax-calculation", "PASS", "gusto-pricing"],
      ["federal-tax-filing", "PASS", "gusto-pricing"],
      ["state-tax-support", "PASS", "gusto-pricing"],
      ["w2-filing", "PASS", "gusto-pricing"],
      ["pay-stubs", "PASS", "gusto-pricing"],
      ["scenario-employee-count", "PASS", "gusto-pricing"],
    ]),
  },
  {
    slug: "gusto",
    scenarioId: "payroll-10",
    planName: "Simple",
    ticks: ticks([
      ["payroll-calculation", "PASS", "gusto-pricing"],
      ["direct-deposit", "PASS", "gusto-pricing"],
      ["federal-tax-calculation", "PASS", "gusto-pricing"],
      ["federal-tax-filing", "PASS", "gusto-pricing"],
      ["state-tax-support", "PASS", "gusto-pricing"],
      ["w2-filing", "PASS", "gusto-pricing"],
      ["pay-stubs", "PASS", "gusto-pricing"],
      ["scenario-employee-count", "PASS", "gusto-pricing"],
    ]),
  },
  {
    slug: "patriot-payroll",
    scenarioId: "payroll-5",
    planName: "Full Service Payroll",
    ticks: ticks([
      ["payroll-calculation", "PASS", "patriot-payroll-pricing"],
      ["direct-deposit", "PASS", "patriot-payroll-pricing"],
      ["federal-tax-calculation", "PASS", "patriot-payroll-pricing"],
      ["federal-tax-filing", "PASS", "patriot-payroll-pricing"],
      ["state-tax-support", "PASS", "patriot-payroll-pricing"],
      ["w2-filing", "PASS", "patriot-payroll-pricing"],
      ["pay-stubs", "PASS", "patriot-payroll-pricing"],
      ["scenario-employee-count", "PASS", "patriot-payroll-pricing"],
    ]),
  },
  {
    slug: "patriot-payroll",
    scenarioId: "payroll-10",
    planName: "Full Service Payroll",
    ticks: ticks([
      ["payroll-calculation", "PASS", "patriot-payroll-pricing"],
      ["direct-deposit", "PASS", "patriot-payroll-pricing"],
      ["federal-tax-calculation", "PASS", "patriot-payroll-pricing"],
      ["federal-tax-filing", "PASS", "patriot-payroll-pricing"],
      ["state-tax-support", "PASS", "patriot-payroll-pricing"],
      ["w2-filing", "PASS", "patriot-payroll-pricing"],
      ["pay-stubs", "PASS", "patriot-payroll-pricing"],
      ["scenario-employee-count", "PASS", "patriot-payroll-pricing"],
    ]),
  },
  {
    slug: "freshbooks",
    scenarioId: "inv-5",
    planName: "Lite",
    ticks: ticks([
      ["create-invoice", "PASS", "freshbooks-pricing"],
      ["send-invoice", "PASS", "freshbooks-pricing"],
      ["payment-status", "PASS", "freshbooks-pricing"],
      ["customer-records", "PASS", "freshbooks-pricing"],
      ["payment-accept-or-record", "PASS", "freshbooks-pricing"],
    ]),
  },
  {
    slug: "wave",
    scenarioId: "inv-5",
    planName: "Starter",
    ticks: ticks([
      ["create-invoice", "PASS", "wave-pricing"],
      ["send-invoice", "PASS", "wave-pricing"],
      ["payment-status", "PASS", "wave-pricing"],
      ["customer-records", "PASS", "wave-pricing"],
      ["payment-accept-or-record", "PASS", "wave-pricing"],
    ]),
  },
  {
    slug: "calendly",
    scenarioId: "sched-5",
    planName: "Standard",
    ticks: ticks([
      ["create-appointments", "PASS", "calendly-pricing"],
      ["calendar", "PASS", "calendly-pricing"],
      ["multiple-staff-calendars-5", "PASS", "calendly-pricing"],
    ]),
  },
  {
    slug: "square-appointments",
    scenarioId: "sched-5",
    planName: "Square Free",
    ticks: ticks([
      ["create-appointments", "PASS", "square-appointments-pricing"],
      ["calendar", "PASS", "square-appointments-pricing"],
      ["multiple-staff-calendars-5", "PASS", "square-appointments-pricing"],
    ]),
  },
  {
    slug: "clockify",
    scenarioId: "tt-5",
    planName: "Free",
    ticks: ticks([
      ["time-entry", "PASS", "clockify-pricing"],
      ["timesheets", "PASS", "clockify-pricing"],
      ["scenario-user-count", "PASS", "clockify-pricing"],
      ["export-or-report", "PASS", "clockify-pricing"],
    ]),
  },
  {
    slug: "clockify",
    scenarioId: "tt-10",
    planName: "Basic",
    ticks: ticks([
      ["time-entry", "PASS", "clockify-pricing"],
      ["timesheets", "PASS", "clockify-pricing"],
      ["scenario-user-count", "PASS", "clockify-pricing"],
      ["export-or-report", "PASS", "clockify-pricing"],
    ]),
  },
  {
    slug: "hubstaff",
    scenarioId: "tt-5",
    planName: "Starter",
    ticks: ticks([
      ["time-entry", "PASS", "hubstaff-pricing"],
      ["timesheets", "PASS", "hubstaff-pricing"],
      ["scenario-user-count", "PASS", "hubstaff-pricing"],
      ["export-or-report", "PASS", "hubstaff-pricing"],
    ]),
  },
  {
    slug: "hubstaff",
    scenarioId: "tt-10",
    planName: "Starter",
    ticks: ticks([
      ["time-entry", "PASS", "hubstaff-pricing"],
      ["timesheets", "PASS", "hubstaff-pricing"],
      ["scenario-user-count", "PASS", "hubstaff-pricing"],
      ["export-or-report", "PASS", "hubstaff-pricing"],
    ]),
  },
];

export const pricingChecklists: ProductChecklist[] = [
  ...pricingPilotChecklists,
  ...remainingPricingChecklists,
];

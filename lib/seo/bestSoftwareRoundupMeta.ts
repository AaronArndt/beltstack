export type RoundupCategoryKey =
  | "accounting"
  | "call-tracking"
  | "crm"
  | "email-marketing"
  | "field-service"
  | "helpdesk"
  | "hr"
  | "inventory"
  | "invoicing"
  | "payment-processing"
  | "payroll"
  | "pos"
  | "project-management"
  | "reputation-management"
  | "scheduling"
  | "time-tracking";

const ROUNDUP_META: Record<RoundupCategoryKey, { path: string; title: string; description: string }> = {
  accounting: {
    path: "/accounting/best-accounting-software",
    title: "Best Accounting Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best accounting software for small businesses. See pricing, invoicing, reporting depth, and pros and cons for service-based teams.",
  },
  "call-tracking": {
    path: "/call-tracking/best-call-tracking-software",
    title: "Best Call Tracking Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best call tracking software for small businesses. See attribution, pricing, reporting depth, and pros and cons for service teams.",
  },
  crm: {
    path: "/crm/best-crm-software",
    title: "Best CRM Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best CRM software for small businesses. See lead and pipeline tools, pricing, and pros and cons for contractors and growing teams.",
  },
  "email-marketing": {
    path: "/email-marketing/best-email-marketing-software",
    title: "Best Email Marketing Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best email marketing software for small businesses. See campaign workflows, pricing, key features, and pros and cons for service teams.",
  },
  "field-service": {
    path: "/field-service/best-field-service-software",
    title: "Best Field Service Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best field service software for small businesses. See dispatch, scheduling, invoicing workflows, and pros and cons for field teams.",
  },
  helpdesk: {
    path: "/helpdesk/best-helpdesk-software",
    title: "Best Helpdesk Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best helpdesk software for small businesses. See ticketing workflows, automation, pricing, and pros and cons for support teams today.",
  },
  hr: {
    path: "/hr/best-hr-software",
    title: "Best HR Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best HR software for small businesses. See onboarding workflows, compliance tools, pricing, and pros and cons for growing teams.",
  },
  inventory: {
    path: "/inventory/best-inventory-software",
    title: "Best Inventory Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best inventory software for small businesses. See stock control, reorder workflows, pricing, and pros and cons for operations teams.",
  },
  invoicing: {
    path: "/invoicing/best-invoicing-software",
    title: "Best Invoicing Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best invoicing software for small businesses. See billing automation, payments, pricing, and pros and cons for service-based teams.",
  },
  "payment-processing": {
    path: "/payment-processing/best-payment-processing-software",
    title: "Best Payment Processing Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best payment processing software for small businesses. See fee models, payout workflows, and pros and cons for service operators.",
  },
  payroll: {
    path: "/payroll/best-payroll-software",
    title: "Best Payroll Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best payroll software for small businesses. See pricing, W-2 and contractor support, and pros and cons for compliance workflows.",
  },
  pos: {
    path: "/pos/best-pos-software",
    title: "Best POS Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best POS software for small businesses. See checkout workflows, hardware fit, pricing context, and pros and cons for lean teams.",
  },
  "project-management": {
    path: "/project-management/best-project-management-software",
    title: "Best Project Management Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best project management software for small businesses. See planning tools, collaboration, pricing, and pros and cons for service teams.",
  },
  "reputation-management": {
    path: "/reputation-management/best-reputation-management-software",
    title: "Best Reputation Management Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best reputation management software for small businesses. See review workflows, pricing, and pros and cons for local service teams.",
  },
  scheduling: {
    path: "/scheduling/best-scheduling-software",
    title: "Best Scheduling Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best scheduling software for small businesses. See booking workflows, team availability tools, and pros and cons for service teams.",
  },
  "time-tracking": {
    path: "/time-tracking/best-time-tracking-software",
    title: "Best Time Tracking Software for Small Businesses: Top Options (2026) | BeltStack",
    description:
      "Compare the best time tracking software for small businesses. See timesheets, payroll sync, pricing, and pros and cons for field-based teams.",
  },
};

export function getBestSoftwareRoundupMeta(category: RoundupCategoryKey) {
  return ROUNDUP_META[category];
}


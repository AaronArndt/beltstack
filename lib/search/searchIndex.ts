export type SearchItemType =
  | "Review"
  | "Comparison"
  | "Alternatives"
  | "Guide"
  | "Best Software"
  | "Best For"
  | "Category";

export type SearchIndexItem = {
  title: string;
  href: string;
  type: SearchItemType;
  category: string;
  entity?: string;
  keywords: string[];
};

/**
  * Local search index for BeltStack.
  *
  * This is intentionally small and focused on primary entities/topics:
  * - key reviews
  * - high-intent comparisons
  * - alternatives pages
  * - best-software roundups
  * - major best-for pages
  * - major guides
  * - category hubs
  *
  * In the future this can be generated automatically from hub data files.
  */
export const searchIndex: SearchIndexItem[] = [
  // ——— Category hubs ———
  {
    title: "Payroll Software",
    href: "/payroll",
    type: "Category",
    category: "Payroll",
    keywords: ["payroll", "payroll software", "contractor payroll", "trade payroll"],
  },
  {
    title: "Accounting Software",
    href: "/accounting",
    type: "Category",
    category: "Accounting",
    keywords: ["accounting", "bookkeeping", "contractor accounting"],
  },
  {
    title: "CRM Software",
    href: "/crm",
    type: "Category",
    category: "CRM",
    keywords: ["crm", "crm software", "customer management"],
  },
  {
    title: "Field Service Software",
    href: "/field-service",
    type: "Category",
    category: "Field Service",
    keywords: ["field service", "fsm", "hvac software", "plumbing software"],
  },
  {
    title: "Project Management Software",
    href: "/project-management",
    type: "Category",
    category: "Project Management",
    keywords: ["project management", "job management", "projects"],
  },
  {
    title: "Helpdesk Software",
    href: "/helpdesk",
    type: "Category",
    category: "Helpdesk",
    keywords: ["helpdesk", "support software", "ticketing"],
  },
  {
    title: "POS Software",
    href: "/pos",
    type: "Category",
    category: "POS",
    keywords: ["pos", "point of sale", "retail pos"],
  },
  {
    title: "Inventory Software",
    href: "/inventory",
    type: "Category",
    category: "Inventory",
    keywords: ["inventory", "inventory management", "stock tracking"],
  },
  {
    title: "Scheduling Software",
    href: "/scheduling",
    type: "Category",
    category: "Scheduling",
    keywords: ["scheduling", "appointment scheduling", "booking"],
  },
  {
    title: "Time Tracking Software",
    href: "/time-tracking",
    type: "Category",
    category: "Time Tracking",
    keywords: ["time tracking", "timesheets", "billable hours"],
  },
  {
    title: "HR Software",
    href: "/hr",
    type: "Category",
    category: "HR",
    keywords: ["hr", "hr software", "people ops"],
  },
  {
    title: "Invoicing Software",
    href: "/invoicing",
    type: "Category",
    category: "Invoicing",
    keywords: ["invoicing", "invoice software", "billing"],
  },

  // ——— Reviews (popular entities) ———
  {
    title: "Gusto Review (2026)",
    href: "/payroll/review/gusto",
    type: "Review",
    category: "Payroll",
    entity: "Gusto",
    keywords: ["gusto", "gusto review", "gusto payroll"],
  },
  {
    title: "QuickBooks Online Review (2026)",
    href: "/accounting/review/quickbooks-online",
    type: "Review",
    category: "Accounting",
    entity: "QuickBooks Online",
    keywords: ["quickbooks", "quickbooks online", "quickbooks accounting"],
  },
  {
    title: "HubSpot CRM Review (2026)",
    href: "/crm/review/hubspot",
    type: "Review",
    category: "CRM",
    entity: "HubSpot",
    keywords: ["hubspot", "hubspot crm", "hubspot review"],
  },
  {
    title: "Zendesk Review (2026)",
    href: "/helpdesk/review/zendesk",
    type: "Review",
    category: "Helpdesk",
    entity: "Zendesk",
    keywords: ["zendesk", "zendesk review", "zendesk helpdesk"],
  },
  {
    title: "ServiceTitan Review (2026)",
    href: "/field-service/review/servicetitan",
    type: "Review",
    category: "Field Service",
    entity: "ServiceTitan",
    keywords: ["servicetitan", "servicetitan review", "field service software"],
  },
  {
    title: "Square POS Review (2026)",
    href: "/pos/review/square-pos",
    type: "Review",
    category: "POS",
    entity: "Square POS",
    keywords: ["square", "square pos", "square review"],
  },

  // ——— Alternatives ———
  {
    title: "Best Gusto Alternatives (2026)",
    href: "/payroll/alternatives/gusto",
    type: "Alternatives",
    category: "Payroll",
    entity: "Gusto",
    keywords: ["gusto", "gusto alternatives", "payroll alternatives"],
  },
  {
    title: "Best QuickBooks Online Alternatives (2026)",
    href: "/accounting/alternatives/quickbooks-online",
    type: "Alternatives",
    category: "Accounting",
    entity: "QuickBooks Online",
    keywords: ["quickbooks", "quickbooks alternatives", "accounting alternatives"],
  },
  {
    title: "Best HubSpot Alternatives (2026)",
    href: "/crm/alternatives/hubspot",
    type: "Alternatives",
    category: "CRM",
    entity: "HubSpot",
    keywords: ["hubspot", "hubspot alternatives", "crm alternatives"],
  },
  {
    title: "Best Zendesk Alternatives (2026)",
    href: "/helpdesk/alternatives/zendesk",
    type: "Alternatives",
    category: "Helpdesk",
    entity: "Zendesk",
    keywords: ["zendesk", "zendesk alternatives", "helpdesk alternatives"],
  },
  {
    title: "Best ServiceTitan Alternatives (2026)",
    href: "/field-service/alternatives/servicetitan",
    type: "Alternatives",
    category: "Field Service",
    entity: "ServiceTitan",
    keywords: ["servicetitan", "servicetitan alternatives", "field service alternatives"],
  },
  {
    title: "Best Square POS Alternatives (2026)",
    href: "/pos/alternatives/square-pos",
    type: "Alternatives",
    category: "POS",
    entity: "Square POS",
    keywords: ["square", "square alternatives", "pos alternatives"],
  },

  // ——— Comparisons ———
  {
    title: "Gusto vs OnPay (2026)",
    href: "/payroll/compare/gusto-vs-onpay",
    type: "Comparison",
    category: "Payroll",
    keywords: ["gusto", "onpay", "gusto vs onpay", "payroll comparison"],
  },
  {
    title: "Gusto vs QuickBooks Payroll (2026)",
    href: "/payroll/compare/gusto-vs-quickbooks-payroll",
    type: "Comparison",
    category: "Payroll",
    keywords: ["gusto", "quickbooks payroll", "gusto vs quickbooks"],
  },
  {
    title: "HubSpot vs Salesforce (2026)",
    href: "/crm/compare/hubspot-vs-salesforce",
    type: "Comparison",
    category: "CRM",
    keywords: ["hubspot", "salesforce", "hubspot vs salesforce", "crm comparison"],
  },
  {
    title: "Zendesk vs Freshdesk (2026)",
    href: "/helpdesk/compare/zendesk-vs-freshdesk",
    type: "Comparison",
    category: "Helpdesk",
    keywords: ["zendesk", "freshdesk", "zendesk vs freshdesk", "helpdesk comparison"],
  },
  {
    title: "ServiceTitan vs Jobber (2026)",
    href: "/field-service/compare/servicetitan-vs-jobber",
    type: "Comparison",
    category: "Field Service",
    keywords: ["servicetitan", "jobber", "servicetitan vs jobber", "field service comparison"],
  },
  {
    title: "Square POS vs Shopify POS (2026)",
    href: "/pos/compare/square-pos-vs-shopify-pos",
    type: "Comparison",
    category: "POS",
    keywords: ["square pos", "shopify pos", "square vs shopify", "pos comparison"],
  },

  // ——— Best software roundups ———
  {
    title: "Best Payroll Software (2026)",
    href: "/payroll/best-payroll-software",
    type: "Best Software",
    category: "Payroll",
    keywords: ["payroll software", "best payroll", "best payroll software"],
  },
  {
    title: "Best Accounting Software (2026)",
    href: "/accounting/best-accounting-software",
    type: "Best Software",
    category: "Accounting",
    keywords: ["accounting software", "best accounting", "best accounting software"],
  },
  {
    title: "Best CRM Software (2026)",
    href: "/crm/best-crm-software",
    type: "Best Software",
    category: "CRM",
    keywords: ["crm software", "best crm", "best crm software"],
  },
  {
    title: "Best Helpdesk Software (2026)",
    href: "/helpdesk/best-helpdesk-software",
    type: "Best Software",
    category: "Helpdesk",
    keywords: ["helpdesk software", "best helpdesk", "best helpdesk software"],
  },
  {
    title: "Best Field Service Software (2026)",
    href: "/field-service/best-field-service-software",
    type: "Best Software",
    category: "Field Service",
    keywords: ["field service software", "best field service"],
  },
  {
    title: "Best POS Software (2026)",
    href: "/pos/best-pos-software",
    type: "Best Software",
    category: "POS",
    keywords: ["pos software", "best pos", "best pos software"],
  },
  {
    title: "Best Inventory Software (2026)",
    href: "/inventory/best-inventory-software",
    type: "Best Software",
    category: "Inventory",
    keywords: ["inventory software", "best inventory", "best inventory software"],
  },
  {
    title: "Best HR Software (2026)",
    href: "/hr/best-hr-software",
    type: "Best Software",
    category: "HR",
    keywords: ["hr software", "best hr", "best hr software"],
  },
  {
    title: "Best Scheduling Software (2026)",
    href: "/scheduling/best-scheduling-software",
    type: "Best Software",
    category: "Scheduling",
    keywords: ["scheduling software", "best scheduling", "best scheduling software"],
  },
  {
    title: "Best Time Tracking Software (2026)",
    href: "/time-tracking/best-time-tracking-software",
    type: "Best Software",
    category: "Time Tracking",
    keywords: ["time tracking software", "best time tracking"],
  },

  // ——— Best-for pages (selected high-intent) ———
  {
    title: "Best Payroll Software for Small Business",
    href: "/payroll/best-for/small-business",
    type: "Best For",
    category: "Payroll",
    keywords: ["payroll", "small business", "best payroll for small business"],
  },
  {
    title: "Best Payroll Software for Contractors",
    href: "/payroll/best-for/contractors",
    type: "Best For",
    category: "Payroll",
    keywords: ["payroll", "contractors", "best payroll for contractors"],
  },
  {
    title: "Best Field Service Software for HVAC",
    href: "/field-service/best-for/hvac",
    type: "Best For",
    category: "Field Service",
    keywords: ["field service", "hvac", "hvac software"],
  },
  {
    title: "Best Field Service Software for Plumbing",
    href: "/field-service/best-for/plumbing",
    type: "Best For",
    category: "Field Service",
    keywords: ["field service", "plumbing", "plumbing software"],
  },
  {
    title: "Best POS for Small Business",
    href: "/pos/best-for/small-business",
    type: "Best For",
    category: "POS",
    keywords: ["pos", "small business", "best pos for small business"],
  },
  {
    title: "Best Inventory Software for Small Business",
    href: "/inventory/best-for/small-business",
    type: "Best For",
    category: "Inventory",
    keywords: ["inventory", "small business", "inventory software for small business"],
  },

  // ——— Guides (major) ———
  {
    title: "How Payroll Software Works",
    href: "/payroll/guides/how-payroll-software-works",
    type: "Guide",
    category: "Payroll",
    keywords: ["how payroll software works", "payroll guide"],
  },
  {
    title: "How to Choose Field Service Software",
    href: "/field-service/guides/how-to-choose-field-service-software",
    type: "Guide",
    category: "Field Service",
    keywords: ["how to choose field service software", "field service guide"],
  },
  {
    title: "Best HR Software for Small Business",
    href: "/hr/guides/best-hr-software-for-small-business",
    type: "Guide",
    category: "HR",
    keywords: ["hr software", "best hr software for small business"],
  },
  {
    title: "Project Management for Small Business",
    href: "/project-management/guides/project-management-for-small-business",
    type: "Guide",
    category: "Project Management",
    keywords: ["project management", "small business", "project management guide"],
  },
  {
    title: "Helpdesk Software for Startups",
    href: "/helpdesk/guides/helpdesk-software-for-startups",
    type: "Guide",
    category: "Helpdesk",
    keywords: ["helpdesk", "startups", "helpdesk software for startups"],
  },
  {
    title: "Inventory Software for Ecommerce",
    href: "/inventory/guides/inventory-software-for-ecommerce",
    type: "Guide",
    category: "Inventory",
    keywords: ["inventory", "ecommerce", "inventory software for ecommerce"],
  },
];


/**
 * Homepage content and discovery data.
 * Used by app/page.tsx for the software-discovery homepage.
 */

export const HERO_CATEGORY_CHIPS = [
  { label: "Payroll", href: "/payroll" },
  { label: "CRM", href: "/crm" },
  { label: "Field Service", href: "/field-service" },
  { label: "Helpdesk", href: "/helpdesk" },
  { label: "POS", href: "/pos" },
  { label: "Inventory", href: "/inventory" },
  { label: "Scheduling", href: "/scheduling" },
  { label: "HR", href: "/hr" },
] as const;

export type FeaturedSoftwareCard = {
  name: string;
  categoryLabel: string;
  rating: string;
  logoSrc: string;
  features: string[];
  reviewHref: string;
};

export const FEATURED_SOFTWARE: FeaturedSoftwareCard[] = [
  {
    name: "Gusto",
    categoryLabel: "Payroll",
    rating: "4.8",
    logoSrc: "/Logos/gusto.jpeg",
    features: ["Full-service payroll", "Contractor payments", "HR onboarding"],
    reviewHref: "/payroll/review/gusto",
  },
  {
    name: "QuickBooks Online",
    categoryLabel: "Accounting",
    rating: "4.6",
    logoSrc: "/Logos/quickbooks.png",
    features: ["Bookkeeping", "Invoicing", "Reporting"],
    reviewHref: "/accounting/review/quickbooks-online",
  },
  {
    name: "HubSpot",
    categoryLabel: "CRM",
    rating: "4.6",
    logoSrc: "/Logos/hubspot.jpeg",
    features: ["Sales pipeline", "Contact management", "Marketing integrations"],
    reviewHref: "/crm/review/hubspot",
  },
  {
    name: "Zendesk",
    categoryLabel: "Helpdesk",
    rating: "4.5",
    logoSrc: "/Logos/zendesk.jpeg",
    features: ["Ticketing workflows", "Multi-channel support", "Automation"],
    reviewHref: "/helpdesk/review/zendesk",
  },
  {
    name: "ServiceTitan",
    categoryLabel: "Field Service",
    rating: "4.7",
    logoSrc: "/Logos/servicetitan.png",
    features: ["Dispatching", "Estimates & invoicing", "Revenue growth"],
    reviewHref: "/field-service/review/servicetitan",
  },
  {
    name: "Square POS",
    categoryLabel: "POS",
    rating: "4.6",
    logoSrc: "/Logos/square.jpeg",
    features: ["POS + payments", "Inventory tracking", "Easy SMB setup"],
    reviewHref: "/pos/review/square-pos",
  },
];

export const SOFTWARE_CATEGORIES = [
  { label: "Payroll", href: "/payroll", description: "Payroll software for small business" },
  { label: "Accounting", href: "/accounting", description: "Accounting and bookkeeping" },
  { label: "Invoicing", href: "/invoicing", description: "Invoicing software" },
  { label: "Time Tracking", href: "/time-tracking", description: "Time tracking tools" },
  { label: "CRM", href: "/crm", description: "Customer relationship management" },
  { label: "Project Management", href: "/project-management", description: "Project management software" },
  { label: "Field Service", href: "/field-service", description: "Field service management" },
  { label: "Scheduling", href: "/scheduling", description: "Scheduling and booking" },
  { label: "HR", href: "/hr", description: "HR software" },
  { label: "Inventory", href: "/inventory", description: "Inventory management" },
  { label: "POS", href: "/pos", description: "Point of sale software" },
  { label: "Helpdesk", href: "/helpdesk", description: "Helpdesk and support" },
] as const;

export const POPULAR_COMPARISONS = [
  { label: "Gusto vs OnPay", href: "/payroll/compare/gusto-vs-onpay" },
  { label: "HubSpot vs Salesforce", href: "/crm/compare/hubspot-vs-salesforce" },
  { label: "Zendesk vs Freshdesk", href: "/helpdesk/compare/zendesk-vs-freshdesk" },
  { label: "Square POS vs Shopify POS", href: "/pos/compare/square-pos-vs-shopify-pos" },
  { label: "ServiceTitan vs Jobber", href: "/field-service/compare/servicetitan-vs-jobber" },
] as const;

export const COMPARE_HUB_LINKS = [
  { label: "Payroll comparisons", href: "/payroll/compare" },
  { label: "CRM comparisons", href: "/crm/compare" },
  { label: "Helpdesk comparisons", href: "/helpdesk/compare" },
] as const;

export const BEST_SOFTWARE_ROUNDUPS = [
  { label: "Best Payroll Software", href: "/payroll/best-payroll-software" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Best Project Management Software", href: "/project-management/best-project-management-software" },
  { label: "Best Field Service Software", href: "/field-service/best-field-service-software" },
  { label: "Best POS Software", href: "/pos/best-pos-software" },
  { label: "Best Inventory Software", href: "/inventory/best-inventory-software" },
  { label: "Best HR Software", href: "/hr/best-hr-software" },
  { label: "Best Scheduling Software", href: "/scheduling/best-scheduling-software" },
  { label: "Best Accounting Software", href: "/accounting/best-accounting-software" },
] as const;

export const TRADES = [
  { label: "HVAC", href: "/field-service/best-for/hvac" },
  { label: "Plumbing", href: "/field-service/best-for/plumbing" },
  { label: "Electrical", href: "/field-service/best-for/electricians" },
  { label: "Landscaping", href: "/payroll/best-for/landscaping" },
  { label: "Roofing", href: "/payroll/best-for/roofing" },
  { label: "Cleaning Services", href: "/payroll/best-for/cleaning-business" },
] as const;

export const LATEST_GUIDES = [
  { title: "How Payroll Software Works", href: "/payroll/guides/how-payroll-software-works", category: "Payroll" },
  { title: "How to Choose Field Service Software", href: "/field-service/guides/how-to-choose-field-service-software", category: "Field Service" },
  { title: "Best HR Software for Small Business", href: "/hr/guides/best-hr-software-for-small-business", category: "HR" },
  { title: "Project Management for Small Business", href: "/project-management/guides/project-management-for-small-business", category: "Project Management" },
  { title: "Helpdesk Software for Startups", href: "/helpdesk/guides/helpdesk-software-for-startups", category: "Helpdesk" },
  { title: "Inventory Software for Ecommerce", href: "/inventory/guides/inventory-software-for-ecommerce", category: "Inventory" },
] as const;

export const TRUST_ITEMS = [
  { heading: "Independent Reviews", body: "We test software ourselves and publish honest reviews. No pay-to-rank." },
  { heading: "Built for Real Businesses", body: "Reviews and comparisons are written for small businesses and growing teams." },
  { heading: "Compare Before You Commit", body: "Side-by-side comparisons so you can see pricing, features, and fit in one place." },
] as const;

/**
 * Map search query (lowercase, trimmed) to destination URL.
 * Used for hero search routing without a full search API.
 */
export const SEARCH_DESTINATIONS: Record<string, string> = {
  gusto: "/payroll/review/gusto",
  quickbooks: "/accounting/review/quickbooks-online",
  hubspot: "/crm/review/hubspot",
  salesforce: "/crm/review/salesforce",
  zendesk: "/helpdesk/review/zendesk",
  freshdesk: "/helpdesk/review/freshdesk",
  servicetitan: "/field-service/review/servicetitan",
  jobber: "/field-service/review/jobber",
  square: "/pos/review/square-pos",
  shopify: "/pos/review/shopify-pos",
  payroll: "/payroll",
  "payroll software": "/payroll",
  accounting: "/accounting",
  "accounting software": "/accounting",
  crm: "/crm",
  "crm software": "/crm",
  helpdesk: "/helpdesk",
  "helpdesk software": "/helpdesk",
  "field service": "/field-service",
  "field service software": "/field-service",
  pos: "/pos",
  "pos software": "/pos",
  inventory: "/inventory",
  "inventory software": "/inventory",
  scheduling: "/scheduling",
  "scheduling software": "/scheduling",
  hr: "/hr",
  "hr software": "/hr",
  invoicing: "/invoicing",
  "time tracking": "/time-tracking",
  "project management": "/project-management",
  contractors: "/payroll/best-for/contractors",
  "payroll for contractors": "/payroll/best-for/contractors",
  hvac: "/field-service/best-for/hvac",
  plumbing: "/field-service/best-for/plumbing",
  "small business": "/payroll/best-for/small-business",
};

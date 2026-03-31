import { emailMarketingLogoForSlug } from "@/lib/data/emailMarketingLogos";
import {
  getAccountingReviewUrl,
  getCrmReviewUrl,
  getEmailMarketingReviewUrl,
  getFieldServiceReviewUrl,
  getInvoicingReviewUrl,
  getSchedulingReviewUrl,
} from "@/lib/routes";

/** Homepage trade discovery â€” trades users can pick in the hero-adjacent section. */
export const DISCOVERY_TRADES = [
  { id: "hvac", label: "HVAC", headingBusinesses: "HVAC", tipPhrase: "HVAC businesses" },
  { id: "plumbing", label: "Plumbing", headingBusinesses: "Plumbing", tipPhrase: "plumbing businesses" },
  { id: "electrical", label: "Electrical", headingBusinesses: "Electrical", tipPhrase: "electrical businesses" },
  { id: "landscaping", label: "Landscaping", headingBusinesses: "Landscaping", tipPhrase: "landscaping businesses" },
  { id: "roofing", label: "Roofing", headingBusinesses: "Roofing", tipPhrase: "roofing businesses" },
  { id: "cleaning", label: "Cleaning", headingBusinesses: "Cleaning", tipPhrase: "cleaning businesses" },
  { id: "general-contractor", label: "General Contractor", headingBusinesses: "General Contractor", tipPhrase: "general contractor businesses" },
] as const;

export const DISCOVERY_CATEGORIES = [
  { id: "field-service", label: "Field Service", headingSegment: "Field Service" },
  { id: "crm", label: "CRM", headingSegment: "CRM" },
  { id: "scheduling", label: "Scheduling", headingSegment: "Scheduling" },
  { id: "invoicing", label: "Invoicing & Payments", headingSegment: "Invoicing & Payments" },
  { id: "accounting", label: "Accounting", headingSegment: "Accounting" },
  { id: "marketing", label: "Marketing", headingSegment: "Marketing" },
] as const;

export type DiscoveryTradeId = (typeof DISCOVERY_TRADES)[number]["id"];
export type DiscoveryCategoryId = (typeof DISCOVERY_CATEGORIES)[number]["id"];

/** Optional trade-specific ranking boost and bullet overrides (finalScore = overallScore + tradePriority). */
export type DiscoveryTradeModifier = {
  tradePriority?: number;
  bullets?: string[];
};

/**
 * Canonical product row for homepage discovery. Expand `tradeModifiers` per trade to tailor bullets
 * and ranking without duplicating whole cards in the UI.
 */
export type DiscoveryProduct = {
  id: string;
  category: DiscoveryCategoryId;
  name: string;
  logoSrc: string;
  visitUrl: string;
  reviewHref: string;
  /** Base BeltStack score (0â€“5 scale) */
  overallScore: number;
  defaultBullets: string[];
  /** When set, product only appears for these trades. Omit = all trades. */
  supportedTrades?: DiscoveryTradeId[];
  tradeModifiers?: Partial<Record<DiscoveryTradeId, DiscoveryTradeModifier>>;
  /** Prefer as the â€œlighter / valueâ€ slot when breaking ties */
  valueTier?: boolean;
};

export type DiscoverySoftwareCard = {
  name: string;
  logoSrc: string;
  rating: string;
  bullets: string[];
  visitUrl: string;
  reviewHref: string;
};

export type DiscoveryCombo = {
  subcopy: string;
  tip: string;
  software: DiscoverySoftwareCard[] | null;
};

type TradeRow = (typeof DISCOVERY_TRADES)[number];

// â€”â€”â€” Product catalog â€”â€”â€”

const DISCOVERY_PRODUCTS: DiscoveryProduct[] = [
  // â€” Field service â€”
  {
    id: "fs-housecall",
    category: "field-service",
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    visitUrl: "https://housecallpro.com",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
    overallScore: 4.7,
    defaultBullets: ["Job scheduling & dispatch", "Customer messaging & follow-ups", "Invoicing & payments"],
    tradeModifiers: {
      hvac: {
        bullets: ["Job scheduling & dispatching", "GPS tracking & time tracking", "Invoicing & payments"],
      },
      plumbing: {
        tradePriority: 0.06,
        bullets: ["Emergency & routed dispatch", "Technician mobile workflows", "Fast invoicing after jobs"],
      },
      electrical: {
        tradePriority: 0.05,
        bullets: ["Job files & photo capture", "Multi-tech dispatch", "Progress invoicing & estimates"],
      },
      landscaping: {
        tradePriority: 0.05,
        bullets: ["Recurring route templates", "Crew scheduling", "Seasonal invoicing"],
      },
      roofing: {
        tradePriority: 0.04,
        bullets: ["Inspection-to-production handoff", "Estimate follow-through", "Production job tracking"],
      },
      cleaning: {
        tradePriority: 0.08,
        bullets: ["High-volume booking", "Recurring visit schedules", "Quick-pay invoicing"],
      },
      "general-contractor": {
        tradePriority: 0.05,
        bullets: ["Job documentation", "Customer comms hub", "Invoice against job phases"],
      },
    },
  },
  {
    id: "fs-jobber",
    category: "field-service",
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    visitUrl: "https://getjobber.com",
    reviewHref: getFieldServiceReviewUrl("jobber"),
    overallScore: 4.6,
    defaultBullets: ["Quotes & job management", "Client reminders", "Invoicing & payments"],
    tradeModifiers: {
      hvac: { bullets: ["Quotes & job management", "Customer communication", "Invoicing & payments"] },
      plumbing: {
        tradePriority: 0.12,
        bullets: ["Dispatch-friendly job board", "On-my-way texts", "Invoices tied to jobs"],
      },
      landscaping: {
        tradePriority: 0.1,
        bullets: ["Recurring jobs & visits", "Route-minded scheduling", "Client follow-up automation"],
      },
      cleaning: {
        tradePriority: 0.06,
        bullets: ["Simple crew calendar", "Recurring billing", "Payment collection"],
      },
      "general-contractor": {
        tradePriority: 0.08,
        bullets: ["Quotes to jobs in one flow", "Change-order friendly", "Field + office visibility"],
      },
    },
  },
  {
    id: "fs-servicetitan",
    category: "field-service",
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    visitUrl: "https://servicetitan.com",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
    overallScore: 4.5,
    defaultBullets: ["End-to-end field operations", "Technician & inventory tools", "Reporting & KPIs"],
    tradeModifiers: {
      hvac: {
        tradePriority: 0.18,
        bullets: ["All-in-one HVAC management", "Technician & inventory mgmt", "Advanced reporting"],
      },
      plumbing: { tradePriority: 0.14, bullets: ["High-volume dispatch", "Pricebook & proposals", "Marketing add-ons"] },
      electrical: { tradePriority: 0.12, bullets: ["Project-scale dispatch", "Technician performance", "Inventory & trucks"] },
      roofing: { tradePriority: 0.15, bullets: ["Sales-to-production workflow", "Large-job reporting", "Capacity visibility"] },
      "general-contractor": {
        tradePriority: 0.1,
        bullets: ["Multi-crew coordination", "Job costing visibility", "Executive reporting"],
      },
    },
  },
  {
    id: "fs-workiz",
    category: "field-service",
    name: "Workiz",
    logoSrc: "/Logos/workiz.jpeg",
    visitUrl: "https://www.workiz.com",
    reviewHref: getFieldServiceReviewUrl("workiz"),
    overallScore: 4.4,
    valueTier: true,
    defaultBullets: ["Scheduling & dispatch", "SMS client updates", "Invoicing & payments"],
    tradeModifiers: {
      cleaning: {
        tradePriority: 0.22,
        bullets: ["Built for high visit volume", "Recurring jobs", "Simple invoicing & payments"],
      },
      plumbing: {
        tradePriority: 0.08,
        bullets: ["Affordable all-in-one FSM", "Call tracking hooks", "Tech-friendly mobile"],
      },
      landscaping: {
        tradePriority: 0.12,
        bullets: ["Route & job lists", "Team chat", "Straightforward pricing tiers"],
      },
    },
    supportedTrades: ["cleaning", "plumbing", "landscaping", "roofing"],
  },
  {
    id: "fs-fieldpulse",
    category: "field-service",
    name: "FieldPulse",
    logoSrc: "/Logos/fieldpulse.png",
    visitUrl: "https://fieldpulse.com",
    reviewHref: getFieldServiceReviewUrl("fieldpulse"),
    overallScore: 4.4,
    valueTier: true,
    defaultBullets: ["Drag-and-drop scheduling", "Estimates & jobs", "Technician app"],
    tradeModifiers: {
      electrical: {
        tradePriority: 0.2,
        bullets: ["Electrical-minded job templates", "Estimate versioning", "Field photo logging"],
      },
      hvac: { tradePriority: 0.05, bullets: ["Operations-heavy SMB FSM", "Dispatch boards", "QuickBooks-friendly"] },
    },
    supportedTrades: ["electrical", "hvac", "plumbing", "roofing"],
  },
  {
    id: "fs-service-fusion",
    category: "field-service",
    name: "Service Fusion",
    logoSrc: "/Logos/servicefusion.jpg",
    visitUrl: "https://servicefusion.com",
    reviewHref: getFieldServiceReviewUrl("service-fusion"),
    overallScore: 4.4,
    defaultBullets: ["Mid-market FSM", "Dispatch & routing", "Accounting integrations"],
    tradeModifiers: {
      roofing: {
        tradePriority: 0.18,
        bullets: ["Larger residential jobs", "Progress billing support", "Office + field alignment"],
      },
      hvac: { tradePriority: 0.06, bullets: ["Trade contractor FSM", "Estimates & work orders", "Operational reporting"] },
    },
    supportedTrades: ["roofing", "hvac", "plumbing", "electrical"],
  },

  // â€” CRM â€”
  {
    id: "crm-hubspot",
    category: "crm",
    name: "HubSpot",
    logoSrc: "/Logos/hubspot.jpeg",
    visitUrl: "https://www.hubspot.com",
    reviewHref: getCrmReviewUrl("hubspot"),
    overallScore: 4.6,
    defaultBullets: ["Contact & deal pipeline", "Marketing + sales alignment", "Automation & integrations"],
    tradeModifiers: {
      cleaning: {
        tradePriority: 0.1,
        bullets: ["Simple pipeline for repeat clients", "Email nurture", "Mobile app for reps"],
      },
      landscaping: { tradePriority: 0.06, bullets: ["Seasonal campaign hooks", "Deal stages for bids", "Form & ad integrations"] },
      roofing: { tradePriority: 0.05, bullets: ["Lead intake from web/ads", "Follow-up automation", "Sales reporting"] },
    },
  },
  {
    id: "crm-salesforce",
    category: "crm",
    name: "Salesforce",
    logoSrc: "/Logos/salesforce.jpeg",
    visitUrl: "https://www.salesforce.com",
    reviewHref: getCrmReviewUrl("salesforce"),
    overallScore: 4.5,
    defaultBullets: ["Sales Cloud & forecasting", "Deep customization", "Enterprise integrations"],
    tradeModifiers: {
      "general-contractor": {
        tradePriority: 0.14,
        bullets: ["Multi-project visibility", "Complex pipeline rules", "Partner & sub workflows"],
      },
      electrical: {
        tradePriority: 0.08,
        bullets: ["Large bid tracking", "Service division reporting", "Integration depth"],
      },
      roofing: { tradePriority: 0.07, bullets: ["Enterprise lead volume", "Role-based access", "Custom dashboards"] },
    },
  },
  {
    id: "crm-pipedrive",
    category: "crm",
    name: "Pipedrive",
    logoSrc: "/Logos/pipedrive.jpeg",
    visitUrl: "https://www.pipedrive.com",
    reviewHref: getCrmReviewUrl("pipedrive"),
    overallScore: 4.5,
    defaultBullets: ["Visual pipeline", "Activity-based selling", "Fast team adoption"],
    tradeModifiers: {
      landscaping: {
        tradePriority: 0.16,
        bullets: ["Visual stages for estimates", "Reminder automation", "Lightweight for field sales"],
      },
      plumbing: { tradePriority: 0.1, bullets: ["Fast lead follow-up", "Call & note logging", "Mobile-first reps"] },
      hvac: { tradePriority: 0.08, bullets: ["Clear next-step tasks", "Seasonal opportunity lists", "Simple admin"] },
    },
  },
  {
    id: "crm-zoho",
    category: "crm",
    name: "Zoho CRM",
    logoSrc: "/Logos/zoho.png",
    visitUrl: "https://www.zoho.com/crm",
    reviewHref: getCrmReviewUrl("zoho-crm"),
    overallScore: 4.4,
    valueTier: true,
    defaultBullets: ["Full CRM at lower cost", "Workflow automation", "Zoho suite tie-ins"],
    tradeModifiers: {
      cleaning: {
        tradePriority: 0.12,
        bullets: ["Budget-friendly seats", "Blueprint basics", "SMS/email workflows"],
      },
      electrical: { tradePriority: 0.06, bullets: ["Affordable scaling", "Integration with Zoho apps", "Territory ideas"] },
    },
    supportedTrades: ["cleaning", "electrical", "landscaping", "plumbing", "hvac"],
  },
  {
    id: "crm-monday",
    category: "crm",
    name: "monday sales CRM",
    logoSrc: "/Logos/monday.jpeg",
    visitUrl: "https://monday.com",
    reviewHref: getCrmReviewUrl("monday-crm"),
    overallScore: 4.4,
    defaultBullets: ["Work OS + deals", "Cross-team boards", "Template-based setup"],
    tradeModifiers: {
      "general-contractor": {
        tradePriority: 0.2,
        bullets: ["Jobs + client tracking in one board", "Sub handoff visibility", "Post-sales checklists"],
      },
      roofing: { tradePriority: 0.06, bullets: ["Boards for production handoff", "Client comms log", "Vendor tasks"] },
    },
    supportedTrades: ["general-contractor", "roofing", "electrical", "hvac"],
  },

  // â€” Scheduling â€”
  {
    id: "sch-calendly",
    category: "scheduling",
    name: "Calendly",
    logoSrc: "/Logos/calendly.png",
    visitUrl: "https://calendly.com",
    reviewHref: getSchedulingReviewUrl("calendly"),
    overallScore: 4.7,
    defaultBullets: ["Shareable booking links", "Calendar sync & reminders", "Team scheduling"],
    tradeModifiers: {
      electrical: { tradePriority: 0.05, bullets: ["Site-estimate booking", "Reminders for permit walks", "Team round-robin"] },
      roofing: { tradePriority: 0.06, bullets: ["Inspection scheduling", "Sales calendar clarity", "Automated reminders"] },
    },
  },
  {
    id: "sch-acuity",
    category: "scheduling",
    name: "Acuity Scheduling",
    logoSrc: "/Logos/acuity.jpeg",
    visitUrl: "https://www.acuityscheduling.com",
    reviewHref: getSchedulingReviewUrl("acuity-scheduling"),
    overallScore: 4.6,
    defaultBullets: ["Intake forms & packages", "Payments at booking", "Multi-staff calendars"],
    tradeModifiers: {
      cleaning: {
        tradePriority: 0.14,
        bullets: ["Recurring visit types", "Packages for clean plans", "Card on file flows"],
      },
      landscaping: { tradePriority: 0.1, bullets: ["Seasonal service menus", "Deposit-friendly booking", "Multi-crew views"] },
      "general-contractor": { tradePriority: 0.08, bullets: ["Consultation intake", "Branded booking", "Multi-location staff"] },
    },
  },
  {
    id: "sch-setmore",
    category: "scheduling",
    name: "Setmore",
    logoSrc: "/Logos/setmore.jpeg",
    visitUrl: "https://www.setmore.com",
    reviewHref: getSchedulingReviewUrl("setmore"),
    overallScore: 4.4,
    valueTier: true,
    defaultBullets: ["Free tier for solos", "Online booking page", "Reminders & staff slots"],
    tradeModifiers: {
      cleaning: { tradePriority: 0.08, bullets: ["Low-cost start", "Cleaning-friendly templates", "SMS reminders"] },
      plumbing: { tradePriority: 0.06, bullets: ["Quick booking page", "Emergency-friendly slots", "Mobile admin"] },
    },
  },
  {
    id: "sch-youcanbookme",
    category: "scheduling",
    name: "YouCanBook.me",
    logoSrc: "/Logos/youcanbookme.jpeg",
    visitUrl: "https://youcanbook.me",
    reviewHref: getSchedulingReviewUrl("youcanbookme"),
    overallScore: 4.5,
    valueTier: true,
    defaultBullets: ["Team & round-robin", "Calendar branding", "Affordable paid tiers"],
    tradeModifiers: {
      electrical: {
        tradePriority: 0.12,
        bullets: ["Multi-tech calendars", "Service-area friendly", "Straightforward pricing"],
      },
      landscaping: { tradePriority: 0.08, bullets: ["Shared team links", "Seasonal hours", "Google/Outlook sync"] },
    },
    supportedTrades: ["electrical", "landscaping", "hvac", "plumbing", "roofing"],
  },
  {
    id: "sch-simplybook",
    category: "scheduling",
    name: "SimplyBook.me",
    logoSrc: "/Logos/simplybook.jpeg",
    visitUrl: "https://simplybook.me",
    reviewHref: getSchedulingReviewUrl("simplybookme"),
    overallScore: 4.4,
    valueTier: true,
    defaultBullets: ["Service-industry templates", "Custom booking UI", "Membership options"],
    tradeModifiers: {
      cleaning: { tradePriority: 0.1, bullets: ["High-volume services", "Membership-style bookings", "Localized marketing hooks"] },
    },
    supportedTrades: ["cleaning", "landscaping", "roofing"],
  },

  // â€” Invoicing â€”
  {
    id: "inv-quickbooks",
    category: "invoicing",
    name: "QuickBooks",
    logoSrc: "/Logos/quickbooks.png",
    visitUrl: "https://quickbooks.intuit.com",
    reviewHref: getInvoicingReviewUrl("quickbooks"),
    overallScore: 4.6,
    defaultBullets: ["Invoicing + full accounting", "Estimates to invoices", "Bank feeds & reporting"],
    tradeModifiers: {
      roofing: {
        tradePriority: 0.12,
        bullets: ["Progress & deposit invoicing", "Larger-job reporting", "CPA familiarity"],
      },
      "general-contractor": {
        tradePriority: 0.1,
        bullets: ["Job-linked invoicing", "Change-order tracking", "Costs vs income views"],
      },
      electrical: { tradePriority: 0.08, bullets: ["Progress billing friendly", "Retainage-style line items", "App ecosystem"] },
    },
  },
  {
    id: "inv-freshbooks",
    category: "invoicing",
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    visitUrl: "https://www.freshbooks.com",
    reviewHref: getInvoicingReviewUrl("freshbooks"),
    overallScore: 4.5,
    defaultBullets: ["Professional invoicing", "Time tracking & projects", "Client portal & payments"],
    tradeModifiers: {
      cleaning: {
        tradePriority: 0.14,
        bullets: ["Recurring invoices", "Fast payment links", "Lightweight client portal"],
      },
      landscaping: { tradePriority: 0.1, bullets: ["Recurring maintenance billing", "Time on site", "Automatic reminders"] },
      plumbing: { tradePriority: 0.06, bullets: ["Estimate to invoice flow", "Expense capture", "Team time"] },
    },
  },
  {
    id: "inv-wave",
    category: "invoicing",
    name: "Wave",
    logoSrc: "/Logos/wave.jpeg",
    visitUrl: "https://www.waveapps.com",
    reviewHref: getInvoicingReviewUrl("wave"),
    overallScore: 4.3,
    valueTier: true,
    defaultBullets: ["Free invoicing core", "Payment links", "Simple bookkeeping add-ons"],
    tradeModifiers: {
      cleaning: { tradePriority: 0.08, bullets: ["Zero monthly fee entry", "Card payments", "Straightforward AR"] },
      landscaping: { tradePriority: 0.06, bullets: ["Simple invoices for crews", "Accept payments online", "Minimal overhead"] },
    },
  },
  {
    id: "inv-zoho",
    category: "invoicing",
    name: "Zoho Invoice",
    logoSrc: "/Logos/zoho.png",
    visitUrl: "https://www.zoho.com/invoice",
    reviewHref: getInvoicingReviewUrl("zoho-invoice"),
    overallScore: 4.4,
    valueTier: true,
    defaultBullets: ["Automation & reminders", "Client portal", "Zoho stack synergy"],
    tradeModifiers: {
      electrical: {
        tradePriority: 0.1,
        bullets: ["Workflow rules", "Multi-currency options", "Tight Zoho Books path"],
      },
      hvac: { tradePriority: 0.06, bullets: ["Recurring billing", "Payment gateways", "Affordable scale"] },
    },
    supportedTrades: ["electrical", "hvac", "plumbing", "roofing", "landscaping"],
  },

  // â€” Accounting â€”
  {
    id: "acc-qbo",
    category: "accounting",
    name: "QuickBooks Online",
    logoSrc: "/Logos/quickbooks.png",
    visitUrl: "https://quickbooks.intuit.com",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
    overallScore: 4.6,
    defaultBullets: ["Bookkeeping & bank feeds", "Invoicing & expenses", "Broad app marketplace"],
    tradeModifiers: {
      roofing: {
        tradePriority: 0.12,
        bullets: ["Job profitability views", "Class/location tracking", "Larger-revenue reporting"],
      },
      "general-contractor": {
        tradePriority: 0.14,
        bullets: ["WIP & job costing basics", "Sub & vendor 1099 hygiene", "Accountant-ready exports"],
      },
      hvac: { tradePriority: 0.05, bullets: ["Payroll add-ons", "Inventory tie-ins", "Industry apps"] },
    },
  },
  {
    id: "acc-xero",
    category: "accounting",
    name: "Xero",
    logoSrc: "/Logos/xero.png",
    visitUrl: "https://www.xero.com",
    reviewHref: getAccountingReviewUrl("xero"),
    overallScore: 4.5,
    defaultBullets: ["Clean accounting UI", "Strong integrations", "Multi-currency options"],
    tradeModifiers: {
      electrical: {
        tradePriority: 0.14,
        bullets: ["Project & tracking categories", "700+ app connections", "Modern bank rec"],
      },
      landscaping: { tradePriority: 0.08, bullets: ["Cash flow dashboard", "Repeating bills & invoices", "Advisor collaboration"] },
      cleaning: { tradePriority: 0.06, bullets: ["Simple day-to-day books", "Payment services", "Scales with add-ons"] },
    },
  },
  {
    id: "acc-freshbooks",
    category: "accounting",
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    visitUrl: "https://www.freshbooks.com",
    reviewHref: getAccountingReviewUrl("freshbooks"),
    overallScore: 4.5,
    valueTier: true,
    defaultBullets: ["Service-business invoicing", "Time & expenses", "Lightweight books"],
    tradeModifiers: {
      cleaning: {
        tradePriority: 0.12,
        bullets: ["Simple P&L clarity", "Recurring revenue friendly", "Low learning curve"],
      },
      plumbing: { tradePriority: 0.08, bullets: ["Invoice-first workflows", "Mileage & expenses", "Client retainer ideas"] },
    },
  },
  {
    id: "acc-zoho-books",
    category: "accounting",
    name: "Zoho Books",
    logoSrc: "/Logos/zoho.png",
    visitUrl: "https://www.zoho.com/books",
    reviewHref: getAccountingReviewUrl("zoho-books"),
    overallScore: 4.4,
    valueTier: true,
    defaultBullets: ["Automation rules", "Integrated invoicing", "Zoho CRM linkage"],
    tradeModifiers: {
      landscaping: { tradePriority: 0.1, bullets: ["Workflow automation", "Project tags", "Affordable tiers"] },
      roofing: { tradePriority: 0.06, bullets: ["Multi-user options", "Expense policies", "GST/sales tax helpers"] },
    },
    supportedTrades: ["landscaping", "roofing", "electrical", "plumbing", "hvac", "cleaning"],
  },

  // â€” Marketing (email) â€”
  {
    id: "mkt-mailchimp",
    category: "marketing",
    name: "Mailchimp",
    logoSrc: emailMarketingLogoForSlug("mailchimp"),
    visitUrl: "https://mailchimp.com",
    reviewHref: getEmailMarketingReviewUrl("mailchimp"),
    overallScore: 4.5,
    defaultBullets: ["Email campaigns & templates", "Automations & segments", "Landing pages"],
    tradeModifiers: {
      cleaning: {
        tradePriority: 0.12,
        bullets: ["Local postcard-style email", "Review-request automation", "Simple journeys"],
      },
      landscaping: { tradePriority: 0.1, bullets: ["Seasonal promos", "Geo segments", "Signup forms"] },
      roofing: { tradePriority: 0.06, bullets: ["Storm-season blasts", "Lead nurture basics", "Multi-step journeys"] },
      "general-contractor": { tradePriority: 0.05, bullets: ["Project announcement emails", "List pruning tools", "Creative assistant"] },
    },
  },
  {
    id: "mkt-activecampaign",
    category: "marketing",
    name: "ActiveCampaign",
    logoSrc: emailMarketingLogoForSlug("activecampaign"),
    visitUrl: "https://www.activecampaign.com",
    reviewHref: getEmailMarketingReviewUrl("activecampaign"),
    overallScore: 4.6,
    defaultBullets: ["Behavior-based automation", "CRM + email together", "Deep nurture flows"],
    tradeModifiers: {
      hvac: {
        tradePriority: 0.12,
        bullets: ["Tune-up reminders", "Membership nurture", "Deal-style automations"],
      },
      plumbing: { tradePriority: 0.1, bullets: ["Emergency nurture paths", "Tag-heavy workflows", "SMS add-ons"] },
      electrical: { tradePriority: 0.08, bullets: ["Long-cycle bid follow-up", "Site behavior triggers", "Sales alignment"] },
    },
  },
  {
    id: "mkt-klaviyo",
    category: "marketing",
    name: "Klaviyo",
    logoSrc: emailMarketingLogoForSlug("klaviyo"),
    visitUrl: "https://www.klaviyo.com",
    reviewHref: getEmailMarketingReviewUrl("klaviyo"),
    overallScore: 4.5,
    defaultBullets: ["Segmentation & events", "Revenue reporting", "Strong commerce hooks"],
    tradeModifiers: {
      landscaping: {
        tradePriority: 0.1,
        bullets: ["Event-based segments", "Revenue attribution", "SMS + email combo"],
      },
      roofing: { tradePriority: 0.12, bullets: ["Lead source tracking", "Post-inspection sequences", "A/B testing"] },
    },
  },
  {
    id: "mkt-brevo",
    category: "marketing",
    name: "Brevo",
    logoSrc: emailMarketingLogoForSlug("brevo"),
    visitUrl: "https://www.brevo.com",
    reviewHref: getEmailMarketingReviewUrl("brevo"),
    overallScore: 4.2,
    valueTier: true,
    defaultBullets: ["Email + SMS bundle", "Free send tiers", "CRM-lite contacts"],
    tradeModifiers: {
      cleaning: {
        tradePriority: 0.14,
        bullets: ["Affordable multichannel", "Quick promos", "EU-friendly options"],
      },
      "general-contractor": { tradePriority: 0.08, bullets: ["Simple CRM lists", "Transactional + marketing", "Budget control"] },
    },
    supportedTrades: ["cleaning", "general-contractor", "landscaping", "plumbing"],
  },
  {
    id: "mkt-mailerlite",
    category: "marketing",
    name: "MailerLite",
    logoSrc: emailMarketingLogoForSlug("mailerlite"),
    visitUrl: "https://www.mailerlite.com",
    reviewHref: getEmailMarketingReviewUrl("mailerlite"),
    overallScore: 4.3,
    valueTier: true,
    defaultBullets: ["Modern builders", "Automations on a budget", "Clean deliverability tools"],
    tradeModifiers: {
      electrical: { tradePriority: 0.08, bullets: ["Newsletter-first teams", "Simple e-commerce blocks", "Low seat cost"] },
      hvac: { tradePriority: 0.06, bullets: ["Seasonal sends", "Pop-up forms", "Straightforward analytics"] },
    },
    supportedTrades: ["electrical", "hvac", "landscaping", "cleaning", "roofing"],
  },
];

type ScoredProduct = {
  product: DiscoveryProduct;
  overall: number;
  bonus: number;
  final: number;
  hasTradeBullets: boolean;
};

function scoreProduct(product: DiscoveryProduct, trade: DiscoveryTradeId): ScoredProduct | null {
  if (product.supportedTrades && !product.supportedTrades.includes(trade)) return null;
  const mod = product.tradeModifiers?.[trade];
  const bonus = mod?.tradePriority ?? 0;
  return {
    product,
    overall: product.overallScore,
    bonus,
    final: product.overallScore + bonus,
    hasTradeBullets: !!(mod?.bullets && mod.bullets.length > 0),
  };
}

/**
 * Pick three picks: (1) strongest overall score, (2) most trade-weighted / tailored, (3) value or lighter option.
 * Fills from remaining `final` ranking if a slot lacks distinct products.
 */
export function pickProductsForTradeCategory(trade: DiscoveryTradeId, category: DiscoveryCategoryId): DiscoveryProduct[] {
  const scored = DISCOVERY_PRODUCTS.map((p) => scoreProduct(p, trade)).filter(Boolean) as ScoredProduct[];
  const inCategory = scored.filter((s) => s.product.category === category);
  if (inCategory.length === 0) return [];

  const pickedIds = new Set<string>();
  const picks: DiscoveryProduct[] = [];

  // Slot 1 â€” best overall (category anchor)
  const byOverall = [...inCategory].sort((a, b) => b.overall - a.overall || b.final - a.final);
  picks.push(byOverall[0]!.product);
  pickedIds.add(byOverall[0]!.product.id);

  // Slot 2 â€” trade signal: highest trade bonus; tie-break trade-specific bullets then final
  const rest1 = inCategory.filter((s) => !pickedIds.has(s.product.id));
  const byTradeSignal = [...rest1].sort(
    (a, b) => b.bonus - a.bonus || Number(b.hasTradeBullets) - Number(a.hasTradeBullets) || b.final - a.final
  );
  if (byTradeSignal[0]) {
    picks.push(byTradeSignal[0].product);
    pickedIds.add(byTradeSignal[0].product.id);
  }

  // Slot 3 â€” complement: strongest remaining weighted score (often a mid-market pick; value tools surface when bonuses align)
  const rest2 = inCategory.filter((s) => !pickedIds.has(s.product.id));
  const third = [...rest2].sort((a, b) => b.final - a.final)[0];
  if (third) {
    picks.push(third.product);
    pickedIds.add(third.product.id);
  }

  // Backfill up to 3 by final score
  const byFinal = [...inCategory].filter((s) => !pickedIds.has(s.product.id)).sort((a, b) => b.final - a.final);
  while (picks.length < 3 && byFinal.length > 0) {
    const next = byFinal.shift()!;
    picks.push(next.product);
    pickedIds.add(next.product.id);
  }

  return picks.slice(0, 3);
}

export function productToDiscoveryCard(product: DiscoveryProduct, trade: DiscoveryTradeId): DiscoverySoftwareCard {
  const mod = product.tradeModifiers?.[trade];
  const bullets = mod?.bullets?.length ? mod.bullets : product.defaultBullets;
  return {
    name: product.name,
    logoSrc: product.logoSrc,
    rating: product.overallScore.toFixed(1),
    bullets,
    visitUrl: product.visitUrl,
    reviewHref: product.reviewHref,
  };
}

const FIELD_SERVICE_COPY: Record<Exclude<DiscoveryTradeId, "hvac">, { subcopy: string; tip: string }> = {
  plumbing: {
    subcopy:
      "Plumbing contractors juggle emergency calls and multi-day jobsâ€”field service software keeps dispatch, crew updates, and invoices aligned from the truck to the office.",
    tip: "Tip: Plumbing teams often graduate to FSM when spreadsheets canâ€™t keep up with dispatch volume and payment follow-up.",
  },
  electrical: {
    subcopy:
      "Electrical shops coordinate permits, multi-tech crews, and callbacksâ€”FSM platforms clarify who is where and help you close jobs with consistent billing.",
    tip: "Tip: Mobile job capture (photos, notes, forms) matters for electrical work tied to codes and punch lists.",
  },
  landscaping: {
    subcopy:
      "Landscaping and lawn routes mix recurring visits and project workâ€”one system for scheduling, crews, and invoicing cuts admin during peak season.",
    tip: "Tip: Prioritize recurring jobs and route-friendly calendars when maintenance rounds drive most of your revenue.",
  },
  roofing: {
    subcopy:
      "Roofing jobs span inspections, supplements, and productionâ€”field software connects selling, scheduling, and payments without re-keying every detail.",
    tip: "Tip: Roofing crews benefit when estimates flow into scheduled production and invoice-ready job files.",
  },
  cleaning: {
    subcopy:
      "Cleaning companies run tight routes and repeat accountsâ€”centralized scheduling and billing keep high visit volume organized and paid on time.",
    tip: "Tip: Look for simple crew views and recurring work templates when youâ€™re optimizing route density.",
  },
  "general-contractor": {
    subcopy:
      "General contractors coordinate subs, change orders, and job costsâ€”field platforms help track work in progress and invoices without losing margin in spreadsheets.",
    tip: "Tip: GCs often start with job documentation and invoicing, then scale into deeper estimating or accounting integrations.",
  },
};

const HVAC_FIELD_COPY = {
  subcopy:
    "Dispatch-heavy HVAC teams need scheduling, mobile job tools, and invoicing in one flowâ€”so crews stay on route and cash moves without duplicate entry.",
  tip: "Tip: These software solutions are highly rated by HVAC businesses and integrate with popular tools you may already use.",
};

function copyForFieldService(trade: TradeRow): Pick<DiscoveryCombo, "subcopy" | "tip"> {
  if (trade.id === "hvac") return HVAC_FIELD_COPY;
  return FIELD_SERVICE_COPY[trade.id];
}

function copyForCategory(trade: TradeRow, categoryId: DiscoveryCategoryId): Pick<DiscoveryCombo, "subcopy" | "tip"> {
  switch (categoryId) {
    case "field-service":
      return copyForFieldService(trade);
    case "crm":
      return {
        subcopy: `${trade.headingBusinesses} businesses close more repeat work when leads, bids, and follow-ups live in one CRMâ€”not lost across inboxes and group texts.`,
        tip: `Tip: Favor mobile-friendly pipelines and simple task habits so ${trade.tipPhrase} actually log activity after every estimate or site visit.`,
      };
    case "scheduling":
      return {
        subcopy: `Estimates, site visits, and client meetings stay on the rails when ${trade.tipPhrase} use modern scheduling instead of endless â€œwhat time works?â€ threads.`,
        tip: `Tip: Pair booking links with automated remindersâ€”especially for ${trade.label} teams running tight routes or multi-stop days.`,
      };
    case "invoicing":
      return {
        subcopy: `Professional invoices and faster payment collection steady cash flow for ${trade.tipPhrase} juggling deposits, progress billing, and recurring service.`,
        tip: `Tip: Payment links and saved line items save hours for ${trade.tipPhrase} that invoice the same scopes repeatedly.`,
      };
    case "accounting":
      return {
        subcopy: `Job costing, expenses, and tax-ready reporting get easier when ${trade.tipPhrase} run accounting software that matches how money actually moves on projects.`,
        tip: `Tip: Bank feeds and categorized expenses beat month-end guessingâ€”connect the tools your field team already uses when possible.`,
      };
    case "marketing":
      return {
        subcopy: `Email and automation help ${trade.tipPhrase} nurture leads, promote seasonal offers, and request reviews once jobs wrapâ€”without manual mail merges.`,
        tip: `Tip: Start with clear segments (service type, neighborhood, or season) so ${trade.label} campaigns feel local, not generic.`,
      };
  }
}

export function getDiscoveryCombo(tradeId: DiscoveryTradeId, categoryId: DiscoveryCategoryId): DiscoveryCombo {
  const trade = getTradeById(tradeId);
  const products = pickProductsForTradeCategory(tradeId, categoryId);
  const software =
    products.length > 0 ? products.map((p) => productToDiscoveryCard(p, tradeId)) : null;
  const { subcopy, tip } = copyForCategory(trade, categoryId);
  return { subcopy, tip, software };
}

export function getTradeById(id: DiscoveryTradeId) {
  return DISCOVERY_TRADES.find((t) => t.id === id)!;
}

export function getCategoryById(id: DiscoveryCategoryId) {
  return DISCOVERY_CATEGORIES.find((c) => c.id === id)!;
}

/** Exposed for tests or admin introspection */
export function listDiscoveryProducts(): readonly DiscoveryProduct[] {
  return DISCOVERY_PRODUCTS;
}

export type SoftwareDirectoryLink = {
  label: string;
  href: string;
};

export type PopularSoftwareCategory = {
  name: string;
  description: string;
  href: string;
};

export type GroupedSoftwareCategory = {
  name: string;
  href: string;
  secondaryLinks?: SoftwareDirectoryLink[];
};

export type SoftwareCategoryGroup = {
  title: string;
  categories: GroupedSoftwareCategory[];
};

export type TradeHubEntry = {
  name: string;
  description: string;
  href: string;
};

export const SOFTWARE_DIRECTORY_QUICK_JUMPS: SoftwareDirectoryLink[] = [
  { label: "Popular categories", href: "#popular-categories" },
  { label: "Browse by category", href: "#browse-by-category" },
  { label: "Browse by trade", href: "#browse-by-trade" },
  { label: "How to choose software", href: "#how-to-choose-software" },
];

export const SOFTWARE_DIRECTORY_POPULAR_CATEGORIES: PopularSoftwareCategory[] = [
  {
    name: "Field Service Management",
    description: "Dispatch, work orders, estimates, and technician workflows for service teams.",
    href: "/field-service",
  },
  {
    name: "Payroll Software",
    description: "Run payroll, file taxes, and handle W-2 and 1099 payments with less manual work.",
    href: "/payroll",
  },
  {
    name: "CRM Software",
    description: "Track leads, manage pipelines, and improve follow-up across sales teams.",
    href: "/crm",
  },
  {
    name: "Accounting Software",
    description: "Manage bookkeeping, reporting, and tax-ready records for your business.",
    href: "/accounting",
  },
  {
    name: "Invoicing Software",
    description: "Create invoices, collect payments, and automate recurring billing workflows.",
    href: "/invoicing",
  },
  {
    name: "Project Management Software",
    description: "Plan projects, organize tasks, and keep teams aligned on delivery.",
    href: "/project-management",
  },
  {
    name: "Scheduling Software",
    description: "Book appointments, send reminders, and coordinate calendars and staff.",
    href: "/scheduling",
  },
  {
    name: "POS Software",
    description: "Handle checkout, payments, and in-store operations with modern point-of-sale tools.",
    href: "/pos",
  },
  {
    name: "Helpdesk Software",
    description: "Manage customer support tickets, inboxes, and response workflows at scale.",
    href: "/helpdesk",
  },
  {
    name: "Website Builders",
    description: "Build conversion-focused business websites with local SEO and lead-capture workflows.",
    href: "/website-builders",
  },
  {
    name: "Lead Generation Tools",
    description: "Marketplaces, local ads, and paid channels that feed calls and booked jobs for service businesses.",
    href: "/lead-generation",
  },
  {
    name: "HR Software",
    description: "Support hiring, onboarding, people operations, and HR compliance workflows.",
    href: "/hr",
  },
];

export const SOFTWARE_DIRECTORY_CATEGORY_GROUPS: SoftwareCategoryGroup[] = [
  {
    title: "Operations",
    categories: [
      {
        name: "Field Service Management",
        href: "/field-service",
        secondaryLinks: [
          { label: "Best field service software", href: "/field-service/best-field-service-software" },
          { label: "Compare field service tools", href: "/field-service/compare" },
        ],
      },
      {
        name: "Scheduling Software",
        href: "/scheduling",
        secondaryLinks: [{ label: "Best scheduling software", href: "/scheduling/best-scheduling-software" }],
      },
      {
        name: "Project Management Software",
        href: "/project-management",
        secondaryLinks: [{ label: "Best project management software", href: "/project-management/best-project-management-software" }],
      },
      {
        name: "Inventory Management Software",
        href: "/inventory",
      },
      {
        name: "Time Tracking Software",
        href: "/time-tracking",
      },
    ],
  },
  {
    title: "Finance",
    categories: [
      {
        name: "Payroll Software",
        href: "/payroll",
        secondaryLinks: [
          { label: "Best payroll software", href: "/payroll/best-payroll-software" },
          { label: "Compare payroll tools", href: "/payroll/compare" },
        ],
      },
      {
        name: "Accounting Software",
        href: "/accounting",
        secondaryLinks: [{ label: "Best accounting software", href: "/accounting/best-accounting-software" }],
      },
      {
        name: "Invoicing Software",
        href: "/invoicing",
        secondaryLinks: [{ label: "Best invoicing software", href: "/invoicing/best-invoicing-software" }],
      },
      {
        name: "POS Software",
        href: "/pos",
        secondaryLinks: [{ label: "Best POS software", href: "/pos/best-pos-software" }],
      },
    ],
  },
  {
    title: "Growth",
    categories: [
      {
        name: "Website Builders",
        href: "/website-builders",
        secondaryLinks: [
          { label: "Best website builders", href: "/website-builders/best-website-builders" },
          { label: "Compare website builders", href: "/website-builders/compare" },
        ],
      },
      {
        name: "SEO Tools",
        href: "/growth/seo-tools",
      },
      {
        name: "Lead Generation",
        href: "/lead-generation",
        secondaryLinks: [
          { label: "Best lead generation tools", href: "/lead-generation/best-lead-generation-tools" },
          { label: "Compare lead gen platforms", href: "/lead-generation/compare" },
        ],
      },
      {
        name: "Reputation Management",
        href: "/growth/reputation-management",
      },
      {
        name: "Email Marketing",
        href: "/growth/email-marketing",
      },
      {
        name: "Call Tracking",
        href: "/growth/call-tracking",
      },
    ],
  },
  {
    title: "Sales & Marketing",
    categories: [
      {
        name: "CRM Software",
        href: "/crm",
        secondaryLinks: [
          { label: "Best CRM software", href: "/crm/best-crm-software" },
          { label: "CRM comparisons", href: "/crm/compare" },
        ],
      },
    ],
  },
  {
    title: "People & Admin",
    categories: [
      {
        name: "HR Software",
        href: "/hr",
        secondaryLinks: [{ label: "Best HR software", href: "/hr/best-hr-software" }],
      },
      {
        name: "Payroll Software",
        href: "/payroll",
      },
    ],
  },
  {
    title: "Customer Support",
    categories: [
      {
        name: "Helpdesk Software",
        href: "/helpdesk",
        secondaryLinks: [{ label: "Best helpdesk software", href: "/helpdesk/best-helpdesk-software" }],
      },
    ],
  },
];

export const SOFTWARE_DIRECTORY_TRADE_HUBS: TradeHubEntry[] = [
  {
    name: "HVAC",
    description: "Dispatch-heavy stacks for service calls, maintenance plans, payroll, and billing.",
    href: "/hvac",
  },
  {
    name: "Plumbing",
    description: "Tools for emergency call routing, job management, invoicing, and crew payroll.",
    href: "/plumbing",
  },
  {
    name: "Electrical",
    description: "Software for service jobs, project workflows, documentation, and labor tracking.",
    href: "/electrical",
  },
  {
    name: "Landscaping",
    description: "Route planning, recurring maintenance billing, seasonal teams, and job costing.",
    href: "/landscaping",
  },
  {
    name: "Cleaning Services",
    description: "Scheduling and quality workflows for recurring bookings, team operations, and payroll.",
    href: "/cleaning-services",
  },
  {
    name: "Restaurants",
    description: "POS-first stacks connecting checkout, shift scheduling, payroll, and accounting.",
    href: "/restaurants",
  },
];

export const SOFTWARE_DIRECTORY_EDITORIAL_TIPS: { title: string; body: string }[] = [
  {
    title: "Start with the bottleneck",
    body: "Choose software based on the operational problem slowing you down most today, whether that's dispatch, billing, or customer follow-up.",
  },
  {
    title: "Validate integration paths early",
    body: "Before committing, confirm your top tools can share data cleanly so your team is not stuck re-entering jobs, hours, and invoices.",
  },
  {
    title: "Compare total cost, not just base price",
    body: "Seat limits, add-ons, payment fees, and support tiers can change real cost fast, especially as your team grows.",
  },
  {
    title: "Prioritize day-to-day usability",
    body: "The best platform is the one your office and field teams actually adopt consistently, not the one with the longest feature checklist.",
  },
];

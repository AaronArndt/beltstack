import type { SoftwarePickCategory } from "@/lib/data/softwarePickCards";

/** Default internal links from a software vertical to its category hub (SEO + crawl paths). */
export const SOFTWARE_CATEGORY_HUB: Record<
  SoftwarePickCategory,
  { href: string; label: string; shortLabel: string }
> = {
  payroll: { href: "/payroll", label: "Payroll software hub", shortLabel: "Payroll" },
  accounting: { href: "/accounting", label: "Accounting software hub", shortLabel: "Accounting" },
  invoicing: { href: "/invoicing", label: "Invoicing software hub", shortLabel: "Invoicing" },
  crm: { href: "/crm", label: "CRM software hub", shortLabel: "CRM" },
  helpdesk: { href: "/helpdesk", label: "Helpdesk software hub", shortLabel: "Helpdesk" },
  "field-service": { href: "/field-service", label: "Field service software hub", shortLabel: "Field service" },
  inventory: { href: "/inventory", label: "Inventory software hub", shortLabel: "Inventory" },
  "project-management": {
    href: "/project-management",
    label: "Project management software hub",
    shortLabel: "Project management",
  },
  scheduling: { href: "/scheduling", label: "Scheduling software hub", shortLabel: "Scheduling" },
  pos: { href: "/pos", label: "POS software hub", shortLabel: "POS" },
  "time-tracking": { href: "/time-tracking", label: "Time tracking software hub", shortLabel: "Time tracking" },
  hr: { href: "/hr", label: "HR software hub", shortLabel: "HR" },
  "website-builders": {
    href: "/website-builders",
    label: "Website builders software hub",
    shortLabel: "Website builders",
  },
  "lead-generation": {
    href: "/lead-generation",
    label: "Lead generation software hub",
    shortLabel: "Lead generation",
  },
  "seo-tools": {
    href: "/seo-tools",
    label: "SEO tools hub",
    shortLabel: "SEO tools",
  },
  "call-tracking": {
    href: "/call-tracking",
    label: "Call tracking hub",
    shortLabel: "Call tracking",
  },
};

export function getSoftwareCategoryHubHref(category: SoftwarePickCategory): string {
  return SOFTWARE_CATEGORY_HUB[category].href;
}

export function getSoftwareCategoryHubLabel(category: SoftwarePickCategory): string {
  return SOFTWARE_CATEGORY_HUB[category].label;
}

/** Short name for UI (e.g. “Field service”, “CRM”). */
export function getSoftwareCategoryShortLabel(category: SoftwarePickCategory): string {
  return SOFTWARE_CATEGORY_HUB[category].shortLabel;
}

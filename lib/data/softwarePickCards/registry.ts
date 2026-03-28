import type { SoftwarePickCategory } from "./categories";
import type { SoftwarePickCardContent } from "./types";
import { TOP_PICKS as PAYROLL_TOP_PICKS } from "@/lib/data/payrollBestPayrollSoftware";
import { TOP_PICKS as ACCOUNTING_TOP_PICKS } from "@/lib/data/accountingBestAccountingSoftware";
import { TOP_PICKS as INVOICING_TOP_PICKS } from "@/lib/data/invoicingBestInvoicingSoftware";
import { TOP_PICKS as CRM_TOP_PICKS } from "@/lib/data/crmBestSoftware";
import { TOP_PICKS as HELPDESK_TOP_PICKS } from "@/lib/data/helpdeskBestSoftware";
import { TOP_PICKS as FIELD_SERVICE_TOP_PICKS } from "@/lib/data/fieldServiceBestSoftware";
import {
  TOP_PICKS as INVENTORY_TOP_PICKS,
  INVENTORY_REGISTRY_SUPPLEMENT,
} from "@/lib/data/inventoryBestSoftware";
import { TOP_PICKS as PROJECT_MANAGEMENT_TOP_PICKS } from "@/lib/data/projectManagementBestSoftware";
import { TOP_PICKS as SCHEDULING_TOP_PICKS } from "@/lib/data/schedulingBestSoftware";
import { TOP_PICKS as POS_TOP_PICKS } from "@/lib/data/posBestSoftware";
import { TOP_PICKS as TIME_TRACKING_TOP_PICKS } from "@/lib/data/timeTrackingBestTimeTrackingSoftware";
import { TOP_PICKS as HR_TOP_PICKS } from "@/lib/data/hrBestSoftware";
import { TOP_PICKS as WEBSITE_BUILDERS_TOP_PICKS } from "@/lib/data/websiteBuildersBestWebsiteBuilders";
import {
  TOP_PICKS as LEAD_GENERATION_TOP_PICKS,
  LEAD_GENERATION_REGISTRY_SUPPLEMENT,
} from "@/lib/data/leadGenerationBestLeadGenerationTools";
import {
  TOP_PICKS as SEO_TOOLS_TOP_PICKS,
  SEO_TOOLS_REGISTRY_SUPPLEMENT,
} from "@/lib/data/seoToolsBestSeoTools";
import {
  TOP_PICKS as CALL_TRACKING_TOP_PICKS,
  CALL_TRACKING_REGISTRY_SUPPLEMENT,
} from "@/lib/data/callTrackingBestCallTrackingSoftware";
import {
  TOP_PICKS as REPUTATION_MANAGEMENT_TOP_PICKS,
  REPUTATION_MANAGEMENT_REGISTRY_SUPPLEMENT,
} from "@/lib/data/reputationManagementBestReputationManagementSoftware";
import {
  TOP_PICKS as EMAIL_MARKETING_TOP_PICKS,
  EMAIL_MARKETING_REGISTRY_SUPPLEMENT,
} from "@/lib/data/emailMarketingBestEmailMarketingSoftware";
import { TOP_PICKS as PAYMENT_PROCESSING_TOP_PICKS } from "@/lib/data/paymentProcessingBestPaymentProcessingSoftware";

function toMap(picks: SoftwarePickCardContent[]): Map<string, SoftwarePickCardContent> {
  return new Map(picks.map((p) => [p.slug, p]));
}

const REGISTRY: Record<SoftwarePickCategory, Map<string, SoftwarePickCardContent>> = {
  payroll: toMap(PAYROLL_TOP_PICKS),
  accounting: toMap(ACCOUNTING_TOP_PICKS),
  invoicing: toMap(INVOICING_TOP_PICKS),
  crm: toMap(CRM_TOP_PICKS),
  helpdesk: toMap(HELPDESK_TOP_PICKS),
  "field-service": toMap(FIELD_SERVICE_TOP_PICKS),
  inventory: toMap([...INVENTORY_TOP_PICKS, ...INVENTORY_REGISTRY_SUPPLEMENT]),
  "project-management": toMap(PROJECT_MANAGEMENT_TOP_PICKS),
  scheduling: toMap(SCHEDULING_TOP_PICKS),
  pos: toMap(POS_TOP_PICKS),
  "time-tracking": toMap(TIME_TRACKING_TOP_PICKS),
  hr: toMap(HR_TOP_PICKS),
  "website-builders": toMap(WEBSITE_BUILDERS_TOP_PICKS),
  "lead-generation": toMap([...LEAD_GENERATION_TOP_PICKS, ...LEAD_GENERATION_REGISTRY_SUPPLEMENT]),
  "seo-tools": toMap([...SEO_TOOLS_TOP_PICKS, ...SEO_TOOLS_REGISTRY_SUPPLEMENT]),
  "call-tracking": toMap([...CALL_TRACKING_TOP_PICKS, ...CALL_TRACKING_REGISTRY_SUPPLEMENT]),
  "reputation-management": toMap([
    ...REPUTATION_MANAGEMENT_TOP_PICKS,
    ...REPUTATION_MANAGEMENT_REGISTRY_SUPPLEMENT,
  ]),
  "email-marketing": toMap([...EMAIL_MARKETING_TOP_PICKS, ...EMAIL_MARKETING_REGISTRY_SUPPLEMENT]),
  "payment-processing": toMap(PAYMENT_PROCESSING_TOP_PICKS),
};

export function getSoftwarePick(
  category: SoftwarePickCategory,
  slug: string
): SoftwarePickCardContent | undefined {
  return REGISTRY[category].get(slug);
}

export function listSoftwarePicksBySlugs(
  category: SoftwarePickCategory,
  slugs: readonly string[]
): SoftwarePickCardContent[] {
  const map = REGISTRY[category];
  return slugs.map((s) => map.get(s)).filter((p): p is SoftwarePickCardContent => p != null);
}

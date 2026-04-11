import type { BestForComparisonLink, BestForTemplateProps } from "@/components/best/BestForTemplate";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import { getAccountingComparisonBySlug } from "@/lib/data/accountingComparisons";
import { getCallTrackingComparisonBySlug } from "@/lib/data/callTrackingComparisons";
import { getCrmComparisonBySlug } from "@/lib/data/crmComparisons";
import { getEmailMarketingComparisonBySlug } from "@/lib/data/emailMarketingComparisons";
import { getFieldServiceComparisonBySlug } from "@/lib/data/fieldServiceComparisons";
import { getHelpdeskComparison } from "@/lib/data/helpdeskComparisons";
import { getHrComparisonBySlug } from "@/lib/data/hrComparisons";
import { getInventoryComparison } from "@/lib/data/inventoryComparisons";
import { getInvoicingComparisonBySlug } from "@/lib/data/invoicingComparisons";
import { getLeadGenerationComparisonBySlug } from "@/lib/data/leadGenerationComparisons";
import { getPaymentProcessingComparisonBySlug } from "@/lib/data/paymentProcessingComparisons";
import { getPayrollComparisonBySlug } from "@/lib/data/payrollComparisons";
import { getPosComparison } from "@/lib/data/posComparisons";
import { getProjectManagementComparison } from "@/lib/data/projectManagementComparisons";
import { getReputationManagementComparisonBySlug } from "@/lib/data/reputationManagementComparisons";
import { getSchedulingComparisonBySlug } from "@/lib/data/schedulingComparisons";
import { getSeoToolsComparisonBySlug } from "@/lib/data/seoToolsComparisons";
import { getTimeTrackingComparison } from "@/lib/data/timeTrackingComparisons";
import { getWebsiteBuildersComparisonBySlug } from "@/lib/data/websiteBuildersComparisons";

function comparisonSlugFromHref(href: string, prefix: string): string | null {
  if (!href.startsWith(prefix)) return null;
  const raw = href.slice(prefix.length).split("?")[0].split("#")[0];
  if (!raw || raw.includes("/")) return null;
  return raw;
}

type Getter = (slug: string) => ComparisonTemplateProps | null;

const COMPARE_PREFIXES: { prefix: string; get: Getter }[] = [
  { prefix: "/payroll/compare/", get: getPayrollComparisonBySlug },
  { prefix: "/accounting/compare/", get: getAccountingComparisonBySlug },
  { prefix: "/invoicing/compare/", get: getInvoicingComparisonBySlug },
  { prefix: "/time-tracking/compare/", get: getTimeTrackingComparison },
  { prefix: "/crm/compare/", get: getCrmComparisonBySlug },
  { prefix: "/project-management/compare/", get: getProjectManagementComparison },
  { prefix: "/field-service/compare/", get: getFieldServiceComparisonBySlug },
  { prefix: "/scheduling/compare/", get: getSchedulingComparisonBySlug },
  { prefix: "/hr/compare/", get: getHrComparisonBySlug },
  { prefix: "/inventory/compare/", get: getInventoryComparison },
  { prefix: "/pos/compare/", get: getPosComparison },
  { prefix: "/helpdesk/compare/", get: getHelpdeskComparison },
  { prefix: "/website-builders/compare/", get: getWebsiteBuildersComparisonBySlug },
  { prefix: "/lead-generation/compare/", get: getLeadGenerationComparisonBySlug },
  { prefix: "/seo-tools/compare/", get: getSeoToolsComparisonBySlug },
  { prefix: "/call-tracking/compare/", get: getCallTrackingComparisonBySlug },
  { prefix: "/reputation-management/compare/", get: getReputationManagementComparisonBySlug },
  { prefix: "/email-marketing/compare/", get: getEmailMarketingComparisonBySlug },
  { prefix: "/payment-processing/compare/", get: getPaymentProcessingComparisonBySlug },
];

function lookupComparison(href: string): ComparisonTemplateProps | null {
  for (const { prefix, get } of COMPARE_PREFIXES) {
    const slug = comparisonSlugFromHref(href, prefix);
    if (slug == null) continue;
    const data = get(slug);
    if (data) return data;
  }
  return null;
}

function mergeComparisonTeaser(
  item: BestForComparisonLink,
  data: ComparisonTemplateProps
): BestForComparisonLink {
  const logoA = data.productA.logoSrc ?? data.productA.logo;
  const logoB = data.productB.logoSrc ?? data.productB.logo;
  return {
    ...item,
    summary: item.summary ?? data.summaryParagraph,
    productALogoSrc: item.productALogoSrc ?? logoA,
    productBLogoSrc: item.productBLogoSrc ?? logoB,
    productAName: item.productAName ?? data.productA.name,
    productBName: item.productBName ?? data.productB.name,
  };
}

/**
 * Attach comparison summaries and product logos for hub-style “Related comparisons” cards.
 * Safe to run in Server Components (imports canonical comparison data).
 */
export function enrichBestForRelatedComparisons(links: BestForComparisonLink[]): BestForComparisonLink[] {
  return links.map((item) => {
    const data = lookupComparison(item.href);
    if (!data) return item;
    return mergeComparisonTeaser(item, data);
  });
}

export function enrichBestForTemplateProps(props: BestForTemplateProps): BestForTemplateProps {
  return {
    ...props,
    relatedComparisons: enrichBestForRelatedComparisons(props.relatedComparisons),
  };
}

import type { SoftwarePickCategory } from "./categories";
import {
  getAccountingAlternativeUrl,
  getAccountingCompareUrl,
  getAccountingReviewUrl,
  getCrmAlternativeUrl,
  getCrmCompareUrl,
  getCrmReviewUrl,
  getFieldServiceAlternativeUrl,
  getFieldServiceCompareUrl,
  getFieldServiceReviewUrl,
  getHelpdeskAlternativeUrl,
  getHelpdeskCompareUrl,
  getHelpdeskReviewUrl,
  getHrAlternativeUrl,
  getHrCompareUrl,
  getHrReviewUrl,
  getInventoryAlternativeUrl,
  getInventoryCompareUrl,
  getInventoryReviewUrl,
  getInvoicingAlternativeUrl,
  getInvoicingCompareUrl,
  getInvoicingReviewUrl,
  getPayrollAlternativeUrl,
  getPayrollCompareUrl,
  getPayrollReviewUrl,
  getPosAlternativeUrl,
  getPosCompareUrl,
  getPosReviewUrl,
  getProjectManagementAlternativeUrl,
  getProjectManagementCompareUrl,
  getProjectManagementReviewUrl,
  getSchedulingAlternativeUrl,
  getSchedulingCompareUrl,
  getSchedulingReviewUrl,
  getTimeTrackingAlternativeUrl,
  getTimeTrackingCompareUrl,
  getTimeTrackingReviewUrl,
  getWebsiteBuildersAlternativeUrl,
  getWebsiteBuildersCompareUrl,
  getWebsiteBuildersReviewUrl,
  getLeadGenerationAlternativeUrl,
  getLeadGenerationCompareUrl,
  getLeadGenerationReviewUrl,
  getSeoToolsAlternativeUrl,
  getSeoToolsCompareUrl,
  getSeoToolsReviewUrl,
  getCallTrackingAlternativeUrl,
  getCallTrackingCompareUrl,
  getCallTrackingReviewUrl,
} from "@/lib/routes";

export type SoftwarePickCategoryRouteHelpers = {
  getReviewUrl: (slug: string) => string;
  getCompareUrl: (comparisonSlug: string) => string;
  getAlternativeUrl: (slug: string) => string;
};

export function getSoftwarePickCategoryRoutes(
  category: SoftwarePickCategory
): SoftwarePickCategoryRouteHelpers {
  switch (category) {
    case "payroll":
      return {
        getReviewUrl: getPayrollReviewUrl,
        getCompareUrl: getPayrollCompareUrl,
        getAlternativeUrl: getPayrollAlternativeUrl,
      };
    case "accounting":
      return {
        getReviewUrl: getAccountingReviewUrl,
        getCompareUrl: getAccountingCompareUrl,
        getAlternativeUrl: getAccountingAlternativeUrl,
      };
    case "invoicing":
      return {
        getReviewUrl: getInvoicingReviewUrl,
        getCompareUrl: getInvoicingCompareUrl,
        getAlternativeUrl: getInvoicingAlternativeUrl,
      };
    case "crm":
      return {
        getReviewUrl: getCrmReviewUrl,
        getCompareUrl: getCrmCompareUrl,
        getAlternativeUrl: getCrmAlternativeUrl,
      };
    case "helpdesk":
      return {
        getReviewUrl: getHelpdeskReviewUrl,
        getCompareUrl: getHelpdeskCompareUrl,
        getAlternativeUrl: getHelpdeskAlternativeUrl,
      };
    case "field-service":
      return {
        getReviewUrl: getFieldServiceReviewUrl,
        getCompareUrl: getFieldServiceCompareUrl,
        getAlternativeUrl: getFieldServiceAlternativeUrl,
      };
    case "inventory":
      return {
        getReviewUrl: getInventoryReviewUrl,
        getCompareUrl: getInventoryCompareUrl,
        getAlternativeUrl: getInventoryAlternativeUrl,
      };
    case "project-management":
      return {
        getReviewUrl: getProjectManagementReviewUrl,
        getCompareUrl: getProjectManagementCompareUrl,
        getAlternativeUrl: getProjectManagementAlternativeUrl,
      };
    case "scheduling":
      return {
        getReviewUrl: getSchedulingReviewUrl,
        getCompareUrl: getSchedulingCompareUrl,
        getAlternativeUrl: getSchedulingAlternativeUrl,
      };
    case "pos":
      return {
        getReviewUrl: getPosReviewUrl,
        getCompareUrl: getPosCompareUrl,
        getAlternativeUrl: getPosAlternativeUrl,
      };
    case "time-tracking":
      return {
        getReviewUrl: getTimeTrackingReviewUrl,
        getCompareUrl: getTimeTrackingCompareUrl,
        getAlternativeUrl: getTimeTrackingAlternativeUrl,
      };
    case "hr":
      return {
        getReviewUrl: getHrReviewUrl,
        getCompareUrl: getHrCompareUrl,
        getAlternativeUrl: getHrAlternativeUrl,
      };
    case "website-builders":
      return {
        getReviewUrl: getWebsiteBuildersReviewUrl,
        getCompareUrl: getWebsiteBuildersCompareUrl,
        getAlternativeUrl: getWebsiteBuildersAlternativeUrl,
      };
    case "lead-generation":
      return {
        getReviewUrl: getLeadGenerationReviewUrl,
        getCompareUrl: getLeadGenerationCompareUrl,
        getAlternativeUrl: getLeadGenerationAlternativeUrl,
      };
    case "seo-tools":
      return {
        getReviewUrl: getSeoToolsReviewUrl,
        getCompareUrl: getSeoToolsCompareUrl,
        getAlternativeUrl: getSeoToolsAlternativeUrl,
      };
    case "call-tracking":
      return {
        getReviewUrl: getCallTrackingReviewUrl,
        getCompareUrl: getCallTrackingCompareUrl,
        getAlternativeUrl: getCallTrackingAlternativeUrl,
      };
    default: {
      const _exhaustive: never = category;
      return _exhaustive;
    }
  }
}

import type { MetadataRoute } from "next";
import { getPayrollComparisonSlugs } from "@/lib/data/payrollComparisons";
import { getPayrollReviewSlugs } from "@/lib/data/payrollReviews";
import { getPayrollBestForUrl } from "@/lib/routes";
import { PAYROLL_GUIDES } from "@/app/payroll/guides/page";

const BASE_URL = "https://www.beltstack.com";

/** Static best-for scenario slugs (matches app/payroll/best-for/[scenario] and static segments). */
const PAYROLL_BEST_FOR_SCENARIOS = [
  "1099-contractors",
  "agriculture",
  "auto-repair",
  "cleaning-business",
  "construction",
  "contractors",
  "electricians",
  "general-contractors",
  "growing-businesses",
  "handyman-business",
  "home-services",
  "hourly-employees",
  "hvac",
  "landscaping",
  "lawn-care",
  "maintenance-companies",
  "nonprofits",
  "painters",
  "pest-control",
  "plumbing",
  "pool-service",
  "property-management",
  "remodeling-contractors",
  "restaurants",
  "retail",
  "roofing",
  "small-business",
  "tree-service",
] as const;

const defaultEntry = (
  path: string,
  options?: { changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]; priority?: number }
): MetadataRoute.Sitemap[number] => ({
  url: `${BASE_URL}${path}`,
  lastModified: new Date(),
  changeFrequency: options?.changeFrequency ?? "weekly",
  priority: options?.priority ?? 0.8,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    defaultEntry("/", { changeFrequency: "weekly", priority: 1 }),
    defaultEntry("/methodology", { changeFrequency: "monthly", priority: 0.7 }),
    defaultEntry("/payroll", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/payroll/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/payroll/best-payroll-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/payroll/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/payroll/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/payroll/trades", { changeFrequency: "monthly", priority: 0.7 }),
  ];

  const comparisonSlugs = getPayrollComparisonSlugs();
  const comparisonEntries: MetadataRoute.Sitemap = comparisonSlugs.map((slug) =>
    defaultEntry(`/payroll/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  const reviewSlugs = getPayrollReviewSlugs();
  const reviewEntries: MetadataRoute.Sitemap = reviewSlugs.map((slug) =>
    defaultEntry(`/payroll/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  const providerEntries: MetadataRoute.Sitemap = reviewSlugs.map((slug) =>
    defaultEntry(`/payroll/providers/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  const bestForEntries: MetadataRoute.Sitemap = PAYROLL_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getPayrollBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  const guideEntries: MetadataRoute.Sitemap = PAYROLL_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  return [
    ...staticRoutes,
    ...comparisonEntries,
    ...reviewEntries,
    ...providerEntries,
    ...bestForEntries,
    ...guideEntries,
  ];
}

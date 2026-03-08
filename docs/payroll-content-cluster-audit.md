# Payroll Content Cluster — Audit Report

**Scope:** `/payroll`, `/payroll/best-payroll-software`, `/payroll/review/*`, `/payroll/compare`, `/payroll/compare/*`, `/payroll/best-for/*`  
**Focus:** Internal links, slug/route consistency, link equity to key pages, titles/H1s/meta, duplication.

---

## 1. Issues Found

### 1.1 Broken or outdated internal links

| Issue | Location | Detail |
|-------|----------|--------|
| **Fixed** | `app/payroll/page.tsx` | OnPay card used `compareHref: "/payroll/compare/onpay-vs-gusto"` but actual slug is `gusto-vs-onpay` → **corrected to** `gusto-vs-onpay`. |
| **Fixed** | `app/payroll/page.tsx` | ADP card used `compareHref: "/payroll/compare/adp-vs-gusto"` but actual slug is `gusto-vs-adp` → **corrected to** `gusto-vs-adp`. |
| Review scenario links | `lib/data/payrollReviews.ts` | All 5 reviews use `scenarioLinks` with slugs: `small-crews`, `1099-contractors`, `multi-state`, `hourly-teams`, `seasonal-businesses`. Only `1099-contractors` has a dedicated best-for page. The others resolve via the generic `[scenario]` fallback (no 404). So links work but point to thin/duplicate content. |
| `/methodology` | `app/payroll/compare/page.tsx`, `components/hubs/HubPageTemplate.tsx`, `components/reviews/ReviewTemplate.tsx`, etc. | Linked from payroll compare, hub template, and review template. No `app/methodology` (or equivalent) route found → **link is broken** unless a route exists elsewhere. |

### 1.2 Inconsistent slugs / old route references

| Issue | Location | Detail |
|-------|----------|--------|
| Hardcoded compare paths | `app/payroll/page.tsx` | Compare URLs are hardcoded (e.g. `/payroll/compare/gusto-vs-quickbooks-payroll`). Prefer `getPayrollCompareUrl(slug)` from `@/lib/routes` (or `@/lib/data/payrollComparisons`) for single source of truth. |
| Legacy `/payroll/providers/[provider]` | `app/payroll/providers/[provider]/page.tsx` | Page still exists; `next.config.ts` redirects `/payroll/providers/:slug` → `/payroll/review/:slug`. Link `"/payroll/compare/${provider}-vs-paychex"` is valid only when that comparison exists (e.g. `gusto-vs-paychex`). For `onpay` it would be `onpay-vs-paychex` but real slug is `paychex-vs-onpay` → **potentially wrong** for some providers. |
| Best-for index links | `app/payroll/best-for/page.tsx`, `app/payroll/trades/page.tsx` | Many links are hardcoded. Consider `getPayrollBestForUrl(scenario)` and a shared list of scenario slugs (e.g. from `lib/data/payrollBestPayrollSoftware.ts` or `lib/routes.ts`) for consistency. |

### 1.3 Internal linking strength (key pages)

| Key page | Receives links from | Gap |
|----------|---------------------|-----|
| `/payroll` | Hub template (breadcrumb), compare page (breadcrumb), best-payroll-software (breadcrumb), best-for index, best-for [scenario] fallback, trades page, providers page | Strong. |
| `/payroll/best-payroll-software` | Hub (BEST_FOR_SCENARIOS), ComparisonTemplate (“Best payroll software guides”), BestForTemplate, payrollReviews (bestPayrollSoftwareHref) | Strong. |
| `/payroll/compare` | Hub (BEST_FOR_SCENARIOS), compare detail pages (breadcrumb) | **Missing** from: `app/payroll/best-for/page.tsx`, `app/payroll/trades/page.tsx`, and the generic `app/payroll/best-for/[scenario]/page.tsx`. Those pages link to hub and best-for but not to compare index. |
| Key reviews (e.g. Gusto, QuickBooks Payroll) | Comparison pages, alternatives, hub table, best-for templates | Strong. |

**Recommendation:** Add a link to “Compare payroll software” (`/payroll/compare`) on `best-for/page.tsx`, `trades/page.tsx`, and in the “Related links” of `best-for/[scenario]/page.tsx`.

### 1.4 Page titles, H1s, and meta descriptions

| Page / type | Title / H1 | Meta description | Issue |
|--------------|------------|------------------|--------|
| `/payroll` (hub) | H1: “Best Payroll Software for Contractors (2026)” (from HubPageTemplate `title` prop) | No metadata export (page is client-only) | **Hub has no `<title>` or meta description** unless provided by a parent layout. Add metadata (e.g. in a server layout or `generateMetadata`) for SEO. |
| `/payroll/best-payroll-software` | Layout: “Best Payroll Software (2026)”; H1: “Best Payroll Software (2026)” | Layout: “Compare the best payroll software for contractors, small businesses, and growing teams…” | Differentiated. |
| `/payroll/compare` | “Payroll Software Comparisons (2026)”; H1: “Payroll Software Comparisons” | Present and specific | Good. |
| `/payroll/compare/[comparison]` | `generateMetadata`: “{A} vs {B} (year): Features, Pricing & Which Is Better” | Dynamic, unique per comparison | Good. |
| `/payroll/review/[slug]` | **No `generateMetadata`** | **None** | **Review pages have no custom title or meta description.** Add `generateMetadata` in `app/payroll/review/[slug]/page.tsx` using tool name and a short description. |
| `/payroll/best-for/*` (with layout) | Layout: “Best Payroll Software for [X] (2026)” | Layout description set per scenario | Good and differentiated. |
| `/payroll/best-for/[scenario]` (fallback) | **No metadata** | **None** | Fallback page has no layout metadata; H1 is generic “Best Payroll for {scenario}”. |
| `/payroll/best-for` (index) | **No metadata** | **None** | H1: “Best Payroll For…” — no layout or page metadata. |
| `/payroll/trades` | **No metadata** | **None** | H1: “Best Payroll by Trade” — no metadata. |

**Duplication / weak differentiation:**  
- Hub title and best-payroll-software title both include “Best Payroll Software” and “(2026)”. Differentiate (e.g. hub: “Payroll Software for Contractors – Reviews & Comparisons (2026)” and keep roundup as “Best Payroll Software (2026)”).  
- Many best-for layouts use the same pattern: “Best Payroll Software for [Industry] (2026)” — acceptable; descriptions vary by layout.

### 1.5 Other

- **BEST_FOR_SCENARIOS** on the hub includes “Construction”, “Landscaping”, etc., and **BY_TRADE** repeats many of the same best-for URLs in a separate section. Not broken, but some overlap between “by scenario” and “by trade”.
- **Review pages:** “Best payroll software for different use cases” now shows only roundup + scenarioLinks (small-crews, 1099-contractors, multi-state, hourly-teams, seasonal-businesses). Four of those slugs have no dedicated best-for content (only the generic [scenario] fallback). Consider mapping to existing pages (e.g. `hourly-employees`, `small-business`, `growing-businesses`) or adding dedicated pages and updating `scenarioLinks`.

---

## 2. Files / pages to update

| Priority | File(s) | Action |
|----------|---------|--------|
| P0 | `app/payroll/page.tsx` | **Done.** Fixed OnPay and ADP compare links. |
| P0 | `app/payroll/review/[slug]/page.tsx` | Add `generateMetadata` for title and description per review. |
| P0 | Create or verify `/methodology` route | Ensure `/methodology` exists or remove/change links (compare page, hub template, review template, footer, navbar). |
| P1 | `app/payroll/page.tsx` | Add metadata (title, description) for the hub — e.g. server layout for `app/payroll` or export from a wrapper that supports metadata. |
| P1 | `app/payroll/best-for/page.tsx` | Add link to `/payroll/compare` and `/payroll/best-payroll-software`; add metadata. |
| P1 | `app/payroll/best-for/[scenario]/page.tsx` | Add link to `/payroll/compare` and `/payroll/best-payroll-software`; add metadata for fallback. |
| P1 | `app/payroll/trades/page.tsx` | Add link to `/payroll/compare` and `/payroll/best-payroll-software`; add metadata. |
| P2 | `lib/data/payrollReviews.ts` | Update `scenarioLinks` to use slugs that have dedicated content (e.g. `hourly-employees` instead of `hourly-teams`) or add dedicated pages for small-crews, multi-state, seasonal-businesses. |
| P2 | `app/payroll/providers/[provider]/page.tsx` | Fix compare link: use canonical comparison slug (e.g. `paychex-vs-onpay` for OnPay, not `onpay-vs-paychex`) or link to compare index. |
| P2 | `app/payroll/page.tsx` | Use `getPayrollCompareUrl(slug)` for compare links to avoid future slug mistakes. |
| P3 | Hub vs roundup title | Differentiate hub page title from best-payroll-software page title to avoid duplication. |

---

## 3. Recommended fixes in priority order

1. **Broken compare links (done)**  
   - OnPay: `onpay-vs-gusto` → `gusto-vs-onpay`.  
   - ADP: `adp-vs-gusto` → `gusto-vs-adp`.

2. **Review page metadata**  
   - In `app/payroll/review/[slug]/page.tsx`, add `generateMetadata` that returns `title` (e.g. “{toolName} Review (2026)”) and `description` using `getPayrollReviewBySlug(slug)`.

3. **Methodology link**  
   - Add an `app/methodology/page.tsx` (or equivalent) or replace `/methodology` links with a valid URL (e.g. anchor on another page or remove).

4. **Hub metadata**  
   - Add a server layout at `app/payroll/layout.tsx` that exports `metadata` (title + description) for the hub, or otherwise ensure `/payroll` has a unique title and meta description.

5. **Compare index and best-payroll-software links on secondary pages**  
   - On `best-for/page.tsx`, `best-for/[scenario]/page.tsx`, and `trades/page.tsx`: add “Compare payroll software” (`/payroll/compare`) and “Best payroll software” (`/payroll/best-payroll-software`) to related/contextual links.

6. **Review scenarioLinks**  
   - Point to existing best-for pages where possible: e.g. `hourly-employees` instead of `hourly-teams`; consider `small-business` or `growing-businesses` for small-crews/multi-state/seasonal if no dedicated pages.

7. **Providers page compare link**  
   - Use a mapping from provider slug to canonical comparison slug (e.g. gusto → gusto-vs-paychex, onpay → paychex-vs-onpay) or link to `/payroll/compare`.

8. **Centralize compare URLs**  
   - Use `getPayrollCompareUrl(slug)` in `app/payroll/page.tsx` (and elsewhere) so comparison slugs are defined in one place.

9. **Titles**  
   - Differentiate hub vs roundup title (e.g. “Payroll for Contractors – Reviews & Comparisons” vs “Best Payroll Software”).

10. **best-for index and trades metadata**  
    - Add layout or page metadata and, if desired, H1 tweaks for `best-for/page.tsx` and `trades/page.tsx`.

---

## 4. Summary table

| Category | Count | Status |
|----------|--------|--------|
| Broken internal links (payroll) | 2 | Fixed (hub compare links) |
| Broken external/site links | 1 | `/methodology` — needs route or link change |
| Outdated/weak scenario links (reviews) | 4 slugs | Point to fallback only; recommend remap or new pages |
| Pages missing metadata | 5+ | Hub, review detail, best-for index, best-for fallback, trades |
| Key pages under-linked | 1 | Compare index missing from best-for index, trades, [scenario] fallback |
| Slug/route consistency | 2 | Hub hardcoded compare URLs; providers page compare slug logic |

No redesign was applied; only the two broken hub compare links were corrected. All other items are documented for a follow-up cleanup pass.

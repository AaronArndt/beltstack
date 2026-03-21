# Software pick cards — canonical coverage

## Fully canonical (registry + resolver)

All products in each vertical’s `TOP_PICKS` in `lib/data/*Best*.ts` are registered in `registry.ts`.  
`HubPageTemplate` uses `getSoftwarePick(category, slug)` + `toSoftwarePickCardProps`.  
Best-of pages use `TOP_PICKS` from the same files + `toSoftwarePickCardProps` with `getSoftwarePickCategoryRoutes(category)`.

**Result:** Same `slug` + `softwarePickCategory` yields the same card body, flags, and links.  
**Allowed drift:** optional `badge` on hub `FeaturedPickRef` only (passed as `badgeText` override).

## Not in the registry (by design today)

Best-of “More options” sections use **`MORE_*`** arrays (simple cards: name, blurb, `reviewHref`, logo).  
These are **not** `SoftwarePickCard` and **not** in the registry:

| Vertical   | Data file / export              |
|-----------|----------------------------------|
| Payroll   | `MORE_PAYROLL_OPTIONS`           |
| Accounting| `MORE_ACCOUNTING_OPTIONS`        |
| Invoicing | `MORE_INVOICING_OPTIONS`         |
| CRM       | `MORE_CRM_OPTIONS`               |
| Helpdesk  | `MORE_HELPDESK_OPTIONS`          |
| Inventory | `MORE_INVENTORY_OPTIONS`         |
| POS       | `MORE_POS_OPTIONS`               |
| Project mgmt | `MORE_PROJECT_MANAGEMENT_OPTIONS` |

**Field service, scheduling, HR, time-tracking** best-of pages have **no** `MORE_*` section; only `TOP_PICKS` use `SoftwarePickCard`.

## Links

Review / alternatives / compare URLs come from `getSoftwarePickCategoryRoutes` → `lib/routes.ts`.  
Comparison rows on cards use `compareSlugs` on the canonical pick (first 3).  
Compare pages are served by dynamic routes under each vertical’s `/compare/[...]` pattern.

## Logo / cycle note

`helpdeskLogos`, `inventoryLogos`, `posLogos` hold logo maps so `*BestSoftware.ts` does not import `*HubData` (avoids circular imports with the registry).

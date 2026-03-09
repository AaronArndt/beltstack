# Software Category Hub Pattern

All software category hub pages (e.g. `/payroll`, `/accounting`) use **`HubPageTemplate`** so layout, section order, spacing, and typography stay consistent.

## Section order (source of truth: `/payroll`)

1. **Hero** — Breadcrumb, H1, intro, introExtended, trust row (Updated monthly, Independent reviews, Affiliate disclosure), Key takeaways box
2. **Best roundup block** — "Best [Category] Software Overall" + link to roundup page
3. **Section nav** — Sticky jump links (How to choose, Top picks, Compare, Guides, Find your fit, By scenario, By trade, Comparisons, FAQs, How we review)
4. **How to choose** — Category-specific factors and internal links (optional but recommended)
5. **Top picks** — Featured cards with logo, badge, rating, price, descriptor, features, Read review / Compare (and optional Visit site)
6. **Comparison table** — Tool, Best for, Starting price, Rating, Read review
7. **Guides** — Grid of guide cards + "Read our full reviews" line; do **not** add a separate "More [category] options" subsection (payroll has no such block; structure is guides only).
8. **Finder** — Optional form to narrow by business type / team size (or category-specific filters)
9. **By scenario** — Pills linking to best-for pages (roundup, compare, guides, then use cases)
10. **By trade/industry** — Pills, optionally grouped (e.g. "Contractor & trade" / "Other industries")
11. **Popular comparisons** — Pills linking to comparison detail pages
12. **Education** — Optional "What to look for" section with checklist sidebar
13. **FAQ** — Accordion
14. **Methodology** — How we review + bullets + affiliate disclosure

## Creating a new category hub

1. Create `app/[category]/page.tsx` (e.g. `app/crm/page.tsx`).
2. Import `HubPageTemplate` and types from `@/components/hubs/HubPageTemplate`.
3. Define category-specific data: `KEY_TAKEAWAYS`, `TOP_PICKS` (FeaturedPick[]), `TABLE_ROWS` (ComparisonTableRow[]), scenario links, trade/industry links, comparisons, `FAQ_ITEMS`, `METHODOLOGY_BULLETS`.
4. Implement section components that match payroll/accounting structure:
   - `IntroExtended` — single `<p>` or fragment
   - `HowToChooseSection` — HubSectionTitle + paragraph with links + two-column grid of bullets (use `linkGreen` for links)
   - `GuidesSection` — HubSectionTitle + grid of guide cards (same card classes as payroll) + "Read our full reviews" line only. Do not add a "More options" subsection.
   - `PopularComparisonsSection` — HubSectionTitle + pill links
   - `FinderForm` (optional) — form with category-relevant dropdowns + "See results" button (use `btnPrimary`, `selectClass`)
   - `EducationSection` (optional) — section title + two-column content + sidebar checklist (same layout as payroll)
5. Pass all props to `HubPageTemplate` in the same order as payroll/accounting. Include optional sections (`howToChooseSection`, `finderSection`, `educationSection`) so section order matches.
6. Add `app/[category]/layout.tsx` with `metadata` (title, description).

## Design tokens (match payroll)

- Section padding: `py-8 sm:py-11` (or `py-6 sm:py-8` for best roundup block; `py-8 sm:py-10` for finder)
- Container: `max-w-7xl px-4 sm:px-6 lg:px-8`
- Section title: `text-2xl font-bold sm:text-3xl`, underline `h-[2px] w-14 bg-[#10B981]`
- Card: `rounded-xl border border-slate-200 bg-white p-5 shadow-sm`, grid `gap-4` or `gap-5` (picks use `gap-5`)
- Background striping: alternate `bg-[#F8FAFC]` and `bg-white` by section
- Pill links: `rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold`, gap `gap-2.5`

## Reference

- **Source of truth:** `app/payroll/page.tsx`
- **Template:** `components/hubs/HubPageTemplate.tsx`
- **Conforming hub:** `app/accounting/page.tsx`

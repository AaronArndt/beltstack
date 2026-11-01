# BeltStack brand asset audit

Custom BeltStack artwork still carries the previous navy (`#1A2D48`) and emerald (`#10B981` / `#14B884`) palette. These files were not modified. Third-party vendor logos were left unchanged and are not listed here.

Sampled colors below come from the file contents (SVG fills) or from pixel samples of the PNGs. Do not treat anti-aliased edge pixels as brand colors.

## Brand logos

| Asset | File Path | Used On | Current Colors | Recommended Colors | Action Required |
|---|---|---|---|---|---|
| BS mark, green tile | `public/Logos/BS_Logo_GreenWhite.png` | Navbar (`components/Navbar.tsx`). Fallback when a product logo is missing (`lib/data/productLogoMapFromComparisons.ts`, `lib/data/emailMarketingLogos.ts`, `lib/data/websiteBuildersLogos.ts`). Default social share image (`lib/seo/siteMetadata.ts`). Browser tab icon (`app/icon.png`). | Deep teal tile, white letters. | None. This is the replacement for the old blue tile. | In use. |
| BS mark, white tile | `public/Logos/BS_Logo_WhiteGreen.png` | Footer (`components/Footer.tsx`). | White tile, deep teal letters. | None. This is the replacement for the old white tile. | In use. |
| Crown | `public/Logos/BS_Crown.svg` | Category hub callouts (`components/hubs/HubPageTemplate.tsx`, `app/inventory/page.tsx`) and pick-card badges (`components/software-picks/SoftwarePickCard.tsx`). | Crown `#012C2A`, monogram `#E6EAEA`. | None. This replaces `SB_Crown.svg` and `BS_Crown.png`. | In use. |
| Retired dark tile | `public/Logos/BS_Logo_B.svg`, `public/Logos/BS_Logo_B.png`, `app/BS_Logo_B.ico` | No longer referenced. | Square `#1A2D48`, white letters. | — | Retired. Safe to leave on disk. |
| Retired light tile | `public/Logos/BS_Logo_W.svg` | No longer referenced. | White tile, letters `#1A2D48`. | — | Retired. Safe to leave on disk. |
| Retired crown | `public/Logos/SB_Crown.svg` | No longer referenced. | Crown `#10B981`, monogram `#E7F8F2`. | — | Retired. Safe to leave on disk. |
| Stack mark | `Logo.svg` (repo root) | Not referenced by the site. | Navy `#1A2D48` and emerald `#10B981`. | If the file is kept: navy shapes `#012C2A`, emerald bands Indigo `#1C1798` or Sage `#CEDFCF`. | Manual edit only if you still use this source file. Safe to leave if it is unused. |
| Stack mark, footer version | `Logo_footer.svg` (repo root) | Not referenced by the site. | White, navy `#1A2D48`, emerald `#10B981`. | If kept: navy `#012C2A`, emerald bands `#1C1798` or `#CEDFCF`. | Same as `Logo.svg`. The live footer uses `BS_Logo_WhiteGreen.png`, not this file. |

## Homepage illustrations / icons

The live hero tiles in `app/HomeClient.tsx` use the six files in `public/Logos/BeltStack_HeroIconsNew/`. The previous emerald set is archived in `public/Logos/HeroIcons_previous/` and is not served.

| Asset | File Path | Used On | Current Colors | Recommended Colors | Action Required |
|---|---|---|---|---|---|
| Get paid & invoicing | `public/Logos/BeltStack_HeroIconsNew/getpaidandpricing.png` | Homepage hero tile, links to `/invoicing`. | New artwork. | None. | In use. |
| Run payroll & hiring | `public/Logos/BeltStack_HeroIconsNew/runpayrollandhiring.png` | Homepage hero tile, links to `/payroll`. | New artwork. | None. | In use. |
| Manage jobs & crews | `public/Logos/BeltStack_HeroIconsNew/managecrewsandjobs.png` | Homepage hero tile, links to `/field-service`. | New artwork. | None. | In use. |
| Get more leads | `public/Logos/BeltStack_HeroIconsNew/getmoreleads.png` | Homepage hero tile, links to `/lead-generation`. | New artwork. | None. | In use. |
| Track finances | `public/Logos/BeltStack_HeroIconsNew/trackfinances.png` | Homepage hero tile, links to `/accounting`. | New artwork. | None. | In use. |
| Build your website | `public/Logos/BeltStack_HeroIconsNew/buildyourwebsite.png` | Homepage hero tile, links to `/website-builders`. | New artwork. | None. | In use. |
| Previous hero set | `public/Logos/HeroIcons_previous/` | Not referenced. | Emerald shapes (`#14B884`, `#10B981`, `#0FB881`) with dark line art. | — | Archived. |

## Category and industry graphics

The crown monogram in the brand-logos table is the only custom category graphic. Industry hubs do not have their own illustrated marks.

## Other custom branded assets

| Asset | File Path | Used On | Current Colors | Recommended Colors | Action Required |
|---|---|---|---|---|---|
| Early homepage comp | `Frame 1.png` (repo root) | Not referenced by the site. It is an old “StackToolBelt” layout comp. | Navy headings, emerald button, pale green waves. Exact hex values were not sampled. | No site update. Recolor only if you still use it as a design source. | No production action. |
| Homepage color reference | `design/homepage-color-mockup.jpg` | Design reference only. Not served on the site. | The approved rough mockup for this refresh. | Keep as the visual reference. | None. |

## Updated in code (no manual file edit)

These are drawn in components, so their colors now follow the tokens in `app/globals.css`:

- Star ratings and check icons in `components/software-picks/SoftwarePickCard.tsx` use Deep Teal. The empty-star gray (`#E5E7EB`) and the con “x” (`#FF0000`) were left as neutral and status colors.
- Focus rings, links, buttons, badges, section rules, and the footer are token-based (`brand`, `indigo`, `sage`, `terracotta`).

## Left unchanged on purpose

- Vendor logos under `public/Logos/` (Housecall Pro, ServiceTitan, Jobber, HubSpot, and the rest), including simple SVG wordmarks such as `servicetrade.svg`, `fieldpulse.svg`, `buildops.svg`, and `workwave-service.svg`.
- Stone and slate borders and table chrome. Those are neutral UI, not brand color.
- Body copy `#57534E`, exposed as `text-muted-foreground`. It stays a neutral so secondary text keeps AA contrast on white and on Very Light Sage.

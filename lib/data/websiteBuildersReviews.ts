/**
 * Website builder review pages — full editorial depth (CRM / hub parity).
 * Used by app/website-builders/review/[slug]/page.tsx with ReviewTemplate.
 */

import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import {
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersCompareUrl,
  getWebsiteBuildersReviewUrl,
  getWebsiteBuildersAlternativeUrl,
} from "@/lib/routes";
import { getWebsiteBuilderLogoSrc } from "@/lib/data/websiteBuildersLogos";

export type WebsiteBuilderReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const CATEGORY_HREF = "/website-builders";
const ROUNDUP_HREF = "/website-builders/best-website-builders";
const COMPARE_HUB_HREF = "/website-builders/compare";
const GUIDES_HREF = "/website-builders/guides";

const SCENARIOS = [
  { label: "Small business", href: getWebsiteBuildersBestForUrl("small-business") },
  { label: "Contractors", href: getWebsiteBuildersBestForUrl("contractors") },
  { label: "HVAC", href: getWebsiteBuildersBestForUrl("hvac") },
  { label: "Plumbers", href: getWebsiteBuildersBestForUrl("plumbers") },
  { label: "Home services", href: getWebsiteBuildersBestForUrl("home-services") },
];

const METHODOLOGY = {
  title: "How we review website builders",
  sub: "Service-business criteria first.",
  introParagraph:
    "We evaluate website builders for local lead generation, ease of updates, conversion features, and total cost for small service businesses—not generic marketing scorecards.",
  bullets: [
    "We test form workflows, mobile UX, and call-to-action clarity for lead capture.",
    "We compare SEO controls, page speed fundamentals, and local visibility features.",
    "We evaluate pricing, add-ons, and long-term maintainability for owner-operators.",
  ],
};

/** Shared internal links for SEO / navigation from review footers. */
const RELATED_CHOOSE = {
  label: "How to choose a website builder",
  href: "/website-builders/guides/how-to-choose-a-website-builder",
};
const RELATED_CONTRACTOR_FEATURES = {
  label: "Contractor website features",
  href: "/website-builders/guides/contractor-website-features",
};
const RELATED_VS_WP = {
  label: "Website builders vs WordPress",
  href: "/website-builders/guides/website-builders-vs-wordpress",
};
const RELATED_LOCAL_SEO = {
  label: "Best website builder for local SEO",
  href: "/website-builders/guides/best-website-builder-for-local-seo",
};
const RELATED_SERVICE_SITE = {
  label: "How to build a service business website",
  href: "/website-builders/guides/how-to-build-a-service-business-website",
};

const logo = getWebsiteBuilderLogoSrc;

function alt(name: string, slug: string, description: string) {
  return { name, href: getWebsiteBuildersReviewUrl(slug), description, logoSrc: logo(slug) };
}

/** Fields identical across all website builder reviews. */
const WB_REVIEW_SHELL: Pick<
  WebsiteBuilderReviewData,
  | "category"
  | "categoryHref"
  | "methodology"
  | "compareSectionTitle"
  | "bestPayrollSoftwareHref"
  | "compareHubHref"
  | "compareHubLabel"
  | "bestRoundupLabel"
  | "bestForSectionTitle"
  | "bestForSectionSub"
  | "scenarioLinks"
  | "guideHubHref"
  | "guideHubLabel"
> = {
  category: "Website Builders",
  categoryHref: CATEGORY_HREF,
  methodology: METHODOLOGY,
  compareSectionTitle: "Compare with other website builders",
  bestPayrollSoftwareHref: ROUNDUP_HREF,
  compareHubHref: COMPARE_HUB_HREF,
  compareHubLabel: "Compare website builders",
  bestRoundupLabel: "Best website builders (2026) — full roundup",
  bestForSectionTitle: "Best website builders for different use cases",
  bestForSectionSub: "Find website builders by service-business scenario.",
  scenarioLinks: SCENARIOS,
  guideHubHref: GUIDES_HREF,
  guideHubLabel: "Website builder guides",
};

const reviews: Record<string, WebsiteBuilderReviewData> = {
  wix: {
    ...WB_REVIEW_SHELL,
    toolName: "Wix",
    rating: "4.6",
    startingPrice: "From $17/mo",
    bestFor: "Most local service businesses that want fast launch and flexible lead-generation pages",
    visitUrl: "https://www.wix.com",
    logoSrc: logo("wix"),
    quickVerdict:
      "Wix is our top pick for most service businesses: huge template library, strong apps for bookings and forms, and an editor non-technical owners can actually maintain.",
    quickVerdictParagraphs: [
      "Wix sits in the sweet spot for contractors, home services, and local operators who need a credible site quickly without hiring a developer. The drag-and-drop editor, mobile-friendly layouts, and Marketing integrations (email, SEO basics, CRM hooks) make it easy to publish service-area pages, quote requests, and click-to-call sections that actually convert mobile searchers.",
      "Where Wix pulls ahead is operational speed: you can duplicate page layouts, reuse sections, and extend the site with Wix Apps for scheduling, chat, and reviews. For teams that update seasonally—new offers, storm-response banners, hiring pages—that flexibility matters. The tradeoff is that deeply custom behavior (advanced CMS logic, strict design systems) may push you toward Webflow or a developer-led stack.",
      "If your main goal is local leads with minimal maintenance, Wix is usually the default shortlist product. Pair this review with our Wix vs Squarespace and Webflow vs Wix comparisons when you are torn between template speed and design control—and read our best website builders roundup for full rankings.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.7",
        explanation:
          "Strong coverage for lead forms, galleries, bookings, basic ecommerce, and local business templates. App Market extends functionality without code for most SMB workflows.",
      },
      {
        category: "Pricing",
        score: "4.5",
        explanation:
          "Published tiers; entry plans are accessible. Total cost rises with premium apps, email, and higher traffic—budget for year-two add-ons if you scale marketing.",
      },
      {
        category: "Ease of Use",
        score: "4.8",
        explanation:
          "Among the easiest editors for non-designers. Most owner-operators can publish edits in minutes after onboarding.",
      },
      {
        category: "Support",
        score: "4.5",
        explanation:
          "Help center, chat, and phone options vary by plan. Free sites rely more on self-serve documentation.",
      },
      {
        category: "Integrations",
        score: "4.7",
        explanation:
          "Large app ecosystem for marketing, analytics, booking, and automation. Enough depth that many teams never need Zapier—though Zapier still connects fringe tools.",
      },
    ],
    pros: [
      "Fast time-to-live for service-area and location pages",
      "Huge template/app ecosystem tailored to SMB marketing",
      "Solid mobile layouts and editor usability for non-technical owners",
      "SEO basics (metadata, indexing controls) workable for local search",
      "Clear upgrade path from simple brochure sites to marketing-heavy setups",
    ],
    cons: [
      "Heavy reliance on apps can increase monthly cost at scale",
      "Advanced designers may chafe at layout constraints versus Webflow",
      "Managing many locations still takes process—not fully automatic",
    ],
    bestForEditorial:
      "Wix fits service businesses that want one primary website owner (owner, office manager, or marketer) to ship updates weekly without tickets. It is especially strong for HVAC, plumbing, cleaning, and other trades that need proof galleries, reviews, and strong calls-to-action on mobile. Agencies managing dozens of client sites sometimes prefer Duda; design-forward brands may compare Squarespace.",
    whoShouldAvoid:
      "Teams that need a fully custom component library, strict enterprise CMS governance, or complex membership logic may outgrow template-first builders—evaluate Webflow or self-hosted WordPress. If ecommerce is the main revenue driver (not lead-gen), compare Shopify side by side in our Wix vs Shopify guide.",
    pricingSummary:
      "Wix offers several published plans; entry website plans typically start around the mid-teens per month (billed annually) with higher tiers for marketing, ecommerce, and team features. Add-ons and premium apps can add meaningful monthly cost—model your stack before you commit.",
    pricingTiers:
      "Core website plans cover hosting, SSL, and the editor; higher tiers unlock more storage, analytics, marketing automations, and ecommerce capabilities. Bookings, email marketing, and CRM features may be separate line items—check the current plan matrix on Wix.",
    costVsCompetitors:
      "Wix often lands in the same band as Squarespace for comparable sites but can exceed Hostinger or GoDaddy on all-in cost if you stack apps. Versus Webflow, Wix is usually cheaper operationally because less specialist time is required. Versus Shopify, Wix is typically less expensive if you are not running a high-volume storefront.",
    features: [
      "Drag-and-drop editor with responsive layouts",
      "Lead and contact forms with notification routing",
      "Local SEO controls: titles, descriptions, URL slugs",
      "Gallery, video, and testimonial sections",
      "Optional ecommerce and appointment scheduling via apps",
      "App Market and marketing integrations",
    ],
    keyFeatures: [
      {
        name: "Service-business templates",
        description:
          "Industry-starter layouts for trades and home services—hero, services grid, area pages, and quote requests you can localize fast.",
      },
      {
        name: "Lead capture",
        description:
          "Forms, callbacks, and app-driven booking reduce friction on mobile. Pair with review widgets for trust.",
      },
      {
        name: "Local SEO toolkit",
        description:
          "Editable meta tags, structured heading patterns, and blog tooling for city/service content when you pursue rankings.",
      },
      {
        name: "Marketing add-ons",
        description:
          "Email, automations, and ad connections help small teams nurture leads without a separate enterprise stack.",
      },
      {
        name: "Operations-friendly editing",
        description:
          "Non-developers can clone pages, swap imagery, and publish promos—critical for seasonal trades campaigns.",
      },
      {
        name: "Integrations",
        description:
          "Analytics, CRM, chat, and calendar tools connect so you can route leads into the systems you already use.",
      },
    ],
    integrations: ["Google Analytics", "Google Search Console", "Meta Pixel", "Zapier", "Mailchimp / email tools", "CRM and booking apps via Wix App Market"],
    integrationsIntro:
      "For contractors, the goal is simple: form fills and calls should land where your office schedules work. Wix’s app ecosystem usually covers analytics, chat, and light CRM—use integrations so you never re-type leads.",
    contractorUse: [
      "Publish city + service landing pages for seasonal demand (AC, snow removal, storm response).",
      "Show licensed-and-insured proof, badges, and review feeds above the fold on mobile.",
      "Route quote requests to email, SMS, or a lightweight CRM so dispatch responds same day.",
      "Swap banners and promo blocks without redeploying the whole site when offers change.",
    ],
    alternatives: [
      alt("Squarespace", "squarespace", "More design polish out of the box; less app sprawl for simple sites."),
      alt("Shopify", "shopify", "Better when ecommerce revenue—not just lead forms—is central."),
      alt("Webflow", "webflow", "More design control and CMS depth when you have specialist bandwidth."),
      alt("GoDaddy", "godaddy-website-builder", "Simpler stack when you only need a minimal brochure site fast."),
      alt("Hostinger", "hostinger-website-builder", "Lower entry price when budget is the main constraint."),
      alt("Duda", "duda", "Strong when an agency manages many locations or client sites."),
    ],
    faqs: [
      {
        q: "Is Wix good for contractor SEO?",
        a: "Wix can support solid local SEO when you invest in unique service-area content, clear URLs, and internal linking. It will not replace a content strategy—see our local SEO guide for what actually moves rankings.",
      },
      {
        q: "Wix vs Squarespace—which is better for trades?",
        a: "Wix usually wins on speed-to-launch and app flexibility; Squarespace wins on visual polish for portfolio-heavy trades. Read our Wix vs Squarespace comparison for a side-by-side checklist.",
      },
      {
        q: "Can I sell parts or merch on Wix?",
        a: "Yes, Wix supports ecommerce on higher plans. If online selling is most of your revenue, also weigh Shopify in our Wix vs Shopify comparison.",
      },
      {
        q: "Does Wix replace WordPress?",
        a: "For most SMB service sites, yes—less maintenance and fewer security tasks than self-hosted WordPress. If you need plugin-heavy publishing workflows, read Website builders vs WordPress.",
      },
      {
        q: "How do I budget total cost?",
        a: "Add hosting plan + premium apps + email/automation. Compare two-year TCO against Hostinger or GoDaddy if price-sensitive, or Webflow if design time is billable.",
      },
    ],
    compareLinks: [
      { label: "Wix vs Squarespace", href: getWebsiteBuildersCompareUrl("wix-vs-squarespace") },
      { label: "Wix vs Shopify", href: getWebsiteBuildersCompareUrl("wix-vs-shopify") },
      { label: "Webflow vs Wix", href: getWebsiteBuildersCompareUrl("webflow-vs-wix") },
      { label: "GoDaddy vs Wix", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-wix") },
      { label: "Hostinger vs Wix", href: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix") },
    ],
    relatedReading: [RELATED_CHOOSE, RELATED_CONTRACTOR_FEATURES, RELATED_LOCAL_SEO, RELATED_SERVICE_SITE],
    alternativesPageHref: getWebsiteBuildersAlternativeUrl("wix"),
    alternativesPageLabel: "Best Wix alternatives",
  },

  squarespace: {
    ...WB_REVIEW_SHELL,
    toolName: "Squarespace",
    rating: "4.4",
    startingPrice: "From $16/mo",
    bestFor: "Design-led service brands that want polished templates and calm, trust-forward pages",
    visitUrl: "https://www.squarespace.com",
    logoSrc: logo("squarespace"),
    quickVerdict:
      "Squarespace is the builder to beat when visual credibility matters as much as lead capture—ideal for premium trades, studios, and boutique service firms.",
    quickVerdictParagraphs: [
      "Squarespace built its reputation on typography, spacing, and photography-forward templates. For contractors and local services that sell high-trust work—kitchen remodels, landscape design, photography-led trades—the default aesthetic often looks “finished” faster than generic builder themes. The editor is structured rather than free-form, which reduces messy layouts but caps some advanced layout tricks.",
      "Lead generation is capable: forms, scheduling blocks, email capture, and Stripe commerce are first-class on higher tiers. Squarespace is less app-sprawling than Wix; integrations are tighter and the ecosystem is smaller. That is a feature if you want a simpler stack, and a limitation if you need dozens of marketing widgets.",
      "Use our Wix vs Squarespace comparison when you are choosing between maximum flexibility and presentation polish. If you also sell products online, read Squarespace vs Shopify before you commit to commerce workflows.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.5",
        explanation:
          "Excellent templates, blogging, galleries, and commerce. Fewer third-party apps than Wix but strong native experiences for content and storefront basics.",
      },
      {
        category: "Pricing",
        score: "4.3",
        explanation:
          "Clear tiers; commerce and marketing capabilities unlock on higher plans. Annual billing is typical for best pricing.",
      },
      { category: "Ease of Use", score: "4.5", explanation: "Structured editor is easy for non-designers; less overwhelming than maximalist builders." },
      {
        category: "Support",
        score: "4.4",
        explanation:
          "Knowledge base, webinars, and support channels scale with plan level. Generally reliable for SMB onboarding.",
      },
      {
        category: "Integrations",
        score: "4.2",
        explanation:
          "Curated extensions and official integrations; fewer niche connectors than Wix. Zapier still bridges many gaps.",
      },
    ],
    pros: [
      "Best-in-class template aesthetics for SMB sites",
      "Strong blogging and portfolio presentation for trust-building",
      "Unified hosting, SSL, and security posture",
      "Commerce path without bolting on a separate storefront for light SKUs",
      "Predictable editing experience—fewer layout breakages",
    ],
    cons: [
      "Less app depth than Wix for niche workflows",
      "Advanced layout control lags Webflow",
      "Heavier ecommerce brands may still migrate to Shopify eventually",
    ],
    bestForEditorial:
      "Squarespace is best for premium service brands where look-and-feel signals quality: design-build, landscape architecture, photography-driven trades, and consultancies. Marketing teams that publish long-form case studies will like the writing and media tools. High-volume lead operations that need aggressive experimentation may still favor Wix’s app market.",
    whoShouldAvoid:
      "Operators who need many third-party marketing widgets, complex multi-location governance, or deep CMS logic should compare Wix or Webflow. If online checkout is your core business, start with Shopify.",
    pricingSummary:
      "Squarespace sells tiered website and commerce plans; entry personal/business tiers start in the mid-teens per month when billed annually. Commerce plans add transaction and product features—confirm current fees on Squarespace pricing.",
    pricingTiers:
      "Lower tiers cover brochure sites and portfolios; mid tiers add marketing features; commerce tiers unlock products, checkout, and inventory workflows relevant to service-plus-product businesses.",
    costVsCompetitors:
      "Squarespace and Wix often land within a few dollars for comparable brochure plans. Versus Hostinger or GoDaddy, Squarespace is usually pricier but more refined visually. Versus Shopify, Squarespace is cheaper if you are not running a SKU-heavy catalog.",
    features: [
      "Structured visual editor",
      "Forms, newsletter, and basic CRM hooks",
      "Galleries, video, and project storytelling",
      "Blog and SEO settings",
      "Commerce and appointments (plan-dependent)",
      "Email campaigns on higher plans",
    ],
    keyFeatures: [
      {
        name: "Template quality",
        description:
          "Design systems with strong typography and whitespace—less time fixing awkward mobile breakpoints.",
      },
      {
        name: "Trust content",
        description:
          "Case studies, before/after grids, and long-form service pages help premium trades justify pricing.",
      },
      {
        name: "Lead capture",
        description:
          "Inline forms and contact flows that match the visual language of the template—fewer ‘cheap form plugin’ moments.",
      },
      {
        name: "Light ecommerce",
        description:
          "Sell packages, deposits, or merch without launching a full separate store when SKUs stay small.",
      },
      {
        name: "SEO fundamentals",
        description:
          "Editable titles, descriptions, and clean URLs; pair with disciplined content for local rankings.",
      },
      {
        name: "Integrations",
        description:
          "Official extensions cover analytics, booking, and social; use Zapier when you need niche tools.",
      },
    ],
    integrations: ["Stripe", "Google Analytics", "Scheduled booking blocks", "Email marketing (Acuity / campaigns)", "Zapier", "Social and content tools"],
    integrationsIntro:
      "Squarespace favors fewer, higher-quality integrations. For contractors, connect analytics and booking first—then add automation only where it saves office time.",
    contractorUse: [
      "Showcase high-ticket jobs with image-first case studies.",
      "Collect design consultation requests with structured intake fields.",
      "Publish evergreen service pages that reinforce city + trade keywords.",
      "Sell deposits or small product add-ons without a separate Shopify theme.",
    ],
    alternatives: [
      alt("Wix", "wix", "More apps and experimental marketing workflows."),
      alt("Shopify", "shopify", "Better catalog and checkout depth."),
      alt("Webflow", "webflow", "Designer-level layout control."),
      alt("WordPress", "wordpress", "Plugin ecosystem when you want self-hosted publishing."),
      alt("GoDaddy", "godaddy-website-builder", "Faster bare-minimum sites."),
      alt("Duda", "duda", "Agency workflows across many client sites."),
    ],
    faqs: [
      {
        q: "Squarespace vs Wix for plumbers or HVAC?",
        a: "Wix often wins when you want rapid experimentation and apps; Squarespace wins when your brand look is the main differentiator. Use our comparison page for a feature checklist.",
      },
      {
        q: "Is Squarespace bad for SEO?",
        a: "No—Squarespace handles technical basics well enough. Rankings still depend on content, links, and reviews. See our local SEO guide for priorities.",
      },
      {
        q: "Can I migrate from Squarespace later?",
        a: "Yes, but plan exports carefully—especially blog and ecommerce data. Choosing the right builder up front saves migration cost.",
      },
      {
        q: "Does Squarespace include email marketing?",
        a: "Campaign features exist on higher tiers; verify list limits and deliverability needs against dedicated ESPs.",
      },
      {
        q: "What should I read next?",
        a: "Start with How to choose a website builder, then our contractor features checklist if you are in the trades.",
      },
    ],
    compareLinks: [
      { label: "Wix vs Squarespace", href: getWebsiteBuildersCompareUrl("wix-vs-squarespace") },
      { label: "Squarespace vs Shopify", href: getWebsiteBuildersCompareUrl("squarespace-vs-shopify") },
    ],
    relatedReading: [RELATED_CHOOSE, RELATED_VS_WP, RELATED_CONTRACTOR_FEATURES, RELATED_SERVICE_SITE],
    alternativesPageHref: getWebsiteBuildersAlternativeUrl("squarespace"),
    alternativesPageLabel: "Best Squarespace alternatives",
  },

  shopify: {
    ...WB_REVIEW_SHELL,
    toolName: "Shopify",
    rating: "4.5",
    startingPrice: "From $39/mo",
    bestFor: "Service businesses that also sell products, parts, or packages online with real checkout volume",
    visitUrl: "https://www.shopify.com",
    logoSrc: logo("shopify"),
    quickVerdict:
      "Shopify is the right website platform when ecommerce—not just a contact form—is a primary revenue line for your service business.",
    quickVerdictParagraphs: [
      "Many trades run hybrid models: onsite services plus parts, merch, or standardized packages sold online. Shopify’s storefront, inventory, discounts, and checkout are stronger than typical brochure builders. If you already Stripe-invoice everything, Shopify may be overkill—but if customers self-serve SKUs nightly, it earns its keep.",
      "Shopify’s content pages can support local service messaging, but the editor is commerce-first. You will still build service-area pages and trust content; just expect to pair Shopify’s blogging and pages with themes designed for local operators. Apps extend booking, reviews, and SEO—budget for apps the same way you would on Wix.",
      "Read Wix vs Shopify and Squarespace vs Shopify before choosing. If you mostly need calls and forms, Wix or Squarespace may be simpler. If checkout reliability and catalog depth matter, Shopify belongs on your shortlist.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.7",
        explanation:
          "Industry-leading storefront, inventory, discounts, and checkout. Apps extend subscriptions, bookings, and B2B quoting.",
      },
      {
        category: "Pricing",
        score: "4.2",
        explanation:
          "Higher base cost than brochure builders; transaction fees depend on plan and payment provider. Model apps and POS add-ons.",
      },
      { category: "Ease of Use", score: "4.3", explanation: "Merchants learn quickly for catalog tasks; service-only content sites take more theme planning." },
      { category: "Support", score: "4.5", explanation: "24/7 channels on paid plans; large documentation and partner ecosystem for implementations." },
      {
        category: "Integrations",
        score: "4.8",
        explanation:
          "Massive app store covers shipping, subscriptions, reviews, loyalty, and automation. API access for custom needs.",
      },
    ],
    pros: [
      "Best-in-class ecommerce and checkout for SMBs",
      "Huge app ecosystem for expansions (subscriptions, bundles, B2B)",
      "POS alignment when you also sell in-store or on trucks",
      "Scales from side SKUs to serious catalog businesses",
      "Strong partner network for custom theme work",
    ],
    cons: [
      "Higher monthly + fee stack than Wix for brochure-only sites",
      "Content/marketing editor less hobbyist-friendly than Squarespace",
      "Can feel heavy if you never intend to sell online",
    ],
    bestForEditorial:
      "Shopify fits HVAC suppliers with parts counters, cleaning companies selling packages, landscapers moving mulch or decor SKUs, and any service brand building direct-to-consumer revenue. Pair Shopify pages with local trust content so SEO still captures service intent.",
    whoShouldAvoid:
      "Pure lead-generation contractors with no online catalog should compare Wix or Squarespace first—Shopify’s economics only make sense when checkout volume justifies the stack.",
    pricingSummary:
      "Shopify publishes multiple plan tiers; entry ecommerce plans often start around $39/month before apps and transaction fees. POS hardware and retail bundles are priced separately.",
    pricingTiers:
      "Basic Shopify covers a single storefront with core commerce; higher tiers unlock more staff accounts, reporting, and internationalization. Enterprise Shopify Plus is separate for very large merchants.",
    costVsCompetitors:
      "Shopify is usually the most expensive option if you only need brochure pages. Versus Wix ecommerce, Shopify wins on catalog depth and checkout reliability at scale; versus Squarespace commerce, Shopify typically scales further.",
    features: [
      "Online store with catalog, cart, and checkout",
      "Discounts, gift cards, and selling in person (POS)",
      "Service-style pages + blogging for SEO",
      "Customer accounts and order management",
      "App Store extensions",
      "Analytics and marketing automations",
    ],
    keyFeatures: [
      {
        name: "Checkout and payments",
        description: "Shop Pay, local payment methods, and compliance workflows that brochure builders bolt on less gracefully.",
      },
      {
        name: "Inventory operations",
        description: "Track SKUs, variants, and stock alerts when parts matter as much as labor.",
      },
      {
        name: "Apps for services",
        description: "Booking, deposits, quotes, and reviews extend Shopify for hybrid service/product businesses.",
      },
      {
        name: "SEO surfaces",
        description: "Control titles, structured content, and redirects; still requires on-page content discipline.",
      },
      {
        name: "Automation",
        description: "Flows and integrations reduce manual order handling as volume grows.",
      },
      {
        name: "Omnichannel",
        description: "Unify online and counter/field sales when you already think retail-first.",
      },
    ],
    integrations: ["QuickBooks and accounting tools", "Klaviyo / email", "CRM via apps", "Shipping / fulfillment", "Zapier", "Custom apps via Shopify API"],
    integrationsIntro:
      "Shopify shines when orders, not just leads, must flow into accounting and fulfillment. Pick integrations that match how your office actually closes jobs.",
    contractorUse: [
      "Sell filters, cleaning kits, or branded merch beside scheduled service calls.",
      "Offer prepaid maintenance packages with clear SKUs and renewal flows.",
      "Capture local SEO traffic on service pages while pushing catalog buyers through checkout.",
      "Use POS in showrooms or parts counters and keep inventory synced.",
    ],
    alternatives: [
      alt("Wix", "wix", "Simpler when ecommerce is secondary."),
      alt("Squarespace", "squarespace", "More visual polish for light SKUs."),
      alt("Webflow", "webflow", "Custom merchandising UX with designer resources."),
      alt("WordPress", "wordpress", "WooCommerce path with more DIY overhead."),
      alt("Hostinger", "hostinger-website-builder", "Budget brochure alternative."),
      alt("GoDaddy", "godaddy-website-builder", "Fast simple sites without catalog depth."),
    ],
    faqs: [
      {
        q: "Should a plumber use Shopify?",
        a: "If you sell meaningful parts or packages online—or plan to—yes. If you only need calls, Wix or Squarespace may be cheaper and faster.",
      },
      {
        q: "Shopify vs Wix for local SEO?",
        a: "Both can rank with good content. Shopify needs explicit service pages and internal linking; read our local SEO guide either way.",
      },
      {
        q: "What about transaction fees?",
        a: "Fees vary by plan and whether you use Shopify Payments. Model them against gross merchandise volume before you launch.",
      },
      {
        q: "Can Shopify handle bookings?",
        a: "Yes, via apps. If booking is the entire business and SKUs are zero, also evaluate Wix or niche booking platforms.",
      },
      {
        q: "Where should I compare apples to apples?",
        a: "Use our Wix vs Shopify and Squarespace vs Shopify comparisons plus the best website builders roundup.",
      },
    ],
    compareLinks: [
      { label: "Wix vs Shopify", href: getWebsiteBuildersCompareUrl("wix-vs-shopify") },
      { label: "Squarespace vs Shopify", href: getWebsiteBuildersCompareUrl("squarespace-vs-shopify") },
    ],
    relatedReading: [RELATED_CHOOSE, RELATED_SERVICE_SITE, RELATED_LOCAL_SEO, RELATED_VS_WP],
    alternativesPageHref: getWebsiteBuildersAlternativeUrl("shopify"),
    alternativesPageLabel: "Best Shopify alternatives",
  },

  "godaddy-website-builder": {
    ...WB_REVIEW_SHELL,
    toolName: "GoDaddy",
    rating: "4.1",
    startingPrice: "From $10/mo",
    bestFor: "Owners who want the fastest possible professional site with minimal decisions",
    visitUrl: "https://www.godaddy.com",
    logoSrc: logo("godaddy-website-builder"),
    quickVerdict:
      "GoDaddy Website Builder is the pragmatic pick when speed beats customization—you can publish a credible trades site in a weekend.",
    quickVerdictParagraphs: [
      "GoDaddy optimizes for onboarding: guided flows, domain purchase in the same cart, and templates tuned for SMBs. For contractors who procrastinated on a website until busy season, that friction reduction matters. You trade some design depth and app breadth versus Wix, but you gain momentum.",
      "SEO and lead-gen features are “good enough” for many local operators: service lists, click-to-call, maps, and basic metadata. Competitive rankings still require content, reviews, and backlinks—no builder replaces that. Compare against Wix when you anticipate marketing experimentation or multi-location scale.",
      "Use GoDaddy vs Wix and GoDaddy vs Hostinger comparisons to stress-test price and flexibility. If you already live in GoDaddy’s domain/email stack, keeping the site there simplifies billing—even if you graduate later.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.0",
        explanation:
          "Core site features, marketing integrations, and simple ecommerce on higher tiers. Less third-party depth than Wix.",
      },
      {
        category: "Pricing",
        score: "4.3",
        explanation:
          "Promotional pricing common; watch renewals and bundled add-ons. Often affordable for year one.",
      },
      { category: "Ease of Use", score: "4.6", explanation: "Very approachable for first-time site owners; fewer knobs than power-user builders." },
      {
        category: "Support",
        score: "4.2",
        explanation:
          "Phone-forward support culture helps non-technical owners; quality varies by product line.",
      },
      {
        category: "Integrations",
        score: "3.9",
        explanation:
          "Connects key marketing pieces but not as sprawling as Wix’s app market. Use Zapier for edge cases.",
      },
    ],
    pros: [
      "Extremely fast path from zero to live site",
      "Fits owners already buying domains or Microsoft 365 through GoDaddy",
      "Simple editing for seasonal promotions",
      "Decent mobile templates for call-heavy trades",
      "Marketing add-ons in one vendor relationship",
    ],
    cons: [
      "Less design and app flexibility than Wix or Webflow",
      "Renewal pricing and upsells need careful review",
      "Power users may outgrow structured simplicity",
    ],
    bestForEditorial:
      "GoDaddy works for solo roofers, cleaners, and handymen who need a respectable digital business card plus quote requests, fast. It is also reasonable when the business already standardizes on GoDaddy for DNS and email.",
    whoShouldAvoid:
      "Marketing-heavy teams that rely on dozens of integrations, custom CMS fields, or aggressive CRO testing should shortlist Wix or Webflow instead.",
    pricingSummary:
      "GoDaddy typically advertises low introductory website-builder pricing; renewal rates and bundled email/marketing can change TCO. Verify domain privacy and renewal quotes before checkout.",
    pricingTiers:
      "Lower tiers cover basic sites; higher tiers add marketing, appointments, and ecommerce-lite capabilities depending on current packaging.",
    costVsCompetitors:
      "Often cheaper in year one than Squarespace; may converge with Wix after add-ons. Hostinger can beat GoDaddy on pure price—compare support and domain bundle needs.",
    features: [
      "Guided site creation",
      "Mobile-friendly templates",
      "Contact and lead forms",
      "Basic SEO settings",
      "Optional ecommerce",
      "Marketing and email upsells",
    ],
    keyFeatures: [
      { name: "Speed to launch", description: "Template-driven onboarding gets owners online before peak season backlog." },
      { name: "Calls and maps", description: "Prominent phone, directions, and service lists match mobile local intent." },
      {
        name: "Simple maintenance",
        description: "Edit text and photos without fear of breaking complex layouts.",
      },
      {
        name: "Marketing bundles",
        description: "Email and social tools may suffice for micro-businesses with one owner wearing every hat.",
      },
      {
        name: "Integrated domain stack",
        description: "DNS, website, and email under one login reduces vendor sprawl for some teams.",
      },
      {
        name: "Growth path",
        description: "If you outgrow builder limits, plan a migration rather than forcing advanced workflows here.",
      },
    ],
    integrations: ["Google Analytics", "Social posting tools", "Email marketing (GoDaddy products)", "Booking widgets (tier-dependent)", "Zapier"],
    integrationsIntro:
      "GoDaddy is best when integrations stay simple—analytics plus email. Complex stacks should compare Wix or Shopify instead.",
    contractorUse: [
      "Launch before seasonal demand spikes with minimal setup friction.",
      "Highlight emergency service numbers and service areas clearly on mobile.",
      "Rotate promotions for slow seasons without developer help.",
      "Pair the site with local Google Business Profile reviews for trust.",
    ],
    alternatives: [
      alt("Wix", "wix", "More marketing depth and apps when you graduate."),
      alt("Hostinger", "hostinger-website-builder", "Budget competitor—see GoDaddy vs Hostinger."),
      alt("Squarespace", "squarespace", "Higher design polish at a higher price."),
      alt("Webflow", "webflow", "Custom UX when you hire design help."),
      alt("WordPress", "wordpress", "Publishing-heavy content with more maintenance."),
      alt("Shopify", "shopify", "When SKUs matter more than speed."),
    ],
    faqs: [
      {
        q: "Is GoDaddy good for SEO?",
        a: "It covers basics; rankings depend on content and authority. Read our local SEO guide for what moves the needle.",
      },
      {
        q: "GoDaddy vs Wix?",
        a: "GoDaddy wins on pure speed and simplicity; Wix wins on flexibility. See our comparison for specifics.",
      },
      {
        q: "Can I sell online?",
        a: "Light ecommerce is available on some plans—verify limits. Heavy catalogs should use Shopify.",
      },
      {
        q: "What is the biggest risk?",
        a: "Renewal creep—calendar a yearly review of domain, email, and builder renewals.",
      },
    ],
    compareLinks: [
      { label: "GoDaddy vs Wix", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-wix") },
      {
        label: "GoDaddy vs Hostinger",
        href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder"),
      },
    ],
    relatedReading: [RELATED_CHOOSE, RELATED_CONTRACTOR_FEATURES, RELATED_VS_WP, RELATED_LOCAL_SEO],
  },

  webflow: {
    ...WB_REVIEW_SHELL,
    toolName: "Webflow",
    rating: "4.3",
    startingPrice: "From $14/mo",
    bestFor: "Teams that want designer-grade layouts, CMS collections, and performance tuning without full custom code",
    visitUrl: "https://webflow.com",
    logoSrc: logo("webflow"),
    quickVerdict:
      "Webflow is the website builder for brands that outgrew template rigidity but are not ready to maintain a React codebase.",
    quickVerdictParagraphs: [
      "Webflow exposes real layout control: flexbox, responsive breakpoints, interactions, and a CMS for structured content. For service companies with unique brand guidelines or multi-location editorial workflows, that power shows up in cleaner UX and faster load characteristics when implemented well.",
      "The catch is responsibility: Webflow rewards someone on the team (in-house marketer, freelancer, or agency) who understands web design conventions. Owner-operators with zero design patience may move slower than in Wix. Training pays off if you intend to iterate landing pages weekly.",
      "Compare Webflow vs Wix before committing. If you simply need a dependable trades site quickly, Wix wins. If you need modular components, rich CMS-driven service libraries, or motion design that matches a premium brand, Webflow earns consideration.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.6",
        explanation:
          "Deep design, interactions, CMS collections, and localization options for growing brands. Enterprise workspaces for larger teams.",
      },
      {
        category: "Pricing",
        score: "4.0",
        explanation:
          "Entry plan pricing can look low, but CMS items, hosting tiers, and seats compound. Budget realistically at 12–24 months.",
      },
      {
        category: "Ease of Use",
        score: "3.9",
        explanation:
          "Powerful for skilled users; steeper learning curve than Wix or Squarespace for novices.",
      },
      {
        category: "Support",
        score: "4.2",
        explanation:
          "Documentation, university content, and community are strong; live support depends on plan tier.",
      },
      {
        category: "Integrations",
        score: "4.4",
        explanation:
          "Native connections plus Zapier, middleware, and custom code embeds. Flexible for stacks that need bespoke wiring.",
      },
    ],
    pros: [
      "Industry-leading visual control among hosted builders",
      "CMS collections for large service libraries or location content",
      "Performance tuning options that template builders obscure",
      "Design-system thinking scales across many pages",
      "Great fit when you partner with a Webflow-savvy freelancer/agency",
    ],
    cons: [
      "Slower for beginners without design help",
      "Pricing can escalate with CMS scale and collaboration needs",
      "Overkill for a single-page brochure need",
    ],
    bestForEditorial:
      "Webflow suits premium local brands, multi-location service groups, and marketing teams that treat the website as a product. If you run structured campaigns and need repeatable landing patterns, Webflow’s components shine.",
    whoShouldAvoid:
      "Solo tradespeople who want Friday-night publishing without learning breakpoints should stay on Wix or GoDaddy until they hire marketing help.",
    pricingSummary:
      "Webflow combines site hosting, CMS usage tiers, and optional workspace billing. Start from published pricing, then add CMS item limits and collaborators your roadmap actually needs.",
    pricingTiers:
      "General site plans support marketing sites; CMS plans unlock collection-driven content; Enterprise covers governance, SSO, and advanced compliance for larger orgs.",
    costVsCompetitors:
      "Webflow may cost more than Squarespace once CMS and seats scale, but less than a fully custom stack with dev retainers. Versus Wix, factor billable time—Webflow saves design debt if you use the control.",
    features: [
      "Visual canvas + responsive breakpoints",
      "CMS collections and dynamic templates",
      "Interactions and animations",
      "Hosting, forms, and logic (plan-dependent)",
      "Collaboration and staging workflows",
      "Custom code when needed",
    ],
    keyFeatures: [
      { name: "Layout control", description: "Pixel-aware spacing, grids, and component reuse beat rigid theme sections." },
      { name: "Structured CMS", description: "Model services, FAQs, or locations as data—not one-off pages—to keep updates consistent." },
      {
        name: "Performance culture",
        description: "Teams invested in clean assets and interactions often ship faster perceived experiences.",
      },
      {
        name: "Brand fidelity",
        description: "Match typography and motion to identity guidelines that generic templates dilute.",
      },
      {
        name: "Integrations",
        description: "Embed tools, connect automation, or sync CRM without waiting for a monolithic app market.",
      },
      {
        name: "Agency ecosystem",
        description: "Large partner network helps when you want experts to build and hand off.",
      },
    ],
    integrations: ["Zapier", "HubSpot / CRM embeds", "Google Analytics / GTM", "Membership tools", "Airtable and data sync tools", "Custom JavaScript"],
    integrationsIntro:
      "Webflow integrates by design thinking: choose the minimum glue (forms, analytics, CRM) and keep components clean so performance stays strong.",
    contractorUse: [
      "Spin up repeatable landing templates for storm or seasonal campaigns.",
      "Model locations as CMS items so new branches inherit structure.",
      "Showcase premium project reels with interaction polish.",
      "Align marketing and brand agencies on one component system.",
    ],
    alternatives: [
      alt("Wix", "wix", "Faster launches with less specialist time."),
      alt("Squarespace", "squarespace", "Less learning curve for premium visuals."),
      alt("WordPress", "wordpress", "Plugin ecosystem vs hosted design control—read Website builders vs WordPress."),
      alt("Duda", "duda", "Agency multi-site features without Webflow’s learning curve."),
      alt("Shopify", "shopify", "If SKUs and checkout dominate."),
      alt("GoDaddy", "godaddy-website-builder", "Bare-bones speed."),
    ],
    faqs: [
      {
        q: "Is Webflow good for local SEO?",
        a: "Yes—with disciplined URL patterns, internal links, and content models. The builder does not replace strategy; follow our local SEO guide.",
      },
      {
        q: "Webflow vs WordPress?",
        a: "Webflow is hosted and design-rich; WordPress is extensible with plugins but needs maintenance. See our guide for tradeoffs.",
      },
      {
        q: "Do I need a developer?",
        a: "Not always—many marketers own Webflow—but plan onboarding time or hire help for initial system design.",
      },
      {
        q: "What comparison should I read first?",
        a: "Webflow vs Wix mirrors the flexibility vs speed decision most service brands face.",
      },
    ],
    compareLinks: [{ label: "Webflow vs Wix", href: getWebsiteBuildersCompareUrl("webflow-vs-wix") }],
    relatedReading: [RELATED_CHOOSE, RELATED_LOCAL_SEO, RELATED_VS_WP, RELATED_SERVICE_SITE],
    alternativesPageHref: getWebsiteBuildersAlternativeUrl("webflow"),
    alternativesPageLabel: "Best Webflow alternatives",
  },

  duda: {
    ...WB_REVIEW_SHELL,
    toolName: "Duda",
    rating: "4.2",
    startingPrice: "From $19/mo",
    bestFor: "Agencies and multi-location brands that need repeatable sites, client permissions, and bulk workflows",
    visitUrl: "https://www.duda.co",
    logoSrc: logo("duda"),
    quickVerdict:
      "Duda is the operations-minded website builder for teams that manage many sites—not a hobbyist tinkering with one homepage.",
    quickVerdictParagraphs: [
      "Duda’s strengths map to agencies, franchises, and marketing departments: client management, site duplication, team permissions, and widgets tuned for speed. If you roll out templated sites for dozens of franchisees or trade partners, Duda’s workflow beats consumer-first builders.",
      "Single-location owner-operators may find Duda’s power unnecessary versus Wix unless an agency standardizes on it. The editor is competent and template quality is solid, but the ROI shows up at volume.",
      "Compare Duda vs Wix to understand consumer vs operator workflows. If you are deciding for one small business site only, Wix often wins on ecosystem; if you are standardizing a fleet, Duda deserves the evaluation.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.3",
        explanation:
          "Agency features—client billing hooks, team roles, site widgets, and white-label options—lead the story beyond generic templates.",
      },
      {
        category: "Pricing",
        score: "4.0",
        explanation:
          "Positioned for pros managing multiple properties; per-site economics improve at scale. Solo SMB pricing may feel high.",
      },
      { category: "Ease of Use", score: "4.2", explanation: "Smooth for teams trained on Duda; newcomers may need onboarding versus Wix." },
      {
        category: "Support",
        score: "4.2",
        explanation:
          "Professional support orientation; agencies expect responsive help when client launches stack up.",
      },
      {
        category: "Integrations",
        score: "4.1",
        explanation:
          "Solid connectors plus marketing stack pieces; less consumer-app novelty than Wix, more B2B workflow focus.",
      },
    ],
    pros: [
      "Built-in workflows for agencies and multi-site operators",
      "Strong duplication and templating for franchises",
      "Performance-oriented widgets and hosting stack",
      "Team permissions that match how shops actually staff projects",
      "White-label options for client-facing brands",
    ],
    cons: [
      "Less hobbyist-friendly than Wix",
      "Smaller consumer app marketplace",
      "Single-site SMBs may overbuy capability",
    ],
    bestForEditorial:
      "Duda shines when the buyer is an agency or corporate marketing team rolling standardized websites to locations or partners. Franchise HVAC, multi-branch cleaning companies, and white-label resellers fit here.",
    whoShouldAvoid:
      "Solopreneurs who just need one simple trades site should compare Wix or Hostinger unless an agency already standardized on Duda.",
    pricingSummary:
      "Duda sells tiers based on team size and site count; published pricing starts in the high teens-to-twenties per month for basic pro usage but climbs with managed volume.",
    pricingTiers:
      "Basic plans cover limited sites; higher tiers unlock more collaborators, client management, and premium support. Enterprise quotes apply for large rollouts.",
    costVsCompetitors:
      "Per-site, Duda can cost more than Wix for one business—but less than custom dev when you amortize across ten sites. Webflow competes for design sophistication; Duda competes for rollout velocity.",
    features: [
      "Multi-site and client management",
      "Team roles and permissions",
      "Responsive templates",
      "Widgets for personalization and data",
      "Ecommerce and memberships (plan-dependent)",
      "APIs for advanced integrations",
    ],
    keyFeatures: [
      { name: "Site duplication", description: "Clone proven blueprints so every franchise location launches with the same conversion architecture." },
      {
        name: "Client permissions",
        description: "Let local managers edit safe sections without breaking the whole theme.",
      },
      {
        name: "Operational widgets",
        description: "Pop-ups, banners, and structured data helpers tuned for velocity, not gimmicks.",
      },
      {
        name: "Performance focus",
        description: "Agency clients still judge Core Web Vitals—Duda markets speed as a selling point.",
      },
      {
        name: "Commerce add-ons",
        description: "Support light ecommerce when locations sell kits or merch alongside services.",
      },
      {
        name: "API layer",
        description: "Connect CRMs or internal tools when template-only builders fall short.",
      },
    ],
    integrations: ["Google Analytics", "Marketing automation tools", "Scheduling platforms", "CRM connectors", "Zapier", "Custom API integrations"],
    integrationsIntro:
      "Agency teams should map each client’s lead routing up front—Duda supports integrations, but governance prevents chaotic plugin sprawl.",
    contractorUse: [
      "Roll out templated franchise sites with localized phone numbers and hours.",
      "Let franchisees update promos within guardrails.",
      "Centralize analytics reporting across branches.",
      "Speed seasonal campaign deployment across dozens of properties.",
    ],
    alternatives: [
      alt("Wix", "wix", "Better single-business simplicity and consumer apps."),
      alt("Webflow", "webflow", "Designer-level sites without Duda’s multi-tenant focus."),
      alt("Squarespace", "squarespace", "Premium design for single-brand storytelling."),
      alt("WordPress", "wordpress", "Multisite WordPress vs Duda is a maintenance tradeoff."),
      alt("GoDaddy", "godaddy-website-builder", "Fastest naive launch."),
      alt("Shopify", "shopify", "If every location sells SKUs online."),
    ],
    faqs: [
      {
        q: "Is Duda overkill for one plumber?",
        a: "Usually yes—Wix or Squarespace fits single locations unless your agency already built a Duda system for you.",
      },
      {
        q: "Duda vs Wix for agencies?",
        a: "Duda wins on client scale workflows; Wix wins on app variety for bespoke SMB requests. Read Duda vs Wix.",
      },
      {
        q: "Can franchises use Duda?",
        a: "Yes—site duplication and permissions map well to franchise operations.",
      },
      {
        q: "What guides should I pair with this review?",
        a: "How to build a service business website and contractor features explain what each location page must include.",
      },
    ],
    compareLinks: [{ label: "Duda vs Wix", href: getWebsiteBuildersCompareUrl("duda-vs-wix") }],
    relatedReading: [RELATED_CHOOSE, RELATED_SERVICE_SITE, RELATED_CONTRACTOR_FEATURES, RELATED_LOCAL_SEO],
  },

  wordpress: {
    ...WB_REVIEW_SHELL,
    toolName: "WordPress",
    rating: "4.2",
    startingPrice: "From $9/mo",
    bestFor: "Publishing-heavy service brands that want blogging, editorial SEO, and extendibility through managed WordPress hosting",
    visitUrl: "https://wordpress.com",
    logoSrc: logo("wordpress"),
    quickVerdict:
      "WordPress remains the Content + SEO king for teams willing to maintain plugins, themes, and updates—or pay someone to do it.",
    quickVerdictParagraphs: [
      "When service businesses say “WordPress,” they usually mean one of two things: fully managed WordPress.com plans or self-hosted WordPress.org on a host like Hostinger. Either way, the platform’s strength is editorial: long-form guides, city pages, schema-friendly themes, and a plugin ecosystem for forms, SEO, and CRM handoffs. The cost is operational—you own backups, updates, and security unless you buy higher managed tiers.",
      "Compared with Wix or Squarespace, WordPress trades beginner convenience for ceiling. You can model complex content hubs, multilingual services, or membership portals that hosted builders struggle to match. If you will never blog or build substantive content, you may not need that ceiling—see Website builders vs WordPress.",
      "Internal linking strategy matters on WordPress: connect hub pages to service clusters and FAQs. Pair this review with our best website builder for local SEO guide and the service business website playbook so your IA supports rankings, not just pretty pages.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.5",
        explanation:
          "Near-unlimited feature surface via plugins and themes: SEO, forms, bookings, LMS, memberships, and more—if you manage complexity.",
      },
      {
        category: "Pricing",
        score: "4.1",
        explanation:
          "Entry hosted plans are affordable; real-world TCO includes premium themes, key plugins, backups, and sometimes developer retainers.",
      },
      {
        category: "Ease of Use",
        score: "3.8",
        explanation:
          "Block editor improved usability, but setup still steeper than Wix. Non-technical owners should budget training or vendor help.",
      },
      {
        category: "Support",
        score: "4.0",
        explanation:
          "Depends on host/plan: WordPress.com support vs community forums vs managed host SLAs—choose intentionally.",
      },
      {
        category: "Integrations",
        score: "4.7",
        explanation:
          "Largest integration surface of any CMS family—plugins and APIs connect virtually any marketing stack.",
      },
    ],
    pros: [
      "Best long-form SEO and content architecture flexibility",
      "Huge plugin ecosystem for forms, CRM, and automation",
      "Theme market fits both budget and premium brand needs",
      "Ideal when editorial calendar is core to growth",
      "Can grow into advanced features (memberships, courses) without replatforming early",
    ],
    cons: [
      "Security, updates, and backups are your responsibility unless fully managed",
      "Plugin conflicts or sloppy stacks can hurt performance",
      "Steeper learning curve than drag-and-drop builders",
    ],
    bestForEditorial:
      "WordPress fits consultants, multi-service trades with dense educational content, and marketing-led home services firms that publish weekly. It also fits teams already comfortable hiring WordPress help.",
    whoShouldAvoid:
      "Owner-operators who will never update content or refuse maintenance should choose Wix or Squarespace to reduce risk.",
    pricingSummary:
      "WordPress.com advertises plans starting around single-digit monthly pricing on promos; self-hosted stacks combine hosting + theme + plugins. Model realistic annual spend before promising savings versus Wix.",
    pricingTiers:
      "Hosted tiers unlock custom domains, storage, and plugin installs at higher levels. Self-hosted stacks mirror hosting plan limits plus premium plugin licenses.",
    costVsCompetitors:
      "WordPress can be cheaper or pricier than Wix depending on stack discipline. Squarespace bundles more predictably; WordPress rewards teams that optimize intentionally.",
    features: [
      "Block editor and full-site editing themes",
      "Blog and structured pages for local SEO",
      "Plugins for SEO, forms, schema, and speed",
      "Commerce via WooCommerce or hosted upgrades",
      "User roles for agencies and contributors",
      "Export and portability options",
    ],
    keyFeatures: [
      {
        name: "Editorial SEO",
        description:
          "Publish pillar + cluster content that dominates informational queries in your market—when maintained consistently.",
      },
      {
        name: "Plugin extensibility",
        description: "Add CRM feeds, chat, reviews, and marketing automation without waiting for a proprietary app store.",
      },
      {
        name: "Theme flexibility",
        description: "Pick performance-first themes tuned for Core Web Vitals to avoid bloated stacks.",
      },
      {
        name: "Data ownership",
        description: "Export content and move hosts when contracts change—valuable for growing brands.",
      },
      {
        name: "Structured content models",
        description: "Use custom post types or builders to model services, locations, and FAQs systematically.",
      },
      {
        name: "Integrations",
        description: "Connect analytics, ads, and data warehouses when marketing maturity demands it.",
      },
    ],
    integrations: ["Yoast / Rank Math SEO", "Gravity Forms / WPForms", "HubSpot / Salesforce connectors", "Novashare / social", "Caching + CDN plugins", "Zapier"],
    integrationsIntro:
      "Treat plugins like production dependencies—audit quarterly, remove unused ones, and keep backups before updates.",
    contractorUse: [
      "Publish evergreen guides (e.g., “When to replace a water heater”) that feed local trust.",
      "Build location + service taxonomy that internal links to money pages.",
      "Capture leads via forms feeding CRM or dispatch tools.",
      "Add review schema and FAQs to rich results when appropriate.",
    ],
    alternatives: [
      alt("Wix", "wix", "Less maintenance overhead for typical trades sites."),
      alt("Squarespace", "squarespace", "More predictable visual polish with fewer plugins."),
      alt("Webflow", "webflow", "Hosted design control without PHP plugin stacks."),
      alt("Shopify", "shopify", "If SKUs matter more than editorial depth."),
      alt("Hostinger", "hostinger-website-builder", "Budget builder alternative on same host."),
      alt("GoDaddy", "godaddy-website-builder", "Fastest low-complexity launch."),
    ],
    faqs: [
      {
        q: "WordPress.com vs WordPress.org?",
        a: "WordPress.com is hosted for you with plan limits; WordPress.org is self-hosted code you deploy—flexibility vs responsibility. This review’s visit link focuses on WordPress.com; self-hosters should evaluate host SLAs separately.",
      },
      {
        q: "Is WordPress still best for SEO?",
        a: "It can be—with disciplined content, speed, and internal linking. The CMS does not auto-rank you; follow our local SEO guide.",
      },
      {
        q: "How much maintenance is realistic?",
        a: "Expect monthly plugin/theme updates, backups, and security monitoring unless you purchase managed hosting that bundles them.",
      },
      {
        q: "When should I pick Wix instead?",
        a: "When you want zero plugin anxiety and faster DIY publishing. Read Website builders vs WordPress for a decision matrix.",
      },
      {
        q: "Where do I start strategically?",
        a: "Read How to choose a website builder, then map your content calendar before you buy themes.",
      },
    ],
    compareLinks: [
      { label: "Wix vs Squarespace", href: getWebsiteBuildersCompareUrl("wix-vs-squarespace") },
      { label: "Webflow vs Wix", href: getWebsiteBuildersCompareUrl("webflow-vs-wix") },
      { label: "Wix vs Shopify", href: getWebsiteBuildersCompareUrl("wix-vs-shopify") },
    ],
    relatedReading: [RELATED_CHOOSE, RELATED_VS_WP, RELATED_LOCAL_SEO, RELATED_SERVICE_SITE],
  },

  "hostinger-website-builder": {
    ...WB_REVIEW_SHELL,
    toolName: "Hostinger",
    rating: "4.0",
    startingPrice: "From $3/mo (typical promo entry)",
    bestFor: "Bootstrapped trades teams that need hosting + a simple builder under one invoice",
    visitUrl: "https://www.hostinger.com",
    logoSrc: logo("hostinger-website-builder"),
    quickVerdict:
      "Hostinger Website Builder is a smart starter stack when budget matters more than cutting-edge marketing apps—ideal for first-time sites and cost-sensitive operators.",
    quickVerdictParagraphs: [
      "Hostinger built its brand on affordable hosting; the bundled AI-assisted builder lowers the barrier for tradespeople who only need a credible site, quote form, and Google Maps embed. You will not get Wix’s app market depth, but you may save hundreds in year-one fees.",
      "Expect straightforward templates, essential SEO fields, and hosting in one cart. As marketing sophistication grows—multi-step funnels, advanced CRM routing, heavy split testing—you may graduate to Wix, Webflow, or WordPress. That migration is normal; Hostinger still wins for launch frugality.",
      "Compare Hostinger vs Wix and GoDaddy vs Hostinger quantitatively: feature breadth vs monthly cash outlay. If you insist on premium polish immediately, Squarespace may win—but Hostinger is unbeatable for shoestring MVPs.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.0",
        explanation:
          "Core builder features, AI copy help, and ecommerce-lite options. Fewer native marketing apps than Wix, adequate for many SMB first sites.",
      },
      {
        category: "Pricing",
        score: "4.6",
        explanation:
          "Promotional entry pricing is among the lowest; renewals rise—model 24-month TCO honestly.",
      },
      { category: "Ease of Use", score: "4.4", explanation: "Friendly onboarding and AI assist for novices; less clutter than maximalist builders." },
      {
        category: "Support",
        score: "4.0",
        explanation:
          "Chat support culture with global coverage; complex engineering needs may still require freelance help.",
      },
      {
        category: "Integrations",
        score: "3.8",
        explanation:
          "Core marketing connectors exist; rely on Zapier or migrate when stacks get fancy.",
      },
    ],
    pros: [
      "Among lowest realistic entry costs for hosting + builder bundles",
      "Quick AI-assisted content for owners who hate writing",
      "Simple dashboards when you already juggle dispatch and accounting",
      "Enough SEO basics to start ranking with good GBP + content",
      "Natural upgrade path to WordPress hosting on same vendor if you pivot",
    ],
    cons: [
      "Renewal pricing jumps versus promo headlines",
      "Less extensibility than Wix for marketing power users",
      "Premium brand storytelling may feel template-generic without design help",
    ],
    bestForEditorial:
      "Hostinger suits bootstrapped cleaners, solo handymen, and new franchises testing markets before investing in flagship creative. Corporate marketing teams with strict brand guidelines may prefer Squarespace or Webflow.",
    whoShouldAvoid:
      "High-growth marketing teams needing sophisticated automation, dozens of integrations, or rapid landing-page experimentation should start on Wix instead.",
    pricingSummary:
      "Hostinger frequently promotes sub-$5 monthly website builder + hosting bundles on long-term terms; renew closer to standard hosting market rates. Read checkout screens carefully for renewal, domain, and email costs.",
    pricingTiers:
      "Single-site bundles escalate with storage, email accounts, ecommerce features, and backups. WordPress hosting is parallel if you switch architectures.",
    costVsCompetitors:
      "Usually undercuts Wix and Squarespace year one; may converge over time. GoDaddy sometimes competes on bundles—use our GoDaddy vs Hostinger comparison.",
    features: [
      "Drag-and-drop builder tied to Hostinger hosting",
      "AI copy and layout assistance",
      "Templates for SMB service sites",
      "Forms and basic ecommerce",
      "SSL + security basics bundled",
      "Email and domain upsells",
    ],
    keyFeatures: [
      { name: "Bundle economics", description: "One vendor for domain, site, and email reduces finance headaches for new businesses." },
      {
        name: "AI onboarding",
        description:
          "Generate first-pass copy and structure when you stare out a blank template—edit aggressively for local authenticity.",
      },
      {
        name: "Speed to publish",
        description: "Ship a functioning site before peak season without waiting on agency calendars.",
      },
      {
        name: "Core Web Vitals awareness",
        description: "Lightweight sites when you resist bloated plugins—monitor performance as you add tools.",
      },
      {
        name: "Growth path",
        description: "Migrate to richer builders once lead volume justifies marketing spend.",
      },
      {
        name: "Integrations",
        description: "Lean on Zapier or native connectors until you outgrow the stack.",
      },
    ],
    integrations: ["Google Analytics", "Facebook Pixel", "Zapier", "Email marketing tools", "Basic CRM hooks", "Payment gateways for lite ecommerce"],
    integrationsIntro:
      "Hostinger works best with a short integration list—add tools only when they remove manual office work.",
    contractorUse: [
      "Launch a minimum viable site before spending on wraps or print.",
      "Test new markets with city-specific landing pages on a budget.",
      "Collect emergency-call leads with simple mobile layouts.",
      "Reinvest savings into Google Local Service Ads or review generation.",
    ],
    alternatives: [
      alt("Wix", "wix", "Marketing depth when revenue supports subscriptions."),
      alt("GoDaddy", "godaddy-website-builder", "Another bundle vendor—compare renewals."),
      alt("Squarespace", "squarespace", "Higher design polish."),
      alt("WordPress", "wordpress", "Content-heavy SEO with more maintenance."),
      alt("Webflow", "webflow", "Design systems when you hire specialists."),
      alt("Shopify", "shopify", "If SKUs take off."),
    ],
    faqs: [
      {
        q: "Is Hostinger too cheap to be good?",
        a: "It is legit for many SMB brochure sites; success depends on content and trust signals, not logo price.",
      },
      {
        q: "Are there hidden fees?",
        a: "No—but renewal pricing, domains, and email can surprise buyers who only read promo headlines.",
      },
      {
        q: "Hostinger vs Wix?",
        a: "Hostinger saves money early; Wix adds marketing apps and workflows. Read Hostinger vs Wix.",
      },
      {
        q: "Can I rank locally?",
        a: "Yes with reviews, GBP optimization, and real service content—see our local SEO guide.",
      },
      {
        q: "What should I read with this review?",
        a: "How to build a service business website plus contractor website features.",
      },
    ],
    compareLinks: [
      { label: "Hostinger vs Wix", href: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix") },
      {
        label: "GoDaddy vs Hostinger",
        href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder"),
      },
    ],
    relatedReading: [RELATED_CHOOSE, RELATED_CONTRACTOR_FEATURES, RELATED_LOCAL_SEO, RELATED_SERVICE_SITE],
  },
};

export function getWebsiteBuildersReviewBySlug(slug: string): WebsiteBuilderReviewData | null {
  return reviews[slug] ?? null;
}

export function getWebsiteBuildersReviewSlugs(): string[] {
  return Object.keys(reviews);
}

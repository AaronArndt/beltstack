/**
 * Payment processing software reviews — cluster parity with call-tracking / email-marketing.
 */

import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import {
  getPaymentProcessingAlternativeUrl,
  getPaymentProcessingBestForUrl,
  getPaymentProcessingCompareUrl,
  getPaymentProcessingReviewUrl,
} from "@/lib/routes";
import { paymentProcessingLogoForSlug } from "@/lib/data/paymentProcessingLogos";

export type PaymentProcessingReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const CATEGORY_HREF = "/payment-processing";
const ROUNDUP_HREF = "/payment-processing/best-payment-processing-software";
const COMPARE_HUB = "/payment-processing/compare";
const GUIDES_HREF = "/payment-processing/guides";

const SCENARIOS = [
  { label: "Contractors", href: getPaymentProcessingBestForUrl("contractors") },
  { label: "Small business", href: getPaymentProcessingBestForUrl("small-business") },
  { label: "HVAC", href: getPaymentProcessingBestForUrl("hvac") },
  { label: "Plumbers", href: getPaymentProcessingBestForUrl("plumbers") },
  { label: "Home services", href: getPaymentProcessingBestForUrl("home-services") },
];

const METHODOLOGY: PaymentProcessingReviewData["methodology"] = {
  title: "How we review payment processing software",
  sub: "Experience-informed, independent analysis for trades and local service businesses.",
  introParagraph:
    "BeltStack reviews payment processors through the same workflows owners use daily: deposits after estimates, final swipes on site, emailed invoice links, chargebacks on disputed scopes, and month-end reconciliation in QuickBooks or Xero. We synthesize vendor documentation, published pricing, typical SMB feature sets, and common contractor use cases—we do not have access to your merchant statements, so always verify fees and contract terms with the processor before you commit.",
  bullets: [
    "Channel fit first: we score how well each product serves card-present crews, card-not-present invoices, and web checkout—not a generic retail checklist.",
    "Pricing honesty: we emphasize effective rate (fees ÷ gross volume), refunds, chargebacks, and add-ons like instant payout or Billing—headline percentages are never the whole story.",
    "Operational reality: we look at dispute evidence workflows, payout timing, reserves, and whether integrations keep job IDs and line items attached to payments.",
    "Independence: recommendations are editorial; vendors cannot pay for placement or ratings. We may earn affiliate commissions on some links—see site disclosure—without changing our scoring framework.",
    "Accuracy over hype: rates, plans, and regional availability change; we update reviews on a regular cadence and flag where you must confirm details with sales or your statement export.",
  ],
};

/** Short trust line under hero CTA — EEAT / transparency. */
const DISCLOSURE_STANDARD =
  "Published rates and features vary by country, plan, and risk profile. Export a recent processing statement and confirm contract terms with the vendor before switching.";

const RELATED_CROSS: NonNullable<ReviewTemplateProps["relatedReading"]> = [
  { label: "Invoicing software hub", href: "/invoicing" },
  { label: "POS software hub", href: "/pos" },
  { label: "CRM software hub", href: "/crm" },
  { label: "Website builders hub", href: "/website-builders" },
  { label: "Email marketing hub", href: "/email-marketing" },
];

const PP_SHELL: Pick<
  PaymentProcessingReviewData,
  | "category"
  | "categoryHref"
  | "methodology"
  | "disclosureLine"
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
  | "popularIndustryLinks"
> = {
  category: "Payment Processing",
  categoryHref: CATEGORY_HREF,
  methodology: METHODOLOGY,
  disclosureLine: DISCLOSURE_STANDARD,
  compareSectionTitle: "Compare with other payment processors",
  bestPayrollSoftwareHref: ROUNDUP_HREF,
  compareHubHref: COMPARE_HUB,
  compareHubLabel: "Compare payment processing software",
  bestRoundupLabel: "Best payment processing software (2026) — full roundup",
  bestForSectionTitle: "Best payment processing software for different use cases",
  bestForSectionSub: "Scenario picks for service businesses and trades.",
  scenarioLinks: SCENARIOS,
  guideHubHref: GUIDES_HREF,
  guideHubLabel: "Payment processing guides",
  popularIndustryLinks: [
    { label: "Best for contractors", href: getPaymentProcessingBestForUrl("contractors") },
    { label: "Best for small business", href: getPaymentProcessingBestForUrl("small-business") },
    { label: "Best for HVAC", href: getPaymentProcessingBestForUrl("hvac") },
    { label: "Best for plumbers", href: getPaymentProcessingBestForUrl("plumbers") },
    { label: "Best for electricians", href: getPaymentProcessingBestForUrl("electricians") },
    { label: "Best for home services", href: getPaymentProcessingBestForUrl("home-services") },
  ],
};

function alt(name: string, slug: string, description: string, logo: string) {
  return { name, href: getPaymentProcessingReviewUrl(slug), description, logoSrc: logo };
}

const PAYMENT_PROCESSING_REVIEWS: Record<string, PaymentProcessingReviewData> = {
  stripe: {
    ...PP_SHELL,
    toolName: "Stripe",
    rating: "4.7",
    startingPrice: "Pay-as-you-go per successful charge",
    bestFor: "Online checkout, Payment Links, Billing, and developer-led stacks",
    visitUrl: "https://stripe.com",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    quickVerdict: "Stripe is the default when your growth constraint is flexible web payments and recurring service plans—not only swiping cards.",
    quickVerdictParagraphs: [
      "Stripe wins when homeowners pay on your site, through emailed Payment Links, or inside software you control. Field-service brands use it for deposits, memberships, and final balances when the website or portal is trustworthy.",
      "Stripe Terminal brings card-present into the same spine, but most teams adopt Stripe for online first. If trucks collect 90% of revenue on readers, also evaluate Square before you force-fit.",
      "Pricing is pay-as-you-go with add-ons for Billing, Terminal, and currency conversion. Model chargebacks and international cards—effective rate matters more than homepage percentages.",
      "Pair Stripe with solid invoicing or field software so line items and job IDs flow into receipts—processors do not replace estimate discipline.",
      "See Stripe vs Square and Stripe vs PayPal when you shortlist; browse Stripe alternatives if wallet checkout or ISO packages change the math.",
      "We have not seen your Radar rules, payout schedule, or reserve history—those materially change risk and cash flow. Treat this review as a framework: pull your last three monthly statements and compare effective rate and dispute outcomes before you switch.",
      "Stripe’s strength is depth: the same account can grow from Payment Links to Billing to Connect if you add franchises or subcontractors. That upside comes with configuration debt—someone on your team or vendor must own webhooks, test cards, and tax logic.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.8", explanation: "APIs, Checkout, Billing, Terminal, and fraud tooling cover most modern acceptance paths; depth rewards teams that will use it." },
      { category: "Pricing", score: "4.4", explanation: "Published rates are clear, but Billing, Terminal, instant payout, and FX stack—model your real mix, not the homepage table." },
      { category: "Ease of Use", score: "4.3", explanation: "Dashboard and no-code pieces are strong; bespoke flows still need a technical owner or partner." },
      { category: "Support", score: "4.2", explanation: "Documentation and async channels scale; complex disputes or edge-case tax questions may need escalation and time." },
      { category: "Contractor fit", score: "4.6", explanation: "Strong when deposits, change orders, and memberships run through web or software—not when the only goal is same-day reader setup with zero IT." },
    ],
    compareLinks: [
      { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
      { label: "Stripe vs PayPal", href: getPaymentProcessingCompareUrl("stripe-vs-paypal") },
      { label: "Shopify Payments vs Stripe", href: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe") },
    ],
    pros: [
      "Industry-leading APIs and hosted checkout options",
      "Payment Links for quick sends without a storefront",
      "Stripe Billing for maintenance plans and recurring charges",
      "Strong fraud and radar-style controls as volume grows",
    ],
    cons: [
      "Field-first businesses may still prefer Square’s default hardware story",
      "Custom implementations need someone to own webhooks and testing",
      "Statement complexity grows with Billing, Terminal, and multi-currency",
    ],
    bestForEditorial:
      "Growing service businesses that sell online deposits, memberships, or SaaS-style service plans; teams with light developer or agency support.",
    whoShouldAvoid:
      "Operators who will never touch the website and only need the fastest phone reader rollout with zero integration—Square may be simpler day one.",
    pricingSummary:
      "Percentage plus fixed fee per successful charge for most cards; additional fees for Billing, Terminal hardware, instant payouts, and FX. Export three months of deposits and divide net by gross to find effective rate.",
    pricingTiers: "Cards, wallets, and ACH (where offered) may price differently—map each payment method you actually use.",
    costVsCompetitors:
      "Flat-rate bundles like Square look simpler on paper; Stripe can win when online share is high or when Billing replaces manual invoice chasing.",
    features: ["Checkout", "Payment Links", "Billing", "Terminal", "Connect"],
    keyFeatures: [
      { name: "Stripe Checkout", description: "Hosted payment pages with Apple Pay and strong mobile UX for deposits." },
      { name: "Billing", description: "Recurring maintenance, equipment leases, and installment-style plans with dunning hooks." },
      { name: "Terminal", description: "Card-present acceptance that shares reporting with your online spine." },
      { name: "Radar / fraud tools", description: "Rules and risk scoring when card-not-present fraud rises with larger tickets." },
    ],
    integrations: ["QuickBooks Online", "Xero", "Salesforce", "HubSpot", "Zapier", "Jobber-class stacks via middleware"],
    integrationsIntro:
      "Connect accounting first so payouts reconcile to bank feeds, then CRM or field tools so receipts carry job metadata.",
    contractorUse: [
      "Email Payment Links for 50% deposits on replacements with clear scope attachments.",
      "Charge card on file for approved change orders instead of phone tag.",
      "Sell annual maintenance plans with Billing and automate retries on failed renewals.",
      "Accept Apple Pay on mobile web for younger homeowners booking online.",
      "Attach Stripe Customer IDs in your CRM or job system so dispute evidence can show estimate numbers, photos, and signed change orders in one export.",
      "Use payout timing and instant payout fees in cash-flow forecasts—large jobs can tie up working capital if you rely on next-day deposits during growth.",
    ],
    alternatives: [
      alt("Square", "square", "Faster all-in-one field hardware path", paymentProcessingLogoForSlug("square")),
      alt("PayPal Business", "paypal-business", "Wallet-first remote checkout", paymentProcessingLogoForSlug("paypal-business")),
      alt("Helcim", "helcim", "Interchange-plus transparency", paymentProcessingLogoForSlug("helcim")),
      alt("Shopify Payments", "shopify-payments", "If Shopify is your cart", paymentProcessingLogoForSlug("shopify-payments")),
    ],
    faqs: [
      { q: "Is Stripe better than Square?", a: "Stripe leads online and in custom software; Square leads simple in-person + invoice bundles. Match the channel where you collect most revenue." },
      { q: "How much does Stripe charge?", a: "Typically a percentage plus cents per successful charge, plus fees for Billing, Terminal, and other products—verify current published rates and your statement." },
      { q: "What is the cheapest payment processor?", a: "Whichever yields the lowest net deposits for your card mix after refunds and disputes—compute effective rate, do not guess from ads." },
      { q: "Does Stripe replace invoicing software?", a: "Often no—you still need line-item discipline; many teams pair Stripe with invoicing or field-service tools." },
      { q: "Can I use Stripe for recurring HVAC memberships?", a: "Yes—Stripe Billing is a common pattern when you can define clear plan rules and handle failed payments." },
      {
        q: "How should I verify BeltStack’s Stripe takeaways?",
        a: "Compare our themes to Stripe’s current docs and your own statements: effective rate (fees ÷ gross), chargeback ratio, payout lag, and whether Billing or Terminal fees appear. If your numbers disagree, trust your statement—we are general guidance, not your accountant or acquirer.",
      },
    ],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getPaymentProcessingAlternativeUrl("stripe"),
    alternativesPageLabel: "Best Stripe alternatives (2026)",
  },
  square: {
    ...PP_SHELL,
    toolName: "Square",
    rating: "4.6",
    startingPrice: "Free POS app; processing fees per transaction",
    bestFor: "Mobile crews, small counters, and simple online + invoice flows",
    visitUrl: "https://squareup.com",
    logoSrc: paymentProcessingLogoForSlug("square"),
    quickVerdict: "Square is the pragmatic default when techs swipe cards daily and owners want one recognizable ecosystem.",
    quickVerdictParagraphs: [
      "Square’s advantage is time-to-live: buy a reader, install the app, and start capturing payments after jobs without a gateway project.",
      "Invoices and payment links cover many deposit scenarios; heavier ecommerce or subscription logic may push you toward Stripe Billing.",
      "Watch instant transfer fees and software tiers when you budget—processing is only one line on the P&L.",
      "Compare Square vs Stripe and Square vs PayPal before you commit; read Square alternatives if ISO pricing tempts you.",
      "Square’s real-world win is training: new techs can take a payment on day one without gateway credentials. The trade-off is less flexibility than Stripe when you need deeply custom checkout or marketplace payouts.",
      "We do not know your card-present vs keyed mix or chargeback history—both swing effective rate. If you key cards often or run high-ticket deposits, pull statements and compare to interchange-plus quotes before assuming flat rate is cheapest.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "POS, invoices, online, and hardware cover typical SMB paths without forcing a developer." },
      { category: "Pricing", score: "4.4", explanation: "Flat-style simplicity aids budgeting; very large tickets or heavy CNP volume deserve a statement-based comparison." },
      { category: "Ease of Use", score: "4.7", explanation: "Strong onboarding for non-technical owners and crews; retail purchase paths for hardware help when readers fail mid-season." },
      { category: "Support", score: "4.2", explanation: "Quality varies by issue type; hardware and account holds may need persistence and documentation." },
      { category: "Contractor fit", score: "4.7", explanation: "Excellent when trucks and small counters collect most revenue and you want one recognizable brand for staff and homeowners." },
    ],
    compareLinks: [
      { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
      { label: "Square vs PayPal", href: getPaymentProcessingCompareUrl("square-vs-paypal") },
    ],
    pros: [
      "Fast setup for card-present with known hardware",
      "Invoices and links without developer help",
      "Single ecosystem reduces vendor sprawl for small teams",
      "Retail-friendly purchase paths for replacements",
    ],
    cons: [
      "Deep custom ecommerce may still prefer Stripe",
      "Flat-rate economics may lag interchange-plus at very high tickets",
      "Feature depth varies by surface and region—validate your stack",
    ],
    bestForEditorial:
      "Local operators with trucks or small showrooms collecting most revenue in person, plus light online and invoice volume.",
    whoShouldAvoid:
      "Headless commerce or multi-marketplace payout needs—evaluate Stripe Connect or specialized acquirer programs instead.",
    pricingSummary:
      "Per-transaction fees differ for card-present, card-not-present, and keyed; software subscriptions and instant transfers add cost. Annualize hardware and software together.",
    pricingTiers:
      "Card-present, manually entered, and invoice/online paths often price differently—export a month of transactions tagged by entry method to see where margin leaks.",
    costVsCompetitors:
      "Helcim or Stax may beat flat rate on large replacement tickets—model with statements before you assume simplicity equals cheap. Stripe can win when the website drives most revenue and Billing replaces manual follow-up.",
    features: ["POS", "Invoices", "Online", "Hardware"],
    keyFeatures: [
      { name: "Mobile readers", description: "Tap/swipe on site with emailed receipts tied to job names when you configure fields." },
      { name: "Invoices", description: "Send balances after photos and approvals; track open amounts in dashboard." },
      { name: "App marketplace", description: "Extend tips, loyalty, or inventory-light retail when attached to service work." },
      {
        name: "Deposit discipline",
        description: "Use custom fields or notes so receipts reference estimate IDs—helps when homeowners dispute scope months later.",
      },
    ],
    integrations: ["QuickBooks", "Xero", "Popular scheduling and CRM tools (varies)"],
    integrationsIntro:
      "Start with accounting sync so batched deposits reconcile to bank feeds without manual splits. Add scheduling or CRM links only after payment status is trustworthy in the books—otherwise dispatch argues with finance about what cleared.",
    contractorUse: [
      "Swipe at the kitchen table after walkthrough approvals.",
      "Text payment links when homeowners are at work but email works.",
      "Run a small parts counter without a second processor.",
      "Capture card-present for final walkthroughs to reduce CNP fraud on large balances.",
      "Review keyed-entry share monthly—keyed rates and risk flags often surprise growing teams.",
    ],
    alternatives: [
      alt("Stripe", "stripe", "Custom web checkout + Billing", paymentProcessingLogoForSlug("stripe")),
      alt("Clover", "clover", "Retail-heavy device ecosystem", paymentProcessingLogoForSlug("clover")),
      alt("PayPal Business", "paypal-business", "Wallet-heavy remote payers", paymentProcessingLogoForSlug("paypal-business")),
    ],
    faqs: [
      { q: "Square or Stripe for contractors?", a: "Square when crews swipe most revenue; Stripe when the website and custom flows dominate." },
      { q: "Does Square do recurring billing?", a: "Options exist—compare depth and failure handling to Stripe Billing if memberships are core." },
      { q: "What is the cheapest payment processor?", a: "Compute effective rate for your mix; Square’s flat simplicity is not automatically lowest." },
      { q: "How do I pair Square with invoicing?", a: "Use Square Invoices or integrate accounting—see our invoicing hub for dedicated invoice products." },
      {
        q: "Who writes BeltStack’s payment processing reviews?",
        a: "Editors with SMB software and field-service context; we do not accept payment for scores. Use our methodology section plus your own statements as the source of truth for fees and holds.",
      },
    ],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getPaymentProcessingAlternativeUrl("square"),
    alternativesPageLabel: "Best Square alternatives (2026)",
  },
  "paypal-business": {
    ...PP_SHELL,
    toolName: "PayPal Business",
    rating: "4.4",
    startingPrice: "Per-transaction fees (varies by product path)",
    bestFor: "Remote homeowners who want a trusted wallet and quick pay links",
    visitUrl: "https://www.paypal.com/business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    quickVerdict: "PayPal still converts when buyers hesitate to hand a card to a new vendor—especially on emailed estimates.",
    quickVerdictParagraphs: [
      "PayPal’s buyer recognition can lift completion on deposits sent after hours. Pair it with clear job documentation so customers understand they are paying your business, not a personal transfer.",
      "Fee tables span multiple products—online, invoicing, in-person. Map the path you actually use before comparing to Stripe headline rates.",
      "You may run PayPal alongside another processor; just budget reconciliation discipline.",
      "Buyer protection and wallet policies are a double edge: they can increase trust on first-time jobs but also raise dispute standards—keep signed scopes, photos, and message trails like any card-not-present channel.",
      "We are not PayPal underwriting; holds and reserves depend on your history and category. If you see rolling reserves after a spike in large deposits, that is normal risk behavior—plan cash accordingly.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.3", explanation: "Broad acceptance paths (wallet, cards, links); depth varies by surface and region." },
      { category: "Pricing", score: "4.1", explanation: "Complex fee grids across products—effective rate only emerges from exports, not the marketing page." },
      { category: "Ease of Use", score: "4.5", explanation: "Familiar consumer UX lowers support calls for demographics that already pay friends with PayPal." },
      { category: "Support", score: "4.0", explanation: "Experiences vary at scale; disputes reward tight documentation and fast response." },
      { category: "Contractor fit", score: "4.4", explanation: "Strong when remote wallet payers drive deposit completion; weaker as a sole POS strategy for high card-present volume." },
    ],
    compareLinks: [
      { label: "Stripe vs PayPal", href: getPaymentProcessingCompareUrl("stripe-vs-paypal") },
      { label: "Square vs PayPal", href: getPaymentProcessingCompareUrl("square-vs-paypal") },
    ],
    pros: [
      "Trusted wallet button for hesitant payers",
      "Multiple ways to invoice and link pay",
      "Useful alongside in-person tools",
      "Can lift conversion when homeowners already have a PayPal balance or preferred login",
    ],
    cons: [
      "Fee complexity across products",
      "Not a full POS strategy alone",
      "Disputes need tight paper trails",
      "International or micropayment paths can diverge sharply from domestic card-present economics",
    ],
    bestForEditorial: "Contractors collecting remote deposits from homeowners who prefer PayPal, and businesses mixing wallet with card stacks.",
    whoShouldAvoid: "Teams that refuse to maintain fee clarity or need deep POS + inventory in one vendor.",
    pricingSummary: "Fees depend on domestic vs international, product path, and currency—export monthly CSVs and compute effective rate.",
    pricingTiers:
      "Online checkout, invoicing, Zettle/in-person, and cross-border each carry different tables—tag revenue by channel before you compare PayPal to Square or Stripe.",
    costVsCompetitors:
      "PayPal can be worth a slightly higher effective rate when wallet checkout measurably completes more deposits; if your payers always use cards in person, Square or Stripe Terminal may simplify operations.",
    features: ["Checkout", "Invoicing", "Links", "Wallet"],
    keyFeatures: [
      { name: "PayPal checkout", description: "Wallet option on web flows to reduce abandonment on higher-ticket deposits." },
      { name: "Invoicing", description: "Send payable requests with line items when email is your sales channel." },
      {
        name: "Hybrid stacks",
        description: "Many contractors pair PayPal for remote wallet payers with Square or Stripe for trucks—budget two settlement rhythms in cash-flow planning.",
      },
    ],
    integrations: ["Common ecommerce carts", "Accounting tools (varies)", "Zapier"],
    integrationsIntro:
      "Connect accounting first and map PayPal clearing dates to bank deposits—wallet transactions can batch differently than your primary processor. Only then add automation so CRM stages reflect paid deposits, not just sent invoices.",
    contractorUse: [
      "Offer PayPal on estimate follow-ups when analytics show card-only pages stall.",
      "Collect travel deposits for multi-day commercial work booked remotely.",
      "A/B test PayPal vs card-only checkout on high-value deposit pages and keep the winner only if completion and margin both improve.",
      "Train office staff to explain business-name charges on statements to reduce chargebacks from confused homeowners.",
    ],
    alternatives: [
      alt("Stripe", "stripe", "Programmable online spine", paymentProcessingLogoForSlug("stripe")),
      alt("Square", "square", "Field + invoice simplicity", paymentProcessingLogoForSlug("square")),
    ],
    faqs: [
      { q: "PayPal or Stripe?", a: "Stripe for developer-led checkout; PayPal when wallet trust measurably improves completion." },
      { q: "How much do payment processors charge?", a: "Compare net deposits after refunds—PayPal’s grids require real exports, not guesses." },
      { q: "Is PayPal good for contractors?", a: "Yes for remote wallet-heavy flows; pair with in-person tools if trucks swipe most revenue." },
      { q: "What is the cheapest payment processor?", a: "Depends on your mix—run effective rate on PayPal vs alternatives using identical job cohorts." },
      { q: "PayPal vs Square?", a: "Square for swipes and POS; PayPal for wallet-first remote payers—see our head-to-head." },
      { q: "Does PayPal replace invoicing software?", a: "Usually no—pair with invoicing tools for line items while PayPal moves money." },
      {
        q: "Why does BeltStack say to verify PayPal fees yourself?",
        a: "PayPal’s grids change by product, region, and currency. Editorial reviews cannot see your merchant category or statement—we recommend computing effective rate from your own exports and asking PayPal for a written fee summary before you optimize.",
      },
    ],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getPaymentProcessingAlternativeUrl("paypal-business"),
    alternativesPageLabel: "Best PayPal Business alternatives (2026)",
  },
  "shopify-payments": {
    ...PP_SHELL,
    toolName: "Shopify Payments",
    rating: "4.5",
    startingPrice: "Bundled with Shopify; per-transaction processing",
    bestFor: "Merchants whose cart and admin already live in Shopify",
    visitUrl: "https://www.shopify.com/payments",
    logoSrc: paymentProcessingLogoForSlug("shopify-payments"),
    quickVerdict: "If Shopify is your commerce brain, native payments reduce middleware—otherwise compare Stripe directly.",
    quickVerdictParagraphs: [
      "Shopify Payments keeps checkout, refunds, and payouts aligned with Shopify reporting—valuable when you sell parts, memberships, or deposits through the cart.",
      "It is the wrong starting point if your marketing site is not Shopify; use Stripe vs Square instead.",
      "Read Shopify Payments vs Stripe for the fork when both could technically apply.",
      "Shopify’s acceptable-use and business-category rules matter as much as rates—service SKUs, deposits, and fulfillment models must match policy or payouts can pause. Confirm with Shopify before you migrate a high-ticket install business.",
      "Our scores assume you already accept Shopify admin as your commerce hub; if you only use Shopify for a brochure site, you are paying subscription and opportunity cost without unlocking native payments benefits.",
    ],
    compareLinks: [
      { label: "Shopify Payments vs Stripe", href: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe") },
      { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Cohesive with Shopify checkout, refunds, and the app ecosystem—fewer moving parts than bolting on a separate gateway." },
      { category: "Pricing", score: "4.3", explanation: "Processing is tied to plan tier and payment surface; total cost of ownership must include Shopify subscription, apps, and any POS hardware." },
      { category: "Ease of Use", score: "4.6", explanation: "Strong when staff already lives in Shopify for orders and payouts—less context switching than multi-vendor stacks." },
      { category: "Support", score: "4.2", explanation: "You rely on Shopify’s support model; complex disputes may involve both platform policy and card network rules." },
      { category: "Contractor fit", score: "4.3", explanation: "Best when cart revenue (parts, deposits, memberships) is meaningful; pure truck-and-invoice shops rarely need this shape." },
    ],
    pros: [
      "Native Shopify integration",
      "Less gateway fragmentation",
      "Straightforward for Shopify-first teams",
      "Unified reporting for refunds, chargebacks, and payouts in the same admin as merchandising",
    ],
    cons: [
      "Requires Shopify commitment",
      "Not for non-Shopify stacks",
      "Policy categories matter for some services",
      "Switching carts later means replatforming payments—not a casual migration",
    ],
    bestForEditorial: "Service businesses selling through Shopify—filters, merch, memberships, or large-ticket deposits via cart flows.",
    whoShouldAvoid: "Teams without Shopify who only need a field reader—Square is usually faster.",
    pricingSummary: "Processing rates depend on Shopify plan and online vs in-person—include subscription in TCO.",
    pricingTiers:
      "Online vs Shopify POS/in-person and your subscription tier can change the processing column—export orders by source and reconcile to payout reports.",
    costVsCompetitors:
      "Versus Stripe on a custom site, Shopify Payments wins on operational simplicity inside Shopify; versus Square for field-only volume, Shopify rarely wins unless the cart is already central to how you sell.",
    features: ["Checkout", "Payouts", "Refunds"],
    keyFeatures: [
      { name: "Unified admin", description: "Orders, payouts, and disputes surface where merchandising already happens." },
      {
        name: "Service-oriented merchandising",
        description: "Model deposits and maintenance as products with clear descriptions so customers understand what they are buying—reduces disputes and support load.",
      },
      {
        name: "App-extended workflows",
        description: "Use vetted apps for subscriptions or booking, but keep payment data flow inside Shopify-compatible patterns to avoid PCI surprises.",
      },
    ],
    integrations: ["Shopify app ecosystem", "Accounting connectors"],
    integrationsIntro:
      "Connect accounting so Shopify payout batches map cleanly to bank deposits; many service businesses under-count app fees when they only look at processing percentages. Document each app’s role before you automate revenue recognition.",
    contractorUse: [
      "Sell install deposits as cart products with clear SKUs",
      "Move maintenance SKUs without a second gateway",
      "Use order tags for job IDs so finance can tie payouts back to field work without manual spreadsheets",
      "Run payout timing against job schedules—large cart deposits can desync from when crews finish phases",
    ],
    alternatives: [
      alt("Stripe", "stripe", "Non-Shopify web stacks", paymentProcessingLogoForSlug("stripe")),
      alt("Square", "square", "Field-first without Shopify", paymentProcessingLogoForSlug("square")),
    ],
    faqs: [
      { q: "Shopify Payments vs Stripe?", a: "Shopify Payments when the cart is Shopify; Stripe when the web stack is custom or multi-surface." },
      { q: "Can service businesses use Shopify Payments?", a: "Yes when allowed categories and fulfillment models match Shopify’s rules—validate before launch." },
      { q: "How much do Shopify Payments charge?", a: "Rates depend on your Shopify plan and whether payments are online or in-person—include subscription fees in total cost." },
      { q: "Do I still need a payment processor for trucks?", a: "Often yes—Shopify Payments covers Shopify checkout; field swipes may still use Square or Stripe Terminal unless you unify deliberately." },
      { q: "What is the cheapest payment processor?", a: "Compare net deposits across rails—Shopify plus subscription may still beat fragmented gateways if reconciliation time drops." },
      { q: "How do I link Shopify to accounting?", a: "Use accounting integrations so payouts reconcile to bank feeds like any other processor." },
      {
        q: "Does BeltStack have insider data from Shopify?",
        a: "No—we assess Shopify Payments from public plans, documented policies, and typical merchant workflows. Your effective rate and eligibility depend on Shopify’s current terms and your business category; confirm both in writing.",
      },
    ],
    relatedReading: RELATED_CROSS,
  },
  helcim: {
    ...PP_SHELL,
    toolName: "Helcim",
    rating: "4.5",
    startingPrice: "Interchange-plus (published markup)",
    bestFor: "Owners who want interchange-plus clarity without legacy ISO paperwork",
    visitUrl: "https://www.helcim.com",
    logoSrc: paymentProcessingLogoForSlug("helcim"),
    quickVerdict: "Helcim fits finance-minded operators tired of opaque bundled rates—especially with larger average tickets.",
    quickVerdictParagraphs: [
      "Interchange-plus statements separate network costs from processor markup—helpful when you negotiate renewals with real data.",
      "You still need operational basics: AVS/CVV discipline, clear refund policies, and dispute evidence folders.",
      "Compare Helcim vs Stax when membership pricing enters the conversation.",
      "Interchange-plus is honest on paper but only saves money when your mix is stable and your team avoids downgrades—keyed transactions, missing AVS, and corporate cards can erase the spread you modeled.",
      "We have no access to Helcim’s underwriting on your account; risk tiers, reserves, and equipment leases still apply. Use published markup as a starting point, then validate the full merchant agreement.",
    ],
    compareLinks: [
      { label: "Helcim vs Stax", href: getPaymentProcessingCompareUrl("helcim-vs-stax") },
      { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Modern dashboard, virtual terminal, and competitive SMB feature set for businesses that outgrow dongle-only workflows." },
      { category: "Pricing", score: "4.6", explanation: "Interchange-plus with disclosed markup rewards owners who read statements monthly and negotiate with data." },
      { category: "Ease of Use", score: "4.4", explanation: "Accessible for owners willing to learn fee vocabulary; not as plug-and-play as flat-rate apps for technophobic staff." },
      { category: "Support", score: "4.3", explanation: "Generally positive SMB onboarding stories; complex hardware or ERP paths still need a project owner." },
      { category: "Contractor fit", score: "4.5", explanation: "Strong when average tickets are high enough that a few basis points move real dollars—HVAC, roofing, commercial phases." },
    ],
    pros: [
      "Transparent pricing narrative",
      "Good alternative to opaque ISO quotes",
      "Solid virtual terminal story",
      "Statement clarity helps when you re-shop rates every renewal cycle",
    ],
    cons: [
      "Less consumer brand recognition than PayPal",
      "Still requires fee literacy",
      "Compare features vs all-in-one POS you already use",
      "Savings depend on card mix and entry method—lazy keyed habits can wipe gains",
    ],
    bestForEditorial: "HVAC, electrical, and plumbing operators with healthy average tickets who want honest statements.",
    whoShouldAvoid: "Micro-ticket businesses where flat-rate simplicity beats spreadsheet modeling.",
    pricingSummary: "Interchange plus disclosed markup; validate hardware leases and any monthly minimums in your quote.",
    pricingTiers:
      "Card-present, card-not-present, and ACH (if used) each carry different interchange categories—split exports by channel when comparing to Square or Stripe.",
    costVsCompetitors:
      "Against flat-rate Square, Helcim often wins on large CNP deposits when downgrades are controlled; against Stripe, choose Helcim for transparent acquiring—not when you need deep Billing APIs on day one.",
    features: ["Virtual terminal", "Invoicing", "Card-present"],
    keyFeatures: [
      { name: "Interchange-plus", description: "See network costs separated from processor margin on statements." },
      {
        name: "Fee literacy payoff",
        description: "Use line-item statements to coach techs on chip vs keyed and to catch misclassified transactions before renewals.",
      },
    ],
    integrations: ["Accounting and ecommerce connectors (verify current list)"],
    integrationsIntro:
      "Verify each connector with Helcim’s current list and your accountant’s workflow—interchange-plus saves nothing if bookkeeping still requires manual CSV wrestling every week.",
    contractorUse: [
      "Model savings on $3k–$15k replacement tickets vs flat-rate bundles",
      "Use hosted invoices for progressive billing on commercial work",
      "Quarterly review: compare Helcim effective rate to your old processor using identical job cohorts, not peak season only",
    ],
    alternatives: [
      alt("Stax", "stax", "Membership + interchange", paymentProcessingLogoForSlug("stax")),
      alt("Stripe", "stripe", "Online-first programmable flows", paymentProcessingLogoForSlug("stripe")),
    ],
    faqs: [
      { q: "Is interchange-plus cheaper?", a: "Sometimes—run the math on your historical mix and refunds." },
      { q: "Helcim vs Stripe?", a: "Stripe when APIs and online checkout lead; Helcim when transparent merchant acquiring is the goal." },
      { q: "How much do payment processors charge?", a: "Interchange-plus separates network cost from markup—your statement shows both; compare to flat-rate effective cost." },
      { q: "Is Helcim good for contractors?", a: "Yes when average tickets are high enough that basis points matter and you will read statements monthly." },
      { q: "What is the cheapest payment processor?", a: "The one with lowest net deposits for your card-present vs online mix—not the simplest ad." },
      { q: "Helcim vs Square?", a: "Square for fastest field simplicity; Helcim when economics favor transparent acquiring on larger tickets." },
      {
        q: "Why trust BeltStack on interchange-plus?",
        a: "We explain mechanics—interchange, markup, downgrades—not secret rates. Your statement is authoritative; we encourage you to reconcile our themes to what Helcim actually posts each month.",
      },
    ],
    relatedReading: RELATED_CROSS,
  },
  stax: {
    ...PP_SHELL,
    toolName: "Stax",
    rating: "4.3",
    startingPrice: "Monthly platform fee plus interchange",
    bestFor: "Steady card volume that can amortize a membership-style fee",
    visitUrl: "https://www.staxpayments.com",
    logoSrc: paymentProcessingLogoForSlug("stax"),
    quickVerdict: "Stax rewards predictable processing volume—seasonal trades must model slow months explicitly.",
    quickVerdictParagraphs: [
      "Membership pricing changes finance planning: some months the platform fee feels cheap, others expensive if truck rolls dip.",
      "Pair with rigorous job costing so you know true margin after processing—not only labor and materials.",
      "Stax is a finance decision: divide the monthly platform fee by expected card volume to get a breakeven basis-point equivalent, then add interchange. If that total beats your current effective rate for twelve months straight, membership logic holds.",
      "Seasonal trades should stress-test January and February explicitly—what feels efficient in July can feel punitive in a slow winter.",
    ],
    compareLinks: [
      { label: "Helcim vs Stax", href: getPaymentProcessingCompareUrl("helcim-vs-stax") },
      { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.2", explanation: "Solid SMB processing and reporting for operators who want fewer ad-hoc vendors—not the deepest developer surface." },
      { category: "Pricing", score: "4.0", explanation: "Membership plus interchange can flatten costs at volume but punishes low months if you do not model seasonality." },
      { category: "Ease of Use", score: "4.2", explanation: "Dashboards work for engaged owners; still expect some learning curve versus a single flat-rate app." },
      { category: "Support", score: "4.1", explanation: "Experiences vary—keep written quotes, fee schedules, and implementation emails for renewals." },
      { category: "Contractor fit", score: "4.2", explanation: "Better for steady multi-truck or multi-location card volume than single-truck businesses with extreme seasonality." },
    ],
    pros: ["Predictable monthly platform component", "Can flatten economics at volume", "Useful for multi-location standardization"],
    cons: ["Slow-season risk on membership fees", "Needs quarterly repricing reviews", "Not a silver bullet for disputes"],
    bestForEditorial: "Operators with relatively even monthly card volume across crews or locations.",
    whoShouldAvoid: "Highly seasonal single-truck businesses without cash reserves—model January before you sign.",
    pricingSummary: "Platform fee plus pass-through interchange; confirm card-present vs keyed differences in your agreement.",
    pricingTiers:
      "Your agreement should spell out card-present, manually keyed, and CNP rates on top of the platform fee—get each scenario in writing before you sign.",
    costVsCompetitors:
      "Versus Helcim-style interchange-plus without a platform fee, Stax wins when membership + interchange undercuts your statement for the whole year, not just busy months.",
    features: ["Processing", "Virtual terminal", "Reporting"],
    keyFeatures: [
      { name: "Membership model", description: "Trade per-transaction stacking for a platform fee when volume supports it." },
      {
        name: "Breakeven math",
        description: "Owners should spreadsheet monthly volume × effective rate vs platform fee + interchange—our review cannot substitute for your CFO or bookkeeper.",
      },
    ],
    integrations: ["Accounting and POS partners—validate during sales"],
    integrationsIntro:
      "Validate POS and accounting partners during sales calls, not after go-live—Stax economics assume you will actually consolidate volume, not run a shadow processor for half the crews.",
    contractorUse: [
      "Standardize processing across branches under one membership line item",
      "Review fee fit after peak summer season",
      "Set calendar reminders to re-run breakeven math before annual renewal—volume drift changes the answer",
    ],
    alternatives: [
      alt("Helcim", "helcim", "Straight interchange-plus", paymentProcessingLogoForSlug("helcim")),
      alt("Square", "square", "Simple flat field bundle", paymentProcessingLogoForSlug("square")),
    ],
    faqs: [
      { q: "Stax vs Helcim?", a: "Stax when membership math wins on steady volume; Helcim when you want straightforward interchange-plus markup." },
      { q: "What is the cheapest payment processor?", a: "Whichever minimizes net deposits for your seasonal pattern—not only peak months." },
      { q: "Is Stax good for seasonal HVAC?", a: "Model slow months—membership fees can sting when card volume drops; renegotiate or switch if winter math inverts." },
      { q: "How much do payment processors charge?", a: "Stax combines platform fee and interchange—quote both before you compare to flat-rate competitors." },
      { q: "Stax vs Stripe?", a: "Stripe when online software-led flows dominate; Stax when steady SMB volume fits membership economics." },
      {
        q: "Is BeltStack affiliated with Stax?",
        a: "No. We may use general partner links elsewhere on the site, but ratings are editorial. Always compare Stax’s written quote to at least one interchange-plus and one flat-rate competitor using your own statements.",
      },
    ],
    relatedReading: RELATED_CROSS,
  },
  "authorize-net": {
    ...PP_SHELL,
    toolName: "Authorize.net",
    rating: "4.2",
    startingPrice: "Gateway fee plus processor/acquirer pricing",
    bestFor: "Gateway-first setups paired with merchant accounts or legacy ERP integrations",
    visitUrl: "https://www.authorize.net",
    logoSrc: paymentProcessingLogoForSlug("authorize-net"),
    quickVerdict: "Authorize.net is a mature gateway—common when banks bundle merchant accounts or when recurring tokens must stay portable.",
    quickVerdictParagraphs: [
      "Total cost is acquirer + gateway—easy to underestimate if you only look at gateway monthly fees.",
      "Greenfield SMBs often start simpler with Square or Stripe unless a bank package already includes Authorize.net.",
      "Authorize.net shines when portability matters: long-lived payment tokens, ERP-driven workflows, or bank-led merchant accounts that already bundle the gateway. It is rarely the fastest path for a two-truck startup buying its first reader.",
      "PCI scope and integration quality depend on your developer or ISV—Authorize.net is a building block, not a turnkey contractor app. Budget implementation and annual security review time.",
    ],
    compareLinks: [
      { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
      { label: "Stripe vs PayPal", href: getPaymentProcessingCompareUrl("stripe-vs-paypal") },
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.2", explanation: "Tokenization, recurring hooks, and broad compatibility across ISVs and legacy stacks." },
      { category: "Pricing", score: "3.9", explanation: "Gateway fee plus processor markup stacks—request an all-in sample statement, not a gateway flyer." },
      { category: "Ease of Use", score: "4.0", explanation: "Depends on implementation; all-in-one apps feel simpler for non-technical owners." },
      { category: "Support", score: "4.0", explanation: "Often routed through reseller or bank—continuity varies when personnel change." },
      { category: "Contractor fit", score: "4.0", explanation: "Appropriate when inherited systems require it; rarely the first choice for mobile-first greenfield crews." },
    ],
    pros: [
      "Mature gateway capabilities",
      "Tokenization for cards on file",
      "Wide integration compatibility",
      "Useful when banks or ERPs standardize on Authorize.net-shaped integrations",
    ],
    cons: [
      "Total cost stacking",
      "UX depends on implementation",
      "Less modern than Stripe for new web builds",
      "Requires technical or partner ownership to avoid brittle custom glue code",
    ],
    bestForEditorial: "Businesses inheriting bank-led merchant stacks or needing gateway flexibility with specific acquirers.",
    whoShouldAvoid: "Teams wanting the fastest phone-reader rollout with minimal vendors.",
    pricingSummary: "Monthly gateway fee plus per-transaction gateway charges and underlying interchange markup from your processor.",
    pricingTiers:
      "Gateway fees are only one layer—card type, CNP vs CP, and international cards still flow through the underlying processor’s interchange schedule.",
    costVsCompetitors:
      "Versus Stripe, Authorize.net can make sense when your acquirer bundle is already priced and switching would break ERP tokens; versus Square, Square wins on speed unless you are locked into gateway requirements.",
    features: ["Gateway", "Recurring billing hooks", "Fraud filters"],
    keyFeatures: [
      { name: "Tokenization", description: "Store payment methods for repeat maintenance billing with PCI scope reduction when implemented correctly." },
      {
        name: "Fraud filters",
        description: "Configure AVS/CVV and velocity rules to match how your office actually takes deposits—misconfiguration increases declines or chargebacks.",
      },
    ],
    integrations: ["Wide ISV and ERP integrations"],
    integrationsIntro:
      "Treat Authorize.net as middleware: confirm your ERP or field software still actively maintains the integration and PCI attestation path. Stale integrations are a common source of failed renewals and security gaps.",
    contractorUse: [
      "Keep tokens when migrating accounting systems",
      "Pair with virtual terminal for office-keyed payments",
      "Document who owns gateway credentials and fraud-rule changes—turnover without runbooks breaks billing quietly",
    ],
    alternatives: [
      alt("Stripe", "stripe", "Modern online spine", paymentProcessingLogoForSlug("stripe")),
      alt("Helcim", "helcim", "Bundled modern acquiring + UX", paymentProcessingLogoForSlug("helcim")),
    ],
    faqs: [
      { q: "Do I still pay interchange with Authorize.net?", a: "Yes—the gateway sits on top of a processor that passes interchange through or bundles it." },
      { q: "Authorize.net vs Stripe?", a: "Stripe for new web-first builds; Authorize.net when your bank bundle or ERP path requires it." },
      { q: "How much does Authorize.net cost?", a: "Gateway monthly fee plus per-transaction gateway charges plus your processor’s markup—ask for a sample statement." },
      { q: "Is Authorize.net good for contractors?", a: "It is fine when inherited stacks require it; greenfield mobile-first crews often start with Square or Stripe instead." },
      { q: "Can Authorize.net store cards on file?", a: "Yes with tokenization when implemented correctly—useful for maintenance billing with consent." },
      {
        q: "Why does BeltStack caution about Authorize.net for new contractors?",
        a: "Not because the gateway is low quality—because total cost and implementation burden are easy to underestimate. If you have no legacy constraint, simpler stacks often ship faster; if you do, Authorize.net can still be the right spine.",
      },
    ],
    relatedReading: RELATED_CROSS,
  },
  clover: {
    ...PP_SHELL,
    toolName: "Clover",
    rating: "4.4",
    startingPrice: "Hardware + processing (often via resellers)",
    bestFor: "Counter-heavy locations wanting devices and an app marketplace",
    visitUrl: "https://www.clover.com",
    logoSrc: paymentProcessingLogoForSlug("clover"),
    quickVerdict: "Clover fits when you want purpose-built terminals and apps at a fixed location—not only phone dongles.",
    quickVerdictParagraphs: [
      "Pricing often flows through ISO partners—compare three quotes and read termination terms.",
      "Pair Clover with honest inventory and tipping policies if you attach small retail to service work.",
      "Because Clover often sells through ISOs, your experience is partly your reseller: onboarding speed, hold policies, and equipment subsidies can differ for two shops on the same street—interview references, not only brochures.",
      "We evaluate Clover as a category—devices, apps, and processing—but we cannot see your ISO’s margin. Effective rate and contract length matter more than terminal branding.",
    ],
    compareLinks: [
      { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
      { label: "Square vs PayPal", href: getPaymentProcessingCompareUrl("square-vs-paypal") },
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Device + app ecosystem suits retail-hybrid service models with counters and staff handoffs." },
      { category: "Pricing", score: "4.0", explanation: "Reseller variability dominates—scores assume you will compare multiple quotes and read termination clauses." },
      { category: "Ease of Use", score: "4.3", explanation: "Staff-friendly when menus, tips, and inventory are configured deliberately upfront." },
      { category: "Support", score: "4.0", explanation: "Tied to reseller quality; document escalation paths before peak season." },
      { category: "Contractor fit", score: "4.3", explanation: "Strong for showrooms and parts counters; van-primary crews may prefer lighter mobile stacks unless handheld Clover is standard." },
    ],
    pros: [
      "Hardware-forward experience",
      "App marketplace for tips and light inventory",
      "Familiar terminal workflows",
      "Useful when you want fixed-location POS discipline more than phone-only readers",
    ],
    cons: [
      "ISO quote variance",
      "Less developer-native than Stripe",
      "Contract terms need legal review",
      "Equipment leases and early termination can dominate lifetime cost if unchecked",
    ],
    bestForEditorial: "Shops with steady counter traffic, parts sales, or hybrid retail + service models.",
    whoShouldAvoid: "Pure mobile-only crews who refuse counter hardware costs.",
    pricingSummary: "Hardware purchase or lease plus processing rates; ask about reserves and early termination.",
    pricingTiers:
      "CP vs CNP, rewards cards, and keyed transactions may tier differently—ask your ISO for a matrix, not a single headline rate.",
    costVsCompetitors:
      "Versus Square, Clover can win when you need a fixed counter ecosystem and apps at scale; versus Stripe, Stripe wins custom web checkout—Clover is rarely the first pick for headless commerce.",
    features: ["POS", "Hardware", "Apps"],
    keyFeatures: [
      { name: "Devices", description: "Countertop and handheld options for staff who need tactile workflows." },
      {
        name: "Reseller due diligence",
        description: "Request sample statements, reserve language, and equipment buyout terms in writing before you standardize multiple locations.",
      },
    ],
    integrations: ["Accounting and payroll partners—confirm with reseller"],
    integrationsIntro:
      "Confirm accounting and payroll integrations with your specific reseller bundle—Clover’s value is reduced if you must manually re-key payouts each week because the connector was oversold.",
    contractorUse: [
      "Run a parts desk at the office while crews are mobile",
      "Standardize tipping on counter sales",
      "Audit ISO statements quarterly for new pass-through or PCI line items",
    ],
    alternatives: [
      alt("Square", "square", "Simpler national SMB packaging", paymentProcessingLogoForSlug("square")),
      alt("Stripe", "stripe", "Custom online + Terminal", paymentProcessingLogoForSlug("stripe")),
    ],
    faqs: [
      { q: "Clover vs Square?", a: "Clover when reseller device packages and apps fit your counter; Square when you want simpler national SMB onboarding." },
      { q: "Why do Clover quotes differ?", a: "ISOs bundle hardware subsidies and rates differently—compare effective rate and contract length." },
      { q: "Is Clover good for mobile trades?", a: "Counter-first; pure van crews often prefer Square unless you standardize on Clover handhelds deliberately." },
      { q: "How much do payment processors charge?", a: "Clover stacks hardware, processing, and sometimes reserves—read the full agreement, not the terminal sticker price." },
      { q: "Clover vs Stripe?", a: "Stripe for custom web checkout; Clover for retail-forward terminals and app marketplace at fixed locations." },
      {
        q: "How does BeltStack review Clover fairly given ISO variance?",
        a: "We describe capabilities and risks that are common across deployments—then insist you compare multiple ISO quotes and your own statements. A great Clover rollout is often a great reseller relationship, not only software.",
      },
    ],
    relatedReading: RELATED_CROSS,
  },
};

export function getPaymentProcessingReviewBySlug(slug: string): PaymentProcessingReviewData | undefined {
  return PAYMENT_PROCESSING_REVIEWS[slug];
}

export function getPaymentProcessingReviewSlugs(): string[] {
  return Object.keys(PAYMENT_PROCESSING_REVIEWS);
}

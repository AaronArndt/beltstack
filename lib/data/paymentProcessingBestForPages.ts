import type {
  BestForComparisonLink,
  BestForEditorialBlock,
  BestForFaqItem,
  BestForFeaturedProduct,
  BestForGuideLink,
  BestForReviewLink,
  BestForTableRow,
  BestForTemplateProps,
} from "@/components/best/BestForTemplate";
import { paymentProcessingLogoForSlug } from "@/lib/data/paymentProcessingLogos";
import { getPaymentProcessingCompareUrl, getPaymentProcessingReviewUrl } from "@/lib/routes";

const GUIDES = "/payment-processing/guides";

const featuredProducts: BestForFeaturedProduct[] = [
  {
    slug: "square",
    name: "Square",
    badge: "Best field + counter default",
    description: "Readers, invoices, and quick payment links when crews collect most revenue on-site.",
    rating: "4.6",
    startingPrice: "Per transaction",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    visitUrl: "https://squareup.com",
    logoSrc: paymentProcessingLogoForSlug("square"),
  },
  {
    slug: "stripe",
    name: "Stripe",
    badge: "Best online + Billing",
    description: "Payment Links, Checkout, and Billing for deposits and recurring maintenance plans on the web.",
    rating: "4.7",
    startingPrice: "Per transaction",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    visitUrl: "https://stripe.com",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    badge: "Best wallet checkout",
    description: "When homeowners finish emailed deposits behind a trusted PayPal button.",
    rating: "4.4",
    startingPrice: "Per transaction",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
    visitUrl: "https://www.paypal.com/business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
  },
];

const comparisonTableRows: BestForTableRow[] = [
  {
    slug: "square",
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    bestFor: "Card-present + invoices",
    startingPrice: "Per transaction",
    standoutFeature: "Hardware + POS",
    reviewHref: getPaymentProcessingReviewUrl("square"),
  },
  {
    slug: "stripe",
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    bestFor: "Online + APIs",
    startingPrice: "Per transaction",
    standoutFeature: "Billing + Links",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    bestFor: "Wallet payers",
    startingPrice: "Per transaction",
    standoutFeature: "Trusted checkout",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
  },
  {
    slug: "helcim",
    name: "Helcim",
    logoSrc: paymentProcessingLogoForSlug("helcim"),
    bestFor: "Interchange-plus",
    startingPrice: "Interchange-plus",
    standoutFeature: "Transparent statements",
    reviewHref: getPaymentProcessingReviewUrl("helcim"),
  },
];

const relatedReviews: BestForReviewLink[] = [
  { name: "Stripe", href: getPaymentProcessingReviewUrl("stripe") },
  { name: "Square", href: getPaymentProcessingReviewUrl("square") },
  { name: "PayPal Business", href: getPaymentProcessingReviewUrl("paypal-business") },
  { name: "Shopify Payments", href: getPaymentProcessingReviewUrl("shopify-payments") },
  { name: "Helcim", href: getPaymentProcessingReviewUrl("helcim") },
  { name: "Stax", href: getPaymentProcessingReviewUrl("stax") },
  { name: "Authorize.net", href: getPaymentProcessingReviewUrl("authorize-net") },
  { name: "Clover", href: getPaymentProcessingReviewUrl("clover") },
];

const relatedComparisons: BestForComparisonLink[] = [
  { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
  { label: "Stripe vs PayPal", href: getPaymentProcessingCompareUrl("stripe-vs-paypal") },
  { label: "Square vs PayPal", href: getPaymentProcessingCompareUrl("square-vs-paypal") },
  { label: "Helcim vs Stax", href: getPaymentProcessingCompareUrl("helcim-vs-stax") },
  { label: "Shopify Payments vs Stripe", href: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe") },
];

function makePage(
  useCase: string,
  title: string,
  subtitle: string,
  introParagraph: string,
  editorialGuidance: BestForEditorialBlock[],
  whyThesePicks: BestForEditorialBlock[],
  faqItems: BestForFaqItem[],
  relatedGuides: BestForGuideLink[]
): BestForTemplateProps {
  const label = useCase.replace(/-/g, " ");
  return {
    title,
    subtitle,
    useCase,
    categoryHref: "/payment-processing",
    categoryLabel: "Payment Processing",
    introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: `Our top payment processing picks for ${label}.`,
    editorialSub: `What to evaluate when you collect card payments as ${label}.`,
    whyThesePicksSub: `Why these processors fit ${label}.`,
    seeAlsoBlock: {
      roundupLabel: "Best payment processing software (2026) — full roundup",
      roundupHref: "/payment-processing/best-payment-processing-software",
      compareLabel: "Compare payment processing software",
      compareHref: "/payment-processing/compare",
    },
    featuredProducts,
    comparisonTableRows,
    editorialGuidance,
    whyThesePicks,
    relatedReviews,
    relatedComparisons,
    relatedGuides: [
      ...relatedGuides,
      { label: "How to choose invoicing software", href: "/invoicing/guides/how-to-choose-invoicing-software" },
      { label: "POS software hub", href: "/pos" },
      { label: "CRM software hub", href: "/crm" },
      { label: "Website builders hub", href: "/website-builders" },
      { label: "Email marketing hub", href: "/email-marketing" },
    ],
    faqItems,
  };
}

export const PAYMENT_PROCESSING_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = {
  "small-business": makePage(
    "small-business",
    "Best Payment Processing Software for Small Business (2026)",
    "Collect deposits, final balances, and online payments without drowning in gateway jargon.",
    "Small service businesses win when one primary processor matches how money actually arrives—truck swipes, emailed invoices, or website checkout. Add complexity only when conversion data proves a second rail pays for itself.",
    [
      { heading: "Start with the dominant channel", body: "If 80% of dollars swipe in person, optimize readers and receipts first. If 80% pay online, prioritize checkout and payment links." },
      { heading: "Read statements monthly", body: "Effective rate beats marketing percentages—track refunds, AMEX share, and chargebacks." },
      { heading: "Pair with invoicing deliberately", body: "Send invoices and accept payments through workflows your office will repeat daily—see our invoicing hub when documents drive collections." },
      { heading: "Plan for growth", body: "If memberships or ecommerce appear on the horizon, pick a processor that supports recurring billing without a painful replatform." },
    ],
    [
      {
        heading: "Square",
        body: "Square is the fastest path for mobile crews and simple counters: readers, tap-to-pay, and next-day deposits with one vendor relationship to manage. During a trial month, reconcile payouts to your bank feed daily and compare effective rate—including refunds and AMEX mix—to your old statements. Test invoicing and payment links for deposits if office staff lives in email more than the field. Validate receipt branding and job-number memos so chargebacks are easier to defend. It fits small businesses that prioritize operational simplicity over bespoke gateway engineering.",
      },
      {
        heading: "Stripe",
        body: "Stripe shines when your website, portal, or app collects card-not-present deposits, memberships, or recurring maintenance plans via Checkout, Payment Links, or Billing APIs. Pilot with real customers on one offer first; failed renewals and webhook retries matter more than demo checkouts. Confirm Strong Customer Authentication and receipt emails match how homeowners expect to pay from their phones. Pair with your CRM or scheduling tool so paid status updates automatically for the office. Choose Stripe when engineering or agency help exists to own the integration long term.",
      },
      {
        heading: "PayPal Business",
        body: "PayPal Business helps when remote payers abandon card fields but complete wallet flows—common on mobile email estimates where trust and speed intersect. A/B a trial week: send identical invoices with and without PayPal buttons and measure completion, not vanity opens. Watch for higher fees on some wallet paths; net margin still has to clear your labor and materials. Validate dispute documentation processes since PayPal and card networks differ in buyer narratives. Keep it as a complementary rail when data proves lift, not by default.",
      },
    ],
    [
      { q: "What payment processor is cheapest for small business?", a: "Whichever yields the lowest net deposits for your mix after refunds and disputes—compute effective rate from statements." },
      { q: "Square or Stripe for a small shop?", a: "Square when crews swipe cards; Stripe when online checkout dominates." },
      { q: "Do I need a separate POS?", a: "Heavy retail may need our POS hub; many trades stop at mobile readers plus accounting sync." },
      { q: "How much do processors charge?", a: "Typically percentage plus cents per charge, plus hardware, instant transfer, or software fees—read the full fee grid." },
      { q: "Can I use the same processor online and in person?", a: "Often yes—unified reporting saves time; split stacks only with clear reasons." },
      { q: "Where does CRM fit?", a: "Track customers, jobs, and payment status in CRM so finance and dispatch share one story—see our CRM hub." },
    ],
    [
      { label: "How payment processing works", href: `${GUIDES}/how-payment-processing-works` },
      { label: "How to choose a payment processor", href: `${GUIDES}/how-to-choose-a-payment-processor` },
    ]
  ),
  contractors: makePage(
    "contractors",
    "Best Payment Processing for Contractors (2026)",
    "Mobile payments, job-site deposits, and invoices that match real-world trades workflows.",
    "Contractors collect money in awkward places: driveways, basements, and emailed estimates after hours. The right processor minimizes phone tag, records job references on receipts, and survives refund disputes with clear scopes.",
    [
      { heading: "Mobile reliability", body: "Test readers where signal is weak; crews abandon tools that fail at the worst moment." },
      { heading: "Deposit discipline", body: "Use payment links or invoices with explicit scope attachments so chargebacks are defensible." },
      { heading: "Change order flows", body: "Define how approved extras get charged—card on file policies need homeowner consent documented." },
      { heading: "Accounting handoff", body: "Map payouts to bank feeds so bookkeepers recognize deposits by processor and date." },
    ],
    [
      {
        heading: "Square",
        body: "Contractors leaning on truck rolls and walkthrough-close balances get hardware fast and reliable card-present rates with Square readers tied to real crew logins. Trial readers on your worst cell sites; if techs abandon the tool, no processor saves the job. Use invoices or contracts with explicit scope notes to protect against chargebacks on large tickets. Map payouts to job IDs in accounting so bookkeepers can trace deposits without detective work. Square stays the default when most dollars still swipe or tap on site.",
      },
      {
        heading: "Stripe",
        body: "Stripe fits when your site or branded portal sells deposits, progress draws, or subscription-style maintenance plans with hosted Checkout or Payment Links your office can regenerate. During pilot, test partial captures or incremental authorizations if equipment orders depend on homeowner commits. Log webhooks into CRM or job software so paid status is visible to dispatch the same day. Validate PCI scope—use Stripe’s hosted paths when you lack in-house security bandwidth. It wins when card-not-present discipline and automation matter as much as field readers.",
      },
      {
        heading: "Helcim",
        body: "Helcim appeals when large average tickets and transparent interchange-plus statements beat flat-rate simplicity for contractor economics—especially on high-ticket replacements or commercial draws. During a trial month, run parallel effective-rate math on real statements including refunds, AMEX share, and keyed versus present mix; marketing rates never tell the full story. Validate terminal or virtual terminal workflows crews and office staff will both use without workarounds. Confirm accounting exports match how your bookkeeper reconciles deposits by job ID. Choose Helcim when data proves basis points matter at your volume, not on speculation.",
      },
    ],
    [
      { q: "What is the best payment processor for contractors?", a: "Often Square for field-heavy ops; Stripe when online deposits and subscriptions lead; Helcim when statements justify interchange-plus." },
      { q: "How do I take payments on a job site?", a: "Use EMV mobile readers, collect email or SMS receipts, and tie job numbers to payment memos when possible." },
      { q: "Should I email invoices or swipe on site?", a: "Use both—deposits may be remote while balances collect after walkthrough approval." },
      { q: "What about PayPal?", a: "Useful when homeowners insist on wallet checkout; track completion lift before standardizing." },
      { q: "How do I reduce chargebacks?", a: "Signed scopes, photo documentation, and clear refund windows beat processor hopping." },
      { q: "Do I need website payments?", a: "If marketing invests in web leads, yes—pair with our website builders hub for conversion-friendly pages." },
    ],
    [
      { label: "Payment processing for contractors", href: `${GUIDES}/payment-processing-for-contractors` },
      { label: "Stripe vs Square fees", href: `${GUIDES}/stripe-vs-square-fees` },
    ]
  ),
  hvac: makePage(
    "hvac",
    "Best Payment Processing for HVAC (2026)",
    "High-ticket replacements, seasonal cash flow, and deposits that match long job cycles.",
    "HVAC companies often run large replacement tickets with staged deposits. Processors should support progressive billing, clear receipts for finance partners, and honest economics when summer volume spikes.",
    [
      { heading: "Model seasonal slowdowns", body: "If you use membership-style processor fees, verify slow months still work—or keep flat per-transaction pricing." },
      { heading: "Progressive billing", body: "Align deposits, equipment orders, and final draws with payment links or invoices your office can reproduce." },
      { heading: "Interchange awareness", body: "Large tickets amplify basis points—compare Helcim quotes against flat-rate bundles using real statements." },
      { heading: "Ecommerce add-ons", body: "Filters and memberships sold online may push Shopify + Shopify Payments—see Shopify Payments vs Stripe before splitting gateways." },
    ],
    [
      {
        heading: "Stripe",
        body: "HVAC replacements and membership renewals often move through card-not-present flows—Stripe Payment Links and Billing handle large deposits and recurring charges with clearer retry logic than ad hoc invoices. Pilot progressive billing: deposit, equipment milestone, final balance—ensuring your office can reproduce each step without errors. Connect Stripe events to CRM so CSRs see paid stages before they schedule return visits. Validate ACH if you add it; failures need human follow-up during peak season. Stripe wins when web and phone sales ops—not only trucks—own revenue timing.",
      },
      {
        heading: "Square",
        body: "Square stays strong when crews collect final signatures and balances on-site after commissioning, especially when homeowners want to see finished work before tapping to pay. Trial tap-to-pay on phones during summer peaks to avoid Bluetooth reader surprises. Tie receipts to equipment serials or job numbers for warranty and finance audits. Compare effective rate on large tickets quarterly; flat pricing is simple but not always cheapest at extreme averages. Square complements Stripe when field and office collections split naturally.",
      },
      {
        heading: "Helcim",
        body: "HVAC replacements push large card-not-present deposits and high-ticket balances where interchange-plus transparency from Helcim can beat flat-rate bundles once you model real statements. Pilot with a month of actual processing data: separate repair from replace tickets, note keyed versus chip/tap share, and compute effective rate after refunds. Validate that finance can still tie payouts to job numbers and membership renewals without extra spreadsheets. Confirm hardware or virtual terminal flows work for office staff taking deposits while crews stay mobile on Square. Pick Helcim when the math clears your margin bar, not when chasing the lowest advertised percentage.",
      },
    ],
    [
      { q: "What payment method is best for HVAC replacements?", a: "Often a deposit link plus on-site balance capture—pick tools your office repeats without errors." },
      { q: "Is flat rate bad for HVAC?", a: "Not automatically—compute effective rate; large tickets sometimes favor interchange-plus." },
      { q: "How do memberships bill?", a: "Use processor recurring features or pair with invoicing software that manages renewals and failures." },
      { q: "Should we offer financing instead?", a: "Financing complements cards—still maintain a card rail for deposits and service calls." },
      { q: "What is the cheapest processor?", a: "The one with lowest net cost for your actual card mix and chargeback rate." },
      { q: "How does email marketing help?", a: "Send payment reminders and seasonal offers through our email marketing hub with compliant cadences." },
    ],
    [
      { label: "Credit card processing fees explained", href: `${GUIDES}/credit-card-processing-fees-explained` },
      { label: "How to choose a payment processor", href: `${GUIDES}/how-to-choose-a-payment-processor` },
    ]
  ),
  plumbers: makePage(
    "plumbers",
    "Best Payment Processing for Plumbers (2026)",
    "Emergency calls, quick mobile capture, and payment links when homeowners pay from work.",
    "Plumbing revenue mixes urgent same-day swipes with emailed invoices for larger repipes. Your processor should keep techs moving, support tap-to-pay hygiene, and reduce abandoned remote payments.",
    [
      { heading: "Speed after service", body: "Long checkout flows cost callbacks—train techs on a three-tap habit when possible." },
      { heading: "After-hours links", body: "Payment links should include job reference and plain-language descriptions to prevent confusion chargebacks." },
      { heading: "Wallet options", body: "PayPal or Apple Pay can rescue completion—test on your demographic." },
      { heading: "CRM alignment", body: "Mark invoices paid in CRM so dispatchers stop double-billing." },
    ],
    [
      {
        heading: "Square",
        body: "Plumbers living on emergency vans need Square’s fast card-present capture, SMS or email receipts, and hardware that survives truck life. Trial after-hours flows: does the on-call tech get notifications, or does money sit unclaimed in limbo? Use memos for job addresses and scope snippets to defend disputes on slab leaks and after-midnight calls. Reconcile nightly so dispatch knows which tickets are truly paid before callbacks go out. Square is excellent when speed after the wrench work matters more than fancy invoicing.",
      },
      {
        heading: "PayPal Business",
        body: "PayPal Business fits when homeowners pay larger repipes or water heater swaps from work via emailed estimates and want a wallet they already trust. Run a two-week trial comparing PayPal buttons to generic pay links on the same ticket sizes. Document line items and warranties in the payment description trail to reduce confusion chargebacks. Make sure office staff marks CRM paid the moment PayPal clears—double trucks roll when systems disagree. Use it where mobile wallet completion measurably beats manual card entry.",
      },
      {
        heading: "Stripe",
        body: "Stripe belongs in the mix when you sell service plans, big-ticket jobs, or commercial retainers through a portal with structured line items and recurring logic. Pilot one commercial account with milestone billing to prove your team can operate it without constant dev help. Webhooks into job software keep field and office aligned on deposits received. Validate 3DS and receipt emails for property managers paying on phones. Pair Stripe with Square so urgent van swipes and planned portal payments each use the right rail.",
      },
    ],
    [
      { q: "Stripe or Square for plumbers?", a: "Square for van-heavy payment collection; Stripe when web links and subscriptions matter more." },
      { q: "How do plumbers reduce fees?", a: "Encourage card-present vs keyed entry, dispute invalid chargebacks with docs, and review effective rate quarterly." },
      { q: "What about cash and checks?", a: "Still document in the same systems so reporting stays honest and CRM stages update." },
      { q: "Should I use invoicing software?", a: "Often yes for line items and history—pair with our invoicing hub." },
      { q: "How much do payment processors charge?", a: "Varies by entry method; keyed and invoice-not-present often cost more than tap." },
      { q: "Can customers pay by text?", a: "Many stacks support pay-by-link via SMS—ensure PCI-safe flows and consent." },
    ],
    [
      { label: "Payment processing for contractors", href: `${GUIDES}/payment-processing-for-contractors` },
      { label: "How payment processing works", href: `${GUIDES}/how-payment-processing-works` },
    ]
  ),
  electricians: makePage(
    "electricians",
    "Best Payment Processing for Electricians (2026)",
    "Panel upgrades, commercial draws, and professional receipts that reflect licensed work.",
    "Electrical contractors often juggle residential upgrades and multi-phase commercial jobs. Payments should support staged deposits, clear documentation for inspectors and homeowners, and accounting that survives audits.",
    [
      { heading: "Commercial draw schedules", body: "Match processor invoices or links to contract milestones—avoid ad-hoc Venmo chaos." },
      { heading: "Large ticket economics", body: "Evaluate interchange-plus when panel jobs routinely exceed flat-rate comfort zones." },
      { heading: "Receipt professionalism", body: "Homeowners forward receipts to insurers—use consistent branding and job IDs." },
      { heading: "Website trust", body: "Commercial buyers often verify you online first—accept payments on pages from our website builders hub when possible." },
    ],
    [
      {
        heading: "Stripe",
        body: "Electrical contractors running staged commercial draws or large residential upgrades benefit from Stripe Payment Links and structured Checkout that attach PDF scopes and clear descriptors. Trial with one estimator’s workflow—deposit, progress, retention—to ensure finance can audit matches to contracts. Automate receipts to customers and PMs so nobody argues about what was authorized. Validate sales tax and surcharge rules if you pass fees through in your state. Stripe wins when deposits are negotiated remotely before trucks roll.",
      },
      {
        heading: "Square",
        body: "Square covers residential closeouts when homeowners want to pay after walkthroughs with tap or chip on site, especially for panel swaps and same-day restores. Test reader failover—if one device dies, can another login complete the sale without delaying the crew? Brand receipts with license numbers insurers expect to see forwarded. Track effective rates separately for small service calls versus heavy tickets to see where flat pricing helps or hurts. Square is the field complement to Stripe’s portal depth.",
      },
      {
        heading: "Helcim",
        body: "Electrical contractors moving large commercial draws and high-ticket residential upgrades often hit flat-rate drag that interchange-plus statements from Helcim can clarify—if you commit to reading statements monthly. Trial Helcim against your Stripe or Square effective rates on the same ticket mix, including corporate cards and AMEX. Validate virtual terminal and invoicing flows for PMs paying from offices while techs stay in the field. Ensure PCI practices stay tight on card-not-present approvals and stored-card policies for progressive billing. Choose Helcim when transparent basis points beat simplicity at your actual volume.",
      },
    ],
    [
      { q: "What processor fits electrical contractors?", a: "Stripe for staged online deposits; Square for residential truck collections; Helcim when statements show flat-rate drag." },
      { q: "How do I invoice commercial clients?", a: "Use invoicing tools with net terms tracking plus card or ACH options your processor supports." },
      { q: "Are keyed payments worth avoiding?", a: "Yes when possible—card-present rates are usually lower and fraud risk drops." },
      { q: "What is interchange?", a: "Baseline network cost passed through or bundled into flat rates—see our fees explained guide." },
      { q: "Should electricians offer financing?", a: "Large jobs often pair financing with card deposits—choose partners that integrate cleanly." },
      { q: "How does CRM help?", a: "Track bids, approvals, and paid stages so crews and office agree on what is owed." },
    ],
    [
      { label: "Credit card processing fees explained", href: `${GUIDES}/credit-card-processing-fees-explained` },
      { label: "Stripe vs Square fees", href: `${GUIDES}/stripe-vs-square-fees` },
    ]
  ),
  "home-services": makePage(
    "home-services",
    "Best Payment Processing for Home Services (2026)",
    "Multi-crew brands that need consistent payments across trucks, counters, and online booking.",
    "Home-service brands with multiple trucks or locations need processors that scale reporting, standardize receipts, and keep effective rates visible as volume grows. Fragmented tools create reconciliation debt finance teams hate.",
    [
      { heading: "Standardize rails", body: "Pick one primary processor per channel where possible; exceptions need written policy." },
      { heading: "Central reporting", body: "Leaders should compare location effective rates monthly—not only top-line revenue." },
      { heading: "Training", body: "Roll out reader habits and link templates in one playbook to avoid ten different ad-hoc flows." },
      { heading: "Cross-stack links", body: "CRM tracks customers; email marketing sends reminders; website builders host book-now flows—processors sit at the money layer." },
    ],
    [
      {
        heading: "Square",
        body: "Multi-crew home-service brands standardize on Square when they need identical reader kits, training playbooks, and payout visibility across branches without ten different merchant stories. Trial rollout in one district first: measure effective rate per location, not blended corporate averages hiding a bad branch. Enforce memo and job-ID discipline in POS profiles so finance can allocate revenue. Validate chargeback workflows centrally while letting local managers respond fast. Square scales field collection when consistency beats bespoke gateway projects.",
      },
      {
        heading: "Stripe",
        body: "Stripe supports branded customer portals, deposits, and recurring memberships that should look identical whether the customer books in Austin or Denver. During pilot, unify webhook handling into CRM so duplicate customer records do not corrupt attribution. Test Billing proration when homeowners upgrade maintenance tiers mid-cycle. Security review matters at scale—use Stripe-hosted elements to reduce PCI scope across franchises. Stripe is the backbone when programmatic money movement—not only swipes—defines operations.",
      },
      {
        heading: "Stax",
        body: "Stax enters the conversation for steady, multi-location home-service brands where membership-style pricing plus interchange pass-through can beat percentage-only stacks—if you model seasonality honestly before signing. Trial requires consolidated statement review across branches: low winter weeks still incur platform fees, so confirm the breakeven call volume makes sense. Validate terminal and gateway options match how each branch swipes versus keys. Align finance reporting so Stax batches still map to branch P&L and job IDs inside CRM. Choose Stax when predictable subscription economics beat ad hoc rates at enterprise-style volume, not for tiny seasonal shops.",
      },
    ],
    [
      { q: "How do multi-location brands choose a processor?", a: "Optimize for reporting consistency, support SLAs, and effective rate by branch—not only signup bonuses." },
      { q: "Is Stripe better than Square at scale?", a: "Stripe often wins programmatic complexity; Square wins uniform field hardware—many brands use both with discipline." },
      { q: "What is the cheapest payment processor?", a: "The one with lowest net deposits across all locations after every fee and loss." },
      { q: "How do POS systems fit?", a: "Showrooms and parts desks may need POS depth from our POS hub while trucks stay mobile-first." },
      { q: "Can we send payment reminders by email?", a: "Yes—coordinate with our email marketing hub and CRM to avoid duplicate or non-compliant pings." },
      { q: "When is Helcim or Stax relevant?", a: "When consolidated statements prove flat-rate bundles lag interchange-plus or membership models." },
    ],
    [
      { label: "How to choose a payment processor", href: `${GUIDES}/how-to-choose-a-payment-processor` },
      { label: "How payment processing works", href: `${GUIDES}/how-payment-processing-works` },
    ]
  ),
};

export function getPaymentProcessingBestForPageProps(slug: string): BestForTemplateProps | undefined {
  return PAYMENT_PROCESSING_BEST_FOR_BY_SLUG[slug];
}

export function getPaymentProcessingBestForSlugs(): string[] {
  return Object.keys(PAYMENT_PROCESSING_BEST_FOR_BY_SLUG);
}

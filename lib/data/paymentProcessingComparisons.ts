import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getPaymentProcessingAlternativeUrl,
  getPaymentProcessingBestForUrl,
  getPaymentProcessingCompareUrl,
  getPaymentProcessingReviewUrl,
} from "@/lib/routes";
import { paymentProcessingLogoForSlug } from "@/lib/data/paymentProcessingLogos";

export function getPaymentProcessingCompareUrlFromSlug(slug: string): string {
  return `/payment-processing/compare/${slug}`;
}

const PP_TRADE_LINKS = [
  { label: "Best payment processing for contractors", href: getPaymentProcessingBestForUrl("contractors") },
  { label: "Best for small business", href: getPaymentProcessingBestForUrl("small-business") },
  { label: "Best for HVAC businesses", href: getPaymentProcessingBestForUrl("hvac") },
  { label: "Best for plumbing companies", href: getPaymentProcessingBestForUrl("plumbing") },
  { label: "Best for home services", href: getPaymentProcessingBestForUrl("home-services") },
];

const P = {
  stripe: {
    name: "Stripe",
    slug: "stripe",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    visitUrl: "https://stripe.com",
    bestForSummary: "Developer-led online payments, Billing, and Payment Links",
    rating: "4.7",
    startingPrice: "Pay-as-you-go per charge",
  },
  square: {
    name: "Square",
    slug: "square",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    logoSrc: paymentProcessingLogoForSlug("square"),
    visitUrl: "https://squareup.com",
    bestForSummary: "In-person readers, invoices, and simple online",
    rating: "4.6",
    startingPrice: "Free POS app; per-transaction fees",
  },
  paypal: {
    name: "PayPal",
    slug: "paypal-business",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    visitUrl: "https://www.paypal.com/business",
    bestForSummary: "Trusted wallet checkout and pay links",
    rating: "4.4",
    startingPrice: "Per-transaction fees",
  },
  shopify: {
    name: "Shopify Payments",
    slug: "shopify-payments",
    reviewHref: getPaymentProcessingReviewUrl("shopify-payments"),
    logoSrc: paymentProcessingLogoForSlug("shopify-payments"),
    visitUrl: "https://www.shopify.com/payments",
    bestForSummary: "Native Shopify checkout and payouts",
    rating: "4.5",
    startingPrice: "Bundled with Shopify; per charge",
  },
  helcim: {
    name: "Helcim",
    slug: "helcim",
    reviewHref: getPaymentProcessingReviewUrl("helcim"),
    logoSrc: paymentProcessingLogoForSlug("helcim"),
    visitUrl: "https://www.helcim.com",
    bestForSummary: "Interchange-plus with modern UX",
    rating: "4.5",
    startingPrice: "Interchange-plus",
  },
  stax: {
    name: "Stax",
    slug: "stax",
    reviewHref: getPaymentProcessingReviewUrl("stax"),
    logoSrc: paymentProcessingLogoForSlug("stax"),
    visitUrl: "https://www.staxpayments.com",
    bestForSummary: "Membership + pass-through interchange",
    rating: "4.3",
    startingPrice: "Monthly platform + interchange",
  },
  clover: {
    name: "Clover",
    slug: "clover",
    reviewHref: getPaymentProcessingReviewUrl("clover"),
    logoSrc: paymentProcessingLogoForSlug("clover"),
    visitUrl: "https://www.clover.com",
    bestForSummary: "Counter-focused terminals, apps, and reseller-bundled processing",
    rating: "4.4",
    startingPrice: "Hardware + processing (often via resellers)",
  },
  authorizeNet: {
    name: "Authorize.net",
    slug: "authorize-net",
    reviewHref: getPaymentProcessingReviewUrl("authorize-net"),
    logoSrc: paymentProcessingLogoForSlug("authorize-net"),
    visitUrl: "https://www.authorize.net",
    bestForSummary: "Gateway and tokenization atop a merchant account—common with banks and ERPs",
    rating: "4.2",
    startingPrice: "Gateway fee plus processor/acquirer pricing",
  },
} as const;

const ALT_SLUGS = new Set(["stripe", "square", "paypal-business", "clover", "authorize-net"]);

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  const altLabel: Record<string, string> = {
    stripe: "Stripe",
    square: "Square",
    "paypal-business": "PayPal Business",
    clover: "Clover",
    "authorize-net": "Authorize.net",
  };
  return slugs
    .filter((s) => ALT_SLUGS.has(s))
    .map((s) => ({
      label: `Best ${altLabel[s] ?? s} alternatives`,
      href: getPaymentProcessingAlternativeUrl(s),
    }));
}

function buildMoreComparisons(pa: (typeof P)[keyof typeof P], pb: (typeof P)[keyof typeof P]) {
  const fromAlts = alternativesPageLinksForSlugs([pa.slug, pb.slug]);
  return [
    { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
    { label: "Stripe vs PayPal", href: getPaymentProcessingCompareUrl("stripe-vs-paypal") },
    { label: "Square vs PayPal", href: getPaymentProcessingCompareUrl("square-vs-paypal") },
    { label: "Helcim vs Stax", href: getPaymentProcessingCompareUrl("helcim-vs-stax") },
    { label: "Shopify Payments vs Stripe", href: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe") },
    { label: "Square vs Helcim", href: getPaymentProcessingCompareUrl("square-vs-helcim") },
    { label: "Stripe vs Helcim", href: getPaymentProcessingCompareUrl("stripe-vs-helcim") },
    { label: "Square vs Stax", href: getPaymentProcessingCompareUrl("square-vs-stax") },
    { label: "Stripe vs Stax", href: getPaymentProcessingCompareUrl("stripe-vs-stax") },
    { label: "Shopify Payments vs Square", href: getPaymentProcessingCompareUrl("shopify-payments-vs-square") },
    { label: "Shopify Payments vs PayPal", href: getPaymentProcessingCompareUrl("shopify-payments-vs-paypal") },
    { label: "Square vs Clover", href: getPaymentProcessingCompareUrl("square-vs-clover") },
    { label: "Stripe vs Clover", href: getPaymentProcessingCompareUrl("stripe-vs-clover") },
    { label: "Helcim vs PayPal", href: getPaymentProcessingCompareUrl("helcim-vs-paypal") },
    { label: "Stax vs PayPal", href: getPaymentProcessingCompareUrl("stax-vs-paypal") },
    { label: "Authorize.net vs Stripe", href: getPaymentProcessingCompareUrl("authorize-net-vs-stripe") },
    { label: "Authorize.net vs Square", href: getPaymentProcessingCompareUrl("authorize-net-vs-square") },
    { label: "Authorize.net vs PayPal", href: getPaymentProcessingCompareUrl("authorize-net-vs-paypal") },
    { label: "Authorize.net vs Shopify Payments", href: getPaymentProcessingCompareUrl("authorize-net-vs-shopify-payments") },
    { label: "Authorize.net vs Helcim", href: getPaymentProcessingCompareUrl("authorize-net-vs-helcim") },
    { label: "Authorize.net vs Stax", href: getPaymentProcessingCompareUrl("authorize-net-vs-stax") },
    { label: "Authorize.net vs Clover", href: getPaymentProcessingCompareUrl("authorize-net-vs-clover") },
    ...fromAlts,
    { label: "Best payment processing software", href: "/payment-processing/best-payment-processing-software" },
    { label: "Invoicing software hub", href: "/invoicing" },
    { label: "POS software hub", href: "/pos" },
    { label: "CRM software hub", href: "/crm" },
    { label: "Website builders hub", href: "/website-builders" },
    { label: "Email marketing hub", href: "/email-marketing" },
    { label: "Credit card processing fees explained", href: "/payment-processing/guides/credit-card-processing-fees-explained" },
    { label: "How to choose a payment processor", href: "/payment-processing/guides/how-to-choose-a-payment-processor" },
    { label: "Payment processing for contractors", href: "/payment-processing/guides/payment-processing-for-contractors" },
  ];
}

function altCard(slug: keyof typeof P, description: string) {
  const x = P[slug];
  return { name: x.name, href: x.reviewHref, logoSrc: x.logoSrc, description };
}

type PaymentProcessingCompareBody = Omit<
  ComparisonTemplateProps,
  | "productA"
  | "productB"
  | "categoryHref"
  | "categoryLabel"
  | "summaryParagraph"
  | "quickRecommendationA"
  | "quickRecommendationB"
  | "moreComparisons"
  | "relevantTradeLinks"
>;

function build(
  slug: string,
  a: keyof typeof P,
  b: keyof typeof P,
  summary: string,
  extra: PaymentProcessingCompareBody
): [string, ComparisonTemplateProps] {
  const pa = P[a];
  const pb = P[b];
  return [
    slug,
    {
      ...extra,
      productA: pa,
      productB: pb,
      categoryHref: "/payment-processing",
      categoryLabel: "Payment Processing",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} when ${pa.bestForSummary.toLowerCase()} matches how you collect money today.`,
      quickRecommendationB: `Choose ${pb.name} when ${pb.bestForSummary.toLowerCase()} is the bottleneck you need to fix.`,
      moreComparisons: buildMoreComparisons(pa, pb),
      relevantTradeLinks: PP_TRADE_LINKS,
    },
  ];
}

const COMMON_ALTS = [
  altCard("helcim", "Interchange-plus statements when large tickets make basis points worth reading monthly"),
  altCard("stax", "Membership + interchange when steady monthly volume amortizes a platform fee—model slow seasons"),
];

const entries: [string, ComparisonTemplateProps][] = [
  build("stripe-vs-square", "stripe", "square", "Independent, service-business lens: Stripe leads when online checkout, custom flows, and Billing are where money enters; Square leads when crews need fast card-present hardware and simple invoices without engineering—confirm fees and holds on your own statements before you switch.", {
    quickVerdictParagraphs: [
      "Stripe vs Square is not a beauty contest—it is a channel question. Stripe wins when homeowners pay on your website, through payment links, or inside software you control. Square wins when techs swipe cards in driveways and the office emails invoices from one brand.",
      "Pricing looks simpler on flat-rate marketing pages until you model keyed entries, AMEX share, and chargebacks. Read our Stripe vs Square fees guide and export real statements before you switch.",
      "Which should you choose? Pick Stripe if you already invest in web conversion, subscriptions, or developer integrations. Pick Square if your truth is mostly tablet readers, countertop registers, and getting live this week.",
      "Cross-stack note: many trades pair Square in the field with accounting or CRM elsewhere—just budget reconciliation time. Stripe often pairs with custom field apps when you need one payment spine online.",
      "BeltStack does not see your Radar rules, Square instant-transfer habits, or reserve history—those change cash flow as much as headline rates. Use this comparison to frame questions for your bookkeeper and each vendor’s written quote.",
      "Experience signal: teams that regret a switch usually skipped parallel-month math or underestimated who will own webhooks (Stripe) versus reader training (Square). Assign an owner before you migrate card-on-file data.",
    ],
    decisionGuideA: [
      "You sell deposits and balances through hosted checkout or Payment Links.",
      "You want Stripe Billing for memberships, tune-ups, or SaaS-style plans.",
      "Developers or agencies already maintain your website or customer portal.",
      "You need global cards, Apple Pay on the web, or nuanced decline handling.",
    ],
    decisionGuideB: [
      "Technicians collect cards on phones or tablets multiple times per day.",
      "You want registers, kitchen-display-style workflows, or Clover-adjacent retail add-ons under one ecosystem.",
      "Owners need invoices and basic ecommerce without standing up a gateway project.",
      "You value a single consumer brand for hardware swaps at Staples-style retail.",
    ],
    heroCallouts: [
      { label: "Fastest path to mobile swipes", winner: "B", reason: "Square’s retail story and reader ecosystem target crews first." },
      { label: "Strongest online + API depth", winner: "A", reason: "Stripe’s core product is programmable card acceptance and payouts." },
      { label: "Simplest mental model for non-technical owners", winner: "B", reason: "Square bundles hardware surfaces many offices already recognize." },
    ],
    featureComparison: [
      { feature: "Card-present / readers", productA: "Stripe Terminal (add-on)", productB: "Core strength", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Hosted pay links / invoices", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
      { feature: "Custom checkout + APIs", productA: "Industry-leading", productB: "Moderate", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Subscriptions / recurring", productA: "Stripe Billing", productB: "App-dependent", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Shopify-native checkout", productA: "Optional integrations", productB: "Separate Shopify Payments story", supportA: "partial", supportB: "partial" },
    ],
    pricingComparison:
      "Square charges percentage-plus-fixed processing that varies by how the card is taken (card-present, keyed, or online), plus optional software subscriptions and instant-transfer fees. Stripe uses the same general shape but adds separate fees when you use Billing, Terminal, instant payout, or currency conversion. Neither vendor’s marketing page replaces your statement: divide total fees by gross volume for the same period to compare. For very high average tickets, also request an interchange-plus quote and compare net deposits.",
    prosConsA: {
      pros: [
        "Deep online and developer tooling",
        "Payment Links and Billing for modern service contracts",
        "Strong fraud and issuer features as you scale",
        "One spine for online money movement when you outgrow ad-hoc invoice links",
      ],
      cons: [
        "In-person is powerful but not the default onboarding path",
        "Interchange-plus curious owners may still negotiate separate ISO deals",
        "Custom flows need someone who will test webhooks and handle tax or edge cases",
      ],
    },
    prosConsB: {
      pros: [
        "All-in-one story for mobile and counter",
        "Fast operational wins for small teams",
        "Invoices and links without a gateway project",
        "Retail-friendly hardware purchase and support paths many staff already know",
      ],
      cons: [
        "Heavily custom ecommerce may still push you toward Stripe",
        "Flat-rate simplicity can cost money at high average tickets",
        "Keyed or CNP-heavy mixes need discipline—otherwise effective rate drifts upward quietly",
      ],
    },
    bestFor: [
      {
        heading: "Best for online checkout and custom software",
        body: "Stripe is the better fit when your website, customer portal, or subscription product owns how money enters. Square is the better fit when in-person readers, counters, and simple invoices produce most revenue and engineering depth is not the bottleneck.",
      },
      {
        heading: "Best for in-person crews and counters",
        body: "Square is the better fit when technicians swipe cards daily, you want hardware and POS-style workflows without a gateway project, and remote card links are secondary.",
      },
      {
        heading: "Best for comparing fees fairly",
        body: "Export the same date range from each processor and compute effective rate (total fees ÷ gross volume), split by card-present versus online versus keyed. Use that number—not homepage percentages—to decide.",
      },
    ],
    alternatives: [altCard("paypal", "Wallet-first remote checkout when completion data supports a second rail"), ...COMMON_ALTS],
    faqs: [
      { q: "Is Stripe better than Square?", a: "Stripe is stronger online and in custom software; Square is often faster for in-person SMB operations. Match the channel where you actually collect most dollars." },
      { q: "What is cheaper, Stripe or Square?", a: "Depends on mix, average ticket, and refunds. Export statements and compute effective rate—marketing percentages are not the whole story." },
      { q: "Can contractors use Stripe in the field?", a: "Yes, via Stripe Terminal, but you must commit to hardware and setup. Square is the default when field simplicity beats maximum API depth." },
      { q: "Do I still need invoicing software?", a: "Often yes—tools like QuickBooks, Jobber, or dedicated invoicing products send documents and line items; processors move money. See our invoicing hub to pair them." },
      {
        q: "Should I trust a Stripe vs Square article instead of my accountant?",
        a: "Use articles to structure questions—channel mix, effective rate, dispute evidence, payout timing—then let your statements and tax advisor validate the decision. We synthesize public product positioning; we do not have access to your merchant account.",
      },
      {
        q: "What should I export before switching between Stripe and Square?",
        a: "At minimum: three months of transactions tagged by card-present vs online vs keyed, chargeback count, payout lag to the bank, and any Billing or subscription line items. Card-on-file migration usually needs customer consent and a technical cutover plan.",
      },
    ],
    sidebarWinners: [
      { label: "Online / API-led stacks", winner: "A" },
      { label: "Mobile + countertop first", winner: "B" },
      { label: "Fastest crew rollout", winner: "B" },
    ],
  }),
  build("stripe-vs-paypal", "stripe", "paypal", "Editorial comparison for service businesses: Stripe gives programmable checkout and Billing; PayPal gives a trusted wallet path many homeowners recognize on remote payments—verify effective rate per product path in PayPal’s fee grid against your exports, not ours.", {
    quickVerdictParagraphs: [
      "Stripe is the engineering-friendly spine for websites, invoices with card fields, and recurring maintenance plans. PayPal shines when the customer hesitates to type a card but will log into a familiar wallet.",
      "You are not forced into a single winner—some stacks present Stripe for cards and enable PayPal where conversion data supports it. That adds complexity; only do it if abandonment is measurable.",
      "For contractors, the decision is often deposit collection: if emails with Stripe Payment Links close faster, standardize there. If older homeowners bail until they see PayPal, follow the data.",
      "PayPal’s buyer-facing policies and dispute standards differ from “plain” card checkout—document scopes, photos, and approvals the same way you would for any card-not-present rail. Switching to Stripe does not remove dispute work; it changes tooling.",
      "We do not have access to PayPal reserves or Stripe Radar tuning on your account. Treat published rates as starting points; your merchant exports are the authoritative comparison.",
    ],
    decisionGuideA: [
      "Your dev or agency can maintain checkout and webhooks.",
      "Subscriptions or usage-based billing is on the roadmap.",
      "You want unified reporting with other Stripe products (Connect, Terminal, etc.).",
      "You need test environments, idempotent payments, and server-side confirmation for high-ticket deposits.",
    ],
    decisionGuideB: [
      "Remote customers demand PayPal at checkout.",
      "You sell in channels where PayPal is the default wallet.",
      "You want a recognizable consumer brand on the pay button today.",
      "Analytics show measurable lift when a wallet option appears on estimate follow-up pages.",
    ],
    heroCallouts: [
      { label: "Wallet trust / consumer brand", winner: "B", reason: "PayPal’s button still lifts completion for some demographics." },
      { label: "Custom web + Billing depth", winner: "A", reason: "Stripe’s APIs and product surface area are broader." },
    ],
    featureComparison: [
      { feature: "Hosted wallet button", productA: "Partner-dependent", productB: "Core", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Custom checkout + APIs", productA: "Very strong", productB: "Varies by integration", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Subscriptions", productA: "Stripe Billing", productB: "Plans available", supportA: "supported", supportB: "supported", stronger: "A" },
      { feature: "In-person hardware", productA: "Terminal", productB: "Zettle and partners", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Stripe charges percentage-plus-fixed processing plus optional fees for products like Billing and Terminal. PayPal’s rates depend on which product you use—online checkout, invoice, in-person, or wallet—so match the fee table row to the screen your customer actually pays on. Compare net deposits on the same jobs over the same period, including refunds and disputes. If you run both, split exports by payment method so totals reconcile cleanly.",
    prosConsA: {
      pros: [
        "Modern APIs for web and software-led flows",
        "Stripe Billing for recurring service plans",
        "Strong test mode and developer ergonomics",
        "Clearer single-vendor story when you want one online spine",
      ],
      cons: [
        "Less of a household consumer brand than PayPal on buttons",
        "Chargeback tooling still needs internal process",
        "You still own PCI-scoped choices if you build custom card flows poorly",
      ],
    },
    prosConsB: {
      pros: [
        "Trusted wallet flow for hesitant payers",
        "Multiple entry points: links, invoices, marketplaces",
        "Useful hybrid alongside Stripe or Square when data proves completion lift",
      ],
      cons: [
        "Fee complexity across products",
        "Less cohesive when you also run a separate gateway",
        "Reconciliation across PayPal settlement timing and your primary processor needs documented rules",
      ],
    },
    bestFor: [
      {
        heading: "Best for custom web checkout and subscriptions",
        body: "Stripe is the better fit when developers own checkout, you need Billing or deep APIs, and automation matters. PayPal is the better fit when adding a trusted wallet option measurably improves completion on remote payments.",
      },
      {
        heading: "Best for wallet checkout and remote payers",
        body: "PayPal is the better fit when customers expect the PayPal button on estimates, invoices, or checkout and you have seen abandonment on card-only flows.",
      },
      {
        heading: "Best for fee comparison",
        body: "Map each PayPal product path to its published fee, then compare net deposits to Stripe on identical transaction cohorts—headline percentages skip refunds, disputes, and cross-border uplift.",
      },
    ],
    alternatives: [altCard("square", "All-in-one field + invoice when trucks swipe most revenue"), ...COMMON_ALTS],
    faqs: [
      { q: "Can I use both Stripe and PayPal?", a: "Yes, but you double reconciliation and support playbooks. Pilot PayPal only on pages where data proves it helps." },
      { q: "Is PayPal cheaper than Stripe?", a: "Sometimes, for certain products and card mixes—run the math on your statements." },
      { q: "What about PayPal disputes?", a: "Document jobs with photos, signed approvals, and scope—processors do not remove dispute workload." },
      {
        q: "How should I verify this Stripe vs PayPal advice?",
        a: "Pull identical job cohorts from both exports, compute effective rate, and note payout timing to your bank. If your numbers disagree with our themes, trust your statement—we are general guidance, not underwriting.",
      },
      {
        q: "Does BeltStack have special pricing from Stripe or PayPal?",
        a: "No special rates through this content. Any affiliate relationship elsewhere on the site does not change how we describe product fit here.",
      },
    ],
    sidebarWinners: [
      { label: "Developer-led checkout", winner: "A" },
      { label: "Wallet conversion", winner: "B" },
    ],
  }),
  build("square-vs-paypal", "square", "paypal", "Square unifies hardware, POS, and invoices for local operators; PayPal optimizes remote wallet checkout when homeowners pay from email links—both can coexist if you document reconciliation; neither replaces clear scopes and dispute evidence.", {
    quickVerdictParagraphs: [
      "Square’s gravitational pull is the field: readers, tablets, and quick invoices after a job. PayPal’s pull is remote trust—especially when customers already associate PayPal with online buyer protection.",
      "Many businesses use Square in the truck and still send occasional PayPal links for specific customers. That is acceptable if finance documents why two rails exist.",
      "If you only sell in person, Square is the natural shortlist. If you only sell through email proposals to national customers, test PayPal completion rates.",
      "Effective rate discipline matters on both sides: Square’s keyed and CNP paths can diverge from card-present; PayPal’s fees shift by product path. Export both before you argue about “cheaper” in the office.",
      "Editorial limit: we do not know your average ticket, chargeback ratio, or whether you key cards from the office daily—those inputs flip the recommendation faster than brand preference.",
    ],
    decisionGuideA: [
      "Crews collect cards weekly on-site.",
      "You want hardware bundled with POS software.",
      "You sell from a counter or van, not primarily from a custom website.",
      "You want one recognizable operational brand for staff training and reader replacements.",
    ],
    decisionGuideB: [
      "Most revenue is remote and wallet-based.",
      "You sell through channels where PayPal is expected.",
      "You need a globally recognized pay button quickly.",
      "Your customers repeatedly ask for PayPal on estimates before they will commit a deposit.",
    ],
    featureComparison: [
      { feature: "Mobile card-present", productA: "Core", productB: "Partner hardware", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "POS + retail", productA: "Strong", productB: "Lighter", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Wallet checkout trust", productA: "Good", productB: "Very strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Invoicing / pay links", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Square charges processing that differs by card-present, keyed, and online entry, plus optional software and instant-transfer fees. PayPal’s fees depend on how the customer pays—invoice, standard online checkout, in-person, or wallet—and can include cross-border lines. Include Square hardware cost and any PayPal path you actually use, then compare net deposits on the same volume. If you use both processors, tag each payment by rail in accounting so month-end stays straightforward.",
    prosConsA: {
      pros: [
        "Operational simplicity for local crews",
        "Hardware ecosystem",
        "Single vendor for many SMB workflows",
        "Strong fit when final payment happens at the job site or counter",
      ],
      cons: [
        "Less wallet-centric than PayPal for some remote buyers",
        "Complex websites may still need Stripe",
        "High-ticket CNP deposits may need process discipline or interchange-plus modeling",
      ],
    },
    prosConsB: {
      pros: [
        "Strong remote wallet story",
        "Familiar consumer UX",
        "Can complement Square for specific customer segments without abandoning field hardware",
      ],
      cons: [
        "Less unified with heavy POS needs",
        "Fee tables require careful mapping",
        "Dual-rail operations need written finance rules so payouts never drift from job costing",
      ],
    },
    bestFor: [
      {
        heading: "Best for in-person and local operations",
        body: "Square is the better fit when crews swipe cards on site, you use registers or mobile readers, and most revenue is card-present or simple invoices. PayPal is the better fit when remote customers pay from email links and wallet trust drives completion.",
      },
      {
        heading: "Best for remote wallet payments",
        body: "PayPal is the better fit when your buyers hesitate on card-only checkout but complete when PayPal is offered, and you are willing to manage PayPal’s fee and settlement rules.",
      },
      {
        heading: "Best for running two payment rails",
        body: "If you keep Square for the field and PayPal for certain remote payers, write a simple rule for which link or terminal to use and reconcile both feeds weekly—dual rails fail when nobody owns the tagging.",
      },
    ],
    alternatives: [altCard("stripe", "Custom web + Billing when the site drives most revenue"), ...COMMON_ALTS],
    faqs: [
      { q: "Square or PayPal for small business?", a: "Square when you swipe cards regularly; PayPal when remote wallet payments dominate." },
      { q: "Can PayPal replace a POS?", a: "Light use cases only—evaluate Square or Clover for real retail + inventory depth." },
      {
        q: "Square vs PayPal for HVAC or plumbing?",
        a: "Square when crews collect final balances on site; PayPal when a large share of deposits comes from emailed estimates to homeowners who will not enter a card on your page. Run completion and effective-rate checks on both paths for one month before you standardize.",
      },
      {
        q: "Why does BeltStack warn about running Square and PayPal together?",
        a: "Not because it is wrong—because unlabeled dual rails confuse bookkeeping and job profitability. If you use both, document the rule in your finance SOP and reconcile weekly, not only at tax time.",
      },
    ],
    sidebarWinners: [
      { label: "In-person operations", winner: "A" },
      { label: "Remote wallet checkout", winner: "B" },
    ],
  }),
  build("helcim-vs-stax", "helcim", "stax", "Helcim emphasizes transparent interchange-plus with a modern merchant portal; Stax pairs a membership-style platform fee with pass-through interchange—both demand statement literacy and your own forward/backward volume math, not a blog headline.", {
    quickVerdictParagraphs: [
      "Both target businesses that outgrew simplistic flat-rate marketing but do not want opaque ISO statements. Helcim leads with interchange-plus clarity; Stax leads with subscription-style platform fees plus pass-through interchange.",
      "Seasonal trades must model slow months: a membership fee that feels cheap in August may sting in February if truck rolls drop.",
      "Neither is a magic replacement for operations—chargebacks, refund policies, and job documentation still determine how much you keep.",
      "Interchange-plus savings evaporate when teams key cards carelessly or skip AVS—operational discipline is as important as picking Helcim over Stax.",
      "BeltStack cannot see your quotes, hardware leases, or risk tier. Treat this page as a decision checklist; your signed agreement and first full statement cycle validate the economics.",
    ],
    decisionGuideA: [
      "You want transparent interchange-plus statements without enterprise sales friction.",
      "Your tickets are large enough that basis points matter.",
      "You prefer a modern self-serve merchant experience.",
      "You will review statements monthly and coach staff on card-present vs keyed behavior.",
    ],
    decisionGuideB: [
      "Monthly volume is steady and high enough to amortize a platform fee.",
      "You like predictable software-style billing for finance planning.",
      "You will re-run math quarterly as volume shifts.",
      "Your finance team wants a fixed platform line item for budgeting even when ticket sizes swing modestly.",
    ],
    featureComparison: [
      { feature: "Pricing transparency", productA: "Interchange-plus focus", productB: "Membership + interchange", supportA: "supported", supportB: "supported" },
      { feature: "Virtual terminal / invoicing", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
      { feature: "Developer APIs vs all-in-one", productA: "Competitive modern stack", productB: "Operations-first", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Helcim typically prices as interchange plus a disclosed processor markup. Stax adds a monthly platform (membership) fee to pass-through interchange. On top of either model, include hardware, chargebacks, refunds, and any PCI or support fees. Low-volume months affect Stax more because the platform fee is fixed—model a slow season before you commit. Ask both vendors for a written fee schedule or sample statement for your expected volume.",
    prosConsA: {
      pros: [
        "Clear interchange-plus positioning",
        "Strong fit for finance-minded owners",
        "Modern dashboard experience",
        "Straightforward story when you want markup separated from network cost on each statement",
      ],
      cons: [
        "Less consumer brand recognition at checkout",
        "Still requires statement literacy",
        "Savings depend on card mix and entry method—lazy keyed habits erase the benefit",
      ],
    },
    prosConsB: {
      pros: [
        "Predictable monthly platform component",
        "Can win at sustained volume",
        "Useful when multi-location owners want one membership line across branches",
      ],
      cons: [
        "Seasonal dips may invert economics",
        "Still need interchange literacy to audit statements",
        "Slow months can make the platform fee feel expensive relative to gross if volume collapses",
      ],
    },
    bestFor: [
      {
        heading: "Best for interchange-plus without a membership",
        body: "Helcim is the better fit when you want transparent markup on statements and are willing to review interchange categories monthly. Stax is the better fit when steady card volume makes a fixed platform fee plus interchange attractive on a forward budget.",
      },
      {
        heading: "Best for predictable monthly platform pricing",
        body: "Stax is the better fit when finance wants a standing platform line item and volume stays relatively even year-round.",
      },
      {
        heading: "Best for seasonal businesses",
        body: "If revenue swings sharply by month, stress-test slow months: a membership-style fee can dominate gross when volume drops—Helcim’s variable-heavy shape may be easier to weather, but only your exports confirm it.",
      },
    ],
    alternatives: [
      altCard("stripe", "Online-first programmable stack when APIs and Billing lead"),
      altCard("square", "Simple flat-rate field bundle when crews need readers tomorrow"),
    ],
    faqs: [
      { q: "Is interchange-plus always cheaper?", a: "No—micro-tickets and high refund rates can favor flat bundles. Model empirically." },
      { q: "What is the cheapest processor?", a: "Whichever produces the lowest net deposits for your actual mix after all fees and losses." },
      {
        q: "How do I compare Helcim vs Stax fairly?",
        a: "Build a spreadsheet: platform fee (Stax) vs markup-only (Helcim), plus identical interchange assumptions, then plug in your last quarter’s volume and refunds. If you cannot get identical assumptions, compare first-month statements after go-live with a pilot location.",
      },
      {
        q: "Does BeltStack receive kickbacks from Helcim or Stax?",
        a: "No pay-for-placement on this comparison. We may use general affiliate links elsewhere on the site; they do not determine this analysis.",
      },
    ],
    sidebarWinners: [
      { label: "Straight interchange-plus UX", winner: "A" },
      { label: "Membership economics at volume", winner: "B" },
    ],
  }),
  build("shopify-payments-vs-stripe", "shopify", "stripe", "Shopify Payments keeps Shopify checkout native; Stripe powers custom stacks when Shopify is not your commerce core—total cost must include Shopify subscription and apps, and both options require matching Shopify’s business and product policies where applicable.", {
    quickVerdictParagraphs: [
      "If you run a real Shopify store—parts, memberships, deposits through the cart—Shopify Payments reduces middleware and keeps refunds/payouts in one admin. If your site is Webflow, WordPress, or custom, Stripe is the natural processor spine.",
      "Comparing them head-to-head only makes sense when both can apply. If you are not on Shopify, this comparison is a signal to evaluate Shopify vs your current web stack, not only payments.",
      "Service businesses experimenting with ecommerce should align payout reporting with accounting early—two gateways means two reconciliation loops.",
      "Shopify’s acceptable-use and category rules can pause payouts if SKUs or fulfillment models drift out of policy—Stripe does not remove compliance obligations, but the enforcement surface differs when Shopify is the platform of record.",
      "We do not have access to your Shopify plan tier, app stack, or Stripe Radar configuration. Compare net deposits after subscription and app fees, not only the processing percentage row.",
    ],
    decisionGuideA: [
      "You sell through Shopify today and want native checkout.",
      "You want payouts and disputes inside Shopify admin.",
      "You are not planning a parallel custom gateway unless required.",
      "Your team already lives in Shopify for orders, inventory, and customer records daily.",
    ],
    decisionGuideB: [
      "Your storefront is custom or headless.",
      "You need Stripe Connect or multi-party payouts.",
      "Developers already standardized on Stripe APIs outside Shopify.",
      "You are not willing to center commerce operations inside Shopify admin long term.",
    ],
    featureComparison: [
      { feature: "Shopify-native checkout", productA: "Built-in", productB: "Requires integration", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Custom web / headless", productA: "Not applicable off Shopify", productB: "Core", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Subscriptions", productA: "Shopify apps + Billing", productB: "Stripe Billing", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Shopify Payments processing rates depend on your Shopify plan and whether the sale is online or in-person (POS). Stripe charges percentage-plus-fixed processing plus separate fees when you use Billing, Terminal, instant payout, or other add-ons. Any fair comparison to Stripe must include your full Shopify subscription and the apps you rely on—not only the processing row. Confirm current rates and eligibility in each vendor’s documentation for your region.",
    prosConsA: {
      pros: [
        "Less gateway fragmentation for Shopify merchants",
        "Operational simplicity for small teams",
        "Cohesive refunds and payouts",
        "Single admin for merchandising and payment exceptions when Shopify is already central",
      ],
      cons: [
        "Not the path if you are not committed to Shopify commerce",
        "Policy and business category restrictions apply",
        "Replatforming away from Shopify later means replatforming payments—not a casual switch",
      ],
    },
    prosConsB: {
      pros: [
        "Maximum flexibility outside Shopify",
        "Deep APIs for custom flows",
        "Global product breadth",
        "Natural fit when field software or custom portals—not Shopify—own customer records",
      ],
      cons: [
        "You own more integration glue",
        "POS + online unification may require Terminal + software choices",
        "More surfaces to secure and test as you add webhooks and custom checkout",
      ],
    },
    bestFor: [
      {
        heading: "Best for merchants on Shopify",
        body: "Shopify Payments is the better fit when checkout and payouts should stay inside Shopify and the cart is already your system of record. Stripe is the better fit when your storefront or software stack is not Shopify-centered and you need a programmable gateway elsewhere.",
      },
      {
        heading: "Best for custom websites and APIs",
        body: "Stripe is the better fit when developers own checkout outside Shopify, you need Stripe Billing or Connect, or you are not willing to run commerce through Shopify long term.",
      },
      {
        heading: "Best for total cost of ownership",
        body: "Compare Shopify plan plus apps plus processing against your full Stripe stack (processing plus any Billing, Terminal, or payout fees). The cheaper processing percentage rarely tells the whole story.",
      },
    ],
    alternatives: [
      altCard("square", "Retail + field hardware when vans swipe outside Shopify"),
      altCard("paypal", "Wallet checkout for remote buyers who stall on card-only pages"),
    ],
    faqs: [
      { q: "Can I use Stripe inside Shopify?", a: "Shopify allows alternate gateways in some cases—check current Shopify rules and whether Shopify Payments is available in your region." },
      { q: "Which has lower fees?", a: "Depends on plan, card mix, and refunds—export both statements and compare net deposits." },
      {
        q: "Why does BeltStack say to include Shopify subscription in TCO?",
        a: "Processing percentage is only one line. Many merchants under-count apps and plan upgrades; for a fair Stripe vs Shopify Payments comparison, model what you actually pay Shopify each month plus what you would pay to host and maintain a non-Shopify site.",
      },
      {
        q: "Is this comparison legal or tax advice?",
        a: "No—it is software fit and workflow guidance. Sales tax, nexus, and contract terms need your accountant and attorneys; payment choice should align with their recommendations.",
      },
    ],
    sidebarWinners: [
      { label: "Shopify merchants", winner: "A" },
      { label: "Non-Shopify web stacks", winner: "B" },
    ],
  }),
  build("stripe-vs-helcim", "stripe", "helcim", "Stripe is the programmable online spine—Billing, Connect, and custom checkout; Helcim is interchange-plus acquiring with a modern portal when statement clarity matters more than API depth. Neither removes dispute work; both need effective-rate math from your exports.", {
    quickVerdictParagraphs: [
      "Choose Stripe when developers or agencies own checkout, subscriptions, and webhooks. Choose Helcim when finance wants transparent interchange-plus and you are willing to coach staff on card-present vs keyed behavior.",
      "Large-ticket service deposits can make Helcim’s markup story attractive, but Stripe Terminal and card-present discipline can narrow the gap—run parallel math on identical job cohorts.",
      "If you are migrating off a flat-rate bundle, Helcim is often the clearer ‘second processor’ experiment; if you are building software-led flows, Stripe is usually the default spine.",
      "Contractors and trades: deposits taken by Payment Link or customer portal usually map cleanly to Stripe; final balances swiped on site may still live on Square or Stripe Terminal—decide whether one spine or split rails matches how your office actually tags jobs in accounting.",
      "Experience signal from the field: teams that churn between processors often skipped AVS/CVV discipline or never exported three months of transactions tagged CP vs CNP vs keyed. Fix data hygiene first; then the Helcim vs Stripe spreadsheet tells the truth.",
      "BeltStack does not see your Helcim quote or Stripe Radar configuration—reserves, risk tiers, and add-on line items still belong in your spreadsheet. Use this page to brief your bookkeeper and each vendor’s rep; it is not a substitute for underwriting or tax advice.",
    ],
    decisionGuideA: [
      "Custom checkout, Billing, or Connect is on the roadmap.",
      "You need test environments, idempotent APIs, and server-side confirmation.",
      "Online and software-led channels dominate revenue.",
      "You want one system to own dunning, retries, and subscription lifecycle for maintenance plans.",
    ],
    decisionGuideB: [
      "Average tickets are high enough that basis points move real dollars.",
      "You will read statements monthly and question downgrades.",
      "You want interchange-plus without legacy ISO paperwork.",
      "Your office is willing to reconcile interchange lines and coach techs on chip vs keyed entry.",
    ],
    heroCallouts: [
      { label: "API + Billing depth", winner: "A", reason: "Stripe’s core is developer-first payments and recurring products." },
      { label: "Interchange-plus transparency", winner: "B", reason: "Helcim centers disclosed markup and statement literacy." },
      { label: "Subscriptions / dunning depth", winner: "A", reason: "Stripe Billing is built for retries, proration, and plan changes when memberships are core." },
    ],
    featureComparison: [
      { feature: "Custom checkout + APIs", productA: "Industry-leading", productB: "Competitive SMB", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Interchange-plus statements", productA: "Not the default story", productB: "Core positioning", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Subscriptions / recurring", productA: "Stripe Billing", productB: "Available", supportA: "supported", supportB: "supported", stronger: "A" },
      { feature: "Card-present / readers", productA: "Terminal (add-on)", productB: "Supported", supportA: "supported", supportB: "supported" },
      { feature: "Connect / marketplace payouts", productA: "Native product surface", productB: "Not the typical Helcim entry path", supportA: "supported", supportB: "partial", stronger: "A" },
    ],
    pricingComparison:
      "Stripe charges percentage-plus-fixed processing plus optional fees for Checkout, Billing, Terminal, instant payout, and currency conversion where you use them. Helcim typically charges interchange plus a disclosed markup. Compare total net deposits after refunds, disputes, and any hardware or PCI fees—not headline rates. Export several months of transactions split by card-present versus online versus keyed before you switch; large tickets often favor interchange-plus only if entry methods stay disciplined.",
    prosConsA: {
      pros: [
        "Deep APIs and hosted checkout options when the web owns revenue",
        "Stripe Billing for memberships, tune-ups, and installment-style service plans",
        "Strong fraud and issuer tooling as volume and CNP share grow",
        "Natural single spine when CRM, portal, or custom software triggers charges",
      ],
      cons: [
        "Feature depth can sprawl—someone must own webhooks, tests, and edge cases",
        "In-person is capable via Terminal but not the default SMB onboarding story",
        "Interchange-plus shoppers may still benchmark Helcim or ISO quotes separately",
      ],
    },
    prosConsB: {
      pros: [
        "Transparent interchange-plus narrative for finance-led owners",
        "Modern merchant dashboard compared with legacy ISO portals",
        "Strong fit when average tickets reward basis-point discipline and clean entry methods",
      ],
      cons: [
        "Less consumer brand recognition at checkout than household wallets",
        "Savings erode if crews key cards or skip AVS—operations matter as much as rates",
        "May not replace Stripe-class Billing APIs if subscriptions are core to the product",
      ],
    },
    bestFor: [
      {
        heading: "Best for software-led online revenue",
        body: "Stripe is the better fit when custom checkout, Billing, APIs, or Terminal are central to how you take payment. Helcim is the better fit when finance wants interchange separated from markup and average tickets reward basis-point discipline.",
      },
      {
        heading: "Best for transparent interchange-plus",
        body: "Helcim is the better fit when you will read statements monthly, coach chip versus keyed behavior, and negotiate renewals with exported data—not homepage rates.",
      },
      {
        heading: "Best for apples-to-apples cost math",
        body: "Pull the same date range from Stripe (including every product line item) and a Helcim quote for identical volume assumptions, then compare net deposits. Marketing percentages are not your effective rate.",
      },
    ],
    alternatives: [altCard("square", "Flat-rate field bundle when crews need readers fast"), altCard("stax", "Membership + interchange when volume is steady")],
    faqs: [
      { q: "Is Helcim cheaper than Stripe?", a: "Sometimes on large-ticket mixes—compute effective rate (total fees ÷ gross volume) from your statements, not marketing pages." },
      { q: "Can I use Stripe and Helcim together?", a: "Possible but doubles reconciliation; only split rails with a documented finance rule and job-level tagging in your accounting system." },
      { q: "Stripe vs Helcim for chargebacks?", a: "Both require documentation: signed scopes, photos, messages, and estimate numbers. The processor changes tooling—not your evidence standard." },
      { q: "What should I export before switching?", a: "At least 90 days tagged by card-present, online, and keyed, plus chargeback count, payout lag, and any Billing line items. Card-on-file migration needs a technical cutover plan and customer consent." },
      { q: "Is this comparison legal or tax advice?", a: "No—software fit and workflow guidance only. Your accountant and each vendor’s agreement govern tax treatment, reserves, and contract terms." },
    ],
    sidebarWinners: [
      { label: "Developer-led stacks", winner: "A" },
      { label: "Statement-transparent acquiring", winner: "B" },
    ],
  }),
  build("stripe-vs-stax", "stripe", "stax", "Stripe optimizes programmable online money movement; Stax pairs a membership-style platform fee with pass-through interchange—seasonal trades should model slow months before treating Stax like ‘cheaper Stripe.’", {
    quickVerdictParagraphs: [
      "Stripe wins when APIs, Billing, and custom checkout are non-negotiable. Stax wins when steady volume amortizes a monthly platform line and finance likes predictable software-style billing.",
      "August-heavy HVAC shops can look brilliant on Stax in peak season and painful in February—run forward models with conservative truck-roll counts.",
      "Stripe’s add-ons are line-item visible; Stax’s membership is a single number—both need net-deposit math after refunds.",
      "If you sell deposits online but collect final balances in the field, decide whether one processor spine (Stripe + Terminal) or split rails is worth the reconciliation tax—Stax does not remove that design question.",
      "Experience signal: membership processors reward operators who spreadsheet monthly platform fee ÷ volume every quarter. Stripe rewards teams that catalog which products (Billing, Radar, instant payout) actually hit the P&L.",
      "We do not underwrite either account; holds and reserves follow your category and history regardless of brand. Confirm payout timing and dispute workflows in writing before you cut over card-on-file.",
    ],
    decisionGuideA: [
      "You are building or maintaining custom web checkout.",
      "Subscriptions and retries matter to your service contracts.",
      "Developers already operate your payment integration.",
      "You need Connect, multi-party payouts, or global methods beyond a typical SMB bundle.",
    ],
    decisionGuideB: [
      "Monthly processing volume is relatively stable.",
      "You want a fixed platform component for budgeting.",
      "Interchange pass-through plus membership fits your finance style.",
      "Your CFO prefers interchange visibility over bundled flat-rate storytelling.",
    ],
    heroCallouts: [
      { label: "API + product breadth", winner: "A", reason: "Stripe’s surface area targets software-led merchants." },
      { label: "Membership + interchange model", winner: "B", reason: "Stax centers platform fee plus pass-through costs." },
      { label: "Spiky / seasonal revenue", winner: "A", reason: "Stripe does not layer a fixed membership fee that stings when winter truck rolls pause—Stax needs explicit low-month modeling." },
    ],
    featureComparison: [
      { feature: "Custom web + APIs", productA: "Very strong", productB: "Operations-first", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Membership platform fee", productA: "Not the model", productB: "Core", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Virtual terminal / invoicing", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
      { feature: "Instant payout / cash-flow add-ons", productA: "Line-item options", productB: "Confirm in your quote", supportA: "supported", supportB: "partial", stronger: "A" },
    ],
    pricingComparison:
      "Stripe bills percentage-plus-fixed processing plus fees for products you turn on, such as Billing, Terminal, and instant payout. Stax bills a monthly platform fee plus pass-through interchange. Add chargebacks, refunds, and cross-border costs to both models. Seasonal businesses should weight slow months heavily: a fixed membership fee hurts more when volume drops. Confirm every line item in writing before you compare the two stacks.",
    prosConsA: {
      pros: [
        "Maximum flexibility for online flows and custom software",
        "Billing and developer tooling depth for recurring service revenue",
        "Add-ons are explicit—easier to attribute cost to product lines in accounting",
      ],
      cons: [
        "Per-feature costs accumulate without an owner watching the dashboard",
        "Interchange-plus or membership shoppers may still benchmark Stax or Helcim",
        "In-person is strong via Terminal but requires deliberate rollout",
      ],
    },
    prosConsB: {
      pros: [
        "Predictable monthly platform line for budgets",
        "Can win at sustained, even volume versus flat-rate bundles",
        "Pass-through interchange helps when auditors want cost separation",
      ],
      cons: [
        "Slow seasons can make membership feel expensive versus gross",
        "Less natural when revenue is lumpy project-by-project",
        "Does not replace Stripe-class APIs if software is the product",
      ],
    },
    bestFor: [
      {
        heading: "Best for custom checkout and Billing",
        body: "Stripe is the better fit when APIs, hosted checkout, subscriptions, and developer tooling are non-negotiable. Stax is the better fit when steady processing volume makes membership plus interchange the winning economic shape on a full-year model.",
      },
      {
        heading: "Best for membership-style processing",
        body: "Stax is the better fit when finance wants a predictable monthly platform line plus interchange visibility and your volume does not collapse in off-seasons.",
      },
      {
        heading: "Best for seasonal revenue",
        body: "Stripe avoids a standing membership fee; if your card volume is highly seasonal, model your lowest months before you choose Stax—fixed fees can dominate gross when jobs pause.",
      },
    ],
    alternatives: [altCard("helcim", "Straight interchange-plus without membership framing"), altCard("square", "Simple SMB field + invoice bundle")],
    faqs: [
      { q: "Stax vs Stripe for contractors?", a: "Stripe when web deposits and integrations lead; Stax when finance wants membership + interchange and volume is steady year-round." },
      { q: "What is cheaper?", a: "Net deposits after refunds and disputes—export both paths on identical job cohorts before you decide." },
      { q: "Can I use Stripe Billing with Stax for processing?", a: "Uncommon as a default architecture—usually you pick one acquiring spine. If you think you need both, involve a payments engineer and your accountant before you double complexity." },
      { q: "Does BeltStack get kickbacks for recommending Stripe or Stax?", a: "No pay-for-placement on comparisons. General affiliate links may exist elsewhere on the site; they do not change this analysis." },
    ],
    sidebarWinners: [
      { label: "Custom software stacks", winner: "A" },
      { label: "Steady-volume membership economics", winner: "B" },
    ],
  }),
  build("stripe-vs-clover", "stripe", "clover", "Stripe powers custom online checkout and Terminal when you control the stack; Clover leads with counter-first hardware, apps, and reseller-bundled processing—compare ISO quotes and contract terms, not only logos.", {
    quickVerdictParagraphs: [
      "Stripe is the default when headless web, Billing, or multi-party payouts matter. Clover fits showrooms, parts counters, and staff who live on fixed terminals—less so for pure van-only crews unless you standardize handheld Clover deliberately.",
      "Clover pricing often flows through resellers; two neighbors can see different effective rates. Stripe’s published grids are clearer but still not your statement.",
      "Hybrid stacks exist (Clover in the office, Stripe online)—budget reconciliation and train staff on which link or terminal to use per job phase.",
      "Service businesses with a parts desk sometimes standardize Clover at the counter and Stripe for website deposits; success depends on whether accounting can tie each payment to a job ID without weekly forensic work.",
      "For in-person checkout depth without ISO shopping, many trades still compare Square or Shopify POS—see our POS software hub when the decision is really register-first, not gateway-first.",
      "Editorial limit: we cannot see your ISO agreement or Stripe reserve settings—validate cash-flow impact, equipment leases, and early termination before you cut over.",
    ],
    decisionGuideA: [
      "Online checkout and APIs drive most revenue.",
      "You need Billing, Connect, or custom decline handling.",
      "Developers maintain your payment integration.",
      "You want direct vendor relationships with fewer reseller intermediaries.",
    ],
    decisionGuideB: [
      "Counter and retail-adjacent workflows dominate.",
      "You want an app marketplace on fixed devices.",
      "You will compare multiple ISO quotes and read termination clauses.",
      "Staff need tactile terminal workflows for tips, modifiers, or light inventory.",
    ],
    heroCallouts: [
      { label: "Custom online + APIs", winner: "A", reason: "Stripe’s core is programmable card acceptance." },
      { label: "Counter hardware + apps", winner: "B", reason: "Clover targets fixed-location POS depth." },
      { label: "Quote transparency (direct)", winner: "A", reason: "Stripe sells direct; Clover often prices through ISOs—compare written effective rates, not brochures." },
    ],
    featureComparison: [
      { feature: "Custom web checkout", productA: "Core", productB: "Not the focus", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Terminal / POS ecosystem", productA: "Terminal add-on", productB: "Hardware-forward", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Reseller variability", productA: "Low (direct)", productB: "High (ISO)", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Cards on file / CIM", productA: "Strong (Stripe objects)", productB: "Varies by integration", supportA: "supported", supportB: "partial", stronger: "A" },
    ],
    pricingComparison:
      "Stripe sells direct with published percentage-plus-fixed rates plus optional fees for Terminal, Billing, instant payout, and similar add-ons. Clover pricing usually comes through resellers and bundles hardware, software, and processing—compare written effective rate, contract length, equipment buyout, and any reserve language, not brochure pricing alone. Terminal sticker price is only one line; total cost and termination terms matter more for Clover.",
    prosConsA: {
      pros: [
        "Deep online tooling and hosted checkout when the site converts",
        "Terminal path when the rest of the stack is already Stripe-native",
        "Less reseller variance than typical ISO-led Clover deals",
      ],
      cons: [
        "Counter app marketplace depth differs from Clover’s device-centric model",
        "Custom flows need technical ownership and test discipline",
        "Heavy retail may still warrant a dedicated POS evaluation",
      ],
    },
    prosConsB: {
      pros: [
        "Strong fixed-location UX and staff muscle memory on terminals",
        "App marketplace for tips, loyalty, and light inventory extensions",
        "Popular when showrooms and parts counters—not vans—set the tone",
      ],
      cons: [
        "ISO quote variance and contract terms need legal and finance review",
        "Less natural for headless ecommerce or Connect-style payouts",
        "Pure mobile-first crews may overbuy hardware without a plan",
      ],
    },
    bestFor: [
      {
        heading: "Best for programmable online checkout",
        body: "Stripe is the better fit when the website, Billing, and APIs drive revenue and you want a direct relationship with one payments vendor. Clover is the better fit when fixed-location terminals, POS apps, and reseller-led hardware packages define how you take payment.",
      },
      {
        heading: "Best for counter POS and reseller bundles",
        body: "Clover is the better fit when staff work on dedicated terminals, you need Clover’s app marketplace, and you are willing to compare multiple ISO quotes and read contract terms carefully.",
      },
      {
        heading: "Best for comparing quotes",
        body: "Get parallel written quotes for the same volume and card mix. Stripe’s grid is easier to benchmark nationally; Clover’s all-in cost lives in the ISO package—compare net cost to your bank, not logos.",
      },
    ],
    alternatives: [altCard("square", "National SMB packaging when you want simpler hardware onboarding"), altCard("helcim", "Interchange-plus when statements matter more than terminals")],
    faqs: [
      { q: "Clover vs Stripe for small business?", a: "Clover for counter-first retail and reseller device packages; Stripe for custom online, Billing, and software integrations." },
      { q: "Why do Clover quotes differ?", a: "ISOs bundle hardware subsidies and rates differently—compare effective rate and contract length in writing from at least three sources." },
      { q: "Can I run Stripe and Clover together?", a: "Yes, but dual rails increase reconciliation load—tag payments by job in your accounting system and train staff on when to use each." },
      { q: "Does Stripe replace a full POS?", a: "Terminal covers many card-present cases; complex kitchen, course, or multi-register retail may still need POS software—see our POS hub." },
    ],
    sidebarWinners: [
      { label: "Online / API-led", winner: "A" },
      { label: "Counter + reseller POS", winner: "B" },
    ],
  }),
  build("square-vs-helcim", "square", "helcim", "Square keeps flat-rate simplicity for crews, invoices, and readers; Helcim rewards owners who read interchange-plus statements—high average tickets can flip the economics if keyed volume stays disciplined.", {
    quickVerdictParagraphs: [
      "Square wins onboarding speed for trucks and offices that want one recognizable brand. Helcim wins when finance insists on separated network cost and markup on every statement line.",
      "If your team keys cards from the office daily, Helcim’s spread can shrink—operational habits matter as much as processor choice.",
      "Many trades outgrow ‘simple’ flat rate on paper but still value Square’s hardware story—pilot Helcim on a subset of CNP deposits before you rip out readers.",
      "Pair either choice with invoicing discipline: processors move money; line-item estimates and job IDs still live in your invoicing or field software—our invoicing hub lists tools that pair well with card-present workflows.",
      "Experience signal: owners who only compare homepage percentages miss instant transfer, software tiers, and AMEX share. Export Square’s full fee column before you declare Helcim the winner.",
      "We do not see your chargeback ratio or instant-transfer habits—both change net cash more than headline percentages. This comparison is educational, not underwriting.",
    ],
    decisionGuideA: [
      "Field swipes and quick invoices are daily work.",
      "You want retail-friendly hardware paths without ISO shopping.",
      "Owners need a simple operational story for staff training.",
      "You value same-day reader replacement stories and a single consumer brand for crews.",
    ],
    decisionGuideB: [
      "Tickets are large enough that basis points are visible monthly.",
      "You will audit statements and coach entry methods.",
      "You want interchange-plus without enterprise sales friction.",
      "Finance wants to see interchange, assessments, and markup as separate lines for renewals.",
    ],
    heroCallouts: [
      { label: "Fast SMB field rollout", winner: "A", reason: "Square targets mobile and counter simplicity." },
      { label: "Interchange-plus clarity", winner: "B", reason: "Helcim emphasizes disclosed markup on statements." },
      { label: "Keyed / CNP discipline", winner: "B", reason: "Interchange-plus savings depend on clean entry—lazy keyed habits erase the spread." },
    ],
    featureComparison: [
      { feature: "Mobile card-present", productA: "Core strength", productB: "Supported", supportA: "supported", supportB: "supported", stronger: "A" },
      { feature: "Flat-rate simplicity", productA: "Default narrative", productB: "Not the positioning", supportA: "supported", supportB: "none", stronger: "A" },
      { feature: "Statement transparency", productA: "Bundled flat", productB: "Interchange-plus focus", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Online invoice / pay links", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Square charges processing that varies by card-present, keyed, and online entry, plus optional software subscriptions, team features, and instant-transfer fees. Helcim typically charges interchange plus a disclosed markup. Compare net deposits on the same 90 days of volume, split by how cards were entered, and include every Square add-on you actually use. Keyed-heavy habits can erase Helcim’s spread—your statement tells the truth.",
    prosConsA: {
      pros: [
        "All-in-one story for local operators and small crews",
        "Hardware ecosystem and retail purchase paths staff already recognize",
        "Fast time-to-swipe with minimal gateway vocabulary",
      ],
      cons: [
        "Flat rate may cost money at very high average tickets or heavy CNP",
        "Keyed-heavy mixes need office discipline or effective rate drifts upward quietly",
        "Deep custom ecommerce may still push Stripe for API reasons",
      ],
    },
    prosConsB: {
      pros: [
        "Transparent interchange-plus for finance-led operators",
        "Strong when renewals are negotiated with statement data, not anecdotes",
        "Modern portal experience versus legacy ISO PDFs",
      ],
      cons: [
        "Less instant brand recognition in the field for some crews",
        "Savings require monthly review and staff coaching on entry methods",
        "Not a magic fix if operations skip AVS/CVV or default to keyed",
      ],
    },
    bestFor: [
      {
        heading: "Best for fast field rollout and simple operations",
        body: "Square is the better fit when crews need readers and invoices quickly, you want a single recognizable brand for hardware, and flat-rate-style pricing is easier for the office to explain. Helcim is the better fit when tickets are large enough that basis points matter and finance will audit statements monthly.",
      },
      {
        heading: "Best for interchange-plus discipline",
        body: "Helcim is the better fit when you want interchange separated from markup on the statement and are willing to coach chip versus keyed behavior so savings show up in deposits.",
      },
      {
        heading: "Best for true cost comparison",
        body: "Include Square software, instant transfer, and keyed share in your model before you declare a winner—Square’s headline rate is not always your effective rate, and Helcim does not fix sloppy entry methods.",
      },
    ],
    alternatives: [altCard("stripe", "Custom web + Billing when the site owns deposits"), altCard("stax", "Membership + interchange at steady volume")],
    faqs: [
      { q: "Square or Helcim for HVAC?", a: "Square when crews swipe most revenue; Helcim when large CNP deposits dominate and you will manage downgrades and interchange categories." },
      { q: "Is interchange-plus always cheaper?", a: "No—micro-tickets, refunds, and sloppy keyed habits can erase the benefit versus a flat bundle." },
      { q: "Can I negotiate Square rates?", a: "Some high-volume merchants do—ask account management and compare any new offer to Helcim in writing." },
      { q: "What is effective rate?", a: "Total processing costs divided by gross card volume for the same period—use it to compare Square bundles to Helcim on equal footing." },
    ],
    sidebarWinners: [
      { label: "Field + invoice simplicity", winner: "A" },
      { label: "Interchange-plus transparency", winner: "B" },
    ],
  }),
  build("square-vs-stax", "square", "stax", "Square leads with flat-rate field and invoice workflows; Stax targets merchants who want membership plus pass-through interchange—model seasonality before you trade Square’s simplicity for Stax’s platform line.", {
    quickVerdictParagraphs: [
      "Square is the conservative pick when crews need readers this week and finance tolerates flat-rate economics. Stax deserves a spreadsheet when monthly volume is predictable and you want interchange separated from markup.",
      "Seasonal trades: Stax’s membership can invert in slow months—compare February, not only August.",
      "Square’s software tiers and instant transfers are real costs; Stax’s membership is a real cost—neither is ‘just the percentage.’",
      "If you are also comparing interchange-only models, read Helcim vs Stax—Square vs Stax is specifically flat bundle vs membership pass-through.",
      "Experience signal: multi-location owners sometimes pick Stax to standardize one membership line across branches; single-truck operators often stay on Square until volume justifies finance overhead.",
      "BeltStack cannot price your risk tier—ask both vendors for written quotes tied to your actual mix, refunds, and chargebacks.",
    ],
    decisionGuideA: [
      "You prioritize fast operational wins in the field.",
      "You want one consumer-friendly brand for hardware swaps.",
      "Flat-rate mental models help your office staff.",
      "You need minimal finance overhead to explain processing to new hires.",
    ],
    decisionGuideB: [
      "Volume is steady enough to amortize a platform fee.",
      "Finance wants pass-through interchange visibility.",
      "You will re-run the model quarterly as mix shifts.",
      "Multi-branch card volume consolidates cleanly under one processor story.",
    ],
    heroCallouts: [
      { label: "SMB field + POS simplicity", winner: "A", reason: "Square’s story starts with swipes and invoices." },
      { label: "Membership + interchange", winner: "B", reason: "Stax pairs platform fee with pass-through costs." },
      { label: "Winter / slow-season risk", winner: "A", reason: "Square has no standing membership fee that bites when jobs pause—still model instant transfer and software." },
    ],
    featureComparison: [
      { feature: "Mobile readers / field", productA: "Core", productB: "Varies", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Membership pricing", productA: "No", productB: "Yes", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Invoicing / pay links", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
      { feature: "Multi-location standardization", productA: "Strong SMB story", productB: "Often pitched for steady multi-site volume", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Square charges variable processing plus optional software, instant payout, and team features—model the add-ons you actually pay. Stax charges a monthly platform fee plus pass-through interchange, plus equipment and any PCI fees. If revenue is project-based or seasonal, stress-test months when volume drops: Stax’s fixed platform line still applies. Compare net deposits to your bank, not marketing tiers alone.",
    prosConsA: {
      pros: [
        "Fast crew onboarding and recognizable hardware retail paths",
        "Cohesive SMB operations story without membership math",
        "Strong invoicing and pay links for deposits and balances",
      ],
      cons: [
        "No membership-style pass-through story for finance purists",
        "High-ticket CNP may still deserve an interchange-plus benchmark",
        "Software and instant transfer fees need explicit budgeting",
      ],
    },
    prosConsB: {
      pros: [
        "Predictable platform component for multi-month forecasting",
        "Pass-through interchange visibility for audits and renewals",
        "Can beat flat bundles when volume is steady and well modeled",
      ],
      cons: [
        "Seasonal dips can invert economics versus Square’s variable-only stack",
        "Less ‘buy a reader today’ simplicity for smallest crews",
        "Still requires statement literacy—membership is not all-in pricing",
      ],
    },
    bestFor: [
      {
        heading: "Best for simple field and SMB operations",
        body: "Square is the better fit when you want pay-as-you-go processing without a standing membership fee and need readers and invoices live quickly. Stax is the better fit when stable volume makes a monthly platform fee plus interchange the cheaper shape on paper over a full year.",
      },
      {
        heading: "Best for membership plus interchange",
        body: "Stax is the better fit when finance wants a fixed platform component each month and card volume stays relatively even quarter to quarter.",
      },
      {
        heading: "Best for slow seasons",
        body: "Highly seasonal businesses should model lowest-volume months before choosing Stax—membership economics sting when gross drops but the platform fee does not.",
      },
    ],
    alternatives: [altCard("helcim", "Interchange-plus without a membership frame"), altCard("stripe", "Online spine when APIs matter")],
    faqs: [
      { q: "Stax or Square for contractors?", a: "Square when vans swipe daily; Stax when stable volume and finance want membership + interchange with quarterly repricing discipline." },
      { q: "Is Stax always cheaper than Square?", a: "Not automatically—divide Stax’s platform fee by monthly volume to get a basis-point equivalent, add interchange, then compare to Square’s effective rate." },
      { q: "Can I switch back to Square after Stax?", a: "Usually yes, but watch contract termination, equipment leases, and card-on-file migration—plan a parallel month if possible." },
    ],
    sidebarWinners: [
      { label: "Field operations", winner: "A" },
      { label: "Steady-volume membership", winner: "B" },
    ],
  }),
  build("square-vs-clover", "square", "clover", "Square offers national SMB packaging for mobile readers and invoices; Clover doubles down on counter terminals, apps, and reseller bundles—your ISO quote and termination terms matter as much as feature checklists.", {
    quickVerdictParagraphs: [
      "Square is the default when trucks and quick office invoices drive revenue. Clover fits parts desks, showrooms, and staff who need fixed-terminal workflows with marketplace apps.",
      "Clover economics vary by reseller; Square’s pricing is more uniform but still not a substitute for your statement export.",
      "Some hybrid shops run Square in vans and Clover at the counter—only do this with labeled accounting rules and staff training.",
      "If your real question is full POS plus payments, also scan Shopify POS vs Clover and Lightspeed vs Clover—this page focuses on Square’s payments + POS bundle versus Clover’s device-led story.",
      "Experience signal: Clover wins evaluations when the demo spends time on peripherals, kitchen printers, and app tiles; Square wins when the buyer wants to swipe tomorrow and worry about apps later.",
      "We do not rank ISOs—if Clover is on your shortlist, interview references, read reserve clauses, and compare three written quotes before you standardize.",
    ],
    decisionGuideA: [
      "Mobile swipes and simple invoices are central.",
      "You want minimal reseller shopping to go live.",
      "You value national retail hardware familiarity for replacements.",
      "You may run mixed business types—retail, food, services—from one ecosystem.",
    ],
    decisionGuideB: [
      "Counter traffic, tips, or light inventory matter daily.",
      "You want Clover’s app marketplace on devices.",
      "You will negotiate ISO terms, equipment buyouts, and early termination.",
      "Staff need fixed-terminal workflows more than phone-only readers.",
    ],
    heroCallouts: [
      { label: "Mobile + national SMB packaging", winner: "A", reason: "Square targets field and quick setup." },
      { label: "Counter ecosystem + apps", winner: "B", reason: "Clover emphasizes fixed-location POS depth." },
      { label: "Pricing shopping friction", winner: "A", reason: "Square’s national story is easier to benchmark than ISO-by-ISO Clover variance." },
    ],
    featureComparison: [
      { feature: "Van / mobile-first", productA: "Strong", productB: "Handheld options exist", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Counter POS + apps", productA: "Strong", productB: "Very strong", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Pricing predictability", productA: "More uniform", productB: "ISO-dependent", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Gift cards / loyalty via apps", productA: "Add-ons and integrations", productB: "App Market depth", supportA: "supported", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "Square charges processing plus optional software and instant-transfer fees; published rates are relatively easy to benchmark nationally. Clover usually bundles hardware lease or purchase with ISO-set processing—compare written effective rate, early-termination fees, reserves, and equipment buyout across several quotes. Spread hardware cost over the contract life you expect to honor.",
    prosConsA: {
      pros: [
        "Fast path to field swipes and emailed invoices",
        "Simpler national story for small teams without ISO interviews",
        "Large integration catalog for accounting and scheduling",
      ],
      cons: [
        "Less counter app depth than Clover’s marketplace in some verticals",
        "Not a drop-in replacement for every ISO-led Clover bundle",
        "Complex retail supply chains may outgrow defaults",
      ],
    },
    prosConsB: {
      pros: [
        "Terminal-forward workflows staff can memorize",
        "App marketplace for tips, loyalty, scheduling, and inventory extensions",
        "Strong when hybrid retail + service counters—not vans—define the day",
      ],
      cons: [
        "Reseller variance can change onboarding and support quality block by block",
        "Contract and lease diligence required—sticker hardware prices mislead",
        "Pure van crews may overbuy fixed-terminal packages",
      ],
    },
    bestFor: [
      {
        heading: "Best for mobile-first and low-friction setup",
        body: "Square is the better fit when vans, quick invoices, and national SMB packaging matter more than counter app depth. Clover is the better fit when fixed terminals, tips, inventory-style apps, and ISO-led bundles match how the floor actually runs.",
      },
      {
        heading: "Best for counter POS and app extensions",
        body: "Clover is the better fit when you need Clover’s app marketplace on devices and will shop multiple ISO quotes for hardware and processing.",
      },
      {
        heading: "Best for shopping processors fairly",
        body: "Benchmark Square against your own statement; for Clover, compare at least three written ISO packages on the same volume assumptions—effective rate and contract terms vary block by block.",
      },
    ],
    alternatives: [altCard("stripe", "Custom online when the site—not the counter—owns revenue"), altCard("helcim", "Interchange-plus when statements beat terminal branding")],
    faqs: [
      { q: "Clover vs Square for retail?", a: "Clover when fixed terminals and apps are central; Square when simpler SMB retail plus mobile readers matters more." },
      { q: "Why do Clover quotes differ?", a: "ISOs bundle hardware subsidies, rates, and service packages differently—effective rate and termination terms must be compared in writing." },
      { q: "Square vs Clover for a parts counter?", a: "Parts counters with steady staff handoffs often lean Clover; mobile-heavy service models lean Square—demo inventory and return workflows." },
      { q: "Can I use both?", a: "Possible with discipline—label rails in accounting and train staff when to use each to avoid double-charging or mis-tagged jobs." },
    ],
    sidebarWinners: [
      { label: "Mobile + quick SMB setup", winner: "A" },
      { label: "Counter + app marketplace", winner: "B" },
    ],
  }),
  build("shopify-payments-vs-square", "shopify", "square", "Shopify Payments belongs inside a Shopify cart—parts, memberships, and deposits through admin; Square fits when trucks and counters collect most dollars and Shopify is not your commerce brain.", {
    quickVerdictParagraphs: [
      "If Shopify already runs your catalog, Shopify Payments reduces gateway fragmentation. If your truth is Square readers in vans, forcing Shopify Payments without a real cart strategy buys complexity.",
      "Mixed models (Shopify cart + Square swipes) are common—document which rail handles which job phase so payouts reconcile cleanly.",
      "Total cost must include Shopify subscription and apps, not only processing basis points.",
      "Search intent shortcut: if you typed ‘Shopify Payments vs Square,’ first confirm whether you mean online checkout, in-person POS, or both—this answer changes the winner.",
      "When ecommerce is Shopify but field work is Square, read Shopify Payments vs Stripe for the online fork and Square vs Shopify POS for register-level decisions on BeltStack.",
      "BeltStack does not see your Shopify plan tier, app stack, or Square keyed share—both change TCO and should be modeled from your own admin exports.",
    ],
    decisionGuideA: [
      "You sell through Shopify checkout today.",
      "You want payouts and disputes in Shopify admin.",
      "Cart revenue is meaningful, not a brochure-site sideshow.",
      "Staff already merchandises, refunds, and tracks inventory primarily in Shopify.",
    ],
    decisionGuideB: [
      "Field swipes and invoices dominate cash collection.",
      "You are not committed to Shopify as the commerce hub.",
      "You want hardware simplicity without Shopify subscription overhead.",
      "Your website is WordPress, Webflow, or custom—not a Shopify cart.",
    ],
    heroCallouts: [
      { label: "Native Shopify checkout", winner: "A", reason: "Payments stay inside Shopify operations." },
      { label: "Field + SMB hardware", winner: "B", reason: "Square targets mobile crews and counters." },
      { label: "TCO includes platform fees", winner: "A", reason: "Shopify Payments only makes sense when you already justify Shopify subscription + apps—do not ignore that row." },
    ],
    featureComparison: [
      { feature: "Shopify-native checkout", productA: "Built-in", productB: "Separate stack", supportA: "supported", supportB: "none", stronger: "A" },
      { feature: "Mobile readers / field", productA: "Shopify POS path", productB: "Core strength", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Custom non-Shopify web", productA: "Wrong tool", productB: "Viable", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Unified catalog web + store", productA: "Core advantage", productB: "Requires integrations", supportA: "supported", supportB: "partial", stronger: "A" },
    ],
    pricingComparison:
      "Shopify Payments rates depend on your Shopify plan and whether the transaction is online or through Shopify POS; you also pay Shopify subscription and any apps you rely on. Square charges processing that varies by card-present, keyed, and online paths, plus optional software and instant-transfer fees. Compare total monthly cost for the workflows you actually use—do not compare Shopify processing alone to Square if you are not already committed to Shopify’s platform fees.",
    prosConsA: {
      pros: [
        "Cohesive Shopify admin for orders, payouts, and disputes",
        "Less middleware when the cart is already Shopify",
        "Strong omnichannel story when POS and online share one catalog",
      ],
      cons: [
        "Requires Shopify commitment—TCO is not only processing",
        "Weak fit when the marketing site is not Shopify-centric",
        "Policy and category restrictions still apply—validate SKUs for deposits",
      ],
    },
    prosConsB: {
      pros: [
        "Strong field and invoice story without Shopify subscription",
        "National SMB hardware familiarity and fast crew onboarding",
        "Works when ecommerce is absent or lives on another platform",
      ],
      cons: [
        "Separate from Shopify cart if you run both—reconciliation overhead",
        "Custom ecommerce may still push Stripe for API depth",
        "Keyed CNP from the office still needs discipline on any processor",
      ],
    },
    bestFor: [
      {
        heading: "Best for Shopify cart and unified catalog",
        body: "Shopify Payments is the better fit when meaningful revenue runs through Shopify checkout and you want payouts and disputes in Shopify admin. Square is the better fit when field swipes and local invoices drive cash and you are not centered on Shopify as your commerce hub.",
      },
      {
        heading: "Best for field-first operations",
        body: "Square is the better fit when trucks and counters collect most payment and your website is secondary or lives on another platform.",
      },
      {
        heading: "Best for budgeting total cost",
        body: "Always include Shopify plan, POS add-ons, and apps beside processing; compare that full stack to Square processing plus any Square subscriptions you need for the same jobs.",
      },
    ],
    alternatives: [altCard("stripe", "Custom web spine outside Shopify"), altCard("paypal", "Wallet checkout on remote deposit pages")],
    faqs: [
      { q: "Can I use Square with Shopify?", a: "Possible in some setups—confirm current Shopify payment rules, regional availability, and whether native checkout is required for your plan." },
      { q: "Shopify Payments vs Square fees?", a: "Compare total cost: Shopify subscription + apps + processing versus Square processing + software—effective rate alone misleads if you ignore platform fees." },
      { q: "Which is better for contractors?", a: "Truck-heavy, invoice-heavy models often lean Square; parts-and-cart models on Shopify lean Shopify Payments—map where dollars actually enter." },
      { q: "Do I need both?", a: "Some hybrids do—only with written rules for which jobs use which rail and weekly reconciliation, not hope." },
    ],
    sidebarWinners: [
      { label: "Shopify merchants", winner: "A" },
      { label: "Field-first operations", winner: "B" },
    ],
  }),
  build("shopify-payments-vs-paypal", "shopify", "paypal", "Shopify Payments keeps card flow inside Shopify admin; PayPal adds wallet trust many homeowners recognize on remote links—some stacks enable both, but dual rails need reconciliation discipline.", {
    quickVerdictParagraphs: [
      "Inside Shopify, native payments simplify payouts and disputes versus bolting on extra gateways without cause.",
      "PayPal still wins completion on some demographics when wallet trust beats typing a card—test with data, not opinions.",
      "PayPal fee grids span product paths; Shopify rates tie to plan and surface—compare identical order cohorts.",
      "If you are not on Shopify, this comparison is a hint to re-evaluate your cart—not only your processor.",
      "Contractors emailing large deposits sometimes see higher completion when PayPal appears; service SKUs in Shopify must still describe scope clearly to reduce ‘wrong item’ disputes on either rail.",
      "BeltStack does not see your checkout funnel analytics—run an A/B or time-boxed pilot before you permanently add a second processor.",
    ],
    decisionGuideA: [
      "You run a real Shopify store with meaningful cart volume.",
      "You want unified Shopify reporting for refunds.",
      "Wallet is optional, not your primary conversion fix.",
      "Finance wants fewer settlement rhythms and payout sources to reconcile.",
    ],
    decisionGuideB: [
      "Analytics show wallet abandonment on card-only flows.",
      "Remote estimates stall until PayPal appears.",
      "You need a globally recognized pay button quickly.",
      "You already succeed with PayPal on non-Shopify invoice links and want parity.",
    ],
    heroCallouts: [
      { label: "Shopify-native operations", winner: "A", reason: "Checkout and payouts stay in Shopify." },
      { label: "Wallet trust", winner: "B", reason: "PayPal’s button still helps some payers finish." },
      { label: "Dispute & buyer policies", winner: "B", reason: "PayPal wallet flows carry buyer-facing policies that differ from straight card checkout—read the rules before you standardize." },
    ],
    featureComparison: [
      { feature: "Shopify-native checkout", productA: "Core", productB: "Gateway/partner dependent", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Wallet button familiarity", productA: "Varies", productB: "Strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Invoicing outside Shopify", productA: "Not the focus", productB: "Strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Subscription + app ecosystem", productA: "Native to Shopify stack", productB: "Adjacent products", supportA: "supported", supportB: "partial", stronger: "A" },
    ],
    pricingComparison:
      "Shopify Payments is priced by Shopify plan and transaction type; your total cost must include Shopify subscription and critical apps. PayPal’s fees depend on which product path you use—standard checkout, invoice, wallet, in-person, or cross-border. If you enable both on Shopify, split settlements by payment method so reporting stays accurate. Map each PayPal path to its fee table row before you compare net deposits.",
    prosConsA: {
      pros: [
        "Less fragmentation when Shopify is the commerce brain",
        "Cohesive refunds, chargebacks, and payouts in one admin",
        "Straightforward operations for teams already in Shopify daily",
      ],
      cons: [
        "Requires Shopify commitment and plan math in TCO",
        "Wallet lift may still justify PayPal as a second rail—complexity rises",
        "Alternate payment methods depend on Shopify configuration and region",
      ],
    },
    prosConsB: {
      pros: [
        "Trusted wallet UX for hesitant remote payers",
        "Multiple entry points: links, invoices, and partner checkouts",
        "Can complement Shopify Payments when data proves completion lift",
      ],
      cons: [
        "Fee complexity across PayPal products and regions",
        "Less cohesive as a single Shopify-native settlement story",
        "Dual rails demand accounting tags per job or order",
      ],
    },
    bestFor: [
      {
        heading: "Best for native Shopify checkout",
        body: "Shopify Payments is the better fit as the default when you want a single payout rhythm and fewer gateways inside Shopify. PayPal is the better fit when data shows customers complete more often with a wallet option on the same checkout or invoice flow.",
      },
      {
        heading: "Best for wallet checkout",
        body: "PayPal is the better fit when remote buyers trust the PayPal button and you are willing to manage PayPal’s buyer policies and fee structure alongside Shopify.",
      },
      {
        heading: "Best for fee comparison",
        body: "Compare Shopify plan plus processing to PayPal on the exact surfaces you will enable; dual rails only make sense if the lift in completion or average order value covers the extra reconciliation work.",
      },
    ],
    alternatives: [altCard("stripe", "Stripe vs Shopify Payments fork for non-Shopify stacks"), altCard("square", "Field swipes when trucks—not carts—collect balances")],
    faqs: [
      { q: "Shopify Payments or PayPal?", a: "Shopify Payments for native cart ops; PayPal when wallet completion data supports it on the specific pages you care about." },
      { q: "Can I offer both on Shopify?", a: "Often yes via integrations or payment settings—verify current Shopify guidance and test reconciliation before you scale traffic." },
      { q: "Which has lower fees?", a: "Depends on plan, path, and cross-border mix—compute effective rate per cohort, not headline percentages." },
      { q: "PayPal vs Shopify Payments chargebacks?", a: "Both need documentation; PayPal wallet disputes may follow different evidence standards—train office staff on each portal." },
    ],
    sidebarWinners: [
      { label: "Shopify cart operations", winner: "A" },
      { label: "Wallet conversion", winner: "B" },
    ],
  }),
  build("helcim-vs-paypal", "helcim", "paypal", "Helcim centers interchange-plus acquiring with modern SMB UX; PayPal centers wallet trust and multi-path checkout—compare effective rate per path, not which homepage reads ‘simpler.’", {
    quickVerdictParagraphs: [
      "Helcim fits finance-led teams auditing statements monthly. PayPal fits when remote payers stall until they see a familiar wallet.",
      "You may still pair PayPal with Helcim for specific customer segments—only with labeled exports and office rules.",
      "PayPal disputes and buyer policies differ from straight card acquiring—documentation standards stay high either way.",
      "Neither removes the need to compute net deposits from your own CSVs.",
      "If your question is really ‘interchange-plus vs flat field bundle,’ also read Square vs Helcim—Helcim vs PayPal is acquiring transparency versus wallet completion.",
      "Experience signal: hybrid stacks work when the office documents ‘send PayPal link for wallet-first customers, Helcim-hosted invoice for card-only’—without that SOP, bookkeeping drifts within a quarter.",
      "BeltStack does not see PayPal reserves or Helcim underwriting on your account—treat published grids as starting points only.",
    ],
    decisionGuideA: [
      "Large average tickets make basis points visible.",
      "You want interchange separated from processor markup.",
      "You will coach staff on card-present vs keyed behavior.",
      "Finance wants to re-shop rates with line-item statements at renewal.",
    ],
    decisionGuideB: [
      "Wallet completion is a measured problem.",
      "You sell remotely to buyers who prefer PayPal.",
      "You need multiple entry points (links, invoices, wallet).",
      "You already win deposits when the PayPal button appears on estimates.",
    ],
    heroCallouts: [
      { label: "Interchange-plus clarity", winner: "A", reason: "Helcim emphasizes transparent acquiring statements." },
      { label: "Wallet trust", winner: "B", reason: "PayPal’s brand helps some demographics pay remotely." },
      { label: "Statement-based renewals", winner: "A", reason: "Helcim’s story shines when you negotiate with exported interchange data—not anecdotes." },
    ],
    featureComparison: [
      { feature: "Interchange-plus statements", productA: "Core", productB: "Not the story", supportA: "supported", supportB: "none", stronger: "A" },
      { feature: "Wallet checkout", productA: "Limited vs PayPal", productB: "Core strength", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Fee grid complexity", productA: "Markup + interchange", productB: "Multi-product tables", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Virtual terminal / invoicing", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Helcim typically prices as interchange plus a disclosed markup on acquiring. PayPal’s fees depend on the product path—online, invoice, in-person, wallet, or cross-border—so align the fee schedule with the screen your customer uses. Compare net deposits on the same job cohorts, including refunds, disputes, and currency conversion. Wallet completion can justify a higher effective rate if it moves revenue you would otherwise lose.",
    prosConsA: {
      pros: [
        "Transparent acquiring narrative for finance-led SMBs",
        "Strong for large tickets when entry methods stay clean",
        "Modern dashboard versus legacy ISO paperwork in many stories",
      ],
      cons: [
        "Less household wallet brand than PayPal on buttons",
        "Savings require monthly statement discipline",
        "Does not automatically add PayPal wallet where completion needs it",
      ],
    },
    prosConsB: {
      pros: [
        "Wallet recognition and trust for remote homeowners",
        "Multiple remote pay surfaces beyond a single checkout",
        "Can lift completion when analytics prove abandonment on card-only",
      ],
      cons: [
        "Fee complexity across products and regions",
        "Settlement timing and reporting differ from Helcim-only flows",
        "Dual rails increase reconciliation load without clear office rules",
      ],
    },
    bestFor: [
      {
        heading: "Best for interchange-plus and large tickets",
        body: "Helcim is the better fit when finance wants interchange separated from markup and ticket sizes make basis points visible each month. PayPal is the better fit when remote buyers complete more often with a wallet or PayPal-specific flow.",
      },
      {
        heading: "Best for wallet-heavy remote payers",
        body: "PayPal is the better fit when homeowners or remote customers expect PayPal on estimates and links, and you have measured completion lift versus card-only checkout.",
      },
      {
        heading: "Best for using both processors",
        body: "If you run Helcim for cards and PayPal for wallet, tag each job in accounting by payment method and reconcile both settlement feeds on a fixed schedule—dual rails fail when nobody owns the rules.",
      },
    ],
    alternatives: [altCard("stripe", "API-led online stack"), altCard("square", "Field + invoice simplicity")],
    faqs: [
      { q: "Helcim or PayPal for contractors?", a: "Helcim for interchange discipline on large tickets; PayPal when emailed deposits need wallet trust for completion." },
      { q: "Can I use Helcim and PayPal?", a: "Yes with discipline—document which customers get which link and reconcile both settlement feeds weekly." },
      { q: "Is PayPal always more expensive?", a: "Not necessarily—wallet completion can justify a higher effective rate if margin and cash timing improve." },
      { q: "Helcim vs PayPal chargebacks?", a: "Both need evidence trails; PayPal wallet cases may follow buyer-protection workflows—train staff on each portal." },
    ],
    sidebarWinners: [
      { label: "Interchange-plus acquiring", winner: "A" },
      { label: "Wallet-heavy remote payers", winner: "B" },
    ],
  }),
  build("stax-vs-paypal", "stax", "paypal", "Stax combines membership-style platform fees with pass-through interchange; PayPal optimizes wallet and multi-path remote checkout—seasonality and fee-path mapping decide this more than logos.", {
    quickVerdictParagraphs: [
      "Stax makes sense when steady volume amortizes the platform line and finance wants interchange visibility. PayPal makes sense when abandonment is wallet-specific on emailed estimates.",
      "Seasonal contractors: stress-test Stax in slow months before you commit.",
      "PayPal’s grids are path-specific—online invoice vs wallet vs in-person differ.",
      "Dual-rail operations are fine if accounting tags each job’s payment method consistently.",
      "If membership economics are uncertain, Helcim vs Stax helps you separate ‘interchange-plus only’ from ‘platform fee + interchange’ before you compare either to PayPal.",
      "Experience signal: Stax wins budgeting conversations; PayPal wins completion conversations—pick the bottleneck you actually measure.",
      "BeltStack cannot see rolling reserves on either brand—export settlement timing to your bank when you model working capital.",
    ],
    decisionGuideA: [
      "Monthly processing is relatively predictable.",
      "You want membership + interchange economics.",
      "You will re-run math as mix shifts quarterly.",
      "Multi-location owners want one membership line item across branches.",
    ],
    decisionGuideB: [
      "Remote wallet payers are a large share of revenue.",
      "You need recognizable wallet UX without building custom checkout.",
      "You can map PayPal fees to the exact surfaces you use.",
      "You sell to demographics that already pay friends with PayPal.",
    ],
    heroCallouts: [
      { label: "Membership + interchange", winner: "A", reason: "Stax pairs platform fee with pass-through costs." },
      { label: "Wallet checkout", winner: "B", reason: "PayPal leads consumer wallet recognition." },
      { label: "Finance forecasting", winner: "A", reason: "Fixed platform component helps CFOs budget—if volume supports it." },
    ],
    featureComparison: [
      { feature: "Platform membership fee", productA: "Core", productB: "No", supportA: "supported", supportB: "none", stronger: "A" },
      { feature: "Wallet trust", productA: "Limited", productB: "Strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Invoicing / links", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
      { feature: "Seasonality tolerance", productA: "Low without modeling", productB: "Per-transaction paths", supportA: "partial", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "Stax combines a monthly platform fee with pass-through interchange; model how that fee divides into basis points at your actual monthly volume, and stress-test slow months when volume drops. PayPal charges per transaction on the specific paths you use—invoice, wallet, online, in-person—without a standing Stax-style membership line by default. Include cross-border and currency fees on PayPal if they apply. Compare net deposits on the same dollars, not slogans.",
    prosConsA: {
      pros: [
        "Predictable platform component for budgets",
        "Pass-through interchange visibility for audits",
        "Can beat flat bundles when volume is steady and modeled honestly",
      ],
      cons: [
        "Poor fit when revenue is highly seasonal without cash reserves",
        "Wallet story weaker than PayPal for remote completion",
        "Membership fee can dominate gross in slow months",
      ],
    },
    prosConsB: {
      pros: [
        "Wallet recognition for hesitant payers",
        "Multiple remote pay paths with familiar consumer UX",
        "No standing Stax-style membership line by default",
      ],
      cons: [
        "Fee complexity across PayPal products",
        "Less natural when steady volume already fits membership economics",
        "Dual rails need explicit reconciliation if you also run Stax",
      ],
    },
    bestFor: [
      {
        heading: "Best for steady card volume and membership economics",
        body: "Stax is the better fit when monthly processing is predictable enough that a platform fee plus interchange beats your current bundle on a forward budget. PayPal is the better fit when the constraint is remote checkout completion and wallet trust, not acquiring math alone.",
      },
      {
        heading: "Best for wallet checkout",
        body: "PayPal is the better fit when buyers recognize the PayPal button and you need wallet flows without building custom checkout first.",
      },
      {
        heading: "Best for comparing unlike pricing models",
        body: "Convert Stax’s monthly fee into an implied rate at your volume, then compare to PayPal’s effective rate on the same cohort—membership and per-transaction pricing are not intuitive side by side without a spreadsheet.",
      },
    ],
    alternatives: [altCard("helcim", "Interchange-plus without membership"), altCard("stripe", "Developer-led online flows")],
    faqs: [
      { q: "Stax vs PayPal for small business?", a: "Stax when volume is steady and membership math works; PayPal when wallet payers drive revenue or completion data demands it." },
      { q: "Can PayPal replace Stax?", a: "Sometimes for wallet-heavy remote businesses—not when you need Stax’s membership + interchange bundle for consolidated processing." },
      { q: "What about Square?", a: "Square vs PayPal covers field + invoice versus wallet—add that read if trucks swipe most revenue." },
      { q: "Is this tax advice?", a: "No—consult your tax advisor on revenue recognition, tips, and sales tax; we only discuss processor fit." },
    ],
    sidebarWinners: [
      { label: "Steady-volume membership", winner: "A" },
      { label: "Wallet conversion", winner: "B" },
    ],
  }),
  build("authorize-net-vs-stripe", "authorizeNet", "stripe", "Authorize.net is a gateway layer on top of a merchant account; Stripe is often acquirer + APIs in one modern stack—total cost and who owns implementation decide this, not which logo looks more “enterprise.”", {
    quickVerdictParagraphs: [
      "Greenfield web checkout and Billing usually favor Stripe unless a bank bundle or ERP already standardizes on Authorize.net tokens.",
      "Authorize.net makes sense when switching would break long-lived payment profiles, virtual terminal workflows tied to an acquirer, or bank-mandated gateway paths.",
      "Pricing stacks: gateway fee + processor interchange on Authorize.net versus Stripe’s percentage-plus-fixed plus product line items—demand an all-in sample statement for the gateway path.",
      "PCI scope and webhook ownership still sit with your team either way; Authorize.net is not automatically “safer,” just different integration boundaries.",
      "Contractors inheriting QuickBooks- or bank-bundled stacks sometimes discover Authorize.net is the documented integration path—ripping it out to chase Stripe can break recurring maintenance billing until tokens migrate with consent.",
      "For fee vocabulary before you compare quotes, read credit card processing fees explained—gateway fees are only one line on the Authorize.net side.",
      "BeltStack does not see your ISO agreement or Stripe Radar tuning—validate reserves, payout timing, and PCI scope in writing before migration.",
    ],
    decisionGuideA: [
      "Banks or ERPs already require Authorize.net-shaped integrations.",
      "Token portability and recurring profiles must survive without replatforming cards on file.",
      "You have a developer or ISV who will own gateway config and fraud filters.",
      "Your acquirer relationship is already priced and switching gateways would not change underlying risk tier.",
    ],
    decisionGuideB: [
      "You are building new online checkout or subscriptions without a legacy gateway lock-in.",
      "Developers need modern APIs, test mode, and Billing-class retries.",
      "You want fewer vendors between checkout and support escalation.",
      "You plan to use Stripe Terminal or Connect without bolting a separate gateway brand.",
    ],
    heroCallouts: [
      { label: "Legacy gateway + acquirer flexibility", winner: "A", reason: "Authorize.net fits bank-led and ERP-token stories." },
      { label: "Unified modern acquiring + APIs", winner: "B", reason: "Stripe targets programmable money movement out of the box." },
      { label: "Time-to-market on new builds", winner: "B", reason: "Stripe’s hosted checkout and docs usually ship faster than bespoke gateway glue." },
    ],
    featureComparison: [
      { feature: "New web + Billing depth", productA: "Integration-dependent", productB: "Very strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Tokenization / CIM patterns", productA: "Mature gateway focus", productB: "Strong (Stripe objects)", supportA: "supported", supportB: "supported" },
      { feature: "Total vendor count", productA: "Gateway + processor", productB: "Often fewer moving parts", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Fraud tooling", productA: "Gateway filters + acquirer tools", productB: "Radar + issuer features at scale", supportA: "supported", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "Authorize.net charges gateway fees (often monthly and per transaction) on top of whatever your merchant bank or processor charges for interchange and markup—your true cost is both layers combined. Stripe typically combines acquiring and product fees in one relationship: percentage-plus-fixed processing plus optional Billing, Terminal, instant payout, and currency fees. Request parallel all-in quotes or sample statements for the same card-present versus card-not-present mix; gateway list prices rarely include acquirer cost.",
    prosConsA: {
      pros: [
        "Broad legacy compatibility with banks and ISVs",
        "Useful when CIM tokens must stay put across accounting migrations",
        "Mature fraud filter hooks when someone maintains them quarterly",
      ],
      cons: [
        "Cost stacks with acquirer and can hide in two statements",
        "UX depends on your implementation and ISV quality",
        "Not the fastest greenfield path versus modern all-in-one stacks",
      ],
    },
    prosConsB: {
      pros: [
        "Modern APIs, hosted checkout, and Billing for subscriptions",
        "Terminal and online can share customer objects when designed intentionally",
        "Fewer middleware vendors when you commit to Stripe as spine",
      ],
      cons: [
        "Less ideal if migration would break ERP or bank-mandated tokens",
        "Custom flows still need a technical owner for webhooks and edge cases",
        "Feature surface grows—someone must watch add-on line items",
      ],
    },
    bestFor: [
      {
        heading: "Best for legacy gateway and bank-led stacks",
        body: "Authorize.net is the better fit when your bank, ERP, or software already requires that gateway and migrating stored cards would be costly. Stripe is the better fit for new online checkout, Billing, and APIs when you are not locked to Authorize.net-shaped middleware.",
      },
      {
        heading: "Best for new programmable checkout",
        body: "Stripe is the better fit when developers need modern APIs, test environments, hosted checkout, and subscription tooling without maintaining a separate gateway stack.",
      },
      {
        heading: "Best for total cost",
        body: "Add gateway fees and processor interchange for Authorize.net and compare to Stripe’s full invoice including implementation time—two statements versus one vendor relationship changes support and true cost.",
      },
    ],
    alternatives: [altCard("helcim", "Bundled acquiring when you want interchange-plus UX"), altCard("square", "Field readers without a gateway project")],
    faqs: [
      { q: "Is Authorize.net cheaper than Stripe?", a: "Sometimes on a bundled bank deal—often not once you add gateway + processor + implementation. Compare net deposits on identical volume." },
      { q: "Can contractors use Authorize.net?", a: "Yes when software or banks require it; mobile-first greenfield crews often start with Square or Stripe instead." },
      { q: "Authorize.net vs Stripe for subscriptions?", a: "Stripe Billing is usually deeper for dunning and plan changes; Authorize.net can work when tokens already live in CIM and your ISV owns recurring logic." },
      { q: "PCI scope?", a: "Both paths require correct integration—use SAQ guidance from your QSA or processor; we do not provide PCI legal advice." },
    ],
    sidebarWinners: [
      { label: "Legacy / bank-led gateway paths", winner: "A" },
      { label: "New programmable online stack", winner: "B" },
    ],
  }),
  build("authorize-net-vs-square", "authorizeNet", "square", "Authorize.net is middleware plus a merchant account path; Square bundles processing, readers, and SMB software—field-first crews rarely start with a gateway unless something already forces it.", {
    quickVerdictParagraphs: [
      "Square wins time-to-swipe for trucks and small counters; Authorize.net wins when your stack already centers on gateway tokens and a specific acquirer.",
      "If you only need mobile readers and invoices, Square is the natural shortlist—Authorize.net adds implementation and statement complexity without field hardware wins.",
      "Hybrid shops sometimes run Square in the field and keep Authorize.net for legacy web billing—document reconciliation rules before you bless two rails.",
      "Effective rate on Authorize.net still flows through the underlying processor; compare that all-in number to Square’s card-present vs keyed paths.",
      "Search intent: if you are comparing ‘Authorize.net vs Square’ because your bank mentioned both, clarify whether you need a gateway vault or a field POS—most trades need Square first, gateway second.",
      "Pair deposits with job costing: see payment processing for contractors on BeltStack for how belts-and-suspenders stacks still need job IDs on every payment.",
      "BeltStack does not implement gateways—budget developer or partner hours when Authorize.net is non-negotiable.",
    ],
    decisionGuideA: [
      "ERP, bank, or franchise standards require Authorize.net.",
      "You must preserve CIM/token workflows during an accounting migration.",
      "Developers already maintain gateway integrations.",
      "Virtual terminal and card-on-file are central to office billing.",
    ],
    decisionGuideB: [
      "Crews collect cards daily on phones or tablets.",
      "You want hardware retail paths and simple staff training.",
      "You are greenfield without a gateway mandate.",
      "You need invoicing and readers without ISO or gateway projects.",
    ],
    heroCallouts: [
      { label: "Gateway + token portability", winner: "A", reason: "Authorize.net fits inherited technical constraints." },
      { label: "Field + invoice simplicity", winner: "B", reason: "Square targets SMB card-present first." },
      { label: "Statement simplicity for owners", winner: "B", reason: "Square’s bundled story is easier to explain to new office hires than gateway + processor stacks." },
    ],
    featureComparison: [
      { feature: "Mobile readers / crews", productA: "Not the focus", productB: "Core", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "POS + counter retail", productA: "Via other software", productB: "Strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Gateway tokenization", productA: "Core strength", productB: "Different model", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Instant payout / cash flow", productA: "Processor-dependent", productB: "Optional Square feature", supportA: "partial", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "Square charges processing plus optional software tiers, team features, and instant transfer; benchmarks are relatively simple for field-first businesses. Authorize.net adds gateway fees to your processor’s interchange and markup—ask for one combined sample statement or quote so you see the full stack. Budget implementation and PCI work on the gateway path; Square usually avoids that layer for straightforward in-person use.",
    prosConsA: {
      pros: [
        "Fits bank or ERP gateway requirements without replatforming vaults overnight",
        "Mature tokenization story for cards on file",
        "Keeps acquirer relationships negotiable in many architectures",
      ],
      cons: [
        "Slow path for field-first startups that only need readers",
        "Total cost split across gateway and processor statements",
        "Implementation quality varies by partner",
      ],
    },
    prosConsB: {
      pros: [
        "Fast operational wins for local operators",
        "Hardware ecosystem crews and homeowners already recognize",
        "Invoices and pay links without standing up gateway middleware",
      ],
      cons: [
        "Not a drop-in replacement for deep CIM migrations without a project plan",
        "Heavy custom ecommerce may still evaluate Stripe",
        "Keyed transactions still need monitoring on any processor",
      ],
    },
    bestFor: [
      {
        heading: "Best for gateway or ERP requirements",
        body: "Authorize.net is the better fit when software, franchise, or bank rules require a gateway vault and specific token flows. Square is the better fit when you need mobile readers, simple invoices, and counter sales without standing up gateway middleware.",
      },
      {
        heading: "Best for crews and counters",
        body: "Square is the better fit for day-to-day swipes, hardware swaps, and SMB training—most field-first businesses start here unless something already forces Authorize.net.",
      },
      {
        heading: "Best for understanding the bill",
        body: "Authorize.net’s cost is gateway plus processor; Square’s is primarily processing and optional subscriptions—compare all-in numbers from written quotes or statements, not feature grids alone.",
      },
    ],
    alternatives: [altCard("stripe", "Online spine when APIs matter"), altCard("helcim", "Interchange-plus acquiring alternative")],
    faqs: [
      { q: "Authorize.net or Square for small business?", a: "Square for most SMB field and counter use; Authorize.net when technical or bank requirements demand a gateway vault." },
      { q: "Can Square replace Authorize.net?", a: "Sometimes for new businesses—rarely without a token migration plan if recurring billing depends on CIM." },
      { q: "Which is easier for staff?", a: "Square for swipe-and-go crews; Authorize.net when back-office virtual terminal users are trained and documented." },
    ],
    sidebarWinners: [
      { label: "Inherited gateway / ERP", winner: "A" },
      { label: "Field + SMB operations", winner: "B" },
    ],
  }),
  build("authorize-net-vs-paypal", "authorizeNet", "paypal", "Authorize.net routes through your acquirer behind a gateway; PayPal leads with wallet trust and consumer pay surfaces—compare the paths homeowners actually click, not abstract architecture diagrams.", {
    quickVerdictParagraphs: [
      "PayPal wins when remote payers abandon card-only flows; Authorize.net wins when you must vault cards under your merchant ID for ERP-driven billing.",
      "Many stacks present PayPal alongside another processor—Authorize.net can be that other rail, but dual paths need finance tagging per job.",
      "Fee literacy: PayPal’s tables are product-specific; Authorize.net stacks gateway plus processor—export both before you argue about cheaper.",
      "Disputes follow the rail: wallet policies differ from straight card acquiring—documentation standards stay high either way.",
      "If wallet trust is the only gap, also read Stripe vs PayPal and Helcim vs PayPal—Authorize.net vs PayPal is specifically gateway vaulting versus consumer wallet UX.",
      "Contractors: label business-name descriptors on statements to reduce ‘unrecognized charge’ chargebacks on either rail.",
      "BeltStack does not see PayPal buyer-protection outcomes on your account—train office staff on evidence requirements per rail.",
    ],
    decisionGuideA: [
      "You need gateway tokens tied to your merchant account for recurring or ERP billing.",
      "Developers control AVS/CVV and fraud velocity rules at the gateway.",
      "Wallet is optional, not your primary conversion lever.",
      "Finance requires cards vaulted under your MID for compliance or franchise rules.",
    ],
    decisionGuideB: [
      "Analytics show wallet lift on emailed deposits.",
      "You need recognizable remote checkout quickly.",
      "You sell through channels where PayPal is expected.",
      "You want pay links without standing up custom gateway glue first.",
    ],
    heroCallouts: [
      { label: "Merchant-account token gateway", winner: "A", reason: "Authorize.net centers acquirer + CIM patterns." },
      { label: "Wallet trust + pay links", winner: "B", reason: "PayPal optimizes consumer wallet completion." },
      { label: "Buyer-facing policies", winner: "B", reason: "PayPal wallet flows include buyer protections that differ from straight card checkout—read them before you standardize." },
    ],
    featureComparison: [
      { feature: "Wallet checkout", productA: "Partner-dependent", productB: "Core", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Gateway token vault", productA: "Core", productB: "Different product shape", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Fee transparency", productA: "Gateway + processor stack", productB: "Multi-product grids", supportA: "partial", supportB: "partial" },
      { feature: "Recurring maintenance billing", productA: "CIM + gateway patterns", productB: "Plans and invoicing products", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "PayPal’s cost depends on which product path you use—invoice, wallet, standard checkout, in-person, or cross-border—each maps to a different row on its fee table. Authorize.net stacks gateway fees on top of your processor’s interchange and markup. Compare identical remote-deposit cohorts and include refunds and disputes. Expect two cost layers on the Authorize.net path versus PayPal’s path-specific grids.",
    prosConsA: {
      pros: [
        "Fits ERP and acquirer-centric vaulting requirements",
        "Configurable gateway fraud filters when someone maintains them",
        "Keeps card profiles under your merchant account story",
      ],
      cons: [
        "Implementation and PCI scope still require partner ownership",
        "Less household brand than PayPal on consumer buttons",
        "Two statements to read when gateway and processor split fees",
      ],
    },
    prosConsB: {
      pros: [
        "Trusted wallet UX for hesitant remote payers",
        "Multiple remote entry points beyond a single custom checkout",
        "Can complement Authorize.net or other acquirers when data proves lift",
      ],
      cons: [
        "Fee complexity across PayPal products",
        "Less cohesive if you also need deep CIM under a single MID",
        "Dual rails need accounting discipline",
      ],
    },
    bestFor: [
      {
        heading: "Best for gateway vaulting under your merchant account",
        body: "Authorize.net is the better fit when ERP, recurring billing, or compliance needs require cards stored behind your merchant account and gateway. PayPal is the better fit when consumer wallet trust and pay links solve remote completion without that gateway project.",
      },
      {
        heading: "Best for wallet checkout",
        body: "PayPal is the better fit when buyers finish more often with PayPal than with card fields alone on estimates and invoices.",
      },
      {
        heading: "Best for reading your costs",
        body: "Authorize.net means gateway plus processor bills; PayPal means matching each checkout surface to the right fee—compare net deposits, not which homepage looks simpler.",
      },
    ],
    alternatives: [altCard("stripe", "Programmable checkout + Billing"), altCard("square", "Field swipes and simple invoices")],
    faqs: [
      { q: "Can I use PayPal with Authorize.net?", a: "Sometimes via integrations—confirm current product rules, settlement timing, and reconciliation before you dual-rail without a plan." },
      { q: "Authorize.net vs PayPal for subscriptions?", a: "Authorize.net when tokens must live in CIM; PayPal when subscribers prefer wallet login and you accept PayPal’s plan tooling." },
      { q: "Which has better fraud tools?", a: "Both need configuration—gateway filters on Authorize.net, PayPal risk settings on wallet flows; neither replaces good job documentation." },
    ],
    sidebarWinners: [
      { label: "Gateway + merchant-account vaulting", winner: "A" },
      { label: "Remote wallet conversion", winner: "B" },
    ],
  }),
  build("authorize-net-vs-shopify-payments", "authorizeNet", "shopify", "Shopify Payments keeps money inside Shopify admin; Authorize.net is a generic gateway unless Shopify is not your cart—compare only when both could realistically apply to the same revenue.", {
    quickVerdictParagraphs: [
      "If Shopify runs your store, Shopify Payments is the default native path unless policy or payment-method gaps force a separate gateway.",
      "Authorize.net appears when legacy ERP, bank bundles, or multi-channel token needs sit outside Shopify’s happy path.",
      "Total cost for Shopify must include plan and app fees, not only processing percentages.",
      "Replatforming off Shopify later is painful for payments—Authorize.net does not remove that strategic lock-in if the cart is still Shopify.",
      "Also read Shopify Payments vs Stripe when your fork is ‘native Shopify vs developer gateway’ online—not only Authorize.net.",
      "Service SKUs and deposit products should describe fulfillment clearly on either rail—Shopify policy enforcement and chargeback evidence both care about clarity.",
      "BeltStack does not know your Shopify plan, B2B scripts, or ERP token contracts—validate with Shopify Partner docs and your implementation partner.",
    ],
    decisionGuideA: [
      "Non-Shopify channels require gateway tokens you cannot migrate to Shopify Payments easily.",
      "Banks or franchisors mandate Authorize.net while a Shopify storefront exists for a slice of revenue.",
      "Developers need gateway-level fraud tuning independent of Shopify checkout defaults.",
      "You sell through multiple carts or custom portals that cannot centralize on Shopify Payments alone.",
    ],
    decisionGuideB: [
      "Meaningful revenue flows through Shopify checkout today.",
      "You want payouts, disputes, and refunds inside Shopify admin.",
      "You are not trying to maintain a parallel custom gateway without cause.",
      "Staff already lives in Shopify for orders, inventory, and customer records.",
    ],
    heroCallouts: [
      { label: "Gateway portability / ERP", winner: "A", reason: "Authorize.net fits non-native cart constraints." },
      { label: "Shopify-native checkout", winner: "B", reason: "Payments align with Shopify operations." },
      { label: "Total cost of ownership", winner: "B", reason: "When Shopify is justified, native payments usually beats middleware unless a mandate says otherwise." },
    ],
    featureComparison: [
      { feature: "Shopify-native payouts", productA: "Not applicable", productB: "Built-in", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Generic gateway + acquirer", productA: "Core", productB: "Not the model", supportA: "supported", supportB: "none", stronger: "A" },
      { feature: "Operational simplicity for Shopify merchants", productA: "Usually lower", productB: "Higher", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Multi-channel token strategy", productA: "Possible with careful architecture", productB: "Shopify-centric by default", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Shopify Payments pricing ties to your Shopify plan and whether the sale is online or through POS; total cost always includes Shopify subscription and the apps you depend on. Authorize.net adds gateway fees to your processor’s interchange—only compare these two when the same orders could realistically use either path. If your question is field swipes versus Shopify checkout, compare Shopify Payments to Square or Stripe instead of a generic gateway stack.",
    prosConsA: {
      pros: [
        "Useful when compliance, bank, or ERP paths require a gateway",
        "Can preserve token models decoupled from Shopify checkout in some architectures",
        "Supports virtual terminal or legacy billing that predates Shopify",
      ],
      cons: [
        "Adds middleware versus native Shopify Payments for most merchants",
        "Implementation, PCI scope, and support handoffs still belong to you",
        "Can confuse staff if Shopify admin is not the single payout source",
      ],
    },
    prosConsB: {
      pros: [
        "Less fragmentation for Shopify-first teams",
        "Cohesive refunds, disputes, and payouts where merchandising already happens",
        "Fewer moving parts when Shopify is already justified by cart revenue",
      ],
      cons: [
        "Requires Shopify commitment—TCO is not processing alone",
        "Alternate gateways only when Shopify rules and ROI justify complexity",
        "Switching carts later still means payment migration planning",
      ],
    },
    bestFor: [
      {
        heading: "Best for Shopify-first merchants",
        body: "Shopify Payments is the better fit when checkout runs through Shopify and you want payouts and disputes in one admin. Authorize.net is the better fit only when policy, ERP, or token needs force a separate gateway alongside or outside native checkout.",
      },
      {
        heading: "Best for external gateway mandates",
        body: "Authorize.net is the better fit when your stack or bank contract requires that gateway layer even though you also sell on Shopify—expect extra middleware cost and reconciliation work.",
      },
      {
        heading: "Best for total cost",
        body: "Include Shopify plan and app fees whenever you compare to gateway-plus-processor pricing; processing percentage alone misleads if you ignore platform subscription.",
      },
    ],
    alternatives: [altCard("stripe", "Custom web stacks outside Shopify"), altCard("square", "Field hardware without Shopify")],
    faqs: [
      { q: "Do I need Authorize.net if I use Shopify?", a: "Often no—only when policy, payment methods, or integrations force a separate gateway; confirm with Shopify’s current rules for your region and plan." },
      { q: "Authorize.net vs Shopify Payments fees?", a: "Compare gateway + processor + apps + Shopify subscription versus Shopify Payments all-in—headline percentages mislead if you ignore platform fees." },
      { q: "Can I migrate from Authorize.net to Shopify Payments?", a: "Sometimes—plan token migration, customer consent, and parallel testing; involve developers early." },
    ],
    sidebarWinners: [
      { label: "External gateway requirements", winner: "A" },
      { label: "Shopify cart operations", winner: "B" },
    ],
  }),
  build("authorize-net-vs-helcim", "authorizeNet", "helcim", "Authorize.net is gateway software plus your acquirer; Helcim is modern acquiring with interchange-plus UX—both need statement literacy; Helcim reduces vendor sprawl when you do not need a separate gateway brand.", {
    quickVerdictParagraphs: [
      "Helcim fits when you want transparent interchange-plus without stitching gateway + ISO spreadsheets yourself.",
      "Authorize.net still wins when ERP or bank contracts assume Authorize.net-shaped integrations and migrating tokens is expensive.",
      "Neither removes interchange—Authorize.net exposes it through the processor; Helcim foregrounds markup in a single merchant experience.",
      "Compare implementation burn-in: gateway fraud rules, CIM storage, and PCI attestation paths still need owners on both sides.",
      "If you are weighing membership economics too, read Authorize.net vs Stax after this—Helcim is the ‘no membership’ interchange-plus lane in many evaluations.",
      "Experience signal: finance teams that love Helcim usually commit to monthly statement review; teams that ignore statements after go-live rarely capture the modeled savings.",
      "BeltStack cannot validate whether your ISV still maintains a given Authorize.net integration—ask for a current compatibility letter before you bet the business on it.",
    ],
    decisionGuideA: [
      "Legacy tokens and integrations assume Authorize.net.",
      "You need gateway-level velocity rules separate from the processor portal.",
      "Banks sold you a bundle that centers on this gateway path.",
      "Franchise or ERP documentation names Authorize.net explicitly.",
    ],
    decisionGuideB: [
      "You want interchange-plus with a modern SMB dashboard.",
      "You are not locked into Authorize.net-shaped middleware.",
      "Finance will audit statements monthly and coach entry methods.",
      "You are willing to re-shop rates with exported data, not anecdotes.",
    ],
    heroCallouts: [
      { label: "Gateway middleware flexibility", winner: "A", reason: "Authorize.net pairs with many acquirers and ISVs." },
      { label: "Unified interchange-plus UX", winner: "B", reason: "Helcim bundles acquiring clarity for engaged owners." },
      { label: "Vendor layer count", winner: "B", reason: "Helcim often reduces gateway + processor finger-pointing when you are not forced to keep both." },
    ],
    featureComparison: [
      { feature: "Gateway tokenization focus", productA: "Core", productB: "Different packaging", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Interchange-plus transparency", productA: "Via processor statements", productB: "Product narrative", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Vendor simplicity", productA: "Gateway + acquirer", productB: "Fewer layers typically", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Virtual terminal / invoicing", productA: "Common path", productB: "Strong SMB story", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Authorize.net’s bill is gateway fees plus your processor’s interchange and markup—often split across two statements. Helcim typically packages acquiring with disclosed interchange-plus markup in a more unified merchant experience. Include developer or partner time to maintain Authorize.net integrations when you compare all-in cost; a lower rate on paper does not help if nobody maintains the gateway.",
    prosConsA: {
      pros: [
        "Broad ISV and bank compatibility",
        "Useful when tokens cannot move without a migration project",
        "Mature gateway fraud hooks when configured and maintained",
      ],
      cons: [
        "Cost and complexity stack across vendors",
        "Not automatically cheaper than modern acquirers once all-in",
        "Two support lines when gateway and processor disagree",
      ],
    },
    prosConsB: {
      pros: [
        "Straightforward interchange-plus story for engaged owners",
        "Modern SMB onboarding versus legacy ISO paperwork in many cases",
        "Good when you are not contractually gateway-locked",
      ],
      cons: [
        "May not replace every legacy Authorize.net integration without engineering",
        "Savings need keyed discipline and AVS habits",
        "Less relevant when ERP mandates Authorize.net regardless of rates",
      ],
    },
    bestFor: [
      {
        heading: "Best for required gateway integrations",
        body: "Authorize.net is the better fit when software, banks, or existing tokens force that gateway path regardless of rate shopping. Helcim is the better fit when you can choose a modern acquirer and want interchange-plus clarity without separate gateway middleware.",
      },
      {
        heading: "Best for transparent interchange-plus",
        body: "Helcim is the better fit when finance wants fewer vendor layers and will audit statements monthly—assuming you are not contractually stuck on Authorize.net.",
      },
      {
        heading: "Best for true all-in cost",
        body: "Sum every gateway and processor line item for Authorize.net and compare to Helcim’s full quote on the same volume; then add maintenance hours so savings are real, not theoretical.",
      },
    ],
    alternatives: [altCard("stripe", "API-led online when developers lead"), altCard("stax", "Membership + interchange at volume")],
    faqs: [
      { q: "Helcim or Authorize.net?", a: "Helcim for new interchange-plus acquiring without gateway lock-in; Authorize.net when integrations or tokens require the gateway." },
      { q: "Can Helcim replace Authorize.net in one weekend?", a: "Rarely—token migration, ERP testing, and PCI validation usually need a phased plan." },
      { q: "Which has better support?", a: "Depends on your ISV and processor pairing on Authorize.net versus Helcim’s direct story—interview references, not forums alone." },
    ],
    sidebarWinners: [
      { label: "Legacy gateway compatibility", winner: "A" },
      { label: "Modern interchange-plus acquiring", winner: "B" },
    ],
  }),
  build("authorize-net-vs-stax", "authorizeNet", "stax", "Authorize.net adds gateway fees atop acquirer interchange; Stax adds a membership platform fee atop interchange—both are finance puzzles; Stax is rarely the fix for pure gateway portability problems.", {
    quickVerdictParagraphs: [
      "Stax targets steady card volume with membership economics; Authorize.net targets gateway flexibility with whichever processor sits behind it.",
      "Seasonal trades: Stax membership can invert in slow months; Authorize.net costs still include gateway + processor regardless of season.",
      "If your problem is ISO opacity, Stax or Helcim-style models may help—but if your problem is ERP tokens, Authorize.net may still be mandatory.",
      "Demand written quotes for both stacks on identical mixes before you pick based on blog summaries.",
      "Square vs Stax helps when the real alternative is a flat field bundle, not a gateway—don’t conflate middleware with membership acquiring.",
      "BeltStack editors see teams pick Stax for finance visibility while keeping Authorize.net for legacy vaults—only do that with an architecture diagram and someone who owns both statements.",
      "Neither path removes PCI responsibility—budget annual review regardless of brand.",
    ],
    decisionGuideA: [
      "Gateway tokens and bank bundles center on Authorize.net.",
      "You need middleware fraud controls independent of a membership processor portal.",
      "ERP documentation requires a gateway layer regardless of acquiring brand.",
    ],
    decisionGuideB: [
      "Volume is steady enough to amortize a platform fee.",
      "You want pass-through interchange with a predictable monthly line item.",
      "You are not gateway-locked into Authorize.net.",
      "Finance wants membership-style budgeting across multi-site card volume.",
    ],
    heroCallouts: [
      { label: "Gateway + acquirer decoupling", winner: "A", reason: "Authorize.net fits middleware-heavy architectures." },
      { label: "Membership + interchange", winner: "B", reason: "Stax pairs platform fee with pass-through costs." },
      { label: "Clarity of problem statement", winner: "A", reason: "If tokens force Authorize.net, Stax cannot magically remove that constraint—solve gateway first." },
    ],
    featureComparison: [
      { feature: "Membership platform fee", productA: "No", productB: "Yes", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Gateway token / CIM", productA: "Core", productB: "Not the focus", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Seasonality risk", productA: "Processor-dependent", productB: "Membership can sting low months", supportA: "partial", supportB: "partial" },
      { feature: "Multi-location consolidation", productA: "Varies by ISO", productB: "Often pitched for steady multi-site volume", supportA: "partial", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "Stax charges a monthly platform fee plus pass-through interchange, plus equipment and any PCI fees—model low-volume months because the membership line is fixed. Authorize.net charges gateway fees on top of your processor’s interchange and markup, plus implementation and ongoing maintenance. These solve different problems: membership acquiring does not remove a bank-mandated gateway. Compare written all-in quotes for the same volume before you mix the two in one RFP.",
    prosConsA: {
      pros: [
        "Solves legacy gateway and token requirements banks or ERPs mandate",
        "Acquirer choice can remain negotiable behind the gateway in many setups",
        "Useful when middleware fraud rules must sit outside the processor UI",
      ],
      cons: [
        "Stacked fees and integration burden across vendors",
        "Rarely the fastest SMB onboarding without a skilled partner",
        "Ongoing maintenance when integrations or certs expire quietly",
      ],
    },
    prosConsB: {
      pros: [
        "Predictable platform line for finance teams",
        "Can win at sustained, even volume versus opaque ISO bundles",
        "Pass-through interchange visibility when membership math holds",
      ],
      cons: [
        "Poor fit for extreme seasonality without cash buffers",
        "Does not replace Authorize.net when tokens require the gateway",
        "Still needs statement literacy—membership is not all-in pricing",
      ],
    },
    bestFor: [
      {
        heading: "Best for mandatory gateway middleware",
        body: "Authorize.net is the better fit when ERP, bank, or token requirements force a gateway layer regardless of acquiring brand. Stax is the better fit when you need membership-style acquiring economics and are not trying to solve a gateway portability problem first.",
      },
      {
        heading: "Best for steady-volume membership processing",
        body: "Stax is the better fit when card volume is steady enough that a platform fee plus interchange beats opaque ISO bundles on a forward model.",
      },
      {
        heading: "Best for picking the right question",
        body: "If you do not need a gateway, compare flat bundles or interchange-plus acquirers directly—membership processors do not replace Authorize.net when tokens require it.",
      },
    ],
    alternatives: [altCard("helcim", "Interchange-plus without membership"), altCard("square", "Flat-rate field simplicity")],
    faqs: [
      { q: "Stax vs Authorize.net?", a: "Different problems—Stax for membership economics on processing; Authorize.net for gateway + acquirer architectures." },
      { q: "Can I use both?", a: "Possible in complex enterprises—expect cost stack and clear ownership of fraud rules; most SMBs should simplify." },
      { q: "What about Stripe?", a: "See Authorize.net vs Stripe if APIs and Billing are in scope—Stax is not an API replacement for Stripe." },
    ],
    sidebarWinners: [
      { label: "Gateway / legacy stacks", winner: "A" },
      { label: "Membership processing at volume", winner: "B" },
    ],
  }),
  build("authorize-net-vs-clover", "authorizeNet", "clover", "Authorize.net is a payment gateway; Clover is terminal-forward POS with reseller-bundled processing—contractors comparing them are usually deciding between middleware and a counter ecosystem, not two identical products.", {
    quickVerdictParagraphs: [
      "Clover fits counters, tips, and app marketplaces; Authorize.net fits software paths that vault cards through a gateway to an acquirer.",
      "You might see both in hybrid models—Clover in the showroom and Authorize.net behind a legacy website—finance must label rails per job.",
      "Clover economics vary by ISO; Authorize.net stacks gateway plus processor—compare effective rate and contract length for each path.",
      "Neither is a substitute for the other’s core strength; mismatched picks usually come from RFPs that confuse POS with gateway.",
      "If you need POS comparisons, read Square vs Clover or Shopify POS vs Clover on our POS hub—this page is intentionally about gateway versus terminal-forward checkout.",
      "Experience signal: happy Clover deployments usually cite a strong local ISO; happy Authorize.net deployments usually cite a competent developer or ERP partner—interview both before you sign.",
      "BeltStack does not rank ISOs—ask for references in your zip code and read reserve clauses in full.",
    ],
    decisionGuideA: [
      "Developers or ERPs require Authorize.net token flows.",
      "Web or virtual-terminal billing dominates and POS is secondary.",
      "You must vault cards for recurring maintenance under a gateway contract.",
    ],
    decisionGuideB: [
      "Fixed-location staff need terminals, menus, and apps.",
      "You will evaluate multiple Clover ISO quotes and hardware packages.",
      "Tips, kitchen peripherals, or inventory apps drive the evaluation more than a website cart.",
    ],
    heroCallouts: [
      { label: "Gateway + web vaulting", winner: "A", reason: "Authorize.net centers middleware acquiring patterns." },
      { label: "Counter POS + devices", winner: "B", reason: "Clover targets in-store hardware workflows." },
      { label: "Apples-to-apples check", winner: "A", reason: "If you do not need POS, do not buy terminals to solve a gateway problem—and vice versa." },
    ],
    featureComparison: [
      { feature: "Counter POS depth", productA: "Via other software", productB: "Strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Gateway integrations", productA: "Core", productB: "Not comparable", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "ISO / reseller variance", productA: "Processor-dependent", productB: "High", supportA: "partial", supportB: "partial" },
      { feature: "Cards on file for service contracts", productA: "CIM patterns", productB: "App-dependent", supportA: "supported", supportB: "partial", stronger: "A" },
    ],
    pricingComparison:
      "Clover pricing usually bundles hardware lease or purchase with ISO-set processing—compare written effective rate, contract length, early termination, and reserves across quotes. Authorize.net stacks gateway fees on top of processor interchange and is not a substitute for a full POS. Total cost of ownership should include PCI, support, and implementation on the gateway side and hardware plus apps on the Clover side.",
    prosConsA: {
      pros: [
        "Fits ERP and web billing stacks that already assume a gateway",
        "Tokenization for cards on file with correct implementation",
        "Keeps acquiring negotiable behind the gateway in many architectures",
      ],
      cons: [
        "Not a POS replacement—do not buy Authorize.net to run a busy counter alone",
        "Implementation and partner quality dominate outcomes",
        "Two fee layers when gateway and processor bill separately",
      ],
    },
    prosConsB: {
      pros: [
        "Staff-friendly terminals and tactile workflows",
        "App marketplace for vertical extensions",
        "Strong when counters—not vans—define checkout",
      ],
      cons: [
        "Reseller variability changes support and pricing street by street",
        "Wrong tool if your only need is website deposits without POS",
        "Contract and lease review required—sticker prices mislead",
      ],
    },
    bestFor: [
      {
        heading: "Best for gateway-centric billing",
        body: "Authorize.net is the better fit when web billing, ERP, or card-on-file vaulting needs a gateway to your merchant account. Clover is the better fit when counter terminals, POS apps, and in-store workflows—not website middleware—define the purchase.",
      },
      {
        heading: "Best for counter POS and ISO bundles",
        body: "Clover is the better fit when staff work on fixed devices, you need Clover’s app marketplace, and you will compare multiple ISO packages for hardware and processing.",
      },
      {
        heading: "Best for buying the right layer",
        body: "Do not buy terminals to fix a website gateway problem, or only a gateway to replace a full POS—match the product category to where customers actually pay.",
      },
    ],
    alternatives: [altCard("square", "Simpler SMB hardware than many Clover paths"), altCard("stripe", "Online + Terminal when APIs lead")],
    faqs: [
      { q: "Clover or Authorize.net?", a: "Clover for POS; Authorize.net for gateway workflows—they solve different layers of the stack." },
      { q: "Can Clover use Authorize.net?", a: "Sometimes via integrations—confirm with your ISO and test settlement reporting before you assume one statement." },
      { q: "I need both—what now?", a: "Draw a diagram: website vs counter vs ERP; assign an owner for each rail’s reconciliation and fraud rules." },
    ],
    sidebarWinners: [
      { label: "Gateway / ERP-led billing", winner: "A" },
      { label: "Counter + terminal POS", winner: "B" },
    ],
  }),
];

const MAP = new Map(entries);

export function getPaymentProcessingComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return MAP.get(slug) ?? null;
}

export function getPaymentProcessingComparisonSlugs(): string[] {
  return entries.map(([s]) => s);
}

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
  { label: "Best for HVAC", href: getPaymentProcessingBestForUrl("hvac") },
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
} as const;

const ALT_SLUGS = new Set(["stripe", "square", "paypal-business"]);

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  return slugs
    .filter((s) => ALT_SLUGS.has(s))
    .map((s) => ({
      label: `Best ${s === "paypal-business" ? "PayPal Business" : s === "stripe" ? "Stripe" : "Square"} alternatives`,
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
    ...fromAlts,
    { label: "Best payment processing software", href: "/payment-processing/best-payment-processing-software" },
    { label: "Invoicing software hub", href: "/invoicing" },
    { label: "POS software hub", href: "/pos" },
    { label: "CRM software hub", href: "/crm" },
    { label: "Website builders hub", href: "/website-builders" },
    { label: "Email marketing hub", href: "/email-marketing" },
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
      "Both charge percentage-plus-fixed per successful charge with different published rates for card-present vs keyed vs online. Stripe adds line items for Billing, Terminal hardware, instant payout, and currency conversion. Square bundles software tiers and may charge for instant transfer. Compute effective rate using your last 90 days: total fees (including disputes and transfer costs) divided by gross volume, split by card-present vs online vs keyed. Compare that number to an interchange-plus quote (for example Helcim) when average tickets are high—editorial guidance cannot replace your CSV export.",
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
        heading: "Which should you choose?",
        body: "Choose Stripe when the website, portal, or subscription engine is the system of record for how money enters. Choose Square when trucks and counters produce most revenue and the website is secondary.",
      },
      {
        heading: "Service-business scenarios",
        body: "HVAC replacements with 50/50 deposits favor reliable pay links—either vendor works if you standardize templates. Emergency plumbing with same-day swipes favors Square’s field muscle unless you already deployed Terminal.",
      },
      {
        heading: "Pricing reality check",
        body: "If your average ticket exceeds a few hundred dollars, run a parallel quote on interchange-plus (Helcim) before you assume flat rate is “easy and cheap.”",
      },
      {
        heading: "How we compare them",
        body: "BeltStack scores channel fit, typical SMB surfaces, and reconciliation burden for trades—not pay-to-play placement. Vendors cannot buy a “winner” on this page; affiliate links may exist elsewhere on the site without changing this analysis.",
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
      "Stripe and PayPal both layer percentage-plus-fixed pricing with nuances for micropayments, international cards, and currency conversion. PayPal’s fee tables span multiple products—online, invoicing, in-person—so align the fee schedule with the exact surface you use. Compare effective rate on the same 30-day cohort of jobs, including refunds and dispute losses. If you run both rails, split exports by payment method so finance does not double-count revenue.",
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
        heading: "Which should you choose?",
        body: "Stripe when your growth constraint is flexible web checkout and automation. PayPal when analytics show wallet abandonment on card-only flows.",
      },
      {
        heading: "Pricing comparison takeaway",
        body: "Do not compare list percentages—compare net deposits after refunds, disputes, and cross-border cards on real tickets.",
      },
      {
        heading: "Trust and independence",
        body: "BeltStack comparisons are editorial for SMB and trade readers. We do not accept payment to favor Stripe or PayPal; confirm current published fees and contract terms with each vendor before you optimize.",
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
      "Square publishes straightforward card-present vs keyed vs online differences; watch instant transfer and software subscription add-ons. PayPal’s business fees depend on product path—invoice vs standard checkout vs in-person. Build a worksheet that includes hardware amortization for Square readers and any PayPal cross-border uplift. For hybrid stacks, map each job’s payment rail in your CRM or accounting memo field so month-end reconciliation does not become forensic work.",
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
        heading: "Which should you choose?",
        body: "Square for brick-and-van service models; PayPal when email-link and wallet completion is your constraint.",
      },
      {
        heading: "Hybrid operations",
        body: "Many contractors standardize Square for swipes and keep PayPal for wallet-heavy email deposits—success depends on tagging revenue by rail in accounting and training office staff on which link to send.",
      },
      {
        heading: "How BeltStack compares them",
        body: "We weigh real-world trade workflows—field collection versus remote trust—not sponsorships. Rankings and copy are editorial; confirm rates and holds with Square and PayPal directly.",
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
      "Compare Helcim’s interchange-plus markup against Stax’s membership fee plus interchange. Add hardware leases, chargeback costs, refund rates, and any PCI or support line items. Run a three-month backward look and a conservative slow-season forward model. Ask both vendors for a sample statement or fee schedule in writing—editorial comparisons cannot bind their underwriting or seasonal risk decisions.",
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
        heading: "Which should you choose?",
        body: "Helcim when you want straight interchange-plus with transparent markup. Stax when steady volume lets you treat processing like a subscription line item.",
      },
      {
        heading: "Experience-based caution",
        body: "Owners who churn between ISOs often skipped slow-season modeling or ignored keyed-transaction share. Fix process first, then re-quote—otherwise every processor looks expensive.",
      },
      {
        heading: "Editorial independence",
        body: "Helcim and Stax do not pay BeltStack to win this page. We describe pricing models and trade fit; your signed merchant agreement and actual deposits decide the winner.",
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
      "Shopify Payments rates tie to your Shopify plan and transaction type (online vs POS). Stripe rates depend on card mix and product surface (Checkout, Billing, Terminal). Include Shopify subscription fees and critical app subscriptions when comparing total cost—not only the processing percentage. Service SKUs sold as deposits should be described clearly in the catalog to reduce disputes and chargebacks on either rail.",
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
        heading: "Which should you choose?",
        body: "Shopify Payments when Shopify is your cart. Stripe when your website and software stack are not Shopify-centric.",
      },
      {
        heading: "Field crews + Shopify",
        body: "If trucks collect most revenue on readers while a Shopify store sells parts or deposits, map whether Shopify POS/Payments covers swipes or whether Square/Stripe Terminal still handles field volume—mixed models need an explicit architecture, not hope.",
      },
      {
        heading: "Trust note",
        body: "BeltStack is not affiliated with Shopify or Stripe for this comparison. Confirm eligibility, plan pricing, and regional availability in each vendor’s current documentation before launch.",
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
];

const MAP = new Map(entries);

export function getPaymentProcessingComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return MAP.get(slug) ?? null;
}

export function getPaymentProcessingComparisonSlugs(): string[] {
  return entries.map(([s]) => s);
}

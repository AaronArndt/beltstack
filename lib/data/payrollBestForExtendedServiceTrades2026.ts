import { getPayrollReviewUrl } from "@/lib/routes";
import { getPayrollCompareUrl } from "@/lib/data/payrollComparisons";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
} from "@/components/best/BestForTemplate";

/** Shared 2026 trade pages: appliance repair through home inspectors — varied payroll stacks per vertical. */

export const APPLIANCE_REPAIR_PAGE_PROPS = {
  title: "Best Payroll Software for Appliance Repair Businesses (2026)",
  subtitle:
    "Payroll for appliance repair shops: W-2 field techs and dispatch, 1099 subcontractors, and QuickBooks job costing when your books live in Intuit.",
  useCase: "appliance-repair",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Appliance repair businesses mix shop staff, van routes, and occasional 1099 specialists for warranty or sealed-system work. Payroll should separate employee wages from contractor payouts, support overtime when summer loads spike, and—if you run QuickBooks—let labor attach to jobs or service tickets. BeltStack favors tools you can run without a payroll department; confirm multi-state rules if techs cross lines daily.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best all-in-one for mixed W-2 and 1099",
      description:
        "Contractor portal, automatic 1099/W-2 forms, and time tools that fit owner-run dispatch desks. Published pricing—no enterprise sales cycle for a typical shop.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best when QuickBooks carries jobs and parts",
      description:
        "Payroll posts into the same file as invoices and estimates so labor can roll to job profitability—not a spreadsheet bridge every Friday.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best flat-rate value for small crews",
      description:
        "One plan, W-2 and 1099 included, with support when the owner runs payroll between dispatch calls. Syncs to common accounting stacks.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "paychex",
      name: "Paychex",
      badge: "Best serviced payroll as you add branches",
      description:
        "Traditional provider with specialists when headcount, states, or HR questions outgrow pure self-serve SaaS.",
      rating: "4.3",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("paychex"),
      visitUrl: "https://www.paychex.com/small-business",
      logoSrc: "/Logos/paychex.jpeg",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "Mixed employees + subs", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Contractor self-service; time", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "QB job costing", startingPrice: "$30/mo", payrollTypes: "W-2, 1099", standoutFeature: "Labor to jobs/classes", reviewHref: getPayrollReviewUrl("quickbooks-payroll") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Predictable cost", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Flat pricing; support", reviewHref: getPayrollReviewUrl("onpay") },
    { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", bestFor: "Full-service scale", startingPrice: "Custom", payrollTypes: "W-2, 1099, multi-state", standoutFeature: "Advisory support", reviewHref: getPayrollReviewUrl("paychex") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Van techs vs shop counter", body: "Different pay rules and break obligations may apply. Use departments or work locations so OT and reporting stay defensible if you ever face a wage audit." },
    { heading: "1099 for warranty partners", body: "Pay true employees on W-2; route genuine subcontractor payouts through 1099 workflows with documented contracts—payroll software should not blur those rails." },
    { heading: "Seasonal call volume", body: "Summer spikes can trigger OT. Model payroll cutoffs and supervisor approvals before you add seasonal helpers." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is payroll software appliance repair shops choose when they pay W-2 dispatch and field techs alongside 1099 warranty or sealed-system partners and want one login for employees and contractors. Contractor self-service cuts W-9 chasing; automatic W-2 and 1099-NEC filing matters when your busy season stacks callbacks and overtime. During implementation, map departments to van routes or branches, configure time if techs clock from tablets, and run a parallel pay period that includes a recall-heavy week, tool reimbursements, and at least one true subcontractor payout so earnings types stay clean. Search intent here is usually “small business payroll for mixed W-2 and 1099”—Gusto fits that without forcing enterprise sales cycles. Add benefits when you hire a second office role or want to compete on total comp with larger service chains.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is the best payroll software for appliance repair when QuickBooks already carries estimates, parts, and revenue—and you need labor burden on the same service jobs or classes your accountant uses for margin. Native payroll keeps direct deposit, tax deposits, and GL detail inside Intuit so you are not reconciling a payroll journal to job costing in spreadsheets. On early runs, tie payroll to a sample of closed tickets (install, warranty, callback) and confirm burden, workers’ comp, and class mappings match how you quote flat-rate or time-and-material work. If you use QuickBooks Time, validate approvals flow into pay before you trust OT on long summer shifts. This directly answers buyers comparing “QuickBooks Payroll vs third-party payroll for appliance repair job costing.”",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for appliance repair owners who want full-service payroll taxes, transparent per-employee pricing, and phone support when payroll happens between dispatch calls—not after midnight in a generic ticket queue. It handles W-2 and 1099 in one plan, which matches how many shops pay overflow subs without spinning up a second system. During setup, document multi-state techs if routes cross lines; under-withholding is a common surprise for mobile trades. Sync to QuickBooks or Xero once with your bookkeeper so GL accounts match. Buyers searching “affordable payroll for small service business” get compliant filing without Rippling- or ADP-level contracts.",
    },
    {
      heading: "Paychex",
      body: "Paychex is payroll software to shortlist when your appliance repair business adds branches, hires HR help, or wants a traditional partner for multi-state compliance and advisory calls—not only cloud self-serve. It fits teams that outgrew pure SMB tools but are not ready to run payroll like an enterprise in-house. Expect custom pricing; compare total annual cost—including year-end support and amendment risk—to Gusto at the same headcount. Ask explicitly about reporting for blended workforces and dedicated specialist access if audits or franchise agreements matter. Search patterns like “full-service payroll provider for growing trade business” map here better than to minimalist SaaS alone.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
    { name: "Paychex", href: getPayrollReviewUrl("paychex") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
    { label: "QuickBooks Payroll vs OnPay", href: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
    { label: "Gusto vs Paychex", href: getPayrollCompareUrl("gusto-vs-paychex") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What is the best payroll software for appliance repair businesses?", a: "Gusto for most small shops needing W-2 and 1099 together; QuickBooks Payroll if QuickBooks already carries your jobs; OnPay for flat pricing; Paychex when you want full-service support as you scale." },
    { q: "Can appliance repair shops run 1099 installers through payroll?", a: "Yes—use contractor profiles and year-end 1099-NEC. Misclassification is a risk; payroll tools help with forms, not legal classification." },
    { q: "Does QuickBooks Payroll help with job costing?", a: "When payroll and books share QuickBooks, labor can post to jobs or classes—useful for route or department profitability. Gusto and OnPay sync to QuickBooks but do not replace native job posting." },
  ] as BestForFaqItem[],
};

export const GARAGE_DOOR_PAGE_PROPS = {
  title: "Best Payroll Software for Garage Door Companies (2026)",
  subtitle:
    "Payroll for dealers and installers: showroom staff, install crews, commissions, and multi-location teams when you add territories.",
  useCase: "garage-door",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Garage door companies often pair inside sales with field installers and may pay productivity or spiffs on top of base wages. Payroll needs to handle W-2 crews, sometimes 1099 installers, and—if you sell and service across states—clean multi-state setup. When QuickBooks tracks estimates and jobs, tying payroll to the same ledger avoids mystery labor rates.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best dealer books + labor to jobs",
      description:
        "Keep install labor, counter staff, and burden in one ecosystem when your shop runs on QuickBooks for sales and purchasing.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best modern stack for growing dealers",
      description:
        "Benefits-ready payroll with contractor support when you mix employees and 1099 lift specialists. Strong for offices without an HR team.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "adp",
      name: "ADP",
      badge: "Best for multi-branch dealer groups",
      description:
        "Enterprise-style payroll and HR when you standardize processes across showrooms and need dedicated support for compliance.",
      rating: "4.4",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("adp"),
      visitUrl: "https://www.adp.com/small-business",
      logoSrc: "/Logos/adp.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value for single-location dealers",
      description:
        "Straightforward full-service payroll with transparent pricing—ideal when commissions are simple and you do not need Rippling-level automation.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "QB-centric dealers", startingPrice: "$30/mo", payrollTypes: "W-2, 1099", standoutFeature: "Job/class labor", reviewHref: getPayrollReviewUrl("quickbooks-payroll") },
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "All-in-one SMB", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Benefits + contractors", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", bestFor: "Scaling groups", startingPrice: "Custom", payrollTypes: "W-2, 1099, multi-state", standoutFeature: "Serviced payroll", reviewHref: getPayrollReviewUrl("adp") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Flat pricing", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "One plan", reviewHref: getPayrollReviewUrl("onpay") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Commissions and draws", body: "Document how spiffs or draws post to payroll versus AR. Most SMB payroll handles supplemental wages; your policy should be written." },
    { heading: "Install crews vs warehouse", body: "Separate earning types if warehouse and field have different OT or travel rules—cleaner W-2s reduce year-end corrections." },
    { heading: "Multi-state installers", body: "If crews earn wages across borders, register where required. Set this up during onboarding, not after an audit letter." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software garage door companies use when estimates, inventory, and P&L already live in QuickBooks and labor must post to install jobs or locations—otherwise “job margin” is fiction. It supports W-2 showroom and field staff plus 1099 installers or lift partners when your contracts qualify them as contractors. Configure supplemental wages for spiffs or draws with your CPA so tax withholding matches policy. Test payroll against a month with mixed residential and commercial installs, multi-crew days, and any commission true-ups. Buyers searching “QuickBooks payroll for contractors” or “payroll with job costing for dealers” land on this fit when Intuit is already the system of record.",
    },
    {
      heading: "Gusto",
      body: "Gusto is payroll software for growing garage door dealers that need hiring, onboarding, and optional benefits without standing up an HR department—while still paying 1099 specialists in the same account. Published pricing and contractor portals match search intent for “easy payroll for small business with 1099s.” Run onboarding checklists for seasonal installers before spring rush, and separate earning codes for overtime on long install days versus counter overtime. If you later add a second showroom, use locations or departments so reporting stays comparable. Gusto answers the buyer who wants modern payroll software for trade businesses, not a legacy mainframe feel.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software for garage door groups adding branches, safety programs, or multi-state payroll where serviced support and HR modules matter as much as the pay run. It fits franchised or multi-location operators comparing “ADP vs Paychex” for compliance depth. During sales, align earning codes with how you report labor to suppliers or insurers if relevant, and clarify implementation hours for time approvals from the field. Total cost is quoted—model it against Rippling or Paychex if you are enterprise-curious. This pick serves buyers who type “payroll and HR for multi-location contractors.”",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for single-location garage door dealers who want full-service tax filing, W-2 and 1099 in one flat plan, and human support when the owner or office manager runs payroll between customer calls. It is a strong answer to “Gusto vs OnPay for small contractors” when budget clarity beats extra HR modules. Validate commission and bonus workflows in the first quarter so year-end W-2s do not surprise anyone. Map accounting sync once with your bookkeeper. Searchers looking for “simple payroll for home service company with transparent pricing” should trial OnPay alongside Gusto.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "ADP", href: getPayrollReviewUrl("adp") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Gusto vs ADP", href: getPayrollCompareUrl("gusto-vs-adp") },
    { label: "QuickBooks Payroll vs OnPay", href: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
    { label: "ADP vs Paychex", href: getPayrollCompareUrl("adp-vs-paychex") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What payroll software is best for garage door companies?", a: "QuickBooks Payroll when QuickBooks is your system of record; Gusto for most growing dealers; ADP for multi-location groups; OnPay for straightforward pricing." },
    { q: "How do garage door dealers handle commissions in payroll?", a: "Use supplemental earning types or bonuses with clear policies. QuickBooks Payroll keeps commissions visible alongside job data when configured with your accountant." },
  ] as BestForFaqItem[],
};

export const LOCKSMITH_PAGE_PROPS = {
  title: "Best Payroll Software for Locksmith Businesses (2026)",
  subtitle:
    "Payroll for mobile locksmiths and storefronts: after-hours premiums, small crews, 1099 call partners, and simple stacks that owners run from a phone.",
  useCase: "locksmith",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Locksmiths often run lean—owner-operators, a few W-2 techs, and 1099 partners for overflow. Payroll should stay affordable, handle odd-hour differentials, and keep contractor payments separate from employee taxes. If you already swipe cards on Square, Square Payroll can reduce logins; otherwise Gusto and Patriot win on clarity.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "square-payroll",
      name: "Square Payroll",
      badge: "Best if Square already runs payments",
      description:
        "Add payroll beside POS and invoicing—one ecosystem for a truck-and-van operation that lives on Square.",
      rating: "4.3",
      startingPrice: "$35/mo",
      reviewHref: getPayrollReviewUrl("square-payroll"),
      visitUrl: "https://squareup.com/us/en/payroll",
      logoSrc: "/Logos/square.jpeg",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best contractor + employee mix",
      description:
        "Run W-2 dispatchers and 1099 emergency partners with automatic filings—ideal when you outgrow spreadsheets.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best full-service taxes on a budget",
      description:
        "Flat structure with included support—strong for shops that want payroll off the owner’s nights but not enterprise pricing.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "patriot-payroll",
      name: "Patriot Payroll",
      badge: "Best bare-bones cost control",
      description:
        "Low monthly floor for very small headcounts when you need compliant pay runs without HR extras.",
      rating: "4.2",
      startingPrice: "$17/mo",
      reviewHref: getPayrollReviewUrl("patriot-payroll"),
      visitUrl: "https://www.patriotsoftware.com/payroll",
      logoSrc: "/Logos/patriot.jpeg",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "square-payroll", name: "Square Payroll", logoSrc: "/Logos/square.jpeg", bestFor: "Square ecosystem", startingPrice: "$35/mo", payrollTypes: "W-2, 1099", standoutFeature: "Unified Square account", reviewHref: getPayrollReviewUrl("square-payroll") },
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "Mixed workforce", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Hiring + benefits path", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Support + value", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Flat pricing", reviewHref: getPayrollReviewUrl("onpay") },
    { slug: "patriot-payroll", name: "Patriot Payroll", logoSrc: "/Logos/patriot.jpeg", bestFor: "Minimum viable payroll", startingPrice: "$17/mo", payrollTypes: "W-2, 1099", standoutFeature: "Low cost", reviewHref: getPayrollReviewUrl("patriot-payroll") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "After-hours and holiday rates", body: "Configure earning types so premiums are taxed and reported consistently—verbal promises don’t survive audits." },
    { heading: "1099 call partners", body: "Pay partners as contractors only when the relationship qualifies. Payroll software issues 1099-NEC; it does not decide classification." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "Square Payroll",
      body: "Square Payroll is payroll software locksmiths pick when card present, invoices, and deposits already run through Square—adding payroll keeps one vendor, one login, and predictable base-plus-employee pricing for micro teams. It handles W-2 employees and 1099 contractors with tax filing, which matches mobile locksmith businesses that occasionally pay overflow partners. Configure after-hours or holiday premiums as distinct earning types so overtime math stays defensible. Run your first pay run with a mix of shop hours and emergency call payouts to confirm contractor payments do not look like disguised wages. This aligns with searches like “Square Payroll for small business” or “payroll if I use Square POS.”",
    },
    {
      heading: "Gusto",
      body: "Gusto is payroll software for locksmith shops scaling past the owner-operator stage: W-2 dispatch and road techs, 1099 weekend coverage, and optional health or retirement when you compete for talent. Contractor self-service and integrated filings reduce admin when you are still answering emergency calls yourself. Use roles so only trusted leads approve time, and document reimbursement rules for vehicles or tools before you automate. Buyers comparing “Gusto vs Square Payroll for growing trades” usually want HR-light depth without leaving modern SaaS.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for locksmiths who want full-service payroll taxes, included support, and flat pricing—but do not want to standardize on Square or pay enterprise quotes. It fits the search “affordable payroll with W-2 and 1099” for storefront-plus-van operations. During setup, list every state where employees perform work; emergency routes often trigger nexus questions. Sync GL exports to your accountant’s chart of accounts in one pass. Trial a pay period with overnight differentials and a contractor payout to validate year-end forms.",
    },
    {
      heading: "Patriot Payroll",
      body: "Patriot Payroll is payroll software for ultra-lean locksmith businesses—often one to three people—where every monthly dollar matters and you need compliant pay runs without paying for HR you will not use. Low published base pricing maps to “cheapest payroll software for small business” intent. Plan an upgrade path before you need deep accounting integrations or multi-state complexity; Patriot shines on simplicity, not breadth. Pair with clear 1099 vs W-2 documentation for any call partners you pay.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "Square Payroll", href: getPayrollReviewUrl("square-payroll") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
    { name: "Patriot Payroll", href: getPayrollReviewUrl("patriot-payroll") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Square Payroll vs Gusto", href: getPayrollCompareUrl("square-payroll-vs-gusto") },
    { label: "Patriot Payroll vs Gusto", href: getPayrollCompareUrl("patriot-payroll-vs-gusto") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
    { label: "Patriot Payroll vs OnPay", href: getPayrollCompareUrl("patriot-payroll-vs-onpay") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What payroll do locksmiths use?", a: "Square Payroll inside the Square stack; Gusto for growing mixed W-2/1099 teams; OnPay for value and support; Patriot for the leanest cost." },
    { q: "Can locksmiths pay 1099 contractors through payroll?", a: "Yes—use contractor payments with year-end 1099-NEC. Keep contracts and invoices that support independent contractor status." },
  ] as BestForFaqItem[],
};

export const FLOORING_CONTRACTORS_PAGE_PROPS = {
  title: "Best Payroll Software for Flooring Contractors (2026)",
  subtitle:
    "Payroll for flooring showrooms and install crews: job-based labor, multi-crew overtime, and growing benefits as you hire estimators and project managers.",
  useCase: "flooring",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Flooring contractors balance design staff, warehouse helpers, and install crews—often with different pay types and travel. Payroll should support W-2 teams, occasional 1099 installers, and QuickBooks alignment when materials and labor roll into job costing. Rippling enters the list when you add locations or want HR workflows beyond pay runs alone.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best SMB payroll for mixed crews",
      description:
        "Hiring, benefits, and contractor tools in one place—fits showrooms scaling past a single install team.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best QuickBooks-centric job costing",
      description:
        "Post wages to jobs or classes when estimates, POs, and P&L already live in QuickBooks.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "rippling",
      name: "Rippling",
      badge: "Best for multi-showroom operators",
      description:
        "Payroll plus HR automation when you standardize onboarding across branches and need device or policy controls.",
      rating: "4.6",
      startingPrice: "Custom / quote",
      reviewHref: getPayrollReviewUrl("rippling"),
      visitUrl: "https://www.rippling.com",
      logoSrc: "/Logos/rippling.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best transparent pricing",
      description:
        "Full-service payroll without Rippling’s breadth—strong when you want flat fees and included support.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "Growing flooring SMBs", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Benefits path", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "QB job costing", startingPrice: "$30/mo", payrollTypes: "W-2, 1099", standoutFeature: "Labor to jobs", reviewHref: getPayrollReviewUrl("quickbooks-payroll") },
    { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", bestFor: "Multi-entity HR", startingPrice: "Custom", payrollTypes: "W-2, 1099", standoutFeature: "Workflow automation", reviewHref: getPayrollReviewUrl("rippling") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Flat pricing", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Support included", reviewHref: getPayrollReviewUrl("onpay") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Install vs showroom roles", body: "Split departments for reporting; installers may have different OT or travel pay than sales." },
    { heading: "Subcontractor installers", body: "Track 1099 payouts separately from W-2 wages—your flooring contracts should spell out who is an employee." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is payroll software flooring contractors use when they hire estimators, warehouse staff, and multi-crew installers and need W-2 payroll plus 1099 specialty subs in one system—with optional benefits to compete in tight labor markets. Time tools and permissions help when residential and commercial crews follow different pay rules. Pilot payroll through a peak season week with overtime on large material jobs and confirm contractor packets for measure-only partners. This matches search intent for “payroll software for construction trades” and “best payroll for small business with contractors.”",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is the best payroll software for flooring contractors when job costing, purchase orders, and P&L already run in QuickBooks and you need wages and burden allocated to the same jobs you bid. Without that alignment, “profit per job” drifts from reality. Integrate time or manual class splits so install hours map before payroll closes. Review workers’ comp and burden with your insurance broker when payroll posts. Buyers explicitly comparing “QuickBooks Payroll vs Gusto for job costing” should prioritize native payroll if Intuit owns the books end to end.",
    },
    {
      heading: "Rippling",
      body: "Rippling is payroll software for flooring operators opening multiple showrooms or franchising-style expansion who want payroll, HR policies, onboarding, and optional IT workflows in one automated stack—beyond what typical SMB payroll offers. Pricing is quoted; justify it with hiring volume, multi-entity reporting, and policy enforcement you will actually run. Implementation matters: map locations, approvers, and pay groups before go-live. This serves searches like “Rippling vs Gusto for multi-location business” and “HRIS with payroll for growing contractor.”",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for flooring businesses that want full-service tax filing, W-2 and 1099 together, included support, and transparent fees—without Rippling’s complexity or QuickBooks lock-in. It fits owner-led teams where payroll is weekly overhead, not a strategic IT project. Confirm accounting sync and classing strategy with your CPA if you still need job detail downstream. Searchers looking for “OnPay vs Gusto for contractors” often land here when flat pricing and phone support win.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "Rippling", href: getPayrollReviewUrl("rippling") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Rippling vs Gusto", href: getPayrollCompareUrl("rippling-vs-gusto") },
    { label: "Rippling vs QuickBooks Payroll", href: getPayrollCompareUrl("rippling-vs-quickbooks-payroll") },
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What is the best payroll software for flooring contractors?", a: "Gusto for most growing teams; QuickBooks Payroll when QuickBooks owns job costing; Rippling for multi-location HR automation; OnPay for flat pricing." },
  ] as BestForFaqItem[],
};

export const FENCE_DECK_PAGE_PROPS = {
  title: "Best Payroll Software for Fence & Deck Builders (2026)",
  subtitle:
    "Payroll for outdoor construction crews: prevailing wage jobs, overtime on long summer days, and QuickBooks alignment for job-costed labor.",
  useCase: "fence-deck",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Fence and deck builders run tight crews with weather-driven overtime and sometimes certified payroll on public work. You need payroll that handles W-2 carpenters and laborers, tracks earning types cleanly, and—when you live in QuickBooks—posts labor to jobs. ADP appears when you bid larger municipal work and need serviced compliance support.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value for crew-heavy payroll",
      description:
        "Straightforward W-2 and 1099 with included support—fits owner-GCs who still run payroll between site visits.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best when QuickBooks tracks jobs",
      description:
        "Labor posts alongside material and subcontractor costs for deck and fence jobs managed in QuickBooks.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best all-in-one for growing builders",
      description:
        "Hiring, benefits, and contractors—helpful when you promote leads and add admin staff beyond the crew.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "adp",
      name: "ADP",
      badge: "Best for larger crews and compliance depth",
      description:
        "Serviced payroll with HR options when you scale past a single crew or need stronger multi-state support.",
      rating: "4.4",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("adp"),
      visitUrl: "https://www.adp.com/small-business",
      logoSrc: "/Logos/adp.jpeg",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Value + support", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Flat plan", reviewHref: getPayrollReviewUrl("onpay") },
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "Job costing", startingPrice: "$30/mo", payrollTypes: "W-2, 1099", standoutFeature: "Labor to jobs", reviewHref: getPayrollReviewUrl("quickbooks-payroll") },
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "Hiring + benefits", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "All-in-one", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", bestFor: "Scaling contractors", startingPrice: "Custom", payrollTypes: "W-2, 1099", standoutFeature: "Serviced payroll", reviewHref: getPayrollReviewUrl("adp") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Overtime on long summer days", body: "Configure rules before peak season; misclassified OT is a common contractor audit trigger." },
    { heading: "Certified payroll projects", body: "Complex prevailing wage reporting may need specialized workflows—confirm with your provider during presales if public work is core revenue." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "OnPay",
      body: "OnPay is payroll software fence and deck builders choose when they need dependable full-service payroll taxes, W-2 crews, and occasional 1099 carpentry or staging partners—with included support and clear per-employee pricing while the owner still runs jobsites. It answers “affordable payroll for small construction company” without forcing Rippling or ADP. Configure overtime rules before summer peak; long daylight weeks drive OT exposure. Map GL sync if your bookkeeper uses QuickBooks or Xero outside payroll. Run a test payroll that includes Saturday premium pay and a legitimate subcontractor draw.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software for fence and deck contractors whose estimates, change orders, and vendor bills already live in QuickBooks and who need labor dollars on the same jobs as materials and subs—critical for deck and railing projects with tight margins. Tie payroll to classes or jobs your PM reviews weekly. If you lack certified payroll today but bid public work later, ask your CPA whether native job posting plus exports is enough or if you need add-ons. Search intent “payroll with job costing for construction” fits this path when QuickBooks is non-negotiable.",
    },
    {
      heading: "Gusto",
      body: "Gusto is payroll software for growing fence and deck companies hiring project coordinators, lead carpenters, or offering benefits to reduce turnover on skilled crews—while still paying 1099 specialists when the relationship is truly contractual. Onboarding checklists and document storage help when you add people every spring. Separate earning types for production bonuses versus hourly OT. Buyers comparing “Gusto vs QuickBooks Payroll” who do not need Intuit-native job posting often pick Gusto for HR-light simplicity.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software to evaluate when your fence or deck business scales into multiple crews, states, or HR policies and you want serviced payroll with compliance depth—not only a self-serve app. Quote implementation, per-pay support, and year-end services; compare to Paychex if you interview traditional providers. Ask about prevailing wage or certified payroll partners if municipal work grows. This maps to “ADP payroll for construction company” and multi-state contractor searches.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "ADP", href: getPayrollReviewUrl("adp") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Gusto vs ADP", href: getPayrollCompareUrl("gusto-vs-adp") },
    { label: "QuickBooks Payroll vs OnPay", href: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What payroll should fence and deck builders use?", a: "OnPay for value; QuickBooks Payroll for QuickBooks job costing; Gusto for hiring and benefits; ADP when you need serviced payroll at scale." },
  ] as BestForFaqItem[],
};

export const GLASS_WINDOW_INSTALLERS_PAGE_PROPS = {
  title: "Best Payroll Software for Glass & Window Installers (2026)",
  subtitle:
    "Payroll for glass shops: measured-install crews, showroom staff, glazier OT, and QuickBooks job alignment for long-lead custom orders.",
  useCase: "glass-window-installers",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Glass and window companies often pair inside sales with field crews and may use 1099 specialists for heavy commercial lifts. Payroll must handle W-2 glaziers, clean contractor payouts, and—when books are in QuickBooks—labor that maps to high-ticket jobs. Paychex rounds out the list for owners who want a traditional partner as they add locations.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best for QB-driven job P&L",
      description:
        "Keep payroll dollars on the same jobs as deposits and materials when QuickBooks is your operating system.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best modern payroll for mixed teams",
      description:
        "W-2 crews plus 1099 commercial partners with hiring tools when you recruit installers in tight labor markets.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "paychex",
      name: "Paychex",
      badge: "Best full-service partner",
      description:
        "Hands-on support and HR depth when you add branches or want advisory help beyond pure software.",
      rating: "4.3",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("paychex"),
      visitUrl: "https://www.paychex.com/small-business",
      logoSrc: "/Logos/paychex.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best predictable SMB cost",
      description:
        "Transparent pricing with W-2 and 1099—fits single-location glass shops that still want full-service filing.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "QB jobs", startingPrice: "$30/mo", payrollTypes: "W-2, 1099", standoutFeature: "Class/job labor", reviewHref: getPayrollReviewUrl("quickbooks-payroll") },
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "All-in-one", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Hiring + benefits", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", bestFor: "Advisory payroll", startingPrice: "Custom", payrollTypes: "W-2, 1099", standoutFeature: "Specialist support", reviewHref: getPayrollReviewUrl("paychex") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Flat fees", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Simple stack", reviewHref: getPayrollReviewUrl("onpay") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Commercial vs residential crews", body: "Different wage structures or travel pay may apply—document earning codes with your payroll admin." },
    { heading: "Long lead custom orders", body: "Payroll timing still follows pay periods, not customer deposits—keep cash and wage accruals aligned with your CPA." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software glass and window installers use when custom orders, deposits, and vendor bills already sit in QuickBooks and labor must burden the same high-ticket jobs as glass, hardware, and freight—otherwise commercial and residential P&L blur together. Post wages to jobs or classes your estimator recognizes. If crews split time between shop fabrication and field install, document allocation rules before payroll closes. This directly serves buyers searching “QuickBooks payroll for contractors” and “job costing for window company.”",
    },
    {
      heading: "Gusto",
      body: "Gusto is payroll software for glass companies hiring measurers, project coordinators, and field crews in competitive labor markets, with room to add medical and retirement when you need to retain senior glaziers. Contractor onboarding supports 1099 rigging or specialty commercial partners when contracts support it—payroll software does not decide classification. Run parallel pay tests around long-lead jobs where deposits arrive before payroll accrues. Matches “best payroll for small business with benefits” and mixed W-2/1099 intent.",
    },
    {
      heading: "Paychex",
      body: "Paychex is payroll software window and glass operators shortlist when they want a traditional full-service partner—dedicated specialists, advisory tone, and HR modules—as they add branches or need phone-first help through multi-state payroll. Compare quoted TCO to Gusto and ADP at the same headcount and service level. Ask how reporting supports blended crews if residential and commercial P&L differ. Search patterns “Paychex vs ADP small business” and “payroll provider with support for contractors” apply.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for single-location glass shops that still want full-service payroll filing, W-2 and 1099 together, and included support—without paying for enterprise relationship tiers they will not use. Transparent pricing fits owner-managers running payroll between customer walk-ins. Sync accounting once; verify 401(k) or deductions if you add them later. Answers “OnPay reviews for small business” style queries when simplicity and cost clarity matter most.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "Paychex", href: getPayrollReviewUrl("paychex") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "Gusto vs Paychex", href: getPayrollCompareUrl("gusto-vs-paychex") },
    { label: "QuickBooks Payroll vs OnPay", href: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What payroll is best for glass and window companies?", a: "QuickBooks Payroll for QuickBooks job costing; Gusto for hiring-heavy teams; Paychex for serviced payroll; OnPay for flat SMB pricing." },
  ] as BestForFaqItem[],
};

export const CONCRETE_CONTRACTORS_PAGE_PROPS = {
  title: "Best Payroll Software for Concrete Contractors (2026)",
  subtitle:
    "Payroll for flatwork and structural concrete: crew OT, multi-state job sites, union or prevailing wage considerations, and heavy QuickBooks job costing.",
  useCase: "concrete-contractors",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Concrete contractors push large crews through weather windows—overtime, re-starts, and travel between pours are normal. Payroll must handle W-2 laborers and finishers, 1099 pump or saw partners where appropriate, and reporting that your bonding agent can follow. ADP and Paychex suit operators who want serviced payroll as compliance load grows; QuickBooks keeps labor on jobs when your books already live there.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "adp",
      name: "ADP",
      badge: "Best for scaling concrete firms",
      description:
        "Serviced payroll and HR depth when you add foremen, safety programs, and multi-state registrations.",
      rating: "4.4",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("adp"),
      visitUrl: "https://www.adp.com/small-business",
      logoSrc: "/Logos/adp.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best QuickBooks job labor",
      description:
        "Attach wages to jobs and classes so pour labor rolls up with materials and subs in QuickBooks.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best all-in-one for regional pours",
      description:
        "Hiring, benefits, and contractor payouts—fits growing concrete companies that are not ready for enterprise payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value for straightforward crews",
      description:
        "Flat pricing with support—strong when OT rules are consistent and you want transparent per-run costs.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", bestFor: "Large crews / HR", startingPrice: "Custom", payrollTypes: "W-2, 1099", standoutFeature: "Serviced payroll", reviewHref: getPayrollReviewUrl("adp") },
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "QB job costing", startingPrice: "$30/mo", payrollTypes: "W-2, 1099", standoutFeature: "Labor to jobs", reviewHref: getPayrollReviewUrl("quickbooks-payroll") },
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "SMB growth", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Benefits + subs", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Flat fees", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Support included", reviewHref: getPayrollReviewUrl("onpay") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Overtime on pours", body: "Model OT before you promise schedules—concrete delays cascade into expensive weeks." },
    { heading: "Prevailing wage", body: "If you perform public work, confirm whether your payroll vendor supports certified payroll reporting or if you need add-on tools." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "ADP",
      body: "ADP is payroll software concrete contractors adopt when crew counts, safety programs, and multi-state or multi-job-site payroll outgrow lightweight SMB tools—often alongside HR generalists or regional offices. Serviced implementation helps align earning codes with how foremen report hours and how you allocate labor to pours or phases. Ask about certified or prevailing wage add-ons if public work is material to revenue; not every SMB payroll handles those reports natively. Compare ADP’s total serviced cost to Paychex when buyers search “ADP vs Paychex for construction.”",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software for concrete operations that run estimates, subcontracts, and equipment costs in QuickBooks and need payroll burden on the same jobs as rebar, pump fees, and labor burden assumptions your bonding agent reviews. Map classes to projects or cost codes your PM uses. Reconcile a closed pour’s payroll slice against actual hours before trusting margin. Integrate time if crews clock by job. This is the clearest fit for “QuickBooks payroll job costing concrete contractor” intent.",
    },
    {
      heading: "Gusto",
      body: "Gusto is payroll software regional concrete firms use when they need to hire finishers and drivers quickly, offer benefits to compete with union or large GC payroll, and still pay 1099 pump or cutting partners through contractor workflows—without a six-month enterprise rollout. Use onboarding tasks for safety acknowledgments where appropriate. Document per-diem or travel if crews move between counties. Serves “Gusto for construction payroll” and growing SMB searches.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for concrete contractors who want full-service taxes, predictable fees, and human support while headcount stays in the dozens—not hundreds—and OT plus travel pay are the main complexities. Sync to accounting in one clean export so your CPA can still burden jobs outside payroll if needed. Trial payroll through a weather-delay week when crews stack OT to catch up. Fits “OnPay vs Gusto for small contractors” comparisons when budget transparency wins.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "ADP", href: getPayrollReviewUrl("adp") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Gusto vs ADP", href: getPayrollCompareUrl("gusto-vs-adp") },
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "ADP vs Paychex", href: getPayrollCompareUrl("adp-vs-paychex") },
    { label: "QuickBooks Payroll vs OnPay", href: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What payroll software do concrete contractors use?", a: "ADP for scaled HR and serviced payroll; QuickBooks Payroll for QuickBooks job costing; Gusto for growing SMB teams; OnPay for value." },
  ] as BestForFaqItem[],
};

export const EXCAVATION_PAGE_PROPS = {
  title: "Best Payroll Software for Excavation Companies (2026)",
  subtitle:
    "Payroll for earthwork: equipment operators, laborers, multi-job sites, and heavy compliance as you add DOT or union rules.",
  useCase: "excavation",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Excavation companies juggle W-2 operators and ground crews, sometimes 1099 trucking or surveying partners, and payroll complexity spikes when you cross state lines or bid federal work. Paychex and ADP fit operators who want specialists on call; QuickBooks keeps labor on jobs when project accounting already lives in Intuit.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "adp",
      name: "ADP",
      badge: "Best enterprise-style support",
      description:
        "Serviced payroll with HR modules when you run larger crews, safety programs, and multi-state operations.",
      rating: "4.4",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("adp"),
      visitUrl: "https://www.adp.com/small-business",
      logoSrc: "/Logos/adp.jpeg",
    },
    {
      slug: "paychex",
      name: "Paychex",
      badge: "Best traditional partner for field ops",
      description:
        "Advisory support and compliance depth when owners want a relationship beyond pure SaaS payroll.",
      rating: "4.3",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("paychex"),
      visitUrl: "https://www.paychex.com/small-business",
      logoSrc: "/Logos/paychex.jpeg",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best modern SMB payroll",
      description:
        "Straightforward W-2 and 1099 with benefits when you grow past a single crew but are not ready for serviced enterprise payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best QuickBooks project alignment",
      description:
        "Labor posts to jobs when excavation billing and equipment costs already run through QuickBooks.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", bestFor: "Scaled operations", startingPrice: "Custom", payrollTypes: "W-2, 1099", standoutFeature: "HR + payroll", reviewHref: getPayrollReviewUrl("adp") },
    { slug: "paychex", name: "Paychex", logoSrc: "/Logos/paychex.jpeg", bestFor: "Advisory support", startingPrice: "Custom", payrollTypes: "W-2, 1099", standoutFeature: "Compliance help", reviewHref: getPayrollReviewUrl("paychex") },
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "SMB growth", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "All-in-one", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "QB jobs", startingPrice: "$30/mo", payrollTypes: "W-2, 1099", standoutFeature: "Job labor", reviewHref: getPayrollReviewUrl("quickbooks-payroll") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Equipment vs labor roles", body: "Operators and laborers may have different pay grades—use clean earning codes and job allocations if you cost by project." },
    { heading: "Interstate crews", body: "Register payroll taxes where employees work—not only where HQ sits." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "ADP",
      body: "ADP is payroll software excavation companies choose when they add HR roles, formal safety training, multi-state registrations, and larger operator or laborer counts—situations where compliance touchpoints rival pay runs. Implementation should map departments to equipment versus labor if reporting splits that way for bonding or insurance. Clarify how time integrations feed payroll if you use project or fleet software. Buyers searching “ADP payroll for heavy construction” or “enterprise payroll for contractors” evaluate ADP against Paychex on relationship and quote.",
    },
    {
      heading: "Paychex",
      body: "Paychex is payroll software excavation owners pick when they want advisory-style support—talk to a human about deposits, notices, and year-end—with payroll, HR, and time modules that scale past basic SaaS. Custom pricing rewards stable headcount forecasts; negotiate what is included for amendments and W-2c support. If crews earn in multiple states, register during onboarding, not after a penalty. Matches “Paychex small business payroll reviews” and “full-service payroll provider” intent.",
    },
    {
      heading: "Gusto",
      body: "Gusto is payroll software for regional excavators who are not yet enterprise-scale but need to hire operators and labor fast, offer benefits to compete, and run 1099 trucking or survey partners when contracts qualify. Self-serve signup fits teams without a payroll department. Audit worker classification for anyone you treat as a contractor but supervise like employees. Searchers comparing “Gusto vs ADP for growing business” often land here before they need Paychex-level handholding.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software excavation contractors use when project billing, equipment codes, and job P&L already live in QuickBooks and payroll dollars must land on earthwork jobs alongside rental and fuel. Without that, job profitability for DOT or private clients is harder to defend. Map burden and WC with your broker when payroll posts. If you use QuickBooks Time, validate approvals before OT on long shifts. Serves “QuickBooks payroll for construction jobs” search intent directly.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "ADP", href: getPayrollReviewUrl("adp") },
    { name: "Paychex", href: getPayrollReviewUrl("paychex") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "ADP vs Paychex", href: getPayrollCompareUrl("adp-vs-paychex") },
    { label: "Gusto vs ADP", href: getPayrollCompareUrl("gusto-vs-adp") },
    { label: "Gusto vs Paychex", href: getPayrollCompareUrl("gusto-vs-paychex") },
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What payroll is best for excavation companies?", a: "ADP or Paychex for serviced payroll at scale; Gusto for modern SMB needs; QuickBooks Payroll when QuickBooks owns job costing." },
  ] as BestForFaqItem[],
};

export const MOBILE_MECHANICS_PAGE_PROPS = {
  title: "Best Payroll Software for Mobile Mechanics (2026)",
  subtitle:
    "Payroll for mobile auto repair: van-based techs, simple contractor payouts, and Square-friendly stacks when payments already run on Square.",
  useCase: "mobile-mechanics",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Mobile mechanics often start solo, add a W-2 apprentice, and occasionally pay specialty subs. Payroll should stay lightweight—published pricing, mobile-friendly workflows, and Square integration if that is where invoices live. QuickBooks Payroll appears when the business matures into shop-plus-van operations with books in QuickBooks.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "square-payroll",
      name: "Square Payroll",
      badge: "Best if Square runs your business",
      description:
        "Keep payroll next to invoicing and card readers—ideal for road-service mechanics already on Square.",
      rating: "4.3",
      startingPrice: "$35/mo",
      reviewHref: getPayrollReviewUrl("square-payroll"),
      visitUrl: "https://squareup.com/us/en/payroll",
      logoSrc: "/Logos/square.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best value full-service payroll",
      description:
        "W-2 and 1099 with included support—great when you hire a second tech but stay lean on admin.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best hiring and benefits path",
      description:
        "Scale from a lone operator to a small team with benefits and contractor tools without Rippling overhead.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best when QuickBooks is the books",
      description:
        "Align payroll with automotive accounting and job costing if you operate a bay plus mobile units in QuickBooks.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "square-payroll", name: "Square Payroll", logoSrc: "/Logos/square.jpeg", bestFor: "Square users", startingPrice: "$35/mo", payrollTypes: "W-2, 1099", standoutFeature: "One login", reviewHref: getPayrollReviewUrl("square-payroll") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Flat pricing", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Support", reviewHref: getPayrollReviewUrl("onpay") },
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "Team growth", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Benefits", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "QB shops", startingPrice: "$30/mo", payrollTypes: "W-2, 1099", standoutFeature: "Job costing", reviewHref: getPayrollReviewUrl("quickbooks-payroll") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Van stock vs employee tools", body: "Reimbursements for tools and fuel need accountable plans—document policies before you run them through payroll." },
    { heading: "1099 specialists", body: "Transmission or programming partners may be contractors; employees who run your van routes are usually W-2." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "Square Payroll",
      body: "Square Payroll is payroll software mobile mechanics choose when invoicing, card capture, and maybe POS already live in Square—one ecosystem reduces context switching when you are dispatching from a van. It runs W-2 and 1099 payroll with tax filing, matching road-service businesses that occasionally pay diagnostic or programming specialists as contractors. Set up reimbursements for fuel or tools with your CPA so taxable treatment matches policy. This answers “do I use Square Payroll if I use Square” and “simple payroll for automotive mobile service.”",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for mobile auto repair when you want full-service payroll, included support, and flat SMB pricing without committing the whole business to Square. It fits second-tech hires and apprentice payroll where overtime can spike on backlog weeks. Map contractor payments separately from employee wages. Sync to QuickBooks or Xero if your accountant keeps books outside payroll. Searchers comparing “OnPay vs Gusto for small shop” get a strong value baseline here.",
    },
    {
      heading: "Gusto",
      body: "Gusto is payroll software mobile mechanics use when they add benefits to retain techs against dealerships and fleets, or when hiring accelerates beyond what bare-bones payroll supports. Hiring checklists and integrated benefits administration match “payroll with benefits for small business” intent. Use contractor self-service for legitimate 1099 partners; misclassifying employees as contractors remains a legal risk. Pilot a pay run with tool allowances and weekend differentials.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software for mobile mechanic operations that also run a bay or central shop in QuickBooks and need labor on jobs or classes alongside parts and sublet—common as you scale beyond pure mobile. Native payroll keeps withholding and job detail in one file your bookkeeper can audit. If you later add fleet or route metrics, confirm how payroll dimensions map. Fits “QuickBooks payroll for auto repair” alongside our dedicated auto shop page, with emphasis on van-plus-shop P&L.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "Square Payroll", href: getPayrollReviewUrl("square-payroll") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Square Payroll vs Gusto", href: getPayrollCompareUrl("square-payroll-vs-gusto") },
    { label: "Square Payroll vs QuickBooks Payroll", href: getPayrollCompareUrl("square-payroll-vs-quickbooks-payroll") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What payroll should mobile mechanics use?", a: "Square Payroll if you already use Square; OnPay for value; Gusto for benefits; QuickBooks Payroll when QuickBooks runs the books." },
  ] as BestForFaqItem[],
};

export const CLEANING_FRANCHISES_PAGE_PROPS = {
  title: "Best Payroll Software for Cleaning Franchises (2026)",
  subtitle:
    "Payroll for franchised cleaning brands: multi-territory reporting, W-2 crews, 1099 route partners, and HR automation as you standardize onboarding.",
  useCase: "cleaning-franchises",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Cleaning franchises must balance franchisor reporting, local labor rules, and often thin margins. Payroll should scale across entities or locations, support mixed W-2 and 1099 labor, and give ops leaders visibility without duplicating HR in every territory. Rippling fits brands automating policy; ADP fits traditional franchise support; Gusto remains the friendly default for emerging regional networks.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "rippling",
      name: "Rippling",
      badge: "Best multi-entity automation",
      description:
        "Payroll, HR, and policy workflows across locations—strong when franchisees adopt a common operating system.",
      rating: "4.6",
      startingPrice: "Custom / quote",
      reviewHref: getPayrollReviewUrl("rippling"),
      visitUrl: "https://www.rippling.com",
      logoSrc: "/Logos/rippling.jpeg",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best growing franchisee groups",
      description:
        "Hiring, benefits, and contractor tools with approachable pricing—fits franchisees rolling out standardized payroll.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "adp",
      name: "ADP",
      badge: "Best full-service franchise payroll",
      description:
        "Serviced payroll and HR when territories multiply and compliance load justifies a big-name partner.",
      rating: "4.4",
      startingPrice: "Custom pricing",
      reviewHref: getPayrollReviewUrl("adp"),
      visitUrl: "https://www.adp.com/small-business",
      logoSrc: "/Logos/adp.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best cost clarity for franchisees",
      description:
        "Transparent pricing with support—ideal for single-territory owners who still need W-2 and 1099 in one account.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "rippling", name: "Rippling", logoSrc: "/Logos/rippling.jpeg", bestFor: "Multi-entity HR", startingPrice: "Custom", payrollTypes: "W-2, 1099", standoutFeature: "Automation", reviewHref: getPayrollReviewUrl("rippling") },
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "SMB franchisees", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Benefits", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "adp", name: "ADP", logoSrc: "/Logos/adp.jpeg", bestFor: "Serviced payroll", startingPrice: "Custom", payrollTypes: "W-2, 1099", standoutFeature: "Scale", reviewHref: getPayrollReviewUrl("adp") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Flat pricing", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Support", reviewHref: getPayrollReviewUrl("onpay") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Franchise agreements", body: "Confirm merchant-of-record and payroll branding rules with your franchisor before selecting processors or PEOs." },
    { heading: "Mixed workforce", body: "Many brands use W-2 teams with 1099 overflow—keep contractor packets consistent across territories." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "Rippling",
      body: "Rippling is payroll software cleaning franchisors and multi-territory brands evaluate when they need payroll plus HR automation—onboarding, policies, possibly devices—across franchisees with consistent playbooks, not a single-location mop bucket operation. Quoted pricing and implementation time are real; ROI shows up when hiring volume and policy enforcement justify the platform. Align with franchise agreements on merchant of record and reporting before you sign. Matches “Rippling payroll for multi-location” and “HRIS with payroll for franchise” searches.",
    },
    {
      heading: "Gusto",
      body: "Gusto is payroll software cleaning franchisees use when they need modern self-serve payroll, W-2 crews, 1099 overflow labor, and optional benefits to compete in local markets—without Rippling’s enterprise scope or ADP’s traditional contracting style. Contractor portals and integrated filings reduce back-office drag when territories add accounts. Document royalty or fee deductions with your franchisor separately; payroll should not blur those flows. Serves “Gusto for franchise payroll” and growing SMB franchisee intent.",
    },
    {
      heading: "ADP",
      body: "ADP is payroll software janitorial and cleaning franchise networks choose when serviced payroll, HR compliance, and multi-state support matter as headcount and contract complexity grow—think large regional operators, not three vans. Compare ADP vs Paychex on quote, implementation, and ongoing support model. Clarify how you handle tipped or bonus structures if your brand uses them. This fits “ADP payroll for franchise” and compliance-heavy buyer journeys.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software for individual cleaning franchise territories that want full-service tax filing, W-2 and 1099 in one transparent plan, and phone support—when Rippling is too much and ADP is too heavy. Flat pricing helps thin-margin operators forecast payroll overhead. Map accounting sync once with your franchise’s preferred chart of accounts. Answers “affordable payroll for janitorial company” and OnPay-vs-Gusto value comparisons.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "Rippling", href: getPayrollReviewUrl("rippling") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "ADP", href: getPayrollReviewUrl("adp") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Rippling vs Gusto", href: getPayrollCompareUrl("rippling-vs-gusto") },
    { label: "Gusto vs ADP", href: getPayrollCompareUrl("gusto-vs-adp") },
    { label: "Rippling vs QuickBooks Payroll", href: getPayrollCompareUrl("rippling-vs-quickbooks-payroll") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What payroll software is best for cleaning franchises?", a: "Rippling for multi-entity automation; Gusto for most franchisee groups; ADP for serviced payroll at scale; OnPay for transparent pricing." },
    { q: "How do cleaning franchises handle 1099 cleaners?", a: "Use contractor profiles with documented agreements. Payroll software issues 1099-NEC but does not determine worker classification." },
  ] as BestForFaqItem[],
};

export const EVENT_SERVICES_PAGE_PROPS = {
  title: "Best Payroll Software for Event Services (2026)",
  subtitle:
    "Payroll for event production: seasonal staff spikes, 1099 creatives, tipped or bonus-heavy roles, and lean ops between gigs.",
  useCase: "event-services",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Event services businesses surge around seasons—weddings, festivals, corporate activations—so payroll must onboard and offboard quickly, handle W-2 stage crews and 1099 AV or talent partners, and stay affordable in slow months. Gusto and Square Payroll fit rapid staffing; Patriot keeps costs low for micro teams; OnPay balances support with predictable fees.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best flexible hiring for seasonal spikes",
      description:
        "Smooth onboarding and contractor tools when you scale crews for peak weekends then taper down.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "square-payroll",
      name: "Square Payroll",
      badge: "Best if Square powers tickets and invoices",
      description:
        "Simple payroll beside Square POS or invoicing—great for smaller production shops already on Square.",
      rating: "4.3",
      startingPrice: "$35/mo",
      reviewHref: getPayrollReviewUrl("square-payroll"),
      visitUrl: "https://squareup.com/us/en/payroll",
      logoSrc: "/Logos/square.jpeg",
    },
    {
      slug: "patriot-payroll",
      name: "Patriot Payroll",
      badge: "Best low overhead between events",
      description:
        "Minimal monthly cost when you only keep a skeleton staff between seasons and need compliant pay runs.",
      rating: "4.2",
      startingPrice: "$17/mo",
      reviewHref: getPayrollReviewUrl("patriot-payroll"),
      visitUrl: "https://www.patriotsoftware.com/payroll",
      logoSrc: "/Logos/patriot.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best support when payroll is not your day job",
      description:
        "Full-service taxes with included help—useful when owners juggle sales, logistics, and HR in the same week.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "Seasonal hiring", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Onboarding", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "square-payroll", name: "Square Payroll", logoSrc: "/Logos/square.jpeg", bestFor: "Square stack", startingPrice: "$35/mo", payrollTypes: "W-2, 1099", standoutFeature: "Simple", reviewHref: getPayrollReviewUrl("square-payroll") },
    { slug: "patriot-payroll", name: "Patriot Payroll", logoSrc: "/Logos/patriot.jpeg", bestFor: "Lean teams", startingPrice: "$17/mo", payrollTypes: "W-2, 1099", standoutFeature: "Low cost", reviewHref: getPayrollReviewUrl("patriot-payroll") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Support + value", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Flat plan", reviewHref: getPayrollReviewUrl("onpay") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Bonuses and show premiums", body: "Document supplemental wages for load-in weekends—tax treatment should match payroll settings." },
    { heading: "1099 creatives", body: "Treat true contractors as 1099; stage hands you direct day-to-day are often W-2—get counsel if unsure." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is payroll software event services companies use when they surge headcount for season or show calendars and need fast onboarding, W-2 stage or ops staff, and 1099 creatives or AV partners—with tax filing handled in one system. Document supplemental wages for load-in bonuses or rush rates so withholding matches policy. Offboarding workflows matter when gigs end abruptly. This maps to “payroll for seasonal employees” and “payroll software with contractors” search intent for production and rental houses.",
    },
    {
      heading: "Square Payroll",
      body: "Square Payroll is payroll software event rental, decor, and smaller production shops pick when tickets, deposits, and invoices already flow through Square—keeping payroll beside payments reduces admin during crunch weeks. It supports W-2 and 1099 with straightforward pricing for lean teams. If you scale past Square’s HR depth, plan a migration path. Fits “Square Payroll for events business” and micro-team operators.",
    },
    {
      heading: "Patriot Payroll",
      body: "Patriot Payroll is payroll software for event operators with skeleton year-round staff and lumpy revenue who need compliant pay runs at the lowest practical monthly cost between seasons. You trade depth for price—plan upgrades before you need robust integrations or multi-state sophistication. Pair with disciplined contractor agreements for 1099 stage hands. Answers “cheapest payroll software for small business” with eyes open on feature limits.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software event production leaders choose when they want full-service payroll taxes, included human support, and predictable fees—while juggling logistics, clients, and HR in the same small team. Run payroll rehearsals before your busiest festival month so earning codes for OT and bonuses are correct. Sync accounting after major events to close job P&L. Matches “OnPay payroll reviews” and SMB teams that outgrew Patriot but do not need Rippling.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "Square Payroll", href: getPayrollReviewUrl("square-payroll") },
    { name: "Patriot Payroll", href: getPayrollReviewUrl("patriot-payroll") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Square Payroll vs Gusto", href: getPayrollCompareUrl("square-payroll-vs-gusto") },
    { label: "Patriot Payroll vs Gusto", href: getPayrollCompareUrl("patriot-payroll-vs-gusto") },
    { label: "Gusto vs OnPay", href: getPayrollCompareUrl("gusto-vs-onpay") },
    { label: "Patriot Payroll vs OnPay", href: getPayrollCompareUrl("patriot-payroll-vs-onpay") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What payroll is best for event services companies?", a: "Gusto for seasonal hiring; Square Payroll on Square; Patriot for lowest fixed cost; OnPay for support and flat pricing." },
  ] as BestForFaqItem[],
};

export const HOME_INSPECTORS_PAGE_PROPS = {
  title: "Best Payroll Software for Home Inspectors (2026)",
  subtitle:
    "Payroll for inspection firms: lean W-2 teams, 1099 associate inspectors, and QuickBooks simplicity when you are solo or scaling a small brand.",
  useCase: "home-inspectors",
  categoryHref: "/payroll",
  categoryLabel: "Payroll",
  introParagraph:
    "Home inspection companies are often small—owner-inspectors, a few employees, and associate inspectors paid as W-2 or 1099 depending on relationship. Payroll should stay affordable, handle occasional admin hires, and integrate with accounting without enterprise overhead. Patriot and OnPay suit micro firms; Gusto adds benefits when you compete for talent; QuickBooks Payroll aligns when your books are already in QuickBooks.",
  freshnessText: "Updated for 2026",
  featuredProducts: [
    {
      slug: "patriot-payroll",
      name: "Patriot Payroll",
      badge: "Best budget payroll for micro firms",
      description:
        "Low monthly floor for solo inspectors adding one assistant—keeps overhead down between slow seasons.",
      rating: "4.2",
      startingPrice: "$17/mo",
      reviewHref: getPayrollReviewUrl("patriot-payroll"),
      visitUrl: "https://www.patriotsoftware.com/payroll",
      logoSrc: "/Logos/patriot.jpeg",
    },
    {
      slug: "onpay",
      name: "OnPay",
      badge: "Best full-service taxes at SMB prices",
      description:
        "W-2 and 1099 with included support—ideal when you promote an office manager to run payroll part time.",
      rating: "4.5",
      startingPrice: "$40/mo",
      reviewHref: getPayrollReviewUrl("onpay"),
      visitUrl: "https://onpay.com",
      logoSrc: "/Logos/onpay.jpeg",
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best when you add benefits",
      description:
        "Health benefits and hiring tools help inspection brands retain senior inspectors in competitive metros.",
      rating: "4.8",
      startingPrice: "$49/mo",
      reviewHref: getPayrollReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: "/Logos/gusto.jpeg",
    },
    {
      slug: "quickbooks-payroll",
      name: "QuickBooks Payroll",
      badge: "Best QuickBooks alignment",
      description:
        "Keep payroll inside QuickBooks when your P&L, 1099 workflows, and owner draws already live there.",
      rating: "4.6",
      startingPrice: "$30/mo",
      reviewHref: getPayrollReviewUrl("quickbooks-payroll"),
      visitUrl: "https://quickbooks.intuit.com/payroll",
      logoSrc: "/Logos/quickbooks.png",
    },
  ] as BestForFeaturedProduct[],
  comparisonTableRows: [
    { slug: "patriot-payroll", name: "Patriot Payroll", logoSrc: "/Logos/patriot.jpeg", bestFor: "Solo + micro team", startingPrice: "$17/mo", payrollTypes: "W-2, 1099", standoutFeature: "Low cost", reviewHref: getPayrollReviewUrl("patriot-payroll") },
    { slug: "onpay", name: "OnPay", logoSrc: "/Logos/onpay.jpeg", bestFor: "Support + value", startingPrice: "$40/mo", payrollTypes: "W-2, 1099", standoutFeature: "Flat plan", reviewHref: getPayrollReviewUrl("onpay") },
    { slug: "gusto", name: "Gusto", logoSrc: "/Logos/gusto.jpeg", bestFor: "Benefits-ready", startingPrice: "$49/mo", payrollTypes: "W-2, 1099", standoutFeature: "Hiring", reviewHref: getPayrollReviewUrl("gusto") },
    { slug: "quickbooks-payroll", name: "QuickBooks Payroll", logoSrc: "/Logos/quickbooks.png", bestFor: "QB books", startingPrice: "$30/mo", payrollTypes: "W-2, 1099", standoutFeature: "Native sync", reviewHref: getPayrollReviewUrl("quickbooks-payroll") },
  ] as BestForTableRow[],
  editorialGuidance: [
    { heading: "Associate inspector classification", body: "W-2 vs 1099 depends on control of schedule and tools—payroll software follows your classification decision." },
    { heading: "Seasonal volume swings", body: "Real estate cycles affect revenue—pick payroll with predictable fees when headcount is low." },
  ] as BestForEditorialBlock[],
  whyThesePicks: [
    {
      heading: "Patriot Payroll",
      body: "Patriot Payroll is payroll software home inspection firms pick when they employ only a handful of people—often an assistant or scheduler—and need compliant direct deposit, tax filing, and year-end forms without paying for HR modules they will not open. Low base pricing maps to “cheap payroll for very small business” searches. Plan ahead if you need deep integrations or multi-state complexity; Patriot is strongest on simplicity and cost. Keep 1099 associate inspectors in contractor workflows with solid documentation.",
    },
    {
      heading: "OnPay",
      body: "OnPay is payroll software home inspection companies use when they add office staff, marketing coordinators, or multiple W-2 inspectors and want full-service payroll taxes, included support, and flat SMB pricing—without enterprise quotes. It handles W-2 and 1099 together when some associates are contractors. Sync to accounting once; many inspectors already run profit and loss in QuickBooks even if payroll sits in OnPay. Fits “OnPay vs Patriot” and “payroll for professional services firm” intent.",
    },
    {
      heading: "Gusto",
      body: "Gusto is payroll software multi-inspector brands choose when they compete for senior inspectors in hot real estate markets and need medical, dental, or retirement alongside straightforward payroll—plus hiring tools for spring ramp-ups. Onboarding tasks help when you bring on licensed inspectors in multiple states. Reconcile associate pay models with counsel: W-2 vs 1099 is a legal classification question. Serves “Gusto payroll for small business with benefits” and growing inspection company searches.",
    },
    {
      heading: "QuickBooks Payroll",
      body: "QuickBooks Payroll is payroll software home inspectors use when QuickBooks Online or Desktop already carries owner draws, 1099 workflows, and company P&L—and you want payroll, withholding, and filings inside the same ecosystem your accountant audits. Native sync reduces journal entry drift. If you pay owners and employees differently, map equity draws outside payroll with your CPA. This answers “QuickBooks payroll for home services” and Intuit-centric buyers explicitly.",
    },
  ] as BestForEditorialBlock[],
  relatedReviews: [
    { name: "Patriot Payroll", href: getPayrollReviewUrl("patriot-payroll") },
    { name: "OnPay", href: getPayrollReviewUrl("onpay") },
    { name: "Gusto", href: getPayrollReviewUrl("gusto") },
    { name: "QuickBooks Payroll", href: getPayrollReviewUrl("quickbooks-payroll") },
  ] as BestForReviewLink[],
  relatedComparisons: [
    { label: "Patriot Payroll vs Gusto", href: getPayrollCompareUrl("patriot-payroll-vs-gusto") },
    { label: "Patriot Payroll vs OnPay", href: getPayrollCompareUrl("patriot-payroll-vs-onpay") },
    { label: "Gusto vs QuickBooks Payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
    { label: "QuickBooks Payroll vs OnPay", href: getPayrollCompareUrl("quickbooks-payroll-vs-onpay") },
  ] as BestForComparisonLink[],
  faqItems: [
    { q: "What is the best payroll software for home inspectors?", a: "Patriot for the leanest cost; OnPay for full-service value; Gusto when you add benefits; QuickBooks Payroll when QuickBooks is your accounting hub." },
    { q: "Should home inspection companies use payroll or only 1099s?", a: "Many firms have W-2 employees once you hire staff. Use payroll that supports both W-2 and 1099 so you do not maintain two systems." },
  ] as BestForFaqItem[],
};

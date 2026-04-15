/**
 * CRM review pages data.
 * Used by app/crm/review/[slug]/page.tsx with ReviewTemplate.
 * Schema matches payrollReviews / accountingReviews / invoicingReviews / timeTrackingReviews.
 */

import { getCrmReviewUrl, getCrmCompareUrl, getCrmBestForUrl } from "@/lib/routes";
import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";

export type CrmReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const LOGOS = {
  hubspot: "/Logos/hubspot.jpeg",
  salesforce: "/Logos/salesforce.jpeg",
  zoho: "/Logos/zoho.png",
  pipedrive: "/Logos/pipedrive.jpeg",
  monday: "/Logos/monday.jpeg",
  freshsales: "/Logos/freshsales.jpeg",
  copper: "/Logos/copper.png",
  close: "/Logos/close.jpeg",
  keap: "/Logos/keap.jpeg",
} as const;

const BEST_CRM_SOFTWARE_HREF = "/crm/best-crm-software";
const CRM_COMPARE_HUB = "/crm/compare";
const CRM_GUIDES_HUB = "/crm/guides";

const CRM_SCENARIO_LINKS: { label: string; href: string }[] = [
  { label: "Best for freelancers", href: getCrmBestForUrl("freelancers") },
  { label: "Best for small business", href: getCrmBestForUrl("small-business") },
  { label: "Best for startups", href: getCrmBestForUrl("startups") },
  { label: "Best for agencies", href: getCrmBestForUrl("agencies") },
  { label: "Best for sales teams", href: getCrmBestForUrl("sales-teams") },
  { label: "Best for HVAC businesses", href: getCrmBestForUrl("hvac") },
  { label: "Best for plumbing companies", href: getCrmBestForUrl("plumbing") },
  { label: "Best for electricians", href: getCrmBestForUrl("electricians") },
  { label: "Best for painting contractors", href: getCrmBestForUrl("painting") },
  { label: "Best for roofing companies", href: getCrmBestForUrl("roofing") },
  { label: "Best for general contractors", href: getCrmBestForUrl("general-contractors") },
  { label: "Best for landscaping companies", href: getCrmBestForUrl("landscaping") },
  { label: "Best for construction companies", href: getCrmBestForUrl("construction") },
  { label: "Best for remodeling businesses", href: getCrmBestForUrl("remodeling") },
  { label: "Best for handyman businesses", href: getCrmBestForUrl("handyman") },
  { label: "Best for property management", href: getCrmBestForUrl("property-management") },
  { label: "Best for pest control", href: getCrmBestForUrl("pest-control") },
  { label: "Best for pool service", href: getCrmBestForUrl("pool-service") },
  { label: "Best for junk removal", href: getCrmBestForUrl("junk-removal") },
  { label: "Best for moving companies", href: getCrmBestForUrl("moving") },
  { label: "Browse CRM by use case", href: "/crm/best-for" },
];

const CRM_METHODOLOGY = {
  title: "How we review CRM software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated on a regular cadence so you get current pricing and feature information. We evaluate CRM software for contact management, pipeline, automation, and ease of use.",
  bullets: [
    "We test CRM workflows: contact and lead management, pipeline stages, reporting, and automation.",
    "We compare pricing tiers, user limits, and add-ons so you can budget accurately.",
    "Reviews are written for small businesses, sales teams, and startups—not only enterprise needs.",
  ],
};

const reviews: Record<string, CrmReviewData> = {
  hubspot: {
    toolName: "HubSpot",
    category: "CRM",
    categoryHref: "/crm",
    rating: "4.6",
    startingPrice: "Free tier",
    bestFor: "small and mid-size businesses that want an all-in-one CRM with marketing, sales, and service",
    visitUrl: "https://www.hubspot.com",
    logoSrc: LOGOS.hubspot,
    quickVerdict:
      "HubSpot is our top pick for most small businesses and sales teams: a free CRM core, clear upgrade path, and strong marketing and sales tools in one platform.",
    quickVerdictParagraphs: [
      "HubSpot is our top pick for most small businesses and sales teams that want one place for contacts, deals, and marketing. The free CRM covers contact and deal management, pipeline stages, and basic reporting—enough to get started without a credit card. Paid tiers add Marketing Hub, Sales Hub, and Service Hub so you can grow from a simple pipeline into full marketing automation and customer support without switching tools.",
      "We like HubSpot for its clarity: setup is straightforward, the interface is familiar to many users, and pricing is published so you can plan. The ecosystem of integrations, templates, and training helps teams adopt it quickly. Marketing-sales alignment is a strength—lead scoring, email sequences, and deal stages work together so marketing and sales share one view of the customer.",
      "Limitations to keep in mind: costs can add up as you add hubs and seats, and some advanced features live on Professional or Enterprise. For very simple needs—a solo freelancer tracking a handful of deals—HubSpot can feel heavier than necessary. For most small and mid-size teams that want CRM plus marketing and sales tools, HubSpot remains the default choice.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.7", explanation: "Strong contact and deal management, pipeline views, email sequences, and marketing automation. Free tier is usable; paid hubs add depth. Reporting and dashboards are solid across plans." },
      { category: "Pricing", score: "4.5", explanation: "Free CRM core with no time limit. Paid tiers are clear; cost scales with hubs and seats. Add-ons can increase total spend." },
      { category: "Ease of Use", score: "4.7", explanation: "One of the easier CRMs to set up and adopt. Interface is clean; onboarding and help resources are strong. Non-technical users can get value quickly." },
      { category: "Support", score: "4.5", explanation: "Knowledge base, community, and support tiers. Higher plans get better support. Free users rely on self-serve and community." },
      { category: "Integrations", score: "4.7", explanation: "Large app marketplace and native integrations with email, ads, and common business tools. API and Zapier extend connectivity." },
    ],
    pros: [
      "Free CRM core with solid contact and deal management",
      "Strong marketing and sales automation as you scale",
      "Clear pricing and self-serve signup; no long-term contract required",
      "Large ecosystem of integrations, templates, and training",
      "Marketing and sales share one view of contacts and pipeline",
    ],
    cons: [
      "Can get expensive at higher tiers and with multiple hubs or add-ons",
      "Some features require Sales or Marketing Hub",
      "Heavier than needed for very simple pipeline-only use cases",
    ],
    bestForEditorial:
      "HubSpot is best for small and mid-size businesses that want an all-in-one CRM with marketing, sales, and optionally service tools. Ideal users include B2B sales teams, marketing-led growth teams, and companies that want to track leads from first touch through close in one platform. It fits teams that value a single source of truth and are willing to invest in a platform that scales with them.",
    whoShouldAvoid:
      "Solo freelancers or very small teams that only need a simple contact and deal list may find the free tier more than they need or prefer a lighter tool. Enterprises that require heavy customization and dedicated implementation may look at Salesforce. If you need a strict sales-only pipeline with minimal marketing, Pipedrive or Close may be more focused.",
    pricingSummary:
      "HubSpot offers a free CRM with no time limit; paid plans add Marketing Hub, Sales Hub, and Service Hub. Pricing is per seat and per hub—Starter tiers offer a lower entry point, while Professional and Enterprise add more features and capacity. Check current tiers on HubSpot's site for your team size and which hubs you need.",
    pricingTiers:
      "Free CRM includes contacts, deals, pipeline, and basic reporting. Sales Hub Starter adds email sequences and meeting links; Marketing Hub adds landing pages and email marketing. Professional and Enterprise tiers add more automation, reporting, and support.",
    costVsCompetitors:
      "HubSpot's free tier is among the most generous; paid plans sit in the mid-to-upper range for SMB CRM. You pay for breadth—marketing, sales, and service in one place. Compared to Salesforce, HubSpot is often easier and more affordable for small teams; compared to Zoho CRM, HubSpot has stronger marketing focus and brand recognition but higher cost at scale.",
    features: [
      "Contact and company records with custom properties",
      "Deal pipeline and stage-based selling",
      "Email sequences and templates",
      "Marketing automation (landing pages, email, forms on paid tiers)",
      "Reporting and dashboards",
      "Integrations and app marketplace",
    ],
    keyFeatures: [
      { name: "Contact and deal management", description: "Store contacts and companies with custom fields; track deals through pipeline stages. Activities, notes, and timeline keep context in one place." },
      { name: "Pipeline and pipeline views", description: "Visual pipeline shows deal stage and value. Filter and sort by owner, stage, or custom fields. Multiple pipelines supported on paid plans." },
      { name: "Marketing automation", description: "On Marketing Hub: email campaigns, landing pages, forms, and lead nurturing. Align marketing and sales with shared contact records and lead scoring." },
      { name: "Sales sequences and engagement", description: "Sales Hub adds email sequences, meeting links, and document tracking. Automate follow-up and see when prospects engage." },
      { name: "Reporting and dashboards", description: "Prebuilt and custom reports on deals, contacts, and activities. Dashboards give a quick view of pipeline and team performance." },
      { name: "Integrations", description: "Native integrations with Gmail, Outlook, calendar, and ads. App marketplace and API support hundreds of tools so CRM stays at the center of your stack." },
    ],
    integrations: ["Gmail & Outlook", "Calendar (Google, Outlook)", "Slack", "Zoom", "Stripe", "Facebook & Google Ads", "Zapier", "Hundreds of apps via marketplace"],
    integrationsIntro:
      "HubSpot connects to the tools sales and marketing teams already use: email, calendar, ads, and support. Integrations keep contact and activity data in sync so you don't re-enter information. The marketplace and API make it easy to extend with industry-specific or internal tools.",
    alternatives: [
      { name: "Salesforce", href: getCrmReviewUrl("salesforce"), description: "Enterprise-grade CRM with maximum customization; better when you need scale and dedicated admin.", logoSrc: LOGOS.salesforce },
      { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm"), description: "Strong value and suite integration; good if you use Zoho or want lower cost.", logoSrc: LOGOS.zoho },
      { name: "Pipedrive", href: getCrmReviewUrl("pipedrive"), description: "Pipeline-first sales CRM; better if you want a strict sales focus without marketing hub.", logoSrc: LOGOS.pipedrive },
      { name: "Monday", href: getCrmReviewUrl("monday-crm"), description: "Customizable boards and workflows; fits teams that want CRM plus project management.", logoSrc: LOGOS.monday },
      { name: "Freshsales", href: getCrmReviewUrl("freshsales"), description: "AI-powered sales CRM with built-in phone and email; good for sales teams that want automation.", logoSrc: LOGOS.freshsales },
      { name: "Copper", href: getCrmReviewUrl("copper"), description: "CRM built for Google Workspace; seamless if your team lives in Gmail and Google Calendar.", logoSrc: LOGOS.copper },
      { name: "Close", href: getCrmReviewUrl("close"), description: "Inside sales CRM with calling and pipeline; built for teams that spend time on the phone.", logoSrc: LOGOS.close },
      { name: "Keap", href: getCrmReviewUrl("keap"), description: "Marketing automation and CRM for small business; combines email marketing and pipeline in one.", logoSrc: LOGOS.keap },
    ],
    faqs: [
      { q: "Is HubSpot a good CRM for small businesses?", a: "Yes. HubSpot is one of our top picks for small businesses. The free CRM gives you contact and deal management without cost; paid tiers add marketing and sales tools as you grow. Setup is straightforward and many small teams run on the free or Starter tier for months or years." },
      { q: "How much does HubSpot cost?", a: "The CRM is free. Sales Hub, Marketing Hub, and Service Hub have paid tiers—Starter plans offer a lower entry point; Professional and Enterprise add more features. Pricing is per seat and per hub. Check HubSpot's pricing page for current numbers." },
      { q: "What is the difference between HubSpot and Salesforce?", a: "HubSpot offers a friendlier entry point, strong free tier, and all-in-one marketing and sales. Salesforce is built for scale and deep customization, with a larger app ecosystem and often higher cost. Small and mid-size teams often prefer HubSpot; large enterprises often use Salesforce." },
      { q: "Does HubSpot integrate with Gmail and Outlook?", a: "Yes. HubSpot has native integrations with Gmail and Outlook so emails and calendar events sync with contact records. The free CRM includes basic email integration; Sales Hub adds more features like email tracking and sequences." },
      { q: "Can I use HubSpot for free forever?", a: "Yes. HubSpot's free CRM does not expire. You get contact and deal management, pipeline, and basic reporting. Paid hubs are optional and add marketing, sales, and service features when you need them." },
    ],
    methodology: CRM_METHODOLOGY,
    compareLinks: [
      { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
      { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
      { label: "Monday vs HubSpot", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
      { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
      { label: "Copper vs HubSpot", href: getCrmCompareUrl("copper-vs-hubspot") },
      { label: "Keap vs HubSpot", href: getCrmCompareUrl("keap-vs-hubspot") },
    ],
    compareSectionTitle: "Compare with other CRM software",
    bestPayrollSoftwareHref: BEST_CRM_SOFTWARE_HREF,
    compareHubHref: CRM_COMPARE_HUB,
    compareHubLabel: "Compare CRM software",
    bestRoundupLabel: "Best CRM software (2026) — full roundup",
    bestForSectionTitle: "Best CRM software for different use cases",
    bestForSectionSub: "Find CRM software by scenario.",
    scenarioLinks: CRM_SCENARIO_LINKS,
    guideHubHref: CRM_GUIDES_HUB,
    guideHubLabel: "CRM guides",
  },

  salesforce: {
    toolName: "Salesforce",
    category: "CRM",
    categoryHref: "/crm",
    rating: "4.5",
    startingPrice: "From $25/user/mo",
    bestFor: "enterprise teams that need maximum customization, scale, and app ecosystem",
    visitUrl: "https://www.salesforce.com",
    logoSrc: LOGOS.salesforce,
    quickVerdict:
      "Salesforce is the standard for enterprise CRM: unmatched customization, AppExchange, and scale. Best when you have dedicated admins and need deep control.",
    quickVerdictParagraphs: [
      "Salesforce is the CRM choice for many large organizations and complex sales processes. Leads, contacts, opportunities, and custom objects are fully configurable; workflows, automation, and reporting can be tailored to almost any process. The AppExchange adds thousands of apps for industry-specific and horizontal needs, and the platform scales to very large teams and data volumes.",
      "We recommend Salesforce when you need maximum flexibility and have the resources to implement and maintain it. Implementation often involves consultants or dedicated admins, and pricing is typically custom by edition and user count. For small teams or simple pipelines, HubSpot or Zoho CRM are usually easier and more affordable.",
      "Strengths include reporting and dashboards, role-based security, and the breadth of the ecosystem. Drawbacks include learning curve, implementation cost, and opaque pricing for many editions. If you're evaluating enterprise CRM and need to support complex processes and many users, Salesforce deserves a place on your shortlist.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.8", explanation: "Extensive out-of-the-box and customizable features. Leads, contacts, opportunities, custom objects, and automation. AppExchange extends with thousands of apps." },
      { category: "Pricing", score: "4.2", explanation: "Per-user pricing starting around $25/user/month; higher editions cost more. Custom quotes common; total cost can be significant for large teams." },
      { category: "Ease of Use", score: "4.2", explanation: "Powerful but complex. Training and admin support help. New users often need time to learn; simpler CRMs are easier to adopt for small teams." },
      { category: "Support", score: "4.5", explanation: "Multiple support tiers and large partner ecosystem. Enterprise customers get dedicated options. Documentation and community are strong." },
      { category: "Integrations", score: "4.9", explanation: "AppExchange and APIs provide more integrations than any other CRM. Native and third-party apps cover virtually every use case." },
    ],
    pros: [
      "Unmatched customization and app ecosystem",
      "Scales to large teams and complex processes",
      "Strong reporting, dashboards, and automation",
      "Industry-specific editions and partner network",
    ],
    cons: [
      "Steep learning curve and implementation cost",
      "Pricing can be opaque; often requires a quote",
      "Overkill for simple pipeline needs; small teams may prefer HubSpot or Zoho",
    ],
    bestForEditorial:
      "Salesforce is best for enterprise teams that need maximum customization, scale, and a large app ecosystem. Ideal users include large sales organizations, companies with complex multi-step processes, and businesses that require industry-specific or heavily customized CRM. It fits organizations with dedicated admins or implementation partners.",
    whoShouldAvoid:
      "Small teams and startups with simple pipelines will find Salesforce heavier and more expensive than necessary. If you want quick setup and published pricing, consider HubSpot or Zoho CRM. Teams that need strict sales-only focus without enterprise overhead may prefer Pipedrive or Close.",
    pricingSummary:
      "Salesforce uses tiered per-user pricing. Entry-level Sales Cloud starts around $25/user/month; higher editions add more features and support. Exact cost depends on edition, user count, and add-ons. Contact Salesforce or a partner for a quote. Small teams can sometimes start on lower tiers; enterprise deals are typically custom.",
    pricingTiers:
      "Essential, Professional, Enterprise, and Unlimited editions offer increasing features—custom objects, workflow, reporting, and support. Industry editions (e.g. Financial Services, Health) add vertical-specific features. Add-ons for marketing, service, and analytics are priced separately.",
    costVsCompetitors:
      "Salesforce is typically the most expensive option for equivalent seats. You pay for breadth, customization, and ecosystem. HubSpot and Zoho CRM are more affordable for SMBs; Pipedrive and Close are cheaper for sales-only use. Compare total cost of ownership including implementation and training.",
    features: [
      "Leads, contacts, accounts, and opportunities",
      "Custom objects and fields",
      "Workflow and Process Builder",
      "Reports and dashboards",
      "AppExchange (thousands of apps)",
      "Mobile apps and offline access",
    ],
    keyFeatures: [
      { name: "Leads, contacts, and opportunities", description: "Full lifecycle from lead to contact to opportunity. Customizable page layouts, fields, and validation rules." },
      { name: "Customization", description: "Custom objects, fields, and automation without code in many cases. Developers can extend with Apex and Lightning." },
      { name: "Reporting and dashboards", description: "Flexible reports and real-time dashboards. Role-based visibility and export to Excel or other tools." },
      { name: "AppExchange", description: "Thousands of apps for CRM, marketing, service, and industry needs. Prebuilt integrations and vertical solutions." },
      { name: "Automation", description: "Workflow rules, Process Builder, and Flow automate tasks and approvals. Reduces manual work and keeps data consistent." },
      { name: "Mobile and offline", description: "Mobile apps for iOS and Android. Offline access on supported editions so field reps can work without connectivity." },
    ],
    integrations: ["Gmail & Outlook", "Slack", "DocuSign", "Tableau", "Marketing automation", "Thousands via AppExchange"],
    integrationsIntro:
      "Salesforce integrates with email, calendar, document signing, and hundreds of other tools via AppExchange and APIs. Native integrations cover common stacks; partners and custom builds extend to virtually any system.",
    alternatives: [
      { name: "HubSpot", href: getCrmReviewUrl("hubspot"), description: "Easier and more affordable for small and mid-size teams; strong free tier and marketing-sales alignment.", logoSrc: LOGOS.hubspot },
      { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm"), description: "Full-featured at lower cost; good for SMBs and teams already using Zoho.", logoSrc: LOGOS.zoho },
      { name: "Pipedrive", href: getCrmReviewUrl("pipedrive"), description: "Pipeline-focused; simpler and cheaper for sales-only teams.", logoSrc: LOGOS.pipedrive },
      { name: "Monday", href: getCrmReviewUrl("monday-crm"), description: "Customizable boards; good if you want flexibility without full Salesforce complexity.", logoSrc: LOGOS.monday },
      { name: "Freshsales", href: getCrmReviewUrl("freshsales"), description: "AI and built-in phone; modern alternative for sales teams.", logoSrc: LOGOS.freshsales },
    ],
    faqs: [
      { q: "Is Salesforce worth it for startups?", a: "It depends. Startups with simple pipelines and limited budget often find HubSpot or Zoho CRM easier and more affordable. Salesforce can make sense if you have complex processes, plan to scale quickly, or need industry-specific apps. Compare total cost including implementation." },
      { q: "How much does Salesforce cost?", a: "Sales Cloud starts around $25/user/month; higher editions cost more. Marketing, Service, and other clouds are priced separately. Many enterprises get custom quotes. Check Salesforce's pricing page or contact sales for your scenario." },
      { q: "What is Salesforce AppExchange?", a: "AppExchange is Salesforce's marketplace of apps and integrations. You can add prebuilt solutions for marketing, service, industry verticals, and more without building everything from scratch." },
      { q: "Can small businesses use Salesforce?", a: "Yes, but small businesses often find HubSpot or Zoho CRM easier and more cost-effective. Salesforce is built for scale; if you have a small team and simple process, a lighter CRM may be a better fit." },
    ],
    methodology: CRM_METHODOLOGY,
    compareLinks: [
      { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
      { label: "Salesforce vs Zoho CRM", href: getCrmCompareUrl("salesforce-vs-zoho-crm") },
    ],
    compareSectionTitle: "Compare with other CRM software",
    bestPayrollSoftwareHref: BEST_CRM_SOFTWARE_HREF,
    compareHubHref: CRM_COMPARE_HUB,
    compareHubLabel: "Compare CRM software",
    bestRoundupLabel: "Best CRM software (2026) — full roundup",
    bestForSectionTitle: "Best CRM software for different use cases",
    bestForSectionSub: "Find CRM software by scenario.",
    scenarioLinks: CRM_SCENARIO_LINKS,
    guideHubHref: CRM_GUIDES_HUB,
    guideHubLabel: "CRM guides",
  },

  "zoho-crm": {
    toolName: "Zoho CRM",
    category: "CRM",
    categoryHref: "/crm",
    rating: "4.4",
    startingPrice: "Free tier",
    bestFor: "SMBs and teams that want full-featured CRM at competitive pricing, especially in the Zoho ecosystem",
    visitUrl: "https://www.zoho.com/crm",
    logoSrc: LOGOS.zoho,
    quickVerdict:
      "Zoho CRM delivers strong value: full pipeline, automation, and integrations at lower cost than HubSpot or Salesforce. A good fit for teams that want breadth without premium pricing.",
    quickVerdictParagraphs: [
      "Zoho CRM is our top value pick for small and mid-size businesses. The free tier supports a limited number of users and records—enough for very small teams to try the platform. Paid plans add more capacity, automation, and integrations at prices that undercut HubSpot and Salesforce. Pipeline, contacts, leads, and reporting are solid; you get a full CRM without paying enterprise rates.",
      "We like Zoho CRM for teams that already use Zoho Mail, Zoho Books, or other Zoho apps. The suite integrates cleanly so contacts, email, and accounting can work together. Even without the rest of Zoho, the CRM stands on its own with a large app marketplace and API. The interface can feel busier than HubSpot or Pipedrive, but it's capable and customizable.",
      "Limitations include less brand recognition than HubSpot or Salesforce and some advanced features on higher tiers. For most SMBs that want a full CRM and care about cost, Zoho CRM is a strong alternative to the big names.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Full CRM: leads, contacts, deals, pipeline, automation, and reporting. Integrates with Zoho suite and many third-party apps. Good mobile apps." },
      { category: "Pricing", score: "4.6", explanation: "Free tier available; paid plans are competitive. Lower cost than HubSpot or Salesforce for similar capability." },
      { category: "Ease of Use", score: "4.3", explanation: "Capable but UI can feel dense. Customization helps; some learning curve for new users. Documentation and support are adequate." },
      { category: "Support", score: "4.3", explanation: "Help center, email support, and community. Higher plans get better support. Generally responsive." },
      { category: "Integrations", score: "4.5", explanation: "Native Zoho suite integration; marketplace and API for many other tools. Fewer apps than Salesforce but covers most SMB needs." },
    ],
    pros: [
      "Free tier and affordable paid plans",
      "Full pipeline, automation, and reporting",
      "Integrates with Zoho suite and many third-party apps",
      "Good mobile apps and customization",
    ],
    cons: [
      "UI can feel busy compared to simpler CRMs",
      "Some advanced features require higher tiers",
      "Less brand recognition than HubSpot or Salesforce",
    ],
    bestForEditorial:
      "Zoho CRM is best for SMBs and teams that want full-featured CRM at competitive pricing. Ideal for businesses already using Zoho Mail, Zoho Books, or other Zoho products, and for cost-conscious teams that don't need the HubSpot or Salesforce brand. It fits sales and marketing teams that want automation and reporting without premium pricing.",
    whoShouldAvoid:
      "Teams that want the simplest possible UI may prefer Pipedrive or HubSpot. Enterprises that need maximum customization and the largest app ecosystem may choose Salesforce. If you're not already in Zoho and want the strongest marketing-sales alignment out of the box, HubSpot may be a better fit.",
    pricingSummary:
      "Zoho CRM offers a free edition with limited users and records. Paid plans (Standard, Professional, Enterprise, Ultimate) add more users, storage, and features. Pricing is per user per month and is typically lower than HubSpot or Salesforce for comparable tiers. Check Zoho's site for current plans.",
    pricingTiers:
      "Free supports a small number of users and records. Standard adds more capacity; Professional adds workflow and automation; Enterprise and Ultimate add advanced analytics and customization. Compare tiers for your user count and feature needs.",
    costVsCompetitors:
      "Zoho CRM is one of the most cost-effective full-featured CRMs. It undercuts HubSpot and Salesforce on price while offering similar core capability. You give up some polish and brand recognition; you gain budget room for other tools or more seats.",
    features: [
      "Leads, contacts, accounts, and deals",
      "Pipeline and stage management",
      "Workflow automation",
      "Reports and dashboards",
      "Zoho suite integration",
      "Mobile apps",
    ],
    keyFeatures: [
      { name: "Pipeline and deal management", description: "Track deals through customizable stages. Kanban and list views; forecasting and win probability." },
      { name: "Automation", description: "Workflow rules and blueprints automate follow-up, assignment, and field updates. Reduces manual work and keeps processes consistent." },
      { name: "Zoho suite integration", description: "Connect with Zoho Mail, Books, Campaigns, and other Zoho apps. Shared contacts and single sign-on simplify the stack." },
      { name: "Reporting and dashboards", description: "Prebuilt and custom reports; dashboards for pipeline, activities, and team performance. Export and schedule reports." },
      { name: "Mobile apps", description: "iOS and Android apps for on-the-go access. Log activities, update deals, and view pipeline from a phone or tablet." },
      { name: "Integrations", description: "Marketplace and API connect to email, calendar, accounting, and hundreds of other apps. Zapier and webhooks extend further." },
    ],
    integrations: ["Zoho Mail, Books, Campaigns", "Gmail & Outlook", "Slack", "Mailchimp", "QuickBooks", "Zapier", "Many via marketplace"],
    integrationsIntro:
      "Zoho CRM integrates natively with the Zoho suite and connects to Gmail, Outlook, accounting software, and many other tools via its marketplace and API. Teams already on Zoho get the most benefit; others still get a broad integration set.",
    alternatives: [
      { name: "HubSpot", href: getCrmReviewUrl("hubspot"), description: "Stronger marketing focus and brand; better if you want all-in-one marketing and sales with a free tier.", logoSrc: LOGOS.hubspot },
      { name: "Salesforce", href: getCrmReviewUrl("salesforce"), description: "Larger ecosystem and customization; for enterprises that need maximum scale.", logoSrc: LOGOS.salesforce },
      { name: "Pipedrive", href: getCrmReviewUrl("pipedrive"), description: "Pipeline-only focus; simpler if you don't need full suite integration.", logoSrc: LOGOS.pipedrive },
      { name: "Monday", href: getCrmReviewUrl("monday-crm"), description: "Board-based flexibility; good if you want CRM plus project management.", logoSrc: LOGOS.monday },
      { name: "Freshsales", href: getCrmReviewUrl("freshsales"), description: "AI and built-in communication tools; another value-oriented option.", logoSrc: LOGOS.freshsales },
    ],
    faqs: [
      { q: "Is Zoho CRM good for small business?", a: "Yes. Zoho CRM is a strong small business CRM. The free tier lets you try it; paid plans are affordable and full-featured. It's a good fit if you want capability without HubSpot or Salesforce pricing." },
      { q: "How does Zoho CRM compare to HubSpot?", a: "Zoho CRM is typically cheaper and integrates deeply with the Zoho suite. HubSpot has a stronger marketing hub and brand recognition. Choose Zoho for value and Zoho ecosystem; choose HubSpot for marketing-sales alignment and a more polished SMB experience." },
      { q: "Does Zoho CRM have a free version?", a: "Yes. Zoho CRM has a free edition with limited users and records. It's enough for very small teams to run pipeline and contacts. Paid plans add capacity and features." },
      { q: "What CRM integrates with Zoho?", a: "Zoho CRM integrates with Zoho Mail, Zoho Books, Zoho Campaigns, and other Zoho apps. It also connects to Gmail, Outlook, Slack, QuickBooks, and many tools via its marketplace and Zapier." },
    ],
    methodology: CRM_METHODOLOGY,
    compareLinks: [
      { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
      { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
      { label: "Salesforce vs Zoho CRM", href: getCrmCompareUrl("salesforce-vs-zoho-crm") },
    ],
    compareSectionTitle: "Compare with other CRM software",
    bestPayrollSoftwareHref: BEST_CRM_SOFTWARE_HREF,
    compareHubHref: CRM_COMPARE_HUB,
    compareHubLabel: "Compare CRM software",
    bestRoundupLabel: "Best CRM software (2026) — full roundup",
    bestForSectionTitle: "Best CRM software for different use cases",
    bestForSectionSub: "Find CRM software by scenario.",
    scenarioLinks: CRM_SCENARIO_LINKS,
    guideHubHref: CRM_GUIDES_HUB,
    guideHubLabel: "CRM guides",
  },

  pipedrive: {
    toolName: "Pipedrive",
    category: "CRM",
    categoryHref: "/crm",
    rating: "4.5",
    startingPrice: "From $14.90/user/mo",
    bestFor: "sales teams that want a pipeline-first CRM with activity tracking and clear deal stages",
    visitUrl: "https://www.pipedrive.com",
    logoSrc: LOGOS.pipedrive,
    quickVerdict:
      "Pipedrive is built for salespeople: pipeline at the center, activity-based selling, and clear stages. A top choice when the deal process matters more than marketing automation.",
    quickVerdictParagraphs: [
      "Pipedrive focuses on what sales teams do every day: move deals through stages, log activities, and know what to do next. The pipeline view is central; deal stages are customizable, and the interface emphasizes clarity over breadth. You get contact and deal management, email integration, and reporting without the weight of a full marketing hub. For teams that live in the pipeline, Pipedrive is one of the easiest CRMs to adopt.",
      "We like Pipedrive for its consistency: pricing is clear, setup is straightforward, and the product stays focused on sales. Activity reminders and next-step suggestions help reps stay on top of follow-up. Integrations cover email, calendar, and common tools; you can add marketing automation via partners if needed, but out of the box it's sales-first.",
      "Limitations: marketing automation is lighter than HubSpot, and there are fewer out-of-the-box integrations than Salesforce. If you need heavy marketing-sales alignment in one native platform, HubSpot is a better fit. If you want a dedicated sales pipeline tool that's easy to run, Pipedrive is a top pick.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Strong pipeline, deal and contact management, activity tracking, and reporting. Sales-focused; marketing features are lighter. Integrations cover key tools." },
      { category: "Pricing", score: "4.5", explanation: "Per-user pricing with clear tiers. No free plan but trial available. Competitive for sales-only CRM." },
      { category: "Ease of Use", score: "4.7", explanation: "One of the easiest CRMs for sales teams. Pipeline-centric design; minimal learning curve. Reps get value quickly." },
      { category: "Support", score: "4.4", explanation: "Help center, email, and chat. Knowledge base is solid. Higher plans get better support." },
      { category: "Integrations", score: "4.4", explanation: "Email, calendar, and many sales and marketing tools. Fewer apps than Salesforce or HubSpot but covers typical needs." },
    ],
    pros: [
      "Pipeline-first design; easy to see deal stage and next steps",
      "Activity-based selling and reminders",
      "Clear pricing and straightforward setup",
      "Good for small and mid-size sales teams",
    ],
    cons: [
      "Marketing automation is lighter than HubSpot",
      "Fewer native integrations than Salesforce or HubSpot",
      "Narrower focus—less fit if you need full marketing CRM",
    ],
    bestForEditorial:
      "Pipedrive is best for sales teams that want a pipeline-first CRM with activity tracking and clear deal stages. Ideal for inside sales, SMB sales teams, and anyone who measures success by pipeline movement. It fits teams that don't need heavy marketing automation and prefer a tool built around the deal process.",
    whoShouldAvoid:
      "Teams that need strong marketing automation and full marketing-sales alignment in one platform should consider HubSpot. Organizations that need heavy customization and the largest app ecosystem may prefer Salesforce. If you want board-based flexibility and project management in the same tool, Monday might fit better.",
    pricingSummary:
      "Pipedrive uses per-user monthly pricing with several tiers. Entry tier covers pipeline and core features; higher plans add automation, reporting, and integrations. No free plan, but a trial is available. Check Pipedrive's site for current pricing and limits.",
    pricingTiers:
      "Essential covers pipeline, contacts, and basic reporting. Advanced adds automation and email; Professional adds more automation and support; Enterprise adds security and API. Compare tiers for your team size and need for automation.",
    costVsCompetitors:
      "Pipedrive sits in the mid-range for sales CRM—more than Zoho CRM free tier, often less than HubSpot when you only need sales. You pay for focus: a clean pipeline tool without marketing hub. Good value for sales-only teams.",
    features: [
      "Deal pipeline and customizable stages",
      "Contact and organization management",
      "Activity tracking and reminders",
      "Email integration and templates",
      "Reporting and dashboards",
      "Mobile apps",
    ],
    keyFeatures: [
      { name: "Pipeline and deal stages", description: "Visual pipeline with customizable stages. Drag-and-drop deals; see value and next steps at a glance. Multiple pipelines supported." },
      { name: "Activity-based selling", description: "Log calls, emails, and meetings; set reminders and next steps. Keeps reps accountable and ensures follow-up happens." },
      { name: "Contact and organization management", description: "Store contacts and companies; link to deals and activities. Custom fields and segmentation." },
      { name: "Email integration", description: "Connect Gmail or Outlook; send and track emails from Pipedrive. Templates and sequences on higher plans." },
      { name: "Reporting", description: "Pipeline, activity, and revenue reports. Dashboards for team and individual performance. Forecast and goal tracking." },
      { name: "Integrations", description: "Email, calendar, and many sales and marketing tools. API and webhooks for custom connections." },
    ],
    integrations: ["Gmail & Outlook", "Calendar", "Slack", "Zoom", "Mailchimp", "Zapier", "Many sales tools"],
    integrationsIntro:
      "Pipedrive connects to email, calendar, and common sales tools so activities and context stay in one place. Integrations are sufficient for most sales teams; heavy marketing stacks may need HubSpot or Salesforce.",
    alternatives: [
      { name: "HubSpot", href: getCrmReviewUrl("hubspot"), description: "Adds marketing hub and free CRM; better if you want all-in-one marketing and sales.", logoSrc: LOGOS.hubspot },
      { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm"), description: "Broader suite and lower cost; good if you use Zoho or want more features for the price.", logoSrc: LOGOS.zoho },
      { name: "Freshsales", href: getCrmReviewUrl("freshsales"), description: "AI and built-in phone; similar sales focus with more automation.", logoSrc: LOGOS.freshsales },
      { name: "Close", href: getCrmReviewUrl("close"), description: "Built for inside sales and calling; another pipeline-focused option.", logoSrc: LOGOS.close },
      { name: "Monday", href: getCrmReviewUrl("monday-crm"), description: "Board-based; good if you want pipeline plus project management.", logoSrc: LOGOS.monday },
    ],
    faqs: [
      { q: "Is Pipedrive good for small sales teams?", a: "Yes. Pipedrive is well suited to small sales teams. The pipeline is easy to set up and use, and pricing is clear. Many small teams choose it over heavier CRMs because it stays focused on deals and activities." },
      { q: "How does Pipedrive compare to HubSpot?", a: "Pipedrive is pipeline- and sales-focused; HubSpot adds a full marketing hub and free CRM. Choose Pipedrive for a dedicated sales tool; choose HubSpot if you want marketing automation and sales in one platform." },
      { q: "Does Pipedrive have a free plan?", a: "Pipedrive does not offer a free plan. It does offer a trial so you can test the product. Paid plans start around $15/user/month. For a free CRM, consider HubSpot or Zoho CRM." },
      { q: "What CRM is best for pipeline management?", a: "Pipedrive is one of the best CRMs for pipeline management. It's built around the deal pipeline and activity tracking. HubSpot and Zoho CRM also have strong pipelines but add more beyond sales." },
    ],
    methodology: CRM_METHODOLOGY,
    compareLinks: [
      { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
      { label: "Freshsales vs Pipedrive", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
      { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
      { label: "Close vs Pipedrive", href: getCrmCompareUrl("close-vs-pipedrive") },
    ],
    compareSectionTitle: "Compare with other CRM software",
    bestPayrollSoftwareHref: BEST_CRM_SOFTWARE_HREF,
    compareHubHref: CRM_COMPARE_HUB,
    compareHubLabel: "Compare CRM software",
    bestRoundupLabel: "Best CRM software (2026) — full roundup",
    bestForSectionTitle: "Best CRM software for different use cases",
    bestForSectionSub: "Find CRM software by scenario.",
    scenarioLinks: CRM_SCENARIO_LINKS,
    guideHubHref: CRM_GUIDES_HUB,
    guideHubLabel: "CRM guides",
  },

  "monday-crm": {
    toolName: "Monday",
    category: "CRM",
    categoryHref: "/crm",
    rating: "4.4",
    startingPrice: "From $10/user/mo",
    bestFor: "teams that want customizable boards and workflows beyond a traditional pipeline",
    visitUrl: "https://monday.com",
    logoSrc: LOGOS.monday,
    quickVerdict:
      "Monday brings board-based flexibility to CRM: customize views, automate workflows, and combine deals with projects. Best when you want one place for pipeline and work management.",
    quickVerdictParagraphs: [
      "Monday is part of Monday's Work OS: you get CRM capabilities on the same board and automation engine used for projects and other work. Deals, contacts, and pipeline can be modeled in customizable boards with multiple views—Kanban, list, timeline, and more. If you prefer to design your process rather than follow a fixed pipeline, Monday is a strong fit. Teams that already use Monday for project management can add CRM without adding another tool.",
      "We like Monday for flexibility: you can adapt boards to your sales process, add custom columns, and automate steps across the board. The tradeoff is that it's less opinionated than Pipedrive or HubSpot—you may spend more time configuring. For teams that want CRM plus project management and don't mind some setup, Monday is a top choice.",
      "Limitations: less out-of-the-box sales structure than Pipedrive, and less marketing automation than HubSpot. If you want a traditional pipeline-only tool, Pipedrive or HubSpot may feel more focused. If you like building your own process and want CRM and projects in one place, Monday is worth a close look.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Customizable boards, CRM templates, automation, and multiple views. Combines CRM with project and work management. Integrations are strong." },
      { category: "Pricing", score: "4.4", explanation: "Per-user pricing; CRM features available from lower tiers. Can get expensive with many seats and add-ons." },
      { category: "Ease of Use", score: "4.5", explanation: "Visual and intuitive for board users. Some setup required to match your process. Easier if you already know Monday." },
      { category: "Support", score: "4.3", explanation: "Help center and support channels. Community and templates help. Quality is generally good." },
      { category: "Integrations", score: "4.6", explanation: "Many native integrations and Zapier. Connects to email, calendar, and productivity tools. API for custom builds." },
    ],
    pros: [
      "Highly customizable boards and views",
      "CRM and project management in one platform",
      "Strong automation and integrations",
      "Visual and easy to adapt to your process",
    ],
    cons: [
      "Less opinionated than pipeline-first CRMs; more setup to match sales process",
      "Can require more configuration than Pipedrive or HubSpot",
      "Pricing scales with seats and features",
    ],
    bestForEditorial:
      "Monday is best for teams that want customizable boards and workflows beyond a traditional pipeline. Ideal for teams that already use Monday for projects and want to add CRM, and for those who prefer to design their own process. It fits sales teams that also manage projects or want one work OS for pipeline and execution.",
    whoShouldAvoid:
      "Teams that want a ready-made pipeline with minimal setup should consider Pipedrive or HubSpot. If you need heavy marketing automation, HubSpot is a better fit. Strict sales-only teams with no project component may find Monday more than they need.",
    pricingSummary:
      "Monday offers multiple plans; CRM features are available from lower tiers. Pricing is per user; higher plans add more automation, views, and integrations. Check Monday's pricing page for current plans and CRM-included tiers.",
    pricingTiers:
      "Basic and Standard plans include boards and automation; CRM templates and features are available. Pro and Enterprise add more views, automation, and support. Compare tiers for your team size and need for advanced features.",
    costVsCompetitors:
      "Monday can be cost-effective if you already use it for projects and add CRM. Standalone CRM cost is competitive with mid-tier tools. Total cost depends on seats and add-ons; compare to Pipedrive and HubSpot for your scenario.",
    features: [
      "Customizable boards and CRM templates",
      "Multiple views (Kanban, list, timeline)",
      "Automation and workflows",
      "Contact and deal management",
      "Integrations and API",
      "Mobile apps",
    ],
    keyFeatures: [
      { name: "Customizable boards", description: "Model deals, contacts, and pipeline in boards. Add columns, statuses, and views that match your process." },
      { name: "Multiple views", description: "Switch between Kanban, list, timeline, and other views. Same data, different lens—useful for pipeline and project tracking." },
      { name: "Automation", description: "Automate status changes, notifications, and actions across the board. Reduces manual work and keeps workflows consistent." },
      { name: "CRM templates", description: "Prebuilt CRM boards for pipeline, contacts, and lead management. Customize from a starting point." },
      { name: "Project and CRM together", description: "Run deals and projects on the same platform. Link items and see context in one place." },
      { name: "Integrations", description: "Connect to email, calendar, Slack, and many tools. Zapier and API extend further." },
    ],
    integrations: ["Gmail & Outlook", "Calendar", "Slack", "Zoom", "Dropbox", "Zapier", "Many productivity tools"],
    integrationsIntro:
      "Monday integrates with email, calendar, file storage, and productivity tools. If you use Monday for work management, adding CRM keeps everything in one place. Standalone CRM users still get a solid integration set.",
    alternatives: [
      { name: "HubSpot", href: getCrmReviewUrl("hubspot"), description: "Full marketing and sales CRM; better if you want a traditional pipeline and marketing hub.", logoSrc: LOGOS.hubspot },
      { name: "Pipedrive", href: getCrmReviewUrl("pipedrive"), description: "Pipeline-first; simpler if you only need sales and don't need boards.", logoSrc: LOGOS.pipedrive },
      { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm"), description: "Full CRM at lower cost; good if you don't need board flexibility.", logoSrc: LOGOS.zoho },
      { name: "Salesforce", href: getCrmReviewUrl("salesforce"), description: "Maximum customization; for enterprises that need scale and ecosystem.", logoSrc: LOGOS.salesforce },
    ],
    faqs: [
      { q: "What is Monday?", a: "Monday is the CRM layer of Monday's Work OS. You get contact and deal management on customizable boards, with the same automation and views used for projects. It suits teams that want CRM and work management in one place." },
      { q: "Is Monday good for sales teams?", a: "Yes, if your team likes board-based workflows and customization. Sales teams that prefer a traditional pipeline may find Pipedrive or HubSpot faster to adopt. Monday is strong when you also manage projects or want to design your own process." },
      { q: "How does Monday compare to HubSpot?", a: "Monday offers board-based flexibility and project-CRM combination; HubSpot offers a full marketing and sales CRM with a more traditional pipeline. Choose Monday for customization and work OS; choose HubSpot for out-of-the-box marketing and sales alignment." },
      { q: "Can I use Monday just for CRM?", a: "Yes. You can use Monday only for CRM with its templates and boards. Many users combine CRM with other boards for projects and operations." },
    ],
    methodology: CRM_METHODOLOGY,
    compareLinks: [
      { label: "Monday vs HubSpot", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
      { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
      { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
    ],
    compareSectionTitle: "Compare with other CRM software",
    bestPayrollSoftwareHref: BEST_CRM_SOFTWARE_HREF,
    compareHubHref: CRM_COMPARE_HUB,
    compareHubLabel: "Compare CRM software",
    bestRoundupLabel: "Best CRM software (2026) — full roundup",
    bestForSectionTitle: "Best CRM software for different use cases",
    bestForSectionSub: "Find CRM software by scenario.",
    scenarioLinks: CRM_SCENARIO_LINKS,
    guideHubHref: CRM_GUIDES_HUB,
    guideHubLabel: "CRM guides",
  },

  freshsales: {
    toolName: "Freshsales",
    category: "CRM",
    categoryHref: "/crm",
    rating: "4.3",
    startingPrice: "From $15/user/mo",
    bestFor: "sales teams that want AI-powered features and built-in phone and email in one CRM",
    visitUrl: "https://www.freshworks.com/crm/sales",
    logoSrc: LOGOS.freshsales,
    quickVerdict:
      "Freshsales combines CRM with AI insights, built-in calling, and email. A solid choice for sales teams that want automation and engagement tools without juggling multiple apps.",
    quickVerdictParagraphs: [
      "Freshsales (by Freshworks) is a modern sales CRM with AI-powered lead scoring, built-in phone and email, and a clear pipeline. You get contact and deal management plus communication tools in one product. Freddy AI suggests next best actions and helps prioritize leads—useful for teams that want guidance without building rules from scratch. The interface is clean and the product is aimed at SMB sales teams.",
      "We like Freshsales for teams that want more than a basic pipeline: AI, built-in dialer, and email sequencing in one place. Pricing is competitive and the free tier supports a limited number of users. Integrations with Freshworks support and other products round out the stack. It's a good alternative to Pipedrive or HubSpot when you want a balance of sales focus and modern features.",
      "Limitations: less marketing depth than HubSpot and less ecosystem than Salesforce. For strict pipeline-only needs, Pipedrive may be simpler. For full marketing-sales alignment, HubSpot is stronger. Freshsales sits in the middle—sales-focused with AI and communication tools.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Pipeline, contacts, AI lead scoring, built-in phone and email. Good automation and reporting. Part of Freshworks suite." },
      { category: "Pricing", score: "4.4", explanation: "Free tier available; paid plans are competitive. Per-user pricing; check tiers for AI and communication features." },
      { category: "Ease of Use", score: "4.4", explanation: "Clean interface and straightforward setup. AI features are easy to turn on. Generally easy for sales teams to adopt." },
      { category: "Support", score: "4.3", explanation: "Help center and support options. Freshworks has a reputation for responsive support. Adequate for SMB needs." },
      { category: "Integrations", score: "4.3", explanation: "Integrates with Freshworks products and many third-party tools. Fewer apps than HubSpot or Salesforce but covers typical sales stack." },
    ],
    pros: [
      "AI-powered lead scoring and next-best-action suggestions",
      "Built-in phone and email in the CRM",
      "Clean interface and competitive pricing",
      "Good for sales teams that want automation without complexity",
    ],
    cons: [
      "Less marketing automation than HubSpot",
      "Smaller ecosystem than Salesforce or HubSpot",
      "Some advanced features on higher tiers",
    ],
    bestForEditorial:
      "Freshsales is best for sales teams that want AI-powered features and built-in phone and email in one CRM. Ideal for inside sales and SMB teams that want to prioritize leads and run sequences without adding separate dialer or email tools. It fits teams that value a modern, all-in-one sales experience.",
    whoShouldAvoid:
      "Teams that need heavy marketing automation should consider HubSpot. Those that want the simplest pipeline-only tool may prefer Pipedrive. Enterprises that need maximum customization may choose Salesforce.",
    pricingSummary:
      "Freshsales offers a free tier with limited users; paid plans add more users, AI, and communication features. Pricing is per user per month. Check Freshworks' site for current tiers and what's included in each.",
    pricingTiers:
      "Free supports basic CRM; paid tiers add AI (Freddy), built-in phone, email sequences, and more. Compare tiers for your team size and need for AI and communication tools.",
    costVsCompetitors:
      "Freshsales is competitively priced with Pipedrive and mid-tier HubSpot for sales-only use. You get AI and built-in communication, which can replace separate tools. Compare total cost with your current stack.",
    features: [
      "Contact and deal pipeline",
      "AI lead scoring and next-best actions",
      "Built-in phone and email",
      "Email sequences and templates",
      "Reporting and dashboards",
      "Freshworks suite integration",
    ],
    keyFeatures: [
      { name: "AI lead scoring", description: "Freddy AI scores leads and suggests next best actions. Helps prioritize outreach and focus on likely converters." },
      { name: "Built-in phone and email", description: "Make calls and send emails from the CRM. No need for a separate dialer or email tool for basic use." },
      { name: "Pipeline and deal management", description: "Track deals through stages; customize pipeline and fields. Visual pipeline and activity timeline." },
      { name: "Email sequences", description: "Automate follow-up with sequences and templates. Track opens and clicks." },
      { name: "Reporting", description: "Pipeline, activity, and conversion reports. Dashboards for team performance." },
      { name: "Integrations", description: "Freshworks support and other products; email, calendar, and many sales tools. API for custom integrations." },
    ],
    integrations: ["Gmail & Outlook", "Calendar", "Freshworks suite", "Slack", "Zapier", "Many sales tools"],
    integrationsIntro:
      "Freshsales integrates with email, calendar, and the Freshworks suite (support, marketing). Third-party integrations cover common sales tools. Sufficient for most SMB sales stacks.",
    alternatives: [
      { name: "HubSpot", href: getCrmReviewUrl("hubspot"), description: "Stronger marketing and free CRM; better if you want full marketing-sales alignment.", logoSrc: LOGOS.hubspot },
      { name: "Pipedrive", href: getCrmReviewUrl("pipedrive"), description: "Simpler pipeline focus; good if you don't need AI or built-in phone.", logoSrc: LOGOS.pipedrive },
      { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm"), description: "Lower cost and suite integration; good if you use Zoho.", logoSrc: LOGOS.zoho },
      { name: "Close", href: getCrmReviewUrl("close"), description: "Built for inside sales and calling; another communication-focused CRM.", logoSrc: LOGOS.close },
    ],
    faqs: [
      { q: "What is Freshsales?", a: "Freshsales is a sales CRM by Freshworks. It includes contact and deal management, AI lead scoring, and built-in phone and email. It's aimed at SMB sales teams that want automation and communication in one tool." },
      { q: "Does Freshsales have a free plan?", a: "Yes. Freshsales has a free tier with limited users and features. Paid plans add more users, AI (Freddy), and communication features. Check Freshworks' site for current limits." },
      { q: "How does Freshsales compare to Pipedrive?", a: "Freshsales adds AI and built-in phone and email; Pipedrive is more pipeline-only. Choose Freshsales for AI and all-in-one communication; choose Pipedrive for simplicity and pipeline focus." },
      { q: "What CRM has built-in calling?", a: "Freshsales and Close both offer built-in calling in the CRM. HubSpot and others offer calling via integrations or add-ons. Compare features and pricing for your call volume." },
    ],
    methodology: CRM_METHODOLOGY,
    compareLinks: [
      { label: "Freshsales vs Pipedrive", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
      { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
      { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
    ],
    compareSectionTitle: "Compare with other CRM software",
    bestPayrollSoftwareHref: BEST_CRM_SOFTWARE_HREF,
    compareHubHref: CRM_COMPARE_HUB,
    compareHubLabel: "Compare CRM software",
    bestRoundupLabel: "Best CRM software (2026) — full roundup",
    bestForSectionTitle: "Best CRM software for different use cases",
    bestForSectionSub: "Find CRM software by scenario.",
    scenarioLinks: CRM_SCENARIO_LINKS,
    guideHubHref: CRM_GUIDES_HUB,
    guideHubLabel: "CRM guides",
  },

  copper: {
    toolName: "Copper",
    category: "CRM",
    categoryHref: "/crm",
    rating: "4.4",
    startingPrice: "From $29/user/mo",
    bestFor: "teams that use Google Workspace and want CRM that lives in Gmail and Google Calendar",
    visitUrl: "https://www.copper.com",
    logoSrc: LOGOS.copper,
    quickVerdict:
      "Copper is built for Google Workspace: contact and deal management that integrates deeply with Gmail and Google Calendar. Best when your team already lives in Google.",
    quickVerdictParagraphs: [
      "Copper (formerly ProsperWorks) is designed for Google Workspace users. Contacts and deals sync with Gmail and Google Calendar so you see context without leaving your inbox or calendar. Logging emails and meetings is automatic in many cases; the CRM feels like an extension of Google rather than a separate app. For teams that standardize on Google, Copper reduces double entry and keeps the CRM up to date.",
      "We like Copper for its Google-native experience. Setup is straightforward if you're on Workspace; the interface follows familiar Google patterns. Pipeline, reporting, and automation are solid—you get a full CRM, not a lightweight add-on. Pricing is per user and tends to be higher than some competitors; you're paying for the deep integration and ease of use for Google users.",
      "Limitations: best for Google Workspace only (no Outlook parity), and cost can be higher than Zoho or Pipedrive. If you're not on Google, HubSpot or another CRM may be a better fit. If you are on Google and want CRM that feels native, Copper is a top choice.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Full CRM with pipeline, contacts, and automation. Deep Gmail and Google Calendar integration. Reporting and mobile apps are good." },
      { category: "Pricing", score: "4.2", explanation: "Per-user pricing starting around $29/user/month. No free plan. Higher than some competitors; justified by Google integration." },
      { category: "Ease of Use", score: "4.6", explanation: "Very easy for Google Workspace users. Minimal context switching. Onboarding is smooth when Gmail and Calendar are already in use." },
      { category: "Support", score: "4.3", explanation: "Help center and support. Generally responsive. Google-centric documentation." },
      { category: "Integrations", score: "4.5", explanation: "Best-in-class Google Workspace integration. Other integrations via API and partners. Focus is on Google stack." },
    ],
    pros: [
      "Deep Gmail and Google Calendar integration",
      "Contact and deal management that feels native to Google",
      "Automatic logging of emails and meetings in many cases",
      "Full pipeline and reporting; not a lightweight add-on",
    ],
    cons: [
      "Best for Google Workspace only; no comparable Outlook experience",
      "Higher cost than some competitors",
      "Less ecosystem than Salesforce or HubSpot",
    ],
    bestForEditorial:
      "Copper is best for teams that use Google Workspace and want CRM that lives in Gmail and Google Calendar. Ideal for SMBs and sales teams that have standardized on Google and want minimal context switching. It fits organizations that value the Google-native experience and are willing to pay for it.",
    whoShouldAvoid:
      "Teams that use Outlook or a mix of email systems will not get the same benefit. If you're not on Google Workspace, HubSpot or Zoho CRM may be more appropriate. Cost-conscious teams may prefer Zoho or Pipedrive.",
    pricingSummary:
      "Copper uses per-user monthly pricing starting around $29/user/month. There is no free plan. Higher tiers add more automation and features. Check Copper's site for current pricing and plans.",
    pricingTiers:
      "Basic covers pipeline and core features; Professional adds automation and reporting; Business adds more customization and support. Compare tiers for your team size and need for automation.",
    costVsCompetitors:
      "Copper is typically more expensive per user than Pipedrive or Zoho CRM. You pay for the Google integration and ease of use. If your team lives in Gmail and Calendar, the time saved can justify the cost.",
    features: [
      "Contact and deal pipeline",
      "Gmail and Google Calendar integration",
      "Automatic email and meeting logging",
      "Pipeline and activity tracking",
      "Reporting and dashboards",
      "Mobile apps",
    ],
    keyFeatures: [
      { name: "Gmail integration", description: "See contact and deal context in Gmail; log emails automatically. Compose and send from Copper or Gmail." },
      { name: "Google Calendar integration", description: "Meetings and events sync with deals and contacts. Log meetings without manual entry." },
      { name: "Pipeline and deal management", description: "Track deals through stages; customize pipeline. Visual pipeline and activity timeline." },
      { name: "Automation", description: "Workflow automation for follow-up, assignment, and field updates. Reduces manual work for Google-centric teams." },
      { name: "Reporting", description: "Pipeline, activity, and conversion reports. Dashboards for team performance. Export to Sheets." },
      { name: "Mobile apps", description: "iOS and Android apps for on-the-go access. Works with Google apps on mobile." },
    ],
    integrations: ["Gmail", "Google Calendar", "Google Drive", "Slack", "Zapier", "API for custom"],
    integrationsIntro:
      "Copper's strength is Google Workspace integration. Beyond that, it connects to Slack, Zapier, and other tools via API and partners. The focus is on making the Google stack the center of your CRM workflow.",
    alternatives: [
      { name: "HubSpot", href: getCrmReviewUrl("hubspot"), description: "Strong Gmail integration and free CRM; better if you want marketing hub too.", logoSrc: LOGOS.hubspot },
      { name: "Pipedrive", href: getCrmReviewUrl("pipedrive"), description: "Pipeline-focused; lower cost if you don't need Google-native experience.", logoSrc: LOGOS.pipedrive },
      { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm"), description: "Good value and integrations; works with Gmail but not as deep as Copper.", logoSrc: LOGOS.zoho },
      { name: "Salesforce", href: getCrmReviewUrl("salesforce"), description: "Google integration via AppExchange; for enterprises that need more than CRM.", logoSrc: LOGOS.salesforce },
    ],
    faqs: [
      { q: "Is Copper only for Google users?", a: "Copper is built for Google Workspace. The main value is deep Gmail and Calendar integration. If you use Outlook or another email system, you won't get the same experience—consider HubSpot or another CRM." },
      { q: "How much does Copper cost?", a: "Copper pricing starts around $29/user/month. There is no free plan. Check Copper's site for current tiers and features." },
      { q: "Does Copper work with Gmail?", a: "Yes. Copper integrates deeply with Gmail. You can see contact and deal context in Gmail and log emails automatically. It's one of the strongest Gmail CRMs available." },
      { q: "What CRM works best with Google Workspace?", a: "Copper is built specifically for Google Workspace. HubSpot and Zoho CRM also integrate with Gmail and Calendar but are not as Google-native. Choose Copper for the deepest Google experience." },
    ],
    methodology: CRM_METHODOLOGY,
    compareLinks: [
      { label: "Copper vs HubSpot", href: getCrmCompareUrl("copper-vs-hubspot") },
      { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
    ],
    compareSectionTitle: "Compare with other CRM software",
    bestPayrollSoftwareHref: BEST_CRM_SOFTWARE_HREF,
    compareHubHref: CRM_COMPARE_HUB,
    compareHubLabel: "Compare CRM software",
    bestRoundupLabel: "Best CRM software (2026) — full roundup",
    bestForSectionTitle: "Best CRM software for different use cases",
    bestForSectionSub: "Find CRM software by scenario.",
    scenarioLinks: CRM_SCENARIO_LINKS,
    guideHubHref: CRM_GUIDES_HUB,
    guideHubLabel: "CRM guides",
  },

  close: {
    toolName: "Close",
    category: "CRM",
    categoryHref: "/crm",
    rating: "4.5",
    startingPrice: "From $49/user/mo",
    bestFor: "inside sales teams that spend time on the phone and want calling, email, and pipeline in one place",
    visitUrl: "https://www.close.com",
    logoSrc: LOGOS.close,
    quickVerdict:
      "Close is built for inside sales: built-in calling, email, and pipeline in one product. A top choice when your team lives on the phone and wants everything in one place.",
    quickVerdictParagraphs: [
      "Close combines CRM with a built-in dialer, email, and SMS so inside sales teams can call, email, and track deals without switching apps. The pipeline is clear and activity-focused; call logging and recording are built in. For teams that measure success by calls and conversations, Close removes the friction of separate dialer and CRM. Pricing is per user and tends to be higher than Pipedrive or Zoho—you're paying for the all-in-one communication stack.",
      "We like Close for its focus: it's unapologetically built for sales reps who make calls and send emails every day. The interface is clean and the product avoids bloat. Integrations cover calendar, Zapier, and key tools; you don't get the breadth of HubSpot or Salesforce, but for inside sales that's often fine. If your team is phone-first and wants one tool for calling and pipeline, Close is a strong pick.",
      "Limitations: less marketing automation than HubSpot and less customization than Salesforce. Not the best fit for field sales or teams that don't rely on phone. For inside sales and call-heavy workflows, Close is one of the best options.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Pipeline, contacts, built-in calling, email, and SMS. Call recording and logging. Focused on inside sales workflow." },
      { category: "Pricing", score: "4.2", explanation: "Per-user pricing starting around $49/user/month. Higher than many CRMs; includes dialer and communication tools." },
      { category: "Ease of Use", score: "4.6", explanation: "Designed for reps who call and email daily. Minimal context switching. Easy to adopt for inside sales teams." },
      { category: "Support", score: "4.4", explanation: "Help center and support. Responsive for paid customers. Documentation is solid." },
      { category: "Integrations", score: "4.3", explanation: "Calendar, Zapier, and key sales tools. Fewer integrations than HubSpot or Salesforce; sufficient for inside sales stack." },
    ],
    pros: [
      "Built-in calling, email, and SMS in one CRM",
      "Call logging and recording; pipeline and communication together",
      "Designed for inside sales; minimal context switching",
      "Clean interface and focused feature set",
    ],
    cons: [
      "Higher cost than Pipedrive or Zoho",
      "Less marketing automation and ecosystem than HubSpot or Salesforce",
      "Best for inside sales; less fit for field or marketing-heavy teams",
    ],
    bestForEditorial:
      "Close is best for inside sales teams that spend time on the phone and want calling, email, and pipeline in one place. Ideal for SDRs, BDRs, and sales reps who make many calls and want one tool for communication and CRM. It fits teams that measure activity by calls and conversations.",
    whoShouldAvoid:
      "Teams that need heavy marketing automation should consider HubSpot. Those that don't rely on phone may find Pipedrive or HubSpot sufficient at lower cost. Field sales or complex multi-touch processes may need a larger platform.",
    pricingSummary:
      "Close uses per-user monthly pricing starting around $49/user/month. The price includes the dialer and communication features. Higher tiers add more features and support. Check Close's site for current pricing.",
    pricingTiers:
      "Starter covers pipeline and calling; Basic and Professional add more communication and automation features. Compare tiers for your team size and need for call recording and advanced features.",
    costVsCompetitors:
      "Close is more expensive per user than Pipedrive or Zoho because it bundles a dialer and communication tools. If you're paying separately for a dialer and CRM, Close can consolidate cost. Compare total cost of your current stack.",
    features: [
      "Pipeline and deal management",
      "Built-in dialer and call logging",
      "Email and SMS from the CRM",
      "Call recording and analytics",
      "Reporting and dashboards",
      "Calendar integration",
    ],
    keyFeatures: [
      { name: "Built-in calling", description: "Make calls from the CRM with one-click dialing. Call logging is automatic; recording available on higher plans." },
      { name: "Email and SMS", description: "Send and track email and SMS from Close. Templates and sequences. All communication in one timeline." },
      { name: "Pipeline and activity", description: "Track deals through stages; see next steps and activity history. Focused on rep productivity." },
      { name: "Call analytics", description: "Call volume, duration, and outcomes. Useful for coaching and pipeline forecasting." },
      { name: "Integrations", description: "Calendar, Zapier, and key tools. Keeps the stack simple for inside sales." },
      { name: "Reporting", description: "Pipeline, call, and activity reports. Dashboards for team performance." },
    ],
    integrations: ["Google & Outlook Calendar", "Zapier", "Slack", "Chorus (call intelligence)", "Other sales tools"],
    integrationsIntro:
      "Close integrates with calendar, Zapier, and a focused set of sales tools. The product emphasizes all-in-one communication, so you need fewer integrations than with a separate dialer and CRM.",
    alternatives: [
      { name: "HubSpot", href: getCrmReviewUrl("hubspot"), description: "Adds marketing hub and free CRM; calling via HubSpot or integrations.", logoSrc: LOGOS.hubspot },
      { name: "Freshsales", href: getCrmReviewUrl("freshsales"), description: "Built-in phone and AI; another all-in-one sales CRM.", logoSrc: LOGOS.freshsales },
      { name: "Pipedrive", href: getCrmReviewUrl("pipedrive"), description: "Pipeline focus; add a separate dialer if you need heavy calling.", logoSrc: LOGOS.pipedrive },
      { name: "Copper", href: getCrmReviewUrl("copper"), description: "Google-native; good if you're on Workspace and don't need a dialer.", logoSrc: LOGOS.copper },
    ],
    faqs: [
      { q: "What is Close CRM?", a: "Close is a CRM built for inside sales. It includes a built-in dialer, email, and SMS so reps can call and email from one place. Pipeline and activity tracking are designed for call-heavy workflows." },
      { q: "How much does Close cost?", a: "Close pricing starts around $49/user/month. The price includes the dialer and communication features. Check Close's site for current tiers." },
      { q: "Is Close good for inside sales?", a: "Yes. Close is one of the best CRMs for inside sales. It's built for reps who make calls and send emails daily, with minimal context switching and built-in call logging." },
      { q: "Does Close have a built-in dialer?", a: "Yes. Close includes a built-in dialer. You can make calls from the CRM, log them automatically, and record calls on higher plans. No need for a separate dialer tool." },
    ],
    methodology: CRM_METHODOLOGY,
    compareLinks: [
      { label: "Close vs Pipedrive", href: getCrmCompareUrl("close-vs-pipedrive") },
      { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
      { label: "Freshsales vs Pipedrive", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
    ],
    compareSectionTitle: "Compare with other CRM software",
    bestPayrollSoftwareHref: BEST_CRM_SOFTWARE_HREF,
    compareHubHref: CRM_COMPARE_HUB,
    compareHubLabel: "Compare CRM software",
    bestRoundupLabel: "Best CRM software (2026) — full roundup",
    bestForSectionTitle: "Best CRM software for different use cases",
    bestForSectionSub: "Find CRM software by scenario.",
    scenarioLinks: CRM_SCENARIO_LINKS,
    guideHubHref: CRM_GUIDES_HUB,
    guideHubLabel: "CRM guides",
  },

  keap: {
    toolName: "Keap",
    category: "CRM",
    categoryHref: "/crm",
    rating: "4.3",
    startingPrice: "From $159/mo",
    bestFor: "small businesses that want marketing automation and CRM in one platform, especially for lead nurturing and email campaigns",
    visitUrl: "https://keap.com",
    logoSrc: LOGOS.keap,
    quickVerdict:
      "Keap combines marketing automation and CRM for small businesses: email campaigns, automation, and pipeline in one. Best when you want to nurture leads and run campaigns without a separate marketing tool.",
    quickVerdictParagraphs: [
      "Keap (formerly Infusionsoft) is built for small businesses that need both CRM and marketing automation. You get contact and deal management plus email marketing, automation, and landing pages in one platform. The focus is on lead nurturing and sales pipeline—ideal for service businesses, coaches, and consultants who run email campaigns and want to track leads through to close. Pricing is typically a flat monthly fee rather than per-user, which can simplify cost for small teams.",
      "We like Keap for the combination of marketing and CRM at a small-business scale. You don't need separate tools for email and pipeline; automation can move leads through sequences and into the pipeline. The learning curve can be steeper than a simple CRM like Pipedrive, but the payoff is a single system for marketing and sales. Compared to HubSpot, Keap is more small-business focused and often priced as a flat fee; compared to Mailchimp plus a CRM, Keap keeps everything in one place.",
      "Limitations: less brand recognition than HubSpot, and the interface can feel dated to some users. Enterprises and large teams may prefer HubSpot or Salesforce. For small businesses that want marketing automation and CRM in one and are willing to learn the system, Keap is a solid choice.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "CRM plus email marketing, automation, and landing pages. Good for lead nurturing and small business. Pipeline and reporting are adequate." },
      { category: "Pricing", score: "4.2", explanation: "Flat monthly pricing often starting around $159/month. Can be simpler than per-user for very small teams. Compare to HubSpot for your scenario." },
      { category: "Ease of Use", score: "4.2", explanation: "Capable but has a learning curve. Automation builder is powerful but not trivial. Better for teams willing to invest in setup." },
      { category: "Support", score: "4.3", explanation: "Support and training options. Keap has a history of small-business focus. Documentation and community available." },
      { category: "Integrations", score: "4.3", explanation: "Integrates with payment, calendar, and many small business tools. Fewer apps than HubSpot or Salesforce but covers SMB needs." },
    ],
    pros: [
      "Marketing automation and CRM in one platform",
      "Email campaigns, automation, and landing pages",
      "Flat monthly pricing option for small teams",
      "Good for lead nurturing and service businesses",
    ],
    cons: [
      "Learning curve for automation and full feature set",
      "Less brand recognition and ecosystem than HubSpot",
      "Interface can feel dated compared to newer CRMs",
    ],
    bestForEditorial:
      "Keap is best for small businesses that want marketing automation and CRM in one platform. Ideal for service businesses, coaches, consultants, and solopreneurs who run email campaigns and need to nurture leads into the pipeline. It fits teams that want to avoid juggling a separate email tool and CRM.",
    whoShouldAvoid:
      "Teams that only need a simple pipeline without marketing should consider Pipedrive or HubSpot's free CRM. Large organizations may find HubSpot or Salesforce more scalable. If you want the simplest possible setup, a lighter CRM may be better.",
    pricingSummary:
      "Keap uses tiered pricing, often with a flat monthly fee starting around $159/month for the base plan. Higher tiers add more contacts, automation, and features. Pricing structure differs from per-user CRMs—check Keap's site for current plans and limits.",
    pricingTiers:
      "Pro and Max plans add contacts, automation, and features. Compare tiers for your contact count and need for email, automation, and pipeline. Payment processing and other add-ons may apply.",
    costVsCompetitors:
      "Keap is positioned for small business with flat or simplified pricing. Compared to HubSpot, you may pay less for combined marketing and CRM at low scale. Compare total cost including contacts and features you need.",
    features: [
      "Contact and deal pipeline",
      "Email marketing and automation",
      "Landing pages and forms",
      "Lead scoring and segmentation",
      "Payment processing",
      "Reporting and dashboards",
    ],
    keyFeatures: [
      { name: "Email marketing and automation", description: "Build email campaigns and automation sequences. Nurture leads with triggered emails and workflows." },
      { name: "CRM and pipeline", description: "Track contacts and deals. Pipeline stages and activity tracking. Integrates with marketing so leads flow into sales." },
      { name: "Landing pages and forms", description: "Create landing pages and forms to capture leads. Data flows into CRM and automation." },
      { name: "Lead scoring and segmentation", description: "Score and segment leads for targeting. Use segments in automation and campaigns." },
      { name: "Payment processing", description: "Accept payments and run recurring billing. Useful for service businesses and coaches." },
      { name: "Integrations", description: "Calendar, payment, and many small business tools. API and partners extend connectivity." },
    ],
    integrations: ["QuickBooks", "Calendar", "Payment processors", "WordPress", "Zapier", "Many SMB tools"],
    integrationsIntro:
      "Keap integrates with accounting, calendar, payment, and many small business tools. The focus is on the stack that service businesses and coaches use—less breadth than HubSpot or Salesforce, but adequate for the target market.",
    alternatives: [
      { name: "HubSpot", href: getCrmReviewUrl("hubspot"), description: "Larger brand and ecosystem; free CRM and strong marketing hub. More scalable for growth.", logoSrc: LOGOS.hubspot },
      { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm"), description: "CRM with Zoho Campaigns for marketing; good if you use Zoho.", logoSrc: LOGOS.zoho },
      { name: "Salesforce", href: getCrmReviewUrl("salesforce"), description: "Marketing Cloud and CRM; for enterprises that need scale.", logoSrc: LOGOS.salesforce },
      { name: "Pipedrive", href: getCrmReviewUrl("pipedrive"), description: "Pipeline-only; add Mailchimp or similar for marketing if you don't need full automation.", logoSrc: LOGOS.pipedrive },
    ],
    faqs: [
      { q: "What is Keap?", a: "Keap (formerly Infusionsoft) is a platform that combines CRM with marketing automation for small businesses. You get contact and deal management plus email marketing, automation, and landing pages in one product." },
      { q: "Is Keap good for small business?", a: "Yes. Keap is built for small businesses that need both CRM and marketing automation. Service businesses, coaches, and consultants often use it to nurture leads and manage pipeline without separate tools." },
      { q: "How does Keap compare to HubSpot?", a: "Keap is more small-business focused with flat or simplified pricing; HubSpot has a free CRM and scales to larger teams. Keap can be more affordable at low scale for marketing plus CRM; HubSpot has stronger brand and ecosystem." },
      { q: "What CRM integrates with marketing automation?", a: "HubSpot, Keap, Zoho CRM (with Zoho Campaigns), and Salesforce (with Marketing Cloud) combine CRM and marketing. Keap is aimed at small business; HubSpot and Salesforce scale up." },
    ],
    methodology: CRM_METHODOLOGY,
    compareLinks: [
      { label: "Keap vs HubSpot", href: getCrmCompareUrl("keap-vs-hubspot") },
      { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
      { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
    ],
    compareSectionTitle: "Compare with other CRM software",
    bestPayrollSoftwareHref: BEST_CRM_SOFTWARE_HREF,
    compareHubHref: CRM_COMPARE_HUB,
    compareHubLabel: "Compare CRM software",
    bestRoundupLabel: "Best CRM software (2026) — full roundup",
    bestForSectionTitle: "Best CRM software for different use cases",
    bestForSectionSub: "Find CRM software by scenario.",
    scenarioLinks: CRM_SCENARIO_LINKS,
    guideHubHref: CRM_GUIDES_HUB,
    guideHubLabel: "CRM guides",
  },
};

export function getCrmReviewBySlug(slug: string): CrmReviewData | null {
  return reviews[slug] ?? null;
}

export function getCrmReviewSlugs(): string[] {
  return Object.keys(reviews);
}

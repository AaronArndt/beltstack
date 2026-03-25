import {
  getEmailMarketingBestForUrl,
  getEmailMarketingCompareUrl,
  getEmailMarketingReviewUrl,
} from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";
import { emailMarketingLogoForSlug } from "@/lib/data/emailMarketingLogos";

export type BestEmailMarketingPick = SoftwarePickCardContent & { standoutFeature: string };

export const TOP_PICKS: BestEmailMarketingPick[] = [
  {
    slug: "mailchimp",
    name: "Mailchimp",
    badge: "Best default for local service brands",
    comparisonTableBestFor: "Newsletters, promos, and simple automation",
    description:
      "Mailchimp remains the familiar starting point for teams that want drag-and-drop campaigns, forms, and starter automations without a long implementation project.",
    rating: "4.5",
    startingPrice: "Free tier / paid from ~$13/mo",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://mailchimp.com",
    logoSrc: emailMarketingLogoForSlug("mailchimp"),
    compareSlugs: ["mailchimp-vs-constant-contact", "mailchimp-vs-activecampaign", "klaviyo-vs-mailchimp"],
    standoutFeature: "Broad template library and approachable editor",
    editorialParagraph:
      "Mailchimp fits service businesses that prioritize predictable campaign publishing, basic segmentation, and an ecosystem of integrations across scheduling tools and lightweight CRMs.",
    pros: ["Fast creative turnaround", "Huge integration marketplace", "Free tier for validation"],
    cons: ["Automation depth caps on lower tiers", "Costs climb with contacts and premium features"],
    pricingSummary:
      "Pricing scales by contact count and feature tier. Model annual list growth and automation needs before locking a plan.",
    alternativesSlug: "mailchimp",
  },
  {
    slug: "activecampaign",
    name: "ActiveCampaign",
    badge: "Best for serious automation + sales follow-up",
    comparisonTableBestFor: "Multi-step follow-up, tagging, and pipeline-aware email",
    description:
      "ActiveCampaign combines email marketing with CRM-lite and deep automation so teams can run behavior-driven sequences after estimates, no-shows, and seasonal tune-up windows.",
    rating: "4.6",
    startingPrice: "From ~$29/mo (paid annually)",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.activecampaign.com",
    logoSrc: emailMarketingLogoForSlug("activecampaign"),
    compareSlugs: ["mailchimp-vs-activecampaign", "klaviyo-vs-mailchimp", "brevo-vs-mailchimp"],
    standoutFeature: "Automation builder and conditional logic",
    editorialParagraph:
      "Choose ActiveCampaign when email is part of a broader follow-up machine: tagging by job type, branching on open/click behavior, and routing leads into sales tasks.",
    pros: ["Strong automation depth", "Good lead scoring and deal objects", "Mature deliverability tooling"],
    cons: ["Steeper learning curve", "Less ‘instant wow’ for brand-new operators"],
    pricingSummary:
      "Plans are list-size based with contact limits. Validate how many active automations you will run in year one.",
    alternativesSlug: "activecampaign",
  },
  {
    slug: "klaviyo",
    name: "Klaviyo",
    badge: "Best when revenue tracking drives campaigns",
    comparisonTableBestFor: "Data-heavy segmentation and purchase-triggered flows",
    description:
      "Klaviyo excels when you want campaigns anchored to revenue events, customer lifetime value thinking, and tight integration with commerce—but many service businesses still use it for advanced nurture and win-back flows.",
    rating: "4.5",
    startingPrice: "Free tier / paid scales with profiles",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.klaviyo.com",
    logoSrc: emailMarketingLogoForSlug("klaviyo"),
    compareSlugs: ["klaviyo-vs-mailchimp", "mailchimp-vs-activecampaign", "convertkit-vs-mailchimp"],
    standoutFeature: "Segmentation + predictive analytics mindset",
    editorialParagraph:
      "Klaviyo is most compelling when you are disciplined about tracking events and want email decisions tied to measurable customer behavior, not just calendar sends.",
    pros: ["Powerful segmentation", "Strong flow templates for retention", "Clear reporting narrative"],
    cons: ["Can feel heavy for very small lists", "Pricing ramps with profiles and sends"],
    pricingSummary:
      "Estimate cost off active profiles and expected monthly sends. Plan for hygiene so you are not paying for stale contacts.",
    alternativesSlug: "klaviyo",
  },
  {
    slug: "hubspot-email-marketing",
    name: "HubSpot",
    badge: "Best Hub-bound marketing + CRM bundle",
    comparisonTableBestFor: "Teams standardizing on HubSpot CRM and inbound workflows",
    description:
      "HubSpot shines when marketing, sales, and follow-up live in one workspace—ideal for service companies that want form capture, deal stages, and campaigns in a single system.",
    rating: "4.4",
    startingPrice: "Free tools / Marketing Suite from ~$800/mo annually (varies)",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.hubspot.com/products/marketing",
    logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"),
    compareSlugs: ["mailchimp-vs-activecampaign", "mailchimp-vs-constant-contact", "klaviyo-vs-mailchimp"],
    standoutFeature: "Native CRM objects and unified contact timeline",
    editorialParagraph:
      "Pick HubSpot when your team already bought into the ecosystem—or when you want one source of truth for inbound leads, email performance, and sales follow-up tasks.",
    pros: ["Unified CRM + marketing UX", "Strong lifecycle reporting", "Enterprise-grade roadmap options"],
    cons: ["Full suite pricing can surprise smaller teams", "Best value when Hub is central, not occasional"],
    pricingSummary:
      "Model Starter vs Professional tiers against required seats and landing page volume. Bundles beat point tools only if adoption is company-wide.",
  },
];

export const EMAIL_MARKETING_REGISTRY_SUPPLEMENT: SoftwarePickCardContent[] = [
  {
    slug: "constant-contact",
    name: "Constant Contact",
    badge: "Best for event-first and community-heavy operators",
    comparisonTableBestFor: "Simple email + light events and social cross-posts",
    description:
      "Constant Contact helps owner-led teams that want straightforward list growth, readable reporting, and guidance-heavy onboarding for newsletters and promos.",
    rating: "4.3",
    startingPrice: "From ~$12/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.constantcontact.com",
    logoSrc: emailMarketingLogoForSlug("constant-contact"),
    compareSlugs: ["mailchimp-vs-constant-contact", "mailchimp-vs-activecampaign", "brevo-vs-mailchimp"],
    standoutFeature: "Guided setup and beginner-friendly support paths",
    editorialParagraph:
      "Constant Contact often wins for teams that value human support and quick wins over building highly custom automations.",
    pros: ["Friendly for non-technical owners", "Solid templates out of the box", "Straightforward pricing tables"],
    cons: ["Less automation depth vs ActiveCampaign", "Fewer ‘power user’ edge-case features"],
    pricingSummary: "Annual prepay discounts are common. Validate contact tiers against realistic list size.",
  },
  {
    slug: "convertkit",
    name: "Kit",
    badge: "Best creator-style nurture for premium services",
    comparisonTableBestFor: "Sequences, digital products, and audience tags",
    description:
      "Kit’s automation language suits premium contractors and consultants who sell education, maintenance memberships, or phased projects with sequential storytelling.",
    rating: "4.4",
    startingPrice: "Free tier / paid from ~$9/mo",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://kit.com",
    logoSrc: emailMarketingLogoForSlug("convertkit"),
    compareSlugs: ["convertkit-vs-mailchimp", "klaviyo-vs-mailchimp", "mailchimp-vs-activecampaign"],
    standoutFeature: "Visual automations tuned to creators",
    editorialParagraph:
      "Kit is a strong alternative when your funnel behaves like a content-driven nurture path rather than a coupon blast calendar.",
    pros: ["Clean automation UI", "Good paid newsletter tooling", "Tag-centric workflows"],
    cons: ["Less enterprise governance", "Reporting may feel light vs Klaviyo"],
    pricingSummary: "Pricing grows with subscribers. Clean lists regularly to avoid tier creep.",
  },
  {
    slug: "brevo",
    name: "Brevo",
    badge: "Best bundled email + SMS price shoppers",
    comparisonTableBestFor: "Transactional email + promo sends on one bill",
    description:
      "Brevo (formerly Sendinblue) appeals to teams that want email, SMS, and transactional messages without juggling multiple vendors—useful for appointment reminders and seasonal pushes.",
    rating: "4.2",
    startingPrice: "Free tier / paid from ~$25/mo",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.brevo.com",
    logoSrc: emailMarketingLogoForSlug("brevo"),
    compareSlugs: ["brevo-vs-mailchimp", "mailchimp-vs-constant-contact", "mailchimp-vs-activecampaign"],
    standoutFeature: "Send-based pricing and multi-channel hub",
    editorialParagraph:
      "Pick Brevo when you need pragmatic multi-channel execution and want pricing tied more to sending volume than fancy dashboards.",
    pros: ["SMS + email in one stack", "Transactional templates", "European-friendly compliance tooling"],
    cons: ["Automation UX varies by tier", "Some advanced reporting reserved for higher plans"],
    pricingSummary: "Watch SMS usage and transactional volume—they drive renewal surprises.",
  },
  {
    slug: "mailerlite",
    name: "MailerLite",
    badge: "Best lean teams needing modern editors",
    comparisonTableBestFor: "Budget operators who still want polished layouts",
    description:
      "MailerLite delivers a minimalist interface with solid automation basics—perfect for lean field-service offices that send monthly newsletters and a handful of automated drips.",
    rating: "4.3",
    startingPrice: "Free tier / paid from ~$10/mo",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.mailerlite.com",
    logoSrc: emailMarketingLogoForSlug("mailerlite"),
    compareSlugs: ["convertkit-vs-mailchimp", "brevo-vs-mailchimp", "klaviyo-vs-mailchimp"],
    standoutFeature: "Fast editor experience with automation basics",
    editorialParagraph:
      "MailerLite is the pragmatic pick when you want respectable design without paying for enterprise automation you will not operationalize.",
    pros: ["Low overhead UI", "Good value for smaller lists", "Landing page builder included on many plans"],
    cons: ["Advanced ecommerce analytics thinner than Klaviyo", "Enterprise controls more limited"],
    pricingSummary: "Annual plans discount meaningfully—budget list growth before committing.",
  },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  {
    label: "Best for small business",
    href: getEmailMarketingBestForUrl("small-business"),
    description: "Lean stacks for owners juggling dispatch and marketing.",
  },
  {
    label: "Best for contractors",
    href: getEmailMarketingBestForUrl("contractors"),
    description: "Follow-ups tied to estimates, job completion, and trade seasonality.",
  },
  {
    label: "Best for HVAC",
    href: getEmailMarketingBestForUrl("hvac"),
    description: "Tune-ups, membership renewals, and shoulder-season demand.",
  },
  {
    label: "Best for plumbers",
    href: getEmailMarketingBestForUrl("plumbers"),
    description: "Emergency nurture, referral loops, and trust-building after service calls.",
  },
  {
    label: "Best for electricians",
    href: getEmailMarketingBestForUrl("electricians"),
    description: "Safety-focused education sequences and project-based follow-ups.",
  },
  {
    label: "Best for home services",
    href: getEmailMarketingBestForUrl("home-services"),
    description: "Multi-trade coordination, shared lists, and brand voice consistency.",
  },
];

export const BEST_FOR_BY_TRADE: { label: string; href: string }[] = [
  { label: "Small business", href: getEmailMarketingBestForUrl("small-business") },
  { label: "Contractors", href: getEmailMarketingBestForUrl("contractors") },
  { label: "HVAC", href: getEmailMarketingBestForUrl("hvac") },
  { label: "Plumbers", href: getEmailMarketingBestForUrl("plumbers") },
  { label: "Electricians", href: getEmailMarketingBestForUrl("electricians") },
  { label: "Home services", href: getEmailMarketingBestForUrl("home-services") },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Mailchimp vs Constant Contact", href: getEmailMarketingCompareUrl("mailchimp-vs-constant-contact") },
  { label: "Mailchimp vs ActiveCampaign", href: getEmailMarketingCompareUrl("mailchimp-vs-activecampaign") },
  { label: "Klaviyo vs Mailchimp", href: getEmailMarketingCompareUrl("klaviyo-vs-mailchimp") },
  { label: "Kit vs Mailchimp", href: getEmailMarketingCompareUrl("convertkit-vs-mailchimp") },
  { label: "Brevo vs Mailchimp", href: getEmailMarketingCompareUrl("brevo-vs-mailchimp") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is email marketing software for service businesses?",
    a: "It is the system you use to send newsletters, automations, and transactional messages to homeowners and commercial clients—usually with forms, segmentation, and reporting so you know what drives booked jobs.",
  },
  {
    q: "Is email marketing worth it for contractors?",
    a: "Yes when you commit to post-job follow-up, seasonal campaigns, and estimate reminders. Email compounds trust between service visits and keeps you top-of-mind without paying per lead like ad platforms.",
  },
  {
    q: "Which email tool is best for small service businesses?",
    a: "Mailchimp or MailerLite are common defaults for simplicity. Choose ActiveCampaign or HubSpot when automation and CRM context must drive follow-up. Pick Klaviyo when revenue-style segmentation is central, and Brevo when SMS plus email should share one stack.",
  },
  {
    q: "How much does email marketing software cost?",
    a: "Many providers offer free tiers up to a few hundred contacts. Paid plans often start between $10 and $50 monthly for small lists, then scale with contacts, send volume, SMS usage, and advanced automation seats.",
  },
  {
    q: "Should I pick email marketing or SMS first?",
    a: "Most service brands still anchor on email for richer storytelling and compliance documentation, then add SMS for urgent reminders. Some teams start combined with Brevo; others pair Mailchimp with a separate SMS vendor.",
  },
  {
    q: "How do I measure success?",
    a: "Track list growth, open and click trends, booking link conversions, and revenue-influenced jobs where possible. Pair email metrics with CRM stages and call-tracking attribution so you see downstream impact, not vanity opens.",
  },
];

export const MORE_EMAIL_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc: string;
}[] = [
  {
    slug: "constant-contact",
    name: "Constant Contact",
    description: "Great when you want guided onboarding and simple campaign calendars.",
    reviewHref: getEmailMarketingReviewUrl("constant-contact"),
    logoSrc: emailMarketingLogoForSlug("constant-contact"),
  },
  {
    slug: "convertkit",
    name: "Kit",
    description: "Ideal for educational nurture paths and creator-style sequencing.",
    reviewHref: getEmailMarketingReviewUrl("convertkit"),
    logoSrc: emailMarketingLogoForSlug("convertkit"),
  },
  {
    slug: "brevo",
    name: "Brevo",
    description: "Email + SMS hub with transactional and promotional flexibility.",
    reviewHref: getEmailMarketingReviewUrl("brevo"),
    logoSrc: emailMarketingLogoForSlug("brevo"),
  },
  {
    slug: "mailerlite",
    name: "MailerLite",
    description: "Lightweight pricing with modern layout tools for lean offices.",
    reviewHref: getEmailMarketingReviewUrl("mailerlite"),
    logoSrc: emailMarketingLogoForSlug("mailerlite"),
  },
];

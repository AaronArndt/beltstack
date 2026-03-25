import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import { emailMarketingLogoForSlug } from "@/lib/data/emailMarketingLogos";
import { getEmailMarketingCompareUrl, getEmailMarketingReviewUrl } from "@/lib/routes";

const featuredProducts = [
  {
    slug: "mailchimp",
    name: "Mailchimp",
    badge: "Best balanced default",
    description: "Fast campaigns, solid journeys, and massive integrations for lean marketing teams.",
    rating: "4.5",
    startingPrice: "Free–paid",
    reviewHref: getEmailMarketingReviewUrl("mailchimp"),
    visitUrl: "https://mailchimp.com",
    logoSrc: emailMarketingLogoForSlug("mailchimp"),
  },
  {
    slug: "activecampaign",
    name: "ActiveCampaign",
    badge: "Best automation depth",
    description: "CRM-aware sequences for estimate follow-up, no-shows, and seasonal pushes.",
    rating: "4.6",
    startingPrice: "From ~$29/mo",
    reviewHref: getEmailMarketingReviewUrl("activecampaign"),
    visitUrl: "https://www.activecampaign.com",
    logoSrc: emailMarketingLogoForSlug("activecampaign"),
  },
  {
    slug: "mailerlite",
    name: "MailerLite",
    badge: "Best lean-office value",
    description: "Modern editor and automation basics without enterprise overhead.",
    rating: "4.3",
    startingPrice: "Free–paid",
    reviewHref: getEmailMarketingReviewUrl("mailerlite"),
    visitUrl: "https://www.mailerlite.com",
    logoSrc: emailMarketingLogoForSlug("mailerlite"),
  },
];

const comparisonTableRows = [
  { slug: "mailchimp", name: "Mailchimp", logoSrc: emailMarketingLogoForSlug("mailchimp"), bestFor: "Generalist email", startingPrice: "Free–paid", standoutFeature: "Integrations + templates", reviewHref: getEmailMarketingReviewUrl("mailchimp") },
  { slug: "activecampaign", name: "ActiveCampaign", logoSrc: emailMarketingLogoForSlug("activecampaign"), bestFor: "Automation + CRM", startingPrice: "From ~$29/mo", standoutFeature: "Branching workflows", reviewHref: getEmailMarketingReviewUrl("activecampaign") },
  { slug: "mailerlite", name: "MailerLite", logoSrc: emailMarketingLogoForSlug("mailerlite"), bestFor: "Lean teams", startingPrice: "Free–paid", standoutFeature: "Simple powerful UI", reviewHref: getEmailMarketingReviewUrl("mailerlite") },
];

type Scenario = {
  subtitle: string;
  introParagraph: string;
  topPicksSub: string;
  editorialSub: string;
  whyThesePicksSub: string;
  editorialGuidance: { heading: string; body: string }[];
  whyThesePicks: { heading: string; body: string }[];
  faqItems: { q: string; a: string }[];
};

const SCENARIOS: Record<string, Scenario> = {
  "small-business": {
    subtitle: "Lean stacks that owners can run between dispatch and bookkeeping.",
    introParagraph:
      "Small service businesses need email marketing software that respects limited time: quick sends, understandable automation, and pricing that does not punish modest list growth. The right pick earns its keep by turning reminders and nurture into booked jobs—not by adding dashboard busywork.",
    topPicksSub: "Top email marketing picks for small local operators.",
    editorialSub: "What small businesses should demand before paying annually.",
    whyThesePicksSub: "Why these tools stay realistic for owner-led teams.",
    editorialGuidance: [
      { heading: "Ship weekly, not quarterly", body: "Choose a platform the named owner can actually publish on weekly. Dead newsletters hurt trust more than imperfect design." },
      { heading: "Automate only what you will QA", body: "Start with post-lead and post-job sequences. Add branching after someone owns monthly automation audits." },
      { heading: "Tie capture to website reality", body: "Connect forms from your website builder and confirm CRM or spreadsheet handoffs so new subscribers are not orphaned." },
      { heading: "Budget list growth", body: "Model next year’s contacts from lead generation and referral programs—email pricing is usually list-size sensitive." },
    ],
    whyThesePicks: [
      { heading: "Mailchimp", body: "Broad integrations and recognizable workflows help part-time marketers publish without reinventing the wheel." },
      { heading: "ActiveCampaign", body: "When follow-up discipline is the bottleneck, automation pays for itself—if someone maintains it." },
      { heading: "MailerLite", body: "Combines modern UI and fair pricing for teams that want polish without MAP complexity." },
    ],
    faqItems: [
      { q: "What is the best email marketing software for small service businesses?", a: "Mailchimp or MailerLite are common defaults for simplicity; ActiveCampaign enters when CRM-stage follow-up must be automated." },
      { q: "How much should we budget?", a: "Plan $15–$75 monthly for many small lists before add-ons; validate annual contact growth and any SMS modules." },
      { q: "Do we need automation day one?", a: "Start with one post-job thank-you sequence and one lead nurture. Expand after you verify open/click quality and office capacity." },
      { q: "Can email replace cold calling?", a: "It complements outbound—warm sequences nurture inbound leads from SEO and paid channels tracked in CRM." },
      { q: "How do we build a list legally?", a: "Use clear opt-in on forms, document consent for SMS separately, and avoid purchased lists." },
      { q: "What metric matters most?", a: "Booked estimates or jobs influenced by campaigns, not open rates alone." },
    ],
  },
  contractors: {
    subtitle: "Estimate reminders, job storytelling, and referral loops for trades.",
    introParagraph:
      "Contractors need email to bridge the field and the office: confirming appointments, following up estimates, and staying visible between long projects. Best-fit software handles mobile-first customers, seasonal demand swings, and proof-heavy creative.",
    topPicksSub: "Email tools that match contractor cadences.",
    editorialSub: "How trades should evaluate providers.",
    whyThesePicksSub: "Why these platforms fit real job workflows.",
    editorialGuidance: [
      { heading: "Map email to job milestones", body: "Triggers should align with booked jobs, completed work, and dormant estimates—not random holidays only." },
      { heading: "Segment by job type", body: "Residential service, commercial bids, and emergency work deserve different message tones and CTAs." },
      { heading: "Coordinate with CRM notes", body: "Sync tags or fields so sales knows when a prospect clicked pricing links before calling." },
      { heading: "Seasonality planning", body: "Build shoulder-season campaigns during quiet months; scrambling mid-peak wastes margin." },
    ],
    whyThesePicks: [
      { heading: "ActiveCampaign", body: "Strong when estimates stall and you need branching reminders without manual spreadsheets." },
      { heading: "Mailchimp", body: "Reliable when creative variety and integrations matter across mixed tool stacks." },
      { heading: "MailerLite", body: "Keeps admin lift low for subcontract-heavy ops with one marketing coordinator." },
    ],
    faqItems: [
      { q: "Is email marketing worth it for contractors?", a: "Yes when tied to real milestones—estimate follow-ups, maintenance plans, and referral prompts outperform generic blasts." },
      { q: "What campaigns should contractors send first?", a: "Post-job thank-you with review link, estimate follow-up sequence, and seasonal tune-up offers." },
      { q: "How often should we email?", a: "Most healthy trade lists tolerate one value email weekly plus triggered messages tied to service events." },
      { q: "Should we use SMS too?", a: "Often yes for day-before reminders; compare Brevo if bundling matters, or pair email tools with compliant SMS add-ons." },
      { q: "How do we personalize?", a: "Use service line, neighborhood, and lifecycle tags from CRM or booking tools—not only first names." },
      { q: "What proves ROI?", a: "Fewer ghosted estimates, higher maintenance attach rates, and faster referral loops measured in CRM." },
    ],
  },
  hvac: {
    subtitle: "Tune-ups, memberships, and emergency demand spikes.",
    introParagraph:
      "HVAC operators juggle memberships, seasonal capacity, and urgent calls. Email marketing should reinforce maintenance revenue, prime shoulder-loaded weeks, and educate homeowners so upsells feel helpful—not pushy.",
    topPicksSub: "Platforms for HVAC list strategy.",
    editorialSub: "HVAC-specific evaluation criteria.",
    whyThesePicksSub: "How these tools support seasonal businesses.",
    editorialGuidance: [
      { heading: "Membership renewal discipline", body: "Automate renewal windows with clear value recaps and technician credibility proof." },
      { heading: "Pre-season education", body: "Queue pre-summer and pre-winter sequences early—creative bottlenecks during peak weeks sink performance." },
      { heading: "Emergency vs maintenance tone", body: "Split messaging so urgency segments do not annoy maintenance clients scheduled far out." },
      { heading: "Attach CRM equipment data when possible", body: "Even basic age-of-system fields improve relevance versus generic blasts." },
    ],
    whyThesePicks: [
      { heading: "ActiveCampaign", body: "Handles conditional paths when membership status, estimates, or no-shows need different treatments." },
      { heading: "Klaviyo", body: "Strong when data discipline exists and you want event-driven retention analytics—especially hybrid parts+service models." },
      { heading: "Mailchimp", body: "Practical default for mixed branches that need dependable creative iteration across regions." },
    ],
    faqItems: [
      { q: "What is the best email software for HVAC companies?", a: "Often ActiveCampaign or Mailchimp for operational breadth; Klaviyo when data maturity supports advanced segmentation." },
      { q: "How do we promote maintenance agreements?", a: "Use proof-heavy emails after great visits, explain energy and comfort benefits, and add limited-time enrollment windows ethically." },
      { q: "Can email reduce emergency churn?", a: "It helps when expectations and prep steps are emailed before visits—pair with SMS for same-day logistics." },
      { q: "What list segments matter?", a: "Membership vs non-member, equipment age bands, commercial vs residential, and ZIP clusters with different capacity." },
      { q: "When should we add SMS?", a: "When no-show risk hurts margin; model costs during hottest summer weeks before committing." },
      { q: "What should we avoid?", a: "Blanket discounts every week—they train customers to wait for promos instead of booking needed work." },
    ],
  },
  plumbers: {
    subtitle: "Trust, urgency, and repeat service patterns.",
    introParagraph:
      "Plumbing buyers often decide quickly under stress. Email marketing for plumbers should reinforce reliability between emergencies, surface maintenance offers, and keep your brand present when panic searches happen again.",
    topPicksSub: "Email stacks for plumbing brands.",
    editorialSub: "Plumber-focused selection guidance.",
    whyThesePicksSub: "Why these systems fit high-intent service cycles.",
    editorialGuidance: [
      { heading: "Post-service sequences", body: "After jobs, send care tips plus optional membership or inspection offers when appropriate." },
      { heading: "Reputation synergy", body: "Pair timing with review requests via email that align to your reputation management guidelines." },
      { heading: "Hydraulic upsell ethics", body: "Educate before pitching replacements—long-form email can carry proof better than a single SMS." },
      { heading: "List hygiene", body: "Emergency opt-ins may be transactional; segment promotional consent carefully." },
    ],
    whyThesePicks: [
      { heading: "Mailchimp", body: "Fast publishing when you rotate promo creative frequently across neighborhoods." },
      { heading: "Brevo", body: "Useful when SMS dispatch updates and email detail should share one operational hub." },
      { heading: "ActiveCampaign", body: "If CRM tracks commercial accounts vs residential, automation can reflect that split." },
    ],
    faqItems: [
      { q: "Do plumbers benefit from email if most calls are urgent?", a: "Yes for non-emergency nurture, warranty follow-ups, and maintenance clubs that smooth truck rolls." },
      { q: "What is a high-performing campaign?", a: "Annual pipe-freeze checklist emails in late fall with booking links often convert well in cold markets." },
      { q: "How many emails per month?", a: "One educational email plus triggered journeys strikes a good balance for many residential lists." },
      { q: "Should plumbers use HubSpot?", a: "If inbound marketing and CRM already live there, HubSpot can unify reporting—otherwise lighter tools may suffice." },
      { q: "How to measure success?", a: "Track booked drain cleanings, membership adds, and repeat job rate—not just clicks." },
      { q: "What integrations matter?", a: "Scheduling, CRM, and website quote forms to keep segments accurate." },
    ],
  },
  electricians: {
    subtitle: "Credential-led trust and longer commercial cycles.",
    introParagraph:
      "Electricians often serve safety-sensitive buyers and longer commercial bids. Email should reinforce licensing, code-aware workmanship, and methodical follow-up when panels or retrofits require multiple conversations.",
    topPicksSub: "Email tools for electrical contractors.",
    editorialSub: "What electrical shops should prioritize.",
    whyThesePicksSub: "Fit for credential-heavy messaging.",
    editorialGuidance: [
      { heading: "Education-first content", body: "Explain arc-fault nuances, EV charger planning, or inspection prep in digestible sequences." },
      { heading: "Long-cycle nurture", body: "Commercial opportunities may need 6–10 touch emails; pick automation that supports waits without breaking." },
      { heading: "Safety and compliance tone", body: "Avoid fear-mongering; pair urgency with calm expertise consistent with licensor expectations." },
      { heading: "Cross-sell with data", body: "Tag services (EV, generators, smart panels) so cross-sell emails stay relevant." },
    ],
    whyThesePicks: [
      { heading: "HubSpot", body: "When combined with HubSpot CRM, it supports longer B2B-style follow-up and sales alignment." },
      { heading: "ActiveCampaign", body: "Strong deal-task pairing when estimators need reminders after prospects open spec emails." },
      { heading: "Mailchimp", body: "Reliable for residential-heavy shops wanting fast sends and third-party integrations." },
    ],
    faqItems: [
      { q: "Best email platform for electricians?", a: "Mailchimp or MailerLite for residential simplicity; ActiveCampaign or HubSpot when commercial deal narratives need CRM ties." },
      { q: "How often to email commercial leads?", a: "Follow a defined cadence tied to proposal stages; avoid generic newsletters until relationship context exists." },
      { q: "Can email help EV charger leads?", a: "Yes—educate on amperage, panel capacity, and incentives before pushing onsite visits." },
      { q: "What mistakes hurt deliverability?", a: "Buying lists, ignoring authentication, and mailing cold trade-show contacts without re-permission." },
      { q: "Should we segment homeowners vs property managers?", a: "Absolutely—copy, proof, and CTAs differ materially." },
      { q: "What is the first automation to build?", a: "Post-estimate follow-up with educational addendum and clear reply path to the estimator." },
    ],
  },
  "home-services": {
    subtitle: "Multi-trade coordination and shared brand voice.",
    introParagraph:
      "Home-service roll-ups and multi-trade brands need email software that supports shared lists, role permissions, and repeatable templates while allowing each service line to speak to its buyer realistically.",
    topPicksSub: "Platforms for multi-trade operators.",
    editorialSub: "Governance, templates, and analytics at scale.",
    whyThesePicksSub: "Why these choices scale beyond a single van.",
    editorialGuidance: [
      { heading: "Template libraries by trade", body: "Standardize modules—headers, proof blocks, footers—while letting HVAC, plumbing, and electrical swap body copy." },
      { heading: "Permissioning", body: "Franchise and multi-branch orgs need clear roles for who approves sends and who can edit automations." },
      { heading: "Unified CRM truth", body: "Push segments from CRM objects so each branch does not maintain rogue spreadsheets." },
      { heading: "Central reporting", body: "Leadership should compare branches on list growth, engagement, and influenced revenue—not vanity sends." },
    ],
    whyThesePicks: [
      { heading: "Mailchimp", body: "Mature collaboration features and integrations appease mixed marketing maturity across branches." },
      { heading: "HubSpot", body: "When the org standardizes on HubSpot CRM, marketing governance becomes auditable in one system." },
      { heading: "ActiveCampaign", body: "Deep automation supports shared playbooks with branch-specific tags if administered well." },
    ],
    faqItems: [
      { q: "One list or many?", a: "Often a unified list with strict segmentation and subscription centers beats separate silos that duplicate contacts." },
      { q: "How do we keep brand voice consistent?", a: "Use approved snippet libraries and monthly creative reviews; forbid one-off fonts per location." },
      { q: "What is the biggest operational risk?", a: "Unmaintained automations that send wrong seasonal offers after acquisitions—audit after every merger." },
      { q: "Should corporate or local send?", a: "Hybrid: corporate sets guardrails; local adds relevant community hooks within templates." },
      { q: "How to track ROI across trades?", a: "Tag campaigns by trade line in CRM and reconcile booked jobs monthly." },
      { q: "When is enterprise MAP justified?", a: "When compliance, multi-brand needs, and advanced personalization justify cost—otherwise midsize tools often suffice." },
    ],
  },
};

function hubspotRow(): (typeof comparisonTableRows)[number] {
  return {
    slug: "hubspot-email-marketing",
    name: "HubSpot",
    logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"),
    bestFor: "CRM bundle teams",
    startingPrice: "Free–paid tiers",
    standoutFeature: "Unified CRM + marketing",
    reviewHref: getEmailMarketingReviewUrl("hubspot-email-marketing"),
  };
}

function scenarioFeatured(scenarioKey: string): typeof featuredProducts {
  if (scenarioKey === "electricians" || scenarioKey === "home-services") {
    return [
      {
        slug: "hubspot-email-marketing",
        name: "HubSpot",
        badge: scenarioKey === "home-services" ? "Best multi-team governance" : "Best long-cycle B2B-style nurture",
        description: "When CRM, deals, and email must live in one accountable system.",
        rating: "4.4",
        startingPrice: "Free–paid",
        reviewHref: getEmailMarketingReviewUrl("hubspot-email-marketing"),
        visitUrl: "https://www.hubspot.com/products/marketing",
        logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"),
      },
      ...featuredProducts.filter((p) => p.slug !== "mailerlite").slice(0, 2),
    ];
  }
  if (scenarioKey === "plumbers") {
    return [
      featuredProducts[0],
      {
        slug: "brevo",
        name: "Brevo",
        badge: "Best email + SMS ops",
        description: "Combine promotional email with reminder SMS under one roof.",
        rating: "4.2",
        startingPrice: "Free–paid",
        reviewHref: getEmailMarketingReviewUrl("brevo"),
        visitUrl: "https://www.brevo.com",
        logoSrc: emailMarketingLogoForSlug("brevo"),
      },
      featuredProducts[1],
    ];
  }
  if (scenarioKey === "hvac") {
    return [
      {
        slug: "activecampaign",
        name: "ActiveCampaign",
        badge: "Best membership + renewal logic",
        description: "Automations for renewals, no-shows, and seasonal routing.",
        rating: "4.6",
        startingPrice: "From ~$29/mo",
        reviewHref: getEmailMarketingReviewUrl("activecampaign"),
        visitUrl: "https://www.activecampaign.com",
        logoSrc: emailMarketingLogoForSlug("activecampaign"),
      },
      {
        slug: "klaviyo",
        name: "Klaviyo",
        badge: "Best data-strong retention",
        description: "When equipment tiers and plan types feed advanced segments.",
        rating: "4.5",
        startingPrice: "Free–paid",
        reviewHref: getEmailMarketingReviewUrl("klaviyo"),
        visitUrl: "https://www.klaviyo.com",
        logoSrc: emailMarketingLogoForSlug("klaviyo"),
      },
      featuredProducts[0],
    ];
  }
  return featuredProducts;
}

function scenarioTable(scenarioKey: string): typeof comparisonTableRows {
  if (scenarioKey === "hvac") {
    return [
      { slug: "activecampaign", name: "ActiveCampaign", logoSrc: emailMarketingLogoForSlug("activecampaign"), bestFor: "Seasonal automation", startingPrice: "From ~$29/mo", standoutFeature: "Branching workflows", reviewHref: getEmailMarketingReviewUrl("activecampaign") },
      { slug: "klaviyo", name: "Klaviyo", logoSrc: emailMarketingLogoForSlug("klaviyo"), bestFor: "Data-led retention", startingPrice: "Free–paid", standoutFeature: "Profiles + flows", reviewHref: getEmailMarketingReviewUrl("klaviyo") },
      { slug: "mailchimp", name: "Mailchimp", logoSrc: emailMarketingLogoForSlug("mailchimp"), bestFor: "Generalist", startingPrice: "Free–paid", standoutFeature: "Templates", reviewHref: getEmailMarketingReviewUrl("mailchimp") },
    ];
  }
  if (scenarioKey === "plumbers") {
    return [
      { slug: "mailchimp", name: "Mailchimp", logoSrc: emailMarketingLogoForSlug("mailchimp"), bestFor: "Speed + creative", startingPrice: "Free–paid", standoutFeature: "Integrations", reviewHref: getEmailMarketingReviewUrl("mailchimp") },
      { slug: "brevo", name: "Brevo", logoSrc: emailMarketingLogoForSlug("brevo"), bestFor: "Email + SMS", startingPrice: "Free–paid", standoutFeature: "Bundled channels", reviewHref: getEmailMarketingReviewUrl("brevo") },
      { slug: "activecampaign", name: "ActiveCampaign", logoSrc: emailMarketingLogoForSlug("activecampaign"), bestFor: "CRM automations", startingPrice: "From ~$29/mo", standoutFeature: "Logic depth", reviewHref: getEmailMarketingReviewUrl("activecampaign") },
    ];
  }
  if (scenarioKey === "electricians" || scenarioKey === "home-services") {
    return [hubspotRow(), comparisonTableRows[1], comparisonTableRows[0]];
  }
  return comparisonTableRows;
}

function makePage(slug: string, title: string): BestForTemplateProps {
  const s = SCENARIOS[slug];
  return {
    title,
    subtitle: s.subtitle,
    useCase: slug,
    categoryHref: "/email-marketing",
    categoryLabel: "Email Marketing",
    introParagraph: s.introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: s.topPicksSub,
    editorialSub: s.editorialSub,
    whyThesePicksSub: s.whyThesePicksSub,
    seeAlsoBlock: {
      roundupLabel: "Best email marketing software (2026) — full roundup",
      roundupHref: "/email-marketing/best-email-marketing-software",
      compareLabel: "Compare email marketing software",
      compareHref: "/email-marketing/compare",
    },
    featuredProducts: scenarioFeatured(slug),
    comparisonTableRows: scenarioTable(slug),
    editorialGuidance: s.editorialGuidance,
    whyThesePicks: s.whyThesePicks,
    relatedReviews: [
      { name: "Mailchimp", href: getEmailMarketingReviewUrl("mailchimp") },
      { name: "ActiveCampaign", href: getEmailMarketingReviewUrl("activecampaign") },
      { name: "Klaviyo", href: getEmailMarketingReviewUrl("klaviyo") },
      { name: "HubSpot", href: getEmailMarketingReviewUrl("hubspot-email-marketing") },
      { name: "Kit", href: getEmailMarketingReviewUrl("convertkit") },
      { name: "Brevo", href: getEmailMarketingReviewUrl("brevo") },
      { name: "MailerLite", href: getEmailMarketingReviewUrl("mailerlite") },
      { name: "Constant Contact", href: getEmailMarketingReviewUrl("constant-contact") },
    ],
    relatedComparisons: [
      { label: "Mailchimp vs ActiveCampaign", href: getEmailMarketingCompareUrl("mailchimp-vs-activecampaign") },
      { label: "Klaviyo vs Mailchimp", href: getEmailMarketingCompareUrl("klaviyo-vs-mailchimp") },
      { label: "Brevo vs Mailchimp", href: getEmailMarketingCompareUrl("brevo-vs-mailchimp") },
      { label: "Kit vs Mailchimp", href: getEmailMarketingCompareUrl("convertkit-vs-mailchimp") },
      { label: "Mailchimp vs Constant Contact", href: getEmailMarketingCompareUrl("mailchimp-vs-constant-contact") },
    ],
    relatedGuides: [
      { label: "How to use email marketing for contractors", href: "/email-marketing/guides/how-to-use-email-marketing-for-contractors" },
      { label: "Email marketing for local business", href: "/email-marketing/guides/email-marketing-for-local-business" },
      { label: "How to build an email list", href: "/email-marketing/guides/how-to-build-an-email-list" },
      { label: "CRM software hub", href: "/crm" },
      { label: "Lead generation hub", href: "/lead-generation" },
      { label: "Website builders hub", href: "/website-builders" },
      { label: "SEO tools hub", href: "/seo-tools" },
      { label: "Reputation management hub", href: "/reputation-management" },
    ],
    faqItems: s.faqItems,
  };
}

export const EMAIL_MARKETING_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = {
  "small-business": makePage("small-business", "Best Email Marketing Software for Small Business (2026)"),
  contractors: makePage("contractors", "Best Email Marketing Software for Contractors (2026)"),
  hvac: makePage("hvac", "Best Email Marketing Software for HVAC (2026)"),
  plumbers: makePage("plumbers", "Best Email Marketing Software for Plumbers (2026)"),
  electricians: makePage("electricians", "Best Email Marketing Software for Electricians (2026)"),
  "home-services": makePage("home-services", "Best Email Marketing Software for Home Services (2026)"),
};

export function getEmailMarketingBestForPageProps(slug: string): BestForTemplateProps | null {
  return EMAIL_MARKETING_BEST_FOR_BY_SLUG[slug] ?? null;
}

export function getEmailMarketingBestForSlugs(): string[] {
  return Object.keys(EMAIL_MARKETING_BEST_FOR_BY_SLUG);
}

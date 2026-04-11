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
      {
        heading: "Mailchimp",
        body: "Mailchimp is the familiar default for small local businesses that need templates, list management, and a huge integration catalog to connect website forms and light CRMs without a dedicated marketing hire. During a trial, send one real campaign to a permissioned segment and verify deliverability with your own domain authentication—not the vendor’s shared defaults. Test a simple automation—post-quote or post-job thank-you—and assign someone to own monthly reviews so broken branches do not silently annoy customers. It fits owner-operators who rotate between dispatch and marketing and need guardrails more than infinite branching logic. Revisit list growth pricing before annual prepay; modest lead-gen success can bump tiers faster than expected.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign earns its place when follow-up discipline—not design tools—is the bottleneck: branching on estimate status, no-shows, or dormant leads needs logic your spreadsheet cannot enforce. Pilot one workflow with real CRM or booking tags, then measure booked jobs influenced, not only email opens. Someone must own automation QA monthly; half-maintained logic damages trust faster than silence. Trial deliverability and unsubscribe handling with your actual sending domain and volume. Choose ActiveCampaign when you will invest admin time to keep sequences aligned with real job milestones.",
      },
      {
        heading: "MailerLite",
        body: "MailerLite combines a modern editor, fair list-based pricing, and enough automation basics for lean offices that want polished emails without marketing automation platform overhead. Use the trial to rebuild one high-performing legacy template and confirm mobile rendering on the devices your customers actually use. Validate form embeds on your website builder and spam-test before the first promo blast. It suits teams that send weekly value content plus a few triggers—anything heavier may push you toward ActiveCampaign later. Budget annual cost against realistic subscriber growth from referrals and lead gen.",
      },
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
      {
        heading: "ActiveCampaign",
        body: "Contractors drowning in stalled estimates need ActiveCampaign-style branching: different paths for “viewed proposal,” “no answer,” or “job booked” without color-coded spreadsheets. Trial with your real CRM or spreadsheet export tags, then score outcomes on booked jobs and margin, not click rates. Train estimators to respect unsubscribe and SMS consent boundaries when you add texting bridges. Review automation monthly—seasonal offers rot fast when crews change capacity. It wins when follow-up discipline is the constraint, not template beauty.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp fits contractor stacks that mix tools—website builders, lead vendors, lightweight CRMs—where integration breadth matters more than the deepest automation graph. During a trial, connect live quote forms and send segmented campaigns by trade line or neighborhood. Test photo-heavy project showcases on mobile; homeowners scroll galleries between bids. Validate domain authentication before scaling sends; new domains need warm-up discipline. Mailchimp is reliable when creative iteration and partner integrations outrank enterprise MAP complexity.",
      },
      {
        heading: "MailerLite",
        body: "MailerLite keeps admin lift manageable for subcontract-heavy shops with one coordinator juggling schedules, social, and email. Pilot a simple post-job sequence with review links and referral asks—execution beats elaborate journeys you will not maintain. Confirm pricing against list growth from every truck roll and seasonal campaigns. Use the trial to ensure forms and automations are easy enough that coverage does not break when that coordinator is out sick. It is ideal when polish and price matter and logic stays moderate.",
      },
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
      {
        heading: "ActiveCampaign",
        body: "HVAC operators lean on ActiveCampaign when membership renewals, no-shows, and seasonal tune-up pushes need different branches based on real job data, not one generic newsletter. Trial flows against live tags from your CRM or scheduling tool—stale tags create embarrassing wrong-season offers. Measure renewal lift and maintenance attach, not vanity opens, during peak weeks. Assign an owner to audit logic before summer and winter surges when mistakes scale. It fits teams ready to maintain automation as seriously as dispatch.",
      },
      {
        heading: "Klaviyo",
        body: "Klaviyo shines when HVAC brands feed clean events—equipment age, plan type, purchase history—and want retention analytics tied to revenue, not just broadcasts. During a trial, sync only the data you trust; garbage profiles produce creepy or wrong segments. Test win-back and upgrade paths for high-value equipment tiers with controlled send caps. Validate deliverability while scaling promotional volume around shoulder seasons. Choose Klaviyo when data hygiene and ecommerce-style lifecycle thinking already exist in the org.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp remains a practical default for multi-branch HVAC groups that need dependable creative templates and regional sends without standing up a data science practice first. Use the trial to standardize brand modules while letting each branch swap local proof and offers. Connect forms and ad landing pages so new leads enter lists with correct consent flags. Review list-cost growth against planned lead-gen spend. Mailchimp wins when creative throughput and governance across regions matter as much as logic depth.",
      },
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
      {
        heading: "Mailchimp",
        body: "Plumbers rotating creative across neighborhoods and service specials benefit from Mailchimp’s fast publishing, templates, and integrations to common local stacks. Trial one educational sequence—freeze warnings, water-heater lifespan tips—with clear CTAs to book non-emergency work. Authenticate domains and test mobile rendering; emergency customers read email on phones in parking lots. Segment promotional consent carefully from transactional job messages to stay compliant. Mailchimp fits when speed and creative variety beat deep logic you will not staff.",
      },
      {
        heading: "Brevo",
        body: "Brevo fits plumbing ops that want email storytelling plus SMS for day-before windows or dispatch updates inside one operational hub. During a trial, document TCPA consent separately from email opt-ins and train CSRs on approved scripts. Measure whether SMS reduces no-shows enough to justify per-message cost. Keep transactional texts short; save detail for email. Choose Brevo when multichannel coordination—not email alone—closes the operational loop.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign helps when your CRM cleanly splits commercial accounts from residential and you want automations that respect different sales cycles and ticket sizes. Pilot dual tracks: property managers versus homeowners should not get identical copy. Tag sources—LSA, organic, referrals—to see which sequences actually book. Review weekly during busy seasons; wrong-branch emails erode emergency trust fast. It belongs in the stack when data segmentation is honest enough to automate against.",
      },
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
      {
        heading: "HubSpot",
        body: "Electricians chasing commercial panels, EV installs, and multi-bid projects benefit when HubSpot CRM and marketing email share one timeline—deal stages, opens, and tasks visible to estimators without exporting CSVs. Trial a long-cycle nurture with educational clips on code-aware topics before you ask for the site visit. Validate permissions so residential and commercial pipelines stay separate. HubSpot wins when sales and marketing alignment is the bottleneck, not template speed alone. Budget for seat growth; commercial funnels expand contact counts quietly.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign pairs well with deal-task reminders when estimators need nudges after prospects open spec-heavy emails about panels, generators, or chargers. During pilot, connect real mailbox sends and test whether tasks actually get completed—software cannot replace sales discipline. Segment by buyer type—homeowner versus GC—so technical depth matches the audience. Audit monthly; stale automations send wrong amperage stories to the wrong buyers. Choose it when behavioral triggers must drive follow-up timing.",
      },
      {
        heading: "Mailchimp",
        body: "Residential-heavy electrical shops still win with Mailchimp when the goal is fast sends, seasonal safety tips, and integrations to simpler CRMs or spreadsheets. Use the trial to standardize proof blocks—licenses, insurance, project photos—so every campaign reinforces credibility. Test SMS add-ons only if you will staff replies. Validate list hygiene after canvassing or events; cold uploads hurt deliverability. Mailchimp stays reliable when speed and integrations beat enterprise marketing suites you will not adopt.",
      },
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
      {
        heading: "Mailchimp",
        body: "Multi-trade home-service brands with uneven marketing maturity across branches often standardize on Mailchimp for template libraries, roles, and integrations everyone can actually use. Trial shared assets—headers, proof modules, legal footers—while allowing local service-area swaps. Measure performance by branch with UTM discipline so strong offices do not hide weak ones. Review list hygiene after acquisitions; duplicate contacts destroy deliverability and inflate costs. Mailchimp fits when governance and accessibility matter more than exotic logic.",
      },
      {
        heading: "HubSpot",
        body: "HubSpot becomes compelling when the org commits CRM-wide: marketing emails, deal workflows, and reporting auditable for owners and franchisors alike. During pilot, define who can publish versus approve sends to protect brand and compliance. Map multi-trade pipelines so HVAC automations never fire on plumbing prospects by mistake. Validate cost per contact and seat as you consolidate brands. HubSpot wins when you need one accountable system, not parallel silos per trade.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign supports shared playbooks with branch-specific tags when a central admin can maintain logic and prevent rogue automations. Trial one standardized post-job sequence with localized variables for market promos. Require CRM hygiene SLAs; bad tags at one branch poison enterprise reporting. Audit after every acquisition—nothing annoys customers like wrong-trade offers post-merger. Pick ActiveCampaign when you have operational owners who treat automation like a product, not a side project.",
      },
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

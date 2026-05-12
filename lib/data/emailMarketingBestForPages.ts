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

/** Top-three product order for newer trade-specific best-for pages (featured cards + comparison table). */
const EMAIL_TRADE_SCENARIO_TRIPLES: Record<string, [string, string, string]> = {
  "appliance-repair": ["mailerlite", "brevo", "mailchimp"],
  "garage-door": ["activecampaign", "brevo", "mailchimp"],
  locksmith: ["brevo", "activecampaign", "mailerlite"],
  "flooring-contractors": ["mailchimp", "activecampaign", "klaviyo"],
  "fence-deck-builders": ["mailerlite", "mailchimp", "brevo"],
  "glass-window-installers": ["hubspot-email-marketing", "activecampaign", "mailchimp"],
  "concrete-contractors": ["hubspot-email-marketing", "klaviyo", "activecampaign"],
  excavation: ["hubspot-email-marketing", "activecampaign", "constant-contact"],
  "auto-repair-shops": ["brevo", "activecampaign", "mailchimp"],
  "mobile-mechanics": ["brevo", "mailerlite", "activecampaign"],
  "cleaning-franchises": ["hubspot-email-marketing", "activecampaign", "klaviyo"],
  "event-services": ["mailchimp", "klaviyo", "convertkit"],
  "home-inspectors": ["mailerlite", "constant-contact", "mailchimp"],
};

type EmailCardBase = Omit<(typeof featuredProducts)[number], "badge">;

const EMAIL_PRODUCT_CARD: Record<string, EmailCardBase> = {
  mailchimp: {
    slug: "mailchimp",
    name: "Mailchimp",
    description: "Fast campaigns, solid journeys, and massive integrations for lean marketing teams.",
    rating: "4.5",
    startingPrice: "Free–paid",
    reviewHref: getEmailMarketingReviewUrl("mailchimp"),
    visitUrl: "https://mailchimp.com",
    logoSrc: emailMarketingLogoForSlug("mailchimp"),
  },
  activecampaign: {
    slug: "activecampaign",
    name: "ActiveCampaign",
    description: "CRM-aware sequences for estimate follow-up, no-shows, and seasonal pushes.",
    rating: "4.6",
    startingPrice: "From ~$29/mo",
    reviewHref: getEmailMarketingReviewUrl("activecampaign"),
    visitUrl: "https://www.activecampaign.com",
    logoSrc: emailMarketingLogoForSlug("activecampaign"),
  },
  mailerlite: {
    slug: "mailerlite",
    name: "MailerLite",
    description: "Modern editor and automation basics without enterprise overhead.",
    rating: "4.3",
    startingPrice: "Free–paid",
    reviewHref: getEmailMarketingReviewUrl("mailerlite"),
    visitUrl: "https://www.mailerlite.com",
    logoSrc: emailMarketingLogoForSlug("mailerlite"),
  },
  brevo: {
    slug: "brevo",
    name: "Brevo",
    description: "Email plus SMS and transactional messaging in one operational stack.",
    rating: "4.2",
    startingPrice: "Free–paid",
    reviewHref: getEmailMarketingReviewUrl("brevo"),
    visitUrl: "https://www.brevo.com",
    logoSrc: emailMarketingLogoForSlug("brevo"),
  },
  klaviyo: {
    slug: "klaviyo",
    name: "Klaviyo",
    description: "Behavior- and property-driven segmentation when clean event data exists.",
    rating: "4.5",
    startingPrice: "Free–paid",
    reviewHref: getEmailMarketingReviewUrl("klaviyo"),
    visitUrl: "https://www.klaviyo.com",
    logoSrc: emailMarketingLogoForSlug("klaviyo"),
  },
  "hubspot-email-marketing": {
    slug: "hubspot-email-marketing",
    name: "HubSpot",
    description: "Unified CRM and marketing email when deals, tasks, and reporting must align.",
    rating: "4.4",
    startingPrice: "Free–paid tiers",
    reviewHref: getEmailMarketingReviewUrl("hubspot-email-marketing"),
    visitUrl: "https://www.hubspot.com/products/marketing",
    logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"),
  },
  "constant-contact": {
    slug: "constant-contact",
    name: "Constant Contact",
    description: "Guided templates and support-forward onboarding for owner-led marketers.",
    rating: "4.3",
    startingPrice: "From ~$12/mo",
    reviewHref: getEmailMarketingReviewUrl("constant-contact"),
    visitUrl: "https://www.constantcontact.com",
    logoSrc: emailMarketingLogoForSlug("constant-contact"),
  },
  convertkit: {
    slug: "convertkit",
    name: "Kit",
    description: "Story-driven sequences and simple monetization paths for audience-first brands.",
    rating: "4.4",
    startingPrice: "Free–paid (subscriber-based)",
    reviewHref: getEmailMarketingReviewUrl("convertkit"),
    visitUrl: "https://kit.com",
    logoSrc: emailMarketingLogoForSlug("convertkit"),
  },
};

const EMAIL_TABLE_ROW: Record<string, (typeof comparisonTableRows)[number]> = {
  mailchimp: comparisonTableRows[0],
  activecampaign: comparisonTableRows[1],
  mailerlite: comparisonTableRows[2],
  brevo: {
    slug: "brevo",
    name: "Brevo",
    logoSrc: emailMarketingLogoForSlug("brevo"),
    bestFor: "Email + SMS operations",
    startingPrice: "Free–paid",
    standoutFeature: "Bundled channels",
    reviewHref: getEmailMarketingReviewUrl("brevo"),
  },
  klaviyo: {
    slug: "klaviyo",
    name: "Klaviyo",
    logoSrc: emailMarketingLogoForSlug("klaviyo"),
    bestFor: "Data-led segmentation",
    startingPrice: "Free–paid",
    standoutFeature: "Profiles + flows",
    reviewHref: getEmailMarketingReviewUrl("klaviyo"),
  },
  "hubspot-email-marketing": {
    slug: "hubspot-email-marketing",
    name: "HubSpot",
    logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"),
    bestFor: "CRM + lifecycle email",
    startingPrice: "Free–paid tiers",
    standoutFeature: "Unified reporting",
    reviewHref: getEmailMarketingReviewUrl("hubspot-email-marketing"),
  },
  "constant-contact": {
    slug: "constant-contact",
    name: "Constant Contact",
    logoSrc: emailMarketingLogoForSlug("constant-contact"),
    bestFor: "Guided simplicity",
    startingPrice: "From ~$12/mo",
    standoutFeature: "Template guidance",
    reviewHref: getEmailMarketingReviewUrl("constant-contact"),
  },
  convertkit: {
    slug: "convertkit",
    name: "Kit",
    logoSrc: emailMarketingLogoForSlug("convertkit"),
    bestFor: "Creator-style nurture",
    startingPrice: "Free–paid",
    standoutFeature: "Story automations",
    reviewHref: getEmailMarketingReviewUrl("convertkit"),
  },
};

function featuredFromTradeTriple(scenarioKey: string): typeof featuredProducts | null {
  const triple = EMAIL_TRADE_SCENARIO_TRIPLES[scenarioKey];
  if (!triple) return null;
  return triple.map((slug, idx) => {
    const base = EMAIL_PRODUCT_CARD[slug];
    if (!base) throw new Error(`Missing EMAIL_PRODUCT_CARD for ${slug}`);
    return {
      ...base,
      badge: idx === 0 ? "Best overall fit" : idx === 1 ? "Best alternative fit" : "Best specialized fit",
    };
  });
}

function tableFromTradeTriple(scenarioKey: string): typeof comparisonTableRows | null {
  const triple = EMAIL_TRADE_SCENARIO_TRIPLES[scenarioKey];
  if (!triple) return null;
  return triple.map((slug) => {
    const row = EMAIL_TABLE_ROW[slug];
    if (!row) throw new Error(`Missing EMAIL_TABLE_ROW for ${slug}`);
    return row;
  });
}

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
  plumbing: {
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
  roofing: {
    subtitle: "Storm-season demand capture and trust-led follow-up for roofing companies.",
    introParagraph:
      "Roofing companies need email marketing software that supports high-value estimate follow-up, weather-driven campaign timing, and credibility-building content for homeowners and commercial buyers.",
    topPicksSub: "Email platforms for roofing growth.",
    editorialSub: "How roofers should evaluate email software.",
    whyThesePicksSub: "Why these tools fit roofing sales cycles.",
    editorialGuidance: [
      { heading: "Storm-event responsiveness", body: "Build pre-approved campaigns so your team can publish quickly after weather events without sacrificing quality." },
      { heading: "Estimate-stage nurture", body: "Automate reminders and educational follow-up for unbooked inspections and proposals." },
      { heading: "Proof-driven content", body: "Use warranty clarity, certifications, and project examples to reduce trust friction." },
      { heading: "Segment by project type", body: "Separate residential repair, replacement, and commercial opportunities for better relevance." },
    ],
    whyThesePicks: [
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign is strong for roofing teams that need quote-stage automations and behavior-based follow-up tied to real pipeline changes. It helps maintain consistency when inspection demand spikes.",
      },
      {
        heading: "HubSpot",
        body: "HubSpot fits roofing businesses that want CRM and email in one system, making it easier to align estimator activity with lifecycle campaigns and reporting.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp remains a practical option for roofers prioritizing fast campaign execution, visual proof templates, and broad integrations with existing local-marketing stacks.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for roofing companies?", a: "ActiveCampaign and HubSpot are strong for quote pipeline follow-up, while Mailchimp is a reliable option for fast campaign execution." },
      { q: "What should roofers automate first?", a: "Start with post-inspection and post-estimate follow-up sequences before adding more complex workflows." },
      { q: "How often should roofing companies email?", a: "Use event-driven messages around inspections and storms plus a steady value cadence, often weekly or biweekly." },
      { q: "Should roofing lists be segmented?", a: "Yes—at least by residential vs commercial and by project stage." },
      { q: "What content improves conversions?", a: "Warranty detail, project proof, process clarity, and financing education typically perform well." },
      { q: "How should ROI be measured?", a: "Track estimate-to-booked-job conversion and revenue influenced by email journeys." },
    ],
  },
  painting: {
    subtitle: "Visual portfolio nurture and seasonal campaign timing for paint-focused crews.",
    introParagraph:
      "Painting contractors need email software that supports visual trust, estimate follow-up, and season-aware campaigns without overloading small office teams.",
    topPicksSub: "Email tools for painting businesses.",
    editorialSub: "How painting teams should evaluate platforms.",
    whyThesePicksSub: "Why these tools fit paint-focused sales cycles.",
    editorialGuidance: [
      { heading: "Lead with before/after proof", body: "Use image-heavy blocks and testimonial snippets to improve estimate conversion." },
      { heading: "Seasonal scheduling cadence", body: "Send shoulder-season promos early so crews fill calendars before slow periods." },
      { heading: "Quote follow-up automation", body: "Automate reminders for unapproved estimates within realistic office response capacity." },
      { heading: "Neighborhood relevance", body: "Segment by service area so messaging and travel assumptions stay realistic." },
    ],
    whyThesePicks: [
      {
        heading: "Mailchimp",
        body: "Mailchimp is a strong fit for painting contractors because visual templates and easy campaign production help offices ship polished proof quickly. Trial one estimate follow-up and one seasonal promo flow, then measure booked jobs influenced rather than open-rate vanity.",
      },
      {
        heading: "MailerLite",
        body: "MailerLite suits painting teams that want clean design and lower overhead while still running basic automations. It is ideal when one coordinator handles both ops and marketing and needs software that stays manageable.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign works when painting businesses need deeper quote-stage automation and segmented follow-up by job type. It rewards teams that can maintain tags and workflow QA monthly.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for painting contractors?", a: "Mailchimp is a common default, with MailerLite and ActiveCampaign as strong options depending on design and automation depth needs." },
      { q: "How often should painting companies email?", a: "Most teams perform well with one educational or proof-forward campaign weekly plus triggered estimate and post-job flows." },
      { q: "What should be automated first?", a: "Start with estimate follow-up and post-job review/referral sequences before adding complex branching." },
      { q: "Does visual content really matter for painters?", a: "Yes—before/after proof and project photos typically improve trust and quote conversion." },
      { q: "How do we track ROI?", a: "Measure booked estimates and won jobs attributed to campaign clicks and triggered flows." },
      { q: "What integration matters most?", a: "CRM or estimate pipeline integration so follow-up timing aligns with real sales stages." },
    ],
  },
  "general-contractors": {
    subtitle: "Long-cycle project nurture and multi-stakeholder follow-up for general contractors.",
    introParagraph:
      "General contractors need email marketing software that supports longer bid cycles, stakeholder education, and structured follow-up tied to CRM stages.",
    topPicksSub: "Email platforms for general contractor growth.",
    editorialSub: "What GCs should prioritize when choosing email software.",
    whyThesePicksSub: "Why these tools fit project-driven, longer sales cycles.",
    editorialGuidance: [
      { heading: "Map to project pipeline", body: "Tie nurture sequences to bid and proposal stages instead of generic calendars." },
      { heading: "Multi-contact journeys", body: "Support segmented messaging for owners, PMs, and procurement stakeholders." },
      { heading: "Case-study cadence", body: "Use project proof and timeline outcomes to build credibility over longer cycles." },
      { heading: "CRM alignment", body: "Ensure sales and marketing share one view of engagement and follow-up tasks." },
    ],
    whyThesePicks: [
      {
        heading: "HubSpot",
        body: "HubSpot excels for general contractors when CRM and email must stay unified across longer deal timelines. Trial lifecycle workflows tied to proposal stages and verify deal-to-email reporting before scaling.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign is strong for GC teams needing behavior-driven follow-up and task automation without buying a full enterprise suite. It performs best when CRM tags and ownership rules are disciplined.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp remains useful for GC shops prioritizing reliable campaign output and broad integrations. It is often the practical choice when operational simplicity outranks deep branching logic.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for general contractors?", a: "HubSpot and ActiveCampaign are top options for longer-cycle workflows, while Mailchimp works well for simpler, integration-heavy stacks." },
      { q: "Do GCs need advanced automation?", a: "If bids run for weeks or months, structured follow-up automation usually improves consistency and close rates." },
      { q: "What should we send prospects?", a: "Project case studies, process explainers, and stage-specific reminders tied to active opportunities." },
      { q: "How do we keep sales and marketing aligned?", a: "Use shared CRM objects and defined triggers for when follow-up tasks and emails fire." },
      { q: "How often should we email?", a: "Use stage-driven timing rather than fixed weekly blasts for active bid opportunities." },
      { q: "What metric matters most?", a: "Stage progression and won-revenue influence from email touches in CRM." },
    ],
  },
  landscaping: {
    subtitle: "Route-driven seasonal promotion and recurring service nurture for landscapers.",
    introParagraph:
      "Landscaping companies need email software that supports seasonal demand planning, route-density offers, and recurring service retention.",
    topPicksSub: "Email tools for landscaping teams.",
    editorialSub: "What landscapers should evaluate before committing.",
    whyThesePicksSub: "Why these platforms match seasonal landscaping workflows.",
    editorialGuidance: [
      { heading: "Seasonality planning", body: "Build spring and fall campaigns well ahead of peak labor demand." },
      { heading: "Recurring-service retention", body: "Automate reminder and renewal messaging for maintenance clients." },
      { heading: "Geo-segment by route", body: "Keep campaigns aligned to realistic crew travel and service density." },
      { heading: "Simple ops ownership", body: "Pick automation depth your office can maintain consistently." },
    ],
    whyThesePicks: [
      {
        heading: "Mailchimp",
        body: "Mailchimp is effective for landscapers needing reliable seasonal campaigns and route-based segmentation. It helps teams publish quickly and maintain visual proof without high admin overhead.",
      },
      {
        heading: "Brevo",
        body: "Brevo fits landscaping businesses that combine email promotions with SMS reminders for service windows and weather-dependent updates. Trial consent flows and message timing carefully.",
      },
      {
        heading: "MailerLite",
        body: "MailerLite is a good value pick for landscaping operators that need clean design and basic automation without enterprise complexity. It works well for recurring service nurture and light promotional sends.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for landscaping companies?", a: "Mailchimp is a strong default, with Brevo and MailerLite as practical alternatives based on SMS needs and budget." },
      { q: "How should landscapers segment lists?", a: "Use route area, service type, and recurring vs one-time status as baseline segments." },
      { q: "When should campaigns be sent?", a: "Launch seasonal offers before demand peaks so crews fill schedules predictably." },
      { q: "Should we use SMS too?", a: "SMS helps with reminders and short updates; keep long-form sales education in email." },
      { q: "What automation should come first?", a: "Start with recurring service reminders and post-job referral requests." },
      { q: "How do we measure impact?", a: "Track recurring bookings and booked jobs influenced by campaigns per service line." },
    ],
  },
  construction: {
    subtitle: "Structured B2B nurture and bid-stage communication for construction organizations.",
    introParagraph:
      "Construction companies need email software that supports longer sales cycles, role-based messaging, and clear alignment with CRM and project pipeline data.",
    topPicksSub: "Email systems for construction demand nurture.",
    editorialSub: "Construction-focused selection criteria.",
    whyThesePicksSub: "Why these tools fit long-cycle construction growth.",
    editorialGuidance: [
      { heading: "Role-based communication", body: "Differentiate messaging for owners, PMs, and procurement contacts." },
      { heading: "Bid-stage workflows", body: "Automate follow-up based on quote and proposal milestones." },
      { heading: "Proof-driven content", body: "Use project outcomes and reliability proof to build credibility over time." },
      { heading: "Pipeline reporting", body: "Tie email engagement to opportunity stage progression and won deals." },
    ],
    whyThesePicks: [
      {
        heading: "HubSpot",
        body: "HubSpot is strong for construction firms that need CRM and email in one accountable platform. It supports bid-stage segmentation and executive reporting across longer nurture cycles.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign is useful when construction teams want deep automation and behavior-based follow-up without full enterprise stack overhead. It performs best with disciplined data ownership.",
      },
      {
        heading: "Klaviyo",
        body: "Klaviyo works for construction operators with mature data and event tracking who want advanced segmentation and revenue-style reporting. It requires strong profile hygiene to justify cost.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for construction companies?", a: "HubSpot and ActiveCampaign are top options for pipeline-linked nurture, with Klaviyo as a data-heavy alternative." },
      { q: "Do construction companies need CRM-linked email?", a: "Usually yes for longer sales cycles where stage-aware follow-up drives better conversion and consistency." },
      { q: "How often should we email opportunities?", a: "Use stage-based cadence and educational milestones rather than generic weekly sends." },
      { q: "What should content include?", a: "Case studies, process clarity, timeline expectations, and relevant project proof." },
      { q: "What metric matters most?", a: "Opportunity stage advancement and won revenue tied to email touches." },
      { q: "When should we avoid heavy automation?", a: "If data quality is weak; fix CRM hygiene before scaling complex journeys." },
    ],
  },
  remodeling: {
    subtitle: "Project-education nurture and estimate follow-up for remodeling businesses.",
    introParagraph:
      "Remodeling businesses need email software that supports trust-building, visual storytelling, and follow-up discipline through longer homeowner decision cycles.",
    topPicksSub: "Email marketing tools for remodelers.",
    editorialSub: "How remodeling teams should compare platforms.",
    whyThesePicksSub: "Why these tools align with remodel sales journeys.",
    editorialGuidance: [
      { heading: "Visual storytelling", body: "Use project galleries and phased process education to improve trust." },
      { heading: "Long decision nurture", body: "Automate gentle follow-up across multi-week estimate timelines." },
      { heading: "Segment by project type", body: "Differentiate kitchen, bath, and whole-home messaging tracks." },
      { heading: "Review and referral loops", body: "Automate post-project proof collection to fuel future campaigns." },
    ],
    whyThesePicks: [
      {
        heading: "Klaviyo",
        body: "Klaviyo is strong for remodeling companies that can support richer segmentation and behavior-driven nurture tied to project type and engagement history. It excels when data quality is high.",
      },
      {
        heading: "HubSpot",
        body: "HubSpot fits remodelers who want unified CRM + marketing reporting and better coordination between sales conversations and nurture campaigns.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp remains a practical choice for remodelers needing visual campaigns and reliable estimate follow-up without adopting an enterprise workflow stack.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for remodeling businesses?", a: "Klaviyo and HubSpot are strong for data and CRM depth, while Mailchimp is often the easiest reliable starting point." },
      { q: "What campaigns should remodelers run first?", a: "Start with estimate follow-up, project-proof education, and post-project referral/review sequences." },
      { q: "How long should nurture flows run?", a: "Often 30–90 days depending on project size and homeowner timeline." },
      { q: "Do remodelers need advanced segmentation?", a: "Yes if you have enough lead volume and project variety to support clean segments." },
      { q: "How do we track ROI?", a: "Measure influenced consultations, signed projects, and referral pipeline growth." },
      { q: "What common mistake hurts results?", a: "Sending generic promos instead of project-type specific educational sequences." },
    ],
  },
  handyman: {
    subtitle: "Simple, high-utility email systems for lean handyman teams.",
    introParagraph:
      "Handyman businesses need practical email software that keeps follow-up, reminders, and referral asks running without adding heavy admin complexity.",
    topPicksSub: "Email picks for handyman operators.",
    editorialSub: "What small handyman teams should prioritize.",
    whyThesePicksSub: "Why these tools fit lean handyman operations.",
    editorialGuidance: [
      { heading: "Keep workflows minimal", body: "Start with a few reliable automations rather than complex branching." },
      { heading: "Promote repeat services", body: "Use email to create recurring touchpoints for maintenance and small jobs." },
      { heading: "Route-local messaging", body: "Segment by geography to keep dispatch economics realistic." },
      { heading: "Referral-first follow-up", body: "Automate review and referral asks after successful jobs." },
    ],
    whyThesePicks: [
      {
        heading: "MailerLite",
        body: "MailerLite is ideal for handyman businesses that need clean campaigns and lightweight automation with minimal overhead. It supports practical growth without enterprise complexity.",
      },
      {
        heading: "Brevo",
        body: "Brevo fits handyman teams that want email plus reminder SMS in one stack. It helps coordinate quick-service scheduling and short lifecycle campaigns.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp remains a reliable option for handyman operations that prioritize easy campaign execution and broad integrations across local business tools.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for handyman businesses?", a: "MailerLite and Mailchimp are common lean-team defaults, with Brevo added when SMS reminders are important." },
      { q: "How many automations should we start with?", a: "Most handyman teams start with two to three: post-estimate, post-job, and dormant-customer reminder." },
      { q: "How often should we send campaigns?", a: "Weekly or biweekly value-focused sends usually work better than infrequent heavy promotions." },
      { q: "Should we segment by job type?", a: "Yes—service type segmentation improves relevance and reduces unsubscribe rates." },
      { q: "What metric matters most?", a: "Booked repeat jobs and referrals influenced by email." },
      { q: "What is the biggest mistake?", a: "Overbuilding automation before basic list hygiene and send cadence are stable." },
    ],
  },
  "property-management": {
    subtitle: "Lifecycle messaging for owner communications and property-service programs.",
    introParagraph:
      "Property management companies need email software that supports multi-audience communication, recurring service touchpoints, and clear lifecycle segmentation.",
    topPicksSub: "Email tools for property management companies.",
    editorialSub: "How property managers should evaluate platforms.",
    whyThesePicksSub: "Why these systems support portfolio and service communication.",
    editorialGuidance: [
      { heading: "Segment by audience type", body: "Separate owner, tenant-adjacent, and vendor communications where applicable." },
      { heading: "Automate recurring touchpoints", body: "Use lifecycle emails for inspections, reminders, and service updates." },
      { heading: "Control governance", body: "Set role permissions for multi-office publishing consistency." },
      { heading: "Tie to CRM/portfolio data", body: "Relevant lifecycle data improves trust and reduces message noise." },
    ],
    whyThesePicks: [
      {
        heading: "HubSpot",
        body: "HubSpot is strong for property management businesses that need centralized CRM + email governance across multiple audiences and longer lifecycle communications.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign fits property managers needing conditional automation tied to lifecycle triggers and lead behavior while maintaining manageable platform costs.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp works well for property management teams that need reliable campaign execution, simple segmentation, and broad integration support.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for property management companies?", a: "HubSpot and ActiveCampaign are strong for lifecycle automation, while Mailchimp is a practical simplicity-first option." },
      { q: "How should property managers segment lists?", a: "At minimum by audience type, location/portfolio, and lifecycle stage." },
      { q: "What campaigns should be automated first?", a: "Inspection reminders, service updates, and owner-reporting style touchpoints." },
      { q: "Do we need CRM integration?", a: "Usually yes for reliable lifecycle triggers and cleaner reporting." },
      { q: "How often should we send?", a: "Use event-driven sends plus predictable monthly value updates." },
      { q: "How is ROI measured?", a: "Track retained accounts, response rates to service campaigns, and lead-to-client conversion." },
    ],
  },
  "pest-control": {
    subtitle: "Retention-first campaigns and recurring service lifecycle automation for pest operators.",
    introParagraph:
      "Pest control businesses need email software that supports recurring-service retention, seasonal campaign timing, and route-friendly communication workflows.",
    topPicksSub: "Email platforms for pest control growth.",
    editorialSub: "What pest-control teams should demand from email tools.",
    whyThesePicksSub: "Why these tools fit recurring-treatment business models.",
    editorialGuidance: [
      { heading: "Recurring plan nurture", body: "Automate renewals and seasonal reminders around treatment cycles." },
      { heading: "Segment by service program", body: "Differentiate one-time treatments from ongoing plans." },
      { heading: "Use educational content", body: "Prevention-focused messaging builds trust beyond discount offers." },
      { heading: "Pair with review loops", body: "Post-service follow-up should include reputation and referral asks." },
    ],
    whyThesePicks: [
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign is a strong choice for pest control operators that need recurring-plan automation and behavior-based follow-up tied to customer lifecycle events.",
      },
      {
        heading: "Brevo",
        body: "Brevo supports pest-control teams that combine email education with SMS reminders for appointments and treatment windows in one operational stack.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp remains a dependable option for pest businesses prioritizing campaign simplicity and manageable segmentation for recurring services.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for pest control businesses?", a: "ActiveCampaign is strong for lifecycle automation, with Brevo and Mailchimp as practical alternatives." },
      { q: "What campaigns should pest-control teams run?", a: "Recurring renewal reminders, seasonal prevention education, and post-service referral/review prompts." },
      { q: "How should lists be segmented?", a: "By program type, service frequency, and treatment history where available." },
      { q: "Does SMS help this trade?", a: "Yes for appointment and treatment reminders; keep educational content in email." },
      { q: "How often should we send?", a: "Monthly value emails plus event-driven lifecycle messages usually perform well." },
      { q: "What KPI matters most?", a: "Recurring-plan retention and booked follow-up services influenced by campaigns." },
    ],
  },
  "pool-service": {
    subtitle: "Seasonal route growth and recurring-service communication for pool operators.",
    introParagraph:
      "Pool service companies need email software that handles seasonality, recurring-service retention, and route-based campaign relevance without excessive overhead.",
    topPicksSub: "Email tools for pool service companies.",
    editorialSub: "How pool teams should evaluate email platforms.",
    whyThesePicksSub: "Why these picks suit seasonal pool-service workflows.",
    editorialGuidance: [
      { heading: "Seasonal calendar planning", body: "Build opening/closing and maintenance campaigns well ahead of demand peaks." },
      { heading: "Recurring account focus", body: "Segment recurring service clients separately from one-off jobs." },
      { heading: "Route-based offers", body: "Use geographic targeting to support scheduling and profitability." },
      { heading: "Simple ops ownership", body: "Pick workflows your office can manage weekly during busy months." },
    ],
    whyThesePicks: [
      {
        heading: "MailerLite",
        body: "MailerLite is well suited to pool-service teams that need clean seasonal campaigns and manageable automation without enterprise admin burden.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp provides dependable campaign output and segmentation flexibility for recurring and seasonal service communication.",
      },
      {
        heading: "Brevo",
        body: "Brevo is useful when pool teams want to combine reminder SMS with email campaigns under one stack, especially around seasonal scheduling windows.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for pool service companies?", a: "MailerLite and Mailchimp are strong practical options, with Brevo useful for bundled email + SMS operations." },
      { q: "What campaigns should pool companies automate first?", a: "Start with seasonal opening/closing reminders and recurring-service renewal touchpoints." },
      { q: "How should we segment contacts?", a: "By recurring vs one-time service, geography, and season-specific needs." },
      { q: "How often should we send emails?", a: "Monthly baseline communication plus seasonal bursts and triggered reminders." },
      { q: "Is SMS necessary?", a: "It helps for appointment reminders but should complement—not replace—email education." },
      { q: "How do we prove ROI?", a: "Track recurring-account retention and booked services influenced by campaigns." },
    ],
  },
  "junk-removal": {
    subtitle: "Fast-turn local demand nurture and repeat-service messaging for junk-removal teams.",
    introParagraph:
      "Junk removal companies need email software that supports quick-turn lead follow-up, local route economics, and repeat-service reminders for homeowners and partners.",
    topPicksSub: "Email software for junk-removal operations.",
    editorialSub: "What junk-removal teams should prioritize.",
    whyThesePicksSub: "Why these tools align with quick-response service cycles.",
    editorialGuidance: [
      { heading: "Speed-to-lead follow-up", body: "Automate immediate nurture after inbound requests to reduce drop-off." },
      { heading: "Partner and referral loops", body: "Create campaigns for realtor and property-manager referral relationships." },
      { heading: "Local segmentation", body: "Keep route and service-area targeting tight for profitability." },
      { heading: "Simple automation ownership", body: "Use practical journeys your office can maintain consistently." },
    ],
    whyThesePicks: [
      {
        heading: "Brevo",
        body: "Brevo works well for junk-removal teams that need both email and reminder SMS in one stack for fast-turn inquiries and schedule coordination.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp is a dependable option for campaign speed, local segmentation, and integration coverage across common small-business systems.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign fits growing junk-removal operators that want behavior-based follow-up automation tied to lead and booking status changes.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for junk removal businesses?", a: "Brevo and Mailchimp are practical defaults, with ActiveCampaign for deeper automation-heavy workflows." },
      { q: "What emails should we send first?", a: "Start with post-inquiry follow-up, post-job referral asks, and periodic repeat-service reminders." },
      { q: "How often should campaigns run?", a: "Weekly or biweekly sends plus triggered lifecycle automations are common for this trade." },
      { q: "Should we use SMS?", a: "SMS helps with rapid scheduling and reminders when consent and timing are handled properly." },
      { q: "How should we segment?", a: "By service type, geography, and referral source for clearer campaign relevance." },
      { q: "What KPI matters most?", a: "Booked jobs and repeat-service conversion influenced by campaign sequences." },
    ],
  },
  moving: {
    subtitle: "Quote-cycle follow-up and seasonal relocation demand management for moving companies.",
    introParagraph:
      "Moving companies need email software that supports fast quote follow-up, trust-building content, and seasonal campaign planning tied to relocation demand patterns.",
    topPicksSub: "Email tools for moving company growth.",
    editorialSub: "How moving teams should choose platforms.",
    whyThesePicksSub: "Why these platforms support quote-driven moving workflows.",
    editorialGuidance: [
      { heading: "Quote nurturing discipline", body: "Automate reminder sequences for unbooked moving quotes." },
      { heading: "Seasonal demand pacing", body: "Build high-season campaigns before demand spikes hit the office." },
      { heading: "Trust-building proof", body: "Use testimonials and process transparency to reduce buyer anxiety." },
      { heading: "Lead-source segmentation", body: "Segment by local vs long-distance and partner channels for relevance." },
    ],
    whyThesePicks: [
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign is strong for moving companies with quote-heavy funnels that need behavior-based reminders and stage-aware follow-up to increase booking rates.",
      },
      {
        heading: "HubSpot",
        body: "HubSpot fits moving operators that want CRM and email in one system for clearer quote pipeline reporting and multi-touch lifecycle communication.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp remains a practical option for moving teams prioritizing campaign consistency, ease of use, and broad integration compatibility.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for moving companies?", a: "ActiveCampaign and HubSpot are strong for quote-stage follow-up, while Mailchimp is a reliable simplicity-first option." },
      { q: "What campaigns should moving companies automate first?", a: "Start with post-quote reminders, pre-move education, and post-move referral requests." },
      { q: "How often should we email prospects?", a: "Use short quote-cycle sequences rather than generic weekly blasts for active leads." },
      { q: "How do we segment moving leads?", a: "At minimum by local vs long-distance, move timeline, and lead source." },
      { q: "Should we combine SMS and email?", a: "Yes for reminders and timing updates, while keeping richer trust-building content in email." },
      { q: "How do we prove ROI?", a: "Track quote-to-book conversion and booked move revenue influenced by email journeys." },
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
  "appliance-repair": {
    subtitle: "Post-service nurture, warranty-aware messaging, and parts-delay sensitivity for appliance repair shops.",
    introParagraph:
      "Appliance repair businesses live on repeat calls, warranty confusion, and tight dispatch windows. Email marketing should reinforce professionalism after completed repairs, educate on maintenance without sounding salesy, and pair cleanly with SMS for arrival windows—without blasting customers still waiting on back-ordered parts.",
    topPicksSub: "Email marketing platforms for appliance repair operators.",
    editorialSub: "How appliance repair teams should evaluate email software.",
    whyThesePicksSub: "Why MailerLite, Brevo, and Mailchimp map to typical appliance repair stacks.",
    editorialGuidance: [
      { heading: "Separate promotional from transactional consent", body: "Job-confirmation and parts-delay updates are not the same as promo lists—segment consent so compliance and trust stay intact." },
      { heading: "Trigger after true completion", body: "Automate post-job thank-yous and review asks only when the ticket is closed happy; mid-warranty limbo needs softer education, not hard CTAs." },
      { heading: "Bundle SMS for dispatch reality", body: "When crews already text ETAs, choose stacks that keep SMS and email coordinated so customers do not get double-nagged." },
      { heading: "Keep creative lightweight", body: "Owners rarely have design time—prioritize templates you can ship weekly between truck rolls." },
    ],
    whyThesePicks: [
      {
        heading: "MailerLite",
        body: "MailerLite fits lean appliance repair offices that need polished post-service emails and simple automations without hiring a marketing manager. Use the trial to wire one post-repair sequence with maintenance tips and a single review CTA, then measure booked callbacks—not opens. Confirm forms from your website builder sync cleanly so warranty leads do not duplicate contacts. It wins when execution consistency matters more than enterprise branching.",
      },
      {
        heading: "Brevo",
        body: "Brevo helps appliance shops that already text customers for windows and parts updates and want email nurture in the same operational hub. Pilot SMS volumes against no-show reduction; message costs spike if you over-send. Document TCPA consent separately from email promos. Brevo belongs when multichannel coordination—not isolated newsletters—is the goal.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp remains the practical integration-heavy choice when your stack mixes scheduling tools, lead vendors, and light CRMs and you need dependable campaign velocity. Trial domain authentication on your real sending domain before scaling seasonal filter promotions. Use segmentation by appliance type only when data is trustworthy—bad tags produce irrelevant offers. Mailchimp suits mixed-tool shops that value speed and partner ecosystem breadth.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for appliance repair businesses?", a: "MailerLite for lean automation, Brevo when SMS plus email should live together, and Mailchimp when integrations and fast publishing matter most." },
      { q: "Should appliance repair shops email weekly?", a: "A modest value cadence plus triggered post-job messages usually outperforms sporadic blasts—busy owners need sustainable rhythms." },
      { q: "How do we avoid annoying customers waiting on parts?", a: "Use transactional-style updates for delays and pause promotional automations until service is complete." },
      { q: "What is the first automation to build?", a: "A closed-ticket thank-you with maintenance tips and optional review link, gated on job status from your FSM or CRM." },
      { q: "Do we need CRM-grade email?", a: "Only if you run true pipeline stages; many single-location shops succeed with lighter tools plus disciplined tags." },
      { q: "How should we measure ROI?", a: "Track booked return visits, plan attach rate, and referral mentions tied to campaign clicks—not vanity opens." },
    ],
  },
  "garage-door": {
    subtitle: "Emergency dispatch nurture, install follow-up, and upsell-friendly campaigns for garage door companies.",
    introParagraph:
      "Garage door operators split attention between spring emergencies, opener upgrades, and commercial sectional work. Email should support fast quote follow-up, reinforce safety and warranty clarity after installs, and carry visual proof—without your office abandoning automations every storm season.",
    topPicksSub: "Email systems for garage door installers and service teams.",
    editorialSub: "What garage door companies should prioritize in email software.",
    whyThesePicksSub: "Why ActiveCampaign, Brevo, and Mailchimp fit common garage door workflows.",
    editorialGuidance: [
      { heading: "Split emergency vs scheduled messaging", body: "Tone, cadence, and CTAs should differ for 2 a.m. spring calls versus planned panel upgrades." },
      { heading: "Automate estimate nudges with discipline", body: "Short quote-cycle sequences outperform generic newsletters when sales teams are slammed mid-season." },
      { heading: "Coordinate SMS for logistics", body: "Day-before arrival confirmations and crew ETAs belong in SMS; keep education and proof in email." },
      { heading: "Storm-ready templates", body: "Pre-approve modular campaigns you can publish quickly after hail or wind events without sloppy copy." },
    ],
    whyThesePicks: [
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign suits garage door sales teams juggling same-day quotes and multi-day installs—branching on estimate status, deposit paid, or install complete keeps follow-up honest. Pilot with real CRM or FSM tags and audit weekly during peak weeks. It wins when pipeline discipline—not just pretty templates—is the constraint.",
      },
      {
        heading: "Brevo",
        body: "Brevo helps when dispatch already texts homeowners and you want promotional email plus operational SMS under one roof. Trial consent capture on web forms and measure whether bundled reminders cut no-shows enough to justify message cost. It fits coordination-heavy operations.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp is the dependable generalist when you need fast storm campaigns, broad integrations, and visual proof blocks ops can reuse. Validate deliverability before scaling geo-targeted offers. It suits teams that rotate creative often and refuse brittle enterprise stacks.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for garage door companies?", a: "ActiveCampaign for quote-stage automation, Brevo for combined email and SMS operations, and Mailchimp for fast integrated campaigns." },
      { q: "What campaigns should we automate first?", a: "Post-inspection follow-up, deposit-to-schedule reminders, and post-install care plus review asks." },
      { q: "How often should we email homeowners?", a: "Event-driven sequences plus a monthly maintenance or safety tip usually feel helpful rather than spammy." },
      { q: "Should commercial and residential share one list?", a: "Prefer segmentation at minimum—copy and proof differ sharply between builder programs and homeowner emergencies." },
      { q: "How do we protect deliverability?", a: "Authenticate your domain, avoid purchased lists, and scrub duplicates after acquisitions or new phone systems." },
      { q: "What proves ROI?", a: "Fewer ghosted quotes, higher opener attach rates, and faster referral loops measured in CRM or dispatch notes." },
    ],
  },
  locksmith: {
    subtitle: "Speed-to-lead nurture, after-hours sensitivity, and dispute-aware messaging for locksmith businesses.",
    introParagraph:
      "Locksmith demand is urgent and mobile-first; buyers compare fast from search. Email still matters for receipts, rekey programs, commercial master-key education, and follow-up that builds repeat commercial accounts—if sends respect timing and you pair operational SMS thoughtfully.",
    topPicksSub: "Email tools for locksmith operators.",
    editorialSub: "How locksmiths should choose email marketing platforms.",
    whyThesePicksSub: "Why Brevo, ActiveCampaign, and MailerLite fit locksmith realities.",
    editorialGuidance: [
      { heading: "Lead velocity over newsletter vanity", body: "Prioritize short post-inquiry sequences that mirror how fast buyers decide." },
      { heading: "Quiet hours and consent", body: "Night dispatch is normal—marketing sends are not. Separate transactional SMS from promos." },
      { heading: "Automotive vs commercial tracks", body: "Car lockout customers need different nurture than property managers on master-key contracts." },
      { heading: "Reputation-sensitive tone", body: "Draft calm templates for pricing disputes before you need them in public-facing crises." },
    ],
    whyThesePicks: [
      {
        heading: "Brevo",
        body: "Brevo fits locksmiths who text ETAs and invoices and want lifecycle email—rekey reminders, commercial check-ins—in the same stack. Measure SMS costs against booked return work. It wins on multichannel speed for lean crews.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign helps growing locksmith groups segment commercial, automotive, and residential pipelines with stage-based follow-up. Requires honest CRM tags—bad data sends automotive blasts to property managers. Choose it when logic discipline exists.",
      },
      {
        heading: "MailerLite",
        body: "MailerLite keeps owner-operators shipping professional emails between calls: simple automations, modern editor, fair pricing. Ideal when you refuse heavy admin but still want post-job sequences that run without you remembering.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for locksmith businesses?", a: "Brevo for email plus SMS operations, ActiveCampaign for pipeline-heavy segmentation, and MailerLite for lean owner-led execution." },
      { q: "Do locksmiths need fancy automation?", a: "Start with two or three triggers—post-service, dormant commercial check-in, and seasonal security tips—before branching deeply." },
      { q: "How should we handle pricing complaints in email?", a: "Use calm, factual templates and move detailed billing disputes offline—never argue invoices in marketing broadcasts." },
      { q: "Is weekly email realistic?", a: "Often biweekly value plus triggered flows fits solo operators better than unsustainable weekly promises." },
      { q: "What integrations matter?", a: "Scheduling, invoicing, and website quote forms so segments stay honest." },
      { q: "What KPI should we track?", a: "Booked jobs and repeat commercial contracts influenced by sequences, not click rate alone." },
    ],
  },
  "flooring-contractors": {
    subtitle: "Visual proof, long estimate cycles, and showroom-to-install nurture for flooring contractors.",
    introParagraph:
      "Flooring buyers need inspiration, material education, and confidence in measurement and dust control. Email is where you carry before/after galleries, timeline expectations, and follow-up across multi-week decisions—without your coordinator abandoning the tool mid-season.",
    topPicksSub: "Email marketing picks for flooring contractors.",
    editorialSub: "How flooring businesses should evaluate email platforms.",
    whyThesePicksSub: "Why Mailchimp, ActiveCampaign, and Klaviyo align with flooring sales journeys.",
    editorialGuidance: [
      { heading: "Visual-first templates", body: "Prioritize mobile rendering for large imagery and clear CTAs to book measure appointments." },
      { heading: "Stage-based nurture", body: "Map sequences to showroom visit, measure scheduled, install booked, and punch complete—each stage needs different proof." },
      { heading: "Data only when clean", body: "Klaviyo-style segmentation rewards accurate project-type tags; do not fake sophistication with messy CRM exports." },
      { heading: "Partner with reps responsibly", body: "If you co-brand with suppliers, keep unsubscribes and consent transparent." },
    ],
    whyThesePicks: [
      {
        heading: "Mailchimp",
        body: "Mailchimp helps flooring teams ship gorgeous room scenes and promotion modules fast while integrating common contractor stacks. Trial one estimate nurture and one seasonal hardwood campaign; measure booked measures, not opens. It wins on creative velocity.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign supports longer estimate cycles with branching when prospects open pricing emails or stall after samples. Requires someone to audit branches monthly. Choose it when follow-up discipline is the real bottleneck.",
      },
      {
        heading: "Klaviyo",
        body: "Klaviyo fits flooring retailers with showroom POS or website events feeding clean profiles—win-back, upgrade to waterproof lines, and VIP designer tracks. Validate data pipes before paying for advanced features. It belongs when behavior data is trustworthy.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for flooring contractors?", a: "Mailchimp for visual campaign speed, ActiveCampaign for structured estimate nurture, and Klaviyo when clean event data supports advanced segmentation." },
      { q: "How long should estimate nurture run?", a: "Often 21–45 days with stage-based messages; pause when customers book or explicitly defer." },
      { q: "Should we segment residential vs commercial?", a: "Yes—proof, timelines, and payment terms differ materially." },
      { q: "How do we use photos ethically?", a: "Obtain customer permission before featuring installs; use labeled stock where needed." },
      { q: "What is a high-performing first campaign?", a: "Post-measure education on acclimation and subfloor prep with a clear scheduling CTA." },
      { q: "How should we measure ROI?", a: "Booked installs, average project value, and repeat referral requests tied to email touches." },
    ],
  },
  "fence-deck-builders": {
    subtitle: "Weather-aware promotions, neighbor-sensitive messaging, and project-completion follow-up for outdoor builders.",
    introParagraph:
      "Fence and deck builders sell curb appeal and long outdoor projects—email is ideal for material education, permit-delay updates, and post-walkthrough referral loops. Pick software your PMs will not abandon when rain pushes schedules.",
    topPicksSub: "Email tools for fence and deck companies.",
    editorialSub: "What outdoor builders should demand from email software.",
    whyThesePicksSub: "Why MailerLite, Mailchimp, and Brevo fit fence and deck workflows.",
    editorialGuidance: [
      { heading: "Pause automations around weather slips", body: "Nothing feels worse than a promo landing while crews are behind—use manual holds or date-aware logic." },
      { heading: "Post-punch referral timing", body: "Ask after stain dry and walkthrough sign-off, not mid-railing install." },
      { heading: "Material education wins trust", body: "Explain rot resistance, hardware choices, and code basics before pushing upgrades." },
      { heading: "SMS for day-of logistics", body: "Coordinate crew arrivals via SMS; keep inspiration galleries in email." },
    ],
    whyThesePicks: [
      {
        heading: "MailerLite",
        body: "MailerLite suits lean outdoor crews that need attractive project showcases and light automation without enterprise overhead. Great when one coordinator runs social and email together.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp helps multi-crew deck builders standardize modules—proof, offers, footers—while swapping local photos quickly. Integrations keep website leads flowing into segments.",
      },
      {
        heading: "Brevo",
        body: "Brevo adds SMS for weather delays and arrival windows alongside email nurture—critical when neighbors watch your trucks all week. Watch consent and frequency caps.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for fence and deck builders?", a: "MailerLite for lean value, Mailchimp for template speed and integrations, and Brevo when SMS plus email coordination matters." },
      { q: "Should we email during delays?", a: "Send honest project updates; pause promos until schedules stabilize." },
      { q: "What content converts?", a: "Process explainers, warranty clarity, and curated project galleries with realistic timelines." },
      { q: "How often should we broadcast?", a: "Monthly or biweekly inspiration plus milestone triggers is a sustainable baseline." },
      { q: "Do we need CRM integration?", a: "Helpful once you juggle many open jobs; otherwise start with simple tags by project stage." },
      { q: "What proves ROI?", a: "Signed contracts influenced by nurture, referral mentions, and fewer ghosted estimates." },
    ],
  },
  "glass-window-installers": {
    subtitle: "Specifier education, retrofit homeowner nurture, and compliance-aware follow-up for glass and window installers.",
    introParagraph:
      "Glass and window companies sell energy performance, safety, and clean installs—often across retail replacement, new construction, and insurance-adjacent workstreams. Email should carry technical education, project timelines, and post-install care without mixing incompatible buyer journeys.",
    topPicksSub: "Email platforms for glass and window installers.",
    editorialSub: "How glass and window companies should evaluate email tools.",
    whyThesePicksSub: "Why HubSpot, ActiveCampaign, and Mailchimp map to mixed B2B and homeowner demand.",
    editorialGuidance: [
      { heading: "Separate retail, GC, and insurance tracks", body: "Different approvals, tone, and cadence—shared lists without segmentation create embarrassing misfires." },
      { heading: "Technical education builds trust", body: "Low-E coatings, structural glass, and lead-time transparency belong in email—not rushed SMS alone." },
      { heading: "CRM alignment for longer bids", body: "Commercial glazing needs deal-stage visibility; retail replacement needs faster quote cycles." },
      { heading: "Careful co-marketing", body: "Manufacturer programs are great—ensure unsubscribes remain clear to homeowners." },
    ],
    whyThesePicks: [
      {
        heading: "HubSpot",
        body: "HubSpot fits glass shops adding commercial programs or multiple locations and needing CRM plus marketing email in one timeline. Trial deal-based automations before scaling; unused CRM seats waste money. It wins when pipeline reporting is mandatory.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign supports behavior-triggered follow-up when prospects open spec-heavy messages about U-values or sound packages. Requires disciplined tagging between retrofit and new construction. Choose it when sales needs automated nudges tied to real engagement.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp remains the pragmatic choice for retail-heavy replacement crews that need fast, visual campaigns and wide integrations without standing up full CRM marketing overnight. Authenticate domains before scaling geo offers.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for glass and window installers?", a: "HubSpot when CRM-linked lifecycle is central, ActiveCampaign for engagement-based nurture, and Mailchimp for fast integrated retail campaigns." },
      { q: "Should we email technical specs?", a: "Yes in digestible chunks—buyers comparing bids want clarity on performance and warranties." },
      { q: "How do we handle long manufacturer lead times?", a: "Use honest update emails and pause upsell promos until delivery stabilizes." },
      { q: "What is the first automation?", a: "Post-estimate education sequence with measurement expectations and prep checklist." },
      { q: "Do we need SMS?", a: "Useful for crew ETAs; keep detailed education in email." },
      { q: "How should we measure ROI?", a: "Booked installs, average contract value, and influenced revenue by segment." },
    ],
  },
  "concrete-contractors": {
    subtitle: "Bid-stage nurture, GC-facing proof, and homeowner education for concrete contractors.",
    introParagraph:
      "Concrete contractors balance homeowner flatwork, decorative finishes, and commercial schedules with different risk profiles. Email should support longer GC nurture, educate homeowners on cure times and joints, and keep follow-up disciplined when weather disrupts pours.",
    topPicksSub: "Email systems for concrete contractors.",
    editorialSub: "What concrete contractors should prioritize in email software.",
    whyThesePicksSub: "Why HubSpot, Klaviyo, and ActiveCampaign fit heavier project pipelines.",
    editorialGuidance: [
      { heading: "Stage-aware follow-up", body: "GC bids need milestone emails; residential driveways need shorter, proof-heavy cycles." },
      { heading: "Educate before upsell", body: "Explain sealing, joints, and realistic crack expectations to reduce post-pour disputes." },
      { heading: "Data discipline for segmentation", body: "Klaviyo-style tracks only help when project type and revenue band tags are accurate." },
      { heading: "Weather and schedule transparency", body: "Batch honest delay communications; silence erodes trust faster than rain." },
    ],
    whyThesePicks: [
      {
        heading: "HubSpot",
        body: "HubSpot suits concrete firms growing commercial work and needing CRM visibility across estimators, PMs, and marketing. Pilot one pipeline before rolling enterprise features you will not staff.",
      },
      {
        heading: "Klaviyo",
        body: "Klaviyo helps when you can feed project size, service line, and engagement history cleanly—useful for win-back and upsell decorative finishes to past flatwork clients. Garbage data makes expensive software pointless.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign delivers deep automation for mixed residential and commercial funnels—task reminders when GCs open spec emails, homeowner nurture after pour photos. Requires monthly QA.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for concrete contractors?", a: "HubSpot for CRM-centric growth, Klaviyo when trustworthy data unlocks lifecycle revenue plays, and ActiveCampaign for strong automation without full enterprise bloat." },
      { q: "Should residential and GC leads share one journey?", a: "No—split tracks and tone; GCs need proof, schedules, and safety culture; homeowners need education and reassurance." },
      { q: "What campaigns convert residential work?", a: "Driveway maintenance tips, seasonal sealing offers, and decorative finish galleries with clear CTAs." },
      { q: "How often should we email GCs?", a: "Follow milestone cadence tied to bids and project updates—not generic weekly blasts." },
      { q: "What is the biggest mistake?", a: "Over-promising timelines in email when weather controls your schedule." },
      { q: "How do we prove ROI?", a: "Won bid value, residential repeat rate, and add-on decorative work influenced by campaigns." },
    ],
  },
  excavation: {
    subtitle: "B2B bid nurture, safety-and-community sensitivity, and selective homeowner campaigns for excavation companies.",
    introParagraph:
      "Excavation companies sell to developers, municipalities, and selective residential buyers. Email should support longer B2B cycles, subcontractor coordination updates, and occasional community-facing education—without sounding consumer-marketing-cute on heavy civil topics.",
    topPicksSub: "Email marketing tools for excavation and sitework firms.",
    editorialSub: "How excavation companies should evaluate email platforms.",
    whyThesePicksSub: "Why HubSpot, ActiveCampaign, and Constant Contact fit mixed B2B and local visibility.",
    editorialGuidance: [
      { heading: "Respect audience maturity", body: "Procurement readers want concise scope references, safety culture proof, and clear next steps—not emoji-heavy promos." },
      { heading: "Long-cycle B2B nurture", body: "Automate reminders on dormant bids and RFP clarifications with CRM alignment." },
      { heading: "Local brand maintenance", body: "Selective homeowner newsletters can support hiring and small job demand—keep lists clean." },
      { heading: "Crisis and safety comms", body: "Pre-draft templates for incidents with legal review gates before sending at scale." },
    ],
    whyThesePicks: [
      {
        heading: "HubSpot",
        body: "HubSpot fits excavation firms standardizing CRM, deal tracking, and executive reporting across regions. Trial permissions so field supers cannot accidentally blast enterprise lists.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign helps teams automate bid-stage touches, dormant opportunity nudges, and webinar-style technical sessions when CRM tags stay honest.",
      },
      {
        heading: "Constant Contact",
        body: "Constant Contact is a pragmatic choice for owner-led excavation brands that need guided templates, predictable support, and straightforward newsletters to local stakeholders without adopting a full MAP overnight.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for excavation companies?", a: "HubSpot for CRM-heavy pipelines, ActiveCampaign for structured automation, and Constant Contact for guided simplicity on lean teams." },
      { q: "Should excavation firms send consumer-style newsletters?", a: "Only when targeting specific local services; keep tone factual and relevant." },
      { q: "What should B2B emails include?", a: "Project proof, equipment capabilities, safety metrics, and clear call-to-action for pre-bid meetings." },
      { q: "How often should we email prospects?", a: "Follow deal cadence—not arbitrary weekly marketing calendars." },
      { q: "Do we need SMS?", a: "Sometimes for crew coordination; keep sensitive legal topics out of SMS marketing." },
      { q: "How should we measure ROI?", a: "Qualified opportunities advanced, won contract value, and inbound partner referrals influenced by nurture." },
    ],
  },
  "auto-repair-shops": {
    subtitle: "RO-close follow-up, service reminder discipline, and high-volume trust content for auto repair shops.",
    introParagraph:
      "Auto repair shops move fast: declined jobs, deferred maintenance, and fleet accounts all need different email rhythms. Software should integrate with shop systems where possible, support SMS for same-day logistics, and keep educational content scannable on phones.",
    topPicksSub: "Email marketing platforms for auto repair shops.",
    editorialSub: "How auto repair shops should choose email software.",
    whyThesePicksSub: "Why Brevo, ActiveCampaign, and Mailchimp suit bay-heavy operations.",
    editorialGuidance: [
      { heading: "Trigger on RO status", body: "Post-visit education and declined-service nurture should respect whether the customer paid, picked up, or needs callback." },
      { heading: "Advisor-friendly templates", body: "Service writers need plug-and-play blocks for brakes, tires, and inspections—avoid fragile custom HTML." },
      { heading: "SMS discipline", body: "Reminders help; marketing texts need clear consent and opt-out paths." },
      { heading: "Fleet vs retail segmentation", body: "Account-based messaging for fleets should not mirror consumer coupon cadence." },
    ],
    whyThesePicks: [
      {
        heading: "Brevo",
        body: "Brevo fits shops already texting pickup approvals and wanting email nurture—declined repairs, seasonal checks—in one stack. Watch message costs during high-volume months.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign helps multi-advisor shops automate follow-up on declined work and dormant vehicles with behavior triggers from integrated CRM or DMS exports. Requires someone to audit logic weekly.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp is the dependable generalist for fast coupon campaigns, loyalty sends, and integrations when you are not ready for heavy automation overhead.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for auto repair shops?", a: "Brevo for combined email and SMS ops, ActiveCampaign for deeper RO-triggered automation, and Mailchimp for straightforward high-volume campaigns." },
      { q: "What is the first automation to launch?", a: "Post-service thank-you with maintenance tips and a respectful declined-service follow-up sequence." },
      { q: "How often should shops email?", a: "Monthly value plus triggered service reminders usually beats random blasts." },
      { q: "Should we segment by vehicle type?", a: "When data exists, yes—diesel, EV, and fleet maintenance paths differ." },
      { q: "What content builds trust?", a: "Transparent inspection explainers, warranty clarity, and advisor-signed tips—not only discounts." },
      { q: "How do we measure ROI?", a: "Return visits, accepted recommendations, and fleet account revenue influenced by email." },
    ],
  },
  "mobile-mechanics": {
    subtitle: "On-the-road follow-up, lean automation, and SMS-first coordination for mobile mechanics.",
    introParagraph:
      "Mobile mechanics run businesses from trucks and phones. Email marketing should stay lightweight—post-repair education, deferred-work reminders, and occasional seasonal pushes—while SMS handles real-time logistics without double-notifying customers.",
    topPicksSub: "Email tools for mobile mechanics.",
    editorialSub: "What mobile mechanics should prioritize in email software.",
    whyThesePicksSub: "Why Brevo, MailerLite, and ActiveCampaign fit road-based automotive service.",
    editorialGuidance: [
      { heading: "Keep admin overhead honest", body: "Choose flows you can maintain between jobs—complex MAPs die unused." },
      { heading: "Pair SMS and email deliberately", body: "SMS for ETAs; email for richer education on maintenance intervals." },
      { heading: "Invoice-triggered sends", body: "Automate from closed tickets so asks align with completed work." },
      { heading: "Fleet pursuit tracks", body: "Separate small business fleet nurture from retail consumer cadence." },
    ],
    whyThesePicks: [
      {
        heading: "Brevo",
        body: "Brevo suits mobile mechanics who already text customers and want simple email sequences layered on—referrals, seasonal checks—without juggling multiple vendors.",
      },
      {
        heading: "MailerLite",
        body: "MailerLite keeps solo operators publishing clean emails with minimal time investment; ideal when marketing is nights-and-weekends work.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign helps growing mobile fleets add branching for deferred work and dormant VINs once CRM or export hygiene exists.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for mobile mechanics?", a: "Brevo for SMS plus email coordination, MailerLite for lean simplicity, and ActiveCampaign when you need deeper automation as you scale." },
      { q: "Should mobile mechanics skip email entirely?", a: "Email still carries education and trust better than SMS alone—just keep volume modest." },
      { q: "What is the first campaign?", a: "Post-repair tips with clear next service interval and a single referral ask." },
      { q: "How do we avoid unsafe messaging habits?", a: "Use templates triggered when parked; avoid typing campaigns while driving." },
      { q: "Do we need a CRM?", a: "Helpful once you track fleets; many start with tags inside the email tool plus invoices." },
      { q: "What proves ROI?", a: "Repeat bookings, deferred work captured, and fleet contracts won after nurture." },
    ],
  },
  "cleaning-franchises": {
    subtitle: "Franchise governance, territory reporting, and recurring-route retention for cleaning franchises.",
    introParagraph:
      "Cleaning franchises must balance brand standards with local execution: recurring route retention, upsell add-ons, and hiring campaigns all need email that scales without breaking consent or duplicating contacts across territories.",
    topPicksSub: "Email platforms for cleaning franchises.",
    editorialSub: "What cleaning franchises should demand from email software.",
    whyThesePicksSub: "Why HubSpot, ActiveCampaign, and Klaviyo support franchise-scale operations.",
    editorialGuidance: [
      { heading: "Permissions and template libraries", body: "Corporate should own legal footers and promo rules while locals personalize community hooks." },
      { heading: "Territory dashboards", body: "Compare locations on list growth, engagement, and booked upsells—not vanity sends." },
      { heading: "Data hygiene after transfers", body: "Route changes and acquisitions duplicate contacts fast—audit quarterly." },
      { heading: "Recurring-service automation", body: "Deep clean reminders, seasonal window campaigns, and referral asks should align to service dates." },
    ],
    whyThesePicks: [
      {
        heading: "HubSpot",
        body: "HubSpot fits franchisors needing CRM discipline, deal pipelines for B2B accounts, and marketing email with role-based governance across territories.",
      },
      {
        heading: "ActiveCampaign",
        body: "ActiveCampaign helps franchise systems enforce playbooks with branching—quality checks, upsells, win-backs—while still allowing local tags when ops stay disciplined.",
      },
      {
        heading: "Klaviyo",
        body: "Klaviyo supports data-rich retention programs when POS or billing events feed clean profiles—VIP routes, add-on attach, churn risk. Requires integration investment.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for cleaning franchises?", a: "HubSpot for CRM-centric governance, ActiveCampaign for operational automation depth, and Klaviyo when trustworthy event data unlocks retention analytics." },
      { q: "Should franchisors centralize lists?", a: "Often yes with strict segmentation; siloed lists duplicate contacts and hurt deliverability." },
      { q: "What campaigns matter first?", a: "Post-clean quality check, referral ask, and recurring upsell sequences tied to service frequency." },
      { q: "How do we protect brand voice?", a: "Locked modules for legal and offers with editable local fields only where allowed." },
      { q: "What is the biggest risk?", a: "Stale automations after rebrands—audit every merge and name change." },
      { q: "How should we measure ROI?", a: "Retention rate, add-on revenue per route, and franchisee NPS—not just opens." },
    ],
  },
  "event-services": {
    subtitle: "Inquiry speed, peak-season bursts, and portfolio storytelling for event services companies.",
    introParagraph:
      "Event rentals, AV, staffing, and logistics firms sell high-stakes days. Email should capture inquiries fast, nurture corporate planners with proof, and support seasonal peaks—while Kit-style sequences help creator-led brands monetize workshops or add-ons.",
    topPicksSub: "Email marketing systems for event services businesses.",
    editorialSub: "How event services teams should evaluate email platforms.",
    whyThesePicksSub: "Why Mailchimp, Klaviyo, and Kit fit mixed B2B and audience-led event models.",
    editorialGuidance: [
      { heading: "Speed-to-quote sequences", body: "Short automations after form fills beat monthly newsletters for active RFPs." },
      { heading: "Portfolio and logistics clarity", body: "Load-in diagrams, insurance proof, and rain plans belong in scannable email blocks." },
      { heading: "Segment weddings vs corporate", body: "Different tone, cadence, and upsell paths—never mix them blindly." },
      { heading: "Post-event referral timing", body: "Send gratitude and photo links while memory is fresh—then pause before upselling next season." },
    ],
    whyThesePicks: [
      {
        heading: "Mailchimp",
        body: "Mailchimp helps event teams ship fast visual promos, vendor partner blasts, and integrated landing pages when integrations matter more than exotic CRM logic.",
      },
      {
        heading: "Klaviyo",
        body: "Klaviyo fits operators capturing rich website behavior—repeat corporate buyers, add-on furniture tiers, VIP client tiers—when data pipelines are clean enough to justify advanced flows.",
      },
      {
        heading: "Kit",
        body: "Kit (ConvertKit) supports story-driven nurture for workshop hosts, influencer-led rentals, and education-first upsells where simple visual sequences outperform heavy MAP complexity.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for event services?", a: "Mailchimp for fast integrated campaigns, Klaviyo when behavioral data supports premium segmentation, and Kit for audience-led story nurture." },
      { q: "What should we automate first?", a: "Inquiry acknowledgment, quote follow-up, and post-event referral asks." },
      { q: "How do we handle peak season?", a: "Pre-build modular campaigns and throttle sends so deliverability stays healthy." },
      { q: "Should we SMS clients day-of?", a: "Yes for logistics with consent; keep contracts and insurance detail in email." },
      { q: "What content converts corporate planners?", a: "Case studies, load-in timelines, contingency plans, and transparent pricing ranges." },
      { q: "How should we measure ROI?", a: "Booked events, upsell revenue, and repeat corporate accounts influenced by nurture." },
    ],
  },
  "home-inspectors": {
    subtitle: "Neutral education, agent-friendly cadence, and liability-aware messaging for home inspectors.",
    introParagraph:
      "Home inspectors need referral-friendly visibility without aggressive sales tactics that undermine neutrality. Email should deliver maintenance education, seasonal checklists, and gentle post-report follow-up—aligned with how agents and buyers actually want to hear from you.",
    topPicksSub: "Email marketing tools for home inspectors.",
    editorialSub: "What home inspectors should prioritize in email software.",
    whyThesePicksSub: "Why MailerLite, Constant Contact, and Mailchimp fit inspection practices.",
    editorialGuidance: [
      { heading: "Tone: educator, not salesperson", body: "Avoid language that sounds like you are negotiating repairs; focus on homeowner safety and maintenance literacy." },
      { heading: "Agent partner rhythms", body: "Seasonal co-branded tips can work—ensure agents remain comfortable with your neutrality positioning." },
      { heading: "Simple automations you will maintain", body: "One post-report sequence beats ten abandoned flows." },
      { heading: "Permission clarity", body: "Buyers opt in at different moments—respect transactional vs marketing separation." },
    ],
    whyThesePicks: [
      {
        heading: "MailerLite",
        body: "MailerLite helps solo inspectors and small teams publish polished educational emails without enterprise overhead—ideal for seasonal maintenance series and referral-light follow-ups.",
      },
      {
        heading: "Constant Contact",
        body: "Constant Contact supports inspectors who want guided onboarding, template suggestions, and human support when they are too busy to troubleshoot DNS issues alone.",
      },
      {
        heading: "Mailchimp",
        body: "Mailchimp fits multi-inspector firms needing integrations with website builders, class providers, and light CRMs while standardizing brand modules across partners.",
      },
    ],
    faqItems: [
      { q: "What is the best email marketing software for home inspectors?", a: "MailerLite for lean educational programs, Constant Contact for guided simplicity and support, and Mailchimp for integration breadth across small teams." },
      { q: "Should inspectors run aggressive promo emails?", a: "No—focus on education, seasonal safety, and soft referral asks that preserve neutrality." },
      { q: "What is a good first sequence?", a: "Post-report maintenance tips with clear disclaimers and optional scheduling links for ancillary services you legitimately offer." },
      { q: "How often should inspectors email?", a: "Monthly or seasonal educational cadence plus light triggered flows is usually sustainable." },
      { q: "Can we co-market with agents?", a: "Yes with transparent, optional value—never imply undue influence on negotiations." },
      { q: "How should we measure success?", a: "Referral volume from trusted agents, ancillary service bookings, and list growth from delighted clients—not open rates alone." },
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
  const tradeFeatured = featuredFromTradeTriple(scenarioKey);
  if (tradeFeatured) return tradeFeatured;
  if (scenarioKey === "painting") {
    return [featuredProducts[0], featuredProducts[2], featuredProducts[1]];
  }
  if (scenarioKey === "general-contractors") {
    return [
      {
        slug: "hubspot-email-marketing",
        name: "HubSpot",
        badge: "Best CRM + pipeline alignment",
        description: "Unified CRM and email lifecycle for long-cycle contractor sales.",
        rating: "4.4",
        startingPrice: "Free–paid",
        reviewHref: getEmailMarketingReviewUrl("hubspot-email-marketing"),
        visitUrl: "https://www.hubspot.com/products/marketing",
        logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"),
      },
      featuredProducts[1],
      featuredProducts[0],
    ];
  }
  if (scenarioKey === "landscaping" || scenarioKey === "pool-service" || scenarioKey === "handyman") {
    return [
      featuredProducts[0],
      {
        slug: "brevo",
        name: "Brevo",
        badge: "Best email + SMS operations",
        description: "Coordinate reminders and promos from one multichannel stack.",
        rating: "4.2",
        startingPrice: "Free–paid",
        reviewHref: getEmailMarketingReviewUrl("brevo"),
        visitUrl: "https://www.brevo.com",
        logoSrc: emailMarketingLogoForSlug("brevo"),
      },
      featuredProducts[2],
    ];
  }
  if (scenarioKey === "construction" || scenarioKey === "remodeling" || scenarioKey === "property-management" || scenarioKey === "moving") {
    return [
      {
        slug: "hubspot-email-marketing",
        name: "HubSpot",
        badge: "Best CRM-linked lifecycle",
        description: "When CRM, deals, and email must stay in one accountable timeline.",
        rating: "4.4",
        startingPrice: "Free–paid",
        reviewHref: getEmailMarketingReviewUrl("hubspot-email-marketing"),
        visitUrl: "https://www.hubspot.com/products/marketing",
        logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"),
      },
      featuredProducts[1],
      {
        slug: "klaviyo",
        name: "Klaviyo",
        badge: "Best data-heavy segmentation",
        description: "Behavior-driven segmentation for mature lifecycle operations.",
        rating: "4.5",
        startingPrice: "Free–paid",
        reviewHref: getEmailMarketingReviewUrl("klaviyo"),
        visitUrl: "https://www.klaviyo.com",
        logoSrc: emailMarketingLogoForSlug("klaviyo"),
      },
    ];
  }
  if (scenarioKey === "pest-control" || scenarioKey === "junk-removal") {
    return [
      featuredProducts[1],
      {
        slug: "brevo",
        name: "Brevo",
        badge: "Best multichannel reminders",
        description: "Pair reminder SMS with lifecycle email in one platform.",
        rating: "4.2",
        startingPrice: "Free–paid",
        reviewHref: getEmailMarketingReviewUrl("brevo"),
        visitUrl: "https://www.brevo.com",
        logoSrc: emailMarketingLogoForSlug("brevo"),
      },
      featuredProducts[0],
    ];
  }
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
  if (scenarioKey === "plumbing" || scenarioKey === "plumbers") {
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
  const tradeTable = tableFromTradeTriple(scenarioKey);
  if (tradeTable) return tradeTable;
  if (scenarioKey === "painting") {
    return [
      { slug: "mailchimp", name: "Mailchimp", logoSrc: emailMarketingLogoForSlug("mailchimp"), bestFor: "Visual campaign speed", startingPrice: "Free–paid", standoutFeature: "Template velocity", reviewHref: getEmailMarketingReviewUrl("mailchimp") },
      { slug: "mailerlite", name: "MailerLite", logoSrc: emailMarketingLogoForSlug("mailerlite"), bestFor: "Lean-team value", startingPrice: "Free–paid", standoutFeature: "Modern editor", reviewHref: getEmailMarketingReviewUrl("mailerlite") },
      { slug: "activecampaign", name: "ActiveCampaign", logoSrc: emailMarketingLogoForSlug("activecampaign"), bestFor: "Quote follow-up logic", startingPrice: "From ~$29/mo", standoutFeature: "Workflow branching", reviewHref: getEmailMarketingReviewUrl("activecampaign") },
    ];
  }
  if (scenarioKey === "general-contractors") {
    return [
      { slug: "hubspot-email-marketing", name: "HubSpot", logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"), bestFor: "Pipeline-linked nurture", startingPrice: "Free–paid", standoutFeature: "CRM timeline", reviewHref: getEmailMarketingReviewUrl("hubspot-email-marketing") },
      { slug: "activecampaign", name: "ActiveCampaign", logoSrc: emailMarketingLogoForSlug("activecampaign"), bestFor: "Automation depth", startingPrice: "From ~$29/mo", standoutFeature: "Conditional logic", reviewHref: getEmailMarketingReviewUrl("activecampaign") },
      { slug: "mailchimp", name: "Mailchimp", logoSrc: emailMarketingLogoForSlug("mailchimp"), bestFor: "Integration breadth", startingPrice: "Free–paid", standoutFeature: "Template + integrations", reviewHref: getEmailMarketingReviewUrl("mailchimp") },
    ];
  }
  if (scenarioKey === "landscaping" || scenarioKey === "pool-service" || scenarioKey === "handyman") {
    return [
      { slug: "mailchimp", name: "Mailchimp", logoSrc: emailMarketingLogoForSlug("mailchimp"), bestFor: "Generalist sends", startingPrice: "Free–paid", standoutFeature: "Template speed", reviewHref: getEmailMarketingReviewUrl("mailchimp") },
      { slug: "brevo", name: "Brevo", logoSrc: emailMarketingLogoForSlug("brevo"), bestFor: "Email + SMS ops", startingPrice: "Free–paid", standoutFeature: "Bundled channels", reviewHref: getEmailMarketingReviewUrl("brevo") },
      { slug: "mailerlite", name: "MailerLite", logoSrc: emailMarketingLogoForSlug("mailerlite"), bestFor: "Lean-office value", startingPrice: "Free–paid", standoutFeature: "Simple UI", reviewHref: getEmailMarketingReviewUrl("mailerlite") },
    ];
  }
  if (scenarioKey === "construction" || scenarioKey === "remodeling" || scenarioKey === "property-management" || scenarioKey === "moving") {
    return [
      { slug: "hubspot-email-marketing", name: "HubSpot", logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"), bestFor: "CRM lifecycle orchestration", startingPrice: "Free–paid", standoutFeature: "Unified reporting", reviewHref: getEmailMarketingReviewUrl("hubspot-email-marketing") },
      { slug: "activecampaign", name: "ActiveCampaign", logoSrc: emailMarketingLogoForSlug("activecampaign"), bestFor: "Behavior automation", startingPrice: "From ~$29/mo", standoutFeature: "Branching flows", reviewHref: getEmailMarketingReviewUrl("activecampaign") },
      { slug: "klaviyo", name: "Klaviyo", logoSrc: emailMarketingLogoForSlug("klaviyo"), bestFor: "Data-heavy segmentation", startingPrice: "Free–paid", standoutFeature: "Profile analytics", reviewHref: getEmailMarketingReviewUrl("klaviyo") },
    ];
  }
  if (scenarioKey === "pest-control" || scenarioKey === "junk-removal") {
    return [
      { slug: "activecampaign", name: "ActiveCampaign", logoSrc: emailMarketingLogoForSlug("activecampaign"), bestFor: "Recurring lifecycle logic", startingPrice: "From ~$29/mo", standoutFeature: "Trigger depth", reviewHref: getEmailMarketingReviewUrl("activecampaign") },
      { slug: "brevo", name: "Brevo", logoSrc: emailMarketingLogoForSlug("brevo"), bestFor: "Reminder + promo blend", startingPrice: "Free–paid", standoutFeature: "SMS + email", reviewHref: getEmailMarketingReviewUrl("brevo") },
      { slug: "mailchimp", name: "Mailchimp", logoSrc: emailMarketingLogoForSlug("mailchimp"), bestFor: "Campaign consistency", startingPrice: "Free–paid", standoutFeature: "Fast publishing", reviewHref: getEmailMarketingReviewUrl("mailchimp") },
    ];
  }
  if (scenarioKey === "hvac") {
    return [
      { slug: "activecampaign", name: "ActiveCampaign", logoSrc: emailMarketingLogoForSlug("activecampaign"), bestFor: "Seasonal automation", startingPrice: "From ~$29/mo", standoutFeature: "Branching workflows", reviewHref: getEmailMarketingReviewUrl("activecampaign") },
      { slug: "klaviyo", name: "Klaviyo", logoSrc: emailMarketingLogoForSlug("klaviyo"), bestFor: "Data-led retention", startingPrice: "Free–paid", standoutFeature: "Profiles + flows", reviewHref: getEmailMarketingReviewUrl("klaviyo") },
      { slug: "mailchimp", name: "Mailchimp", logoSrc: emailMarketingLogoForSlug("mailchimp"), bestFor: "Generalist", startingPrice: "Free–paid", standoutFeature: "Templates", reviewHref: getEmailMarketingReviewUrl("mailchimp") },
    ];
  }
  if (scenarioKey === "plumbing" || scenarioKey === "plumbers") {
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
  const s = SCENARIOS[slug] ?? SCENARIOS["small-business"];
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
  hvac: makePage("hvac", "Best Email Marketing Software for HVAC Businesses (2026)"),
  plumbing: makePage("plumbing", "Best Email Marketing Software for Plumbing Companies (2026)"),
  plumbers: makePage("plumbing", "Best Email Marketing Software for Plumbing Companies (2026)"),
  electricians: makePage("electricians", "Best Email Marketing Software for Electricians (2026)"),
  painting: makePage("painting", "Best Email Marketing Software for Painting Contractors (2026)"),
  roofing: makePage("roofing", "Best Email Marketing Software for Roofing Companies (2026)"),
  "general-contractors": makePage("general-contractors", "Best Email Marketing Software for General Contractors (2026)"),
  landscaping: makePage("landscaping", "Best Email Marketing Software for Landscaping Companies (2026)"),
  construction: makePage("construction", "Best Email Marketing Software for Construction Companies (2026)"),
  remodeling: makePage("remodeling", "Best Email Marketing Software for Remodeling Businesses (2026)"),
  handyman: makePage("handyman", "Best Email Marketing Software for Handyman Businesses (2026)"),
  "property-management": makePage("property-management", "Best Email Marketing Software for Property Management Companies (2026)"),
  "pest-control": makePage("pest-control", "Best Email Marketing Software for Pest Control Businesses (2026)"),
  "pool-service": makePage("pool-service", "Best Email Marketing Software for Pool Service Companies (2026)"),
  "junk-removal": makePage("junk-removal", "Best Email Marketing Software for Junk Removal Businesses (2026)"),
  moving: makePage("moving", "Best Email Marketing Software for Moving Companies (2026)"),
  "home-services": makePage("home-services", "Best Email Marketing Software for Home Services (2026)"),
  "appliance-repair": makePage("appliance-repair", "Best Email Marketing Software for Appliance Repair Businesses (2026)"),
  "garage-door": makePage("garage-door", "Best Email Marketing Software for Garage Door Companies (2026)"),
  locksmith: makePage("locksmith", "Best Email Marketing Software for Locksmith Businesses (2026)"),
  "flooring-contractors": makePage("flooring-contractors", "Best Email Marketing Software for Flooring Contractors (2026)"),
  "fence-deck-builders": makePage("fence-deck-builders", "Best Email Marketing Software for Fence & Deck Builders (2026)"),
  "glass-window-installers": makePage("glass-window-installers", "Best Email Marketing Software for Glass & Window Installers (2026)"),
  "concrete-contractors": makePage("concrete-contractors", "Best Email Marketing Software for Concrete Contractors (2026)"),
  excavation: makePage("excavation", "Best Email Marketing Software for Excavation Companies (2026)"),
  "auto-repair-shops": makePage("auto-repair-shops", "Best Email Marketing Software for Auto Repair Shops (2026)"),
  "mobile-mechanics": makePage("mobile-mechanics", "Best Email Marketing Software for Mobile Mechanics (2026)"),
  "cleaning-franchises": makePage("cleaning-franchises", "Best Email Marketing Software for Cleaning Franchises (2026)"),
  "event-services": makePage("event-services", "Best Email Marketing Software for Event Services (2026)"),
  "home-inspectors": makePage("home-inspectors", "Best Email Marketing Software for Home Inspectors (2026)"),
};

export const EMAIL_MARKETING_BEST_FOR_METADATA_BY_SLUG: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  hvac: {
    title: "Best Email Marketing Software for HVAC Businesses (2026) | BeltStack",
    description: "Compare the best email marketing software for HVAC businesses: ActiveCampaign, Klaviyo, and Mailchimp.",
    keywords: ["best email marketing software for HVAC businesses", "HVAC email marketing software", "HVAC email marketing tools"],
  },
  plumbing: {
    title: "Best Email Marketing Software for Plumbing Companies (2026) | BeltStack",
    description: "Compare the best email marketing software for plumbing companies: Mailchimp, Brevo, and ActiveCampaign.",
    keywords: ["best email marketing software for plumbing companies", "plumbing email marketing software", "plumber email marketing tools"],
  },
  electricians: {
    title: "Best Email Marketing Software for Electricians (2026) | BeltStack",
    description: "Compare the best email marketing software for electricians: HubSpot, ActiveCampaign, and Mailchimp.",
    keywords: ["best email marketing software for electricians", "electrician email marketing software", "electrical contractor email marketing"],
  },
  painting: {
    title: "Best Email Marketing Software for Painting Contractors (2026) | BeltStack",
    description: "Compare the best email marketing software for painting contractors: Mailchimp, MailerLite, and ActiveCampaign.",
    keywords: ["best email marketing software for painting contractors", "painting email marketing software", "painter email marketing tools"],
  },
  roofing: {
    title: "Best Email Marketing Software for Roofing Companies (2026) | BeltStack",
    description: "Compare the best email marketing software for roofing companies tailored to project follow-up and trust-building campaigns.",
    keywords: ["best email marketing software for roofing companies", "roofing email marketing software", "roofer email marketing tools"],
  },
  "general-contractors": {
    title: "Best Email Marketing Software for General Contractors (2026) | BeltStack",
    description: "Compare the best email marketing software for general contractors: HubSpot, ActiveCampaign, and Mailchimp.",
    keywords: ["best email marketing software for general contractors", "general contractor email marketing software", "GC email marketing tools"],
  },
  landscaping: {
    title: "Best Email Marketing Software for Landscaping Companies (2026) | BeltStack",
    description: "Compare the best email marketing software for landscaping companies: Mailchimp, Brevo, and MailerLite.",
    keywords: ["best email marketing software for landscaping companies", "landscaping email marketing software", "landscaper email marketing tools"],
  },
  construction: {
    title: "Best Email Marketing Software for Construction Companies (2026) | BeltStack",
    description: "Compare the best email marketing software for construction companies: HubSpot, ActiveCampaign, and Klaviyo.",
    keywords: ["best email marketing software for construction companies", "construction email marketing software", "construction marketing email tools"],
  },
  remodeling: {
    title: "Best Email Marketing Software for Remodeling Businesses (2026) | BeltStack",
    description: "Compare the best email marketing software for remodeling businesses: Klaviyo, HubSpot, and Mailchimp.",
    keywords: ["best email marketing software for remodeling businesses", "remodeling email marketing software", "remodeler email marketing tools"],
  },
  handyman: {
    title: "Best Email Marketing Software for Handyman Businesses (2026) | BeltStack",
    description: "Compare the best email marketing software for handyman businesses: MailerLite, Brevo, and Mailchimp.",
    keywords: ["best email marketing software for handyman businesses", "handyman email marketing software", "handyman email tools"],
  },
  "property-management": {
    title: "Best Email Marketing Software for Property Management Companies (2026) | BeltStack",
    description: "Compare the best email marketing software for property management companies: HubSpot, ActiveCampaign, and Mailchimp.",
    keywords: ["best email marketing software for property management companies", "property management email marketing software", "property management email tools"],
  },
  "pest-control": {
    title: "Best Email Marketing Software for Pest Control Businesses (2026) | BeltStack",
    description: "Compare the best email marketing software for pest control businesses: ActiveCampaign, Brevo, and Mailchimp.",
    keywords: ["best email marketing software for pest control businesses", "pest control email marketing software", "pest control email tools"],
  },
  "pool-service": {
    title: "Best Email Marketing Software for Pool Service Companies (2026) | BeltStack",
    description: "Compare the best email marketing software for pool service companies: MailerLite, Mailchimp, and Brevo.",
    keywords: ["best email marketing software for pool service companies", "pool service email marketing software", "pool maintenance email tools"],
  },
  "junk-removal": {
    title: "Best Email Marketing Software for Junk Removal Businesses (2026) | BeltStack",
    description: "Compare the best email marketing software for junk removal businesses: Brevo, Mailchimp, and ActiveCampaign.",
    keywords: ["best email marketing software for junk removal businesses", "junk removal email marketing software", "junk hauling email marketing"],
  },
  moving: {
    title: "Best Email Marketing Software for Moving Companies (2026) | BeltStack",
    description: "Compare the best email marketing software for moving companies: ActiveCampaign, HubSpot, and Mailchimp.",
    keywords: ["best email marketing software for moving companies", "moving company email marketing software", "moving email marketing tools"],
  },
  "appliance-repair": {
    title: "Best Email Marketing Software for Appliance Repair Businesses (2026) | BeltStack",
    description:
      "Compare the best email marketing software for appliance repair businesses in 2026: MailerLite for lean automations, Brevo for SMS plus email, and Mailchimp for integrations and fast campaigns.",
    keywords: ["best email marketing software for appliance repair businesses", "appliance repair email marketing", "appliance service email automation"],
  },
  "garage-door": {
    title: "Best Email Marketing Software for Garage Door Companies (2026) | BeltStack",
    description:
      "Find the best email marketing software for garage door companies in 2026: ActiveCampaign for quote-stage automation, Brevo for combined email and SMS, and Mailchimp for storm-ready campaigns.",
    keywords: ["best email marketing software for garage door companies", "garage door email marketing", "garage door installer email automation"],
  },
  locksmith: {
    title: "Best Email Marketing Software for Locksmith Businesses (2026) | BeltStack",
    description:
      "Choose email marketing software for locksmith businesses in 2026: Brevo for text-led operations, ActiveCampaign for segmented pipelines, and MailerLite for lean owner-run nurture.",
    keywords: ["best email marketing software for locksmith businesses", "locksmith email marketing", "locksmith SMS and email software"],
  },
  "flooring-contractors": {
    title: "Best Email Marketing Software for Flooring Contractors (2026) | BeltStack",
    description:
      "See the best email marketing software for flooring contractors in 2026: Mailchimp for visual campaigns, ActiveCampaign for estimate nurture, and Klaviyo when clean data supports segmentation.",
    keywords: ["best email marketing software for flooring contractors", "flooring contractor email marketing", "hardwood installer email campaigns"],
  },
  "fence-deck-builders": {
    title: "Best Email Marketing Software for Fence & Deck Builders (2026) | BeltStack",
    description:
      "Best email marketing software for fence and deck builders in 2026: MailerLite for simple beautiful sends, Mailchimp for integrations, and Brevo for weather and logistics SMS with email.",
    keywords: ["best email marketing software for fence and deck builders", "deck builder email marketing", "fence contractor email automation"],
  },
  "glass-window-installers": {
    title: "Best Email Marketing Software for Glass & Window Installers (2026) | BeltStack",
    description:
      "Compare email marketing software for glass and window installers in 2026: HubSpot for CRM-linked lifecycle, ActiveCampaign for behavior nurture, and Mailchimp for fast retail campaigns.",
    keywords: ["best email marketing software for glass and window installers", "window replacement email marketing", "glass company email automation"],
  },
  "concrete-contractors": {
    title: "Best Email Marketing Software for Concrete Contractors (2026) | BeltStack",
    description:
      "Top email marketing software for concrete contractors in 2026: HubSpot for pipeline reporting, Klaviyo for data-led retention plays, and ActiveCampaign for deep job-stage automation.",
    keywords: ["best email marketing software for concrete contractors", "concrete contractor email marketing", "flatwork contractor email automation"],
  },
  excavation: {
    title: "Best Email Marketing Software for Excavation Companies (2026) | BeltStack",
    description:
      "B2B-focused email marketing picks for excavation companies in 2026: HubSpot for CRM governance, ActiveCampaign for bid nurture, and Constant Contact for guided owner-led newsletters.",
    keywords: ["best email marketing software for excavation companies", "excavation contractor email marketing", "sitework company email campaigns"],
  },
  "auto-repair-shops": {
    title: "Best Email Marketing Software for Auto Repair Shops (2026) | BeltStack",
    description:
      "Best email marketing software for auto repair shops in 2026: Brevo for SMS plus email, ActiveCampaign for RO-triggered automation, and Mailchimp for high-volume promotional campaigns.",
    keywords: ["best email marketing software for auto repair shops", "auto repair email marketing", "mechanic shop email automation"],
  },
  "mobile-mechanics": {
    title: "Best Email Marketing Software for Mobile Mechanics (2026) | BeltStack",
    description:
      "Lean email marketing software for mobile mechanics in 2026: Brevo for coordinated SMS and email, MailerLite for simple road-friendly campaigns, and ActiveCampaign as you scale automations.",
    keywords: ["best email marketing software for mobile mechanics", "mobile mechanic email marketing", "roadside mechanic email tools"],
  },
  "cleaning-franchises": {
    title: "Best Email Marketing Software for Cleaning Franchises (2026) | BeltStack",
    description:
      "Email marketing software for cleaning franchises in 2026: HubSpot for franchisor CRM control, ActiveCampaign for playbook automation, and Klaviyo when event data powers retention analytics.",
    keywords: ["best email marketing software for cleaning franchises", "cleaning franchise email marketing", "maid service franchise email automation"],
  },
  "event-services": {
    title: "Best Email Marketing Software for Event Services (2026) | BeltStack",
    description:
      "Best email marketing software for event services in 2026: Mailchimp for fast visual campaigns, Klaviyo for behavioral segmentation, and Kit (ConvertKit) for story-driven audience nurture.",
    keywords: ["best email marketing software for event services", "event rental email marketing", "event company email automation"],
  },
  "home-inspectors": {
    title: "Best Email Marketing Software for Home Inspectors (2026) | BeltStack",
    description:
      "Compare email marketing software for home inspectors in 2026: MailerLite for neutral education, Constant Contact for guided support, and Mailchimp for multi-inspector integrations.",
    keywords: ["best email marketing software for home inspectors", "home inspector email marketing", "property inspection email campaigns"],
  },
};

export function getEmailMarketingBestForPageProps(slug: string): BestForTemplateProps | null {
  return EMAIL_MARKETING_BEST_FOR_BY_SLUG[slug] ?? null;
}

export function getEmailMarketingBestForSlugs(): string[] {
  return Object.keys(EMAIL_MARKETING_BEST_FOR_BY_SLUG);
}

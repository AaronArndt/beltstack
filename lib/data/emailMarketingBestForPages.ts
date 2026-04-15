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
};

export function getEmailMarketingBestForPageProps(slug: string): BestForTemplateProps | null {
  return EMAIL_MARKETING_BEST_FOR_BY_SLUG[slug] ?? null;
}

export function getEmailMarketingBestForSlugs(): string[] {
  return Object.keys(EMAIL_MARKETING_BEST_FOR_BY_SLUG);
}

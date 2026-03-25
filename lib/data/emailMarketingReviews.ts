import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import {
  getEmailMarketingAlternativeUrl,
  getEmailMarketingBestForUrl,
  getEmailMarketingCompareUrl,
  getEmailMarketingReviewUrl,
} from "@/lib/routes";
import { emailMarketingLogoForSlug } from "@/lib/data/emailMarketingLogos";

export type EmailMarketingReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const categoryHref = "/email-marketing";

function review(
  slug: string,
  toolName: string,
  rating: string,
  startingPrice: string,
  bestFor: string,
  visitUrl: string,
  compareA: { label: string; slug: string },
  compareB: { label: string; slug: string },
  opts: {
    quickVerdictParagraphs: string[];
    bestForEditorial: string;
    whoShouldAvoid: string;
    pricingSummary: string;
    pricingTiers: string;
    costVsCompetitors: string;
    contractorUse: string[];
    keyFeatures: { name: string; description: string }[];
    integrationsIntro: string;
    faqs: { q: string; a: string }[];
    alternativesPage?: string;
    thirdCompare?: { label: string; slug: string };
  }
): EmailMarketingReviewData {
  const compareLinks = [
    { label: compareA.label, href: getEmailMarketingCompareUrl(compareA.slug) },
    { label: compareB.label, href: getEmailMarketingCompareUrl(compareB.slug) },
    ...(opts.thirdCompare
      ? [{ label: opts.thirdCompare.label, href: getEmailMarketingCompareUrl(opts.thirdCompare.slug) }]
      : []),
  ];
  return {
    category: "Email Marketing",
    categoryHref,
    toolName,
    rating,
    startingPrice,
    bestFor,
    visitUrl,
    logoSrc: emailMarketingLogoForSlug(slug),
    quickVerdict: `${toolName} fits teams that want ${bestFor.toLowerCase()} without mismatched complexity.`,
    quickVerdictParagraphs: opts.quickVerdictParagraphs,
    ratingBreakdown: [
      { category: "Features", score: rating, explanation: "Depth of campaigns, automation, and segmentation for service workflows." },
      { category: "Pricing", score: "4.0", explanation: "Value depends on list size, seat model, and automation tier reality." },
      { category: "Ease of Use", score: "4.2", explanation: "Includes onboarding learning curve relative to automation power." },
      { category: "Support", score: "4.0", explanation: "Varies by plan; enterprise tiers unlock stronger success coverage." },
      { category: "Service-business fit", score: "4.3", explanation: "How naturally it supports reminders, nurture, and local trust." },
    ],
    compareLinks,
    pros: [
      "Ships campaigns quickly with modern templates",
      "Supports automations that follow real job milestones",
      "Integrates with CRM and scheduling stacks service teams already use",
    ],
    cons: [
      "Pricing escalates with contacts and advanced automation",
      "Requires someone to own list hygiene monthly",
      "Deep features demand structured onboarding, not weekend tinkering",
    ],
    bestForEditorial: opts.bestForEditorial,
    whoShouldAvoid: opts.whoShouldAvoid,
    pricingSummary: opts.pricingSummary,
    pricingTiers: opts.pricingTiers,
    costVsCompetitors: opts.costVsCompetitors,
    features: opts.keyFeatures.map((k) => k.name),
    keyFeatures: opts.keyFeatures,
    integrations: ["CRM and pipeline tools", "Scheduling and booking", "Form and website capture", "Zapier or native field-service connectors"],
    integrationsIntro: opts.integrationsIntro,
    contractorUse: opts.contractorUse,
    alternatives: [
      { name: "ActiveCampaign", href: getEmailMarketingReviewUrl("activecampaign"), description: "Deep automation + CRM alignment", logoSrc: emailMarketingLogoForSlug("activecampaign") },
      { name: "Mailchimp", href: getEmailMarketingReviewUrl("mailchimp"), description: "Approachable default for broad teams", logoSrc: emailMarketingLogoForSlug("mailchimp") },
      { name: "Klaviyo", href: getEmailMarketingReviewUrl("klaviyo"), description: "Behavior-first segmentation", logoSrc: emailMarketingLogoForSlug("klaviyo") },
    ],
    faqs: opts.faqs,
    relatedReading: [
      { label: "Best email marketing software (roundup)", href: "/email-marketing/best-email-marketing-software" },
      { label: "Email marketing comparisons hub", href: "/email-marketing/compare" },
      { label: "Best email marketing by scenario", href: "/email-marketing/best-for" },
      { label: "CRM software hub", href: "/crm" },
      { label: "Lead generation hub", href: "/lead-generation" },
      { label: "Website builders hub", href: "/website-builders" },
      { label: "SEO tools hub", href: "/seo-tools" },
      { label: "Reputation management hub", href: "/reputation-management" },
    ],
    methodology: {
      title: "How we review email marketing software",
      sub: "Workflow and ROI lens for service brands.",
      introParagraph:
        "We evaluate tools on whether real offices can run them weekly—segmentation, automation ownership, and cost at your list size.",
      bullets: [
        "We test mental models for follow-up after estimates and completed jobs.",
        "We compare annualized cost against automation depth actually used.",
        "We prioritize integration paths into CRM, scheduling, and lead capture.",
      ],
    },
    compareSectionTitle: "Compare with other email marketing platforms",
    bestPayrollSoftwareHref: "/email-marketing/best-email-marketing-software",
    compareHubHref: "/email-marketing/compare",
    compareHubLabel: "Compare email marketing software",
    bestRoundupLabel: "Best email marketing software (2026) — full roundup",
    bestForSectionTitle: "Best email software for different service scenarios",
    bestForSectionSub: "Match stack depth to trades, list size, and follow-up discipline.",
    scenarioLinks: [
      { label: "Small business", href: getEmailMarketingBestForUrl("small-business") },
      { label: "Contractors", href: getEmailMarketingBestForUrl("contractors") },
      { label: "HVAC", href: getEmailMarketingBestForUrl("hvac") },
      { label: "Home services", href: getEmailMarketingBestForUrl("home-services") },
    ],
    guideHubHref: "/email-marketing/guides",
    guideHubLabel: "Email marketing guides",
    popularIndustryLinks: [
      { label: "Best for plumbers", href: getEmailMarketingBestForUrl("plumbers") },
      { label: "Best for electricians", href: getEmailMarketingBestForUrl("electricians") },
      { label: "Best for HVAC", href: getEmailMarketingBestForUrl("hvac") },
      { label: "Best for contractors", href: getEmailMarketingBestForUrl("contractors") },
    ],
    ...(opts.alternativesPage
      ? {
          alternativesPageHref: getEmailMarketingAlternativeUrl(opts.alternativesPage),
          alternativesPageLabel: `Best ${toolName} alternatives (2026)`,
        }
      : {}),
  };
}

const DEFAULT_INTEGRATIONS_INTRO =
  "Most service companies should connect email to CRM or pipeline data, scheduling events, and website forms so automations mirror how jobs actually move.";

export const EMAIL_MARKETING_REVIEWS: Record<string, EmailMarketingReviewData> = {
  mailchimp: review("mailchimp", "Mailchimp", "4.5", "Free–paid tiers (contact-based)", "Approachable newsletters and starter automations", "https://mailchimp.com", { label: "Mailchimp vs Constant Contact", slug: "mailchimp-vs-constant-contact" }, { label: "Mailchimp vs ActiveCampaign", slug: "mailchimp-vs-activecampaign" }, {
    quickVerdictParagraphs: [
      "Mailchimp is the default starting point for owners who want credible campaigns without a dedicated marketing department—you can publish fast while experimenting with automation paths.",
      "Its strength is familiarity: hundreds of integrations, template libraries, and predictable editors that make weekly email realistic between dispatch and accounting tasks.",
      "Where teams outgrow Mailchimp is usually conditional logic depth and CRM-side orchestration; that is when ActiveCampaign or HubSpot comparisons matter.",
      "For contractors, the win is repeatable post-job or post-estimate touches that do not rely on a single person remembering to click send.",
    ],
    bestForEditorial:
      "Choose Mailchimp when you need polished creative, broad integrations, and a gentle ramp into automations while your list is still maturing.",
    whoShouldAvoid:
      "Avoid it (or plan a higher tier) if you require multi-branch approval flows, advanced scoring, or deeply nested branch logic tied to revenue objects.",
    pricingSummary:
      "Expect list-based pricing. Model next-year list size plus premium automations so renewal is not a surprise.",
    pricingTiers:
      "Plans stack by audience features, send limits, and advanced automation. Verify whether dynamic content and comparative reporting require Standard or Premium.",
    costVsCompetitors:
      "Mailchimp often wins on editor UX and marketplace size; ActiveCampaign/Klaviyo can beat it on automation ROI when complexity matches team capacity.",
    contractorUse: [
      "Send appointment prep tips after bookings confirm.",
      "Automate seasonal tune-up reminders for maintenance clients.",
      "Share testimonials after jobs close with links back to proposal pages.",
      "Run promos for slow weeks without rewriting creative from scratch.",
    ],
    keyFeatures: [
      { name: "Campaign editor + templates", description: "Fast iteration for newsletters and promos with reusable brand styles." },
      { name: "Customer journey builder", description: "Starter automation paths triggered by tags, dates, or lightweight behaviors." },
      { name: "Forms and landing pages", description: "Capture leads from website traffic and paid campaigns with mobile-ready layouts." },
      { name: "Reporting basics", description: "Open, click, and revenue-influenced signals depending on connected commerce." },
      { name: "Integrations", description: "Connect scheduling, CRM, and Zapier paths common in service tech stacks." },
    ],
    integrationsIntro: DEFAULT_INTEGRATIONS_INTRO,
    alternativesPage: "mailchimp",
    thirdCompare: { label: "Klaviyo vs Mailchimp", slug: "klaviyo-vs-mailchimp" },
    faqs: [
      { q: "Is Mailchimp good for contractors?", a: "Yes when the goal is dependable campaigns and simple nurture paths. Pair it with CRM notes or dispatch milestones so automation mirrors jobs." },
      { q: "When should I upgrade from Mailchimp’s free tier?", a: "When you need branded domains, advanced segmentation, higher send caps, or journeys beyond basic welcome flows—usually after you pass a few hundred engaged contacts." },
      { q: "Does Mailchimp replace my CRM?", a: "No. It complements CRM for messaging. Keep deals, tasks, and call outcomes in CRM while Mailchimp handles creative and delivery." },
      { q: "How does Mailchimp compare on cost?", a: "It is competitive for SMBs until lists balloon or automation tiers climb. Re-quote annually against ActiveCampaign and Brevo using the same contact count." },
      { q: "Can Mailchimp handle SMS?", a: "SMS exists as an add-on path depending on region and plan. If SMS is core, also evaluate Brevo for bundled pricing." },
      { q: "How do I measure if Mailchimp is working?", a: "Track booking-link clicks, reply rates on personalized follow-ups, and CRM stage progression after email touches—not opens alone." },
    ],
  }),

  "constant-contact": review("constant-contact", "Constant Contact", "4.3", "From ~$12/mo", "guided email for owner-led marketers", "https://www.constantcontact.com", { label: "Mailchimp vs Constant Contact", slug: "mailchimp-vs-constant-contact" }, { label: "Mailchimp vs ActiveCampaign", slug: "mailchimp-vs-activecampaign" }, {
    quickVerdictParagraphs: [
      "Constant Contact appeals to service owners who want hand-holding: clear onboarding, dependable templates, and support paths that assume you are not a full-time marketer.",
      "It shines when your calendar mixes community events, newsletter education, and occasional promos—common for local brands building word-of-mouth.",
      "Compared with Mailchimp, automation is less of a playground and more of a guided lane; that can reduce mistakes but also caps advanced experiments.",
      "Teams with heavy CRM-driven branching may still pair it with external automation or evaluate ActiveCampaign instead.",
    ],
    bestForEditorial:
      "Best for lean offices that prize simplicity, coaching, and quick wins over building elaborate automations on day one.",
    whoShouldAvoid:
      "Skip if you need deep conditional workflows, advanced scoring, or large-team approval governance typical of enterprise stacks.",
    pricingSummary:
      "Pricing typically rises with contacts and feature bundles such as event marketing modules.",
    pricingTiers:
      "Core email plans differ by contacts; add-ons may include event registration or social scheduling—validate what your branch truly uses.",
    costVsCompetitors:
      "Constant Contact can be cost-effective for straight campaigns; Mailchimp may win on integration breadth; ActiveCampaign wins on automation depth.",
    contractorUse: [
      "Promote seasonal service days and limited-time capacity windows.",
      "Send photo-based project updates to permissioned mailing lists.",
      "Share maintenance checklists before technician arrivals.",
      "Invite repeat clients to referral campaigns after five-star experiences.",
    ],
    keyFeatures: [
      { name: "Template gallery", description: "Service-friendly layouts for trust-building and promo blasts." },
      { name: "List segmentation basics", description: "Tag by service interest or geography to keep relevance high." },
      { name: "Event tools (when enabled)", description: "Useful for workshops, open houses, or community sponsorship follow-ups." },
      { name: "Reporting", description: "Straightforward engagement metrics for owners reviewing performance monthly." },
      { name: "Integrations", description: "Connect common SMB systems; verify your CRM and scheduling combo early in trial." },
    ],
    integrationsIntro: DEFAULT_INTEGRATIONS_INTRO,
    alternativesPage: "constant-contact",
    thirdCompare: { label: "Brevo vs Mailchimp", slug: "brevo-vs-mailchimp" },
    faqs: [
      { q: "Constant Contact vs Mailchimp for local services?", a: "Constant Contact can feel more guided; Mailchimp offers broader experimentation. Choose based on whether you want mentorship-style onboarding vs marketplace depth." },
      { q: "Is automation strong enough?", a: "For simple drip and date-based reminders, yes. For complex branching tied to pipeline stages, expect limitations." },
      { q: "Can I send transactional mail?", a: "Transactional needs vary—confirm deliverability features and whether transactional SMTP is required for invoices vs marketing-only sends." },
      { q: "Does it help with reviews?", a: "You can run email requests, but pair with reputation software if reviews are a full program, not a one-off template." },
      { q: "What support should I expect?", a: "Phone and chat positioning is part of the brand promise—use trials to test responsiveness for your time zone." },
      { q: "How do I succeed in the first 90 days?", a: "Define three repeatable journeys—post-job thank-you, seasonal tune-up, and dormant lead ping—before expanding creative variety." },
    ],
  }),

  activecampaign: review("activecampaign", "ActiveCampaign", "4.6", "From ~$29/mo", "behavior-based nurture and CRM-aware email", "https://www.activecampaign.com", { label: "Mailchimp vs ActiveCampaign", slug: "mailchimp-vs-activecampaign" }, { label: "Klaviyo vs Mailchimp", slug: "klaviyo-vs-mailchimp" }, {
    quickVerdictParagraphs: [
      "ActiveCampaign is built for operators who want email to react: opens, clicks, stage changes, and task creation should cascade automatically when a homeowner hesitates on an estimate.",
      "It is a frequent upgrade path for service brands that outgrew simple blast calendars and need segmentation based on job type, lead source, or technician notes mirrored in CRM fields.",
      "Expect a learning curve proportional to the power—you need someone internally who treats automation like a living diagram, not set-and-forget.",
      "When deployed well, it reduces manual follow-up on stalled opportunities and standardizes seasonal pushes across branches.",
    ],
    bestForEditorial:
      "Pick ActiveCampaign if your bottleneck is systematic follow-up—not prettier newsletters—and you can dedicate time to automation QA monthly.",
    whoShouldAvoid:
      "Avoid if your team cannot maintain lists, tags, and triggers; under-maintained automation sends wrong messages faster than manual email.",
    pricingSummary:
      "Plans combine list tiers with feature bundles such as CRM and sales automation—price against engaged contacts, not total database clutter.",
    pricingTiers:
      "Higher tiers unlock deep integrations, split automation testing, and more seats. Map must-have objects before purchasing.",
    costVsCompetitors:
      "Versus Mailchimp, you pay for logic depth; versus HubSpot, you may save if you do not need the entire marketing enterprise suite.",
    contractorUse: [
      "Trigger nurture sequences when estimates sit unapproved for 48 hours.",
      "Rotate seasonal maintenance offers using weather or date-based rules (where integrated).",
      "Assign tasks to sales when high-value commercial leads engage with email.",
      "Re-engage dormant residential lists with proof-forward case studies.",
    ],
    keyFeatures: [
      { name: "Automation builder", description: "Branching workflows with goals, waits, and tags aligned to real pipeline stages." },
      { name: "Deal CRM objects", description: "Keep pipeline context beside campaigns so messaging matches pursuit vs nurture." },
      { name: "Site tracking (when configured)", description: "React when prospects revisit pricing or service pages before calling." },
      { name: "Deliverability toolkit", description: "Monitoring and list hygiene aids to protect domain reputation." },
      { name: "Integrated SMS (plan-dependent)", description: "Pair urgent reminders with email storytelling when compliant for your region." },
    ],
    integrationsIntro:
      "Connect CRM fields, schedulers, and form tools so triggers reflect technician appointments and job completions—not only newsletter clicks.",
    alternativesPage: "activecampaign",
    thirdCompare: { label: "Brevo vs Mailchimp", slug: "brevo-vs-mailchimp" },
    faqs: [
      { q: "Is ActiveCampaign overkill for a 5-person shop?", a: "Sometimes yes—if you only send monthly newsletters, MailerLite or Mailchimp may fit. Choose ActiveCampaign when follow-up discipline drives revenue." },
      { q: "How is it different from HubSpot?", a: "HubSpot bundles a broader growth suite natively. ActiveCampaign can be deeper on automation economics if CRM needs stay focused." },
      { q: "Can technicians trigger emails?", a: "Indirectly—through CRM stage changes, tags, or forms filled from the field. Design governance so field devices do not spam clients." },
      { q: "What is the biggest implementation mistake?", a: "Building 20 automations before documenting one ideal customer journey. Start with three high-impact flows and measure." },
      { q: "Does it help with SMS?", a: "Add-ons exist—compare bundled Brevo pricing if SMS volume is central." },
      { q: "How do I evaluate ROI?", a: "Compare booked jobs influenced by automated touches vs manual follow-up baselines using CRM reporting and call-tracking tags." },
    ],
  }),

  "hubspot-email-marketing": review("hubspot-email-marketing", "HubSpot", "4.4", "Free–paid Marketing Hub tiers", "teams living inside HubSpot CRM", "https://www.hubspot.com/products/marketing", { label: "Mailchimp vs ActiveCampaign", slug: "mailchimp-vs-activecampaign" }, { label: "Klaviyo vs Mailchimp", slug: "klaviyo-vs-mailchimp" }, {
    quickVerdictParagraphs: [
      "Email in HubSpot makes sense when your company already treats HubSpot as the source of truth—contacts, tickets, deals, and dashboards should not fragment across tools.",
      "Campaign drag-and-drop editors are only part of the story; the real win is unified reporting from first form fill through closed job revenue when adoption is disciplined.",
      "Pricing can jump as marketing contacts and feature tiers climb, so model growth honestly—otherwise you pay enterprise prices for SMB usage patterns.",
      "For multi-location service brands with inbound programs, HubSpot can align marketing, sales, and customer success touches around one timeline.",
    ],
    bestForEditorial:
      "Best when your team commits to HubSpot operations—forms, lists, workflows, and CRM cleanliness—not just using it as another blast tool.",
    whoShouldAvoid:
      "Avoid standalone email-only use cases unless you plan to adopt the broader Hub; other vendors may be more cost-effective for narrow needs.",
    pricingSummary:
      "Marketing Hub pricing scales with marketing contacts and required hubs—include onboarding and template build time in ROI math.",
    pricingTiers:
      "Starter introduces core automation; Professional unlocks advanced attribution and customization. Map required objects before signing.",
    costVsCompetitors:
      "Against ActiveCampaign, HubSpot can be pricier but replaces multiple systems if fully adopted. Against Mailchimp, HubSpot wins unified CRM narratives.",
    contractorUse: [
      "Nurture homeowner leads captured from website quote requests automatically.",
      "Use deal-stage emails before technician dispatch for upsell readiness on large jobs.",
      "Send customer marketing with service-line personalization using CRM properties.",
      "Coordinate franchise or multi-branch templates with centralized governance.",
    ],
    keyFeatures: [
      { name: "CRM-native lists", description: "Segment by lifecycle stage, service line, and engagement without exporting spreadsheets." },
      { name: "Workflow automation", description: "Branch internal tasks and customer emails from the same logic engine." },
      { name: "Landing pages + forms", description: "Convert SEO and ad traffic into subscribers tied to known campaigns." },
      { name: "Reporting", description: "Connect marketing influence to revenue when deals stay in-system." },
      { name: "Content tools", description: "Blogs and resources help longer buyer education common in premium trades." },
    ],
    integrationsIntro:
      "Leverage native CRM connections first; augment with integrations only after core objects (contacts, companies, deals) are trusted.",
    alternativesPage: "hubspot-email-marketing",
    thirdCompare: { label: "Mailchimp vs Constant Contact", slug: "mailchimp-vs-constant-contact" },
    faqs: [
      { q: "Should a contractor use HubSpot for email only?", a: "Rarely—value rises when CRM, deals, and follow-up tasks live together. Otherwise compare lighter tools." },
      { q: "Is HubSpot too expensive for residential HVAC?", a: "It can be if lists are small—Starter may fit, but verify marketing contact definitions vs your database hygiene." },
      { q: "How does deliverability compare?", a: "Solid when authentication (SPF/DKIM/DMARC) is configured and lists are clean—no vendor replaces good list practices." },
      { q: "Can HubSpot replace Mailchimp?", a: "Yes for teams willing to migrate templates, forms, and journeys. Budget migration and QA time." },
      { q: "What is the best success metric?", a: "Opportunities influenced and average days-to-close after email sequences—not just click rates." },
      { q: "How does it tie to reviews?", a: "Trigger post-job emails that link to review requests, coordinated with reputation programs for compliant wording." },
    ],
  }),

  klaviyo: review("klaviyo", "Klaviyo", "4.5", "Free–paid (profile-based)", "data-rich segmentation and revenue-aware flows", "https://www.klaviyo.com", { label: "Klaviyo vs Mailchimp", slug: "klaviyo-vs-mailchimp" }, { label: "Mailchimp vs ActiveCampaign", slug: "mailchimp-vs-activecampaign" }, {
    quickVerdictParagraphs: [
      "Klaviyo treats email like a scientific instrument: Profiles, events, and metrics should align so every send answers a business question—not just calendar filler.",
      "Service businesses with structured data—memberships, equipment ages, seasonality—can unlock powerful segmentation that generic blasts cannot match.",
      "The platform rewards hygiene; neglected profiles or sloppy event tracking will waste spend fast at higher tiers.",
      "If your team lacks someone to steward data definitions, start smaller with Mailchimp/MailerLite then graduate when reporting discipline exists.",
    ],
    bestForEditorial:
      "Choose Klaviyo when you can define meaningful segments (membership, equipment type, lead temperature) and connect events from CRM or bookings.",
    whoShouldAvoid:
      "Avoid if you only send one monthly newsletter and have little structured customer data—you will not leverage the core value.",
    pricingSummary:
      "Costs track active profiles and send volume; prune unengaged contacts quarterly to control renewals.",
    pricingTiers:
      "Higher tiers bring predictive analytics and advanced reporting—validate whether your staff consumes those dashboards weekly.",
    costVsCompetitors:
      "More expensive than MailerLite at scale, potentially comparable to premium Mailchimp—trade-off is analytics depth and event rigor.",
    contractorUse: [
      "Target maintenance plan renewals based on anniversary dates.",
      "Send win-back campaigns when equipment warranties lapse (with ethical data use).",
      "Split messaging for commercial vs residential cohorts using profile rules.",
      "Highlight high-margin add-ons to segments with historical purchase patterns.",
    ],
    keyFeatures: [
      { name: "Flows", description: "Trigger multi-step journeys off events like booked jobs or estimate views when integrations exist." },
      { name: "Segmentation", description: "Layer conditions across properties, engagement, and predictive metrics." },
      { name: "Reporting", description: "Revenue-centric summaries for teams disciplined about UTM and purchase tracking." },
      { name: "Forms", description: "Capture and enrich profiles from site interactions." },
      { name: "Integrations", description: "Commerce-leaning connectors still help many hybrid product+service operators." },
    ],
    integrationsIntro:
      "Invest in correct event names from CRM, scheduling, and billing integrations—flows are only as accurate as the data feeding them.",
    alternativesPage: "klaviyo",
    thirdCompare: { label: "Kit vs Mailchimp", slug: "convertkit-vs-mailchimp" },
    faqs: [
      { q: "Is Klaviyo only for ecommerce?", a: "No—service firms with rich behavioral data benefit too, but you need structured events worth automating." },
      { q: "How does Klaviyo compare to Mailchimp?", a: "Klaviyo emphasizes analytics and segmentation depth; Mailchimp emphasizes accessibility and creative speed." },
      { q: "Can I run simple newsletters?", a: "Yes, but you are paying for analytics DNA—consider lighter tools if newsletters are the only use case." },
      { q: "What data do I need day one?", a: "Minimum viable: tags for service line, lifecycle stage, and key dates like install or last service." },
      { q: "Does Klaviyo handle SMS?", a: "Yes in many markets—coordinate compliance, quiet hours, and opt-in language with legal guidance." },
      { q: "How do I control costs?", a: "Suppress unengaged profiles, enforce double opt-in where appropriate, and archive stale leads regularly." },
    ],
  }),

  convertkit: review("convertkit", "Kit", "4.4", "Free–paid (subscriber-based)", "story-driven nurture for premium and educational offers", "https://kit.com", { label: "Kit vs Mailchimp", slug: "convertkit-vs-mailchimp" }, { label: "Klaviyo vs Mailchimp", slug: "klaviyo-vs-mailchimp" }, {
    quickVerdictParagraphs: [
      "Kit fits service brands that teach: maintenance academies, safety explainers, and long-form case studies that move a premium buyer over multiple emails.",
      "Its tag-centric automations map well to ‘if someone attends webinar X, send series Y’ patterns common in consultative trades.",
      "Deliverability and simplicity are strengths; deep local-service CRM orchestration may still require integrations or companion tools.",
      "Compared with Mailchimp, creative tooling is narrower but automation storytelling is often faster to reason about.",
    ],
    bestForEditorial:
      "Best for premium contractors, designers, and consultants who sell expertise before price and need clean sequences without enterprise bloat.",
    whoShouldAvoid:
      "Avoid if you require dense multi-location governance or heavy CRM objects inside the same UI—HubSpot may fit better.",
    pricingSummary:
      "Pricing scales with subscribers and feature bundles like advanced reporting; annual billing saves materially.",
    pricingTiers:
      "Creator vs Pro tiers split advanced features; map needs for newsletter referral tools, sparkloop, etc., before upgrading.",
    costVsCompetitors:
      "Often cheaper than HubSpot Marketing Hub suites; competitive with Mailchimp depending on automation tier and list size.",
    contractorUse: [
      "Deliver onboarding education after large retrofit deposits.",
      "Sell maintenance memberships through educational drips.",
      "Follow up long-cycle commercial bids with proof-rich emails.",
      "Promote workshops or in-person assessments with RSVP-style funnels.",
    ],
    keyFeatures: [
      { name: "Visual automations", description: "Readable paths for small teams documenting customer journeys." },
      { name: "Tags and segments", description: "Lightweight logic without enterprise overhead." },
      { name: "Broadcasts", description: "Simple sends when seasonal weather shifts demand immediate promo pushes." },
      { name: "Landing pages", description: "Capture leads for specific offers or gated checklists." },
      { name: "Commerce hooks", description: "Useful when selling digital guides or paid newsletters alongside services." },
    ],
    integrationsIntro: DEFAULT_INTEGRATIONS_INTRO,
    alternativesPage: "convertkit",
    thirdCompare: { label: "Mailchimp vs ActiveCampaign", slug: "mailchimp-vs-activecampaign" },
    faqs: [
      { q: "Kit vs Mailchimp?", a: "Kit favors creators and education funnels; Mailchimp emphasizes broad market fit and integration breadth." },
      { q: "Can I manage large commercial lists?", a: "Yes, but verify deliverability practices and whether CRM integration depth matches enterprise expectations." },
      { q: "SMS support?", a: "Limited relative to Brevo—pair tools if SMS is mission-critical." },
      { q: "Is it good for seasonal contractors?", a: "Yes when you build repeatable seasonal sequences during winter planning—not last-minute spring scrambles." },
      { q: "How technical is setup?", a: "Moderate—less than massive MAPs, more than one-click newsletter tools." },
      { q: "Best success metric?", a: "Revenue per subscriber on nurture paths plus workshop/show-up rates for event campaigns." },
    ],
  }),

  brevo: review("brevo", "Brevo", "4.2", "Free–paid (send-based tiers)", "email + SMS + transactional in one stack", "https://www.brevo.com", { label: "Brevo vs Mailchimp", slug: "brevo-vs-mailchimp" }, { label: "Mailchimp vs Constant Contact", slug: "mailchimp-vs-constant-contact" }, {
    quickVerdictParagraphs: [
      "Brevo is pragmatic: one vendor for promotional email, urgent SMS, and transactional messages like appointment confirmations when configured correctly.",
      "Teams frustrated by juggling Mailchimp plus separate SMS often trial Brevo for simplified billing—especially multi-channel operators in regulated regions.",
      "Automation UX is capable but not as richly CRM-aware as ActiveCampaign without integrations.",
      "Watch SMS credit burn; urgent campaigns spike usage fast if templates are not throttled intelligently.",
    ],
    bestForEditorial:
      "Choose Brevo when you want multi-channel execution under one roof and pricing aligned more closely to sends than fancy dashboards alone.",
    whoShouldAvoid:
      "Avoid if you need deep CRM branching or enterprise approval choreography without external systems doing heavy lifting.",
    pricingSummary:
      "Monitor email send caps, SMS segments, and transactional email volumes separately—they bill differently.",
    pricingTiers:
      "Higher tiers unlock automation length, landing pages, and remove branding—match tier to operational reality.",
    costVsCompetitors:
      "Against Mailchimp, evaluate SMS bundling; against ActiveCampaign, evaluate CRM sophistication vs simplicity.",
    contractorUse: [
      "Send day-before appointment reminders via SMS plus detail-rich email instructions.",
      "Push seasonal capacity announcements across channels.",
      "Deliver invoice and receipt emails when connected to billing triggers.",
      "Trigger short surveys after service to feed QA (with consent).",
    ],
    keyFeatures: [
      { name: "Email campaigns", description: "Traditional newsletter and promo builder with template library." },
      { name: "SMS campaigns", description: "Pair urgency with compliance templates and quiet hours settings." },
      { name: "Automation", description: "Multi-step flows bridging channels when credits allow." },
      { name: "Transactional email", description: "Useful for confirmations when wired to scheduling or billing systems." },
      { name: "CRM lite", description: "Basic pipeline tracking for teams not ready for giant CRM installs." },
    ],
    integrationsIntro:
      "Prioritize integrations that feed appointment timestamps and job statuses so SMS timing feels helpful, not spammy.",
    alternativesPage: "brevo",
    thirdCompare: { label: "Mailchimp vs ActiveCampaign", slug: "mailchimp-vs-activecampaign" },
    faqs: [
      { q: "Brevo vs Mailchimp for contractors?", a: "Pick Brevo when bundled SMS/transactional economics beat separate vendors; pick Mailchimp when integration breadth outweighs bundling." },
      { q: "Is SMTP reliable?", a: "Generally yes with proper DNS authentication—test deliverability during pilot with real appointment volume." },
      { q: "Compliance considerations?", a: "Maintain documented consent for SMS, include opt-outs, and align with regional rules—same discipline as email." },
      { q: "Can it replace CRM?", a: "Light teams maybe; growing multi-branch orgs usually pair with dedicated CRM for pipeline truth." },
      { q: "What is the biggest cost risk?", a: "Underestimated SMS usage—model peak season reminder volumes." },
      { q: "How to measure success?", a: "Appointment show-rate improvements, fewer no-shows, and downstream upsell attach after educational email+SMS sequences." },
    ],
  }),

  mailerlite: review("mailerlite", "MailerLite", "4.3", "Free–paid", "lean offices wanting modern design without enterprise MAPs", "https://www.mailerlite.com", { label: "Kit vs Mailchimp", slug: "convertkit-vs-mailchimp" }, { label: "Klaviyo vs Mailchimp", slug: "klaviyo-vs-mailchimp" }, {
    quickVerdictParagraphs: [
      "MailerLite delivers a calm interface with enough automation for monthly newsletters, promos, and straightforward drip sequences—ideal when nobody has ‘marketing engineer’ in their title.",
      "Landing page and form tooling can replace cobbled tools for small operators consolidating spend.",
      "You will eventually feel ceilings if you need multi-object CRM triggers or advanced predictive segmentation—plan migrations early.",
      "For plumbers, electricians, and landscapers with tight admin teams, it is often the sweet spot between Constant Contact simplicity and ActiveCampaign depth.",
    ],
    bestForEditorial:
      "Pick MailerLite when creative polish matters, lists are modest, and automation needs stay structured but not labyrinthine.",
    whoShouldAvoid:
      "Avoid if you require enterprise-wide governance or deep sales orchestration without a separate CRM doing that work.",
    pricingSummary:
      "Annual discounts are meaningful—quote using engaged subscribers, not your entire dusty database.",
    pricingTiers:
      "Advanced tiers unlock multi-trigger automations and preference centers; compare against ActiveCampaign if logic multiplies.",
    costVsCompetitors:
      "Typically lowers total cost than Klaviyo/HubSpot at similar send volumes; feature depth reflects price.",
    contractorUse: [
      "Send polished monthly trust newsletters with job photos.",
      "Automate welcome sequences after form fills from SEO landing pages.",
      "Push limited-time service bundles during shoulder seasons.",
      "Collect subscriber preferences to reduce unsubscribe churn.",
    ],
    keyFeatures: [
      { name: "Email editor", description: "Modern blocks and saved modules accelerate weekly publishing." },
      { name: "Automations", description: "Multi-step flows for onboarding and re-engagement with monitoring dashboards." },
      { name: "Websites and forms", description: "Capture leads without an extra landing page vendor when possible." },
      { name: "Segmentation", description: "Tag and group subscribers around geography or service interest." },
      { name: "Reporting", description: "Understand engagement enough for SMB decision-making without analysis paralysis." },
    ],
    integrationsIntro: DEFAULT_INTEGRATIONS_INTRO,
    alternativesPage: "mailerlite",
    thirdCompare: { label: "Brevo vs Mailchimp", slug: "brevo-vs-mailchimp" },
    faqs: [
      { q: "MailerLite vs Mailchimp?", a: "MailerLite often wins on UI simplicity and price; Mailchimp wins on integration marketplace size and brand familiarity." },
      { q: "Enough automation for contractors?", a: "Yes for standard post-lead and seasonal flows; advanced CRM triggers may need ActiveCampaign." },
      { q: "Transactional email?", a: "Confirm whether your use case requires separate SMTP or if marketing sends suffice." },
      { q: "Multi-user teams?", a: "Higher tiers add collaboration—plan roles if office and agency both touch content." },
      { q: "Deliverability tips?", a: "Authenticate domains, warm new IPs carefully if dedicated sending, and purge disengaged contacts quarterly." },
      { q: "How to prove ROI?", a: "Tag links to booking flows and reconcile with CRM won jobs monthly." },
    ],
  }),
};

export function getEmailMarketingReviewBySlug(slug: string): EmailMarketingReviewData | undefined {
  return EMAIL_MARKETING_REVIEWS[slug];
}

export function getEmailMarketingReviewSlugs(): string[] {
  return Object.keys(EMAIL_MARKETING_REVIEWS);
}

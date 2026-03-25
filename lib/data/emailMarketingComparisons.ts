import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  EMAIL_MARKETING_REGISTRY_SUPPLEMENT,
  TOP_PICKS,
} from "@/lib/data/emailMarketingBestEmailMarketingSoftware";
import {
  getEmailMarketingAlternativeUrl,
  getEmailMarketingBestForUrl,
  getEmailMarketingCompareUrl,
  getEmailMarketingReviewUrl,
} from "@/lib/routes";
import { emailMarketingLogoForSlug } from "@/lib/data/emailMarketingLogos";

const EMAIL_MARKETING_ALT_PAGE_SLUGS = new Set<string>([
  ...TOP_PICKS.map((p) => p.slug),
  ...EMAIL_MARKETING_REGISTRY_SUPPLEMENT.map((p) => p.slug),
]);

function getEmailMarketingProductDisplayName(slug: string): string | undefined {
  return (
    TOP_PICKS.find((p) => p.slug === slug)?.name ??
    EMAIL_MARKETING_REGISTRY_SUPPLEMENT.find((p) => p.slug === slug)?.name
  );
}

export function getEmailMarketingCompareUrlFromSlug(slug: string): string {
  return `/email-marketing/compare/${slug}`;
}

const TRADE_LINKS = [
  { label: "Best email marketing for contractors", href: getEmailMarketingBestForUrl("contractors") },
  { label: "Best for small business", href: getEmailMarketingBestForUrl("small-business") },
  { label: "Best for HVAC", href: getEmailMarketingBestForUrl("hvac") },
  { label: "Best for home services", href: getEmailMarketingBestForUrl("home-services") },
];

const P = {
  mailchimp: {
    name: "Mailchimp",
    slug: "mailchimp",
    reviewHref: getEmailMarketingReviewUrl("mailchimp"),
    logoSrc: emailMarketingLogoForSlug("mailchimp"),
    visitUrl: "https://mailchimp.com",
    bestForSummary: "Friendly all-purpose email with massive integration reach.",
    rating: "4.5",
    startingPrice: "Free–paid (contact-based)",
  },
  "constant-contact": {
    name: "Constant Contact",
    slug: "constant-contact",
    reviewHref: getEmailMarketingReviewUrl("constant-contact"),
    logoSrc: emailMarketingLogoForSlug("constant-contact"),
    visitUrl: "https://www.constantcontact.com",
    bestForSummary: "Guided onboarding for owners who want simple wins fast.",
    rating: "4.3",
    startingPrice: "From ~$12/mo",
  },
  activecampaign: {
    name: "ActiveCampaign",
    slug: "activecampaign",
    reviewHref: getEmailMarketingReviewUrl("activecampaign"),
    logoSrc: emailMarketingLogoForSlug("activecampaign"),
    visitUrl: "https://www.activecampaign.com",
    bestForSummary: "Automation + CRM depth for behavior-driven follow-up.",
    rating: "4.6",
    startingPrice: "From ~$29/mo",
  },
  klaviyo: {
    name: "Klaviyo",
    slug: "klaviyo",
    reviewHref: getEmailMarketingReviewUrl("klaviyo"),
    logoSrc: emailMarketingLogoForSlug("klaviyo"),
    visitUrl: "https://www.klaviyo.com",
    bestForSummary: "Profiles, events, and analytics-first segmentation.",
    rating: "4.5",
    startingPrice: "Free–paid (profile-based)",
  },
  convertkit: {
    name: "Kit",
    slug: "convertkit",
    reviewHref: getEmailMarketingReviewUrl("convertkit"),
    logoSrc: emailMarketingLogoForSlug("convertkit"),
    visitUrl: "https://kit.com",
    bestForSummary: "Creator-style nurture paths and story-driven sequences.",
    rating: "4.4",
    startingPrice: "Free–paid",
  },
  brevo: {
    name: "Brevo",
    slug: "brevo",
    reviewHref: getEmailMarketingReviewUrl("brevo"),
    logoSrc: emailMarketingLogoForSlug("brevo"),
    visitUrl: "https://www.brevo.com",
    bestForSummary: "Bundled email, SMS, and transactional sends.",
    rating: "4.2",
    startingPrice: "Free–paid (send-based)",
  },
} as const;

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  return slugs
    .filter((s) => EMAIL_MARKETING_ALT_PAGE_SLUGS.has(s))
    .map((s) => {
      const name = getEmailMarketingProductDisplayName(s);
      if (!name) return null;
      return { label: `Best ${name} alternatives (ranked)`, href: getEmailMarketingAlternativeUrl(s) };
    })
    .filter((x): x is { label: string; href: string } => x != null);
}

function build(
  slug: string,
  a: keyof typeof P,
  b: keyof typeof P,
  summary: string,
  extra: Partial<
    Pick<
      ComparisonTemplateProps,
      | "decisionGuideA"
      | "decisionGuideB"
      | "heroCallouts"
      | "quickVerdictParagraphs"
      | "featureComparison"
      | "pricingComparison"
      | "prosConsA"
      | "prosConsB"
      | "bestFor"
      | "faqs"
      | "sidebarWinners"
    >
  >
): [string, ComparisonTemplateProps] {
  const pa = P[a];
  const pb = P[b];
  const defaultQuick: string[] = [
    summary,
    "Most service businesses should decide based on automation depth you will actually maintain monthly—not the longest feature list on a pricing page.",
    "Pilot with three real journeys: post-estimate nurture, post-job follow-up, and one seasonal push. If a platform cannot ship those in 45 days, pause the rollout.",
  ];
  return [
    slug,
    {
      productA: pa,
      productB: pb,
      categoryHref: "/email-marketing",
      categoryLabel: "Email Marketing",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} if you prioritize ${pa.bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${pb.name} if you prioritize ${pb.bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: extra.quickVerdictParagraphs ?? defaultQuick,
      decisionGuideA: extra.decisionGuideA,
      decisionGuideB: extra.decisionGuideB,
      heroCallouts: extra.heroCallouts,
      featureComparison:
        extra.featureComparison ??
        [
          { feature: "Marketing automation depth", productA: "Strong–very strong", productB: "Moderate–strong", supportA: "supported", supportB: "supported" },
          { feature: "SMS / transactional bundles", productA: "Varies by vendor", productB: "Varies by vendor", supportA: "partial", supportB: "partial" },
          { feature: "CRM / pipeline alignment", productA: "Varies", productB: "Varies", supportA: "partial", supportB: "partial" },
          { feature: "Ease for non-marketers", productA: "Varies", productB: "Varies", supportA: "partial", supportB: "partial" },
          { feature: "Segmentation for local services", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
        ],
      pricingComparison:
        extra.pricingComparison ??
        "Both vendors price off audience size, feature tiers, and add-on channels. Annualize using next year’s expected contacts and any SMS/transactional volume—not today’s list snapshot.",
      prosConsA: extra.prosConsA ?? {
        pros: [`${pa.name} maps well to ${pa.bestForSummary.toLowerCase()}`, "Strong fit when workflow ownership is clear"],
        cons: ["Total cost can outpace expectations as lists grow", "Sophistication still needs internal maintenance"],
      },
      prosConsB: extra.prosConsB ?? {
        pros: [`${pb.name} aligns with ${pb.bestForSummary.toLowerCase()}`, "Useful when team capacity matches product strengths"],
        cons: ["May require integrations for advanced CRM stories", "Automation mistakes possible without QA"],
      },
      bestFor:
        extra.bestFor ??
        [
          { heading: "When to favor product A", body: `Choose ${pa.name} when its default workflows match how your office already schedules follow-ups and approvals.` },
          { heading: "When to favor product B", body: `Choose ${pb.name} when its strengths map to your bottleneck—speed, guidance, bundling, or analytics.` },
          { heading: "Operational test", body: "Run identical campaigns in trial: same creative, segments, and success metrics, then compare errors and time-to-publish." },
        ],
      alternatives: [
        { name: "ActiveCampaign", href: getEmailMarketingReviewUrl("activecampaign"), logoSrc: emailMarketingLogoForSlug("activecampaign"), description: "Automation-first option" },
        { name: "MailerLite", href: getEmailMarketingReviewUrl("mailerlite"), logoSrc: emailMarketingLogoForSlug("mailerlite"), description: "Lean stack" },
        { name: "Brevo", href: getEmailMarketingReviewUrl("brevo"), logoSrc: emailMarketingLogoForSlug("brevo"), description: "Email + SMS bundle" },
      ],
      faqs:
        extra.faqs ??
        [
          { q: `Should a local contractor pick ${pa.name} or ${pb.name}?`, a: summary },
          { q: "How long should we trial?", a: "Minimum 30 days with live automations, not sandbox demos—measure booking-link clicks and CRM stage movement." },
          { q: "What stack fits CRM-heavy teams?", a: "If CRM tasks and deal stages drive messaging, bias toward tools with native or tight CRM sync (often ActiveCampaign or HubSpot elsewhere in our guides)." },
          { q: "How do we budget accurately?", a: "Export inactive contacts, define SMS usage, and include template build time; most overruns come from neglected hygiene or add-on channels." },
        ],
      sidebarWinners: extra.sidebarWinners ?? [
        { label: "Fastest to first campaign", winner: "A" },
        { label: "Automation depth", winner: "B" },
      ],
      moreComparisons: [
        { label: "Best email marketing software roundup", href: "/email-marketing/best-email-marketing-software" },
        { label: "Email marketing comparisons hub", href: "/email-marketing/compare" },
        { label: "Mailchimp vs Constant Contact", href: getEmailMarketingCompareUrl("mailchimp-vs-constant-contact") },
        { label: "Mailchimp vs ActiveCampaign", href: getEmailMarketingCompareUrl("mailchimp-vs-activecampaign") },
        { label: "Klaviyo vs Mailchimp", href: getEmailMarketingCompareUrl("klaviyo-vs-mailchimp") },
        { label: "Kit vs Mailchimp", href: getEmailMarketingCompareUrl("convertkit-vs-mailchimp") },
        { label: "Brevo vs Mailchimp", href: getEmailMarketingCompareUrl("brevo-vs-mailchimp") },
        ...alternativesPageLinksForSlugs([pa.slug, pb.slug]),
        { label: "Best email marketing by scenario", href: "/email-marketing/best-for" },
        { label: "CRM software hub", href: "/crm" },
        { label: "Lead generation hub", href: "/lead-generation" },
        { label: "Website builders hub", href: "/website-builders" },
        { label: "SEO tools hub", href: "/seo-tools" },
        { label: "Reputation management hub", href: "/reputation-management" },
      ],
      relevantTradeLinks: TRADE_LINKS,
    },
  ];
}

const entries: [string, ComparisonTemplateProps][] = [
  build("mailchimp-vs-constant-contact", "mailchimp", "constant-contact", "Mailchimp wins on integration breadth and creative experimentation; Constant Contact wins when you want guided simplicity and support-forward onboarding for a smaller team.", {
    quickVerdictParagraphs: [
      "If your office can own email weekly without a marketing hire, Mailchimp’s templates, integrations, and journey builder usually pull ahead once you pass basic newsletters.",
      "Constant Contact stays competitive for community-oriented local brands that mix events, simple promos, and human support when automation needs stay modest.",
      "Contractors deciding between them should script three journeys in trial: estimate follow-up, job-complete thank-you with review link, and a seasonal tune-up offer—whichever platform gets those live faster with fewer errors should earn the contract.",
      "Price check both vendors using the same active contacts; stale lists punish Mailchimp and Constant Contact alike at renewal.",
    ],
    decisionGuideA: [
      "You already rely on many SaaS tools and want plug-and-play integrations.",
      "You plan to grow into multi-step journeys within the next two quarters.",
      "Your team is comfortable learning software with online resources.",
    ],
    decisionGuideB: [
      "You want phone/chat support prominence for non-technical owners.",
      "Campaigns are mostly monthly newsletters with light segmentation.",
      "You value guided onboarding over maximum automation depth on day one.",
    ],
    heroCallouts: [
      { label: "Integration marketplace", winner: "A", reason: "Mailchimp’s ecosystem is broader for stitching scheduling and CRM data." },
      { label: "Hand-holding onboarding", winner: "B", reason: "Constant Contact markets itself around guided success for beginners." },
    ],
    featureComparison: [
      { feature: "Automation builder depth", productA: "Strong", productB: "Moderate", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Template + creative speed", productA: "Very strong", productB: "Strong", supportA: "supported", supportB: "supported", stronger: "A" },
      { feature: "Owner-friendly support positioning", productA: "Good", productB: "Very strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Multi-channel (SMS add-ons)", productA: "Add-on path", productB: "Add-on path", supportA: "partial", supportB: "partial" },
      { feature: "CRM-style branching", productA: "Moderate (tiered)", productB: "Light–moderate", supportA: "partial", supportB: "partial" },
    ],
    pricingComparison:
      "Both rise with contacts and selected feature bundles. Mailchimp’s tiers can escalate quickly if you need Premium automation or advanced segmentation; Constant Contact may bundle event features you do or do not need—trim unused modules before checkout.",
    prosConsA: {
      pros: ["Massive integration catalog", "Mature template ecosystem", "Room to grow automation without switching vendors immediately"],
      cons: ["Premium capabilities can get pricey", "Sophisticated journeys require operational discipline"],
    },
    prosConsB: {
      pros: ["Lower operational lift for new email owners", "Solid template starting points", "Support-forward positioning"],
      cons: ["Less flexible automation than Mailchimp at advanced tiers", "May need companion CRM for complex pipelines"],
    },
    bestFor: [
      { heading: "Choose Mailchimp if…", body: "You want to connect dispatch tools, forms, and lightweight CRM tags without custom engineering, and you accept a learning curve for journeys." },
      { heading: "Choose Constant Contact if…", body: "Your marketing calendar is mostly predictable promotions, educational blasts, and community updates—not dozens of behavioral branches." },
      { heading: "Contractor-specific tie-breaker", body: "If technicians generate variability (callbacks, emergency slots), Mailchimp’s automation depth usually wins; if one office manager wears every hat, Constant Contact may launch faster." },
    ],
    faqs: [
      { q: "Mailchimp vs Constant Contact for HVAC?", a: "HVAC with membership renewals and upsells often outgrow basic blasts—Mailchimp’s automation usually fits better once reminders are systematic. If you only send seasonal postcards digitally, Constant Contact may be enough." },
      { q: "Which is cheaper?", a: "Depends on list size and required tier. Model annual contact growth and whether you need premium reporting or dynamic content." },
      { q: "Can either handle review-request emails?", a: "Yes—pair copy with your reputation program so timing and language stay compliant and on-brand." },
      { q: "Migration difficulty?", a: "Moderate; export CSV, recreate templates, and warm audiences with explicit re-permission when required." },
      { q: "Deliverability concerns?", a: "Authenticate domains, avoid bought lists, and monitor spam complaints—platform choice matters less than list practices." },
      { q: "What proof should we track?", a: "Booked jobs or accepted estimates influenced by email sequences, not vanity click rates alone." },
    ],
    sidebarWinners: [
      { label: "Automation ceiling", winner: "A" },
      { label: "Beginner support vibe", winner: "B" },
      { label: "Template diversity", winner: "A" },
    ],
  }),

  build("mailchimp-vs-activecampaign", "mailchimp", "activecampaign", "Mailchimp is the pragmatic creative hub for teams still maturing automation; ActiveCampaign is the operational brain when follow-up must branch on CRM reality.", {
    quickVerdictParagraphs: [
      "Mailchimp keeps newsletter velocity high—great when brand, offers, and educational content publish weekly with modest logic.",
      "ActiveCampaign becomes the better economic bet when stalled estimates, no-show risk, and technician-driven tags should trigger tasks automatically.",
      "If nobody internally can draw an automation map on a whiteboard, ActiveCampaign’s power becomes riskier than Mailchimp’s gradual journey builder.",
      "Electricians and plumbers with seasonal spikes often graduate to ActiveCampaign once list segments multiply by service line or customer tier.",
    ],
    decisionGuideA: [
      "Creative throughput matters more than conditional logic this quarter.",
      "Your automations are mostly date-based or light behavioral triggers.",
      "You need the widest integration marketplace without custom middleware.",
    ],
    decisionGuideB: [
      "CRM stages or tags must change email paths within hours.",
      "You run multi-branch follow-up across commercial and residential cohorts.",
      "You can assign one owner to audit automations monthly.",
    ],
    heroCallouts: [
      { label: "Fast polished campaigns", winner: "A", reason: "Mailchimp’s editor + templates shorten time-to-publish." },
      { label: "Branching follow-up logic", winner: "B", reason: "ActiveCampaign’s builder targets CRM-aware triggers." },
    ],
    featureComparison: [
      { feature: "Behavioral / CRM triggers", productA: "Moderate", productB: "Very strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Creative tooling", productA: "Very strong", productB: "Strong", supportA: "supported", supportB: "supported", stronger: "A" },
      { feature: "Pipeline + deal objects", productA: "Limited native", productB: "Strong", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Ease for first-time email owner", productA: "Strong", productB: "Moderate", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Deliverability + list hygiene tooling", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Mailchimp becomes expensive at scale when premium automation unlocks; ActiveCampaign pricing also climbs with contacts and sales automation features. Quote both using the same ‘engaged subscriber’ definition—not your entire CSV archive.",
    prosConsA: {
      pros: ["Lower process overhead for simple stacks", "Huge partner ecosystem", "Friendly ramp from newsletters to starter journeys"],
      cons: ["Heavier CRM-native logic may require integrations", "Advanced branching still lags dedicated automation vendors"],
    },
    prosConsB: {
      pros: ["Deep conditional workflows", "CRM alignment for sales-heavy service firms", "Strong win-back and re-engagement patterns when tagged well"],
      cons: ["Requires ongoing QA—broken logic annoys customers fast", "More time training office staff"],
    },
    bestFor: [
      { heading: "When Mailchimp is enough", body: "You primarily need monthly trust content, promo pushes, and light nurture after form fills—no elaborate deal-stage choreography yet." },
      { heading: "When ActiveCampaign earns its seat", body: "Dispatch, sales, and marketing disagree because follow-up is manual; automation should standardize tasks when prospects go quiet or jobs complete." },
      { heading: "Blended recommendation", body: "Some multi-location brands run Mailchimp for brand marketing and ActiveCampaign for sales ops—only do this if you can prevent duplicate messaging." },
    ],
    faqs: [
      { q: "Can ActiveCampaign replace Mailchimp completely?", a: "Often yes for automation-first teams, but confirm creative workflows and template tastes during trial—beauty still matters in residential markets." },
      { q: "Which is easier for plumbers on the go?", a: "Mailchimp publishes faster with less setup; ActiveCampaign wins once tagging from CRM is reliable." },
      { q: "CRM requirement?", a: "ActiveCampaign benefits from CRM discipline; Mailchimp can live with lighter structures but still improves with tags." },
      { q: "What metric proves the switch?", a: "Reduction in manual follow-up hours plus higher accepted-estimate rates from nurture paths." },
      { q: "SMS considerations?", a: "Both may offer SMS add-ons—compare Brevo if bundled SMS pricing is decisive." },
      { q: "Typical migration timeline?", a: "4–8 weeks for thoughtful automation recreation plus training; avoid big-bang Friday cutovers before busy season." },
    ],
    sidebarWinners: [
      { label: "Automation power", winner: "B" },
      { label: "Creative velocity", winner: "A" },
      { label: "Beginner accessibility", winner: "A" },
    ],
  }),

  build("klaviyo-vs-mailchimp", "klaviyo", "mailchimp", "Klaviyo leads when structured customer data should steer every send; Mailchimp leads when creative speed and broad integrations matter more than analytics-heavy segmentation.", {
    quickVerdictParagraphs: [
      "Klaviyo expects you to know what a ‘profile’ means for your business—equipment age, service plan tier, commercial vs residential—not just first name merge tags.",
      "Mailchimp keeps execution approachable for teams that need to ship this week’s promo email without standing up event taxonomy.",
      "If you cannot maintain weekly data reviews, Klaviyo’s subscription can become expensive theater.",
      "Home-service brands blending ecommerce parts (filters, parts bundles) sometimes justify Klaviyo earlier than pure dispatch shops.",
    ],
    decisionGuideA: [
      "You capture meaningful events from bookings, purchases, or memberships.",
      "You want revenue-aligned reporting, not only open rates.",
      "You employ someone who audits segments monthly.",
    ],
    decisionGuideB: [
      "You need fastest time-to-publish newsletters and promos.",
      "Your automation needs stop at modest journeys for now.",
      "You rely on a wide marketplace of integrations out of the box.",
    ],
    heroCallouts: [
      { label: "Segmentation analytics", winner: "A", reason: "Klaviyo is engineered around profiles and behaviors." },
      { label: "Generalist ease", winner: "B", reason: "Mailchimp keeps creative iteration friction low." },
    ],
    featureComparison: [
      { feature: "Event-driven automation", productA: "Very strong", productB: "Strong (tiered)", supportA: "supported", supportB: "supported", stronger: "A" },
      { feature: "Creative template tooling", productA: "Strong", productB: "Very strong", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Predictive / analytics extras", productA: "Very strong", productB: "Moderate–strong", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Price for small lists", productA: "Competitive free start", productB: "Competitive free start", supportA: "supported", supportB: "supported" },
      { feature: "Operational learning curve", productA: "Steeper", productB: "Gentler", supportA: "partial", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "Klaviyo costs track active profiles and messaging volume; Mailchimp scales by contacts and feature tier. Run a 12-month projection including expected growth from lead-gen and SEO traffic.",
    prosConsA: {
      pros: ["Sharp segmentation for sophisticated operators", "Flows that respond to measurable behavior", "Reporting language geared to revenue"],
      cons: ["Requires data hygiene discipline", "May exceed needs for tiny lists"],
    },
    prosConsB: {
      pros: ["Broad integration catalog", "Friendly editor experience", "Flexible for mixed marketing maturity"],
      cons: ["Analytics-first operators may crave Klaviyo-style depth", "Advanced automation triggers can get expensive"],
    },
    bestFor: [
      { heading: "Choose Klaviyo", body: "You have trustworthy CRM or booking data and want campaigns keyed off real events—renewals, service lapses, cross-sell readiness." },
      { heading: "Choose Mailchimp", body: "You need rapid creative execution, wide app support, and acceptable automation without building a data governance practice first." },
      { heading: "Electrician / plumber scenario", body: "If you only segment by neighborhood, Mailchimp suffices; if you segment by panel type, service contracts, or commercial account tier, Klaviyo may pay off." },
    ],
    faqs: [
      { q: "Is Klaviyo overkill for 300 subscribers?", a: "Often yes unless those 300 are high-LTV accounts with rich data worth automating." },
      { q: "Can Mailchimp mimic Klaviyo flows?", a: "Partially—Mailchimp journeys are strong, but predictive analytics and event depth differ." },
      { q: "Integration with CRM?", a: "Both can integrate; the question is whether your CRM fields are clean enough to justify Klaviyo’s depth." },
      { q: "SMS overlap?", a: "Both offer SMS in many regions—compare compliance tooling and pricing with Brevo as a sanity check." },
      { q: "What is the biggest mistake?", a: "Paying for analytics tiers nobody reads weekly; downgrade until discipline exists." },
      { q: "How to trial fairly?", a: "Rebuild one flagship automation in each platform and measure downstream bookings, not builder aesthetics." },
    ],
    sidebarWinners: [
      { label: "Analytics depth", winner: "A" },
      { label: "Beginner accessibility", winner: "B" },
      { label: "Template ecosystem", winner: "B" },
    ],
  }),

  build("convertkit-vs-mailchimp", "convertkit", "mailchimp", "Kit prioritizes narrative automation for education-driven buyers; Mailchimp prioritizes versatile campaigns for generalist marketing teams.", {
    quickVerdictParagraphs: [
      "Kit shines when every subscriber should experience a story: long-cycle remodel consults, premium maintenance education, or membership launches.",
      "Mailchimp remains safer when you need omnichannel integrations, enterprise-grade template libraries, and mixed teams collaborating on creative.",
      "Creators and trainers inside contracting firms often prefer Kit’s tag mental model; traditional service brands may prefer Mailchimp’s all-in-one familiarity.",
      "Price-wise, compare list size predictions and whether you need Mailchimp’s premium automation tiers.",
    ],
    decisionGuideA: [
      "You sell education or advice as part of the service journey.",
      "You think in sequences more than calendar campaigns.",
      "You want lightweight automation readability for a small team.",
    ],
    decisionGuideB: [
      "You need the widest integrations to operational systems.",
      "Multiple stakeholders edit templates weekly.",
      "You want a familiar brand with extensive marketplace support.",
    ],
    heroCallouts: [
      { label: "Sequence storytelling", winner: "A", reason: "Kit’s UX favors drip narratives." },
      { label: "All-purpose marketing breadth", winner: "B", reason: "Mailchimp spans more use cases out of the box." },
    ],
    featureComparison: [
      { feature: "Newsletter + promo flexibility", productA: "Strong", productB: "Very strong", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Creator-centric automations", productA: "Very strong", productB: "Strong", supportA: "supported", supportB: "supported", stronger: "A" },
      { feature: "CRM depth", productA: "Limited native", productB: "Moderate via ecosystem", supportA: "partial", supportB: "partial", stronger: "B" },
      { feature: "Learning curve", productA: "Moderate", productB: "Moderate", supportA: "partial", supportB: "partial" },
      { feature: "Landing page tooling", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Kit pricing climbs with subscribers; Mailchimp climbs with contacts plus feature tier. Annual prepay discounts appear on both—negotiate after pilot metrics look good.",
    prosConsA: {
      pros: ["Excellent for educational nurture", "Clean automation diagrams", "Good fit for premium positioning"],
      cons: ["Less enterprise blueprinting than HubSpot", "Fewer sheer integrations than Mailchimp"],
    },
    prosConsB: {
      pros: ["Massive integration ecosystem", "Flexible template operations", "Handles generalist and advanced tiers"],
      cons: ["Can feel busy for minimalists", "Premium automation pricing needs monitoring"],
    },
    bestFor: [
      { heading: "Choose Kit", body: "Your sales cycle requires multiple educational touchpoints before a homeowner commits to high-ticket work." },
      { heading: "Choose Mailchimp", body: "You run frequent promos, cross-channel experiments, and need maximum compatibility with other tools." },
      { heading: "Service-business hybrids", body: "Consultative design/build firms may lean Kit; high-volume routing shops may lean Mailchimp." },
    ],
    faqs: [
      { q: "Can I switch later?", a: "Yes, but budget template and automation migration time—domain reputation practices must stay consistent." },
      { q: "What about ecommerce?", a: "Mailchimp has ecommerce history; Kit can work for digital products—evaluate integrations for physical service bundles carefully." },
      { q: "Deliverability?", a: "Both are credible; success depends on consent, list quality, and authentication." },
      { q: "CRM sync?", a: "Mailchimp often integrates with more legacy SMB CRMs; Kit may rely on Zapier for niche stacks." },
      { q: "Best for roofers?", a: "High-trust education suits Kit; fast storm-response promos may fit Mailchimp." },
      { q: "How many emails should we send monthly?", a: "Start with one value email weekly plus triggered journeys—frequency should match operational capacity." },
    ],
    sidebarWinners: [
      { label: "Education funnels", winner: "A" },
      { label: "Integration breadth", winner: "B" },
      { label: "General campaigns", winner: "B" },
    ],
  }),

  build("brevo-vs-mailchimp", "brevo", "mailchimp", "Brevo appeals when bundled email, SMS, and transactional sends simplify billing; Mailchimp appeals when ecosystem breadth and creative polish are the priority.", {
    quickVerdictParagraphs: [
      "If appointment reminders, payment confirmations, and promos should coexist, Brevo’s combined hub can reduce vendor fatigue.",
      "Mailchimp still wins for teams that lean heavily on integration marketplace depth, template diversity, and journey experimentation without caring about SMTP bundling.",
      "Watch Brevo SMS credits during heatwave or storm seasons—reminder volume spikes fast.",
      "Mailchimp may require separate SMS tooling for the same coverage, so compare total contract value holistically.",
    ],
    decisionGuideA: [
      "You want email + SMS + transactional pricing in one interface.",
      "Technicians depend on text reminders alongside email detail.",
      "You prefer send-based economics for predictable promos.",
    ],
    decisionGuideB: [
      "You need the largest possible integration catalog.",
      "Marketing focuses on creative testing and template velocity.",
      "SMS is optional or handled elsewhere already.",
    ],
    heroCallouts: [
      { label: "Bundled multi-channel", winner: "A", reason: "Brevo markets combined channels heavily." },
      { label: "Creative + integration ecosystem", winner: "B", reason: "Mailchimp’s marketplace remains massive." },
    ],
    featureComparison: [
      { feature: "SMS + transactional bundle", productA: "Strong", productB: "Add-on / partner path", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Marketing template depth", productA: "Strong", productB: "Very strong", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Automation branching", productA: "Moderate–strong", productB: "Strong", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "CRM / advanced pipeline", productA: "Light–moderate", productB: "Via integrations", supportA: "partial", supportB: "partial" },
      { feature: "SMB ease", productA: "Strong", productB: "Strong", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Compare not only monthly SaaS fees but SMS segments, transactional email volume, and dedicated IP needs. Mailchimp’s SMS path may be separate; model both stacks for a peak month.",
    prosConsA: {
      pros: ["One vendor for urgent SMS and promos", "Transactional email support for ops teams", "Straightforward UI for lean offices"],
      cons: ["Ecosystem smaller than Mailchimp’s", "Heavy CRM orchestration may still need another system"],
    },
    prosConsB: {
      pros: ["Huge app marketplace", "Mature template operations", "Flexible journey builder at higher tiers"],
      cons: ["Bundled SMS may require extra spend or partners", "Transactional needs may need add-ons"],
    },
    bestFor: [
      { heading: "Choose Brevo", body: "Your dispatch team texts customers weekly and you want those messages connected to the same analytics home as newsletters." },
      { heading: "Choose Mailchimp", body: "You prioritize creative experimentation, wide integrations, and already solved SMS elsewhere or do not need it." },
      { heading: "Home-service ops test", body: "Pilot two busy weeks: measure no-show rate changes from reminder SMS plus email detail vs your current stack." },
    ],
    faqs: [
      { q: "Is Brevo ‘cheaper’?", a: "Sometimes—depends on SMS usage. High-volume texting can erase savings if not modeled." },
      { q: "Transactional clarity?", a: "Define which emails are operational vs marketing; compliance and unsubscribe rules differ." },
      { q: "Can Mailchimp catch up on SMS?", a: "Yes in many regions via add-ons—compare feature parity with Brevo before switching." },
      { q: "Which helps lead follow-up?", a: "Both can nurture leads; tie emails to CRM stages in either stack via integrations." },
      { q: "Which has better templates?", a: "Mailchimp historically offers more marketing template variety; Brevo suffices for many SMBs." },
      { q: "Decision timeframe?", a: "Run a month-long pilot including a peak service period so reminder volume is realistic." },
    ],
    sidebarWinners: [
      { label: "Bundled SMS + email", winner: "A" },
      { label: "Integration marketplace", winner: "B" },
      { label: "Template library depth", winner: "B" },
    ],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getEmailMarketingComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getEmailMarketingComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}

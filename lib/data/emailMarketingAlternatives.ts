import type {
  AlternativesDetailBlock,
  AlternativesEditorialBlock,
  AlternativesTableRow,
  AlternativesTemplateProps,
  AlternativesTopPick,
} from "@/components/alternatives/AlternativesTemplate";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import {
  EMAIL_MARKETING_REGISTRY_SUPPLEMENT,
  TOP_PICKS,
  type BestEmailMarketingPick,
} from "@/lib/data/emailMarketingBestEmailMarketingSoftware";
import { getEmailMarketingComparisonBySlug } from "@/lib/data/emailMarketingComparisons";
import { emailMarketingLogoForSlug } from "@/lib/data/emailMarketingLogos";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";
import { formatComparisonLinkLabelFromSlug } from "@/lib/utils/formatComparisonLinkLabel";
import { getEmailMarketingCompareUrl, getEmailMarketingReviewUrl } from "@/lib/routes";

/** Same set as email hub “Related comparisons”; drives logo + summary cards on alternatives pages. */
const RELATED_EMAIL_MARKETING_COMPARISON_SLUGS = [
  "mailchimp-vs-constant-contact",
  "mailchimp-vs-activecampaign",
  "klaviyo-vs-mailchimp",
  "convertkit-vs-mailchimp",
  "brevo-vs-mailchimp",
] as const;

function emailMarketingRelatedComparison(slug: string) {
  return toAlternativesRelatedComparison(
    getEmailMarketingCompareUrl(slug),
    getEmailMarketingComparisonBySlug(slug),
    formatComparisonLinkLabelFromSlug(slug)
  );
}

type EmailProductPick = BestEmailMarketingPick | SoftwarePickCardContent;

const EMAIL_PICKS_BY_SLUG: Record<string, EmailProductPick> = (() => {
  const m: Record<string, EmailProductPick> = {};
  for (const p of TOP_PICKS) m[p.slug] = p;
  for (const p of EMAIL_MARKETING_REGISTRY_SUPPLEMENT) m[p.slug] = p;
  return m;
})();

export const EMAIL_MARKETING_ALTERNATIVES_SLUGS = [
  "mailchimp",
  "constant-contact",
  "activecampaign",
  "hubspot-email-marketing",
  "klaviyo",
  "convertkit",
  "brevo",
  "mailerlite",
] as const;

export type EmailMarketingAlternativesSlug = (typeof EMAIL_MARKETING_ALTERNATIVES_SLUGS)[number];

/** Head-to-head pages we can link from alternatives copy (not every pair exists). */
const PAIR_TO_COMPARE: Record<string, string> = {
  "mailchimp|constant-contact": "mailchimp-vs-constant-contact",
  "constant-contact|mailchimp": "mailchimp-vs-constant-contact",
  "mailchimp|activecampaign": "mailchimp-vs-activecampaign",
  "activecampaign|mailchimp": "mailchimp-vs-activecampaign",
  "mailchimp|klaviyo": "klaviyo-vs-mailchimp",
  "klaviyo|mailchimp": "klaviyo-vs-mailchimp",
  "mailchimp|convertkit": "convertkit-vs-mailchimp",
  "convertkit|mailchimp": "convertkit-vs-mailchimp",
  "mailchimp|brevo": "brevo-vs-mailchimp",
  "brevo|mailchimp": "brevo-vs-mailchimp",
};

function compareHrefForPair(mainProduct: string, alternative: string): string | undefined {
  const slug = PAIR_TO_COMPARE[`${mainProduct}|${alternative}`];
  return slug ? getEmailMarketingCompareUrl(slug) : undefined;
}

const TOP_FOUR_COMPETITORS: Record<EmailMarketingAlternativesSlug, EmailMarketingAlternativesSlug[]> = {
  mailchimp: ["activecampaign", "constant-contact", "klaviyo", "mailerlite"],
  "constant-contact": ["mailchimp", "mailerlite", "activecampaign", "brevo"],
  activecampaign: ["mailchimp", "hubspot-email-marketing", "klaviyo", "mailerlite"],
  "hubspot-email-marketing": ["activecampaign", "mailchimp", "klaviyo", "mailerlite"],
  klaviyo: ["mailchimp", "activecampaign", "mailerlite", "brevo"],
  convertkit: ["mailchimp", "mailerlite", "klaviyo", "activecampaign"],
  brevo: ["mailchimp", "mailerlite", "activecampaign", "constant-contact"],
  mailerlite: ["mailchimp", "activecampaign", "constant-contact", "klaviyo"],
};

const DETAIL_THREE: Record<EmailMarketingAlternativesSlug, EmailMarketingAlternativesSlug[]> = {
  mailchimp: ["activecampaign", "constant-contact", "klaviyo"],
  "constant-contact": ["mailchimp", "activecampaign", "mailerlite"],
  activecampaign: ["mailchimp", "klaviyo", "hubspot-email-marketing"],
  "hubspot-email-marketing": ["activecampaign", "mailchimp", "mailerlite"],
  klaviyo: ["mailchimp", "activecampaign", "mailerlite"],
  convertkit: ["mailchimp", "mailerlite", "activecampaign"],
  brevo: ["mailchimp", "activecampaign", "mailerlite"],
  mailerlite: ["mailchimp", "activecampaign", "brevo"],
};

const ALT_STORY: Record<string, { heading: string; body: string }> = {
  activecampaign: {
    heading: "Best when follow-up must be automatic",
    body: "Branch on pipeline stages, opens, and tags so stalled estimates and post-job sequences run without someone remembering to send manually.",
  },
  mailchimp: {
    heading: "Best when integrations and creative speed matter",
    body: "Publish weekly campaigns with a deep app marketplace when your stack is heterogeneous and automation is still maturing.",
  },
  "constant-contact": {
    heading: "Best when you want guided simplicity",
    body: "Keep newsletters and promos on rails with support-forward onboarding when nobody has bandwidth to babysit complex builders.",
  },
  "hubspot-email-marketing": {
    heading: "Best when HubSpot is the source of truth",
    body: "Align marketing contacts, deals, and workflows in one hub when sales and ops already live inside HubSpot day to day.",
  },
  klaviyo: {
    heading: "Best with disciplined customer data",
    body: "Let profiles and events steer retention and win-back when you can maintain clean segments and meaningful behavioral signals.",
  },
  convertkit: {
    heading: "Best for story-led nurture",
    body: "Run tag-centric sequences and teaching funnels when premium buyers need education before they book a big job.",
  },
  brevo: {
    heading: "Best for bundled email + SMS + transactional",
    body: "Consolidate appointment reminders, promos, and operational messages under one vendor when multi-channel billing should stay simple.",
  },
  mailerlite: {
    heading: "Best lean-office value and polish",
    body: "Ship modern layouts and straightforward automations when you want respectable design without enterprise MAP overhead.",
  },
};

const PAGE_COPY: Record<
  EmailMarketingAlternativesSlug,
  { intro: string; whyLeave: AlternativesEditorialBlock[] }
> = {
  mailchimp: {
    intro:
      "Teams leave Mailchimp when list-based pricing outpaces ROI, when automation ceilings block CRM-aware follow-up, or when bundled SMS/transactional requirements pull them toward multi-channel hubs.",
    whyLeave: [
      { heading: "Automation depth vs price", body: "Journey logic, dynamic content, and advanced segmentation may require costly tiers compared with automation-first vendors." },
      { heading: "CRM orchestration gaps", body: "Sales-led service firms sometimes need deal-stage triggers that are faster in ActiveCampaign or native HubSpot stacks." },
      { heading: "Multi-channel consolidation", body: "SMS and transactional email volume may be cheaper or simpler under Brevo once modeled honestly." },
      { heading: "Governance and multi-brand needs", body: "Franchise operators may outgrow permissions and brand separation without careful plan selection." },
    ],
  },
  "constant-contact": {
    intro:
      "Teams move on from Constant Contact when branching automation, CRM-native triggers, or integration breadth become non-negotiable—or when calendar pricing stops matching list growth.",
    whyLeave: [
      { heading: "Automation ceiling", body: "Estimate-heavy and membership-driven operators may need logic ActiveCampaign or HubSpot handles more naturally." },
      { heading: "Integration depth", body: "If your stack depends on niche field-service connectors, Mailchimp’s marketplace may reduce middleware work." },
      { heading: "Revenue analytics expectations", body: "Klaviyo-style profile discipline may matter when you outgrow basic engagement reports." },
      { heading: "Multi-channel operations", body: "SMS-heavy dispatch patterns sometimes fit Brevo’s bundled economics better than add-on paths." },
    ],
  },
  activecampaign: {
    intro:
      "Teams switch off ActiveCampaign when operational overhead exceeds payoff—broken automations, under-staffed admins, or a simpler marketing cadence that no longer needs conditional complexity.",
    whyLeave: [
      { heading: "Complexity tax", body: "Small offices may not sustain monthly automation audits; errors erode trust faster than manual email." },
      { heading: "Creative and template workflows", body: "Some brands crave Mailchimp-speed creative testing versus logic-first builders." },
      { heading: "Pricing at scale", body: "Contacts plus sales automation features can compete with HubSpot bundles depending on stack context." },
      { heading: "SMS-first operators", body: "If SMS becomes the primary channel, Brevo’s bundle economics deserve a look." },
    ],
  },
  "hubspot-email-marketing": {
    intro:
      "Teams explore HubSpot alternatives when Marketing Hub costs outpace usage, when they only need email—not the full CRM flywheel—or when leaner automation vendors fit tighter operator bandwidth.",
    whyLeave: [
      { heading: "Total cost of ownership", body: "Marketing contacts, seats, and add-ons add up fast if adoption outside marketing is uneven." },
      { heading: "Email-only use cases", body: "Standalone blast calendars rarely justify suite pricing versus Mailchimp or MailerLite." },
      { heading: "Automation philosophy", body: "Deep branching without heavyweight CRM objects may be smoother in ActiveCampaign for some service stacks." },
      { heading: "Data model mismatch", body: "If you will not maintain CRM hygiene, specialized email tools may deliver ROI sooner than an underfed Hub." },
    ],
  },
  klaviyo: {
    intro:
      "Klaviyo churn often stems from data maturity mismatch—teams paying for analytics DNA without clean events, or generalist marketers who only need newsletters and simple drips.",
    whyLeave: [
      { heading: "Under-utilized profiles", body: "Without structured booking, membership, or purchase events, profile-based automation cannot shine." },
      { heading: "Cost control", body: "Active profile pricing punishes poor list hygiene; teams without suppression discipline feel renewal shocks." },
      { heading: "Generalist simplicity", body: "Mailchimp or MailerLite may ship campaigns faster when segmentation needs stay modest." },
      { heading: "Heavy CRM-in-Hub requirements", body: "Companies standardizing on HubSpot’s MAP may consolidate to reduce stack sprawl." },
    ],
  },
  convertkit: {
    intro:
      "Teams switch from Kit when they need deeper CRM orchestration, enterprise-style governance, or analytics closer to Klaviyo—while still wanting creator-friendly sequencing.",
    whyLeave: [
      { heading: "CRM and pipeline depth", body: "Deal-stage triggers and multi-object stories may push teams toward ActiveCampaign or HubSpot." },
      { heading: "Integration marketplace scale", body: "Mailchimp’s connector catalog can matter when operations run on many niche tools." },
      { heading: "SMS-centric workflows", body: "Bundled SMS plus transactional under Brevo can simplify dispatch-heavy calendars." },
      { heading: "Lean pricing for straight newsletters", body: "MailerLite may cover monthly promos and simple drips with less subscriber-tier pressure." },
    ],
  },
  brevo: {
    intro:
      "Teams leave Brevo when CRM-aware automation, creative marketplace breadth, or dedicated marketing analytics become the bottleneck—not combined send pricing.",
    whyLeave: [
      { heading: "Automation sophistication", body: "ActiveCampaign or HubSpot may fit when branches, tasks, and deal context must stay synchronized." },
      { heading: "Template and partner ecosystem", body: "Mailchimp still wins many creative and integration breadth shootouts." },
      { heading: "Profile-led retention programs", body: "Klaviyo deserves consideration when events and revenue metrics steer segmentation." },
      { heading: "Ultra-lean marketing teams", body: "MailerLite keeps UI overhead low when SMS volume is handled elsewhere or is secondary." },
    ],
  },
  mailerlite: {
    intro:
      "MailerLite works until automation logic, CRM triggers, or multi-channel bundles outgrow its sweet spot—then teams graduate to deeper MAPs or combined SMS hubs.",
    whyLeave: [
      { heading: "Branching and CRM alignment", body: "ActiveCampaign becomes attractive when deal stages and tags must drive messaging automatically." },
      { heading: "Connector breadth", body: "Mailchimp may reduce custom glue when you rely on dozens of SaaS handoffs." },
      { heading: "Bundled SMS and transactional", body: "Brevo can consolidate urgent reminders with newsletters when credits are modeled honestly." },
      { heading: "Analytics-heavy retention", body: "Klaviyo fits when profiles and events—not just opens—should decide who gets the next touch." },
    ],
  },
};

function pickToTopAlternative(slug: string): AlternativesTopPick {
  const p = EMAIL_PICKS_BY_SLUG[slug];
  const compareSlug = p.compareSlugs[0];
  return {
    slug: p.slug,
    name: p.name,
    logoSrc: emailMarketingLogoForSlug(slug),
    rating: p.rating,
    bestFor: p.comparisonTableBestFor ?? p.badge,
    description: p.description,
    reviewHref: getEmailMarketingReviewUrl(slug),
    compareHref: compareSlug ? getEmailMarketingCompareUrl(compareSlug) : undefined,
    startingPrice: p.startingPrice,
  };
}

function pickToTableRow(slug: string): AlternativesTableRow {
  const p = EMAIL_PICKS_BY_SLUG[slug];
  return {
    slug: p.slug,
    name: p.name,
    logoSrc: emailMarketingLogoForSlug(slug),
    bestFor: p.comparisonTableBestFor ?? p.badge,
    startingPrice: p.startingPrice,
    standoutFeature: p.standoutFeature ?? p.badge,
    reviewHref: getEmailMarketingReviewUrl(slug),
  };
}

function buildDetailedAlternatives(main: EmailMarketingAlternativesSlug): AlternativesDetailBlock[] {
  return DETAIL_THREE[main].map((altSlug) => {
    const p = EMAIL_PICKS_BY_SLUG[altSlug];
    const story = ALT_STORY[altSlug];
    return {
      productName: p.name,
      heading: story.heading,
      body: story.body,
      reviewHref: getEmailMarketingReviewUrl(altSlug),
      compareHref: compareHrefForPair(main, altSlug),
    };
  });
}

function buildPage(main: EmailMarketingAlternativesSlug): AlternativesTemplateProps {
  const meta = PAGE_COPY[main];
  const p = EMAIL_PICKS_BY_SLUG[main];
  const topSlugs = TOP_FOUR_COMPETITORS[main];
  const tableSlugs = [main, ...topSlugs.slice(0, 3)] as string[];

  return {
    title: `Best ${p.name} Alternatives (2026)`,
    subtitle: `${p.name} remains a strong choice—alternatives win when pricing models, automation philosophy, or channel bundling better match your operating reality.`,
    productName: p.name,
    productSlug: main,
    categoryHref: "/email-marketing",
    categoryLabel: "Email Marketing",
    originalReviewHref: getEmailMarketingReviewUrl(main),
    showPayrollTypesColumn: false,
    quickAnswerParagraphs: [
      `The best ${p.name} alternatives depend on whether your bottleneck is creative velocity, automation logic, analytics depth, or multi-channel messaging—not brand popularity alone.`,
      meta.intro,
      "Before migrating, inventory three automations and two monthly campaigns you cannot compromise on. If a contender cannot reproduce them within a 30-day pilot, keep looking.",
    ],
    whyPeopleLookForAlternatives: meta.whyLeave,
    topAlternatives: topSlugs.map((s) => pickToTopAlternative(s)),
    comparisonTableRows: tableSlugs.map((s) => pickToTableRow(s)),
    detailedAlternatives: buildDetailedAlternatives(main),
    howToChoose: [
      { heading: "Start with workflows", body: "List the exact automations that must survive migration—then grade each finalist against that checklist." },
      { heading: "Model 12-month contacts", body: "Pricing should include growth from SEO, lead gen, and referral programs—not just today’s CSV." },
      { heading: "Assign an automation owner", body: "Pick someone accountable for monthly QA; otherwise migrate toward simpler tools intentionally." },
      { heading: "Verify integrations", body: "CRM, scheduling, and website forms must sync fields your segments depend on." },
    ],
    relatedComparisons: RELATED_EMAIL_MARKETING_COMPARISON_SLUGS.map((s) => emailMarketingRelatedComparison(s)),
    relatedResources: [
      { label: "Email marketing hub", href: "/email-marketing" },
      { label: "Best email marketing software", href: "/email-marketing/best-email-marketing-software" },
      { label: "Best email marketing by scenario", href: "/email-marketing/best-for" },
      { label: "Email marketing comparisons", href: "/email-marketing/compare" },
      { label: "Email marketing guides", href: "/email-marketing/guides" },
      { label: "CRM software hub", href: "/crm" },
      { label: "Lead generation hub", href: "/lead-generation" },
      { label: "Website builders hub", href: "/website-builders" },
      { label: "SEO tools hub", href: "/seo-tools" },
      { label: "Reputation management hub", href: "/reputation-management" },
    ],
    faqItems: [
      { q: `What is the strongest ${p.name} alternative for contractors?`, a: "Usually ActiveCampaign if automation must track estimates and jobs, Mailchimp if you need speed and integrations first, and Brevo if bundled SMS matters as much as email." },
      { q: "Should we switch mid-season?", a: "Avoid peak season cutovers unless failover plans exist. Migrate templates during a quieter month and run parallel sends briefly if compliance allows." },
      { q: "How do we avoid losing deliverability?", a: "Keep domain authentication consistent, warm audiences gradually, and never import cold lists during vendor changes." },
      { q: "What indicates we should stay put?", a: "If the current vendor ships your three core journeys reliably and cost is predictable, switching may not be worth migration risk." },
      { q: "How long should a pilot last?", a: "At least 30 days with production volumes; measure booked-job influence and CRM stage changes, not vanity opens." },
    ],
  };
}

const pages: Record<string, AlternativesTemplateProps> = Object.fromEntries(
  EMAIL_MARKETING_ALTERNATIVES_SLUGS.map((slug) => [slug, buildPage(slug)])
);

export function getEmailMarketingAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getEmailMarketingAlternativesSlugs(): string[] {
  return [...EMAIL_MARKETING_ALTERNATIVES_SLUGS];
}

import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import { getSoftwarePick } from "@/lib/data/softwarePickCards";
import {
  getReputationManagementBestForUrl,
  getReputationManagementCompareUrl,
  getReputationManagementReviewUrl,
} from "@/lib/routes";

export type ReputationManagementReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const categoryHref = "/reputation-management";
const CATEGORY = "reputation-management" as const;

const SCENARIO_LINKS = [
  { label: "Small business", href: getReputationManagementBestForUrl("small-business") },
  { label: "Contractors", href: getReputationManagementBestForUrl("contractors") },
  { label: "HVAC", href: getReputationManagementBestForUrl("hvac") },
  { label: "Home services", href: getReputationManagementBestForUrl("home-services") },
];

const POPULAR_INDUSTRY_LINKS = [
  { label: "Best for contractors", href: getReputationManagementBestForUrl("contractors") },
  { label: "Best for plumbing companies", href: getReputationManagementBestForUrl("plumbing") },
  { label: "Best for electricians", href: getReputationManagementBestForUrl("electricians") },
  { label: "Best for roofing companies", href: getReputationManagementBestForUrl("roofing") },
];

/** Shared chrome only. Editorial conclusions are per-product inputs. */
const REVIEW_SHELL: Pick<
  ReputationManagementReviewData,
  | "category"
  | "categoryHref"
  | "methodology"
  | "compareSectionTitle"
  | "bestPayrollSoftwareHref"
  | "compareHubHref"
  | "compareHubLabel"
  | "bestRoundupLabel"
  | "bestForSectionTitle"
  | "bestForSectionSub"
  | "scenarioLinks"
  | "guideHubHref"
  | "guideHubLabel"
  | "popularIndustryLinks"
> = {
  category: "Reputation Management",
  categoryHref,
  methodology: {
    title: "How we review reputation management software",
    sub: "Service-business workflow lens.",
    introParagraph: "We evaluate tools on execution fit for local operators, not generic enterprise checklists.",
    bullets: [
      "We assess request consistency, response workflows, and adoption quality.",
      "We compare pricing through 12-month operating cost and footprint fit.",
      "We prioritize conversion and trust impact for service-business buying journeys.",
    ],
  },
  compareSectionTitle: "Compare with other reputation platforms",
  bestPayrollSoftwareHref: "/reputation-management/best-reputation-management-software",
  compareHubHref: "/reputation-management/compare",
  compareHubLabel: "Compare reputation management software",
  bestRoundupLabel: "Best reputation management software (2026) — full roundup",
  bestForSectionTitle: "Best reputation software for different use cases",
  bestForSectionSub: "Scenario picks for local and trade-focused businesses.",
  scenarioLinks: SCENARIO_LINKS,
  guideHubHref: "/reputation-management/guides",
  guideHubLabel: "Reputation management guides",
  popularIndustryLinks: POPULAR_INDUSTRY_LINKS,
};

function requirePick(slug: string) {
  const pick = getSoftwarePick(CATEGORY, slug);
  if (!pick) {
    throw new Error(`Missing reputation-management registry pick for slug "${slug}"`);
  }
  return pick;
}

function alt(slug: string, description: string) {
  const pick = requirePick(slug);
  return {
    name: pick.name,
    href: getReputationManagementReviewUrl(slug),
    description,
    logoSrc: pick.logoSrc,
  };
}

type ReputationReviewEditorial = {
  bestFor: string;
  quickVerdict: string;
  quickVerdictParagraphs: string[];
  pros: string[];
  cons: string[];
  bestForEditorial: string;
  whoShouldAvoid: string;
  pricingSummary: string;
  pricingTiers?: string;
  costVsCompetitors?: string;
  keyFeatures: { name: string; description: string }[];
  integrations: string[];
  integrationsIntro: string;
  contractorUse?: string[];
  alternatives: { slug: string; description: string }[];
  faqs: { q: string; a: string }[];
  compareLinks?: { label: string; slug: string }[];
  relatedReading?: { label: string; href: string }[];
};

function review(slug: string, editorial: ReputationReviewEditorial): ReputationManagementReviewData {
  const pick = requirePick(slug);
  const alternatives = editorial.alternatives
    .filter((item) => item.slug !== slug)
    .map((item) => alt(item.slug, item.description));
  if (alternatives.some((item) => item.href === getReputationManagementReviewUrl(slug))) {
    throw new Error(`Reputation review "${slug}" listed itself as an alternative`);
  }
  return {
    ...REVIEW_SHELL,
    toolName: pick.name,
    rating: pick.rating,
    startingPrice: pick.startingPrice,
    bestFor: editorial.bestFor,
    visitUrl: pick.visitUrl,
    logoSrc: pick.logoSrc,
    quickVerdict: editorial.quickVerdict,
    quickVerdictParagraphs: editorial.quickVerdictParagraphs,
    pros: editorial.pros,
    cons: editorial.cons,
    bestForEditorial: editorial.bestForEditorial,
    whoShouldAvoid: editorial.whoShouldAvoid,
    pricingSummary: editorial.pricingSummary,
    pricingTiers: editorial.pricingTiers,
    costVsCompetitors: editorial.costVsCompetitors,
    features: editorial.keyFeatures.map((item) => item.name),
    keyFeatures: editorial.keyFeatures,
    integrations: editorial.integrations,
    integrationsIntro: editorial.integrationsIntro,
    contractorUse: editorial.contractorUse,
    alternatives,
    faqs: editorial.faqs,
    compareLinks: (editorial.compareLinks ?? []).map((item) => ({
      label: item.label,
      href: getReputationManagementCompareUrl(item.slug),
    })),
    relatedReading: editorial.relatedReading,
  };
}

const reviews: Record<string, ReputationManagementReviewData> = {
  podium: review("podium", {
    bestFor: "SMS-first local communication",
    quickVerdict:
      "Podium is BeltStack’s SMS-first reputation pick: it usually wins when review requests and front-office follow-up already run through text, not when you need the broadest multi-location suite.",
    quickVerdictParagraphs: [
      "BeltStack ranks Podium as the best SMS-first reputation option. The roundup and hub both treat it as the default when speed-to-request and texting are the operating bottleneck—not as a generic all-in-one suite.",
      "Existing comparisons position Podium as stronger than Birdeye for SMS-first service teams, and as offering more communication depth than Broadly. Contractor and Google-review guides also point to Podium when teams want text-led request timing after completed jobs.",
      "The tradeoff in BeltStack’s own cards is pricing transparency and weight: quotes vary, and the product can be heavy for very small shops. If you need simpler owner-led automation, NiceJob is the usual comparison; if you need broader location controls, Birdeye is the usual comparison.",
    ],
    pros: [
      "Strong text-led review request workflows",
      "Good orientation toward local-business communication",
      "Fast review-request setup in BeltStack’s roundup positioning",
    ],
    cons: [
      "Pricing transparency varies because BeltStack lists custom / quote pricing",
      "Can be heavy for very small shops",
    ],
    bestForEditorial:
      "Best for service teams that already communicate with customers by text and want review requests to follow that same loop. HVAC, plumbing, pest control, junk removal, and other high-volume local trades are recurring Podium picks on BeltStack best-for pages when speed after the job matters.",
    whoShouldAvoid:
      "Very small shops that need a lighter, published-price tool, or organizations shopping primarily for enterprise governance and location-level policy controls. Those buyers are a better match for NiceJob or Reputation.com in BeltStack’s rankings.",
    pricingSummary:
      "BeltStack lists Podium as Custom / quote. There is no published starting monthly amount in BeltStack data, so total cost has to be modeled from a vendor quote rather than a list price.",
    pricingTiers:
      "BeltStack does not publish Podium plan tiers. The roundup asks buyers to model seats and add-on modules before annualizing.",
    costVsCompetitors:
      "Versus NiceJob, Podium is quote-based rather than a published “from ~$75/mo” starting point. Versus Birdeye, both are quote-based; the comparison is workflow (SMS-first vs multi-location suite), not a published price gap.",
    keyFeatures: [
      {
        name: "Review requests via SMS automations",
        description:
          "BeltStack’s standout for Podium is text-triggered review requests—the same motion contractor and Google-review guides describe for post-job follow-up.",
      },
      {
        name: "Front-office texting and review follow-up in one communication loop",
        description:
          "Hub and roundup copy treat Podium as a communication-first tool, not only a review dashboard. That is why it appears on SMS-heavy trade best-for pages.",
      },
      {
        name: "Local-service request timing",
        description:
          "Guides on review-request timing point to Podium when teams want to automate when the ask goes out after a completed job, especially by SMS versus email.",
      },
    ],
    integrations: [],
    integrationsIntro:
      "BeltStack marks Podium as having integrations, but it does not publish a named connector list. Confirm CRM and operational connectors with the vendor before you assume a specific sync.",
    contractorUse: [
      "Text-led review requests after completed jobs—the pattern BeltStack’s contractor and Google-review guides associate with Podium.",
      "High-volume local trades (HVAC, plumbing, junk removal, pest control) where BeltStack best-for pages shortlist Podium for speed after the job.",
    ],
    alternatives: [
      { slug: "birdeye", description: "Broader multi-location reputation suite" },
      { slug: "nicejob", description: "Simpler owner-led review automation" },
      { slug: "broadly", description: "Lighter local-service messaging and review requests" },
    ],
    faqs: [
      {
        q: "Is Podium the best reputation tool for contractors?",
        a: "It is BeltStack’s usual start when the team already texts customers and wants review asks in that same loop. Larger footprints often compare Birdeye; simpler owner-led teams often compare NiceJob.",
      },
      {
        q: "How does Podium compare to Birdeye?",
        a: "BeltStack’s comparison says Podium is often stronger for SMS-first service teams, while Birdeye is stronger for broader multi-location reputation operations.",
      },
      {
        q: "How does Podium compare to Broadly?",
        a: "BeltStack’s comparison says Podium typically offers more communication depth, while Broadly can be easier for smaller service teams with simpler workflows.",
      },
      {
        q: "Does BeltStack publish Podium’s monthly price?",
        a: "No. The listed starting price is Custom / quote. Ask for a written quote by seats, locations, and messaging volume.",
      },
      {
        q: "Should a two-person shop start with Podium?",
        a: "BeltStack’s roundup flags that Podium can be heavy for very small shops. NiceJob or Broadly are the simpler shortlist in that case.",
      },
    ],
    compareLinks: [
      { label: "Podium vs Birdeye", slug: "podium-vs-birdeye" },
      { label: "Podium vs Broadly", slug: "podium-vs-broadly" },
    ],
    relatedReading: [
      {
        label: "How to get more Google reviews",
        href: "/reputation-management/guides/how-to-get-more-google-reviews",
      },
      {
        label: "Reputation management for contractors",
        href: "/reputation-management/guides/reputation-management-for-contractors",
      },
    ],
  }),

  birdeye: review("birdeye", {
    bestFor: "All-in-one multi-location operations",
    quickVerdict:
      "Birdeye is BeltStack’s all-in-one reputation suite pick: it usually wins when you need one system across many locations, listings, and response workflows—not when you want the lightest owner-led tool.",
    quickVerdictParagraphs: [
      "BeltStack ranks Birdeye as the best all-in-one reputation suite and the hub’s “best all-in-one scale” pick. Best-for copy describes reputation, listings, and response management for scaling operations, with location-level review and response as the standout.",
      "Comparisons already spell out the tradeoffs: versus Podium, Birdeye is the broader multi-location option; versus NiceJob, it usually wins on feature breadth at scale while NiceJob wins on simplicity; versus Reputation.com, Birdeye is the common balance of breadth and usability; versus Grade.us, Birdeye is often better for in-house multi-location teams.",
      "The roundup’s own cons are that Birdeye can feel heavyweight and needs process ownership to realize value. If your bottleneck is SMS speed, start with the Podium comparison. If your bottleneck is enterprise policy and legal reporting, start with Reputation.com vs Birdeye.",
    ],
    pros: [
      "Wide feature set for review, listing, and response workflows",
      "Strong multi-location controls in BeltStack’s positioning",
      "Mature category presence and a common default for larger footprints",
    ],
    cons: [
      "Can feel heavyweight compared with simpler tools like NiceJob or Broadly",
      "Requires process ownership to realize value",
    ],
    bestForEditorial:
      "Best for teams that need one reputation system across many locations and service lines. BeltStack best-for pages put Birdeye on electrician, roofing, general contractor, construction, property-management, and multi-location contractor shortlists when suite depth and location-level response matter.",
    whoShouldAvoid:
      "Owner-led shops that want the easiest onboarding and a narrower review-growth tool. BeltStack consistently points those buyers to NiceJob or Broadly instead of a full suite.",
    pricingSummary:
      "BeltStack lists Birdeye as Custom / quote. Quotes vary by footprint and modules; the roundup tells buyers to compare per-location economics rather than a headline monthly number.",
    pricingTiers:
      "BeltStack does not publish Birdeye plan names or dollar amounts. Treat pricing as a quote exercise by locations and modules.",
    costVsCompetitors:
      "Podium is also quote-based; the documented difference is SMS-first communication versus suite breadth. NiceJob publishes a starting price (from ~$75/mo) and is the simpler, cheaper-looking alternative on paper. Reputation.com is enterprise / custom when governance leads the decision.",
    keyFeatures: [
      {
        name: "Location-level review and response management",
        description:
          "BeltStack’s standout for Birdeye is running review and response operations by location—the reason it appears on multi-location and franchise-style best-for pages.",
      },
      {
        name: "Listings plus reputation in one suite",
        description:
          "Best-for and NAP/listings guide copy treat Birdeye as a listings-aware reputation platform, not only a review-request inbox.",
      },
      {
        name: "Response workflow depth for scaling teams",
        description:
          "The negative-review guide points to Birdeye when teams need assigned response owners and fewer delayed replies across locations.",
      },
      {
        name: "Policy and scale without jumping to enterprise-only software",
        description:
          "Reputation.com vs Birdeye frames Birdeye as the usual balance of breadth and usability when you are not buying primarily for legal/compliance governance.",
      },
    ],
    integrations: [],
    integrationsIntro:
      "BeltStack marks Birdeye as having integrations, but it does not publish a named connector list. Confirm CRM, listings, and operational connectors with the vendor.",
    contractorUse: [
      "Multi-location contractor brands and larger footprints—the role BeltStack’s contractor guide assigns to Birdeye.",
      "Roofing, general contractor, construction, and property-management scenarios where BeltStack shortlists Birdeye for governance-friendly suite depth.",
    ],
    alternatives: [
      { slug: "podium", description: "SMS-first local communication and review requests" },
      { slug: "nicejob", description: "Simpler automation for owner-led teams" },
      { slug: "reputation-com", description: "Enterprise governance and policy workflows" },
    ],
    faqs: [
      {
        q: "Is Birdeye better than Podium for contractors?",
        a: "BeltStack uses Birdeye when the constraint is multi-location suite depth, and Podium when the constraint is SMS-first communication. Neither is a universal winner.",
      },
      {
        q: "When should I pick NiceJob instead of Birdeye?",
        a: "When you want simpler onboarding and review growth without suite weight. BeltStack’s Birdeye vs NiceJob comparison says Birdeye usually wins on breadth at scale; NiceJob often wins on owner-led adoption.",
      },
      {
        q: "How is Birdeye different from Reputation.com?",
        a: "Reputation.com is BeltStack’s enterprise-governance pick. Birdeye is the more common balance of breadth and usability for in-house multi-location teams.",
      },
      {
        q: "Does Birdeye replace a listings or SEO program?",
        a: "BeltStack treats listings support as part of Birdeye’s suite story, but reputation software still pairs with local SEO execution. See the NAP consistency guide and SEO tools hub for that adjacent work.",
      },
      {
        q: "Why is Birdeye quote-priced?",
        a: "BeltStack only records Custom / quote. Footprint and modules change the number; get a per-location quote rather than assuming a list price.",
      },
    ],
    compareLinks: [
      { label: "Podium vs Birdeye", slug: "podium-vs-birdeye" },
      { label: "Birdeye vs NiceJob", slug: "birdeye-vs-nicejob" },
      { label: "Reputation.com vs Birdeye", slug: "reputation-com-vs-birdeye" },
      { label: "Grade.us vs Birdeye", slug: "gradeus-vs-birdeye" },
    ],
    relatedReading: [
      {
        label: "How to respond to negative reviews",
        href: "/reputation-management/guides/how-to-respond-to-negative-reviews",
      },
      {
        label: "NAP consistency and local business listings",
        href: "/reputation-management/guides/nap-consistency-and-local-business-listings",
      },
    ],
  }),

  nicejob: review("nicejob", {
    bestFor: "Simple review growth",
    quickVerdict:
      "NiceJob is BeltStack’s simple-automation pick: it usually wins for owner-led service teams that need consistent review requests without suite complexity.",
    quickVerdictParagraphs: [
      "BeltStack ranks NiceJob as the best option for simple automation and the hub’s “best simple automation” pick. Roundup copy says it is usually the easiest path for service businesses that want less setup friction, with a clear focus on reviews rather than enterprise dashboards.",
      "The Birdeye vs NiceJob comparison says Birdeye usually wins on feature breadth at scale, while NiceJob often wins on simplicity and faster owner-led adoption. Best-for pages put NiceJob on painting, landscaping, handyman, pool service, and small-business shortlists when execution beats suite depth.",
      "The documented tradeoff is less enterprise depth and fewer advanced workflow options. If you need SMS-heavy communication, compare Podium. If you need multi-location suite controls, compare Birdeye.",
    ],
    pros: [
      "Easy onboarding for lean teams",
      "Clear focus on review growth rather than a full enterprise suite",
      "Good fit for small operators in BeltStack’s roundup and best-for pages",
    ],
    cons: [
      "Less enterprise depth than Birdeye or Reputation.com",
      "Fewer advanced workflow options",
    ],
    bestForEditorial:
      "Best for owner-led contractors and small service teams that will actually run a simple request cadence. BeltStack places NiceJob on small-business, painting, landscaping, handyman, home-inspector, and similar shortlists where low-friction onboarding is the buying criterion.",
    whoShouldAvoid:
      "Multi-location or policy-heavy organizations that need suite reporting, listings operations, or enterprise governance. BeltStack points those buyers to Birdeye or Reputation.com.",
    pricingSummary:
      "BeltStack lists NiceJob as From ~$75/mo—the only published monthly starting point among the top three reputation picks. Confirm limits as locations grow.",
    pricingTiers:
      "BeltStack records a free trial on NiceJob and does not publish a full tier table. Treat ~$75/mo as a starting point, then confirm what is included as you add locations.",
    costVsCompetitors:
      "NiceJob is the clearest published-price alternative to quote-based Podium and Birdeye. Broadly is also quote-based; Grade.us starts from ~$110/mo and is positioned for agency campaigns rather than owner-led simplicity.",
    keyFeatures: [
      {
        name: "Simple review request automations",
        description:
          "BeltStack’s standout is low-friction review request automation—the same reason Google-review and contractor guides mention NiceJob for teams that need requests to go out consistently.",
      },
      {
        name: "Owner-led onboarding",
        description:
          "Roundup and alternatives copy emphasize easier setup than suite platforms, which is why NiceJob appears on small-operator and handyman best-for pages.",
      },
      {
        name: "Review-growth focus",
        description:
          "BeltStack describes NiceJob as review-centric rather than a broad listings-plus-governance suite. That narrower scope is the product, not a missing checklist item.",
      },
    ],
    integrations: [],
    integrationsIntro:
      "BeltStack marks NiceJob as having integrations, but it does not publish a named connector list. Confirm job-completion or CRM triggers with the vendor if automation depends on them.",
    contractorUse: [
      "Owner-led contractors who need review requests to run without a dedicated ops hire—the role BeltStack’s contractor guide assigns to NiceJob.",
      "Painting, landscaping, handyman, and similar trades where BeltStack best-for pages prefer simple execution over suite depth.",
    ],
    alternatives: [
      { slug: "podium", description: "SMS-first communication and review requests" },
      { slug: "birdeye", description: "Broader multi-location suite" },
      { slug: "broadly", description: "Another simplicity-first local-service option" },
    ],
    faqs: [
      {
        q: "Is NiceJob better than Podium for a small crew?",
        a: "Often, if the goal is simple review growth and easy onboarding. BeltStack flags Podium as potentially heavy for very small shops and NiceJob as the low-friction path.",
      },
      {
        q: "When does Birdeye beat NiceJob?",
        a: "When you need feature breadth and multi-location controls. BeltStack’s comparison says Birdeye usually wins at scale; NiceJob wins on owner-led adoption.",
      },
      {
        q: "Is $75/mo the full cost?",
        a: "It is BeltStack’s recorded starting price (“From ~$75/mo”). Confirm location limits, seats, and any add-ons with NiceJob before you treat that number as all-in.",
      },
      {
        q: "Does NiceJob include a trial?",
        a: "BeltStack’s registry marks NiceJob as having a free trial. Confirm current trial terms with the vendor.",
      },
      {
        q: "Is NiceJob an enterprise reputation suite?",
        a: "No. BeltStack’s cons are less enterprise depth and fewer advanced workflows. Use Birdeye or Reputation.com when that is the job.",
      },
    ],
    compareLinks: [{ label: "Birdeye vs NiceJob", slug: "birdeye-vs-nicejob" }],
    relatedReading: [
      {
        label: "How to get more Google reviews",
        href: "/reputation-management/guides/how-to-get-more-google-reviews",
      },
      {
        label: "Reputation management for contractors",
        href: "/reputation-management/guides/reputation-management-for-contractors",
      },
    ],
  }),

  "reputation-com": review("reputation-com", {
    bestFor: "Enterprise governance",
    quickVerdict:
      "Reputation.com is BeltStack’s enterprise-governance pick: choose it when legal, compliance, and corporate reporting lead the decision—not when a lean service team wants a simple review tool.",
    quickVerdictParagraphs: [
      "BeltStack ranks Reputation.com as best for enterprise governance. The roundup describes it as designed for organizations with strict governance and reporting needs, with enterprise controls and policy workflows as the standout.",
      "The Reputation.com vs Birdeye comparison says Reputation.com is often chosen for enterprise governance, while Birdeye is a common balance of breadth and usability. Best-for pages put Reputation.com on construction, general contractor, roofing, and property-management shortlists when policy and accountability matter.",
      "The documented tradeoff is higher complexity and a poor fit for lean teams. If you want suite breadth without an enterprise-only buying motion, Birdeye is the comparison BeltStack already publishes.",
    ],
    pros: [
      "Enterprise controls and policy workflows",
      "Strong governance orientation",
      "Multi-location reporting depth in BeltStack’s roundup",
    ],
    cons: [
      "Higher complexity than SMB-first tools",
      "Not ideal for lean teams",
    ],
    bestForEditorial:
      "Best for organizations where approvals, policy, and corporate reporting drive the reputation stack. BeltStack shortlists Reputation.com for construction companies, general contractors, and other governance-heavy scenarios—not as a default small-shop review app.",
    whoShouldAvoid:
      "Lean service teams and owner-operators who need fast onboarding and a simple request cadence. BeltStack’s roundup says Reputation.com is not ideal for lean teams; NiceJob or Broadly fit that job better.",
    pricingSummary:
      "BeltStack lists Reputation.com as Enterprise / custom. There is no published monthly starting price. Include services in total-cost math, as the roundup pricing summary already warns.",
    pricingTiers:
      "BeltStack does not publish Reputation.com plan tiers. Expect an enterprise quote that may include services, not a self-serve SMB price card.",
    costVsCompetitors:
      "Birdeye is also quote-based but positioned as more usable for in-house multi-location teams. Podium and NiceJob are not BeltStack’s governance alternatives; they solve communication-first and simple-automation jobs.",
    keyFeatures: [
      {
        name: "Enterprise controls and policy workflows",
        description:
          "BeltStack’s standout is governance: approvals, policy, and reporting that legal or corporate teams can live with.",
      },
      {
        name: "Multi-location reporting depth",
        description:
          "Roundup copy emphasizes reporting across locations—the same reason construction and property-management best-for pages include Reputation.com.",
      },
      {
        name: "Regulated or policy-heavy buying motion",
        description:
          "Hub and comparison copy reserve this product for buyers whose requirements start with governance, not with SMS speed or owner-led simplicity.",
      },
    ],
    integrations: [],
    integrationsIntro:
      "BeltStack marks Reputation.com as having integrations, but it does not publish a named connector list. Enterprise buyers should confirm required reporting and system connections during the quote process.",
    contractorUse: [
      "General contractors and construction organizations where BeltStack shortlists Reputation.com for structured review monitoring and escalation.",
      "Roofing and property-management scenarios where BeltStack includes Reputation.com when complaint escalation and policy control matter.",
    ],
    alternatives: [
      { slug: "birdeye", description: "Suite breadth with more SMB-friendly usability in BeltStack’s comparison" },
      { slug: "grade-us", description: "Agency-oriented campaigns rather than enterprise governance" },
      { slug: "podium", description: "SMS-first communication if governance is not the buying trigger" },
    ],
    faqs: [
      {
        q: "Should a small HVAC company buy Reputation.com?",
        a: "Usually no. BeltStack positions it for enterprise governance and says it is not ideal for lean teams. Start with Podium, Birdeye, or NiceJob unless policy and corporate reporting are the actual requirement.",
      },
      {
        q: "Reputation.com vs Birdeye: which should we shortlist?",
        a: "BeltStack’s comparison: Reputation.com when enterprise governance leads; Birdeye when you want a common balance of breadth and usability.",
      },
      {
        q: "Is there a published starting price?",
        a: "No. BeltStack records Enterprise / custom. Ask for a quote that includes services, not just software.",
      },
      {
        q: "Does Reputation.com replace Birdeye for multi-location work?",
        a: "Only if governance and policy are the constraint. Multi-location alone is also a Birdeye job in BeltStack’s rankings.",
      },
    ],
    compareLinks: [{ label: "Reputation.com vs Birdeye", slug: "reputation-com-vs-birdeye" }],
    relatedReading: [
      {
        label: "Review response playbooks for multi-location",
        href: "/reputation-management/guides/review-response-playbooks-for-multi-location",
      },
    ],
  }),

  broadly: review("broadly", {
    bestFor: "Local-service simplicity",
    quickVerdict:
      "Broadly is BeltStack’s local-service simplicity pick: it can be easier than Podium for smaller teams with simpler workflows, at the cost of less communication depth and less enterprise capability.",
    quickVerdictParagraphs: [
      "BeltStack’s roundup positions Broadly as a practical option when teams want straightforward review follow-up, with simple local-business messaging and review requests as the standout. Alternatives pages include Broadly for simplicity-first teams.",
      "The only published comparison involving Broadly is Podium vs Broadly: Podium typically offers more communication depth, while Broadly can be easier for smaller service teams. Best-for pages put Broadly on plumbing, painting, landscaping, handyman, and similar shortlists when setup overhead should stay low.",
      "The documented cons are less depth for enterprise and fewer advanced controls. Broadly is not BeltStack’s scale or governance answer.",
    ],
    pros: [
      "Simple setup for local service operations",
      "Good local-business focus",
      "Lower process overhead than suite or enterprise tools",
    ],
    cons: [
      "Less depth for enterprise buyers",
      "Fewer advanced controls than Podium or Birdeye",
    ],
    bestForEditorial:
      "Best for small local-service operators who want messaging-plus-review follow-up without a heavy rollout. BeltStack places Broadly on plumbing, handyman, painting, landscaping, and similar pages when the buying criterion is usability for owner-led teams.",
    whoShouldAvoid:
      "Teams that need SMS-depth comparable to Podium, multi-location suite controls like Birdeye, or enterprise governance like Reputation.com. Broadly is the simpler local path, not those jobs.",
    pricingSummary:
      "BeltStack lists Broadly as Custom / quote. Confirm modules and contact limits before scaling—the roundup pricing note for this product.",
    pricingTiers:
      "BeltStack does not publish Broadly plan tiers or a starting monthly amount. Budget from a vendor quote.",
    costVsCompetitors:
      "NiceJob publishes From ~$75/mo and is the other simplicity-first shortlist item. Podium is also quote-based but positioned as deeper on communication. Do not assume Broadly is cheaper than Podium without quotes.",
    keyFeatures: [
      {
        name: "Simple local-business messaging and review requests",
        description:
          "BeltStack’s standout is straightforward messaging and review follow-up for small service operations—not a full reputation suite.",
      },
      {
        name: "Lower process overhead",
        description:
          "Roundup cons for heavier tools are inverted here: Broadly is the option BeltStack uses when setup and process overhead need to stay small.",
      },
      {
        name: "Fit for owner-led local trades",
        description:
          "Plumbing, handyman, and similar best-for pages include Broadly when teams cannot absorb a complex rollout.",
      },
    ],
    integrations: [],
    integrationsIntro:
      "BeltStack marks Broadly as having integrations, but it does not publish a named connector list. Confirm any required job or CRM connections with the vendor.",
    contractorUse: [
      "Small plumbing, handyman, painting, and landscaping teams where BeltStack best-for pages include Broadly for lightweight review follow-up.",
    ],
    alternatives: [
      { slug: "podium", description: "More communication depth for SMS-first teams" },
      { slug: "nicejob", description: "Published-price simple review automation" },
      { slug: "birdeye", description: "Suite depth if you outgrow a lightweight tool" },
    ],
    faqs: [
      {
        q: "Is Broadly a Podium alternative?",
        a: "Yes in BeltStack’s architecture: Podium vs Broadly exists specifically for that choice. Podium typically has more communication depth; Broadly can be easier for smaller teams.",
      },
      {
        q: "Broadly vs NiceJob?",
        a: "Both sit on simplicity-first shortlists. NiceJob has a published starting price (from ~$75/mo) and a dedicated alternatives page. Broadly is quote-based and framed as local-service messaging plus review requests.",
      },
      {
        q: "Should a multi-location brand start with Broadly?",
        a: "Usually no. BeltStack’s cons are less enterprise depth and fewer advanced controls. Birdeye is the usual scale shortlist.",
      },
      {
        q: "Does BeltStack publish Broadly pricing?",
        a: "Only Custom / quote. Confirm modules and contact limits in a quote.",
      },
    ],
    compareLinks: [{ label: "Podium vs Broadly", slug: "podium-vs-broadly" }],
    relatedReading: [
      {
        label: "Reputation management for contractors",
        href: "/reputation-management/guides/reputation-management-for-contractors",
      },
    ],
  }),

  "grade-us": review("grade-us", {
    bestFor: "Agency campaign management",
    quickVerdict:
      "Grade.us is BeltStack’s agency-friendly review-funnel pick: it is built for agencies managing campaigns across clients, not as the default in-house multi-location suite.",
    quickVerdictParagraphs: [
      "BeltStack’s roundup badge is “Best agency-friendly review funnels.” Description and editorial say Grade.us is commonly used by agencies managing campaigns across multiple clients, with campaign-oriented controls and reporting flexibility.",
      "The only published comparison is Grade.us vs Birdeye: Grade.us is often agency-oriented, while Birdeye is often better for in-house multi-location reputation teams. Best-for pages include Grade.us on general contractor, construction, and event-services lists when campaign-style management is the fit.",
      "The documented cons: it is not as broad as suites, and it can require more setup for owners. If you are an in-house multi-location operator, start with Birdeye rather than forcing an agency-shaped tool.",
    ],
    pros: [
      "Agency workflow fit for multi-client campaigns",
      "Campaign control for repeatable review operations",
      "Reporting flexibility called out in BeltStack’s roundup",
    ],
    cons: [
      "Not as broad as all-in-one suites like Birdeye",
      "Can require more setup for owner-operators than NiceJob or Broadly",
    ],
    bestForEditorial:
      "Best when an agency (or an agency-like internal team) needs repeatable review campaigns across clients. That is the roundup’s explicit job, and it is why Grade.us appears next to Birdeye on some contractor and construction shortlists as a specialized fit—not as the default SMB app.",
    whoShouldAvoid:
      "Owner-operators who want the easiest self-serve review tool, and in-house multi-location brands whose primary need is a reputation suite. BeltStack’s comparison sends those buyers toward NiceJob/Broadly or Birdeye respectively.",
    pricingSummary:
      "BeltStack lists Grade.us as From ~$110/mo. Match the plan to active clients and campaign volume—the roundup’s pricing guidance for this product.",
    pricingTiers:
      "BeltStack records a free trial on Grade.us and does not publish a full plan catalog. Use ~$110/mo as a starting point, then confirm client-count and campaign limits.",
    costVsCompetitors:
      "NiceJob starts lower on BeltStack’s cards (from ~$75/mo) but is not positioned as an agency campaign platform. Birdeye is quote-based and aimed at in-house multi-location operations rather than agency funnels.",
    keyFeatures: [
      {
        name: "Agency-oriented campaign management",
        description:
          "BeltStack’s standout is running review campaigns across clients—the reason this is not framed as a single-location owner tool.",
      },
      {
        name: "Repeatable review funnels",
        description:
          "Roundup editorial emphasizes repeatable operations for agencies, matching the “review funnels” badge.",
      },
      {
        name: "Reporting flexibility for campaign work",
        description:
          "BeltStack lists reporting flexibility as a pro. It does not document a specific report catalog beyond that positioning.",
      },
    ],
    integrations: [],
    integrationsIntro:
      "BeltStack marks Grade.us as having integrations, but it does not publish a named connector list. Agencies should confirm client-site and reporting connections during evaluation.",
    contractorUse: [
      "Agencies serving contractors, or GC/construction accounts where BeltStack includes Grade.us as a specialized campaign-management fit rather than the default field tool.",
    ],
    alternatives: [
      { slug: "birdeye", description: "In-house multi-location suite (Grade.us vs Birdeye)" },
      { slug: "reputation-com", description: "Enterprise governance if policy, not campaigns, is the job" },
      { slug: "nicejob", description: "Simpler owner-led review growth" },
    ],
    faqs: [
      {
        q: "Is Grade.us for agencies or for contractors themselves?",
        a: "BeltStack’s primary positioning is agencies managing campaigns across clients. Some contractor/construction best-for pages include it as a specialized fit, not as the default owner-operator tool.",
      },
      {
        q: "Grade.us vs Birdeye?",
        a: "BeltStack’s comparison: Grade.us is often agency-oriented; Birdeye is often better for in-house multi-location reputation teams.",
      },
      {
        q: "Why is the starting price ~$110/mo?",
        a: "That is the amount BeltStack records. Confirm how it maps to active clients and campaign volume before comparing it to NiceJob’s ~$75/mo starting point.",
      },
      {
        q: "Does Grade.us include a trial?",
        a: "BeltStack’s registry marks Grade.us as having a free trial. Confirm current terms with the vendor.",
      },
    ],
    compareLinks: [{ label: "Grade.us vs Birdeye", slug: "gradeus-vs-birdeye" }],
    relatedReading: [
      {
        label: "How to improve online reputation",
        href: "/reputation-management/guides/how-to-improve-online-reputation",
      },
    ],
  }),

  "trustpilot-business": review("trustpilot-business", {
    bestFor: "Third-party trust visibility",
    quickVerdict:
      "Trustpilot (Business) is BeltStack’s third-party trust-signal pick: it is typically a supplement to Google-first local review operations, not a stand-alone local reputation suite.",
    quickVerdictParagraphs: [
      "BeltStack’s roundup badge is “Best third-party trust signal.” Editorial says Trustpilot is typically a supplement to Google-first local review operations, useful when brands want recognized third-party social proof beyond local maps.",
      "There is no BeltStack comparison page that includes Trustpilot. Best-for pages use it selectively (for example event services, where third-party trust profiles can matter for RFPs). It is not on the default contractor shortlist of Podium, Birdeye, and NiceJob.",
      "The documented cons: it may not be the primary local channel, and value varies by trade. Do not treat this review as a Podium or Birdeye substitute.",
    ],
    pros: [
      "Strong public trust brand",
      "Third-party visibility beyond Google-only proof",
      "Useful for brand-first teams in BeltStack’s roundup",
    ],
    cons: [
      "May not be the primary local review channel",
      "Value varies by trade",
    ],
    bestForEditorial:
      "Best when third-party review visibility is a strategic goal—brand-led proof, or categories where buyers look outside Google. BeltStack does not present Trustpilot as the default Google-review operating system for local trades.",
    whoShouldAvoid:
      "Local service businesses whose reputation program is Google-first and who need request-and-response software for completed jobs. BeltStack’s default shortlist for that job is Podium, Birdeye, or NiceJob.",
    pricingSummary:
      "BeltStack lists Trustpilot (Business) as Custom / quote. Validate ROI against actual lead and close contribution—the roundup’s pricing note—rather than assuming a list price.",
    pricingTiers:
      "BeltStack records a free plan flag for Trustpilot (Business) and custom / quote for paid positioning. Confirm what the free surface includes versus paid business products with the vendor. BeltStack does not publish dollar amounts.",
    costVsCompetitors:
      "Unlike NiceJob or Grade.us, BeltStack does not publish a starting monthly price for Trustpilot. Unlike Podium/Birdeye, the buying job is third-party trust visibility, not local request automation.",
    keyFeatures: [
      {
        name: "Recognized third-party review brand",
        description:
          "BeltStack’s standout is the public Trustpilot brand itself—social proof that sits outside Google Business Profile.",
      },
      {
        name: "Supplement to Google-first local operations",
        description:
          "Roundup editorial is explicit: Trustpilot is typically additive, not a replacement for local review request systems.",
      },
      {
        name: "Brand-first visibility",
        description:
          "Roundup pros emphasize public trust and brand-first teams. BeltStack does not claim Trustpilot wins Map Pack operations on its own.",
      },
    ],
    integrations: [],
    integrationsIntro:
      "BeltStack marks Trustpilot (Business) as having integrations, but it does not publish a named connector list. Confirm any required connections with the vendor. This review does not assert a CRM or FSM integration catalog.",
    alternatives: [
      { slug: "birdeye", description: "Local suite for Google-first review and listings operations" },
      { slug: "podium", description: "SMS-first local review requests" },
      { slug: "grade-us", description: "Agency campaign funnels if the job is campaigns, not third-party brand" },
    ],
    faqs: [
      {
        q: "Does Trustpilot replace Google review software?",
        a: "BeltStack says no: Trustpilot is typically a supplement to Google-first local review operations.",
      },
      {
        q: "Why doesn’t this review link Podium vs Birdeye?",
        a: "That comparison does not include Trustpilot. BeltStack only links comparisons that actually involve the reviewed product.",
      },
      {
        q: "Is there a published Trustpilot price on BeltStack?",
        a: "Only Custom / quote, plus a free-plan flag. Confirm current business pricing with Trustpilot.",
      },
      {
        q: "Which trades does BeltStack associate with Trustpilot?",
        a: "It is not on the default contractor trio. It appears on selected best-for pages (for example event services) where third-party trust profiles are relevant.",
      },
    ],
    relatedReading: [
      {
        label: "How to improve online reputation",
        href: "/reputation-management/guides/how-to-improve-online-reputation",
      },
      {
        label: "Google reviews vs Yelp reviews",
        href: "/reputation-management/guides/google-reviews-vs-yelp-reviews",
      },
    ],
  }),

  "yelp-for-business": review("yelp-for-business", {
    bestFor: "Yelp-heavy local markets",
    quickVerdict:
      "Yelp for Business matters most in metros where Yelp actually influences buyers. BeltStack treats it as a channel-specific presence, not a stand-alone reputation-management suite.",
    quickVerdictParagraphs: [
      "BeltStack’s roundup badge is “Best Yelp-market visibility.” Editorial says fit varies sharply by geography and that you should validate locally before heavy spend. The Google reviews vs Yelp reviews guide says Google is usually primary, while Yelp can still drive demand in specific metros and categories.",
      "There is no BeltStack comparison page that includes Yelp for Business. This review therefore does not link Podium vs Birdeye or other unrelated matchups. The Google vs Yelp guide pairs Yelp for Business with Birdeye when teams need multi-channel operations plus a Yelp-market presence.",
      "The documented cons: inconsistent fit by market, and not enough as a stand-alone strategy. Pair Yelp effort with a Google-first request system when local search is the main pipeline.",
    ],
    pros: [
      "Strong in specific metros where Yelp behavior is real",
      "Consumer familiarity with the Yelp marketplace",
      "Direct visibility on Yelp rather than only on Google",
    ],
    cons: [
      "Inconsistent fit by market",
      "Not enough as a stand-alone reputation strategy",
    ],
    bestForEditorial:
      "Best in Yelp-heavy local markets where profile completeness and Yelp reviews influence leads. The Google vs Yelp guide is explicit: default to Google-first systems, then allocate Yelp effort based on actual market conversion.",
    whoShouldAvoid:
      "Businesses in Google-first markets where customers rarely use Yelp, or teams looking for an all-in-one review-request platform. BeltStack’s roundup says Yelp is not enough as a stand-alone strategy; Podium, Birdeye, or NiceJob cover the operating system for requests and responses.",
    pricingSummary:
      "BeltStack lists Yelp for Business as Varies by market. Economics vary by category and geography—there is no single starting monthly price in BeltStack data.",
    pricingTiers:
      "BeltStack records a free-plan flag for Yelp for Business. Confirm what free profile tools include versus paid advertising or business products. BeltStack does not publish a national rate card.",
    costVsCompetitors:
      "Unlike NiceJob or Grade.us, price is market-dependent rather than a published SaaS starting point. Unlike Podium/Birdeye, you are buying Yelp-channel presence, not a multi-tool reputation suite.",
    keyFeatures: [
      {
        name: "Yelp marketplace presence",
        description:
          "BeltStack’s standout is presence on Yelp itself—the consumer surface—not a generic review-request inbox.",
      },
      {
        name: "Market-dependent local visibility",
        description:
          "Roundup and the Google vs Yelp guide both say impact is uneven by city and service type. Validate with location-level conversion, not a national assumption.",
      },
      {
        name: "Channel strategy, not a full reputation stack",
        description:
          "BeltStack’s cons state Yelp is not enough as a stand-alone strategy. Use it as a channel beside Google-first request tools when the market warrants it.",
      },
    ],
    integrations: [],
    integrationsIntro:
      "BeltStack does not treat Yelp for Business as an integration-heavy suite (the registry flags integrations as false). Keep expectations at Yelp-channel tools rather than a broad CRM connector platform.",
    alternatives: [
      { slug: "birdeye", description: "Multi-channel review operations including Google-first workflows" },
      { slug: "podium", description: "Google-first / SMS request workflows in BeltStack’s contractor shortlist" },
      { slug: "nicejob", description: "Simple review-growth automation off Yelp" },
    ],
    faqs: [
      {
        q: "Should we ignore Yelp if Google is stronger in our city?",
        a: "The Google vs Yelp guide says no as a blanket rule: Yelp can still matter in specific metros and categories. Validate with conversion data, then decide how much operating effort it deserves.",
      },
      {
        q: "Is Yelp for Business a Podium or Birdeye competitor?",
        a: "Not as a full reputation suite. BeltStack positions it as Yelp-market visibility. Request-and-response operating systems are the Podium / Birdeye / NiceJob job.",
      },
      {
        q: "Why are there no Yelp comparison pages linked here?",
        a: "BeltStack has not published a Yelp vs Podium or Yelp vs Birdeye comparison. This review does not reuse unrelated comparisons.",
      },
      {
        q: "How should we split Google vs Yelp effort?",
        a: "The guide’s default is Google-first systems, then allocate Yelp effort based on actual market conversion.",
      },
      {
        q: "How is Yelp priced on BeltStack?",
        a: "Varies by market, with a free-plan flag. There is no single starting monthly price in BeltStack data.",
      },
    ],
    relatedReading: [
      {
        label: "Google reviews vs Yelp reviews",
        href: "/reputation-management/guides/google-reviews-vs-yelp-reviews",
      },
    ],
  }),
};

export function getReputationManagementReviewBySlug(slug: string): ReputationManagementReviewData | undefined {
  return reviews[slug];
}

export function getReputationManagementReviewSlugs(): string[] {
  return Object.keys(reviews);
}

/**
 * Scheduling alternatives page data.
 * Used by app/scheduling/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live scheduling review pages.
 */

import { getSchedulingReviewUrl, getSchedulingCompareUrl, getSchedulingBestForUrl } from "@/lib/routes";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/scheduling", label: "Scheduling" };
const ROUNDUP_HREF = "/scheduling/best-scheduling-software";
const COMPARE_HUB = "/scheduling/compare";
const GUIDES_HUB = "/scheduling/guides";

const LOGOS = {
  calendly: "/Logos/calendly.png",
  acuity: "/Logos/acuity.jpeg",
  youcanbookme: "/Logos/youcanbookme.jpeg",
  setmore: "/Logos/setmore.jpeg",
  simplybookme: "/Logos/simplybook.jpeg",
  square: "/Logos/square.jpeg",
  appointy: "/Logos/appointy.jpeg",
  zoho: "/Logos/zoho.jpeg",
} as const;

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Solo vs team", body: "Solo consultants and freelancers often need one event type and one calendar; teams need round-robin, collective availability, or multi-staff booking. Calendly, YouCanBook.me, and Setmore support teams; compare staff limits and pricing." },
  { heading: "Customization and intake", body: "Acuity and SimplyBook.me offer stronger intake forms, packages, and custom flows. Calendly is simpler with lighter customization. Choose by how much you need to collect before or during booking." },
  { heading: "Service business vs consultant", body: "Service businesses (salons, clinics) may need classes, multi-location, or payments in the flow. Setmore and SimplyBook.me suit service businesses; Calendly and Acuity suit consultants and coaches." },
  { heading: "Calendar and integrations", body: "All major tools sync with Google, Outlook, and Apple. Compare Zoom, payment, and CRM integrations if you need them in the booking flow." },
  { heading: "Pricing and free tier", body: "Calendly and Setmore have free tiers; Acuity and SimplyBook.me are paid. Compare per-staff and per-event-type limits at your scale." },
];

function buildTableRows(
  originalRow: AlternativesTableRow,
  alternatives: AlternativesTopPick[]
): AlternativesTableRow[] {
  const altRows: AlternativesTableRow[] = alternatives.map((a) => ({
    slug: a.slug,
    name: a.name,
    logoSrc: a.logoSrc,
    bestFor: a.bestFor,
    startingPrice: a.startingPrice ?? "—",
    standoutFeature: a.standoutFeature ?? a.bestFor,
    reviewHref: a.reviewHref,
  }));
  return [originalRow, ...altRows];
}

function defaultRelatedResources(productName: string, originalReviewHref: string): AlternativesLink[] {
  return [
    { label: "Scheduling hub", href: CATEGORY.href },
    { label: "Best scheduling software", href: ROUNDUP_HREF },
    { label: "Compare scheduling software", href: COMPARE_HUB },
    { label: "Scheduling guides", href: GUIDES_HUB },
    { label: "Best for freelancers", href: getSchedulingBestForUrl("freelancers") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— Calendly alternatives ———
const CALENDLY_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, rating: "4.6", bestFor: "intake and packages", description: "More intake forms, packages, and customization for consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), compareHref: getSchedulingCompareUrl("calendly-vs-acuity-scheduling"), startingPrice: "From ~$16/mo", standoutFeature: "Intake; packages" },
  { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, rating: "4.5", bestFor: "teams", description: "Strong team and round-robin scheduling at competitive pricing.", reviewHref: getSchedulingReviewUrl("youcanbookme"), compareHref: getSchedulingCompareUrl("calendly-vs-youcanbookme"), startingPrice: "From ~$10/mo", standoutFeature: "Team; round-robin" },
  { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, rating: "4.4", bestFor: "service business", description: "Free tier and service-business focus for salons and solo practitioners.", reviewHref: getSchedulingReviewUrl("setmore"), startingPrice: "Free tier; from ~$9/mo", standoutFeature: "Free tier; service" },
  { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, rating: "4.4", bestFor: "customization", description: "More customization and industry templates at lower price.", reviewHref: getSchedulingReviewUrl("simplybookme"), startingPrice: "From ~$8/mo", standoutFeature: "Customization" },
  { slug: "square-appointments", name: "Square Appointments", logoSrc: LOGOS.square, rating: "4.3", bestFor: "Square ecosystem", description: "Payments and booking in one if you use Square.", reviewHref: getSchedulingReviewUrl("square-appointments"), startingPrice: "Included with Square", standoutFeature: "Square ecosystem" },
];

const calendlyOriginalRow: AlternativesTableRow = {
  slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, bestFor: "overall; simple booking", startingPrice: "Free tier; from ~$10/mo", standoutFeature: "Simple; polished", reviewHref: getSchedulingReviewUrl("calendly"),
};

const calendlyPage: AlternativesTemplateProps = {
  title: "Best Calendly Alternatives (2026)",
  subtitle: "If Calendly isn't the right fit—because you need more intake forms, team features, or lower cost—these scheduling alternatives offer strong options for consultants, freelancers, and teams.",
  productName: "Calendly",
  productSlug: "calendly",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getSchedulingReviewUrl("calendly"),
  quickAnswerParagraphs: [
    "Calendly is a strong default for simple booking; alternatives include Acuity Scheduling for intake and packages, YouCanBook.me for team and round-robin, Setmore for free tier and service business, SimplyBook.me for customization, and Square Appointments if you use Square. Acuity and YouCanBook.me are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Intake and packages", body: "Acuity offers more intake forms, packages, and customizable flows. For consultants and coaches who need to collect more before or during booking." },
    { heading: "Team and cost", body: "YouCanBook.me and Setmore offer strong team features at competitive pricing. Setmore has a free tier." },
    { heading: "Service business", body: "Setmore and SimplyBook.me suit salons, clinics, and service businesses with industry-focused features." },
  ],
  topAlternatives: CALENDLY_ALTERNATIVES,
  comparisonTableRows: buildTableRows(calendlyOriginalRow, CALENDLY_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "Acuity Scheduling", heading: "Best for intake and packages", body: "Acuity adds more intake forms, packages, and customization. For consultants and coaches who need richer booking flows.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), compareHref: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
    { productName: "YouCanBook.me", heading: "Best for teams", body: "YouCanBook.me offers strong team and round-robin scheduling at competitive pricing. For teams that need collective or round-robin booking.", reviewHref: getSchedulingReviewUrl("youcanbookme"), compareHref: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
    { productName: "Setmore", heading: "Best for service business", body: "Setmore has a free tier and service-business focus. For salons, clinics, and solo practitioners.", reviewHref: getSchedulingReviewUrl("setmore") },
    { productName: "SimplyBook.me", heading: "Best for customization", body: "SimplyBook.me offers more customization and industry templates at a lower price. For appointment-heavy businesses.", reviewHref: getSchedulingReviewUrl("simplybookme") },
    { productName: "Square Appointments", heading: "Best for Square ecosystem", body: "Square Appointments fits businesses already using Square; payments and booking in one. For Square users.", reviewHref: getSchedulingReviewUrl("square-appointments") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
    { label: "Calendly vs YouCanBook.me", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
  ],
  relatedResources: defaultRelatedResources("Calendly", getSchedulingReviewUrl("calendly")),
  faqItems: [
    { q: "What is the best Calendly alternative?", a: "Acuity Scheduling for intake and packages; YouCanBook.me for teams; Setmore for free tier and service business; SimplyBook.me for customization." },
    { q: "Is Calendly better than Acuity?", a: "Calendly is simpler and more widely recognized; Acuity offers more intake forms and packages. Choose Calendly for ease; Acuity for customization." },
    { q: "Which scheduling software is free like Calendly?", a: "Calendly and Setmore have free tiers. Compare event types and staff limits; Setmore's free tier suits many service businesses." },
  ],
};

// ——— Acuity Scheduling alternatives ———
const ACUITY_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, rating: "4.7", bestFor: "simplicity", description: "Simpler setup and lower cost for straightforward booking.", reviewHref: getSchedulingReviewUrl("calendly"), compareHref: getSchedulingCompareUrl("calendly-vs-acuity-scheduling"), startingPrice: "Free tier; from ~$10/mo", standoutFeature: "Simple; polished" },
  { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, rating: "4.4", bestFor: "value", description: "Free tier and lower cost for service businesses.", reviewHref: getSchedulingReviewUrl("setmore"), compareHref: getSchedulingCompareUrl("acuity-scheduling-vs-setmore"), startingPrice: "Free tier; from ~$9/mo", standoutFeature: "Free tier; value" },
  { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, rating: "4.4", bestFor: "customization", description: "More customization at lower price for salons and local services.", reviewHref: getSchedulingReviewUrl("simplybookme"), startingPrice: "From ~$8/mo", standoutFeature: "Customization" },
  { slug: "square-appointments", name: "Square Appointments", logoSrc: LOGOS.square, rating: "4.3", bestFor: "Square", description: "Payments and booking in one if you use Square.", reviewHref: getSchedulingReviewUrl("square-appointments"), compareHref: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling"), startingPrice: "Included with Square", standoutFeature: "Square ecosystem" },
  { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, rating: "4.5", bestFor: "teams", description: "Strong team and round-robin scheduling.", reviewHref: getSchedulingReviewUrl("youcanbookme"), startingPrice: "From ~$10/mo", standoutFeature: "Team; round-robin" },
];

const acuityPage: AlternativesTemplateProps = {
  ...calendlyPage,
  title: "Best Acuity Scheduling Alternatives (2026)",
  subtitle: "If Acuity Scheduling isn't the right fit—because of cost, preference for simplicity, or different features—these scheduling alternatives offer strong options.",
  productName: "Acuity Scheduling",
  productSlug: "acuity-scheduling",
  originalReviewHref: getSchedulingReviewUrl("acuity-scheduling"),
  quickAnswerParagraphs: [
    "Acuity Scheduling is strong for intake and packages; alternatives include Calendly for simplicity, Setmore for free tier and value, SimplyBook.me for customization at lower price, and Square Appointments if you use Square. Calendly and Setmore are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Calendly has a free tier; Setmore and SimplyBook.me offer lower-cost or free options. Acuity is typically higher priced." },
    { heading: "Simplicity", body: "Calendly is simpler to set up and more widely recognized. For teams that don't need Acuity's depth." },
    { heading: "Square", body: "Square Appointments fits businesses already in the Square ecosystem; payments and booking in one." },
  ],
  topAlternatives: ACUITY_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, bestFor: "intake; packages", startingPrice: "From ~$16/mo", standoutFeature: "Intake; packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
    ACUITY_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Calendly", heading: "Best for simplicity", body: "Calendly is simpler setup and lower cost for straightforward booking. For teams that don't need Acuity's intake depth.", reviewHref: getSchedulingReviewUrl("calendly"), compareHref: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
    { productName: "Setmore", heading: "Best for value", body: "Setmore has a free tier and lower cost for service businesses that need less customization.", reviewHref: getSchedulingReviewUrl("setmore"), compareHref: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
    { productName: "SimplyBook.me", heading: "Best for customization", body: "SimplyBook.me offers more customization at a lower price for salons and local services.", reviewHref: getSchedulingReviewUrl("simplybookme") },
    { productName: "Square Appointments", heading: "Best for Square", body: "Square Appointments fits Square users; payments and booking in one ecosystem.", reviewHref: getSchedulingReviewUrl("square-appointments"), compareHref: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
    { productName: "YouCanBook.me", heading: "Best for teams", body: "YouCanBook.me offers strong team and round-robin scheduling. For teams that need collective booking.", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  ],
  relatedComparisons: [
    { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
    { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
    { label: "Square Appointments vs Acuity Scheduling", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
  ],
  relatedResources: defaultRelatedResources("Acuity Scheduling", getSchedulingReviewUrl("acuity-scheduling")),
  faqItems: [
    { q: "What is the best Acuity Scheduling alternative?", a: "Calendly for simplicity; Setmore for free tier and value; SimplyBook.me for customization; Square Appointments for Square users." },
    { q: "Is Acuity better than Calendly?", a: "Acuity offers more intake forms and packages; Calendly is simpler and has a free tier. Choose Acuity for customization; Calendly for ease." },
    { q: "Which scheduling software is cheaper than Acuity?", a: "Calendly and Setmore have free tiers. SimplyBook.me starts at a lower price. Compare features and staff limits." },
  ],
};

// ——— YouCanBook.me alternatives ———
const YOUCANBOOKME_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, rating: "4.7", bestFor: "brand recognition", description: "Simpler and more recognizable for solo or light team use.", reviewHref: getSchedulingReviewUrl("calendly"), compareHref: getSchedulingCompareUrl("calendly-vs-youcanbookme"), startingPrice: "Free tier; from ~$10/mo", standoutFeature: "Simple; polished" },
  { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, rating: "4.6", bestFor: "intake", description: "More intake forms and packages for consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), startingPrice: "From ~$16/mo", standoutFeature: "Intake; packages" },
  { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, rating: "4.4", bestFor: "service business", description: "Free tier and service-business focus.", reviewHref: getSchedulingReviewUrl("setmore"), startingPrice: "Free tier; from ~$9/mo", standoutFeature: "Free tier" },
  { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, rating: "4.4", bestFor: "customization", description: "More customization and industry templates.", reviewHref: getSchedulingReviewUrl("simplybookme"), startingPrice: "From ~$8/mo", standoutFeature: "Customization" },
  { slug: "square-appointments", name: "Square Appointments", logoSrc: LOGOS.square, rating: "4.3", bestFor: "Square", description: "Payments and booking in one with Square.", reviewHref: getSchedulingReviewUrl("square-appointments"), startingPrice: "Included with Square", standoutFeature: "Square ecosystem" },
];

const youcanbookmePage: AlternativesTemplateProps = {
  ...calendlyPage,
  title: "Best YouCanBook.me Alternatives (2026)",
  subtitle: "If YouCanBook.me isn't the right fit—because you want stronger brand recognition, more intake, or different features—these scheduling alternatives offer strong options.",
  productName: "YouCanBook.me",
  productSlug: "youcanbookme",
  originalReviewHref: getSchedulingReviewUrl("youcanbookme"),
  quickAnswerParagraphs: [
    "YouCanBook.me is strong for team and round-robin scheduling; alternatives include Calendly for simplicity and brand recognition, Acuity for intake and packages, Setmore for free tier, and SimplyBook.me for customization. Calendly is the main alternative for broader recognition.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Brand recognition", body: "Calendly is more widely recognized by clients. Simpler for solo or light team use." },
    { heading: "Intake", body: "Acuity offers more intake forms and packages. For consultants and coaches who need richer flows." },
    { heading: "Cost", body: "Setmore has a free tier; SimplyBook.me has lower starting price. Compare team and event limits." },
  ],
  topAlternatives: YOUCANBOOKME_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, bestFor: "teams; round-robin", startingPrice: "From ~$10/mo", standoutFeature: "Team; round-robin", reviewHref: getSchedulingReviewUrl("youcanbookme") },
    YOUCANBOOKME_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Calendly", heading: "Best for brand recognition", body: "Calendly is simpler and more recognizable for solo or light team use. Broader adoption.", reviewHref: getSchedulingReviewUrl("calendly"), compareHref: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
    { productName: "Acuity Scheduling", heading: "Best for intake", body: "Acuity adds more intake forms and packages for consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
    { productName: "Setmore", heading: "Best for service business", body: "Setmore has a free tier and service-business focus.", reviewHref: getSchedulingReviewUrl("setmore") },
    { productName: "SimplyBook.me", heading: "Best for customization", body: "SimplyBook.me offers more customization and industry templates at similar pricing.", reviewHref: getSchedulingReviewUrl("simplybookme") },
    { productName: "Square Appointments", heading: "Best for Square", body: "Square Appointments fits Square users; payments and booking in one.", reviewHref: getSchedulingReviewUrl("square-appointments") },
  ],
  relatedComparisons: [
    { label: "Calendly vs YouCanBook.me", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
  ],
  relatedResources: defaultRelatedResources("YouCanBook.me", getSchedulingReviewUrl("youcanbookme")),
  faqItems: [
    { q: "What is the best YouCanBook.me alternative?", a: "Calendly for brand recognition; Acuity for intake; Setmore for free tier; SimplyBook.me for customization." },
    { q: "Is YouCanBook.me better than Calendly?", a: "YouCanBook.me offers strong team and round-robin at competitive pricing; Calendly is more widely recognized. Choose by team needs vs brand." },
    { q: "Which scheduling software has a free tier?", a: "Calendly and Setmore have free tiers. YouCanBook.me is paid; compare team and event limits." },
  ],
};

// ——— Setmore alternatives ———
const SETMORE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, rating: "4.6", bestFor: "intake", description: "More polished and more intake/packages; higher price.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), compareHref: getSchedulingCompareUrl("acuity-scheduling-vs-setmore"), startingPrice: "From ~$16/mo", standoutFeature: "Intake; packages" },
  { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, rating: "4.7", bestFor: "simplicity", description: "Simpler and more recognizable; less customization.", reviewHref: getSchedulingReviewUrl("calendly"), startingPrice: "Free tier; from ~$10/mo", standoutFeature: "Simple; polished" },
  { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, rating: "4.4", bestFor: "customization", description: "More customization at similar or lower price.", reviewHref: getSchedulingReviewUrl("simplybookme"), compareHref: getSchedulingCompareUrl("simplybookme-vs-setmore"), startingPrice: "From ~$8/mo", standoutFeature: "Customization" },
  { slug: "square-appointments", name: "Square Appointments", logoSrc: LOGOS.square, rating: "4.3", bestFor: "Square", description: "Payments and booking in one with Square.", reviewHref: getSchedulingReviewUrl("square-appointments"), startingPrice: "Included with Square", standoutFeature: "Square ecosystem" },
  { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, rating: "4.5", bestFor: "teams", description: "Strong team and round-robin scheduling.", reviewHref: getSchedulingReviewUrl("youcanbookme"), startingPrice: "From ~$10/mo", standoutFeature: "Team; round-robin" },
];

const setmorePage: AlternativesTemplateProps = {
  ...calendlyPage,
  title: "Best Setmore Alternatives (2026)",
  subtitle: "If Setmore isn't the right fit—because you need more customization, intake, or different features—these scheduling alternatives offer strong options.",
  productName: "Setmore",
  productSlug: "setmore",
  originalReviewHref: getSchedulingReviewUrl("setmore"),
  quickAnswerParagraphs: [
    "Setmore offers a free tier and service-business focus; alternatives include Acuity for more intake and packages, Calendly for simplicity and brand recognition, SimplyBook.me for more customization, and Square Appointments if you use Square. Acuity and SimplyBook.me are common alternatives when you need more features.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Intake and packages", body: "Acuity offers more intake forms and packages. For consultants and coaches who need richer booking flows." },
    { heading: "Customization", body: "SimplyBook.me offers more customization at similar or lower price. For appointment-heavy businesses." },
    { heading: "Brand", body: "Calendly is more widely recognized. For teams that want the most familiar booking experience." },
  ],
  topAlternatives: SETMORE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, bestFor: "service business; free tier", startingPrice: "Free tier; from ~$9/mo", standoutFeature: "Free tier; service", reviewHref: getSchedulingReviewUrl("setmore") },
    SETMORE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Acuity Scheduling", heading: "Best for intake", body: "Acuity is more polished with more intake forms and packages; higher price. For consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), compareHref: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
    { productName: "Calendly", heading: "Best for simplicity", body: "Calendly is simpler and more recognizable; less customization. For straightforward booking.", reviewHref: getSchedulingReviewUrl("calendly") },
    { productName: "SimplyBook.me", heading: "Best for customization", body: "SimplyBook.me offers more customization at similar or lower price. Compare features and limits.", reviewHref: getSchedulingReviewUrl("simplybookme"), compareHref: getSchedulingCompareUrl("simplybookme-vs-setmore") },
    { productName: "Square Appointments", heading: "Best for Square", body: "Square Appointments fits Square users; payments and booking in one.", reviewHref: getSchedulingReviewUrl("square-appointments") },
    { productName: "YouCanBook.me", heading: "Best for teams", body: "YouCanBook.me offers strong team and round-robin scheduling. For teams that need collective booking.", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  ],
  relatedComparisons: [
    { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
    { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
  ],
  relatedResources: defaultRelatedResources("Setmore", getSchedulingReviewUrl("setmore")),
  faqItems: [
    { q: "What is the best Setmore alternative?", a: "Acuity for intake; Calendly for simplicity; SimplyBook.me for customization; Square Appointments for Square users." },
    { q: "Is Setmore better than Calendly?", a: "Setmore has a free tier and service-business focus; Calendly is more widely recognized. Choose by free tier and service features vs brand." },
    { q: "Which scheduling software has more customization than Setmore?", a: "Acuity and SimplyBook.me offer more customization. SimplyBook.me often at lower price; Acuity for intake and packages." },
  ],
};

// ——— SimplyBook.me alternatives ———
const SIMPLYBOOKME_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, rating: "4.4", bestFor: "free tier", description: "Simpler and with free tier for smaller teams.", reviewHref: getSchedulingReviewUrl("setmore"), compareHref: getSchedulingCompareUrl("simplybookme-vs-setmore"), startingPrice: "Free tier; from ~$9/mo", standoutFeature: "Free tier" },
  { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, rating: "4.6", bestFor: "intake", description: "More intake forms and packages for consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), startingPrice: "From ~$16/mo", standoutFeature: "Intake; packages" },
  { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, rating: "4.7", bestFor: "simplicity", description: "Simpler setup and stronger brand recognition.", reviewHref: getSchedulingReviewUrl("calendly"), startingPrice: "Free tier; from ~$10/mo", standoutFeature: "Simple; polished" },
  { slug: "square-appointments", name: "Square Appointments", logoSrc: LOGOS.square, rating: "4.3", bestFor: "Square", description: "Payments and booking in one with Square.", reviewHref: getSchedulingReviewUrl("square-appointments"), startingPrice: "Included with Square", standoutFeature: "Square ecosystem" },
  { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, rating: "4.5", bestFor: "teams", description: "Strong team and round-robin scheduling.", reviewHref: getSchedulingReviewUrl("youcanbookme"), startingPrice: "From ~$10/mo", standoutFeature: "Team; round-robin" },
];

const simplybookmePage: AlternativesTemplateProps = {
  ...calendlyPage,
  title: "Best SimplyBook.me Alternatives (2026)",
  subtitle: "If SimplyBook.me isn't the right fit—because you want a free tier, simpler setup, or different features—these scheduling alternatives offer strong options.",
  productName: "SimplyBook.me",
  productSlug: "simplybookme",
  originalReviewHref: getSchedulingReviewUrl("simplybookme"),
  quickAnswerParagraphs: [
    "SimplyBook.me offers customization at lower price; alternatives include Setmore for free tier, Acuity for more intake and packages, Calendly for simplicity and brand, and Square Appointments if you use Square. Setmore and Acuity are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Free tier", body: "Setmore has a free tier; SimplyBook.me is paid. For teams that want to minimize cost." },
    { heading: "Simplicity", body: "Calendly is simpler to set up and more widely recognized. Less customization but easier adoption." },
    { heading: "Intake", body: "Acuity offers more intake forms and packages. For consultants and coaches who need deeper flows." },
  ],
  topAlternatives: SIMPLYBOOKME_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, bestFor: "customization", startingPrice: "From ~$8/mo", standoutFeature: "Customization", reviewHref: getSchedulingReviewUrl("simplybookme") },
    SIMPLYBOOKME_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Setmore", heading: "Best for free tier", body: "Setmore is simpler with a free tier for smaller teams. Compare features and staff limits.", reviewHref: getSchedulingReviewUrl("setmore"), compareHref: getSchedulingCompareUrl("simplybookme-vs-setmore") },
    { productName: "Acuity Scheduling", heading: "Best for intake", body: "Acuity adds more intake forms and packages for consultants and coaches. Higher price.", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
    { productName: "Calendly", heading: "Best for simplicity", body: "Calendly has simpler setup and stronger brand recognition; less customization.", reviewHref: getSchedulingReviewUrl("calendly") },
    { productName: "Square Appointments", heading: "Best for Square", body: "Square Appointments fits Square users; payments and booking in one.", reviewHref: getSchedulingReviewUrl("square-appointments") },
    { productName: "YouCanBook.me", heading: "Best for teams", body: "YouCanBook.me offers strong team and round-robin scheduling.", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  ],
  relatedComparisons: [
    { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
  ],
  relatedResources: defaultRelatedResources("SimplyBook.me", getSchedulingReviewUrl("simplybookme")),
  faqItems: [
    { q: "What is the best SimplyBook.me alternative?", a: "Setmore for free tier; Acuity for intake; Calendly for simplicity; Square Appointments for Square users." },
    { q: "Is SimplyBook.me better than Setmore?", a: "SimplyBook.me offers more customization; Setmore has a free tier. Choose by customization needs vs cost." },
    { q: "Which scheduling software is free?", a: "Calendly and Setmore have free tiers. Compare event types and staff limits for your use case." },
  ],
};

// ——— Square Appointments alternatives ———
const SQUARE_APPOINTMENTS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, rating: "4.7", bestFor: "standalone", description: "More features and integrations if you're not tied to Square.", reviewHref: getSchedulingReviewUrl("calendly"), startingPrice: "Free tier; from ~$10/mo", standoutFeature: "Standalone; integrations" },
  { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, rating: "4.6", bestFor: "intake", description: "More intake forms and packages for consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), compareHref: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling"), startingPrice: "From ~$16/mo", standoutFeature: "Intake; packages" },
  { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, rating: "4.4", bestFor: "free tier", description: "Free tier and standalone scheduling for non-Square users.", reviewHref: getSchedulingReviewUrl("setmore"), startingPrice: "Free tier; from ~$9/mo", standoutFeature: "Free tier" },
  { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, rating: "4.4", bestFor: "customization", description: "More customization at lower price.", reviewHref: getSchedulingReviewUrl("simplybookme"), startingPrice: "From ~$8/mo", standoutFeature: "Customization" },
  { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, rating: "4.5", bestFor: "teams", description: "Strong team and round-robin scheduling.", reviewHref: getSchedulingReviewUrl("youcanbookme"), startingPrice: "From ~$10/mo", standoutFeature: "Team; round-robin" },
];

const squareAppointmentsPage: AlternativesTemplateProps = {
  ...calendlyPage,
  title: "Best Square Appointments Alternatives (2026)",
  subtitle: "If Square Appointments isn't the right fit—because you don't use Square or need more scheduling features—these alternatives offer strong options.",
  productName: "Square Appointments",
  productSlug: "square-appointments",
  originalReviewHref: getSchedulingReviewUrl("square-appointments"),
  quickAnswerParagraphs: [
    "Square Appointments fits businesses already using Square; alternatives include Calendly for standalone scheduling and more integrations, Acuity for intake and packages, Setmore for free tier, and SimplyBook.me or YouCanBook.me for different features. Calendly and Acuity are the main alternatives when you're not tied to Square.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not using Square", body: "Calendly, Setmore, and others are standalone scheduling tools with broader integrations. For businesses that don't use Square for payments." },
    { heading: "More features", body: "Acuity offers more intake and packages; Calendly has more integrations. For teams that need more than Square Appointments provides." },
    { heading: "Free tier", body: "Setmore and Calendly have free tiers. Square Appointments is included with Square but requires Square." },
  ],
  topAlternatives: SQUARE_APPOINTMENTS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "square-appointments", name: "Square Appointments", logoSrc: LOGOS.square, bestFor: "Square ecosystem", startingPrice: "Included with Square", standoutFeature: "Square ecosystem", reviewHref: getSchedulingReviewUrl("square-appointments") },
    SQUARE_APPOINTMENTS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Calendly", heading: "Best for standalone", body: "Calendly offers more features and integrations if you're not tied to Square. Stronger standalone experience.", reviewHref: getSchedulingReviewUrl("calendly") },
    { productName: "Acuity Scheduling", heading: "Best for intake", body: "Acuity adds more intake forms and packages for consultants and coaches. Compare with Square Appointments for fit.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), compareHref: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
    { productName: "Setmore", heading: "Best for free tier", body: "Setmore has a free tier and standalone scheduling for non-Square users.", reviewHref: getSchedulingReviewUrl("setmore") },
    { productName: "SimplyBook.me", heading: "Best for customization", body: "SimplyBook.me offers more customization at lower price. For single-location businesses.", reviewHref: getSchedulingReviewUrl("simplybookme") },
    { productName: "YouCanBook.me", heading: "Best for teams", body: "YouCanBook.me offers strong team and round-robin scheduling for non-Square users.", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  ],
  relatedComparisons: [
    { label: "Square Appointments vs Acuity Scheduling", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
  ],
  relatedResources: defaultRelatedResources("Square Appointments", getSchedulingReviewUrl("square-appointments")),
  faqItems: [
    { q: "What is the best Square Appointments alternative?", a: "Calendly for standalone; Acuity for intake; Setmore for free tier; SimplyBook.me and YouCanBook.me for different features." },
    { q: "Is Square Appointments better than Calendly?", a: "Square Appointments fits Square users (payments + booking); Calendly is stronger as standalone scheduling with more integrations. Choose by whether you use Square." },
    { q: "Which scheduling software works without Square?", a: "Calendly, Acuity, Setmore, SimplyBook.me, and YouCanBook.me are all standalone. Compare features and pricing." },
  ],
};

// ——— Appointy alternatives ———
const APPOINTY_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, rating: "4.4", bestFor: "service business", description: "Simpler and with free tier for smaller teams.", reviewHref: getSchedulingReviewUrl("setmore"), startingPrice: "Free tier; from ~$9/mo", standoutFeature: "Free tier; service" },
  { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, rating: "4.6", bestFor: "intake", description: "More intake forms and packages for consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), startingPrice: "From ~$16/mo", standoutFeature: "Intake; packages" },
  { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, rating: "4.7", bestFor: "simplicity", description: "Simpler setup and stronger brand recognition.", reviewHref: getSchedulingReviewUrl("calendly"), startingPrice: "Free tier; from ~$10/mo", standoutFeature: "Simple; polished" },
  { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, rating: "4.4", bestFor: "customization", description: "More customization at lower price for single-location businesses.", reviewHref: getSchedulingReviewUrl("simplybookme"), startingPrice: "From ~$8/mo", standoutFeature: "Customization" },
  { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, rating: "4.5", bestFor: "teams", description: "Strong team and round-robin scheduling.", reviewHref: getSchedulingReviewUrl("youcanbookme"), startingPrice: "From ~$10/mo", standoutFeature: "Team; round-robin" },
];

const appointyPage: AlternativesTemplateProps = {
  ...calendlyPage,
  title: "Best Appointy Alternatives (2026)",
  subtitle: "If Appointy isn't the right fit—because of features, preference for different UX, or pricing—these scheduling alternatives offer strong options.",
  productName: "Appointy",
  productSlug: "appointy",
  originalReviewHref: getSchedulingReviewUrl("appointy"),
  quickAnswerParagraphs: [
    "Appointy is one of many scheduling options; alternatives include Setmore for free tier and service business, Acuity for intake and packages, Calendly for simplicity and brand, and SimplyBook.me or YouCanBook.me for customization and teams. Setmore and Calendly are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Free tier", body: "Setmore and Calendly have free tiers. For teams that want to minimize cost." },
    { heading: "Simplicity", body: "Calendly is simpler to set up and more widely recognized." },
    { heading: "Intake and customization", body: "Acuity and SimplyBook.me offer stronger intake and customization. For consultants and service businesses." },
  ],
  topAlternatives: APPOINTY_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "appointy", name: "Appointy", logoSrc: LOGOS.appointy, bestFor: "scheduling", startingPrice: "Quote", standoutFeature: "Scheduling", reviewHref: getSchedulingReviewUrl("appointy") },
    APPOINTY_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Setmore", heading: "Best for service business", body: "Setmore is simpler with a free tier for smaller teams and service businesses.", reviewHref: getSchedulingReviewUrl("setmore") },
    { productName: "Acuity Scheduling", heading: "Best for intake", body: "Acuity adds more intake forms and packages for consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
    { productName: "Calendly", heading: "Best for simplicity", body: "Calendly has simpler setup and stronger brand recognition.", reviewHref: getSchedulingReviewUrl("calendly") },
    { productName: "SimplyBook.me", heading: "Best for customization", body: "SimplyBook.me offers more customization at lower price for single-location businesses.", reviewHref: getSchedulingReviewUrl("simplybookme") },
    { productName: "YouCanBook.me", heading: "Best for teams", body: "YouCanBook.me offers strong team and round-robin scheduling.", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("Appointy", getSchedulingReviewUrl("appointy")),
  faqItems: [
    { q: "What is the best Appointy alternative?", a: "Setmore for free tier and service; Acuity for intake; Calendly for simplicity; SimplyBook.me for customization; YouCanBook.me for teams." },
    { q: "Which scheduling software has a free tier?", a: "Calendly and Setmore have free tiers. Compare event types and staff limits." },
    { q: "Is Appointy better than Setmore?", a: "Compare features and pricing for your use case. Setmore has a free tier and service-business focus; Appointy may suit different needs." },
  ],
};

// ——— Zoho Bookings alternatives ———
const ZOHO_BOOKINGS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, rating: "4.7", bestFor: "standalone", description: "Stronger standalone experience and broader integrations.", reviewHref: getSchedulingReviewUrl("calendly"), startingPrice: "Free tier; from ~$10/mo", standoutFeature: "Standalone; integrations" },
  { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, rating: "4.6", bestFor: "intake", description: "More intake forms and packages for consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling"), startingPrice: "From ~$16/mo", standoutFeature: "Intake; packages" },
  { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, rating: "4.5", bestFor: "teams", description: "Strong team and round-robin scheduling for non-Zoho users.", reviewHref: getSchedulingReviewUrl("youcanbookme"), startingPrice: "From ~$10/mo", standoutFeature: "Team; round-robin" },
  { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, rating: "4.4", bestFor: "free tier", description: "Free tier and service-business focus.", reviewHref: getSchedulingReviewUrl("setmore"), startingPrice: "Free tier; from ~$9/mo", standoutFeature: "Free tier" },
  { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, rating: "4.4", bestFor: "customization", description: "More customization at lower price.", reviewHref: getSchedulingReviewUrl("simplybookme"), startingPrice: "From ~$8/mo", standoutFeature: "Customization" },
];

const zohoBookingsPage: AlternativesTemplateProps = {
  ...calendlyPage,
  title: "Best Zoho Bookings Alternatives (2026)",
  subtitle: "If Zoho Bookings isn't the right fit—because you don't use Zoho or need more scheduling features—these alternatives offer strong options.",
  productName: "Zoho Bookings",
  productSlug: "zoho-bookings",
  originalReviewHref: getSchedulingReviewUrl("zoho-bookings"),
  quickAnswerParagraphs: [
    "Zoho Bookings fits the Zoho ecosystem; alternatives include Calendly for standalone and broader integrations, Acuity for intake and packages, YouCanBook.me for team scheduling, and Setmore or SimplyBook.me for different value. Calendly and Acuity are the main alternatives when you're not tied to Zoho.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not using Zoho", body: "Calendly, Acuity, and others are standalone or integrate with many stacks. For teams that don't use Zoho." },
    { heading: "More features", body: "Acuity offers more intake and packages; Calendly has more integrations. For teams that need more than Zoho Bookings provides." },
    { heading: "Team scheduling", body: "YouCanBook.me offers strong team and round-robin scheduling. For non-Zoho users who need team booking.", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  ],
  topAlternatives: ZOHO_BOOKINGS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "zoho-bookings", name: "Zoho Bookings", logoSrc: LOGOS.zoho, bestFor: "Zoho ecosystem", startingPrice: "Quote", standoutFeature: "Zoho ecosystem", reviewHref: getSchedulingReviewUrl("zoho-bookings") },
    ZOHO_BOOKINGS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Calendly", heading: "Best for standalone", body: "Calendly offers stronger standalone experience and broader integrations. For teams not using Zoho.", reviewHref: getSchedulingReviewUrl("calendly") },
    { productName: "Acuity Scheduling", heading: "Best for intake", body: "Acuity adds more intake forms and packages for consultants and coaches.", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
    { productName: "YouCanBook.me", heading: "Best for teams", body: "YouCanBook.me offers strong team and round-robin scheduling for non-Zoho users.", reviewHref: getSchedulingReviewUrl("youcanbookme") },
    { productName: "Setmore", heading: "Best for free tier", body: "Setmore has a free tier and service-business focus.", reviewHref: getSchedulingReviewUrl("setmore") },
    { productName: "SimplyBook.me", heading: "Best for customization", body: "SimplyBook.me offers more customization at lower price.", reviewHref: getSchedulingReviewUrl("simplybookme") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("Zoho Bookings", getSchedulingReviewUrl("zoho-bookings")),
  faqItems: [
    { q: "What is the best Zoho Bookings alternative?", a: "Calendly for standalone; Acuity for intake; YouCanBook.me for teams; Setmore and SimplyBook.me for different value." },
    { q: "Is Zoho Bookings better than Calendly?", a: "Zoho Bookings fits the Zoho ecosystem; Calendly is stronger as standalone with more integrations. Choose by whether you use Zoho." },
    { q: "Which scheduling software works without Zoho?", a: "Calendly, Acuity, YouCanBook.me, Setmore, and SimplyBook.me are all standalone or multi-platform. Compare features and pricing." },
  ],
};

// ——— Export ———
const SCHEDULING_ALTERNATIVES_SLUGS = [
  "calendly", "acuity-scheduling", "youcanbookme", "setmore", "simplybookme",
  "square-appointments", "appointy", "zoho-bookings",
] as const;

const PAGES: Record<string, AlternativesTemplateProps> = {
  calendly: calendlyPage,
  "acuity-scheduling": acuityPage,
  youcanbookme: youcanbookmePage,
  setmore: setmorePage,
  simplybookme: simplybookmePage,
  "square-appointments": squareAppointmentsPage,
  appointy: appointyPage,
  "zoho-bookings": zohoBookingsPage,
};

export function getSchedulingAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getSchedulingAlternativesSlugs(): string[] {
  return [...SCHEDULING_ALTERNATIVES_SLUGS];
}
/**
 * Scheduling best-for pages for trade-specific use cases.
 * Featured triples vary by trade; products map to canonical scheduling reviews.
 */

import type {
  BestForComparisonLink,
  BestForEditorialBlock,
  BestForFaqItem,
  BestForFeaturedProduct,
  BestForGuideLink,
  BestForReviewLink,
  BestForTableRow,
  BestForTemplateProps,
} from "@/components/best/BestForTemplate";
import { getSchedulingCompareUrl, getSchedulingReviewUrl } from "@/lib/routes";

const CATEGORY = { href: "/scheduling", label: "Scheduling" };
const SEE_ALSO = {
  roundupLabel: "best scheduling software",
  roundupHref: "/scheduling/best-scheduling-software",
  compareLabel: "scheduling software comparisons",
  compareHref: "/scheduling/compare",
};

const SCHED_PRODUCT_CORE = {
  calendly: {
    name: "Calendly",
    logoSrc: "/Logos/calendly.png",
    rating: "4.7",
    startingPrice: "Free tier; from ~$10/mo",
    visitUrl: "https://calendly.com",
    defaultStandout: "Simple booking links, team scheduling on paid plans",
  },
  "acuity-scheduling": {
    name: "Acuity Scheduling",
    logoSrc: "/Logos/acuity.jpeg",
    rating: "4.6",
    startingPrice: "From ~$16/mo",
    visitUrl: "https://www.acuityscheduling.com",
    defaultStandout: "Intake forms, packages, payment at booking",
  },
  youcanbookme: {
    name: "YouCanBook.me",
    logoSrc: "/Logos/youcanbookme.jpeg",
    rating: "4.5",
    startingPrice: "From ~$10/mo",
    visitUrl: "https://youcanbook.me",
    defaultStandout: "Team & round-robin from connected calendars",
  },
  setmore: {
    name: "Setmore",
    logoSrc: "/Logos/setmore.jpeg",
    rating: "4.4",
    startingPrice: "Free tier; from ~$9/mo",
    visitUrl: "https://www.setmore.com",
    defaultStandout: "Free tier, recurring visits, multi-staff",
  },
  simplybookme: {
    name: "SimplyBook.me",
    logoSrc: "/Logos/simplybook.jpeg",
    rating: "4.4",
    startingPrice: "From ~$8/mo",
    visitUrl: "https://simplybook.me",
    defaultStandout: "Custom forms & industry templates, strong value",
  },
  "square-appointments": {
    name: "Square Appointments",
    logoSrc: "/Logos/square.jpeg",
    rating: "4.3",
    startingPrice: "Included with Square",
    visitUrl: "https://squareup.com",
    defaultStandout: "Booking + Square payments in one ecosystem",
  },
  appointy: {
    name: "Appointy",
    logoSrc: "/Logos/appointy.jpeg",
    rating: "4.3",
    startingPrice: "From ~$10/mo",
    visitUrl: "https://www.appointy.com",
    defaultStandout: "Multi-staff, multi-location, structured ops",
  },
} as const;

type SchedulingProductSlug = keyof typeof SCHED_PRODUCT_CORE;

type ProductPick = {
  slug: SchedulingProductSlug;
  badge: string;
  description: string;
  rowBestFor: string;
  standoutFeature?: string;
  why: string;
};

type TradeConfig = {
  useCase: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  picks: [ProductPick, ProductPick, ProductPick];
  editorialGuidance: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
  extraGuides?: BestForGuideLink[];
};

/** Pairs that have dedicated comparison pages under /scheduling/compare/ */
const SCHED_COMPARISONS: {
  label: string;
  compareSlug: string;
  products: [SchedulingProductSlug, SchedulingProductSlug];
}[] = [
  {
    label: "Calendly vs Acuity Scheduling",
    compareSlug: "calendly-vs-acuity-scheduling",
    products: ["calendly", "acuity-scheduling"],
  },
  {
    label: "Calendly vs YouCanBook.me",
    compareSlug: "calendly-vs-youcanbookme",
    products: ["calendly", "youcanbookme"],
  },
  {
    label: "Acuity Scheduling vs Setmore",
    compareSlug: "acuity-scheduling-vs-setmore",
    products: ["acuity-scheduling", "setmore"],
  },
  {
    label: "SimplyBook.me vs Setmore",
    compareSlug: "simplybookme-vs-setmore",
    products: ["simplybookme", "setmore"],
  },
  {
    label: "Square Appointments vs Acuity Scheduling",
    compareSlug: "square-appointments-vs-acuity-scheduling",
    products: ["square-appointments", "acuity-scheduling"],
  },
];

const DEFAULT_COMPARISON_FALLBACK: BestForComparisonLink[] = [
  { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
  { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
  { label: "Square Appointments vs Acuity Scheduling", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
];

function buildRelatedComparisons(featured: SchedulingProductSlug[]): BestForComparisonLink[] {
  const set = new Set(featured);
  const scored = SCHED_COMPARISONS.map((c) => {
    const [a, b] = c.products;
    const score = (set.has(a) ? 1 : 0) + (set.has(b) ? 1 : 0);
    return { label: c.label, href: getSchedulingCompareUrl(c.compareSlug), score };
  })
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score);
  const out: BestForComparisonLink[] = [];
  const seen = new Set<string>();
  for (const c of scored) {
    if (seen.has(c.href)) continue;
    seen.add(c.href);
    out.push({ label: c.label, href: c.href });
    if (out.length >= 5) break;
  }
  for (const f of DEFAULT_COMPARISON_FALLBACK) {
    if (out.length >= 3) break;
    if (seen.has(f.href)) continue;
    seen.add(f.href);
    out.push(f);
  }
  return out;
}

const REVIEW_FILL_ORDER: SchedulingProductSlug[] = [
  "calendly",
  "acuity-scheduling",
  "setmore",
  "simplybookme",
  "square-appointments",
  "youcanbookme",
  "appointy",
];

function buildRelatedReviews(featured: SchedulingProductSlug[]): BestForReviewLink[] {
  const ordered: SchedulingProductSlug[] = [...featured];
  for (const s of REVIEW_FILL_ORDER) {
    if (!ordered.includes(s)) ordered.push(s);
    if (ordered.length >= 6) break;
  }
  return ordered.map((s) => ({
    name: SCHED_PRODUCT_CORE[s].name,
    href: getSchedulingReviewUrl(s),
  }));
}

const COMMON_GUIDES_BASE: BestForGuideLink[] = [
  { label: "Appointment scheduling for service businesses", href: "/scheduling/guides/appointment-scheduling-for-service-businesses" },
  { label: "How to choose scheduling software", href: "/scheduling/guides/how-to-choose-scheduling-software" },
  { label: "Scheduling software vs field service software", href: "/scheduling/guides/scheduling-software-vs-field-service-software" },
];

function buildTradeProps(p: TradeConfig): BestForTemplateProps {
  const featuredProducts: BestForFeaturedProduct[] = p.picks.map((pick) => {
    const core = SCHED_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      badge: pick.badge,
      description: pick.description,
      rating: core.rating,
      startingPrice: core.startingPrice,
      reviewHref: getSchedulingReviewUrl(pick.slug),
      visitUrl: core.visitUrl,
      logoSrc: core.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = p.picks.map((pick) => {
    const core = SCHED_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      logoSrc: core.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: core.startingPrice,
      standoutFeature: pick.standoutFeature ?? core.defaultStandout,
      reviewHref: getSchedulingReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = p.picks.map((pick) => ({
    heading: SCHED_PRODUCT_CORE[pick.slug].name,
    body: pick.why,
  }));

  const featuredSlugs = p.picks.map((x) => x.slug);
  const relatedGuides = [...COMMON_GUIDES_BASE, ...(p.extraGuides ?? [])].filter(
    (item, i, arr) => arr.findIndex((x) => x.href === item.href) === i
  );

  return {
    title: p.title,
    subtitle: p.subtitle,
    useCase: p.useCase,
    categoryHref: CATEGORY.href,
    categoryLabel: CATEGORY.label,
    introParagraph: p.introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: "Our top scheduling picks for this use case.",
    editorialSub: "What to look for when you choose scheduling software for your business.",
    whyThesePicksSub: "Why we chose these tools for your trade.",
    seeAlsoBlock: SEE_ALSO,
    featuredProducts,
    comparisonTableRows,
    editorialGuidance: p.editorialGuidance,
    whyThesePicks,
    relatedReviews: buildRelatedReviews(featuredSlugs),
    relatedComparisons: buildRelatedComparisons(featuredSlugs),
    relatedGuides,
    faqItems: p.faqItems,
  };
}

const EMERGENCY_GUIDE: BestForGuideLink = {
  label: "Emergency and same-day appointment scheduling",
  href: "/scheduling/guides/emergency-and-same-day-appointment-scheduling",
};

const ROUTE_GUIDE: BestForGuideLink = {
  label: "Route optimization for service businesses",
  href: "/scheduling/guides/route-optimization-for-service-businesses",
};

const E = (heading: string, body: string): BestForEditorialBlock => ({ heading, body });

export const HVAC_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "hvac",
  title: "Best Scheduling Software for HVAC Businesses (2026)",
  subtitle:
    "Compare scheduling tools for HVAC companies: maintenance agreements, seasonal demand, multi-tech calendars, reminders, and payments—without drowning in phone tag.",
  introParagraph:
    "HVAC businesses juggle tune-ups, repairs, installs, and emergency calls across multiple technicians. Scheduling software should show real availability per tech, support recurring maintenance windows, and send reminders so homeowners show up or reschedule instead of no-showing. We focus on tools that fit how you already get paid and how fairly you assign trucks—not the same three picks for every trade.",
  picks: [
    {
      slug: "square-appointments",
      badge: "Best for HVAC shops already on Square",
      description:
        "Keep booking and card-present or invoiced payments in one Square account—useful when you collect deposits on installs or charge after service.",
      rowBestFor: "Square-native HVAC",
      why: "Square Appointments fits HVAC shops that already process installs, repairs, and maintenance through Square—booking, deposits, and card-present charges stay in one financial home. In a trial, create services for tune-ups, diagnostics, and installs with realistic durations; book a test job and run deposit plus final payment. Check SMS and email reminders against your arrival-window policy. If multiple technicians take bookings, validate per-person availability before peak season. See our Square Appointments review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best when you need forms and packages",
      description:
        "Tune-up packages, intake questions (equipment age, warranty), and payment at booking help you qualify leads before you dispatch.",
      rowBestFor: "Forms & tune-up packages",
      why: "Acuity Scheduling is strong when you sell packaged tune-ups or need intake before dispatch—equipment age, warranty, access notes reduce wasted truck rolls. Custom forms and payment-at-booking help on changeouts or after-hours premiums. During a trial, attach a short questionnaire to your most common service type and walk through a paid booking. Tune reminders for gate codes and pets. See our Acuity Scheduling review.",
    },
    {
      slug: "youcanbookme",
      badge: "Best calendar-native team booking",
      description:
        "Round-robin and per-tech availability tied to Google or Microsoft calendars—good when dispatch mirrors real tech calendars.",
      rowBestFor: "Multi-tech round-robin",
      why: "YouCanBook.me suits HVAC teams that want clients to book “any available tech” or specific techs while availability stays anchored to Google or Outlook. It is often more calendar-native than all-in-one SMB suites. In a trial, connect real tech calendars, test round-robin versus named booking, and confirm reminders and time zones for seasonal surge. See our YouCanBook.me review and Calendly vs YouCanBook.me.",
    },
  ],
  editorialGuidance: [
    E(
      "Technicians, trucks, and service types",
      "Clients should book the right job type and ideally the right tech or any available tech. Map services to duration and buffer time. If you outgrow pure scheduling, read scheduling software vs field service software."
    ),
    E(
      "Seasonal load and same-day demand",
      "Use buffer rules and clear online messaging for spikes. See our emergency scheduling guide when you are slammed."
    ),
    E(
      "Reminders and recurring maintenance",
      "Automated reminders cut no-shows; recurring patterns help maintenance agreements. Compare reminder options against carrier compliance."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software works best for HVAC companies?",
      a: "We shortlist Square Appointments if you are on Square, Acuity Scheduling for intake and packages, and YouCanBook.me for calendar-connected multi-tech booking. Add Setmore or Calendly from our full scheduling reviews if price or simplicity points you there instead.",
    },
    {
      q: "When should an HVAC business use scheduling software vs full field service management?",
      a: "Use scheduling-first tools when online booking, reminders, and calendars are the gap. Move toward FSM when dispatch, job costing, and routing dominate. See scheduling software vs field service software.",
    },
    {
      q: "How do HVAC businesses reduce no-shows?",
      a: "Automated reminders, clear confirmations, and optional deposits on larger jobs. Configure timing (e.g. 24 hours before) and test SMS where supported.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE, { label: "Best field service software for HVAC", href: "/field-service/best-for/hvac" }],
});

export const PLUMBING_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "plumbing",
  title: "Best Scheduling Software for Plumbing Companies (2026)",
  subtitle:
    "Compare scheduling tools for plumbing contractors: emergency slots, multi-plumber calendars, deposits, and customer reminders.",
  introParagraph:
    "Plumbing companies balance emergency calls with scheduled repairs and installs. Good scheduling software exposes real plumber availability, lets customers book non-emergency work online, and sends reminders. These three emphasize value, deep booking customization, and forms—not a one-size template for every trade.",
  picks: [
    {
      slug: "setmore",
      badge: "Best cost-conscious multi-plumber start",
      description: "Free tier for one user; add plumbers, services, and reminders as you grow—strong for proving online booking before FSM.",
      rowBestFor: "Free start, multi-tech",
      why: "Setmore gives plumbing teams affordable online booking with multi-plumber calendars and reminders without FSM complexity. The free tier helps a small shop prove demand before adding seats. Trial “any available plumber” versus named techs; test recurring maintenance for commercial accounts. See our Setmore review and Acuity vs Setmore.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best for intake and deposits",
      description: "Ask about leak location, property type, or warranty before dispatch; collect deposits at booking when no-shows hurt.",
      rowBestFor: "Intake & deposits",
      why: "Acuity helps plumbers qualify jobs before dispatch—structured intake and payment-at-booking protect large jobs and after-hours slots. Build forms with photo upload if you use it for scope. Trial cancellation rules against your dispatch policy. See our Acuity Scheduling review.",
    },
    {
      slug: "simplybookme",
      badge: "Best customization per dollar",
      description: "Custom forms and service definitions at a lower price than many premium schedulers—good for many service types and staff.",
      rowBestFor: "Custom flows, value pricing",
      why: "SimplyBook.me fits plumbing shops that want more control over forms, services, and branding than bare-bones tools, often at a lower cost than Acuity. Expect a bit more setup time. Trial multiple service lengths (snake vs water heater vs repipe consult) and staff rules. See our SimplyBook.me review and SimplyBook.me vs Setmore.",
    },
  ],
  editorialGuidance: [
    E(
      "Emergency vs booked work",
      "Reserve capacity for emergencies; use separate event types or policies so online booking does not promise instant arrival unless you can honor it."
    ),
    E(
      "Multiple plumbers and territories",
      "Per-person availability or round-robin should match how you actually route vans."
    ),
    E(
      "Payments and estimates",
      "Deposits reduce ghost bookings on large jobs. Pair scheduling with CRM or FSM when estimate-to-job workflows mature."
    ),
  ],
  faqItems: [
    {
      q: "What is the best scheduling app for plumbers?",
      a: "Setmore for a strong free or low-cost multi-plumber path, Acuity Scheduling for forms and deposits, SimplyBook.me for flexible custom booking at competitive pricing.",
    },
    {
      q: "Can plumbing companies take deposits through scheduling software?",
      a: "Yes. Acuity and SimplyBook.me support payment integrations; Setmore adds payments on paid tiers. Square Appointments is ideal if you are already Square-native.",
    },
    {
      q: "How do I handle plumbing emergencies online?",
      a: "Do not promise instant dispatch on the same calendar as routine jobs unless you can honor it. Use dedicated emergency CTAs or after-hours numbers. See emergency and same-day appointment scheduling.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE, { label: "Best field service software for plumbing", href: "/field-service/best-for/plumbing" }],
});

export const ELECTRICIANS_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "electricians",
  title: "Best Scheduling Software for Electricians (2026)",
  subtitle:
    "Compare scheduling tools for electrical contractors: service calls, panel jobs, multi-crew availability, and professional client booking.",
  introParagraph:
    "Electrical contractors need scheduling that reflects licensed crew availability, job length, and sometimes permit-driven timelines. We mix Square-native payments, Acuity for scope-heavy intake, and Calendly when you want the most recognizable simple booking experience for clients.",
  picks: [
    {
      slug: "square-appointments",
      badge: "Best for electricians on Square",
      description: "Unified booking and payments when you already invoice or run cards through Square on site.",
      rowBestFor: "Square users",
      why: "Square Appointments fits electrical contractors who already use Square for progress billing or card-present checkout—deposits on panel upgrades or EV installs stay in one stack. Trial service durations for quick calls vs half-day jobs with buffer. See our Square Appointments review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best for scope before you roll a van",
      description: "Photos, panel details, or commercial access notes via intake; packages for inspections or EV install sequences.",
      rowBestFor: "Scope & packages",
      why: "Acuity supports electrical work where questions belong before dispatch—photos, panel space, commercial site notes. Packages help bundled inspections or multi-step work. Trial deposits on large residential jobs and reminder copy for HOA or lockbox details. See our Acuity Scheduling review.",
    },
    {
      slug: "calendly",
      badge: "Best client-recognition simplicity",
      description: "Fast setup and a booking experience many homeowners already know—good when you want minimum friction.",
      rowBestFor: "Simple professional booking",
      why: "Calendly is the honesty pick when your bottleneck is “just let them pick a time” without heavy forms—many clients already trust the brand. Paid tiers add team and round-robin. It is lighter on intake than Acuity; use it when simplicity wins. Trial event types per job length and confirm calendar sync for every electrician. See our Calendly review and Calendly vs Acuity Scheduling.",
    },
  ],
  editorialGuidance: [
    E(
      "Job types and durations",
      "Separate quick service calls from half-day panel work; add buffers. Move to FSM when dispatch and job costing dominate."
    ),
    E(
      "Compliance and clarity",
      "Use booking copy and optional forms to set expectations (access, shutoff, HOA)—without replacing licensed judgment."
    ),
    E(
      "Commercial vs residential",
      "Recurring inspection slots for commercial; one-off installs for residential—pick tools that support both if you need them."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do electrical contractors use?",
      a: "Square Appointments if you are on Square, Acuity when intake and packages matter, Calendly when you want the simplest widely recognized booking flow.",
    },
    {
      q: "Should electricians use field service software instead?",
      a: "Start with scheduling when booking and reminders are the gap. Add FSM when dispatch and inventory drive revenue. See scheduling software vs field service software.",
    },
    {
      q: "Can clients book EV charger installs online?",
      a: "Yes—create a longer service type with optional deposit and intake (panel space, charger model). Acuity and Square handle this well; Calendly works for lighter flows.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE, { label: "Best field service software for electricians", href: "/field-service/best-for/electricians" }],
});

export const PAINTING_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "painting",
  title: "Best Scheduling Software for Painting Contractors (2026)",
  subtitle:
    "Compare scheduling tools for painting contractors: estimates, project-length slots, color consults, and crew coordination.",
  introParagraph:
    "Painting jobs range from single-room touch-ups to multi-day exteriors. These picks lean toward Acuity for consult-plus-production packages, Setmore for crew-friendly recurring and multi-staff value, and SimplyBook.me for customizable service-heavy booking without Acuity-level cost.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for consults and multi-day packages",
      description: "Package color consults with follow-up production days; forms capture square footage or photos before you quote.",
      rowBestFor: "Consults & packages",
      why: "Acuity maps well to consults, packages, and production days with deposits on booked work. Forms can capture square footage or inspiration links. Trial a small package with deposit and weather-driven reschedule policy. See our Acuity Scheduling review.",
    },
    {
      slug: "setmore",
      badge: "Best for crew and consultant calendars",
      description: "Multi-staff scheduling and reminders for residential repaint routes; recurring-friendly for maintenance touch-ups.",
      rowBestFor: "Crew scheduling",
      why: "Setmore offers straightforward multi-staff scheduling with reminders—good when you separate color consultants from crew leads. Pricing stays approachable. Trial per-person services and SMS day-before nudges. See our Setmore review.",
    },
    {
      slug: "simplybookme",
      badge: "Best flexible service catalog",
      description: "Customize many service types and forms for estimates vs production at a competitive price point.",
      rowBestFor: "Custom service flows",
      why: "SimplyBook.me fits painters who want granular service types (estimate vs production vs punch) and custom forms without paying top-tier prices. Setup takes longer than Calendly. Trial branding and cancellation windows that protect crew utilization. See our SimplyBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Estimates vs production time",
      "Separate estimate events from crew days; buffer exteriors for weather. State cancellation policy on the booking page."
    ),
    E(
      "Deposits and cancellations",
      "Deposits protect larger jobs; configure refunds when weather shifts."
    ),
    E(
      "Crews and color consultants",
      "Per-person availability or team rules so the right role gets booked."
    ),
  ],
  faqItems: [
    {
      q: "How do painting contractors schedule estimates online?",
      a: "Acuity for packages and deposits, Setmore for multi-staff value, SimplyBook.me for flexible custom catalogs—create realistic durations and optional deposits.",
    },
    {
      q: "What is the best way to reduce painting no-shows?",
      a: "Reminders, confirmations, and deposits on production days. Tune timing for exterior work.",
    },
    {
      q: "Do painters need field service software?",
      a: "If you only need booking and reminders, scheduling suffices. Add FSM for job costing and dispatch. See scheduling software vs field service software.",
    },
  ],
  extraGuides: [{ label: "Field service software hub", href: "/field-service" }],
});

export const ROOFING_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "roofing",
  title: "Best Scheduling Software for Roofing Companies (2026)",
  subtitle:
    "Compare scheduling tools for roofing contractors: inspections, storm follow-up, crew days, and deposits.",
  introParagraph:
    "Roofing lives on inspections, insurance timelines, and weather-dependent production. We prioritize Acuity for structured inspection-to-install flows, Square for deposit-heavy Square shops, and Setmore for affordable multi-user booking as you add estimators.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for inspections and packages",
      description: "Intake for leak age, claim status, and multi-step packages from inspection to install.",
      rowBestFor: "Inspection workflows",
      why: "Acuity handles roofing sales cycles where inspections, paperwork, and phased installs need intake and optional payment at each step. Forms capture access and claim context. Trial package chains and weather reschedule behavior. See our Acuity Scheduling review.",
    },
    {
      slug: "square-appointments",
      badge: "Best for roofers on Square",
      description: "Inspection fees, deductibles, or progress draws through the same stack you use on the job.",
      rowBestFor: "Square payments",
      why: "Square Appointments suits roofers already on Square for inspection fees or progress draws—booking stays next to payouts. Use realistic durations for ladder inspections vs crew days. See our Square Appointments review and Square vs Acuity.",
    },
    {
      slug: "setmore",
      badge: "Best budget multi-user growth",
      description: "Add estimators and office staff with reminders without enterprise cost.",
      rowBestFor: "Multi-user booking",
      why: "Setmore gives growing roofing brands affordable multi-user booking and reminders. Publish honest inspection windows—not fake 30-minute slots for ladder work. See our Setmore review.",
    },
  ],
  editorialGuidance: [
    E(
      "Inspections vs production",
      "Different services or durations for inspections versus full crew days so homeowners book the right thing."
    ),
    E(
      "Weather and reschedule policy",
      "Build reschedule messaging into confirmations; buffer between inspection and production when possible."
    ),
    E(
      "Deposits after storms",
      "Deposits and clear cancellation windows protect crew utilization during high demand."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do roofing companies use?",
      a: "Acuity Scheduling for structured inspection and package flows, Square Appointments if Square is your payment hub, Setmore for cost-effective multi-user booking.",
    },
    {
      q: "How should roofing companies handle online booking during storm season?",
      a: "Set expectations, use deposits where appropriate, and separate emergency triage from standard inspections. See emergency and same-day appointment scheduling.",
    },
    {
      q: "When do roofers need field service software?",
      a: "When job costing, materials, and crew dispatch outgrow calendars. See scheduling software vs field service software.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE, { label: "Field service software hub", href: "/field-service" }],
});

export const GENERAL_CONTRACTORS_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "general-contractors",
  title: "Best Scheduling Software for General Contractors (2026)",
  subtitle:
    "Compare scheduling tools for general contractors: site visits, subcontractor coordination, client meetings, and deposits.",
  introParagraph:
    "General contractors need owner and trade-facing appointments—not salon flows. Acuity supports paid consults and rich intake; Calendly keeps external meetings simple; YouCanBook.me helps when multiple coordinators or supers share pooled availability.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for walkthroughs and retainers",
      description: "Forms for project phase, address, and decision-makers; retainers or fees at booking for scoped consults.",
      rowBestFor: "Consults & retainers",
      why: "Acuity supports GC workflows with structured pre-qualification and paid consults before senior staff commit time. Packages can mirror phased check-ins. Trial forms for walkthrough types and refund language on retainers. See our Acuity Scheduling review.",
    },
    {
      slug: "calendly",
      badge: "Best simple external meetings",
      description: "Low-friction scheduling for owner updates or quick site syncs when you do not need heavy forms.",
      rowBestFor: "Straightforward GC meetings",
      why: "Calendly fits when the goal is reliable meeting booking with minimal setup—standing owner updates or internal coordination. It is lighter on intake than Acuity; use paid tiers for team scheduling. See our Calendly review.",
    },
    {
      slug: "youcanbookme",
      badge: "Best pooled coordinator calendars",
      description: "Round-robin or shared availability when several staff book for PMs or supers.",
      rowBestFor: "Team calendar booking",
      why: "YouCanBook.me helps when multiple coordinators publish availability for executives or supers off connected calendars—reduces double-booking email chains. Trial round-robin versus individual booking links. See our YouCanBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Meetings vs project schedules",
      "Use scheduling for external appointments; keep construction PM tools for critical path work."
    ),
    E(
      "Subs and owners",
      "Differentiate owner meetings from trade coordination with per-person calendars where needed."
    ),
    E(
      "Deposits and paid consults",
      "Paid site visits filter tire-kickers—Acuity and Square both support payment-at-booking; here we led with Acuity plus simpler Calendly/YouCanBook.me layers."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software should general contractors use?",
      a: "Acuity Scheduling for paid consults and intake, Calendly for simple external meetings, YouCanBook.me for pooled team availability off Google or Microsoft calendars.",
    },
    {
      q: "Can general contractors use only Calendly?",
      a: "Calendly works for simple meetings; many GCs add Acuity when they need longer blocks, deposits, and richer intake. See our best scheduling software roundup.",
    },
    {
      q: "When do GCs need construction-specific software?",
      a: "When document control, daily logs, and subcontractor compliance dominate. Pair scheduling with construction PM when appropriate.",
    },
  ],
  extraGuides: [{ label: "Best field service software for contractors", href: "/field-service/best-for/contractors" }, ROUTE_GUIDE],
});

export const LANDSCAPING_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "landscaping",
  title: "Best Scheduling Software for Landscaping Companies (2026)",
  subtitle:
    "Compare scheduling tools for landscapers: seasonal routes, maintenance contracts, estimates, and crew-friendly booking.",
  introParagraph:
    "Landscaping mixes recurring maintenance, cleanups, and design consults. Setmore fits recurring and multi-crew value; Acuity supports consult-plus-package selling; SimplyBook.me adds flexible custom forms at a strong price.",
  picks: [
    {
      slug: "setmore",
      badge: "Best for recurring maintenance and crews",
      description: "Recurring appointments, multiple crew calendars, and reminders common for lawn and maintenance accounts.",
      rowBestFor: "Recurring visits",
      why: "Setmore is strong for maintenance-heavy landscapers—recurring visits, multiple calendars, affordable reminders. Trial weekly vs biweekly patterns and day-before nudges. See our Setmore review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best for design consults and packages",
      description: "Sell maintenance plus design blocks; capture property details before you quote.",
      rowBestFor: "Consult + packages",
      why: "Acuity helps sell bundled consult-plus-maintenance and capture lot size, irrigation, or HOA rules before quoting. Trial a seasonal package with a modest booking fee. See our Acuity Scheduling review.",
    },
    {
      slug: "simplybookme",
      badge: "Best customizable local-service booking",
      description: "Industry-friendly templates and custom forms at competitive pricing for multi-service landscapers.",
      rowBestFor: "Custom services & forms",
      why: "SimplyBook.me fits landscapers who want granular service definitions and forms without Acuity-level spend—invest setup time up front. See our SimplyBook.me review and SimplyBook.me vs Setmore.",
    },
  ],
  editorialGuidance: [
    E(
      "Recurring maintenance",
      "Define weekly vs biweekly clearly; pair scheduling with route thinking from our route optimization guide."
    ),
    E(
      "Estimates vs service visits",
      "Separate design consult from route booking so homeowners pick the right slot."
    ),
    E(
      "Weather and reschedules",
      "Automate reschedule messaging; buffer for spring and fall spikes."
    ),
  ],
  faqItems: [
    {
      q: "What is the best scheduling software for landscaping companies?",
      a: "Setmore for recurring and multi-crew value, Acuity Scheduling for consults and packages, SimplyBook.me for flexible custom booking at competitive pricing.",
    },
    {
      q: "How do landscapers handle routing with scheduling software?",
      a: "Scheduling handles customer-facing times; routing is often manual or FSM. Read route optimization for service businesses.",
    },
    {
      q: "Should landscapers use field service software?",
      a: "When crews, timesheets, and job costing matter more than a booking link, evaluate FSM. See scheduling software vs field service software.",
    },
  ],
  extraGuides: [ROUTE_GUIDE, { label: "Field service software hub", href: "/field-service" }],
});

export const CONSTRUCTION_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "construction",
  title: "Best Scheduling Software for Construction Companies (2026)",
  subtitle:
    "Compare scheduling tools for construction firms: site meetings, safety walks, owner updates, and vendor appointments.",
  introParagraph:
    "Construction firms need longer site blocks, travel buffers, and clear intake for access and safety. Calendly keeps many external meetings simple; Acuity adds paid intakes; YouCanBook.me helps multiple roles share real calendar availability.",
  picks: [
    {
      slug: "calendly",
      badge: "Best simple site and vendor meetings",
      description: "Fast booking for inspectors, vendors, or quick owner syncs when you do not need heavy questionnaires.",
      rowBestFor: "Simple external meetings",
      why: "Calendly works for construction teams that need dependable scheduling for routine external meetings—vendors, inspectors, short owner check-ins—with broad client recognition. Use longer event types and buffers for travel. See our Calendly review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best structured site meetings",
      description: "Capture job number, gate codes, and PPE notes before executives or PMs commit calendar time.",
      rowBestFor: "Site intake & fees",
      why: "Acuity fits when meetings need safety and access context—job numbers, escorts, parking—before blocking leadership calendars. Optional fees help prioritize serious walkthroughs during bid season. See our Acuity Scheduling review.",
    },
    {
      slug: "youcanbookme",
      badge: "Best multi-role calendar pooling",
      description: "Connect supers, estimators, or safety leads via shared or round-robin rules tied to real calendars.",
      rowBestFor: "Pooled construction calendars",
      why: "YouCanBook.me helps when several roles share booking responsibility off Google or Outlook—estimators, PMs, safety—without a single generic inbox. Trial permissions and reminder routing for noisy job-site environments. See our YouCanBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Site time and travel buffers",
      "Default longer slots and buffers; put travel expectations in confirmation copy."
    ),
    E(
      "Safety and access",
      "Optional intake for hard-hat rules, escorts, and parking."
    ),
    E(
      "Beyond scheduling",
      "Document control and daily reporting usually need construction PM or FSM—fix the meeting layer first."
    ),
  ],
  faqItems: [
    {
      q: "Do construction companies use scheduling software?",
      a: "Yes—for owner meetings, inspections, and vendor walkthroughs. Calendly for simplicity, Acuity for intake and fees, YouCanBook.me for pooled calendar booking.",
    },
    {
      q: "What is better for construction: Calendly or Acuity?",
      a: "Acuity often wins for longer blocks, intake, and payments; Calendly suffices for lightweight meetings. See Calendly vs Acuity Scheduling.",
    },
    {
      q: "When is field service or construction software required?",
      a: "When compliance logs and subcontractor workflows dominate. Start with scheduling software vs field service software to decide.",
    },
  ],
  extraGuides: [{ label: "Field service software hub", href: "/field-service" }, ROUTE_GUIDE],
});

export const REMODELING_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "remodeling",
  title: "Best Scheduling Software for Remodeling Businesses (2026)",
  subtitle:
    "Compare scheduling tools for remodelers: design meetings, selections, walkthroughs, and phased project check-ins.",
  introParagraph:
    "Remodelers run phased client touchpoints. Acuity leads for packages and paid design time; SimplyBook.me offers flexible customization; Setmore keeps multi-designer showrooms affordable.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for design and selections workflows",
      description: "Packages for design blocks, follow-up installs, and forms for inspiration or material choices.",
      rowBestFor: "Phased packages",
      why: "Acuity mirrors remodeling pipelines—design, selections, walkthroughs—with packages and payment-at-booking for paid consults. Trial phased naming and reschedule rules tied to retainers. See our Acuity Scheduling review.",
    },
    {
      slug: "simplybookme",
      badge: "Best flexible showroom-style booking",
      description: "Customize many appointment types and forms for selections vs site punch at a competitive price.",
      rowBestFor: "Custom remodel flows",
      why: "SimplyBook.me suits remodelers who want distinct booking types per phase and custom forms without paying only for the biggest brands—expect setup time. See our SimplyBook.me review.",
    },
    {
      slug: "setmore",
      badge: "Best multi-designer value",
      description: "Multiple designers or PMs with public booking and reminders as homeowner touchpoints multiply.",
      rowBestFor: "Showroom booking",
      why: "Setmore gives design-build teams affordable multi-staff scheduling with SMS-friendly reminders for day-before showroom nudges. See our Setmore review.",
    },
  ],
  editorialGuidance: [
    E(
      "Phases and expectations",
      "Name booking types after phases so homeowners book the right conversation."
    ),
    E(
      "Paid design time",
      "Charge for design consultations when appropriate—Acuity and Square support this; we featured Acuity plus flexible alternatives."
    ),
    E(
      "Production scheduling",
      "Heavy crew scheduling may still live in PM or FSM; use these tools for client-facing touchpoints."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do remodelers use?",
      a: "Acuity Scheduling for packages and paid consults, SimplyBook.me for flexible custom flows, Setmore for multi-staff value.",
    },
    {
      q: "How do remodelers reduce showroom no-shows?",
      a: "Reminders, confirmations, and paid consults for design time. Calibrate realistic durations.",
    },
    {
      q: "Is field service software better for remodeling?",
      a: "When job costing and crew time tracking matter, add FSM. See scheduling software vs field service software.",
    },
  ],
  extraGuides: [{ label: "Field service software hub", href: "/field-service" }],
});

export const HANDYMAN_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "handyman",
  title: "Best Scheduling Software for Handyman Businesses (2026)",
  subtitle:
    "Compare scheduling tools for handyman services: multi-task visits, small-job booking, reminders, and simple payments.",
  introParagraph:
    "Handyman businesses need fast, low-friction booking. Setmore offers a strong free start; Calendly minimizes client confusion; SimplyBook.me adds customization when you outgrow bare links.",
  picks: [
    {
      slug: "setmore",
      badge: "Best solo-to-small-team path",
      description: "Free tier and straightforward upgrades as you add a helper or second van; recurring for repeat neighbors.",
      rowBestFor: "Solo → small team",
      why: "Setmore is a practical default for handymen—free tier, online booking, reminders, then add staff as you grow. Trial clear duration buckets (1 hr, 2 hr, half day) and minimum-charge messaging on the public page. See our Setmore review.",
    },
    {
      slug: "calendly",
      badge: "Best client-recognition booking",
      description: "Homeowners often already know Calendly—fast setup for simple ‘pick a time’ flows.",
      rowBestFor: "Minimal-friction booking",
      why: "Calendly reduces friction when clients recognize the booking experience and you mainly need time-slot selection with reminders. Lighter on intake than Acuity. See our Calendly review and Calendly vs Acuity.",
    },
    {
      slug: "simplybookme",
      badge: "Best when you need more custom fields",
      description: "Custom forms for task lists or photos before you commit drive time—without jumping to the top price tier.",
      rowBestFor: "Custom intake & value",
      why: "SimplyBook.me helps when you want short questionnaires or more service granularity than the simplest tools—useful before long drive times. See our SimplyBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Task variety vs time blocks",
      "Offer a few clear durations instead of dozens of micro-services unless ops truly need them."
    ),
    E(
      "Recurring neighborhood work",
      "Recurring appointments help repeat clients rebook automatically."
    ),
    E(
      "When to graduate to FSM",
      "Add FSM when employees, inventory, and job costing appear—many handymen stay scheduling-first for years."
    ),
  ],
  faqItems: [
    {
      q: "What is the best scheduling app for a handyman business?",
      a: "Setmore for a strong free start and growth path, Calendly for the simplest widely recognized booking, SimplyBook.me for more customization per dollar.",
    },
    {
      q: "Should handymen offer online booking?",
      a: "Yes—use clear durations, service area limits, and reminders.",
    },
    {
      q: "Do handymen need field service software?",
      a: "Often not at first. Read scheduling software vs field service software before you overbuy.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE, { label: "Field service software hub", href: "/field-service" }],
});

export const PROPERTY_MANAGEMENT_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "property-management",
  title: "Best Scheduling Software for Property Management Companies (2026)",
  subtitle:
    "Compare scheduling tools for property managers: showings, inspections, vendor access, and owner meetings.",
  introParagraph:
    "Property management teams schedule showings, inspections, and vendor windows across agents. YouCanBook.me supports fair team booking; Appointy fits multi-staff and multi-location structure; Acuity adds rich intake for access and compliance notes.",
  picks: [
    {
      slug: "youcanbookme",
      badge: "Best team and round-robin showing booking",
      description: "Pool agent availability from calendars—tenants book ‘any available’ or specific coordinators.",
      rowBestFor: "Agent pool booking",
      why: "YouCanBook.me fits PM teams that need round-robin or pooled availability across agents and coordinators tied to Google or Microsoft calendars—reduces double-bookings. Trial fair distribution rules and mobile confirmations for tenants. See our YouCanBook.me review.",
    },
    {
      slug: "appointy",
      badge: "Best structured multi-staff / multi-site ops",
      description: "When you manage many staff or locations and want industry-style structure beyond a single calendar link.",
      rowBestFor: "Multi-location structure",
      why: "Appointy targets businesses with multiple staff or locations—useful for larger PM shops standardizing showings and vendor windows across branches. Expect more setup than Calendly. Trial reporting on no-shows before scaling seats. See our Appointy review—pair with hub comparisons for other tools.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best showing intake and packages",
      description: "Collect unit, gate code, pet, and ID steps before agents commit windshield time.",
      rowBestFor: "Showing intake",
      why: "Acuity strengthens showings and inspections when structured intake matters—unit numbers, lockbox codes, pet policies, ID steps—before agents commit time. Packages can bundle move-in and move-out inspection patterns. See our Acuity Scheduling review.",
    },
  ],
  editorialGuidance: [
    E(
      "Roles and calendars",
      "Decide whether tenants book any available agent or a named PM; match round-robin rules to fair lead distribution."
    ),
    E(
      "Compliance and access",
      "Use intake for notice requirements and access; scheduling complements lease compliance workflows."
    ),
    E(
      "Vendor maintenance",
      "Separate tenant-facing showings from vendor maintenance windows if durations and rules differ."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do property managers use?",
      a: "YouCanBook.me for pooled team calendars, Appointy for structured multi-staff or multi-location scheduling, Acuity Scheduling for rich intake on showings and inspections.",
    },
    {
      q: "Can tenants book showings online?",
      a: "Yes—publish availability, require intake, and send confirmations with ID or self-guided showing rules per regulations.",
    },
    {
      q: "Does scheduling software replace property management software?",
      a: "No—it handles the calendar layer. Keep your PM platform for leases, accounting, and maintenance tickets.",
    },
  ],
  extraGuides: [{ label: "Payroll for property management", href: "/payroll/best-for/property-management" }],
});

export const PEST_CONTROL_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pest-control",
  title: "Best Scheduling Software for Pest Control Businesses (2026)",
  subtitle:
    "Compare scheduling tools for pest control: route-friendly appointments, recurring service plans, reminders, and payments.",
  introParagraph:
    "Pest control runs recurring routes plus one-off treatments. Setmore fits recurring and multi-technician value; Square aligns when Square is your payment hub; Acuity supports inspection-plus-treatment packages and intake.",
  picks: [
    {
      slug: "setmore",
      badge: "Best recurring route customers",
      description: "Recurring appointments and reminders for quarterly or monthly plans; multi-technician friendly.",
      rowBestFor: "Recurring routes",
      why: "Setmore fits route-style residential accounts with recurring visits and multiple technicians at approachable pricing. Trial day-ahead SMS behavior and honest service durations including drive time. See our Setmore review.",
    },
    {
      slug: "square-appointments",
      badge: "Best pest operators on Square",
      description: "Seasonal promotions and card-on-file patterns when Square terminals and invoicing are already central.",
      rowBestFor: "Square payments",
      why: "Square Appointments suits pest operators running promotions, card-on-file, or retail upsells through Square while customers book treatments online. One stack simplifies busy season. See our Square Appointments review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best inspections and bundled plans",
      description: "Sell inspection-plus-treatment packages with forms for pest type, property layout, or sensitivities.",
      rowBestFor: "Plans & intake",
      why: "Acuity helps sell bundled programs and capture pest type or property details before assignment—reducing mis-dispatches. See our Acuity Scheduling review.",
    },
  ],
  editorialGuidance: [
    E(
      "Recurring plans",
      "Define quarterly vs monthly clearly; automate reminders so customers secure pets and gates."
    ),
    E(
      "Service definitions",
      "Separate inspections from treatments; durations should reflect realistic truck time plus buffer."
    ),
    E(
      "Routing reality",
      "Dense routing may still need FSM; scheduling is the customer-facing layer."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software works for pest control companies?",
      a: "Setmore for recurring and multi-tech value, Square Appointments if Square is your payment hub, Acuity Scheduling for packages and intake-heavy programs.",
    },
    {
      q: "How do pest control companies handle busy season?",
      a: "Tighten booking rules, add buffers, and communicate realistic arrival windows. See emergency and same-day appointment scheduling.",
    },
    {
      q: "When do pest companies need pest-specific or FSM software?",
      a: "When route density and technician KPIs exceed calendar booking. See scheduling software vs field service software.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE, ROUTE_GUIDE],
});

export const POOL_SERVICE_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pool-service",
  title: "Best Scheduling Software for Pool Service Companies (2026)",
  subtitle:
    "Compare scheduling tools for pool service and maintenance: weekly routes, openings/closings, and service reminders.",
  introParagraph:
    "Pool companies live on recurring routes plus openings and repairs. Setmore supports recurring and multi-tech patterns; Acuity packages open/close bundles; SimplyBook.me customizes service catalogs at strong value.",
  picks: [
    {
      slug: "setmore",
      badge: "Best weekly maintenance routes",
      description: "Recurring visits and multiple techs map well to residential route customers.",
      rowBestFor: "Weekly recurring",
      why: "Setmore supports high-volume recurring weekly or biweekly visits with reminders—practical before specialty pool platforms when booking is the pain point. Align public copy with the weekday you truly service each area. See our Setmore review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best open/close packages",
      description: "Bundle spring open and fall close with forms for heater type, cover style, and yard access.",
      rowBestFor: "Seasonal packages",
      why: "Acuity packages openings and closings with intake on equipment and access—optional deposits when storms shift chemistry work. See our Acuity Scheduling review.",
    },
    {
      slug: "simplybookme",
      badge: "Best flexible service mix",
      description: "Customize maintenance vs repair vs opening types at competitive pricing for growing pool ops.",
      rowBestFor: "Custom pool services",
      why: "SimplyBook.me helps when you need distinct service types and forms for repairs versus standard maintenance without overspending. See our SimplyBook.me review and SimplyBook.me vs Setmore.",
    },
  ],
  editorialGuidance: [
    E(
      "Recurring maintenance",
      "Align booking copy with the day or week you actually service each neighborhood."
    ),
    E(
      "Access and safety",
      "Confirmations for dogs, gates, and equipment sheds; intake for ladder constraints."
    ),
    E(
      "Repairs vs maintenance",
      "Separate quick repair calls from standard maintenance durations to protect route density."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do pool service companies use?",
      a: "Setmore for recurring routes, Acuity Scheduling for open/close packages, SimplyBook.me for flexible custom service catalogs.",
    },
    {
      q: "How do pool companies reduce missed service visits?",
      a: "Automated reminders, gate code intake, and clear policies for skipped pools when access fails.",
    },
    {
      q: "Do pool companies need pool-specific software?",
      a: "When chemistry logging and route optimization dominate, evaluate specialty or FSM tools.",
    },
  ],
  extraGuides: [ROUTE_GUIDE, EMERGENCY_GUIDE],
});

export const JUNK_REMOVAL_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "junk-removal",
  title: "Best Scheduling Software for Junk Removal Businesses (2026)",
  subtitle:
    "Compare scheduling tools for junk removal: truck windows, load-size intake, on-site estimates, and deposit collection.",
  introParagraph:
    "Junk removal sells truck time and arrival windows. Acuity supports load-size intake and deposits; Setmore offers affordable multi-truck booking; Square keeps deposits in Square-native shops.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best load-size intake and deposits",
      description: "Forms for photos, stairs, and access before you commit trucks; deposits for peak Saturday slots.",
      rowBestFor: "Intake & deposits",
      why: "Acuity strengthens junk removal when intake captures photos, stairs, and parking constraints before you commit trucks—deposits protect peak windows. See our Acuity Scheduling review.",
    },
    {
      slug: "setmore",
      badge: "Best multi-truck affordability",
      description: "Publish per-truck or coordinator availability with reminders for arrival windows.",
      rowBestFor: "Fleet booking",
      why: "Setmore helps growing brands publish per-truck or crew availability with reminders without bespoke dispatch apps early on. Trial simultaneous weekend bookings and buffers when loads run long. See our Setmore review.",
    },
    {
      slug: "square-appointments",
      badge: "Best Square-native haulers",
      description: "Deposits and final charges stay in Square when that is how you already run the business.",
      rowBestFor: "Truck + Square",
      why: "Square Appointments fits when deposits for holds and final charges after load size is known should stay in Square. Offer realistic two- to four-hour windows in trials. See our Square Appointments review.",
    },
  ],
  editorialGuidance: [
    E(
      "Windows vs fake precision",
      "Offer 2–4 hour arrival windows unless you truly run to-the-minute dispatch."
    ),
    E(
      "Pricing expectations",
      "Explain that final price may depend on on-site volume; intake reduces surprises."
    ),
    E(
      "Route density",
      "Pair scheduling with route discipline—see route optimization for service businesses."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do junk removal companies use?",
      a: "Acuity Scheduling for intake and deposits, Setmore for cost-effective multi-truck booking, Square Appointments if you are all-in on Square payments.",
    },
    {
      q: "Should junk removal companies book by truck or by job type?",
      a: "Often by truck or crew with duration scaled to load size; intake forms refine expectations.",
    },
    {
      q: "When do junk removal businesses need dispatch software?",
      a: "When real-time truck tracking and dense routing dominate—start with scheduling, then evaluate FSM.",
    },
  ],
  extraGuides: [ROUTE_GUIDE, EMERGENCY_GUIDE],
});

export const MOVING_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "moving",
  title: "Best Scheduling Software for Moving Companies (2026)",
  subtitle:
    "Compare scheduling tools for movers: in-home estimates, move-day holds, deposit collection, and multi-crew coordination.",
  introParagraph:
    "Moving companies schedule surveys and move days with longer blocks and deposits. Acuity supports survey intake and peak deposits; Calendly keeps simpler estimate flows recognizable; YouCanBook.me helps multiple estimators share calendars.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best surveys and move packages",
      description: "Forms for home size, stairs, specialty items; payment-at-booking for peak weekends when capacity is scarce.",
      rowBestFor: "Survey workflows",
      why: "Acuity excels for movers when surveys need heavy intake—home size, stairs, pianos—and when deposits protect end-of-month weekends. Separate long survey types from actual load days in trials. See our Acuity Scheduling review.",
    },
    {
      slug: "calendly",
      badge: "Best simple estimate booking",
      description: "When you want a polished, familiar booking link for virtual or short in-home estimates without full Acuity setup.",
      rowBestFor: "Simple estimate links",
      why: "Calendly fits movers who need reliable estimate booking with minimal configuration—especially virtual walkthroughs—while move-day coordination stays internal. Use paid tiers for multiple estimators. See our Calendly review.",
    },
    {
      slug: "youcanbookme",
      badge: "Best multi-estimator calendar pooling",
      description: "Several sales reps share real availability off Google or Outlook with round-robin options.",
      rowBestFor: "Sales team booking",
      why: "YouCanBook.me helps moving sales teams publish multiple estimators’ real availability without a call-center bottleneck. Trial SMS versus email confirmations for busy families. See our YouCanBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Surveys vs move days",
      "Different services and durations for surveys versus load days—do not let clients book a 30-minute slot for a full pack-and-move."
    ),
    E(
      "Peak season deposits",
      "Deposits protect weekends; disclose refund rules clearly."
    ),
    E(
      "Crew coordination",
      "Scheduling handles customer-facing times; truck assignment may stay in dispatch tools until you adopt FSM."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do moving companies use?",
      a: "Acuity Scheduling for intake-heavy surveys and deposits, Calendly for simpler estimate flows, YouCanBook.me for pooled estimator calendars.",
    },
    {
      q: "Should movers offer instant online booking for move day?",
      a: "Usually offer requested dates with confirmation after review—or deposits with clear policies. Instant booking without checks risks underpriced jobs.",
    },
    {
      q: "When do movers need moving-specific or FSM software?",
      a: "When dispatch and fleet management exceed calendars. See scheduling software vs field service software.",
    },
  ],
  extraGuides: [ROUTE_GUIDE, EMERGENCY_GUIDE],
});

export const APPLIANCE_REPAIR_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "appliance-repair",
  title: "Best Scheduling Software for Appliance Repair Businesses (2026)",
  subtitle:
    "Compare scheduling tools for appliance repair: brand and model intake, warranty vs COD flows, multi-tech dispatch, and reminders that cut no-shows.",
  introParagraph:
    "Appliance repair shops book short diagnostic windows, longer parts-return visits, and warranty jobs with different rules. Scheduling software should capture model numbers and symptoms before you roll a van, support multiple technicians, and plug into how you already take payment—especially if you run a counter or retail add-ons.",
  picks: [
    {
      slug: "square-appointments",
      badge: "Best when Square runs your counter and field payments",
      description:
        "Booking plus deposits and card-present checkout in one Square stack—ideal when parts pickups and service calls share the same merchant account.",
      rowBestFor: "Square-native repair shops",
      why:
        "Square Appointments fits appliance repair businesses that already invoice or swipe cards through Square—deposits on parts-heavy jobs and final charges after diagnosis stay in one financial home. Trial separate event types for warranty callbacks versus COD diagnostics with different buffers. See our Square Appointments review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best for intake before you dispatch",
      description:
        "Forms for brand, model, serial, and symptom photos reduce wasted trips when the wrong tech or van rolls.",
      rowBestFor: "Diagnostics & warranty intake",
      why:
        "Acuity Scheduling helps appliance repair teams qualify jobs before dispatch—structured questions, optional photo upload, and payment-at-booking for after-hours or high-demand slots. Package recurring maintenance plans if you sell them. See our Acuity Scheduling review.",
    },
    {
      slug: "setmore",
      badge: "Best affordable multi-technician booking",
      description:
        "Free tier friendly; add techs and reminders as call volume grows without jumping straight to enterprise pricing.",
      rowBestFor: "Growing multi-tech shops",
      why:
        "Setmore gives repair shops approachable online booking with multiple technicians and SMS-style reminders at a price that scales with headcount. Map “any available tech” versus named techs to match how you route warranty work. See our Setmore review and Acuity Scheduling vs Setmore.",
    },
  ],
  editorialGuidance: [
    E(
      "Diagnostics vs return visits",
      "Use different durations and intake rules so customers do not book a 30-minute slot for a sealed-system compressor job."
    ),
    E(
      "Parts and return trips",
      "Buffer follow-up visits when parts orders are uncertain; booking copy should set expectations."
    ),
    E(
      "Warranty vs COD",
      "Separate booking types or forms so dispatchers see coverage before assigning senior techs."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software works best for appliance repair?",
      a: "We shortlist Square Appointments if you are on Square, Acuity Scheduling for model and symptom intake before dispatch, and Setmore for affordable multi-technician booking and reminders.",
    },
    {
      q: "Should appliance repair shops take deposits online?",
      a: "Deposits help on after-hours calls, large parts orders, or crowded peak weeks—disclose refund rules clearly in confirmation emails.",
    },
    {
      q: "When do repair shops need field service software instead?",
      a: "When dispatch, parts inventory, and job costing dominate the day. See scheduling software vs field service software.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE],
});

export const GARAGE_DOOR_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "garage-door",
  title: "Best Scheduling Software for Garage Door Companies (2026)",
  subtitle:
    "Compare scheduling tools for garage door installers: spring and opener service calls, new-door estimates, emergency same-day rules, and multi-crew calendars.",
  introParagraph:
    "Garage door companies mix urgent spring failures with scheduled installs and commercial roll-up work. Scheduling software should separate emergency from routine booking, capture ceiling height and opener type when possible, and keep multiple install crews from double-booking the same arrival window.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for emergency rules and install intake",
      description:
        "Forms for single vs double door, opener brand, and clearance questions—plus deposits on Saturday installs.",
      rowBestFor: "Intake & install deposits",
      why:
        "Acuity Scheduling fits garage door operators who need structured intake before dispatch and payment-at-booking when no-shows on long truck rolls hurt margin. Build separate flows for “spring emergency” versus “new door estimate.” See our Acuity Scheduling review.",
    },
    {
      slug: "calendly",
      badge: "Best simple booking homeowners already trust",
      description:
        "Fast setup for standard service calls when you do not need heavy forms—ideal for established local brands.",
      rowBestFor: "Straightforward service booking",
      why:
        "Calendly is a strong pick when your bottleneck is frictionless booking for repeat customers and simple tune-ups—many homeowners already recognize the flow. Use paid tiers for multiple installers or sales reps. See our Calendly review and Calendly vs Acuity Scheduling.",
    },
    {
      slug: "youcanbookme",
      badge: "Best calendar-native crew pooling",
      description:
        "Round-robin or named tech booking tied to Google or Microsoft—good when dispatch mirrors real crew calendars.",
      rowBestFor: "Multi-crew availability",
      why:
        "YouCanBook.me suits garage door teams that want customers to book any available installer while availability reflects real Outlook or Google calendars. Trial round-robin against per-tech links for commercial accounts. See our YouCanBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Emergency vs booked work",
      "Do not promise same-hour arrival on the same link as routine tune-ups unless you can honor it—use separate entry points or clear copy."
    ),
    E(
      "Commercial roll-up jobs",
      "Longer blocks and different intake for dock doors versus residential sectional doors."
    ),
    E(
      "Reminders",
      "Automated SMS or email reminders reduce no-shows when trucks are loaded with doors and springs."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do garage door companies use?",
      a: "Garage door operators often evaluate Acuity Scheduling for intake and deposits, Calendly for simple consumer booking, and YouCanBook.me for multi-crew calendar pooling.",
    },
    {
      q: "How should garage door businesses handle emergency calls online?",
      a: "Use a dedicated emergency CTA or after-hours policy; if you book online, set expectations on response time and any premium fees.",
    },
    {
      q: "When do garage door companies need full FSM software?",
      a: "When job costing, inventory, and dispatch boards replace calendar booking as the bottleneck. See scheduling software vs field service software.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE],
});

export const LOCKSMITH_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "locksmith",
  title: "Best Scheduling Software for Locksmith Businesses (2026)",
  subtitle:
    "Compare scheduling tools for locksmiths: after-hours premiums, automotive vs residential job types, rapid SMS confirmations, and honest arrival windows.",
  introParagraph:
    "Locksmiths sell speed and trust. Scheduling software should not pretend every job is a 15-minute calendar block—especially for automotive rekeys or commercial master-key work. The right tools capture vehicle or lock type when helpful, support after-hours pricing or deposits where legal, and send reminders so customers wait at the right address.",
  picks: [
    {
      slug: "calendly",
      badge: "Best ultra-fast setup for callback-heavy workflows",
      description:
        "Minimal friction when you mainly need “pick a slot” links for booked work—not full shop management.",
      rowBestFor: "Simple booked jobs",
      why:
        "Calendly fits locksmiths who want a clean booking link for prescheduled rekeys, safe openings, or commercial appointments where heavy intake is overkill. Pair with clear after-hours policies on your site. See our Calendly review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best for after-hours deposits and structured intake",
      description:
        "Payment-at-booking and forms for vehicle year/make/model or commercial access notes when they reduce bad dispatches.",
      rowBestFor: "Premium slots & intake",
      why:
        "Acuity Scheduling helps when you charge more for nights and weekends or want structured intake before you commit a van—vehicle details for automotive work or gate codes for gated communities. Trial cancellation rules that match how you actually roll trucks. See our Acuity Scheduling review.",
    },
    {
      slug: "setmore",
      badge: "Best budget multi-van booking",
      description:
        "Multiple locksmiths on one account with reminders—strong when you are proving online booking before heavier software.",
      rowBestFor: "Multi-van teams",
      why:
        "Setmore gives growing locksmith shops affordable multi-user booking with reminders without enterprise pricing. Map public services to realistic durations including drive buffers. See our Setmore review.",
    },
  ],
  editorialGuidance: [
    E(
      "Honest windows",
      "Offer realistic arrival windows for mobile work; over-precision creates one-star reviews."
    ),
    E(
      "Automotive vs residential",
      "Different durations and questions—avoid booking a car lockout like a cabinet rekey."
    ),
    E(
      "Compliance and pricing",
      "Keep booking copy aligned with local regulations on pricing disclosures and emergency services."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling app is best for a locksmith business?",
      a: "Calendly for simple booked work, Acuity Scheduling when deposits and structured intake matter, Setmore for affordable multi-van booking with reminders.",
    },
    {
      q: "Should locksmiths take credit card deposits online?",
      a: "Where legal and practical, deposits reduce ghost calls on late-night slots—always disclose fees and refund rules clearly.",
    },
    {
      q: "Is Calendly enough for a 24/7 locksmith?",
      a: "Calendly handles scheduled slots well; true 24/7 dispatch often still needs phone or dispatch software—use scheduling for the portion of work that is actually bookable online.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE],
});

export const FLOORING_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "flooring",
  title: "Best Scheduling Software for Flooring Contractors (2026)",
  subtitle:
    "Compare scheduling tools for flooring pros: in-home measures, design consults, install-day holds, material lead-time messaging, and deposits.",
  introParagraph:
    "Flooring contractors live on estimates and multi-phase work—measure, order materials, acclimate, install. Scheduling software should support longer consult blocks, deposits when you hold crews or materials, and clear customer reminders so homes are cleared and ready when the crew arrives.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for measures, consults, and deposits",
      description:
        "Packages for measure-plus-proposal, intake for subfloor concerns, and payment-at-booking on busy install weeks.",
      rowBestFor: "Measures & install holds",
      why:
        "Acuity Scheduling fits flooring contractors who sell in-home measures, design consults, and deposit-backed install dates—forms capture square footage estimates, pet gates, and furniture move expectations. Trial separate event lengths for “quick estimate” versus full measure. See our Acuity Scheduling review.",
    },
    {
      slug: "simplybookme",
      badge: "Best customization per dollar",
      description:
        "Define many service types—carpet, LVP, hardwood refinishing—with custom questions at a competitive price point.",
      rowBestFor: "Multi-trade flooring catalogs",
      why:
        "SimplyBook.me suits flooring shops that need distinct service types and branding without overspending on premium tiers. Expect a bit more setup. See our SimplyBook.me review and SimplyBook.me vs Setmore.",
    },
    {
      slug: "calendly",
      badge: "Best simple showroom or consult booking",
      description:
        "When you want a polished link for quick consults or showroom appointments with minimal configuration.",
      rowBestFor: "Simple consult links",
      why:
        "Calendly works when your primary online need is low-friction booking for showroom visits or short consultations while install scheduling stays internal. See our Calendly review.",
    },
  ],
  editorialGuidance: [
    E(
      "Lead times and expectations",
      "Booking copy should explain that install dates may follow material arrival—avoid promising next-day full installs unless true."
    ),
    E(
      "Crew holds vs customer selects",
      "Use deposits or internal confirmation when customers pick install weeks that depend on material ships."
    ),
    E(
      "Reminders",
      "Remind customers to clear rooms, secure pets, and confirm address the day before measure and install."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do flooring contractors use?",
      a: "Flooring teams often evaluate Acuity Scheduling for measures and deposits, SimplyBook.me for flexible multi-service catalogs at value pricing, and Calendly for simple consult booking.",
    },
    {
      q: "Should flooring companies take deposits through scheduling?",
      a: "Yes when you hold crew days or special-order materials—pair deposits with clear reschedule and refund policies.",
    },
    {
      q: "When do flooring businesses need construction or FSM software?",
      a: "When job files, change orders, and crew dispatch replace calendar booking as the core problem.",
    },
  ],
  extraGuides: [ROUTE_GUIDE],
});

export const FENCE_DECK_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "fence-deck",
  title: "Best Scheduling Software for Fence & Deck Builders (2026)",
  subtitle:
    "Compare scheduling tools for fence and deck builders: site surveys, HOA paperwork lead times, crew-day scheduling, and weather-aware messaging.",
  introParagraph:
    "Fence and deck builders book property walks, permit-sensitive timelines, and multi-day crew blocks. Scheduling software should capture lot lines, HOA requirements when relevant, and realistic buffers for outdoor work—without letting customers assume instant start dates after a single click.",
  picks: [
    {
      slug: "setmore",
      badge: "Best affordable crew and survey booking",
      description:
        "Multi-staff calendars for estimators and leads; reminders for homeowners to stake lines and secure pets.",
      rowBestFor: "Surveys & growing crews",
      why:
        "Setmore fits fence and deck builders scaling estimators and project leads who need online booking without heavy software spend. Trial separate services for wood versus composite consults with different durations. See our Setmore review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best for survey intake and phased deposits",
      description:
        "Forms for HOA status, utility locates, and access gates; deposits when you hold crew weeks during peak season.",
      rowBestFor: "Site surveys & deposits",
      why:
        "Acuity Scheduling helps when surveys need structured intake—HOA approval state, utility locate status, photos of existing fence lines—and when deposits protect peak-season crew holds. See our Acuity Scheduling review.",
    },
    {
      slug: "youcanbookme",
      badge: "Best multi-estimator calendar pooling",
      description:
        "Pool estimator availability from Google or Outlook when several sales reps cover different territories.",
      rowBestFor: "Pooled estimator teams",
      why:
        "YouCanBook.me suits teams where multiple estimators share territories and you want real calendar availability instead of manual triage. See our YouCanBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Weather and outdoor reality",
      "Use buffers and clear messaging that exterior work may reschedule for storms."
    ),
    E(
      "HOA and permits",
      "Intake fields for approval status reduce sales promises the crew cannot keep."
    ),
    E(
      "Crew days vs visits",
      "Differentiate survey appointments from multi-day build blocks in service definitions."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do fence and deck companies use?",
      a: "Fence and deck builders often use Setmore for affordable multi-staff booking, Acuity Scheduling for survey intake and deposits, and YouCanBook.me for pooled estimator calendars.",
    },
    {
      q: "Should deck builders offer instant online booking for construction start dates?",
      a: "Usually book surveys first; confirm start dates after materials and permits—use copy and internal steps to avoid over-promising.",
    },
    {
      q: "When do outdoor contractors need FSM or construction software?",
      a: "When job costing, change orders, and crew dispatch replace calendar booking as the main pain.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE, ROUTE_GUIDE],
});

export const GLASS_WINDOW_INSTALLERS_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "glass-window-installers",
  title: "Best Scheduling Software for Glass & Window Installers (2026)",
  subtitle:
    "Compare scheduling tools for glass and window companies: field measures, safety and access intake, commercial bid walks, and install-day coordination.",
  introParagraph:
    "Glass and window installers book precise field measures, reglazing service calls, and full-home replacement projects. Scheduling software should capture ladder access, parking constraints, and whether homeowners cleared window treatments—while supporting deposits when custom orders are non-returnable.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for measure intake and custom-order deposits",
      description:
        "Forms for floor level, ladder constraints, tempered requirements, and photos—payment-at-booking when orders are custom.",
      rowBestFor: "Measures & custom glass",
      why:
        "Acuity Scheduling fits glass shops that need measure appointments with serious intake before fabrication—deposits protect non-returnable custom orders. Trial separate flows for service reglazing versus full replacement consults. See our Acuity Scheduling review.",
    },
    {
      slug: "square-appointments",
      badge: "Best for retail glass shops on Square",
      description:
        "When showroom consults and field installs share Square payments and customer records.",
      rowBestFor: "Retail + field on Square",
      why:
        "Square Appointments suits glass and window businesses already running cards and invoices through Square—booking ties cleanly to the same customer profile as counter sales. See our Square Appointments review.",
    },
    {
      slug: "simplybookme",
      badge: "Best flexible service catalog value",
      description:
        "Define commercial site walks, residential measures, and emergency board-ups with custom questions at competitive pricing.",
      rowBestFor: "Mixed commercial & residential",
      why:
        "SimplyBook.me helps when you need many distinct service types—board-ups, reglazing, IGU replacement, commercial bid walks—without overspending. See our SimplyBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Safety and access",
      "Capture ladder points, interior floor protection needs, and parking limits before you send crews with heavy glass."
    ),
    E(
      "Commercial vs residential",
      "Different durations and approval paths—commercial walks may need longer blocks."
    ),
    E(
      "Weather and lifts",
      "Exterior installs may need reschedule policies; communicate them in confirmations."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software works for glass and window installers?",
      a: "Glass shops often evaluate Acuity Scheduling for measure intake and deposits, Square Appointments if Square is your payment hub, and SimplyBook.me for flexible multi-service catalogs at strong value.",
    },
    {
      q: "Should window companies take deposits for custom orders?",
      a: "Yes when glass is fabricated to size—pair deposits with written fabrication approval and clear reschedule rules.",
    },
    {
      q: "When do window installers need glazing-specific or FSM software?",
      a: "When fabrication tracking, job costing, and fleet dispatch dominate—scheduling stays the customer-facing layer until then.",
    },
  ],
  extraGuides: [ROUTE_GUIDE],
});

export const CONCRETE_CONTRACTORS_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "concrete-contractors",
  title: "Best Scheduling Software for Concrete Contractors (2026)",
  subtitle:
    "Compare scheduling tools for concrete contractors: site walks, pour-day weather risk, decorative stamp consults, and realistic multi-hour holds.",
  introParagraph:
    "Concrete work depends on cure times, weather, and crew-day sequencing. Scheduling software should book realistic site visits and consultations—not pretend a full driveway pour fits in a 30-minute slot. Use intake for square footage estimates, access constraints, and deposits when you hold pump or crew days.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for site visits, pour holds, and deposits",
      description:
        "Longer blocks, forms for square footage and access, and payment-at-booking when you lock crew days in peak season.",
      rowBestFor: "Site visits & crew holds",
      why:
        "Acuity Scheduling fits concrete contractors who sell stamped patio consults, driveway replacements, and commercial flatwork walks that need deposits before you commit mix and pump resources. See our Acuity Scheduling review.",
    },
    {
      slug: "calendly",
      badge: "Best simple estimator booking",
      description:
        "When you want a polished link for quick site checks or follow-up visits with minimal setup.",
      rowBestFor: "Straightforward consults",
      why:
        "Calendly works for concrete teams that need dependable booking for standard consults while pour scheduling stays internal. See our Calendly review.",
    },
    {
      slug: "setmore",
      badge: "Best budget multi-crew coordination",
      description:
        "Affordable multi-staff calendars as you add estimators and project managers without heavy software spend.",
      rowBestFor: "Growing concrete crews",
      why:
        "Setmore helps growing concrete businesses publish multiple estimators’ availability with reminders at approachable pricing. See our Setmore review.",
    },
  ],
  editorialGuidance: [
    E(
      "Weather and reschedule policy",
      "Pour-day risk belongs in confirmation copy and policies—not hidden footnotes."
    ),
    E(
      "Realistic durations",
      "Separate quick consults from full site engineering walks."
    ),
    E(
      "Deposits",
      "Protect crew and pump holds during peak season when customers shop multiple quotes."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do concrete contractors use?",
      a: "Concrete contractors often evaluate Acuity Scheduling for site visits and deposits, Calendly for simple consult booking, and Setmore for affordable multi-estimator calendars.",
    },
    {
      q: "Should customers book pour days online?",
      a: "Usually book consults and internal confirmations first—pours depend on weather, cure products, and crew sequencing.",
    },
    {
      q: "When do concrete companies need construction or FSM software?",
      a: "When job costing, progress billing, and dispatch replace calendar booking as the core operational system.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE],
});

export const EXCAVATION_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "excavation",
  title: "Best Scheduling Software for Excavation Companies (2026)",
  subtitle:
    "Compare scheduling tools for excavation contractors: utility locate lead times, site walk scheduling, DOT-heavy mobilization, and realistic multi-hour blocks.",
  introParagraph:
    "Excavation companies schedule site walks, utility marks, and equipment mobilizations—not 15-minute haircuts. Scheduling software should use long appointment types, capture access and staging notes, and set expectations about locate waiting periods before digging can legally start.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for structured site walks and intake",
      description:
        "Forms for utility locate status, easements, and photos of access roads; deposits when you hold equipment days.",
      rowBestFor: "Site walks & holds",
      why:
        "Acuity Scheduling fits excavation contractors who need serious intake before sending iron—locate status, staging constraints, and whether homeowners expect same-day start or a true walk-and-quote. See our Acuity Scheduling review.",
    },
    {
      slug: "youcanbookme",
      badge: "Best multi-estimator or PM calendar pooling",
      description:
        "When several project managers or estimators share booking across territories with real Outlook or Google availability.",
      rowBestFor: "Pooled estimator calendars",
      why:
        "YouCanBook.me helps excavation shops where multiple PMs or estimators need pooled availability without a call-center bottleneck. See our YouCanBook.me review.",
    },
    {
      slug: "setmore",
      badge: "Best affordable field booking layer",
      description:
        "Straightforward multi-user booking when you want online access without heavy configuration.",
      rowBestFor: "Lean excavation ops",
      why:
        "Setmore gives excavation teams a practical online booking layer for standard site visits as they professionalize from phone-only dispatch. See our Setmore review.",
    },
  ],
  editorialGuidance: [
    E(
      "Locate and compliance",
      "Booking copy should explain that dig dates may follow 811 marks and internal safety checks—not the first open calendar square."
    ),
    E(
      "Access and equipment",
      "Intake for gate width, slope, and neighbor access reduces failed mobilizations."
    ),
    E(
      "Duration honesty",
      "Use multi-hour blocks for walks and pre-con meetings; undervalued durations create angry GCs."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software works for excavation companies?",
      a: "Excavation contractors often evaluate Acuity Scheduling for structured site walks and deposits, YouCanBook.me for pooled estimator calendars, and Setmore for affordable multi-user booking.",
    },
    {
      q: "Should excavation customers book dig days online?",
      a: "Usually book site walks and consultations first; confirm dig windows after locates, safety checks, and sequencing with the GC.",
    },
    {
      q: "When do excavation companies need heavy equipment or FSM software?",
      a: "When fleet tracking, job costing, and ticketed work replace simple appointment booking.",
    },
  ],
  extraGuides: [ROUTE_GUIDE],
});

export const AUTO_REPAIR_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "auto-repair",
  title: "Best Scheduling Software for Auto Repair Shops (2026)",
  subtitle:
    "Compare scheduling tools for auto repair: bay and tech availability, symptom intake, fleet account booking, and reminders that fill slow mornings.",
  introParagraph:
    "Auto repair shops schedule bays and technicians—not generic “meetings.” Good scheduling software captures vehicle details and symptoms, supports multiple techs or advisors, and plugs into payments when you are already Square-native or want deposits on large jobs.",
  picks: [
    {
      slug: "setmore",
      badge: "Best affordable multi-bay booking",
      description:
        "Multi-staff calendars for service advisors; reminders that reduce no-shows on oil changes and diagnostics.",
      rowBestFor: "Multi-advisor shops",
      why:
        "Setmore fits independent auto repair shops that want online booking across advisors or bays without enterprise shop management pricing. Map services to realistic bay times including diagnostic buffers. See our Setmore review.",
    },
    {
      slug: "square-appointments",
      badge: "Best for shops already on Square",
      description:
        "Booking plus payments and customer records when Square terminals and invoicing already run the front counter.",
      rowBestFor: "Square-native garages",
      why:
        "Square Appointments suits garages that live on Square for parts, deposits, and card-present checkout—customers book into the same ecosystem they already pay through. See our Square Appointments review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best for symptom intake and longer jobs",
      description:
        "Forms for warning lights, noise descriptions, and fleet unit numbers; packages for seasonal services.",
      rowBestFor: "Diagnostics & fleet intake",
      why:
        "Acuity Scheduling helps when intake before the bay matters—symptom questions, fleet identifiers, and prepaid diagnostics on busy days. See our Acuity Scheduling review.",
    },
  ],
  editorialGuidance: [
    E(
      "Bay reality",
      "Do not overbook bays—use buffers for unknown diagnostic time."
    ),
    E(
      "Fleet vs retail",
      "Different questions or booking links for fleet managers versus retail customers."
    ),
    E(
      "Reminders",
      "SMS or email reminders lift show rates on quick-lane style appointments."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do auto repair shops use?",
      a: "Independent shops often evaluate Setmore for affordable multi-advisor booking, Square Appointments if Square powers payments, and Acuity Scheduling for symptom intake and structured diagnostics.",
    },
    {
      q: "Should repair shops take online deposits?",
      a: "Useful for large jobs, performance upgrades, or specialty parts orders—disclose policies clearly.",
    },
    {
      q: "When do shops need shop management software instead of scheduling?",
      a: "When parts matrix, labor guides, and RO workflow dominate—scheduling alone will not replace a full SMS.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE],
});

export const MOBILE_MECHANICS_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "mobile-mechanics",
  title: "Best Scheduling Software for Mobile Mechanics (2026)",
  subtitle:
    "Compare scheduling tools for mobile mechanics: drive-time buffers, location-based intake, on-site payment links, and realistic arrival windows.",
  introParagraph:
    "Mobile mechanics book rolling warehouses—not shop bays. Scheduling software must bake in travel time, capture vehicle location and symptoms, and send reminders so customers meet you with keys and space. Lightweight, mobile-friendly booking often beats heavy shop suites early on.",
  picks: [
    {
      slug: "calendly",
      badge: "Best fast client booking with minimal friction",
      description:
        "Homeowners and fleet drivers already recognize Calendly links—ideal when you want bookings without heavy setup.",
      rowBestFor: "Simple mobile service booking",
      why:
        "Calendly fits mobile mechanics who need a polished booking link customers will actually use from a phone—especially for fleet managers booking recurring driver slots. Add generous buffers for drive time in each event type. See our Calendly review.",
    },
    {
      slug: "youcanbookme",
      badge: "Best calendar-native availability for solo or duo teams",
      description:
        "Tie public booking to the real Google or Outlook calendar of the mechanic who actually rolls.",
      rowBestFor: "Solo & duo mobile techs",
      why:
        "YouCanBook.me suits solo or two-van operations where availability must mirror the tech’s real calendar, not a generic shop grid. See our YouCanBook.me review and Calendly vs YouCanBook.me.",
    },
    {
      slug: "square-appointments",
      badge: "Best payments-linked booking for mobile ops on Square",
      description:
        "Collect deposits or invoices in Square when you already run cards and payouts through Square in the field.",
      rowBestFor: "Square field payments",
      why:
        "Square Appointments helps mobile mechanics on Square unify booking with tap-to-pay and invoicing—fewer apps on the truck. See our Square Appointments review.",
    },
  ],
  editorialGuidance: [
    E(
      "Drive-time buffers",
      "Undersized buffers create late arrivals; model real metro traffic patterns."
    ),
    E(
      "Location clarity",
      "Intake for exact parking, apartment gate codes, and whether the customer will be on site."
    ),
    E(
      "Weather and lighting",
      "Outdoor work may need daylight constraints—communicate in confirmations."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software is best for mobile mechanics?",
      a: "Mobile mechanics often use Calendly for simple client booking, YouCanBook.me for calendar-native solo or duo teams, and Square Appointments when Square handles field payments.",
    },
    {
      q: "How do mobile mechanics reduce late arrivals?",
      a: "Use realistic buffers, limit same-day online booking unless you truly have capacity, and send automated reminders with address confirmation.",
    },
    {
      q: "When should mobile mechanics adopt full shop or FSM software?",
      a: "When parts catalogs, RO history, and fleet contracts replace ad hoc calendar booking as the core system.",
    },
  ],
  extraGuides: [ROUTE_GUIDE, EMERGENCY_GUIDE],
});

export const CLEANING_FRANCHISES_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "cleaning-franchises",
  title: "Best Scheduling Software for Cleaning Franchises (2026)",
  subtitle:
    "Compare scheduling tools for cleaning franchises: multi-territory teams, recurring route appointments, brand-consistent booking pages, and franchisee onboarding speed.",
  introParagraph:
    "Cleaning franchises need repeatable booking experiences across territories—recurring maid visits, deep cleans, and move-out packages—without every franchisee building a custom Rube Goldberg stack. Scheduling software should scale seats, support recurring appointments, and keep confirmations on-brand.",
  picks: [
    {
      slug: "setmore",
      badge: "Best franchisee-friendly value at scale",
      description:
        "Multi-staff recurring visits and reminders at a price point that survives dozens of territories.",
      rowBestFor: "Recurring cleans & teams",
      why:
        "Setmore fits cleaning franchises that need consistent online booking, recurring visits, and multi-technician calendars without enterprise implementation on every branch. Standardize service durations and reminder copy at the brand level. See our Setmore review.",
    },
    {
      slug: "acuity-scheduling",
      badge: "Best for packaged deep cleans and move-outs",
      description:
        "Sell move-out and deep-clean packages with add-ons, intake for square footage, and deposits on large jobs.",
      rowBestFor: "Packages & deposits",
      why:
        "Acuity Scheduling helps franchise brands that sell packaged deep cleans and move-outs with structured intake and optional deposits—reducing underpriced jobs. See our Acuity Scheduling review.",
    },
    {
      slug: "simplybookme",
      badge: "Best customizable booking per territory",
      description:
        "Franchisees can tune forms and services while staying within brand guardrails—often at competitive cost.",
      rowBestFor: "Flexible franchise catalogs",
      why:
        "SimplyBook.me suits franchisors that want franchisees to localize service lists and questions without paying premium per-seat pricing everywhere. See our SimplyBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Brand consistency",
      "Lock colors, logos, and confirmation language so territories feel like one company."
    ),
    E(
      "Recurring visits",
      "Define cadence options clearly—weekly, biweekly, monthly—and train franchisees on skip policies."
    ),
    E(
      "Onboarding",
      "Pick tools franchisees can self-serve in a day; complex stacks kill rollout."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software works for cleaning franchises?",
      a: "Franchise systems often evaluate Setmore for recurring team booking at value pricing, Acuity Scheduling for packaged deep cleans and deposits, and SimplyBook.me for flexible localized catalogs.",
    },
    {
      q: "How do cleaning franchises keep booking consistent?",
      a: "Use shared templates for services, durations, and reminder copy; centralize payment processors where possible.",
    },
    {
      q: "When do franchises need franchise-specific or FSM platforms?",
      a: "When territory KPIs, supply ordering, and QA audits need a single operating system beyond calendars.",
    },
  ],
  extraGuides: [ROUTE_GUIDE],
});

export const EVENT_SERVICES_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "event-services",
  title: "Best Scheduling Software for Event Services (2026)",
  subtitle:
    "Compare scheduling tools for event services: client consults, vendor walkthroughs, crew shift holds, and multi-calendar coordination across sales and ops.",
  introParagraph:
    "Event services—catering, AV, rentals, planners—sell dates, venues, and people. Scheduling software should separate sales consults from load-in blocks, support deposits on peak Saturdays, and let multiple producers share real availability without double booking the same lead.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for consults, packages, and retainers",
      description:
        "Sell wedding packages, tasting appointments, or site walkthroughs with forms and payment-at-booking on peak dates.",
      rowBestFor: "Consults & retainers",
      why:
        "Acuity Scheduling fits event services that sell packaged consults, tastings, or walkthroughs with retainers—especially when peak season dates need deposits. See our Acuity Scheduling review.",
    },
    {
      slug: "calendly",
      badge: "Best simple booking for busy clients",
      description:
        "Fast links for quick syncs with venues and corporate clients who already live in Calendly.",
      rowBestFor: "Simple client meetings",
      why:
        "Calendly works when your team needs frictionless scheduling for short syncs—planners coordinating with florists, AV leads meeting venues—without heavy intake. See our Calendly review.",
    },
    {
      slug: "youcanbookme",
      badge: "Best multi-producer and sales team pooling",
      description:
        "Round-robin or pooled calendars across producers tied to Google or Microsoft—reduces bottlenecks during RFP season.",
      rowBestFor: "Sales & producer teams",
      why:
        "YouCanBook.me helps event companies where multiple producers or account managers need pooled availability for consults without manual triage. See our YouCanBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Consult vs load-in",
      "Different event types and durations—do not book a 30-minute call for a full venue walk."
    ),
    E(
      "Deposits on peak dates",
      "Protect inventory and crew holds with clear refund windows tied to cancellation policy."
    ),
    E(
      "Time zones",
      "Multi-city events need explicit time zones in confirmations."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do event services companies use?",
      a: "Event teams often evaluate Acuity Scheduling for consults and retainers, Calendly for simple client meetings, and YouCanBook.me for pooled producer or sales calendars.",
    },
    {
      q: "Should event companies take retainers through scheduling?",
      a: "Yes on peak dates and custom builds—use contracts plus booking deposits with clear terms.",
    },
    {
      q: "When do event businesses need dedicated event management software?",
      a: "When floor plans, staffing grids, and inventory allocation replace calendar booking as the core system.",
    },
  ],
  extraGuides: [ROUTE_GUIDE],
});

export const HOME_INSPECTORS_SCHEDULING_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "home-inspectors",
  title: "Best Scheduling Software for Home Inspectors (2026)",
  subtitle:
    "Compare scheduling tools for home inspectors: multi-hour inspection blocks, agent-friendly booking, radon or ancillary add-ons, and MLS-style tight same-day windows.",
  introParagraph:
    "Home inspectors sell long, immovable blocks—often coordinated with real estate closings. Scheduling software must support three- to four-hour appointments, same-day urgency during option periods, and optional add-ons like radon placement with separate durations and intake.",
  picks: [
    {
      slug: "acuity-scheduling",
      badge: "Best for long inspections and add-on packages",
      description:
        "Multi-hour services, intake for square footage and age, and payment-at-booking when agents need guaranteed slots.",
      rowBestFor: "Full inspections & add-ons",
      why:
        "Acuity Scheduling fits home inspectors who need long appointment types, add-on radon or sewer scope packages, and structured intake on square footage and foundation access. Trial MLS notes fields for combo lock and tenant access. See our Acuity Scheduling review.",
    },
    {
      slug: "calendly",
      badge: "Best simple booking for agent referrals",
      description:
        "When agents just need a trusted link to grab the next honest slot without learning a new UI.",
      rowBestFor: "Agent-friendly simplicity",
      why:
        "Calendly works for inspectors whose primary channel is agent referrals wanting the lowest-friction booking—configure long durations and buffers explicitly. See our Calendly review.",
    },
    {
      slug: "simplybookme",
      badge: "Best value for multi-inspector firms",
      description:
        "Multiple inspectors, ancillary services, and custom questions at pricing that scales for small firms.",
      rowBestFor: "Multi-inspector firms",
      why:
        "SimplyBook.me helps multi-inspector firms customize services and reminders competitively as they grow past solo calendars. See our SimplyBook.me review.",
    },
  ],
  editorialGuidance: [
    E(
      "Duration honesty",
      "Older homes and crawlspaces need longer blocks—underestimating time creates cascading late reports."
    ),
    E(
      "Access and liability",
      "Intake for occupied homes, pets, and utilities informs safer site days."
    ),
    E(
      "Agent workflows",
      "Offer ICS attachments and clear cancellation windows aligned with your contract."
    ),
  ],
  faqItems: [
    {
      q: "What scheduling software do home inspectors use?",
      a: "Inspectors often evaluate Acuity Scheduling for long inspections and add-on packages, Calendly for simple agent-facing booking, and SimplyBook.me for multi-inspector firms at strong value.",
    },
    {
      q: "Should home inspectors offer same-day booking online?",
      a: "Only if you truly have capacity—otherwise use manual confirmation or premium fees for rush slots.",
    },
    {
      q: "When do inspection companies need inspection-specific software?",
      a: "When report writing, standards checklists, and photo libraries replace calendar booking as the core product.",
    },
  ],
  extraGuides: [EMERGENCY_GUIDE],
});

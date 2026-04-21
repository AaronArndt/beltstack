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
import { getTimeTrackingBestForUrl, getTimeTrackingCompareUrl, getTimeTrackingReviewUrl } from "@/lib/routes";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";

const CATEGORY = { href: "/time-tracking", label: "Time tracking" };
const SEE_ALSO = {
  roundupLabel: "best time tracking software roundup",
  roundupHref: "/time-tracking/best-time-tracking-software",
  compareLabel: "time tracking software comparisons",
  compareHref: "/time-tracking/compare",
};

const PRODUCT_CORE = {
  hubstaff: {
    name: "Hubstaff",
    logoSrc: "/Logos/hubstaff.jpeg",
    rating: "4.4",
    startingPrice: "$4.99/user/mo",
    visitUrl: "https://hubstaff.com",
    defaultStandout: "GPS, geofencing, and field-ready accountability",
  },
  clockify: {
    name: "Clockify",
    logoSrc: "/Logos/clockify.jpeg",
    rating: "4.3",
    startingPrice: "Free",
    visitUrl: "https://clockify.me",
    defaultStandout: "Unlimited free users and optional controls",
  },
  toggl: {
    name: "Toggl Track",
    logoSrc: "/Logos/toggl.jpeg",
    rating: "4.6",
    startingPrice: "Free tier",
    visitUrl: "https://toggl.com/track",
    defaultStandout: "Fast timers and clean productivity reporting",
  },
  harvest: {
    name: "Harvest",
    logoSrc: "/Logos/harvest.png",
    rating: "4.4",
    startingPrice: "$12/user/mo",
    visitUrl: "https://www.getharvest.com",
    defaultStandout: "Time plus invoicing for service teams",
  },
} as const;

type TradeProductSlug = keyof typeof PRODUCT_CORE;

type ProductPick = {
  slug: TradeProductSlug;
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
  hubTeaser: string;
  introParagraph: string;
  keywords: string[];
  picks: [ProductPick, ProductPick, ProductPick];
  editorialGuidance: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
};

type TradePageData = {
  pageProps: BestForTemplateProps;
  metadata: { title: string; description: string; keywords: string[] };
  hubTeaser: string;
  navLabel: string;
};

const E = (heading: string, body: string): BestForEditorialBlock => ({ heading, body });

const COMMON_COMPARISONS: BestForComparisonLink[] = [
  { label: "Hubstaff vs Time Doctor", href: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") },
  { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
  { label: "Harvest vs Clockify", href: getTimeTrackingCompareUrl("harvest-vs-clockify") },
];

const COMMON_GUIDES: BestForGuideLink[] = [
  { label: "Job costing with time tracking", href: "/time-tracking/guides/job-costing-time-tracking-for-contractors" },
  { label: "Geofenced time tracking for field crews", href: "/time-tracking/guides/geofenced-time-tracking-for-field-crews" },
  { label: "Time tracking vs timesheets", href: "/time-tracking/guides/time-tracking-vs-timesheets" },
];

function buildPageData(config: TradeConfig, navLabel: string): TradePageData {
  const featuredProducts: BestForFeaturedProduct[] = config.picks.map((pick) => {
    const product = PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: product.name,
      badge: pick.badge,
      description: pick.description,
      rating: product.rating,
      startingPrice: product.startingPrice,
      reviewHref: getTimeTrackingReviewUrl(pick.slug),
      visitUrl: product.visitUrl,
      logoSrc: product.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = config.picks.map((pick) => {
    const product = PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: product.name,
      logoSrc: product.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: product.startingPrice,
      standoutFeature: pick.standoutFeature ?? product.defaultStandout,
      reviewHref: getTimeTrackingReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = config.picks.map((pick) => ({
    heading: PRODUCT_CORE[pick.slug].name,
    body: pick.why,
  }));

  const relatedReviews: BestForReviewLink[] = config.picks.map((pick) => ({
    name: PRODUCT_CORE[pick.slug].name,
    href: getTimeTrackingReviewUrl(pick.slug),
  }));

  return {
    pageProps: {
      title: config.title,
      subtitle: config.subtitle,
      useCase: config.useCase,
      categoryHref: CATEGORY.href,
      categoryLabel: CATEGORY.label,
      introParagraph: config.introParagraph,
      freshnessText: "Updated for 2026",
      topPicksSub: "Our top time tracking picks for this trade.",
      editorialSub: "What to look for when choosing time tracking software for this business type.",
      whyThesePicksSub: "Why these tools made our shortlist.",
      seeAlsoBlock: SEE_ALSO,
      featuredProducts,
      comparisonTableRows,
      editorialGuidance: config.editorialGuidance,
      whyThesePicks,
      relatedReviews,
      relatedComparisons: COMMON_COMPARISONS,
      relatedGuides: COMMON_GUIDES,
      faqItems: config.faqItems,
    },
    metadata: {
      title: buildBestForMetaTitle(config.title),
      description: config.subtitle,
      keywords: config.keywords,
    },
    hubTeaser: config.hubTeaser,
    navLabel,
  };
}

const TRADE_CONFIGS: Array<{ navLabel: string; config: TradeConfig }> = [
  {
    navLabel: "HVAC businesses",
    config: {
      useCase: "hvac",
      title: "Best Time Tracking Software for HVAC Businesses (2026)",
      subtitle:
        "Compare HVAC time tracking tools for service calls, installs, and maintenance contracts with GPS, mobile clocks, and payroll-ready reporting.",
      hubTeaser: "GPS-backed clocks, crew accountability, and payroll-ready exports for HVAC teams.",
      introParagraph:
        "HVAC companies need accurate crew time by job, tech, and location to protect margins on installs and maintenance agreements. The best HVAC time tracking software reduces buddy punching, supports mobile clock-ins, and keeps payroll and job-costing reports clean.",
      keywords: ["best time tracking software for HVAC", "HVAC time tracking app", "HVAC employee time tracking"],
      picks: [
        {
          slug: "hubstaff",
          badge: "Best for mobile HVAC crews",
          description: "GPS and geofencing help verify clock-ins at job sites and reduce time disputes.",
          rowBestFor: "Field accountability",
          why: "Hubstaff works well for HVAC businesses that dispatch crews across multiple locations and need stronger proof of time on site. Pilot geofencing by service zone, validate break rules, and review how location data flows into payroll reports before full rollout.",
        },
        {
          slug: "clockify",
          badge: "Best budget-friendly HVAC option",
          description: "Start free for office and field staff, then add approvals and controls as the team grows.",
          rowBestFor: "Cost-controlled rollout",
          why: "Clockify is a practical fit for HVAC teams that want to standardize time tracking without a big upfront spend. Use required project fields for service call types and verify supervisor approval workflows before payroll close.",
        },
        {
          slug: "harvest",
          badge: "Best for HVAC projects and billing",
          description: "Tracks time and expenses with invoicing for commercial or T&M-heavy HVAC work.",
          rowBestFor: "Time plus invoicing",
          why: "Harvest suits HVAC contractors who bill commercial clients by time and materials and want hours to flow directly into invoices. Trial one billing cycle with real jobs to confirm rates, tax handling, and report exports match accounting requirements.",
        },
      ],
      editorialGuidance: [
        E("Clock in where work starts", "Use geofencing or job-site prompts so techs do not clock in from the parking lot."),
        E("Separate install vs service labor", "Track labor categories clearly to improve pricing and technician utilization."),
      ],
      faqItems: [
        { q: "What is the best time tracking software for HVAC businesses?", a: "Hubstaff is strong for field accountability, Clockify is a cost-effective starter, and Harvest is ideal when HVAC labor must convert to invoices quickly." },
      ],
    },
  },
  { navLabel: "Plumbing companies", config: { useCase: "plumbing", title: "Best Time Tracking Software for Plumbing Companies (2026)", subtitle: "Compare plumbing time tracking software for service calls, emergency jobs, and payroll with mobile time clocks and location-aware tracking.", hubTeaser: "Mobile time clocks and cleaner payroll for plumbing teams.", introParagraph: "Plumbing companies need fast, accurate time capture for emergency dispatch, scheduled jobs, and recurring service work. Good plumbing time tracking software helps owners monitor labor costs by job and eliminate manual timesheet cleanup.", keywords: ["best time tracking software for plumbing companies", "plumber time tracking app", "plumbing employee time tracking"], picks: [{ slug: "hubstaff", badge: "Best for dispatched plumbers", description: "GPS and shift data help validate route-based and emergency work.", rowBestFor: "Dispatch visibility", why: "Hubstaff gives plumbing teams clear location-backed timesheets for mobile crews. Test job-site clock-ins, geofence exceptions, and payroll exports during a full pay period before committing." }, { slug: "clockify", badge: "Best free plumbing time tracker", description: "Unlimited free users support growing teams without immediate software bloat.", rowBestFor: "Low-cost adoption", why: "Clockify helps plumbing companies move off paper timesheets quickly. Configure required tags for service type and crew to keep labor reporting usable at month end." }, { slug: "toggl", badge: "Best for simple plumbing workflows", description: "Clean timers and reporting for teams that value ease of use over monitoring.", rowBestFor: "Simple tracking", why: "Toggl Track fits plumbing businesses that want better time accuracy without heavy monitoring policies. Use it when adoption and data quality matter more than screenshot controls." }], editorialGuidance: [E("Capture emergency work correctly", "Use tags for after-hours calls so overtime and margin analysis stay accurate."), E("Standardize crew time coding", "Keep job and task naming consistent to avoid messy payroll exports.")], faqItems: [{ q: "Is there a good free time tracking app for plumbers?", a: "Yes. Clockify offers an unlimited free plan that works well for plumbing companies starting formal time tracking." }] } },
  { navLabel: "Electricians", config: { useCase: "electricians", title: "Best Time Tracking Software for Electricians (2026)", subtitle: "Compare electrician time tracking tools for service jobs, commercial projects, and payroll reporting with accurate mobile time entry.", hubTeaser: "Reliable mobile time tracking for electrical crews and project labor.", introParagraph: "Electricians need dependable labor tracking across service calls, panel upgrades, and commercial work. The right tool makes it easy to clock time in the field and tie hours back to jobs for payroll and job-costing analysis.", keywords: ["best time tracking software for electricians", "electrician time tracking app", "electrical contractor timesheet software"], picks: [{ slug: "hubstaff", badge: "Best for field accountability", description: "Location and activity data help verify time across multiple job sites.", rowBestFor: "Mobile crews", why: "Hubstaff is a strong fit for electrical contractors running multiple crews and service areas. Validate how GPS policies align with your team culture before enabling full monitoring." }, { slug: "toggl", badge: "Best for easy electrician timesheets", description: "Quick timers reduce missed entries for busy techs and estimators.", rowBestFor: "Ease of use", why: "Toggl Track helps electricians keep time tracking lightweight and consistent. It is ideal for teams that want better reporting but do not need strict surveillance features." }, { slug: "clockify", badge: "Best value for growing electrical teams", description: "Free core plan with approvals and controls available on paid tiers.", rowBestFor: "Scalable pricing", why: "Clockify balances affordability and flexibility for electrical businesses moving from spreadsheets to structured timesheets. Start with core tracking and expand controls as team size grows." }], editorialGuidance: [E("Track labor by job phase", "Separate rough-in, finish, and service work for cleaner project margin data."), E("Keep payroll exports consistent", "Use approval workflows before payroll processing to reduce correction cycles.")], faqItems: [{ q: "What time tracking software is best for electricians?", a: "Hubstaff works well for mobile accountability, Toggl Track for simple adoption, and Clockify for budget-friendly team rollout." }] } },
  { navLabel: "Painting contractors", config: { useCase: "painting", title: "Best Time Tracking Software for Painting Contractors (2026)", subtitle: "Compare painting contractor time tracking software for crew clocks, project phases, and payroll with mobile-friendly timesheets.", hubTeaser: "Crew timesheets that keep painting payroll and job costing clean.", introParagraph: "Painting contractors need clean labor tracking for prep, paint, and punch phases to protect project margins. Strong time tracking software makes daily crew logging easier and keeps payroll accurate during peak season.", keywords: ["best time tracking software for painting contractors", "painting crew time tracking", "painting timesheet app"], picks: [{ slug: "clockify", badge: "Best free crew time tracking", description: "Unlimited users make it easy to track seasonal painting crews.", rowBestFor: "Seasonal teams", why: "Clockify is a practical fit for painting companies with rotating crew sizes and tight software budgets. Use role-based approvals so foremen confirm entries before payroll closes." }, { slug: "hubstaff", badge: "Best for multi-site paint crews", description: "GPS tracking helps verify on-site time across several jobs daily.", rowBestFor: "Location verification", why: "Hubstaff works for painting teams that travel between jobs and need clear evidence of start and stop times. Run a pilot with a few crews to tune location and break policies first." }, { slug: "toggl", badge: "Best for simple project reporting", description: "Clean reports support job profitability reviews without heavy setup.", rowBestFor: "Reporting simplicity", why: "Toggl Track is a good match for painting businesses that want better labor insights while keeping the app simple for crews and office staff." }], editorialGuidance: [E("Use consistent job phase tags", "Tag prep, paint, and cleanup separately for better estimating feedback."), E("Audit overtime weekly", "Review labor spikes early to avoid margin surprises on fixed bids.")], faqItems: [{ q: "Can painting contractors use free time tracking software?", a: "Yes. Clockify is one of the best free options for painting contractors and can scale into paid controls later." }] } },
  { navLabel: "Roofing companies", config: { useCase: "roofing", title: "Best Time Tracking Software for Roofing Companies (2026)", subtitle: "Compare roofing time tracking software for job-site crews, storm response teams, and payroll with reliable mobile and GPS tracking.", hubTeaser: "Reliable crew tracking for roofing job sites and storm volume.", introParagraph: "Roofing companies manage high-volume crews and changing job sites, especially during storm seasons. The best roofing time tracking software helps track labor accurately by crew and project so payroll and job-costing stay trustworthy.", keywords: ["best time tracking software for roofing companies", "roofing crew time tracking", "roofing timesheet software"], picks: [{ slug: "hubstaff", badge: "Best for roofing field crews", description: "GPS and mobile clocks help validate labor on changing job locations.", rowBestFor: "Storm and field crews", why: "Hubstaff is well suited to roofing businesses with fast-moving crews and frequent location changes. Configure geofences by active project and test reporting during a busy week." }, { slug: "clockify", badge: "Best affordable roofing option", description: "Simple time tracking at scale with free entry and paid upgrades.", rowBestFor: "Budget-conscious teams", why: "Clockify gives roofing companies a low-risk way to standardize timesheets across office and field users. It is useful when adoption speed matters more than advanced monitoring." }, { slug: "harvest", badge: "Best for roofing T&M billing", description: "Turn tracked labor into invoices for commercial and time-and-material work.", rowBestFor: "Billing workflow", why: "Harvest fits roofing teams that need labor and expense data to flow directly into customer billing. Validate invoice formatting and approval steps against your accounting process." }], editorialGuidance: [E("Separate storm vs retail labor", "Track labor type to compare margin across lead sources and project types."), E("Verify clock-outs consistently", "Set reminders so crews close entries daily to prevent payroll guesswork.")], faqItems: [{ q: "What is the best roofing time tracking software?", a: "Hubstaff is a top option for field-heavy roofing teams, with Clockify and Harvest as strong alternatives depending on budget and billing needs." }] } },
  { navLabel: "General contractors", config: { useCase: "general-contractors", title: "Best Time Tracking Software for General Contractors (2026)", subtitle: "Compare time tracking software for general contractors with mobile crew clocks, project labor tracking, and payroll-ready reporting.", hubTeaser: "Job-level labor visibility for general contractor teams.", introParagraph: "General contractors need labor visibility across multiple trades, sites, and supervisors. Good time tracking software helps standardize field time entry and gives project leaders clean labor data for forecasting and payroll.", keywords: ["best time tracking software for general contractors", "contractor time tracking software", "construction crew timesheet app"], picks: [{ slug: "hubstaff", badge: "Best for multi-site GC crews", description: "GPS and mobile tracking support distributed crews and subcontracted teams.", rowBestFor: "Site-by-site oversight", why: "Hubstaff helps general contractors verify labor across multiple active jobs while keeping timesheets centralized. Pilot with one project team and validate foreman workflows before expanding." }, { slug: "clockify", badge: "Best for scalable GC rollout", description: "Free core tools make it easier to train office and field users together.", rowBestFor: "Company-wide adoption", why: "Clockify works for GCs that want broad time tracking adoption without large software costs. Use project codes and approval rules to protect data quality at scale." }, { slug: "toggl", badge: "Best for superintendent and office teams", description: "Simple timers and reporting for teams focused on labor visibility over surveillance.", rowBestFor: "Simple PM reporting", why: "Toggl Track is useful for GC teams that need cleaner labor reporting but prefer a lighter interface and less invasive monitoring policies." }], editorialGuidance: [E("Standardize project codes", "Shared coding rules prevent messy labor reports across projects."), E("Use approvals before payroll", "Require foreman or PM approval to reduce payroll corrections.")], faqItems: [{ q: "Do general contractors need GPS time tracking?", a: "Not always, but GPS and geofencing can help multi-site contractors reduce time disputes and improve job-level labor accuracy." }] } },
  { navLabel: "Landscaping companies", config: { useCase: "landscaping", title: "Best Time Tracking Software for Landscaping Companies (2026)", subtitle: "Compare landscaping time tracking software for route crews, project teams, and seasonal payroll with mobile and location-based tools.", hubTeaser: "Route and project labor tracking for landscaping crews.", introParagraph: "Landscaping companies juggle recurring route work and project-based installs with seasonal labor swings. The right time tracking software keeps field time entry simple and supports cleaner payroll and profitability reporting.", keywords: ["best time tracking software for landscaping companies", "landscaping crew time tracking", "landscaping payroll timesheet app"], picks: [{ slug: "hubstaff", badge: "Best for route-based landscaping crews", description: "GPS and geofencing work well for mobile crews moving across many properties.", rowBestFor: "Route labor accuracy", why: "Hubstaff is a strong fit for landscaping operators managing multiple crews and stops per day. Use location and shift data to validate route labor before payroll processing." }, { slug: "clockify", badge: "Best value for seasonal landscaping teams", description: "Unlimited free users help when team size changes throughout the year.", rowBestFor: "Seasonal workforce", why: "Clockify offers flexible pricing and simple timesheets for landscaping teams with seasonal staffing. Start with core tracking and add approvals as staffing grows." }, { slug: "harvest", badge: "Best for project and enhancement billing", description: "Track labor and expenses for design-build or enhancement work that needs invoicing.", rowBestFor: "Project billing", why: "Harvest works well when landscaping businesses bill commercial or enhancement projects and want labor data to flow into invoices directly." }], editorialGuidance: [E("Separate route vs project time", "Track recurring maintenance labor separately from install and enhancement work."), E("Prepare for seasonal payroll surges", "Audit overtime and approval bottlenecks before peak season starts.")], faqItems: [{ q: "What is the best time tracking app for landscaping companies?", a: "Hubstaff is strong for route visibility, Clockify for flexible pricing, and Harvest for project-focused landscaping billing." }] } },
  { navLabel: "Construction companies", config: { useCase: "construction", title: "Best Time Tracking Software for Construction Companies (2026)", subtitle: "Compare construction time tracking software for field labor, mobile clocks, geofencing, and payroll reports that support job costing.", hubTeaser: "Field-ready labor tracking for construction payroll and job costing.", introParagraph: "Construction companies need dependable field time tracking across multiple projects and crews. The best construction time tracking software improves labor visibility, supports foreman approvals, and keeps payroll and job-costing reports accurate.", keywords: ["best time tracking software for construction companies", "construction time tracking app", "construction payroll timesheet software"], picks: [{ slug: "hubstaff", badge: "Best for construction field tracking", description: "GPS-backed time logs and mobile apps support active construction sites.", rowBestFor: "Field labor oversight", why: "Hubstaff is built for construction teams that need verifiable labor data from job sites. Pilot geofencing and role permissions with project leadership to ensure trust and compliance." }, { slug: "clockify", badge: "Best for budget-conscious construction firms", description: "Free team tracking with scalable controls as operations mature.", rowBestFor: "Low-cost standardization", why: "Clockify is a practical option for construction businesses rolling out digital timesheets to crews and office staff. Use project templates to keep coding consistent across jobs." }, { slug: "toggl", badge: "Best for simple construction reporting", description: "Easy timer workflow that project managers and office teams adopt quickly.", rowBestFor: "Easy adoption", why: "Toggl Track fits construction teams that want cleaner labor reporting with minimal training burden and no heavy surveillance setup." }], editorialGuidance: [E("Require daily foreman approvals", "Catch missing or miscoded entries before payroll deadlines."), E("Map time to cost codes early", "Clean cost-code mapping improves estimating and job profitability analysis.")], faqItems: [{ q: "What is the best time tracking software for construction companies?", a: "Hubstaff is a top choice for field-heavy tracking, while Clockify and Toggl Track are strong alternatives for cost control and ease of use." }] } },
  { navLabel: "Remodeling businesses", config: { useCase: "remodeling", title: "Best Time Tracking Software for Remodeling Businesses (2026)", subtitle: "Compare remodeling time tracking software for project crews, subcontractor hours, and payroll with mobile-friendly job tracking.", hubTeaser: "Project-focused labor tracking for remodeling teams.", introParagraph: "Remodeling businesses need project-level labor visibility across long timelines and changing scopes. Time tracking software should stay easy for field crews while giving owners accurate payroll and job-costing data.", keywords: ["best time tracking software for remodeling businesses", "remodeling crew time tracking", "remodeling timesheet app"], picks: [{ slug: "harvest", badge: "Best for remodel project billing", description: "Time and expense tracking with invoicing for project-based remodeling work.", rowBestFor: "Project billing", why: "Harvest is a strong fit for remodeling teams that bill by project phases and need labor plus expenses aligned for invoicing. Trial with one active remodel to validate reporting and invoice output." }, { slug: "clockify", badge: "Best affordable remodel timesheets", description: "Simple team tracking with room to add approvals and controls later.", rowBestFor: "Budget-friendly teams", why: "Clockify helps remodeling companies standardize crew timesheets without high software costs. Use project tags to separate phases and prevent reporting noise." }, { slug: "toggl", badge: "Best for easy crew adoption", description: "Low-friction timers and reports for teams that need simplicity first.", rowBestFor: "Simple workflows", why: "Toggl Track works well when remodeling teams want accurate labor logs but prefer lightweight tools and minimal setup overhead." }], editorialGuidance: [E("Track by project phase", "Separate demo, rough, and finish labor to improve future estimates."), E("Keep subcontractor workflows clear", "Document how subcontracted hours are captured to avoid payroll or billing confusion.")], faqItems: [{ q: "Which time tracking tool is best for remodeling contractors?", a: "Harvest is strong for project billing, Clockify for affordability, and Toggl Track for easy day-to-day use." }] } },
  { navLabel: "Handyman businesses", config: { useCase: "handyman", title: "Best Time Tracking Software for Handyman Businesses (2026)", subtitle: "Compare handyman time tracking software for small crews, mobile job clocks, and affordable payroll-ready timesheets.", hubTeaser: "Simple, affordable time tracking for handyman teams.", introParagraph: "Handyman businesses need fast time tracking that does not add office overhead. The best options are easy to use on mobile, affordable for small teams, and reliable enough for payroll and job-level reporting.", keywords: ["best time tracking software for handyman businesses", "handyman time tracking app", "handyman crew timesheets"], picks: [{ slug: "clockify", badge: "Best free option for handymen", description: "Unlimited free users make it ideal for owner-operators and small teams.", rowBestFor: "Free team tracking", why: "Clockify is a top choice for handyman teams that need digital timesheets without extra cost. It is easy to roll out and supports approvals as processes mature." }, { slug: "toggl", badge: "Best for quick daily tracking", description: "Simple timers and clear reports for busy owner-led operations.", rowBestFor: "Fast adoption", why: "Toggl Track helps handyman businesses track labor accurately with almost no training burden. It is a good fit when ease of use drives adoption." }, { slug: "hubstaff", badge: "Best for location-verified handyman crews", description: "GPS and mobile tracking help verify time spent across customer sites.", rowBestFor: "Location controls", why: "Hubstaff suits handyman companies with multiple field workers and frequent site changes where location-backed entries reduce disputes." }], editorialGuidance: [E("Keep categories simple", "Use a few consistent service categories to preserve report quality."), E("Review timesheets weekly", "Regular reviews catch missed entries before payroll day.")], faqItems: [{ q: "Is there free time tracking software for handyman businesses?", a: "Yes. Clockify is one of the best free time tracking options for handyman teams and can scale as you grow." }] } },
  { navLabel: "Property management companies", config: { useCase: "property-management", title: "Best Time Tracking Software for Property Management Companies (2026)", subtitle: "Compare property management time tracking software for maintenance teams, inspections, and payroll with mobile and job-based tracking.", hubTeaser: "Maintenance and inspection labor tracking for property managers.", introParagraph: "Property management teams need labor visibility across maintenance calls, inspections, and recurring property tasks. Great time tracking tools help office and field teams log hours accurately and keep payroll clean.", keywords: ["best time tracking software for property management companies", "property management staff time tracking", "maintenance crew timesheet software"], picks: [{ slug: "hubstaff", badge: "Best for field maintenance teams", description: "GPS and mobile tracking support technicians moving between properties daily.", rowBestFor: "Multi-property field work", why: "Hubstaff is a strong fit for property managers with mobile maintenance teams and multiple site visits per day. It improves accountability and helps verify labor allocations by property." }, { slug: "clockify", badge: "Best value for mixed office and field teams", description: "Low-cost rollout for admins, maintenance staff, and supervisors.", rowBestFor: "Cross-team adoption", why: "Clockify works well for property management companies that need one time tracking system across office and field roles without heavy cost." }, { slug: "harvest", badge: "Best for billable property services", description: "Tracks time and expenses when property services are billed to owners or clients.", rowBestFor: "Billable services", why: "Harvest is useful when property management firms bill certain labor and need a direct path from timesheets to invoices and client-facing reports." }], editorialGuidance: [E("Track by property or portfolio", "Use consistent property codes so labor reporting remains actionable."), E("Separate maintenance vs admin time", "Clear categories improve staffing and profitability decisions.")], faqItems: [{ q: "What is the best time tracking software for property management companies?", a: "Hubstaff is strong for field teams, Clockify for affordability, and Harvest for billable service workflows." }] } },
  { navLabel: "Pest control businesses", config: { useCase: "pest-control", title: "Best Time Tracking Software for Pest Control Businesses (2026)", subtitle: "Compare pest control time tracking software for route technicians, recurring service labor, and payroll with mobile and GPS tracking.", hubTeaser: "Route technician labor tracking for pest control operations.", introParagraph: "Pest control businesses need accurate labor tracking for route work, callbacks, and seasonal service surges. The right tool simplifies technician time logging and supports payroll with fewer manual corrections.", keywords: ["best time tracking software for pest control businesses", "pest control technician time tracking", "pest control payroll timesheets"], picks: [{ slug: "hubstaff", badge: "Best for route technician tracking", description: "GPS and location history support accountability across daily service stops.", rowBestFor: "Route visibility", why: "Hubstaff helps pest control operators verify labor time by location and reduce disputes across route-heavy schedules. Pilot with one branch to tune policies before full rollout." }, { slug: "clockify", badge: "Best low-cost pest control option", description: "Free and scalable for teams that need cleaner timesheets first.", rowBestFor: "Budget rollout", why: "Clockify is a good fit for pest control businesses standardizing time tracking across small or growing teams. Add approval workflows to improve payroll accuracy." }, { slug: "toggl", badge: "Best for simple team timesheets", description: "Fast tracking and reporting for teams that prioritize ease over surveillance.", rowBestFor: "Simple operations", why: "Toggl Track works for pest control businesses that want reliable labor data while keeping the experience lightweight for technicians and office staff." }], editorialGuidance: [E("Distinguish route vs callback time", "Separate these categories to improve pricing and technician planning."), E("Use mobile-friendly workflows", "Technicians should be able to clock quickly between service stops.")], faqItems: [{ q: "What time tracking app is best for pest control businesses?", a: "Hubstaff is strong for route tracking, Clockify for affordability, and Toggl Track for simplicity and adoption." }] } },
  { navLabel: "Pool service companies", config: { useCase: "pool-service", title: "Best Time Tracking Software for Pool Service Companies (2026)", subtitle: "Compare pool service time tracking software for route teams, repair work, and payroll with mobile clocks and field-friendly reporting.", hubTeaser: "Route and repair labor tracking for pool service teams.", introParagraph: "Pool service businesses need clean labor tracking for recurring routes, equipment repairs, and seasonal workload spikes. Strong time tracking software helps teams log time in the field and supports reliable payroll and labor reporting.", keywords: ["best time tracking software for pool service companies", "pool service technician time tracking", "pool maintenance timesheet app"], picks: [{ slug: "hubstaff", badge: "Best for mobile pool crews", description: "GPS-enabled tracking supports route-based pool service operations.", rowBestFor: "Route accountability", why: "Hubstaff is ideal for pool service companies managing daily field routes and multiple crews. It helps confirm on-site labor and improve payroll confidence." }, { slug: "clockify", badge: "Best budget option for pool teams", description: "Affordable team tracking with an unlimited free plan.", rowBestFor: "Cost-effective scaling", why: "Clockify gives pool service businesses a low-friction way to move from manual logs to digital timesheets. It scales well as seasonal staffing changes." }, { slug: "harvest", badge: "Best for project and repair billing", description: "Time and expense workflows support billable repair and install work.", rowBestFor: "Repair invoicing", why: "Harvest works well for pool companies that bill labor-heavy repairs and want tracked time to connect directly to invoices and owner reports." }], editorialGuidance: [E("Separate route maintenance from repairs", "This keeps pricing and staffing analysis accurate."), E("Review seasonal overtime trends", "Use reports to plan labor during open and close season peaks.")], faqItems: [{ q: "Which time tracking software is best for pool service companies?", a: "Hubstaff is excellent for route accountability, Clockify for affordability, and Harvest for labor plus billing workflows." }] } },
  { navLabel: "Junk removal businesses", config: { useCase: "junk-removal", title: "Best Time Tracking Software for Junk Removal Businesses (2026)", subtitle: "Compare junk removal time tracking software for field crews, multiple daily stops, and payroll with fast mobile clocks and GPS support.", hubTeaser: "Fast mobile timesheets for junk removal crews.", introParagraph: "Junk removal businesses run on speed and route efficiency, so time tracking must be simple and mobile-first. The best options capture labor accurately across many daily stops and reduce payroll cleanup.", keywords: ["best time tracking software for junk removal businesses", "junk removal crew time tracking", "junk hauling timesheet app"], picks: [{ slug: "hubstaff", badge: "Best for route and field verification", description: "GPS-backed logs help validate labor across fast-moving jobs.", rowBestFor: "Location-backed tracking", why: "Hubstaff is a strong choice for junk removal operators with multiple crews and frequent site changes. It adds structure and visibility where manual logs often fail." }, { slug: "clockify", badge: "Best free option for growing crews", description: "Unlimited users support growth without immediate licensing pressure.", rowBestFor: "Free team rollout", why: "Clockify helps junk removal businesses roll out digital time tracking quickly while controlling software spend. Add approvals for cleaner payroll handoffs." }, { slug: "toggl", badge: "Best for straightforward timesheets", description: "Simple UI keeps field and office adoption high.", rowBestFor: "Ease of use", why: "Toggl Track is a fit for junk removal teams that want clear labor visibility without complex setup or heavier monitoring features." }], editorialGuidance: [E("Track by truck or crew", "Use consistent tags to compare labor productivity across teams."), E("Require same-day entries", "Daily completion reduces missing time and payroll corrections.")], faqItems: [{ q: "Is there free time tracking software for junk removal businesses?", a: "Yes. Clockify offers a free plan with unlimited users and is a common starting point for junk removal teams." }] } },
  { navLabel: "Moving companies", config: { useCase: "moving", title: "Best Time Tracking Software for Moving Companies (2026)", subtitle: "Compare moving company time tracking software for crews, multi-stop jobs, and payroll with mobile clocks, approvals, and location tracking.", hubTeaser: "Crew and route time tracking for moving companies.", introParagraph: "Moving companies need accurate labor tracking across estimates, loading, transit, and unloading activities. Strong time tracking software helps manage crew productivity, payroll accuracy, and job-level labor visibility.", keywords: ["best time tracking software for moving companies", "moving crew time tracking app", "moving company payroll timesheets"], picks: [{ slug: "hubstaff", badge: "Best for moving crew location tracking", description: "GPS and mobile tracking support multi-stop and long-day moving jobs.", rowBestFor: "Field and route visibility", why: "Hubstaff is a strong fit for moving companies that need better labor verification across routes and job sites. Pilot geofencing and shift rules before full deployment." }, { slug: "clockify", badge: "Best value for growing moving teams", description: "Affordable entry point with scalable controls for larger crews.", rowBestFor: "Scalable affordability", why: "Clockify helps moving businesses standardize time tracking quickly while keeping software costs predictable as team size fluctuates." }, { slug: "harvest", badge: "Best for billable labor workflows", description: "Converts tracked crew time into invoices for labor-billed moves.", rowBestFor: "Labor invoicing", why: "Harvest works well for moving businesses that bill labor directly and need a cleaner path from crew hours to customer invoices." }], editorialGuidance: [E("Track by move type", "Separate local, long-distance, and commercial labor for better pricing analysis."), E("Use supervisor approvals", "Require crew lead approvals before payroll export to reduce corrections.")], faqItems: [{ q: "What time tracking software is best for moving companies?", a: "Hubstaff is excellent for route-based field tracking, Clockify for cost-effective growth, and Harvest for billable labor workflows." }] } },
];

export const TIME_TRACKING_TRADE_HUB_ORDER = TRADE_CONFIGS.map((item) => item.config.useCase);

export const TIME_TRACKING_TRADE_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = Object.fromEntries(
  TRADE_CONFIGS.map(({ navLabel, config }) => [config.useCase, buildPageData(config, navLabel).pageProps])
);

export const TIME_TRACKING_TRADE_METADATA_BY_SLUG: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = Object.fromEntries(
  TRADE_CONFIGS.map(({ navLabel, config }) => [config.useCase, buildPageData(config, navLabel).metadata])
);

export function getTimeTrackingTradeBestForHubCards(): { label: string; href: string; description: string }[] {
  return TRADE_CONFIGS.map(({ navLabel, config }) => ({
    label: config.title,
    href: getTimeTrackingBestForUrl(config.useCase),
    description: config.hubTeaser,
  }));
}

export const TIME_TRACKING_TRADE_SCENARIO_NAV_LINKS: { label: string; href: string }[] = TRADE_CONFIGS.map(
  ({ navLabel, config }) => ({
    label: navLabel,
    href: getTimeTrackingBestForUrl(config.useCase),
  })
);

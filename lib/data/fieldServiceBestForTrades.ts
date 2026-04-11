/**
 * Field service best-for pages by trade / company type (Jobber, Housecall Pro, Workiz).
 * Used by app/field-service/best-for/[trade]/page.tsx.
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
import { getFieldServiceCompareUrl, getFieldServiceReviewUrl } from "@/lib/routes";

const CATEGORY = { href: "/field-service", label: "Field Service" };
const SEE_ALSO = {
  roundupLabel: "best field service management software",
  roundupHref: "/field-service/best-field-service-software",
  compareLabel: "field service software comparisons",
  compareHref: "/field-service/compare",
};

const LOGOS = {
  jobber: "/Logos/jobber.png",
  housecallpro: "/Logos/housecallpro.jpeg",
  workiz: "/Logos/workiz.jpeg",
} as const;

const RELATED_REVIEWS: BestForReviewLink[] = [
  { name: "Jobber", href: getFieldServiceReviewUrl("jobber") },
  { name: "Housecall Pro", href: getFieldServiceReviewUrl("housecall-pro") },
  { name: "Workiz", href: getFieldServiceReviewUrl("workiz") },
];

const RELATED_COMPARISONS: BestForComparisonLink[] = [
  { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
  { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
];

const COMMON_GUIDES: BestForGuideLink[] = [
  { label: "How to choose field service management software", href: "/field-service/guides/how-to-choose-field-service-software" },
  { label: "Dispatch and capacity planning for field service", href: "/field-service/guides/dispatch-and-capacity-planning-for-field-service" },
  { label: "Mobile field service apps for technicians", href: "/field-service/guides/mobile-field-service-apps-for-technicians" },
];

type TradeConfig = {
  useCase: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  jobberBadge: string;
  jobberDesc: string;
  hcpBadge: string;
  hcpDesc: string;
  workizBadge: string;
  workizDesc: string;
  rowJobber: string;
  rowHcp: string;
  rowWorkiz: string;
  editorialGuidance: BestForEditorialBlock[];
  whyJobber: string;
  whyHcp: string;
  whyWorkiz: string;
  faqItems: BestForFaqItem[];
  extraGuides?: BestForGuideLink[];
};

function buildTradeProps(p: TradeConfig): BestForTemplateProps {
  const featuredProducts: BestForFeaturedProduct[] = [
    {
      slug: "jobber",
      name: "Jobber",
      badge: p.jobberBadge,
      description: p.jobberDesc,
      rating: "4.6",
      startingPrice: "From ~$69/mo",
      reviewHref: getFieldServiceReviewUrl("jobber"),
      visitUrl: "https://getjobber.com",
      logoSrc: LOGOS.jobber,
    },
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      badge: p.hcpBadge,
      description: p.hcpDesc,
      rating: "4.5",
      startingPrice: "From ~$49/mo",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
      visitUrl: "https://housecallpro.com",
      logoSrc: LOGOS.housecallpro,
    },
    {
      slug: "workiz",
      name: "Workiz",
      badge: p.workizBadge,
      description: p.workizDesc,
      rating: "4.4",
      startingPrice: "From ~$29/mo",
      reviewHref: getFieldServiceReviewUrl("workiz"),
      visitUrl: "https://workiz.com",
      logoSrc: LOGOS.workiz,
    },
  ];

  const comparisonTableRows: BestForTableRow[] = [
    {
      slug: "jobber",
      name: "Jobber",
      logoSrc: LOGOS.jobber,
      bestFor: p.rowJobber,
      startingPrice: "From ~$69/mo",
      standoutFeature: "Scheduling, dispatch, quotes, invoicing",
      reviewHref: getFieldServiceReviewUrl("jobber"),
    },
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      logoSrc: LOGOS.housecallpro,
      bestFor: p.rowHcp,
      startingPrice: "From ~$49/mo",
      standoutFeature: "Customer comms & online booking",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
    },
    {
      slug: "workiz",
      name: "Workiz",
      logoSrc: LOGOS.workiz,
      bestFor: p.rowWorkiz,
      startingPrice: "From ~$29/mo",
      standoutFeature: "Affordable scheduling & dispatch",
      reviewHref: getFieldServiceReviewUrl("workiz"),
    },
  ];

  const whyThesePicks: BestForEditorialBlock[] = [
    { heading: "Jobber", body: p.whyJobber },
    { heading: "Housecall Pro", body: p.whyHcp },
    { heading: "Workiz", body: p.whyWorkiz },
  ];

  const relatedGuides = [...(p.extraGuides ?? []), ...COMMON_GUIDES].filter(
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
    topPicksSub: "Our top field service picks for this trade.",
    editorialSub: "What to look for when you choose field service software for your operation.",
    whyThesePicksSub: "Why we recommend these tools for your use case.",
    seeAlsoBlock: SEE_ALSO,
    featuredProducts,
    comparisonTableRows,
    editorialGuidance: p.editorialGuidance,
    whyThesePicks,
    relatedReviews: RELATED_REVIEWS,
    relatedComparisons: RELATED_COMPARISONS,
    relatedGuides,
    faqItems: p.faqItems,
  };
}

export const PAINTING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "painting",
  title: "Best Field Service Software for Painting Contractors (2026)",
  subtitle:
    "Compare field service management tools for painting contractors: crew scheduling, estimates, production phases, change orders, and invoicing from the ladder—not the office.",
  introParagraph:
    "Painting contractors juggle color consultations, multi-day room jobs, exterior seasons, and tight crew calendars. Field service software keeps estimates, work orders, photos, and invoices tied to each job so crews know what was bid, what changed, and what is left to bill—without losing details across texts and paper tickets.",
  jobberBadge: "Best overall for painting contractors",
  jobberDesc: "Scheduling, dispatch, quoting, and invoicing in one workflow—strong for residential repaint and small commercial crews.",
  hcpBadge: "Best for residential painting & reviews",
  hcpDesc: "Homeowner communication, online booking, and review prompts that help painting shops win the next neighborhood job.",
  workizBadge: "Best budget fit for growing paint crews",
  workizDesc: "Lower starting price with solid scheduling and job tracking—ideal when you are moving off spreadsheets.",
  rowJobber: "Repaint & multi-day jobs",
  rowHcp: "Residential homeowner focus",
  rowWorkiz: "Budget-friendly crews",
  editorialGuidance: [
    {
      heading: "Estimates tied to production phases",
      body: "Interior and exterior jobs often run across multiple days or rooms. Look for estimates that convert to jobs, support line items for materials and labor, and make it easy to add change orders when homeowners add trim or another coat.",
    },
    {
      heading: "Crew and van scheduling",
      body: "Painting teams need clear day boards: who is on which site, when ladders and sprayers move, and how weather pushes exterior work. Drag-and-drop scheduling and mobile job views reduce double-booking and last-minute calls.",
    },
    {
      heading: "Photos and job notes",
      body: "Before/after photos and surface-condition notes protect you on touch-ups and warranty calls. FSM apps let techs attach photos to the job so the office and the next crew see the same story.",
    },
    {
      heading: "Getting paid on progress",
      body: "Deposits and progress draws are common on larger repaint projects. Choose tools that send payment links and record partial payments against the same job so accounting stays clean.",
    },
  ],
  whyJobber:
    "Jobber is strong field service software for painting contractors who run multi-day interiors, exteriors, and change-order-heavy work because quotes, jobs, and invoices stay linked as crews move between sites. During a trial, build a sample job with phases, attach progress photos, and test converting an approved estimate without re-keying line items. Validate crew dispatch views so foremen see today’s rooms and tomorrow’s mobilization. Confirm reporting on average job value and labor hours if you track production pay. Jobber fits shops that outgrow spreadsheets but are not ready for heavy construction ERP.",
  whyHcp:
    "Housecall Pro fits residential painting contractors who compete on homeowner experience—text updates, polished estimates, and review requests after the final walkthrough. Trial consumer booking for interior versus exterior lead types separately, and test SMS templates for “on my way” versus completion. Measure whether online booking reduces phone tag for color consults. Check pricebook maintenance before you promise flat-rate packages. Housecall Pro wins when repeat and referral demand in the neighborhood matters as much as the dispatch board.",
  whyWorkiz:
    "Workiz is practical field service software for painting businesses that need affordable scheduling, dispatch, and invoicing while crews adopt their first mobile workflow. In evaluation, stack same-day touch-up jobs against full-house repaints on the board, run card payments from the field, and export a week of jobs to your bookkeeper. Stress-test job notes and attachments if supers walk sites without the estimator. Workiz is the on-ramp when margin is tight but paper tickets are costing callbacks and lost billing.",
  faqItems: [
    {
      q: "What is the best field service software for painting contractors?",
      a: "Most painting contractors shortlist Jobber for all-in-one jobs and invoicing, Housecall Pro for homeowner communication and reviews, and Workiz for a lower-cost entry point. The best fit depends on crew size, how often you run change orders, and whether online booking matters for your market.",
    },
    {
      q: "Can painters manage multi-day jobs in FSM software?",
      a: "Yes. Leading tools let you schedule crews across multiple days, attach photos and notes per visit, and invoice deposits or final balances against the same job record.",
    },
    {
      q: "Do these tools work for residential and commercial painting?",
      a: "They are commonly used for residential repaint and light commercial. Larger commercial GC workflows may eventually need deeper job costing—start with a trial mapped to your typical job size.",
    },
  ],
  extraGuides: [{ label: "Field service software for small business", href: "/field-service/guides/field-service-software-for-small-business" }],
});

export const ROOFING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "roofing",
  title: "Best Field Service Software for Roofing Companies (2026)",
  subtitle:
    "Compare FSM platforms for roofers: inspection-to-proposal workflows, crew days, supplement documentation, and invoicing after tear-off and install.",
  introParagraph:
    "Roofing companies balance inspections, insurance-adjacent jobs, production days, and unpredictable weather. Field service software centralizes appointments, crew dispatch, photos, estimates, and payments so sales and production share one job story—critical when supplements, material orders, and customer expectations shift mid-project.",
  jobberBadge: "Best overall for roofing operations",
  jobberDesc: "Job-centric workflows from inspection through invoice—fits residential re-roof and repair-heavy shops.",
  hcpBadge: "Best for sales-heavy residential roofers",
  hcpDesc: "Strong customer messaging, online booking, and follow-up automations when leads are competitive.",
  workizBadge: "Best value for growing roofing crews",
  workizDesc: "Affordable FSM when you need clear boards and mobile invoicing without enterprise overhead.",
  rowJobber: "Inspection through production",
  rowHcp: "Lead response & homeowner UX",
  rowWorkiz: "Lean crews & budget focus",
  editorialGuidance: [
    {
      heading: "Inspections and documentation",
      body: "Photo-rich inspections and notes reduce disputes later. Pick software that lets reps capture slope, decking issues, and ventilation from the ladder, then attach everything to the estimate and job file.",
    },
    {
      heading: "Crew and subcontractor days",
      body: "Production is often built around crew days and material drops. Your schedule should show which property each crew hits, buffer for weather slips, and make it obvious when a job is ready for tear-off versus dry-in.",
    },
    {
      heading: "Estimates and change orders",
      body: "Roofing estimates change when decking or flashings reveal surprises. Workflow should support revised line items, homeowner approval, and a clean trail from original bid to final invoice.",
    },
    {
      heading: "Payments and draws",
      body: "Deposits, deductible collection, and final balances need clear records. Look for payment links, on-site card capture, and job-level payment history your office can reconcile.",
    },
  ],
  whyJobber:
    "Jobber works well as field service software for roofing companies that need one system for inspections, production scheduling, and invoicing without losing photos or scope changes between sales and crews. Trial a mock job from estimate to completion payment, attach supplement-style photo sets, and confirm the office can see crew status in real time. Test recurring follow-ups if you run maintenance or gutter add-ons. Validate integrations with accounting if job costing exports matter. Jobber suits roofers who outgrow disconnected apps but are not running a full enterprise call center.",
  whyHcp:
    "Housecall Pro helps roofing sales teams that win on speed-to-lead and homeowner trust—automated texts, polished proposals, and review campaigns after job close. During a trial, route test leads through online booking and measure response time from alert to assigned rep. Compare marketing add-ons only if you already measure cost per inspection. Confirm mobile estimate presentation looks credible on the driveway. Housecall Pro shines when inbound demand is high and every missed call costs margin.",
  whyWorkiz:
    "Workiz is a sensible field service software choice for roofing companies that need affordable dispatch boards, job tracking, and field payments while they professionalize from whiteboards. Evaluate how crews mark jobs complete, collect balances, and hand photos to the office. Run a week of real jobs in parallel with your old process to catch edge cases like multi-truck days. Workiz fits when you need predictable software cost per truck without sacrificing core FSM features.",
  faqItems: [
    {
      q: "What software do roofing companies use in the field?",
      a: "Roofing companies often use Jobber, Housecall Pro, or Workiz to schedule inspections and crews, store photos, send estimates, and collect payments. The right tool depends on whether you prioritize production workflow, sales automation, or lowest total software cost.",
    },
    {
      q: "Can FSM tools handle roofing supplements and revisions?",
      a: "They handle revised estimates, additional line items, and customer approvals well. Complex carrier documentation may still live in specialized tools—use FSM as the operational source of truth for the job timeline and billing.",
    },
    {
      q: "Which is best for small roofing businesses?",
      a: "Small teams often start with Workiz or Jobber; sales-driven residential shops may prefer Housecall Pro. Run a trial on your busiest week to see which app your reps and crews actually adopt.",
    },
  ],
});

export const CONSTRUCTION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "construction",
  title: "Best Field Service Software for Construction Companies (2026)",
  subtitle:
    "Compare FSM tools for construction firms: site visits, subcontractor coordination, change documentation, and field-to-office visibility on active jobs.",
  introParagraph:
    "Construction companies—even those that are not full enterprise GCs—need field visibility: who visited which site, what changed, and what still needs billing. Field service software gives supers and PMs mobile job records, scheduling, and invoicing hooks so details do not die in group chats when subs, inspectors, and owners overlap.",
  jobberBadge: "Best for light commercial & small GC FSM",
  jobberDesc: "Structured jobs, scheduling, and invoicing when you run multiple active sites but avoid mega-ERP complexity.",
  hcpBadge: "Best when owners and subs interact often",
  hcpDesc: "Customer-facing tools and communication help residential builders and remodel-adjacent construction teams stay aligned.",
  workizBadge: "Best budget coordination layer",
  workizDesc: "Affordable job tracking and dispatch when you need a single board before investing in construction-specific suites.",
  rowJobber: "Multi-site job records",
  rowHcp: "Owner & trade communication",
  rowWorkiz: "Lean field coordination",
  editorialGuidance: [
    {
      heading: "Site visits vs production scheduling",
      body: "Construction mixes walkthroughs, inspections, and install windows. Your FSM should distinguish appointment-style visits from multi-day work blocks so supers do not get double-booked across counties.",
    },
    {
      heading: "Change documentation in the field",
      body: "Field changes need photos, short notes, and approvals captured fast. Mobile apps should upload to the job file immediately so billing and PM reviews are not chasing texts.",
    },
    {
      heading: "Subcontractor handoffs",
      body: "Even without full subcontractor portals, you need clear job addresses, scope notes, and contact history per site. Look for shared job views and consistent work order formatting.",
    },
    {
      heading: "Progress billing alignment",
      body: "If you bill on milestones, ensure estimates and invoices can reflect draws or phase completion without cloning jobs manually every time.",
    },
  ],
  whyJobber:
    "Jobber is practical field service software for construction companies that run several concurrent sites and need job files, scheduling, and billing connected without a six-month ERP rollout. In a trial, model two overlapping site schedules, attach inspection photos, and generate a progress-style invoice from the same job. Confirm map or territory views if crews cross regions daily. Check exports to accounting for job tagging. Jobber fits builders who need operational truth in the field more than heavy schedule-of-values accounting.",
  whyHcp:
    "Housecall Pro suits construction teams that interface frequently with homeowners or property stakeholders—clear visit notifications, estimate delivery, and payment collection on site. Test how subs or owners receive updates when dates slip due to weather or inspections. If you sell upgrades during walkthroughs, trial change-order flows from mobile. Housecall Pro helps when communication quality is as important as the Gantt chart.",
  whyWorkiz:
    "Workiz offers affordable field service software for construction companies standardizing dispatch and job history before adopting niche construction suites. Pilot real site visits with photo notes, crew assignments, and basic invoicing. Verify permissions if supers should not see accounting details. Workiz is a strong first system when spreadsheets and texts are still your “database.”",
  faqItems: [
    {
      q: "Do construction companies use field service software?",
      a: "Many small and mid-size construction firms use FSM platforms for site scheduling, work orders, photos, and invoicing. Larger firms may add specialized construction accounting; FSM still helps crews and PMs stay aligned day to day.",
    },
    {
      q: "Is Jobber or Housecall Pro better for builders?",
      a: "Jobber leans toward structured jobs and reporting across sites; Housecall Pro leans toward customer messaging and booking. Try both with a real week of site visits to see which matches your PM workflow.",
    },
    {
      q: "Can these tools replace construction ERP?",
      a: "They are not full ERP replacements. They excel at field coordination, customer-facing workflows, and job-level billing. Pair with accounting software if you need deep job costing or union payroll.",
    },
  ],
});

export const REMODELING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "remodeling",
  title: "Best Field Service Software for Remodeling Businesses (2026)",
  subtitle:
    "Compare FSM tools for remodelers: phased jobs, selections walkthroughs, change orders, and payments across long-running residential projects.",
  introParagraph:
    "Remodeling businesses live on phased work—demo, rough-in, finishes, punch—and homeowners who change their minds midstream. Field service software keeps each phase, photo set, and approval on the job record so supers, designers, and the office agree on what was promised, what changed, and what is billable.",
  jobberBadge: "Best for phased remodel workflows",
  jobberDesc: "Quotes, jobs, and invoices linked across multi-week projects—fits design-build and production remodel shops.",
  hcpBadge: "Best for homeowner communication",
  hcpDesc: "Texts, booking, and polished customer touchpoints when remodel sales cycles are relationship-driven.",
  workizBadge: "Best budget option for remodel crews",
  workizDesc: "Lower-cost FSM when you need job history and mobile billing without a large software stack.",
  rowJobber: "Multi-phase remodel jobs",
  rowHcp: "Client experience & follow-up",
  rowWorkiz: "Growing remodel teams",
  editorialGuidance: [
    {
      heading: "Phases and milestones",
      body: "Break work into visible phases so crews know what “done” means this week. FSM tools should let you schedule subs against phases without losing the master job context.",
    },
    {
      heading: "Selections and change orders",
      body: "Selections meetings generate revisions. Capture approvals in the same system as the original estimate so billing matches what the homeowner signed—even when tile or cabinets change.",
    },
    {
      heading: "Site photos as documentation",
      body: "Remodel disputes often trace back to conditions behind walls. Photo timelines per job protect both you and the client when scope shifts.",
    },
    {
      heading: "Draw schedules and cash flow",
      body: "Progress payments should map cleanly to job records. Look for partial payments, retainage-style notes, and clear balances remaining.",
    },
  ],
  whyJobber:
    "Jobber is strong field service software for remodeling businesses that need estimates, scheduled phases, and invoicing to stay attached as kitchens and baths run for weeks. During a trial, duplicate a typical change order path, attach cabinet-delay notes, and invoice a mock draw. Confirm mobile access for supers who rarely open laptops. Review job-cost-style reports if you track labor burden lightly. Jobber fits remodelers who need one job story from design handshake to final payment.",
  whyHcp:
    "Housecall Pro supports remodelers whose pipeline depends on homeowner trust—appointment reminders, estimate delivery, and post-project reviews that feed the next referral. Test automated follow-ups after selections meetings or punch walks. If designers book consults online, validate intake questions. Housecall Pro wins when your bottleneck is communication, not lack of a whiteboard.",
  whyWorkiz:
    "Workiz gives remodeling businesses budget-friendly job tracking, crew scheduling, and field payments while they tighten operations. Run parallel with spreadsheets for one project: compare ease of photo upload and payment collection at walkthrough. Workiz suits growing remodel crews that need discipline before heavier PM software.",
  faqItems: [
    {
      q: "What is the best field service software for remodelers?",
      a: "Remodelers often choose Jobber for structured multi-phase jobs, Housecall Pro for client communication and reviews, or Workiz for an affordable first system. Trial with a real project template including change orders.",
    },
    {
      q: "Can FSM software track remodeling change orders?",
      a: "Yes—modern tools let you revise estimates, document approvals, and invoice additional work against the same job instead of spinning up ad hoc invoices.",
    },
    {
      q: "Do I need construction-specific software instead?",
      a: "If you only need scheduling, customer comms, estimates, and payments, FSM platforms are often enough. Add construction accounting when you need detailed job costing or complex sub pay apps.",
    },
  ],
});

export const HANDYMAN_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "handyman",
  title: "Best Field Service Software for Handyman Businesses (2026)",
  subtitle:
    "Compare FSM tools for handyman services: stacked small jobs, same-day dispatch, simple estimates, and fast mobile invoicing.",
  introParagraph:
    "Handyman businesses run high-volume, mixed-skill visits—often multiple stops per tech per day. Field service software replaces sticky notes with a live schedule, job notes, and one-tap invoicing so small jobs still get billed and customers get consistent texts when you are on the way.",
  jobberBadge: "Best all-in-one for handyman shops",
  jobberDesc: "Routing-friendly scheduling, quotes, and invoices when you juggle many small tickets.",
  hcpBadge: "Best for homeowner handyman brands",
  hcpDesc: "Online booking, reminders, and review flows that help local handyman businesses stay visible.",
  workizBadge: "Best budget handyman FSM",
  workizDesc: "Low entry price with the essentials—ideal for solo pros adding a helper.",
  rowJobber: "High job volume & routing",
  rowHcp: "Booking & repeat customers",
  rowWorkiz: "Solo and small teams",
  editorialGuidance: [
    {
      heading: "Same-day and stacked jobs",
      body: "Handyman schedules change hourly. Drag-and-drop boards, travel buffers, and mobile updates keep the fourth job from colliding with the first.",
    },
    {
      heading: "Simple estimates, fast invoices",
      body: "Long proposals slow small jobs. Templates, common task bundles, and mobile approvals speed “yes” on the porch.",
    },
    {
      heading: "Customer texts and arrival windows",
      body: "Homeowners tolerate handyman variability when communication is clear. Automated on-my-way messages cut no-shows and complaints.",
    },
    {
      heading: "Photos for warranty callbacks",
      body: "Even quick fixes benefit from a photo and note on file when someone calls six months later.",
    },
  ],
  whyJobber:
    "Jobber is excellent field service software for handyman businesses that stack several small jobs per tech and need quotes, work orders, and invoices without retyping addresses. Trial a busy Tuesday: move jobs, add a same-day emergency, and bill from the truck. Check recurring work for seasonal tune-up lists if you offer them. Jobber fits handyman owners who want one app from morning dispatch to nightly deposit reconciliation.",
  whyHcp:
    "Housecall Pro helps handyman brands that sell online booking and depend on reviews in local maps packs. Test consumer booking limits so you do not auto-book jobs outside your skill list. Measure whether automated reminders reduce wasted trips. Housecall Pro is strongest when marketing and customer experience drive growth as much as wrench time.",
  whyWorkiz:
    "Workiz is practical field service software for handyman operators who need affordable scheduling and invoicing while margins are tight on small tickets. Validate card readers, job notes, and end-of-day reporting during a short pilot. Workiz fits solo pros and two-truck shops upgrading from paper.",
  faqItems: [
    {
      q: "What is the best field service app for handyman businesses?",
      a: "Handyman teams commonly use Jobber, Housecall Pro, or Workiz for scheduling, estimates, and mobile payments. Choose based on whether you prioritize route density, online booking, or lowest monthly cost.",
    },
    {
      q: "Can handyman software handle many small jobs per day?",
      a: "Yes—look for quick job creation, templates, and mobile invoicing so techs close tickets before driving to the next stop.",
    },
    {
      q: "Is Workiz enough for a growing handyman company?",
      a: "Many companies start on Workiz and move up as integrations and reporting needs grow. Trial with your peak season week to confirm.",
    },
  ],
});

export const LANDSCAPING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "landscaping",
  title: "Best Field Service Software for Landscaping Companies (2026)",
  subtitle:
    "Compare FSM tools for landscapers: route-friendly scheduling, recurring maintenance, crew labor tracking, and invoicing for installs and cleanups.",
  introParagraph:
    "Landscaping companies blend recurring route work with one-off installs and seasonal cleanups. Field service software helps dispatch crews efficiently, track recurring contracts, and invoice whether the job is a weekly mow or a two-day hardscape project—without losing customer history when the account manager changes.",
  jobberBadge: "Best overall for landscaping operations",
  jobberDesc: "Jobs, scheduling, and invoicing for mixed maintenance and project work.",
  hcpBadge: "Best for residential landscaping brands",
  hcpDesc: "Customer messaging and online booking when homeowners book consults and recurring visits.",
  workizBadge: "Best value for growing landscape crews",
  workizDesc: "Affordable FSM when you are scaling crews and need cleaner boards than spreadsheets.",
  rowJobber: "Routes + project work",
  rowHcp: "Homeowner booking & comms",
  rowWorkiz: "Budget-conscious crews",
  editorialGuidance: [
    {
      heading: "Recurring maintenance contracts",
      body: "Weekly or biweekly visits should generate predictable work orders. Look for recurring job patterns, skip logic, and clear crew assignment so routes stay dense.",
    },
    {
      heading: "Install and design projects",
      body: "Larger jobs need estimates, deposits, and phase notes. The same platform should flex between a 30-minute mow block and a multi-day install.",
    },
    {
      heading: "Seasonal staffing swings",
      body: "Crew size changes with the season. User seats, permissions, and mobile onboarding should stay simple when you add temporary help.",
    },
    {
      heading: "Equipment and materials notes",
      body: "Trailers, mowers, and material drops are operational constraints. Job notes and attachments help crews prep before they roll.",
    },
  ],
  whyJobber:
    "Jobber is strong field service software for landscaping companies that mix route maintenance with install projects and need one customer record for both. Trial recurring jobs for a mowing route plus a separate landscape install, then invoice each without duplicate profiles. Check map or territory views if you optimize drive time. Jobber suits owners who want reporting on recurring revenue alongside project tickets.",
  whyHcp:
    "Housecall Pro fits landscaping businesses that win on homeowner experience—online booking for spring cleanups, automated reminders, and review prompts after project close. Test booking forms that capture lot size or gate codes. Housecall Pro helps when your growth engine is local search and repeat neighborhood work.",
  whyWorkiz:
    "Workiz offers budget-friendly field service software for landscaping crews moving off whiteboards during rapid hiring seasons. Pilot crew boards, job completion, and same-day billing for maintenance stops. Workiz is ideal when software cost per truck must stay low while discipline goes up.",
  faqItems: [
    {
      q: "What software do landscapers use for scheduling?",
      a: "Landscapers often use Jobber, Housecall Pro, or Workiz to schedule crews, manage recurring visits, and send invoices. Pick based on route complexity, recurring contract needs, and customer booking preferences.",
    },
    {
      q: "Can FSM tools handle recurring lawn routes?",
      a: "Yes—set recurring jobs, assign crews, and adjust individual occurrences when weather or holidays shift the week.",
    },
    {
      q: "Which is best for small landscaping businesses?",
      a: "Small teams often choose Workiz or Jobber first. If online booking drives leads, test Housecall Pro alongside.",
    },
  ],
});

export const PROPERTY_MANAGEMENT_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "property-management",
  title: "Best Field Service Software for Property Management Companies (2026)",
  subtitle:
    "Compare FSM tools for property managers: work orders, vendor jobs, tenant-ready communication, and billing visibility across portfolios.",
  introParagraph:
    "Property management companies coordinate maintenance across many units and owners. Field service software gives coordinators a single place to schedule vendor visits, track job status, capture photos, and invoice or allocate costs—reducing ‘where is the HVAC tech?’ threads across email and SMS.",
  jobberBadge: "Best structured jobs across properties",
  jobberDesc: "Clear job records, scheduling, and invoicing when you manage many addresses and recurring work orders.",
  hcpBadge: "Best tenant-facing communication",
  hcpDesc: "Polished customer messaging when PMs want consistent updates to residents or owners.",
  workizBadge: "Best budget coordination",
  workizDesc: "Affordable tracking for smaller PM shops coordinating third-party trades.",
  rowJobber: "Portfolio work orders",
  rowHcp: "Resident & owner updates",
  rowWorkiz: "Lean PM maintenance ops",
  editorialGuidance: [
    {
      heading: "Property and unit context",
      body: "Every work order should tie to an address, unit, and access notes. FSM tools excel when job titles and custom fields carry gate codes, parking rules, and owner approval flags.",
    },
    {
      heading: "Vendor vs in-house techs",
      body: "Even if vendors use their own systems, your coordinator needs status, photos, and completion timestamps in one place. Pick workflows your team will actually update daily.",
    },
    {
      heading: "Recurring property checks",
      body: "Seasonal HVAC, gutter, or pool checks can be recurring jobs with clear owner billing rules captured in notes or line items.",
    },
    {
      heading: "Documentation for disputes",
      body: "Photos and timestamps on work orders help when owners question charges or tenants dispute condition.",
    },
  ],
  whyJobber:
    "Jobber is practical field service software for property management companies that need repeatable work orders, scheduling, and invoicing across many properties without losing history per unit. During a trial, create jobs for two buildings with different billing notes, attach pre/post photos, and test coordinator vs tech permissions. Confirm reporting by property tag if owners require statements. Jobber fits PM teams that operationalize maintenance tickets daily.",
  whyHcp:
    "Housecall Pro helps property managers who prioritize consistent SMS or email updates to residents and owners when vendors are on site. Test notification templates for access windows and completion summaries. If owners approve work via links, trial that flow on a mock turnover job. Housecall Pro wins when communication quality reduces escalations.",
  whyWorkiz:
    "Workiz gives smaller property management firms affordable job tracking and dispatch when they coordinate a handful of vendors across a growing portfolio. Validate work order search, mobile photo upload, and payment recording on make-ready jobs. Workiz suits PM shops that need structure before investing in enterprise property software.",
  faqItems: [
    {
      q: "Do property managers use field service software?",
      a: "Many PM companies use FSM-style tools to schedule maintenance, track vendor work, attach photos, and invoice owners. Larger portfolios may also use dedicated property management platforms—FSM can still coordinate field execution.",
    },
    {
      q: "Can Jobber handle multiple properties?",
      a: "Yes—use separate jobs per work order and consistent naming or custom fields for building, unit, and owner billing instructions.",
    },
    {
      q: "Is Housecall Pro good for property management?",
      a: "It can be, especially when resident communication and polished updates matter. Pair with clear internal SOPs so every coordinator uses the same templates.",
    },
  ],
});

export const PEST_CONTROL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pest-control",
  title: "Best Field Service Software for Pest Control Businesses (2026)",
  subtitle:
    "Compare FSM tools for pest control: recurring service plans, route density, treatment notes, and compliance-friendly job documentation.",
  introParagraph:
    "Pest control operators live on recurring routes, seasonal spikes, and treatment histories tied to each account. Field service software helps you schedule dense routes, log treatments and materials notes, and renew service plans—so techs arrive knowing last quarter’s barrier spray and what the customer complained about on the last call.",
  jobberBadge: "Best for recurring pest routes + projects",
  jobberDesc: "Recurring jobs, scheduling, and invoicing for residential and light commercial pest programs.",
  hcpBadge: "Best for customer experience & reviews",
  hcpDesc: "Automated reminders and online booking when homeowners schedule one-time or initial services.",
  workizBadge: "Best budget pest FSM",
  workizDesc: "Affordable boards and mobile workflows for growing route-based teams.",
  rowJobber: "Service plans & routing",
  rowHcp: "Homeowner reminders & booking",
  rowWorkiz: "Lean route teams",
  editorialGuidance: [
    {
      heading: "Recurring service agreements",
      body: "Monthly or quarterly visits should spawn predictable work orders. Look for recurrence, skip/reschedule handling, and clear tech assignment per route day.",
    },
    {
      heading: "Treatment documentation",
      body: "Notes on target pests, application zones, and follow-up dates protect you on callbacks and regulatory questions. Mobile forms should be fast enough that techs actually complete them.",
    },
    {
      heading: "Seasonal demand swings",
      body: "Spring and fall spikes require temporary capacity on the board without corrupting recurring schedules. Drag-and-drop and bulk reassignment help.",
    },
    {
      heading: "Upsells and add-on services",
      body: "Termite inspections, mosquito programs, and attic treatments often start as line items on recurring accounts—estimate templates speed those conversations.",
    },
  ],
  whyJobber:
    "Jobber is strong field service software for pest control businesses that combine route-based recurring service with one-off treatments and need invoices tied to each visit. Trial a quarterly plan with a mid-season add-on service, log treatment notes, and confirm the office sees route completion in real time. Check customer portal or email invoice preferences if you bill automatically. Jobber fits operators who want recurring revenue visibility alongside dispatch.",
  whyHcp:
    "Housecall Pro helps pest control companies that grow through local search and reviews—reminders reduce missed entry windows, and follow-up messages drive renewals. Test online booking for initial inspections versus recurring stops. Housecall Pro excels when homeowner communication drives route density and retention.",
  whyWorkiz:
    "Workiz is a smart field service software entry for pest control teams scaling routes while controlling software spend per truck. Run a pilot week: mark services complete, collect payments, and review job history per customer. Workiz suits aggressive hiring seasons when you need boards more than bells and whistles.",
  faqItems: [
    {
      q: "What is the best software for pest control routing?",
      a: "Pest control operators often use Jobber, Housecall Pro, or Workiz to manage recurring visits, technician schedules, and invoicing. Dedicated route-optimization tools can complement FSM when you reach very high stop counts.",
    },
    {
      q: "Can FSM software track pest treatment history?",
      a: "Yes—job notes, attachments, and recurring job histories give techs context on prior treatments and customer concerns.",
    },
    {
      q: "Which is cheapest for small pest control companies?",
      a: "Workiz typically starts at a lower price point; validate features against your recurrence and reporting needs in a trial.",
    },
  ],
});

export const POOL_SERVICE_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pool-service",
  title: "Best Field Service Software for Pool Service Companies (2026)",
  subtitle:
    "Compare FSM tools for pool service: weekly routes, chemical service notes, open/close packages, and repair job invoicing.",
  introParagraph:
    "Pool service companies run tight weekly routes plus repair calls and seasonal openings or closings. Field service software keeps chemical readings, equipment notes, and billing on each account so a different tech next week still knows the heater fault you flagged last month.",
  jobberBadge: "Best for mixed pool routes + repairs",
  jobberDesc: "Recurring service plus one-off repair jobs in one customer timeline.",
  hcpBadge: "Best homeowner communication",
  hcpDesc: "Reminders and polished estimates when you sell openings, upgrades, or equipment replacements.",
  workizBadge: "Best budget pool FSM",
  workizDesc: "Affordable scheduling and invoicing for growing route teams.",
  rowJobber: "Routes + equipment repairs",
  rowHcp: "Service upsells & booking",
  rowWorkiz: "Lean pool crews",
  editorialGuidance: [
    {
      heading: "Weekly route discipline",
      body: "Pool stops are time-sensitive in peak season. Boards should make skip weeks, extra visits, and storm delays visible without breaking the recurring pattern.",
    },
    {
      heading: "Chemical and equipment logs",
      body: "Short, structured notes per visit help the next tech and justify part replacements to homeowners. Mobile entry must take seconds.",
    },
    {
      heading: "Open and close packages",
      body: "Seasonal bundles are estimate-heavy. Templates and deposits keep spring openings organized before routes go full speed.",
    },
    {
      heading: "Repair upsells from route stops",
      body: "When a cleaner spots a pump issue, you want a fast path to quote repair work on the same account.",
    },
  ],
  whyJobber:
    "Jobber is excellent field service software for pool service companies balancing recurring cleaning routes with repair tickets and equipment replacements. During a trial, set up weekly recurring stops, add a repair job on the same customer, and invoice separately while preserving history. Test photo attachments for equipment nameplates. Jobber fits owners who want recurring and project revenue in one reporting view.",
  whyHcp:
    "Housecall Pro supports pool businesses that sell openings, heater replacements, and automation upgrades through strong customer messaging and online booking. Trial automated reminders the night before dense route days. Housecall Pro helps when missed gate access windows destroy route efficiency.",
  whyWorkiz:
    "Workiz provides affordable field service software for pool companies adding trucks each season. Validate end-of-stop billing, chemical note fields, and crew mobile adoption on hot days. Workiz is ideal when you need reliable boards before investing in specialty pool software.",
  faqItems: [
    {
      q: "What software do pool service companies use?",
      a: "Pool companies frequently use Jobber, Housecall Pro, or Workiz for routes, job notes, and invoicing. Evaluate how each handles recurring visits and add-on repairs.",
    },
    {
      q: "Can I schedule weekly pool routes in FSM software?",
      a: "Yes—recurring jobs with technician assignment are standard. Adjust individual occurrences for skips or extra visits as needed.",
    },
    {
      q: "Which is best for small pool service businesses?",
      a: "Small teams often start with Workiz or Jobber. If online booking and reminders are central, add Housecall Pro to your comparison trial.",
    },
  ],
});

export const JUNK_REMOVAL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "junk-removal",
  title: "Best Field Service Software for Junk Removal Businesses (2026)",
  subtitle:
    "Compare FSM tools for junk removal: truck windows, load-size quoting, deposits, and multi-truck dispatch with clear job addresses.",
  introParagraph:
    "Junk removal is window-based, truck-constrained, and sensitive to bad addresses or access issues. Field service software helps you quote load sizes, collect deposits, dispatch the right truck count, and close out invoices on site—so drivers are not guessing job value in the driveway.",
  jobberBadge: "Best job-centric junk workflows",
  jobberDesc: "Quotes, scheduling, and invoicing when jobs vary from single items to full cleanouts.",
  hcpBadge: "Best customer booking experience",
  hcpDesc: "Online booking and notifications when homeowners schedule pickups or estate cleanouts.",
  workizBadge: "Best budget dispatch for trucks",
  workizDesc: "Affordable boards when you run multiple trucks and need fast mobile billing.",
  rowJobber: "Quotes to field completion",
  rowHcp: "Booking & customer comms",
  rowWorkiz: "Multi-truck coordination",
  editorialGuidance: [
    {
      heading: "Time windows and truck stacking",
      body: "Junk jobs need realistic arrival windows and travel buffers. Your schedule should show truck assignments so you do not promise two full cleanouts with one vehicle.",
    },
    {
      heading: "Load-size quoting and deposits",
      body: "Estimates should capture quarter-load versus full-truck expectations and support deposits before crews mobilize for large jobs.",
    },
    {
      heading: "Access and safety notes",
      body: "Stairs, hoists, HOA gates, and driveway clearance belong on the job record—not in a one-off text to the driver.",
    },
    {
      heading: "Same-day changes",
      body: "Customers cancel or add volume last minute. Mobile updates and revised invoices should be quick enough that drivers still leave on time.",
    },
  ],
  whyJobber:
    "Jobber is strong field service software for junk removal businesses that need estimates, truck scheduling, and on-site invoicing to stay linked when load sizes change in the driveway. Trial a full cleanout: deposit, revised price, photo of loaded truck, and immediate payment capture. Confirm job costing tags if you track landfill or labor per truck. Jobber fits operators who want operational clarity across a growing fleet.",
  whyHcp:
    "Housecall Pro helps junk removal brands that book heavily online—intake questions on volume, photos from customers, and automated reminders reduce bad fits before trucks roll. Test booking rules for minimum fees or service areas. Housecall Pro wins when marketing spend depends on lead quality, not just truck count.",
  whyWorkiz:
    "Workiz offers budget-friendly field service software for junk removal teams coordinating several trucks with tight software overhead. Pilot peak Saturday routing, driver job completion, and card readers at the curb. Workiz suits fast-scaling local haulers upgrading from shared calendars.",
  faqItems: [
    {
      q: "What is the best software for junk removal scheduling?",
      a: "Junk removal companies often use Jobber, Housecall Pro, or Workiz to schedule trucks, send estimates, and collect payment on site. Choose based on online booking needs, fleet size, and how often pricing changes at the job.",
    },
    {
      q: "Can FSM tools handle junk removal deposits?",
      a: "Yes—send payment links or capture cards for deposits tied to the job, then adjust the final invoice after load-out.",
    },
    {
      q: "Do I need specialized junk software?",
      a: "Many operators run well on general FSM until they need deep dispatch optimization or scale-specific pricing engines. Start with a trial mapped to your trucks and quoting style.",
    },
  ],
});

export const MOVING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "moving",
  title: "Best Field Service Software for Moving Companies (2026)",
  subtitle:
    "Compare FSM tools for movers: in-home surveys, crew and truck assignments, deposit collection, and job-day invoicing for local and regional moves.",
  introParagraph:
    "Moving companies coordinate surveys, packing days, load days, and variable crew sizes. Field service software gives coordinators one system for customer details, crew assignments, deposits, and final charges—so the truck crew sees the same access notes and inventory expectations the estimator captured.",
  jobberBadge: "Best structured move jobs",
  jobberDesc: "Estimates, scheduling, and invoicing across multi-day move projects.",
  hcpBadge: "Best customer communication",
  hcpDesc: "Automated reminders and polished estimates when homeowners schedule moves during stressful timelines.",
  workizBadge: "Best budget mover FSM",
  workizDesc: "Affordable job tracking for local moving companies scaling crews seasonally.",
  rowJobber: "Survey to job-day billing",
  rowHcp: "Booking & move-day updates",
  rowWorkiz: "Growing local movers",
  editorialGuidance: [
    {
      heading: "Surveys and binding estimates",
      body: "Walkthroughs generate inventory and access constraints. Attach photos and notes to the job so crews on move day match what sales promised.",
    },
    {
      heading: "Crew and truck assignment",
      body: "Moves need correct headcount and vehicle type. Scheduling should show crew leads, helpers, and truck IDs without ambiguous placeholders.",
    },
    {
      heading: "Deposits and final charges",
      body: "Collect deposits at booking and reconcile hourly or weight-based finals on site. Job-level payment history prevents arguments after unload.",
    },
    {
      heading: "Multi-day pack and load phases",
      body: "Larger moves span packing, load, and delivery days. Phases should stay on one customer record for clarity.",
    },
  ],
  whyJobber:
    "Jobber is practical field service software for moving companies that need estimates, crew scheduling, and invoicing connected across survey, pack, and load days. During a trial, model a local move with a deposit, day-of hour adjustment, and final payment on site. Test custom fields for truck type and stair carry flags. Jobber fits independent movers who outgrow phone calendars but are not ready for dedicated van-line systems.",
  whyHcp:
    "Housecall Pro supports movers whose sales process is appointment-heavy—reminders for surveys, digital estimates, and customer updates as crew arrival windows tighten. Test SMS templates for parking and elevator access. Housecall Pro helps when customer anxiety is high and communication prevents cancellations.",
  whyWorkiz:
    "Workiz delivers affordable field service software for moving businesses adding trucks each summer. Validate crew check-in, job notes for damage waivers, and mobile payments at delivery. Workiz suits regional movers who need reliable job files without large software contracts.",
  faqItems: [
    {
      q: "What software do moving companies use for scheduling?",
      a: "Moving companies often use Jobber, Housecall Pro, or Workiz to schedule surveys and move days, store job details, and collect payments. Larger van lines may add specialized logistics tools as they scale.",
    },
    {
      q: "Can FSM software handle moving deposits?",
      a: "Yes—capture deposits via payment links or card readers and apply them to the final invoice after the job completes.",
    },
    {
      q: "Which is best for small moving businesses?",
      a: "Small movers frequently start with Workiz or Jobber. If online booking and automated reminders drive leads, include Housecall Pro in your trials.",
    },
  ],
});

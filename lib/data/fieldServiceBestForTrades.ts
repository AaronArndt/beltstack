/**
 * Field service best-for pages by trade / company type.
 * Featured triples vary by trade; products map to canonical field service reviews via fieldServiceBestForCore.
 */

import { buildFieldServiceTradeProps } from "@/lib/data/fieldServiceBestForCore";
import type { BestForEditorialBlock } from "@/components/best/BestForTemplate";

const E = (heading: string, body: string): BestForEditorialBlock => ({ heading, body });

export const PAINTING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "painting",
  title: "Best Field Service Software for Painting Contractors (2026)",
  subtitle:
    "Compare field service management tools for painting contractors: crew scheduling, estimates, production phases, change orders, and invoicing from the job site—not lost in texts.",
  introParagraph:
    "Painting contractors juggle color consultations, multi-day rooms, exterior seasons, and tight crew calendars. Field service software keeps estimates, work orders, photos, and invoices tied to each job so crews know what was bid, what changed, and what remains to bill—without losing details across paper tickets.",
  picks: [
    {
      slug: "jobber",
      badge: "Best overall for painting contractors",
      description:
        "Scheduling, dispatch, quoting, and invoicing in one workflow—strong for residential repaint and small commercial crews.",
      rowBestFor: "Repaint & multi-day jobs",
      why:
        "Jobber is strong field service software for painting contractors who run multi-day interiors, exteriors, and change-order-heavy work because quotes, jobs, and invoices stay linked as crews move between sites. During a trial, build a sample job with phases, attach progress photos, and test converting an approved estimate without re-keying line items. Validate crew dispatch views and accounting exports if your bookkeeper tags by job.",
    },
    {
      slug: "housecall-pro",
      badge: "Best for residential painting & lead follow-up",
      description:
        "Homeowner communication, online booking, and review prompts that help painting shops win the next neighborhood job.",
      rowBestFor: "Residential homeowner experience",
      why:
        "Housecall Pro fits residential painting contractors who compete on polished estimates, automated texts, and review campaigns after walkthroughs. Trial consumer booking for interior versus exterior lead types, and test SMS templates for arrival windows versus completion. Housecall Pro wins when local reputation and repeat neighborhood work drive the pipeline.",
    },
    {
      slug: "kickserv",
      badge: "Best CRM-forward fit for smaller paint crews",
      description:
        "Customer histories and lightweight job tracking when you need structure before heavier FSM spend.",
      rowBestFor: "Small crews upgrading off spreadsheets",
      standoutFeature: "CRM-style customer tracking",
      why:
        "Kickserv suits painting businesses that want clearer customer records, follow-ups, and job files while keeping software spend measured. Evaluate how crews log change orders, whether tags help segment commercial versus residential, and if invoicing matches how you collect deposits. Kickserv is a practical step when paper tickets still lose revenue.",
    },
  ],
  editorialGuidance: [
    E(
      "Estimates tied to production phases",
      "Interior and exterior jobs often span multiple days. Estimates should convert to jobs, support line items for materials and labor, and make change orders easy when homeowners add trim or another coat."
    ),
    E(
      "Crew and van scheduling",
      "Painting teams need clear day boards: who is on which site, when equipment moves, and how weather pushes exterior work."
    ),
    E(
      "Photos and job notes",
      "Before/after photos protect you on touch-ups and warranty calls—attach them to the job, not the camera roll."
    ),
    E(
      "Deposits and progress draws",
      "Larger repaints often need deposits; choose tools that record partial payments against the same job cleanly.",
    ),
  ],
  extraGuides: [{ label: "Field service software for small business", href: "/field-service/guides/field-service-software-for-small-business" }],
  faqItems: [
    {
      q: "What is the best field service software for painting contractors?",
      a: "Painting contractors often compare Jobber for end-to-end job workflows, Housecall Pro for homeowner communication and reviews, and Kickserv for CRM-forward job tracking on smaller teams. Trial with multi-day job templates and change orders you actually sell.",
    },
    {
      q: "Can painters manage multi-day jobs in FSM software?",
      a: "Yes—schedule crews across multiple days, attach photos per visit, and invoice deposits or finals against one job record.",
    },
    {
      q: "Do these tools work for residential and commercial painting?",
      a: "They are commonly used for residential repaint and light commercial. Larger commercial programs may add heavier estimating or job costing later.",
    },
  ],
});

export const ROOFING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "roofing",
  title: "Best Field Service Software for Roofing Companies (2026)",
  subtitle:
    "Compare FSM platforms for roofers: inspection-to-proposal workflows, crew days, supplement documentation, and invoicing after tear-off and install.",
  introParagraph:
    "Roofing companies balance inspections, storm-driven demand, production days, and weather risk. Field service software centralizes appointments, crew dispatch, photos, estimates, and payments so sales and production share one job story when supplements and materials orders shift mid-project.",
  picks: [
    {
      slug: "servicetitan",
      badge: "Best for high-volume roofing sales & production",
      description:
        "Enterprise-grade dispatch, pricebooks, and analytics when you run many crews and need tight operational control.",
      rowBestFor: "Large roofing & call-center ops",
      why:
        "ServiceTitan fits roofing companies at scale—multiple crews, aggressive sales workflows, and reporting that leadership actually uses—when you will invest in pricebook governance and admin capacity. Pilot with real inspection-to-production jobs, membership or recurring programs if you sell them, and dispatch stress tests during peak storm weeks. ServiceTitan is not casual software; it rewards full adoption.",
    },
    {
      slug: "jobber",
      badge: "Best all-in-one for growing residential roofers",
      description:
        "Inspections through invoicing in one workflow—ideal when you need structure without enterprise implementation drag.",
      rowBestFor: "Inspection through production billing",
      why:
        "Jobber works well as field service software for roofing companies that need one system for inspections, production scheduling, and invoicing without losing photos or scope between sales and crews. Trial mock jobs from estimate to completion payment, attach supplement-style photo sets, and confirm the office sees crew status in real time. Jobber suits roofers who outgrow disconnected apps but are not running a full enterprise call center.",
    },
    {
      slug: "housecall-pro",
      badge: "Best for sales-heavy residential roofers",
      description:
        "Customer messaging, online booking, and follow-up automations when leads are competitive and speed-to-contact matters.",
      rowBestFor: "Lead response & homeowner UX",
      why:
        "Housecall Pro helps roofing sales teams that win on speed-to-lead and homeowner trust—automated texts, polished proposals, and review campaigns after job close. During a trial, route test leads through online booking and measure response time from alert to assigned rep. Housecall Pro shines when inbound demand is high and every missed call costs margin.",
    },
  ],
  editorialGuidance: [
    E(
      "Inspections and documentation",
      "Photo-rich inspections and notes reduce disputes later. Capture slope, decking issues, and ventilation from the site into the estimate file."
    ),
    E(
      "Crew and subcontractor days",
      "Production is often built around crew days and material drops—your schedule should show which property each crew hits and buffer weather slips."
    ),
    E(
      "Estimates and change orders",
      "Roofing estimates change when decking or flashings reveal surprises—support revised line items and a clean trail to the final invoice."
    ),
    E(
      "Payments and draws",
      "Deposits, deductible collection, and final balances need clear job-level payment history your office can reconcile.",
    ),
  ],
  faqItems: [
    {
      q: "What software do roofing companies use in the field?",
      a: "Roofing companies often evaluate ServiceTitan for enterprise-scale operations, Jobber for inspection-to-invoice workflows, and Housecall Pro for lead response and homeowner communication. The right fit depends on fleet size, sales intensity, and how much analytics leadership will use.",
    },
    {
      q: "Can FSM tools handle roofing supplements and revisions?",
      a: "They handle revised estimates, line items, and approvals well. Carrier-specific documentation may still live in specialized tools—use FSM as the operational source of truth for scheduling and billing.",
    },
    {
      q: "Which is best for small roofing businesses?",
      a: "Smaller teams often start with Jobber or Housecall Pro; larger operators add ServiceTitan when reporting and pricebook discipline become non-negotiable.",
    },
  ],
});

export const CONSTRUCTION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "construction",
  title: "Best Field Service Software for Construction Companies (2026)",
  subtitle:
    "Compare FSM and commercial field platforms for construction: site visits, subcontractor coordination, change documentation, and field-to-office visibility.",
  introParagraph:
    "Construction companies—even those outside megaproject ERP—need field visibility: who visited which site, what changed, and what still needs billing. Field service and commercial operations platforms give supers mobile job records, scheduling, and invoicing hooks so details do not die in group chats when subs, inspectors, and owners overlap.",
  picks: [
    {
      slug: "servicetrade",
      badge: "Best for commercial service & inspection-heavy sites",
      description:
        "Built for commercial mechanical and inspection workflows when documentation, SLAs, and customer reporting matter as much as the truck roll.",
      rowBestFor: "Commercial construction & service",
      standoutFeature: "Commercial service & inspections",
      why:
        "ServiceTrade fits construction-adjacent teams doing commercial service, inspections, and compliance-heavy work where customer-facing reporting and job documentation are part of the deliverable. Trial a multi-visit site with photo requirements and completion checkpoints your GC clients expect. ServiceTrade shines when the job is not just a calendar block—it is a documented program.",
    },
    {
      slug: "buildops",
      badge: "Best for mechanical and commercial field programs",
      description:
        "Operations-focused workflows for commercial mechanical contractors coordinating complex sites and vendor visits.",
      rowBestFor: "Commercial mechanical operations",
      why:
        "BuildOps targets commercial mechanical and construction-linked field teams that need structured job records beyond homeowner texting. Pilot real walkthroughs with photo uploads, vendor coordination notes, and status updates supers can trust. BuildOps earns its place when your field work looks like operations, not one-off tickets.",
    },
    {
      slug: "simpro",
      badge: "Best for jobs that behave like projects",
      description:
        "Jobs, inventory, and field execution together—strong when materials, labor sections, and phased work need one system.",
      rowBestFor: "Project-style construction service",
      why:
        "Simpro suits construction companies that need job files with inventory touchpoints, labor visibility, and phased execution—especially when service work ties back to larger contracts. During evaluation, model a multi-day site with change events and confirm reporting your PM and finance teams agree on. Simpro rewards teams ready to configure—not dabble.",
    },
  ],
  editorialGuidance: [
    E(
      "Site visits vs production scheduling",
      "Construction mixes walkthroughs, inspections, and install windows—distinguish appointment visits from multi-day blocks so supers are not double-booked across counties."
    ),
    E(
      "Change documentation in the field",
      "Field changes need photos and approvals captured fast—mobile uploads should land on the job file immediately."
    ),
    E(
      "Subcontractor handoffs",
      "Even without full vendor portals, consistent job addresses, scope notes, and contact history reduce costly miscommunication."
    ),
    E(
      "Progress billing alignment",
      "If you bill milestones, ensure estimates and invoices can reflect draws without cloning jobs manually every time.",
    ),
  ],
  faqItems: [
    {
      q: "Do construction companies use field service software?",
      a: "Many firms use FSM or commercial field platforms for site scheduling, work orders, photos, and invoicing. Larger programs may add specialized construction accounting; field tools still align crews day to day.",
    },
    {
      q: "How do ServiceTrade, BuildOps, and Simpro differ for construction?",
      a: "ServiceTrade emphasizes commercial service and inspection documentation; BuildOps targets commercial mechanical operations; Simpro fits jobs that need inventory and phased execution tied together. Trial with your typical site workflow—not a generic demo.",
    },
    {
      q: "Can these tools replace construction ERP?",
      a: "They are not full ERP replacements. They excel at field coordination and job-level billing; pair with accounting software for deep job costing or complex sub pay apps.",
    },
  ],
});

export const REMODELING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "remodeling",
  title: "Best Field Service Software for Remodeling Businesses (2026)",
  subtitle:
    "Compare FSM tools for remodelers: phased jobs, selections walkthroughs, change orders, and payments across long-running residential projects.",
  introParagraph:
    "Remodeling businesses live on phased work—demo, rough-in, finishes, punch—and homeowners who change scope midstream. Field service software keeps each phase, photo set, and approval on the job record so supers, designers, and the office agree on what was promised, what changed, and what is billable.",
  picks: [
    {
      slug: "jobber",
      badge: "Best approachable fit for residential remodel workflows",
      description:
        "Quotes, jobs, and invoices linked across multi-week projects—fits design-build and production remodel shops.",
      rowBestFor: "Multi-phase residential remodel",
      why:
        "Jobber is strong field service software for remodeling businesses that need estimates, scheduled phases, and invoicing attached as kitchens and baths run for weeks. During a trial, walk a change order path, attach cabinet-delay notes, and invoice a mock draw. Confirm mobile access for supers who rarely open laptops. Jobber fits remodelers who need one job story from handshake to final payment without enterprise complexity.",
    },
    {
      slug: "simpro",
      badge: "Best when jobs behave like structured projects",
      description:
        "Deeper job, inventory, and field execution when your remodels carry serious materials tracking and multi-trade handoffs.",
      rowBestFor: "Project-heavy remodel operations",
      why:
        "Simpro fits remodeling companies that need job costing discipline, inventory touchpoints, and structured field updates when projects behave like small construction programs. Budget onboarding—Simpro pays off when project managers commit to consistent workflows. Trial one real template with phases, subs, and materials lines you actually run.",
    },
    {
      slug: "housecall-pro",
      badge: "Best for client experience and referral growth",
      description:
        "Texts, booking, and polished customer touchpoints when remodel sales cycles are relationship-driven and reviews feed the pipeline.",
      rowBestFor: "Homeowner communication & reviews",
      why:
        "Housecall Pro supports remodelers whose pipeline depends on homeowner trust—appointment reminders, estimate delivery, and post-project reviews that feed the next referral. Test automated follow-ups after selections meetings or punch walks. Housecall Pro wins when communication quality prevents expensive misunderstandings.",
    },
  ],
  editorialGuidance: [
    E(
      "Phases and milestones",
      "Break work into visible phases so crews know what “done” means this week without losing the master job context."
    ),
    E(
      "Selections and change orders",
      "Capture approvals in the same system as the original estimate so billing matches what the homeowner signed."
    ),
    E(
      "Site photos as documentation",
      "Remodel disputes often trace to conditions behind walls—photo timelines per job protect both sides when scope shifts."
    ),
    E(
      "Draw schedules and cash flow",
      "Progress payments should map cleanly to job records with clear balances remaining.",
    ),
  ],
  faqItems: [
    {
      q: "What is the best field service software for remodelers?",
      a: "Remodelers often compare Jobber for approachable phased jobs and billing, Simpro for project-style execution with inventory discipline, and Housecall Pro for homeowner communication and reviews. Trial with a real project template including change orders.",
    },
    {
      q: "Can FSM software track remodeling change orders?",
      a: "Yes—revise estimates, document approvals, and invoice additional work against the same job instead of spinning up ad hoc invoices.",
    },
    {
      q: "Do I need construction-specific software instead?",
      a: "If scheduling, customer comms, estimates, and payments are the pain, FSM platforms are often enough. Add construction accounting when job costing complexity demands it.",
    },
  ],
});

export const HANDYMAN_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "handyman",
  title: "Best Field Service Software for Handyman Businesses (2026)",
  subtitle:
    "Compare FSM tools for handyman services: stacked small jobs, same-day dispatch, simple estimates, and fast mobile invoicing.",
  introParagraph:
    "Handyman businesses run high-volume, mixed-skill visits—often multiple stops per tech per day. Field service software replaces sticky notes with a live schedule, job notes, and one-tap invoicing so small jobs still get billed and customers get consistent updates when you are on the way.",
  picks: [
    {
      slug: "workiz",
      badge: "Best budget dispatch for stacked handyman days",
      description:
        "Affordable boards and mobile workflows when you run many small tickets per truck and need clear visibility.",
      rowBestFor: "High-volume small jobs",
      why:
        "Workiz is practical field service software for handyman operators who need affordable scheduling, dispatch statuses, and invoicing while margins are tight on small tickets. During evaluation, stack four to six stops in a day, add a same-day emergency, and collect card payments before driving to the next job. Workiz fits fast-moving crews upgrading from shared calendars.",
    },
    {
      slug: "housecall-pro",
      badge: "Best for homeowner handyman brands",
      description:
        "Online booking, reminders, and review flows that help local handyman businesses stay visible in crowded local search.",
      rowBestFor: "Booking & repeat residential customers",
      why:
        "Housecall Pro helps handyman brands that sell online booking and depend on reviews in local maps packs. Test booking guardrails so you do not auto-book jobs outside your skill list. Measure whether automated reminders reduce wasted trips. Housecall Pro is strongest when marketing and customer experience drive growth as much as wrench time.",
    },
    {
      slug: "kickserv",
      badge: "Best CRM-style tracking for repeat clients",
      description:
        "Customer histories and lightweight workflows—helpful when you win on callbacks, seasonal lists, and “call Joe again” loyalty.",
      rowBestFor: "Relationship-heavy handyman shops",
      standoutFeature: "CRM-style customer tracking",
      why:
        "Kickserv suits handyman businesses that want structured customer records and simple job workflows without heavy dispatch analytics. Validate quick job creation from repeat profiles and whether follow-up reminders help you capture deferred work. Kickserv fits owner-operators who think in customers first.",
    },
  ],
  editorialGuidance: [
    E(
      "Same-day and stacked jobs",
      "Handyman schedules change hourly—drag-and-drop boards, buffers, and mobile updates keep the fourth job from colliding with the first."
    ),
    E(
      "Simple estimates, fast invoices",
      "Templates and common task bundles speed approvals on the porch—long proposals kill small jobs."
    ),
    E(
      "Customer texts and arrival windows",
      "Clear automated messages reduce no-shows and complaints when the day shifts."
    ),
    E(
      "Photos for warranty callbacks",
      "Even quick fixes benefit from a dated photo on file when someone calls months later.",
    ),
  ],
  faqItems: [
    {
      q: "What is the best field service app for handyman businesses?",
      a: "Handyman teams often compare Workiz for affordable dispatch and invoicing, Housecall Pro for booking and reviews, and Kickserv for CRM-style customer tracking. Choose based on route density, marketing needs, and monthly budget.",
    },
    {
      q: "Can handyman software handle many small jobs per day?",
      a: "Yes—look for quick job creation, templates, and mobile invoicing so techs close tickets before the next stop.",
    },
    {
      q: "Is Workiz enough for a growing handyman company?",
      a: "Many companies start on Workiz and graduate when reporting or integration needs spike—trial your busiest season week first.",
    },
  ],
});

export const LANDSCAPING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "landscaping",
  title: "Best Field Service Software for Landscaping Companies (2026)",
  subtitle:
    "Compare FSM tools for landscapers: route-friendly scheduling, recurring maintenance, crew labor tracking, and invoicing for installs and cleanups.",
  introParagraph:
    "Landscaping companies blend recurring route work with one-off installs and seasonal cleanups. Field service software helps dispatch crews efficiently, track recurring contracts, and invoice whether the job is a weekly mow or a two-day hardscape project—without losing customer history when crews change.",
  picks: [
    {
      slug: "workwave-service",
      badge: "Best for route-heavy landscaping fleets",
      description:
        "WorkWave’s service operations pedigree fits organizations that think in routes, fleet constraints, and dense stop days.",
      rowBestFor: "Route & fleet-centric operations",
      why:
        "WorkWave Service suits landscaping companies optimizing recurring routes and fleet-heavy days when stop density and operational discipline matter as much as a polished homeowner app. During evaluation, model recurring maintenance routes plus one-off installs, and confirm how crews mark skips and weather delays without corrupting the pattern. WorkWave earns its place when routes—not just calendars—run the business.",
    },
    {
      slug: "jobber",
      badge: "Best all-in-one for mixed maintenance + projects",
      description:
        "Jobs, scheduling, and invoicing for teams that blend weekly routes with install and design-build projects.",
      rowBestFor: "Routes + project work",
      why:
        "Jobber is strong field service software for landscaping companies that mix route maintenance with install projects and need one customer record for both. Trial recurring jobs for mowing routes plus a separate landscape install, then invoice each without duplicate profiles. Check map or territory views if drive time is a daily constraint.",
    },
    {
      slug: "workiz",
      badge: "Best value for growing landscape crews",
      description:
        "Affordable FSM when you are scaling crews and need cleaner boards than spreadsheets without premium overhead.",
      rowBestFor: "Budget-conscious growing crews",
      why:
        "Workiz offers budget-friendly field service software for landscaping crews moving off whiteboards during rapid hiring seasons. Pilot crew boards, job completion, and same-day billing for maintenance stops. Workiz is ideal when software cost per truck must stay low while discipline goes up.",
    },
  ],
  editorialGuidance: [
    E(
      "Recurring maintenance contracts",
      "Weekly or biweekly visits should generate predictable work orders with recurrence, skip logic, and clear crew assignment."
    ),
    E(
      "Install and design projects",
      "Larger jobs need estimates, deposits, and phase notes—the same platform should flex between a short mow block and a multi-day install."
    ),
    E(
      "Seasonal staffing swings",
      "Crew size changes with the season—onboarding and permissions should stay simple when you add temporary help."
    ),
    E(
      "Equipment and materials notes",
      "Trailers, mowers, and material drops belong in job notes so crews show up prepared.",
    ),
  ],
  faqItems: [
    {
      q: "What software do landscapers use for scheduling?",
      a: "Landscapers often evaluate WorkWave Service for route-heavy operations, Jobber for mixed maintenance and project work, and Workiz for affordable dispatch boards. Pick based on route complexity and how much install revenue you carry.",
    },
    {
      q: "Can FSM tools handle recurring lawn routes?",
      a: "Yes—set recurring jobs, assign crews, and adjust individual occurrences when weather or holidays shift the week.",
    },
    {
      q: "Which is best for small landscaping businesses?",
      a: "Small teams often start with Workiz or Jobber; route-dense operations should add WorkWave Service to the comparison list.",
    },
  ],
});

export const PROPERTY_MANAGEMENT_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "property-management",
  title: "Best Field Service Software for Property Management Companies (2026)",
  subtitle:
    "Compare FSM tools for property managers: work orders, vendor jobs, tenant-ready communication, and billing visibility across portfolios.",
  introParagraph:
    "Property management companies coordinate maintenance across many units and owners. Field service software gives coordinators a single place to schedule vendor visits, track job status, capture photos, and invoice or allocate costs—reducing “where is the HVAC tech?” threads across email and SMS.",
  picks: [
    {
      slug: "zuper",
      badge: "Best configurable FSM for portfolio maintenance",
      description:
        "Flexible workflows and integrations when PM teams need custom fields, automations, and connections to other systems.",
      rowBestFor: "Multi-property maintenance coordination",
      standoutFeature: "Configurable FSM & integrations",
      why:
        "Zuper fits property management teams that need configurable work orders, automations, and integration flexibility across vendors and internal techs. During a trial, model two buildings with different owner billing rules, attach pre/post photos, and test coordinator versus technician permissions. Zuper shines when your maintenance program needs structure beyond a single-family contractor workflow.",
    },
    {
      slug: "connecteam",
      badge: "Best workforce layer for PM maintenance staff",
      description:
        "Scheduling, time tracking, and internal communication for in-house maintenance techs and rotating staff.",
      rowBestFor: "In-house maintenance & hourly staff",
      standoutFeature: "Deskless workforce scheduling",
      why:
        "Connecteam helps property managers who employ or schedule in-house maintenance staff—shifts, task checklists, and team communication alongside vendor jobs. It is not a full replacement for every FSM feature, but it aligns deskless teams when coordination—not homeowner marketing—is the bottleneck. Pair with clear SOPs so vendor work still lands in your system of record.",
    },
    {
      slug: "jobber",
      badge: "Best structured jobs across many addresses",
      description:
        "Clear job records, scheduling, and invoicing when you manage many properties and need consistent work order formatting.",
      rowBestFor: "Portfolio work orders & billing",
      why:
        "Jobber is practical field service software for property management companies that need repeatable work orders, scheduling, and invoicing across many properties without losing history per unit. Trial jobs with unit numbers, access notes, and owner billing tags. Jobber fits PM teams that operationalize tickets daily and want approachable software adoption.",
    },
  ],
  editorialGuidance: [
    E(
      "Property and unit context",
      "Every work order should tie to an address, unit, and access notes—gate codes and parking rules belong on the job record."
    ),
    E(
      "Vendor vs in-house techs",
      "Even if vendors use their own systems, your coordinator needs status, photos, and timestamps in one place."
    ),
    E(
      "Recurring property checks",
      "Seasonal HVAC, gutter, or pool checks can be recurring jobs with owner billing rules captured in notes or line items."
    ),
    E(
      "Documentation for disputes",
      "Photos and timestamps on work orders help when owners question charges or tenants dispute condition.",
    ),
  ],
  faqItems: [
    {
      q: "Do property managers use field service software?",
      a: "Many PM teams use FSM-style tools to schedule maintenance, track vendor work, attach photos, and invoice owners. Larger portfolios may also use dedicated property management suites—FSM still coordinates field execution.",
    },
    {
      q: "Why Zuper or Connecteam for property management?",
      a: "Zuper fits configurable work-order workflows across portfolios; Connecteam aligns in-house maintenance staff scheduling and communication. Jobber remains a strong general FSM layer for structured jobs and invoicing.",
    },
    {
      q: "Can Jobber handle multiple properties?",
      a: "Yes—use consistent naming, unit fields, and billing notes per job so reporting stays searchable across a large portfolio.",
    },
  ],
});

export const PEST_CONTROL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "pest-control",
  title: "Best Field Service Software for Pest Control Businesses (2026)",
  subtitle:
    "Compare FSM tools for pest control: recurring service plans, route density, treatment notes, and compliance-friendly job documentation.",
  introParagraph:
    "Pest control operators live on recurring routes, seasonal spikes, and treatment histories tied to each account. Field service software helps you schedule dense routes, log treatments and materials notes, and renew service plans—so techs arrive knowing last quarter’s barrier spray and what the customer complained about on the last call.",
  picks: [
    {
      slug: "workwave-service",
      badge: "Best for route-centric pest operations",
      description:
        "Operations built around routes and fleet-heavy days—ideal when stop density and technician efficiency drive margin.",
      rowBestFor: "Dense recurring routes",
      why:
        "WorkWave Service fits pest control companies that organize around route density and fleet utilization—when the day is measured in stops per hour, not just appointments. Trial spring or fall peak weeks with realistic recurrence, reschedules, and add-on services. WorkWave earns its place when routing discipline is central to profitability.",
    },
    {
      slug: "housecall-pro",
      badge: "Best for homeowner experience & renewals",
      description:
        "Automated reminders, online booking, and follow-ups that help residential pest programs stay full and retain customers.",
      rowBestFor: "Residential customer comms",
      why:
        "Housecall Pro helps pest control companies that grow through local search and homeowner trust—reminders reduce missed entry windows, and follow-up messages support renewals. Test online booking for initial inspections versus recurring stops. Housecall Pro excels when communication drives route density and retention.",
    },
    {
      slug: "jobber",
      badge: "Best all-in-one for mixed route + project work",
      description:
        "Recurring jobs plus one-off treatments in one customer timeline—strong when you sell termite, wildlife, or specialty add-ons.",
      rowBestFor: "Service plans + add-on treatments",
      why:
        "Jobber is strong field service software for pest operators combining recurring routes with one-off treatments and need invoices tied to each visit. Trial a quarterly plan with a mid-season add-on, log treatment notes, and confirm the office sees route completion in real time. Jobber fits when recurring revenue visibility matters alongside dispatch.",
    },
  ],
  editorialGuidance: [
    E(
      "Recurring service agreements",
      "Monthly or quarterly visits should spawn predictable work orders with skip/reschedule handling that does not corrupt the route."
    ),
    E(
      "Treatment documentation",
      "Fast mobile notes on target pests, application zones, and follow-up dates protect you on callbacks and regulatory questions."
    ),
    E(
      "Seasonal demand swings",
      "Spring and fall spikes need temporary capacity on the board without breaking recurring schedules."
    ),
    E(
      "Upsells and add-on services",
      "Termite inspections and specialty programs often start as line items on recurring accounts—templates speed those conversations.",
    ),
  ],
  faqItems: [
    {
      q: "What is the best software for pest control routing?",
      a: "Operators often evaluate WorkWave Service for route-heavy operations, Housecall Pro for homeowner communication and renewals, and Jobber for recurring jobs plus add-on treatments in one timeline. Dedicated route optimizers can complement FSM at very high stop counts.",
    },
    {
      q: "Can FSM software track pest treatment history?",
      a: "Yes—job notes, attachments, and recurring histories give techs context on prior treatments and customer concerns.",
    },
    {
      q: "Which is cheapest for small pest control companies?",
      a: "Pricing varies by seats and features—compare vendors for your truck count and confirm recurrence support in trial, not just list price.",
    },
  ],
});

export const POOL_SERVICE_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "pool-service",
  title: "Best Field Service Software for Pool Service Companies (2026)",
  subtitle:
    "Compare FSM tools for pool service: weekly routes, chemical service notes, open/close packages, and repair job invoicing.",
  introParagraph:
    "Pool service companies run tight weekly routes plus repair calls and seasonal openings or closings. Field service software keeps chemical readings, equipment notes, and billing on each account so a different tech next week still knows the heater fault you flagged last month.",
  picks: [
    {
      slug: "fieldpulse",
      badge: "Best dispatch depth for growing pool routes",
      description:
        "Operations-focused FSM when you scale trucks and need consistent field updates—not just a calendar.",
      rowBestFor: "Ops-heavy pool & service routes",
      why:
        "FieldPulse fits pool service companies whose bottleneck is dispatch and technician execution as routes densify—multiple trucks, clear statuses, and structured field workflows matter. Trial peak summer weeks with realistic stop counts, repair escalations, and photo notes on equipment nameplates. FieldPulse earns its place when operations—not just homeowner texting—runs the shop.",
    },
    {
      slug: "housecall-pro",
      badge: "Best homeowner communication & upsells",
      description:
        "Reminders, polished estimates, and follow-ups when you sell openings, equipment upgrades, and automation packages.",
      rowBestFor: "Service upsells & booking",
      why:
        "Housecall Pro supports pool businesses that sell openings, heater replacements, and automation upgrades through strong customer messaging and online booking. Trial automated reminders the night before dense route days. Housecall Pro helps when missed gate access windows destroy route efficiency.",
    },
    {
      slug: "workiz",
      badge: "Best budget FSM for lean pool crews",
      description:
        "Affordable scheduling and invoicing for route teams that need reliable mobile workflows without premium overhead.",
      rowBestFor: "Lean pool crews scaling seasonally",
      why:
        "Workiz provides affordable field service software for pool companies adding trucks each season. Validate end-of-stop billing, chemical note fields, and crew mobile adoption on hot days. Workiz is ideal when you need reliable boards before investing in specialty pool software.",
    },
  ],
  editorialGuidance: [
    E(
      "Weekly route discipline",
      "Pool stops are time-sensitive in peak season—make skip weeks, extra visits, and storm delays visible without breaking recurrence."
    ),
    E(
      "Chemical and equipment logs",
      "Short structured notes per visit help the next tech and justify equipment replacements to homeowners."
    ),
    E(
      "Open and close packages",
      "Seasonal bundles are estimate-heavy—templates and deposits keep spring openings organized before routes go full speed."
    ),
    E(
      "Repair upsells from route stops",
      "When a cleaner spots a pump issue, you want a fast path to quote repair work on the same account.",
    ),
  ],
  faqItems: [
    {
      q: "What software do pool service companies use?",
      a: "Pool companies often compare FieldPulse for operations-heavy routes, Housecall Pro for homeowner communication and upsells, and Workiz for affordable scheduling and invoicing. Evaluate recurrence and repair workflows in trial.",
    },
    {
      q: "Can I schedule weekly pool routes in FSM software?",
      a: "Yes—recurring jobs with technician assignment are standard; adjust individual occurrences for skips or extra visits.",
    },
    {
      q: "Which is best for small pool service businesses?",
      a: "Smaller teams often start with Workiz or other approachable FSM tools; ops-heavy growth pushes teams toward FieldPulse for tighter dispatch.",
    },
  ],
});

export const JUNK_REMOVAL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "junk-removal",
  title: "Best Field Service Software for Junk Removal Businesses (2026)",
  subtitle:
    "Compare FSM tools for junk removal: truck windows, load-size quoting, deposits, and multi-truck dispatch with clear job addresses.",
  introParagraph:
    "Junk removal is window-based, truck-constrained, and sensitive to bad addresses or access issues. Field service software helps you quote load sizes, collect deposits, dispatch the right truck count, and close out invoices on site—so drivers are not guessing job value in the driveway.",
  picks: [
    {
      slug: "jobber",
      badge: "Best job-centric junk workflows",
      description:
        "Quotes, scheduling, and invoicing when jobs vary from single items to full cleanouts and pricing changes at the curb.",
      rowBestFor: "Quotes to field completion",
      why:
        "Jobber is strong field service software for junk removal businesses that need estimates, truck scheduling, and on-site invoicing linked when load sizes change in the driveway. Trial a full cleanout with deposit, revised price, loaded-truck photos, and immediate payment capture. Jobber fits operators who want operational clarity across a growing fleet.",
    },
    {
      slug: "workiz",
      badge: "Best budget multi-truck coordination",
      description:
        "Affordable boards when you run several trucks and need fast mobile billing without heavy software overhead.",
      rowBestFor: "Multi-truck local haulers",
      why:
        "Workiz offers budget-friendly field service software for junk removal teams coordinating several trucks with tight software overhead. Pilot peak Saturday routing, driver job completion, and card readers at the curb. Workiz suits fast-scaling local haulers upgrading from shared calendars.",
    },
    {
      slug: "kickserv",
      badge: "Best CRM-style tracking for repeat commercial clients",
      description:
        "Customer-centric job records when you serve property managers, estate cleanouts, and repeat business accounts.",
      rowBestFor: "Repeat & commercial-style jobs",
      standoutFeature: "CRM-style customer tracking",
      why:
        "Kickserv helps junk removal operators who win on account relationships—property managers, real estate cleanouts, and repeat commercial pickups—when customer context matters as much as the truck board. Validate quick job cloning for recurring accounts and whether follow-ups help you capture deferred loads.",
    },
  ],
  editorialGuidance: [
    E(
      "Time windows and truck stacking",
      "Junk jobs need realistic arrival windows and travel buffers—your schedule should show truck assignments so you do not promise two full cleanouts with one vehicle."
    ),
    E(
      "Load-size quoting and deposits",
      "Estimates should capture load expectations and support deposits before crews mobilize for large jobs."
    ),
    E(
      "Access and safety notes",
      "Stairs, hoists, HOA gates, and driveway clearance belong on the job record—not a one-off text to the driver."
    ),
    E(
      "Same-day changes",
      "Customers change scope last minute—mobile updates and revised invoices should be fast enough that drivers still leave on time.",
    ),
  ],
  faqItems: [
    {
      q: "What is the best software for junk removal scheduling?",
      a: "Operators often evaluate Jobber for quote-to-invoice workflows, Workiz for affordable multi-truck boards, and Kickserv for CRM-style repeat accounts. Choose based on fleet size, commercial repeat work, and how often pricing changes on site.",
    },
    {
      q: "Can FSM tools handle junk removal deposits?",
      a: "Yes—send payment links or capture card deposits tied to the job, then adjust the final invoice after load-out.",
    },
    {
      q: "Do I need specialized junk software?",
      a: "Many operators run well on general FSM until they need deep route optimization or pricing engines. Start with a trial mapped to your trucks and quoting style.",
    },
  ],
});

export const MOVING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "moving",
  title: "Best Field Service Software for Moving Companies (2026)",
  subtitle:
    "Compare FSM tools for movers: in-home surveys, crew and truck assignments, deposit collection, and job-day invoicing for local and regional moves.",
  introParagraph:
    "Moving companies coordinate surveys, packing days, load days, and variable crew sizes. Field service software gives coordinators one system for customer details, crew assignments, deposits, and final charges—so the truck crew sees the same access notes and inventory expectations the estimator captured.",
  picks: [
    {
      slug: "service-fusion",
      badge: "Best mid-market operations for service-heavy movers",
      description:
        "Strong dispatch and invoicing workflows for teams that outgrow basic calendars but want trade-aware field execution.",
      rowBestFor: "Regional movers scaling operations",
      why:
        "Service Fusion suits moving companies that need dependable job workflows, dispatch, and invoicing as job complexity grows—especially when you add commercial or multi-day moves alongside local work. Trial deposit-to-final billing on a multi-day job, sync to accounting, and confirm mobile access for leads on site. Service Fusion fits when your moving operation starts to look like a coordinated program, not isolated truck days.",
    },
    {
      slug: "simpro",
      badge: "Best when moves behave like structured jobs",
      description:
        "Deeper job execution when you track materials, labor sections, and phased work across pack, load, and delivery.",
      rowBestFor: "Complex multi-day moves",
      why:
        "Simpro fits movers running structured jobs with phases, inventory touchpoints, and field updates that must stay aligned across crew leads—common for larger residential or commercial relocations. Budget onboarding; Simpro pays off when project discipline matters. Pilot one complex move template before you standardize.",
    },
    {
      slug: "jobber",
      badge: "Best approachable all-in-one for independent movers",
      description:
        "Estimates, scheduling, and invoicing connected across survey and move days—ideal for independent movers upgrading off calendars.",
      rowBestFor: "Survey to job-day billing",
      why:
        "Jobber is practical field service software for moving companies that need estimates, crew scheduling, and invoicing connected across survey, pack, and load days. During a trial, model a local move with deposit, day-of adjustments, and final payment on site. Jobber fits independent movers who outgrow phone calendars but are not ready for van-line systems.",
    },
  ],
  editorialGuidance: [
    E(
      "Surveys and binding estimates",
      "Walkthroughs generate inventory and access constraints—attach photos and notes so move-day crews match what sales promised."
    ),
    E(
      "Crew and truck assignment",
      "Moves need correct headcount and vehicle type—scheduling should show leads, helpers, and truck IDs clearly."
    ),
    E(
      "Deposits and final charges",
      "Collect deposits at booking and reconcile hourly or weight-based finals on site with clear job-level payment history."
    ),
    E(
      "Multi-day pack and load phases",
      "Larger moves span packing, load, and delivery—keep phases on one customer record for clarity.",
    ),
  ],
  faqItems: [
    {
      q: "What software do moving companies use for scheduling?",
      a: "Moving companies often compare Service Fusion for mid-market dispatch and billing, Simpro for structured multi-phase jobs, and Jobber for approachable all-in-one estimates and invoices. Larger van lines may add specialized logistics tools as they scale.",
    },
    {
      q: "Can FSM software handle moving deposits?",
      a: "Yes—capture deposits via payment links or card readers and apply them to the final invoice after the job completes.",
    },
    {
      q: "Which is best for small moving businesses?",
      a: "Small movers frequently start with Jobber; growing regional operations add Service Fusion or Simpro when jobs become more complex than single-day local moves.",
    },
  ],
});

export const APPLIANCE_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "appliance-repair",
  title: "Best Field Service Software for Appliance Repair Businesses (2026)",
  subtitle:
    "Compare FSM tools for appliance repair: model and warranty intake, parts-return workflows, multi-tech dispatch, and invoicing from the truck.",
  introParagraph:
    "Appliance repair businesses run short diagnostics, parts-order return visits, and warranty jobs with different billing rules than COD. Field service software keeps model numbers, photos, and invoices on one job so the second visit is not a guessing game—and dispatch sees which van carries common boards or compressors.",
  picks: [
    {
      slug: "housecall-pro",
      badge: "Best for residential appliance repair growth",
      description:
        "Homeowner texting, online booking, and review flows when you compete on speed and repeat neighborhood work.",
      rowBestFor: "Residential demand & CX",
      why:
        "Housecall Pro fits appliance repair shops that win on homeowner experience—clear arrival updates, financing-friendly estimates on big replacements, and review prompts after completed jobs. During a trial, split event types for warranty callbacks versus COD diagnostics with honest durations. Housecall Pro shines when inbound residential calls drive revenue.",
    },
    {
      slug: "jobber",
      badge: "Best all-in-one for dispatch-to-invoice discipline",
      description:
        "Quotes, jobs, scheduling, and invoicing linked so parts orders and return visits stay on the same ticket.",
      rowBestFor: "Structured repair workflows",
      why:
        "Jobber is strong field service software for appliance repair businesses that need estimates, dispatch, and invoicing tied together when techs bounce between brands and job types. Trial photo attachments on failed control boards and confirm accounting sync if your bookkeeper tags by job. Jobber fits shops outgrowing paper but not ready for enterprise FSM.",
    },
    {
      slug: "service-fusion",
      badge: "Best mid-market depth for trade-heavy ops",
      description:
        "Dispatch and service-agreement style workflows when you also run HVAC-adjacent installs or multi-truck crews.",
      rowBestFor: "Multi-truck & agreement-heavy shops",
      why:
        "Service Fusion suits appliance repair companies that overlap with HVAC or plumbing operations and need stronger dispatch and agreement patterns than bare-bones schedulers. Pilot warranty versus COD billing paths and mobile completion flows techs will actually use. Service Fusion earns its place when job complexity outgrows spreadsheets.",
    },
  ],
  editorialGuidance: [
    E(
      "Model and serial capture",
      "Capture brand, model, and serial before dispatch so parts runs are not guesswork.",
    ),
    E(
      "Warranty vs COD",
      "Separate workflows or job types so billing and coverage flags stay visible to dispatch.",
    ),
    E(
      "Parts return visits",
      "Buffer follow-up jobs when parts ETA is uncertain; avoid promising same-day completion on every ticket.",
    ),
  ],
  faqItems: [
    {
      q: "What is the best field service software for appliance repair businesses?",
      a: "Appliance repair shops often evaluate Housecall Pro for homeowner experience and reviews, Jobber for all-in-one jobs and invoicing, and Service Fusion for mid-market dispatch and agreement-style workflows. Trial with your busiest warranty week.",
    },
    {
      q: "Can FSM software track parts and return visits?",
      a: "Yes—leading tools tie notes, photos, and line items to one job record so the second visit inherits context from the diagnostic.",
    },
    {
      q: "When should appliance repair shops add dedicated parts inventory?",
      a: "When truck stock and warehouse bins need bin-level tracking beyond job notes—many teams start with FSM job files first.",
    },
  ],
});

export const GARAGE_DOOR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "garage-door",
  title: "Best Field Service Software for Garage Door Companies (2026)",
  subtitle:
    "Compare FSM platforms for garage door installers: spring emergencies, opener installs, multi-crew dispatch, and deposits on loaded trucks.",
  introParagraph:
    "Garage door companies juggle emergency spring calls with scheduled installs and commercial roll-up service. Field service software should keep photos, opener specs, and invoices on the job so crews arrive with the right springs and panels—and the office can see which truck is actually free.",
  picks: [
    {
      slug: "fieldpulse",
      badge: "Best dispatch depth for growing door crews",
      description:
        "Operations-focused boards when you run multiple install crews and need consistent field status updates.",
      rowBestFor: "Multi-crew install & service",
      why:
        "FieldPulse fits garage door operators whose bottleneck is dispatch and technician execution as call volume grows—clear job statuses, structured field updates, and visibility the office trusts. Trial emergency inserts against booked installs with realistic buffers. FieldPulse earns its place when whiteboards stop scaling.",
    },
    {
      slug: "jobber",
      badge: "Best all-in-one for residential door companies",
      description:
        "Estimates, scheduling, and invoicing in one workflow—strong for mixed service and install tickets.",
      rowBestFor: "Service + install balance",
      why:
        "Jobber is practical field service software for garage door companies that need quotes, crew scheduling, and invoicing connected without a year-long rollout. Attach photos of track damage, convert estimates to jobs, and collect deposits on custom orders. Jobber suits owner-operators scaling past spreadsheets.",
    },
    {
      slug: "housecall-pro",
      badge: "Best homeowner communication and booking",
      description:
        "Online booking, texts, and review prompts when residential demand and local reputation drive the pipeline.",
      rowBestFor: "Residential lead response",
      why:
        "Housecall Pro helps garage door brands that compete on fast response and polished homeowner communication—automated on-my-way texts and review campaigns after installs. Test consumer booking rules so emergencies do not collide with routine tune-ups. Housecall Pro wins when every missed call costs margin.",
    },
  ],
  editorialGuidance: [
    E(
      "Emergency vs scheduled",
      "Separate entry points or job types so online booking does not promise instant arrival unless you can honor it.",
    ),
    E(
      "Commercial roll-up work",
      "Different templates, durations, and documentation expectations than residential sectional doors.",
    ),
    E(
      "Deposits on custom doors",
      "Protect truck loads and fabrication orders with clear payment records on the job file.",
    ),
  ],
  faqItems: [
    {
      q: "What field service software do garage door companies use?",
      a: "Garage door operators often evaluate FieldPulse for dispatch-heavy crews, Jobber for all-in-one jobs and billing, and Housecall Pro for homeowner communication and online booking.",
    },
    {
      q: "Can FSM tools handle spring emergency dispatch?",
      a: "Yes—use dedicated job types, buffers, and internal rules so urgent calls slot without erasing the install day.",
    },
    {
      q: "When do garage door companies need specialty door software?",
      a: "When fabrication tracking and dealer integrations dominate; many shops run well on general FSM until then.",
    },
  ],
});

export const LOCKSMITH_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "locksmith",
  title: "Best Field Service Software for Locksmith Businesses (2026)",
  subtitle:
    "Compare FSM tools for locksmiths: high-volume mobile tickets, after-hours premiums, automotive vs commercial jobs, and fast field invoicing.",
  introParagraph:
    "Locksmiths run dense, mobile-first days—car lockouts, rekeys, access control, and safe work. Field service software should make job creation fast, capture vehicle or suite details when it matters, and support card payment in the driveway without retyping addresses three times.",
  picks: [
    {
      slug: "workiz",
      badge: "Best budget fit for stacked mobile jobs",
      description:
        "Affordable boards and mobile workflows when you run many short stops per van and need clear dispatch visibility.",
      rowBestFor: "High-volume mobile locksmiths",
      why:
        "Workiz fits locksmith businesses that need affordable scheduling, dispatch statuses, and field invoicing while margins are tight on small tickets. During evaluation, stack same-day jobs, add emergency inserts, and collect balances before the next stop. Workiz is the pragmatic on-ramp off group texts.",
    },
    {
      slug: "kickserv",
      badge: "Best CRM-forward tracking for repeat accounts",
      description:
        "Customer histories and lightweight workflows when property managers and dealerships reorder often.",
      rowBestFor: "Repeat commercial & fleet",
      why:
        "Kickserv suits locksmiths who win on account relationships—clear customer records, follow-ups, and job notes for property managers or fleet yards. Validate quick job cloning for repeat sites. Kickserv fits when relationship data matters as much as the map.",
    },
    {
      slug: "jobber",
      badge: "Best all-in-one for growing locksmith brands",
      description:
        "Quotes, jobs, and invoices linked when you add vans and want consistent billing without enterprise overhead.",
      rowBestFor: "Scaling multi-van shops",
      why:
        "Jobber helps locksmith companies professionalize estimates, dispatch, and invoicing as headcount grows—without forcing Titan-scale implementation. Trial after-hours pricing notes and photo attachments for access control punch lists. Jobber balances field speed with office clarity.",
    },
  ],
  editorialGuidance: [
    E(
      "Honest arrival windows",
      "Over-precision creates bad reviews—configure buffers that match real metro drive times.",
    ),
    E(
      "Automotive vs commercial",
      "Different default durations and intake questions reduce mis-dispatches.",
    ),
    E(
      "Compliance",
      "Keep booking and invoicing copy aligned with local pricing disclosure rules.",
    ),
  ],
  faqItems: [
    {
      q: "What is the best field service app for locksmith businesses?",
      a: "Locksmith teams often compare Workiz for affordable mobile dispatch, Kickserv for CRM-style repeat accounts, and Jobber for all-in-one jobs and invoicing as they scale.",
    },
    {
      q: "Can locksmith FSM software handle after-hours premiums?",
      a: "Yes—use job types, line items, or notes your office consistently applies so invoices match quoted emergency rates.",
    },
    {
      q: "Is Workiz enough for a 24/7 locksmith?",
      a: "Many shops start on Workiz and add heavier tools when reporting and integrations demand it—trial peak overnight weeks first.",
    },
  ],
});

export const FLOORING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "flooring",
  title: "Best Field Service Software for Flooring Contractors (2026)",
  subtitle:
    "Compare FSM tools for flooring contractors: measures, material lead times, phased installs, change orders, and progress billing.",
  introParagraph:
    "Flooring contractors live on estimates, material orders, and multi-day installs. Field service software keeps measure notes, photos, approvals, and invoices on one job so crews know what was sold, what changed, and what is left to bill—without losing context between the sales visit and the install crew.",
  picks: [
    {
      slug: "simpro",
      badge: "Best when flooring jobs behave like projects",
      description:
        "Jobs, materials, and field execution together—strong when you track labor sections and phased work across rooms.",
      rowBestFor: "Project-style flooring ops",
      why:
        "Simpro fits flooring contractors running structured jobs with materials, phases, and field updates that must stay aligned between estimators and crews. Budget onboarding; Simpro pays off when change orders and job costing discipline matter. Pilot one full-home template before you standardize.",
    },
    {
      slug: "jobber",
      badge: "Best approachable all-in-one for residential flooring",
      description:
        "Quotes, scheduling, and invoicing connected for measure-to-install workflows without enterprise drag.",
      rowBestFor: "Residential measure & install",
      why:
        "Jobber is strong field service software for flooring businesses that need estimates, deposits, and invoicing tied to the same job as crews move from measure to install week. Attach subfloor photos, log customer selections, and invoice progress draws when materials are special-order. Jobber fits growing residential shops.",
    },
    {
      slug: "housecall-pro",
      badge: "Best homeowner experience and reviews",
      description:
        "Texts, booking, and follow-ups when your growth engine is local reputation and repeat neighborhood work.",
      rowBestFor: "Homeowner CX & referrals",
      why:
        "Housecall Pro helps flooring contractors who compete on homeowner trust—appointment reminders, polished estimates, and review prompts after walkthroughs. Test online booking guardrails so customers do not auto-book impossible timelines. Housecall Pro wins when referrals drive margin.",
    },
  ],
  editorialGuidance: [
    E(
      "Lead times and expectations",
      "Job notes should reflect material ETA so install crews do not promise dates the warehouse cannot hit.",
    ),
    E(
      "Change orders",
      "Capture signed approvals on the job file when scope shifts mid-install.",
    ),
    E(
      "Progress billing",
      "Deposits and draws should map cleanly to the same job record for clean month-end.",
    ),
  ],
  faqItems: [
    {
      q: "What is the best field service software for flooring contractors?",
      a: "Flooring contractors often evaluate Simpro for project-style jobs and materials discipline, Jobber for approachable measure-to-install workflows, and Housecall Pro for homeowner communication and reviews.",
    },
    {
      q: "Can FSM software handle flooring deposits for special orders?",
      a: "Yes—capture deposits tied to the job, then invoice balances when materials arrive and install completes.",
    },
    {
      q: "When do flooring companies need construction-specific ERP?",
      a: "When job costing and vendor pay apps exceed what FSM should own—many residential shops thrive on FSM-first stacks.",
    },
  ],
});

export const FENCE_DECK_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "fence-deck",
  title: "Best Field Service Software for Fence & Deck Builders (2026)",
  subtitle:
    "Compare FSM tools for fence and deck builders: site surveys, HOA documentation, crew-day scheduling, weather-driven reschedules, and progress billing.",
  introParagraph:
    "Fence and deck builders sell outdoor projects with permit friction, HOA rules, and weather risk. Field service software keeps survey photos, material lists, and change orders on the job so crews know post holes, railing specs, and what the customer actually approved before mobilization.",
  picks: [
    {
      slug: "jobber",
      badge: "Best all-in-one for residential fence and deck crews",
      description:
        "Estimates, scheduling, and invoicing tied to multi-day exterior jobs—ideal for mixed survey and build workflows.",
      rowBestFor: "Residential exterior projects",
      why:
        "Jobber is practical field service software for fence and deck builders who need estimates, crew scheduling, and invoicing connected as projects move from survey to build. Log HOA notes, attach site photos, and invoice progress draws when materials are ordered. Jobber fits growing outdoor contractors.",
    },
    {
      slug: "workwave-service",
      badge: "Best route and fleet-aware operations layer",
      description:
        "When dense crew moves, material drops, and territory planning start to dominate—not just a single homeowner calendar.",
      rowBestFor: "Route-heavy exterior crews",
      why:
        "WorkWave Service suits fence and deck operations that think in routes, staging yards, and fleet moves as volume grows—pair disciplined scheduling with how crews actually roll trucks. Trial realistic buffers for weather slips. WorkWave earns its place when territory density matters.",
    },
    {
      slug: "simpro",
      badge: "Best structured jobs for larger outdoor builds",
      description:
        "Deeper job and materials visibility when decks and engineered railing packages behave like small construction programs.",
      rowBestFor: "Larger builds & materials tracking",
      why:
        "Simpro fits fence and deck builders running structured jobs with phases, materials sections, and field updates that must stay aligned between sales and production. Pilot one multi-level deck template. Simpro rewards teams ready to configure—not dabble.",
    },
  ],
  editorialGuidance: [
    E(
      "HOA and permits",
      "Store approval status and inspection dates on the job so crews do not start illegal work.",
    ),
    E(
      "Weather reschedules",
      "Use clear policies and job notes when exterior work slips a week.",
    ),
    E(
      "Crew-day reality",
      "Separate survey appointments from multi-day build blocks in service definitions.",
    ),
  ],
  faqItems: [
    {
      q: "What field service software do fence and deck builders use?",
      a: "Outdoor contractors often evaluate Jobber for all-in-one residential workflows, WorkWave Service for route- and fleet-heavy operations, and Simpro for structured larger builds with materials discipline.",
    },
    {
      q: "Can FSM software track HOA requirements?",
      a: "Yes—custom fields, attachments, and job notes keep HOA rules and approval letters where crews see them.",
    },
    {
      q: "When do fence and deck companies need construction ERP?",
      a: "When job costing, vendor pay apps, and GC-style billing replace simple job-to-invoice workflows.",
    },
  ],
});

export const GLASS_WINDOW_INSTALLERS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "glass-window-installers",
  title: "Best Field Service Software for Glass & Window Installers (2026)",
  subtitle:
    "Compare FSM tools for glass and window companies: field measures, custom IGUs, commercial bid walks, safety documentation, and install-day coordination.",
  introParagraph:
    "Glass and window installers fabricate to tight tolerances—field measures, reglazing service, and full-home replacements. Field service software keeps ladder access notes, tempered specs, and deposit records on the job so fabricators and install crews share one truth before glass leaves the shop.",
  picks: [
    {
      slug: "servicetrade",
      badge: "Best for commercial glazing and inspection-style programs",
      description:
        "Documentation-heavy commercial service when SLAs, photo sets, and customer reporting matter as much as the truck roll.",
      rowBestFor: "Commercial glazing programs",
      why:
        "ServiceTrade fits glass and window operations doing commercial service rounds, inspection programs, or facility work where customer-facing documentation is part of the deliverable. Trial a multi-site walk with photo requirements. ServiceTrade shines when jobs are programs, not one-off tickets.",
    },
    {
      slug: "zuper",
      badge: "Best configurable workflows for mixed residential and commercial",
      description:
        "Flexible forms and automations when you need distinct flows for board-ups, reglazing, and full replacements.",
      rowBestFor: "Configurable mixed workflows",
      why:
        "Zuper suits glass shops that need configurable work orders and integrations across residential service and commercial projects—without forcing a single rigid template. Pilot permissions for measure techs versus installers. Zuper earns its place when workflow variety is high.",
    },
    {
      slug: "jobber",
      badge: "Best approachable all-in-one for residential window replacement",
      description:
        "Quotes, scheduling, and invoicing for local replacement crews scaling past spreadsheets.",
      rowBestFor: "Residential replacement focus",
      why:
        "Jobber helps residential window installers professionalize estimates, crew scheduling, and invoicing with photo-rich job files customers understand. Trial deposit-to-final billing on custom orders. Jobber fits shops balancing service reglazing with full-home packages.",
    },
  ],
  editorialGuidance: [
    E(
      "Measure-to-fabrication handoff",
      "Attach nameplate photos and signed approvals so fabrication does not guess dimensions.",
    ),
    E(
      "Safety and access",
      "Document ladder points, interior protection, and parking constraints before mobilization.",
    ),
    E(
      "Deposits on custom IGUs",
      "Protect fabrication cash flow with clear job-level payment history.",
    ),
  ],
  faqItems: [
    {
      q: "What field service software works for glass and window installers?",
      a: "Glass operations often evaluate ServiceTrade for commercial documentation-heavy programs, Zuper for configurable mixed workflows, and Jobber for approachable residential replacement workflows.",
    },
    {
      q: "Should window companies use FSM or glazing-specific software?",
      a: "Many residential shops thrive on general FSM until fabrication tracking and supply chain complexity demand specialty tools.",
    },
    {
      q: "Can FSM tools store tempered and egress notes?",
      a: "Yes—use structured fields and attachments so installers see code-relevant notes on site.",
    },
  ],
});

export const CONCRETE_CONTRACTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "concrete-contractors",
  title: "Best Field Service Software for Concrete Contractors (2026)",
  subtitle:
    "Compare FSM platforms for concrete contractors: site visits, pour-day coordination, change documentation, and progress billing tied to crews.",
  introParagraph:
    "Concrete contractors coordinate pours, finishes, and weather risk across crews and subs. Field service software gives supers mobile job records—photos, change notes, and invoices—so the office, pump vendor, and customer share one timeline instead of chasing texts when a pour slips a day.",
  picks: [
    {
      slug: "buildops",
      badge: "Best for commercial mechanical and concrete-adjacent field programs",
      description:
        "When sites behave like operations programs—documentation, multi-trade coordination, and commercial reporting matter.",
      rowBestFor: "Commercial & GC-heavy work",
      why:
        "BuildOps fits concrete contractors doing commercial flatwork, tilt-adjacent programs, or GC-driven projects where documentation and field coordination outweigh simple homeowner texting. Pilot a real site walk with photo requirements. BuildOps earns its place when your field work is operational, not just a truck ticket.",
    },
    {
      slug: "simpro",
      badge: "Best structured jobs with materials and phases",
      description:
        "Deeper job execution when pours, cure holds, and change events need one structured record.",
      rowBestFor: "Phased pours & materials",
      why:
        "Simpro suits concrete shops that need job files with materials touchpoints, labor sections, and phased updates as work moves from prep to pour to cure. Budget onboarding; Simpro pays off when PM discipline is real. Trial one commercial slab template.",
    },
    {
      slug: "jobber",
      badge: "Best approachable FSM for residential flatwork and driveways",
      description:
        "Estimates, scheduling, and invoicing when you replace driveways and patios without enterprise deployment.",
      rowBestFor: "Residential concrete crews",
      why:
        "Jobber helps residential concrete contractors keep estimates, deposits, and invoices tied to the same job as crews handle removals and pours. Attach access photos, log change orders, and invoice progress draws. Jobber fits owner-led teams scaling past whiteboards.",
    },
  ],
  editorialGuidance: [
    E(
      "Weather and pour slips",
      "Job notes and customer notifications should reflect realistic reschedule policies.",
    ),
    E(
      "Change orders in mud",
      "Capture approvals when depth or reinforcement changes on site.",
    ),
    E(
      "Progress billing",
      "Align draws to job phases your finance team can reconcile.",
    ),
  ],
  faqItems: [
    {
      q: "What field service software do concrete contractors use?",
      a: "Concrete teams often evaluate BuildOps for commercial field programs, Simpro for phased jobs with materials discipline, and Jobber for residential workflows with approachable invoicing.",
    },
    {
      q: "Can FSM software handle concrete progress billing?",
      a: "Yes—invoice draws tied to the same job record as phases complete; confirm accounting sync for retainage-style notes if needed.",
    },
    {
      q: "When do concrete companies need heavy construction software?",
      a: "When schedule-of-values billing and deep job costing replace job-to-invoice simplicity.",
    },
  ],
});

export const EXCAVATION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "excavation",
  title: "Best Field Service Software for Excavation Companies (2026)",
  subtitle:
    "Compare FSM tools for excavation: site walks, utility locate workflows, equipment mobilization, and documentation the GC can trust.",
  introParagraph:
    "Excavation companies sell mobilization and dirt work tied to permits and locates—not quick homeowner tune-ups. Field service software should support long site visits, photo documentation, and clear job histories so PMs see locate status, access constraints, and what changed before the bucket hits the ground.",
  picks: [
    {
      slug: "buildops",
      badge: "Best commercial field operations for excavation-adjacent trades",
      description:
        "When documentation, safety notes, and multi-site visibility matter as much as the schedule slot.",
      rowBestFor: "Commercial & GC programs",
      why:
        "BuildOps targets excavation and earthwork teams working under commercial programs where field documentation and coordination with mechanical or GC workflows matter. Trial a pre-dig walk template with staging photos. BuildOps fits when your customer is a process, not just a homeowner.",
    },
    {
      slug: "servicetrade",
      badge: "Best inspection and documentation-heavy site programs",
      description:
        "Customer-facing reporting and job documentation when you run recurring site rounds or inspection-style work.",
      rowBestFor: "Inspection-style site rounds",
      why:
        "ServiceTrade suits excavation firms doing inspection-adjacent programs or commercial service rounds where deliverables include documented site conditions. See how photo sets and completion checkpoints flow to the customer portal your clients expect.",
    },
    {
      slug: "simpro",
      badge: "Best structured job files for multi-phase earthwork",
      description:
        "When phases, materials, and labor sections need to stay aligned across estimators and supers.",
      rowBestFor: "Structured multi-phase jobs",
      why:
        "Simpro helps excavation companies that need structured job records as projects move through stripping, trenching, backfill, and restoration. Pilot one job template with realistic phases before you standardize.",
    },
  ],
  editorialGuidance: [
    E(
      "Locate and compliance",
      "811 status and internal safety checks belong on the job file before dig authorization.",
    ),
    E(
      "Access and staging",
      "Capture gate widths, slope, and neighbor constraints to reduce failed mobilizations.",
    ),
    E(
      "GC communication",
      "Photo timelines beat group texts when disputes arise about conditions before dig.",
    ),
  ],
  faqItems: [
    {
      q: "What field service software works for excavation companies?",
      a: "Excavation contractors often evaluate BuildOps for commercial field operations, ServiceTrade for documentation-heavy programs, and Simpro for structured multi-phase job files.",
    },
    {
      q: "Should excavation customers book dig days online?",
      a: "Usually book site walks and internal confirmations first—dig windows depend on locates, safety, and sequencing.",
    },
    {
      q: "When do excavation companies need heavy equipment telematics suites?",
      a: "When fleet hours and geofencing dominate; FSM still helps customer-facing job documentation and billing layers.",
    },
  ],
});

export const AUTO_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "auto-repair",
  title: "Best Field Service Software for Auto Repair Shops (2026)",
  subtitle:
    "Compare FSM tools for auto repair: bay and tech scheduling, estimates, parts notes, customer approvals, and shop-floor visibility.",
  introParagraph:
    "Auto repair shops need job-centric workflows—RO-style tickets, tech assignments, parts delays, and customer approvals—not generic meeting calendars. Field service software keeps estimates, photos, and invoices tied to the vehicle so advisors and techs stop re-keying the same story at the counter.",
  picks: [
    {
      slug: "fieldpulse",
      badge: "Best dispatch-heavy shop operations",
      description:
        "Operations-focused boards when you run multiple bays and need consistent status updates from the floor.",
      rowBestFor: "Multi-bay dispatch shops",
      why:
        "FieldPulse fits auto repair shops whose bottleneck is dispatch and technician execution as bay count grows—clear statuses, structured updates, and visibility advisors trust during rush hour. Trial diagnostic versus brake job templates with honest buffers. FieldPulse earns its place when whiteboards break.",
    },
    {
      slug: "workiz",
      badge: "Best value for independent garages scaling fast",
      description:
        "Affordable job tracking and invoicing when you need discipline before shop-management suite pricing.",
      rowBestFor: "Budget-conscious independents",
      why:
        "Workiz helps independent garages professionalize job tracking, advisor assignment, and field payments without enterprise FSM contracts. Validate line items for upsells techs capture on the floor. Workiz fits fast-scaling independents upgrading from paper ROs.",
    },
    {
      slug: "servicetitan",
      badge: "Best enterprise depth for high-volume shops",
      description:
        "Call-center-grade workflows, pricebooks, and analytics when you run serious marketing and multi-location operations.",
      rowBestFor: "Large multi-location shops",
      why:
        "ServiceTitan targets high-volume auto service groups that need deep pricebooks, sold-hour analytics, and marketing attribution—when leadership will staff admins and adopt the platform fully. Pilot on one location before you roll fleet-wide; half-configured Titan wastes money.",
    },
  ],
  editorialGuidance: [
    E(
      "Bay and tech reality",
      "Buffers for unknown diagnostics protect advisor promises.",
    ),
    E(
      "Customer approvals",
      "Capture text or email approvals on big tickets before parts orders fly.",
    ),
    E(
      "Fleet accounts",
      "Separate workflows for retail versus fleet billing and PO numbers.",
    ),
  ],
  faqItems: [
    {
      q: "What field service software do auto repair shops use?",
      a: "Shops often evaluate FieldPulse for dispatch-heavy operations, Workiz for affordable job tracking and payments, and ServiceTitan for enterprise-scale pricebooks and analytics—full SMS may still be the endgame for deep parts integrations.",
    },
    {
      q: "Can FSM replace shop management software?",
      a: "FSM can cover job files, estimates, and invoicing; deep parts catalogs and labor guides may still push you toward dedicated SMS over time.",
    },
    {
      q: "Which is best for a single-location independent garage?",
      a: "Many independents start with Workiz or FieldPulse; ServiceTitan tends to fit once call volume and reporting needs justify the overhead.",
    },
  ],
});

export const MOBILE_MECHANICS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "mobile-mechanics",
  title: "Best Field Service Software for Mobile Mechanics (2026)",
  subtitle:
    "Compare FSM tools for mobile mechanics: rolling inventory notes, fleet job billing, on-site estimates, and payments from the van.",
  introParagraph:
    "Mobile mechanics run from parking lots and fleet yards—not bays. Field service software should make job creation fast, capture vehicle and symptom context, support deposits on large jobs, and let techs invoice before driving to the next stop without a pile of paper ROs.",
  picks: [
    {
      slug: "workiz",
      badge: "Best affordable mobile-first job tracking",
      description:
        "Scheduling, dispatch, and invoicing tuned for high-volume roadside and fleet stops at lower software overhead.",
      rowBestFor: "Solo and small mobile ops",
      why:
        "Workiz fits mobile mechanics who need affordable job tracking, dispatch visibility, and card payments while margins are tight on small tickets. Trial stacked same-day jobs with drive buffers. Workiz is the pragmatic upgrade off spreadsheets.",
    },
    {
      slug: "housecall-pro",
      badge: "Best homeowner and light fleet customer experience",
      description:
        "Texts, booking, and polished estimates when consumers book brakes and diagnostics from their phones.",
      rowBestFor: "Consumer mobile repair",
      why:
        "Housecall Pro helps mobile mechanics who sell to homeowners and want on-my-way texts, financing-friendly estimates, and review prompts after jobs—critical when you compete in local maps. Test booking rules for service area limits. Housecall Pro wins when CX drives leads.",
    },
    {
      slug: "kickserv",
      badge: "Best CRM-style tracking for fleet accounts",
      description:
        "Customer histories and repeat unit tracking when dealerships and property managers reorder often.",
      rowBestFor: "Fleet & repeat accounts",
      why:
        "Kickserv suits mobile mechanics winning on fleet yards and property accounts—repeat vehicles, PO numbers, and job notes that survive driver turnover. Validate quick job cloning for recurring PM routes. Kickserv fits relationship-heavy mobile ops.",
    },
  ],
  editorialGuidance: [
    E(
      "Drive-time buffers",
      "Undersized buffers create late arrivals; model real traffic patterns.",
    ),
    E(
      "Parts reality",
      "Note parts ETA on the job so customers understand return visits.",
    ),
    E(
      "Safety and location",
      "Capture exact parking, hazards, and whether the customer must be present.",
    ),
  ],
  faqItems: [
    {
      q: "What is the best field service software for mobile mechanics?",
      a: "Mobile mechanics often compare Workiz for affordable mobile workflows, Housecall Pro for consumer experience and reviews, and Kickserv for fleet-style repeat accounts.",
    },
    {
      q: "Can mobile mechanics invoice from the field?",
      a: "Yes—leading FSM tools capture line items, signatures or approvals, and card payments before the tech leaves.",
    },
    {
      q: "When should mobile mechanics adopt full shop management?",
      a: "When parts catalogs and bay-style workflows replace pure mobile tickets as the core system.",
    },
  ],
});

export const CLEANING_FRANCHISES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "cleaning-franchises",
  title: "Best Field Service Software for Cleaning Franchises (2026)",
  subtitle:
    "Compare FSM tools for cleaning franchises: recurring route templates, multi-territory teams, brand-consistent customer comms, and franchisee-friendly rollout.",
  introParagraph:
    "Cleaning franchises need repeatable job definitions—recurring maid visits, deep cleans, move-outs—without every territory reinventing workflows. Field service software should scale seats, support recurring visits, and keep customer-facing messages on-brand while franchisees still see their crew calendars clearly.",
  picks: [
    {
      slug: "zuper",
      badge: "Best configurable ops for multi-territory cleaning brands",
      description:
        "Flexible workflows and integrations when territories need localized checklists but HQ needs governance.",
      rowBestFor: "Franchise operations & integrations",
      why:
        "Zuper fits cleaning franchisors that need configurable work orders, automations, and integrations across territories—without forcing every branch into identical rigid templates. Pilot permissions for franchisee admins versus cleaners. Zuper shines when rollout speed and control both matter.",
    },
    {
      slug: "connecteam",
      badge: "Best workforce layer for cleaners and shift-based teams",
      description:
        "Scheduling, task checklists, and team communication alongside customer jobs when internal workforce discipline is the bottleneck.",
      rowBestFor: "Cleaner workforce & shifts",
      why:
        "Connecteam helps cleaning franchises coordinate deskless teams—shifts, task lists, and internal comms—while customer jobs may still live in FSM or scheduling tools. Pair with clear SOPs so customer-facing job records stay complete. Connecteam wins when labor compliance and shift clarity matter.",
    },
    {
      slug: "jobber",
      badge: "Best approachable FSM for franchisee job-to-cash workflows",
      description:
        "Quotes, recurring jobs, and invoicing that franchisees can adopt quickly without six-month implementations.",
      rowBestFor: "Job billing & recurring cleans",
      why:
        "Jobber helps cleaning franchises standardize recurring visits, invoicing, and customer comms in a system franchisees can learn quickly. Trial brand-level templates for deep cleans versus standard maintenance. Jobber fits when job-to-cash discipline is the priority.",
    },
  ],
  editorialGuidance: [
    E(
      "Brand consistency",
      "Lock templates for confirmations and line items so territories feel like one company.",
    ),
    E(
      "Recurring cadence",
      "Define skip policies and realistic service durations to protect route density.",
    ),
    E(
      "Franchisee onboarding",
      "Pick tools a new owner can configure in days—complex stacks kill rollout.",
    ),
  ],
  faqItems: [
    {
      q: "What field service software works for cleaning franchises?",
      a: "Franchise systems often evaluate Zuper for configurable multi-territory operations, Connecteam for workforce and shift coordination, and Jobber for approachable recurring jobs and invoicing.",
    },
    {
      q: "Should franchisors mandate one FSM everywhere?",
      a: "Standardize core workflows and reporting; allow limited localization for add-on services and regional pricing with guardrails.",
    },
    {
      q: "When do cleaning franchises need franchise-specific platforms?",
      a: "When royalty reporting, supply ordering, and QA audits need a single operating system beyond general FSM.",
    },
  ],
});

export const EVENT_SERVICES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "event-services",
  title: "Best Field Service Software for Event Services (2026)",
  subtitle:
    "Compare FSM tools for event services: crew scheduling, equipment staging, change orders on site, and billing across venues and shifts.",
  introParagraph:
    "Event services—catering equipment, AV, rentals, staging—sell crews and gear on tight timelines. Field service software helps you assign leads, track truck packs, capture change orders when the floor plan shifts, and invoice deposits and finals without losing context between sales and load-in night.",
  picks: [
    {
      slug: "zuper",
      badge: "Best configurable workflows for varied event SKUs",
      description:
        "Flexible job templates when every gig mixes labor, equipment, and venue-specific checklists.",
      rowBestFor: "Complex event SKUs",
      why:
        "Zuper fits event services companies that need configurable work orders and automations across venues—different checklists for indoor versus outdoor rigs, union notes where relevant, and integrations to other systems. Pilot one wedding versus corporate gala template. Zuper shines when no two jobs look the same.",
    },
    {
      slug: "jobber",
      badge: "Best approachable job-to-invoice for growing event crews",
      description:
        "Estimates, scheduling, and invoicing when you need discipline without enterprise FSM timelines.",
      rowBestFor: "Crew jobs & billing",
      why:
        "Jobber helps event services teams standardize estimates, crew assignments, and invoicing as they scale past shared calendars. Attach venue maps, log add-on labor, and invoice deposits then finals on the same job. Jobber fits owner-led crews professionalizing operations.",
    },
    {
      slug: "connecteam",
      badge: "Best internal workforce coordination for event staff",
      description:
        "Shifts, tasks, and team communication when floaters, loaders, and leads need one operational channel.",
      rowBestFor: "Staffing and shift ops",
      why:
        "Connecteam supports event services businesses coordinating large deskless teams—shift swaps, task checklists, and announcements on load-in day—alongside whatever tool holds customer jobs. Pair with SOPs so customer-facing job records still stay current.",
    },
  ],
  editorialGuidance: [
    E(
      "Load-in versus strike",
      "Different job types and durations—do not book strike labor like a sales consult.",
    ),
    E(
      "Change orders on site",
      "Capture signed approvals when rigging or hours change mid-event.",
    ),
    E(
      "Deposits and finals",
      "Keep payment history per job when venues pay net-30 but crews need cash flow clarity.",
    ),
  ],
  faqItems: [
    {
      q: "What field service software do event services companies use?",
      a: "Event teams often evaluate Zuper for configurable workflows across venues, Jobber for approachable job-to-invoice discipline, and Connecteam for internal workforce and shift coordination.",
    },
    {
      q: "Can FSM handle multi-day festival builds?",
      a: "Yes—use phased jobs or linked jobs per day with shared attachments so crews see the same rigging notes.",
    },
    {
      q: "When do event companies need dedicated event rental ERP?",
      a: "When serialized asset tracking and depreciation dominate—FSM still helps crew and customer job layers first.",
    },
  ],
});

export const HOME_INSPECTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "home-inspectors",
  title: "Best Field Service Software for Home Inspectors (2026)",
  subtitle:
    "Compare FSM tools for home inspectors: long inspection blocks, photo-heavy job files, add-on services, and agent-friendly customer communication.",
  introParagraph:
    "Home inspection companies sell long, immovable appointments tied to real estate timelines. Field service software keeps square footage, access notes, add-on radon or sewer scopes, and invoices on one job so inspectors arrive prepared—and agents get consistent confirmations instead of ad hoc texts.",
  picks: [
    {
      slug: "jobber",
      badge: "Best approachable all-in-one for multi-inspector firms",
      description:
        "Scheduling, client hub, and invoicing when you standardize inspections across a growing team.",
      rowBestFor: "Multi-inspector operations",
      why:
        "Jobber fits home inspection companies that need consistent job files, scheduling, and invoicing as you add inspectors—without enterprise implementation drag. Trial long-duration events with buffer, attach pre-inspection agreements, and invoice add-ons on the same job. Jobber suits growing residential inspection brands.",
    },
    {
      slug: "kickserv",
      badge: "Best CRM-style customer history for agent-heavy pipelines",
      description:
        "Office-friendly customer records when repeat agents and brokerages drive most of your volume.",
      rowBestFor: "Agent pipeline CRM",
      why:
        "Kickserv helps inspection businesses that live on agent and brokerage relationships—repeat office contacts, clear job histories, and follow-ups after busy option periods. Validate quick rebooking for rush reinspects. Kickserv fits relationship-heavy inspection shops.",
    },
    {
      slug: "housecall-pro",
      badge: "Best homeowner and agent communication polish",
      description:
        "Automated texts and polished customer touchpoints when timeliness and reviews feed your pipeline.",
      rowBestFor: "CX & review growth",
      why:
        "Housecall Pro supports inspection companies that compete on communication quality—reminders, on-my-way messages, and review prompts after reports deliver—especially when agents compare three vendors. Test MLS address intake fields. Housecall Pro wins when CX is a differentiator.",
    },
  ],
  editorialGuidance: [
    E(
      "Duration honesty",
      "Older homes need longer blocks—underestimating time cascades late reports.",
    ),
    E(
      "Add-on services",
      "Radon and sewer scopes should be separate line items with clear customer acknowledgment.",
    ),
    E(
      "Access and liability",
      "Occupied home notes, pets, and utilities belong on the job file before the inspector arrives.",
    ),
  ],
  faqItems: [
    {
      q: "What field service software do home inspection companies use?",
      a: "Inspection firms often evaluate Jobber for multi-inspector job and billing discipline, Kickserv for CRM-style agent pipelines, and Housecall Pro for polished customer communication and reviews.",
    },
    {
      q: "Should inspectors offer same-day booking online?",
      a: "Only if capacity is real—otherwise use confirmation steps or premium rush fees to protect schedule integrity.",
    },
    {
      q: "When do inspectors need inspection-specific report software?",
      a: "When report writing and standards libraries replace calendar booking as the core product—FSM still helps customer and billing layers.",
    },
  ],
});

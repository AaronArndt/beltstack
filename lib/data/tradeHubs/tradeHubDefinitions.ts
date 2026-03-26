import type { TradeHubDefinition } from "@/lib/types/tradeHub";

/**
 * Trade / industry hub definitions. Each trade sets its own category stack and editorial sections.
 * Add a new entry here + `TRADE_HUB_SLUGS` / `generateStaticParams` picks it up.
 */
export const TRADE_HUB_DEFINITIONS: Record<string, TradeHubDefinition> = {
  hvac: {
    slug: "hvac",
    seoTitle: "Software for HVAC Businesses (2026) | BeltStack",
    metaDescription:
      "Field service, CRM, payroll, invoicing, and scheduling for HVAC companies—stack recommendations, use cases, and links to reviews and category hubs.",
    title: "Software for HVAC Businesses",
    intro:
      "HVAC companies juggle dispatch, seasonal demand, recurring maintenance agreements, and tight margins. The right stack connects scheduling and field service with billing, payroll, and customer history so nothing falls through the cracks.",
    heroCategoryLine:
      "Most teams combine field service or dispatch software with CRM or job history, payroll, invoicing, and appointment scheduling—exactly which tools fit depends on your size and whether you’re residential, commercial, or both.",
    breadcrumbLabel: "HVAC",
    keyTakeaways: [
      { label: "Core stack: field service + payroll + cash flow tools", anchor: "#software-stack" },
      { label: "Best software by HVAC scenario", anchor: "#use-cases" },
      { label: "How to choose for residential vs commercial", anchor: "#operating-models" },
    ],
    categoryStackSectionTitle: "Core software stack for HVAC businesses",
    categoryStackSectionSub:
      "These categories work together: dispatch and jobs feed invoices and payroll; CRM keeps recurring agreements organized.",
    categoryStackIntro:
      "Below, we explain why each category matters for HVAC—not every shop needs every tool on day one, but most outgrow spreadsheets across these areas.",
    categoryStack: [
      {
        id: "field-service",
        softwareCategory: "field-service",
        heading: "Field service & dispatch",
        body:
          "Dispatch, capacity planning, and technician mobile apps turn calls into revenue without losing details. Strong HVAC field service software ties tune-ups, warranty work, and replacements to photos, forms, and line items on the customer record. Prioritize routing by skill and territory, offline-friendly mobile, and job costing so margin is visible before you invoice.",
        productSlugs: ["servicetitan", "simpro", "jobber"],
      },
      {
        id: "crm",
        softwareCategory: "crm",
        heading: "CRM & customer history",
        body:
          "Replacement and maintenance revenue depend on equipment age, visit history, and open opportunities—not just a spreadsheet row. A CRM (or CRM-like fields in your field platform) supports follow-ups on estimates, membership renewals, and commercial accounts. Choose pipelines your team will update after each call, not unused automation.",
        productSlugs: ["hubspot", "pipedrive"],
      },
      {
        id: "payroll",
        softwareCategory: "payroll",
        heading: "Payroll & contractors",
        body:
          "Peak weeks, overtime, and mixed W-2 or 1099 labor make HVAC payroll volatile. Payroll fed by approved time or job clocks cuts re-keying when crews work long days. Confirm multi-location rules, certified payroll if required, and paying contractors alongside employees.",
        productSlugs: ["gusto", "quickbooks-payroll"],
      },
      {
        id: "invoicing",
        softwareCategory: "invoicing",
        heading: "Invoicing & payments",
        body:
          "Cash flow often depends on deposits, progress billing on big replacements, and collecting on smaller service calls. Invoices should match what techs captured in the field, with card-on-file where it helps. Sync to accounting keeps revenue and job profitability accurate when volume spikes.",
        productSlugs: ["freshbooks", "quickbooks"],
      },
      {
        id: "scheduling",
        softwareCategory: "scheduling",
        heading: "Appointment scheduling",
        body:
          "Customer booking cuts phone tag for tune-ups, sales visits, and non-emergency work. Add reminders so trucks stay full and no-shows drop. Many teams use scheduling for booked appointments while dispatch in field service handles same-day demand.",
        productSlugs: ["calendly", "acuity-scheduling"],
      },
    ],
    useCaseSectionTitle: "Best software by use case for HVAC",
    useCaseSectionSub: "Scenario-first picks—team size, dispatch load, and how you sell—not generic lists.",
    useCases: [
      {
        title: "Best for small residential HVAC teams",
        body:
          "Small crews need one solid system for dispatch, mobile closeout, and fast invoicing before CRM or analytics. Prioritize apps techs open every job: photos, notes, and payment beat unused enterprise modules. Use the field service roundup and HVAC guide to shortlist without overspending.",
        links: [
          { label: "HVAC field service guide →", href: "/field-service/guides/field-service-software-for-hvac" },
          { label: "Best field service software →", href: "/field-service/best-field-service-software" },
        ],
      },
      {
        title: "Best for growing commercial operations",
        body:
          "Commercial work means longer cycles, more stakeholders, and GC or property-manager expectations. You need stronger permissions, job costing, and change-order control than a typical residential stack. Comparisons show which platforms scale with project depth and office staff.",
        links: [{ label: "Compare field service software →", href: "/field-service/compare" }],
      },
      {
        title: "Best payroll fit for HVAC payroll complexity",
        body:
          "If hours sit in spreadsheets away from jobs, payroll gets painful fast. Choose payroll that maps to time data and your mix of employees and contractors, with support when rules get messy. The payroll “best for HVAC” page matches products to real labor patterns.",
        links: [
          { label: "Best payroll for HVAC →", href: "/payroll/best-for/hvac" },
          { label: "Payroll hub →", href: "/payroll" },
        ],
      },
      {
        title: "Best for maintenance agreements and recurring revenue",
        body:
          "If memberships and tune-ups drive revenue, automate renewals, reminders, and visits—not only one-off jobs. Recurring job templates, agreement tracking, and CRM handoffs cut churn and office busywork. Ensure recurring billing syncs to accounting without manual exports.",
        links: [
          { label: "Scheduling hub →", href: "/scheduling" },
          { label: "CRM hub →", href: "/crm" },
        ],
      },
      {
        title: "Best for budget-conscious shops upgrading from paper",
        body:
          "Moving off paper or a basic calendar, fix job records and invoicing first; add payroll when reconciliation steals hours weekly. Cheap tools no one uses on mobile cost more than mid-tier software adopted in the field. Narrow choices on the comparison hub, then trial a real tech workflow.",
        links: [
          { label: "Invoicing hub →", href: "/invoicing" },
          { label: "Accounting hub →", href: "/accounting" },
        ],
      },
    ],
    howToChooseTitle: "How to choose software for HVAC businesses",
    howToChooseSub: "Evaluation criteria that matter on trucks and in the office.",
    howToChooseSubsections: [
      {
        title: "Integrations beat “all-in-one” promises",
        body:
          "HVAC stacks rarely sit in one vendor: jobs, time, payroll, and the general ledger each have different “best” tools. Verify native integrations or a reliable sync path between field service, payroll, and accounting before you commit—CSV juggling breaks when summer volume doubles.",
      },
      {
        title: "Mobile workflows are non-negotiable",
        body:
          "Techs need offline-friendly apps, photos, signatures, and fast time capture on real devices. If mobile feels fragile in a demo, it will fail in peak season.",
      },
      {
        title: "Match software to how you sell",
        body:
          "Replacement-heavy shops need estimates, options, and financing hooks; maintenance-heavy shops need agreements, reminders, and route density. Buy for your main revenue engine first; add CRM when pipeline—not dispatch—is the bottleneck.",
      },
      {
        title: "Model total cost at peak headcount",
        body:
          "Model per-tech or per-user cost at peak staffing and overtime, not shoulder season. Ask about add-ons for texting, marketing, inventory, and support before go-live.",
      },
      {
        title: "Plan data migration and training realistically",
        body:
          "History and agreements only help if imports land clean. Budget cleanup and role-based training (dispatch, tech, office) so adoption does not stall after launch.",
      },
    ],
    identitySectionTitle: "HVAC software by business type",
    identitySectionSub: "How you operate changes what to implement first.",
    identitySegments: [
      {
        title: "Residential service & replacement",
        body:
          "Short-cycle jobs and seasonal swings reward scheduling density and clear customer comms over heavy project modules. Many teams add field service plus invoicing first, then CRM as marketing and memberships grow.",
        links: [{ label: "Scheduling hub →", href: "/scheduling" }],
      },
      {
        title: "Commercial & construction-adjacent HVAC",
        body:
          "Longer cycles and GC expectations push you toward job costing, approvals, and accounting alignment. Keep inspection and compliance docs on the job—not in email.",
        links: [{ label: "Accounting hub →", href: "/accounting" }],
      },
      {
        title: "Multi-location HVAC",
        body:
          "Branches need shared customers, consistent pricing, and permissions before advanced analytics. Standardize dispatch and reporting so leadership can compare sites without every location inventing its own workflow.",
        links: [{ label: "CRM hub →", href: "/crm" }],
      },
    ],
    nextStepsTitle: "Popular comparisons, reviews & next steps",
    nextStepsSub: "Continue research with head-to-head comparisons and category hubs.",
    nextStepsGroups: [
      {
        groupTitle: "Field service comparisons",
        links: [
          {
            label: "Jobber vs Housecall Pro",
            href: "/field-service/compare/jobber-vs-housecall-pro",
            description: "Two popular platforms for home service pros.",
          },
          {
            label: "Housecall Pro vs ServiceTitan",
            href: "/field-service/compare/housecall-pro-vs-servicetitan",
            description: "Growing teams evaluating depth and price.",
          },
        ],
      },
      {
        groupTitle: "Category hubs",
        links: [
          { label: "Field service software hub", href: "/field-service" },
          { label: "Payroll software hub", href: "/payroll" },
          { label: "Invoicing software hub", href: "/invoicing" },
        ],
      },
    ],
    faqTitle: "HVAC software FAQs",
    faqSub: "Straight answers for common buying questions.",
    faqs: [
      {
        q: "What software do HVAC businesses typically use?",
        a: "Most combine field service or dispatch software for jobs and techs with invoicing or accounting for books, plus payroll for labor. CRM or marketing tools often come later when lead follow-up and memberships need structure beyond the job board.",
      },
      {
        q: "Do HVAC companies need separate field service and accounting tools?",
        a: "Often yes. Field service platforms excel at dispatch, mobile workflows, and job history; accounting software handles taxes, reconciliation, and financial reporting. Integrations or a reliable sync between them keeps revenue, costs, and WIP aligned.",
      },
      {
        q: "What is the best HVAC software for a small business?",
        a: "Fit depends on team size and residential vs commercial. Small teams prioritize mobile closeout, dispatch, and invoicing; larger shops add permissions, job costing, and payroll integrations. Use guides and comparisons—not a single brand name.",
      },
      {
        q: "What should I implement first?",
        a: "If jobs are getting lost or billing lags behind work performed, fix field service and invoicing first. Add CRM depth when pipeline and follow-up work is unmanaged, and tighten payroll when time reconciliation becomes a weekly burden.",
      },
      {
        q: "Do HVAC contractors need CRM software?",
        a: "Not on day one for every company. Many teams get CRM-like value from strong customer records inside field service. Standalone CRM becomes worthwhile when you run proactive sales, multi-location accounts, or marketing programs that outgrow job notes.",
      },
      {
        q: "Can HVAC businesses use separate tools instead of one all-in-one platform?",
        a: "Yes—and many do. The goal is clean data flow: jobs and time should feed invoicing and payroll without duplicate entry. All-in-one suites can work, but only if every module fits how you operate; otherwise best-of-breed tools with solid integrations often win.",
      },
    ],
    methodologyTitle: "How BeltStack evaluates trade software stacks",
    methodologySub: "Transparent criteria for recommendations.",
    methodologyBullets: [
      "We prioritize tools that match real HVAC workflows: dispatch, recurring service, and cash collection.",
      "We consider integrations, mobile quality, and total cost—including add-ons and per-tech pricing.",
      "Recommendations are editorial and independent; we may earn a commission when you purchase through our links.",
    ],
  },

  plumbing: {
    slug: "plumbing",
    seoTitle: "Software for Plumbing Companies (2026) | BeltStack",
    metaDescription:
      "Recommended software categories for plumbing businesses—field service, payroll, invoicing, and scheduling—with product picks and links to reviews.",
    title: "Software for Plumbing Companies",
    intro:
      "Plumbing businesses run on emergency calls, planned work, and repeat customers. Software should speed up dispatch, capture job details, and get invoices out while crews are still productive.",
    heroCategoryLine:
      "Common stacks center on field service for jobs and dispatch, plus invoicing, payroll, and scheduling—CRM is optional until sales and follow-up volume justify it.",
    breadcrumbLabel: "Plumbing",
    keyTakeaways: [
      { label: "Where plumbing teams start: field service + billing", anchor: "#software-stack" },
      { label: "Use cases: emergency-heavy vs maintenance-heavy", anchor: "#use-cases" },
      { label: "How to choose & evaluate vendors", anchor: "#how-to-choose" },
    ],
    categoryStackSectionTitle: "Core software stack for plumbing businesses",
    categoryStackSectionSub: "Fewer categories than some trades—tight stacks beat tool sprawl.",
    categoryStackIntro:
      "Plumbing shops often win or lose on response time and clean job records. These categories address operations and cash flow first.",
    categoryStack: [
      {
        id: "field-service",
        softwareCategory: "field-service",
        heading: "Field service & job management",
        body:
          "Dispatch-heavy work—emergencies, callbacks, multi-stop days—needs a clear board, mobile apps, and status from dispatch to invoice. Capture line items, photos, and notes on site so billing matches the job. Prioritize estimates, work orders, and repeat customers—not just a calendar.",
        productSlugs: ["jobber", "housecall-pro", "fieldpulse"],
      },
      {
        id: "payroll",
        softwareCategory: "payroll",
        heading: "Payroll",
        body:
          "After-hours and on-call work make payroll error-prone when hours sit outside jobs. Tie payroll to approved time or clock-ins to cut disputes and support mixed W-2 crews or subs. Confirm state rules and that field data does not get retyped.",
        productSlugs: ["gusto", "onpay"],
      },
      {
        id: "invoicing",
        softwareCategory: "invoicing",
        heading: "Invoicing & estimates",
        body:
          "Big repairs often start with an estimate and deposit. Invoices should mirror the estimate, support progress billing on multi-day jobs, and take mobile payment. Clear bills speed collection and cut “what was included?” disputes.",
        productSlugs: ["freshbooks", "wave"],
      },
      {
        id: "scheduling",
        softwareCategory: "scheduling",
        heading: "Scheduling",
        body:
          "Self-serve booking and reminders route non-emergency work—drains, water heaters, maintenance—without burning out the office. Connect customer booking to dispatch so slots become real routes with the right parts and skills. Fewer no-shows, less phone tag.",
        productSlugs: ["calendly", "setmore"],
      },
    ],
    useCaseSectionTitle: "Best software by use case for plumbing",
    useCaseSectionSub: "Match tools to how you take calls, run routes, and grow the business.",
    useCases: [
      {
        title: "Best for emergency-heavy call volume",
        body:
          "When phones spike, dispatchers need fast jobs, clear tech status, and mobile that works under pressure. Compare dispatch UX, SMS/call hooks, and same-day invoicing. The plumbing guide and comparison hub stress-test vendors on real emergencies.",
        links: [
          { label: "Plumbing field service guide →", href: "/field-service/guides/field-service-software-for-plumbing" },
          { label: "Field service comparisons →", href: "/field-service/compare" },
        ],
      },
      {
        title: "Best for small plumbing shops keeping overhead low",
        body:
          "Lean teams anchor on field service and invoicing, then payroll when reconciliation hurts. Skip oversized bundles until processes are consistent—unused modules slow adoption. Payroll “best for plumbing” maps products to typical labor patterns.",
        links: [
          { label: "Best payroll for plumbing →", href: "/payroll/best-for/plumbing" },
          { label: "Best field service software →", href: "/field-service/best-field-service-software" },
        ],
      },
      {
        title: "Best for maintenance plans and repeat service",
        body:
          "If recurring drain service, water heater programs, or membership-style plans matter, you need recurring jobs, reminders, and easy re-booking—not only one-off tickets. Tie maintenance revenue to clear customer records so techs see history on arrival. Scheduling plus field service often covers this before standalone CRM is necessary.",
        links: [
          { label: "Scheduling hub →", href: "/scheduling" },
          { label: "Invoicing hub →", href: "/invoicing" },
        ],
      },
      {
        title: "Best for shops adding commercial or multi-tech crews",
        body:
          "More trucks need permissions, price books, and reporting by tech or job type. Your field platform should enforce standards without blocking dispatch. Comparisons show scale features vs simplicity.",
        links: [{ label: "Compare field service software →", href: "/field-service/compare" }],
      },
    ],
    howToChooseTitle: "How to choose software for plumbing companies",
    howToChooseSub: "Practical criteria for dispatch, billing, and total cost.",
    howToChooseSubsections: [
      {
        title: "Start with the job record",
        body:
          "Accurate jobs come first—photos, notes, line items, materials easy in the field before marketing or analytics. If techs resist the app, data and invoices lag.",
      },
      {
        title: "Watch per-tech pricing",
        body:
          "Per-user or per-tech pricing: model at peak staffing, not slow months. Include add-ons for texting, inventory, or routing if you need them.",
      },
      {
        title: "Connect estimates to cash collection",
        body:
          "Margins depend on selling the right work and collecting fast. Estimate templates, deposits, and field payment links keep the office from retyping at night.",
      },
      {
        title: "Integrate payroll when hours get messy",
        body:
          "When overtime and callbacks are normal, payroll should pull the same time as jobs. If spreadsheets are weekly, prioritize integrations over new features elsewhere.",
      },
    ],
    nextStepsTitle: "Next steps",
    nextStepsGroups: [
      {
        groupTitle: "Compare tools",
        links: [{ label: "Jobber vs Workiz", href: "/field-service/compare/jobber-vs-workiz" }],
      },
      {
        groupTitle: "Hubs",
        links: [
          { label: "Field service hub", href: "/field-service" },
          { label: "Payroll hub", href: "/payroll" },
        ],
      },
    ],
    faqTitle: "Plumbing software FAQs",
    faqSub: "Common questions from owners and operations leads.",
    faqs: [
      {
        q: "What software do plumbing companies use?",
        a: "Most use field service or job management software for dispatch and mobile work orders, plus invoicing or small-business accounting for books. Payroll comes in as teams grow, and scheduling tools support customer booking for non-emergency work.",
      },
      {
        q: "Do plumbers need a CRM?",
        a: "Not always at first. Many plumbing businesses get strong mileage from customer and job history inside field service plus invoicing. Add CRM when you are actively managing sales pipelines, commercial accounts, or marketing follow-up that outgrows job notes.",
      },
      {
        q: "What is the best plumbing software for small businesses?",
        a: "The best fit depends on call volume, crew size, and whether work is mostly emergency service or planned jobs. Small shops usually prioritize technician-friendly mobile apps, simple dispatch, and fast invoicing. Use guides and comparisons to match products to your scenario instead of chasing brand names alone.",
      },
      {
        q: "What features matter most in plumbing software?",
        a: "Dispatch and mobile job documentation usually matter first: photos, line items, signatures, and status updates from truck to office. Next, estimate-to-invoice consistency and payment collection; then payroll integrations when labor reconciliation becomes a bottleneck.",
      },
      {
        q: "Should plumbing contractors use separate tools or one platform?",
        a: "Both approaches work. What matters is reliable data flow—jobs and time should feed invoicing and payroll without duplicate entry. If an all-in-one platform weak in mobile or dispatch, best-of-breed tools with integrations often perform better.",
      },
      {
        q: "When should a plumbing business add scheduling software?",
        a: "When non-emergency work—maintenance, small projects, or sales visits—creates phone tag and no-shows. Scheduling complements dispatch: customers book windows, while your team still manages routes and emergencies inside field service.",
      },
    ],
    methodologyTitle: "How BeltStack evaluates trade software stacks",
    methodologySub: "Transparent criteria for recommendations.",
    methodologyBullets: [
      "We prioritize tools that match real plumbing workflows: dispatch, mobile documentation, and cash collection.",
      "We weigh integrations, ease of adoption for techs, and total cost—including per-user fees and add-ons.",
      "Recommendations are editorial and independent; we may earn a commission when you purchase through our links.",
    ],
  },

  electrical: {
    slug: "electrical",
    seoTitle: "Software for Electrical Contractors (2026) | BeltStack",
    metaDescription:
      "Software stack guidance for electrical businesses: field service, payroll, invoicing, and scheduling with picks and internal links.",
    title: "Software for Electrical Contractors",
    intro:
      "Electrical work spans service calls, projects, and safety documentation. Software should help you schedule crews, track job details, and bill accurately—especially when jobs run across multiple visits.",
    heroCategoryLine:
      "Electrical contractors often pair field service for tickets and projects with payroll, invoicing, and scheduling—time tracking becomes important as soon as labor must tie to job costing or certified payroll.",
    breadcrumbLabel: "Electrical",
    keyTakeaways: [
      { label: "Stack overview: field service through billing", anchor: "#software-stack" },
      { label: "Use cases by job type", anchor: "#use-cases" },
      { label: "Documentation, time, and integrations", anchor: "#how-to-choose" },
    ],
    categoryStackSectionTitle: "Core software stack for electrical businesses",
    categoryStackSectionSub: "Service tickets, projects, and crews each place different demands on your stack.",
    categoryStackIntro:
      "Whether you are primarily service trucks or mixed project work, these categories cover how jobs get executed, labor gets paid, and revenue hits the books.",
    categoryStack: [
      {
        id: "field-service",
        softwareCategory: "field-service",
        heading: "Field service & projects",
        body:
          "You juggle service tickets, small installs, and longer mini-projects. Field service should support structured jobs, checklists, and mobile photos, as-builts, or site notes—not one-line tickets. On commercial work, watch permissions, job folders, and change orders tied to scope.",
        productSlugs: ["housecall-pro", "servicetitan", "fieldpulse"],
      },
      {
        id: "payroll",
        softwareCategory: "payroll",
        heading: "Payroll & time",
        body:
          "Crew schedules and drive time hurt when hours are retyped from whiteboards. Clock-ins or approved field time keep overtime accurate and support job costing. For commercial bids, ask about prevailing wage or certified payroll docs your contracts need.",
        productSlugs: ["gusto", "quickbooks-payroll"],
      },
      {
        id: "invoicing",
        softwareCategory: "invoicing",
        heading: "Invoicing",
        body:
          "Panel upgrades and multi-phase work often need progress billing, retainage, and signed change orders. Invoices should match the field, with line items that limit back-office rework. Sync matters when materials and subs hit the same jobs.",
        productSlugs: ["quickbooks", "zoho-invoice"],
      },
      {
        id: "scheduling",
        softwareCategory: "scheduling",
        heading: "Scheduling",
        body:
          "Estimator visits and callbacks need scheduling that does not collide with dispatch. Booked slots should become jobs with clear materials and crew fit. Calendar and reminder integrations cut missed appointments that wreck routes.",
        productSlugs: ["calendly", "youcanbookme"],
      },
    ],
    useCaseSectionTitle: "Best software by use case for electrical contractors",
    useCaseSectionSub: "Service-heavy, project-heavy, and payroll-first scenarios need different emphasis.",
    useCases: [
      {
        title: "Best for service electricians vs project-heavy shops",
        body:
          "Service-heavy teams need dispatch speed, truck awareness, and same-day invoicing. Project-heavy shops need costing, documentation, and progress billing. Match platforms to revenue mix—skip construction modules you will not use.",
        links: [
          { label: "Payroll for electricians →", href: "/payroll/best-for/electricians" },
          { label: "Compare field service software →", href: "/field-service/compare" },
        ],
      },
      {
        title: "Best when job costing and labor proof matter",
        body:
          "T&M or GC phase billing needs trustworthy time. Job-linked time or strong labor fields in field service feed payroll and invoices—skip parallel spreadsheets. The time tracking hub helps beyond basic clocks.",
        links: [
          { label: "Time tracking hub →", href: "/time-tracking" },
          { label: "Accounting hub →", href: "/accounting" },
        ],
      },
      {
        title: "Best for growing electrical contractors standardizing crews",
        body:
          "More trucks need price books, templates, and role-based access so crews see the right workflow. Confirm your field tool enforces standards without every change becoming an admin project.",
        links: [{ label: "Best field service software →", href: "/field-service/best-field-service-software" }],
      },
      {
        title: "Best for shops balancing commercial paperwork and residential speed",
        body:
          "Commercial may need richer packets; residential may prioritize speed and texting. Mixed divisions need one customer record and flexible workflows—comparisons show how platforms handle both.",
        links: [{ label: "Field service hub →", href: "/field-service" }],
      },
    ],
    howToChooseTitle: "How to choose software for electrical businesses",
    howToChooseSub: "Documentation, time, integrations, and how you bill larger jobs.",
    howToChooseSubsections: [
      {
        title: "Compliance and documentation",
        body:
          "For commercial or industrial work, confirm photos, signatures, permits, and packets are stored per job for audits or GCs—not lost in personal camera rolls.",
      },
      {
        title: "Decide how time becomes payroll and billing",
        body:
          "One source of truth for hours: field time, clocks, or dispatch durations. Manual reconciliation leaks margin on busy weeks.",
      },
      {
        title: "Match invoicing to contract type",
        body:
          "T&M, fixed bid, and progress billing need different mechanics. Support deposits, change orders, and retainage without custom spreadsheets.",
      },
      {
        title: "Stress-test mobile for your worst job sites",
        body:
          "Adoption lives or dies on site connectivity and UX. Trial with real photos, long notes, and signatures—not happy-path demos.",
      },
    ],
    nextStepsTitle: "Next steps",
    nextStepsGroups: [
      {
        groupTitle: "Research",
        links: [
          { label: "Field service hub", href: "/field-service" },
          { label: "Time tracking hub", href: "/time-tracking" },
        ],
      },
    ],
    faqTitle: "Electrical contractor software FAQs",
    faqSub: "Buying questions we hear from electrical businesses.",
    faqs: [
      {
        q: "What software do electrical contractors use?",
        a: "Most use field service or job management software for tickets and projects, plus invoicing or accounting for billing and books. Payroll integrates as teams grow, and scheduling tools support estimator visits. Time tracking often appears when labor must tie to jobs or certified payroll.",
      },
      {
        q: "When should electrical contractors add time tracking?",
        a: "Add it when job costing, GC billing, or payroll reconciliation consumes hours each week—or when you need defensible hours by job. Integrated time data beats spreadsheets once you have multiple crews or complex jobs.",
      },
      {
        q: "What features matter most for electrical software?",
        a: "Job documentation, mobile usability, and estimate-to-invoice alignment usually rank first. For commercial work, add checklist and packet requirements; for service trucks, prioritize dispatch clarity and fast invoicing.",
      },
      {
        q: "Do electrical businesses need different software for commercial vs residential work?",
        a: "Often one platform supports both with the right setup: commercial may need richer packets and progress billing; residential may emphasize dispatch speed. Configure for the workflow that drives most revenue.",
      },
      {
        q: "Can small electrical contractors use separate tools instead of one suite?",
        a: "Yes. Many successful contractors combine field service, invoicing, and payroll tools with integrations. The priority is eliminating double entry between jobs, time, and billing—not brand consolidation for its own sake.",
      },
    ],
    methodologyTitle: "How BeltStack evaluates trade software stacks",
    methodologySub: "Transparent criteria for recommendations.",
    methodologyBullets: [
      "We prioritize tools that match electrical workflows: mobile job documentation, time-to-payroll accuracy, and billing that reflects field reality.",
      "We weigh integrations, adoption by techs, and total cost—including per-user fees and compliance-related features.",
      "Recommendations are editorial and independent; we may earn a commission when you purchase through our links.",
    ],
  },

  landscaping: {
    slug: "landscaping",
    seoTitle: "Software for Landscaping Businesses (2026) | BeltStack",
    metaDescription:
      "Landscaping software stack: field service, invoicing, payroll, scheduling, and accounting—with product picks and category links.",
    title: "Software for Landscaping Businesses",
    intro:
      "Landscaping mixes maintenance routes, design/build projects, and seasonal staffing. Software helps you schedule crews, invoice recurring work, and keep accounting aligned with long jobs.",
    heroCategoryLine:
      "Routing, recurring maintenance, and materials-heavy jobs pull stacks toward field ops, subscription invoicing, seasonal payroll, and accounting that can track job costs.",
    breadcrumbLabel: "Landscaping",
    keyTakeaways: [
      { label: "Core stack: routes, billing, crews", anchor: "#software-stack" },
      { label: "Use cases: maintenance vs design/build", anchor: "#use-cases" },
      { label: "Seasonality & job costing", anchor: "#how-to-choose" },
    ],
    categoryStackSectionTitle: "Core software stack for landscaping businesses",
    categoryStackSectionSub: "Recurring routes, projects, and crew payroll each pull different levers.",
    categoryStackIntro:
      "Profitability in landscaping is often about density on the truck and predictable recurring revenue—not only new installs. These categories map to how work gets scheduled, billed, and paid for.",
    categoryStack: [
      {
        id: "field-service",
        softwareCategory: "field-service",
        heading: "Field service & routing",
        body:
          "Route density and recurring visits decide whether crews earn or burn fuel. Field software should handle recurring templates, crew assignments, and visit notes per property. Design/build may need costing hooks and change tracking as scopes shift.",
        productSlugs: ["jobber", "workiz", "workwave-service"],
      },
      {
        id: "invoicing",
        softwareCategory: "invoicing",
        heading: "Invoicing",
        body:
          "Plans, packages, and per-visit billing create different rhythms. Tie invoicing to agreements and card-on-file for recurring residential work. Commercial grounds may need statements or progress billing—confirm the tool matches how you sell.",
        productSlugs: ["freshbooks", "zoho-invoice"],
      },
      {
        id: "payroll",
        softwareCategory: "payroll",
        heading: "Payroll",
        body:
          "Seasonal ramps and mixed subs make payroll volatile. Integrate time or scheduling to cut end-of-week surprises when headcount swings. Check onboarding friction and W-2 vs 1099 support for peak weeks.",
        productSlugs: ["gusto", "onpay"],
      },
      {
        id: "scheduling",
        softwareCategory: "scheduling",
        heading: "Scheduling",
        body:
          "Sales visits should not fight crew dispatch in one messy calendar. Dedicated scheduling books prospects, sends reminders, and gives ops predictable slots. Connect sold work to routing without retyping addresses.",
        productSlugs: ["acuity-scheduling", "setmore"],
      },
      {
        id: "accounting",
        softwareCategory: "accounting",
        heading: "Accounting",
        body:
          "Materials, subs, and multi-week jobs force job detail into accounting. Integrated invoicing and payroll clarifies month-end: COGS, labor burden, receivables. Even lean shops win when tax season is not receipt archaeology.",
        productSlugs: ["quickbooks-online", "xero"],
      },
    ],
    useCaseSectionTitle: "Best software by use case for landscaping",
    useCaseSectionSub: "Route-heavy maintenance, project-heavy installs, and payroll during peak season.",
    useCases: [
      {
        title: "Best for maintenance-route and subscription-style businesses",
        body:
          "Recurring-revenue businesses should prioritize recurring jobs, renewals, and package or contract invoicing—not only one-off tickets. Crew calendars and route density beat heavy project modules. Ensure subscription revenue syncs to accounting without manual journals.",
        links: [
          { label: "Payroll for landscaping →", href: "/payroll/best-for/landscaping" },
          { label: "Invoicing hub →", href: "/invoicing" },
        ],
      },
      {
        title: "Best for design/build and materials-heavy projects",
        body:
          "Larger installs bring deposits, change orders, and vendor bills into profitability. You need field docs and accounting that track costs to estimates—not only polished invoices. The accounting hub helps if you are outgrowing cash-basis workflows.",
        links: [{ label: "Accounting hub →", href: "/accounting" }],
      },
      {
        title: "Best for seasonal hiring and variable crews",
        body:
          "Spring spikes payroll complexity. Look for practical onboarding, time integrations, and support that gets seasonal hourly work. Avoid plans that punish short-term seat adds every peak.",
        links: [{ label: "Payroll hub →", href: "/payroll" }],
      },
      {
        title: "Best for owner-operators expanding from spreadsheets",
        body:
          "Fix scheduling and customer records first, then field service as routes grow. Analytics rarely helps if photos still go by text. Compare field tools once you know maintenance vs install-heavy.",
        links: [{ label: "Compare field service software →", href: "/field-service/compare" }],
      },
    ],
    howToChooseTitle: "How to choose software for landscaping",
    howToChooseSub: "Routes, seasonality, materials, and how you sell recurring work.",
    howToChooseSubsections: [
      {
        title: "Model seasonality in pricing and seats",
        body:
          "Model pricing and seats for ramp-up and shrinkage. Ask how contracts handle seat changes and whether integrations carry hidden sync fees.",
      },
      {
        title: "Separate routing from sales scheduling",
        body:
          "Crew routing is not prospect booking—mixing them blindly double-books estimators. Decide which system owns production vs sales calendars.",
      },
      {
        title: "Track materials and subs on jobs that need it",
        body:
          "Design/build bleeds margin when costs sit in email and subs bill late. If COGS is material, capture vendor bills to the job—or accept approximate margin.",
      },
      {
        title: "Integrate payroll once time is messy",
        body:
          "If hours live on paper or in texts, payroll integration comes next—not another marketing tool. Consistent time also improves costing.",
      },
    ],
    nextStepsTitle: "Next steps",
    nextStepsGroups: [
      {
        groupTitle: "Guides & hubs",
        links: [
          { label: "Invoicing hub", href: "/invoicing" },
          { label: "Accounting hub", href: "/accounting" },
        ],
      },
    ],
    faqTitle: "Landscaping business software FAQs",
    faqSub: "Straight answers on stacks, seasonality, and buying paths.",
    faqs: [
      {
        q: "What software do landscaping businesses use?",
        a: "Common stacks combine field service or operations tools for crews and routes with invoicing for recurring billing, payroll for seasonal labor, and accounting for materials and job costs. Scheduling tools often handle sales visits separately from production routing.",
      },
      {
        q: "What is the best landscaping software for small businesses?",
        a: "The best fit depends on whether you are route-driven maintenance, project-driven installs, or both. Small maintenance-heavy businesses often start with scheduling plus invoicing; install-heavy shops add job costing and accounting depth sooner. Compare products against your primary revenue engine, not a generic label.",
      },
      {
        q: "Do landscapers need accounting software separate from invoicing?",
        a: "Invoicing alone can work early, but materials, subs, and multi-week jobs usually push you toward real accounting for COGS, liabilities, and cleaner month-ends. Integrations between invoicing and accounting reduce duplicate entry.",
      },
      {
        q: "How should landscaping companies handle payroll for seasonal workers?",
        a: "Use payroll that makes onboarding and time capture practical at scale, and model costs for peak staffing—not only off-season headcount. Integrations with scheduling or field time reduce payroll errors when weeks get long.",
      },
      {
        q: "What features matter most in landscaping software?",
        a: "Recurring work support, crew scheduling, and mobile job notes rank high for route businesses. For install work, add estimates, change orders, and cost visibility. Accounting alignment matters once materials and vendor bills grow.",
      },
      {
        q: "Can landscaping businesses use separate tools instead of one platform?",
        a: "Yes—many do. Focus on reliable integrations between routing or field tools, invoicing, and accounting so you are not re-keying the same job data nightly.",
      },
    ],
    methodologyTitle: "How BeltStack evaluates trade software stacks",
    methodologySub: "Transparent criteria for recommendations.",
    methodologyBullets: [
      "We prioritize tools that match landscaping realities: recurring routes, seasonal labor, and materials-heavy jobs when applicable.",
      "We consider integration quality, mobile usability for crews, and total cost across peak and slow seasons.",
      "Recommendations are editorial and independent; we may earn a commission when you purchase through our links.",
    ],
  },

  "cleaning-services": {
    slug: "cleaning-services",
    seoTitle: "Software for Cleaning Businesses (2026) | BeltStack",
    metaDescription:
      "Cleaning business software: scheduling, field operations, payroll, and invoicing—flexible stack ideas and BeltStack links.",
    title: "Software for Cleaning Businesses",
    intro:
      "Cleaning companies win on reliability, routing, and easy booking. Software should reduce no-shows, standardize checklists, and make payroll and payouts straightforward for distributed teams.",
    heroCategoryLine:
      "Residential stacks often start with customer scheduling, then light field checklists, payroll as W-2 teams grow, and invoicing for recurring billing. Commercial may emphasize team scheduling and proof-of-service sooner.",
    breadcrumbLabel: "Cleaning services",
    keyTakeaways: [
      { label: "Core stack: booking through payroll", anchor: "#software-stack" },
      { label: "Use cases by growth stage", anchor: "#use-cases" },
      { label: "Workforce model drives compliance tools", anchor: "#how-to-choose" },
    ],
    categoryStackSectionTitle: "Core software stack for cleaning businesses",
    categoryStackSectionSub: "Booking and crew execution first; back office scales with headcount.",
    categoryStackIntro:
      "Cleaning stacks often emphasize scheduling first, then operations and payroll as teams grow.",
    categoryStack: [
      {
        id: "scheduling",
        softwareCategory: "scheduling",
        heading: "Scheduling & booking",
        body:
          "Customers expect online booking and reminders for recurring service. Good scheduling cuts no-shows, captures access notes, and reduces call volume for changes. With crews, add internal team scheduling so cleaners do not collide on the same window.",
        productSlugs: ["calendly", "setmore"],
      },
      {
        id: "field-service",
        softwareCategory: "field-service",
        heading: "Field service (lightweight)",
        body:
          "Even without heavy construction workflows, cleaning businesses benefit from checklists, time on site, and photo proof for quality disputes or commercial SLAs. Lightweight field tools help franchise or multi-crew operations enforce standards without turning every visit into a complex job file. Choose mobile flows cleaners will actually complete between rooms.",
        productSlugs: ["connecteam", "workiz", "jobber"],
      },
      {
        id: "payroll",
        softwareCategory: "payroll",
        heading: "Payroll",
        body:
          "Turnover and part-time shifts make manual payroll expensive. Straightforward onboarding, clear pay rules, and optional time integrations scale past a founder-led team. Contractor-heavy models need different guardrails than all W-2—buy accordingly.",
        productSlugs: ["gusto", "onpay"],
      },
      {
        id: "invoicing",
        softwareCategory: "invoicing",
        heading: "Invoicing",
        body:
          "Recurring clients need repeat billing, saved cards, and easy skips or add-ons. Invoicing should cut monthly busywork for subscription-style accounts. Commercial may need statements or per-location billing—confirm before you outgrow simple invoices.",
        productSlugs: ["wave", "freshbooks"],
      },
    ],
    useCaseSectionTitle: "Best software by use case for cleaning businesses",
    useCaseSectionSub: "From solo operators to multi-crew companies and commercial contracts.",
    useCases: [
      {
        title: "Best for growing residential maid services",
        body:
          "Automate booking, reminders, and notifications before growth means dispatchers for phone tag. Add payroll integrations when W-2 teams replace solo or informal help—rules get brittle fast. The cleaning payroll page maps products to typical hiring.",
        links: [{ label: "Payroll for cleaning businesses →", href: "/payroll/best-for/cleaning-business" }],
      },
      {
        title: "Best for owner-operators formalizing routes",
        body:
          "Moving off paper, prioritize what cleaners touch daily: mobile checklists, schedule changes, customer notes. Analytics rarely help if basics are clunky. Start with scheduling resources, then field tools when routes multiply.",
        links: [
          { label: "Scheduling hub →", href: "/scheduling" },
          { label: "Field service hub →", href: "/field-service" },
        ],
      },
      {
        title: "Best for commercial or franchise-style operations",
        body:
          "Proof of service, quality audits, and per-location reporting become selling points—not nice-to-haves. You may need stronger permissions, template libraries, and integrations to accounting for contract billing. Field service comparisons help separate lightweight tools from ops-heavy platforms.",
        links: [{ label: "Compare field service software →", href: "/field-service/compare" }],
      },
    ],
    howToChooseTitle: "How to choose software for cleaning companies",
    howToChooseSub: "Workforce model, booking channels, and how you bill recurring work.",
    howToChooseSubsections: [
      {
        title: "Contractors vs employees",
        body:
          "1099-heavy vs W-2 crews imply different compliance, onboarding, and time needs. Match payroll and ops tools to how workers are actually classified.",
      },
      {
        title: "Own the booking experience early",
        body:
          "If customers book competitors because they can schedule online, software ROI is immediate. Test the customer-facing flow ruthlessly: mobile, reminders, and reschedule policies matter as much as internal calendars.",
      },
      {
        title: "Keep quality standards portable",
        body:
          "Checklists and photos should survive handoffs so quality does not depend on one lead. Standardize packages so sales match production.",
      },
      {
        title: "Plan payroll before compliance surprises",
        body:
          "Late payroll fixes cost more than mid-tier software as headcount grows. Integrate time when shifts multiply—do not wait for an audit spiral.",
      },
    ],
    nextStepsTitle: "Next steps",
    nextStepsGroups: [
      {
        groupTitle: "Hubs",
        links: [
          { label: "Scheduling hub", href: "/scheduling" },
          { label: "Payroll hub", href: "/payroll" },
        ],
      },
    ],
    faqTitle: "Cleaning business software FAQs",
    faqSub: "Booking, crews, payroll, and what to buy first.",
    faqs: [
      {
        q: "What software do cleaning businesses use?",
        a: "Most combine scheduling and customer booking with lightweight field operations for checklists and time, plus invoicing for recurring billing. Payroll becomes important as W-2 teams replace solo operators or informal contractor arrangements.",
      },
      {
        q: "What is the best cleaning software for small businesses?",
        a: "Small businesses usually win with easy customer booking, reliable reminders, and simple crew calendars before they invest in heavy analytics. Add field documentation when quality variance or commercial SLAs appear. Scenario pages help match products to how you staff and bill.",
      },
      {
        q: "Do cleaning companies need field service software?",
        a: "Not always full-scale field service on day one, but many benefit from lightweight job or visit records: checklists, photos, and time on site. Commercial or franchise operations often need stronger proof-of-service and permissions than solo residential routes.",
      },
      {
        q: "When should a cleaning business add payroll software?",
        a: "Add payroll when you have multiple employees, recurring pay cycles, or any complexity beyond occasional contractor payouts. If you are spending hours on taxes and corrections weekly, integration beats spreadsheets.",
      },
      {
        q: "What features matter most for cleaning company software?",
        a: "Customer self-booking, automated reminders, and crew scheduling rank high for residential models. Invoicing with recurring charges and saved payments matters for subscriptions. For growth, add mobile workflows your teams will actually use between jobs.",
      },
      {
        q: "Can cleaning businesses use separate tools instead of one platform?",
        a: "Yes—many stitch together scheduling, payments, and payroll. The key is reducing duplicate customer data entry between booking, billing, and payroll systems.",
      },
    ],
    methodologyTitle: "How BeltStack evaluates trade software stacks",
    methodologySub: "Transparent criteria for recommendations.",
    methodologyBullets: [
      "We prioritize tools that match cleaning operations: booking reliability, crew coordination, and straightforward payroll as teams grow.",
      "We weigh ease of adoption for distributed workers and total cost as headcount fluctuates.",
      "Recommendations are editorial and independent; we may earn a commission when you purchase through our links.",
    ],
  },

  /** Example of a non–field-service-first stack (POS-heavy). */
  restaurants: {
    slug: "restaurants",
    seoTitle: "Software for Restaurants (2026) | BeltStack",
    metaDescription:
      "Restaurant software ecosystem: POS, payroll, scheduling, and accounting—how categories fit together with BeltStack picks and links.",
    title: "Software for Restaurants",
    intro:
      "Restaurants run on tight shifts, inventory movement, and thin margins. The right stack connects the register, payroll, and back-office so sales, labor, and COGS stay aligned.",
    heroCategoryLine:
      "Typical stacks emphasize POS and payroll, then scheduling and accounting—field service tools are usually irrelevant here unless you also run logistics-heavy catering or equipment install crews.",
    breadcrumbLabel: "Restaurants",
    keyTakeaways: [
      { label: "Restaurant stack overview", anchor: "#software-stack" },
      { label: "Use cases: quick service vs full service", anchor: "#use-cases" },
      { label: "Labor, tips, and prime cost", anchor: "#how-to-choose" },
    ],
    categoryStackSectionTitle: "Core software stack for restaurants",
    categoryStackSectionSub: "A different category mix than home services—POS-first, not dispatch-first.",
    categoryStackIntro:
      "Restaurant operations center on the guest transaction, then labor compliance and financial visibility. These categories mirror how money and hours move through the business.",
    categoryStack: [
      {
        id: "pos",
        softwareCategory: "pos",
        heading: "POS & payments",
        body:
          "The POS runs orders, tabs, kitchen timing, and often live inventory. Quick service needs speed, modifiers, drive-thru or kiosk flows; full service needs tables, coursing, splits. Check offline behavior, hardware, and whether online ordering is native or bolted on—gaps show Friday night, not in slides.",
        productSlugs: ["square-pos", "toast-pos"],
      },
      {
        id: "payroll",
        softwareCategory: "payroll",
        heading: "Payroll & tips",
        body:
          "Tipped wages, pools, roles, and split shifts create risk when systems disagree. Strong restaurant payroll ties to time, matches your tip policy, and reports what accounting needs. Before buying, map who earns tips, how pools work, and whether scheduling feeds pay.",
        productSlugs: ["gusto", "adp"],
      },
      {
        id: "scheduling",
        softwareCategory: "scheduling",
        heading: "Team scheduling",
        body:
          "Labor is one of the few costs you can adjust daily—scheduling ties forecasted covers to actual clock-ins. Tools that integrate with POS or payroll reduce double entry and help you spot understaffing before service breaks down. Even if you start with simple shift templates, plan for compliance rules (breaks, minors where applicable) as you scale locations or hours.",
        productSlugs: ["calendly", "simplybookme"],
      },
      {
        id: "accounting",
        softwareCategory: "accounting",
        heading: "Accounting",
        body:
          "Prime cost needs food, labor, and sales in the same rhythm—not only after month-end. Accounting that imports POS and payroll helps cash, vendors, and thin weeks. Multi-site: ask about consolidated reporting and inter-store transfers before the chart of accounts breaks.",
        productSlugs: ["quickbooks-online", "xero"],
      },
    ],
    useCaseSectionTitle: "Best software by use case for restaurants",
    useCaseSectionSub: "Throughput, tipped payroll, and multi-location operations need different emphasis.",
    useCases: [
      {
        title: "Best for quick service and high throughput",
        body:
          "Speed and simple training beat fancy tables when lines stack. Stress-test modifiers, refunds, and peak card processing—hardware matters as much as software. The POS hub and restaurant guide match vendors to counter service, not full-service demos.",
        links: [
          { label: "POS hub →", href: "/pos" },
          { label: "Restaurant POS guide →", href: "/pos/guides/restaurant-pos-systems-guide" },
        ],
      },
      {
        title: "Best payroll fit for restaurants",
        body:
          "Tips, variable hours, and churn reward payroll built for hospitality—not generic SMB. Integrate POS and scheduling so tips and hours are not re-keyed overnight. The restaurant payroll scenario ties picks to common labor patterns.",
        links: [
          { label: "Payroll for restaurants →", href: "/payroll/best-for/restaurants" },
          { label: "Payroll hub →", href: "/payroll" },
        ],
      },
      {
        title: "Best for full-service dining and complex floors",
        body:
          "Tables, coursing, and bar tabs tie to tips and kitchen timing. Weak floor tools drive voids and comps. Compare POS once you know your model—many products target a different concept.",
        links: [{ label: "Compare POS software →", href: "/pos/compare" }],
      },
      {
        title: "Best for multi-location or franchise groups",
        body:
          "Standardize menus, permissions, and reporting before advanced analytics. Enterprise POS pricing and add-ons surprise fast—model per location with online ordering and loyalty. Comparisons show scale features vs lean setups.",
        links: [
          {
            label: "Toast vs Square",
            href: "/pos/compare/toast-pos-vs-square-pos",
          },
        ],
      },
    ],
    howToChooseTitle: "How to choose restaurant software",
    howToChooseSub: "POS flow, labor compliance, and financial visibility—not generic feature checklists.",
    howToChooseSubsections: [
      {
        title: "Prime cost visibility",
        body:
          "Connect sales, labor, and food costs deliberately: your POS, scheduling, payroll, and accounting choices should reduce Friday-night spreadsheet surgery. If you cannot see labor as a percent of sales weekly, fix data plumbing before buying another dashboard.",
      },
      {
        title: "Match POS to service model",
        body:
          "Counter, full service, bars, and ghost kitchens stress different POS modules. Buy for today’s guest journey plus one realistic growth case—not every hypothetical expansion.",
      },
      {
        title: "Coordinate scheduling with payroll reality",
        body:
          "Schedules that never match clock-ins create wage and hour risk. Prefer integrations that move approved hours into payroll, especially where overtime and tips intersect.",
      },
      {
        title: "Plan inventory and COGS as you scale",
        body:
          "Lean ops can delay deep inventory; multi-site rarely can. Decide when recipe costing and vendor bills live in accounting vs POS—avoid duplicate item masters.",
      },
    ],
    identitySectionTitle: "Restaurant software by concept",
    identitySegments: [
      {
        title: "Full service",
        body:
          "Floors, coursing, bar tabs, and tips make POS strategic. Servers should focus on guests, not the check. The restaurant POS guide covers table-service evaluation.",
        links: [{ label: "Restaurant POS guide →", href: "/pos/guides/restaurant-pos-systems-guide" }],
      },
      {
        title: "Multi-location",
        body:
          "Standardize menus, pricing, and reporting before loyalty—or locations drift. Watch enterprise POS pricing, per-location fees, and online-ordering add-ons; bills scale faster than headcount.",
        links: [{ label: "Compare POS software", href: "/pos/compare" }],
      },
    ],
    nextStepsTitle: "Next steps",
    nextStepsGroups: [
      {
        groupTitle: "Comparisons",
        links: [
          {
            label: "Toast vs Square",
            href: "/pos/compare/toast-pos-vs-square-pos",
          },
        ],
      },
      {
        groupTitle: "Hubs",
        links: [
          { label: "POS hub", href: "/pos" },
          { label: "Payroll hub", href: "/payroll" },
        ],
      },
    ],
    faqTitle: "Restaurant software FAQs",
    faqSub: "POS, payroll, and what most operators get wrong when buying.",
    faqs: [
      {
        q: "What software do restaurants typically use?",
        a: "Most run a POS at the center of orders and payments, payroll for hourly and tipped teams, scheduling for shifts, and accounting for bills, COGS, and financial reporting. Online ordering and loyalty may live inside the POS or adjacent tools depending on concept.",
      },
      {
        q: "Do restaurants need field service software?",
        a: "Usually no—unless you also run installation, large-scale catering logistics, or routes that resemble truck dispatch. Most restaurants prioritize POS, payroll, and scheduling; accounting becomes critical as prime cost discipline tightens.",
      },
      {
        q: "What is the best restaurant software for small businesses?",
        a: "Fit depends on service model, locations, and how tips and split shifts hit payroll. Quick service often needs simple training and reliable hardware; full service needs stronger tables and tips. Use comparisons and scenarios—not one brand name.",
      },
      {
        q: "Do restaurants need separate POS and accounting systems?",
        a: "Often yes. POS systems excel at orders, payments, and often inventory; accounting systems handle financial statements, vendor bills, and tax workflows. Integrations between them keep daily sales and labor aligned with the books.",
      },
      {
        q: "What features matter most in restaurant payroll software?",
        a: "Tipped wage support, time integrations, role-based pay rates, and clear reporting for compliance matter most. Scheduling handoffs reduce errors when overtime and tips interact. Evaluate support quality—you will have edge cases.",
      },
      {
        q: "Can restaurants use separate tools instead of one vendor suite?",
        a: "Yes. Many operators combine POS, payroll, and accounting from different vendors when integrations are solid. The risk is data fragmentation; prioritize clean flows from sales and labor into payroll and books over brand consolidation.",
      },
    ],
    methodologyTitle: "How BeltStack evaluates trade software stacks",
    methodologySub: "Transparent criteria for recommendations.",
    methodologyBullets: [
      "We prioritize tools that match restaurant operations: front-of-house flows, tipped payroll complexity, and financial visibility.",
      "We consider integration quality, hardware fit, and total cost across locations and add-ons.",
      "Recommendations are editorial and independent; we may earn a commission when you purchase through our links.",
    ],
  },
};

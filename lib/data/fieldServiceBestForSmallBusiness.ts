import { buildFieldServiceTradeProps } from "@/lib/data/fieldServiceBestForCore";

const E = (heading: string, body: string) => ({ heading, body });

export const SMALL_BUSINESS_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "small-business",
  title: "Best Field Service Software for Small Businesses (2026)",
  subtitle:
    "Compare field service tools for small service businesses: modern scheduling, dispatch, invoicing, and customer history without enterprise implementation timelines.",
  introParagraph:
    "Small service businesses—cleaning, trades, lawn care, and local repair—usually outgrow paper calendars when missed callbacks start costing real money. Field service management software gives lean teams one place for the schedule, job notes, and invoices so owners see the day clearly without juggling five apps.",
  picks: [
    {
      slug: "jobber",
      badge: "Best overall for most small field teams",
      description:
        "All-in-one FSM that balances power and ease of use—quotes, jobs, scheduling, and invoicing in one workflow.",
      rowBestFor: "Most small service businesses",
      why:
        "Jobber is our default recommendation for small service businesses that want one approachable system for quotes, dispatch, and invoicing without enterprise drag. During a trial, import a week of real jobs, test mobile completion flows your techs will actually use, and confirm accounting sync if you live in QuickBooks or Xero. Jobber shines when you need structure fast—not another six-month project.",
    },
    {
      slug: "kickserv",
      badge: "Best CRM-style fit for relationship-heavy shops",
      description:
        "Customer-centric job tracking with lighter complexity—helpful when repeat work and follow-ups drive revenue.",
      rowBestFor: "Small teams prioritizing customer history",
      why:
        "Kickserv fits small field businesses that think in customers first—tracking notes, follow-ups, and recurring visits—when you do not yet need heavy dispatch analytics. Evaluate how quickly you can spin up a return job, whether tags help segment commercial versus residential, and if pricing matches seasonal headcount swings. Kickserv is a strong bridge off spreadsheets for owner-operators.",
    },
    {
      slug: "workiz",
      badge: "Best budget option for schedule-first crews",
      description:
        "Affordable boards and mobile workflows when every truck needs visibility but software spend must stay lean.",
      rowBestFor: "Price-sensitive growing crews",
      why:
        "Workiz appeals to small businesses that need reliable scheduling, dispatch statuses, and field payments at a lower entry price. Stack a busy day in trial: move jobs, add a same-day emergency, and collect card payments before techs leave. Workiz is the pick when margin is tight but operational chaos is tighter.",
    },
  ],
  editorialGuidance: [
    E(
      "Start with one workflow",
      "Pick the first process to digitize—usually schedule-to-invoice—and resist boiling the ocean on week one."
    ),
    E(
      "Mobile adoption beats feature checklists",
      "The best software is the one techs open in the driveway. If they hate the app, your office inherits double entry."
    ),
    E(
      "Integrations with accounting",
      "Confirm how jobs map to invoices and payments before you promise your bookkeeper a clean month-end."
    ),
    E(
      "Room to grow",
      "Choose a platform you can grow into for two to three years—not just this season’s headcount.",
    ),
  ],
  extraGuides: [{ label: "Field service software for small business (guide)", href: "/field-service/guides/field-service-software-for-small-business" }],
  faqItems: [
    {
      q: "What is the best field service software for a small business?",
      a: "Small service teams often compare Jobber for all-in-one workflows, Kickserv for CRM-style customer tracking, and Workiz for affordable scheduling and dispatch. The best fit is the tool your office and techs will adopt—validate in a trial with real jobs.",
    },
    {
      q: "How much does field service software cost for small businesses?",
      a: "Entry pricing varies by seats and features; use vendor sites for current tiers. Compare total cost at your crew size, not just the base monthly fee.",
    },
    {
      q: "Can small businesses use the same tools as large contractors?",
      a: "They can, but heavier platforms may add admin work you do not need yet. Start with tools sized to your call volume and reporting needs.",
    },
  ],
});

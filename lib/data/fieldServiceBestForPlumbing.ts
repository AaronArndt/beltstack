import { buildFieldServiceTradeProps } from "@/lib/data/fieldServiceBestForCore";

const E = (heading: string, body: string) => ({ heading, body });

export const PLUMBING_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "plumbing",
  title: "Best Field Service Software for Plumbing Companies (2026)",
  subtitle:
    "Compare field service management tools for plumbing businesses: emergency dispatch, service agreements, estimates, invoices, and customer history—without re-keying every ticket.",
  introParagraph:
    "Plumbing companies juggle planned work, emergency calls, and repeat customers on the same trucks. Field service management (FSM) software gives you one system to schedule jobs, dispatch plumbers, track job details, and send invoices—so you replace paper work orders and scattered group texts with a single job story per property.",
  picks: [
    {
      slug: "service-fusion",
      badge: "Best mid-market fit for plumbing & HVAC-style ops",
      description:
        "Trade-aware dispatch, agreements, and invoicing for shops that have outgrown lightweight apps but are not ready for full enterprise rollout.",
      rowBestFor: "Multi-truck plumbing & service agreements",
      standoutFeature: "Strong dispatch and agreement support",
      why:
        "Service Fusion is a strong field service choice for plumbing companies that want HVAC-adjacent depth—recurring maintenance, dispatch boards, and invoicing—without ServiceTitan-scale overhead. During a trial, model drain calls versus water heater replacements with different durations, sync test invoices to QuickBooks if your bookkeeper requires job-level tags, and confirm mobile photo workflows on slab leaks. Service Fusion fits plumbers who sell memberships and care about agreement compliance reporting.",
    },
    {
      slug: "jobber",
      badge: "Best all-in-one for most plumbing contractors",
      description:
        "Quotes, jobs, scheduling, and invoicing in one workflow—ideal when you want one customer record from estimate to payment.",
      rowBestFor: "Residential & light commercial plumbing",
      why:
        "Jobber remains a top field service pick for plumbing shops that need emergency inserts, multi-plumber dispatch, and quote-to-invoice continuity without drowning the office in configuration. During a trial, stack same-day callbacks against booked installs, attach photos on warranty calls, and validate arrival-window texts your dispatchers will actually send. Check accounting integration if AP expects clean job references. Jobber scales from two-truck residential crews to light commercial without forcing an immediate enterprise FSM.",
    },
    {
      slug: "kickserv",
      badge: "Best CRM-forward option for smaller plumbing shops",
      description:
        "Job and customer history in a lighter CRM-style workflow—helpful when your bottleneck is follow-up and repeat work, not enterprise analytics.",
      rowBestFor: "Small teams prioritizing customer records",
      standoutFeature: "CRM-style customer tracking",
      why:
        "Kickserv suits plumbing businesses that want structured customer histories and simple job workflows while keeping monthly cost predictable. Evaluate how fast techs can create a return-visit job, whether tags help you segment commercial accounts, and if payment capture matches how crews close tickets. Kickserv is a practical step up from spreadsheets when relationship data matters as much as the dispatch grid.",
    },
  ],
  editorialGuidance: [
    E(
      "Why plumbers adopt field service software",
      "FSM tools win when memory and shared calendars break under call volume. One schedule, one job file, and one invoice path reduce double booking and lost billable work."
    ),
    E(
      "Dispatch for mixed plumbing work",
      "You need drag-and-drop boards that accept emergency slots, after-hours premiums, and multi-tech jobs without rebuilding the week. Test realistic Tuesday peaks in every trial."
    ),
    E(
      "Estimates, change orders, and invoices",
      "The best plumbing FSM keeps line items connected from estimate to invoice so change orders on hidden rot stay documented and billable."
    ),
    E(
      "Customer and property history",
      "Repeat customers and property managers expect you to know past jetting, water heater age, and warranty notes before you ring the bell."
    ),
  ],
  extraGuides: [
    { label: "Field service software for plumbing businesses", href: "/field-service/guides/field-service-software-for-plumbing" },
  ],
  faqItems: [
    {
      q: "What software do plumbing companies use to manage jobs?",
      a: "Plumbing companies often evaluate Service Fusion for mid-market trade workflows, Jobber for all-in-one jobs and invoicing, and Kickserv for CRM-forward job tracking. The best fit depends on crew size, how much recurring agreement work you sell, and whether you prioritize dispatch depth or customer-record discipline.",
    },
    {
      q: "Do plumbing tools include scheduling and invoicing?",
      a: "Yes. Modern field service platforms combine scheduling, dispatch, estimates, invoices, and payments so you can dispatch a plumber and close billing without re-keying details.",
    },
    {
      q: "Which field service software is best for small plumbing teams?",
      a: "Small teams often start with Jobber or Kickserv; shops pushing into service agreements and heavier dispatch may add Service Fusion to the shortlist. Run a trial on your busiest week before you commit.",
    },
  ],
});

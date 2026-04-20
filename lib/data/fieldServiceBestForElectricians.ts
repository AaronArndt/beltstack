import { buildFieldServiceTradeProps } from "@/lib/data/fieldServiceBestForCore";

const E = (heading: string, body: string) => ({ heading, body });

export const ELECTRICIANS_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "electricians",
  title: "Best Field Service Software for Electricians (2026)",
  subtitle:
    "Compare field service platforms for electrical contractors: dispatch boards, estimates, code-aware documentation, and invoicing that works from the van.",
  introParagraph:
    "Electrical contractors need field service software that keeps jobs, crews, and invoices aligned—without forcing industrial-scale ERP on a ten-person shop. The right FSM platform gives electricians one place for service calls, panel upgrades, and repeat commercial work so details do not scatter across notebooks and texts.",
  picks: [
    {
      slug: "fieldpulse",
      badge: "Best for dispatch-heavy electrical ops",
      description:
        "Operations-focused FSM when you run multiple trucks and need dispatch depth, job visibility, and structured field workflows.",
      rowBestFor: "Multi-truck & commercial-light electrical",
      standoutFeature: "Dispatch depth for growing electrical shops",
      why:
        "FieldPulse fits electrical contractors whose bottleneck is dispatch and job execution—not just a calendar—when you run several crews and need consistent status updates from the field. In a trial, route panel upgrades versus quick service calls with different skill tags, stress-test mobile photo notes for inspections, and confirm reporting your lead tech actually opens weekly. FieldPulse earns its place when operational visibility matters as much as homeowner texting.",
    },
    {
      slug: "jobber",
      badge: "Best all-around for residential electrical",
      description:
        "Quotes, scheduling, and invoicing in one system with a strong mobile app—ideal for mixed service and project work.",
      rowBestFor: "Most small and mid-size electrical shops",
      why:
        "Jobber is a reliable default for electricians who need structured jobs, signed quotes on mobile, and recurring inspection visits for property managers. During evaluation, build estimate templates for EV chargers and service upgrades, attach photos for warranty claims, and sync invoices to accounting with the GL mapping your CPA expects. Jobber balances usability for techs with clarity for the office.",
    },
    {
      slug: "workiz",
      badge: "Best value for lean electrical crews",
      description:
        "Affordable scheduling and dispatch with fast invoicing—strong when margins on small service calls are tight.",
      rowBestFor: "Budget-focused teams scaling off paper",
      why:
        "Workiz appeals to electrical shops that need dependable boards, job notes, and card payments without premium per-seat pricing. Pilot a peak week: stack emergency calls into booked installs, capture change-order line items before techs leave, and export jobs for payroll if you pay by ticket. Workiz is the pragmatic on-ramp when spreadsheets are still your system of record.",
    },
  ],
  editorialGuidance: [
    E(
      "Job types and repeat work",
      "Electricians mix quick service calls, multi-hour installs, and emergency coverage. FSM should show capacity and skill fit—not just a list of names."
    ),
    E(
      "Safety and documentation",
      "Photos and notes for panels, GFCI faults, and inspection sign-offs belong on the job record for liability and warranty follow-through."
    ),
    E(
      "Residential vs commercial electrical",
      "Residential-heavy teams may prioritize customer texting; commercial-heavy teams may prioritize job costing exports—match software to where most revenue lives today."
    ),
  ],
  extraGuides: [
    { label: "Field service software for small business", href: "/field-service/guides/field-service-software-for-small-business" },
  ],
  faqItems: [
    {
      q: "What field service software is best for electricians?",
      a: "Electrical contractors often shortlist FieldPulse for dispatch-heavy operations, Jobber for all-in-one jobs and invoicing, and Workiz for affordable scheduling and field billing. Trial with your real job mix—including emergency inserts—before you standardize.",
    },
    {
      q: "Do electrician tools include scheduling and invoicing?",
      a: "Yes. Leading FSM platforms combine scheduling, estimates, invoices, and payments so techs can close tickets from the field.",
    },
    {
      q: "Do these tools work for both residential and commercial electrical work?",
      a: "They commonly support both, though very large commercial or industrial jobs may eventually pair FSM with heavier project or estimating systems. Start with your typical week in a trial.",
    },
  ],
});

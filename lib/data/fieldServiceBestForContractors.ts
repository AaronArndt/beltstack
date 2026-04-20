import { buildFieldServiceTradeProps } from "@/lib/data/fieldServiceBestForCore";

const E = (heading: string, body: string) => ({ heading, body });

export const CONTRACTORS_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "general-contractors",
  title: "Best Field Service Software for General Contractors (2026)",
  subtitle:
    "Compare field service and operations platforms for general contractors: mixed-trade scheduling, job costing hooks, change documentation, and invoicing across crews.",
  introParagraph:
    "General contractors coordinating plumbing, HVAC, electrical, and finish trades need visibility across jobs—not five disconnected calendars. Field service and trade-operations platforms help GCs track work orders, crew assignments, estimates, and billing so owners and supers share one operational story per site.",
  picks: [
    {
      slug: "simpro",
      badge: "Best for multi-trade job + project execution",
      description:
        "Jobs, projects, inventory, and field workflows together—built for contractors who outgrow generic calendars but need more than homeowner texting.",
      rowBestFor: "Mixed-trade GCs with complex jobs",
      standoutFeature: "Jobs, inventory, and field execution",
      why:
        "Simpro fits general contractors running structured jobs with materials, labor sections, and field updates that must roll up to the office. During a trial, model a kitchen remodel with multiple trades, track change orders against the same job, and confirm reporting your PM trusts weekly. Budget implementation time—Simpro rewards disciplined setup. It shines when job files, not just appointments, drive your business.",
    },
    {
      slug: "buildops",
      badge: "Best for commercial mechanical & construction-adjacent GCs",
      description:
        "Commercial field operations when inspections, SLAs, and mechanical workflows matter as much as residential polish.",
      rowBestFor: "Commercial GC & mechanical-heavy work",
      standoutFeature: "Commercial mechanical operations",
      why:
        "BuildOps targets contractors and mechanical shops where commercial workflows—documentation, compliance-friendly job records, and multi-site visibility—matter. Pilot one active project: attach site photos, log vendor visits, and test how supers update job status from the field. BuildOps is the pick when your jobs look like operations programs, not single-day truck rolls.",
    },
    {
      slug: "jobber",
      badge: "Best approachable all-in-one for residential GCs",
      description:
        "Scheduling, customer comms, quotes, and invoicing in one approachable stack—ideal for mixed-trade residential contractors not ready for heavy ERP.",
      rowBestFor: "Residential GCs & design-build light",
      why:
        "Jobber remains the practical default for many general contractors who need one FSM for estimates, scheduling, and invoices across trades without a six-month deployment. Trial mixed job types on one board, test deposit and progress billing on longer projects, and validate integrations with QuickBooks or Xero. Jobber wins when adoption speed and unified customer history beat maximum configurability.",
    },
  ],
  editorialGuidance: [
    E(
      "Running multiple trades in one system",
      "Tag jobs by trade, standardize templates per service line, and keep one customer record so supers do not chase five spreadsheets per homeowner."
    ),
    E(
      "Change orders and approvals",
      "GC profitability lives in documented changes—photos, revised line items, and signatures should stay attached to the job file."
    ),
    E(
      "Knowing which lines of business pay",
      "Even lightweight job revenue reports help you decide whether to grow electrical versus trim versus handyman routes."
    ),
  ],
  extraGuides: [
    { label: "Field service software pricing guide", href: "/field-service/guides/field-service-software-pricing-guide" },
  ],
  faqItems: [
    {
      q: "What is the best field service software for general contractors?",
      a: "General contractors often evaluate Simpro for job-and-inventory-heavy workflows, BuildOps for commercial mechanical operations, and Jobber for approachable all-in-one scheduling and billing across trades. Choose based on whether your jobs behave like structured projects or coordinated truck rolls.",
    },
    {
      q: "Can one platform support multiple trades?",
      a: "Yes—configure job types, templates, and permissions so each trade’s workflow stays consistent without splitting into separate systems.",
    },
    {
      q: "When should a GC look past lighter FSM tools?",
      a: "When you need deep job costing, inventory discipline, or commercial documentation, platforms like Simpro or BuildOps often earn their complexity. Residential-focused GCs may still thrive on Jobber with tight processes.",
    },
  ],
});

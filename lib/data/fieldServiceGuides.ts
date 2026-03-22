export type FieldServiceGuideEntry = { title: string; href: string; description: string };

/**
 * Educational / informational guides (evaluation, pricing, concepts)—not trade “best picks.”
 * Trade-specific product angles live under /field-service/best-for/ and the hub business-type section.
 */
export const FIELD_SERVICE_GUIDES: FieldServiceGuideEntry[] = [
  {
    title: "How to Choose Field Service Management Software",
    href: "/field-service/guides/how-to-choose-field-service-software",
    description:
      "A structured way to compare tools: scheduling, dispatch, mobile apps, invoicing, and total cost—plus common mistakes teams make when they buy too much or too little.",
  },
  {
    title: "Field Service Software Pricing Explained",
    href: "/field-service/guides/field-service-software-pricing-guide",
    description:
      "How FSM pricing is structured—per tech vs per user, add-ons, implementation—and how to estimate what you will actually pay at your headcount.",
  },
  {
    title: "FSM vs CRM: What to Use Where",
    href: "/field-service/guides/field-service-software-vs-crm",
    description:
      "Where field service platforms end and CRM begins, how overlap works in practice, and how service businesses combine both without duplicate data entry.",
  },
  {
    title: "When Small Service Businesses Should Adopt FSM Software",
    href: "/field-service/guides/field-service-software-for-small-business",
    description:
      "Signs you have outgrown spreadsheets, what to automate first, and how to keep scope manageable so a small crew can actually adopt the tool.",
  },
  {
    title: "HVAC: Scheduling, Maintenance Agreements & Software Fit",
    href: "/field-service/guides/field-service-software-for-hvac",
    description:
      "How seasonal demand and recurring service agreements shape what HVAC teams need from scheduling, dispatch, and customer history—not a product list.",
  },
  {
    title: "Plumbing: Dispatch, Estimates & Field Workflow Basics",
    href: "/field-service/guides/field-service-software-for-plumbing",
    description:
      "What plumbing operations usually need from estimates through invoicing, and how to evaluate features without getting lost in generic marketing claims.",
  },
];

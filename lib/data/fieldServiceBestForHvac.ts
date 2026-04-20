import { buildFieldServiceTradeProps } from "@/lib/data/fieldServiceBestForCore";

const E = (heading: string, body: string) => ({ heading, body });

export const HVAC_PAGE_PROPS = buildFieldServiceTradeProps({
  useCase: "hvac",
  title: "Best Field Service Software for HVAC Businesses (2026)",
  subtitle:
    "Compare field service tools for HVAC contractors: dispatch, maintenance agreements, installs, memberships, and emergency calls in one operational system.",
  introParagraph:
    "HVAC companies run seasonal peaks, recurring tune-ups, and emergency calls through the same fleet. Field service software keeps maintenance agreements, dispatch boards, and invoicing connected so techs see equipment history, the office sees capacity, and customers get accurate arrival windows—not voicemail roulette.",
  picks: [
    {
      slug: "housecall-pro",
      badge: "Best for residential HVAC growth",
      description:
        "Home-service FSM with strong customer texting, booking, and payments—ideal when inbound leads and reviews drive revenue.",
      rowBestFor: "Residential HVAC & light commercial",
      why:
        "Housecall Pro fits residential HVAC teams that need dispatch, customer texting, online booking, and payment capture without a ServiceTitan-scale implementation—ideal when you run a handful of trucks and compete on speed-to-lead. During a trial, separate tune-up versus diagnostic versus install job types with realistic durations, test on-my-way messages for tight windows, and validate membership billing if recurring revenue anchors your model. Housecall Pro balances homeowner experience with operator simplicity.",
    },
    {
      slug: "servicetitan",
      badge: "Best for high-volume HVAC enterprises",
      description:
        "Enterprise FSM with deep dispatch, pricebooks, memberships, and analytics—built for call centers and multi-branch operators.",
      rowBestFor: "Large multi-truck & call-center HVAC",
      standoutFeature: "Deep dispatch, memberships, analytics",
      why:
        "ServiceTitan suits larger HVAC operators with call centers, aggressive membership programs, and pricebooks that need governance—where revenue-per-technician reporting justifies premium spend and dedicated admins. In a pilot, load your real pricebook, run membership renewals through automation, and stress-test peak-season dispatch. Budget implementation partners; half-configured Titan wastes money. This is enterprise FSM for shops ready to operate like chains.",
    },
    {
      slug: "service-fusion",
      badge: "Best mid-market value for HVAC workflows",
      description:
        "Strong dispatch, agreements, and invoicing for HVAC and plumbing teams that want trade depth without full enterprise complexity.",
      rowBestFor: "Mid-market HVAC scaling past light FSM",
      why:
        "Service Fusion targets mid-market HVAC companies that outgrew lightweight tools but want robust agreements, dispatch, and invoicing at lower complexity than Titan-class platforms. During a trial, model maintenance plans with seasonal visit generation, sync invoices to accounting, and confirm mobile workflows for photo-heavy diagnostics. Service Fusion is the pragmatic middle when you need depth without a year-long rollout.",
    },
  ],
  editorialGuidance: [
    E(
      "Dispatching around peaks and emergencies",
      "HVAC schedules spike in summer and winter; boards should show maintenance capacity while accepting urgent no-heat calls without erasing the day."
    ),
    E(
      "Memberships and maintenance agreements",
      "Your FSM should track plan status, equipment assets, and seasonally generated visits so renewals are not rebuilt from scratch each year."
    ),
    E(
      "Call-center and sales workflows",
      "Larger HVAC shops need disciplined lead handling; lighter teams may prioritize homeowner texting instead—match software to how you actually sell."
    ),
    E(
      "Tech experience and upsells",
      "Technicians should see equipment history, capture photos, and present options from the truck—especially on replacement-sized tickets."
    ),
  ],
  extraGuides: [{ label: "Field service software for HVAC companies", href: "/field-service/guides/field-service-software-for-hvac" }],
  faqItems: [
    {
      q: "What is the best HVAC scheduling and field service software?",
      a: "Residential and light commercial HVAC teams often shortlist Housecall Pro for customer experience and approachable dispatch, ServiceTitan for enterprise-scale operations and analytics, and Service Fusion for mid-market trade workflows and agreements. Trial with your real peak-week volume.",
    },
    {
      q: "Do HVAC field service tools integrate with accounting software?",
      a: "Yes—most platforms integrate with QuickBooks or Xero so invoices and payments flow into your books. Confirm GL and job-tagging rules with your accountant before go-live.",
    },
    {
      q: "When does ServiceTitan make sense over lighter tools?",
      a: "ServiceTitan tends to fit when you run many techs, a busy call center, and membership programs that need rigorous pricebook and reporting discipline—plus staff who will adopt it fully.",
    },
  ],
});

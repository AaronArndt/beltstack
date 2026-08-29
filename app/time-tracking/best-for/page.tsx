import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";

const SCENARIOS = [
  {
    label: "Best Time Tracking Software (2026)",
    href: "/time-tracking/best-time-tracking-software",
    description: "Our full rankings of the best time tracking tools for small businesses, freelancers, and teams.",
  },
  {
    label: "Best Time Tracking Software for Freelancers (2026)",
    href: "/time-tracking/best-for/freelancers",
    description: "Time tracking tools that make it easy to log billable hours and invoice clients.",
  },
  {
    label: "Best Time Tracking Software for Agencies (2026)",
    href: "/time-tracking/best-for/agencies",
    description: "Track time across clients and projects, manage utilization, and keep retainers on budget.",
  },
  {
    label: "Best Time Tracking Software for Consultants (2026)",
    href: "/time-tracking/best-for/consultants",
    description: "Support service billing, retainers, and clear client reporting.",
  },
  {
    label: "Best Time Tracking Software for Small Businesses (2026)",
    href: "/time-tracking/best-for/small-business",
    description: "Simple, affordable tools that fit small teams and mixed roles.",
  },
  {
    label: "Best Time Tracking Software for Remote Teams (2026)",
    href: "/time-tracking/best-for/remote-teams",
    description: "Time tracking and monitoring options for distributed and field teams.",
  },
  {
    label: "Best Time Tracking Software for HVAC Businesses (2026)",
    href: "/time-tracking/best-for/hvac",
    description: "Mobile clocks, GPS verification, and payroll-ready reports for HVAC crews.",
  },
  {
    label: "Best Time Tracking Software for Plumbing Companies (2026)",
    href: "/time-tracking/best-for/plumbing",
    description: "Track emergency and scheduled plumbing labor with cleaner payroll workflows.",
  },
  {
    label: "Best Time Tracking Software for Electricians (2026)",
    href: "/time-tracking/best-for/electricians",
    description: "Field-friendly time tracking for service calls and electrical project labor.",
  },
  {
    label: "Best Time Tracking Software for Painting Contractors (2026)",
    href: "/time-tracking/best-for/painting",
    description: "Crew timesheets and project phase tracking for painting teams.",
  },
  {
    label: "Best Time Tracking Software for Roofing Companies (2026)",
    href: "/time-tracking/best-for/roofing",
    description: "GPS-enabled crew tracking for roofing job sites and storm workloads.",
  },
  {
    label: "Best Time Tracking Software for General Contractors (2026)",
    href: "/time-tracking/best-for/general-contractors",
    description: "Project labor tracking across multiple sites, crews, and supervisors.",
  },
  {
    label: "Best Time Tracking Software for Landscaping Companies (2026)",
    href: "/time-tracking/best-for/landscaping",
    description: "Route and project labor visibility for landscaping teams.",
  },
  {
    label: "Best Time Tracking Software for Construction Companies (2026)",
    href: "/time-tracking/best-for/construction",
    description: "Field labor reporting, cost-code alignment, and payroll-ready timesheets.",
  },
  {
    label: "Best Time Tracking Software for Remodeling Businesses (2026)",
    href: "/time-tracking/best-for/remodeling",
    description: "Project-phase labor tracking for remodel crews and subcontracted work.",
  },
  {
    label: "Best Time Tracking Software for Handyman Businesses (2026)",
    href: "/time-tracking/best-for/handyman",
    description: "Simple and affordable mobile timesheets for handyman teams.",
  },
  {
    label: "Best Time Tracking Software for Property Management Companies (2026)",
    href: "/time-tracking/best-for/property-management",
    description: "Track maintenance and inspection labor by property and portfolio.",
  },
  {
    label: "Best Time Tracking Software for Pest Control Businesses (2026)",
    href: "/time-tracking/best-for/pest-control",
    description: "Route technician tracking and payroll support for pest control operations.",
  },
  {
    label: "Best Time Tracking Software for Pool Service Companies (2026)",
    href: "/time-tracking/best-for/pool-service",
    description: "Mobile route tracking for recurring pool service and repair work.",
  },
  {
    label: "Best Time Tracking Software for Junk Removal Businesses (2026)",
    href: "/time-tracking/best-for/junk-removal",
    description: "Fast field timesheets for junk removal crews and multi-stop routes.",
  },
  {
    label: "Best Time Tracking Software for Moving Companies (2026)",
    href: "/time-tracking/best-for/moving",
    description: "Crew and route labor tracking for local and long-distance moves.",
  },
  {
    label: "Best Time Tracking Software for Appliance Repair Businesses (2026)",
    href: "/time-tracking/best-for/appliance-repair",
    description: "Mobile labor tracking for appliance service calls, diagnostics, and return visits.",
  },
  {
    label: "Best Time Tracking Software for Garage Door Companies (2026)",
    href: "/time-tracking/best-for/garage-door",
    description: "Track install and service labor with cleaner mobile timesheets and payroll exports.",
  },
  {
    label: "Best Time Tracking Software for Locksmith Businesses (2026)",
    href: "/time-tracking/best-for/locksmith",
    description: "Fast time entry for emergency locksmith callouts and mobile field teams.",
  },
  {
    label: "Best Time Tracking Software for Flooring Contractors (2026)",
    href: "/time-tracking/best-for/flooring",
    description: "Project-phase labor tracking for flooring crews and install workflows.",
  },
  {
    label: "Best Time Tracking Software for Fence & Deck Builders (2026)",
    href: "/time-tracking/best-for/fence-deck",
    description: "Crew time tracking for fence and deck builds with phase-level reporting.",
  },
  {
    label: "Best Time Tracking Software for Glass & Window Installers (2026)",
    href: "/time-tracking/best-for/glass-window-installers",
    description: "Installation crew timesheets and job-level labor visibility for window and glass teams.",
  },
  {
    label: "Best Time Tracking Software for Concrete Contractors (2026)",
    href: "/time-tracking/best-for/concrete-contractors",
    description: "Track prep, pour, and finish labor with field-ready payroll reporting.",
  },
  {
    label: "Best Time Tracking Software for Excavation Companies (2026)",
    href: "/time-tracking/best-for/excavation",
    description: "Operator and crew labor tracking across changing site conditions and schedules.",
  },
  {
    label: "Best Time Tracking Software for Auto Repair Shops (2026)",
    href: "/time-tracking/best-for/auto-repair",
    description: "Technician labor and bay productivity tracking for payroll and repair-order reporting.",
  },
  {
    label: "Best Time Tracking Software for Mobile Mechanics (2026)",
    href: "/time-tracking/best-for/mobile-mechanics",
    description: "Field-first mobile timesheets for route-based mechanic teams and solo operators.",
  },
  {
    label: "Best Time Tracking Software for Cleaning Franchises (2026)",
    href: "/time-tracking/best-for/cleaning-franchises",
    description: "Standardized multi-location labor tracking for recurring cleaning operations.",
  },
  {
    label: "Best Time Tracking Software for Event Services (2026)",
    href: "/time-tracking/best-for/event-services",
    description: "Shift and project labor tracking for setup, event-day, and teardown crews.",
  },
  {
    label: "Best Time Tracking Software for Home Inspectors (2026)",
    href: "/time-tracking/best-for/home-inspectors",
    description: "Lightweight field and report-time tracking for inspection businesses.",
  },
];

const [TIME_TRACKING_ROUNDUP, ...TIME_TRACKING_SCENARIOS] = SCENARIOS;
/** First 5 scenarios match `lib/data/timeTrackingBestFor.ts`; remainder match `timeTrackingBestForTrades.ts`. */
const TIME_TRACKING_GENERAL_CARDS = TIME_TRACKING_SCENARIOS.slice(0, 5);
const TIME_TRACKING_TRADE_CARDS = TIME_TRACKING_SCENARIOS.slice(5);

export default function TimeTrackingBestForIndexPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Time Tracking"
      categoryHref="/time-tracking"
      breadcrumbCurrent="Best for"
      title="Best Time Tracking Software by Use Case"
      intro="Find time tracking software that fits your situation, from freelancers and agencies to trade and field-service businesses."
      roundupLink={TIME_TRACKING_ROUNDUP}
      generalCards={TIME_TRACKING_GENERAL_CARDS}
      tradeCards={TIME_TRACKING_TRADE_CARDS}
      cardCta="See picks →"
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best Time Tracking Software by Use Case | BeltStack",
    description:
      "Browse our best time tracking software picks by use case, including freelancers, agencies, consultants, small businesses, and remote teams.",
  };
}


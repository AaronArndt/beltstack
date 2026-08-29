import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";

const SCENARIOS = [
  {
    label: "Best HR Software (2026)",
    href: "/hr/best-hr-software",
    description:
      "Our full rankings of the best HR platforms for small businesses, startups, agencies, and global teams.",
  },
  {
    label: "Best HR Software for Freelancers (2026)",
    href: "/hr/best-for/freelancers",
    description:
      "Lightweight HR and payroll options for solo operators and consultants planning their first hire.",
  },
  {
    label: "Best HR Software for Small Businesses (2026)",
    href: "/hr/best-for/small-business",
    description:
      "All-in-one HR and payroll tools for small teams that need payroll, benefits, and onboarding in one place.",
  },
  {
    label: "Best HR Software for Startups (2026)",
    href: "/hr/best-for/startups",
    description:
      "HR platforms for high-growth startups that are adding headcount quickly and may hire across locations.",
  },
  {
    label: "Best HR Software for Agencies (2026)",
    href: "/hr/best-for/agencies",
    description:
      "HR tools for agencies that juggle client work, billable hours, and a mix of full-time and contract talent.",
  },
  {
    label: "Best HR Software for Global Teams (2026)",
    href: "/hr/best-for/global-teams",
    description:
      "HR platforms that support international hiring, multi-country payroll, and compliance across borders.",
  },
  {
    label: "Best HR Software for HVAC Businesses (2026)",
    href: "/hr/best-for/hvac",
    description: "Payroll, onboarding, and compliance workflows built for HVAC field and office teams.",
  },
  {
    label: "Best HR Software for Plumbing Companies (2026)",
    href: "/hr/best-for/plumbing",
    description: "HR and payroll tools for plumbing teams with mixed office and field operations.",
  },
  {
    label: "Best HR Software for Electricians (2026)",
    href: "/hr/best-for/electricians",
    description: "HR workflows for electrical contractor hiring, onboarding, and payroll accuracy.",
  },
  {
    label: "Best HR Software for Painting Contractors (2026)",
    href: "/hr/best-for/painting",
    description: "Seasonal hiring, payroll, and onboarding support for painting contractor teams.",
  },
  {
    label: "Best HR Software for Roofing Companies (2026)",
    href: "/hr/best-for/roofing",
    description: "HR and payroll systems that scale with roofing crews and compliance needs.",
  },
  {
    label: "Best HR Software for General Contractors (2026)",
    href: "/hr/best-for/general-contractors",
    description: "HR software for multi-role GC teams and compliance-heavy operations.",
  },
  {
    label: "Best HR Software for Landscaping Companies (2026)",
    href: "/hr/best-for/landscaping",
    description: "Seasonal workforce HR and payroll support for landscaping businesses.",
  },
  {
    label: "Best HR Software for Construction Companies (2026)",
    href: "/hr/best-for/construction",
    description: "HR systems for construction workforce scaling and payroll control.",
  },
  {
    label: "Best HR Software for Remodeling Businesses (2026)",
    href: "/hr/best-for/remodeling",
    description: "Project-driven HR and payroll workflows for remodeling teams.",
  },
  {
    label: "Best HR Software for Handyman Businesses (2026)",
    href: "/hr/best-for/handyman",
    description: "Affordable HR and payroll options for lean handyman operations.",
  },
  {
    label: "Best HR Software for Property Management Companies (2026)",
    href: "/hr/best-for/property-management",
    description: "Mixed-workforce HR and payroll tools for property management companies.",
  },
  {
    label: "Best HR Software for Pest Control Businesses (2026)",
    href: "/hr/best-for/pest-control",
    description: "HR and payroll support for route-based pest control teams.",
  },
  {
    label: "Best HR Software for Pool Service Companies (2026)",
    href: "/hr/best-for/pool-service",
    description: "Seasonal HR and payroll workflows for pool service operations.",
  },
  {
    label: "Best HR Software for Junk Removal Businesses (2026)",
    href: "/hr/best-for/junk-removal",
    description: "Payroll and onboarding support for fast-moving junk removal teams.",
  },
  {
    label: "Best HR Software for Moving Companies (2026)",
    href: "/hr/best-for/moving",
    description: "Crew-focused HR and payroll systems for moving businesses.",
  },
  {
    label: "Best HR Software for Appliance Repair Businesses (2026)",
    href: "/hr/best-for/appliance-repair",
    description: "HR and payroll support for mobile appliance repair teams.",
  },
  {
    label: "Best HR Software for Garage Door Companies (2026)",
    href: "/hr/best-for/garage-door",
    description: "Payroll and onboarding tools for garage door service and install teams.",
  },
  {
    label: "Best HR Software for Locksmith Businesses (2026)",
    href: "/hr/best-for/locksmith",
    description: "Lean HR and payroll workflows for locksmith service teams.",
  },
  {
    label: "Best HR Software for Flooring Contractors (2026)",
    href: "/hr/best-for/flooring",
    description: "HR and payroll tools for flooring installation businesses.",
  },
  {
    label: "Best HR Software for Fence & Deck Builders (2026)",
    href: "/hr/best-for/fence-deck",
    description: "Project-crew HR and payroll tools for fence and deck builders.",
  },
  {
    label: "Best HR Software for Glass & Window Installers (2026)",
    href: "/hr/best-for/glass-window-installers",
    description: "Install-focused HR and payroll tools for glass and window teams.",
  },
  {
    label: "Best HR Software for Concrete Contractors (2026)",
    href: "/hr/best-for/concrete-contractors",
    description: "Crew-first HR and payroll systems for concrete contractors.",
  },
  {
    label: "Best HR Software for Excavation Companies (2026)",
    href: "/hr/best-for/excavation",
    description: "HR and payroll workflows for excavation operators and crews.",
  },
  {
    label: "Best HR Software for Auto Repair Shops (2026)",
    href: "/hr/best-for/auto-repair",
    description: "HR and payroll support for technician-heavy auto repair teams.",
  },
  {
    label: "Best HR Software for Mobile Mechanics (2026)",
    href: "/hr/best-for/mobile-mechanics",
    description: "Field-team HR and payroll systems for mobile mechanic operations.",
  },
  {
    label: "Best HR Software for Cleaning Franchises (2026)",
    href: "/hr/best-for/cleaning-franchises",
    description: "Multi-location HR and payroll systems for cleaning franchise operators.",
  },
  {
    label: "Best HR Software for Event Services (2026)",
    href: "/hr/best-for/event-services",
    description: "HR and payroll workflows for variable-staff event service teams.",
  },
  {
    label: "Best HR Software for Home Inspectors (2026)",
    href: "/hr/best-for/home-inspectors",
    description: "Lean HR and payroll systems for home inspection businesses.",
  },
];

const [HR_ROUNDUP, ...HR_SCENARIOS] = SCENARIOS;
/** First 5 scenarios match `lib/data/hrBestFor.ts`; remainder match `hrBestForTrades.ts`. */
const HR_GENERAL_CARDS = HR_SCENARIOS.slice(0, 5);
const HR_TRADE_CARDS = HR_SCENARIOS.slice(5);

export default function HrBestForIndexPage() {
  return (
    <BestForHubTemplate
      categoryLabel="HR"
      categoryHref="/hr"
      breadcrumbCurrent="Best for"
      title="Best HR Software by Use Case"
      intro="Find HR software that fits your situation, from freelancers and startups to trade and field-service businesses."
      roundupLink={HR_ROUNDUP}
      generalCards={HR_GENERAL_CARDS}
      tradeCards={HR_TRADE_CARDS}
      cardCta="See picks →"
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best HR Software by Use Case | BeltStack",
    description:
      "Browse our best HR software picks by use case, including freelancers, small businesses, startups, agencies, and global teams.",
  };
}


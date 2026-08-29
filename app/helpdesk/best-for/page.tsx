import { BestForHubRelatedLinks, BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { getHelpdeskBestForUrl } from "@/lib/routes";

const SCENARIOS = [
  {
    label: "Best Helpdesk Software (2026)",
    href: "/helpdesk/best-helpdesk-software",
    description: "Our full rankings of the best helpdesk software for small businesses, startups, ecommerce, and support teams.",
  },
  {
    label: "Best Helpdesk Software for HVAC Businesses (2026)",
    href: getHelpdeskBestForUrl("hvac"),
    description: "Dispatch-aware ticketing and support workflows for HVAC service teams.",
  },
  {
    label: "Best Helpdesk Software for Plumbing Companies (2026)",
    href: getHelpdeskBestForUrl("plumbing"),
    description: "Urgency-based triage and multichannel support for plumbing offices.",
  },
  {
    label: "Best Helpdesk Software for Electricians (2026)",
    href: getHelpdeskBestForUrl("electricians"),
    description: "Structured communication and technical issue tracking for electrical contractors.",
  },
  {
    label: "Best Helpdesk Software for Painting Contractors (2026)",
    href: getHelpdeskBestForUrl("painting"),
    description: "Estimate follow-up and project communication support for painting teams.",
  },
  {
    label: "Best Helpdesk Software for Roofing Companies (2026)",
    href: getHelpdeskBestForUrl("roofing"),
    description: "High-volume inquiry handling and urgent request workflows for roofers.",
  },
  {
    label: "Best Helpdesk Software for General Contractors (2026)",
    href: getHelpdeskBestForUrl("general-contractors"),
    description: "Project-phase and stakeholder communication workflows for general contractors.",
  },
  {
    label: "Best Helpdesk Software for Landscaping Companies (2026)",
    href: getHelpdeskBestForUrl("landscaping"),
    description: "Seasonal and recurring service support tools for landscaping companies.",
  },
  {
    label: "Best Helpdesk Software for Construction Companies (2026)",
    href: getHelpdeskBestForUrl("construction"),
    description: "Structured ticketing and reporting tools for construction organizations.",
  },
  {
    label: "Best Helpdesk Software for Remodeling Businesses (2026)",
    href: getHelpdeskBestForUrl("remodeling"),
    description: "Long-cycle client communication tools for remodeling businesses.",
  },
  {
    label: "Best Helpdesk Software for Handyman Businesses (2026)",
    href: getHelpdeskBestForUrl("handyman"),
    description: "Simple and affordable support ticketing for handyman teams.",
  },
  {
    label: "Best Helpdesk Software for Property Management Companies (2026)",
    href: getHelpdeskBestForUrl("property-management"),
    description: "High-volume lifecycle support tools for property management companies.",
  },
  {
    label: "Best Helpdesk Software for Pest Control Businesses (2026)",
    href: getHelpdeskBestForUrl("pest-control"),
    description: "Recurring-service and triage support workflows for pest control teams.",
  },
  {
    label: "Best Helpdesk Software for Pool Service Companies (2026)",
    href: getHelpdeskBestForUrl("pool-service"),
    description: "Seasonal customer support tools for pool service operations.",
  },
  {
    label: "Best Helpdesk Software for Junk Removal Businesses (2026)",
    href: getHelpdeskBestForUrl("junk-removal"),
    description: "Fast-turn support and dispatch coordination tools for junk removal teams.",
  },
  {
    label: "Best Helpdesk Software for Moving Companies (2026)",
    href: getHelpdeskBestForUrl("moving"),
    description: "Quote-cycle and scheduling support tools for moving companies.",
  },
  {
    label: "Best Helpdesk Software for Appliance Repair Businesses (2026)",
    href: getHelpdeskBestForUrl("appliance-repair"),
    description: "Callback and parts-delay support workflows for appliance repair businesses.",
  },
  {
    label: "Best Helpdesk Software for Garage Door Companies (2026)",
    href: getHelpdeskBestForUrl("garage-door"),
    description: "Install-stage and service support communication tools for garage door companies.",
  },
  {
    label: "Best Helpdesk Software for Locksmith Businesses (2026)",
    href: getHelpdeskBestForUrl("locksmith"),
    description: "Urgent-request triage and planned-service support workflows for locksmith businesses.",
  },
  {
    label: "Best Helpdesk Software for Flooring Contractors (2026)",
    href: getHelpdeskBestForUrl("flooring"),
    description: "Quote-to-install communication support tools for flooring contractors.",
  },
  {
    label: "Best Helpdesk Software for Fence & Deck Builders (2026)",
    href: getHelpdeskBestForUrl("fence-deck"),
    description: "Permit and project-stage support tools for fence and deck builders.",
  },
  {
    label: "Best Helpdesk Software for Glass & Window Installers (2026)",
    href: getHelpdeskBestForUrl("glass-window-installers"),
    description: "Lead-time and install update support workflows for glass and window installers.",
  },
  {
    label: "Best Helpdesk Software for Concrete Contractors (2026)",
    href: getHelpdeskBestForUrl("concrete-contractors"),
    description: "Phase-based support and accountability workflows for concrete contractors.",
  },
  {
    label: "Best Helpdesk Software for Excavation Companies (2026)",
    href: getHelpdeskBestForUrl("excavation"),
    description: "Readiness and dependency-aware support communication tools for excavation teams.",
  },
  {
    label: "Best Helpdesk Software for Auto Repair Shops (2026)",
    href: getHelpdeskBestForUrl("auto-repair"),
    description: "Parts, approval, and follow-up support workflows for auto repair shops.",
  },
  {
    label: "Best Helpdesk Software for Mobile Mechanics (2026)",
    href: getHelpdeskBestForUrl("mobile-mechanics"),
    description: "Field-first support tools for mobile mechanics and return-visit workflows.",
  },
  {
    label: "Best Helpdesk Software for Cleaning Franchises (2026)",
    href: getHelpdeskBestForUrl("cleaning-franchises"),
    description: "Multi-location support and quality follow-up tools for cleaning franchises.",
  },
  {
    label: "Best Helpdesk Software for Event Services (2026)",
    href: getHelpdeskBestForUrl("event-services"),
    description: "Timeline-sensitive support workflows for event services teams.",
  },
  {
    label: "Best Helpdesk Software for Home Inspectors (2026)",
    href: getHelpdeskBestForUrl("home-inspectors"),
    description: "Report follow-up and office support workflow tools for home inspectors.",
  },
];

const [HELPDESK_ROUNDUP, ...HELPDESK_TRADE_CARDS] = SCENARIOS;

export default function HelpdeskBestForIndexPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Helpdesk"
      categoryHref="/helpdesk"
      breadcrumbCurrent="Best for"
      title="Best Helpdesk Software by Use Case"
      intro="Scenario-based helpdesk picks for trades and field-service businesses, with recommendations tailored to support workflows, ticket volume, and collaboration needs."
      roundupLink={HELPDESK_ROUNDUP}
      tradeCards={HELPDESK_TRADE_CARDS}
      cardCta="See picks →"
      afterDirectory={
        <BestForHubRelatedLinks
          title="Related links"
          sub="More helpdesk resources."
          links={[
            { href: "/helpdesk", label: "Helpdesk hub" },
            { href: "/helpdesk/compare", label: "Compare helpdesk software" },
            { href: "/helpdesk/guides", label: "Helpdesk guides" },
          ]}
        />
      }
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best Helpdesk Software by Use Case | BeltStack",
    description:
      "Browse our best helpdesk software picks by trade and business type, including HVAC, plumbing, electrical, roofing, and other field-service teams.",
  };
}

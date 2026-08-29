import Link from "next/link";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { getReputationManagementBestForUrl } from "@/lib/routes";

const LINKS = [
  {
    label: "Best Reputation Management Software (2026)",
    href: "/reputation-management/best-reputation-management-software",
    description: "Full rankings and trade-offs across reputation platforms.",
  },
  { label: "Best Reputation Management Software for HVAC Businesses (2026)", href: getReputationManagementBestForUrl("hvac"), description: "Seasonal review velocity and response workflows for HVAC teams." },
  { label: "Best Reputation Management Software for Plumbing Companies (2026)", href: getReputationManagementBestForUrl("plumbing"), description: "Urgent-intent review and response workflows for plumbing businesses." },
  { label: "Best Reputation Management Software for Electricians (2026)", href: getReputationManagementBestForUrl("electricians"), description: "Trust-focused review operations for electrical contractors." },
  { label: "Best Reputation Management Software for Painting Contractors (2026)", href: getReputationManagementBestForUrl("painting"), description: "Visual-proof and referral-driven review workflows for painters." },
  { label: "Best Reputation Management Software for Roofing Companies (2026)", href: getReputationManagementBestForUrl("roofing"), description: "High-ticket reputation management for roofing teams." },
  { label: "Best Reputation Management Software for General Contractors (2026)", href: getReputationManagementBestForUrl("general-contractors"), description: "Governance-ready review workflows for general contractors." },
  { label: "Best Reputation Management Software for Landscaping Companies (2026)", href: getReputationManagementBestForUrl("landscaping"), description: "Seasonal and recurring-service review operations for landscapers." },
  { label: "Best Reputation Management Software for Construction Companies (2026)", href: getReputationManagementBestForUrl("construction"), description: "Structured reputation controls for construction organizations." },
  { label: "Best Reputation Management Software for Remodeling Businesses (2026)", href: getReputationManagementBestForUrl("remodeling"), description: "Long-cycle trust and social proof systems for remodelers." },
  { label: "Best Reputation Management Software for Handyman Businesses (2026)", href: getReputationManagementBestForUrl("handyman"), description: "Lean, practical review-growth workflows for handyman teams." },
  { label: "Best Reputation Management Software for Property Management Companies (2026)", href: getReputationManagementBestForUrl("property-management"), description: "Multi-property reputation workflows and response governance." },
  { label: "Best Reputation Management Software for Pest Control Businesses (2026)", href: getReputationManagementBestForUrl("pest-control"), description: "Recurring-service trust workflows for pest control businesses." },
  { label: "Best Reputation Management Software for Pool Service Companies (2026)", href: getReputationManagementBestForUrl("pool-service"), description: "Seasonal review consistency for pool service operators." },
  { label: "Best Reputation Management Software for Junk Removal Businesses (2026)", href: getReputationManagementBestForUrl("junk-removal"), description: "Fast-turn reputation workflows for junk removal teams." },
  { label: "Best Reputation Management Software for Moving Companies (2026)", href: getReputationManagementBestForUrl("moving"), description: "Trust and response workflows for moving companies." },
  { label: "Best Reputation Management Software for Appliance Repair Businesses (2026)", href: getReputationManagementBestForUrl("appliance-repair"), description: "Review timing for warranty work, parts delays, and repeat home visits." },
  { label: "Best Reputation Management Software for Garage Door Companies (2026)", href: getReputationManagementBestForUrl("garage-door"), description: "Emergency and install workflows for garage door service teams." },
  { label: "Best Reputation Management Software for Locksmith Businesses (2026)", href: getReputationManagementBestForUrl("locksmith"), description: "24/7 lockout and rekey demand with fast, dispute-ready responses." },
  { label: "Best Reputation Management Software for Flooring Contractors (2026)", href: getReputationManagementBestForUrl("flooring-contractors"), description: "Multi-day installs, walkthroughs, and showroom-driven social proof." },
  { label: "Best Reputation Management Software for Fence & Deck Builders (2026)", href: getReputationManagementBestForUrl("fence-deck-builders"), description: "Outdoor projects, weather delays, and neighbor-visible job sites." },
  { label: "Best Reputation Management Software for Glass & Window Installers (2026)", href: getReputationManagementBestForUrl("glass-window-installers"), description: "Retrofit and construction programs with sensitive complaint escalation." },
  { label: "Best Reputation Management Software for Concrete Contractors (2026)", href: getReputationManagementBestForUrl("concrete-contractors"), description: "Flatwork and decorative pours with higher-stakes dispute handling." },
  { label: "Best Reputation Management Software for Excavation Companies (2026)", href: getReputationManagementBestForUrl("excavation"), description: "Sitework and utility projects with portfolio-level visibility." },
  { label: "Best Reputation Management Software for Auto Repair Shops (2026)", href: getReputationManagementBestForUrl("auto-repair-shops"), description: "High-volume bays, advisors, and warranty-sensitive customer moments." },
  { label: "Best Reputation Management Software for Mobile Mechanics (2026)", href: getReputationManagementBestForUrl("mobile-mechanics"), description: "Text-led roadside workflows with lean automation overhead." },
  { label: "Best Reputation Management Software for Cleaning Franchises (2026)", href: getReputationManagementBestForUrl("cleaning-franchises"), description: "Franchise governance, territory reporting, and brand-consistent playbooks." },
  { label: "Best Reputation Management Software for Event Services (2026)", href: getReputationManagementBestForUrl("event-services"), description: "Peak-season events, RFP-driven buyers, and multi-vendor narratives." },
  { label: "Best Reputation Management Software for Home Inspectors (2026)", href: getReputationManagementBestForUrl("home-inspectors"), description: "Tactful post-report asks and liability-aware response patterns." },
];

const [REPUTATION_ROUNDUP, ...REPUTATION_TRADE_CARDS] = LINKS;

export default function ReputationManagementBestForHubPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Reputation Management"
      categoryHref="/reputation-management"
      breadcrumbCurrent="Best For"
      title="Best Reputation Management Software by Use Case"
      intro="Scenario-based picks for trade and field-service businesses managing review growth, response quality, and local trust."
      roundupLink={REPUTATION_ROUNDUP}
      tradeCards={REPUTATION_TRADE_CARDS}
      cardCta="Open →"
      directoryFooter={
        <p className="text-sm text-[#57534E]">
          <Link href={getReputationManagementBestForUrl("hvac")} className="font-semibold text-[#10B981] hover:underline">
            Best for HVAC businesses
          </Link>
          {" · "}
          <Link href="/reputation-management/compare" className="font-semibold text-[#10B981] hover:underline">
            All comparisons
          </Link>
        </p>
      }
    />
  );
}

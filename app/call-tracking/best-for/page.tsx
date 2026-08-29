import Link from "next/link";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { getCallTrackingBestForUrl } from "@/lib/routes";

const LINKS = [
  {
    label: "Best Call Tracking Software (2026)",
    href: "/call-tracking/best-call-tracking-software",
    description: "Full rankings of SMB stacks, lead rollups, and enterprise options.",
  },
  { label: "Best Call Tracking Software for HVAC Businesses (2026)", href: getCallTrackingBestForUrl("hvac"), description: "Seasonal attribution and dispatch-ready source tracking for HVAC." },
  { label: "Best Call Tracking Software for Plumbing Companies (2026)", href: getCallTrackingBestForUrl("plumbing"), description: "Urgent-intent call attribution for plumbing campaigns." },
  { label: "Best Call Tracking Software for Electricians (2026)", href: getCallTrackingBestForUrl("electricians"), description: "Residential vs commercial call source clarity for electricians." },
  { label: "Best Call Tracking Software for Painting Contractors (2026)", href: getCallTrackingBestForUrl("painting"), description: "Quote-intent call tracking for painting businesses." },
  { label: "Best Call Tracking Software for Roofing Companies (2026)", href: getCallTrackingBestForUrl("roofing"), description: "Storm vs retail funnel attribution for roofers." },
  { label: "Best Call Tracking Software for General Contractors (2026)", href: getCallTrackingBestForUrl("general-contractors"), description: "Multi-source opportunity attribution for GCs." },
  { label: "Best Call Tracking Software for Landscaping Companies (2026)", href: getCallTrackingBestForUrl("landscaping"), description: "Seasonal campaign attribution for landscaping teams." },
  { label: "Best Call Tracking Software for Construction Companies (2026)", href: getCallTrackingBestForUrl("construction"), description: "Governance-ready reporting for construction organizations." },
  { label: "Best Call Tracking Software for Remodeling Businesses (2026)", href: getCallTrackingBestForUrl("remodeling"), description: "Long-cycle lead source tracking for remodelers." },
  { label: "Best Call Tracking Software for Handyman Businesses (2026)", href: getCallTrackingBestForUrl("handyman"), description: "Lean attribution stacks for handyman operators." },
  { label: "Best Call Tracking Software for Property Management Companies (2026)", href: getCallTrackingBestForUrl("property-management"), description: "Portfolio and location-level call attribution." },
  { label: "Best Call Tracking Software for Pest Control Businesses (2026)", href: getCallTrackingBestForUrl("pest-control"), description: "Recurring and urgent call source tracking for pest services." },
  { label: "Best Call Tracking Software for Pool Service Companies (2026)", href: getCallTrackingBestForUrl("pool-service"), description: "Seasonal call attribution for pool service businesses." },
  { label: "Best Call Tracking Software for Junk Removal Businesses (2026)", href: getCallTrackingBestForUrl("junk-removal"), description: "Fast-turn lead source tracking for junk removal teams." },
  { label: "Best Call Tracking Software for Moving Companies (2026)", href: getCallTrackingBestForUrl("moving"), description: "Quote-call attribution for moving company campaigns." },
  { label: "Best Call Tracking Software for Appliance Repair Businesses (2026)", href: getCallTrackingBestForUrl("appliance-repair"), description: "Dispatch-friendly attribution for warranty-heavy appliance repair demand." },
  { label: "Best Call Tracking Software for Garage Door Companies (2026)", href: getCallTrackingBestForUrl("garage-door"), description: "Emergency and install funnel clarity for garage door companies." },
  { label: "Best Call Tracking Software for Locksmith Businesses (2026)", href: getCallTrackingBestForUrl("locksmith"), description: "High-intent mobile call attribution for 24/7 locksmith demand." },
  { label: "Best Call Tracking Software for Flooring Contractors (2026)", href: getCallTrackingBestForUrl("flooring-contractors"), description: "Showroom and web journey tracking for flooring contractors." },
  { label: "Best Call Tracking Software for Fence & Deck Builders (2026)", href: getCallTrackingBestForUrl("fence-deck-builders"), description: "Lean seasonal attribution for fence and deck builders." },
  { label: "Best Call Tracking Software for Glass & Window Installers (2026)", href: getCallTrackingBestForUrl("glass-window-installers"), description: "Mixed retail and commercial call attribution for glass and window installers." },
  { label: "Best Call Tracking Software for Concrete Contractors (2026)", href: getCallTrackingBestForUrl("concrete-contractors"), description: "Bid-stage and GC-facing call reporting for concrete contractors." },
  { label: "Best Call Tracking Software for Excavation Companies (2026)", href: getCallTrackingBestForUrl("excavation"), description: "B2B-heavy attribution for excavation and sitework firms." },
  { label: "Best Call Tracking Software for Auto Repair Shops (2026)", href: getCallTrackingBestForUrl("auto-repair-shops"), description: "High-volume bay attribution for auto repair shops." },
  { label: "Best Call Tracking Software for Mobile Mechanics (2026)", href: getCallTrackingBestForUrl("mobile-mechanics"), description: "Programmable and lean stacks for mobile mechanics." },
  { label: "Best Call Tracking Software for Cleaning Franchises (2026)", href: getCallTrackingBestForUrl("cleaning-franchises"), description: "Multi-territory call governance for cleaning franchises." },
  { label: "Best Call Tracking Software for Event Services (2026)", href: getCallTrackingBestForUrl("event-services"), description: "Peak-season routing and marketing attribution for event services." },
  { label: "Best Call Tracking Software for Home Inspectors (2026)", href: getCallTrackingBestForUrl("home-inspectors"), description: "Privacy-respecting attribution for home inspectors." },
];

const [CALL_TRACKING_ROUNDUP, ...CALL_TRACKING_TRADE_CARDS] = LINKS;

export default function CallTrackingBestForHubPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Call Tracking"
      categoryHref="/call-tracking"
      breadcrumbCurrent="Best For"
      title="Best Call Tracking Software by Use Case"
      intro="Scenario-based picks for trade and field-service operators who need reliable call attribution tied to booked-job outcomes."
      roundupLink={CALL_TRACKING_ROUNDUP}
      tradeCards={CALL_TRACKING_TRADE_CARDS}
      cardCta="Open →"
      directoryFooter={
        <p className="text-sm text-[#57534E]">
          <Link href={getCallTrackingBestForUrl("hvac")} className="font-semibold text-[#10B981] hover:underline">
            Best for HVAC businesses
          </Link>{" "}
          ·{" "}
          <Link href="/call-tracking/compare" className="font-semibold text-[#10B981] hover:underline">
            All comparisons
          </Link>
        </p>
      }
    />
  );
}

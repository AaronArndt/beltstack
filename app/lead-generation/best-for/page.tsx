import Link from "next/link";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { getLeadGenerationBestForUrl } from "@/lib/routes";

const LINKS = [
  {
    label: "Best Lead Generation Tools (2026)",
    href: "/lead-generation/best-lead-generation-tools",
    description: "Full rankings of marketplaces, Google LSA, and complementary channels.",
  },
  {
    label: "Best Lead Generation Software for HVAC Businesses (2026)",
    href: getLeadGenerationBestForUrl("hvac"),
    description: "Lead channels and evaluation tips for HVAC businesses.",
  },
  {
    label: "Best Lead Generation Software for Plumbing Companies (2026)",
    href: getLeadGenerationBestForUrl("plumbing"),
    description: "Lead channels and evaluation tips for plumbing companies.",
  },
  {
    label: "Best Lead Generation Software for Electricians (2026)",
    href: getLeadGenerationBestForUrl("electricians"),
    description: "Lead channels and evaluation tips for electricians.",
  },
  {
    label: "Best Lead Generation Software for Painting Contractors (2026)",
    href: getLeadGenerationBestForUrl("painting"),
    description: "Lead channels and evaluation tips for painting contractors.",
  },
  {
    label: "Best Lead Generation Software for Roofing Companies (2026)",
    href: getLeadGenerationBestForUrl("roofing"),
    description: "Lead channels and evaluation tips for roofing companies.",
  },
  {
    label: "Best Lead Generation Software for General Contractors (2026)",
    href: getLeadGenerationBestForUrl("general-contractors"),
    description: "Lead channels and evaluation tips for general contractors.",
  },
  {
    label: "Best Lead Generation Software for Landscaping Companies (2026)",
    href: getLeadGenerationBestForUrl("landscaping"),
    description: "Lead channels and evaluation tips for landscaping companies.",
  },
  {
    label: "Best Lead Generation Software for Construction Companies (2026)",
    href: getLeadGenerationBestForUrl("construction"),
    description: "Lead channels and evaluation tips for construction companies.",
  },
  {
    label: "Best Lead Generation Software for Remodeling Businesses (2026)",
    href: getLeadGenerationBestForUrl("remodeling"),
    description: "Lead channels and evaluation tips for remodeling businesses.",
  },
  {
    label: "Best Lead Generation Software for Handyman Businesses (2026)",
    href: getLeadGenerationBestForUrl("handyman"),
    description: "Lead channels and evaluation tips for handyman businesses.",
  },
  {
    label: "Best Lead Generation Software for Property Management Companies (2026)",
    href: getLeadGenerationBestForUrl("property-management"),
    description: "Lead channels and evaluation tips for property management companies.",
  },
  {
    label: "Best Lead Generation Software for Pest Control Businesses (2026)",
    href: getLeadGenerationBestForUrl("pest-control"),
    description: "Lead channels and evaluation tips for pest control businesses.",
  },
  {
    label: "Best Lead Generation Software for Pool Service Companies (2026)",
    href: getLeadGenerationBestForUrl("pool-service"),
    description: "Lead channels and evaluation tips for pool service companies.",
  },
  {
    label: "Best Lead Generation Software for Junk Removal Businesses (2026)",
    href: getLeadGenerationBestForUrl("junk-removal"),
    description: "Lead channels and evaluation tips for junk removal businesses.",
  },
  {
    label: "Best Lead Generation Software for Moving Companies (2026)",
    href: getLeadGenerationBestForUrl("moving"),
    description: "Lead channels and evaluation tips for moving companies.",
  },
  {
    label: "Best Lead Generation Software for Appliance Repair Businesses (2026)",
    href: getLeadGenerationBestForUrl("appliance-repair"),
    description: "Google LSA, Thumbtack, and HomeAdvisor for urgent appliance repairs and booked-job economics.",
  },
  {
    label: "Best Lead Generation Software for Garage Door Companies (2026)",
    href: getLeadGenerationBestForUrl("garage-door"),
    description: "Google LSA, Angi, and Thumbtack for emergency calls, directory shoppers, and marketplace tests.",
  },
  {
    label: "Best Lead Generation Software for Locksmith Businesses (2026)",
    href: getLeadGenerationBestForUrl("locksmith"),
    description: "Google LSA, Yelp Ads, and Bark for lockouts, Yelp-heavy metros, and posted job requests.",
  },
  {
    label: "Best Lead Generation Software for Flooring Contractors (2026)",
    href: getLeadGenerationBestForUrl("flooring"),
    description: "Houzz Pro, Angi, and Thumbtack for visual buyers, directory comparisons, and flexible marketplace demand.",
  },
  {
    label: "Best Lead Generation Software for Fence & Deck Builders (2026)",
    href: getLeadGenerationBestForUrl("fence-deck"),
    description: "Houzz Pro, Facebook Lead Ads, and Thumbtack for outdoor portfolios, seasonal promos, and local fill.",
  },
  {
    label: "Best Lead Generation Software for Glass & Window Installers (2026)",
    href: getLeadGenerationBestForUrl("glass-window-installers"),
    description: "Google LSA, Houzz Pro, and Yelp Ads for board-ups, upgrades, and Yelp-centric research habits.",
  },
  {
    label: "Best Lead Generation Software for Concrete Contractors (2026)",
    href: getLeadGenerationBestForUrl("concrete-contractors"),
    description: "HomeAdvisor, Bark, and Thumbtack for flatwork marketplace volume, posted projects, and pay-per-lead tests.",
  },
  {
    label: "Best Lead Generation Software for Excavation Companies (2026)",
    href: getLeadGenerationBestForUrl("excavation"),
    description: "Bark, Google LSA, and Thumbtack for posted digs, urgent search, and marketplace breadth.",
  },
  {
    label: "Best Lead Generation Software for Auto Repair Shops (2026)",
    href: getLeadGenerationBestForUrl("auto-repair"),
    description: "Yelp Ads, Google LSA, and Facebook Lead Ads for review-driven demand, urgent search, and bay-fill offers.",
  },
  {
    label: "Best Lead Generation Software for Mobile Mechanics (2026)",
    href: getLeadGenerationBestForUrl("mobile-mechanics"),
    description: "Thumbtack, Bark, and Google LSA for rolling dispatch, posted jobs, and urgent local intent.",
  },
  {
    label: "Best Lead Generation Software for Cleaning Franchises (2026)",
    href: getLeadGenerationBestForUrl("cleaning-franchises"),
    description: "Facebook Lead Ads, Angi, and Google LSA for franchise-compliant campaigns and recurring-route growth.",
  },
  {
    label: "Best Lead Generation Software for Event Services (2026)",
    href: getLeadGenerationBestForUrl("event-services"),
    description: "Facebook Lead Ads, Bark, and Thumbtack for date-based campaigns, posted events, and marketplace categories.",
  },
  {
    label: "Best Lead Generation Software for Home Inspectors (2026)",
    href: getLeadGenerationBestForUrl("home-inspectors"),
    description: "Google LSA, Thumbtack, and Angi for contract-window search, marketplace flexibility, and directory trust.",
  },
];

const [LEAD_GEN_ROUNDUP, ...LEAD_GEN_TRADE_CARDS] = LINKS;

export default function LeadGenerationBestForHubPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Lead Generation"
      categoryHref="/lead-generation"
      breadcrumbCurrent="Best For"
      title="Best Lead Generation Tools by Use Case"
      intro="Scenario-based picks for contractors and home services: economics, speed-to-lead, and channel fit."
      roundupLink={LEAD_GEN_ROUNDUP}
      tradeCards={LEAD_GEN_TRADE_CARDS}
      cardCta="Open →"
      directoryFooter={
        <p className="text-sm text-[#57534E]">
          <Link href={getLeadGenerationBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline">
            Best for contractors
          </Link>{" "}
          ·{" "}
          <Link href="/lead-generation/compare" className="font-semibold text-[#10B981] hover:underline">
            All comparisons
          </Link>
        </p>
      }
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best Lead Generation Tools by Use Case | BeltStack",
    description: "Find lead generation tools for contractors, HVAC, plumbing, home services, and more.",
  };
}

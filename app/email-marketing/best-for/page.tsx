import Link from "next/link";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { getEmailMarketingBestForUrl } from "@/lib/routes";

const LINKS = [
  {
    label: "Best Email Marketing Software (2026)",
    href: "/email-marketing/best-email-marketing-software",
    description: "Full rankings, deep dives, automations, and trade-offs for local operators.",
  },
  {
    label: "Best Email Marketing Software for HVAC Businesses (2026)",
    href: getEmailMarketingBestForUrl("hvac"),
    description: "Email automation picks and lifecycle guidance for HVAC businesses.",
  },
  {
    label: "Best Email Marketing Software for Plumbing Companies (2026)",
    href: getEmailMarketingBestForUrl("plumbing"),
    description: "Email and reminder workflows for plumbing companies.",
  },
  {
    label: "Best Email Marketing Software for Electricians (2026)",
    href: getEmailMarketingBestForUrl("electricians"),
    description: "Email systems for electrical contractors with longer-cycle follow-up.",
  },
  {
    label: "Best Email Marketing Software for Painting Contractors (2026)",
    href: getEmailMarketingBestForUrl("painting"),
    description: "Visual campaign and estimate nurture tools for painting contractors.",
  },
  {
    label: "Best Email Marketing Software for Roofing Companies (2026)",
    href: getEmailMarketingBestForUrl("roofing"),
    description: "Trust-building and seasonal campaign platforms for roofing companies.",
  },
  {
    label: "Best Email Marketing Software for General Contractors (2026)",
    href: getEmailMarketingBestForUrl("general-contractors"),
    description: "CRM-linked nurture platforms for general contractors.",
  },
  {
    label: "Best Email Marketing Software for Landscaping Companies (2026)",
    href: getEmailMarketingBestForUrl("landscaping"),
    description: "Seasonal and route-based email tools for landscaping companies.",
  },
  {
    label: "Best Email Marketing Software for Construction Companies (2026)",
    href: getEmailMarketingBestForUrl("construction"),
    description: "Pipeline-aware email platforms for construction companies.",
  },
  {
    label: "Best Email Marketing Software for Remodeling Businesses (2026)",
    href: getEmailMarketingBestForUrl("remodeling"),
    description: "Project-education and quote nurture software for remodeling businesses.",
  },
  {
    label: "Best Email Marketing Software for Handyman Businesses (2026)",
    href: getEmailMarketingBestForUrl("handyman"),
    description: "Simple and affordable email tools for handyman businesses.",
  },
  {
    label: "Best Email Marketing Software for Property Management Companies (2026)",
    href: getEmailMarketingBestForUrl("property-management"),
    description: "Lifecycle communication and segmentation tools for property management companies.",
  },
  {
    label: "Best Email Marketing Software for Pest Control Businesses (2026)",
    href: getEmailMarketingBestForUrl("pest-control"),
    description: "Recurring-service retention software for pest control businesses.",
  },
  {
    label: "Best Email Marketing Software for Pool Service Companies (2026)",
    href: getEmailMarketingBestForUrl("pool-service"),
    description: "Seasonal and recurring campaign tools for pool service companies.",
  },
  {
    label: "Best Email Marketing Software for Junk Removal Businesses (2026)",
    href: getEmailMarketingBestForUrl("junk-removal"),
    description: "Fast-turn campaign and reminder tools for junk removal businesses.",
  },
  {
    label: "Best Email Marketing Software for Moving Companies (2026)",
    href: getEmailMarketingBestForUrl("moving"),
    description: "Quote follow-up and lifecycle email tools for moving companies.",
  },
  {
    label: "Best Email Marketing Software for Appliance Repair Businesses (2026)",
    href: getEmailMarketingBestForUrl("appliance-repair"),
    description: "Post-service nurture, warranty-aware messaging, and SMS coordination for appliance repair shops.",
  },
  {
    label: "Best Email Marketing Software for Garage Door Companies (2026)",
    href: getEmailMarketingBestForUrl("garage-door"),
    description: "Quote automation, install follow-up, and storm-ready campaigns for garage door teams.",
  },
  {
    label: "Best Email Marketing Software for Locksmith Businesses (2026)",
    href: getEmailMarketingBestForUrl("locksmith"),
    description: "Speed-to-lead nurture and multichannel ops for locksmith businesses.",
  },
  {
    label: "Best Email Marketing Software for Flooring Contractors (2026)",
    href: getEmailMarketingBestForUrl("flooring-contractors"),
    description: "Visual proof, showroom nurture, and long estimate cycles for flooring contractors.",
  },
  {
    label: "Best Email Marketing Software for Fence & Deck Builders (2026)",
    href: getEmailMarketingBestForUrl("fence-deck-builders"),
    description: "Weather-aware promotions and project-completion follow-up for outdoor builders.",
  },
  {
    label: "Best Email Marketing Software for Glass & Window Installers (2026)",
    href: getEmailMarketingBestForUrl("glass-window-installers"),
    description: "Specifier education and mixed retail or commercial nurture for glass and window installers.",
  },
  {
    label: "Best Email Marketing Software for Concrete Contractors (2026)",
    href: getEmailMarketingBestForUrl("concrete-contractors"),
    description: "Bid-stage nurture and GC-facing proof for concrete contractors.",
  },
  {
    label: "Best Email Marketing Software for Excavation Companies (2026)",
    href: getEmailMarketingBestForUrl("excavation"),
    description: "B2B bid nurture and guided newsletters for excavation and sitework firms.",
  },
  {
    label: "Best Email Marketing Software for Auto Repair Shops (2026)",
    href: getEmailMarketingBestForUrl("auto-repair-shops"),
    description: "RO-close follow-up and high-volume trust content for auto repair shops.",
  },
  {
    label: "Best Email Marketing Software for Mobile Mechanics (2026)",
    href: getEmailMarketingBestForUrl("mobile-mechanics"),
    description: "Lean road-based email and SMS coordination for mobile mechanics.",
  },
  {
    label: "Best Email Marketing Software for Cleaning Franchises (2026)",
    href: getEmailMarketingBestForUrl("cleaning-franchises"),
    description: "Franchise governance and retention analytics for cleaning franchises.",
  },
  {
    label: "Best Email Marketing Software for Event Services (2026)",
    href: getEmailMarketingBestForUrl("event-services"),
    description: "Inquiry speed, peak-season bursts, and portfolio storytelling for event services.",
  },
  {
    label: "Best Email Marketing Software for Home Inspectors (2026)",
    href: getEmailMarketingBestForUrl("home-inspectors"),
    description: "Neutral education and agent-friendly cadence for home inspectors.",
  },
];

const [EMAIL_ROUNDUP, ...EMAIL_TRADE_CARDS] = LINKS;

export default function EmailMarketingBestForHubPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Email Marketing"
      categoryHref="/email-marketing"
      breadcrumbCurrent="Best For"
      title="Best Email Marketing Software by Use Case"
      intro="Scenario-based picks for contractors, trades, and multi-crew home services—balanced against what your office can realistically automate every month."
      roundupLink={EMAIL_ROUNDUP}
      tradeCards={EMAIL_TRADE_CARDS}
      cardCta="Open →"
      directoryFooter={
        <p className="text-sm text-[#57534E]">
          <Link href={getEmailMarketingBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline">
            Best email marketing for contractors
          </Link>{" "}
          ·{" "}
          <Link href="/email-marketing/compare" className="font-semibold text-[#10B981] hover:underline">
            All comparisons
          </Link>
        </p>
      }
    />
  );
}

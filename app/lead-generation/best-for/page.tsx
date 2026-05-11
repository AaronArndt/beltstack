import Link from "next/link";
import { Footer } from "@/components/Footer";
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

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export default function LeadGenerationBestForHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/lead-generation" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Lead Generation
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best For
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Lead Generation Tools by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Scenario-based picks for contractors and home services: economics, speed-to-lead, and channel fit.
            </p>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Jump to a scenario.">Pick your situation</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h2 className="text-[#1A2D48] text-base font-bold group-hover:text-[#10B981]">{item.label}</h2>
                  <p className="mt-2 text-[#57534E] text-sm leading-relaxed flex-1">{item.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#10B981] group-hover:underline">Open →</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#57534E]">
              <Link href={getLeadGenerationBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline">
                Best for contractors
              </Link>{" "}
               ·{" "}
              <Link href="/lead-generation/compare" className="font-semibold text-[#10B981] hover:underline">
                All comparisons
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Lead Generation Tools by Use Case | BeltStack",
    description: "Find lead generation tools for contractors, HVAC, plumbing, home services, and more.",
  };
}

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getPayrollBestForUrl } from "@/lib/routes";

const SCENARIOS = [
  {
    label: "Best payroll software overall",
    href: "/payroll/best-payroll-software",
    description: "Our full rankings of the best payroll software for small businesses, contractors, and growing companies.",
  },
  {
    label: "Best payroll software for small business",
    href: getPayrollBestForUrl("small-business"),
    description: "Payroll that scales with your team—compliance, benefits, and reporting without enterprise complexity.",
  },
  {
    label: "Best payroll software for contractors",
    href: getPayrollBestForUrl("contractors"),
    description: "Payroll and contractor management for trade and field teams.",
  },
  {
    label: "Best payroll software for 1099 contractors",
    href: getPayrollBestForUrl("1099-contractors"),
    description: "Handle 1099s, contractor payments, and compliance for gig and contract workers.",
  },
  {
    label: "Best payroll software for hourly employees",
    href: getPayrollBestForUrl("hourly-employees"),
    description: "Time tracking, overtime, and hourly pay for shift-based and hourly workers.",
  },
  {
    label: "Best payroll software for growing businesses",
    href: getPayrollBestForUrl("growing-businesses"),
    description: "Payroll that grows with you as you add states, employees, and benefits.",
  },
  {
    label: "Best payroll software for landscaping companies",
    href: getPayrollBestForUrl("landscaping"),
    description: "Payroll for landscaping and lawn care companies with seasonal and crew needs.",
  },
  {
    label: "Best payroll software for plumbing companies",
    href: getPayrollBestForUrl("plumbing"),
    description: "Payroll for plumbing businesses and trade contractors.",
  },
  {
    label: "Best payroll software for HVAC companies",
    href: getPayrollBestForUrl("hvac"),
    description: "Payroll for HVAC and climate control contractors and technicians.",
  },
  {
    label: "Best payroll software for cleaning companies",
    href: getPayrollBestForUrl("cleaning-business"),
    description: "Payroll for cleaning and janitorial companies with multiple sites and crews.",
  },
  {
    label: "Best payroll software for painting contractors",
    href: getPayrollBestForUrl("painters"),
    description: "Payroll for painting contractors and crews.",
  },
  {
    label: "Best payroll software for pest control companies",
    href: getPayrollBestForUrl("pest-control"),
    description: "Payroll for pest control and extermination companies.",
  },
  {
    label: "Best payroll software for lawn care companies",
    href: getPayrollBestForUrl("lawn-care"),
    description: "Payroll for lawn care and grounds maintenance businesses.",
  },
  {
    label: "Best payroll software for tree service companies",
    href: getPayrollBestForUrl("tree-service"),
    description: "Payroll for arborists and tree care companies.",
  },
  {
    label: "Best payroll software for remodeling contractors",
    href: getPayrollBestForUrl("remodeling-contractors"),
    description: "Payroll for remodeling and renovation contractors.",
  },
  {
    label: "Best payroll software for general contractors",
    href: getPayrollBestForUrl("general-contractors"),
    description: "Payroll for general contractors and construction management.",
  },
  {
    label: "Best payroll software for handyman businesses",
    href: getPayrollBestForUrl("handyman-business"),
    description: "Payroll for handyman and home repair businesses.",
  },
  {
    label: "Best payroll software for construction companies",
    href: getPayrollBestForUrl("construction"),
    description: "Payroll for construction companies and trade crews.",
  },
  {
    label: "Best payroll software for roofing companies",
    href: getPayrollBestForUrl("roofing"),
    description: "Payroll for roofing contractors and crews.",
  },
  {
    label: "Best payroll software for electricians",
    href: getPayrollBestForUrl("electricians"),
    description: "Payroll for electrical contractors and technicians.",
  },
  {
    label: "Best payroll software for pool service businesses",
    href: getPayrollBestForUrl("pool-service"),
    description: "Payroll for pool cleaning and pool service companies.",
  },
  {
    label: "Best payroll software for junk removal businesses",
    href: getPayrollBestForUrl("junk-removal"),
    description: "Payroll for junk hauling teams, variable crews, W-2 and 1099 labor, and lean back offices.",
  },
  {
    label: "Best payroll software for moving companies",
    href: getPayrollBestForUrl("moving"),
    description: "Payroll for movers: seasonal crews, deposits and job cycles, and multi-state considerations.",
  },
  {
    label: "Best payroll software for home services businesses",
    href: getPayrollBestForUrl("home-services"),
    description: "Payroll for home service companies across trades.",
  },
  {
    label: "Best payroll software for property management companies",
    href: getPayrollBestForUrl("property-management"),
    description: "Payroll for property management and real estate operations.",
  },
  {
    label: "Best payroll software for maintenance companies",
    href: getPayrollBestForUrl("maintenance-companies"),
    description: "Payroll for maintenance and facilities companies.",
  },
  {
    label: "Best payroll software for auto repair shops",
    href: getPayrollBestForUrl("auto-repair"),
    description: "Payroll for auto repair shops and mechanics.",
  },
  {
    label: "Best Payroll Software for Appliance Repair Businesses (2026)",
    href: getPayrollBestForUrl("appliance-repair"),
    description: "Payroll for appliance repair shops: field techs, 1099 subs, overtime, and QuickBooks job alignment.",
  },
  {
    label: "Best Payroll Software for Garage Door Companies (2026)",
    href: getPayrollBestForUrl("garage-door"),
    description: "Payroll for garage door dealers and installers: crews, commissions, and multi-location growth.",
  },
  {
    label: "Best Payroll Software for Locksmith Businesses (2026)",
    href: getPayrollBestForUrl("locksmith"),
    description: "Payroll for locksmiths: mobile crews, Square-friendly options, W-2 and 1099 in one stack.",
  },
  {
    label: "Best Payroll Software for Flooring Contractors (2026)",
    href: getPayrollBestForUrl("flooring"),
    description: "Payroll for flooring contractors: install crews, showrooms, Rippling, QuickBooks job costing.",
  },
  {
    label: "Best Payroll Software for Fence & Deck Builders (2026)",
    href: getPayrollBestForUrl("fence-deck"),
    description: "Payroll for fence and deck builders: crew OT, job-costed labor, and contractor payouts.",
  },
  {
    label: "Best Payroll Software for Glass & Window Installers (2026)",
    href: getPayrollBestForUrl("glass-window-installers"),
    description: "Payroll for glass and window companies: glazier crews, QuickBooks jobs, Paychex or Gusto.",
  },
  {
    label: "Best Payroll Software for Concrete Contractors (2026)",
    href: getPayrollBestForUrl("concrete-contractors"),
    description: "Payroll for concrete contractors: large crews, ADP scale, QuickBooks labor on pours.",
  },
  {
    label: "Best Payroll Software for Excavation Companies (2026)",
    href: getPayrollBestForUrl("excavation"),
    description: "Payroll for excavation: ADP, Paychex serviced payroll, operators, and multi-state crews.",
  },
  {
    label: "Best Payroll Software for Mobile Mechanics (2026)",
    href: getPayrollBestForUrl("mobile-mechanics"),
    description: "Payroll for mobile mechanics: Square Payroll, OnPay, van crews, and QuickBooks shops.",
  },
  {
    label: "Best Payroll Software for Cleaning Franchises (2026)",
    href: getPayrollBestForUrl("cleaning-franchises"),
    description: "Payroll for cleaning franchises: Rippling multi-entity, Gusto franchisees, ADP at scale.",
  },
  {
    label: "Best Payroll Software for Event Services (2026)",
    href: getPayrollBestForUrl("event-services"),
    description: "Payroll for event services: seasonal staff, Gusto hiring, Patriot low cost, Square on Square.",
  },
  {
    label: "Best Payroll Software for Home Inspectors (2026)",
    href: getPayrollBestForUrl("home-inspectors"),
    description: "Payroll for home inspectors: Patriot, OnPay, small teams, W-2 and associate inspectors.",
  },
  {
    label: "Best payroll software for restaurants",
    href: getPayrollBestForUrl("restaurants"),
    description: "Payroll for restaurants, tips, and hospitality.",
  },
  {
    label: "Best payroll software for retail",
    href: getPayrollBestForUrl("retail"),
    description: "Payroll for retail stores and multi-location retail.",
  },
  {
    label: "Best payroll software for agriculture",
    href: getPayrollBestForUrl("agriculture"),
    description: "Payroll for farms, ranches, and agricultural workers.",
  },
  {
    label: "Best payroll software for nonprofits",
    href: getPayrollBestForUrl("nonprofits"),
    description: "Payroll for nonprofits with compliance and reporting needs.",
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

export default function PayrollBestForPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/payroll"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Payroll
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best For
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Payroll Software by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Browse payroll software recommendations by scenario: trade, company size, budget, or use case—including appliance repair, garage door,
              flooring, concrete, excavation, mobile mechanics, cleaning franchises, event services, home inspectors, and more.
            </p>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Jump to a scenario.">Pick your situation</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h2 className="text-[#1A2D48] text-base font-bold group-hover:text-[#10B981]">{item.label}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#57534E]">{item.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#10B981] group-hover:underline">Open →</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#57534E]">
              <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline">
                Payroll hub
              </Link>{" "}
              ·{" "}
              <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline">
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
    title: "Best Payroll Software by Use Case | BeltStack",
    description:
      "Browse our best payroll software picks by use case: small business, contractors, trades, appliance repair, garage door, locksmith, flooring, fence and deck, glass and window, concrete, excavation, auto repair, mobile mechanics, cleaning franchises, event services, home inspectors, restaurants, retail, nonprofits, and more.",
    keywords: [
      "best payroll by use case",
      "payroll software for contractors",
      "trade business payroll",
      "small business payroll",
    ],
  };
}

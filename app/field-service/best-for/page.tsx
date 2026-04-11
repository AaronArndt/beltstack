import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getFieldServiceBestForUrl } from "@/lib/routes";

const SCENARIOS = [
  {
    label: "Best field service software overall",
    href: "/field-service/best-field-service-software",
    description: "Full rankings of FSM tools for dispatch, scheduling, mobile crews, job costing, and operations.",
  },
  {
    label: "Best field service software for small business",
    href: getFieldServiceBestForUrl("small-business"),
    description: "Lean teams balancing price, ease of use, and room to grow.",
  },
  {
    label: "Best field service software for general contractors",
    href: getFieldServiceBestForUrl("contractors"),
    description: "Mixed-trade crews, multi-service scheduling, dispatch, and job coordination.",
  },
  {
    label: "Best field service software for HVAC businesses",
    href: getFieldServiceBestForUrl("hvac"),
    description: "Maintenance agreements, seasonal demand, installs, and emergency dispatch.",
  },
  {
    label: "Best field service software for plumbing companies",
    href: getFieldServiceBestForUrl("plumbing"),
    description: "Emergency and booked jobs, recurring service, estimates, and invoicing.",
  },
  {
    label: "Best field service software for electricians",
    href: getFieldServiceBestForUrl("electricians"),
    description: "Service calls, crew routing, estimates, and compliance-friendly job documentation.",
  },
  {
    label: "Best field service software for painting contractors",
    href: getFieldServiceBestForUrl("painting"),
    description: "Crew scheduling, production phases, change orders, and job-site billing.",
  },
  {
    label: "Best field service software for roofing companies",
    href: getFieldServiceBestForUrl("roofing"),
    description: "Inspections, crew days, production documentation, supplements, and invoicing.",
  },
  {
    label: "Best field service software for construction companies",
    href: getFieldServiceBestForUrl("construction"),
    description: "Site visits, subcontractor coordination, change documentation, and field visibility.",
  },
  {
    label: "Best field service software for remodeling businesses",
    href: getFieldServiceBestForUrl("remodeling"),
    description: "Phased jobs, selections, change orders, and progress payments.",
  },
  {
    label: "Best field service software for handyman businesses",
    href: getFieldServiceBestForUrl("handyman"),
    description: "High-volume small jobs, same-day dispatch, templates, and fast mobile invoicing.",
  },
  {
    label: "Best field service software for landscaping companies",
    href: getFieldServiceBestForUrl("landscaping"),
    description: "Recurring routes, crew labor, installs, and seasonal scheduling.",
  },
  {
    label: "Best field service software for property management companies",
    href: getFieldServiceBestForUrl("property-management"),
    description: "Work orders across portfolios, vendor jobs, documentation, and billing visibility.",
  },
  {
    label: "Best field service software for pest control businesses",
    href: getFieldServiceBestForUrl("pest-control"),
    description: "Recurring service plans, route density, treatment notes, and renewals.",
  },
  {
    label: "Best field service software for pool service companies",
    href: getFieldServiceBestForUrl("pool-service"),
    description: "Weekly routes, chemical notes, open/close packages, and repair tickets.",
  },
  {
    label: "Best field service software for junk removal businesses",
    href: getFieldServiceBestForUrl("junk-removal"),
    description: "Truck windows, load-size quoting, deposits, and multi-truck dispatch.",
  },
  {
    label: "Best field service software for moving companies",
    href: getFieldServiceBestForUrl("moving"),
    description: "Surveys, crew and truck assignments, deposits, and move-day billing.",
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

export default function FieldServiceBestForHubPage() {
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
                    href="/field-service"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Field Service
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-medium text-gray-700" aria-current="page">
                  Best For
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Field Service Software by Use Case
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
              Scenario-based picks for contractors, trades, and service businesses—dispatch, mobile workflows, and job
              management without overbuying.
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
                  <h2 className="text-xl font-bold text-[#1A2D48] group-hover:text-[#10B981]">{item.label}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#57534E]">{item.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#10B981] group-hover:underline">Open →</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#57534E]">
              <Link href="/field-service/compare" className="font-semibold text-[#10B981] hover:underline">
                All field service comparisons
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
    title: "Best Field Service Software by Use Case | BeltStack",
    description:
      "Find field service management software by trade: HVAC, plumbing, electricians, general contractors, painting, roofing, landscaping, pool service, movers, and more.",
  };
}

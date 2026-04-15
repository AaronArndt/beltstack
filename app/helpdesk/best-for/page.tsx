import Link from "next/link";
import { Footer } from "@/components/Footer";
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

export default function HelpdeskBestForIndexPage() {
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
                    href="/helpdesk"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Helpdesk
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Helpdesk Software by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Scenario-based helpdesk picks for trades and field-service businesses, with recommendations tailored to support workflows, ticket volume, and collaboration needs.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a use case to see our top picks and guidance.">
              Helpdesk by use case
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] text-base font-bold group-hover:text-[#10B981]">{item.label}</h3>
                  <p className="mt-2 text-[#57534E] text-sm leading-relaxed flex-1">{item.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#10B981] group-hover:underline">
                    See picks →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="More helpdesk resources.">
              Related links
            </SectionTitle>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link href="/helpdesk" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Helpdesk hub
                </Link>
              </li>
              <li>
                <Link href="/helpdesk/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Compare helpdesk software
                </Link>
              </li>
              <li>
                <Link href="/helpdesk/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Helpdesk guides
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Helpdesk Software by Use Case | BeltStack",
    description:
      "Browse our best helpdesk software picks by trade and business type, including HVAC, plumbing, electrical, roofing, and other field-service teams.",
  };
}

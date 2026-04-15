import Link from "next/link";
import { Footer } from "@/components/Footer";

const SCENARIOS = [
  {
    label: "Best Time Tracking Software (2026)",
    href: "/time-tracking/best-time-tracking-software",
    description: "Our full rankings of the best time tracking tools for small businesses, freelancers, and teams.",
  },
  {
    label: "Best Time Tracking Software for Freelancers (2026)",
    href: "/time-tracking/best-for/freelancers",
    description: "Time tracking tools that make it easy to log billable hours and invoice clients.",
  },
  {
    label: "Best Time Tracking Software for Agencies (2026)",
    href: "/time-tracking/best-for/agencies",
    description: "Track time across clients and projects, manage utilization, and keep retainers on budget.",
  },
  {
    label: "Best Time Tracking Software for Consultants (2026)",
    href: "/time-tracking/best-for/consultants",
    description: "Support service billing, retainers, and clear client reporting.",
  },
  {
    label: "Best Time Tracking Software for Small Businesses (2026)",
    href: "/time-tracking/best-for/small-business",
    description: "Simple, affordable tools that fit small teams and mixed roles.",
  },
  {
    label: "Best Time Tracking Software for Remote Teams (2026)",
    href: "/time-tracking/best-for/remote-teams",
    description: "Time tracking and monitoring options for distributed and field teams.",
  },
  {
    label: "Best Time Tracking Software for HVAC Businesses (2026)",
    href: "/time-tracking/best-for/hvac",
    description: "Mobile clocks, GPS verification, and payroll-ready reports for HVAC crews.",
  },
  {
    label: "Best Time Tracking Software for Plumbing Companies (2026)",
    href: "/time-tracking/best-for/plumbing",
    description: "Track emergency and scheduled plumbing labor with cleaner payroll workflows.",
  },
  {
    label: "Best Time Tracking Software for Electricians (2026)",
    href: "/time-tracking/best-for/electricians",
    description: "Field-friendly time tracking for service calls and electrical project labor.",
  },
  {
    label: "Best Time Tracking Software for Painting Contractors (2026)",
    href: "/time-tracking/best-for/painting",
    description: "Crew timesheets and project phase tracking for painting teams.",
  },
  {
    label: "Best Time Tracking Software for Roofing Companies (2026)",
    href: "/time-tracking/best-for/roofing",
    description: "GPS-enabled crew tracking for roofing job sites and storm workloads.",
  },
  {
    label: "Best Time Tracking Software for General Contractors (2026)",
    href: "/time-tracking/best-for/general-contractors",
    description: "Project labor tracking across multiple sites, crews, and supervisors.",
  },
  {
    label: "Best Time Tracking Software for Landscaping Companies (2026)",
    href: "/time-tracking/best-for/landscaping",
    description: "Route and project labor visibility for landscaping teams.",
  },
  {
    label: "Best Time Tracking Software for Construction Companies (2026)",
    href: "/time-tracking/best-for/construction",
    description: "Field labor reporting, cost-code alignment, and payroll-ready timesheets.",
  },
  {
    label: "Best Time Tracking Software for Remodeling Businesses (2026)",
    href: "/time-tracking/best-for/remodeling",
    description: "Project-phase labor tracking for remodel crews and subcontracted work.",
  },
  {
    label: "Best Time Tracking Software for Handyman Businesses (2026)",
    href: "/time-tracking/best-for/handyman",
    description: "Simple and affordable mobile timesheets for handyman teams.",
  },
  {
    label: "Best Time Tracking Software for Property Management Companies (2026)",
    href: "/time-tracking/best-for/property-management",
    description: "Track maintenance and inspection labor by property and portfolio.",
  },
  {
    label: "Best Time Tracking Software for Pest Control Businesses (2026)",
    href: "/time-tracking/best-for/pest-control",
    description: "Route technician tracking and payroll support for pest control operations.",
  },
  {
    label: "Best Time Tracking Software for Pool Service Companies (2026)",
    href: "/time-tracking/best-for/pool-service",
    description: "Mobile route tracking for recurring pool service and repair work.",
  },
  {
    label: "Best Time Tracking Software for Junk Removal Businesses (2026)",
    href: "/time-tracking/best-for/junk-removal",
    description: "Fast field timesheets for junk removal crews and multi-stop routes.",
  },
  {
    label: "Best Time Tracking Software for Moving Companies (2026)",
    href: "/time-tracking/best-for/moving",
    description: "Crew and route labor tracking for local and long-distance moves.",
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

export default function TimeTrackingBestForIndexPage() {
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
                    href="/time-tracking"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Time Tracking
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Time Tracking Software by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Find time tracking software that fits your situation, from freelancers and agencies to trade and field-service
              businesses.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a scenario to see our top picks and guidance.">
              Time tracking by use case
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
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Time Tracking Software by Use Case | BeltStack",
    description:
      "Browse our best time tracking software picks by use case, including freelancers, agencies, consultants, small businesses, and remote teams.",
  };
}


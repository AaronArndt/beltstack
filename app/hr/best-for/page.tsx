import Link from "next/link";
import { Footer } from "@/components/Footer";

const SCENARIOS = [
  {
    label: "Best HR Software (2026)",
    href: "/hr/best-hr-software",
    description:
      "Our full rankings of the best HR platforms for small businesses, startups, agencies, and global teams.",
  },
  {
    label: "Best HR Software for Freelancers (2026)",
    href: "/hr/best-for/freelancers",
    description:
      "Lightweight HR and payroll options for solo operators and consultants planning their first hire.",
  },
  {
    label: "Best HR Software for Small Businesses (2026)",
    href: "/hr/best-for/small-business",
    description:
      "All-in-one HR and payroll tools for small teams that need payroll, benefits, and onboarding in one place.",
  },
  {
    label: "Best HR Software for Startups (2026)",
    href: "/hr/best-for/startups",
    description:
      "HR platforms for high-growth startups that are adding headcount quickly and may hire across locations.",
  },
  {
    label: "Best HR Software for Agencies (2026)",
    href: "/hr/best-for/agencies",
    description:
      "HR tools for agencies that juggle client work, billable hours, and a mix of full-time and contract talent.",
  },
  {
    label: "Best HR Software for Global Teams (2026)",
    href: "/hr/best-for/global-teams",
    description:
      "HR platforms that support international hiring, multi-country payroll, and compliance across borders.",
  },
  {
    label: "Best HR Software for HVAC Businesses (2026)",
    href: "/hr/best-for/hvac",
    description: "Payroll, onboarding, and compliance workflows built for HVAC field and office teams.",
  },
  {
    label: "Best HR Software for Plumbing Companies (2026)",
    href: "/hr/best-for/plumbing",
    description: "HR and payroll tools for plumbing teams with mixed office and field operations.",
  },
  {
    label: "Best HR Software for Electricians (2026)",
    href: "/hr/best-for/electricians",
    description: "HR workflows for electrical contractor hiring, onboarding, and payroll accuracy.",
  },
  {
    label: "Best HR Software for Painting Contractors (2026)",
    href: "/hr/best-for/painting",
    description: "Seasonal hiring, payroll, and onboarding support for painting contractor teams.",
  },
  {
    label: "Best HR Software for Roofing Companies (2026)",
    href: "/hr/best-for/roofing",
    description: "HR and payroll systems that scale with roofing crews and compliance needs.",
  },
  {
    label: "Best HR Software for General Contractors (2026)",
    href: "/hr/best-for/general-contractors",
    description: "HR software for multi-role GC teams and compliance-heavy operations.",
  },
  {
    label: "Best HR Software for Landscaping Companies (2026)",
    href: "/hr/best-for/landscaping",
    description: "Seasonal workforce HR and payroll support for landscaping businesses.",
  },
  {
    label: "Best HR Software for Construction Companies (2026)",
    href: "/hr/best-for/construction",
    description: "HR systems for construction workforce scaling and payroll control.",
  },
  {
    label: "Best HR Software for Remodeling Businesses (2026)",
    href: "/hr/best-for/remodeling",
    description: "Project-driven HR and payroll workflows for remodeling teams.",
  },
  {
    label: "Best HR Software for Handyman Businesses (2026)",
    href: "/hr/best-for/handyman",
    description: "Affordable HR and payroll options for lean handyman operations.",
  },
  {
    label: "Best HR Software for Property Management Companies (2026)",
    href: "/hr/best-for/property-management",
    description: "Mixed-workforce HR and payroll tools for property management companies.",
  },
  {
    label: "Best HR Software for Pest Control Businesses (2026)",
    href: "/hr/best-for/pest-control",
    description: "HR and payroll support for route-based pest control teams.",
  },
  {
    label: "Best HR Software for Pool Service Companies (2026)",
    href: "/hr/best-for/pool-service",
    description: "Seasonal HR and payroll workflows for pool service operations.",
  },
  {
    label: "Best HR Software for Junk Removal Businesses (2026)",
    href: "/hr/best-for/junk-removal",
    description: "Payroll and onboarding support for fast-moving junk removal teams.",
  },
  {
    label: "Best HR Software for Moving Companies (2026)",
    href: "/hr/best-for/moving",
    description: "Crew-focused HR and payroll systems for moving businesses.",
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

export default function HrBestForIndexPage() {
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
                    href="/hr"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    HR
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best HR Software by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Find HR software that fits your situation, from freelancers and startups to trade and field-service
              businesses.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a scenario to see our top picks and guidance.">
              HR by use case
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
    title: "Best HR Software by Use Case | BeltStack",
    description:
      "Browse our best HR software picks by use case, including freelancers, small businesses, startups, agencies, and global teams.",
  };
}


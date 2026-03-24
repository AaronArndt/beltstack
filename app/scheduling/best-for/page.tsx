import Link from "next/link";
import { Footer } from "@/components/Footer";

const SCENARIOS = [
  {
    label: "Best scheduling software overall",
    href: "/scheduling/best-scheduling-software",
    description: "Our full rankings of the best scheduling tools for freelancers, consultants, service businesses, and teams.",
  },
  {
    label: "Best scheduling software for freelancers",
    href: "/scheduling/best-for/freelancers",
    description: "Simple booking links, calendar sync, and reminders so you spend less time on back-and-forth.",
  },
  {
    label: "Best scheduling software for consultants",
    href: "/scheduling/best-for/consultants",
    description: "Intake forms, packages, payment at booking, and calendar sync for coaches and consultants.",
  },
  {
    label: "Best scheduling software for small business",
    href: "/scheduling/best-for/small-business",
    description: "Free tiers, team features, and when to upgrade so one or a few staff can manage appointments.",
  },
  {
    label: "Best scheduling software for service businesses",
    href: "/scheduling/best-for/service-business",
    description: "Staff scheduling, recurring appointments, payments, and reminders for salons, clinics, and local services.",
  },
  {
    label: "Best scheduling software for teams",
    href: "/scheduling/best-for/teams",
    description: "Round-robin booking, collective availability, buffer time, and team-friendly pricing.",
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

export default function SchedulingBestForIndexPage() {
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
                    href="/scheduling"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Scheduling
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Scheduling Software by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Find scheduling software that fits your situation—freelancers, consultants, small businesses, service
              businesses, and teams.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a scenario to see our top picks and guidance.">
              Scheduling by use case
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] font-bold">{item.label}</h3>
                  <p className="mt-1 text-[#57534E] text-sm leading-relaxed">{item.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#10B981] hover:underline">
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
    title: "Best Scheduling Software by Use Case | BeltStack",
    description:
      "Browse our best scheduling software picks by use case, including freelancers, consultants, small businesses, service businesses, and teams.",
  };
}

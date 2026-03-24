import Link from "next/link";
import { Footer } from "@/components/Footer";

const SCENARIOS = [
  {
    label: "Best time tracking software overall",
    href: "/time-tracking/best-time-tracking-software",
    description: "Our full rankings of the best time tracking tools for small businesses, freelancers, and teams.",
  },
  {
    label: "Best time tracking software for freelancers",
    href: "/time-tracking/best-for/freelancers",
    description: "Time tracking tools that make it easy to log billable hours and invoice clients.",
  },
  {
    label: "Best time tracking software for agencies",
    href: "/time-tracking/best-for/agencies",
    description: "Track time across clients and projects, manage utilization, and keep retainers on budget.",
  },
  {
    label: "Best time tracking software for consultants",
    href: "/time-tracking/best-for/consultants",
    description: "Support service billing, retainers, and clear client reporting.",
  },
  {
    label: "Best time tracking software for small business",
    href: "/time-tracking/best-for/small-business",
    description: "Simple, affordable tools that fit small teams and mixed roles.",
  },
  {
    label: "Best time tracking software for remote teams",
    href: "/time-tracking/best-for/remote-teams",
    description: "Time tracking and monitoring options for distributed and field teams.",
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
              Find time tracking software that fits your situation—freelancers, agencies, consultants, small businesses, and
              remote teams.
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
    title: "Best Time Tracking Software by Use Case | BeltStack",
    description:
      "Browse our best time tracking software picks by use case, including freelancers, agencies, consultants, small businesses, and remote teams.",
  };
}


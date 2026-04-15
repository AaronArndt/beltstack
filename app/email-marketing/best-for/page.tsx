import Link from "next/link";
import { Footer } from "@/components/Footer";
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

export default function EmailMarketingBestForHubPage() {
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
                  <Link href="/email-marketing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Email Marketing
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best For
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Email Marketing Software by Use Case
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Scenario-based picks for contractors, trades, and multi-crew home services—balanced against what your office can realistically automate every month.
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
              <Link href={getEmailMarketingBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline">
                Best email marketing for contractors
              </Link>{" "}
              ·{" "}
              <Link href="/email-marketing/compare" className="font-semibold text-[#10B981] hover:underline">
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

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getCrmBestForUrl } from "@/lib/routes";

const SCENARIOS = [
  {
    label: "Best CRM software overall",
    href: "/crm/best-crm-software",
    description: "Our full rankings of the best CRM software for small businesses, sales teams, and growing companies.",
  },
  {
    label: "Best CRM software for freelancers",
    href: getCrmBestForUrl("freelancers"),
    description: "Lightweight CRM for client tracking, leads, and follow-ups without enterprise complexity.",
  },
  {
    label: "Best CRM software for small business",
    href: getCrmBestForUrl("small-business"),
    description: "CRM that scales with your team: lead management, automation, and reporting without big budgets.",
  },
  {
    label: "Best CRM software for startups",
    href: getCrmBestForUrl("startups"),
    description: "Affordable CRM with fast setup and room to grow as you add sales and marketing.",
  },
  {
    label: "Best CRM software for agencies",
    href: getCrmBestForUrl("agencies"),
    description: "Manage clients, deals, and pipeline across multiple accounts with reporting and collaboration.",
  },
  {
    label: "Best CRM software for sales teams",
    href: getCrmBestForUrl("sales-teams"),
    description: "Pipeline-focused CRM for inside and field sales, with reporting and forecasting.",
  },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export default function CrmBestForIndexPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        <section className="bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
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
                    href="/crm"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    CRM
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best for
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best CRM Software by Use Case
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              Find CRM software that fits your situation—freelancers, small business, startups, agencies, and sales teams.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Choose a use case to see our top picks and guidance.">
              CRM by use case
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] font-bold">{item.label}</h3>
                  <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed">{item.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#10B981] hover:underline">
                    See picks →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="More CRM resources.">
              Related links
            </SectionTitle>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link href="/crm" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  CRM hub
                </Link>
              </li>
              <li>
                <Link href="/crm/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  Compare CRM software
                </Link>
              </li>
              <li>
                <Link href="/crm/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  CRM guides
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
    title: "Best CRM Software by Use Case | BeltStack",
    description:
      "Browse our best CRM software picks by use case: freelancers, small business, startups, agencies, and sales teams. Find the right CRM for your situation.",
  };
}

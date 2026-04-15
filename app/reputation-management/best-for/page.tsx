import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getReputationManagementBestForUrl } from "@/lib/routes";

const LINKS = [
  {
    label: "Best Reputation Management Software (2026)",
    href: "/reputation-management/best-reputation-management-software",
    description: "Full rankings and trade-offs across reputation platforms.",
  },
  { label: "Best Reputation Management Software for HVAC Businesses (2026)", href: getReputationManagementBestForUrl("hvac"), description: "Seasonal review velocity and response workflows for HVAC teams." },
  { label: "Best Reputation Management Software for Plumbing Companies (2026)", href: getReputationManagementBestForUrl("plumbing"), description: "Urgent-intent review and response workflows for plumbing businesses." },
  { label: "Best Reputation Management Software for Electricians (2026)", href: getReputationManagementBestForUrl("electricians"), description: "Trust-focused review operations for electrical contractors." },
  { label: "Best Reputation Management Software for Painting Contractors (2026)", href: getReputationManagementBestForUrl("painting"), description: "Visual-proof and referral-driven review workflows for painters." },
  { label: "Best Reputation Management Software for Roofing Companies (2026)", href: getReputationManagementBestForUrl("roofing"), description: "High-ticket reputation management for roofing teams." },
  { label: "Best Reputation Management Software for General Contractors (2026)", href: getReputationManagementBestForUrl("general-contractors"), description: "Governance-ready review workflows for general contractors." },
  { label: "Best Reputation Management Software for Landscaping Companies (2026)", href: getReputationManagementBestForUrl("landscaping"), description: "Seasonal and recurring-service review operations for landscapers." },
  { label: "Best Reputation Management Software for Construction Companies (2026)", href: getReputationManagementBestForUrl("construction"), description: "Structured reputation controls for construction organizations." },
  { label: "Best Reputation Management Software for Remodeling Businesses (2026)", href: getReputationManagementBestForUrl("remodeling"), description: "Long-cycle trust and social proof systems for remodelers." },
  { label: "Best Reputation Management Software for Handyman Businesses (2026)", href: getReputationManagementBestForUrl("handyman"), description: "Lean, practical review-growth workflows for handyman teams." },
  { label: "Best Reputation Management Software for Property Management Companies (2026)", href: getReputationManagementBestForUrl("property-management"), description: "Multi-property reputation workflows and response governance." },
  { label: "Best Reputation Management Software for Pest Control Businesses (2026)", href: getReputationManagementBestForUrl("pest-control"), description: "Recurring-service trust workflows for pest control businesses." },
  { label: "Best Reputation Management Software for Pool Service Companies (2026)", href: getReputationManagementBestForUrl("pool-service"), description: "Seasonal review consistency for pool service operators." },
  { label: "Best Reputation Management Software for Junk Removal Businesses (2026)", href: getReputationManagementBestForUrl("junk-removal"), description: "Fast-turn reputation workflows for junk removal teams." },
  { label: "Best Reputation Management Software for Moving Companies (2026)", href: getReputationManagementBestForUrl("moving"), description: "Trust and response workflows for moving companies." },
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

export default function ReputationManagementBestForHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/reputation-management" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Reputation Management</Link></li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">Best For</li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Best Reputation Management Software by Use Case</h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Scenario-based picks for trade and field-service businesses managing review growth, response quality, and local trust.
            </p>
          </div>
        </section>
        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Jump to a scenario.">Pick your situation</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {LINKS.map((item) => (
                <Link key={item.href} href={item.href} className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2">
                  <h2 className="text-[#1A2D48] text-base font-bold group-hover:text-[#10B981]">{item.label}</h2>
                  <p className="mt-2 text-[#57534E] text-sm leading-relaxed flex-1">{item.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#10B981] group-hover:underline">Open →</span>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#57534E]">
              <Link href={getReputationManagementBestForUrl("hvac")} className="font-semibold text-[#10B981] hover:underline">Best for HVAC businesses</Link>
              {" · "}
              <Link href="/reputation-management/compare" className="font-semibold text-[#10B981] hover:underline">All comparisons</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

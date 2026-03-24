import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getHelpdeskBestForUrl } from "@/lib/routes";

const SCENARIOS = [
  {
    label: "Best helpdesk software overall",
    href: "/helpdesk/best-helpdesk-software",
    description: "Our full rankings of the best helpdesk software for small businesses, startups, ecommerce, and support teams.",
  },
  {
    label: "Best helpdesk software for small business",
    href: getHelpdeskBestForUrl("small-business"),
    description: "Helpdesk tools that stay simple and affordable as you grow. Ticketing, collaboration, and ease of use.",
  },
  {
    label: "Best helpdesk software for startups",
    href: getHelpdeskBestForUrl("startups"),
    description: "Affordable helpdesk with fast setup and room to scale as you add support volume.",
  },
  {
    label: "Best helpdesk software for ecommerce",
    href: getHelpdeskBestForUrl("ecommerce"),
    description: "Helpdesk built for stores with order context, customer history, and ecommerce integrations.",
  },
  {
    label: "Best helpdesk software for SaaS",
    href: getHelpdeskBestForUrl("saas"),
    description: "Ticketing, customer lifecycle context, and messaging for product-led and SaaS support teams.",
  },
  {
    label: "Best helpdesk software for growing teams",
    href: getHelpdeskBestForUrl("growing-teams"),
    description: "Helpdesk that scales with your team: more agents, channels, automation, and reporting.",
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
              Find helpdesk software that fits your situation—small business, startups, ecommerce, SaaS, and growing support teams.
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
      "Browse our best helpdesk software picks by use case: small business, startups, ecommerce, SaaS, and growing teams. Find the right helpdesk for your situation.",
  };
}

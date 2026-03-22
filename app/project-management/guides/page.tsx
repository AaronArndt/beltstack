import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedProjectManagementResources } from "@/components/guides/RelatedProjectManagementResources";
import { PROJECT_MANAGEMENT_GUIDES } from "@/lib/data/projectManagementGuides";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

type GuideCardProps = { title: string; href: string; description: string };

function GuideCard({ title, href, description }: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
    >
      <h3 className="text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
      <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
        Read guide →
      </span>
    </Link>
  );
}

export default function ProjectManagementGuidesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        {/* ——— Hero ——— */}
        <section className="bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/project-management" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Project Management
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Guides
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Project Management Software Guides
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              Learn what project management software is, how businesses use it to plan and deliver work, and how these guides help teams choose the right tools.
            </p>
            <GuideLastUpdated date="March 8, 2026" />
            <p className="mt-5 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              Project management software helps teams organize tasks, track progress, and collaborate in one place—replacing scattered spreadsheets and email threads. Businesses use it to run projects, manage deliverables, and keep everyone aligned on who is doing what and by when. These guides help small businesses, agencies, and remote teams understand project management tools, key features, pricing, and how to compare platforms. You can also explore our{" "}
              <Link href="/project-management" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                project management software hub
              </Link>
              ,{" "}
              <Link href="/project-management/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                project management comparisons
              </Link>
              , and{" "}
              <Link href="/project-management/best-project-management-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                best project management software
              </Link>{" "}
              roundup to evaluate tools and find the best fit.
            </p>
          </div>
        </section>

        {/* ——— Project Management Guides ——— */}
        <section id="project-management-guides" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Educational guides on how project management software works, who it's for, and how to choose a platform.">
              Project Management Guides
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECT_MANAGEMENT_GUIDES.map((guide) => (
                <GuideCard
                  key={guide.href}
                  title={guide.title}
                  href={guide.href}
                  description={guide.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ——— Related Project Management Resources ——— */}
        <RelatedProjectManagementResources />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Project Management Software Guides | BeltStack",
    description:
      "Learn what project management software is, how businesses use it, and how to choose the right project management tools for your team, agency, or remote workforce.",
  };
}

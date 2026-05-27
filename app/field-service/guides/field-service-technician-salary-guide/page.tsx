import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getFieldServiceReviewUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  {
    q: "Are these salary figures guaranteed?",
    a: "No. Figures in this guide describe typical U.S. ranges reported by employers, job boards, and industry surveys. Actual pay varies by city, union status, employer size, overtime rules, and individual performance. Use ranges for planning, not as offers.",
  },
  {
    q: "Do field service technicians earn commission?",
    a: "Many HVAC, plumbing, and electrical employers combine base pay with spiffs or commission on maintenance agreements, replacements, or upsells. Total compensation can exceed base salary ranges when techs sell confidently and ethically.",
  },
  {
    q: "How much does experience change pay?",
    a: "Entry-level apprentices and helpers often sit at the low end of trade ranges. Journeypersons with licenses and five-plus years commonly reach mid-range. Lead techs, specialists, and supervisors stretch toward the high end, especially in high-cost metros.",
  },
  {
    q: "Which trade pays field service techs the most?",
    a: "Commercial electrical, industrial controls, and specialized medical or data-center equipment roles often top residential averages. Within home services, master-level HVAC and plumbing in tight labor markets frequently outpace general appliance or route-based roles.",
  },
  {
    q: "Does certification increase salary?",
    a: "Licenses required for legal work—EPA for refrigerant, state plumbing or electrical cards—unlock journeyperson pay tiers. Optional manufacturer or NATE certifications help in hiring and may support higher wage bands at employers that value them.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Contractors and home services",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service pros",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Growing service companies",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/field-service-technician-salary-guide";

export default function FieldServiceTechnicianSalaryGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/field-service" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/field-service/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Field Service Technician Salary Guide
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Field Service Technician Salary Guide
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Typical U.S. salary ranges for field service technicians by trade and experience level—educational
                    benchmarks, not guaranteed pay for any single job or market.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service technician pay reflects trade demand, licensing requirements, and whether the role
                      is residential, commercial, or industrial. Most employers quote hourly wages or annual salary
                      plus overtime, on-call premiums, and sometimes commission on sold work. Geography moves numbers
                      sharply: the same HVAC journeyperson title can sit tens of thousands apart between rural markets
                      and major metros.
                    </p>
                    <p>
                      This guide uses typical range language—approximate bands seen across U.S. job postings and
                      industry reports in 2025–2026—not a promise of what you will earn. Union shops, employee-owned
                      firms, and private equity-backed roll-ups structure compensation differently. Always confirm
                      ranges with employers in your target market.
                    </p>
                    <p>
                      Understand the role before comparing numbers: read{" "}
                      <Link href="/field-service/guides/what-does-a-field-service-technician-do" className={linkGreen}>
                        what does a field service technician do
                      </Link>{" "}
                      for daily responsibilities and trade paths. Training timelines that affect starting pay are
                      covered in{" "}
                      <Link href="/field-service/guides/how-to-become-a-field-service-technician" className={linkGreen}>
                        how to become a field service technician
                      </Link>
                      .
                    </p>
                    <p>
                      Licensing and certification requirements that unlock higher wage tiers are summarized in{" "}
                      <Link href="/field-service/guides/what-qualifications-field-technicians-need" className={linkGreen}>
                        what qualifications field technicians need
                      </Link>
                      . Employers also increasingly expect comfort with mobile job apps—see{" "}
                      <Link href="/field-service/guides/how-field-service-technicians-use-software" className={linkGreen}>
                        how field service technicians use software
                      </Link>{" "}
                      for skills that affect hiring at tech-forward companies.
                    </p>
                  </div>
                </section>

                <section id="entry-level" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Helpers, apprentices, and first-year field roles.">Entry-Level Typical Ranges</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Helpers and apprentices in HVAC, plumbing, and electrical often fall in a typical range of roughly
                      $32,000–$45,000 base annual equivalent ($16–$22 per hour), before overtime. Route roles such as
                      pest control or appliance repair may start near $35,000–$48,000 when commission or route bonuses
                      apply.
                    </p>
                    <p>
                      Entry pay assumes supervised field time, incomplete licenses, and limited diagnostic autonomy.
                      Benefits vary: smaller contractors may offer minimal PTO; larger employers add health coverage and
                      tool allowances that change total compensation math.
                    </p>
                    <p>
                      Trade school graduates sometimes start above pure helper wages if they arrive with EPA or OSHA
                      credentials and can run basic jobs with light oversight.
                    </p>
                  </div>
                </section>

                <section id="mid-career" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Licensed journeypersons with independent job ownership.">Mid-Career Typical Ranges</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Journeyperson HVAC, plumbing, and electrical techs with active licenses and three to seven years
                      of field experience commonly land in a typical range of about $50,000–$75,000 base, with strong
                      overtime markets pushing total cash higher. Commercial-focused roles and union scales can exceed
                      that band on base alone.
                    </p>
                    <p>
                      Specialized field service—generators, commercial refrigeration, fire-life-safety, medical
                      equipment—often commands mid-to-upper portions of the range because error cost and certification
                      burden are higher.
                    </p>
                    <p>
                      Performance pay matters here: maintenance agreement sales, replacement leads, and spiffs on
                      parts upgrades can add $5,000–$20,000 or more annually at employers that incentivize revenue per
                      truck.
                    </p>
                  </div>
                </section>

                <section id="senior-lead" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Lead techs, specialists, and field supervisors.">Senior and Lead Typical Ranges</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Lead technicians, master-level tradespeople, and field supervisors frequently see typical ranges
                      from roughly $70,000–$95,000 base in residential service, stretching toward $85,000–$110,000+ in
                      high-demand commercial or industrial niches. On-call responsibility and team leadership usually
                      come with these tiers.
                    </p>
                    <p>
                      OEM and industrial field service engineers with factory certifications may overlap or exceed those
                      bands, especially when travel and per-diem compensation are included.
                    </p>
                    <p>
                      At this level, total pay is often negotiated as a package: base, bonus on department metrics,
                      company vehicle, phone stipend, and continued training budget.
                    </p>
                  </div>
                </section>

                <section id="by-trade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Illustrative bands—not exhaustive for every niche.">Typical Ranges by Trade (Mid-Career Snapshot)</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-neutral-800">HVAC service:</strong> typical mid-career range about
                      $52,000–$78,000 base; peak season overtime and install assist can raise totals. NATE or manufacturer
                      certs support the upper band at quality-focused employers.
                    </p>
                    <p>
                      <strong className="text-neutral-800">Plumbing service:</strong> typical mid-career range about
                      $55,000–$80,000; drain and sewer specialists or medical gas credentials can exceed general
                      service averages in regulated facilities work.
                    </p>
                    <p>
                      <strong className="text-neutral-800">Electrical service:</strong> typical mid-career range about
                      $58,000–$85,000; commercial and industrial electricians often beat residential averages. Low-voltage
                      and controls techs sit in a wide band depending on client mix.
                    </p>
                    <p>
                      <strong className="text-neutral-800">Appliance, pest, and route service:</strong> typical
                      mid-career range about $45,000–$65,000 base with variable commission; experienced route managers
                      with dense territories can outperform base-heavy trade roles when retention is strong.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to use salary ranges responsibly.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Field service tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedFieldServiceResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Field Service Technician Salary Guide | BeltStack Guide",
    description:
      "Typical U.S. salary ranges for field service technicians by trade and experience—entry-level through senior roles, with educational benchmarks not guaranteed figures.",
    keywords: [
      "field service technician salary",
      "HVAC technician pay",
      "plumber salary range",
      "electrician field service pay",
      "service technician compensation",
      "trade technician wages",
    ],
  };
}

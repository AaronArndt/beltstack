import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
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
    q: "What should I look for when choosing field service software?",
    a: "Focus on scheduling and dispatch, mobile apps for technicians, estimates and invoicing, customer management, and pricing. Make sure the calendar and dispatch board are easy to read, the mobile app is solid, and you can send professional estimates and invoices without leaving the system.",
  },
  {
    q: "Do I need an all-in-one platform or a simple scheduler?",
    a: "Solo contractors and very small teams may start with a simpler tool for scheduling and basic invoicing. As you grow, an all-in-one platform that combines dispatch, customer history, invoicing, and reporting (like Jobber or ServiceTitan) becomes more helpful. Start with what your crew will actually use.",
  },
  {
    q: "How important are integrations with accounting and payments?",
    a: "If you invoice frequently or want online payments, integrations with accounting (QuickBooks, Xero) and payment processors reduce manual work and errors. Look for direct sync or solid exports so revenue and receivables stay accurate.",
  },
  {
    q: "Can I switch field service platforms later?",
    a: "Yes, but it takes planning. Make sure you can export customer, job, and invoice data and import it into the new tool. Running a trial with real jobs before a full switch helps you catch gaps early.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Best overall for contractors",
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

export default function HowToChooseFieldServiceSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
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
                        href="/field-service"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      How to Choose Field Service Management Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Choose Field Service Management Software
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Key factors when comparing field service platforms: scheduling and dispatch, mobile apps, invoicing,
                    customer management, and pricing.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choosing field service management software starts with how your crews work today: how you schedule
                      jobs, assign technicians, track work in progress, and send invoices. A tool that fits a solo
                      electrician may be the wrong choice for a 20‑tech HVAC company. This guide walks through the main
                      factors to evaluate so you can shortlist and compare tools with confidence.
                    </p>
                    <p>
                      Use our{" "}
                      <Link href="/field-service" className={linkGreen}>
                        field service hub
                      </Link>
                      ,{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      to see how tools like Jobber, Housecall Pro, ServiceTitan, Service Fusion, and Workiz stack up for
                      your trade and team size.
                    </p>
                  </div>
                </section>
                <section id="key-factors" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to evaluate first.">
                    Key Factors When Choosing Field Service Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>These factors apply to most contractors and service companies. Weight them by your trade and size.</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Scheduling and dispatch</strong> — You should be able to see
                          the whole day or week at a glance, assign jobs to technicians, and avoid double‑booking. Drag‑and‑drop
                          scheduling, recurring jobs, and basic route optimization matter more as you add trucks.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Mobile experience</strong> — Techs should see their schedule,
                          job notes, and customer details, and update status from the field. Offline support and easy photo
                          upload reduce call‑backs to the office.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Estimates, invoices, and payments</strong> — Look for built-in
                          estimates and invoices, plus the ability to take card payments on‑site or online. If you use{" "}
                          <Link href="/accounting" className={linkGreen}>
                            accounting software
                          </Link>
                          , check for integrations so revenue and taxes stay accurate.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Customer and equipment history</strong> — Good FSM tools keep
                          job history, equipment details, and notes per customer or property so any tech can show up prepared,
                          even if they have never been to the site before.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="pricing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Planning your budget.">Pricing and Plan Structure</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service tools are usually priced per user per month, sometimes with minimum seats. Entry‑level
                      plans often limit features like advanced reporting, marketing tools, or integrations. Model cost at
                      your current number of office staff and techs, and at the size you expect in 12–18 months.
                    </p>
                    <p>
                      Watch for add‑ons like marketing automation, advanced reporting, or integrated phone systems. These
                      can be useful at scale but may not be necessary for a small crew. Start with the tier that covers
                      your core needs (scheduling, dispatch, invoicing, payments) and upgrade when you clearly need more.
                    </p>
                  </div>
                </section>
                <section id="how-to-compare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical comparison steps.">
                    How to Compare Field Service Management Options
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Shortlist two to four tools based on trade, team size, and budget. Read our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and full{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>
                        Jobber
                      </Link>
                      ,{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>
                      ,{" "}
                      <Link href={getFieldServiceReviewUrl("servicetitan")} className={linkGreen}>
                        ServiceTitan
                      </Link>
                      ,{" "}
                      <Link href={getFieldServiceReviewUrl("service-fusion")} className={linkGreen}>
                        Service Fusion
                      </Link>{" "}
                      and{" "}
                      <Link href={getFieldServiceReviewUrl("workiz")} className={linkGreen}>
                        Workiz
                      </Link>{" "}
                      reviews. Then run a free trial with real jobs and at least one or two technicians before you commit.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
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
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Choose Field Service Management Software | BeltStack Guide",
    description:
      "Key factors when comparing field service platforms: scheduling, dispatch, mobile apps, invoicing, customer management, and pricing.",
  };
}


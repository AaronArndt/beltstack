import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { getFieldServiceReviewUrl, getFieldServiceCompareUrl } from "@/lib/routes";

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
    q: "What does field service software do for plumbing businesses?",
    a: "FSM software helps plumbing companies schedule and dispatch jobs, keep customer and job history in one place, give techs job details on their phones, and generate invoices quickly so you get paid faster.",
  },
  {
    q: "Is FSM overkill for a small plumbing shop?",
    a: "Not usually. Even a small plumbing shop benefits from a shared schedule, better communication, and fewer missed invoices. Tools like Jobber, Housecall Pro, and Workiz are built with smaller plumbing teams in mind.",
  },
  {
    q: "Which FSM tools are popular with plumbers?",
    a: "Jobber, Housecall Pro, and Workiz are common for smaller plumbing teams. Mid-market shops often look at Service Fusion; large, fast-growing operations may evaluate ServiceTitan.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Best overall for plumbing contractors",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Best for residential plumbing",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "Workiz",
    logoSrc: "/Logos/workiz.jpeg",
    rating: "4.4",
    bestFor: "Budget-friendly for small plumbing teams",
    reviewHref: getFieldServiceReviewUrl("workiz"),
  },
];

export default function FieldServiceSoftwareForPlumbingPage() {
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
                      Field Service Software for Plumbing Businesses
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Field Service Software for Plumbing Businesses
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    How plumbing companies use FSM tools to schedule jobs, dispatch plumbers, keep customers informed,
                    and turn every completed job into an invoice—without drowning in paperwork.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Plumbing work is fast-paced and unpredictable: you mix planned work (re-pipes, installs, rough‑ins)
                      with emergency calls, warranty visits, and recurring maintenance. If you rely only on a notebook
                      and memory, it is easy to lose track of what is booked, what is done, and what still needs to be
                      invoiced.
                    </p>
                    <p>
                      Field service software gives plumbing businesses one place to manage jobs, schedules, and
                      invoicing. Platforms like{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>
                        Jobber
                      </Link>
                      ,{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>{" "}
                      and{" "}
                      <Link href={getFieldServiceReviewUrl("workiz")} className={linkGreen}>
                        Workiz
                      </Link>{" "}
                      are common picks for smaller plumbing teams that want something more powerful than a calendar but
                      less heavy than enterprise software.
                    </p>
                    <p>
                      For a shortlist of plumbing‑friendly tools, start with our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and comparisons like{" "}
                      <Link href={getFieldServiceCompareUrl("jobber-vs-housecall-pro")} className={linkGreen}>
                        Jobber vs Housecall Pro
                      </Link>{" "}
                      and{" "}
                      <Link href={getFieldServiceCompareUrl("jobber-vs-workiz")} className={linkGreen}>
                        Jobber vs Workiz
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="scheduling" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Staying ahead of a mixed schedule of emergencies and planned work.">
                    Scheduling and Dispatch for Plumbing Teams
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Good scheduling for plumbers means:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>A clear calendar that shows each plumber’s day and open gaps.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Easy drag‑and‑drop reassignments when emergencies come in or jobs run long.</span>
                      </li>
                    </ul>
                    <p>
                      Tools like Jobber, Housecall Pro, and Workiz all offer solid drag‑and‑drop scheduling for plumbing
                      work. The main difference is how deep they go into reporting, customer history, and integrations.
                    </p>
                  </div>
                </section>

                <section id="mobile" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keeping plumbers connected without constant calls to the office.">
                    Mobile Apps and Job Updates from the Field
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Plumbers spend most of the day in crawlspaces, basements, and on the road. Your FSM app should let
                      them:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>See their schedule and job details on their phone.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Add photos, notes, and parts used, and mark jobs complete from the field.</span>
                      </li>
                    </ul>
                    <p>
                      That keeps office staff in the loop without relying on end‑of‑day paperwork. If your techs
                      regularly forget to bring back paper work orders, moving to a mobile app is one of the fastest
                      wins you can get.
                    </p>
                  </div>
                </section>

                <section id="billing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Making sure every completed job turns into revenue.">
                    Estimates, Invoices, and Customer Communication
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Plumbing jobs often require on‑site quotes and change orders. FSM tools help by letting you create
                      estimates, capture approval, and convert them into work orders in a few clicks. Once the job is
                      complete, turning that record into an invoice should be just as easy.
                    </p>
                    <p>
                      Customer communication—appointment reminders, on‑the‑way texts, and follow‑ups—matter too.{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>{" "}
                      leans into this for residential plumbing;{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>
                        Jobber
                      </Link>{" "}
                      offers strong quoting and invoicing for a wider range of trades.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions from plumbing owners.">FAQs</SectionTitle>
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

        <RelatedFieldServiceResources excludeHref="/field-service/guides/field-service-software-for-plumbing" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Field Service Software for Plumbing Businesses | BeltStack Guide",
    description:
      "See how plumbing companies use field service management software for scheduling, dispatch, mobile job updates, and invoicing—and how to choose tools that fit smaller plumbing teams.",
  };
}


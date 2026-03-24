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
    q: "When is my small service business ready for field service software?",
    a: "You are usually ready once the owner or dispatcher spends more time chasing schedules, texts, and invoices than actually running the business. If you miss appointments, forget to invoice jobs, or rely on one person’s memory to know what is booked, it is time to adopt FSM software.",
  },
  {
    q: "Do I need an all-in-one FSM tool or just a simple scheduler?",
    a: "Solo contractors and very small teams can start with a lighter tool—but if you plan to grow, an all-in-one platform that handles jobs, scheduling, invoicing, and payments (like Jobber or Housecall Pro) usually pays off quickly. The key is picking a plan that fits your size and budget today, with room to grow.",
  },
  {
    q: "How much should small businesses budget for field service software?",
    a: "Many SMB-focused FSM tools start around $30–$80/month for a small team, with costs rising as you add technicians and features. Model pricing at your current crew size and where you want to be in 12–18 months so you are not surprised later.",
  },
  {
    q: "Can I switch FSM platforms later if I start with a cheaper option?",
    a: "Yes, many teams start with a lighter tool and upgrade later. Just plan for data export (customers, jobs, invoices) and expect a short period where you run both systems in parallel while you train your team on the new platform.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Best overall for small contractors",
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
    name: "Workiz",
    logoSrc: "/Logos/workiz.jpeg",
    rating: "4.4",
    bestFor: "Budget-friendly for small teams",
    reviewHref: getFieldServiceReviewUrl("workiz"),
  },
];

export default function FieldServiceSoftwareForSmallBusinessPage() {
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
                      Field Service Software for Small Business
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Field Service Software for Small Business
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Why small service businesses adopt field service management (FSM) tools, what they replace, and how
                    to choose software that fits a small crew without adding unnecessary complexity.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most small service businesses start with a familiar stack: a calendar app, text messages, paper
                      work orders, and an accounting tool like QuickBooks or Xero. That works for a while—but as the
                      schedule fills up and you add even a few technicians, the wheels start to wobble. Jobs are
                      forgotten, arrival times slip, and invoices go out late.
                    </p>
                    <p>
                      Field service management software replaces that patchwork with one place to schedule jobs, dispatch
                      techs, track progress, and send invoices. Tools like{" "}
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
                      are built specifically for small service teams, so you can get off spreadsheets without jumping
                      straight into enterprise software. This guide covers what FSM does for small businesses and how to
                      pick a tool that fits where you are today.
                    </p>
                    <p>
                      For a curated shortlist of tools, see our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service management software
                      </Link>{" "}
                      roundup and our{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        head-to-head comparisons
                      </Link>
                      , including{" "}
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

                <section
                  id="why-small-businesses-switch"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Common pain points that push small teams to FSM.">
                    Why Small Service Businesses Move to Field Service Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>We hear the same triggers from small contractors again and again:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Missed or double‑booked appointments</strong> — Jobs live
                          in the owner’s head, a paper notebook, and a basic calendar. When that breaks down, crews show
                          up twice or not at all.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Late or missing invoices</strong> — Techs text the office
                          when a job is done, but paperwork piles up. Weeks later, you realize several jobs were never
                          invoiced.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Too many disconnected tools</strong> — One app for
                          scheduling, another for invoices, another for payments, plus email and text. None of them
                          share a single view of customers or jobs.
                        </span>
                      </li>
                    </ul>
                    <p>
                      FSM platforms solve these problems by putting jobs, schedules, and billing into one system. Techs
                      see a clean schedule in the mobile app; office staff can tell at a glance which jobs are booked,
                      in progress, or waiting to be invoiced.
                    </p>
                  </div>
                </section>

                <section
                  id="core-capabilities"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="The basics your first FSM tool should cover.">
                    Core Capabilities Small Businesses Should Expect
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      As a small business, you do not need every advanced feature, but you do need a solid foundation:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Scheduling and dispatch</strong> — A drag‑and‑drop
                          calendar or dispatch board that lets you assign jobs, move them when customers reschedule, and
                          see who is free.{" "}
                          <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>
                            Jobber
                          </Link>{" "}
                          and{" "}
                          <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                            Housecall Pro
                          </Link>{" "}
                          both shine here.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Quoting and invoicing</strong> — Build estimates, convert
                          them to jobs, then turn completed work into invoices in a few clicks. Tools like Jobber,
                          Housecall Pro, and{" "}
                          <Link href={getFieldServiceReviewUrl("workiz")} className={linkGreen}>
                            Workiz
                          </Link>{" "}
                          help you send invoices same‑day instead of weeks later.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Customer communication</strong> — Appointment reminders,
                          on‑the‑way texts, and simple follow‑ups reduce no‑shows and make your business look more
                          professional than manual phone calls alone.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="choosing-right-size"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Avoid overbuying or underbuying.">
                    Choosing Software That Matches Your Size
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The biggest mistake small businesses make is jumping straight into an enterprise platform designed
                      for dozens of trucks and call‑center staff. Tools like{" "}
                      <Link href={getFieldServiceReviewUrl("servicetitan")} className={linkGreen}>
                        ServiceTitan
                      </Link>{" "}
                      can be fantastic—once you actually operate at that scale.
                    </p>
                    <p>As a rule of thumb:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          1–3 field staff: start with lighter tools such as Workiz or entry‑level Jobber/Housecall Pro
                          plans.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          4–10 field staff: platforms like Jobber or Housecall Pro are often the best balance of price
                          and capability.
                        </span>
                      </li>
                    </ul>
                    <p>
                      You can always grow into more advanced tools later. For now, prioritize a system your team will
                      actually use every day.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers for small service teams.">FAQs</SectionTitle>
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

        <RelatedFieldServiceResources excludeHref="/field-service/guides/field-service-software-for-small-business" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Field Service Software for Small Business | BeltStack Guide",
    description:
      "Learn when small service businesses should adopt field service management software, what it replaces, and how to choose an FSM tool that fits a small crew.",
  };
}


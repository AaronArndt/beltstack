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
    q: "Do technicians need company phones for field service apps?",
    a: "Many employers issue phones or tablets; others use BYOD with a managed app profile. What matters is reliable data in basements and industrial sites, offline sync when signal drops, and a device size that fits gloved hands and bright sunlight.",
  },
  {
    q: "What happens if a technician forgets to update job status?",
    a: "Dispatch loses visibility, customers miss arrival notifications, and billing may stall waiting for completion flags. Good teams treat status updates as part of the job—not optional admin—and apps that default sensible statuses reduce friction.",
  },
  {
    q: "Can field techs create estimates in mobile apps?",
    a: "Most FSM platforms let techs build line-item estimates on-site, apply price books, and send for customer approval. Approved quotes often convert to invoices without re-entry, which speeds same-day close rates.",
  },
  {
    q: "How much training do techs need on new software?",
    a: "Plan for hands-on practice on real job types, not a one-hour webinar. Technicians adopt tools that mirror their workflow: open job, do work, photo, signature, done. Over-customized forms and mandatory fields they do not understand drive workarounds.",
  },
  {
    q: "Does offline mode really work in the field?",
    a: "Quality varies by vendor. Test offline in actual dead zones: save photos, complete forms, and sync when back online without duplicate records. Technicians quickly abandon apps that lose data after a tunnel or rural job site.",
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

const PAGE_HREF = "/field-service/guides/how-field-service-technicians-use-software";

export default function HowFieldServiceTechniciansUseSoftwarePage() {
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
                      How Field Service Technicians Use Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Field Service Technicians Use Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    See how technicians use mobile field service apps for work orders, live status updates, photos,
                    signatures, and the documentation that keeps dispatch and billing aligned.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service software reaches technicians through mobile apps on phones or tablets. The app
                      replaces clipboards and carbon-copy work orders with a live job packet: customer details, equipment
                      history, tasks, parts, forms, and payment options in one place. What the tech completes on-site
                      flows back to the office without a second data entry pass.
                    </p>
                    <p>
                      Adoption lives or dies on friction. Technicians will use software that saves them phone calls to
                      the office and gets them to the next job faster. They will ignore apps that require redundant typing,
                      crash in basements, or hide the one button they need behind five menu taps.
                    </p>
                    <p>
                      For platform mechanics, read{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        how mobile field service apps work
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>{" "}
                      for evaluation criteria. Work order lifecycle from creation through billing is covered in{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>
                      .
                    </p>
                    <p>
                      This guide focuses on the technician&apos;s side of that stack—what they touch before, during, and
                      after each visit. For the role itself, see{" "}
                      <Link href="/field-service/guides/what-does-a-field-service-technician-do" className={linkGreen}>
                        what does a field service technician do
                      </Link>
                      ; for hiring and training expectations, see{" "}
                      <Link href="/field-service/guides/how-to-become-a-field-service-technician" className={linkGreen}>
                        how to become a field service technician
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="mobile-apps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The primary interface for field work.">Mobile Apps on the Job</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technicians open their daily schedule in the app: map view, turn-by-turn directions, and job cards
                      sorted by priority or route. Tapping a job reveals scope, access notes, prior visit history, and
                      attached photos from earlier callbacks.
                    </p>
                    <p>
                      Clock-in and travel time may live in the same app or a paired time-tracking module. GPS visibility
                      helps dispatch re-sequence the board when a job runs long; techs should understand what location
                      data the company collects and when.
                    </p>
                    <p>
                      Push notifications alert techs to new assignments, customer messages, or parts ready for pickup.
                      Reliable notifications reduce the habit of texting dispatch for every schedule change.
                    </p>
                  </div>
                </section>

                <section id="work-orders" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Digital job packets from dispatch to closeout.">Work Orders in the Field</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A work order in the app is more than an address. It carries job type, billing rules, required
                      forms, and price book lines the tech can add on-site. Checklists enforce safety steps and
                      warranty requirements without separate paper.
                    </p>
                    <p>
                      Technicians log parts used against the job so inventory and invoice lines stay accurate. Serialized
                      equipment may require scanning asset tags that tie the install to future service history at that
                      customer site.
                    </p>
                    <p>
                      When a job needs a return visit, techs flag incomplete work, note parts on order, and schedule
                      follow-ups from the app so the customer is not left waiting for a office callback.
                    </p>
                  </div>
                </section>

                <section id="status-updates" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keeping dispatch and customers informed.">Status Updates and Communication</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Standard statuses—en route, on site, in progress, complete—feed the dispatch board and often
                      trigger customer SMS or email updates. One tap beats a phone call when five techs are moving at
                      once.
                    </p>
                    <p>
                      In-app notes capture what the customer said, what was found, and what was done. Good notes prevent
                      the next tech from repeating diagnostics and give CSRs context if the customer calls later.
                    </p>
                    <p>
                      Some platforms support two-way messaging with the office or customer. Technicians should treat
                      in-app threads as official records, not informal chat, because billing disputes and warranty claims
                      may reference them later.
                    </p>
                  </div>
                </section>

                <section id="documentation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Proof of work that billing and compliance need.">Photos, Forms, and Signatures</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Before-and-after photos document condition and completed work. They support upsell conversations,
                      warranty defense, and quality audits. Timestamped images attached to the job beat photos buried in
                      a personal camera roll.
                    </p>
                    <p>
                      Digital forms replace paper: safety inspections, refrigerant logs, combustion tests, and customer
                      acknowledgments. Required fields should match what techs can actually complete on-site—forcing
                      placeholder entries trains bad data.
                    </p>
                    <p>
                      Capture signatures for estimate approval, work completion, or payment. Integrated card readers or
                      payment links let techs collect balances before leaving, which shortens days-sales-outstanding for
                      the business and reduces return trips to collect checks.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical questions from techs and managers.">FAQs</SectionTitle>
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
    title: "How Field Service Technicians Use Software | BeltStack Guide",
    description:
      "Learn how field service technicians use mobile apps for work orders, status updates, photos, signatures, and field documentation that powers dispatch and billing.",
    keywords: [
      "field service mobile app",
      "technician work orders",
      "field service documentation",
      "job status updates",
      "technician software",
      "FSM mobile workflow",
    ],
  };
}

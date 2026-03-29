import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { getFieldServiceCompareUrl, getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "What matters most in a field technician mobile app?",
    a: "Adoption beats feature lists. Technicians need fast access to today’s jobs, one-tap navigation, easy photo and note capture, and clear status updates without fighting connectivity. Test those flows on real job sites—not only on office Wi‑Fi.",
  },
  {
    q: "Do field techs need offline mode?",
    a: "If crews work in basements, rural areas, or industrial sites with weak signal, partial offline support (cached job details, queued uploads) reduces callbacks and paper fallbacks. Ask vendors exactly what syncs offline and what fails gracefully.",
  },
  {
    q: "How should we evaluate mobile during a trial?",
    a: "Run at least a week of real jobs with multiple techs. Track how often they open the app, how long updates take, and whether the office trusts the data. Pair the trial with your dispatch process—see our dispatch and capacity guide for the office side of the same evaluation.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Polished SMB mobile experience",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Residential service workflows",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "High-volume trade mobile + sales tools",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/mobile-field-service-apps-for-technicians";

export default function MobileFieldServiceAppsForTechniciansPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-8">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pb-4 pt-8">
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
                    <li className="font-medium text-gray-700" aria-current="page">
                      Mobile Field Service Apps
                    </li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Mobile Field Service Apps: What Technicians Actually Need
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    Field service management lives or dies in the truck. This guide explains how to evaluate technician
                    mobile apps for real-world adoption: connectivity, job clarity, media capture, and trust between the
                    field and the office.
                  </p>
                  <GuideLastUpdated date="March 28, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most FSM buying committees start with the web dashboard. Technicians start with a phone in a
                      driveway, a mechanical room, or a roof. When the mobile experience is slow, confusing, or brittle
                      offline, crews revert to texts and paper—and your dispatch board becomes fiction.
                    </p>
                    <p>
                      We evaluate mobile FSM the same way we evaluate the rest of the stack: against workflows, not
                      screenshots. Use this alongside our{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      guide,{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        dispatch and capacity planning
                      </Link>{" "}
                      article, and side-by-side pages like{" "}
                      <Link href={getFieldServiceCompareUrl("jobber-vs-housecall-pro")} className={linkGreen}>
                        Jobber vs Housecall Pro
                      </Link>{" "}
                      once you know mobile is a priority.
                    </p>
                  </div>
                </section>
                <section id="adoption" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Why UX beats raw feature count.">Adoption and Field Reality</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technicians tolerate less friction than office staff. Every extra tap to find the job address, add a
                      photo, or mark “waiting on parts” reduces compliance. Before you score checklists of features, ask:
                      can a new hire complete today’s route updates without a training binder?
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Today’s work front and center</strong> — Calendar or job list
                          views should prioritize what is due now, not yesterday’s clutter.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-[#10B981]" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Fast customer and site context</strong> — Equipment history,
                          gate codes, and prior notes should be one or two taps away—not buried in nested menus.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="offline-sync" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Basements, metal buildings, and dead zones.">Offline, Sync, and Photos</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      “Works offline” means different things per vendor. Clarify whether job packets download in advance,
                      whether time entries queue when signal returns, and whether photo uploads retry automatically. Misunderstanding
                      sync behavior is a common source of disputed hours and missing documentation after warranty calls.
                    </p>
                    <p>
                      Photo and signature capture should feel instant. If uploads stall, techs will store images in personal
                      camera rolls—creating liability and version chaos. Test upload speed on cellular, not only Wi‑Fi.
                    </p>
                  </div>
                </section>
                <section id="office-trust" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Closing the loop with dispatch and billing.">Data the Office Must Trust</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Mobile updates should flow cleanly to invoicing and{" "}
                      <Link href="/field-service/guides/field-service-software-and-accounting-integration" className={linkGreen}>
                        accounting integration
                      </Link>
                      . When status changes, labor hours, and materials do not match what finance expects, someone retypes
                      data—defeating the purpose of FSM.
                    </p>
                    <p>
                      For a broader software stack view, see our{" "}
                      <Link href="/field-service" className={linkGreen}>
                        field service hub
                      </Link>
                      ,{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        scheduling software
                      </Link>{" "}
                      hub if customer self-booking is part of the same project.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:col-span-4 lg:block lg:pt-8">
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
    title: "Mobile Field Service Apps for Technicians | BeltStack Guide",
    description:
      "Evaluate FSM mobile apps for real technician adoption: offline sync, job clarity, photos, signatures, and data the office can trust for dispatch and invoicing.",
  };
}

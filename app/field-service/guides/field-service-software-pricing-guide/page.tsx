import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
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
    q: "How much does field service software usually cost?",
    a: "Most SMB-focused FSM tools start around $30–$100 per month for a small team, with per-user or per-tech pricing as you add office staff and technicians. Enterprise tools like ServiceTitan cost more and are usually sold via custom quotes.",
  },
  {
    q: "What drives FSM pricing up or down?",
    a: "Key drivers include number of users/techs, add-ons like marketing automation and advanced reporting, whether phone or call-center tools are bundled, and whether you are on a long-term contract or month-to-month.",
  },
  {
    q: "Should small teams pay for enterprise-level FSM?",
    a: "Not usually. Smaller teams get more value from tools like Jobber, Housecall Pro, Workiz, or Kickserv that match their needs and budget; enterprise FSM only makes sense when you have the volume and management capacity to use its extra features.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Balanced FSM pricing for SMBs",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service tools at SMB price points",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Enterprise FSM with custom quotes",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
  {
    name: "Kickserv",
    logoSrc: "/Logos/kickserv.jpeg",
    rating: "4.3",
    bestFor: "Budget-conscious small service teams",
    reviewHref: getFieldServiceReviewUrl("kickserv"),
  },
];

export default function FieldServiceSoftwarePricingGuidePage() {
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
                      Field Service Software Pricing Guide
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Field Service Software Pricing Guide
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How field service management (FSM) pricing works: common pricing models, what drives cost, and how
                    to decide when a more expensive platform actually makes sense for your business.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service software is an investment: you pay monthly or annually for licenses, and in return
                      you expect fewer scheduling mistakes, faster invoicing, and better visibility into jobs and
                      technicians. But pricing pages can be confusing—especially when some vendors publish prices and
                      others only sell via demo and quote.
                    </p>
                    <p>
                      This guide breaks down common FSM pricing models and where tools like{" "}
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
                      </Link>{" "}
                      and{" "}
                      <Link href={getFieldServiceReviewUrl("kickserv")} className={linkGreen}>
                        Kickserv
                      </Link>{" "}
                      tend to land. Use it alongside our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup to benchmark offers.
                    </p>
                  </div>
                </section>

                <section id="pricing-models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How most FSM vendors charge.">
                    Common Field Service Software Pricing Models
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Most FSM tools follow one of a few models:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Per-user or per-tech pricing</strong> — A base fee plus a
                          per-user or per-technician amount. This is common for Jobber, Housecall Pro, and Kickserv, and
                          scales with your crew size.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Tiered plans with feature gates</strong> — Cheaper plans
                          cover core scheduling and invoicing; higher tiers add reporting, marketing, or integrations.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Enterprise/custom quotes</strong> — Platforms like
                          ServiceTitan typically quote based on trucks, locations, and modules rather than posting
                          simple per-user prices.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="budgeting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to include in your ROI math.">
                    Budgeting for FSM: Licenses, Time, and ROI
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When you budget for field service software, include more than just sticker price. Also factor in:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Staff time to implement, train, and clean up data.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Reductions in missed jobs and faster invoicing and payment collection.</span>
                      </li>
                    </ul>
                    <p>
                      For smaller teams, SMB tools like Jobber, Housecall Pro, Workiz, and Kickserv usually pay for
                      themselves by preventing lost jobs and making it easier to invoice same‑day. Enterprise platforms
                      like ServiceTitan require more investment but can unlock bigger gains once you have the volume to
                      justify them.
                    </p>
                  </div>
                </section>

                <section id="when-more-expensive" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signs you may actually need a higher-priced platform.">
                    When More Expensive FSM Tools Make Sense
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      It is tempting to assume the most expensive tool is “best”, but you only unlock that value when
                      you are ready to use the extra capabilities. Consider stepping up to higher-priced FSM when:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          You have many trucks and a call center and want deeper analytics and membership controls
                          (ServiceTitan-class tools).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          You have outgrown lighter tools like Kickserv or entry‑level Jobber/Housecall Pro plans and
                          see clear gaps in reporting or workflows.
                        </span>
                      </li>
                    </ul>
                    <p>
                      If you are still under 10 techs and just getting off paper, you are usually better served by
                      SMB‑focused FSM and using saved cash to hire and market, not over‑buying software.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Pricing questions we hear most often.">FAQs</SectionTitle>
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

        <RelatedFieldServiceResources excludeHref="/field-service/guides/field-service-software-pricing-guide" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Field Service Software Pricing Guide | BeltStack",
    description:
      "Understand how field service management software is priced, what drives cost, and when more expensive FSM platforms like ServiceTitan make sense compared to SMB tools like Jobber, Housecall Pro, and Kickserv.",
  };
}


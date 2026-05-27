import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSchedulingResources } from "@/components/guides/RelatedSchedulingResources";
import { getSchedulingReviewUrl } from "@/lib/routes";

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
    q: "Is Calendly HIPAA compliant for medical practices?",
    a: "Most general-purpose SMB scheduling tools are not HIPAA-compliant by default. Compliance typically requires a signed Business Associate Agreement (BAA), configured settings, and workflows that avoid putting protected health information (PHI) in booking forms or reminder text without review. Verify BAA availability and scope with the vendor and your compliance lead before storing clinical details.",
  },
  {
    q: "What scheduling features do small clinics need?",
    a: "Multi-provider calendars, service-specific durations, intake forms, insurance or reason-for-visit capture where appropriate, automated reminders, and waitlist or cancellation backfill. Team routing matters for group practices with several clinicians sharing front-desk staff.",
  },
  {
    q: "Can scheduling software replace an EHR?",
    a: "No. Electronic health records own clinical documentation, billing codes, and orders. Scheduling software owns time slots, reminders, and patient self-booking. Many practices integrate both; some EHRs include scheduling modules that reduce duplicate data entry.",
  },
  {
    q: "Should telehealth visits use the same booking tool as in-office?",
    a: "Often yes for patient experience—one link, one reminder flow—but video visit links and consent language may differ. Confirm whether your scheduler supports video handoff, separate appointment types, and policies for no-shows on virtual slots.",
  },
  {
    q: "What should healthcare buyers ask vendors about privacy?",
    a: "Ask for a BAA, data retention and deletion policies, subprocessors, encryption in transit and at rest, and whether reminders or forms could expose PHI in email or SMS. Document decisions; do not assume a popular SMB tool is covered because competitors use it.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Intake forms", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Multi-staff clinics", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Healthcare templates", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-helps-healthcare-businesses";

export default function HowSchedulingSoftwareHelpsHealthcareBusinessesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-8">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pb-4 pt-8">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Scheduling</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling for Healthcare</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Helps Healthcare Businesses
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How clinics, dental offices, and wellness practices use booking tools for patient self-schedule,
                    reminders, and intake—with HIPAA and BAA considerations for SMB buyers.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Healthcare businesses—primary care clinics, dental practices, physical therapy, mental health
                      counseling, and med spas—depend on reliable appointment flow. Scheduling software lets patients book
                      online, syncs provider calendars, sends reminders, and collects intake information before the visit
                      so front-desk staff spend less time on hold.
                    </p>
                    <p>
                      The operational wins mirror other service businesses: fewer phone calls, fewer no-shows, and clearer
                      visibility into who is available when. Healthcare adds compliance obligations. Under HIPAA, tools
                      that create, receive, maintain, or transmit protected health information on your behalf are often
                      business associates. Most popular SMB schedulers are not HIPAA-ready out of the box unless you have a
                      signed BAA and configured workflows reviewed by your compliance process.
                    </p>
                    <p>
                      This guide covers practical scheduling benefits for small and mid-size practices—not legal advice.
                      Validate every vendor claim with counsel or a compliance officer before storing clinical details in
                      booking forms, SMS reminders, or third-party calendars.
                    </p>
                    <p>
                      For general scheduling concepts, read{" "}
                      <Link href="/scheduling/guides/what-is-scheduling-software" className={linkGreen}>
                        what is scheduling software
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      . Shortlist tools on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link> and{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      after you document privacy requirements.
                    </p>
                  </div>
                </section>
                <section id="patient-self-scheduling" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Less phone volume, clearer availability.">Patient Self-Scheduling and Multi-Provider Calendars</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Public booking pages show real-time availability by provider, visit type, and location. New patient
                      versus follow-up slots can carry different durations and buffers. Group practices use staff-specific
                      links or round-robin so the right clinician receives the appointment without manual triage.
                    </p>
                    <p>
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> are
                      common in multi-chair dental and wellness settings;{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      suits practices that need detailed intake questionnaires before the visit.
                    </p>
                  </div>
                </section>
                <section id="intake-and-reminders" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Prepare visits before arrival.">Intake Forms, Reminders, and No-Show Reduction</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Custom forms collect demographics, insurance cards, consent, or reason for visit—reducing clipboard
                      work in the waiting room. Automated email and SMS reminders cut missed appointments; some practices
                      use cancellation policies or waitlists to backfill opened slots.
                    </p>
                    <p>
                      Be deliberate about what you collect in schedulers versus your EHR. Free-text fields that ask for
                      detailed symptoms may push PHI into systems that lack a BAA. Prefer minimal intake in the booking
                      tool and complete clinical history in HIPAA-aligned systems. See{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>{" "}
                      for reminder tactics that apply across industries.
                    </p>
                  </div>
                </section>
                <section id="hipaa-and-baa" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Compliance before convenience.">HIPAA, BAAs, and Vendor Due Diligence</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      HIPAA-covered entities and many business associates must ensure vendors handling PHI sign a Business
                      Associate Agreement and meet applicable safeguards. Consumer-grade scheduling products marketed to
                      salons and consultants often do not offer a BAA on standard plans—or require an enterprise tier.
                      Treat &quot;we use encryption&quot; marketing copy as a starting point, not proof of compliance.
                    </p>
                    <p>
                      Before go-live, confirm: BAA availability and cost, whether reminders could expose PHI in subject
                      lines, subprocessors and data residency, audit logs, and account termination data export. If a vendor
                      cannot sign a BAA, limit use to non-PHI scheduling (for example, blocking only staff calendars without
                      patient identifiers) or choose a healthcare-focused platform designed for regulated workflows.
                    </p>
                  </div>
                </section>
                <section id="ehr-and-telehealth" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Fit scheduling into the clinical stack.">EHR Integration, Telehealth, and Evaluation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many practices eventually centralize scheduling inside their EHR to avoid duplicate patient records.
                      Standalone schedulers still help during transitions, for specific locations, or for non-clinical
                      bookings (classes, consultations) where PHI exposure is controlled. Telehealth adds video links,
                      consent language, and no-show rules that differ from in-person visits.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>{" "}
                      for a feature checklist, then layer healthcare privacy requirements on top. Compare vendors on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link> only after your
                      compliance criteria narrow the field.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:col-span-4 lg:block lg:pt-8">
              <GuideSidebar title="Scheduling tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedSchedulingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Scheduling Software Helps Healthcare Businesses | BeltStack Guide",
    description:
      "How clinics and healthcare practices use scheduling software for patient booking, intake, and reminders—with HIPAA, BAA, and vendor due diligence for SMB buyers.",
    keywords: [
      "scheduling software for healthcare",
      "HIPAA compliant appointment scheduling",
      "medical practice online booking",
      "clinic scheduling software",
      "patient appointment reminders",
      "healthcare BAA scheduling",
    ],
  };
}

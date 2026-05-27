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
    q: "What scheduling features do salons and spas need most?",
    a: "Multi-staff calendars, service-specific durations, stylist or therapist routing, intake forms, package and membership booking, automated reminders, and optional payment or deposits at booking. Clients expect to pick a service, provider, and time in one flow.",
  },
  {
    q: "Is Setmore or Acuity better for salons?",
    a: "Both fit service businesses with multiple staff. Setmore emphasizes straightforward multi-provider booking; Acuity excels at intake forms, packages, and customization. Compare on our scheduling compare pages and read each review against your staff count and branding needs.",
  },
  {
    q: "Can scheduling software handle double-booked rooms and equipment?",
    a: "Advanced tools let you attach resources—treatment rooms, chairs, devices—to services so a massage room cannot be booked twice. Confirm resource scheduling before buying if your spa runs parallel services in shared spaces.",
  },
  {
    q: "How does scheduling software reduce salon no-shows?",
    a: "SMS and email reminders, easy reschedule links, and cancellation policies with card-on-file reduce empty chairs. Some platforms charge no-show fees automatically when policies are configured upfront.",
  },
  {
    q: "Should salons use Square Appointments?",
    a: "If you already process payments with Square POS, Square Appointments keeps booking, client records, and checkout in one ecosystem. Standalone salons often compare Setmore, SimplyBook.me, and Acuity when they want deeper service menus or branding without switching payment processors.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Multi-staff salons", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Forms & packages", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Spa templates", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

const PAGE_HREF = "/scheduling/guides/how-scheduling-software-helps-salons-and-spas";

export default function HowSchedulingSoftwareHelpsSalonsAndSpasPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">Scheduling for Salons & Spas</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Scheduling Software Helps Salons & Spas
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How hair salons, nail bars, and day spas use booking tools for multi-staff appointments, service
                    menus, reminders, and payments—without phone-tag at the front desk.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Salons and spas live on appointment density: stylists, estheticians, and therapists each carry
                      their own calendars, service durations, and client preferences. Scheduling software lets clients
                      book online—choosing service, provider, and time—while syncing availability so the front desk
                      stops playing calendar Tetris on the phone.
                    </p>
                    <p>
                      The category is built for exactly this workflow. Unlike generic calendar apps, salon-ready
                      schedulers enforce service lengths, buffers between color and cut appointments, and staff-specific
                      availability. Many add intake forms, package credits, and payment at booking so check-in is faster
                      when the client walks in.
                    </p>
                    <p>
                      For patterns shared across local service businesses—multi-staff routing, recurring visits,
                      deposits—read{" "}
                      <Link href="/scheduling/guides/appointment-scheduling-for-service-businesses" className={linkGreen}>
                        appointment scheduling for service businesses
                      </Link>
                      . For team routing and round-robin when clients have no provider preference, see{" "}
                      <Link href="/scheduling/guides/scheduling-software-for-teams" className={linkGreen}>
                        scheduling software for teams
                      </Link>
                      .
                    </p>
                    <p>
                      Compare vendors on our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>
                        best scheduling software
                      </Link>{" "}
                      roundup, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling comparisons</Link>. Salon-specific
                      shortlists live under{" "}
                      <Link href="/scheduling/best-for/service-business" className={linkGreen}>
                        scheduling best for service businesses
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="multi-staff-booking" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Every provider, one bookable calendar.">Multi-Staff and Service Menu Booking</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Clients expect to pick a haircut, color, facial, or massage—and see only stylists or therapists
                      qualified for that service with accurate duration. Good scheduling software maps services to staff,
                      applies correct time blocks, and prevents double-booking when a color service runs long.
                    </p>
                    <p>
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> are
                      common salon picks;{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      adds strong customization for intake and packages.{" "}
                      <Link href={getSchedulingReviewUrl("square-appointments")} className={linkGreen}>
                        Square Appointments
                      </Link>{" "}
                      fits shops already on Square POS for unified checkout.
                    </p>
                  </div>
                </section>
                <section id="client-experience" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Less phone tag, smoother arrivals.">Client Self-Booking and Reminders</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Branded booking pages on your website, Instagram bio, or Google Business Profile let clients
                      schedule 24/7. Automated SMS and email reminders cut no-shows; reschedule links keep chairs full
                      when plans change. Intake forms capture allergies, patch tests, or preferences before the
                      appointment so service starts on time.
                    </p>
                    <p>
                      For tactics that apply across industries, read{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-reduces-no-shows" className={linkGreen}>
                        how scheduling software reduces no-shows
                      </Link>{" "}
                      and{" "}
                      <Link href="/scheduling/guides/how-scheduling-software-works" className={linkGreen}>
                        how scheduling software works
                      </Link>
                      . Products like{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> work for
                      solo stylists or booth renters; multi-chair salons usually need provider-specific routing.
                    </p>
                  </div>
                </section>
                <section id="payments-and-packages" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Deposits, memberships, and checkout.">Payments, Packages, and No-Show Policies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      High-demand salons often require card-on-file or deposits for long services and color appointments.
                      Scheduling platforms with integrated payments collect fees at booking or charge no-show penalties
                      automatically when policies are set upfront. Package and membership credits reduce manual tracking
                      at the front desk.
                    </p>
                    <p>
                      Compare payment-at-booking options in our{" "}
                      <Link href="/scheduling/guides/what-features-to-look-for-in-scheduling-software" className={linkGreen}>
                        what features to look for in scheduling software
                      </Link>{" "}
                      guide. When evaluating cost, see{" "}
                      <Link href="/scheduling/guides/how-much-scheduling-software-costs" className={linkGreen}>
                        how much scheduling software costs
                      </Link>{" "}
                      and read{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>
                        Acuity Scheduling
                      </Link>{" "}
                      and{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> reviews for
                      salon-relevant pricing tiers.
                    </p>
                  </div>
                </section>
                <section id="evaluating-tools" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Shortlist against your floor plan.">How to Evaluate Salon Scheduling Tools</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List must-haves: number of providers, resource rooms, package sales, branding, and whether Square
                      or another POS is fixed. Test the client booking flow on mobile—most salon clients book from
                      their phone between appointments.
                    </p>
                    <p>
                      Use{" "}
                      <Link href="/scheduling/guides/how-to-choose-scheduling-software" className={linkGreen}>
                        how to choose scheduling software
                      </Link>{" "}
                      for a structured checklist, then compare on{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>scheduling compare</Link>. Read{" "}
                      <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>,{" "}
                      <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>, and{" "}
                      <Link href={getSchedulingReviewUrl("square-appointments")} className={linkGreen}>
                        Square Appointments
                      </Link>{" "}
                      when narrowing a salon or spa shortlist.
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
    title: "How Scheduling Software Helps Salons & Spas | BeltStack Guide",
    description:
      "How hair salons, nail bars, and day spas use scheduling software for multi-staff booking, service menus, reminders, payments, and fewer no-shows.",
    keywords: [
      "salon scheduling software",
      "spa appointment booking",
      "salon booking software",
      "multi-staff salon scheduler",
      "spa online booking",
      "salon appointment reminders",
    ],
  };
}

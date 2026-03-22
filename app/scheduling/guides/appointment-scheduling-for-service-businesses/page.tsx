import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
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
    q: "What is the best scheduling software for salons?",
    a: "Setmore and SimplyBook.me are popular with salons: both support multiple staff, services, recurring appointments, and payments. Setmore has a free tier; SimplyBook.me offers more customization and industry templates.",
  },
  {
    q: "Do service businesses need payment at booking?",
    a: "Many salons, clinics, and service providers take payment at booking or on arrival. Setmore, SimplyBook.me, Acuity, and Square Appointments support payments; choose based on whether you already use Square or need standalone scheduling.",
  },
  {
    q: "How do recurring appointments work in scheduling software?",
    a: "Tools like Setmore and SimplyBook.me let you set up recurring slots (e.g. same time each week) so regular clients can rebook easily. Useful for maintenance plans, memberships, and repeat visits.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Setmore", logoSrc: "/Logos/setmore.jpeg", rating: "4.4", bestFor: "Service businesses & free tier", reviewHref: getSchedulingReviewUrl("setmore") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Salons & customization", reviewHref: getSchedulingReviewUrl("simplybookme") },
  { name: "Square Appointments", logoSrc: "/Logos/square.jpeg", rating: "4.3", bestFor: "Square POS users", reviewHref: getSchedulingReviewUrl("square-appointments") },
];

export default function AppointmentSchedulingForServiceBusinessesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Scheduling</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Appointment Scheduling for Service Businesses</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Appointment Scheduling for Service Businesses
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    How salons, clinics, and other service businesses use scheduling software for staff, recurring appointments, payments, and reminders.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Service businesses—salons, spas, clinics, fitness studios, and local providers—need scheduling that supports multiple staff, multiple services, recurring appointments, and often payment at booking or on arrival. Tools like <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link>, <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link>, and <Link href={getSchedulingReviewUrl("square-appointments")} className={linkGreen}>Square Appointments</Link> are built with these workflows in mind. This guide covers what to look for and how they compare.
                    </p>
                    <p>
                      Explore our{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link> roundup,{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>comparisons</Link> such as{" "}
                      <Link href="/scheduling/compare/acuity-scheduling-vs-setmore" className={linkGreen}>Acuity vs Setmore</Link> and{" "}
                      <Link href="/scheduling/compare/simplybookme-vs-setmore" className={linkGreen}>SimplyBook.me vs Setmore</Link>, and the{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>.
                    </p>
                  </div>
                </section>
                <section id="staff-services-and-recurring" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What service businesses need.">Staff, Services, and Recurring Appointments</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Multiple staff and service types let clients book the right person and the right offering (e.g. haircut vs color, consultation vs follow-up). <Link href={getSchedulingReviewUrl("setmore")} className={linkGreen}>Setmore</Link> and <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> both support this; SimplyBook.me adds industry templates for salons and fitness. Recurring appointments are useful for membership-style clients or regular maintenance—Setmore and SimplyBook.me handle recurring slots so clients can rebook the same time each week or month.
                    </p>
                    <p>
                      If you already run payments and point-of-sale with <Link href={getSchedulingReviewUrl("square-appointments")} className={linkGreen}>Square</Link>, Square Appointments keeps booking and payments in one place. For standalone scheduling with strong service-business features, compare <Link href="/scheduling/compare/simplybookme-vs-setmore" className={linkGreen}>SimplyBook.me vs Setmore</Link> to see which fits your staff size and customization needs.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Scheduling tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Appointment Scheduling for Service Businesses | BeltStack Guide",
    description: "How salons, clinics, and service businesses use scheduling software for staff, recurring appointments, payments, and reminders.",
  };
}

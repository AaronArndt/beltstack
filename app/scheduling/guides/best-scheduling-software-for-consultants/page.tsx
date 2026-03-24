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
    q: "Do consultants need intake forms in scheduling software?",
    a: "Many consultants use intake forms so clients answer questions before the session. Acuity Scheduling and SimplyBook.me offer strong form and questionnaire support; Calendly’s is more limited.",
  },
  {
    q: "Can I sell packages (e.g. 5 sessions) with scheduling software?",
    a: "Yes. Acuity Scheduling and SimplyBook.me let you create packages and sell them through the booking flow. Calendly doesn’t offer built-in packages; you’d handle that separately.",
  },
  {
    q: "What is the best scheduling tool for coaches and consultants?",
    a: "Acuity Scheduling is often the best fit when you need intake forms, packages, and payment at booking. Calendly is better if you only need simple one-on-one or group meeting booking.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Acuity Scheduling", logoSrc: "/Logos/acuity.jpeg", rating: "4.6", bestFor: "Consultants & intake forms", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { name: "Calendly", logoSrc: "/Logos/calendly.png", rating: "4.7", bestFor: "Simple booking", reviewHref: getSchedulingReviewUrl("calendly") },
  { name: "SimplyBook.me", logoSrc: "/Logos/simplybook.jpeg", rating: "4.4", bestFor: "Custom forms & value", reviewHref: getSchedulingReviewUrl("simplybookme") },
];

export default function BestSchedulingSoftwareForConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Scheduling</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/scheduling/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Best Scheduling Software for Consultants</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Best Scheduling Software for Consultants
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    What consultants should look for in scheduling tools: intake forms, packages, payment at booking, and calendar integration.
                  </p>
                  <GuideLastUpdated date="March 12, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Consultants and coaches usually need more than a simple “pick a time” link. Intake forms, session packages, and payment at booking help you stay prepared and get paid upfront. This guide covers what to look for in scheduling software when your workflow depends on client questionnaires, multi-session packages, or group classes.
                    </p>
                    <p>
                      Explore our{" "}
                      <Link href="/scheduling" className={linkGreen}>scheduling hub</Link>,{" "}
                      <Link href="/scheduling/best-scheduling-software" className={linkGreen}>best scheduling software</Link>, and{" "}
                      <Link href="/scheduling/compare" className={linkGreen}>comparisons</Link>. Read our{" "}
                      <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link> and{" "}
                      <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> reviews, and our{" "}
                      <Link href="/scheduling/compare/calendly-vs-acuity-scheduling" className={linkGreen}>Calendly vs Acuity</Link> comparison for a head-to-head view.
                    </p>
                  </div>
                </section>
                <section id="intake-forms-and-packages" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why they matter for consultants.">Intake Forms and Packages</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Intake forms let clients answer questions before the session—goals, background, or preferences—so you’re not starting from zero. <Link href={getSchedulingReviewUrl("acuity-scheduling")} className={linkGreen}>Acuity Scheduling</Link> and <Link href={getSchedulingReviewUrl("simplybookme")} className={linkGreen}>SimplyBook.me</Link> offer strong custom forms; <Link href={getSchedulingReviewUrl("calendly")} className={linkGreen}>Calendly</Link> has limited built-in questionnaire options. If you sell packages (e.g. five coaching sessions), Acuity and SimplyBook.me let you create package offerings and take payment at booking. Calendly doesn’t support packages natively.
                    </p>
                    <p>
                      For consultants who only need one-on-one or group meeting booking without forms or packages, Calendly is often the simplest choice. When forms and packages are central to your practice, Acuity or SimplyBook.me are better fits.
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
    title: "Best Scheduling Software for Consultants | BeltStack Guide",
    description: "What consultants should look for in scheduling tools: intake forms, packages, payment at booking, and how Acuity and Calendly compare.",
  };
}

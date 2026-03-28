import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedPaymentProcessingResources } from "@/components/guides/RelatedPaymentProcessingResources";
import { PAYMENT_PROCESSING_GUIDE_SIDEBAR_ITEMS } from "@/lib/data/paymentProcessingGuideSidebar";
import {
  getPaymentProcessingBestForUrl,
  getPaymentProcessingCompareUrl,
  getPaymentProcessingReviewUrl,
} from "@/lib/routes";

const href = "/payment-processing/guides/payment-processing-for-contractors";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const bc = "text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const link =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ_ITEMS = [
  {
    q: "Should contractors use Square or Stripe?",
    a: "Square when trucks swipe most revenue; Stripe when websites, portals, or subscriptions collect deposits. Compare head-to-head for your mix.",
  },
  {
    q: "How do I take a deposit on a large job?",
    a: "Send a payment link or invoice with signed scope, collect a percentage that covers materials risk, and document everything for dispute defense.",
  },
  {
    q: "Are keyed-in card numbers okay?",
    a: "They work in a pinch but usually cost more and carry higher fraud risk—prefer tap or chip when homeowners are present.",
  },
  {
    q: "How do payment reminders work?",
    a: "Send polite follow-ups via email with a pay link; coordinate timing with your CRM and email marketing tools so you do not spam.",
  },
  {
    q: "Do I need POS software?",
    a: "Heavy retail or tips may need our POS hub; many trades stop at mobile readers plus accounting sync.",
  },
  {
    q: "What is the cheapest processor for trades?",
    a: "The lowest net deposits for your actual ticket sizes and entry methods—compute effective rate quarterly.",
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payment Processing for Contractors", href: getPaymentProcessingBestForUrl("contractors") },
  { label: "Best Payment Processing Software", href: "/payment-processing/best-payment-processing-software" },
  { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
  { label: "Square Review", href: getPaymentProcessingReviewUrl("square") },
  { label: "Stripe Review", href: getPaymentProcessingReviewUrl("stripe") },
  { label: "How Payment Processing Works", href: "/payment-processing/guides/how-payment-processing-works" },
  { label: "Invoicing Software Hub", href: "/invoicing" },
  { label: "Field Service Software Hub", href: "/field-service" },
];

export default function PaymentProcessingForContractorsPage() {
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
                      <Link href="/" className={bc}>
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payment-processing" className={bc}>
                        Payment Processing
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/payment-processing/guides" className={bc}>
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Payment Processing for Contractors
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Payment Processing for Contractors
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Field payments, emailed deposits, and change orders—without turning your crew into part-time accountants.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Trades collect money in more ways than retail: vans at the curb, progressive invoices on big jobs, and deposits from the website. The goal is one clear process techs can repeat, finance can reconcile, and homeowners understand before work
                      starts. After payment clears,{" "}
                      <Link href="/crm" className={link}>
                        CRM
                      </Link>{" "}
                      should reflect paid status so dispatch does not chase balances you already collected.
                    </p>
                    <p>
                      Start with{" "}
                      <Link href={getPaymentProcessingBestForUrl("contractors")} className={link}>
                        best payment processing for contractors
                      </Link>
                      , compare{" "}
                      <Link href={getPaymentProcessingCompareUrl("stripe-vs-square")} className={link}>
                        Stripe vs Square
                      </Link>
                      , and read{" "}
                      <Link href={getPaymentProcessingReviewUrl("square")} className={link}>
                        Square
                      </Link>{" "}
                      and{" "}
                      <Link href={getPaymentProcessingReviewUrl("stripe")} className={link}>
                        Stripe
                      </Link>{" "}
                      reviews when you shortlist.
                    </p>
                  </div>
                </section>

                <section id="mobile-job-payments" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Readers, receipts, and consistency on the truck.">Mobile payments on the job</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Train a consistent flow: confirm scope, collect payment, email receipt with job reference. Keep chargers and backup readers—excuses about dead hardware erode trust after great workmanship.
                    </p>
                  </div>
                </section>

                <section id="invoices-progressive" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Milestones, draws, and hosted pay pages.">Invoices and progressive billing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Commercial and large residential jobs often need draws. Use invoicing software to show milestones, then let processors collect card or ACH through hosted pages. Align with{" "}
                      <Link href="/invoicing" className={link}>
                        invoicing platforms
                      </Link>{" "}
                      your bookkeeper already understands.
                    </p>
                  </div>
                </section>

                <section id="change-orders" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Card on file and surprise charges.">Change orders and card on file</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Store cards only with explicit consent and a clear policy for extras. Document approvals in writing before charging—chargebacks spike when homeowners feel surprised.
                    </p>
                  </div>
                </section>

                <section id="crm-dispatch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keep dispatch and finance in sync.">CRM and dispatch alignment</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If dispatch thinks a job is unpaid but finance captured a deposit, trucks look unprofessional. Sync payment status through your{" "}
                      <Link href="/crm" className={link}>
                        CRM
                      </Link>{" "}
                      workflows.
                    </p>
                  </div>
                </section>

                <section id="website-deposits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Online booking and brand-consistent checkout.">Website and booking deposits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When homeowners book online, checkout should match the brand and mobile UX you sell in the field. Pair{" "}
                      <Link href="/website-builders" className={link}>
                        website builders
                      </Link>{" "}
                      with processors that support Apple Pay and wallets your market expects.
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
              <GuideSidebar
                title="Popular Payment Processing Providers"
                items={PAYMENT_PROCESSING_GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedPaymentProcessingResources items={RELATED_RESOURCES_ITEMS} excludeHref={href} />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payment Processing for Contractors | BeltStack",
    description: "Mobile payments, invoicing, deposits, and change orders for trades—practical setup guidance for contractors.",
  };
}

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

const href = "/payment-processing/guides/how-payment-processing-works";

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
    q: "What happens after a customer taps a card?",
    a: "The reader encrypts card data, the processor routes an authorization request to the card network and bank, and you receive an approve/decline in seconds. Later, batches settle and funds move toward your bank account per your payout schedule—minus fees and any reserves.",
  },
  {
    q: "What is a chargeback?",
    a: "A disputed charge where the cardholder asks their bank to reverse payment. You submit evidence (contracts, photos, communications). If you lose, the amount and a fee may be debited—good job documentation matters more than processor brand.",
  },
  {
    q: "How long until money hits my bank?",
    a: "Typically one to several business days depending on processor, risk review, weekends, and instant-transfer options. Map payout timing to payroll and supplier due dates.",
  },
  {
    q: "Do I need separate processors for online and in-person?",
    a: "Not always—many stacks unify reporting. Split only when conversion data or compliance forces it, and budget reconciliation time.",
  },
  {
    q: "What is interchange?",
    a: "The baseline cost from card networks and issuers, either passed through on statements or baked into flat-rate pricing. See our credit card processing fees guide for more detail.",
  },
  {
    q: "How does this relate to invoicing software?",
    a: "Invoicing creates the bill; processing moves money. Pair both so line items and payment status stay aligned—browse our invoicing hub for tools that fit trades.",
  },
];

const RELATED_RESOURCES_ITEMS = [
  { label: "Best Payment Processing Software", href: "/payment-processing/best-payment-processing-software" },
  { label: "Payment Processing Comparisons", href: "/payment-processing/compare" },
  { label: "Stripe Review", href: getPaymentProcessingReviewUrl("stripe") },
  { label: "Square Review", href: getPaymentProcessingReviewUrl("square") },
  { label: "How to Choose a Payment Processor", href: "/payment-processing/guides/how-to-choose-a-payment-processor" },
  { label: "Credit Card Processing Fees Explained", href: "/payment-processing/guides/credit-card-processing-fees-explained" },
  { label: "Best Payment Processing for Contractors", href: getPaymentProcessingBestForUrl("contractors") },
  { label: "Invoicing Software Hub", href: "/invoicing" },
];

export default function HowPaymentProcessingWorksPage() {
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
                      How Payment Processing Works
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Payment Processing Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    A practical walkthrough of authorization, settlement, payouts, and disputes—for service-business owners who need trustworthy cash flow math, not acronyms alone.
                  </p>
                  <GuideLastUpdated date="March 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Whether homeowners pay on the truck, through an invoice link, or on your website, the same rails move money from their bank or credit line to yours. Understanding that flow helps you set expectations with crews, bookkeepers, and customers—and
                      avoid surprises at tax or audit time.
                    </p>
                    <p>
                      To compare tools and fees in context, explore our{" "}
                      <Link href="/payment-processing/best-payment-processing-software" className={link}>
                        best payment processing software
                      </Link>
                      , read{" "}
                      <Link href={getPaymentProcessingReviewUrl("stripe")} className={link}>
                        Stripe
                      </Link>{" "}
                      and{" "}
                      <Link href={getPaymentProcessingReviewUrl("square")} className={link}>
                        Square
                      </Link>{" "}
                      reviews, open{" "}
                      <Link href={getPaymentProcessingCompareUrl("stripe-vs-square")} className={link}>
                        Stripe vs Square
                      </Link>
                      , and for trades-specific picks see{" "}
                      <Link href={getPaymentProcessingBestForUrl("contractors")} className={link}>
                        best payment processing for contractors
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="authorization" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What happens in the first few seconds after a card is used.">Authorization in seconds</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When a homeowner taps, dips, or enters a card, the terminal or checkout encrypts card data and asks the issuer if funds are available. Approvals reserve funds; declines stop the job conversation early—train techs to have a backup plan (ACH,
                      alternate card, or office follow-up) without arguing at the door. Counter-heavy or tip-driven workflows often sit on full{" "}
                      <Link href="/pos" className={link}>
                        POS systems
                      </Link>
                      , not only a phone reader.
                    </p>
                  </div>
                </section>

                <section id="batching-settlement" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From approved charges to money in motion.">Batching and settlement</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Authorizations accumulate; processors batch and submit them for settlement so money can move through acquiring banks toward your merchant account. Weekend and holiday timing shifts deposits—model cash flow with conservative assumptions during
                      peak season, not best-case calendars.
                    </p>
                  </div>
                </section>

                <section id="payouts" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When net funds reach your business bank account.">Payouts to your bank</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Processors transfer net funds after fees, refunds, and chargebacks. Instant or same-day options often cost extra—worth it for emergencies if finance models the annualized fee. Reconcile payouts in{" "}
                      <Link href="/accounting" className={link}>
                        accounting software
                      </Link>{" "}
                      so each deposit ties to jobs.
                    </p>
                  </div>
                </section>

                <section id="invoices-payment-links" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Card-not-present flows and how they differ from swipes.">Invoices and payment links</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Card-not-present flows skip the reader but still ride the same authorization rails—often at higher risk-based pricing. Pair hosted links from Stripe, Square, or PayPal with clear scopes so customers know what they are buying. For document
                      discipline, integrate{" "}
                      <Link href="/invoicing" className={link}>
                        invoicing tools
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="disputes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Chargebacks and why paperwork wins.">Disputes and evidence</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Chargebacks punish vague paperwork. Store signed approvals, change orders, and photos in one place your office can retrieve in 24 hours. Processors facilitate submission—they do not guarantee wins.
                    </p>
                  </div>
                </section>

                <section id="cross-stack" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How processing connects to the rest of your stack.">Cross-stack connections</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Website checkout from{" "}
                      <Link href="/website-builders" className={link}>
                        website builders
                      </Link>{" "}
                      feeds processors;{" "}
                      <Link href="/crm" className={link}>
                        CRM
                      </Link>{" "}
                      should reflect paid status;{" "}
                      <Link href="/email-marketing" className={link}>
                        email marketing
                      </Link>{" "}
                      can nudge open invoices—keep messaging compliant and coordinated.
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
    title: "How Payment Processing Works | BeltStack",
    description:
      "Authorization, settlement, payouts, chargebacks, and how payment processing fits invoicing and field service workflows.",
  };
}

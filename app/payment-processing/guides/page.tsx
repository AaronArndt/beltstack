import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedPaymentProcessingResources } from "@/components/guides/RelatedPaymentProcessingResources";
import { PAYMENT_PROCESSING_HUB_GUIDES } from "@/lib/data/paymentProcessingHubData";
import {
  getPaymentProcessingBestForUrl,
  getPaymentProcessingCompareUrl,
  getPaymentProcessingReviewUrl,
} from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function GuideCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
    >
      <h3 className="text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
      <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Read guide →</span>
    </Link>
  );
}

export default function PaymentProcessingGuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/payment-processing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Payment Processing
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Guides
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Payment Processing Guides</h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Practical guidance on fees, card-present vs online flows, and contractor collections—before you sign long-term processing agreements.
            </p>
            <GuideLastUpdated date="March 27, 2026" />
            <p className="mt-5 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Explore{" "}
              <Link href={getPaymentProcessingReviewUrl("stripe")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Stripe
              </Link>
              ,{" "}
              <Link href={getPaymentProcessingReviewUrl("square")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Square
              </Link>
              , and{" "}
              <Link href={getPaymentProcessingReviewUrl("paypal-business")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                PayPal Business
              </Link>{" "}
              reviews,{" "}
              <Link href="/payment-processing/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                payment processing comparisons
              </Link>
              , and our{" "}
              <Link href="/payment-processing/best-payment-processing-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                best payment processing software
              </Link>{" "}
              roundup. Scenario picks:{" "}
              <Link href={getPaymentProcessingBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                best payment processing for contractors
              </Link>
              ,{" "}
              <Link href={getPaymentProcessingBestForUrl("small-business")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                small business
              </Link>
              . Pair with{" "}
              <Link href="/invoicing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                invoicing
              </Link>
              ,{" "}
              <Link href="/pos" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                POS
              </Link>
              ,{" "}
              <Link href="/crm" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                CRM
              </Link>
              ,{" "}
              <Link href="/website-builders" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                website builders
              </Link>
              , and{" "}
              <Link href="/email-marketing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                email marketing
              </Link>
              .
            </p>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Jump to{" "}
              <Link href={getPaymentProcessingCompareUrl("stripe-vs-square")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Stripe vs Square
              </Link>{" "}
              or{" "}
              <Link href={getPaymentProcessingCompareUrl("stripe-vs-paypal")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Stripe vs PayPal
              </Link>{" "}
              while you read.
            </p>
          </div>
        </section>

        <section id="payment-processing-guides-grid" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Fees, channels, and real-world contractor workflows.">Guides</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PAYMENT_PROCESSING_HUB_GUIDES.map((guide) => (
                <GuideCard key={guide.href} title={guide.title} href={guide.href} description={guide.description} />
              ))}
            </div>
          </div>
        </section>

        <RelatedPaymentProcessingResources />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Payment Processing Guides | BeltStack",
    description: "Guides on payment processing for contractors, card-present vs online, processing fees, Stripe vs Square fees, and choosing a processor.",
  };
}

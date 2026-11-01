import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedEmailMarketingResources } from "@/components/guides/RelatedEmailMarketingResources";
import { EMAIL_MARKETING_HUB_GUIDES } from "@/lib/data/emailMarketingHubData";
import {
  getEmailMarketingBestForUrl,
  getEmailMarketingCompareUrl,
  getEmailMarketingReviewUrl,
} from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-brand text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-terracotta" aria-hidden />
      {sub && <p className="mt-1 text-muted-foreground text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function GuideCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2"
    >
      <h3 className="text-brand text-xl font-bold group-hover:text-indigo">{title}</h3>
      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-indigo group-hover:underline">Read guide →</span>
    </Link>
  );
}

export default function EmailMarketingGuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/email-marketing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                    Email Marketing
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Guides
                </li>
              </ol>
            </nav>
            <h1 className="text-brand text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Email Marketing Guides</h1>
            <p className="mt-3 text-muted-foreground text-base leading-relaxed max-w-3xl">
              Practical guidance on list growth, contractor cadences, SMS pairing, and campaign design—before you lock into a platform for a year.
            </p>
            <GuideLastUpdated date="March 25, 2026" />
            <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-3xl">
              Explore{" "}
              <Link href={getEmailMarketingReviewUrl("mailchimp")} className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                Mailchimp
              </Link>
              ,{" "}
              <Link href={getEmailMarketingReviewUrl("activecampaign")} className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                ActiveCampaign
              </Link>
              , and{" "}
              <Link href={getEmailMarketingReviewUrl("klaviyo")} className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                Klaviyo
              </Link>{" "}
              reviews,{" "}
              <Link href="/email-marketing/compare" className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                email marketing comparisons
              </Link>
              , and our{" "}
              <Link href="/email-marketing/best-email-marketing-software" className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                best email marketing software
              </Link>{" "}
              roundup. Scenario picks:{" "}
              <Link href={getEmailMarketingBestForUrl("contractors")} className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                best email marketing for contractors
              </Link>
              ,{" "}
              <Link href={getEmailMarketingBestForUrl("small-business")} className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                small business
              </Link>
              . Pair execution with{" "}
              <Link href="/crm" className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                CRM contact discipline
              </Link>
              ,{" "}
              <Link href="/lead-generation" className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                lead follow-up programs
              </Link>
              ,{" "}
              <Link href="/website-builders" className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                website capture
              </Link>
              ,{" "}
              <Link href="/seo-tools" className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                SEO traffic
              </Link>
              , and{" "}
              <Link href="/reputation-management" className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                review request campaigns
              </Link>
              .
            </p>
            <p className="mt-3 text-muted-foreground text-base leading-relaxed max-w-3xl">
              Jump directly to{" "}
              <Link href={getEmailMarketingCompareUrl("mailchimp-vs-activecampaign")} className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                Mailchimp vs ActiveCampaign
              </Link>{" "}
              or{" "}
              <Link href={getEmailMarketingCompareUrl("klaviyo-vs-mailchimp")} className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                Klaviyo vs Mailchimp
              </Link>{" "}
              when you are narrowing tools while reading.
            </p>
          </div>
        </section>

        <section id="email-marketing-guides-grid" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Campaign design, compliance, and operations for service brands.">Guides</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {EMAIL_MARKETING_HUB_GUIDES.map((guide) => (
                <GuideCard key={guide.href} title={guide.title} href={guide.href} description={guide.description} />
              ))}
            </div>
          </div>
        </section>

        <RelatedEmailMarketingResources />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Email Marketing Guides | BeltStack",
    description: "Guides on email marketing for contractors, local businesses, SMS pairing, list building, and service-industry campaigns.",
  };
}

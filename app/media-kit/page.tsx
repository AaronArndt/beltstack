import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";
import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/media-kit",
  title: "Media Kit | BeltStack",
  description:
    "Learn about BeltStack’s audience, software content coverage, partnership opportunities, and how vendors can work with us.",
});

const linkClass =
  "font-semibold text-[#10B981] underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const EMAIL = "support@beltstack.com";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-sm text-[#57534E] sm:text-base">{sub}</p>}
    </div>
  );
}

export default function MediaKitPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-medium text-gray-700" aria-current="page">
                  Media Kit
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              BeltStack Media Kit
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#57534E] sm:text-lg">
              BeltStack is a software discovery and comparison platform helping small businesses, contractors, field service teams, and operators find
              better tools for running their businesses.
            </p>
          </div>
        </section>

        <section id="about-beltstack" className="scroll-mt-section border-t border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What we publish and who it serves.">About BeltStack</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E] sm:text-base">
              BeltStack publishes software reviews, comparisons, buying guides, alternatives pages, and industry-specific recommendations across
              categories including field service, accounting, payroll, CRM, scheduling, project management, invoicing, payment processing, website
              builders, SEO tools, reputation management, email marketing, call tracking, and more. Content is structured to help teams compare
              options and move from research to a shortlist. Learn more on our{" "}
              <Link href="/about" className={linkClass}>
                About
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        <section id="who-we-reach" className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Operators and buyers researching software.">Who we reach</SectionTitle>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#57534E] sm:text-base">
              <li>Small business owners</li>
              <li>Contractors and trade businesses</li>
              <li>HVAC, plumbing, electrical, roofing, landscaping, cleaning, painting, auto repair, and other service businesses</li>
              <li>Operations managers</li>
              <li>Field service teams</li>
              <li>Freelancers and solo operators</li>
              <li>Buyers comparing software for specific business needs</li>
            </ul>
            <p className="mt-6 max-w-3xl text-sm font-medium leading-relaxed text-[#1A2D48] sm:text-base">
              Much of our audience arrives through high-intent search traffic—people actively researching software, comparing vendors, and evaluating
              fit for real-world workflows.
            </p>
          </div>
        </section>

        <section id="content-coverage" className="scroll-mt-section border-t border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Formats readers use to decide.">Content coverage</SectionTitle>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#57534E] sm:text-base">
              <li>Best software roundups</li>
              <li>Individual software reviews</li>
              <li>Product comparisons</li>
              <li>Alternatives pages</li>
              <li>Best-for industry pages</li>
              <li>Trade and business-type software hubs</li>
              <li>Educational software buying guides</li>
            </ul>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#57534E] sm:text-base">
              Browse categories from the{" "}
              <Link href="/software" className={linkClass}>
                software directory
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="why-partner" className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why teams and vendors engage with BeltStack.">Why partner with BeltStack</SectionTitle>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#57534E] sm:text-base">
              <li>Niche focus on SMB and field service software buyers</li>
              <li>SEO-driven evergreen content that answers how buyers compare tools</li>
              <li>Industry-specific buying intent across trades and local service businesses</li>
              <li>Coverage across many software categories in one ecosystem</li>
              <li>Clear editorial structure and comparison-based pages</li>
              <li>Opportunities to reach users who are actively researching—not passive browsing</li>
            </ul>
          </div>
        </section>

        <section id="partnership-opportunities" className="scroll-mt-section border-t border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Ways we may work with vendors and partners.">Partnership opportunities</SectionTitle>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#57534E] sm:text-base">
              <li>Affiliate partnerships</li>
              <li>Sponsored placements</li>
              <li>Featured software listings</li>
              <li>Vendor profile improvements</li>
              <li>Sponsored educational content</li>
              <li>Newsletter or future audience placements, where offered</li>
              <li>Data corrections or product information updates</li>
            </ul>
            <p className="mt-6 max-w-3xl rounded-lg border border-stone-200/80 bg-stone-50/80 p-4 text-sm leading-relaxed text-[#57534E]">
              Partnerships do not guarantee specific rankings, traffic levels, leads, or conversions. Placement, visibility, and commercial terms
              vary by program and are discussed case by case.
            </p>
          </div>
        </section>

        <section id="editorial-standards" className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Accuracy, transparency, and reader usefulness.">Editorial standards</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E] sm:text-base">
              BeltStack aims to provide helpful, accurate, and transparent software research. Compensation or commercial relationships may influence
              placement or visibility where disclosed and appropriate, but our goal is for editorial opinions and recommendations to remain useful to
              readers. For how we review products and handle affiliates, see{" "}
              <Link href="/methodology" className={linkClass}>
                how we review software
              </Link>{" "}
              and our{" "}
              <Link href="/methodology#affiliate-disclosure" className={linkClass}>
                affiliate disclosure
              </Link>
              . Third-party logos and product names are used for identification and informational purposes only. Legal terms:{" "}
              <Link href="/terms" className={linkClass}>
                Terms of Service
              </Link>
              ,{" "}
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="social-media" className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Official BeltStack profiles.">Social media</SectionTitle>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E] sm:text-base">
              Follow BeltStack for editorial updates, comparison highlights, and small-business software guidance.
            </p>
            <SocialLinks className="mt-4" />
          </div>
        </section>

        <section id="media-kit-contact" className="scroll-mt-section border-t border-stone-200/80 bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Partnerships, advertising, affiliates, and product updates.">Contact</SectionTitle>
            <p className="mt-2 text-sm leading-relaxed text-[#57534E] sm:text-base">
              For partnership, affiliate, advertising, or software update requests, contact:
            </p>
            <div className="mt-6 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-lg shadow-stone-900/5 ring-1 ring-stone-900/5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#10B981]">Email</p>
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("BeltStack media kit / partnership inquiry")}`}
                className="mt-2 block break-all text-2xl font-bold tracking-tight text-[#1A2D48] transition-colors hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-sm sm:text-3xl"
              >
                {EMAIL}
              </a>
              <p className="mt-4 text-sm text-[#57534E]">
                Prefer a form or topic shortcuts? Visit our{" "}
                <Link href="/contact" className={linkClass}>
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-200/80 bg-stone-50 py-8 sm:py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-[#1A2D48]">Related pages</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#57534E]">
              <li>
                <Link href="/about" className={linkClass}>
                  About BeltStack
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/methodology" className={linkClass}>
                  How we review software (methodology)
                </Link>
              </li>
              <li>
                <Link href="/methodology#affiliate-disclosure" className={linkClass}>
                  Affiliate disclosure
                </Link>
              </li>
              <li>
                <Link href="/methodology#editorial-independence" className={linkClass}>
                  Editorial independence
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

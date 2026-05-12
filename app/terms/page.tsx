import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/terms",
  title: "Terms of Service | BeltStack",
  description:
    "Read BeltStack’s Terms of Service for information about website use, affiliate links, third-party services, disclaimers, and legal terms.",
});

const linkClass =
  "font-semibold text-[#10B981] underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

export default function TermsOfServicePage() {
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
                  Terms of Service
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm font-medium text-[#57534E] sm:text-base">
              Effective Date: May 12, 2026
            </p>
          </div>
        </section>

        <section className="border-t border-stone-200/80 bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <article className="prose prose-neutral max-w-none text-sm leading-relaxed text-[#57534E] sm:text-base [&_h2]:mt-10 [&_h2]:scroll-mt-[calc(var(--navbar-h)+1rem)] [&_h2]:border-b [&_h2]:border-stone-200/80 [&_h2]:pb-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#1A2D48] [&_h2]:first:mt-0 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
              <p>
                Welcome to BeltStack (“BeltStack,” “we,” “our,” or “us”). These Terms of Service (“Terms”) govern your access to and use of the
                BeltStack website and any related content, features, tools, or services (collectively, the “Services”).
              </p>
              <p>
                By accessing or using BeltStack, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or
                use the Services.
              </p>

              <h2 id="about-beltstack">1. About BeltStack</h2>
              <p>
                BeltStack is a software discovery, comparison, and educational platform designed to help businesses evaluate software products and
                related business tools.
              </p>
              <p>Our Services may include:</p>
              <ul>
                <li>Software reviews</li>
                <li>Rankings and recommendations</li>
                <li>Comparison articles</li>
                <li>Educational content</li>
                <li>Industry guides</li>
                <li>AI-assisted content</li>
                <li>Affiliate links</li>
                <li>Sponsored or promoted listings</li>
              </ul>
              <p>BeltStack does not provide legal, financial, tax, accounting, compliance, or other professional advice.</p>

              <h2 id="eligibility">2. Eligibility</h2>
              <p>You must be at least 18 years old to use the Services.</p>
              <p>By using BeltStack, you represent and warrant that:</p>
              <ul>
                <li>You are legally capable of entering into these Terms</li>
                <li>Your use of the Services complies with applicable laws and regulations</li>
              </ul>

              <h2 id="informational-only">3. Informational Purposes Only</h2>
              <p>All content provided through BeltStack is for informational and educational purposes only.</p>
              <p>While we strive to provide accurate and up-to-date information, we do not guarantee:</p>
              <ul>
                <li>Accuracy</li>
                <li>Completeness</li>
                <li>Reliability</li>
                <li>Availability</li>
                <li>Timeliness</li>
              </ul>
              <p>Software products, pricing, features, integrations, promotions, and policies may change without notice.</p>
              <p>You should independently evaluate any software, vendor, or business decision before relying on information published on BeltStack.</p>
              <p>Nothing on BeltStack constitutes:</p>
              <ul>
                <li>Legal advice</li>
                <li>Tax advice</li>
                <li>Accounting advice</li>
                <li>Compliance advice</li>
                <li>Financial advice</li>
                <li>Professional consulting services</li>
              </ul>

              <h2 id="affiliate-disclosure">4. Affiliate Disclosure</h2>
              <p>
                Some links on BeltStack are affiliate links. This means we may earn a commission if you click a link or purchase a product through
                certain links on our website, at no additional cost to you.
              </p>
              <p>Compensation may influence:</p>
              <ul>
                <li>Product placement</li>
                <li>Visibility</li>
                <li>Promotional positioning</li>
              </ul>
              <p>However, compensation does not determine our editorial opinions or recommendations.</p>
              <p>We may also receive compensation for:</p>
              <ul>
                <li>Sponsored content</li>
                <li>Featured placements</li>
                <li>Advertising partnerships</li>
                <li>Vendor promotions</li>
              </ul>
              <p>Sponsored content or promotional placements may be identified where appropriate.</p>

              <h2 id="editorial-independence">5. Editorial Independence</h2>
              <p>BeltStack aims to provide useful and unbiased software research and recommendations.</p>
              <p>Our rankings, comparisons, and recommendations may consider:</p>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Ease of use</li>
                <li>Market reputation</li>
                <li>Target industries</li>
                <li>User feedback</li>
                <li>Research</li>
                <li>Affiliate relationships</li>
                <li>Commercial partnerships</li>
              </ul>
              <p>We reserve the right to determine how products are reviewed, ranked, categorized, or displayed.</p>

              <h2 id="ai-assisted-content">6. AI-Assisted Content</h2>
              <p>
                Certain content published on BeltStack may be generated, summarized, enhanced, or assisted using artificial intelligence (“AI”)
                tools.
              </p>
              <p>AI-assisted content may contain inaccuracies, omissions, or outdated information.</p>
              <p>Although content may be reviewed or edited by humans, BeltStack does not guarantee the accuracy or completeness of AI-assisted content.</p>
              <p>Users should independently verify all information before making purchasing or operational decisions.</p>

              <h2 id="third-party">7. Third-Party Websites and Services</h2>
              <p>BeltStack may contain links to third-party websites, software vendors, products, or services.</p>
              <p>We do not control or endorse third-party websites or services and are not responsible for:</p>
              <ul>
                <li>Third-party content</li>
                <li>Software performance</li>
                <li>Security practices</li>
                <li>Privacy practices</li>
                <li>Billing practices</li>
                <li>Business conduct</li>
              </ul>
              <p>Your interactions with third parties are solely between you and the applicable third party.</p>
              <p>You access third-party services at your own risk.</p>

              <h2 id="intellectual-property">8. Intellectual Property</h2>
              <p>All original content and materials published by BeltStack, including but not limited to:</p>
              <ul>
                <li>Editorial content</li>
                <li>Written reviews</li>
                <li>Rankings</li>
                <li>Comparisons</li>
                <li>Website design</li>
                <li>Branding</li>
                <li>Layouts</li>
                <li>Graphics</li>
                <li>Databases</li>
                <li>Code</li>
                <li>Templates</li>
              </ul>
              <p>are owned by BeltStack and protected by applicable intellectual property laws.</p>
              <p>
                Third-party company names, product names, logos, and trademarks displayed on BeltStack are the property of their respective owners
                and are used for identification, editorial, commentary, and informational purposes only.
              </p>
              <p>The use of third-party trademarks or logos does not imply:</p>
              <ul>
                <li>Ownership</li>
                <li>Affiliation</li>
                <li>Sponsorship</li>
                <li>Endorsement</li>
                <li>Partnership</li>
              </ul>
              <p>unless explicitly stated.</p>
              <p>You may not:</p>
              <ul>
                <li>Reproduce</li>
                <li>Republish</li>
                <li>Scrape</li>
                <li>Copy</li>
                <li>Distribute</li>
                <li>Sell</li>
                <li>Modify</li>
                <li>Create derivative works from</li>
                <li>Exploit</li>
              </ul>
              <p>substantial portions of BeltStack’s original content without prior written permission.</p>

              <h2 id="prohibited-conduct">9. Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use BeltStack for unlawful purposes</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
                <li>Interfere with website functionality</li>
                <li>Use automated scraping tools, bots, or crawlers without permission</li>
                <li>Copy or republish substantial portions of content</li>
                <li>Misrepresent your identity</li>
                <li>Upload malicious code or harmful content</li>
                <li>Engage in fraudulent or abusive behavior</li>
              </ul>
              <p>We reserve the right to restrict or terminate access for violations of these Terms.</p>

              <h2 id="availability">10. Availability of Services</h2>
              <p>We may modify, suspend, or discontinue any part of the Services at any time without notice.</p>
              <p>We do not guarantee:</p>
              <ul>
                <li>Continuous availability</li>
                <li>Error-free operation</li>
                <li>Security</li>
                <li>Compatibility</li>
                <li>Uptime</li>
              </ul>

              <h2 id="disclaimer-warranties">11. Disclaimer of Warranties</h2>
              <p className="text-[#1A2D48] font-semibold uppercase tracking-wide">
                THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
              </p>
              <p className="text-[#1A2D48] font-semibold uppercase tracking-wide">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BELTSTACK DISCLAIMS ALL WARRANTIES, INCLUDING:
              </p>
              <ul className="font-semibold uppercase tracking-wide text-[#1A2D48]">
                <li>MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY</li>
                <li>RELIABILITY</li>
                <li>AVAILABILITY</li>
              </ul>
              <p>We do not guarantee that:</p>
              <ul>
                <li>The Services will meet your expectations</li>
                <li>Information will be accurate or current</li>
                <li>The website will be uninterrupted or error-free</li>
                <li>Software recommendations will produce specific results</li>
              </ul>

              <h2 id="limitation-liability">12. Limitation of Liability</h2>
              <p className="text-[#1A2D48] font-semibold uppercase tracking-wide">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BELTSTACK AND ITS OWNERS, AFFILIATES, PARTNERS, EMPLOYEES, CONTRACTORS, OR LICENSORS SHALL
                NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="font-semibold uppercase tracking-wide text-[#1A2D48]">
                <li>Lost profits</li>
                <li>Lost revenue</li>
                <li>Business interruption</li>
                <li>Data loss</li>
                <li>Loss of goodwill</li>
              </ul>
              <p className="font-semibold uppercase tracking-wide text-[#1A2D48]">
                arising out of or related to:
              </p>
              <ul className="font-semibold uppercase tracking-wide text-[#1A2D48]">
                <li>Your use of the Services</li>
                <li>Reliance on content</li>
                <li>Third-party software or services</li>
                <li>Errors or omissions</li>
              </ul>
              <p className="text-[#1A2D48] font-semibold uppercase tracking-wide">
                IN NO EVENT SHALL BELTSTACK’S TOTAL LIABILITY EXCEED ONE HUNDRED U.S. DOLLARS ($100).
              </p>

              <h2 id="indemnification">13. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless BeltStack and its affiliates, owners, employees, contractors, and partners from
                and against any claims, liabilities, damages, losses, and expenses arising from:
              </p>
              <ul>
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of applicable laws</li>
                <li>Your misuse of content or third-party services</li>
              </ul>

              <h2 id="privacy">14. Privacy</h2>
              <p>
                Your use of BeltStack is also governed by our{" "}
                <Link href="/privacy" className={linkClass}>
                  Privacy Policy
                </Link>
                .
              </p>
              <p>
                Please review our{" "}
                <Link href="/privacy" className={linkClass}>
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect information.
              </p>

              <h2 id="changes">15. Changes to These Terms</h2>
              <p>We may update these Terms from time to time.</p>
              <p>Updated Terms become effective when posted on this page.</p>
              <p>Your continued use of the Services after changes are posted constitutes acceptance of the revised Terms.</p>

              <h2 id="governing-law">16. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict
                of law principles.
              </p>
              <p>
                Any disputes arising out of or relating to these Terms or the Services shall be resolved exclusively in the state or federal courts
                located in California.
              </p>

              <h2 id="contact-information">17. Contact Information</h2>
              <p>If you have questions regarding these Terms, you may contact us at:</p>
              <p>
                BeltStack
                <br />
                Email:{" "}
                <a href="mailto:support@beltstack.com" className={linkClass}>
                  support@beltstack.com
                </a>
              </p>
            </article>
          </div>
        </section>

        <section className="border-t border-stone-200/80 bg-stone-50 py-8 sm:py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-[#1A2D48]">Related pages</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#57534E]">
              <li>
                <Link href="/privacy" className={linkClass}>
                  Privacy Policy
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
                <Link href="/contact" className={linkClass}>
                  Contact
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

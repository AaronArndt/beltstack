import Link from "next/link";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/privacy",
  title: "Privacy Policy | BeltStack",
  description:
    "Learn how BeltStack collects, uses, and protects user information, cookies, analytics data, and affiliate tracking information.",
});

const linkClass =
  "font-semibold text-[#10B981] underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const articleProseClass =
  "prose prose-neutral max-w-none text-sm leading-relaxed text-[#57534E] sm:text-base [&_h2]:mt-10 [&_h2]:scroll-mt-[calc(var(--navbar-h)+1rem)] [&_h2]:border-b [&_h2]:border-stone-200/80 [&_h2]:pb-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#1A2D48] [&_h2]:first:mt-0 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#1A2D48] [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5";

export default function PrivacyPolicyPage() {
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
                  Privacy Policy
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm font-medium text-[#57534E] sm:text-base">Effective Date: May 12, 2026</p>
          </div>
        </section>

        <section className="border-t border-stone-200/80 bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <article className={articleProseClass}>
              <p>
                BeltStack (“BeltStack,” “we,” “our,” or “us”) respects your privacy and is committed to protecting the information you share with us.
                This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit or use the BeltStack website and
                related services (collectively, the “Services”).
              </p>
              <p>By using BeltStack, you consent to the practices described in this Privacy Policy.</p>

              <h2 id="information-we-collect">1. Information We Collect</h2>

              <h3>Information You Voluntarily Provide</h3>
              <p>You may voluntarily provide information when you:</p>
              <ul>
                <li>Contact us</li>
                <li>Subscribe to newsletters</li>
                <li>Submit forms</li>
                <li>Request information</li>
                <li>Communicate with us</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Company name</li>
                <li>Message contents</li>
                <li>Other information you choose to provide</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you access BeltStack, we may automatically collect certain information, including:</p>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Referral URLs</li>
                <li>Pages viewed</li>
                <li>Time spent on pages</li>
                <li>Click activity</li>
                <li>General geographic region</li>
                <li>Analytics and usage data</li>
              </ul>
              <p>This information may be collected using:</p>
              <ul>
                <li>Cookies</li>
                <li>Analytics tools</li>
                <li>Tracking technologies</li>
                <li>Log files</li>
                <li>Pixels or tags</li>
              </ul>

              <h2 id="how-we-use-information">2. How We Use Information</h2>
              <p>We may use collected information to:</p>
              <ul>
                <li>Operate and maintain BeltStack</li>
                <li>Improve website performance and user experience</li>
                <li>Analyze website traffic and engagement</li>
                <li>Respond to inquiries and support requests</li>
                <li>Send newsletters or updates</li>
                <li>Monitor and prevent fraud or abuse</li>
                <li>Measure affiliate link performance</li>
                <li>Personalize content or recommendations</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 id="affiliate-links-and-advertising">3. Affiliate Links and Advertising</h2>
              <p>BeltStack may participate in affiliate marketing programs.</p>
              <p>This means:</p>
              <ul>
                <li>Certain links on the website may be affiliate links</li>
                <li>We may earn commissions when users click links or purchase products through those links</li>
              </ul>
              <p>
                Affiliate partners or advertising providers may use cookies or tracking technologies to attribute referrals or measure performance.
              </p>
              <p>We do not control third-party tracking technologies or privacy practices.</p>

              <h2 id="cookies-and-tracking">4. Cookies and Tracking Technologies</h2>
              <p>BeltStack may use cookies and similar technologies to:</p>
              <ul>
                <li>Improve functionality</li>
                <li>Remember preferences</li>
                <li>Analyze traffic</li>
                <li>Understand user behavior</li>
                <li>Measure marketing effectiveness</li>
              </ul>
              <p>You can typically control cookies through your browser settings.</p>
              <p>Disabling cookies may affect website functionality.</p>

              <h2 id="analytics-services">5. Analytics Services</h2>
              <p>We may use third-party analytics providers, such as:</p>
              <ul>
                <li>Google Analytics</li>
                <li>Advertising or affiliate analytics tools</li>
                <li>Website performance tools</li>
              </ul>
              <p>These providers may collect information about your interactions with the website.</p>
              <p>Their use of information is governed by their own privacy policies.</p>

              <h2 id="third-party-websites">6. Third-Party Websites</h2>
              <p>BeltStack may link to third-party websites, software vendors, or services.</p>
              <p>We are not responsible for the privacy practices, security, or content of third-party websites.</p>
              <p>Users should review the privacy policies of third-party services before providing information.</p>

              <h2 id="data-sharing">7. Data Sharing</h2>
              <p>We do not sell personal information.</p>
              <p>However, we may share information with:</p>
              <ul>
                <li>Service providers</li>
                <li>Analytics providers</li>
                <li>Hosting providers</li>
                <li>Affiliate partners</li>
                <li>Advertising providers</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p>We may also disclose information:</p>
              <ul>
                <li>To protect our rights</li>
                <li>To prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
                <li>In connection with a business transfer, acquisition, or merger</li>
              </ul>

              <h2 id="data-security">8. Data Security</h2>
              <p>We use reasonable administrative, technical, and organizational safeguards designed to protect information.</p>
              <p>However, no method of transmission or storage is completely secure.</p>
              <p>We cannot guarantee absolute security of information.</p>

              <h2 id="data-retention">9. Data Retention</h2>
              <p>We may retain information for as long as reasonably necessary to:</p>
              <ul>
                <li>Operate the Services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce agreements</li>
                <li>Maintain business records</li>
              </ul>

              <h2 id="childrens-privacy">10. Children’s Privacy</h2>
              <p>BeltStack is not intended for children under the age of 13.</p>
              <p>We do not knowingly collect personal information from children.</p>
              <p>If we become aware that information from a child has been collected, we may delete it.</p>

              <h2 id="california-privacy-rights">11. California Privacy Rights</h2>
              <p>
                California residents may have rights under applicable privacy laws, including the California Consumer Privacy Act (CCPA) and
                California Privacy Rights Act (CPRA), including rights to:
              </p>
              <ul>
                <li>Request access to personal information</li>
                <li>Request deletion of personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Learn how personal information is used</li>
              </ul>
              <p>
                To submit a privacy-related request, contact:{" "}
                <a href="mailto:support@beltstack.com" className={linkClass}>
                  support@beltstack.com
                </a>
              </p>

              <h2 id="international-users">12. International Users</h2>
              <p>BeltStack is operated in the United States.</p>
              <p>
                If you access the Services from outside the United States, you understand that your information may be transferred to and processed
                in the United States.
              </p>

              <h2 id="changes">13. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time.</p>
              <p>Updated versions become effective when posted on this page.</p>
              <p>Your continued use of the Services after updates constitutes acceptance of the revised Privacy Policy.</p>

              <h2 id="contact-us">14. Contact Us</h2>
              <p>If you have questions regarding this Privacy Policy, you may contact us at:</p>
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
                <Link href="/terms" className={linkClass}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/methodology#affiliate-disclosure" className={linkClass}>
                  Affiliate disclosure
                </Link>
              </li>
              <li>
                <Link href="/methodology" className={linkClass}>
                  How we review software (methodology)
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

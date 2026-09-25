import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { CategoryDataTable } from "@/components/research/pricing/CategoryDataTable";
import {
  AdvertisedUsableBarChart,
  DualScenarioBarChart,
  FsmVisibilityChart,
} from "@/components/research/pricing/charts";
import { sectionRuleAccent } from "@/lib/design-tokens";
import { AFFILIATE_DISCLOSURE } from "@/lib/editorial";
import {
  CATEGORY_LABELS,
  formatUsd,
  getPricingStudyPublication,
  PRICING_STUDY_CSV_PATH,
  PRICING_STUDY_DATASET_NAME,
  PRICING_STUDY_H1,
  PRICING_STUDY_META_DESCRIPTION,
  PRICING_STUDY_PATH,
  PRICING_STUDY_SEO_TITLE,
} from "@/lib/research/pricing/publication";
import { siteMetadata } from "@/lib/seo/siteMetadata";
import { SITE_URL } from "@/lib/site";

const PATH = PRICING_STUDY_PATH;
const CANONICAL = `${SITE_URL}${PATH}`;
const CSV_URL = `${SITE_URL}${PRICING_STUDY_CSV_PATH}`;
const PUBLISHED = "2026-09-25";

export const metadata: Metadata = siteMetadata({
  path: PATH,
  title: PRICING_STUDY_SEO_TITLE,
  description: PRICING_STUDY_META_DESCRIPTION,
});

const linkClass =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const JUMP = [
  { href: "#key-findings", label: "Key findings" },
  { href: "#definitions", label: "Definitions" },
  { href: "#scenarios", label: "Scenarios" },
  { href: "#analysis", label: "Analysis" },
  { href: "#field-service", label: "Field service" },
  { href: "#crm", label: "CRM" },
  { href: "#payroll", label: "Payroll" },
  { href: "#scheduling", label: "Scheduling" },
  { href: "#time-tracking", label: "Time tracking" },
  { href: "#invoicing", label: "Invoicing" },
  { href: "#visibility", label: "Visibility" },
  { href: "#dataset", label: "Dataset" },
  { href: "#methodology", label: "Methodology" },
  { href: "#download", label: "Download" },
] as const;

function SectionTitle({ id, children, sub }: { id: string; children: React.ReactNode; sub?: string }) {
  return (
    <div id={id} className="scroll-mt-section mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className={sectionRuleAccent} aria-hidden />
      {sub ? <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p> : null}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="mt-4 rounded-md border border-[#10B981]/30 bg-[#10B981]/5 px-4 py-3 text-sm leading-relaxed text-[#1A2D48]">
      {children}
    </aside>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-[#57534E] text-sm leading-relaxed max-w-3xl sm:text-base">{children}</p>;
}

export default function ServiceBusinessSoftwarePricingPage() {
  const study = getPricingStudyPublication();
  const crmFive = study.crm.five.median != null ? formatUsd(study.crm.five.median) : "n/a";
  const crmTen = study.crm.ten.median != null ? formatUsd(study.crm.ten.median) : "n/a";
  const payrollFive = study.payroll.five.median != null ? formatUsd(study.payroll.five.median) : "n/a";
  const payrollTen = study.payroll.ten.median != null ? formatUsd(study.payroll.ten.median) : "n/a";
  const invoicingMedian = study.invoicing.median.median != null ? formatUsd(study.invoicing.median.median) : "n/a";
  const schedulingMedian = study.scheduling.median.median != null ? formatUsd(study.scheduling.median.median) : "n/a";
  const ttFive = study.timeTracking.five.median != null ? formatUsd(study.timeTracking.five.median) : "n/a";
  const ttTen = study.timeTracking.ten.median != null ? formatUsd(study.timeTracking.ten.median) : "n/a";
  const fsmFive = study.fsmMedians.smaller.median != null ? formatUsd(study.fsmMedians.smaller.median) : "n/a";
  const fsmTen = study.fsmMedians.larger.median != null ? formatUsd(study.fsmMedians.larger.median) : "n/a";
  const patriot = study.charts.payroll.find((row) => row.slug === "patriot-payroll");
  const bonsai = study.tables.invoicing.find((row) => row.productSlug === "bonsai");
  const close = study.charts.crm.find((row) => row.slug === "close");
  const salesforce = study.tables.crm.find((row) => row.productSlug === "salesforce");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PRICING_STUDY_H1,
    description: PRICING_STUDY_META_DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { "@type": "Organization", name: "BeltStack", url: SITE_URL },
    publisher: { "@type": "Organization", name: "BeltStack", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
    url: CANONICAL,
  };

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PRICING_STUDY_DATASET_NAME,
    description: PRICING_STUDY_META_DESCRIPTION,
    url: CANONICAL,
    creator: { "@type": "Organization", name: "BeltStack", url: SITE_URL },
    publisher: { "@type": "Organization", name: "BeltStack", url: SITE_URL },
    temporalCoverage: `${PUBLISHED}/${PUBLISHED}`,
    datePublished: PUBLISHED,
    variableMeasured: [
      "Advertised entry price",
      "Usable scenario cost",
      "Pricing visibility class",
    ],
    distribution: {
      "@type": "DataDownload",
      encodingFormat: "text/csv",
      contentUrl: CSV_URL,
      name: study.csv.filename,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={articleSchema} />
      <StructuredData data={datasetSchema} />
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <Breadcrumb
              className="mb-4"
              items={[
                { label: "Home", href: "/" },
                { label: "Research" },
                { label: "Advertised vs. usable pricing" },
              ]}
            />
            <p className="text-xs font-semibold uppercase tracking-wide text-[#10B981]">Original research</p>
            <h1 className="mt-2 text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {PRICING_STUDY_H1}
            </h1>
            <p className="mt-4 text-[#57534E] text-base leading-relaxed max-w-3xl sm:text-lg">
              Among BeltStack-reviewed products with public advertised and usable prices, the named plan on the price page is often not the plan required to run that category&apos;s frozen small-team workflow — but this is not true in every category.
            </p>
            <p className="mt-3 text-sm font-medium text-[#1A2D48]">
              {study.products} products · {study.categories} categories · Prices verified {study.verifiedDisplay}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#57534E]">Advertised plan ≠ usable plan</p>
                <p className="mt-2 text-3xl font-bold tabular-nums text-[#1A2D48]">
                  {study.comparable.numerator} of {study.comparable.denominator}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#57534E]">
                  Products with both public advertised and usable prices that required a different named plan for the smaller study scenario.
                </p>
              </article>
              <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#57534E]">Field service usable price is a quote</p>
                <p className="mt-2 text-3xl font-bold tabular-nums text-[#1A2D48]">
                  {study.fsmQuote.numerator} of {study.fsmQuote.denominator}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#57534E]">
                  BeltStack-reviewed field-service products requiring a quote for the usable workflow.
                </p>
              </article>
              <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#57534E]">Free scheduling plan still usable at 5 staff</p>
                <p className="mt-2 text-3xl font-bold tabular-nums text-[#1A2D48]">
                  {study.schedulingFree.survivors.length} of {study.schedulingFree.advertised}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#57534E]">
                  Among scheduling products advertising an ongoing free plan.
                </p>
              </article>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a href="#methodology" className={linkClass}>
                Methodology
              </a>
              <a href={PRICING_STUDY_CSV_PATH} className={linkClass} download>
                Download the dataset (CSV)
              </a>
            </div>
            <nav aria-label="On this page" className="mt-6 border-t border-stone-200 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#57534E]">On this page</p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {JUMP.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="key-findings" sub="What this sample shows, with denominators attached.">
              Key findings
            </SectionTitle>
            <ul className="mt-4 space-y-3 text-[#57534E] text-sm leading-relaxed sm:text-base max-w-3xl">
              <li>
                <strong className="text-[#1A2D48]">{study.comparable.numerator} of {study.comparable.denominator}</strong> comparable products — those with both a public advertised entry price and a public usable scenario price — required a different named plan for the smaller frozen workflow.
              </li>
              <li>
                <strong className="text-[#1A2D48]">{study.fsmQuote.numerator} of {study.fsmQuote.denominator}</strong> field-service products required a quote for usable pricing. Only {study.fsmVisibility.public} of {study.fsmQuote.denominator} had a publicly calculable usable dollar value.
              </li>
              <li>
                Among {study.schedulingFree.advertised} scheduling products advertising an ongoing free plan, only {study.schedulingFree.survivors.length} remained free and usable at five staff calendars: {study.schedulingFree.survivors.join(", ")}.
              </li>
              <li>
                CRM usable median: {crmFive} at five users and {crmTen} at ten users, numeric N={study.crm.numericN}.
              </li>
              <li>
                Full-service payroll median: {payrollFive} at five employees and {payrollTen} at ten employees, numeric N={study.payroll.numericN} of {study.payroll.fullServiceN}.
              </li>
              <li>
                Invoicing: {study.invoicing.sameNamedPlan} of {study.invoicing.comparableN} products used the advertised named plan for the frozen workflow. Median {invoicingMedian}, numeric N={study.invoicing.numericN}.
              </li>
              <li>
                Field-service public-price subset medians were {fsmFive} and {fsmTen}, but only N={study.fsmMedians.smaller.numericN} of {study.fsmMedians.smaller.n}.
              </li>
            </ul>
            <Callout>
              The {fsmFive} / {fsmTen} field-service figures are medians of {study.fsmMedians.smaller.numericN} products, not a typical cost of field-service software. {study.fsmQuote.denominator - study.fsmVisibility.public} of {study.fsmQuote.denominator} products in the sample do not contribute a usable dollar value.
            </Callout>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="definitions" sub="Two different questions, collected on the same date.">
              What advertised vs. usable means
            </SectionTitle>
            <Prose>
              <strong className="text-[#1A2D48]">Advertised entry</strong> is the lowest publicly listed ongoing recurring price for a named plan available to a new US customer. A true ongoing free plan is recorded as $0. Time-limited trials are not treated as free. Promotional discounts were ignored.
            </Prose>
            <Prose>
              <strong className="text-[#1A2D48]">Usable entry</strong> is the lowest publicly priced named plan that satisfies the frozen category workflow at the scenario size. Where that plan is sold per seat, per employee, or as a base-plus-unit formula, the study records the resulting scenario total as a monthly equivalent.
            </Prose>
            <Prose>
              &quot;Usable&quot; does not mean best, recommended, or ideal. It means the minimum qualifying plan under the published methodology. A higher-priced plan may be a better operational fit. This study does not rank products and does not replace BeltStack editorial recommendations.
            </Prose>
            <Prose>
              The gap between those two numbers is the research question. Sometimes the advertised named plan already covers the frozen workflow. Sometimes a buyer must move up a tier, add seats, or request a quote. In invoicing, the advertised named plan usually was the usable plan. That negative finding is part of the result.
            </Prose>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="scenarios" sub="Each category uses its own frozen small-team workflow.">
              Scenario table
            </SectionTitle>
            <div className="overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm">
              <table className="min-w-[640px] w-full text-left text-sm">
                <caption className="px-3 py-3 text-left text-sm text-[#57534E]">
                  These scenarios are not economically equivalent. Category medians should not be interpreted as a ranking of which software category is more or less expensive.
                </caption>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">Category</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">Smaller scenario</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">Larger scenario</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold text-[#1A2D48]">Frozen workflow</th>
                  </tr>
                </thead>
                <tbody className="text-[#57534E]">
                  <tr className="border-b border-slate-100">
                    <th scope="row" className="px-3 py-2.5 font-medium text-[#1A2D48]">CRM</th>
                    <td className="px-3 py-2.5">5 seats</td>
                    <td className="px-3 py-2.5">10 seats</td>
                    <td className="px-3 py-2.5">Contacts, pipeline, tasks, history</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <th scope="row" className="px-3 py-2.5 font-medium text-[#1A2D48]">Field service</th>
                    <td className="px-3 py-2.5">1 office + 4 field</td>
                    <td className="px-3 py-2.5">2 office + 8 field</td>
                    <td className="px-3 py-2.5">Customer/job records, scheduling, dispatch, mobile, native invoice, payment workflow</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <th scope="row" className="px-3 py-2.5 font-medium text-[#1A2D48]">Payroll</th>
                    <td className="px-3 py-2.5">5 employees</td>
                    <td className="px-3 py-2.5">10 employees</td>
                    <td className="px-3 py-2.5">Full-service payroll with tax calculation/filing, direct deposit, W-2, stubs/self-service</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <th scope="row" className="px-3 py-2.5 font-medium text-[#1A2D48]">Invoicing</th>
                    <td className="px-3 py-2.5">Invoicing workspace</td>
                    <td className="px-3 py-2.5">—</td>
                    <td className="px-3 py-2.5">Create, send, and track invoices; customers; accept or record payment</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <th scope="row" className="px-3 py-2.5 font-medium text-[#1A2D48]">Scheduling</th>
                    <td className="px-3 py-2.5">5 staff calendars</td>
                    <td className="px-3 py-2.5">—</td>
                    <td className="px-3 py-2.5">Appointments and calendars — not field dispatch</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-3 py-2.5 font-medium text-[#1A2D48]">Time tracking</th>
                    <td className="px-3 py-2.5">5 users</td>
                    <td className="px-3 py-2.5">10 users</td>
                    <td className="px-3 py-2.5">Time entry, timesheets, export/basic reporting</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout>
              A five-seat CRM workflow is not the same economic object as a one-office, four-tech field-service stack. Do not rank categories by median cost.
            </Callout>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="analysis" sub="The advertised-vs-usable gap is common, not universal.">
              Advertised vs. usable analysis
            </SectionTitle>
            <Prose>
              The study measured {study.products} category-product identities BeltStack already reviews across six software categories. It is a reviewed-product sample, not a market census. Prices were verified {study.verifiedDisplay} and are a historical 2026 snapshot.
            </Prose>
            <Prose>
              On {study.comparable.denominator} products where both advertised entry and usable scenario cost were public numbers, {study.comparable.numerator} required a different named plan to run the smaller frozen workflow. Scheduling and CRM support that finding most clearly. Field service expresses the same buyer problem as missing public prices: {study.fsmQuote.numerator} of {study.fsmQuote.denominator} usable rows are quotes. Time tracking supports the finding moderately — some free advertised plans survive five users, then do not survive ten. Payroll mostly shows per-employee-per-month scaling on the same named plan, with a few plan-gating exceptions. Invoicing mostly shows no gap.
            </Prose>
            <Prose>
              That mix matters. If the page reported only the {study.comparable.numerator}-of-{study.comparable.denominator} figure, a reader could treat advertised-vs-usable mismatch as a law of software pricing. The invoicing result is the control: under this methodology, most invoicing products in the sample already sell the frozen workflow at the advertised named plan.
            </Prose>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="field-service" sub="Lead with visibility, not a dollar average.">
              Field service
            </SectionTitle>
            <Prose>
              In this sample, {study.fsmQuote.numerator} of {study.fsmQuote.denominator} BeltStack-reviewed field-service products required a quote for the usable workflow. Only {study.fsmVisibility.public} of {study.fsmQuote.denominator} had a public usable dollar value under the frozen scenario. See the{" "}
              <Link href={study.roundupHrefs["field-service"]} className={linkClass}>
                field service software roundup
              </Link>{" "}
              for editorial product coverage; this section is about list-price visibility, not product ranking.
            </Prose>
            <div className="mt-6">
              <FsmVisibilityChart
                title="Can a small field-service business get a public usable price?"
                publicN={study.fsmVisibility.public}
                quoteN={study.fsmVisibility.quote}
                unavailableN={study.fsmVisibility.unavailable}
                doesntMeetN={study.fsmVisibility.doesntMeet}
                publicNames={study.fsmVisibility.members.filter((m) => m.bucket === "public").map((m) => m.productName)}
                quoteNames={study.fsmVisibility.members.filter((m) => m.bucket === "quote").map((m) => m.productName)}
                unavailableNames={study.fsmVisibility.members.filter((m) => m.bucket === "unavailable").map((m) => m.productName)}
                doesntMeetNames={study.fsmVisibility.members.filter((m) => m.bucket === "doesnt-meet").map((m) => m.productName)}
              />
            </div>
            <Prose>
              Among the five field-service products with a publicly calculable usable price, the median was {fsmFive} for 1 office + 4 field and {fsmTen} for 2 office + 8 field. Numeric N={study.fsmMedians.smaller.numericN} of {study.fsmMedians.smaller.n}.
            </Prose>
            <Callout>
              Do not read {fsmFive} or {fsmTen} as &quot;the cost of field-service software.&quot; Those medians exclude every quote, undisclosed, and non-qualifying row. N={study.fsmMedians.smaller.numericN} of {study.fsmMedians.smaller.n}.
            </Callout>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="crm" sub="Per-seat packaging, with plan gates at the advertised entry.">
              CRM
            </SectionTitle>
            <Prose>
              Eight of nine CRM products in the sample had public usable dollar values. The usable median was {crmFive} at five users and {crmTen} at ten users, numeric N={study.crm.numericN}. All eight numeric products retained the same usable named plan from 5 to 10; the scenario total doubles because pricing is per-seat. See the{" "}
              <Link href={study.roundupHrefs.crm} className={linkClass}>
                CRM software roundup
              </Link>{" "}
              for editorial coverage.
            </Prose>
            <Prose>
              {study.crm.freeAdvertised} of {study.crm.productN} CRM products advertise an ongoing free plan. Neither free plan satisfies the five-seat frozen workflow. Close is a useful plan-gating example: the advertised entry is not the usable five-seat plan
              {close && close.smaller.status === "PUBLIC" && close.smaller.amount != null
                ? `, and the usable scenario total is ${formatUsd(close.smaller.amount)} at five seats and ${close.larger.status === "PUBLIC" && close.larger.amount != null ? formatUsd(close.larger.amount) : "n/a"} at ten.`
                : "."}
            </Prose>
            {salesforce ? (
              <Callout>
                Salesforce advertised entry in this study is recorded as {salesforce.advertisedEntry}. The study does not resolve that field to a dollar figure. Usable scenario values for Salesforce remain in the CRM analysis because those were established under the frozen methodology. A current review starting-price line can answer a different question than this snapshot.
              </Callout>
            ) : null}
            <div className="mt-6">
              <DualScenarioBarChart
                title="CRM usable cost at 5 vs. 10 seats"
                question="What does the frozen CRM workflow cost when the team doubles from five seats to ten?"
                series={study.charts.crm}
                smallerLabel="5 seats"
                largerLabel="10 seats"
                footnote={
                  <>
                    Median {crmFive} / {crmTen}. Numeric N={study.crm.numericN}. Keap is excluded because it does not have a public usable dollar value in this snapshot. All eight products keep the same usable plan from 5→10.
                  </>
                }
              />
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="payroll" sub="Headline analysis is full-service payroll only.">
              Payroll
            </SectionTitle>
            <Prose>
              The payroll headline uses the full-service class: tax calculation and filing, direct deposit, W-2, and stubs or employee self-service. There are {study.payroll.fullServiceN} full-service products in the sample, {study.payroll.numericN} with public usable dollar values, and {study.payroll.quoteN} that require a quote. See the{" "}
              <Link href={study.roundupHrefs.payroll} className={linkClass}>
                payroll software roundup
              </Link>{" "}
              for editorial coverage.
            </Prose>
            <Prose>
              Among those {study.payroll.numericN} numeric full-service products, the median was {payrollFive} at five employees and {payrollTen} at ten employees. Most of that increase is base-plus-per-employee-per-month (PEPM) scaling on the same named plan, not a forced tier change.
            </Prose>
            {patriot && patriot.smaller.status === "PUBLIC" && patriot.smaller.amount != null ? (
              <Prose>
                Patriot Payroll is the clean plan-gating example: the advertised named plan is Basic, while the frozen full-service workflow requires Full Service. The usable scenario totals in this snapshot are {formatUsd(patriot.smaller.amount)} at five employees and {patriot.larger.status === "PUBLIC" && patriot.larger.amount != null ? formatUsd(patriot.larger.amount) : "n/a"} at ten.
              </Prose>
            ) : null}
            <Callout>
              {study.payroll.peoNames.join(" and ")} are included in the dataset but excluded from the full-service payroll median because the employment/service model is different (PEO). That exclusion is a classification choice, not a quality judgment.
            </Callout>
            <div className="mt-6">
              <DualScenarioBarChart
                title="Full-service payroll usable cost at 5 vs. 10 employees"
                question="What does full-service payroll cost in this sample when headcount doubles from five to ten?"
                series={study.charts.payroll}
                smallerLabel="5 emp."
                largerLabel="10 emp."
                footnote={
                  <>
                    Median {payrollFive} / {payrollTen}. Numeric N={study.payroll.numericN} of {study.payroll.fullServiceN} full-service payroll products. ADP, Paychex, and Rippling require a quote and are omitted from the bars. {study.payroll.peoNames.join(" and ")} are omitted because they are PEO, not full-service payroll.
                  </>
                }
              />
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="scheduling" sub="A free advertised plan does not automatically cover five staff calendars.">
              Scheduling
            </SectionTitle>
            <Prose>
              Scheduling is the clearest advertised-vs-usable chart in the study. The frozen workflow is appointments plus five staff calendars — not field dispatch. See the{" "}
              <Link href={study.roundupHrefs.scheduling} className={linkClass}>
                scheduling software roundup
              </Link>{" "}
              for editorial coverage.
            </Prose>
            <Prose>
              Among {study.schedulingFree.advertised} scheduling products advertising an ongoing free plan, {study.schedulingFree.survivors.length} remains free and usable at five staff: {study.schedulingFree.survivors.join(", ")}. {study.schedulingFree.paidPublic.length} require a publicly priced paid plan: {study.schedulingFree.paidPublic.join(", ")}. {study.schedulingFree.usdUnavailable.length} requires paid functionality but usable USD is not disclosed: {study.schedulingFree.usdUnavailable.join(", ")}.
            </Prose>
            <Prose>
              Separately, Acuity Scheduling already advertises a paid Starter plan and requires the higher Standard plan for five staff calendars. That is a paid-to-higher-paid gate, not part of the free-plan count.
            </Prose>
            <Prose>
              Free plan availability does not automatically imply free support for five staff calendars. The study does not describe those free plans as fake or misleading; it records whether they satisfy the frozen workflow.
            </Prose>
            <div className="mt-6">
              <AdvertisedUsableBarChart
                title="Advertised entry vs. usable cost for five staff calendars"
                question="Does the advertised entry price survive a five-staff scheduling workflow?"
                series={study.charts.scheduling}
                footnote={
                  <>
                    Median {schedulingMedian}. Numeric N={study.scheduling.median.numericN}. SimplyBook.me advertised entry is $0; usable USD is not published and is not plotted as zero.
                  </>
                }
              />
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="time-tracking" sub="Some free plans survive five users. Fewer survive ten.">
              Time tracking
            </SectionTitle>
            <Prose>
              {study.timeTracking.freeAdvertised} of {study.timeTracking.productN} time-tracking products advertise an ongoing free plan. At five users, {study.timeTracking.freeAtFive.join(" and ")} remain free. {study.timeTracking.paidAtFive.join(" and ")} require paid plans at that size. At ten users, {study.timeTracking.freeAtFive.join(" and ")} also require paid plans
              {study.timeTracking.freeAtTen.length === 0 ? " — none of the advertised-free products remain $0." : "."} See the{" "}
              <Link href={study.roundupHrefs["time-tracking"]} className={linkClass}>
                time tracking software roundup
              </Link>{" "}
              for editorial coverage.
            </Prose>
            <Prose>
              The usable median was {ttFive} at five users and {ttTen} at ten users, numeric N={study.timeTracking.five.numericN}. The difference is not a universal price increase caused only by seat count. Several products also change plans: Clockify moves from Free to Basic, Everhour from Free to Team, and Timely from Starter to Premium.
            </Prose>
            <div className="mt-6">
              <DualScenarioBarChart
                title="Time tracking usable cost at 5 vs. 10 users"
                question="Which advertised-free time trackers still cover five users — and what happens at ten?"
                series={study.charts.timeTracking}
                smallerLabel="5 users"
                largerLabel="10 users"
                footnote={
                  <>
                    Median {ttFive} / {ttTen}. Numeric N={study.timeTracking.five.numericN}.
                  </>
                }
              />
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="invoicing" sub="The advertised named plan usually was the usable plan.">
              Invoicing
            </SectionTitle>
            <Prose>
              All {study.invoicing.numericN} invoicing products had public usable dollar values. The median was {invoicingMedian}. {study.invoicing.sameNamedPlan} of {study.invoicing.comparableN} products used the advertised named plan for the frozen workflow. {study.invoicing.freeUsable} ongoing free plans remain usable under that workflow. See the{" "}
              <Link href={study.roundupHrefs.invoicing} className={linkClass}>
                invoicing software roundup
              </Link>{" "}
              for editorial coverage.
            </Prose>
            {bonsai ? (
              <Prose>
                Bonsai is the exception: advertised {bonsai.advertisedEntry} on Basic, usable plan {bonsai.usablePlan} at {bonsai.smallerDisplay}, because Basic does not satisfy the frozen invoice workflow.
              </Prose>
            ) : null}
            <Prose>
              This section is useful because it shows the advertised-vs-usable problem is not universal. The study does not treat invoicing as a cheaper category. The invoicing workspace scenario is not economically equivalent to a five-seat CRM or a field-service stack.
            </Prose>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="visibility" sub="A completeness class, not a vendor quality score.">
              Pricing visibility
            </SectionTitle>
            <Prose>
              Each product identity is classified by whether advertised entry and usable scenario cost can both be completed from public official sources. This is a deterministic pricing-completeness classification. It is not a vendor quality score, and this page does not label vendors most or least transparent.
            </Prose>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#57534E]">Public pricing</p>
                <p className="mt-2 text-3xl font-bold tabular-nums text-[#1A2D48]">{study.visibilityCounts.public}</p>
              </article>
              <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#57534E]">Partial pricing</p>
                <p className="mt-2 text-3xl font-bold tabular-nums text-[#1A2D48]">{study.visibilityCounts.partial}</p>
              </article>
              <article className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#57534E]">Quote required</p>
                <p className="mt-2 text-3xl font-bold tabular-nums text-[#1A2D48]">{study.visibilityCounts.quote}</p>
              </article>
            </div>
            <Prose>
              Public pricing means both advertised entry and usable scenario cost were numerically complete. Partial pricing means at least one required public number could not be completed without a quote or missing disclosure. Quote required means the usable (or advertised) path depends on sales contact under this methodology.
            </Prose>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="dataset" sub="One table per category. Product names link to BeltStack reviews.">
              Full dataset by category
            </SectionTitle>
            <Prose>
              Dollar cells are monthly-equivalent scenario totals for usable columns, and advertised list entry for the advertised column. Status labels are public wording, not internal enums. Official source is the canonical evidence URL used in collection. There are no vendor signup buttons in these tables.
            </Prose>
            {(["crm", "field-service", "payroll", "invoicing", "scheduling", "time-tracking"] as const).map((category) => (
              <div key={category} className="mt-8">
                <h3 className="mb-3 text-lg font-bold text-[#1A2D48]">{CATEGORY_LABELS[category]}</h3>
                <CategoryDataTable
                  caption={`${CATEGORY_LABELS[category]} advertised vs usable pricing, verified ${study.verifiedDisplay}`}
                  smallerHeader={
                    category === "crm"
                      ? "5 seats"
                      : category === "field-service"
                        ? "1 office + 4 field"
                        : category === "payroll"
                          ? "5 employees"
                          : category === "invoicing"
                            ? "Workspace"
                            : category === "scheduling"
                              ? "5 staff calendars"
                              : "5 users"
                  }
                  largerHeader={
                    category === "crm"
                      ? "10 seats"
                      : category === "field-service"
                        ? "2 office + 8 field"
                        : category === "payroll"
                          ? "10 employees"
                          : category === "time-tracking"
                            ? "10 users"
                            : undefined
                  }
                  rows={study.tables[category]}
                />
              </div>
            ))}
            <p className="mt-6 text-sm leading-relaxed text-[#57534E] max-w-3xl">{AFFILIATE_DISCLOSURE}</p>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="methodology" sub="Methodology version 1.0 · dataset edition 2026.">
              Methodology
            </SectionTitle>
            <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-[#57534E] sm:text-base">
              <p>
                <strong className="text-[#1A2D48]">Sample.</strong> Software BeltStack reviews in six frozen categories: CRM, field service, payroll, invoicing, scheduling, and time tracking. {study.products} category-product identities and {study.rows} product×scenario rows. This is not a market census.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Date.</strong> Prices verified {study.verifiedDisplay}. Snapshot, not live pricing. Future vendor price changes do not rewrite this edition.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Sources.</strong> Official catalog, pricing page, help/pricing documentation, vendor announcement, and checkout. Third-party sources did not supply final pricing facts. Some official pages required browser verification.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Advertised entry.</strong> Lowest public ongoing recurring named-plan price available to a new US customer. True free = $0. Trials are not free. Promotions ignored.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Usable entry.</strong> Lowest publicly priced named plan meeting the frozen category workflow at scenario size. Not best, recommended, or ideal.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Cadence.</strong> Annual-billed monthly equivalent is used for normalized comparison where appropriate. Actual billing cadence is retained in the dataset.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Add-ons.</strong> Only required, public, and calculable add-ons are included in scenario cost.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Transaction fees.</strong> Excluded from subscription scenario cost.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Non-numeric statuses.</strong> Quote required, price unavailable, not publicly disclosed, doesn&apos;t meet this workflow, and official sources conflict are never encoded as $0. They are excluded from medians.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Median.</strong> Same category and scenario. Numeric N must be at least 5. Quote, unknown, and not-disclosed values are excluded.
              </p>
              <p>
                <strong className="text-[#1A2D48]">Payroll.</strong> Headline median uses the full-service class only. PEO/EOR products remain in the dataset and tables.
              </p>
              <p>
                Related BeltStack policy:{" "}
                <Link href="/methodology" className={linkClass}>
                  How BeltStack reviews software
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="limitations">Limitations</SectionTitle>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#57534E] sm:text-base">
              <li>BeltStack-reviewed sample, not a market census.</li>
              <li>US public list prices.</li>
              <li>Verified {study.verifiedDisplay}.</li>
              <li>Sales tax excluded.</li>
              <li>Optional add-ons excluded.</li>
              <li>Transaction fees excluded from subscription scenario cost.</li>
              <li>Quote, unknown, and not-disclosed values excluded from medians.</li>
              <li>Scenarios differ across categories.</li>
              <li>Medians cannot be used to rank category expense.</li>
              <li>Usable means the minimum frozen workflow, not a recommendation.</li>
              <li>Implementation, training, hardware, and full TCO are out of scope.</li>
              <li>Field-service dollar medians use only {study.fsmMedians.smaller.numericN} of {study.fsmMedians.smaller.n} products.</li>
              <li>Some official pages required browser verification.</li>
              <li>Future vendor price changes do not rewrite the 2026 snapshot.</li>
            </ul>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="download" sub={`${study.csv.rowCount} product × scenario rows.`}>
              Download dataset
            </SectionTitle>
            <Prose>
              The CSV is generated from the same canonical research rows as the tables on this page. It is ungated. It does not include internal evidence notes, checklist ticks, or editorial scores.
            </Prose>
            <p className="mt-4">
              <a href={PRICING_STUDY_CSV_PATH} className={linkClass} download>
                Download the dataset (CSV)
              </a>
              <span className="ml-2 text-sm text-[#57534E]">{study.csv.filename}</span>
            </p>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="cite">How to cite this research</SectionTitle>
            <blockquote className="mt-4 max-w-3xl rounded-md border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-[#1A2D48] sm:text-base">
              BeltStack. &quot;2026 Advertised vs. Usable Pricing Study.&quot; {study.products} products BeltStack reviews across six software categories. Prices verified {study.verifiedDisplay}. {CANONICAL}
            </blockquote>
            <Prose>
              Canonical URL:{" "}
              <a href={CANONICAL} className={linkClass}>
                {CANONICAL}
              </a>
            </Prose>
          </div>
        </section>

        <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle id="corrections" sub="Snapshot policy and how to report a collection error.">
              Corrections and snapshot policy
            </SectionTitle>
            <Prose>
              Prices verified {study.verifiedDisplay}. The study is a historical 2026 snapshot. Future vendor price changes do not silently alter the study. Research values are not connected dynamically to current review starting-price fields.
            </Prose>
            <Prose>
              If BeltStack discovers a factual collection error, it may correct the snapshot and document the correction. A future 2027 edition would be a new snapshot, not an overwrite of this one.
            </Prose>
            <Prose>
              If you believe a price or classification in this study was collected incorrectly, contact BeltStack with the product and source. Email{" "}
              <a href="mailto:support@beltstack.com?subject=Pricing%20study%20correction" className={linkClass}>
                support@beltstack.com
              </a>{" "}
              or use the{" "}
              <Link href="/contact" className={linkClass}>
                contact page
              </Link>
              . See also{" "}
              <Link href="/methodology#corrections" className={linkClass}>
                methodology corrections
              </Link>
              . BeltStack does not promise a response-time SLA.
            </Prose>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

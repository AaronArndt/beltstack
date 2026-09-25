import type { PricingEvidence } from "./types";

const D = "2026-09-25";

function ev(
  evidenceId: string,
  sourceUrl: string,
  sourceRank: 1 | 2 | 3 | 4 | 5,
  fields: Array<[string, string]>,
  note: string,
): PricingEvidence {
  return {
    evidenceId,
    sourceUrl,
    sourceRank,
    verifiedDate: D,
    fields: fields.map(([field, rawValue]) => ({ field, rawValue })),
    note,
  };
}

export const remainingPricingEvidence: Record<string, PricingEvidence> = {
  "zoho-crm-pricing": ev(
    "zoho-crm-pricing",
    "https://www.zoho.com/en-us/crm/zohocrm-pricing.html",
    2,
    [
      ["advertisedPlanName", "Free forever; 3 users; US$0"],
      ["usablePlanName", "Standard US$14/user/month billed annually; US$20/user/month monthly (USD selected)"],
      ["checklist", "Standard is the first paid CRM edition. Free lists contacts/tasks/follow-ups. Pipeline/deals are on paid editions."],
    ],
    "USD selected on official US pricing page. CRM Plus is a different SKU.",
  ),
  "pipedrive-pricing": ev(
    "pipedrive-pricing",
    "https://www.pipedrive.com/en/pricing",
    2,
    [
      ["advertisedPlanName", "Lite US$14/seat/mo billed annually; US$24/seat/mo monthly. VAT exclusive."],
      ["usablePlanName", "Lite. 14-day trial is not a free plan. Per-seat, no 5-user cap stated."],
      ["checklist", "Pipedrive is a sales CRM: contacts, deal pipeline, activities. Lite is the entry named plan."],
    ],
    "Official page Cloudflare-blocked on HTTP fetch; verified in-browser including pricingData.tiers.",
  ),
  "monday-crm-pricing": ev(
    "monday-crm-pricing",
    "https://monday.com/pricing",
    2,
    [
      ["advertisedPlanName", "monday CRM Basic: $18 $12 seat/month. Treated as $18 month-to-month list and $12 annual-billed monthly equivalent."],
      ["usablePlanName", "Basic: Organize leads, contacts, & deals. 1,000 active contacts & deals."],
      ["promoNote", "Strikethrough pairing also appears on Standard ($25 $17) and Pro ($41 $28). Not treated as a limited-time coupon."],
    ],
    "Category-aligned SKU is monday CRM, not Work OS. /pricing/crm 404s; CRM cards are on monday.com/pricing.",
  ),
  "freshsales-pricing": ev(
    "freshsales-pricing",
    "https://www.freshworks.com/freshsales/pricing/",
    2,
    [
      ["advertisedPlanName", "Growth $9/user/month billed annually. Kanban; contact lifecycle."],
      ["usablePlanName", "Growth. Pro $39 and Enterprise $59 billed annually. Month-to-month Growth amount not printed."],
      ["freeNote", "schema.org mentions a free plan not shown on plan cards. Not used as advertised $0."],
    ],
    "Do not use a schema.org free mention as an advertised ongoing free plan.",
  ),
  "copper-pricing": ev(
    "copper-pricing",
    "https://www.copper.com/pricing",
    2,
    [
      ["advertisedPlanName", "Basic $29/user/mo monthly; $23/user/mo paid annually"],
      ["usablePlanName", "Basic. Pipelines; notes/activities/tasks."],
      ["pro", "Pro $69 monthly / $59 annual; Business $134 / $99 — not required"],
    ],
    "Annual cheaper-than-monthly treated as list cadence, not a promotion.",
  ),
  "close-pricing": ev(
    "close-pricing",
    "https://www.close.com/pricing",
    2,
    [
      ["advertisedPlanName", "Solo $19 list / $9 promo; 1 user only. Promo ignored."],
      ["usablePlanName", "Essentials $49 list for teams. $35 pairing on the page treated as unresolved promo/annual display and not used."],
      ["checklist", "Essentials is the first team plan. Solo fails scenario seat count."],
    ],
    "FAQ states monthly and annual billing exist. Unresolved $49 vs $35: use $49 monthly list only.",
  ),
  "keap-pricing": ev(
    "keap-pricing",
    "https://keap.com/pricing",
    2,
    [
      ["advertisedStatus", "Official /pricing returned Internal Server Error (500). /crm/pricing and /plans 404. /pro has no prices."],
      ["usableStatus", "NOT_DISCLOSED"],
    ],
    "No unofficial estimates used. Help Center Cloudflare-blocked.",
  ),
  "housecall-pro-pricing": ev(
    "housecall-pro-pricing",
    "https://www.housecallpro.com/pricing/",
    2,
    [
      ["advertisedPlanName", "Basic $59/mo billed annually; $79/mo month-to-month list. 1 user included."],
      ["usableFsm14", "Essentials $149/mo billed annually; $189/mo monthly list; 5 users included."],
      ["usableFsm28", "Max $299/mo billed annually; $329/mo monthly list; 8 users included; $35/mo per additional user."],
      ["checklist", "Basic: invoices and payments; scheduling and dispatching; free iOS/Android app."],
      ["promoNote", "$26/mo for 1 month; Max $99/mo for 3 months; gift card — ignored."],
      ["contractTerm", "No long-term contract. Monthly or annual billing."],
    ],
    "Quiz UI hides dollars in the accessibility tree. Amounts taken from official page HTML (compare-plans JSON and billing-cycle nodes) in a browser session.",
  ),
  "service-fusion-pricing": ev(
    "service-fusion-pricing",
    "https://www.servicefusion.com/pricing",
    2,
    [
      ["advertisedPlanName", "Starter $208/mo billed annually (one annual payment); $245/mo monthly. Unlimited users."],
      ["usablePlanName", "Starter: customer management; estimates & jobs; scheduling & dispatching; invoicing; integrated payments. Mobile technician app in FAQ."],
      ["higher", "Plus $325/$382; Pro $533/$627 — not required"],
      ["contractTerm", "Month-to-month. 15% annual prepaid is the annual list, not a flash promo."],
    ],
    "Same Starter price at 5 and 10 people because users are unlimited.",
  ),
  "workiz-pricing": ev(
    "workiz-pricing",
    "https://www.workiz.com/pricing-plans/",
    2,
    [
      ["advertisedStatus", "Standard / Pro / Ultimate: Request pricing. No public plan dollars except FAQ annual save $400+ teaser."],
      ["usableStatus", "QUOTE_REQUIRED"],
    ],
    "Do not use the $400+ teaser as a plan price.",
  ),
  "kickserv-pricing": ev(
    "kickserv-pricing",
    "https://kickserv.com/pricing",
    2,
    [
      ["advertisedPlanName", "Start $60/mo; 5 users. Run $119/mo; 10 users. Scale $199/mo; 20 users."],
      ["annualNote", "Save 20% with annual subscription — annual dollar amounts not printed; not computed."],
      ["kickback", "Kickserv Kickback 5% off for payment volume — ignored as contingent."],
    ],
    "Printed monthly list used. Do not invent $48 from the 20% annual line.",
  ),
  "kickserv-home": ev(
    "kickserv-home",
    "https://kickserv.com/",
    2,
    [
      ["checklist", "Manage customers, schedule jobs and get paid. Jobs; invoices; online payments; mobile job schedule. Dispatch mapping listed as Run-only on pricing."],
    ],
    "Product-level jobs/invoices/mobile used for Start. GPS/dispatch mapping extras are not frozen requirements.",
  ),
  "servicem8-pricing": ev(
    "servicem8-pricing",
    "https://www.servicem8.com/pricing",
    2,
    [
      ["advertisedPlanName", "Free $0; 1 user; 30 jobs/month"],
      ["usablePlanName", "Starter $29/mo; unlimited users; 50 jobs/month. Compare table: quoting/invoicing, mobile, jobs, payments."],
    ],
    "Job caps are not a frozen FSM requirement. Free fails 5-person headcount.",
  ),
  "fieldedge-pricing": ev(
    "fieldedge-pricing",
    "https://fieldedge.com/pricing",
    2,
    [
      ["advertisedStatus", "Select / Premier / Elite — no list dollars. Book a demo."],
      ["caps", "Mobile app licenses: Select 2; Premier 4; Elite 6. Extra-license $ not disclosed."],
      ["usableStatus", "QUOTE_REQUIRED"],
    ],
    "No unofficial estimates used.",
  ),
  "mhelpdesk-help-pricing": ev(
    "mhelpdesk-help-pricing",
    "https://forum.mhelpdesk.com/en/articles/12641238-plans-and-pricing",
    3,
    [
      ["advertisedPlanName", "Pro — 3 users $169/month"],
      ["usableFsm14", "Growth — 8 users $249/month"],
      ["usableFsm28", "Success — 10 users $374/month"],
      ["marketing", "www.mhelpdesk.com has Get a Quote; /pricing 404. Extra-user $ not disclosed."],
    ],
    "Official help list used over marketing quote CTA. Extra seats beyond included caps are NOT_DISCLOSED.",
  ),
  "fieldpulse-pricing": ev(
    "fieldpulse-pricing",
    "https://www.fieldpulse.com/pricing",
    2,
    [
      ["advertisedStatus", "Seat-based custom quote. Office vs field seats unpublished."],
      ["usableStatus", "QUOTE_REQUIRED"],
    ],
    "Third-party review dollars ignored.",
  ),
  "servicetrade-pricing": ev(
    "servicetrade-pricing",
    "https://servicetrade.com/pricing/",
    2,
    [
      ["advertisedStatus", "Select / Premium / Enterprise — Request pricing. Priced mainly by technician count; unlimited office users."],
      ["usableStatus", "QUOTE_REQUIRED"],
      ["rejected", "Do not use $79/tech from a vendor comparison page; it is not on /pricing."],
    ],
    "HTTP 403; verified in-browser. Invoicing copy is stronger on Premium than Select.",
  ),
  "workwave-service-pricing": ev(
    "workwave-service-pricing",
    "https://www.workwave.com/service",
    2,
    [
      ["advertisedStatus", "No current WorkWave Service SKU or public $ on workwave.com. Live products include PestPac, RealGreen, TEAM."],
      ["rejected", "RouteManager $54/mo per vehicle is a different product and was not used."],
    ],
    "Possible retirement/rebrand. Identity retained as the BeltStack-reviewed slug. Amounts NOT_DISCLOSED.",
  ),
  "buildops-pricing": ev(
    "buildops-pricing",
    "https://buildops.com/pricing",
    2,
    [
      ["advertisedStatus", "Custom by crew size / modules. Per field+office user; $ not disclosed."],
      ["usableStatus", "QUOTE_REQUIRED"],
    ],
    "No unofficial estimates used.",
  ),
  "connecteam-pricing": ev(
    "connecteam-pricing",
    "https://connecteam.com/pricing",
    2,
    [
      ["advertisedPlanName", "Small Business Plan $0; all hubs/features*; up to 10 users / free for life"],
      ["checklistFail", "Job scheduling and mobile app listed. Native invoicing, payment recording, and dispatch are not on the pricing catalog."],
      ["tenUser", "Copy also says less than 10 employees in one FAQ vs up to 10 users."],
    ],
    "Workforce-ops SKU. Frozen FSM checklist is not satisfied; usable is NOT_APPLICABLE. Do not treat $0 as a usable FSM cost.",
  ),
  "oracle-field-service-catalog": ev(
    "oracle-field-service-catalog",
    "https://www.oracle.com/a/ocom/docs/corporate/pricing/oracle-fusion-cloud-global-price-list.pdf",
    1,
    [
      ["advertisedPlanName", "Oracle Fusion Field Service Cloud Service; $225.00 Monthly Subscription Price; Pooled Named User; minimum 360; part B110413"],
      ["usableStatus", "Native invoicing / payment workflow not established on the CX product page. 5/10-person mapping to a 360-unit pool left UNKNOWN."],
    ],
    "Catalog list is advertised. Do not compute 360×$225 as a small-crew usable cost. US public-sector perpetual SKUs ignored.",
  ),
  "simpro-pricing": ev(
    "simpro-pricing",
    "https://www.simprogroup.com/pricing",
    2,
    [
      ["advertisedStatus", "BASE PLAN — contact us for a personalized quote. Monthly or annual billing offered, no $."],
      ["usableStatus", "QUOTE_REQUIRED"],
    ],
    "No unofficial estimates used.",
  ),
  "zuper-pricing": ev(
    "zuper-pricing",
    "https://www.zuper.co",
    2,
    [
      ["advertisedStatus", "/pricing 404. Core FSM fees on Order Form. Zuper Connect starting at $299/month is an add-on, not the core FSM list."],
      ["usableStatus", "QUOTE_REQUIRED"],
    ],
    "Blog starting-price posts ignored. Transaction fees not added.",
  ),
  "quickbooks-payroll-pricing": ev(
    "quickbooks-payroll-pricing",
    "https://quickbooks.intuit.com/online/starting-up/payroll/",
    2,
    [
      ["usablePlanName", "Workforce Payroll $50/mo + $7/employee/mo. Premium $88+$13; Elite $134+$17."],
      ["checklist", "Calculate, file, and pay state and federal payroll taxes. Labeled full-service payroll."],
      ["promoNote", "50% off 3 months ignored. Contractor fees and state filing fees mentioned without card dollars."],
    ],
    "Payroll-only SKU, not QBO+Payroll bundles.",
  ),
  "onpay-pricing": ev(
    "onpay-pricing",
    "https://onpay.com/payroll",
    2,
    [
      ["usablePlanName", "$49/mo base + $6/worker/mo. Starts at $55/mo = $49+$6 for 1 worker."],
      ["checklist", "Federal/state/local tax filing including 941/940. W-2 and 1099 automated, included. Unlimited runs."],
      ["partnerPage", "onpay.com/pricing is accountant-partner quoting, not SMB checkout."],
    ],
    "SMB direct list from /payroll. Partner discounts ignored.",
  ),
  "adp-pricing": ev(
    "adp-pricing",
    "https://www.adp.com/small-business",
    2,
    [
      ["advertisedStatus", "Get pricing specific to your business. RUN Essential / Enhanced / Complete named without $."],
      ["checklist", "Federal, state, local calculated, filed, paid. W-2 and 1099 prepared and e-filed."],
    ],
    "QUOTE_REQUIRED. TotalSource PEO is a separate SKU and was not used.",
  ),
  "paychex-pricing": ev(
    "paychex-pricing",
    "https://www.paychex.com/payroll",
    2,
    [
      ["advertisedStatus", "Custom pricing quote; contact sales. Flex packages named without $."],
      ["checklist", "Federal/state/local via Taxpay. W-2 and 1099 advertised."],
    ],
    "Do not use old 2020 Flex Select landing-page dollars.",
  ),
  "rippling-pricing": ev(
    "rippling-pricing",
    "https://www.rippling.com/pricing",
    2,
    [
      ["advertisedStatus", "Custom quote. Most products PEPM; some add a monthly base. Platform required; Payroll sold separately. No $."],
      ["checklist", "Federal/state/local calculated and filed. W-2/1099 stored on employee profile."],
    ],
    "US payroll SKU classified FULL_SERVICE. Global Payroll / PEO not used as the priced plan.",
  ),
  "square-payroll-pricing": ev(
    "square-payroll-pricing",
    "https://squareup.com/us/en/payroll/pricing",
    2,
    [
      ["usablePlanName", "Full-service W-2: $35/mo + $6 per person paid/mo. Contractor-only $6 per person paid, no $35 base."],
      ["checklist", "Automated federal and state tax. Unlimited runs. W-2/1099 e-file. Paper copies $3/person/year optional."],
      ["contractTerm", "No contract."],
    ],
    "Fee is per person paid that month. Contractor-only is not the W-2 scenario.",
  ),
  "justworks-pricing": ev(
    "justworks-pricing",
    "https://justworks.com/pricing",
    2,
    [
      ["sku", "Category-aligned SKU is PEO (BeltStack reviews Justworks as PEO). Payroll $50+$8 is a different named product and was not used."],
      ["usablePlanName", "PEO Basic $79 PEPM. PEO Plus $124 PEPM. EOR $599/employee/mo."],
      ["checklist", "Employer payroll tax filings and W-2 & 1099 on PEO plans."],
    ],
    "PEO class excluded from the full-service numeric median.",
  ),
  "deel-pricing": ev(
    "deel-pricing",
    "https://www.deel.com/pricing",
    2,
    [
      ["advertisedPlanName", "Contractors $49 PEPM is the lowest named public price on the catalog."],
      ["usablePlanName", "US PEO $125 PEPM. EOR $599 PEPM. Contractor of Record $325 PEPM."],
      ["usPayroll", "US-entity payroll product exists; no dollar amount on the official pricing catalog. Blog $19/$24/$29 ignored."],
    ],
    "Cheapest public W-2-capable named plan is US PEO. Classified PEO, not mixed into full-service median.",
  ),
  "surepayroll-pricing": ev(
    "surepayroll-pricing",
    "https://www.surepayroll.com/pricing",
    2,
    [
      ["advertisedPlanName", "Full-service $39/mo + $7 per employee. $29 and 6-months-free promos ignored."],
      ["selfService", "No-tax-filing plan $20/mo + $4/employee is not usable full-service."],
      ["w2Addon", "W-2/1099 not in monthly price. Annual $50 base + $5 per form. Entered as monthly equivalent (50+5N)/12 required add-on."],
      ["localTax", "Local taxes: separate fee, amount not disclosed — not added."],
    ],
    "W-2 preparation/filing is a frozen payroll requirement, so the public annual form fee enters usable cost.",
  ),
  "wave-payroll-pricing": ev(
    "wave-payroll-pricing",
    "https://www.waveapps.com/payroll",
    2,
    [
      ["usablePlanName", "US $40/mo + $6 per active employee + $6 per contractor paid. Same in all 50 states."],
      ["checklist", "Auto pay/file state + IRS. W-2/W-3 generated; employee portal. Excludes 1099 filings."],
    ],
    "Payroll product, not the Wave invoicing Starter row. 30-day trial ignored.",
  ),
  "quickbooks-invoicing-pricing": ev(
    "quickbooks-invoicing-pricing",
    "https://quickbooks.intuit.com/solopreneur/",
    2,
    [
      ["advertisedPlanName", "Solopreneur paid $20/mo. 50% off ignored. Unlimited invoices; accept online payment; track status."],
      ["freeNote", "Solopreneur Free $0 = 2 invoices/mo; online pay/status not listed on the Free card — not used."],
    ],
    "Invoicing is advertised-primary. QBO Simple Start $38 is a higher accounting SKU and was not required.",
  ),
  "zoho-invoice-pricing": ev(
    "zoho-invoice-pricing",
    "https://www.zoho.com/invoice/pricing/",
    2,
    [
      ["advertisedPlanName", "$0 forever. Create/email invoices; customers; accept cards/ACH/wallets; payment notifications. 500 invoices/year; 2 users."],
    ],
    "Advertised-primary. Seat cap is not a frozen invoicing requirement.",
  ),
  "xero-pricing": ev(
    "xero-pricing",
    "https://www.xero.com/us/pricing",
    2,
    [
      ["advertisedPlanName", "Early $25/mo USD. 90% off 6 months ignored. 20 invoices (approve+send). Accept online invoice payments (fees extra)."],
      ["growing", "Growing $55; Established $90. Prices rise Oct 1, 2026 — new amounts not on this page."],
    ],
    "Invoice volume cap is not a frozen invoicing requirement. Payroll add-on ignored.",
  ),
  "invoice-ninja-pricing": ev(
    "invoice-ninja-pricing",
    "https://invoiceninja.com/pricing-plans/",
    2,
    [
      ["advertisedPlanName", "Free $0 — 5 clients; unlimited invoices; accept online payments; portal."],
      ["pro", "Ninja Pro $14/mo or $140/year — not required"],
    ],
    "/pricing is a blog post; catalog is /pricing-plans/.",
  ),
  "honeybook-pricing": ev(
    "honeybook-pricing",
    "https://www.honeybook.com/pricing",
    2,
    [
      ["advertisedPlanName", "Starter $29/mo billed yearly; $36/mo billed monthly. Unlimited clients/projects; invoices and payments."],
      ["paymentsFee", "Card 2.7%+10¢; ACH 1.5% — not added"],
    ],
    "Photographer flash sales ignored.",
  ),
  "bonsai-pricing": ev(
    "bonsai-pricing",
    "https://www.hellobonsai.com/pricing",
    2,
    [
      ["advertisedPlanName", "Basic $9/user/mo billed annually; $15 monthly. Basic has no invoices."],
      ["usablePlanName", "Essentials $19/user/mo billed annually; $25 monthly. Invoices & payments; unlimited invoices; online payments."],
    ],
    "Advertised-primary gap is real: cheapest named plan does not invoice. Invoicing scenario stored as company (one invoicing user), not 5 seats.",
  ),
  "acuity-scheduling-pricing": ev(
    "acuity-scheduling-pricing",
    "https://www.acuityscheduling.com/pricing",
    2,
    [
      ["advertisedPlanName", "Starter 1 calendar; $16/mo billed annually; $20 monthly."],
      ["usablePlanName", "Standard up to 6 calendars; $27/mo billed annually; $34 monthly. Separate calendars per employee or location."],
    ],
    "7-day trial is not a free plan. Customer-facing booking not required.",
  ),
  "youcanbookme-pricing": ev(
    "youcanbookme-pricing",
    "https://youcanbook.me/pricing",
    2,
    [
      ["advertisedPlanName", "Free: 1 connection; $0"],
      ["usablePlanName", "Team: 10 calendars per user; $18/member monthly; $16.20/member billed yearly."],
      ["professional", "Professional 6 connections is labeled solopreneur; not treated as 5 staff calendars."],
    ],
    "Official page verified in-browser (Cloudflare). 2-year 20% cadence not used as the default annual comparison.",
  ),
  "setmore-pricing": ev(
    "setmore-pricing",
    "https://www.setmore.com/pricing",
    2,
    [
      ["advertisedPlanName", "Free up to 4 users; $0"],
      ["usablePlanName", "Pro unlimited users; $5/user/mo billed annually; $12/user/mo monthly."],
      ["staffRule", "Each staff calendar counts as a user even if the owner/assignee does not have login permission."],
    ],
    "Free fails five staff calendars.",
  ),
  "simplybookme-pricing": ev(
    "simplybookme-pricing",
    "https://simplybook.me/en/pricing",
    2,
    [
      ["advertisedPlanName", "Free 1 provider; €0"],
      ["usablePlanName", "Basic 5 providers; €11.9/mo billed annually; €13.9 monthly. USD not shown. Extra bookings add-on listed at $4/100."],
    ],
    "Do not convert EUR to USD. Usable USD amount NOT_DISCLOSED. Free advertised $0 is currency-invariant.",
  ),
  "appointy-pricing": ev(
    "appointy-pricing",
    "https://www.appointy.com/pricing",
    2,
    [
      ["advertisedPlanName", "Free 1 staff; $0"],
      ["usablePlanName", "Growth $19.99/mo billed annually; $29.99 monthly; 1 staff + extra staff $5/mo. Professional includes 5 staff at $49.99/$59.99."],
    ],
    "Lowest public 5-staff configuration is Growth + 4 extra staff. Extra-staff $5 is labeled /month with no annual discount stated.",
  ),
  "zoho-bookings-pricing": ev(
    "zoho-bookings-pricing",
    "https://www.zoho.com/bookings/pricing.html",
    2,
    [
      ["advertisedPlanName", "Forever Free; 1 user; $0"],
      ["usablePlanName", "Basic US$6/user/mo billed annually; US$8/user/mo monthly. USD selected."],
    ],
    "Free fails five staff calendars. Per-user Basic used.",
  ),
  "toggl-pricing": ev(
    "toggl-pricing",
    "https://toggl.com/pricing",
    2,
    [
      ["advertisedPlanName", "Free up to 3 users; $0"],
      ["usablePlanName", "Starter $9/user/mo billed annually; $12/user/mo monthly. Manual + real-time tracking; fill out timesheets; CSV/PDF exports."],
    ],
    "Timesheet approvals are Premium and not required. Annual framed as 4 months free / 33.3% — treated as annual list vs monthly.",
  ),
  "harvest-pricing": ev(
    "harvest-pricing",
    "https://www.getharvest.com/pricing",
    2,
    [
      ["advertisedPlanName", "Free 1 seat; $0"],
      ["usablePlanName", "Teams $9/seat/mo billed annually ($108/seat/year); $11/seat/mo monthly. Time tracking; weekly/daily timesheets; team reporting."],
    ],
    "Timesheet approvals are Enterprise and not required. Extra invoice/project usage amounts not disclosed and not added.",
  ),
  "time-doctor-pricing": ev(
    "time-doctor-pricing",
    "https://www.timedoctor.com/pricing",
    2,
    [
      ["advertisedPlanName", "Basic $6.67/user/mo billed annually; $8 month-to-month. Automatic tracking; Projects & Tasks; Timeline Report."],
      ["checklist", "Features page: Time & Attendance; Timeline & Hours Reports; Custom Data Exports. Word timesheets is not on the pricing page."],
    ],
    "GPS/screenshots not required. Annual described as two months free / 16.6%.",
  ),
  "rescuetime-pricing": ev(
    "rescuetime-pricing",
    "https://www.rescuetime.com/pricing",
    2,
    [
      ["advertisedPlanName", "Solo Focus $7/mo billed annually; $9 monthly."],
      ["usablePlanName", "Team Timesheets $16/user/mo billed annually; $18 monthly. Automatic time tracking; shared clients/projects/tasks; CSV/Excel exports."],
    ],
    "Solo Timesheets is 1 user and does not satisfy tt-5/tt-10.",
  ),
  "everhour-pricing": ev(
    "everhour-pricing",
    "https://everhour.com/pricing",
    2,
    [
      ["advertisedPlanName", "Free $0; up to 5 seats. Time tracking; projects/tasks; reports; export data."],
      ["usableTt10", "Team $8.50/seat/mo billed yearly; minimum 5 seats. Month-to-month list not printed. FAQ: annual saves 15% — monthly $ not computed."],
    ],
    "Word timesheets is not printed. Time tracking + reports + export treated as the frozen timesheet/export requirements.",
  ),
  "timely-pricing": ev(
    "timely-pricing",
    "https://memory.ai/timely/pricing",
    2,
    [
      ["advertisedPlanName", "Starter max 5 users; $9/user/mo yearly; $11 monthly. Finish timesheets in 10 min."],
      ["usableTt10", "Premium max 50 users; $16 yearly / $20 monthly."],
    ],
    "Starter fails tt-10. GPS exists and is not required.",
  ),
};

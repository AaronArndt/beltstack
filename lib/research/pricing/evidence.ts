import type { PricingEvidence } from "./types";
import { remainingPricingEvidence } from "./evidenceRemaining";

const D = "2026-09-25";

export const pricingPilotEvidence: Record<string, PricingEvidence> = {
  "hubspot-catalog": {
    evidenceId: "hubspot-catalog",
    sourceUrl: "https://legal.hubspot.com/hubspot-product-and-services-catalog",
    sourceRank: 1,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Free Tools / single free edition, up to two free users" },
      { field: "usablePlanName", rawValue: "Sales Hub Starter; starts at $20/month per seat; no additional seat minimums for new customers after March 5, 2024" },
      { field: "freeContactLimit", rawValue: "Up to 1,000 contacts in free accounts" },
      { field: "deals", rawValue: "Store, track, manage, and report on deals (opportunities); 1 HubSpot-provided pipeline per object type" },
    ],
    note: "Contractual catalog. Sales Hub Starter is not labeled billed-annually (Enterprise is). Use $20/month per seat as list. Do not use $15 marketing price.",
  },
  "hubspot-crm-product": {
    evidenceId: "hubspot-crm-product",
    sourceUrl: "https://www.hubspot.com/products/crm",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedAmount", rawValue: "Free CRM; no expiration; up to two users; 1,000 contacts" },
      { field: "checklist", rawValue: "Contact management; deals; task & activities; pipeline management; reporting dashboard" },
      { field: "promoNote", rawValue: "Starter starts at $15/month per seat* — discount for new customers; can be discontinued. See pricing page / catalog for packaging." },
    ],
    note: "$15 Starter is promotional. Catalog list is $20/month per seat.",
  },
  "salesforce-editions-pricing": {
    evidenceId: "salesforce-editions-pricing",
    sourceUrl: "https://www.salesforce.com/editions-pricing/sales-cloud/",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Comparison table: Free Suite $0 user/month. FAQ: no ongoing free Sales Cloud; 30-day trial. SOURCE CONFLICT." },
      { field: "usablePlanName", rawValue: "Starter Suite $25 USD/user/month billed monthly or annually" },
      { field: "checklist", rawValue: "Starter: Lead, Account, Contact, Opportunity Management. Comparison: Task Management, Activity Feed listed for editions including Starter." },
      { field: "contractTerm", rawValue: "FAQ: most Salesforce products use annual contracts; terms vary; talk to sales." },
      { field: "freeSuiteSeats", rawValue: "Free Suite user cap not disclosed on this page" },
    ],
    note: "Do not publish advertised $0 or $25 until Free Suite vs trial conflict is resolved. Starter usable independently. Same $25 monthly or annually.",
  },
  "jobber-pricing": {
    evidenceId: "jobber-pricing",
    sourceUrl: "https://www.getjobber.com/pricing",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Core list $49/mo month-to-month; $29/mo billed annually after ignoring 12-month intro and 3-month promos" },
      { field: "connectPrices", rawValue: "Connect unlabeled bands: $139/$199/$299/$399 monthly list; annual-billed then-prices $99/$149/$229/$299" },
      { field: "plusMapped", rawValue: "Plus includes 5 users $499/mo list, $399/mo billed annually then-price; 10 users $599/mo list, $449/mo billed annually then-price" },
      { field: "growPrices", rawValue: "Grow unlabeled bands $199/$299/$399/$499 monthly list" },
      { field: "promoNote", rawValue: "3-month discounts and 12-month intro rates ignored" },
      { field: "checklist", rawValue: "Quotes, jobs, invoices, scheduling, online payments listed across plans including Core" },
      { field: "paymentsFee", rawValue: "Jobber Payments cards 2.9% + 30¢ — not added to subscription usable cost" },
      { field: "contractTerm", rawValue: "Monthly no commitment; monthly 1-year commitment; annual prepaid" },
    ],
    note: "Core 1-user list is the $49/$29 block. Connect/Grow user-band mapping is not labeled on the pricing page. Do not guess which Connect SKU is 5 users.",
  },
  "jobber-connect-help": {
    evidenceId: "jobber-connect-help",
    sourceUrl: "https://help.getjobber.com/hc/en-us/articles/12296620144919-The-Connect-Plan",
    sourceRank: 3,
    verifiedDate: D,
    fields: [{ field: "includedSeats", rawValue: "The Connect plan supports up to 5 users" }],
    note: "Help article Cloudflare-blocked on 2026-09-25 fetch; cap confirmed from official URL search snippet the same day. Workflow quote→job→invoice→payment documented on prior 2026-08-13 article fetch in this research stream; not re-fetched today.",
  },
  "jobber-grow-help": {
    evidenceId: "jobber-grow-help",
    sourceUrl: "https://help.getjobber.com/hc/en-us/articles/360050124513-The-Grow-Plan",
    sourceRank: 3,
    verifiedDate: D,
    fields: [
      {
        field: "includedSeats",
        rawValue: "Access for up to 10 users: a user is anyone who needs to log into jobber.com or the mobile app",
      },
    ],
    note: "Help article Cloudflare-blocked on 2026-09-25 fetch; cap confirmed from official URL search snippet the same day.",
  },
  "servicetitan-pricing": {
    evidenceId: "servicetitan-pricing",
    sourceUrl: "https://www.servicetitan.com/pricing",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedStatus", rawValue: "Per-technician pricing; no numeric schedule; demo/quote path" },
      { field: "usableStatus", rawValue: "QUOTE_REQUIRED" },
    ],
    note: "No unofficial estimates used.",
  },
  "gusto-pricing": {
    evidenceId: "gusto-pricing",
    sourceUrl: "https://gusto.com/product/pricing",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "usablePlanName", rawValue: "Simple $49/mo + $6/mo per person" },
      { field: "advertisedPlanName", rawValue: "Simple is the lowest W-2 employee plan. Contractor Only $35/$0 promo is not the W-2 scenario." },
      { field: "checklist", rawValue: "Simple: single-state payroll; unlimited payrolls; tax filings and payments; comparison table: direct deposits; tax filings on Simple/Plus/Premium" },
      { field: "contractTerm", rawValue: "No contracts. Cancel anytime." },
      { field: "plusPremium", rawValue: "Plus $80/mo + $12/person; Premium $180/mo + $22/person — not required for usable checklist" },
    ],
    note: "Official page verified in-browser after Cloudflare blocked HTTP fetch. Contractor Only $0 is promotional and not the 5/10 W-2 scenario.",
  },
  "patriot-payroll-pricing": {
    evidenceId: "patriot-payroll-pricing",
    sourceUrl: "https://www.patriotsoftware.com/payroll/pricing/",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Basic Payroll list $17/mo + $4 per worker paid (ignore 50% off 3 months)" },
      { field: "usablePlanName", rawValue: "Full Service Payroll list $37/mo + $5 per worker paid; federal/state/local filings; year-end filings no additional fee" },
      { field: "promoNote", rawValue: "30 days free + 50% off for 3 months ignored" },
    ],
    note: "Basic lacks tax filing. Full Service is usable full-service payroll. Time/HR add-ons not required.",
  },
  "freshbooks-pricing": {
    evidenceId: "freshbooks-pricing",
    sourceUrl: "https://www.freshbooks.com/pricing",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Lite list $23/mo. $1/mo first-year solopreneur offer ignored." },
      { field: "checklist", rawValue: "Lite: send invoices to 5 clients; estimates; get paid with cards/ACH/wallets" },
      { field: "teamAddon", rawValue: "Team members $11/mo per person — not required for invoicing checklist" },
      { field: "paymentsFee", rawValue: "FreshBooks Payments credit 2.9% + $0.30 — not added to subscription cost" },
    ],
    note: "Invoicing is advertised-primary. Lite satisfies create/send/pay/status. Client cap 5 is not a frozen invoicing requirement.",
  },
  "wave-pricing": {
    evidenceId: "wave-pricing",
    sourceUrl: "https://www.waveapps.com/pricing",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Starter: unlimited estimates/invoices/bills; no monthly subscription listed (Pro is $19/mo or $190/year)" },
      { field: "checklist", rawValue: "Starter: create unlimited invoices; option to accept online payments at 2.9% + $0.60" },
      { field: "paymentsFee", rawValue: "Online payments optional; card fees not added to subscription usable cost" },
    ],
    note: "Starter has no listed monthly fee; Pro is the paid plan. Treat Starter as $0 subscription.",
  },
  "calendly-pricing": {
    evidenceId: "calendly-pricing",
    sourceUrl: "https://calendly.com/pricing",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Free: always free; one calendar connection; one event type" },
      { field: "usablePlanName", rawValue: "Standard $10/seat/mo billed yearly; $12/seat/mo billed monthly. Seats required for users who connect calendars." },
      { field: "teams", rawValue: "Teams $16/seat/mo billed yearly; $20 monthly — round-robin not required" },
    ],
    note: "Free fails 5 staff calendars. Standard per-seat is enough; Teams extras are not checklist items. Notetaker/Callie toggles ignored.",
  },
  "square-appointments-pricing": {
    evidenceId: "square-appointments-pricing",
    sourceUrl: "https://squareup.com/us/en/appointments/pricing",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Square Free $0/mo per location" },
      { field: "calendars", rawValue: "Unlimited calendars: no employee limit. Unlimited staff calendars listed on Free column." },
      { field: "plusPremium", rawValue: "Square Plus $49/mo per location; Premium $149/mo per location" },
      { field: "paymentsFee", rawValue: "Processing fees apply; not added to subscription usable cost" },
      { field: "contractTerm", rawValue: "Cancel or switch anytime; Free has no monthly subscription" },
    ],
    note: "Unified Square Free/Plus/Premium, not a standalone Appointments SKU. Multi-staff online booking appears as a Plus feature; frozen checklist requires internal multi-staff calendars, which Free lists as unlimited.",
  },
  "clockify-pricing": {
    evidenceId: "clockify-pricing",
    sourceUrl: "https://clockify.me/pricing",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Free: unlimited tracking; time tracker; timesheet; reports. FAQ: invite up to 4 people for free." },
      { field: "usableTt10", rawValue: "Basic $3.99 per seat/month billed annually (or $4.99 billed monthly). Owner/admins/members occupy seats." },
    ],
    note: "Pricing page still says invite up to 4 people. Official help resolves that as 5 active users including owner. tt-10 requires Basic. GPS/PTO not required.",
  },
  "clockify-free-plan-help": {
    evidenceId: "clockify-free-plan-help",
    sourceUrl: "https://clockify.me/help/administration/updates-to-clockify-free-plan",
    sourceRank: 3,
    verifiedDate: D,
    fields: [
      { field: "freeUserCap", rawValue: "User Limit: 5 active users (including the Owner and active members). Trial end: Free plan will only keep your first 4 invitees + owner active." },
      { field: "export", rawValue: "CSV and Excel report exports are paid-plan only. PDF exports remain available on Free. Workspace owners can export current-year time entries as CSV from Workspace settings." },
      { field: "reports", rawValue: "Free report date range filter capped at 1 month (31 days) per query." },
    ],
    note: "Resolves the 3C Clockify ambiguity to owner + 4 invitees = 5 total. PDF export and timesheet remain on Free; CSV/Excel are not required by the frozen checklist.",
  },
  "hubstaff-pricing": {
    evidenceId: "hubstaff-pricing",
    sourceUrl: "https://hubstaff.com/pricing",
    sourceRank: 2,
    verifiedDate: D,
    fields: [
      { field: "advertisedPlanName", rawValue: "Starter $4.99/seat/mo billed annually; $7/seat/mo monthly; 2 seat minimum. Time tracking + timesheets + limited reports." },
      { field: "trial", rawValue: "14-day trial is not a free plan. FAQ: Can I use Hubstaff for free? answers with the trial." },
    ],
    note: "Annual labeled '2 months free' is the annual list vs monthly, not a limited-time sale. Locations/GPS add-on not required.",
  },
};

export const pricingEvidence: Record<string, PricingEvidence> = {
  ...pricingPilotEvidence,
  ...remainingPricingEvidence,
};

export function getPricingEvidence(id: string): PricingEvidence {
  const evidence = pricingEvidence[id];
  if (!evidence) throw new Error(`Missing pricing evidence: ${id}`);
  return evidence;
}

export interface PayrollProvider {
  name: string;
  slug: string;
  logo_placeholder: string;
  starting_price: string;
  key_features: string[];
  cta_url: string;
}

export interface Trade {
  name: string;
  slug: string;
  description: string;
}

export interface TradeProviderRanking {
  providerSlug: string;
  rank: number;
  score: number;
}

export interface TradeRanking {
  topPicks: string[];
  providers: TradeProviderRanking[];
}

export const providers: PayrollProvider[] = [
  {
    name: "Gusto",
    slug: "gusto",
    logo_placeholder: "/placeholders/gusto.svg",
    starting_price: "$40/mo",
    key_features: ["Full-service payroll", "Benefits", "HR tools"],
    cta_url: "https://gusto.com",
  },
  {
    name: "Paychex",
    slug: "paychex",
    logo_placeholder: "/placeholders/paychex.svg",
    starting_price: "$39/mo",
    key_features: ["Payroll", "Tax filing", "Reporting"],
    cta_url: "https://paychex.com",
  },
  {
    name: "ADP",
    slug: "adp",
    logo_placeholder: "/placeholders/adp.svg",
    starting_price: "Custom",
    key_features: ["Enterprise payroll", "Compliance", "Integrations"],
    cta_url: "https://adp.com",
  },
  {
    name: "QuickBooks Payroll",
    slug: "quickbooks-payroll",
    logo_placeholder: "/placeholders/quickbooks.svg",
    starting_price: "$45/mo",
    key_features: ["QB integration", "Direct deposit", "Tax support"],
    cta_url: "https://quickbooks.intuit.com/payroll",
  },
  {
    name: "OnPay",
    slug: "onpay",
    logo_placeholder: "/placeholders/onpay.svg",
    starting_price: "$40/mo",
    key_features: ["Unlimited pay runs", "PTO tracking", "Benefits"],
    cta_url: "https://onpay.com",
  },
];

export const trades: Trade[] = [
  { name: "Landscaping", slug: "landscaping", description: "Seasonal crews, multiple job sites, and contractor-friendly payroll." },
  { name: "HVAC", slug: "hvac", description: "Field techs, on-call pay, and service-area payroll needs." },
  { name: "Plumbing", slug: "plumbing", description: "Emergency callouts, overtime, and subcontractor tracking." },
  { name: "Electrical", slug: "electrical", description: "Licensed crews, project-based pay, and compliance-heavy payroll." },
  { name: "Cleaning", slug: "cleaning", description: "Part-time and contract workers, recurring schedules, and simple runs." },
  { name: "Roofing", slug: "roofing", description: "Crew-based pay, weather delays, and seasonal hiring spikes." },
];

const defaultProviderOrder = ["gusto", "paychex", "onpay", "quickbooks-payroll", "adp"];
const defaultScores = [92, 88, 85, 82, 78];

function buildTradeRanking(topSlugs: string[]): TradeRanking {
  const providersList: TradeProviderRanking[] = topSlugs.map((providerSlug, i) => ({
    providerSlug,
    rank: i + 1,
    score: defaultScores[i] ?? 70,
  }));
  return {
    topPicks: topSlugs.slice(0, 3),
    providers: providersList,
  };
}

export const tradeRankings: Record<string, TradeRanking> = {
  landscaping: buildTradeRanking(["gusto", "paychex", "onpay", "quickbooks-payroll", "adp"]),
  hvac: buildTradeRanking(["paychex", "gusto", "onpay", "quickbooks-payroll", "adp"]),
  plumbing: buildTradeRanking(["gusto", "onpay", "paychex", "quickbooks-payroll", "adp"]),
  electrical: buildTradeRanking(["adp", "paychex", "gusto", "onpay", "quickbooks-payroll"]),
  cleaning: buildTradeRanking(["gusto", "onpay", "quickbooks-payroll", "paychex", "adp"]),
  roofing: buildTradeRanking(["onpay", "gusto", "paychex", "quickbooks-payroll", "adp"]),
};

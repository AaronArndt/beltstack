import type {
  BestForComparisonLink,
  BestForEditorialBlock,
  BestForFaqItem,
  BestForFeaturedProduct,
  BestForGuideLink,
  BestForReviewLink,
  BestForTableRow,
  BestForTemplateProps,
} from "@/components/best/BestForTemplate";
import { getLeadGenerationCompareUrl, getLeadGenerationReviewUrl } from "@/lib/routes";

const GUIDES = "/lead-generation/guides";

const featuredProducts: BestForFeaturedProduct[] = [
  {
    slug: "thumbtack",
    name: "Thumbtack",
    badge: "Best marketplace starter",
    description: "Fast pay-per-lead testing across local categories with self-serve budgets.",
    rating: "4.4",
    startingPrice: "Pay per lead",
    reviewHref: getLeadGenerationReviewUrl("thumbtack"),
    visitUrl: "https://www.thumbtack.com",
    logoSrc: "/Logos/thumbtack.jpeg",
  },
  {
    slug: "google-local-services-ads",
    name: "Google Local Services Ads",
    badge: "Best for urgent search",
    description: "Google-screened placements when homeowners search with immediate intent.",
    rating: "4.5",
    startingPrice: "Pay per lead",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
    visitUrl: "https://ads.google.com/local-services-ads",
    logoSrc: "/Logos/google.jpeg",
  },
  {
    slug: "angi",
    name: "Angi",
    badge: "Best directory + bundles",
    description: "Brand-backed home services exposure when bundles match your pipeline.",
    rating: "4.3",
    startingPrice: "Quote / bundles",
    reviewHref: getLeadGenerationReviewUrl("angi"),
    visitUrl: "https://www.angi.com",
    logoSrc: "/Logos/angi.jpeg",
  },
];

const comparisonTableRows: BestForTableRow[] = [
  {
    slug: "thumbtack",
    name: "Thumbtack",
    logoSrc: "/Logos/thumbtack.jpeg",
    bestFor: "Pay-per-lead marketplace",
    startingPrice: "Pay per lead",
    standoutFeature: "Flexible budgets",
    reviewHref: getLeadGenerationReviewUrl("thumbtack"),
  },
  {
    slug: "google-local-services-ads",
    name: "Google Local Services Ads",
    logoSrc: "/Logos/google.jpeg",
    bestFor: "High-intent Google callers",
    startingPrice: "Pay per lead",
    standoutFeature: "Screened listing",
    reviewHref: getLeadGenerationReviewUrl("google-local-services-ads"),
  },
  {
    slug: "angi",
    name: "Angi",
    logoSrc: "/Logos/angi.jpeg",
    bestFor: "Home services brand",
    startingPrice: "Quote / bundles",
    standoutFeature: "Bundled programs",
    reviewHref: getLeadGenerationReviewUrl("angi"),
  },
];

const relatedReviews: BestForReviewLink[]  = [
  { name: "Thumbtack", href: getLeadGenerationReviewUrl("thumbtack") },
  { name: "Angi", href: getLeadGenerationReviewUrl("angi") },
  { name: "Houzz Pro", href: getLeadGenerationReviewUrl("houzz-pro") },
  { name: "Bark", href: getLeadGenerationReviewUrl("bark") },
  { name: "Google Local Services Ads", href: getLeadGenerationReviewUrl("google-local-services-ads") },
  { name: "Yelp Ads", href: getLeadGenerationReviewUrl("yelp-ads") },
  { name: "Facebook Lead Ads", href: getLeadGenerationReviewUrl("facebook-lead-ads") },
  { name: "HomeAdvisor", href: getLeadGenerationReviewUrl("homeadvisor") },
];

const relatedComparisons: BestForComparisonLink[] = [
  { label: "Thumbtack vs Angi", href: getLeadGenerationCompareUrl("thumbtack-vs-angi") },
  { label: "Angi vs HomeAdvisor", href: getLeadGenerationCompareUrl("angi-vs-homeadvisor") },
  { label: "Google LSA vs Yelp Ads", href: getLeadGenerationCompareUrl("google-local-services-ads-vs-yelp-ads") },
];

const SHARED_GUIDES: BestForGuideLink[] = [
  { label: "How to choose a lead generation platform", href: `${GUIDES}/how-to-choose-a-lead-generation-platform` },
  { label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` },
  { label: "How Google Local Services Ads work", href: `${GUIDES}/how-google-local-services-ads-work` },
  { label: "Lead generation strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` },
  { label: "Best website builders for contractors (owned demand)", href: "/website-builders/best-for/contractors" },
];

function makePage(
  useCase: string,
  title: string,
  subtitle: string,
  introParagraph: string,
  editorialGuidance: BestForEditorialBlock[],
  whyThesePicks: BestForEditorialBlock[],
  faqItems: BestForFaqItem[],
  relatedGuides: BestForGuideLink[]
): BestForTemplateProps {
  const label = useCase.replace(/-/g, " ");
  const mergedGuides = [...relatedGuides, ...SHARED_GUIDES].filter(
    (item, index, arr) => arr.findIndex((x) => x.href === item.href) === index
  );
  const mergedEditorial = [
    ...editorialGuidance,
    {
      heading: "Search intent match",
      body: `Buy channels that match how ${label} customers search in your market. Urgent intent usually favors search/LSA; planned projects may favor directories and portfolios.`,
    },
  ];
  const mergedWhyThesePicks = [
    ...whyThesePicks,
    {
      heading: "Pipeline resilience",
      body: "Diversifying paid lead sources matters because auction pressure, refund policies, and category eligibility change—often right when your busiest season hits. Pairing marketplace pay-per-lead with Google Local Services Ads for urgent search intent, and directory-style demand through Angi where bundles fit your sales motion, gives you independent supply instead of one vendor’s weekly mood. Start each new channel with a modest cap, measure cost per booked job and gross margin after disputes for 30–60 days, and scale only what clears your bar. Trial validation should include real speed-to-lead tests on your live dispatch rules, not demo dashboards, so you know crews can convert before you commit. When one channel degrades, you can shift budget without rebuilding the whole funnel from scratch.",
    },
  ];
  const mergedFaqs = [
    ...faqItems,
    {
      q: `What is the best lead generation channel for ${label}?`,
      a: "For most teams, there is no single winner forever. Start with one high-intent source and one marketplace source, then keep the mix that produces the best booked-job margin.",
    },
    {
      q: "What should I read next after this best-for page?",
      a: "Use the lead generation comparison hub, then open the linked product reviews and guide pages on this page to validate channel fit before scaling spend.",
    },
  ];
  return {
    title,
    subtitle,
    useCase,
    categoryHref: "/lead-generation",
    categoryLabel: "Lead Generation",
    introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: `Our top lead generation picks for ${label}.`,
    editorialSub: `What to evaluate when you're buying leads as ${label}.`,
    whyThesePicksSub: `Why these channels fit ${label}.`,
    seeAlsoBlock: {
      roundupLabel: "Best lead generation tools (2026) — full roundup",
      roundupHref: "/lead-generation/best-lead-generation-tools",
      compareLabel: "Compare lead generation platforms",
      compareHref: "/lead-generation/compare",
    },
    featuredProducts,
    comparisonTableRows,
    editorialGuidance: mergedEditorial,
    whyThesePicks: mergedWhyThesePicks,
    relatedReviews,
    relatedComparisons,
    relatedGuides: mergedGuides,
    faqItems: mergedFaqs,
  };
}

export const LEAD_GENERATION_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = {
  contractors: makePage(
    "contractors",
    "Best Lead Generation Tools for Contractors (2026)",
    "Marketplaces, Google LSA, and directory leads—picked for trade businesses that live on the phone.",
    "Contractors need fast response, clear service areas, and economics measured as margin after lead refunds—not vanity lead counts.",
    [
      { heading: "Speed to lead", body: "If you cannot answer in minutes, shared marketplaces burn budget. Fix routing before scaling." },
      { heading: "Dispute hygiene", body: "Learn each vendor’s dispute window; bad matches are inevitable at volume." },
      { heading: "Blend channels", body: "Pair rented leads with reviews, site SEO, and referrals to reduce single-vendor risk." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Thumbtack is a practical pay-per-lead marketplace when you want to test new cities, trades, or ticket sizes without locking into a single long contract. Run a capped trial, track how many leads become booked jobs within your real dispatch window, and compare refund or dispute outcomes against gross margin—not raw lead volume. It tends to fit contractors who need flexible budgets while they tune speed-to-lead and crew capacity. Pair keywords mentally with the job types you actually want—repairs versus large replacements—so you do not optimize for mismatched calls. Revisit weekly during busy season; marketplace mix shifts fast when competitors change bids or service areas.",
      },
      {
        heading: "Google Local Services Ads",
        body: "Google Local Services Ads capture homeowners who open Google with urgent, high-intent searches and are ready to call, which suits many contractor workflows when you are eligible and staffed to answer live. Validate the channel with a small geo or service-line test, then judge it on booked jobs, not impression share alone. Trial checklist: confirm screening and category eligibility, test after-hours routing, and ensure your CRM tags LSA calls so finance can reconcile cost per booked job. It works best when your Google Business Profile, reviews, and phone discipline already match the promise of the ad placement. If eligibility or categories are tight in your market, keep Thumbtack or Angi running in parallel rather than betting the pipeline on one auction.",
      },
      {
        heading: "Angi",
        body: "Angi fits when directory shoppers in your metro already recognize the brand and when bundled or quote-style programs align with how your estimators sell. Use a trial period to learn Angi’s dispute windows, lead definitions, and refund patterns—contractor economics live or die on how cleanly bad matches are removed from spend. Segment results by job type so large-ticket work is not subsidizing small service calls you never wanted. Compare Angi performance against marketplace and search channels using the same booked-job and margin math so you are not fooled by higher top-of-funnel counts. If bundles do not match your sales motion, downshift spend rather than forcing a process retrofit.",
      },
    ],
    [
      {
        q: "What lead source should contractors try first?",
        a: "Most teams pilot Thumbtack or Google LSA—whichever matches how customers find you today.",
      },
      {
        q: "How do I know if leads are profitable?",
        a: "Track cost per booked job and gross margin after refunds for 30–60 days before increasing spend.",
      },
    ],
    [
      { label: "How to get leads for contractors", href: `${GUIDES}/how-to-get-leads-for-contractors` },
      { label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` },
    ]
  ),
  hvac: makePage(
    "hvac",
    "Best Lead Generation Tools for HVAC (2026)",
    "High-intent emergency and seasonal demand—balance LSA with marketplaces.",
    "HVAC swings between urgent calls and tune-up campaigns; pick channels that match the job types you want this quarter.",
    [
      { heading: "Emergency intent", body: "Search and LSA often outperform social for same-day calls—if you’re eligible and staffed." },
      { heading: "Seasonality", body: "Raise caps before peaks; cut spend in slow weeks to protect margin." },
    ],
    [
      {
        heading: "Google Local Services Ads",
        body: "HVAC demand swings between emergency “no heat” calls and planned replacements; LSA often shines when searchers need help now and your team can answer the phone quickly during peaks. Pilot with a controlled budget through a heat wave or cold snap and score outcomes on booked emergency calls versus wasted rings. Confirm eligibility, service categories, and screening requirements before you scale, and tag LSA calls in CRM so you can separate repair from replace intent in reporting. Pair with strong review velocity and accurate service areas—overstating coverage destroys close rates and refunds pile up. If after-hours routing is weak, fix operations first; high-intent clicks do not forgive voicemail dead ends.",
      },
      {
        heading: "Thumbtack",
        body: "Thumbtack adds marketplace breadth for maintenance, tune-ups, and install-adjacent keywords when you want pay-per-lead flexibility outside pure search auctions. Trial it with clear caps per week, and measure cost per membership signup or booked tune-up—not just lead volume. It is useful when you are training crews on speed-to-lead without betting the whole season on one channel. Keep dispute hygiene tight; HVAC leads are often shared, and fast qualification on the first call protects margin. Rebalance toward LSA or Angi seasonally if one channel’s lead mix drifts away from the jobs you want.",
      },
      {
        heading: "Angi",
        body: "Angi can work well for planned equipment replacements and homeowners who browse established home-services brands before inviting bids. Run a 30–60 day trial focused on replacement tickets, not emergency dispatch, and compare close rates to your LSA and marketplace leads. Validate how bundles or packages affect your sales script so estimators are not stuck explaining mismatched expectations. Track refund and dispute outcomes separately from Thumbtack and LSA so you see true margin by source. If directory shoppers in your city lean Angi, the channel can diversify you away from pure search auction spikes.",
      },
    ],
    [{ q: "HVAC: LSA or Thumbtack?", a: "Often both—LSA for urgent search, Thumbtack for broader local prospecting." }],
    [
      { label: "How Google LSA works", href: `${GUIDES}/how-google-local-services-ads-work` },
      { label: "Lead strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` },
    ]
  ),
  plumbing: makePage(
    "plumbing",
    "Best Lead Generation Tools for Plumbers (2026)",
    "Capture emergency demand and planned jobs without overpaying for mismatched leads.",
    "Plumbers win or lose on phone speed—choose vendors you can dispute cleanly when dispatch rules differ from the lead’s story.",
    [
      { heading: "Dispatch fit", body: "Define what jobs you want—drains, water heaters, remodel partners—to filter mentally even when leads are shared." },
      { heading: "After-hours", body: "If you roll to on-call, make sure notifications reach the tech—not voicemail dead-ends." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Thumbtack gives plumbers flexible pay-per-lead budgets across drain cleaning, water heaters, repipes, and remodel-adjacent requests without committing all spend to one auction. Start with a modest weekly cap, record which lead types match your dispatch rules, and dispute out-of-area or wrong-service matches quickly—plumbing margins depend on it. Trial validation: run real after-hours tests so you know whether notifications reach the on-call tech, not just the office inbox. Use CRM tags to separate emergency from scheduled work so you do not optimize for the wrong ticket size. Re-evaluate monthly; competitor density in plumbing categories shifts fast.",
      },
      {
        heading: "Google Local Services Ads",
        body: "LSA targets homeowners who search Google for urgent plumbing help and call straight from results, which is powerful when you are eligible in the right categories and can answer live. Pilot in one metro or service band, then expand only if booked-job cost and refund rates beat your baseline. During the trial, verify call recording, dispute windows, and how Google defines a billable lead for your trade—plumbing stories on scope vary wildly. Align GBP categories, service areas, and reviews with the same promise your crew delivers on site. If eligibility is limited, keep Thumbtack and Angi funded rather than starving emergency volume.",
      },
      {
        heading: "Angi",
        body: "Angi helps when homeowners comparison-shop directory brands for larger repipes, water heater replacements, or planned projects rather than single emergency snaking jobs. Use a structured trial with explicit job-type filters in your sales process, and measure booked revenue and margin after any bundle or package constraints. Learn Angi’s refund and dispute mechanics early; plumbing leads are high emotion and mismatches happen at volume. Compare performance honestly against Thumbtack and LSA using the same booked-job definition so you are not double-counting demand. If Angi’s shopper profile does not match your average ticket, reallocate before spend trains the wrong funnel.",
      },
    ],
    [{ q: "Too many bad plumbing leads?", a: "Dispute early, tighten service definitions, and test a second channel before blaming one vendor." }],
    [{ label: "How to choose a lead platform", href: `${GUIDES}/how-to-choose-a-lead-generation-platform` }]
  ),
  electricians: makePage(
    "electricians",
    "Best Lead Generation Tools for Electricians (2026)",
    "From service calls to panel upgrades—pick channels that match permit-heavy work or quick service tickets.",
    "Electrical work ranges from small service to large projects; align lead sources with the ticket sizes your crew actually wants.",
    [
      { heading: "Safety and qualification", body: "Ask discovery questions fast to avoid sending techs to out-of-scope jobs." },
      { heading: "Multi-trade overlap", body: "If you also run HVAC, watch duplicate leads across categories." },
    ],
    [
      {
        heading: "Google Local Services Ads",
        body: "Electrical contractors often win urgent service calls from Google searchers who want a licensed pro on the phone now—LSA fits that pattern when you are screened and eligible in the right categories. Run a trial that tracks residential versus commercial-intent calls separately so you do not optimize for small truck rolls you never wanted. Validate after-hours coverage, licensing messaging on the profile, and how quickly estimators return missed calls—electrical buyers punish slow follow-up. Review dispute samples weekly during the pilot; bad-fit leads should be documented with scope notes. Keep spend tied to booked jobs and average ticket, not vanity call counts.",
      },
      {
        heading: "Thumbtack",
        body: "Thumbtack supplies broader marketplace flow for panel upgrades, EV charger interest, and mixed service keywords when you want pay-per-lead tests beyond search alone. Cap spend during the trial, qualify fast on the first conversation, and tag leads by job type in CRM so reporting stays honest. Electricians should trial how Thumbtack leads behave for permit-heavy work versus quick service calls—those economics differ sharply. Maintain dispute discipline; shared leads reward speed and clarity on what your license covers. Adjust weekly if lead mix drifts toward work outside your sweet spot.",
      },
      {
        heading: "Angi",
        body: "Angi can perform when homeowners are researching larger projects—panels, rewires, generator or EV charger installs—through directory ecosystems they already trust. Pilot Angi alongside LSA and Thumbtack with the same 30–60 day booked-job scorecard so you compare apples to apples. During validation, stress-test how bundle expectations line up with code-aware scopes and inspection realities in your market. Track close rate and margin separately from emergency channels; directory shoppers often move slower but carry bigger tickets when they convert. Downshift if brand-led leads do not match your service area or licensing footprint.",
      },
    ],
    [{ q: "Electricians and exclusivity?", a: "True exclusivity is rare in marketplaces—win on speed, reviews, and follow-up." }],
    [{ label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` }]
  ),
  roofing: makePage(
    "roofing",
    "Best Lead Generation Tools for Roofers (2026)",
    "Storm chasing and retail replacement leads need different math—segment your campaigns.",
    "Roofing has retail and event-driven demand; measure channels separately so storm spend doesn’t mask weak retail close rates.",
    [
      { heading: "Retail vs CAT", body: "Don’t blend economics—track close rate by source and geography." },
      { heading: "Visual proof", body: "Portfolio platforms can complement paid leads for larger tickets." },
    ],
    [
      {
        heading: "Angi",
        body: "Roofing often mixes retail replacement buyers who research brands with storm-driven urgency; Angi can reach replacement-minded homeowners who start in directory ecosystems before collecting bids. Trial Angi with clear segmentation between retail and event-driven leads so storm surges do not mask weak retail close rates. Validate dispute rules early—roofing scopes and insurance-adjacent stories create mismatched leads at volume. Measure cost per booked inspection and margin per square, not lead count alone. If your market’s Angi shoppers skew toward small repairs you do not want, tighten qualification or reallocate spend.",
      },
      {
        heading: "Thumbtack",
        body: "Thumbtack offers flexible marketplace tests across repair, replace, and maintenance-adjacent keywords when you need pay-per-lead optionality outside a single auction. Use capped trials through both quiet retail weeks and post-storm windows to see which mix actually books. Train estimators to document lead context fast; roofing disputes often hinge on scope and timing. Compare Thumbtack outcomes separately for retail versus CAT-influenced periods so you do not blend economics blindly. Scale only the segments that clear your net margin after supplements and labor reality.",
      },
      {
        heading: "Google Local Services Ads",
        body: "LSA captures high-intent Google searchers looking for roofers now—powerful for retail leak calls when you are eligible and competitive in your service area. Start with a disciplined test budget, monitor cost per booked inspection, and watch for auction spikes after weather events. Trial checklist: confirm categories, service area honesty, and review recency; Maps and LSA shoppers read social proof fast. Tag calls by retail versus storm campaigns if you run both so reporting stays clean. If keywords get prohibitively expensive, keep Thumbtack and Angi as ballast rather than forcing all volume through search.",
      },
    ],
    [{ q: "Should roofers use social leads?", a: "Optional—often secondary to search and marketplaces for urgent leaks." }],
    [{ label: "Lead strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` }]
  ),
  landscaping: makePage(
    "landscaping",
    "Best Lead Generation Tools for Landscapers (2026)",
    "Seasonal funnels for maintenance and install—avoid buying snow leads if you only mow.",
    "Landscaping leads are seasonal; adjust budgets monthly and qualify for recurring routes vs one-off cleanups.",
    [
      { heading: "Route density", body: "Leads far outside your cluster kill margin—set geo rules mentally or in CRM." },
      { heading: "Visual platforms", body: "Portfolio-driven channels can assist high-ticket design work." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Landscaping demand is seasonal and route-density sensitive; Thumbtack lets you test pay-per-lead demand for mowing, cleanups, installs, and design-build interest without betting the whole season on one channel. Run a spring or fall pilot with tight geography mentally enforced—leads far outside efficient routes destroy margin even when cost per lead looks low. During the trial, log job type and recurrence on first contact so you optimize for maintenance routes versus one-off projects. Dispute leads that fall outside stated services or your crew footprint. Rebalance weekly as weather and backlog change.",
      },
      {
        heading: "Angi",
        body: "Angi helps when homeowners browse directory brands for landscapers, hardscape contractors, or larger outdoor projects before inviting onsite estimates. Trial Angi with explicit alignment between advertised services and the crews you can actually field this month—overselling capacity creates bad reviews. Measure booked jobs and average ticket across design-build, maintenance, and seasonal cleanups separately. Validate how Angi leads compare to Thumbtack and Google LSA on speed-to-book and close rate in your metro. If directory shoppers skew toward tiny jobs you do not want, adjust messaging or spend before you train the wrong pipeline.",
      },
      {
        heading: "Google Local Services Ads",
        body: "Google Local Services Ads reach homeowners who search for landscapers with immediate intent—new moves, spring cleanups, or urgent drainage issues—when you are eligible and can respond quickly. Pilot LSA in a single county or cluster first, and score it on booked estimates within your route economics, not raw calls. Trial validation should include mobile call quality, photo-forward GBP behavior, and honest service areas that match trucks on the road. Compare LSA cost per booked job to Thumbtack and Angi using the same margin math. If search volume is thin in your niche, keep marketplace and directory channels funded rather than starving leads waiting for auction scale.",
      },
    ],
    [{ q: "LSA for landscaping?", a: "If eligible and search volume exists, test small—many markets lean marketplace or social." }],
    [{ label: "How to get leads for contractors", href: `${GUIDES}/how-to-get-leads-for-contractors` }]
  ),
  "cleaning-services": makePage(
    "cleaning-services",
    "Best Lead Generation Tools for Cleaning Services (2026)",
    "Recurring route customers vs one-time deep cleans—qualify fast.",
    "Cleaning businesses win on recurring revenue; use lead channels that match the ticket type you can staff.",
    [
      { heading: "Recurrence", body: "Ask about frequency on the first call—don’t optimize for one-offs if you need routes." },
      { heading: "Marketplace promos", body: "Directory brands can help when homeowners compare cleaners actively." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Cleaning companies often need fast pay-per-lead tests across residential deep cleans, move-outs, and recurring route prospects; Thumbtack supports that flexibility with budget caps you can tune weekly. Run a trial focused on the ticket types you can staff—do not buy one-off leads if you are trying to build recurring routes. On the first call, ask frequency and home size early so you score cost per booked recurring client, not just per job. Dispute mismatches when scope or geography is wrong; cleaning margins are thin and bad fits add up. Compare Thumbtack to Angi and LSA monthly as seasonality shifts move and event-driven demand.",
      },
      {
        heading: "Angi",
        body: "Angi fits when homeowners trust directory brands to compare cleaners, especially for larger homes or bundled home-services shopping journeys. Pilot with a clear script that qualifies recurring intent versus one-time promos so your crew schedule stays sane. Measure margin after supplies, drive time, and labor—cleaning economics punish long hauls hidden inside “cheap” leads. During validation, track review impact; Angi-influenced buyers often read proof before booking. If Angi’s lead mix skews toward deep discounts you cannot honor, tighten offers or shift budget before reputation damage.",
      },
      {
        heading: "Google Local Services Ads",
        body: "LSA captures high-intent Google searches for move-out cleans, same-week availability, and local “house cleaning near me” queries when you are eligible and can answer the phone. Start small, tag calls by one-time versus recurring opportunity, and judge the channel on booked routes and customer lifetime value proxies, not call length alone. Trial checklist: confirm screening, accurate service areas, and fast SMS or phone follow-up for busy customers booking between work meetings. Pair LSA with strong recent reviews—cleaning shoppers compare fast. If eligibility is limited in your category, lean harder on Thumbtack and Angi while you fix GBP and operational prerequisites.",
      },
    ],
    [{ q: "Low margins on cleaning leads?", a: "Tighten frequency filters and upsell packages—raise prices before blaming the marketplace." }],
    [{ label: "How to choose a lead platform", href: `${GUIDES}/how-to-choose-a-lead-generation-platform` }]
  ),
  "home-services": makePage(
    "home-services",
    "Best Lead Generation Tools for Home Services (2026)",
    "General local operators balancing many trades—start with two channels max.",
    "Home services is broad: nail dispatch and measurement before stacking five vendors.",
    [
      { heading: "Focus", body: "Master one marketplace + one search channel before expanding." },
      { heading: "CRM hygiene", body: "Tag duplicates across Angi, HomeAdvisor, and Thumbtack to see true CPA." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Multi-trade home-service brands need flexible pay-per-lead entry points across HVAC, plumbing, electrical, and related categories without locking every trade into the same auction dynamics. Use Thumbtack trials per trade with separate caps and CRM tags so you see true cost per booked job by line of business. Validate dispatch and speed-to-lead by branch; shared brands fail when one territory answers fast and another does not. Dispute hygiene must be standardized across offices or metrics become meaningless. Rebalance monthly as trades hit different seasonality curves.",
      },
      {
        heading: "Google Local Services Ads",
        body: "LSA adds high-intent phone demand wherever Google’s categories and screening fit your licensed trades—often strongest for urgent search behavior. Roll out by trade and metro in waves, measuring booked jobs and refund rates independently so one division does not hide another’s weakness. Trial operations seriously: overlapping LSA with unmanaged CRM duplicates makes ROI look artificially good or bad. Ensure GBP, service areas, and after-hours routing match each trade’s real coverage. Keep Thumbtack and Angi active as diversification while LSA eligibility and auction costs fluctuate.",
      },
      {
        heading: "Angi",
        body: "Angi layers directory-centric demand in many metros where homeowners start inside brand-heavy marketplaces before inviting multiple bids. Pilot Angi with bundles and quote flows that match your multi-trade sales process—avoid sending electric leads down plumbing scripts and vice versa. Run 30–60 day trials per region; home-service rollups often discover Angi performance varies sharply by city. Compare Angi to Thumbtack and LSA using the same booked-job and margin definitions across brands you operate. If Angi overlaps heavily with another channel on the same customers, dedupe in CRM before doubling spend.",
      },
    ],
    [{ q: "Where should home services start?", a: "Thumbtack + Google LSA is a common stack when eligible—read our comparisons." }],
    [
      { label: "Lead strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` },
      { label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` },
    ]
  ),
};

export function getLeadGenerationBestForPageProps(slug: string): BestForTemplateProps | null {
  return LEAD_GENERATION_BEST_FOR_BY_SLUG[slug] ?? null;
}


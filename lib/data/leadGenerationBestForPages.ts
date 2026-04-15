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
    "Best Lead Generation Software for HVAC Businesses (2026)",
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
    "Best Lead Generation Software for Plumbing Companies (2026)",
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
    "Best Lead Generation Software for Electricians (2026)",
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
    "Best Lead Generation Software for Roofing Companies (2026)",
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
    "Best Lead Generation Software for Landscaping Companies (2026)",
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
  painting: makePage(
    "painting",
    "Best Lead Generation Software for Painting Contractors (2026)",
    "Compare lead generation software for painting contractors across local marketplaces, search intent, and directory channels.",
    "Painting contractors need lead channels that balance one-off projects and repeat neighborhood opportunities while protecting margin on estimate-heavy jobs.",
    [
      { heading: "Quote-to-close cycle", body: "Measure channel quality on booked estimates and wins, not raw lead count." },
      { heading: "Service-area discipline", body: "Painting crews lose margin on long travel times—tight geography matters." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Thumbtack is useful for painting contractors testing local demand with flexible pay-per-lead budgets. Validate close rates by job type (interior, exterior, commercial touch-up) and scale only what keeps crews profitably scheduled.",
      },
      {
        heading: "Google Local Services Ads",
        body: "Google LSA helps painting businesses capture high-intent local search demand when homeowners actively seek estimates. Success depends on fast follow-up, accurate service areas, and strong review signals.",
      },
      {
        heading: "Angi",
        body: "Angi can perform well for homeowners comparison-shopping painting pros in brand-trust directories. Run a 30–60 day test and compare booked-job margin against Thumbtack and LSA before committing larger budgets.",
      },
    ],
    [{ q: "What lead source is best for painting contractors?", a: "Most painting contractors start with Thumbtack or Google LSA, then layer Angi where directory intent is strong in their market." }],
    [{ label: "How to choose a lead generation platform", href: `${GUIDES}/how-to-choose-a-lead-generation-platform` }]
  ),
  "general-contractors": makePage(
    "general-contractors",
    "Best Lead Generation Software for General Contractors (2026)",
    "Compare lead generation software for general contractors with channels that support high-value bids and long sales cycles.",
    "General contractors need lead generation channels that prioritize qualified project opportunities over low-fit calls, with clear tracking from lead to signed contract.",
    [
      { heading: "Opportunity quality over volume", body: "GCs should optimize for qualified project pipeline, not call count." },
      { heading: "Stakeholder follow-up", body: "Long-cycle deals require structured follow-up and CRM tagging by source." },
    ],
    [
      {
        heading: "Google Local Services Ads",
        body: "Google LSA captures high-intent local search demand when property owners and businesses actively seek contractors. Validate lead quality by project scope to avoid overpaying for small jobs that do not fit your pipeline.",
      },
      {
        heading: "Thumbtack",
        body: "Thumbtack provides flexible lead testing for general contractors in local markets. Keep budgets capped during pilots and score leads on qualified bids and contract value, not only volume.",
      },
      {
        heading: "Angi",
        body: "Angi helps GCs appear in homeowner and property-owner comparison journeys. It works best when your service mix and quoting process match directory buyer behavior in your metro.",
      },
    ],
    [{ q: "What is the best lead generation software for general contractors?", a: "Google LSA, Thumbtack, and Angi are common starting points; the best choice depends on your market and project mix." }],
    [{ label: "Lead generation strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` }]
  ),
  construction: makePage(
    "construction",
    "Best Lead Generation Software for Construction Companies (2026)",
    "Compare lead generation software for construction companies with channels that support project-qualified demand and better bid pipeline visibility.",
    "Construction companies need lead generation software that produces qualified opportunities and supports measurable pipeline economics from first contact through close.",
    [
      { heading: "Pipeline qualification", body: "Track source quality by project size and close probability." },
      { heading: "Margin-first measurement", body: "Cost per booked job and project margin beat vanity lead metrics." },
    ],
    [
      {
        heading: "Google Local Services Ads",
        body: "LSA can drive high-intent local construction demand where categories and eligibility align. Pilot by service line and judge performance on qualified bid volume and booked revenue.",
      },
      {
        heading: "Thumbtack",
        body: "Thumbtack offers flexible local lead testing for construction teams exploring new geographies or service lines. Use strict qualification criteria to avoid mismatched small-ticket leads.",
      },
      {
        heading: "Angi",
        body: "Angi adds directory-driven construction opportunities in markets where homeowners and property managers comparison-shop before committing. Compare conversion quality against search-led sources monthly.",
      },
    ],
    [{ q: "Which lead generation software works best for construction companies?", a: "Most teams test Google LSA, Thumbtack, and Angi first, then scale the channels with the strongest qualified-project economics." }],
    [{ label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` }]
  ),
  remodeling: makePage(
    "remodeling",
    "Best Lead Generation Software for Remodeling Businesses (2026)",
    "Compare lead generation software for remodeling businesses focused on high-intent homeowners and project-ready opportunities.",
    "Remodeling businesses need lead channels that produce qualified homeowners with real project intent, not low-fit inquiries that drain estimator capacity.",
    [
      { heading: "Project intent filtering", body: "Qualify budget, timeline, and scope early to protect estimator time." },
      { heading: "Portfolio influence", body: "Visual proof and reviews materially affect remodel close rates." },
    ],
    [
      {
        heading: "Angi",
        body: "Angi is often strong for remodeling demand where homeowners compare providers before requesting estimates. Validate booked-project value and margin, not just booked consultations.",
      },
      {
        heading: "Thumbtack",
        body: "Thumbtack helps remodelers test demand quickly with budget controls and category flexibility. Maintain strict qualification scripts to separate small repairs from true remodel opportunities.",
      },
      {
        heading: "Google Local Services Ads",
        body: "Google LSA can generate strong local remodel inquiries where eligibility fits. Performance depends on review quality, response speed, and accurate service-area targeting.",
      },
    ],
    [{ q: "What lead generation software is best for remodeling businesses?", a: "Angi, Thumbtack, and Google LSA are the most common channels to test; optimize based on booked project margin and close rate." }],
    [{ label: "How to choose a lead generation platform", href: `${GUIDES}/how-to-choose-a-lead-generation-platform` }]
  ),
  handyman: makePage(
    "handyman",
    "Best Lead Generation Software for Handyman Businesses (2026)",
    "Compare lead generation software for handyman businesses that need affordable local demand and fast quote-to-book workflows.",
    "Handyman businesses need lead channels that deliver local, service-fit demand at sustainable cost per booked job, especially in competitive neighborhoods.",
    [
      { heading: "Ticket-size alignment", body: "Avoid channels that over-index on low-value jobs you cannot profitably service." },
      { heading: "Response speed", body: "Handyman leads decay fast—phone and SMS routing must be immediate." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Thumbtack is a practical first channel for handyman businesses due to flexible budgets and broad local demand categories. Keep service definitions tight and track net booked-job economics weekly.",
      },
      {
        heading: "Google Local Services Ads",
        body: "Google LSA captures high-intent local search demand for small-job and urgent fixes. Success depends on quick response, accurate profiles, and strong review velocity.",
      },
      {
        heading: "Angi",
        body: "Angi can supplement demand where homeowners browse directories before hiring. Run controlled tests and compare close rates against Thumbtack and LSA for your target ticket sizes.",
      },
    ],
    [{ q: "What is the best lead generation software for handyman businesses?", a: "Thumbtack and Google LSA are common starting channels, with Angi added where directory demand is strong." }],
    [{ label: "Lead generation strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` }]
  ),
  "property-management": makePage(
    "property-management",
    "Best Lead Generation Software for Property Management Companies (2026)",
    "Compare lead generation software for property management companies focused on qualified owner and portfolio leads.",
    "Property management companies need lead channels that attract qualified property owners and managers, not only one-off service requests.",
    [
      { heading: "Lead persona fit", body: "Prioritize channels that generate owner and investor-quality inquiries." },
      { heading: "Long-cycle nurturing", body: "Track source ROI over longer close timelines typical in property management." },
    ],
    [
      {
        heading: "Google Local Services Ads",
        body: "LSA can produce high-intent local management inquiries when categories and market behavior align. Validate lead quality by property count and contract value before scaling.",
      },
      {
        heading: "Thumbtack",
        body: "Thumbtack provides flexible testing for local property-related demand and can uncover usable market pockets quickly. Keep qualification scripts strict to avoid low-fit tenant-service style inquiries.",
      },
      {
        heading: "Angi",
        body: "Angi can support property-management acquisition in homeowner-heavy markets where directory trust influences selection. Use CRM tagging to compare true managed-door economics by source.",
      },
    ],
    [{ q: "Which lead generation software works best for property management companies?", a: "Google LSA, Thumbtack, and Angi are common channels to test; choose based on qualified owner lead quality and signed-management economics." }],
    [{ label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` }]
  ),
  "pest-control": makePage(
    "pest-control",
    "Best Lead Generation Software for Pest Control Businesses (2026)",
    "Compare lead generation software for pest control businesses balancing urgent calls, recurring plans, and local route economics.",
    "Pest control operators need lead channels that support both urgent service calls and recurring treatment-plan growth at healthy acquisition cost.",
    [
      { heading: "Recurring-value focus", body: "Track lead sources by recurring customer value, not one-time treatment volume." },
      { heading: "Route density", body: "Local clustering materially impacts profitability for pest service teams." },
    ],
    [
      {
        heading: "Google Local Services Ads",
        body: "LSA is often strong for high-intent pest-control searches, especially urgent issues where homeowners call immediately. Use route-aware service areas and track booked recurring plans by source.",
      },
      {
        heading: "Thumbtack",
        body: "Thumbtack gives pest-control companies budget-flexible marketplace testing across service types. Keep qualification tight and separate one-time service from recurring-program opportunities in reporting.",
      },
      {
        heading: "Angi",
        body: "Angi can add directory demand where homeowners compare local providers before selecting a plan. Benchmark conversion quality and recurring-value outcomes against LSA and Thumbtack monthly.",
      },
    ],
    [{ q: "What is the best lead generation software for pest control businesses?", a: "Google LSA and Thumbtack are common first channels, with Angi as a useful secondary source in many local markets." }],
    [{ label: "How to choose a lead generation platform", href: `${GUIDES}/how-to-choose-a-lead-generation-platform` }]
  ),
  "pool-service": makePage(
    "pool-service",
    "Best Lead Generation Software for Pool Service Companies (2026)",
    "Compare lead generation software for pool service companies focused on recurring route growth and seasonal demand capture.",
    "Pool service companies need lead channels that support recurring account growth, route density, and seasonal demand spikes without margin erosion.",
    [
      { heading: "Recurring route value", body: "Score channels on recurring account value and retention potential." },
      { heading: "Seasonal pacing", body: "Increase spend ahead of seasonal peaks, not after calendars fill." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Thumbtack is a flexible marketplace option for pool service teams testing recurring and one-time demand in local markets. Track route-fit and recurring account conversion separately from one-off jobs.",
      },
      {
        heading: "Google Local Services Ads",
        body: "LSA can capture high-intent pool service searches where eligibility applies. Validate speed-to-lead and booked recurring-plan economics before scaling spend.",
      },
      {
        heading: "Angi",
        body: "Angi supports pool-service visibility in directory-led homeowner journeys. Compare conversion and route profitability against Thumbtack and LSA in the same geography.",
      },
    ],
    [{ q: "Which lead generation software is best for pool service companies?", a: "Thumbtack and Google LSA are common starting points, with Angi added where directory demand performs well." }],
    [{ label: "Lead generation strategies for local business", href: `${GUIDES}/lead-generation-strategies-for-local-business` }]
  ),
  "junk-removal": makePage(
    "junk-removal",
    "Best Lead Generation Software for Junk Removal Businesses (2026)",
    "Compare lead generation software for junk removal businesses that need fast local demand and route-efficient booked jobs.",
    "Junk removal businesses rely on quick response and efficient routing, so lead channels should be judged on booked-job profitability and dispatch fit.",
    [
      { heading: "Dispatch readiness", body: "Speed-to-lead is critical; delayed callbacks reduce win rates sharply." },
      { heading: "Route economics", body: "Service-area discipline and load type qualification protect margin." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Thumbtack is often the first channel junk removal teams use for local demand due to flexible budgets and broad category coverage. Track cost per booked load and route-fit quality by zip.",
      },
      {
        heading: "Google Local Services Ads",
        body: "LSA captures high-intent search demand for same-day and urgent junk hauling needs. Validate booked-job margin after travel time and disposal costs before expanding budgets.",
      },
      {
        heading: "Angi",
        body: "Angi can complement marketplace and search channels where homeowners comparison-shop providers first. Compare performance against Thumbtack and LSA using the same booked-job metrics.",
      },
    ],
    [{ q: "What is the best lead generation software for junk removal businesses?", a: "Thumbtack and Google LSA are common lead-generation starting points, with Angi as an additional channel in many local markets." }],
    [{ label: "Paid vs organic leads", href: `${GUIDES}/paid-vs-organic-leads` }]
  ),
  moving: makePage(
    "moving",
    "Best Lead Generation Software for Moving Companies (2026)",
    "Compare lead generation software for moving companies with channels optimized for high-intent local and long-distance inquiry demand.",
    "Moving companies need lead channels that deliver qualified requests with clear job details so sales teams can quote quickly and protect route economics.",
    [
      { heading: "Job-detail qualification", body: "Capture distance, inventory, and timing early to avoid low-fit opportunities." },
      { heading: "Fast quote response", body: "Lead conversion drops quickly when follow-up is delayed." },
    ],
    [
      {
        heading: "Thumbtack",
        body: "Thumbtack gives moving companies flexible lead testing for local and regional opportunities with pay-per-lead control. Track booked-move value and qualification quality before scaling.",
      },
      {
        heading: "Google Local Services Ads",
        body: "LSA can generate strong high-intent moving inquiries when eligibility and local search volume support it. Success depends on quick response and disciplined service-area settings.",
      },
      {
        heading: "Angi",
        body: "Angi adds directory-based demand from customers comparing moving providers. Evaluate conversion quality and average move value against Thumbtack and LSA monthly.",
      },
    ],
    [{ q: "Which lead generation software is best for moving companies?", a: "Most moving companies test Thumbtack and Google LSA first, then add Angi where directory demand supports profitable booked moves." }],
    [{ label: "How to choose a lead generation platform", href: `${GUIDES}/how-to-choose-a-lead-generation-platform` }]
  ),
};

export const LEAD_GENERATION_BEST_FOR_METADATA_BY_SLUG: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  hvac: {
    title: "Best Lead Generation Software for HVAC Businesses (2026) | BeltStack",
    description: "Compare the best lead generation software for HVAC businesses, including Google LSA, Thumbtack, and Angi.",
    keywords: ["best lead generation software for HVAC businesses", "HVAC lead generation software", "HVAC lead generation tools"],
  },
  plumbing: {
    title: "Best Lead Generation Software for Plumbing Companies (2026) | BeltStack",
    description: "Compare the best lead generation software for plumbing companies, including Google LSA, Thumbtack, and Angi.",
    keywords: ["best lead generation software for plumbing companies", "plumber lead generation software", "plumbing lead generation tools"],
  },
  electricians: {
    title: "Best Lead Generation Software for Electricians (2026) | BeltStack",
    description: "Compare the best lead generation software for electricians, including Google LSA, Thumbtack, and Angi.",
    keywords: ["best lead generation software for electricians", "electrician lead generation software", "electrical contractor lead generation"],
  },
  painting: {
    title: "Best Lead Generation Software for Painting Contractors (2026) | BeltStack",
    description: "Compare the best lead generation software for painting contractors, including Google LSA, Thumbtack, and Angi.",
    keywords: ["best lead generation software for painting contractors", "painting lead generation software", "painter lead generation tools"],
  },
  roofing: {
    title: "Best Lead Generation Software for Roofing Companies (2026) | BeltStack",
    description: "Compare the best lead generation software for roofing companies, including Angi, Thumbtack, and Google LSA.",
    keywords: ["best lead generation software for roofing companies", "roofing lead generation software", "roofer lead generation tools"],
  },
  "general-contractors": {
    title: "Best Lead Generation Software for General Contractors (2026) | BeltStack",
    description: "Compare the best lead generation software for general contractors, including Google LSA, Thumbtack, and Angi.",
    keywords: ["best lead generation software for general contractors", "general contractor lead generation software", "GC lead generation tools"],
  },
  landscaping: {
    title: "Best Lead Generation Software for Landscaping Companies (2026) | BeltStack",
    description: "Compare the best lead generation software for landscaping companies, including Thumbtack, Angi, and Google LSA.",
    keywords: ["best lead generation software for landscaping companies", "landscaping lead generation software", "landscaper lead generation tools"],
  },
  construction: {
    title: "Best Lead Generation Software for Construction Companies (2026) | BeltStack",
    description: "Compare the best lead generation software for construction companies, including Google LSA, Thumbtack, and Angi.",
    keywords: ["best lead generation software for construction companies", "construction lead generation software", "construction lead generation tools"],
  },
  remodeling: {
    title: "Best Lead Generation Software for Remodeling Businesses (2026) | BeltStack",
    description: "Compare the best lead generation software for remodeling businesses, including Angi, Thumbtack, and Google LSA.",
    keywords: ["best lead generation software for remodeling businesses", "remodeling lead generation software", "remodeler lead generation tools"],
  },
  handyman: {
    title: "Best Lead Generation Software for Handyman Businesses (2026) | BeltStack",
    description: "Compare the best lead generation software for handyman businesses, including Thumbtack, Google LSA, and Angi.",
    keywords: ["best lead generation software for handyman businesses", "handyman lead generation software", "handyman lead generation tools"],
  },
  "property-management": {
    title: "Best Lead Generation Software for Property Management Companies (2026) | BeltStack",
    description: "Compare the best lead generation software for property management companies, including Google LSA, Thumbtack, and Angi.",
    keywords: ["best lead generation software for property management companies", "property management lead generation software", "property management lead tools"],
  },
  "pest-control": {
    title: "Best Lead Generation Software for Pest Control Businesses (2026) | BeltStack",
    description: "Compare the best lead generation software for pest control businesses, including Google LSA, Thumbtack, and Angi.",
    keywords: ["best lead generation software for pest control businesses", "pest control lead generation software", "pest control lead tools"],
  },
  "pool-service": {
    title: "Best Lead Generation Software for Pool Service Companies (2026) | BeltStack",
    description: "Compare the best lead generation software for pool service companies, including Thumbtack, Google LSA, and Angi.",
    keywords: ["best lead generation software for pool service companies", "pool service lead generation software", "pool service lead tools"],
  },
  "junk-removal": {
    title: "Best Lead Generation Software for Junk Removal Businesses (2026) | BeltStack",
    description: "Compare the best lead generation software for junk removal businesses, including Thumbtack, Google LSA, and Angi.",
    keywords: ["best lead generation software for junk removal businesses", "junk removal lead generation software", "junk hauling lead generation"],
  },
  moving: {
    title: "Best Lead Generation Software for Moving Companies (2026) | BeltStack",
    description: "Compare the best lead generation software for moving companies, including Thumbtack, Google LSA, and Angi.",
    keywords: ["best lead generation software for moving companies", "moving company lead generation software", "moving leads software"],
  },
};

export function getLeadGenerationBestForPageProps(slug: string): BestForTemplateProps | null {
  return LEAD_GENERATION_BEST_FOR_BY_SLUG[slug] ?? null;
}


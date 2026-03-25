import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import {
  getReputationManagementCompareUrl,
  getReputationManagementReviewUrl,
} from "@/lib/routes";

const LOGOS = {
  podium: "/Logos/podium.jpeg",
  birdeye: "/Logos/birdeye.svg",
  nicejob: "/Logos/nicejob.jpeg",
  "reputation-com": "/Logos/reputation.jpeg",
  broadly: "/Logos/broadly.png",
  "grade-us": "/Logos/gradeus.png",
  "trustpilot-business": "/Logos/trustpilot.png",
} as const;

const featuredProducts = [
  {
    slug: "podium",
    name: "Podium",
    badge: "Best SMS-first workflow",
    description: "Strong for teams that already run customer communication through text.",
    rating: "4.5",
    startingPrice: "Custom / quote",
    reviewHref: getReputationManagementReviewUrl("podium"),
    visitUrl: "https://www.podium.com",
    logoSrc: LOGOS.podium,
  },
  {
    slug: "birdeye",
    name: "Birdeye",
    badge: "Best broad suite",
    description: "Strong multi-location fit for review and response operations.",
    rating: "4.6",
    startingPrice: "Custom / quote",
    reviewHref: getReputationManagementReviewUrl("birdeye"),
    visitUrl: "https://birdeye.com",
    logoSrc: LOGOS.birdeye,
  },
  {
    slug: "nicejob",
    name: "NiceJob",
    badge: "Best easy automation",
    description: "Lean setup and consistent review growth for owner-led teams.",
    rating: "4.4",
    startingPrice: "From ~$75/mo",
    reviewHref: getReputationManagementReviewUrl("nicejob"),
    visitUrl: "https://nicejob.com",
    logoSrc: LOGOS.nicejob,
  },
];

const comparisonTableRows = [
  { slug: "podium", name: "Podium", logoSrc: LOGOS.podium, bestFor: "SMS-first workflows", startingPrice: "Custom / quote", standoutFeature: "Text-led review requests", reviewHref: getReputationManagementReviewUrl("podium") },
  { slug: "birdeye", name: "Birdeye", logoSrc: LOGOS.birdeye, bestFor: "Multi-location operations", startingPrice: "Custom / quote", standoutFeature: "Suite depth", reviewHref: getReputationManagementReviewUrl("birdeye") },
  { slug: "nicejob", name: "NiceJob", logoSrc: LOGOS.nicejob, bestFor: "Simplicity", startingPrice: "From ~$75/mo", standoutFeature: "Low-friction onboarding", reviewHref: getReputationManagementReviewUrl("nicejob") },
];

type BestForScenarioContent = {
  subtitle: string;
  introParagraph: string;
  topPicksSub: string;
  editorialSub: string;
  whyThesePicksSub: string;
  editorialGuidance: { heading: string; body: string }[];
  whyThesePicks: { heading: string; body: string }[];
  faqItems: { q: string; a: string }[];
};

const BEST_FOR_SCENARIO_CONTENT: Record<string, BestForScenarioContent> = {
  "small-business": {
    subtitle: "Simple, sustainable review workflows for growing local operators.",
    introParagraph:
      "Small businesses need review growth that is consistent, affordable, and easy to run without a dedicated marketing manager. The best reputation management software for small business should automate request timing, keep response tasks clear, and tie review momentum back to booked jobs and repeat customers.",
    topPicksSub: "Top reputation tools for lean small-business teams.",
    editorialSub: "What matters most when choosing reputation software for small business.",
    whyThesePicksSub: "Why these platforms are reliable for owner-led operations.",
    editorialGuidance: [
      {
        heading: "Protect owner time with automation",
        body: "Prioritize request automation after completed jobs so review collection does not depend on memory or ad hoc follow-up. A small business system should run even during busy weeks when owners are focused on dispatch and fulfillment.",
      },
      {
        heading: "Choose predictable cost over feature sprawl",
        body: "Model 12-month cost including seats, locations, and messaging usage. Most small teams get better ROI from reliable request cadence and response workflows than from enterprise add-ons they will not operationalize.",
      },
      {
        heading: "Build trust where local buyers decide",
        body: "Direct request and response efforts toward channels that influence local conversion. Pair this with your website trust sections and lead handling process so reviews support both rankings and close rate.",
      },
      {
        heading: "Track business outcomes, not vanity metrics",
        body: "Measure request send rate, review completion rate, average rating trend, and booked-job conversion from local leads. Growth in review count only matters if lead quality and close performance also improve.",
      },
    ],
    whyThesePicks: [
      {
        heading: "Podium",
        body: "Podium is strong when the business already uses SMS heavily for customer communication. Review requests and follow-up stay in a familiar channel, which helps owners maintain consistency without adding complicated process layers.",
      },
      {
        heading: "Birdeye",
        body: "Birdeye gives small businesses room to scale into broader workflows, especially if they anticipate adding locations or formalizing brand standards. It is best for teams that want one system for review operations plus deeper controls.",
      },
      {
        heading: "NiceJob",
        body: "NiceJob is often the best fit for owner-led teams that need lightweight setup and steady execution. It keeps the workflow simple, which usually leads to better long-term adoption than overbuilt platforms.",
      },
    ],
    faqItems: [
      {
        q: "What is the best reputation management software for small business?",
        a: "For most small businesses, the shortlist starts with Podium, Birdeye, and NiceJob. Podium is strong for SMS-heavy teams, Birdeye is best if you want broader platform depth, and NiceJob is ideal when simplicity and consistent execution matter most.",
      },
      {
        q: "How much should small businesses budget for reputation software?",
        a: "Most teams should budget for software plus the operating time required to run requests and responses weekly. Compare annual cost at your expected location count and messaging volume, then choose the option your team can execute consistently.",
      },
      {
        q: "Can reputation software really improve lead conversion?",
        a: "Yes, when review growth is paired with fast response handling and visible trust placement on high-intent pages. Better ratings and fresher reviews improve buyer confidence, which can increase call and form conversion from local traffic.",
      },
      {
        q: "How long should a small business evaluate before deciding?",
        a: "Run a 30- to 60-day pilot with fixed request timing and response ownership. Evaluate trend direction in review volume, average rating, response SLA, and lead-to-booked-job performance before committing.",
      },
    ],
  },
  contractors: {
    subtitle: "Review systems that fit dispatch-heavy service operations.",
    introParagraph:
      "Contractors need reputation management that works inside real field operations: dispatch schedules, variable job sizes, and fast-moving customer communication. The right platform helps crews request reviews at the right moment, while office teams respond quickly and turn social proof into higher quote conversion.",
    topPicksSub: "Top reputation software picks for contractor workflows.",
    editorialSub: "How contractors should evaluate reputation management fit.",
    whyThesePicksSub: "Why these tools rank well for trade-service teams.",
    editorialGuidance: [
      {
        heading: "Map review requests to job completion moments",
        body: "Contractor teams perform best when review requests are triggered right after a successful visit, before momentum fades. Build a repeatable handoff from field completion to office follow-up so request cadence stays steady.",
      },
      {
        heading: "Assign negative review ownership by role",
        body: "Define who drafts, approves, and closes responses for complaints. Clear ownership reduces delays and helps teams address root causes faster, especially when service quality issues touch multiple departments.",
      },
      {
        heading: "Use reviews to strengthen quote conversion",
        body: "Show recent proof on service pages, estimate pages, and proposal touchpoints. Strong review velocity plus visible trust signals can improve conversion from both paid and organic lead sources.",
      },
      {
        heading: "Integrate with lead and follow-up systems",
        body: "Connect reputation workflows with your CRM, website updates, and call-tracking feedback loops. That makes it easier to see which markets and service lines gain real revenue impact from review improvements.",
      },
    ],
    whyThesePicks: [
      {
        heading: "Podium",
        body: "Podium fits contractors that already use text messaging as the primary customer channel. It keeps post-job requests and follow-up in a workflow technicians and office teams can run consistently.",
      },
      {
        heading: "Birdeye",
        body: "Birdeye is strong for contractor businesses with multiple locations or more formal operational requirements. It gives teams broader control across review monitoring, response governance, and reporting.",
      },
      {
        heading: "NiceJob",
        body: "NiceJob works well for contractors that need fast onboarding and low maintenance. Its simpler workflow helps teams build reliable review velocity without requiring a dedicated platform owner.",
      },
    ],
    faqItems: [
      {
        q: "What is the best reputation management software for contractors?",
        a: "Podium, Birdeye, and NiceJob are the most common contractor shortlist. Podium is best for SMS-first operations, Birdeye is best for broader controls and multi-location needs, and NiceJob is best for simpler day-to-day execution.",
      },
      {
        q: "How do contractors get more reviews without annoying customers?",
        a: "Use timed requests after successful job completion, keep message copy short, and avoid over-sending reminders. Teams usually perform best with one clear request plus a single follow-up if no response is received.",
      },
      {
        q: "Should review response be handled by office staff or managers?",
        a: "Most contractors should assign first-draft ownership to office staff with escalation rules for sensitive cases. This keeps response speed high while ensuring complex situations get manager oversight when needed.",
      },
      {
        q: "How do reviews connect to lead quality and sales outcomes?",
        a: "Review consistency improves trust before calls and quote requests happen. When paired with CRM and call tracking, contractors can measure whether markets with stronger ratings also produce better lead quality and close rates.",
      },
    ],
  },
  hvac: {
    subtitle: "Manage seasonal demand and trust signals with consistent review operations.",
    introParagraph:
      "HVAC companies need reputation systems that hold up during seasonal spikes, emergency calls, and fluctuating staffing. The best software keeps requests and responses consistent year-round so trust signals stay strong when buyers are making urgent high-value decisions.",
    topPicksSub: "Top reputation platforms for HVAC service businesses.",
    editorialSub: "How HVAC operators should assess reputation software.",
    whyThesePicksSub: "Why these tools align with HVAC demand patterns.",
    editorialGuidance: [
      { heading: "Plan for peak-season execution", body: "Choose workflows that still run during summer and winter surges. Automation and clear ownership prevent review operations from collapsing when call volume spikes." },
      { heading: "Prioritize speed-to-response for urgent issues", body: "HVAC customers often have high urgency. Fast, professional responses to neutral and negative reviews protect trust in markets where buyers compare providers quickly." },
      { heading: "Segment by service line and location", body: "Track review trends by install, maintenance, and repair lines. This helps teams identify where reputation gains are translating to stronger call and booking performance." },
      { heading: "Align with local visibility strategy", body: "Coordinate review growth with SEO page updates and conversion tracking so improved reputation supports rankings, click-through, and booked jobs together." },
    ],
    whyThesePicks: [
      { heading: "Podium", body: "Podium supports fast communication loops that suit urgent HVAC service contexts, especially when SMS follow-up is part of the customer experience." },
      { heading: "Birdeye", body: "Birdeye is effective for HVAC organizations that need stronger multi-location controls and more detailed oversight across teams and markets." },
      { heading: "NiceJob", body: "NiceJob is a practical fit for HVAC teams that want dependable automation with less operational overhead, especially in owner-led or lean office environments." },
    ],
    faqItems: [
      { q: "What reputation software is best for HVAC companies?", a: "Most HVAC teams start with Podium, Birdeye, and NiceJob. Final choice depends on whether you need SMS-heavy execution, multi-location governance, or simple automation that staff can run consistently." },
      { q: "How often should HVAC teams request reviews?", a: "Request after completed jobs with a stable weekly cadence. During peak seasons, prioritize consistency over volume blasts so requests feel timely and response rates stay healthy." },
      { q: "Do HVAC companies need enterprise-level tools?", a: "Not always. Many HVAC operators perform better with simpler systems they can execute daily. Enterprise depth is useful when location count, approvals, and reporting complexity truly demand it." },
      { q: "How can HVAC teams measure ROI from reputation software?", a: "Track review growth and rating trends alongside call quality, booking rate, and close performance by market. ROI is strongest when trust gains are tied to real revenue outcomes." },
    ],
  },
  plumbers: {
    subtitle: "High-intent emergency demand needs strong review velocity and response quality.",
    introParagraph:
      "Plumbing buyers often make fast decisions under stress, so recent reviews and credible response behavior matter more than polished branding alone. The best reputation management software for plumbers keeps review velocity high and helps teams protect trust when emergency jobs generate mixed feedback.",
    topPicksSub: "Top reputation software choices for plumbing businesses.",
    editorialSub: "How plumbing companies should evaluate platform fit.",
    whyThesePicksSub: "Why these tools work for urgent plumbing demand.",
    editorialGuidance: [
      { heading: "Optimize around urgent intent behavior", body: "Plumbing customers compare providers quickly, so fresh high-quality reviews can influence who gets the call first. Keep request timing close to successful job completion." },
      { heading: "Handle complaint responses with clear escalation", body: "Emergency service can produce emotionally charged reviews. Create response rules for billing concerns, missed windows, and workmanship disputes to keep brand trust intact." },
      { heading: "Reinforce trust in local landing pages", body: "Show recent reviews on core plumbing service pages and contact touchpoints. This helps convert high-intent traffic from search, referrals, and paid channels." },
      { heading: "Use data to improve service consistency", body: "Group recurring review themes and route them to operations owners. Reputation improves fastest when field and office processes are corrected at the source." },
    ],
    whyThesePicks: [
      { heading: "Podium", body: "Podium is strong for plumbers who rely on text communication for scheduling and follow-up. It keeps request and response execution close to the real customer communication flow." },
      { heading: "Birdeye", body: "Birdeye fits plumbing operations that need deeper reporting, monitoring, and controls across markets or teams. It is especially useful when operations are expanding." },
      { heading: "NiceJob", body: "NiceJob is a strong fit for plumbing businesses that want simple setup and consistent request automation without heavy process overhead." },
    ],
    faqItems: [
      { q: "What is the best reputation management software for plumbers?", a: "Plumbing teams typically compare Podium, Birdeye, and NiceJob first. Podium suits SMS-led communication, Birdeye suits broader operational complexity, and NiceJob suits simpler execution." },
      { q: "How do plumbers get more five-star reviews consistently?", a: "Trigger requests after successful service completion, keep request copy short, and maintain a weekly operating rhythm. Consistency beats occasional large outreach bursts." },
      { q: "How should plumbers respond to negative reviews?", a: "Respond quickly, acknowledge the concern, and move resolution offline when specific details are needed. Use a defined escalation path so sensitive complaints are handled appropriately." },
      { q: "Can better reviews help plumbers win more local leads?", a: "Yes. Recent positive reviews improve trust at the point of decision, which can lift call and form conversion from local search and other lead channels." },
    ],
  },
  electricians: {
    subtitle: "Improve trust and close rates in credential-sensitive local markets.",
    introParagraph:
      "Electricians compete in markets where trust, safety confidence, and workmanship credibility directly affect close rates. The right reputation platform helps teams collect relevant proof consistently and respond in a way that reinforces professionalism across high-intent local searches.",
    topPicksSub: "Top reputation management picks for electrical contractors.",
    editorialSub: "What electricians should prioritize in reputation software.",
    whyThesePicksSub: "Why these tools perform well for electrician workflows.",
    editorialGuidance: [
      { heading: "Highlight credibility and professionalism", body: "Electrician buyers care about reliability and safety confidence. Focus request and response workflows on proof that reinforces punctuality, quality, and communication." },
      { heading: "Standardize follow-up after completed jobs", body: "Review momentum is strongest when requests are sent from a repeatable completion workflow, not manually whenever staff remembers." },
      { heading: "Route sensitive feedback correctly", body: "Assign escalation rules for reviews involving safety concerns or complex technical disputes. Fast, thoughtful responses protect trust better than generic templates." },
      { heading: "Tie review growth to conversion performance", body: "Compare rating and recency trends with lead quality and quote outcomes by market. Prioritize channels and workflows that improve both visibility and booked jobs." },
    ],
    whyThesePicks: [
      { heading: "Podium", body: "Podium is effective for electrician teams that already use text-led communication to coordinate scheduling and customer follow-up." },
      { heading: "Birdeye", body: "Birdeye is a strong match for electrician businesses that need broader reporting, monitoring, and process controls across teams or locations." },
      { heading: "NiceJob", body: "NiceJob is often the best fit for electricians that want quick setup and consistent execution without assigning a full-time platform owner." },
    ],
    faqItems: [
      { q: "What is the best reputation management software for electricians?", a: "Most electricians should compare Podium, Birdeye, and NiceJob. The best choice depends on communication workflow, operational complexity, and how much process depth your team can sustain." },
      { q: "Why do reviews matter so much for electrical contractors?", a: "Electrical work is trust-sensitive, and buyers often evaluate provider credibility quickly. Strong recent reviews can reduce hesitation and improve quote acceptance." },
      { q: "How many review requests should electrician teams send?", a: "Use a steady post-job request cadence tied to completed work. Consistent weekly execution generally outperforms occasional high-volume campaigns." },
      { q: "Should electricians connect reputation software to other systems?", a: "Yes. Connecting review operations with CRM, website trust sections, and lead tracking helps teams prove revenue impact instead of relying on vanity metrics." },
    ],
  },
  roofers: {
    subtitle: "Strengthen social proof for high-ticket roofing decisions.",
    introParagraph:
      "Roofing projects are high-ticket and trust-intensive, so buyers spend more time validating reputation before requesting an estimate. The best reputation management software for roofers helps teams showcase credible proof, maintain response quality, and support conversion across long consideration cycles.",
    topPicksSub: "Top reputation software options for roofing companies.",
    editorialSub: "How roofers should evaluate reputation platform fit.",
    whyThesePicksSub: "Why these tools are common choices for roofing teams.",
    editorialGuidance: [
      { heading: "Support longer decision cycles", body: "Roofing buyers often research multiple providers before committing. Fresh reviews and thoughtful responses help keep trust high across a longer buying window." },
      { heading: "Pair reputation with estimate conversion assets", body: "Use strong reviews in estimate pages, financing content, and proposal workflows. Social proof should support every stage from first visit to final contract." },
      { heading: "Protect brand trust during issue resolution", body: "High-ticket jobs can generate complex complaints. Define escalation and approval paths so responses stay fast, professional, and aligned with operational reality." },
      { heading: "Measure by market and job type", body: "Track performance trends by geography and service category to identify where review gains correlate with stronger close rates and better lead quality." },
    ],
    whyThesePicks: [
      { heading: "Podium", body: "Podium helps roofing teams run text-led follow-up and review requests in a familiar customer communication channel." },
      { heading: "Birdeye", body: "Birdeye supports roofing businesses that need broader controls, reporting, and multi-location consistency as operations scale." },
      { heading: "NiceJob", body: "NiceJob is a practical choice for roofers that want a straightforward, low-friction system to maintain review growth over time." },
    ],
    faqItems: [
      { q: "What is the best reputation management software for roofers?", a: "Roofing companies usually start by comparing Podium, Birdeye, and NiceJob. Podium fits SMS-first teams, Birdeye fits broader operational needs, and NiceJob fits simpler execution models." },
      { q: "How should roofers use reviews in the sales process?", a: "Place recent, relevant reviews on key estimate and trust pages, and reference them in proposal workflows. This supports confidence during high-ticket decision-making." },
      { q: "How quickly should roofers respond to negative reviews?", a: "Aim for fast initial acknowledgment, then route to the right operations owner for resolution details. Speed plus accountability protects trust more effectively than delayed generic replies." },
      { q: "Can reputation software help roofers compete in crowded markets?", a: "Yes. Strong review recency and response quality can improve perceived credibility and conversion performance when buyers compare multiple roofing providers." },
    ],
  },
  "home-services": {
    subtitle: "Standardize review and response workflows across trades and locations.",
    introParagraph:
      "Home-service operators need reputation systems that can run across multiple trades, teams, and service areas without breaking execution quality. The best software balances automation with governance so review growth stays consistent while customer feedback is handled quickly and professionally.",
    topPicksSub: "Top reputation software for multi-trade home-service operations.",
    editorialSub: "How home-service businesses should choose the right platform.",
    whyThesePicksSub: "Why these tools fit broad home-service use cases.",
    editorialGuidance: [
      { heading: "Standardize workflows across service lines", body: "Set one request timing framework with channel-specific variations by trade. Standardization improves consistency while still allowing teams to adapt messaging to customer context." },
      { heading: "Balance control with local team autonomy", body: "Multi-team operators need enough governance to protect brand quality without slowing response execution. Define response ownership and escalation clearly by role." },
      { heading: "Connect trust signals across growth channels", body: "Use reviews in local SEO pages, paid landing pages, and website trust modules so reputation gains reinforce the entire acquisition funnel." },
      { heading: "Measure performance at both portfolio and local levels", body: "Track portfolio-wide health metrics, then break down by location and service line. This shows where operational coaching or process changes are needed." },
    ],
    whyThesePicks: [
      { heading: "Podium", body: "Podium is effective for home-service teams that rely on text-based customer communication and need a practical execution workflow for requests and follow-up." },
      { heading: "Birdeye", body: "Birdeye is a strong fit for broader home-service portfolios that need more centralized visibility and process controls across multiple locations." },
      { heading: "NiceJob", body: "NiceJob is useful when teams want dependable automation and easier adoption across offices without introducing excessive operational complexity." },
    ],
    faqItems: [
      { q: "What is the best reputation management software for home services?", a: "For most home-service operators, Podium, Birdeye, and NiceJob are the core shortlist. The right choice depends on communication style, location complexity, and how much governance your teams require." },
      { q: "How do multi-trade businesses keep review quality consistent?", a: "Use a standardized request schedule, shared response guidelines, and clear escalation paths. Consistency improves when execution rules are simple enough for all service lines to follow." },
      { q: "Should home-service brands centralize or localize review responses?", a: "Most teams need a hybrid model: centralized policy with local execution ownership. This keeps response quality high while allowing fast action in each market." },
      { q: "How do home-service companies prove reputation ROI?", a: "Measure review trends alongside lead quality, booking rates, and close outcomes by trade and market. ROI is clear when stronger trust signals drive better conversion and revenue consistency." },
    ],
  },
};

function makePage(slug: string, title: string): BestForTemplateProps {
  const scenario = BEST_FOR_SCENARIO_CONTENT[slug];
  return {
    title,
    subtitle: scenario.subtitle,
    useCase: slug,
    categoryHref: "/reputation-management",
    categoryLabel: "Reputation Management",
    introParagraph: scenario.introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: scenario.topPicksSub,
    editorialSub: scenario.editorialSub,
    whyThesePicksSub: scenario.whyThesePicksSub,
    seeAlsoBlock: {
      roundupLabel: "Best reputation management software (2026) — full roundup",
      roundupHref: "/reputation-management/best-reputation-management-software",
      compareLabel: "Compare reputation management software",
      compareHref: "/reputation-management/compare",
    },
    featuredProducts,
    comparisonTableRows,
    editorialGuidance: scenario.editorialGuidance,
    whyThesePicks: scenario.whyThesePicks,
    relatedReviews: [
      { name: "Podium", href: getReputationManagementReviewUrl("podium") },
      { name: "Birdeye", href: getReputationManagementReviewUrl("birdeye") },
      { name: "NiceJob", href: getReputationManagementReviewUrl("nicejob") },
      { name: "Reputation.com", href: getReputationManagementReviewUrl("reputation-com") },
      { name: "Broadly", href: getReputationManagementReviewUrl("broadly") },
      { name: "Grade.us", href: getReputationManagementReviewUrl("grade-us") },
      { name: "Trustpilot (Business)", href: getReputationManagementReviewUrl("trustpilot-business") },
      { name: "Yelp for Business", href: getReputationManagementReviewUrl("yelp-for-business") },
    ],
    relatedComparisons: [
      { label: "Podium vs Birdeye", href: getReputationManagementCompareUrl("podium-vs-birdeye") },
      { label: "Birdeye vs NiceJob", href: getReputationManagementCompareUrl("birdeye-vs-nicejob") },
      { label: "Podium vs Broadly", href: getReputationManagementCompareUrl("podium-vs-broadly") },
      { label: "Reputation.com vs Birdeye", href: getReputationManagementCompareUrl("reputation-com-vs-birdeye") },
      { label: "Grade.us vs Birdeye", href: getReputationManagementCompareUrl("gradeus-vs-birdeye") },
    ],
    relatedGuides: [
      { label: "How to get more Google reviews", href: "/reputation-management/guides/how-to-get-more-google-reviews" },
      { label: "How to respond to negative reviews", href: "/reputation-management/guides/how-to-respond-to-negative-reviews" },
      { label: "How to improve online reputation", href: "/reputation-management/guides/how-to-improve-online-reputation" },
      { label: "SEO tools hub", href: "/seo-tools" },
      { label: "Lead generation hub", href: "/lead-generation" },
      { label: "Website builders hub", href: "/website-builders" },
      { label: "CRM software hub", href: "/crm" },
      { label: "Call tracking hub", href: "/call-tracking" },
    ],
    faqItems: scenario.faqItems,
  };
}

export const REPUTATION_MANAGEMENT_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = {
  "small-business": makePage("small-business", "Best Reputation Management Software for Small Business (2026)"),
  contractors: makePage("contractors", "Best Reputation Management Software for Contractors (2026)"),
  hvac: makePage("hvac", "Best Reputation Management Software for HVAC (2026)"),
  plumbers: makePage("plumbers", "Best Reputation Management Software for Plumbers (2026)"),
  electricians: makePage("electricians", "Best Reputation Management Software for Electricians (2026)"),
  roofers: makePage("roofers", "Best Reputation Management Software for Roofers (2026)"),
  "home-services": makePage("home-services", "Best Reputation Management Software for Home Services (2026)"),
};

export function getReputationManagementBestForPageProps(slug: string): BestForTemplateProps | null {
  return REPUTATION_MANAGEMENT_BEST_FOR_BY_SLUG[slug] ?? null;
}

export function getReputationManagementBestForSlugs(): string[] {
  return Object.keys(REPUTATION_MANAGEMENT_BEST_FOR_BY_SLUG);
}

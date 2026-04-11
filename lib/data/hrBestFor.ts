/**
 * HR best-for page data.
 * Used by app/hr/best-for/[scenario]/page.tsx via BestForTemplate.
 */

import { getHrReviewUrl, getHrCompareUrl } from "@/lib/routes";
import type {
  BestForTemplateProps,
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForGuideLink,
  BestForFaqItem,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/hr", label: "HR" };
const SEE_ALSO = {
  roundupLabel: "best HR software",
  roundupHref: "/hr/best-hr-software",
  compareLabel: "HR software comparisons",
  compareHref: "/hr/compare",
};

const LOGOS = {
  gusto: "/Logos/gusto.jpeg",
  bamboohr: "/Logos/bamboohr.png",
  rippling: "/Logos/rippling.jpeg",
  deel: "/Logos/deel.jpeg",
  adp: "/Logos/adp.jpeg",
  justworks: "/Logos/justworks.jpeg",
} as const;

// ——— Freelancers ———
export const FREELANCERS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best HR Software for Freelancers (2026)",
  subtitle:
    "Compare HR and payroll tools for freelancers: simple payouts, basic compliance, and options if you later hire contractors or employees.",
  useCase: "freelancers",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Most freelancers don’t need a full HR suite, but they do need a reliable way to pay themselves, stay on top of taxes, and prepare for hiring a first contractor or employee. The right tools keep admin light while giving you a clear upgrade path as your business grows.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top HR and payroll picks for freelancers and solos.",
  editorialSub: "What to look for when you choose HR and payroll tools as a freelancer.",
  whyThesePicksSub: "Why we chose these tools for freelancers.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for solo employers",
      description:
        "Great when you move from pure freelancing into paying yourself via payroll or hiring your first employee in the U.S.",
      rating: "4.8",
      startingPrice: "From ~$49/mo",
      reviewHref: getHrReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: LOGOS.gusto,
    },
    {
      slug: "rippling",
      name: "Rippling",
      badge: "Best for freelancers turning into teams",
      description:
        "Modular HR and payroll platform that scales as you hire more people and add IT and device management.",
      rating: "4.6",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("rippling"),
      visitUrl: "https://www.rippling.com",
      logoSrc: LOGOS.rippling,
    },
    {
      slug: "justworks",
      name: "Justworks",
      badge: "Best PEO for tiny companies",
      description:
        "PEO that can make benefits and compliance easy once you start hiring beyond yourself, at the cost of a higher per-person fee.",
      rating: "4.5",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("justworks"),
      visitUrl: "https://justworks.com",
      logoSrc: LOGOS.justworks,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: LOGOS.gusto,
      bestFor: "Solos planning to hire",
      startingPrice: "From ~$49/mo",
      standoutFeature: "Simple payroll and HR in one place",
      reviewHref: getHrReviewUrl("gusto"),
    },
    {
      slug: "rippling",
      name: "Rippling",
      logoSrc: LOGOS.rippling,
      bestFor: "Freelancers turning into an agency or team",
      startingPrice: "Quote",
      standoutFeature: "Adds IT and automation as you grow",
      reviewHref: getHrReviewUrl("rippling"),
    },
    {
      slug: "justworks",
      name: "Justworks",
      logoSrc: LOGOS.justworks,
      bestFor: "Very small teams that want a PEO",
      startingPrice: "Quote",
      standoutFeature: "PEO bundle with benefits and HR support",
      reviewHref: getHrReviewUrl("justworks"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Decide whether you need payroll at all",
      body: "If you only invoice clients and pay yourself as an owner draw, you may not need full payroll yet. Once you hire W‑2 employees, or you want to pay yourself via salary for tax reasons, tools like Gusto or Rippling become more important.",
    },
    {
      heading: "Plan for your first hire",
      body: "Even if today you are solo, pick tools that won’t force a painful migration when you hire. Gusto and Rippling both scale from one to many employees and integrate with accounting tools, so you can keep your stack simple.",
    },
    {
      heading: "Balance cost with peace of mind",
      body: "PEOs like Justworks cost more per person but can offload more compliance once you have a few employees. For many freelancers, starting with software like Gusto and revisiting a PEO later is the more cost‑effective path.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto is the natural first step when freelancing turns into paying yourself on payroll or hiring a first W‑2 employee in the U.S. During a trial or first payroll run, validate tax filings, contractor versus employee classifications, and how cleanly payouts sync to your accounting tool. It keeps benefits and basic HR paperwork in the same place as payroll, which matters when you are still the entire HR department. Model annual cost against paying a bookkeeper to patch together spreadsheets—software usually wins once withholdings get real. See our Gusto review and best HR software roundup for deeper workflow notes.",
    },
    {
      heading: "Rippling",
      body: "Rippling fits freelancers who already see a line of hires, laptops, and SaaS logins forming on the horizon and want one spine for HR, payroll, and IT provisioning. Trial the onboarding flow end to end: create a test employee, assign apps, and confirm access actually turns on and off as expected. It is heavier than Gusto on day one, but automation pays off when you are tired of manual checklists in Google Docs. Validate which modules you truly need so you do not pay for IT depth you will not administer. Our Rippling vs Gusto comparison spells out when the upgrade is justified.",
    },
    {
      heading: "Justworks",
      body: "Justworks is a PEO-style option when you have a small employee count but want Fortune-500-grade benefits leverage and more hands-on compliance support than pure software provides. Use sales conversations and demos to compare total per-employee cost—including admin fees—against running Gusto plus a broker. Trial validation is as much cultural as technical: confirm you are comfortable with co-employment structure and service responsiveness. It can reduce founder time on benefits renewals and state registrations when you lack an HR hire. If you are still purely 1099, wait until W‑2 reality arrives to avoid overbuying.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Gusto", href: getHrReviewUrl("gusto") },
    { name: "Rippling", href: getHrReviewUrl("rippling") },
    { name: "Justworks", href: getHrReviewUrl("justworks") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
    { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
    { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "How to Choose HR Software", href: "/hr/guides/how-to-choose-hr-software" },
    { label: "HR Software for Startups", href: "/hr/guides/hr-software-for-startups" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "Do freelancers need HR software?",
      a: "Pure freelancers usually don’t need a full HR suite. You mainly need good invoicing, bookkeeping, and a plan for taxes. HR software becomes more relevant once you hire employees or want to run formal payroll for yourself.",
    },
    {
      q: "When should freelancers move to Gusto or Rippling?",
      a: "Move when you hire your first employee or when you want a salary-based structure instead of owner draws. Gusto is usually the first step; Rippling makes more sense once you add more people and want IT and automation as well.",
    },
    {
      q: "Is a PEO like Justworks worth it for freelancers?",
      a: "A PEO is rarely necessary for solo freelancers. It can be helpful once you have a small team and want enterprise-level benefits and compliance help. Compare costs with HR software in our PEO vs HR software guide.",
    },
  ] as BestForFaqItem[],
};

// ——— Small business ———
export const SMALL_BUSINESS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best HR Software for Small Businesses (2026)",
  subtitle:
    "Compare HR platforms for small businesses: payroll, benefits, onboarding, and day‑to‑day HR tasks in one place.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses need HR software that simplifies payroll, benefits, and onboarding without forcing you into an enterprise stack. The right tools reduce admin time, keep employee records organized, and help you stay compliant as headcount grows.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top HR picks for small businesses.",
  editorialSub: "What to look for when you choose HR software for a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best overall for small businesses",
      description:
        "All‑in‑one payroll, benefits, and HR with a modern employee experience and clear pricing for SMBs.",
      rating: "4.8",
      startingPrice: "From ~$49/mo",
      reviewHref: getHrReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: LOGOS.gusto,
    },
    {
      slug: "bamboohr",
      name: "BambooHR",
      badge: "Best HRIS for small teams",
      description:
        "People‑focused HRIS with strong onboarding, PTO, and performance tools that pairs well with separate payroll.",
      rating: "4.6",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("bamboohr"),
      visitUrl: "https://www.bamboohr.com",
      logoSrc: LOGOS.bamboohr,
    },
    {
      slug: "rippling",
      name: "Rippling",
      badge: "Best for small businesses planning to scale",
      description:
        "Modular HR, payroll, and IT platform for small businesses that expect to grow or need more automation.",
      rating: "4.6",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("rippling"),
      visitUrl: "https://www.rippling.com",
      logoSrc: LOGOS.rippling,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: LOGOS.gusto,
      bestFor: "Best overall for SMBs",
      startingPrice: "From ~$49/mo",
      standoutFeature: "Payroll, benefits, and HR in one platform",
      reviewHref: getHrReviewUrl("gusto"),
    },
    {
      slug: "bamboohr",
      name: "BambooHR",
      logoSrc: LOGOS.bamboohr,
      bestFor: "HRIS and people data",
      startingPrice: "Quote",
      standoutFeature: "Onboarding, PTO, and performance tools",
      reviewHref: getHrReviewUrl("bamboohr"),
    },
    {
      slug: "rippling",
      name: "Rippling",
      logoSrc: LOGOS.rippling,
      bestFor: "HR + IT automation",
      startingPrice: "Quote",
      standoutFeature: "Automation and IT/device management",
      reviewHref: getHrReviewUrl("rippling"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Company size and HR complexity",
      body: "Under ~25 employees you can usually keep things simple with an all‑in‑one tool like Gusto. As you approach 50–150 people, HRIS‑forward tools like BambooHR or more modular platforms like Rippling start to make sense—especially if you add managers and more complex org structures.",
    },
    {
      heading: "Payroll and benefits integration",
      body: "Decide whether you want payroll inside your HR system (Gusto, Rippling) or prefer a standalone HRIS that integrates with your existing payroll (BambooHR). Integrated payroll is simpler; decoupling gives you more flexibility to swap vendors later.",
    },
    {
      heading: "Onboarding and employee experience",
      body: "Onboarding checklists, e‑signatures, and self‑service portals reduce questions and tickets. Test how easy it is for a new hire to complete paperwork, enroll in benefits, and understand time‑off policies before committing.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gusto",
      body: "Gusto remains the default for many small businesses that want payroll, benefits enrollment, and core HR tasks in one modern stack without hiring a full HR team. During implementation, run parallel payroll if you are migrating—never guess on tax balances—and confirm time tracking and PTO rules match how managers actually approve time. It fits owner-led shops that need clear pricing and forgiving support when someone misses a deadline. Trial the employee self-service portal with a real new hire packet so you catch confusing steps early. For most firms under ~50 employees, Gusto’s balance of simplicity and coverage is hard to beat.",
    },
    {
      heading: "BambooHR",
      body: "BambooHR shines when people data—not paycheck calculation—is the center of gravity: onboarding tasks, org charts, PTO policies, and performance cycles, often paired with a separate payroll engine you already trust. In a trial, build one complete onboarding workflow and see if managers adopt it without training binders. Validate integrations to your payroll vendor early; data should flow employee changes in one direction cleanly. It suits HR-forward SMBs hiring specialists who live in HRIS workflows daily. If you love BambooHR but dread payroll migration, keeping payroll separate can be a feature, not a bug.",
    },
    {
      heading: "Rippling",
      body: "Rippling targets small businesses that expect headcount, locations, or app sprawl to accelerate and want HR events to trigger IT actions automatically. Trial offboarding carefully: removing Slack, GitHub, and laptop access should be one controlled workflow, not three tickets. Expect more upfront configuration than Gusto; assign an internal owner or you will underuse automation. It fits tech-leaning SMBs and agencies where device and permission hygiene is as important as payroll accuracy. Compare total cost including IT modules against point solutions so finance sees the full picture.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Gusto", href: getHrReviewUrl("gusto") },
    { name: "BambooHR", href: getHrReviewUrl("bamboohr") },
    { name: "Rippling", href: getHrReviewUrl("rippling") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
    { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
    { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Best HR Software for Small Business (guide)", href: "/hr/guides/best-hr-software-for-small-business" },
    { label: "How to Choose HR Software", href: "/hr/guides/how-to-choose-hr-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What HR software is best for small businesses?",
      a: "Gusto is a strong default for many small businesses because it combines payroll, benefits, and HR in one place. BambooHR is better if you want HRIS‑first with separate payroll, while Rippling fits teams that need HR plus IT and more automation.",
    },
    {
      q: "Do small businesses need HR software or just payroll?",
      a: "If you only cut paychecks for a handful of employees, payroll‑only tools might be enough. Once you manage PTO, onboarding, documents, and performance, dedicated HR software becomes worth it. Many teams start with payroll and add HR features as they grow past 10–20 employees.",
    },
    {
      q: "How should small businesses compare Gusto vs BambooHR vs Rippling?",
      a: "Use our best HR software roundup and comparison pages like Gusto vs BambooHR, Rippling vs Gusto, and BambooHR vs Rippling to shortlist tools. Then run a short trial with real data, focusing on onboarding, payroll runs, and manager workflows.",
    },
  ] as BestForFaqItem[],
};

// ——— Startups ———
export const STARTUPS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best HR Software for Startups (2026)",
  subtitle:
    "Compare HR platforms for startups that are hiring fast, adding locations, and need a stack that can keep up.",
  useCase: "startups",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Startups need HR software that keeps pace with hiring and fundraising without slowing teams down. You may start with a handful of people and quickly grow to dozens across states or countries. The right platform makes it easy to onboard, pay, and support people as you scale.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top HR picks for startups.",
  editorialSub: "What to look for when you choose HR software as a startup.",
  whyThesePicksSub: "Why we chose these tools for startups.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "rippling",
      name: "Rippling",
      badge: "Best overall for high‑growth startups",
      description:
        "HR, payroll, benefits, and IT automation in one platform—ideal when you are adding people and apps quickly.",
      rating: "4.6",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("rippling"),
      visitUrl: "https://www.rippling.com",
      logoSrc: LOGOS.rippling,
    },
    {
      slug: "deel",
      name: "Deel",
      badge: "Best for global‑first startups",
      description:
        "Global hiring, payroll, and EOR for startups that hire across many countries from the earliest stages.",
      rating: "4.6",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("deel"),
      visitUrl: "https://www.deel.com",
      logoSrc: LOGOS.deel,
    },
    {
      slug: "gusto",
      name: "Gusto",
      badge: "Best for US‑only early‑stage teams",
      description:
        "All‑in‑one HR and payroll for startups that are primarily U.S.‑based and want something simple to run.",
      rating: "4.8",
      startingPrice: "From ~$49/mo",
      reviewHref: getHrReviewUrl("gusto"),
      visitUrl: "https://gusto.com",
      logoSrc: LOGOS.gusto,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "rippling",
      name: "Rippling",
      logoSrc: LOGOS.rippling,
      bestFor: "High‑growth, multi‑function startups",
      startingPrice: "Quote",
      standoutFeature: "Automation across HR, payroll, and IT",
      reviewHref: getHrReviewUrl("rippling"),
    },
    {
      slug: "deel",
      name: "Deel",
      logoSrc: LOGOS.deel,
      bestFor: "Global‑first startups",
      startingPrice: "Quote",
      standoutFeature: "Global payroll and EOR in many countries",
      reviewHref: getHrReviewUrl("deel"),
    },
    {
      slug: "gusto",
      name: "Gusto",
      logoSrc: LOGOS.gusto,
      bestFor: "US‑only early‑stage teams",
      startingPrice: "From ~$49/mo",
      standoutFeature: "Simple payroll and HR for smaller teams",
      reviewHref: getHrReviewUrl("gusto"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Plan for headcount and locations",
      body: "If you expect to hire across multiple states or countries within 12–24 months, choose tools that can handle that from day one. Rippling and Deel both support complex, distributed hiring; Gusto is better when you remain primarily U.S.‑based.",
    },
    {
      heading: "Keep founders and ops out of manual HR work",
      body: "Look for automation around onboarding, offboarding, and access to tools. Rippling is particularly strong at tying HR events to IT provisioning so founders and early ops teammates don’t become bottlenecks.",
    },
    {
      heading: "Balance speed with flexibility",
      body: "It’s tempting to adopt whatever your accountant suggests, but switching HR systems at 50–100 people is painful. Use our best HR software roundup and comparison hub to pick a platform that can support your next funding round, not just today.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Rippling",
      body: "Rippling is a strong default for venture-backed startups that hire monthly and cannot afford bottlenecks on laptops, app access, or multi-state registrations. During a trial, simulate a full hire and termination in a sandbox or test employee to prove automations do not strand permissions. It centralizes HR, payroll, and IT enough that founders stop being accidental sysadmins. Validate reporting for finance and people leads—boards will ask for headcount and burn tied to real systems. Expect to invest setup time once; the payoff is fewer Slack fires during scaling sprints.",
    },
    {
      heading: "Deel",
      body: "Deel is the pick when your startup is global-first: contractors abroad, employer-of-record hires, and multi-currency pay without spinning up entities in every country. Trial with one non-U.S. hire type you actually plan—contractor versus EOR—and walk through contract templates, compliance packets, and payout timing. Validate how Deel overlaps with your finance stack for FX and invoice reconciliation. Our Deel vs Rippling comparison explains when to pair or choose between them. If “remote worldwide” is your pitch, Deel often belongs in the stack before you have fifty people.",
    },
    {
      heading: "Gusto",
      body: "Gusto fits U.S.-centric early-stage teams that need payroll and light HR now without Rippling’s broader automation surface area. Use the first months to nail state registrations, benefits eligibility, and clean contractor classification before complexity compounds. Trial employee experience with real offer letters and I-9 steps so you are not debugging on someone’s first day. It is easier to outgrow operationally than Rippling, but that simplicity keeps velocity high when you are pre-People team. You can replatform later—just avoid messy payroll history when you do.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Rippling", href: getHrReviewUrl("rippling") },
    { name: "Deel", href: getHrReviewUrl("deel") },
    { name: "Gusto", href: getHrReviewUrl("gusto") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
    { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
    { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "HR Software for Startups", href: "/hr/guides/hr-software-for-startups" },
    { label: "HR Software for Global Teams", href: "/hr/guides/hr-software-for-global-teams" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What HR software is best for startups?",
      a: "Rippling is often the best fit for high‑growth startups that want HR, payroll, and IT together. Deel is stronger if you are global‑first, while Gusto can be perfect for early‑stage startups that are primarily U.S.‑based.",
    },
    {
      q: "Can HR software help with hiring?",
      a: "Yes. Most modern HR platforms include or integrate with applicant tracking and onboarding tools. BambooHR, Rippling, and Deel all support structured hiring and onboarding workflows; Gusto covers more basic hiring needs for smaller teams.",
    },
    {
      q: "Should startups use a PEO or HR software?",
      a: "Some early teams start with a PEO like Justworks or TriNet to reduce admin, then later move to HR software like Gusto or Rippling. Our PEO vs HR software guide explains the trade‑offs and when to switch.",
    },
  ] as BestForFaqItem[],
};

// ——— Agencies ———
export const AGENCIES_PAGE_PROPS: BestForTemplateProps = {
  title: "Best HR Software for Agencies (2026)",
  subtitle:
    "Compare HR platforms for agencies that juggle client work, billable hours, and a mix of full‑time and contract talent.",
  useCase: "agencies",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Agencies need HR tools that keep employee records organized, onboard people quickly, and play nicely with time tracking and billing. The right platform supports a blended workforce of employees and contractors and makes it easy to grow teams around client demand.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top HR picks for agencies.",
  editorialSub: "What to look for when you choose HR software for agencies.",
  whyThesePicksSub: "Why we chose these tools for agencies.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "rippling",
      name: "Rippling",
      badge: "Best overall for agencies",
      description:
        "Unifies HR, payroll, and IT so agencies can onboard client teams quickly and manage access to tools and devices.",
      rating: "4.6",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("rippling"),
      visitUrl: "https://www.rippling.com",
      logoSrc: LOGOS.rippling,
    },
    {
      slug: "bamboohr",
      name: "BambooHR",
      badge: "Best HRIS for people‑centric agencies",
      description:
        "Focuses on people data, PTO, and performance, with solid onboarding that pairs well with agency time‑tracking tools.",
      rating: "4.6",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("bamboohr"),
      visitUrl: "https://www.bamboohr.com",
      logoSrc: LOGOS.bamboohr,
    },
    {
      slug: "justworks",
      name: "Justworks",
      badge: "Best PEO for agencies that want to offload HR",
      description:
        "PEO that bundles payroll, benefits, and compliance—helpful if you want to focus on client work instead of HR.",
      rating: "4.5",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("justworks"),
      visitUrl: "https://justworks.com",
      logoSrc: LOGOS.justworks,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "rippling",
      name: "Rippling",
      logoSrc: LOGOS.rippling,
      bestFor: "Agencies with complex tools and devices",
      startingPrice: "Quote",
      standoutFeature: "HR + IT automation for client teams",
      reviewHref: getHrReviewUrl("rippling"),
    },
    {
      slug: "bamboohr",
      name: "BambooHR",
      logoSrc: LOGOS.bamboohr,
      bestFor: "People‑centric agencies",
      startingPrice: "Quote",
      standoutFeature: "Strong onboarding and people data",
      reviewHref: getHrReviewUrl("bamboohr"),
    },
    {
      slug: "justworks",
      name: "Justworks",
      logoSrc: LOGOS.justworks,
      bestFor: "Agencies that want to outsource HR",
      startingPrice: "Quote",
      standoutFeature: "PEO bundle with HR support",
      reviewHref: getHrReviewUrl("justworks"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Support a blended workforce",
      body: "Agencies often combine full‑time employees, part‑timers, and contractors. Ensure your HR system can handle contractor records and works well with your time‑tracking and billing tools so you don’t lose track of who is doing what.",
    },
    {
      heading: "Onboard and offboard quickly",
      body: "Client projects ramp up and down; you need fast onboarding and clean offboarding. Rippling’s IT modules can provision and remove access to tools automatically, while BambooHR focuses on HR workflows and documentation.",
    },
    {
      heading: "Decide how much HR you want to own",
      body: "If you don’t have HR staff and want to offload as much as possible, a PEO like Justworks may be appealing. If you are comfortable owning more HR internally, software‑only tools give you more flexibility and can be cheaper over time.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Rippling",
      body: "Agencies live in project churn—freelancers, new hires, and client-specific tool access—Rippling maps HR changes to IT provisioning so Slack, Figma, and CRM seats track reality. Trial offboarding for a contractor who touched five client workspaces; that is where stacks usually break. It helps when account managers rotate and you need audit trails for who had access to what. Validate cost per seat against the time your ops lead spends on manual invites. For creative and dev shops with heavy SaaS sprawl, Rippling often pays for itself in reduced security risk alone.",
    },
    {
      heading: "BambooHR",
      body: "BambooHR fits agencies that already nailed time tracking and billing elsewhere but need adult HRIS behavior for PTO, performance cycles, and clean people records. During a trial, import your real titles and departments—messy org charts are common in agencies—and test manager permissions. Integrate payroll or keep it separate, but be explicit; hybrid stacks fail when nobody owns the integration. It suits people-ops leads who want friendly UX for creatives who ignore enterprise software. Pair with strong IT policy outside BambooHR if devices are not centralized yet.",
    },
    {
      heading: "Justworks",
      body: "Justworks appeals when agency founders want competitive benefits and fewer state-compliance headaches without hiring HR yet, accepting higher per-employee cost as trade for PEO support. Compare quoted all-in costs to Gusto plus broker fees plus your time—PEOs win when founder time is the constraint. Trial questions should cover multi-state employees, if you have them, and how renewals and plan changes are handled. Many small agencies use PEOs until scale justifies bringing HR in-house. Exit planning matters; understand data portability before you sign a long commitment.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Rippling", href: getHrReviewUrl("rippling") },
    { name: "BambooHR", href: getHrReviewUrl("bamboohr") },
    { name: "Justworks", href: getHrReviewUrl("justworks") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
    { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
    { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "HR Software for Startups", href: "/hr/guides/hr-software-for-startups" },
    { label: "HR Software for Remote Teams", href: "/hr/guides/hr-software-for-remote-teams" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What HR software is best for agencies?",
      a: "Rippling is a strong fit for agencies that want HR, payroll, and IT together. BambooHR works well if you just need HRIS and people workflows. Justworks can make sense when you want to offload HR to a PEO.",
    },
    {
      q: "Can HR software work with agency time‑tracking tools?",
      a: "Yes. Many HR platforms integrate with popular time‑tracking and project‑management tools. When evaluating vendors, confirm they integrate with your current stack or can export data cleanly for billing.",
    },
    {
      q: "Should agencies use a PEO?",
      a: "Some agencies use a PEO like Justworks to simplify benefits and compliance when they’re small. As they grow, many move to HR software like Gusto or Rippling for more control and potentially lower long‑term costs.",
    },
  ] as BestForFaqItem[],
};

// ——— Global teams ———
export const GLOBAL_TEAMS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best HR Software for Global Teams (2026)",
  subtitle:
    "Compare HR platforms for global teams: EOR, multi‑country payroll, and compliance across borders.",
  useCase: "global-teams",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Global teams face unique HR challenges: different employment laws, currencies, and expectations in each country. The right HR stack lets you hire, pay, and support people in many countries without building your own infrastructure everywhere.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top HR picks for global teams.",
  editorialSub: "What to look for when you choose HR software for global teams.",
  whyThesePicksSub: "Why we chose these tools for global teams.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "deel",
      name: "Deel",
      badge: "Best overall for global teams",
      description:
        "EOR and contractor management in hundreds of countries so you can hire quickly without local entities.",
      rating: "4.6",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("deel"),
      visitUrl: "https://www.deel.com",
      logoSrc: LOGOS.deel,
    },
    {
      slug: "rippling",
      name: "Rippling",
      badge: "Best for unified global HR and IT",
      description:
        "Global HR and payroll with IT modules that manage devices and apps for teammates around the world.",
      rating: "4.6",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("rippling"),
      visitUrl: "https://www.rippling.com",
      logoSrc: LOGOS.rippling,
    },
    {
      slug: "adp-workforce-now",
      name: "ADP Workforce Now",
      badge: "Best for larger global organizations",
      description:
        "Enterprise‑grade HR and payroll with global capabilities for more established companies.",
      rating: "4.5",
      startingPrice: "Quote",
      reviewHref: getHrReviewUrl("adp-workforce-now"),
      visitUrl: "https://www.adp.com",
      logoSrc: LOGOS.adp,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "deel",
      name: "Deel",
      logoSrc: LOGOS.deel,
      bestFor: "Global‑first teams and EOR",
      startingPrice: "Quote",
      standoutFeature: "EOR and payroll in many countries",
      reviewHref: getHrReviewUrl("deel"),
    },
    {
      slug: "rippling",
      name: "Rippling",
      logoSrc: LOGOS.rippling,
      bestFor: "Global HR + IT automation",
      startingPrice: "Quote",
      standoutFeature: "Unifies HR and IT for distributed teams",
      reviewHref: getHrReviewUrl("rippling"),
    },
    {
      slug: "adp-workforce-now",
      name: "ADP Workforce Now",
      logoSrc: LOGOS.adp,
      bestFor: "Larger multi‑country organizations",
      startingPrice: "Quote",
      standoutFeature: "Enterprise‑grade HR and payroll",
      reviewHref: getHrReviewUrl("adp-workforce-now"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Map your current and future countries",
      body: "List where you employ people today and where you expect to hire in the next 12–24 months. Then shortlist platforms that support those countries natively. Deel and Rippling both publish coverage lists; enterprise providers like ADP may rely more on partners.",
    },
    {
      heading: "Decide on entities vs EOR",
      body: "If you don’t want to set up local entities, EOR services like Deel let you hire quickly under their entities. If you already have entities or plan to build them, tools like Rippling or ADP can centralize payroll and reporting across them.",
    },
    {
      heading: "Consider finance and IT integrations",
      body: "Global HR is not only about contracts and benefits; it’s also about how people get access to tools and how payroll flows into accounting. Rippling’s IT modules and strong integrations can be powerful here; Deel and ADP integrate with popular finance systems as well.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Deel",
      body: "Deel is built for global hiring velocity: contractors and EOR employees in many countries with contracts, compliance packets, and payouts centralized instead of scattered in email. Pilot with one country you plan to repeat—often Canada, UK, or EU—and validate statutory nuances with your counsel, not only sales. Trial payout timing and FX behavior against how finance closes books monthly. It reduces entity setup drama for startups expanding faster than legal can incorporate. If you are truly U.S.-only, Deel is probably more firepower than you need today.",
    },
    {
      heading: "Rippling",
      body: "Rippling works when you want global HR and payroll orchestrated alongside IT: laptops shipped, apps assigned, and permissions revoked when someone leaves a foreign office. Trial global payroll modules against your entity strategy—some firms mix Rippling for systems of record with local providers. It suits mid-size tech companies tired of separate spreadsheets per region. Validate support hours and escalation paths; global ops breaks on time zones and unclear ownership. When devices and access are as risky as paychecks, Rippling’s unified story matters.",
    },
    {
      heading: "ADP Workforce Now",
      body: "ADP Workforce Now fits larger, more established multinationals that need deep payroll rigor, mature reporting, and a partner ecosystem that banks and auditors recognize. Demos should include your complex scenarios: expats, multiple FEINs, and heavy union or hourly rules if applicable. It will feel heavier than Deel or Rippling for early-stage teams—implementation is a program, not a weekend project. Trial validation usually involves parallel payroll runs and tight accounting sign-off. Choose ADP when enterprise compliance and scale dwarf startup UX preferences.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Deel", href: getHrReviewUrl("deel") },
    { name: "Rippling", href: getHrReviewUrl("rippling") },
    { name: "ADP Workforce Now", href: getHrReviewUrl("adp-workforce-now") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
    { label: "ADP vs Paychex", href: getHrCompareUrl("adp-vs-paychex") },
    { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "HR Software for Global Teams", href: "/hr/guides/hr-software-for-global-teams" },
    { label: "HR Software for Remote Teams", href: "/hr/guides/hr-software-for-remote-teams" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What HR software supports international hiring?",
      a: "Platforms like Deel and Rippling focus heavily on global hiring and payroll. Enterprise providers such as ADP and Paychex also have global capabilities, but may be more complex. The right choice depends on your size and target countries.",
    },
    {
      q: "Do HR tools manage compliance in multiple countries?",
      a: "Global HR providers help with contracts, payroll, and statutory requirements in supported countries, but you still need internal awareness and good legal advice. EOR providers like Deel take on more compliance responsibility than pure software tools.",
    },
    {
      q: "How should global teams choose between Deel and Rippling?",
      a: "Choose Deel if you need EOR across many countries quickly and want a strong focus on global employment. Choose Rippling if you also want IT automation and a unified platform across HR and technology. Our Deel vs Rippling comparison walks through the details.",
    },
  ] as BestForFaqItem[],
};


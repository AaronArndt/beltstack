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
import { getHrBestForUrl, getHrCompareUrl, getHrReviewUrl } from "@/lib/routes";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";

const CATEGORY = { href: "/hr", label: "HR" };
const SEE_ALSO = {
  roundupLabel: "best HR software",
  roundupHref: "/hr/best-hr-software",
  compareLabel: "HR software comparisons",
  compareHref: "/hr/compare",
};

const PRODUCTS = {
  gusto: {
    name: "Gusto",
    logoSrc: "/Logos/gusto.jpeg",
    rating: "4.8",
    startingPrice: "From ~$49/mo",
    visitUrl: "https://gusto.com",
    defaultStandout: "Payroll, benefits, and onboarding in one SMB stack",
  },
  rippling: {
    name: "Rippling",
    logoSrc: "/Logos/rippling.jpeg",
    rating: "4.6",
    startingPrice: "Quote",
    visitUrl: "https://www.rippling.com",
    defaultStandout: "HR, payroll, and IT automation in one platform",
  },
  bamboohr: {
    name: "BambooHR",
    logoSrc: "/Logos/bamboohr.png",
    rating: "4.6",
    startingPrice: "Quote",
    visitUrl: "https://www.bamboohr.com",
    defaultStandout: "Strong HRIS, onboarding, and people records",
  },
  justworks: {
    name: "Justworks",
    logoSrc: "/Logos/justworks.jpeg",
    rating: "4.5",
    startingPrice: "Quote",
    visitUrl: "https://justworks.com",
    defaultStandout: "PEO support for compliance and benefits administration",
  },
} as const;

type ProductSlug = keyof typeof PRODUCTS;

type ProductPick = {
  slug: ProductSlug;
  badge: string;
  description: string;
  rowBestFor: string;
  standoutFeature?: string;
  why: string;
};

type TradeConfig = {
  useCase: string;
  navLabel: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  hubTeaser: string;
  keywords: string[];
  picks: [ProductPick, ProductPick, ProductPick];
  editorialGuidance: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
};

const E = (heading: string, body: string): BestForEditorialBlock => ({ heading, body });

const COMMON_COMPARISONS: BestForComparisonLink[] = [
  { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
  { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
  { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
];

const COMMON_GUIDES: BestForGuideLink[] = [
  { label: "How to choose HR software", href: "/hr/guides/how-to-choose-hr-software" },
  { label: "PEO vs HR software", href: "/hr/guides/peo-vs-hr-software" },
];

function buildTradePage(config: TradeConfig): {
  pageProps: BestForTemplateProps;
  metadata: { title: string; description: string; keywords: string[] };
  hubCard: { label: string; href: string; description: string };
  nav: { label: string; href: string };
} {
  const featuredProducts: BestForFeaturedProduct[] = config.picks.map((pick) => {
    const core = PRODUCTS[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      badge: pick.badge,
      description: pick.description,
      rating: core.rating,
      startingPrice: core.startingPrice,
      reviewHref: getHrReviewUrl(pick.slug),
      visitUrl: core.visitUrl,
      logoSrc: core.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = config.picks.map((pick) => {
    const core = PRODUCTS[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      logoSrc: core.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: core.startingPrice,
      standoutFeature: pick.standoutFeature ?? core.defaultStandout,
      reviewHref: getHrReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = config.picks.map((pick) => ({
    heading: PRODUCTS[pick.slug].name,
    body: pick.why,
  }));

  const relatedReviews: BestForReviewLink[] = config.picks.map((pick) => ({
    name: PRODUCTS[pick.slug].name,
    href: getHrReviewUrl(pick.slug),
  }));

  return {
    pageProps: {
      title: config.title,
      subtitle: config.subtitle,
      useCase: config.useCase,
      categoryHref: CATEGORY.href,
      categoryLabel: CATEGORY.label,
      introParagraph: config.introParagraph,
      freshnessText: "Updated for 2026",
      topPicksSub: "Our top HR picks for this business type.",
      editorialSub: "What to look for when choosing HR software in this trade.",
      whyThesePicksSub: "Why these tools made our shortlist.",
      seeAlsoBlock: SEE_ALSO,
      featuredProducts,
      comparisonTableRows,
      editorialGuidance: config.editorialGuidance,
      whyThesePicks,
      relatedReviews,
      relatedComparisons: COMMON_COMPARISONS,
      relatedGuides: COMMON_GUIDES,
      faqItems: config.faqItems,
    },
    metadata: {
      title: buildBestForMetaTitle(config.title),
      description: config.subtitle,
      keywords: config.keywords,
    },
    hubCard: {
      label: config.title,
      href: getHrBestForUrl(config.useCase),
      description: config.hubTeaser,
    },
    nav: {
      label: config.navLabel,
      href: getHrBestForUrl(config.useCase),
    },
  };
}

const TRADE_CONFIGS: TradeConfig[] = [
  {
    useCase: "hvac",
    navLabel: "HVAC businesses",
    title: "Best HR Software for HVAC Businesses (2026)",
    subtitle:
      "Compare HR software for HVAC businesses with payroll, field crew onboarding, overtime tracking support, and multi-state compliance workflows.",
    introParagraph:
      "HVAC businesses need HR software that handles seasonal hiring, technician onboarding, certifications, and payroll without slowing operations. The best fit keeps office and field teams aligned while reducing compliance risk.",
    hubTeaser: "Payroll, onboarding, and compliance workflows built for HVAC teams.",
    keywords: ["best HR software for HVAC businesses", "HVAC HR software", "HVAC payroll and HR platform"],
    picks: [
      {
        slug: "gusto",
        badge: "Best overall for HVAC SMBs",
        description: "All-in-one payroll and HR for HVAC teams hiring techs and office staff.",
        rowBestFor: "HVAC payroll and onboarding",
        why: "Gusto is a strong choice for HVAC businesses that need clean payroll, onboarding checklists, and benefits admin in one system. During a trial, validate overtime and bonus handling for service techs and confirm your payroll cutoffs align with dispatch reality.",
      },
      {
        slug: "rippling",
        badge: "Best for scaling HVAC operations",
        description: "Adds automation for HR and IT as your HVAC workforce and systems grow.",
        rowBestFor: "Growing multi-location HVAC teams",
        why: "Rippling fits HVAC operators expanding across locations and needing tighter automation around hiring, provisioning, and policy workflows. It is especially useful when new managers and tools create operational complexity.",
      },
      {
        slug: "justworks",
        badge: "Best PEO for HVAC compliance support",
        description: "PEO model for teams that want more hands-on compliance and benefits support.",
        rowBestFor: "Outsourced HR support",
        why: "Justworks helps HVAC businesses that want to offload more compliance and HR administration without building a full internal HR function. Compare total per-employee costs against software-only options before committing.",
      },
    ],
    editorialGuidance: [
      E("Track role and pay types clearly", "Separate install, service, and office payroll groups for cleaner labor reporting."),
      E("Build repeatable onboarding", "Standardize new-hire paperwork and safety-policy acknowledgments for every technician."),
    ],
    faqItems: [{ q: "What is the best HR software for HVAC businesses?", a: "Gusto is a top all-around option for most HVAC SMBs, with Rippling and Justworks as strong alternatives depending on scale and support needs." }],
  },
  {
    useCase: "plumbing",
    navLabel: "Plumbing companies",
    title: "Best HR Software for Plumbing Companies (2026)",
    subtitle:
      "Compare HR software for plumbing companies with payroll automation, field hiring workflows, and compliance tools for mixed office and technician teams.",
    introParagraph:
      "Plumbing companies need HR tools that simplify payroll and onboarding while supporting a workforce that blends office, dispatch, and field technicians. Good software keeps compliance and people operations manageable as team size changes.",
    hubTeaser: "HR and payroll tools that fit plumbing field and office teams.",
    keywords: ["best HR software for plumbing companies", "plumbing HR software", "plumbing payroll HR system"],
    picks: [
      { slug: "gusto", badge: "Best overall for plumbers", description: "Reliable payroll and HR workflows for plumbing teams.", rowBestFor: "Small to mid-size plumbing firms", why: "Gusto gives plumbing owners a straightforward HR and payroll foundation with onboarding and benefits in one place. It works especially well when you want fast setup and predictable admin overhead." },
      { slug: "bamboohr", badge: "Best HRIS for people operations", description: "Strong employee records and onboarding for plumbing companies with existing payroll.", rowBestFor: "HRIS-first plumbing teams", why: "BambooHR is ideal when your plumbing business already has payroll solved but needs better hiring, employee documentation, and people workflows." },
      { slug: "rippling", badge: "Best for scaling and automation", description: "Unified HR, payroll, and automation for growing plumbing operations.", rowBestFor: "Scaling plumbing businesses", why: "Rippling is a fit for plumbing companies adding locations, systems, and managers that need automation beyond basic payroll." },
    ],
    editorialGuidance: [E("Support field-friendly onboarding", "Use mobile-completable onboarding steps so new hires finish paperwork quickly."), E("Prepare for payroll edge cases", "Validate overtime, bonuses, and emergency call pay rules before go-live.")],
    faqItems: [{ q: "Which HR software is best for plumbing companies?", a: "Gusto is often the best starting point, while BambooHR and Rippling fit teams needing deeper HRIS workflows or broader automation." }],
  },
  {
    useCase: "electricians",
    navLabel: "Electricians",
    title: "Best HR Software for Electricians (2026)",
    subtitle:
      "Compare HR software for electricians with certified-trade onboarding, payroll, and compliance workflows for growing electrical contractor teams.",
    introParagraph:
      "Electrical contractors need HR software that supports fast hiring, structured onboarding, and clean payroll processes for mixed field and office roles. The right platform helps reduce admin errors while scaling crews.",
    hubTeaser: "HR workflows designed for electrical contractor hiring and payroll.",
    keywords: ["best HR software for electricians", "electrical contractor HR software", "electrician payroll HR platform"],
    picks: [
      { slug: "gusto", badge: "Best overall for electricians", description: "Simple payroll and onboarding for electrical teams.", rowBestFor: "Electrical SMB operations", why: "Gusto is a practical default for electricians that need payroll, benefits, and core HR in one platform with minimal setup friction." },
      { slug: "rippling", badge: "Best for operational complexity", description: "Automation-heavy HR and payroll for electrical businesses at scale.", rowBestFor: "Multi-team electrical operations", why: "Rippling helps electrical contractors that need stronger automation and system control as headcount and tooling grow." },
      { slug: "justworks", badge: "Best PEO route for electricians", description: "PEO support for businesses that want more compliance and HR support.", rowBestFor: "Outsourced compliance", why: "Justworks is useful when electricians prefer more guided compliance and benefits administration via a PEO model." },
    ],
    editorialGuidance: [E("Keep role data clean", "Use consistent job titles and pay groups for apprentices, journeymen, and office staff."), E("Document policy acknowledgments", "Track safety and handbook sign-offs to reduce compliance gaps.")],
    faqItems: [{ q: "What HR software do electrical contractors use?", a: "Many choose Gusto for all-in-one simplicity, with Rippling or Justworks as alternatives for more automation or PEO support." }],
  },
  {
    useCase: "painting",
    navLabel: "Painting contractors",
    title: "Best HR Software for Painting Contractors (2026)",
    subtitle:
      "Compare HR software for painting contractors with seasonal hiring support, payroll workflows, and onboarding tools for crew-based operations.",
    introParagraph:
      "Painting contractors often scale labor seasonally and need HR tools that keep onboarding, payroll, and compliance repeatable. A good platform reduces friction when crews grow fast.",
    hubTeaser: "Seasonal hiring, payroll, and onboarding support for painting crews.",
    keywords: ["best HR software for painting contractors", "painting company HR software", "painting payroll HR tool"],
    picks: [
      { slug: "gusto", badge: "Best overall for painters", description: "Fast payroll and onboarding for seasonal and permanent painting teams.", rowBestFor: "Seasonal crew payroll", why: "Gusto helps painting contractors handle recurring hiring and payroll cycles while keeping HR admin light for owner-led businesses." },
      { slug: "bamboohr", badge: "Best for HR process maturity", description: "Strong onboarding and people records for growing painting firms.", rowBestFor: "Structured HR workflows", why: "BambooHR works well when painting companies want stronger people operations and cleaner employee lifecycle management." },
      { slug: "justworks", badge: "Best PEO support for painters", description: "PEO model for benefits access and compliance support.", rowBestFor: "Benefits and compliance support", why: "Justworks is a good fit for painting businesses that want more HR support and less internal compliance burden." },
    ],
    editorialGuidance: [E("Plan for seasonal rehires", "Reuse onboarding flows for recurring crew roles to save admin time."), E("Audit payroll before peak season", "Validate overtime and pay-code setup before hiring spikes.")],
    faqItems: [{ q: "What is the best HR software for painting contractors?", a: "Gusto is the most common starting choice, with BambooHR and Justworks fitting teams with deeper HR process or PEO needs." }],
  },
  {
    useCase: "roofing",
    navLabel: "Roofing companies",
    title: "Best HR Software for Roofing Companies (2026)",
    subtitle:
      "Compare HR software for roofing companies with payroll automation, field onboarding, and compliance workflows for high-volume crew operations.",
    introParagraph:
      "Roofing companies need HR systems that hold up during high-volume hiring periods and support payroll accuracy across dynamic crews. The right platform improves consistency and reduces people-ops friction.",
    hubTeaser: "HR and payroll systems that scale with roofing crew demand.",
    keywords: ["best HR software for roofing companies", "roofing HR software", "roofing payroll and HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for roofing SMBs", description: "All-in-one HR and payroll for roofing crews and office staff.", rowBestFor: "Roofing payroll basics", why: "Gusto provides a dependable HR and payroll stack for roofing businesses focused on reliability, onboarding speed, and admin simplicity." },
      { slug: "rippling", badge: "Best for scaling roofing operations", description: "Automation-first platform for larger roofing organizations.", rowBestFor: "Operational scale", why: "Rippling is strongest when roofing companies need deeper automation and policy controls across locations, roles, and systems." },
      { slug: "justworks", badge: "Best PEO option for roofers", description: "Compliance and benefits support through a PEO model.", rowBestFor: "PEO-backed HR support", why: "Justworks is helpful for roofing teams that prefer outsourced compliance support and stronger benefits leverage." },
    ],
    editorialGuidance: [E("Standardize onboarding packets", "Use consistent role-based onboarding for installers, sales, and office staff."), E("Review compliance ownership", "Clarify what your platform handles versus what managers must own internally.")],
    faqItems: [{ q: "Which HR software is best for roofing companies?", a: "Gusto is a top all-around option; Rippling and Justworks are strong alternatives for larger or PEO-oriented roofing teams." }],
  },
  {
    useCase: "general-contractors",
    navLabel: "General contractors",
    title: "Best HR Software for General Contractors (2026)",
    subtitle:
      "Compare HR software for general contractors with payroll, onboarding, and compliance workflows that support multi-role construction organizations.",
    introParagraph:
      "General contractors manage diverse teams across office, field, and project functions. Strong HR software helps standardize onboarding, payroll, and policy processes while reducing admin complexity at scale.",
    hubTeaser: "HR software for mixed-role GC teams and compliance-heavy operations.",
    keywords: ["best HR software for general contractors", "general contractor HR software", "construction HR payroll software"],
    picks: [
      { slug: "rippling", badge: "Best overall for complex GC operations", description: "Unified HR and payroll automation for larger contractor teams.", rowBestFor: "Automation-heavy GCs", why: "Rippling is a strong fit for general contractors with cross-functional teams and growing process complexity that requires robust automation." },
      { slug: "gusto", badge: "Best for smaller general contractors", description: "Simple all-in-one HR and payroll stack for growing GC teams.", rowBestFor: "SMB GC workflows", why: "Gusto works well for general contractors that want reliable payroll and onboarding without enterprise-level overhead." },
      { slug: "bamboohr", badge: "Best HRIS for people process depth", description: "Structured HR workflows with strong onboarding and records.", rowBestFor: "HRIS-focused teams", why: "BambooHR helps GCs build cleaner people operations when payroll is handled separately or already standardized." },
    ],
    editorialGuidance: [E("Segment employee groups clearly", "Separate field, PM, and office roles to improve policy and reporting consistency."), E("Bake compliance into onboarding", "Include required forms and acknowledgments in structured onboarding flows.")],
    faqItems: [{ q: "What HR software is best for general contractors?", a: "Rippling is strong for complex operations, while Gusto and BambooHR are better fits for SMB simplicity or HRIS-focused workflows." }],
  },
  {
    useCase: "landscaping",
    navLabel: "Landscaping companies",
    title: "Best HR Software for Landscaping Companies (2026)",
    subtitle:
      "Compare HR software for landscaping companies with seasonal hiring, payroll, and onboarding workflows for route and project-based teams.",
    introParagraph:
      "Landscaping businesses need HR software that handles seasonal staffing changes, efficient onboarding, and payroll consistency. The best tools make recurring hiring cycles easier to manage.",
    hubTeaser: "Seasonal workforce HR and payroll support for landscaping operations.",
    keywords: ["best HR software for landscaping companies", "landscaping HR software", "landscaping payroll HR platform"],
    picks: [
      { slug: "gusto", badge: "Best overall for landscaping teams", description: "Payroll and onboarding that work well for seasonal staffing cycles.", rowBestFor: "Seasonal payroll and hiring", why: "Gusto helps landscaping operators manage recurring hiring and payroll with clear, low-friction workflows." },
      { slug: "justworks", badge: "Best PEO for landscaping businesses", description: "Outsourced HR and compliance support for growing teams.", rowBestFor: "Compliance support", why: "Justworks fits landscaping companies that want to reduce internal compliance burden and improve benefits access through a PEO model." },
      { slug: "rippling", badge: "Best for scaling multi-crew operations", description: "Automation and controls for larger landscaping businesses.", rowBestFor: "Scaling operations", why: "Rippling works best when landscaping companies need stronger HR automation and system-level controls across teams and locations." },
    ],
    editorialGuidance: [E("Design for recurring hiring", "Create reusable hiring and onboarding templates for seasonal peaks."), E("Keep payroll groups standardized", "Consistent role and pay-group setup reduces payroll errors during busy months.")],
    faqItems: [{ q: "What is the best HR software for landscaping companies?", a: "Gusto is a top overall choice, with Justworks and Rippling as strong options for PEO support or larger operational complexity." }],
  },
  {
    useCase: "construction",
    navLabel: "Construction companies",
    title: "Best HR Software for Construction Companies (2026)",
    subtitle:
      "Compare HR software for construction companies with workforce onboarding, payroll, and compliance workflows for multi-role project organizations.",
    introParagraph:
      "Construction companies need HR systems that support complex workforce structures, consistent onboarding, and accurate payroll operations. The right platform helps teams scale without losing process control.",
    hubTeaser: "HR systems for construction workforce scaling and payroll control.",
    keywords: ["best HR software for construction companies", "construction HR software", "construction payroll HR platform"],
    picks: [
      { slug: "rippling", badge: "Best for construction scale and automation", description: "Unified HR and payroll with strong workflow automation.", rowBestFor: "Complex construction operations", why: "Rippling is ideal for construction companies managing larger teams, multiple systems, and stricter workflow controls." },
      { slug: "gusto", badge: "Best for construction SMBs", description: "Straightforward payroll and onboarding for growing construction teams.", rowBestFor: "Simple all-in-one stack", why: "Gusto gives construction SMBs dependable payroll and HR coverage without heavy implementation overhead." },
      { slug: "bamboohr", badge: "Best HRIS-first option", description: "Structured HR workflows for teams with separate payroll tools.", rowBestFor: "People-ops maturity", why: "BambooHR is a strong HRIS choice for construction companies prioritizing hiring and employee lifecycle process depth." },
    ],
    editorialGuidance: [E("Align HR and payroll ownership", "Define who owns policy, approvals, and payroll exceptions before implementation."), E("Use role-based onboarding", "Different onboarding paths for field and office roles reduce confusion and rework.")],
    faqItems: [{ q: "Which HR software is best for construction companies?", a: "Rippling leads for complex scale, while Gusto and BambooHR are better for simpler all-in-one or HRIS-focused approaches." }],
  },
  {
    useCase: "remodeling",
    navLabel: "Remodeling businesses",
    title: "Best HR Software for Remodeling Businesses (2026)",
    subtitle:
      "Compare HR software for remodeling businesses with hiring, payroll, and onboarding workflows that support project-driven home services teams.",
    introParagraph:
      "Remodeling businesses need HR software that keeps payroll, onboarding, and people operations organized as projects and team structures evolve. The best platform keeps admin manageable while supporting growth.",
    hubTeaser: "Project-driven HR and payroll workflows for remodeling teams.",
    keywords: ["best HR software for remodeling businesses", "remodeling contractor HR software", "remodeling payroll HR tool"],
    picks: [
      { slug: "gusto", badge: "Best overall for remodelers", description: "Reliable HR and payroll for project-based remodeling businesses.", rowBestFor: "SMB remodeling operations", why: "Gusto is a strong fit for remodelers that want clean payroll and onboarding without adding unnecessary software complexity." },
      { slug: "bamboohr", badge: "Best for HR process structure", description: "HRIS depth for teams formalizing hiring and people workflows.", rowBestFor: "Structured HR operations", why: "BambooHR helps remodeling teams that need stronger employee lifecycle workflows and cleaner records as the business matures." },
      { slug: "rippling", badge: "Best for operational automation", description: "Advanced workflows for remodeling companies scaling quickly.", rowBestFor: "Scaling and automation", why: "Rippling fits remodeling businesses that need automation and tighter controls across payroll, HR, and tools." },
    ],
    editorialGuidance: [E("Map your onboarding bottlenecks", "Identify delays in hiring-to-first-day workflows and automate them."), E("Keep policy communication consistent", "Use centralized documentation and acknowledgments for all hires.")],
    faqItems: [{ q: "What HR software is best for remodeling businesses?", a: "Gusto is a practical default, while BambooHR and Rippling are strong options for deeper HRIS or automation needs." }],
  },
  {
    useCase: "handyman",
    navLabel: "Handyman businesses",
    title: "Best HR Software for Handyman Businesses (2026)",
    subtitle:
      "Compare HR software for handyman businesses with affordable payroll, onboarding, and compliance workflows for lean field-service teams.",
    introParagraph:
      "Handyman businesses need HR software that stays simple and affordable while supporting payroll, basic onboarding, and compliance. The right tool should reduce admin overhead, not create it.",
    hubTeaser: "Affordable HR and payroll options for lean handyman operations.",
    keywords: ["best HR software for handyman businesses", "handyman HR software", "handyman payroll HR system"],
    picks: [
      { slug: "gusto", badge: "Best overall for handyman SMBs", description: "Simple all-in-one payroll and HR for owner-led teams.", rowBestFor: "Lean all-in-one setup", why: "Gusto is usually the best first HR platform for handyman businesses that need reliable payroll and onboarding without complexity." },
      { slug: "justworks", badge: "Best PEO for hands-on support", description: "PEO model for teams wanting outsourced compliance and benefits support.", rowBestFor: "Support-first approach", why: "Justworks helps handyman businesses that prefer outsourced HR support and stronger compliance guidance through a PEO." },
      { slug: "bamboohr", badge: "Best HRIS for growing teams", description: "Stronger people workflows for handyman businesses adding formal HR process.", rowBestFor: "HR process maturity", why: "BambooHR is useful once handyman businesses move beyond basic payroll and need cleaner employee lifecycle management." },
    ],
    editorialGuidance: [E("Stay simple at first", "Choose a platform your team can use daily without extra admin training."), E("Scale deliberately", "Add advanced modules only when headcount and complexity justify them.")],
    faqItems: [{ q: "Is there good HR software for handyman businesses?", a: "Yes. Gusto is often the best first option, with Justworks or BambooHR fitting teams that need more support or process depth." }],
  },
  {
    useCase: "property-management",
    navLabel: "Property management companies",
    title: "Best HR Software for Property Management Companies (2026)",
    subtitle:
      "Compare HR software for property management companies with payroll, onboarding, and compliance tools for mixed office and field operations.",
    introParagraph:
      "Property management companies often combine office admins, leasing staff, and maintenance teams. HR software should support this mixed workforce with clear payroll and onboarding workflows.",
    hubTeaser: "Mixed-workforce HR and payroll tools for property management teams.",
    keywords: ["best HR software for property management companies", "property management HR software", "property management payroll HR"],
    picks: [
      { slug: "rippling", badge: "Best for multi-role operations", description: "Unified HR and automation for complex property management teams.", rowBestFor: "Operational complexity", why: "Rippling works well for property management firms with varied roles and growing operational complexity that needs stronger workflow automation." },
      { slug: "gusto", badge: "Best for SMB property managers", description: "Simple HR and payroll stack for smaller PM businesses.", rowBestFor: "SMB property management", why: "Gusto is a strong fit when property managers need dependable payroll and onboarding without enterprise overhead." },
      { slug: "justworks", badge: "Best PEO option", description: "Outsourced HR support and compliance help for PM teams.", rowBestFor: "PEO support model", why: "Justworks is a useful option for property management businesses wanting more guided compliance and HR support." },
    ],
    editorialGuidance: [E("Standardize employee classifications", "Keep role and pay-type data consistent across leasing, admin, and maintenance teams."), E("Centralize compliance docs", "Use one source of truth for handbook policies and acknowledgments.")],
    faqItems: [{ q: "What HR software is best for property management companies?", a: "Rippling is strong for complexity, while Gusto and Justworks fit SMB and support-first property management teams." }],
  },
  {
    useCase: "pest-control",
    navLabel: "Pest control businesses",
    title: "Best HR Software for Pest Control Businesses (2026)",
    subtitle:
      "Compare HR software for pest control businesses with route-tech onboarding, payroll, and compliance workflows for field-service growth.",
    introParagraph:
      "Pest control businesses need HR tools that support route technician hiring, payroll consistency, and repeatable compliance workflows. The right software helps teams scale without HR bottlenecks.",
    hubTeaser: "HR and payroll support for route-based pest control teams.",
    keywords: ["best HR software for pest control businesses", "pest control HR software", "pest control payroll HR tool"],
    picks: [
      { slug: "gusto", badge: "Best overall for pest control SMBs", description: "All-in-one payroll and HR for route and office teams.", rowBestFor: "SMB pest operations", why: "Gusto is a practical default for pest control businesses needing reliable payroll, onboarding, and benefits workflows." },
      { slug: "justworks", badge: "Best PEO support", description: "PEO model for compliance and benefits assistance.", rowBestFor: "Outsourced HR support", why: "Justworks fits pest control operators that want more hands-on HR and compliance support as they scale teams." },
      { slug: "rippling", badge: "Best for scaling operations", description: "Automation-heavy platform for larger pest control organizations.", rowBestFor: "Scaling field-service teams", why: "Rippling helps pest control businesses with growing operational complexity and higher automation needs across HR and payroll." },
    ],
    editorialGuidance: [E("Build repeatable technician onboarding", "Use standardized onboarding paths for route tech roles and policy sign-offs."), E("Audit payroll configurations", "Validate overtime and pay codes early to avoid recurring corrections.")],
    faqItems: [{ q: "Which HR software is best for pest control businesses?", a: "Gusto is a strong all-around choice, while Justworks and Rippling fit businesses that need PEO support or deeper automation." }],
  },
  {
    useCase: "pool-service",
    navLabel: "Pool service companies",
    title: "Best HR Software for Pool Service Companies (2026)",
    subtitle:
      "Compare HR software for pool service companies with seasonal hiring support, payroll workflows, and onboarding tools for route-based field teams.",
    introParagraph:
      "Pool service companies need HR software that handles seasonal staffing swings, efficient onboarding, and payroll consistency for recurring route operations.",
    hubTeaser: "Seasonal HR and payroll workflows for pool service operations.",
    keywords: ["best HR software for pool service companies", "pool service HR software", "pool maintenance payroll HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for pool service SMBs", description: "Simple payroll and HR stack for route and office teams.", rowBestFor: "SMB pool service teams", why: "Gusto is a reliable fit for pool service operators that need low-friction payroll and onboarding for recurring staffing cycles." },
      { slug: "justworks", badge: "Best PEO option", description: "Compliance and benefits support through a PEO model.", rowBestFor: "Support-heavy HR model", why: "Justworks helps pool service companies wanting outsourced compliance and HR support while teams grow." },
      { slug: "bamboohr", badge: "Best HRIS process depth", description: "People-ops workflows for teams adding structure beyond payroll.", rowBestFor: "HRIS-led workflow improvement", why: "BambooHR works well when pool service companies need stronger HR process and employee lifecycle management." },
    ],
    editorialGuidance: [E("Prepare for seasonal reactivation", "Reuse onboarding templates for recurring hires and returning team members."), E("Keep payroll and role mapping clean", "Consistent role setup improves reporting and reduces payroll errors.")],
    faqItems: [{ q: "What is the best HR software for pool service companies?", a: "Gusto is often the best first choice, with Justworks and BambooHR as strong alternatives depending on support and process needs." }],
  },
  {
    useCase: "junk-removal",
    navLabel: "Junk removal businesses",
    title: "Best HR Software for Junk Removal Businesses (2026)",
    subtitle:
      "Compare HR software for junk removal businesses with mobile workforce onboarding, payroll automation, and compliance workflows for fast-moving teams.",
    introParagraph:
      "Junk removal businesses move fast and need HR software that keeps payroll and onboarding simple for mobile crews. The right platform reduces admin drag while supporting growth.",
    hubTeaser: "Payroll and onboarding support for fast-moving junk removal teams.",
    keywords: ["best HR software for junk removal businesses", "junk removal HR software", "junk hauling payroll HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for junk removal SMBs", description: "All-in-one HR and payroll for crew-based operations.", rowBestFor: "Lean crew operations", why: "Gusto is a strong fit for junk removal teams that want straightforward payroll and onboarding with minimal admin overhead." },
      { slug: "rippling", badge: "Best for scaling multi-team operations", description: "Advanced automation for larger junk removal organizations.", rowBestFor: "Operational scale", why: "Rippling is useful when junk removal businesses need deeper workflow automation and tighter controls across teams and systems." },
      { slug: "justworks", badge: "Best PEO support option", description: "Compliance and benefits support via PEO structure.", rowBestFor: "Outsourced HR and compliance", why: "Justworks helps junk removal businesses that want more guided support for compliance and benefits administration." },
    ],
    editorialGuidance: [E("Prioritize onboarding speed", "New hires should complete core paperwork quickly to avoid route staffing delays."), E("Monitor payroll exception trends", "Track repeated corrections to improve role and pay-code setup.")],
    faqItems: [{ q: "Which HR software is best for junk removal businesses?", a: "Gusto is the most common all-around pick, while Rippling and Justworks fit scaling and support-first models." }],
  },
  {
    useCase: "moving",
    navLabel: "Moving companies",
    title: "Best HR Software for Moving Companies (2026)",
    subtitle:
      "Compare HR software for moving companies with crew onboarding, payroll workflows, and compliance tools for local and long-distance operations.",
    introParagraph:
      "Moving companies need HR software that supports crew-heavy operations, efficient hiring, and reliable payroll. The best tools reduce administrative friction while keeping compliance processes consistent.",
    hubTeaser: "Crew-focused HR and payroll systems for moving companies.",
    keywords: ["best HR software for moving companies", "moving company HR software", "moving payroll HR platform"],
    picks: [
      { slug: "gusto", badge: "Best overall for moving SMBs", description: "Simple all-in-one payroll and HR for moving crews and office staff.", rowBestFor: "SMB moving operations", why: "Gusto is a practical default for moving companies needing dependable payroll and onboarding without heavy setup complexity." },
      { slug: "rippling", badge: "Best for scaling and automation", description: "Unified HR and payroll automation for larger moving organizations.", rowBestFor: "Scaling operational complexity", why: "Rippling works best for moving businesses expanding across locations and requiring deeper workflow automation." },
      { slug: "justworks", badge: "Best PEO-backed support", description: "PEO support for compliance and benefits management.", rowBestFor: "Compliance support model", why: "Justworks is a good option when moving companies want outsourced HR support and stronger benefits administration guidance." },
    ],
    editorialGuidance: [E("Standardize crew onboarding", "Create role-specific onboarding paths for drivers, movers, and coordinators."), E("Validate payroll timing", "Ensure payroll cycles align with peak move days and overtime patterns.")],
    faqItems: [{ q: "What HR software is best for moving companies?", a: "Gusto is a strong all-around choice for most moving companies, with Rippling and Justworks as alternatives for scale or support-focused needs." }],
  },
  {
    useCase: "appliance-repair",
    navLabel: "Appliance repair businesses",
    title: "Best HR Software for Appliance Repair Businesses (2026)",
    subtitle:
      "Compare HR software for appliance repair businesses with technician onboarding, payroll workflows, and compliance support for mobile service teams.",
    introParagraph:
      "Appliance repair businesses need HR tools that keep technician hiring, onboarding, and payroll clean across field and office roles. The best platforms reduce admin friction while supporting growth and retention.",
    hubTeaser: "HR and payroll support for mobile appliance repair teams.",
    keywords: ["best HR software for appliance repair businesses", "appliance repair HR software", "appliance service payroll HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for appliance repair SMBs", description: "All-in-one payroll and HR for field and office teams.", rowBestFor: "SMB all-in-one setup", why: "Gusto is a practical default for appliance repair companies that need dependable payroll, onboarding, and benefits admin without heavy setup overhead." },
      { slug: "bamboohr", badge: "Best for structured people operations", description: "Strong HRIS workflows for hiring, records, and onboarding quality.", rowBestFor: "HRIS process depth", why: "BambooHR is a strong fit when appliance repair businesses want cleaner employee lifecycle workflows and better HR process consistency as they scale." },
      { slug: "justworks", badge: "Best PEO option for support-heavy teams", description: "PEO-backed compliance and benefits support for lean HR teams.", rowBestFor: "Outsourced HR support", why: "Justworks works well for appliance repair operators who prefer more guided compliance and HR support through a PEO model." },
    ],
    editorialGuidance: [E("Standardize technician onboarding", "Use role-specific onboarding paths for field techs and coordinators."), E("Review payroll edge cases", "Validate overtime and on-call pay-code setup before full rollout.")],
    faqItems: [{ q: "What is the best HR software for appliance repair businesses?", a: "Gusto is the top all-around choice for most appliance repair SMBs, with BambooHR and Justworks as strong alternatives for deeper HR process or PEO-backed support." }],
  },
  {
    useCase: "garage-door",
    navLabel: "Garage door companies",
    title: "Best HR Software for Garage Door Companies (2026)",
    subtitle:
      "Compare HR software for garage door companies with payroll automation, installer onboarding, and compliance workflows for service and install teams.",
    introParagraph:
      "Garage door companies run mixed service and installation teams that need clean payroll and repeatable onboarding. The right HR platform improves consistency as hiring and dispatch volume grows.",
    hubTeaser: "Payroll and onboarding tools for garage door service and install teams.",
    keywords: ["best HR software for garage door companies", "garage door HR software", "garage door payroll HR platform"],
    picks: [
      { slug: "gusto", badge: "Best overall for garage door SMBs", description: "Simple payroll and onboarding for service and install teams.", rowBestFor: "SMB payroll and HR", why: "Gusto fits garage door companies that need a reliable all-in-one HR and payroll stack without complex implementation." },
      { slug: "rippling", badge: "Best for scaling multi-team operations", description: "Automation-heavy HR and payroll for growing garage door businesses.", rowBestFor: "Scaling automation", why: "Rippling is ideal for operators adding locations, managers, and systems that require stronger process automation and policy control." },
      { slug: "bamboohr", badge: "Best HRIS-first choice", description: "Structured people operations for teams with separate payroll preferences.", rowBestFor: "People-process maturity", why: "BambooHR is a good fit for businesses prioritizing hiring process quality, onboarding consistency, and employee records management." },
    ],
    editorialGuidance: [E("Separate service vs install roles", "Clean role mapping improves policy, reporting, and payroll consistency."), E("Build reusable onboarding templates", "Template-based onboarding reduces admin overhead during hiring spikes.")],
    faqItems: [{ q: "Which HR software is best for garage door companies?", a: "Gusto is a strong default, while Rippling and BambooHR are better fits for scaling automation or deeper HRIS workflows." }],
  },
  {
    useCase: "locksmith",
    navLabel: "Locksmith businesses",
    title: "Best HR Software for Locksmith Businesses (2026)",
    subtitle:
      "Compare HR software for locksmith businesses with payroll, mobile-team onboarding, and compliance workflows for emergency and scheduled service teams.",
    introParagraph:
      "Locksmith businesses need HR software that stays simple while supporting technician hiring, payroll accuracy, and policy consistency for mobile operations.",
    hubTeaser: "Lean HR and payroll workflows for locksmith service teams.",
    keywords: ["best HR software for locksmith businesses", "locksmith HR software", "locksmith payroll and HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for locksmith SMBs", description: "Straightforward HR and payroll for small field-service teams.", rowBestFor: "Lean all-in-one operations", why: "Gusto is usually the best first platform for locksmith businesses that need reliable payroll and onboarding with minimal admin burden." },
      { slug: "justworks", badge: "Best PEO for compliance support", description: "PEO model with guided compliance and benefits administration.", rowBestFor: "Support-first HR model", why: "Justworks is helpful for locksmith teams that want outsourced support for compliance and people administration as they grow." },
      { slug: "rippling", badge: "Best for scaling locksmith operations", description: "Unified HR and payroll automation for larger teams.", rowBestFor: "Growth and automation", why: "Rippling works best for operators who are expanding and need stronger workflow controls than basic payroll-first tools." },
    ],
    editorialGuidance: [E("Keep onboarding mobile-friendly", "Technicians should complete required steps quickly before route assignment."), E("Audit recurring payroll issues", "Track repeated corrections to improve pay-code setup early.")],
    faqItems: [{ q: "What HR software is best for locksmith businesses?", a: "Gusto is a top all-around choice, with Justworks and Rippling as strong options for support-heavy or scaling operations." }],
  },
  {
    useCase: "flooring",
    navLabel: "Flooring contractors",
    title: "Best HR Software for Flooring Contractors (2026)",
    subtitle:
      "Compare HR software for flooring contractors with installer onboarding, payroll workflows, and compliance support for project-based teams.",
    introParagraph:
      "Flooring contractors need HR systems that support project-driven hiring, repeatable onboarding, and payroll consistency across crews and office roles.",
    hubTeaser: "HR and payroll tools for flooring installation businesses.",
    keywords: ["best HR software for flooring contractors", "flooring HR software", "flooring contractor payroll HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for flooring SMBs", description: "Reliable all-in-one payroll and HR for installer teams.", rowBestFor: "SMB installer teams", why: "Gusto is a strong fit for flooring contractors that need dependable payroll and onboarding with low implementation complexity." },
      { slug: "bamboohr", badge: "Best for HRIS workflow quality", description: "Structured employee lifecycle workflows for growing flooring companies.", rowBestFor: "Process-driven HR teams", why: "BambooHR helps flooring businesses improve hiring documentation, onboarding consistency, and employee record quality at scale." },
      { slug: "rippling", badge: "Best for multi-team automation", description: "Advanced HR and payroll automation for expanding operations.", rowBestFor: "Operational scale", why: "Rippling is ideal for flooring companies with increasing headcount and systems complexity requiring stronger automation and controls." },
    ],
    editorialGuidance: [E("Standardize installer role setup", "Consistent role/pay mapping improves payroll and reporting quality."), E("Template project-season onboarding", "Reusable onboarding flows reduce admin load during hiring waves.")],
    faqItems: [{ q: "What is the best HR software for flooring contractors?", a: "Gusto is a practical default, while BambooHR and Rippling fit teams that need deeper HR process structure or broader automation." }],
  },
  {
    useCase: "fence-deck",
    navLabel: "Fence & deck builders",
    title: "Best HR Software for Fence & Deck Builders (2026)",
    subtitle:
      "Compare HR software for fence and deck builders with payroll, onboarding, and compliance workflows for project-based field teams.",
    introParagraph:
      "Fence and deck builders need HR software that keeps hiring and payroll efficient across project crews and seasonal demand shifts.",
    hubTeaser: "Project-crew HR and payroll tools for fence and deck builders.",
    keywords: ["best HR software for fence and deck builders", "deck builder HR software", "fence contractor payroll HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for fence and deck SMBs", description: "Simple all-in-one payroll and HR for build-focused teams.", rowBestFor: "SMB builder operations", why: "Gusto offers the right balance of payroll reliability and onboarding simplicity for most fence and deck teams." },
      { slug: "justworks", badge: "Best PEO-backed support option", description: "PEO model for compliance and benefits support while teams grow.", rowBestFor: "Support-focused operations", why: "Justworks is helpful for builders wanting guided compliance and HR support without building an internal HR function." },
      { slug: "bamboohr", badge: "Best HRIS for process standardization", description: "Structured people workflows for builders formalizing HR operations.", rowBestFor: "HR process maturity", why: "BambooHR works well for teams that need cleaner employee lifecycle management and stronger documentation consistency." },
    ],
    editorialGuidance: [E("Use consistent crew-role taxonomy", "Clear role data improves onboarding and payroll setup quality."), E("Review compliance document completion", "Ensure policy acknowledgments are complete before field assignment.")],
    faqItems: [{ q: "Which HR software is best for fence and deck builders?", a: "Gusto is the most common all-around fit, with Justworks and BambooHR as strong alternatives for PEO support or deeper HR process structure." }],
  },
  {
    useCase: "glass-window-installers",
    navLabel: "Glass & window installers",
    title: "Best HR Software for Glass & Window Installers (2026)",
    subtitle:
      "Compare HR software for glass and window installers with payroll, onboarding, and compliance workflows for install-focused field teams.",
    introParagraph:
      "Glass and window installers need HR tools that keep payroll and onboarding accurate across mixed office and field crews. The right platform reduces errors and supports repeatable hiring workflows.",
    hubTeaser: "Install-focused HR and payroll tools for glass and window teams.",
    keywords: ["best HR software for glass and window installers", "window installer HR software", "glass contractor payroll HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for installer SMBs", description: "Reliable HR and payroll for field and office operations.", rowBestFor: "All-in-one installer operations", why: "Gusto is a practical default for installer teams that need fast setup and dependable payroll/HR coverage." },
      { slug: "rippling", badge: "Best for scaling installer operations", description: "Automation-heavy platform for multi-team growth and control.", rowBestFor: "Scaling and controls", why: "Rippling is ideal for installers expanding headcount and systems where automation and policy governance matter more." },
      { slug: "bamboohr", badge: "Best HRIS for structured people ops", description: "Strong onboarding and employee records for process-driven teams.", rowBestFor: "HR documentation quality", why: "BambooHR supports cleaner people operations for companies that prioritize onboarding quality and HR process consistency." },
    ],
    editorialGuidance: [E("Separate install and office employee groups", "Role segmentation improves payroll and policy accuracy."), E("Run onboarding QA quarterly", "Regular audits catch workflow gaps before hiring spikes.")],
    faqItems: [{ q: "What HR software is best for glass and window installers?", a: "Gusto is best for most SMB installers, while Rippling and BambooHR are stronger for automation-heavy or HRIS-first operations." }],
  },
  {
    useCase: "concrete-contractors",
    navLabel: "Concrete contractors",
    title: "Best HR Software for Concrete Contractors (2026)",
    subtitle:
      "Compare HR software for concrete contractors with payroll automation, crew onboarding, and compliance workflows for labor-intensive operations.",
    introParagraph:
      "Concrete contractors need HR software that handles crew-heavy payroll and structured onboarding while keeping compliance and employee data organized.",
    hubTeaser: "Crew-first HR and payroll systems for concrete contractors.",
    keywords: ["best HR software for concrete contractors", "concrete contractor HR software", "concrete payroll HR platform"],
    picks: [
      { slug: "gusto", badge: "Best overall for concrete SMBs", description: "Simple payroll and HR foundation for labor-heavy teams.", rowBestFor: "SMB concrete teams", why: "Gusto is a strong fit for concrete contractors needing dependable payroll and low-friction onboarding." },
      { slug: "rippling", badge: "Best for operational scale", description: "Automation and policy controls for larger concrete organizations.", rowBestFor: "Growing multi-team operations", why: "Rippling works best when concrete firms need stronger workflow automation and centralized control as they scale." },
      { slug: "justworks", badge: "Best PEO compliance support", description: "PEO-backed HR model for teams wanting more guided support.", rowBestFor: "Support-heavy compliance model", why: "Justworks helps concrete teams that prefer outsourced compliance and benefits administration support." },
    ],
    editorialGuidance: [E("Keep crew-role payroll mapping consistent", "Consistent classifications reduce recurring payroll corrections."), E("Automate compliance reminders", "Policy and document reminders reduce administrative misses.")],
    faqItems: [{ q: "What is the best HR software for concrete contractors?", a: "Gusto is a top all-around option, with Rippling and Justworks as strong choices for larger scale or PEO-backed support." }],
  },
  {
    useCase: "excavation",
    navLabel: "Excavation companies",
    title: "Best HR Software for Excavation Companies (2026)",
    subtitle:
      "Compare HR software for excavation companies with payroll, onboarding, and compliance workflows for operator and field-crew teams.",
    introParagraph:
      "Excavation companies need HR systems that support crew and operator payroll accuracy, efficient onboarding, and repeatable compliance across project-heavy operations.",
    hubTeaser: "HR and payroll workflows for excavation operators and crews.",
    keywords: ["best HR software for excavation companies", "excavation HR software", "excavation payroll HR system"],
    picks: [
      { slug: "rippling", badge: "Best for scaling excavation operations", description: "Automation-first HR and payroll for complex workforce setups.", rowBestFor: "Automation and scale", why: "Rippling is ideal for excavation companies with growing teams and system complexity that demand stronger automation and governance." },
      { slug: "gusto", badge: "Best all-in-one for excavation SMBs", description: "Straightforward payroll and onboarding for field-heavy businesses.", rowBestFor: "SMB simplicity", why: "Gusto provides dependable payroll/HR coverage with minimal setup burden for small to mid-size excavation businesses." },
      { slug: "bamboohr", badge: "Best HRIS process support", description: "Structured people operations for teams improving HR maturity.", rowBestFor: "HR workflow structure", why: "BambooHR is a good fit when excavation teams need stronger documentation and employee lifecycle process quality." },
    ],
    editorialGuidance: [E("Separate operator and crew job families", "Role clarity improves policy and pay-rule setup."), E("Define onboarding ownership", "Clear ownership prevents incomplete compliance tasks for new hires.")],
    faqItems: [{ q: "Which HR software is best for excavation companies?", a: "Rippling is strong for operational complexity, while Gusto and BambooHR fit SMB all-in-one or HRIS-first workflows." }],
  },
  {
    useCase: "auto-repair",
    navLabel: "Auto repair shops",
    title: "Best HR Software for Auto Repair Shops (2026)",
    subtitle:
      "Compare HR software for auto repair shops with technician payroll, onboarding workflows, and compliance tools for shop and office teams.",
    introParagraph:
      "Auto repair shops need HR software that supports technician hiring, payroll consistency, and clean employee workflows across service advisors, mechanics, and office staff.",
    hubTeaser: "HR and payroll support for technician-heavy auto repair teams.",
    keywords: ["best HR software for auto repair shops", "auto repair HR software", "mechanic payroll HR platform"],
    picks: [
      { slug: "gusto", badge: "Best overall for auto repair SMBs", description: "Simple payroll and onboarding for shop and office teams.", rowBestFor: "SMB repair operations", why: "Gusto is a practical default for auto repair shops that need reliable payroll and HR functionality without complexity." },
      { slug: "bamboohr", badge: "Best for HR process structure", description: "People-ops workflows for shops formalizing hiring and documentation.", rowBestFor: "HRIS process depth", why: "BambooHR supports auto repair businesses that want cleaner employee records and stronger onboarding consistency." },
      { slug: "rippling", badge: "Best for scaling multi-location shops", description: "Automation-heavy HR and payroll for growing repair organizations.", rowBestFor: "Scaling operations", why: "Rippling is best when repair businesses expand and need more automation and policy controls across locations." },
    ],
    editorialGuidance: [E("Standardize technician role levels", "Role structure improves pay policy and reporting consistency."), E("Audit onboarding completion rates", "Incomplete onboarding increases compliance and payroll risk.")],
    faqItems: [{ q: "What is the best HR software for auto repair shops?", a: "Gusto is the leading all-around option for most shops, with BambooHR and Rippling as strong alternatives for process depth or scaling automation." }],
  },
  {
    useCase: "mobile-mechanics",
    navLabel: "Mobile mechanics",
    title: "Best HR Software for Mobile Mechanics (2026)",
    subtitle:
      "Compare HR software for mobile mechanics with payroll, field-team onboarding, and compliance workflows for distributed technician operations.",
    introParagraph:
      "Mobile mechanic businesses need HR tools that keep payroll and onboarding simple for distributed field teams while maintaining policy and compliance consistency.",
    hubTeaser: "Field-team HR and payroll systems for mobile mechanic operations.",
    keywords: ["best HR software for mobile mechanics", "mobile mechanic HR software", "mobile service payroll HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for mobile mechanic SMBs", description: "Straightforward HR and payroll for distributed service teams.", rowBestFor: "Lean field-service operations", why: "Gusto is ideal for mobile mechanic teams that need easy payroll and onboarding with minimal overhead." },
      { slug: "justworks", badge: "Best PEO support for distributed crews", description: "PEO-backed compliance and benefits support for growing teams.", rowBestFor: "Support-first HR model", why: "Justworks fits teams wanting more guided compliance and HR administration as mobile operations grow." },
      { slug: "rippling", badge: "Best for scaling and automation", description: "Unified HR/payroll automation for larger distributed teams.", rowBestFor: "Automation at scale", why: "Rippling helps mobile mechanic businesses with growing workforce complexity and stronger process-control requirements." },
    ],
    editorialGuidance: [E("Use mobile-completable onboarding", "Field hires should complete required steps quickly from any device."), E("Track recurring payroll exceptions", "Exception trends reveal setup issues that should be fixed once.")],
    faqItems: [{ q: "What HR software is best for mobile mechanics?", a: "Gusto is the best all-around choice for most teams, with Justworks and Rippling as strong options for PEO support or larger-scale automation." }],
  },
  {
    useCase: "cleaning-franchises",
    navLabel: "Cleaning franchises",
    title: "Best HR Software for Cleaning Franchises (2026)",
    subtitle:
      "Compare HR software for cleaning franchises with multi-location payroll, onboarding standardization, and compliance workflows for franchise growth.",
    introParagraph:
      "Cleaning franchises need HR software that can enforce consistent people processes across locations while supporting scalable payroll and onboarding operations.",
    hubTeaser: "Multi-location HR and payroll systems for cleaning franchise operators.",
    keywords: ["best HR software for cleaning franchises", "cleaning franchise HR software", "multi-location payroll HR platform"],
    picks: [
      { slug: "rippling", badge: "Best for franchise scale and control", description: "Automation-rich HR/payroll platform for multi-location operations.", rowBestFor: "Multi-location governance", why: "Rippling is the strongest fit for cleaning franchises that need centralized controls and automation across multiple locations and teams." },
      { slug: "gusto", badge: "Best for smaller franchise groups", description: "Simple all-in-one HR and payroll stack for growing operators.", rowBestFor: "SMB franchise rollout", why: "Gusto is a strong option for smaller franchise groups that prioritize ease of use and predictable implementation." },
      { slug: "justworks", badge: "Best PEO-backed franchise support", description: "PEO model for benefits and compliance support across teams.", rowBestFor: "Support-heavy compliance model", why: "Justworks helps franchise operators that prefer outsourced compliance and HR administration support during growth." },
    ],
    editorialGuidance: [E("Standardize onboarding across locations", "Shared templates improve consistency and lower training variance."), E("Audit payroll by location monthly", "Location-level review catches setup drift early.")],
    faqItems: [{ q: "What is the best HR software for cleaning franchises?", a: "Rippling is best for multi-location control, while Gusto and Justworks are strong options for smaller rollout or support-heavy models." }],
  },
  {
    useCase: "event-services",
    navLabel: "Event services",
    title: "Best HR Software for Event Services (2026)",
    subtitle:
      "Compare HR software for event services with variable staffing payroll, onboarding workflows, and compliance tools for project-based teams.",
    introParagraph:
      "Event services businesses need HR software that handles fluctuating staffing, clean onboarding, and reliable payroll workflows across production and operations roles.",
    hubTeaser: "HR and payroll workflows for variable-staff event service teams.",
    keywords: ["best HR software for event services", "event staffing HR software", "event company payroll HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for event-service SMBs", description: "Reliable HR and payroll for variable staffing patterns.", rowBestFor: "Variable staffing payroll", why: "Gusto works well for event-service teams that need straightforward payroll and onboarding while staffing levels shift by season and project load." },
      { slug: "bamboohr", badge: "Best for people-process structure", description: "Strong onboarding and records for teams formalizing HR workflows.", rowBestFor: "HR process standardization", why: "BambooHR is useful when event businesses need cleaner HR documentation and employee lifecycle structure as operations mature." },
      { slug: "justworks", badge: "Best PEO compliance support", description: "PEO-backed benefits and compliance support for lean HR teams.", rowBestFor: "Support-first operations", why: "Justworks helps teams that prefer outsourced HR support while maintaining operational focus on event delivery." },
    ],
    editorialGuidance: [E("Build reusable role-specific onboarding", "Role templates reduce prep time for recurring event staffing cycles."), E("Validate payroll for variable schedules", "Ensure pay rules match overtime realities for event peaks.")],
    faqItems: [{ q: "Which HR software is best for event services?", a: "Gusto is the top all-around option for most event-service SMBs, with BambooHR and Justworks fitting process-heavy or support-first teams." }],
  },
  {
    useCase: "home-inspectors",
    navLabel: "Home inspectors",
    title: "Best HR Software for Home Inspectors (2026)",
    subtitle:
      "Compare HR software for home inspectors with payroll, onboarding, and compliance workflows for lean field-service businesses.",
    introParagraph:
      "Home inspection businesses need HR software that stays lightweight while supporting payroll and repeatable people workflows as teams grow beyond owner-operator mode.",
    hubTeaser: "Lean HR and payroll systems for home inspection businesses.",
    keywords: ["best HR software for home inspectors", "home inspector HR software", "inspection business payroll HR"],
    picks: [
      { slug: "gusto", badge: "Best overall for home inspector SMBs", description: "Simple payroll and HR for small inspection teams.", rowBestFor: "Lean all-in-one HR", why: "Gusto is the best starting point for most home inspection businesses that need reliable payroll and onboarding without extra software overhead." },
      { slug: "bamboohr", badge: "Best for structured HR growth", description: "HRIS workflows for teams adding process depth beyond payroll.", rowBestFor: "HR process maturity", why: "BambooHR is a good fit for inspection companies formalizing hiring, documentation, and employee lifecycle workflows." },
      { slug: "justworks", badge: "Best PEO support option", description: "PEO-based compliance and benefits support for lean internal teams.", rowBestFor: "Outsourced HR support", why: "Justworks helps inspection teams that want guided compliance and benefits administration support while keeping internal HR lean." },
    ],
    editorialGuidance: [E("Keep workflows lightweight", "Simple systems improve team adoption and reduce admin drag."), E("Document policy acknowledgments clearly", "Strong documentation reduces compliance risk as headcount increases.")],
    faqItems: [{ q: "What is the best HR software for home inspectors?", a: "Gusto is the strongest all-around choice for most home inspection SMBs, with BambooHR and Justworks as alternatives for deeper HR process or PEO-backed support." }],
  },
];

const BUILT = TRADE_CONFIGS.map((config) => buildTradePage(config));

export const HR_TRADE_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = Object.fromEntries(
  TRADE_CONFIGS.map((config, i) => [config.useCase, BUILT[i].pageProps])
);

export const HR_TRADE_BEST_FOR_METADATA_BY_SLUG: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = Object.fromEntries(TRADE_CONFIGS.map((config, i) => [config.useCase, BUILT[i].metadata]));

export const HR_TRADE_HUB_ORDER: string[] = TRADE_CONFIGS.map((config) => config.useCase);

export function getHrTradeBestForHubCards(): { label: string; href: string; description: string }[] {
  return BUILT.map((item) => item.hubCard);
}

export const HR_TRADE_SCENARIO_NAV_LINKS: { label: string; href: string }[] = BUILT.map((item) => item.nav);

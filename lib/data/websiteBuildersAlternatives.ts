import type { AlternativesTemplateProps } from "@/components/alternatives/AlternativesTemplate";
import type { AlternativesLink } from "@/components/alternatives/AlternativesTemplate";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import { getWebsiteBuildersComparisonBySlug } from "@/lib/data/websiteBuildersComparisons";
import { getWebsiteBuilderLogoSrc } from "@/lib/data/websiteBuildersLogos";
import {
  getWebsiteBuildersAlternativeUrl,
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersCompareUrl,
  getWebsiteBuildersReviewUrl,
} from "@/lib/routes";

const CATEGORY = { href: "/website-builders", label: "Website Builders" };

/** Hub links shared on every alternatives page; individual pages append software review links. */
const HUB_RELATED_RESOURCES: AlternativesLink[] = [
  { label: "Website builders hub", href: "/website-builders" },
  { label: "Best website builders", href: "/website-builders/best-website-builders" },
  { label: "Compare website builders", href: "/website-builders/compare" },
  { label: "Website builder guides", href: "/website-builders/guides" },
  { label: "Best for contractors", href: getWebsiteBuildersBestForUrl("contractors") },
  { label: "Best for small business", href: getWebsiteBuildersBestForUrl("small-business") },
];

function softwareReviewLinks(entries: [slug: string, displayName: string][]): AlternativesLink[] {
  return entries.map(([slug, name]) => ({
    label: `${name} review`,
    href: getWebsiteBuildersReviewUrl(slug),
  }));
}

function rel(slug: string) {
  return toAlternativesRelatedComparison(getWebsiteBuildersCompareUrl(slug), getWebsiteBuildersComparisonBySlug(slug));
}

type AlternativesBaseFields = Omit<
  AlternativesTemplateProps,
  "title" | "subtitle" | "topAlternatives" | "comparisonTableRows" | "detailedAlternatives" | "faqItems"
>;

function basePage(
  productName: string,
  productSlug: string,
  reviewLinkTuples: [string, string][]
): AlternativesBaseFields {
  return {
    productName,
    productSlug,
    categoryHref: CATEGORY.href,
    categoryLabel: CATEGORY.label,
    originalReviewHref: getWebsiteBuildersReviewUrl(productSlug),
    quickAnswerParagraphs: [
      `${productName} is a strong option, but alternatives can be better for specific service-business priorities like design control, ecommerce depth, or easier operations.`,
      `Compare the picks below, then follow each ${productName} alternative’s review for pricing, pros and cons, and internal links to comparisons.`,
    ],
    whyPeopleLookForAlternatives: [
      {
        heading: "Pricing and feature tradeoffs",
        body: "Teams often switch when they outgrow entry plans or need features that require expensive add-ons.",
      },
      {
        heading: "SEO and conversion priorities",
        body: "Local businesses care about service pages, lead forms, and call conversion paths more than generic template depth.",
      },
      {
        heading: "Workflow fit",
        body: "The best builder depends on who edits the site and how frequently updates happen.",
      },
    ],
    howToChoose: [
      {
        heading: "Start from lead flow",
        body: "Choose the builder that makes quote requests, calls, and contact submissions easy on mobile.",
      },
      {
        heading: "Check SEO basics",
        body: "You need editable metadata, clean URL control, and strong page structure for local search visibility.",
      },
      {
        heading: "Model real cost",
        body: "Compare yearly cost including apps, ecommerce, and team seats—not just entry-level pricing.",
      },
    ],
    relatedComparisons: [
      rel("wix-vs-squarespace"),
      rel("wix-vs-shopify"),
      rel("webflow-vs-wix"),
      rel("hostinger-website-builder-vs-wix"),
      rel("godaddy-website-builder-vs-hostinger-website-builder"),
    ],
    relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(reviewLinkTuples)],
  };
}

const wixPage: AlternativesTemplateProps = {
  ...basePage("Wix", "wix", [
    ["wix", "Wix"],
    ["squarespace", "Squarespace"],
    ["shopify", "Shopify"],
    ["webflow", "Webflow"],
    ["duda", "Duda"],
    ["godaddy-website-builder", "GoDaddy"],
    ["hostinger-website-builder", "Hostinger"],
    ["wordpress", "WordPress"],
  ]),
  title: "Best Wix Alternatives (2026)",
  subtitle:
    "Compare website builder alternatives to Wix for service businesses that need different pricing, design control, or ecommerce depth.",
  topAlternatives: [
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      rating: "4.4",
      bestFor: "Design-led service brands",
      description: "Better visual polish and presentation-first templates.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-squarespace"),
      startingPrice: "From $16/mo",
    },
    {
      slug: "shopify",
      name: "Shopify",
      logoSrc: getWebsiteBuilderLogoSrc("shopify"),
      rating: "4.5",
      bestFor: "Service + ecommerce",
      description: "Stronger online selling and checkout workflows.",
      reviewHref: getWebsiteBuildersReviewUrl("shopify"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-shopify"),
      startingPrice: "From $39/mo",
    },
    {
      slug: "webflow",
      name: "Webflow",
      logoSrc: getWebsiteBuilderLogoSrc("webflow"),
      rating: "4.3",
      bestFor: "Custom design control",
      description: "Greater layout and CMS flexibility for advanced teams.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      compareHref: getWebsiteBuildersCompareUrl("webflow-vs-wix"),
      startingPrice: "From $14/mo",
    },
    {
      slug: "duda",
      name: "Duda",
      logoSrc: getWebsiteBuilderLogoSrc("duda"),
      rating: "4.2",
      bestFor: "Agency workflows",
      description: "Built for multi-site management and client handoff.",
      reviewHref: getWebsiteBuildersReviewUrl("duda"),
      compareHref: getWebsiteBuildersCompareUrl("duda-vs-wix"),
      startingPrice: "From $19/mo",
    },
  ],
  comparisonTableRows: [
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      bestFor: "All-around service sites",
      startingPrice: "From $17/mo",
      standoutFeature: "Easy lead-focused launch",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
    },
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      bestFor: "Design-first businesses",
      startingPrice: "From $16/mo",
      standoutFeature: "Polished templates",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
    },
    {
      slug: "shopify",
      name: "Shopify",
      logoSrc: getWebsiteBuilderLogoSrc("shopify"),
      bestFor: "Commerce-heavy needs",
      startingPrice: "From $39/mo",
      standoutFeature: "Best checkout stack",
      reviewHref: getWebsiteBuildersReviewUrl("shopify"),
    },
  ],
  detailedAlternatives: [
    {
      productName: "Squarespace",
      heading: "Best for polished design",
      body: "Use Squarespace when presentation quality and trust signals are your top priority.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-squarespace"),
    },
    {
      productName: "Shopify",
      heading: "Best for ecommerce",
      body: "Use Shopify when your service site also needs serious online sales capability.",
      reviewHref: getWebsiteBuildersReviewUrl("shopify"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-shopify"),
    },
    {
      productName: "Webflow",
      heading: "Best for customization",
      body: "Use Webflow when template constraints are limiting your conversion strategy.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      compareHref: getWebsiteBuildersCompareUrl("webflow-vs-wix"),
    },
  ],
  faqItems: [
    {
      q: "What is the best alternative to Wix?",
      a: "Squarespace is best for design-led sites, Shopify for ecommerce-heavy websites, and Webflow for advanced customization. Each has a full BeltStack review linked above.",
    },
    {
      q: "Is Wix better than Squarespace for contractors?",
      a: "Wix is usually easier for rapid service-page expansion; Squarespace wins for polished visual branding. Read both reviews and our Wix vs Squarespace comparison.",
    },
  ],
};

const squarespacePage: AlternativesTemplateProps = {
  ...basePage("Squarespace", "squarespace", [
    ["squarespace", "Squarespace"],
    ["wix", "Wix"],
    ["shopify", "Shopify"],
    ["webflow", "Webflow"],
    ["wordpress", "WordPress"],
    ["duda", "Duda"],
    ["godaddy-website-builder", "GoDaddy"],
    ["hostinger-website-builder", "Hostinger"],
  ]),
  title: "Best Squarespace Alternatives (2026)",
  subtitle:
    "Alternatives to Squarespace for service businesses that need stronger local lead workflows, app flexibility, or ecommerce depth.",
  topAlternatives: [
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      rating: "4.6",
      bestFor: "Overall service-business fit",
      description: "Stronger app ecosystem and local lead workflows.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-squarespace"),
      startingPrice: "From $17/mo",
    },
    {
      slug: "shopify",
      name: "Shopify",
      logoSrc: getWebsiteBuilderLogoSrc("shopify"),
      rating: "4.5",
      bestFor: "Selling online",
      description: "Best if ecommerce is central to the website strategy.",
      reviewHref: getWebsiteBuildersReviewUrl("shopify"),
      compareHref: getWebsiteBuildersCompareUrl("squarespace-vs-shopify"),
      startingPrice: "From $39/mo",
    },
    {
      slug: "webflow",
      name: "Webflow",
      logoSrc: getWebsiteBuilderLogoSrc("webflow"),
      rating: "4.3",
      bestFor: "Custom layouts",
      description: "More CMS and layout control when Squarespace feels tight.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      startingPrice: "From $14/mo",
    },
  ],
  comparisonTableRows: [
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      bestFor: "Visual design quality",
      startingPrice: "From $16/mo",
      standoutFeature: "High-end templates",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
    },
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      bestFor: "Lead-generation flexibility",
      startingPrice: "From $17/mo",
      standoutFeature: "App and workflow breadth",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
    },
    {
      slug: "shopify",
      name: "Shopify",
      logoSrc: getWebsiteBuilderLogoSrc("shopify"),
      bestFor: "Commerce-heavy needs",
      startingPrice: "From $39/mo",
      standoutFeature: "Checkout and storefront",
      reviewHref: getWebsiteBuildersReviewUrl("shopify"),
    },
  ],
  detailedAlternatives: [
    {
      productName: "Wix",
      heading: "Best overall alternative",
      body: "Wix is typically easier for local SEO and operational website updates.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-squarespace"),
    },
    {
      productName: "Shopify",
      heading: "Best for commerce",
      body: "Shopify is better when transactions and online selling are central.",
      reviewHref: getWebsiteBuildersReviewUrl("shopify"),
      compareHref: getWebsiteBuildersCompareUrl("squarespace-vs-shopify"),
    },
    {
      productName: "Webflow",
      heading: "Best for design systems",
      body: "Pick Webflow when you need structured CMS fields and component-level control.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      compareHref: getWebsiteBuildersCompareUrl("webflow-vs-wix"),
    },
  ],
  faqItems: [
    {
      q: "What is better than Squarespace for local lead generation?",
      a: "Wix is often stronger for local lead workflows and app extensibility. Read our Wix review and Squarespace review, then compare them side by side.",
    },
    {
      q: "Where is the Squarespace review?",
      a: "Use the Software reviews list in Related resources on this page, or jump to our full Squarespace review from the hero link.",
    },
  ],
};

const shopifyPage: AlternativesTemplateProps = {
  ...basePage("Shopify", "shopify", [
    ["shopify", "Shopify"],
    ["wix", "Wix"],
    ["squarespace", "Squarespace"],
    ["webflow", "Webflow"],
    ["wordpress", "WordPress"],
    ["duda", "Duda"],
    ["godaddy-website-builder", "GoDaddy"],
    ["hostinger-website-builder", "Hostinger"],
  ]),
  title: "Best Shopify Alternatives (2026)",
  subtitle:
    "Shopify alternatives for service businesses that care more about lead generation and content than full ecommerce infrastructure.",
  topAlternatives: [
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      rating: "4.6",
      bestFor: "Service-focused websites",
      description: "More straightforward for quote forms and service-page SEO.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-shopify"),
      startingPrice: "From $17/mo",
    },
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      rating: "4.4",
      bestFor: "Presentation-first brands",
      description: "Better for design-forward service businesses that do limited ecommerce.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      compareHref: getWebsiteBuildersCompareUrl("squarespace-vs-shopify"),
      startingPrice: "From $16/mo",
    },
    {
      slug: "webflow",
      name: "Webflow",
      logoSrc: getWebsiteBuilderLogoSrc("webflow"),
      rating: "4.3",
      bestFor: "Custom merchandising",
      description: "When you still want cart-like flows but heavier brand control.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      startingPrice: "From $14/mo",
    },
  ],
  comparisonTableRows: [
    {
      slug: "shopify",
      name: "Shopify",
      logoSrc: getWebsiteBuilderLogoSrc("shopify"),
      bestFor: "Commerce-heavy operations",
      startingPrice: "From $39/mo",
      standoutFeature: "Checkout and storefront power",
      reviewHref: getWebsiteBuildersReviewUrl("shopify"),
    },
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      bestFor: "Service leads",
      startingPrice: "From $17/mo",
      standoutFeature: "Fast local service setup",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
    },
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      bestFor: "Design + light commerce",
      startingPrice: "From $16/mo",
      standoutFeature: "Polished commerce pages",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
    },
  ],
  detailedAlternatives: [
    {
      productName: "Wix",
      heading: "Best lead-gen alternative",
      body: "Pick Wix if your site is primarily for calls, forms, and local trust content.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-shopify"),
    },
    {
      productName: "Squarespace",
      heading: "Best design-led hybrid",
      body: "Squarespace fits shops with smaller catalogs and high visual trust needs.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      compareHref: getWebsiteBuildersCompareUrl("squarespace-vs-shopify"),
    },
    {
      productName: "Webflow",
      heading: "Best for bespoke UX",
      body: "Webflow helps when product pages need custom layouts and CMS rigor.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      compareHref: getWebsiteBuildersCompareUrl("webflow-vs-wix"),
    },
  ],
  faqItems: [
    {
      q: "When should service businesses avoid Shopify?",
      a: "If you do little online selling and mainly need local lead generation, lower-complexity builders can be a better fit—start with our Wix or Squarespace reviews.",
    },
    {
      q: "Do these alternatives link to full reviews?",
      a: "Yes. Every top pick includes a “Read review” link, and Related resources lists matching software review URLs for internal navigation.",
    },
  ],
};

const webflowPage: AlternativesTemplateProps = {
  ...basePage("Webflow", "webflow", [
    ["webflow", "Webflow"],
    ["wix", "Wix"],
    ["duda", "Duda"],
    ["squarespace", "Squarespace"],
    ["wordpress", "WordPress"],
    ["shopify", "Shopify"],
    ["godaddy-website-builder", "GoDaddy"],
    ["hostinger-website-builder", "Hostinger"],
  ]),
  title: "Best Webflow Alternatives (2026)",
  subtitle:
    "Webflow alternatives for teams that want easier operations, faster publishing, or lower learning curve.",
  topAlternatives: [
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      rating: "4.6",
      bestFor: "Fast non-technical operations",
      description: "Easier for owner-operators and small teams to maintain.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("webflow-vs-wix"),
      startingPrice: "From $17/mo",
    },
    {
      slug: "duda",
      name: "Duda",
      logoSrc: getWebsiteBuilderLogoSrc("duda"),
      rating: "4.2",
      bestFor: "Agency-managed sites",
      description: "Strong team workflows without Webflow complexity.",
      reviewHref: getWebsiteBuildersReviewUrl("duda"),
      compareHref: getWebsiteBuildersCompareUrl("duda-vs-wix"),
      startingPrice: "From $19/mo",
    },
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      rating: "4.4",
      bestFor: "Template polish",
      description: "Less engineering time than Webflow for premium visuals.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      startingPrice: "From $16/mo",
    },
  ],
  comparisonTableRows: [
    {
      slug: "webflow",
      name: "Webflow",
      logoSrc: getWebsiteBuilderLogoSrc("webflow"),
      bestFor: "Advanced custom design",
      startingPrice: "From $14/mo",
      standoutFeature: "Deep design control",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
    },
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      bestFor: "Operational simplicity",
      startingPrice: "From $17/mo",
      standoutFeature: "Faster non-technical publishing",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
    },
    {
      slug: "duda",
      name: "Duda",
      logoSrc: getWebsiteBuilderLogoSrc("duda"),
      bestFor: "Agency rollouts",
      startingPrice: "From $19/mo",
      standoutFeature: "Multi-site workflows",
      reviewHref: getWebsiteBuildersReviewUrl("duda"),
    },
  ],
  detailedAlternatives: [
    {
      productName: "Wix",
      heading: "Best simple alternative",
      body: "Choose Wix for faster site operations and easier editor onboarding.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("webflow-vs-wix"),
    },
    {
      productName: "Duda",
      heading: "Best agency alternative",
      body: "Duda is easier for rolling templated sites to many clients or franchise locations.",
      reviewHref: getWebsiteBuildersReviewUrl("duda"),
      compareHref: getWebsiteBuildersCompareUrl("duda-vs-wix"),
    },
    {
      productName: "Squarespace",
      heading: "Best visual compromise",
      body: "Squarespace trades some Webflow power for calmer maintenance and nicer defaults.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-squarespace"),
    },
  ],
  faqItems: [
    {
      q: "What is easier than Webflow for local businesses?",
      a: "Wix and Duda are both easier for non-technical teams while still supporting strong service-business websites—open their reviews from this page.",
    },
    {
      q: "How do I compare Webflow vs Wix directly?",
      a: "Use our Webflow vs Wix comparison in Related comparisons, then read each product’s full review.",
    },
  ],
};

const godaddyPage: AlternativesTemplateProps = {
  ...basePage("GoDaddy", "godaddy-website-builder", [
    ["godaddy-website-builder", "GoDaddy"],
    ["wix", "Wix"],
    ["hostinger-website-builder", "Hostinger"],
    ["squarespace", "Squarespace"],
    ["wordpress", "WordPress"],
    ["webflow", "Webflow"],
    ["shopify", "Shopify"],
    ["duda", "Duda"],
  ]),
  title: "Best GoDaddy Website Builder Alternatives (2026)",
  subtitle:
    "GoDaddy alternatives when you need more marketing depth, design polish, or room to grow beyond a bare-bones launch.",
  topAlternatives: [
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      rating: "4.6",
      bestFor: "Marketing + lead workflows",
      description: "More apps and flexibility for SEO, forms, and automation.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-wix"),
      startingPrice: "From $17/mo",
    },
    {
      slug: "hostinger-website-builder",
      name: "Hostinger",
      logoSrc: getWebsiteBuilderLogoSrc("hostinger-website-builder"),
      rating: "4.0",
      bestFor: "Budget + hosting bundle",
      description: "Similar frugal positioning with different renewal economics.",
      reviewHref: getWebsiteBuildersReviewUrl("hostinger-website-builder"),
      compareHref: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder"),
      startingPrice: "From $3/mo (promo)",
    },
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      rating: "4.4",
      bestFor: "Premium visuals",
      description: "Stronger default aesthetics when GoDaddy templates feel generic.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      startingPrice: "From $16/mo",
    },
    {
      slug: "wordpress",
      name: "WordPress",
      logoSrc: getWebsiteBuilderLogoSrc("wordpress"),
      rating: "4.2",
      bestFor: "Content-heavy SEO",
      description: "Long-form publishing and plugin depth when you will maintain the stack.",
      reviewHref: getWebsiteBuildersReviewUrl("wordpress"),
      startingPrice: "From $9/mo (hosted)",
    },
  ],
  comparisonTableRows: [
    {
      slug: "godaddy-website-builder",
      name: "GoDaddy",
      logoSrc: getWebsiteBuilderLogoSrc("godaddy-website-builder"),
      bestFor: "Fast minimal launch",
      startingPrice: "From $10/mo",
      standoutFeature: "Low-friction setup",
      reviewHref: getWebsiteBuildersReviewUrl("godaddy-website-builder"),
    },
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      bestFor: "Growth runway",
      startingPrice: "From $17/mo",
      standoutFeature: "App ecosystem",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
    },
    {
      slug: "hostinger-website-builder",
      name: "Hostinger",
      logoSrc: getWebsiteBuilderLogoSrc("hostinger-website-builder"),
      bestFor: "Budget stack",
      startingPrice: "From $3/mo (promo)",
      standoutFeature: "Bundled hosting value",
      reviewHref: getWebsiteBuildersReviewUrl("hostinger-website-builder"),
    },
  ],
  detailedAlternatives: [
    {
      productName: "Wix",
      heading: "Best upgrade path",
      body: "Move to Wix when you need booking apps, marketing automation, and deeper local SEO patterns.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-wix"),
    },
    {
      productName: "Hostinger",
      heading: "Best budget compare",
      body: "Hostinger mirrors bundle pricing—read GoDaddy vs Hostinger alongside both reviews.",
      reviewHref: getWebsiteBuildersReviewUrl("hostinger-website-builder"),
      compareHref: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder"),
    },
    {
      productName: "WordPress",
      heading: "Best for editorial SEO",
      body: "WordPress wins when you invest in guides, clusters, and ongoing content operations.",
      reviewHref: getWebsiteBuildersReviewUrl("wordpress"),
    },
  ],
  faqItems: [
    {
      q: "Is GoDaddy bad for SEO?",
      a: "It handles basics; rankings still depend on content and authority. Read our GoDaddy review and compare it with Wix if SEO is your top priority.",
    },
    {
      q: "Where is the GoDaddy review?",
      a: "Use “Read our GoDaddy review” in the hero, or open the GoDaddy review link under Related resources.",
    },
  ],
};

const dudaPage: AlternativesTemplateProps = {
  ...basePage("Duda", "duda", [
    ["duda", "Duda"],
    ["wix", "Wix"],
    ["webflow", "Webflow"],
    ["squarespace", "Squarespace"],
    ["wordpress", "WordPress"],
    ["shopify", "Shopify"],
    ["godaddy-website-builder", "GoDaddy"],
    ["hostinger-website-builder", "Hostinger"],
  ]),
  title: "Best Duda Alternatives (2026)",
  subtitle:
    "Duda alternatives for owner-operators or small teams that do not need multi-site agency workflows—or want different pricing flexibility.",
  topAlternatives: [
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      rating: "4.6",
      bestFor: "Single-site operators",
      description: "Easier day-to-day editing without client-management overhead.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("duda-vs-wix"),
      startingPrice: "From $17/mo",
    },
    {
      slug: "webflow",
      name: "Webflow",
      logoSrc: getWebsiteBuilderLogoSrc("webflow"),
      rating: "4.3",
      bestFor: "Design-led teams",
      description: "Deep layout/CMS control when Duda’s templates feel limiting.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      compareHref: getWebsiteBuildersCompareUrl("webflow-vs-wix"),
      startingPrice: "From $14/mo",
    },
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      rating: "4.4",
      bestFor: "Polished SMB sites",
      description: "Less operational complexity than Webflow for premium visuals.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      startingPrice: "From $16/mo",
    },
    {
      slug: "wordpress",
      name: "WordPress",
      logoSrc: getWebsiteBuilderLogoSrc("wordpress"),
      rating: "4.2",
      bestFor: "Plugin ecosystems",
      description: "Maximum extensibility when you accept maintenance work.",
      reviewHref: getWebsiteBuildersReviewUrl("wordpress"),
      startingPrice: "From $9/mo (hosted)",
    },
  ],
  comparisonTableRows: [
    {
      slug: "duda",
      name: "Duda",
      logoSrc: getWebsiteBuilderLogoSrc("duda"),
      bestFor: "Agency & multi-site",
      startingPrice: "From $19/mo",
      standoutFeature: "Client workflows",
      reviewHref: getWebsiteBuildersReviewUrl("duda"),
    },
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      bestFor: "Owner-managed sites",
      startingPrice: "From $17/mo",
      standoutFeature: "App breadth",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
    },
    {
      slug: "webflow",
      name: "Webflow",
      logoSrc: getWebsiteBuilderLogoSrc("webflow"),
      bestFor: "Custom experience",
      startingPrice: "From $14/mo",
      standoutFeature: "Visual dev canvas",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
    },
  ],
  detailedAlternatives: [
    {
      productName: "Wix",
      heading: "Best for most SMBs",
      body: "If you manage one brand—not fifty client instances—Wix is usually simpler.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("duda-vs-wix"),
    },
    {
      productName: "Webflow",
      heading: "Best for bespoke builds",
      body: "Design-led organizations that need precise components often pick Webflow over templated agency tools.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      compareHref: getWebsiteBuildersCompareUrl("webflow-vs-wix"),
    },
    {
      productName: "WordPress",
      heading: "Best for editorial scale",
      body: "WordPress still wins for heavy blogging and integration-heavy stacks.",
      reviewHref: getWebsiteBuildersReviewUrl("wordpress"),
    },
  ],
  faqItems: [
    {
      q: "Is Duda only for agencies?",
      a: "It shines for agencies and multi-location brands, but single businesses can use it too. Compare our Duda review with Wix if you only run one site.",
    },
    {
      q: "Duda vs Wix—where is the comparison?",
      a: "See Related comparisons on this page for Duda vs Wix, then open each product’s review for pricing and feature depth.",
    },
  ],
};

const wordpressPage: AlternativesTemplateProps = {
  ...basePage("WordPress", "wordpress", [
    ["wordpress", "WordPress"],
    ["wix", "Wix"],
    ["squarespace", "Squarespace"],
    ["webflow", "Webflow"],
    ["hostinger-website-builder", "Hostinger"],
    ["shopify", "Shopify"],
    ["duda", "Duda"],
    ["godaddy-website-builder", "GoDaddy"],
  ]),
  title: "Best WordPress Alternatives (2026)",
  subtitle:
    "Hosted and self-hosted WordPress alternatives when you want less maintenance, faster editing, or fewer plugins.",
  topAlternatives: [
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      rating: "4.6",
      bestFor: "Low-maintenance SMB sites",
      description: "Fewer update and security tasks for typical service-business sites.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      startingPrice: "From $17/mo",
    },
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      rating: "4.4",
      bestFor: "Design + light content",
      description: "Polished templates without a plugin stack.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      startingPrice: "From $16/mo",
    },
    {
      slug: "webflow",
      name: "Webflow",
      logoSrc: getWebsiteBuilderLogoSrc("webflow"),
      rating: "4.3",
      bestFor: "CMS control, hosted",
      description: "Structured CMS without PHP plugins when you have design help.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      startingPrice: "From $14/mo",
    },
    {
      slug: "hostinger-website-builder",
      name: "Hostinger",
      logoSrc: getWebsiteBuilderLogoSrc("hostinger-website-builder"),
      rating: "4.0",
      bestFor: "Budget hosting path",
      description: "If you might return to WordPress later, Hostinger keeps hosting under one roof.",
      reviewHref: getWebsiteBuildersReviewUrl("hostinger-website-builder"),
      compareHref: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix"),
      startingPrice: "From $3/mo (promo)",
    },
  ],
  comparisonTableRows: [
    {
      slug: "wordpress",
      name: "WordPress",
      logoSrc: getWebsiteBuilderLogoSrc("wordpress"),
      bestFor: "Editorial + plugins",
      startingPrice: "From $9/mo (hosted)",
      standoutFeature: "Extensible CMS",
      reviewHref: getWebsiteBuildersReviewUrl("wordpress"),
    },
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      bestFor: "All-in-one builder",
      startingPrice: "From $17/mo",
      standoutFeature: "Ops simplicity",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
    },
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      bestFor: "Visual trust",
      startingPrice: "From $16/mo",
      standoutFeature: "Template quality",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
    },
  ],
  detailedAlternatives: [
    {
      productName: "Wix",
      heading: "Best low-ops alternative",
      body: "Pick Wix when you want lead-gen depth without plugin maintenance schedules.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("wix-vs-squarespace"),
    },
    {
      productName: "Squarespace",
      heading: "Best visual compromise",
      body: "Squarespace gives premium aesthetics with predictable hosted maintenance.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
    },
    {
      productName: "Webflow",
      heading: "Best structured CMS",
      body: "Webflow replaces many WordPress use cases when collections and components matter.",
      reviewHref: getWebsiteBuildersReviewUrl("webflow"),
      compareHref: getWebsiteBuildersCompareUrl("webflow-vs-wix"),
    },
  ],
  faqItems: [
    {
      q: "Is WordPress worse than Wix for contractors?",
      a: "Not worse—different. WordPress rewards content investment; Wix rewards operational simplicity. Read both reviews and our Website builders vs WordPress guide in /website-builders/guides.",
    },
    {
      q: "Does this page cover WordPress.com and WordPress.org?",
      a: "Our WordPress review explains the hosted vs self-hosted split; alternatives here assume you want a more managed builder experience.",
    },
  ],
};

const hostingerPage: AlternativesTemplateProps = {
  ...basePage("Hostinger", "hostinger-website-builder", [
    ["hostinger-website-builder", "Hostinger"],
    ["wix", "Wix"],
    ["godaddy-website-builder", "GoDaddy"],
    ["wordpress", "WordPress"],
    ["squarespace", "Squarespace"],
    ["webflow", "Webflow"],
    ["shopify", "Shopify"],
    ["duda", "Duda"],
  ]),
  title: "Best Hostinger Website Builder Alternatives (2026)",
  subtitle:
    "Hostinger alternatives when you outgrow ultra-budget bundles or need richer marketing apps and design polish.",
  topAlternatives: [
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      rating: "4.6",
      bestFor: "Marketing depth",
      description: "Stronger ecosystem when renewals push Hostinger closer to mid-tier cost.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix"),
      startingPrice: "From $17/mo",
    },
    {
      slug: "godaddy-website-builder",
      name: "GoDaddy",
      logoSrc: getWebsiteBuilderLogoSrc("godaddy-website-builder"),
      rating: "4.1",
      bestFor: "Similar speed to launch",
      description: "Another domain-and-site bundle competitor—compare renewals carefully.",
      reviewHref: getWebsiteBuildersReviewUrl("godaddy-website-builder"),
      compareHref: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder"),
      startingPrice: "From $10/mo",
    },
    {
      slug: "wordpress",
      name: "WordPress",
      logoSrc: getWebsiteBuilderLogoSrc("wordpress"),
      rating: "4.2",
      bestFor: "Content SEO ceiling",
      description: "Hostinger also sells WordPress hosting—read the WordPress review if you pivot.",
      reviewHref: getWebsiteBuildersReviewUrl("wordpress"),
      startingPrice: "From $9/mo (hosted)",
    },
    {
      slug: "squarespace",
      name: "Squarespace",
      logoSrc: getWebsiteBuilderLogoSrc("squarespace"),
      rating: "4.4",
      bestFor: "Brand polish",
      description: "Upgrade visuals without jumping straight to Webflow pricing.",
      reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
      startingPrice: "From $16/mo",
    },
  ],
  comparisonTableRows: [
    {
      slug: "hostinger-website-builder",
      name: "Hostinger",
      logoSrc: getWebsiteBuilderLogoSrc("hostinger-website-builder"),
      bestFor: "Budget launch",
      startingPrice: "From $3/mo (promo)",
      standoutFeature: "Bundle pricing",
      reviewHref: getWebsiteBuildersReviewUrl("hostinger-website-builder"),
    },
    {
      slug: "wix",
      name: "Wix",
      logoSrc: getWebsiteBuilderLogoSrc("wix"),
      bestFor: "Growth features",
      startingPrice: "From $17/mo",
      standoutFeature: "App ecosystem",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
    },
    {
      slug: "godaddy-website-builder",
      name: "GoDaddy",
      logoSrc: getWebsiteBuilderLogoSrc("godaddy-website-builder"),
      bestFor: "Quick brochure sites",
      startingPrice: "From $10/mo",
      standoutFeature: "Simplicity",
      reviewHref: getWebsiteBuildersReviewUrl("godaddy-website-builder"),
    },
  ],
  detailedAlternatives: [
    {
      productName: "Wix",
      heading: "Best marketing upgrade",
      body: "Choose Wix when you need automations, richer forms, and faster iteration.",
      reviewHref: getWebsiteBuildersReviewUrl("wix"),
      compareHref: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix"),
    },
    {
      productName: "GoDaddy",
      heading: "Best bundle-to-bundle compare",
      body: "Evaluate Hostinger vs GoDaddy renewals alongside these reviews before you commit long term.",
      reviewHref: getWebsiteBuildersReviewUrl("godaddy-website-builder"),
      compareHref: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder"),
    },
    {
      productName: "WordPress",
      heading: "Best content ceiling",
      body: "WordPress remains the power-user CMS when SEO publishing is the strategy.",
      reviewHref: getWebsiteBuildersReviewUrl("wordpress"),
    },
  ],
  faqItems: [
    {
      q: "Hostinger vs Wix—where should I start?",
      a: "Read our Hostinger review and Wix review, then open Hostinger vs Wix in Related comparisons.",
    },
    {
      q: "Are Hostinger alternatives linked to reviews?",
      a: "Yes—Related resources lists every BeltStack website builder review URL so you can match alternatives with deep dives.",
    },
  ],
};

const pages: Record<string, AlternativesTemplateProps> = {
  wix: wixPage,
  squarespace: squarespacePage,
  shopify: shopifyPage,
  webflow: webflowPage,
  "godaddy-website-builder": godaddyPage,
  duda: dudaPage,
  wordpress: wordpressPage,
  "hostinger-website-builder": hostingerPage,
};

export function getWebsiteBuildersAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getWebsiteBuildersAlternativesSlugs(): string[] {
  return Object.keys(pages);
}

export function getWebsiteBuildersAlternativePath(slug: string): string {
  return getWebsiteBuildersAlternativeUrl(slug);
}

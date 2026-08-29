import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { getPosBestForUrl } from "@/lib/routes";
import { getPosTradeBestForHubCards } from "@/lib/data/posBestForTrades";

const ROUNDUP = {
  label: "Best POS software overall",
  href: "/pos/best-pos-software",
  description:
    "Full rankings for registers, payments, inventory, and omnichannel selling across retail, restaurants, and service businesses.",
} as const;

const GENERAL_CARDS = [
  {
    label: "Best POS software for small business",
    href: getPosBestForUrl("small-business"),
    description:
      "Top POS systems for small businesses that want simple setup, transparent pricing, and integrated payments without long-term contracts.",
  },
  {
    label: "Best POS software for retail",
    href: getPosBestForUrl("retail"),
    description:
      "POS tools for retailers that need inventory management, reporting, and multi-location support to keep shelves stocked and understand what sells.",
  },
  {
    label: "Best POS software for restaurants",
    href: getPosBestForUrl("restaurants"),
    description:
      "Restaurant POS systems with table management, kitchen display, online ordering, and reporting built for food service.",
  },
  {
    label: "Best POS software for ecommerce",
    href: getPosBestForUrl("ecommerce"),
    description:
      "POS that unifies online and in-store sales so inventory and orders stay in sync across your storefront and register.",
  },
  {
    label: "Best POS software for multi-location",
    href: getPosBestForUrl("multi-location"),
    description:
      "POS systems that support multiple stores with centralized or per-location inventory and consolidated reporting.",
  },
];

export default function PosBestForIndexPage() {
  return (
    <BestForHubTemplate
      categoryLabel="POS Software"
      categoryHref="/pos"
      breadcrumbCurrent="Best for"
      title="Best POS Software by Use Case"
      intro="Find POS software by operation type—small business, retail, restaurants, ecommerce, and multi-location—plus trade-specific picks for HVAC, plumbing, construction, property management, appliance repair, auto repair, event services, home inspectors, and more."
      roundupLink={ROUNDUP}
      generalCards={GENERAL_CARDS}
      tradeCards={getPosTradeBestForHubCards()}
      cardCta="See picks →"
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best POS Software by Use Case | BeltStack",
    description:
      "Browse POS software picks by use case and trade: small business, retail, restaurants, ecommerce, multi-location, HVAC, plumbing, construction, property management, appliance repair, garage door, locksmith, flooring, auto repair, mobile mechanics, cleaning franchises, event services, home inspectors, and more.",
    keywords: [
      "best POS by use case",
      "POS software for contractors",
      "retail POS",
      "restaurant POS",
      "trade business POS",
      "small business point of sale",
    ],
  };
}

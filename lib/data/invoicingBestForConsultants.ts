import { getInvoicingReviewUrl, getInvoicingCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/invoicing", label: "Invoicing" };
const SEE_ALSO = {
  roundupLabel: "best invoicing software roundup",
  roundupHref: "/invoicing/best-invoicing-software",
  compareLabel: "invoicing software comparisons",
  compareHref: "/invoicing/compare",
};

export const CONSULTANTS_PAGE_PROPS = {
  title: "Best Invoicing Software for Consultants (2026)",
  subtitle:
    "Compare invoicing software built for consultants: service billing, proposals, retainers, recurring invoices, simple client management, and online payments.",
  useCase: "consultants",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Consultants need invoicing software that supports service billing, proposals, retainers, and recurring invoices without complexity. Our picks below combine invoicing with client management and online payments so you can look professional and get paid on time.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top invoicing picks for consultants.",
  editorialSub: "What to look for when you're choosing invoicing software as a consultant.",
  whyThesePicksSub: "Why we chose these tools for consultants.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "freshbooks",
      name: "FreshBooks",
      badge: "Best overall for consultants",
      description:
        "Invoicing, time tracking, and client billing in one package. Easy to use for service billing, retainers, and recurring invoices.",
      rating: "4.5",
      startingPrice: "$19/mo",
      reviewHref: getInvoicingReviewUrl("freshbooks"),
      visitUrl: "https://www.freshbooks.com",
      logoSrc: "/Logos/freshbooks.jpeg",
    },
    {
      slug: "bonsai",
      name: "Bonsai",
      badge: "Best for solo consultants",
      description:
        "Proposals, contracts, and invoicing in one place. Ideal for solo consultants who want a simple all-in-one client workflow.",
      rating: "4.3",
      startingPrice: "Quote",
      reviewHref: getInvoicingReviewUrl("bonsai"),
      visitUrl: "https://www.hellobonsai.com",
      logoSrc: "/Logos/bonsai.jpeg",
    },
    {
      slug: "honeybook",
      name: "HoneyBook",
      badge: "Best for client workflow management",
      description:
        "Proposals, contracts, and invoicing in one pipeline. Strong for consultants who run on client projects and need a full client journey.",
      rating: "4.4",
      startingPrice: "Quote",
      reviewHref: getInvoicingReviewUrl("honeybook"),
      visitUrl: "https://www.honeybook.com",
      logoSrc: "/Logos/honeybook.jpeg",
    },
    {
      slug: "wave",
      name: "Wave",
      badge: "Best free option",
      description:
        "Free core invoicing and receipt scanning. Good for consultants who want to minimize software cost while sending professional invoices.",
      rating: "4.3",
      startingPrice: "Free",
      reviewHref: getInvoicingReviewUrl("wave"),
      visitUrl: "https://www.waveapps.com",
      logoSrc: "/Logos/wave.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "freshbooks", name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", bestFor: "Best overall for consultants", startingPrice: "$19/mo", standoutFeature: "Invoicing, time tracking, retainers", reviewHref: getInvoicingReviewUrl("freshbooks") },
    { slug: "bonsai", name: "Bonsai", logoSrc: "/Logos/bonsai.jpeg", bestFor: "Solo consultants", startingPrice: "Quote", standoutFeature: "Proposals, contracts, invoicing", reviewHref: getInvoicingReviewUrl("bonsai") },
    { slug: "honeybook", name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", bestFor: "Client workflow", startingPrice: "Quote", standoutFeature: "Proposals, contracts, invoicing", reviewHref: getInvoicingReviewUrl("honeybook") },
    { slug: "wave", name: "Wave", logoSrc: "/Logos/wave.jpeg", bestFor: "Best free", startingPrice: "Free", standoutFeature: "Free core invoicing", reviewHref: getInvoicingReviewUrl("wave") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Service billing and retainers", body: "Look for software that supports recurring invoices for retainers, clear payment tracking, and professional invoice templates. FreshBooks and Bonsai both excel here; HoneyBook adds a full client pipeline; Wave keeps cost at zero." },
    { heading: "Proposals and client management", body: "Consultants often send proposals before invoicing. Bonsai and HoneyBook are built for proposals and contracts first, then invoicing. FreshBooks offers estimates that convert to invoices. Choose based on how formal your engagement process is." },
    { heading: "Online payments", body: "Payment links and online collection reduce follow-up and get you paid faster. All of our picks support online payments; compare fees and supported methods (card, ACH) when choosing." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    { heading: "FreshBooks", body: "FreshBooks is our top pick for most consultants: straightforward invoicing, time tracking, and client billing. Retainers and recurring invoices are easy to set up; the interface stays simple." },
    { heading: "Bonsai", body: "Bonsai combines proposals, contracts, and invoicing for solo consultants. It’s a strong fit for consultants who want one place for the full client workflow." },
    { heading: "HoneyBook", body: "HoneyBook is built for client-heavy workflows: proposals, contracts, and invoicing in one pipeline. Ideal for consultants who run on projects and need a polished client journey." },
    { heading: "Wave", body: "Wave gives you free core invoicing so you can minimize software cost. It’s a solid choice for consultants who want to keep overhead low while still sending professional invoices." },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "FreshBooks", href: getInvoicingReviewUrl("freshbooks") },
    { name: "Bonsai", href: getInvoicingReviewUrl("bonsai") },
    { name: "HoneyBook", href: getInvoicingReviewUrl("honeybook") },
    { name: "Wave", href: getInvoicingReviewUrl("wave") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "FreshBooks vs QuickBooks", href: getInvoicingCompareUrl("freshbooks-vs-quickbooks") },
    { label: "HoneyBook vs Bonsai", href: getInvoicingCompareUrl("honeybook-vs-bonsai") },
  ] as BestForComparisonLink[],

  faqItems: [
    { q: "What is the best invoicing software for consultants?", a: "FreshBooks is our top pick for most consultants: invoicing, time tracking, and retainers in one place. Bonsai is best for solo consultants who want proposals and contracts; HoneyBook is best for client workflow management; Wave is the best free option." },
    { q: "Do consultants need proposals and contracts in their invoicing tool?", a: "Many consultants benefit from having proposals and contracts in the same tool as invoicing so the client journey is seamless. Bonsai and HoneyBook are built for this; FreshBooks offers estimates that convert to invoices." },
    { q: "How do I set up retainer billing?", a: "Use recurring invoices set to your retainer frequency (e.g. monthly). FreshBooks, Bonsai, HoneyBook, and Wave all support recurring billing. Set up the schedule once and the software sends and tracks invoices automatically." },
    { q: "Is there free invoicing software for consultants?", a: "Yes. Wave offers free core invoicing and receipt scanning. It’s a good option for consultants who want to minimize cost; paid tools like FreshBooks and Bonsai add more features and client capacity." },
  ] as BestForFaqItem[],
};

import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { BestForTemplate } from "@/components/best/BestForTemplate";
import type { BestForTemplateProps, BestForFeaturedProduct } from "@/components/best/BestForTemplate";
import { enrichBestForTemplateProps } from "@/lib/bestFor/enrichRelatedComparisons";
import { overlayVerifiedStartingPriceFromHref } from "@/lib/data/verifiedStartingPrices";
import { applyCrmCanonicalBestForProps } from "@/lib/data/crmCanonicalRating";

function itemListSchemaForBestFor(
  title: string,
  featuredProducts: BestForFeaturedProduct[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    numberOfItems: featuredProducts.length,
    itemListElement: featuredProducts.map((p, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      item: {
        "@type": "SoftwareApplication" as const,
        name: p.name,
        applicationCategory: "BusinessApplication" as const,
        url: `${SITE_URL}${p.reviewHref}`,
      },
    })),
  };
}

/** Server component: renders ItemList JSON-LD + BestForTemplate for best-for pages. */
export function BestForPageWithStructuredData(props: BestForTemplateProps) {
  const withPrices: BestForTemplateProps = {
    ...props,
    featuredProducts: props.featuredProducts.map((product) => ({
      ...product,
      startingPrice: overlayVerifiedStartingPriceFromHref(
        product.slug,
        product.startingPrice,
        props.categoryHref
      ),
    })),
    comparisonTableRows: props.comparisonTableRows.map((row) => ({
      ...row,
      startingPrice: overlayVerifiedStartingPriceFromHref(
        row.slug,
        row.startingPrice,
        props.categoryHref
      ),
    })),
  };
  const canonical =
    props.categoryHref === "/crm" ? applyCrmCanonicalBestForProps(withPrices) : withPrices;
  const enriched = enrichBestForTemplateProps(canonical);
  return (
    <>
      <StructuredData data={itemListSchemaForBestFor(enriched.title, enriched.featuredProducts)} />
      <BestForTemplate {...enriched} />
    </>
  );
}

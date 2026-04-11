import { SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import { BestForTemplate } from "@/components/best/BestForTemplate";
import type { BestForTemplateProps, BestForFeaturedProduct } from "@/components/best/BestForTemplate";
import { enrichBestForTemplateProps } from "@/lib/bestFor/enrichRelatedComparisons";

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
  const enriched = enrichBestForTemplateProps(props);
  return (
    <>
      <StructuredData data={itemListSchemaForBestFor(enriched.title, enriched.featuredProducts)} />
      <BestForTemplate {...enriched} />
    </>
  );
}

/**
 * SoftwareApplication JSON-LD without AggregateRating.
 * BeltStack scores are a single editorial evaluation, not an aggregated
 * user-review average — those belong on Review + Rating in ReviewTemplate.
 */
export function softwareApplicationJsonLd(input: {
  name: string;
  url: string;
  description?: string;
  applicationCategory?: string;
  offers?: { price: string; priceCurrency?: string };
}): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    applicationCategory: input.applicationCategory ?? "BusinessApplication",
    operatingSystem: "Web",
    url: input.url,
  };
  if (input.description) schema.description = input.description;
  if (input.offers) {
    schema.offers = {
      "@type": "Offer",
      price: input.offers.price,
      priceCurrency: input.offers.priceCurrency ?? "USD",
      url: input.url,
    };
  }
  return schema;
}

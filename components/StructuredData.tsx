/**
 * Renders JSON-LD structured data for SEO.
 * Use with schema.org types: SoftwareApplication, ItemList, etc.
 */
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

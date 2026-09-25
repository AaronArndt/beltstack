import { serializePricingStudyCsv, PRICING_STUDY_CSV_FILENAME } from "@/lib/research/pricing/publication";

export const dynamic = "force-static";

export function GET() {
  const csv = serializePricingStudyCsv();
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${PRICING_STUDY_CSV_FILENAME}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

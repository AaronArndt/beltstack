import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing Software for Local Service Businesses (2026)",
  description:
    "Compare email marketing platforms for contractors and home services—reviews, comparisons, guides, automation picks, and scenario shortlists.",
};

export default function EmailMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

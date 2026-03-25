import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Tracking Software for Local Service Businesses (2026)",
  description:
    "Compare call tracking for contractors and home services—reviews, comparisons, guides, and scenario picks for marketing attribution and CRM-ready reporting.",
};

export default function CallTrackingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best HR Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best HR software for small businesses: payroll integration, onboarding, compliance support, and HR solutions. Top picks and side-by-side comparisons.",
};

export default function BestHrSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

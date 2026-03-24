import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best HR Software for Small Businesses (2026) | BeltStack",
  description:
    "2026 best HR software for small businesses—onboarding, payroll handoffs, compliance, reviews, and HR software comparisons.",
};

export default function BestHrSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best HR software for small businesses, startups, and growing teams. Payroll, benefits, hiring, onboarding, and compliance.",
};

export default function HrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

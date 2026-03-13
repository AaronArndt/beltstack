import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Scheduling Software (2026) | BeltStack",
  description:
    "Compare the best scheduling software for freelancers, consultants, service businesses, and teams.",
};

export default function BestSchedulingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

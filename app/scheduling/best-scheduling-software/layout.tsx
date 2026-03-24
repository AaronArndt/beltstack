import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Scheduling Software (2026) | BeltStack",
  description:
    "2026 best scheduling and appointment software for consultants, service businesses, and teams—booking links, reminders, reviews, and comparisons.",
};

export default function BestSchedulingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

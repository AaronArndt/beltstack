import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Project Management Software (2026) | BeltStack",
  description:
    "2026 best project management software for agencies and remote teams—tasks, timelines, automation, reviews, and PM comparisons.",
};

export default function BestProjectManagementSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

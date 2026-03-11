import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Project Management Software (2026) | BeltStack",
  description:
    "Compare the best project management software for freelancers, agencies, remote teams, and small businesses. See top picks, reviews, and comparisons.",
};

export default function BestProjectManagementSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

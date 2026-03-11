import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Management Software for Small Businesses (2026)",
  description:
    "Compare the best project management software for small businesses, agencies, freelancers, startups, and remote teams. See top picks, side-by-side comparisons, and what to look for.",
};

export default function ProjectManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


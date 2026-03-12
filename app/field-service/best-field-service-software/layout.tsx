import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Field Service Management Software (2026) | BeltStack",
  description:
    "Compare the best field service management software for contractors, service companies, and field teams. See top picks for scheduling, dispatch, invoicing, and customer management.",
};

export default function BestFieldServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


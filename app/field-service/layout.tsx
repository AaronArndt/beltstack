import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Service Management Software for Contractors (2026) | BeltStack",
  description:
    "Compare the best field service management software for contractors, service companies, and field teams. Scheduling, dispatch, invoicing, and more.",
};

export default function FieldServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

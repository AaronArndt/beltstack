import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scheduling Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best scheduling software for consultants, service businesses, and teams. Appointment booking, calendar sync, and automation.",
};

export default function SchedulingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

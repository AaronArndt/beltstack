/**
 * Time tracking hub: editorial “by use case” blocks.
 * Used by app/time-tracking/page.tsx.
 */

import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { getTimeTrackingBestForUrl, getTimeTrackingCompareUrl, getTimeTrackingReviewUrl } from "@/lib/routes";

export const TIME_TRACKING_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Freelancers proving billable work",
    body: "You need frictionless timers, clean exports, and client-ready reports—without surveillance features you’ll never use. Prioritize idle detection, rounding rules, and how invoices pull from tracked time.",
    links: [
      { label: "Best time tracking for freelancers →", href: getTimeTrackingBestForUrl("freelancers") },
      { label: "Toggl Track review →", href: getTimeTrackingReviewUrl("toggl") },
    ],
  },
  {
    title: "Agencies balancing utilization and budgets",
    body: "Multi-user permissions, project budgets, and margin visibility separate agency tools from solo timers. Compare how tags roll up to clients and whether approvals are supported before you standardize on a vendor.",
    links: [
      { label: "Best time tracking for agencies →", href: getTimeTrackingBestForUrl("agencies") },
      { label: "Toggl vs Harvest →", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
    ],
  },
  {
    title: "Consultants with blended billable and non-billable work",
    body: "Classification overhead can kill adoption—look for rules that map tasks to billable buckets and reports your clients actually accept. Integration with invoicing reduces duplicate entry.",
    links: [
      { label: "Best time tracking for consultants →", href: getTimeTrackingBestForUrl("consultants") },
      { label: "Time tracking for subcontractors & 1099 (guide) →", href: "/time-tracking/guides/time-tracking-for-subcontractors-and-1099-workers" },
      { label: "Harvest review →", href: getTimeTrackingReviewUrl("harvest") },
    ],
  },
  {
    title: "Small businesses moving toward payroll and job costing",
    body: "Once time feeds payroll or job estimates, accuracy and lock periods matter more than pretty charts. Evaluate roles, edit history, and whether mobile or GPS features are necessary—or harmful to trust.",
    links: [
      { label: "Best time tracking for small business →", href: getTimeTrackingBestForUrl("small-business") },
      { label: "Job costing & time tracking for contractors (guide) →", href: "/time-tracking/guides/job-costing-time-tracking-for-contractors" },
      { label: "Geofenced time tracking for field crews (guide) →", href: "/time-tracking/guides/geofenced-time-tracking-for-field-crews" },
      { label: "Full rankings →", href: "/time-tracking/best-time-tracking-software" },
    ],
  },
  {
    title: "Distributed and remote teams",
    body: "Async work needs clear activity vs project time, fair workload visibility, and integrations with async standups or PM tools. Avoid over-monitoring; focus on outcomes and optional screenshots.",
    links: [
      { label: "Best time tracking for remote teams →", href: getTimeTrackingBestForUrl("remote-teams") },
      { label: "Hubstaff vs Time Doctor →", href: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") },
    ],
  },
];

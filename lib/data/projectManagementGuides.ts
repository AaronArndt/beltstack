/**
 * Project management guides hub and individual guide pages.
 * Same structure as payrollGuides / crmGuides.
 */

export type ProjectManagementGuideEntry = { title: string; href: string; description: string };

export const PROJECT_MANAGEMENT_GUIDES: ProjectManagementGuideEntry[] = [
  {
    title: "How to Choose Project Management Software",
    href: "/project-management/guides/how-to-choose-project-management-software",
    description:
      "Key factors when comparing project management tools: team size, views, automation, pricing, and how to avoid common mistakes.",
  },
  {
    title: "Project Management for Small Business",
    href: "/project-management/guides/project-management-for-small-business",
    description:
      "Choosing and using project management when you're a small team: features that matter, pricing, and how to get started.",
  },
  {
    title: "Project Management for Agencies",
    href: "/project-management/guides/project-management-for-agencies",
    description:
      "Project management for agencies: managing multiple clients, deliverables, and team collaboration in one place.",
  },
  {
    title: "Project Management for Remote Teams",
    href: "/project-management/guides/project-management-for-remote-teams",
    description:
      "How remote and distributed teams use project management software to stay aligned and deliver work on time.",
  },
  {
    title: "Project Management Software Pricing Guide",
    href: "/project-management/guides/project-management-pricing-guide",
    description:
      "Understand how project management tools are priced: free tiers, per-user plans, and what to expect at your team size.",
  },
  {
    title: "Kanban vs Scrum Tools",
    href: "/project-management/guides/kanban-vs-scrum-tools",
    description:
      "When to use Kanban-style boards vs Scrum-style sprints, and which project management tools support each approach.",
  },
];

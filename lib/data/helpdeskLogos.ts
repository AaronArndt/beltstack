/**
 * Helpdesk product logos only — kept separate from hub data to avoid circular imports
 * (registry → helpdeskBestSoftware must not load helpdeskHubData, which imports the registry).
 */

export const HELPDESK_LOGOS = {
  zendesk: "/Logos/zendesk.jpeg",
  freshdesk: "/Logos/freshsales.jpeg", // Freshworks; same company as Freshsales
  helpScout: "/Logos/helpscout.jpeg",
  intercom: "/Logos/intercom.png",
  zohoDesk: "/Logos/zoho.png",
  gorgias: "/Logos/gorgias.jpeg",
  liveAgent: "/Logos/liveagent.jpeg",
  kayako: "/Logos/kayako.jpeg",
  front: "/Logos/front.jpeg",
} as const;

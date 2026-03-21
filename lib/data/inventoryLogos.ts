/**
 * Inventory product logos only — separate from hub data to avoid circular imports with the software pick registry.
 */

export const INVENTORY_LOGOS = {
  zoho: "/Logos/zoho.jpeg",
  cin7: "/Logos/cin7.jpeg",
  inflow: "/Logos/inflow.jpeg",
  katana: "/Logos/katana.png",
  fishbowl: "/Logos/fishbowl.jpeg",
  sortly: "/Logos/sortly.png",
  // QuickBooks Commerce reuses the existing QuickBooks logo
  quickbooksCommerce: "/Logos/quickbooks.png",
  unleashed: "/Logos/unleashed.png",
  finale: "/Logos/finale.jpeg",
} as const;

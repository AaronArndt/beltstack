/**
 * Inventory product logos only — separate from hub data to avoid circular imports with the software pick registry.
 */

export const INVENTORY_LOGOS = {
  zoho: "/Logos/zoho.png",
  cin7: "/Logos/cin7.jpeg",
  inflow: "/Logos/inflow.jpeg",
  katana: "/Logos/katana.png",
  fishbowl: "/Logos/fishbowl.jpeg",
  sortly: "/Logos/sortly.png",
  // QuickBooks Commerce reuses the existing QuickBooks logo
  quickbooksCommerce: "/Logos/quickbooks.png",
  unleashed: "/Logos/unleashed.png",
  finale: "/Logos/finale.jpeg",
  // InventoryQuick logo is not in the repo yet. When the official file arrives, save it as
  // public/Logos/inventoryquick.png (PNG or JPEG, same folder as the other product logos)
  // and add: inventoryquick: "/Logos/inventoryquick.png",
  // Then set logoSrc: INVENTORY_LOGOS.inventoryquick on the inventoryquick review.
  // Leave logoSrc unset until that file exists so the review template does not request a missing image.
} as const;

/**
 * POS product logos only — separate from hub data to avoid circular imports with the software pick registry.
 */

export const POS_LOGOS = {
  square: "/Logos/square.jpeg",
  shopify: "/Logos/shopify.jpeg",
  lightspeed: "/Logos/lightspeed.png",
  clover: "/Logos/clover.png",
  toast: "/Logos/toast.png",
  revel: "/Logos/revel.png",
  vend: "/Logos/vend.jpeg",
  touchbistro: "/Logos/touchbistro.jpeg",
  eposNow: "/Logos/eposnow.jpeg",
  // FTx POS logo is not in the repo yet. When the official file arrives, save it as
  // public/Logos/ftx-pos.png (PNG or JPEG, same folder as the other POS logos)
  // and add: ftxPos: "/Logos/ftx-pos.png",
  // Then set logoSrc: POS_LOGOS.ftxPos on the ftx-pos review.
  // Leave logoSrc unset until that file exists so the review template does not request a missing image.
} as const;

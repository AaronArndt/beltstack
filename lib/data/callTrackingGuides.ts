export type CallTrackingGuideItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const CALL_TRACKING_GUIDES: CallTrackingGuideItem[] = [
  {
    slug: "what-is-call-tracking",
    title: "What Is Call Tracking?",
    description:
      "Dynamic numbers, session data, and why marketers use call tracking to prove ROI for ads, SEO pages, and directories.",
    href: "/call-tracking/guides/what-is-call-tracking",
  },
  {
    slug: "how-call-tracking-works",
    title: "How Call Tracking Works",
    description:
      "DNI swap scripts, number pools, CRM handoffs, and QA habits that keep contractor data trustworthy.",
    href: "/call-tracking/guides/how-call-tracking-works",
  },
  {
    slug: "call-tracking-for-contractors",
    title: "Call Tracking for Contractors",
    description:
      "LSA, PPC, and organic calls for trades—setup, tagging, and how to measure booked jobs not just rings.",
    href: "/call-tracking/guides/call-tracking-for-contractors",
  },
  {
    slug: "call-tracking-vs-google-analytics",
    title: "Call Tracking vs Google Analytics",
    description:
      "When GA4 is enough, when you need telephony attribution, and how to avoid double-counting conversions.",
    href: "/call-tracking/guides/call-tracking-vs-google-analytics",
  },
  {
    slug: "how-to-track-phone-call-conversions",
    title: "How to Track Phone Call Conversions",
    description:
      "Goal definitions, CRM stages, and reporting that ties marketing sources to revenue for service businesses.",
    href: "/call-tracking/guides/how-to-track-phone-call-conversions",
  },
  {
    slug: "dynamic-number-insertion-explained",
    title: "Dynamic Number Insertion (DNI) Explained",
    description:
      "How DNI swaps phone numbers by source or session, what can break, and how to validate tagging in staging before launch.",
    href: "/call-tracking/guides/dynamic-number-insertion-explained",
  },
  {
    slug: "call-tracking-for-multi-location-businesses",
    title: "Call Tracking for Multi-Location Businesses",
    description:
      "Pools per location, franchise reporting, and rollup dashboards—what to configure before scaling beyond a single storefront.",
    href: "/call-tracking/guides/call-tracking-for-multi-location-businesses",
  },
  {
    slug: "call-tracking-with-google-ads-and-lsa",
    title: "Call Tracking with Google Ads & Local Services Ads",
    description:
      "GCLID, forwarding numbers, LSA call labeling, and avoiding double-counted conversions—integration concepts for search advertisers.",
    href: "/call-tracking/guides/call-tracking-with-google-ads-and-lsa",
  },
];

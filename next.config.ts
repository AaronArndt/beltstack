import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/payroll/reviews/:slug", destination: "/payroll/review/:slug", permanent: true },
      { source: "/payroll/reviews/:slug/", destination: "/payroll/review/:slug", permanent: true },
      { source: "/payroll/providers/:slug", destination: "/payroll/review/:slug", permanent: true },
      { source: "/payroll/providers/:slug/", destination: "/payroll/review/:slug", permanent: true },
      { source: "/payroll/provider/:slug", destination: "/payroll/review/:slug", permanent: true },
      { source: "/payroll/provider/:slug/", destination: "/payroll/review/:slug", permanent: true },
      // Legacy trade URLs → best-for pages
      { source: "/payroll/trades/electrical", destination: "/payroll/best-for/electricians", permanent: true },
      { source: "/payroll/trades/plumbing", destination: "/payroll/best-for/plumbing", permanent: true },
      { source: "/payroll/trades/landscaping", destination: "/payroll/best-for/landscaping", permanent: true },
      { source: "/payroll/trades/construction", destination: "/payroll/best-for/construction", permanent: true },
      { source: "/payroll/trades/roofing", destination: "/payroll/best-for/roofing", permanent: true },
      { source: "/payroll/trades/hvac", destination: "/payroll/best-for/hvac", permanent: true },
      { source: "/payroll/trades/cleaning", destination: "/payroll/best-for/cleaning-business", permanent: true },
      { source: "/payroll/best-for/cleaning", destination: "/payroll/best-for/cleaning-business", permanent: true },
      { source: "/payroll/trades/painters", destination: "/payroll/best-for/painters", permanent: true },
      { source: "/payroll/trades/pest-control", destination: "/payroll/best-for/pest-control", permanent: true },
      { source: "/payroll/trades/lawn-care", destination: "/payroll/best-for/lawn-care", permanent: true },
      { source: "/payroll/trades/tree-service", destination: "/payroll/best-for/tree-service", permanent: true },
      { source: "/payroll/trades/remodeling-contractors", destination: "/payroll/best-for/remodeling-contractors", permanent: true },
      { source: "/payroll/trades/general-contractors", destination: "/payroll/best-for/general-contractors", permanent: true },
      { source: "/payroll/trades/handyman-business", destination: "/payroll/best-for/handyman-business", permanent: true },
      { source: "/payroll/trades/pool-service", destination: "/payroll/best-for/pool-service", permanent: true },
      { source: "/payroll/trades/home-services", destination: "/payroll/best-for/home-services", permanent: true },
      { source: "/payroll/trades/property-management", destination: "/payroll/best-for/property-management", permanent: true },
      { source: "/payroll/trades/maintenance-companies", destination: "/payroll/best-for/maintenance-companies", permanent: true },
      { source: "/payroll/trades/auto-repair", destination: "/payroll/best-for/auto-repair", permanent: true },
      { source: "/payroll/trades/restaurants", destination: "/payroll/best-for/restaurants", permanent: true },
      { source: "/payroll/trades/retail", destination: "/payroll/best-for/retail", permanent: true },
      { source: "/payroll/trades/agriculture", destination: "/payroll/best-for/agriculture", permanent: true },
      { source: "/payroll/trades/nonprofits", destination: "/payroll/best-for/nonprofits", permanent: true },
      { source: "/website-builders/review/wordpress-com", destination: "/website-builders/review/wordpress", permanent: true },
      { source: "/website-builders/review/wordpress-com/", destination: "/website-builders/review/wordpress", permanent: true },
    ];
  },
};

export default nextConfig;

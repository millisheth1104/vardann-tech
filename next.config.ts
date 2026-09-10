import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The Destructive Testing page was renamed to Metallography and
        // Material Analysis. Keep the old URL working for anything already
        // linking to or indexing it.
        source: "/services/destructive-testing",
        destination: "/services/metallography-material-analysis",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

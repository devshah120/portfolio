import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  async redirects() {
    return [
      // Project renamed to Campus360; keep the old case-study URL working.
      {
        source: "/projects/student-life-cycle-management-system",
        destination: "/projects/campus360",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/(cv|resume)',
        destination: "https://drive.google.com/file/d/16Bn8xX8vIYZ4tNV3Axu7T6dLeI4-dXQG/view?usp=sharing",
        permanent: true,
      },
      {
        source: '/(dp|pfp|png|avatar|headshot)',
        destination: "/s2sharpit.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

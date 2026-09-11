import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? "/themanojportfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

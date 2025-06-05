import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.freepik.com",
      "images.unsplash.com",
      "qcrims.raybitprojects.com",
    ],

    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5050", // include the port if needed
        pathname: "/**",
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);

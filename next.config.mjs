import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.freepik.com",
      "images.unsplash.com",
      "qcrims.raybitprojects.com",
      "192.168.100.22",
      "192.168.100.10",
      "192.168.100.20",
      "192.168.100.37",
      "192.168.100.11",
      "qrmenuserver.raybitprojects.comnull",
      "qrmenuserver.raybitprojects.com",
      "raybittechnologies.com",
      "qrmenuserver.raybitprojects.comhttps",
    ],

    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5050",
        pathname: "/**",
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);

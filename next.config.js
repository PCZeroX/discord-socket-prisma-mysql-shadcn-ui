/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
        port: "",
      },
    ],
  },
  // webpack: (config, { isServer }) => {
  //   isServer && (config.externals = [...config.externals, "socket.io-client"]);
  //   return config;
  // },
};

module.exports = nextConfig;

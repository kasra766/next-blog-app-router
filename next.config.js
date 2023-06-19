/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.unsplash.com",
            pathname: "/**",
          },
          {
            protocol:"https",
            hostname:"wembleypark.com",
            pathname:"/**",
          },{
            protocol:"https",
            hostname:"hydeparkwinterwonderland.com",
            pathname:"/**"
          }
        ],
      },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/daucwpsi8/image/upload/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/air-conditioning-not-cooling-london-2",
        destination: "/blog/air-conditioning-not-cooling-london",
        permanent: true,
      },
      {
        source: "/blog/do-you-need-a-power-flush-london-2",
        destination: "/blog/do-you-need-a-power-flush-london",
        permanent: true,
      },
      {
        source: "/blog/low-water-pressure-london-home-2",
        destination: "/blog/low-water-pressure-london-home",
        permanent: true,
      },
      {
        source: "/blog/why-is-my-radiator-not-heating-up-2",
        destination: "/blog/why-is-my-radiator-not-heating-up",
        permanent: true,
      },
      {
        source: "/services/gas/boiler-installation",
        destination: "/services/boiler/new-installation",
        permanent: true,
      },
      {
        source: "/services/gas/annual-checks",
        destination: "/services/gas/safety-certificates",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.londonclimatesystems.com",
          },
        ],
        destination: "https://londonclimatesystems.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
}

export default nextConfig

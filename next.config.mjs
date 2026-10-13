/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
  async redirects() {
    return [
      // Booking shortcuts → Cindy's Cal.com event types
      {
        source: '/book',
        destination: 'https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true',
        permanent: false,
      },
      {
        source: '/exchange',
        destination:
          'https://cal.com/cindybaez/accelerated-evolution-exchange-session?overlayCalendar=true',
        permanent: false,
      },
      // Every earlier / alternate spelling → the canonical /class
      { source: '/selfdefense', destination: '/class', permanent: true },
      { source: '/selfdefence', destination: '/class', permanent: true },
      { source: '/v2/self-defense', destination: '/class', permanent: true },
      { source: '/self-defense', destination: '/class', permanent: true },
      { source: '/self-defence', destination: '/class', permanent: true },
    ]
  },
}

export default nextConfig

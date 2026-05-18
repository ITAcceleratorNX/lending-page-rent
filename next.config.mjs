/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 15+ разрешает только перечисленные quality для <Image />
    qualities: [75, 80, 82, 85, 88, 90, 92],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 448],
    minimumCacheTTL: 2678400, // ~31 дн.
  },
}

export default nextConfig

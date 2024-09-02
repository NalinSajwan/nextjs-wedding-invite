const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
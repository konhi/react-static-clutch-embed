module.exports = {
  reactStrictMode: true,
  transpilePackages: ["static-clutch-embed"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
      'canvas': 'commonjs canvas',
    })
    return config
  },
};

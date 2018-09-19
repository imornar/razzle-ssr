const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');

module.exports = {
  modify: (config, { target, dev }, webpack) => {

    // Lets use analyzer only on builds, since in development webpack does not run tree shake
    if (!dev) config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));

    // First we need prevent file-loader to target svg files
    config.module.rules[config.module.rules.findIndex(makeLoaderFinder('file-loader'))].exclude.push(/\.svg$/);

    // Then we can use react-svg-loader for svg files
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }, {
        loader: "react-svg-loader",
        options: {
          jsx: true // true outputs JSX tags
        }
      }]
    });

    return config;
  },
};

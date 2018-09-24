// base config is in node_modules/razzle/node_modules/razzle/config/createConfig.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const extendedConfig = config;

    // on page refresh these files are created and not cleaned up
    // investigated a bit but looks like there is no solution for this,
    // so saving those files in separate folder so its easier to clean up
    // TODO: see if this is possible to solve in cleaner fashion
    extendedConfig.output.hotUpdateChunkFilename = `hot/[id].[hash]-hot-update.js`;
    extendedConfig.output.hotUpdateMainFilename = `hot/[hash]-hot-update.json`;

    // Lets use analyzer only on builds, since in development webpack does not run tree shake
    if (!dev) extendedConfig.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));

    // reduces package bundle size
    extendedConfig.plugins.push(new LodashModuleReplacementPlugin);

    // First we need prevent file-loader to target svg files
    extendedConfig.module.rules[extendedConfig.module.rules.findIndex(makeLoaderFinder('file-loader'))].exclude.push(/\.svg$/);

    // Then we can use react-svg-loader for svg files
    extendedConfig.module.rules.push({
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

    return extendedConfig;
  },
};

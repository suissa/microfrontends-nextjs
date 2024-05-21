const NextFederationPlugin = require('@module-federation/nextjs-mf');
const path = require('path');

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    });

    config.plugins.push(
      new NextFederationPlugin({
        name: 'courseSearch',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './CourseSearch': './src/components/CourseSearch.js',
        },
        shared: {},
      })
    );

    return config;
  },
};

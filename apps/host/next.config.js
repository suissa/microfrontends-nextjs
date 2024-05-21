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
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          courseSearch: 'courseSearch@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          courseList: 'courseList@http://localhost:3000/_next/static/chunks/remoteEntry.js',
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};

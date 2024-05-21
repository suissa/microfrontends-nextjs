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
        name: 'courseList',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './CourseList': './src/components/CourseList.js',
        },
        shared: {},
      })
    );

    return config;
  },
};

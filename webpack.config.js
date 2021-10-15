const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  externals: [nodeExternals()],
  node: false,
  optimization: {
    minimize: false,
  },
  plugins: [new webpack.EnvironmentPlugin(slsw.lib.serverless.service.provider.environment)],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false, // rootのbabelrcもロードされるので止める
            ...JSON.parse(fs.readFileSync(path.resolve(__dirname, '.babelrc'))),
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};

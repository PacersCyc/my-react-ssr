const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [
    nodeExternals()
  ],
}

module.exports = merge(baseConfig, serverConfig);
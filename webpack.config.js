const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const DIST_DIR   = path.join(__dirname, 'dist'),
      DEV_DIR = path.join(__dirname, 'src');

module.exports = {
  context: DEV_DIR,

  entry: [
    path.join(__dirname, 'src/server.js')
  ],

  output: {
    path: DIST_DIR,
    filename: "server.min.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  plugins: [
    new UglifyJSPlugin({
      extractComments: true
    })
  ],

  target: 'node',

  node: {
    fs: 'empty',
    net: 'empty',
    module: 'empty',
    tls: 'empty',
    vertx: 'empty'
  }
};
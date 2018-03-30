const path = require('path')
const webpack = require('webpack')
const u = require('./webpack.util.js')

// lists all files rooted at the directory `base`
const fileList = base => u.getFilesIn(u.getDirPath(base))

// const main = './src/index.js'
const main = './src/alt-index.js'
const indexHtml = path.resolve(__dirname, 'src', 'index.html')
const vendor = fileList('vendor')
const assets = fileList('assets')

const sourcePaths = [main, indexHtml].concat(vendor).concat(assets)

module.exports = {
  entry: sourcePaths,

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
  },

  module: {
    rules: [
      {
        test: indexHtml,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },

      {
        test: assets.concat(vendor),
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },

      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /vendor/,
        ],
        loader: 'babel-loader',
      },
    ],
  },
};

/*
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
    }),
  ],
};
*/
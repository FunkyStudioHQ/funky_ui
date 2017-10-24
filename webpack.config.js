const webpack = require('webpack');

const ExtractText = require('extract-text-webpack-plugin');
const CopyWebpack = require('copy-webpack-plugin');
const PurifyCSS = require('purifycss-webpack');
const Compression = require('compression-webpack-plugin');
const Autoprefixer = require('autoprefixer');

const path = require('path');
const glob = require('glob');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: false, //(!isProduction && 'source-map'),
  entry: {
    app:   [
      path.resolve(__dirname, './demo/app.scss'),
      path.resolve(__dirname, './demo/app.js'),
    ]
  },
  stats: {
    assets: true,
    hash: false,
    version: true,
    chunks: false,
    modules: false,
    children: false,
    source: false,
    timings: false
  },
  output: {
    path: path.resolve(__dirname, "./demo/assets/"),
    filename: "js/[name].js"
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname,
        loader: "babel-loader"
      },
      {
        test: /\.(sass|scss)$/,
        include: [path.resolve(__dirname, './scss'), path.resolve(__dirname, './demo')],
        loader: ExtractText.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, './node_modules/font-awesome/scss'),
                  path.resolve(__dirname, './node_modules/bourbon'),
                  path.resolve(__dirname, './node_modules/bourbon-neat')
                ]
              }
            }
          ]
        }),
      },
      {
        test: /\.(jpe?g|gif|png|eot|svg|woff|woff2|ttf)$/,
        loader: 'file-loader?name=[path][name].[ext]&context=./'
      },
      {
        test: /\.styl$/,
        use: [ "style-loader", "css-loader"]
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new CopyWebpack([
      { from: path.resolve(__dirname, './node_modules/font-awesome/fonts'), to: 'fonts/font-awesome' }
    ]),
    new ExtractText({filename: 'css/[name].css'}),
    Autoprefixer
  ]
};

if (isProduction) {
  module.exports.devtool = false
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      ecma: 7,
      compress: { warnings: false }
    }),
    new Compression({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 0, //10240,
      minRatio: 0.8
    })
  ])
}

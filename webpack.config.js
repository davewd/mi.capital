const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  cache: false,
  devtool: 'source-map',
  devServer: {
    inline: true,
    port: 3333
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx' ]
  },
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    path.resolve('src/index.jsx'),
  ],
  output: {
    path: path.resolve('build'),
    filename: 'static/js/bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [ 
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
      loader: 'url-loader',
      options: {
      limit: 10000,
      mimetype: 'application/font-woff' }
    },
    {
      exclude: [
        /\.html$/,
        /\.(js|jsx)$/,
        /\.scss$/,
        /\.css$/,
        /\.json$/,
        /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/
      ],
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\.css$/,
      use: [ { loader: 'style-loader' },
      { loader: 'css-loader',
       options: { importLoaders: true } 
     },
      { loader: 'postcss-loader',
      options: { postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ]
      }),
    ];
  }
}
    } ] 
  },
    {
      test: /\.scss$/,
      use:[
      {
      loader: 'style-loader'},
      {loader:'css-loader',
      options: {importLoaders: true,
        localIdentName: '[local]_[hash:base64:5]' } },
      { loader: 'postcss-loader',
      options: { postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ]
      }),
    ];
  }
} }
]
    },
    {
      test: /\.(js|jsx)$/,
      include: [/(src|test)/],
      loader: 'babel-loader'
    },
    {
  test: /\.svgico/,
  loader: 'raw-loader'
}]
  }
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve('src'),
  entry: './js/game.js',
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader', options: {
                sourceMap: true
            }
        }, {
            loader: 'sass-loader', options: {
                sourceMap: true
            }
      }]
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new CopyPlugin([
      { from: 'src/img', to: 'img' }
    ])
  ]
};
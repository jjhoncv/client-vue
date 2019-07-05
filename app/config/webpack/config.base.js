const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

const {
  dotenvOverride,
  createVarsDefinePlugin
} = require('./utils');
const rootPath = path.join(__dirname, '../../');

dotenvOverride();

const publicPath = process.env.PATH_PUBLIC;

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': path.join(rootPath, 'src/index.js')
  },
  output: {
    path: path.join(rootPath, 'dist'),
    publicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@app': rootPath,
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          transpileOnly: true,
        }
      }, {
        test: /\.(jpe?g|png|svg|woff2|woff|ttf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            publicPath
          },
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(createVarsDefinePlugin()),
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(rootPath, 'public/index.html')
    }),
    new VueLoaderPlugin()
  ]
}
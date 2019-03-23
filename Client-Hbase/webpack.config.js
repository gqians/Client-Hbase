"use strict";

const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js' 
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'], 
    alias: {
      //'jquery': 'javascripts/layui/lay/modules/jquery.js',
      //'jQuery': 'javascripts/layui/lay/modules/jquery.js',
      //'layui': 'javascripts/layui',
      //'layui-modules': 'javascripts/layui/lay/modules'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery":"jquery"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: 'views/main.ejs',
    inline: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,//图片打包
        loader: 'url-loader',
        options: {
          limit: 20000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,//字体打包
        loader: 'url-loader',
        options: {
          limit: 20000
        }
      }
    ]
  }
};


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
     // layer: __dirname + '/node_modules/layui-src/src/layer.js',
     // "layer.css": __dirname + '/node_modules/layui-src/src/css/layui.css'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQury: "jquery",
      "window.jQuery":"jquery"
    })
  ],
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
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,//字体打包
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
};


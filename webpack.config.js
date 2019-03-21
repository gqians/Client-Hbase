const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js'
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
            test:  /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
               presets: ['@babel/preset-env']
             }
           }
         }
      ]
   }
};


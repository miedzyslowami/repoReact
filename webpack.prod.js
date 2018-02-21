const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
     app: './src/js/index.jsx'
   },
  devtool: 'source-map',
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'public')
   },

     plugins: [
     new CleanWebpackPlugin(['public']),
     new HtmlWebpackPlugin({
       title: 'Zadanie rekrutacyjne - Produkcja',
        template: './src/index.html'
     }),
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
      })
   ],
   module: {
     rules: [

       {
         test: /\.jsx$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         options:{
           presets:['env','react','stage-2']
         }
       },
       {
       test: /\.html$/,
       loader: 'html-loader'
     }

     ]
   }
 }

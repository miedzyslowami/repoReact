const path = require("path");
module.exports = {
  entry: ['./src/js/index.jsx'],
  output: {
    path: path.resolve("dev/js"),
    filename: "app.js"
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{
          presets:['env','stage-2','react']
        }
      },
        {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  }
}

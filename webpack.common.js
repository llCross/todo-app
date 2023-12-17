const path = require('path');

module.exports = {
  entry: './src/index.js',
  
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: 'assets'
          }
        }
      }
    ]
  }
  
};
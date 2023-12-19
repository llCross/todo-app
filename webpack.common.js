const path = require('path');

module.exports = {
  entry: './src/index.js',
  
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
    ]
  }
  
};
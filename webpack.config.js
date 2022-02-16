const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],

  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'src'),
    // },
    static: ['./src'],
    compress: true,
    port: 9000,
  },
};
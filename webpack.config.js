const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // you can have multiple entry points for separate js here are some examples for it
  // https://webpack.js.org/guides/output-management/
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  // this helps babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
  ],
};

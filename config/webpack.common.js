const paths = require('./paths.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: paths.src + '/scripts/main.js',
  output: {
    path: paths.build,
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  }
}
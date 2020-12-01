const paths = require('./paths.js')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
      {
        test: /\.(scss|css)$/,
        use: [
          {loader: 'file-loader', options: {name: '[name].[ext]'}},
          {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
          {loader: 'sass-loader', options: {sourceMap: true}}
        ]
      },
    ]
  }
}
const paths = require('./paths.js')

module.exports = {
  entry: paths.src + '/scripts/main.js',
  output: {
    path: paths.build,
  },
}
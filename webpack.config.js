const path = require('path');

const webpack = require('webpack');

// webpack plugins
const DefinePlugin = webpack.DefinePlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


module.exports = {
  target: 'web',
  entry: {
    entry1: './src/entry1',
    entry2: './src/entry2'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    jsonpFunction: 'wpck',
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CommonsChunkPlugin({
      name: 'common-a',
      minChunks: (module, count) => (
        count > 1 &&
        module.userRequest.match(/src\/modules\/module-a/)
      )
    }),
    new CommonsChunkPlugin({
      name: 'common-b',
      minChunks: (module, count) => (
        count > 1 &&
        module.userRequest.match(/src\/modules\/module-b/)
      )
    }),
  ]
};

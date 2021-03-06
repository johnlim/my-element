var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['babel-polyfill', '../my-element.js'],
  output: {
    path: path.resolve(__dirname, '../build/js/'),
    filename: 'my-element.min.js'
  },
  devServer: {
    contentBase: './',
    https: true,
    port: 3000
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        test: /\.js$/,
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

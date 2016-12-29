//var webpack = require('webpack');//压缩
var ET = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/app.js',

  output: {
    path: __dirname + '/prd/',
    //filename: 'bundle-[hash].js' //版本号控制
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },

      {
        test: /\.js$/,
         loader: 'babel-loader?presets[]=es2015'
        // loader: 'babel',
        // query: {
        //   "presets": ['es2015']
        // }
      },

      {
        test: /\.scss$/,
        // loader: 'style!css!sass'
        loader: ET.extract('style', 'css!sass')
      },
      {
        test:/\.html$/,
        loader:'string'
      }
    ]
  },

  devServer: {
    contentBase: __dirname + '/prd',
    port: 80,
    host: 'localhost',
    /*inline: true,
    hot: true,
    progress: true,*/
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),//压缩
    new ET('bundle.css')
  ]
}

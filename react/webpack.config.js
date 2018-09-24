const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/js/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist'
  },
  module: {
    rules: [
      // Aquí van los loaders
      {
        // test: qué tipo de archivo quiero reconocer.,
        // use: qué loader se va a encargar del archivo
      test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // {
      //   test: /\json$/,
      //   use: 'json-loader'
      // },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'fonts/',
              publicPath: '../fonts/'
            }
          }
        ]
      },
      {
        // test: qué tipo de archivo quiero reconocer.,
        // use: qué loader se va a encargar del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader', 'css-loader'],
          // fallback: 'style-loader',
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    // Aquí van los plugins
    new ExtractTextPlugin("css/[name].css")
  ]
}

const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Aquí van los loaders
      {
        // test: qué tipo de archivo quiero reconocer.,
        // use: qué loader se va a encargar del archivo
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

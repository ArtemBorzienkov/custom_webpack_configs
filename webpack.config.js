const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, loader: 'babel-loader'},
      {test: /\.(png|svg|jpg|gif)$/,use: ['file-loader']},
      {test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
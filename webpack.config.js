// *
const path = require('path');

// * バンドルの起点を設定
module.exports = {
  entry: {
    bundle: './src/index.ts'
  },
  // *出力先を設定する
  output: {
    path: path.join(__dirname, 'dist'),
    // * バンドルされたファイル
    filename: '[name].js'
  },
  // *
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}
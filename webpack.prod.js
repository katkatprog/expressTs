const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: 'production',
  entry: './dist/frontend/index.js',//エントリーポイント
  output: {
    filename: 'bundle.js',//出力するファイル名
    path: path.resolve(__dirname, 'public', 'javascripts')//ファイル出力先ディレクトリ
  },
  // module: {
  //   rules: [{
  //     test: /\.ts$/,
  //     use: 'ts-loader',
  //     exclude: /node_modules/
  //   }]
  // },
  resolve: {
    extensions: ['.js']
    //typescriptでは、import時に拡張子書かない。しかしそれだけではwebpackエラー出る。そのための拡張子の補完。
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
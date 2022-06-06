const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/frontend/index.ts',//エントリーポイント
  output: {
    filename: 'bundle.js',//出力するファイル名
    path: path.resolve(__dirname, 'public', 'javascripts'),//ファイル出力先ディレクトリ
    publicPath: path.resolve('public', 'javascripts')//webpack-dev-serverで実行時、bundle.jsの格納場所(ファイルには現れない)
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
    //typescriptでは、import時に拡張子書かない。しかしそれだけではwebpackエラー出る。そのための拡張子の補完。
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  }
}
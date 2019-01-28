const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  mode: "production",
  entry: './src/client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, 
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          plugins: ['@babel/plugin-proposal-class-properties']
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: [{ loader: "url-loader?limit=8192" }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
		// allows users to leave off .js or .jsx when they import files
		extensions: ['.js', '.jsx']
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    contentBase: path.resolve('dist')
  }
}
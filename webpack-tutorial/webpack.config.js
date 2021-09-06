const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),                 // точка входа
  },

  output: {
    path: path.resolve(__dirname, "./dist"),                          // точка выхода
    filename: "[name].bundle.js",
  },

  plugins: [
    new CleanWebpackPlugin(),                                        // плагин для очитки папки dist
    new HtmlWebpackPlugin({                                          // настройка html с опциями
      title: "My App",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
      inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin(),                        // 
  ],

  module: {
    rules: [
      {
        test: /\.js$/,                                               // для работы с файлами 
        exclude: "/node_modules/",
        use: ["babel-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,                  // для работы с картинками
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      { test: /\.hbs$/, exclude: /node_modules/, use: "handlebars-loader" }
    ],
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
};

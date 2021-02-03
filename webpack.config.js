//This doc is configuration of webpack
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "./src/"),
    publicPath: "/",
    host: "127.0.0.1",
    port: 3000,
    stats: { colors: true },
    hot: true, //hot start
  },
  entry: ["./src/main.js", "./src/dev.js"],
  // resolve: { extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"] },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, //To rule out 'node_modules'
        use: {
          loader: "babel-loader",
          // options: {
          //   //Babel escape configuration options
          //   babelrc: false,
          //   presets: [
          //     require.resolve("@babel/preset-react"),
          //     [require.resolve("@babel/preset-env"), { modules: false }],
          //   ],
          //   cacheDirectory: true,
          // },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react app",
      filename: "index.html",
      template: "./src/index.html",
      // inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

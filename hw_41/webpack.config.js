const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackDevServer = require("webpack-dev-server");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
module.exports = {
  entry: "./client/script.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "script.js",
  },
  plugins: [
    // new ImageMinimizerPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "client/assets"),
          to: path.join(__dirname, "dist/assets"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client", "index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|scc)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new ImageMinimizerPlugin()],
  },
  devServer: {
    watchFiles: path.join(__dirname, "client"),
    port: 3000,
  },
};

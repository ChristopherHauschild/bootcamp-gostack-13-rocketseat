const path = require("path");

// __dirname > inicia pelo repositório que arquivo se encontra
module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
};

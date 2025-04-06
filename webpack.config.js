const path = require("path");

module.exports = {
  entry: "./src/index.js", // The entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // The directory where the bundled files will go
    filename: "bundle.js", // The name of the bundled file
  },
  ignoreWarnings: [/Failed to parse source map/], // Ignore warnings related to source maps
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing without file extensions
  },
  stats: {
    warningsFilter: /react-datepicker/, // Ignore warnings related to react-datepicker
  },
};

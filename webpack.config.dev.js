const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

// export for webpack in dev mode using CommonJs style
module.exports = {
	mode: "development",
	target: "web",
	devtool: "cheap-module-source-map", // use to show original code even after transpiler changes it
	entry: "./src/index",
	output: {
		// For DEV env webpack outputs bundled code in RAM and not at particular location
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js" // only in case of env other than DEV
	},
	devServer: {
		stats: "minimal", // less info in the server log
		overlay: true, // if true then shows only compiler errors in browser else show full compiler errors and warnings
		historyApiFallback: true, // index.html page will be served in case of 404 response
		disableHostCheck: true, // NOT Recomended for PROD env , it bypassed host checking leading to DNS rebinding attack
		headers: { "Access-Control-Allow-Origin": "*" },
		https: false
	},

	plugins: [
		new webpack.DefinePlugin({
			"process.env.API_URL": JSON.stringify("http://localhost:3001")
		  }),
		new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
		})
	],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

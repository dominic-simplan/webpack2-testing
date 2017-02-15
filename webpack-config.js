var path = require('path');
var webpack = require( "webpack" );
var HtmlWebpackPlugin = require( "html-webpack-plugin" );
var GlobalizePlugin = require( "globalize-webpack-plugin" );

module.exports = {
  entry: {
	  main: './app/index.ts',
	  vendor: [
			"globalize",
			"globalize/dist/globalize-runtime/number",
			"globalize/dist/globalize-runtime/currency",
			"globalize/dist/globalize-runtime/date",
			"globalize/dist/globalize-runtime/message",
			"globalize/dist/globalize-runtime/plural",
			"globalize/dist/globalize-runtime/relative-time",
			"globalize/dist/globalize-runtime/unit"
]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     },
   ]
 },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
		new HtmlWebpackPlugin({
			production: true,
			template: "./index-template.html"
		}),
		new GlobalizePlugin({
			production: true,
			developmentLocale: "en",
			supportedLocales: [ "ar", "de", "en", "es", "pt", "ru", "zh" ],
			messages: "messages/[locale].json",
			output: "i18n/[locale].[hash].js"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor", 
			filename: "vendor.js",
			minChunks: Infinity,
		}),
  ]
};

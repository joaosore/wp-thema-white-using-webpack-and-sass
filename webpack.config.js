const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve('dist'),
		filename: './js/main.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ 
						loader: MiniCssExtractPlugin.loader
					},
					"css-loader",
					"sass-loader"
				]
			},
			{ 
				test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, 
				loader: 'file-loader?name=./fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./css/[name].css",
			chunkFilename: './css/[name].css',
		}) 
	]
}
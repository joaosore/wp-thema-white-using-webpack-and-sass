const path = require('path');
const webpack = require('webpack');
const glob = require('glob-all');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: [
		'./src/js/index.js',
		'./src/scss/index.scss'
	],
	output: {
		path: path.resolve('dist'),
		filename: './js/main.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{ loader: 'css-loader', options: { minimize: true } }, 'sass-loader']
				})
			},
			{ 
				test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, 
				loader: 'file-loader?name=./fonts/[name].[ext]'
			},
			{ 
				test: /\.(png|jpg?)(\?[a-z0-9=&.]+)?$/, 
				loader: 'file-loader?name=./imgs/[name].[ext]'
			},
			{ 
				test: /\.ts$/,
				 use: 'ts-loader' 
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "css/[name].css"
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
		}),
		new webpack.ProvidePlugin({
	   		$: "jquery",
	    	jQuery: "jquery",
	    	"window.jQuery": "jquery"
	    }),
	],
	optimization: {
		minimize: true
	}
}
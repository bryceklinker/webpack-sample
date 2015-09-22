var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: path.join(__dirname, 'app', 'entry.js')
	},
	context: __dirname,
	devtool: 'source-map',
	output: {
		filename: 'dist/js/[name].bundle.js',
		sourceMapFilename: '[file].map',
		publicPath: path.join(__dirname, 'dist')
	},
	resolve: {
		extensions: ['', '.ts', '.js', '.css']
	},
	plugins: [	
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('dist/css/[name].css')
	],
	module: {
		loaders: [
			{ 
				test: /\.ts$/, 
				loader: 'typescript-simple' 
			},
			{ 
				test: /\.css$/, 
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			}
		]
	}
};
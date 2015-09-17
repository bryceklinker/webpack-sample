var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		angular: [
			path.join(__dirname, 'node_modules', 'angular', 'index.js')
		],
		app: path.join(__dirname, 'app', 'app.ts')
	},
	devtool: 'source-map',
	output: {
		filename: 'dist/js/[name].bundle.js',
		sourceMapFilename: '[file].map'
	},
	resolve: {
		extensions: ['', '.ts', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'app', 'index.html'),
			inject: 'html',
			filename: path.join(__dirname, 'dist', 'index.html')
		})	
	],
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' }
		]
	}
};
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		angular: [
			path.join(__dirname, 'node_modules', 'angular', 'index.js'),
			path.join(__dirname, 'node_modules', 'angular-animate', 'index.js'),
			path.join(__dirname, 'node_modules', 'angular-aria', 'index.js'),
			path.join(__dirname, 'node_modules', 'angular-material', 'index.js')			
		],
		app: path.join(__dirname, 'app', 'app.ts')
	},
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
		new HtmlWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'app', 'app.html'),
			inject: 'body',
			filename: path.join(__dirname, 'dist', 'app.html'),
			chunks: {
				head: {
					css: [
						path.join(__dirname, 'node_modules', 'angular-material', 'angular-material.css')
					]
				}
			},
			css: [
				path.join(__dirname, 'node_modules', 'angular-material', 'angular-material.css')
			]
		})	
	],
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'typescript-simple' },
			{ test: /\.css$/, loader: 'style-loader!css-loader'}
		]
	}
};
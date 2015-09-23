var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function isTest(build) {
	return build === 'test';
}

function getEntry(build) {
	if (isTest(build)) {
		return {};
	}
	return {
		app: path.join(__dirname, 'app', 'entry.js')
	};
}

function getDevTool(build) {
	if (isTest(build)) {
		return 'inline-source-map';
	}

	return 'source-map';
}

function getOutput(build) {
	if (isTest(build)) {
		return {};
	}

	return {
		path: path.join(__dirname, 'dist'),
		filename: 'js/[name].bundle.js',
		sourceMapFilename: '[file].map',
		publicPath: path.join(__dirname, 'dist')
	};
}

function getResolve(build) {
	return {
		root: __dirname,
		extensions: ['', '.ts', '.js', '.css', '.html'],
		alias: {
			app: 'app'
		}
	};
}

function getPlugins(build) {
	return [
		new ExtractTextPlugin('css/[name].css'),
		new webpack.optimize.CommonsChunkPlugin('app', 'js/app.bundle.js'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				except: ['$super', '$', 'exports', 'require']
			}
		})
	];
}

function getLoaders(build) {
	return [
		{
			test: /\.ts$/,
			loader: 'typescript-simple'
		},
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
		},
		{
			test: /\.html$/,
			loader: 'ng-cache?prefix=[dir]/[dir]'
		}
	];
}

function getModule(build) {
	return {
		loaders: getLoaders(build)
	}
}

module.exports = function (build) {
	return {
		entry: getEntry(build),
		context: __dirname,
		devtool: getDevTool(build),
		output: getOutput(build),
		resolve: getResolve(build),
		plugins: getPlugins(build),
		module: getModule(build)
	}
}
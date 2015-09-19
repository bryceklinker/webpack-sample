module.exports = {
	devtool: 'inline-source-map',
	debug: false,
	stats: {colors: true, reasons: true},
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'typescript-simple' }
		]
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.ts', '.js'],
		alias: {
			app: 'app'
		}
	}
};
var webpackConfig = require('./webpack.test');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        { pattern: './app', watched: false},
        { pattern: 'spec.bundle.js', watched: false }
    ],
    exclude: [
    ],
    preprocessors: {
        'spec.bundle.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  })
}

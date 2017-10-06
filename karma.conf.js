const webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set(
        {
            basePath: '',
            frameworks: ['jasmine'],
            files: [
                'spec/**/*.spec.js'
            ],
            // reporters: ['mocha'],
            port: 9876,
            colors: true,
            logLevel: config.LOG_INFO,
            autoWatch: true,
            browsers: ['Chrome'],
            singleRun: true,
            concurrency: Infinity,
            webpack: webpackConfig,
            preprocessors: {
                'spec/**/*.spec.js': ['webpack']
            }
        }
    )
};

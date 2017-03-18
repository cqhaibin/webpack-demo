// Karma configuration
// Generated on Fri Mar 10 2017 17:45:58 GMT+0800 (中国标准时间)
var webpack = require('webpack');
var webpackConfig = require('../build/webpack.core.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var merge = require('webpack-merge');
webpackConfig = merge(webpackConfig,{
  plugins:[
    new ExtractTextPlugin('[name].css'), 
    new webpack.LoaderOptionsPlugin({
        options:{
            postcss:[autoprefixer()]
        }
    })
  ]
});
var config = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: ['../test/unit/index.js'],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../test/unit/index.js': ['webpack', 'sourcemap'],
      '../src/**/*.js': ['webpack','sourcemap', 'coverage', 'coverage'] //表示那些代码需要生成测试覆盖率报表
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    //webpack配置
    webpack: webpackConfig,
    coverageReporter:{
      dir: './converage',
      reporters:[
        { type: 'lcov', subdir: '.' },
        {type: 'text-summary'}
      ],

    }
  })
}
module.exports = config;

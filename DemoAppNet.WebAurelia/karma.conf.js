const path = require('path');
const bundleOutputDir = './wwwroot/dist';
const typescript = require('typescript');
const tsconfig = require('./tsconfig.json');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            bundleOutputDir + '/vendor.js',
            bundleOutputDir + '/app.js',
            'ClientApp/**/*spec.ts'
        ],
        exclude: [
        ],
        preprocessors: {
            'ClientApp/**/*spec.ts': ['typescript']
        },

        typescriptPreprocessor: {
            typescript: typescript,
            options: tsconfig.options
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        //browsers: ['IE'],
        singleRun: false,
        concurrency: Infinity,
        client: {
            args: ['aurelia-root', 'App']
        }
    });
};

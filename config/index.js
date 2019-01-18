'use strict';

const path = require('path');

module.exports = {
    dev: {
        //paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {

        },

        //webpack-dev-server 基本的一些配置信息
        host: 'localhost',
        port: 8080,
        autoOpenBrowser: false,
        errorOverplay: true, // 当错误时 全屏覆盖，默认禁用
        notifyOnErrors: true,
        poll: false,

        /**
         * Sorce Maps
         */
        devtool: 'cheap-module-eval-source-map',

        cssSourceMap: true

    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),
    
        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
    
        /**
         * Source Maps
         */
    
        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',
    
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
    
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
      }
}
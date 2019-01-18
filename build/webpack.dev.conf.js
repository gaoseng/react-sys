'use strict';
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');

const HOST = process.env.POST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: config.dev.devtool,

    mode: 'development',

    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
            { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
            ]
        },
        hot: true,
        contentBase: false,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverplay 
            ? { warnings:false, errors: true}
            : false ,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true,
        watchOptions: {
            poll: config.dev.poll
        }
    },

    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': require('../config/dev.env')
        //   }),
        new webpack.HotModuleReplacementPlugin(),  // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
        new webpack.NoEmitOnErrorsPlugin(), // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段
        
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
        }),

        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.dev.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ]

});

module.exports = new Promise((resolve,reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port,
    portfinder.getPort((err, port) => {
        // console.log(process.env.NODE_ENV);
        if(err) {
            reject(err);
        } else {
            process.env.PORT = port;

            devWebpackConfig.devServer.port = port;
            // console.log(port);
            devWebpackConfig.plugins.push(new FriendErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                    notes: [`Some additionnal notes to be displayed upon successful compilation`]
                },
                onErrors: config.dev.notifyOnErrors
                    ? utils.createNotifierCallback()
                    : undefined
                    
            }));

            resolve(devWebpackConfig);
        }
    });
});



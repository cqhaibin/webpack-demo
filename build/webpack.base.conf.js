var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var merge = require('webpack-merge');

var coreConfig = require('./webpack.core.conf');

function resolve(dir){
    return path.join(__dirname, '..', dir);
}
var config = merge(coreConfig, {
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 've.js'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            chunks: ['mb', 'mc']
        }),
        new HtmlWebpackPlugin({ //可以模板，直接引用files对象，是webpack中state对象
            title: '模板A',
            chunks: ['manifest', 'vendor', 'ma']
        }),
        new HtmlWebpackPlugin({
            filename: 'mb.[hash].html',
            title: '模板B',
            chunks: ['manifest','common', 'mb']
        }),
        new HtmlWebpackPlugin({
            filename: 'mc.html',
            title: '模板c',
            chunks: ['manifest','common', 'mc']
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:[autoprefixer()]  
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor', 'common']
        })
    ]
});
module.exports = config;
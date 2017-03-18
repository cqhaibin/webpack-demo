var config = require('./webpack.base.conf');
var webpack = require("webpack");
var WebpackDevServer = require('webpack-dev-server');

var compile = webpack(config);
compile.plugin('compilation', function( compilation, callbak) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callbak) {
        callbak()
    })
})
var isprod = process.env.NODE_ENV == 'prod' ? true: false;
if(isprod){
    compile.run(function(err,state){
        console.log(err);
    })
}else{
    var server = new WebpackDevServer(compile,{
        contentBase: './build',
        hot: true,
        historyApiFallback: true
    });
    server.listen(8080);
}

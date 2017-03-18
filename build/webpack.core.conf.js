var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
function resolve(dir){
    return path.join(__dirname, '..', dir);
}
var config = {
    entry:{
        ma: './src/ma', /** .必须要表示运行时的根目录，否则找不到文件，且不报错 */
        mb: './src/mb',
        mc: './src/mc',
        vendor: ['./src/vendor-jquery', 'bootstrap']
    },
    output: {
        path: resolve('dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].js'
    },
    resolve:{
        extensions:[".js"],
        modules:[
            resolve('src'),
            resolve("node_modules")
        ]
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test:/\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[hash].[ext]'
            }
        ]       
    }
};
module.exports = config;